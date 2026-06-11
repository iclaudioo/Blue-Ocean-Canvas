"use client";

import {
  useCallback,
  useEffect,
  useId,
  useRef,
  useState,
  type MouseEvent,
  type TouchEvent,
} from "react";
import type { Canvas } from "@/lib/schema";
import { useI18n } from "@/lib/i18n";
import { useTooltip } from "@/components/ui/Tooltip";

const PAD = { t: 35, r: 28, b: 55, l: 44 };
const RED = "var(--red)";
const BLUE = "var(--blue)";
const GRID = "#1c2a23";

type Pt = { x: number; y: number };

/** Smooth cubic bezier through the points, control x at the midpoint (legacy drawChart). */
function curvePath(pts: Pt[]): string {
  if (pts.length < 2) return "";
  let d = `M${pts[0].x},${pts[0].y}`;
  for (let j = 1; j < pts.length; j++) {
    const p = pts[j - 1];
    const c = pts[j];
    const mx = (p.x + c.x) / 2;
    d += ` C${mx},${p.y} ${mx},${c.y} ${c.x},${c.y}`;
  }
  return d;
}

function truncateLabel(s: string): string {
  return s.length > 16 ? s.slice(0, 15) + "…" : s;
}

type StrategyCanvasProps = {
  canvas: Canvas;
  editable?: boolean;
  onChange?: (blueOcean: number[]) => void;
  animate?: boolean;
};

export function StrategyCanvas({
  canvas,
  editable = false,
  onChange,
  animate = false,
}: StrategyCanvasProps) {
  const { t } = useI18n();
  const { show, hide, tooltip } = useTooltip();
  const rawId = useId();
  const uid = rawId.replace(/[^a-zA-Z0-9_-]/g, "");
  const gradRed = `gfr-${uid}`;
  const gradBlue = `gfb-${uid}`;

  const scrollRef = useRef<HTMLDivElement>(null);
  const [containerWidth, setContainerWidth] = useState(0);

  useEffect(() => {
    const el = scrollRef.current;
    if (!el) return;
    const ro = new ResizeObserver((entries) => {
      const cw = entries[0]?.contentRect.width;
      if (cw) setContainerWidth(cw);
    });
    ro.observe(el);
    return () => ro.disconnect();
  }, []);

  const factors = canvas.factors ?? [];
  const n = factors.length;
  // Guard for streaming: series may be shorter than factors.
  const industry = (canvas.industry ?? []).slice(0, n);
  const blueOcean = (canvas.blueOcean ?? []).slice(0, n);

  const wide = containerWidth >= 640;
  const minPerFactor = wide ? 110 : 80;
  const chartH = wide ? 360 : 280;
  const w = Math.max(containerWidth || 600, n * minPerFactor + PAD.l + PAD.r);

  const xP = useCallback(
    (i: number) =>
      n <= 1
        ? PAD.l + (w - PAD.l - PAD.r) / 2
        : PAD.l + (i / (n - 1)) * (w - PAD.l - PAD.r),
    [n, w]
  );
  const yP = useCallback(
    (v: number) => PAD.t + (chartH - PAD.t - PAD.b) * (1 - v / 5),
    [chartH]
  );

  const toPts = (series: number[]): Pt[] =>
    series.map((v, i) => ({ x: xP(i), y: yP(v) }));

  const fillPath = (series: number[]): string => {
    const line = curvePath(toPts(series));
    if (!line) return "";
    return `${line} L${xP(series.length - 1)},${yP(0)} L${xP(0)},${yP(0)} Z`;
  };

  const lineRed = curvePath(toPts(industry));
  const lineBlue = curvePath(toPts(blueOcean));
  const fillRed = fillPath(industry);
  const fillBlue = fillPath(blueOcean);

  const showDot = (
    e: MouseEvent<SVGCircleElement> | TouchEvent<SVGCircleElement>,
    series: "industry" | "blueOcean",
    i: number,
    v: number
  ) => {
    const touch = "touches" in e ? e.touches[0] : undefined;
    const cx = touch ? touch.clientX : (e as MouseEvent).clientX;
    const cy = touch ? touch.clientY : (e as MouseEvent).clientY;
    const color = series === "industry" ? RED : BLUE;
    const label =
      series === "industry" ? t("canvas.industry") : t("canvas.blueOcean");
    show(
      cx,
      cy,
      <span>
        <span style={{ color }}>{label}</span>
        {" · "}
        {factors[i]?.name ?? ""}: <b>{v}</b>/5
      </span>
    );
  };

  const handleSlider = (i: number, value: number) => {
    if (!onChange) return;
    const next = blueOcean.slice();
    next[i] = value;
    onChange(next);
  };

  const renderDots = (
    series: number[],
    seriesKey: "industry" | "blueOcean",
    color: string,
    baseDelay: number
  ) =>
    series.map((v, i) => {
      const cx = xP(i);
      const cy = yP(v);
      return (
        <g key={`${seriesKey}-${i}`}>
          <g
            className={animate ? "dot-pop" : undefined}
            style={
              animate
                ? {
                    animationDelay: `${baseDelay + i * 0.08}s`,
                    transformOrigin: `${cx}px ${cy}px`,
                  }
                : undefined
            }
          >
            <circle cx={cx} cy={cy} r={7} fill={color} opacity={0.15} />
            <circle
              cx={cx}
              cy={cy}
              r={4.5}
              fill={color}
              stroke="var(--bg)"
              strokeWidth={1.5}
            />
          </g>
          {/* Transparent hit area for hover/touch tooltips. */}
          <circle
            cx={cx}
            cy={cy}
            r={20}
            fill="transparent"
            className="cursor-pointer"
            onMouseEnter={(e) => showDot(e, seriesKey, i, v)}
            onMouseLeave={hide}
            onTouchStart={(e) => showDot(e, seriesKey, i, v)}
          />
        </g>
      );
    });

  return (
    <div className="overflow-hidden rounded-xl border border-line bg-surface">
      {/* Legend */}
      <div className="px-4 pb-2 pt-4 sm:px-6 sm:pt-5">
        <div className="flex items-center gap-[18px]">
          <span className="flex items-center gap-1.5 text-[0.78rem] font-semibold text-red">
            <span className="h-[3px] w-2.5 shrink-0 rounded-sm bg-red" />
            {t("canvas.industry")}
          </span>
          <span className="flex items-center gap-1.5 text-[0.78rem] font-semibold text-blue">
            <span className="h-[3px] w-2.5 shrink-0 rounded-sm bg-blue" />
            {t("canvas.blueOcean")}
          </span>
        </div>
        {editable && (
          <p className="mt-1.5 text-[0.75rem] leading-relaxed text-ink4">
            {t("canvas.hint")}
          </p>
        )}
      </div>

      {/* Chart */}
      <div
        ref={scrollRef}
        className="overflow-x-auto overflow-y-hidden pb-1 [-webkit-overflow-scrolling:touch]"
        onMouseLeave={hide}
      >
        <svg
          viewBox={`0 0 ${w} ${chartH}`}
          width={w}
          height={chartH}
          className="block"
          style={{ minWidth: w }}
          role="img"
          aria-label={`${t("canvas.industry")} / ${t("canvas.blueOcean")}`}
        >
          <defs>
            <linearGradient id={gradRed} x1="0" y1="0" x2="0" y2="1">
              <stop offset="0%" stopColor="#f06b58" stopOpacity={0.2} />
              <stop offset="100%" stopColor="#f06b58" stopOpacity={0} />
            </linearGradient>
            <linearGradient id={gradBlue} x1="0" y1="0" x2="0" y2="1">
              <stop offset="0%" stopColor="#58b4f0" stopOpacity={0.22} />
              <stop offset="100%" stopColor="#58b4f0" stopOpacity={0} />
            </linearGradient>
          </defs>

          {/* Horizontal 0-5 grid + labels */}
          {Array.from({ length: 6 }, (_, v) => (
            <g key={`gy-${v}`}>
              <line
                x1={PAD.l}
                y1={yP(v)}
                x2={w - PAD.r}
                y2={yP(v)}
                stroke={v === 0 ? "var(--border-l)" : GRID}
                strokeWidth={1}
              />
              <text
                x={PAD.l - 12}
                y={yP(v) + 4}
                fontSize={12}
                fontWeight={500}
                fill="var(--text3)"
                textAnchor="end"
              >
                {v}
              </text>
            </g>
          ))}

          {/* Dashed factor columns + truncated labels */}
          {factors.map((f, i) => (
            <g key={`gx-${i}`}>
              <line
                x1={xP(i)}
                y1={PAD.t}
                x2={xP(i)}
                y2={yP(0)}
                stroke={GRID}
                strokeWidth={1}
                strokeDasharray="2,4"
              />
              <text
                x={xP(i)}
                y={chartH - 16}
                fontSize={11}
                fontWeight={600}
                fill="var(--text2)"
                textAnchor="middle"
              >
                <title>{f.name}</title>
                {truncateLabel(f.name)}
              </text>
            </g>
          ))}

          {/* Gradient area fills */}
          {fillRed && (
            <path
              d={fillRed}
              fill={`url(#${gradRed})`}
              className={animate ? "fill-anim" : undefined}
            />
          )}
          {fillBlue && (
            <path
              d={fillBlue}
              fill={`url(#${gradBlue})`}
              className={animate ? "fill-anim" : undefined}
              style={animate ? { animationDelay: "0.6s" } : undefined}
            />
          )}

          {/* Value curves */}
          {lineRed && (
            <path
              d={lineRed}
              fill="none"
              stroke={RED}
              strokeWidth={3}
              strokeLinecap="round"
              className={animate ? "line-anim" : undefined}
            />
          )}
          {lineBlue && (
            <path
              d={lineBlue}
              fill="none"
              stroke={BLUE}
              strokeWidth={3}
              strokeLinecap="round"
              className={animate ? "line-anim" : undefined}
              style={animate ? { animationDelay: "0.5s" } : undefined}
            />
          )}

          {/* Data dots (halo + dot + hit area) */}
          {renderDots(industry, "industry", "#f06b58", 0.8)}
          {renderDots(blueOcean, "blueOcean", "#58b4f0", 1.2)}
        </svg>
      </div>

      {/* Slider panel */}
      {editable && (
        <div className="border-t border-line px-4 py-4 sm:px-6">
          {factors.map((f, i) => {
            const v = blueOcean[i];
            return (
              <div
                key={i}
                className="border-b border-line/50 py-2.5 last:border-b-0"
              >
                <div className="mb-0.5 text-[0.84rem] font-semibold text-ink2">
                  {f.name}
                </div>
                {f.rationale && (
                  <p className="mb-2 text-[0.74rem] leading-relaxed text-ink4">
                    {f.rationale}
                  </p>
                )}
                {typeof v === "number" ? (
                  <div className="flex items-center gap-3">
                    <input
                      type="range"
                      min={0}
                      max={5}
                      step={1}
                      value={v}
                      onChange={(e) => handleSlider(i, Number(e.target.value))}
                      className="slider sl-blue flex-1"
                      aria-label={`${t("canvas.blueOcean")} · ${f.name}`}
                    />
                    <span className="min-w-[18px] text-center text-[0.88rem] font-bold tabular-nums text-blue">
                      {v}
                    </span>
                  </div>
                ) : (
                  <div className="skeleton h-1.5 w-full rounded-full bg-surface2" />
                )}
              </div>
            );
          })}
        </div>
      )}

      {tooltip}
    </div>
  );
}
