"use client";

import { useMemo, useState, type MouseEvent, type TouchEvent } from "react";
import {
  UtilityLevers,
  UtilityStages,
  type UtilityLever,
  type UtilityMap,
  type UtilityStage,
} from "@/lib/schema";
import { useI18n } from "@/lib/i18n";
import { useTooltip } from "@/components/ui/Tooltip";

type Cell = UtilityMap["cells"][number];
type CellStatus = Cell["status"];

const STRIPES =
  "repeating-linear-gradient(45deg, color-mix(in srgb, var(--amber) 16%, transparent) 0 4px, transparent 4px 9px)";

const CELL_CLASS: Record<CellStatus, string> = {
  neutral: "border-line/60 bg-surface2/40",
  "industry-focus": "border-red-dim/40 bg-red/10 hover:border-red-dim",
  blocked: "border-amber/40 bg-amber/10 hover:border-amber/70",
  opportunity:
    "border-blue-dim/50 bg-blue/10 shadow-[0_0_12px_rgba(88,180,240,0.2)] hover:border-blue-dim",
};

function CellMark({ status }: { status: CellStatus }) {
  switch (status) {
    case "industry-focus":
      return <span aria-hidden className="h-2.5 w-2.5 rounded-full bg-red" />;
    case "blocked":
      return (
        <span aria-hidden className="text-[0.8rem] font-bold leading-none text-amber">
          ✕
        </span>
      );
    case "opportunity":
      return (
        <span
          aria-hidden
          className="h-2.5 w-2.5 rounded-full bg-blue shadow-[0_0_8px_rgba(88,180,240,0.6)]"
        />
      );
    default:
      return (
        <span aria-hidden className="h-1.5 w-1.5 rounded-full bg-ink4 opacity-40" />
      );
  }
}

export function BuyerUtilityMap({ utilityMap }: { utilityMap: UtilityMap }) {
  const { t } = useI18n();
  const { show, hide, tooltip } = useTooltip();
  const [selected, setSelected] = useState<{
    stage: UtilityStage;
    lever: UtilityLever;
  } | null>(null);

  // Index cells by `${stage}:${lever}` — the array may be partial mid-stream.
  const cellMap = useMemo(() => {
    const m = new Map<string, Cell>();
    for (const c of utilityMap.cells ?? []) m.set(`${c.stage}:${c.lever}`, c);
    return m;
  }, [utilityMap.cells]);

  const selectedCell = selected
    ? cellMap.get(`${selected.stage}:${selected.lever}`)
    : undefined;

  const handleEnter = (
    e: MouseEvent<HTMLButtonElement> | TouchEvent<HTMLButtonElement>,
    cell: Cell
  ) => {
    const note = cell.note ?? t(`utility.${cell.status}`);
    const touch = "touches" in e ? e.touches[0] : undefined;
    const x = touch ? touch.clientX : (e as MouseEvent).clientX;
    const y = touch ? touch.clientY : (e as MouseEvent).clientY;
    show(x, y, <span className="whitespace-normal max-w-[260px] block">{note}</span>);
  };

  const legendSwatch = (status: CellStatus) => {
    const base = "inline-flex h-3.5 w-3.5 items-center justify-center rounded-[4px] border";
    switch (status) {
      case "industry-focus":
        return (
          <span className={`${base} border-red-dim/40 bg-red/10`}>
            <span className="h-1.5 w-1.5 rounded-full bg-red" />
          </span>
        );
      case "blocked":
        return (
          <span
            className={`${base} border-amber/40 bg-amber/10`}
            style={{ backgroundImage: STRIPES }}
          />
        );
      case "opportunity":
        return (
          <span className={`${base} border-blue-dim/50 bg-blue/10`}>
            <span className="h-1.5 w-1.5 rounded-full bg-blue" />
          </span>
        );
      default:
        return (
          <span className={`${base} border-line/60 bg-surface2/40`}>
            <span className="h-1 w-1 rounded-full bg-ink4 opacity-40" />
          </span>
        );
    }
  };

  return (
    <div className="rounded-xl border border-line bg-surface p-4 sm:p-5">
      {/* Matrix */}
      <div className="overflow-x-auto pb-1 [-webkit-overflow-scrolling:touch]">
        <div
          className="grid gap-1"
          style={{
            gridTemplateColumns: "minmax(108px, 150px) repeat(6, minmax(84px, 1fr))",
            minWidth: 108 + 6 * 84 + 6 * 4,
          }}
        >
          {/* Header row */}
          <div className="sticky left-0 z-10 bg-surface" aria-hidden />
          {UtilityStages.map((stage) => (
            <div
              key={stage}
              className="flex h-9 items-end justify-center pb-1 text-center text-[0.68rem] font-bold uppercase tracking-[0.06em] text-ink3"
            >
              {t(`stage.${stage}`)}
            </div>
          ))}

          {/* Lever rows */}
          {UtilityLevers.map((lever, row) => (
            <div key={lever} className="contents">
              <div className="sticky left-0 z-10 flex h-12 items-center bg-surface pr-2 text-[0.74rem] font-semibold leading-tight text-ink2">
                {t(`lever.${lever}`)}
              </div>
              {UtilityStages.map((stage, col) => {
                const cell = cellMap.get(`${stage}:${lever}`);
                const delay = `${(row * 6 + col) * 20}ms`;

                if (!cell) {
                  // Still streaming — shimmer placeholder keeps the geometry.
                  return (
                    <div
                      key={stage}
                      className="skeleton h-12 rounded-md bg-surface2"
                    />
                  );
                }

                const isSelected =
                  selected?.stage === stage && selected?.lever === lever;
                const interactive = cell.status !== "neutral";
                const inner = (
                  <span className="flex h-full w-full items-center justify-center">
                    <CellMark status={cell.status} />
                  </span>
                );

                if (!interactive) {
                  return (
                    <div
                      key={stage}
                      className={`dot-pop h-12 rounded-md border ${CELL_CLASS.neutral}`}
                      style={{ animationDelay: delay }}
                    >
                      {inner}
                    </div>
                  );
                }

                return (
                  <button
                    key={stage}
                    type="button"
                    className={`dot-pop h-12 cursor-pointer rounded-md border transition-colors duration-200 ${CELL_CLASS[cell.status]} ${
                      isSelected ? "ring-2 ring-ink2/50" : ""
                    }`}
                    style={{
                      animationDelay: delay,
                      ...(cell.status === "blocked"
                        ? { backgroundImage: STRIPES }
                        : null),
                    }}
                    aria-label={`${t(`lever.${lever}`)} × ${t(`stage.${stage}`)} — ${t(`utility.${cell.status}`)}`}
                    aria-pressed={isSelected}
                    onMouseEnter={(e) => handleEnter(e, cell)}
                    onMouseLeave={hide}
                    onTouchStart={(e) => handleEnter(e, cell)}
                    onClick={() => setSelected({ stage, lever })}
                  >
                    {inner}
                  </button>
                );
              })}
            </div>
          ))}
        </div>
      </div>

      {/* Selected-cell detail (mobile-friendly companion to the tooltip) */}
      {selected && selectedCell && (
        <div className="mt-3 rounded-lg border border-line bg-bg2 px-3.5 py-2.5">
          <div className="text-[0.76rem] font-semibold text-ink2">
            {t(`lever.${selected.lever}`)} × {t(`stage.${selected.stage}`)}
            <span
              className={`ml-2 text-[0.68rem] font-bold uppercase tracking-[0.08em] ${
                selectedCell.status === "opportunity"
                  ? "text-blue"
                  : selectedCell.status === "blocked"
                    ? "text-amber"
                    : selectedCell.status === "industry-focus"
                      ? "text-red"
                      : "text-ink4"
              }`}
            >
              {t(`utility.${selectedCell.status}`)}
            </span>
          </div>
          {selectedCell.note && (
            <p className="mt-1 text-[0.82rem] leading-relaxed text-ink3">
              {selectedCell.note}
            </p>
          )}
        </div>
      )}

      {/* Legend */}
      <div className="mt-4 flex flex-wrap items-center gap-x-4 gap-y-1.5">
        {(["industry-focus", "blocked", "opportunity", "neutral"] as const).map(
          (status) => (
            <span
              key={status}
              className="flex items-center gap-1.5 text-[0.74rem] font-semibold text-ink3"
            >
              {legendSwatch(status)}
              {t(`utility.${status}`)}
            </span>
          )
        )}
      </div>
      <p className="mt-1.5 text-[0.72rem] leading-relaxed text-ink4">
        {t("utility.legend")}
      </p>

      {/* Key insight */}
      {utilityMap.keyInsight && (
        <p className="mt-4 max-w-[640px] border-l-2 border-green pl-3.5 text-[0.92rem] leading-[1.72] text-ink2">
          {utilityMap.keyInsight}
        </p>
      )}

      {tooltip}
    </div>
  );
}
