"use client";

import { useState, type KeyboardEvent } from "react";
import type { NonCustomers } from "@/lib/schema";
import { useI18n } from "@/lib/i18n";

type TierKey = "first" | "second" | "third";

const TIER_ORDER: TierKey[] = ["first", "second", "third"];

const VIEW = 440;
const CENTER = VIEW / 2;
const CORE_R = 62;
const MAX_R = CENTER - 16;

const STEP: Record<"small" | "medium" | "large", number> = {
  small: 26,
  medium: 34,
  large: 42,
};

/** Ring stroke + fill per tier — blues getting dimmer/deeper going outward. */
const RING_STYLE: Record<TierKey, { stroke: string; fillPct: number }> = {
  first: { stroke: "var(--blue)", fillPct: 8 },
  second: { stroke: "var(--blue-dim)", fillPct: 5 },
  third: { stroke: "var(--text4)", fillPct: 3 },
};

export function NonCustomerTiers({ nonCustomers }: { nonCustomers: NonCustomers }) {
  const { t } = useI18n();
  const [selected, setSelected] = useState<TierKey>("first");

  const tiers = nonCustomers.tiers ?? [];
  const byKey = (key: TierKey) => tiers.find((tier) => tier.tier === key);

  // Compute outer radius per tier, weighted by relativeSize, normalized to fit.
  const rawRadii: Record<TierKey, number> = { first: 0, second: 0, third: 0 };
  let r = CORE_R;
  for (const key of TIER_ORDER) {
    r += STEP[byKey(key)?.relativeSize ?? "medium"];
    rawRadii[key] = r;
  }
  const scale = Math.min(1, MAX_R / rawRadii.third);
  const coreR = CORE_R * scale;
  const radii: Record<TierKey, number> = {
    first: rawRadii.first * scale,
    second: rawRadii.second * scale,
    third: rawRadii.third * scale,
  };
  const innerOf = (key: TierKey): number =>
    key === "first" ? coreR : key === "second" ? radii.first : radii.second;

  const onRingKey = (e: KeyboardEvent<SVGGElement>, key: TierKey) => {
    if (e.key === "Enter" || e.key === " " || e.key === "Spacebar") {
      e.preventDefault();
      setSelected(key);
    }
  };

  const sel = byKey(selected);

  return (
    <div className="flex flex-col gap-6 md:flex-row md:items-center">
      {/* Concentric circles */}
      <div className="mx-auto w-full max-w-[440px] shrink-0 md:w-[44%]">
        <svg
          viewBox={`0 0 ${VIEW} ${VIEW}`}
          className="block h-auto w-full"
          role="group"
          aria-label={t("section.nonCustomers")}
        >
          {/* Rings outside-in so inner rings sit on top for hit-testing. */}
          {[...TIER_ORDER].reverse().map((key) => {
            const isSelected = selected === key;
            const style = RING_STYLE[key];
            const outer = radii[key];
            const inner = innerOf(key);
            const labelY = CENTER - (inner + (outer - inner) / 2);
            const delayIdx = TIER_ORDER.indexOf(key) + 1;
            return (
              <g
                key={key}
                role="button"
                tabIndex={0}
                aria-pressed={isSelected}
                aria-label={`${t(`tier.${key}`)} — ${byKey(key)?.label ?? ""}`}
                className="cursor-pointer outline-none"
                onClick={() => setSelected(key)}
                onKeyDown={(e) => onRingKey(e, key)}
              >
                <circle
                  cx={CENTER}
                  cy={CENTER}
                  r={outer}
                  fill={`color-mix(in srgb, var(--blue) ${style.fillPct}%, transparent)`}
                  stroke={isSelected ? "var(--blue)" : style.stroke}
                  strokeWidth={isSelected ? 2.5 : 1.25}
                  className="dot-pop transition-[stroke] duration-200"
                  style={{
                    animationDelay: `${delayIdx * 90}ms`,
                    transformOrigin: `${CENTER}px ${CENTER}px`,
                    filter: isSelected
                      ? "drop-shadow(0 0 7px rgba(88, 180, 240, 0.45))"
                      : undefined,
                  }}
                />
                <text
                  x={CENTER}
                  y={labelY + 4}
                  textAnchor="middle"
                  fontSize={11.5}
                  fontWeight={600}
                  fill={isSelected ? "var(--blue)" : "var(--text3)"}
                  className="pointer-events-none select-none"
                >
                  {t(`tier.${key}`)}
                </text>
              </g>
            );
          })}

          {/* Core market disc */}
          <circle
            cx={CENTER}
            cy={CENTER}
            r={coreR}
            fill="color-mix(in srgb, var(--green) 25%, transparent)"
            stroke="var(--green-dim)"
            strokeWidth={1.25}
            className="dot-pop"
            style={{ transformOrigin: `${CENTER}px ${CENTER}px` }}
          />
          <text
            x={CENTER}
            y={CENTER + 5}
            textAnchor="middle"
            fontSize={15}
            fill="var(--green)"
            className="pointer-events-none select-none"
            style={{ fontFamily: "var(--font-serif)" }}
          >
            {t("tier.core")}
          </text>
        </svg>
      </div>

      {/* Detail panel */}
      <div className="min-w-0 flex-1 rounded-[12px] border border-line bg-surface p-5">
        {sel ? (
          <div key={selected} className="fade-up">
            <h3 className="font-serif text-[1.3rem] leading-snug text-ink">
              {sel.label}
            </h3>
            <p className="mb-4 mt-1 text-[0.78rem] leading-relaxed text-ink3">
              {t(`tier.${selected}.sub`)}
            </p>
            <div className="space-y-3.5">
              <div>
                <div className="mb-0.5 text-[0.66rem] font-bold uppercase tracking-[0.1em] text-ink3">
                  {t("tier.who")}
                </div>
                <p className="text-[0.86rem] leading-relaxed text-ink2">
                  {sel.whoTheyAre}
                </p>
              </div>
              <div>
                <div className="mb-0.5 text-[0.66rem] font-bold uppercase tracking-[0.1em] text-red">
                  {t("tier.why")}
                </div>
                <p className="text-[0.86rem] leading-relaxed text-ink2">
                  {sel.whyTheyLeave}
                </p>
              </div>
              <div>
                <div className="mb-0.5 text-[0.66rem] font-bold uppercase tracking-[0.1em] text-green">
                  {t("tier.unlock")}
                </div>
                <p className="text-[0.86rem] leading-relaxed text-ink2">
                  {sel.unlockStrategy}
                </p>
              </div>
            </div>
          </div>
        ) : (
          // Tier not streamed yet — keep the panel height stable.
          <div className="space-y-3" aria-hidden>
            <div className="skeleton h-6 w-2/3 rounded bg-surface2" />
            <div className="skeleton h-3.5 w-full rounded bg-surface2" />
            <div className="skeleton h-3.5 w-5/6 rounded bg-surface2" />
            <div className="skeleton h-3.5 w-4/6 rounded bg-surface2" />
          </div>
        )}
      </div>
    </div>
  );
}
