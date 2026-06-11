"use client";

import type { Errc } from "@/lib/schema";
import { useI18n } from "@/lib/i18n";

const QUADRANTS = [
  { key: "eliminate", rail: "bg-red", title: "text-red" },
  { key: "reduce", rail: "bg-amber", title: "text-amber" },
  { key: "raise", rail: "bg-green", title: "text-green" },
  { key: "create", rail: "bg-blue", title: "text-blue" },
] as const;

export function ErrcGrid({ errc }: { errc: Errc }) {
  const { t } = useI18n();

  return (
    <div className="grid grid-cols-1 gap-2 sm:grid-cols-2">
      {QUADRANTS.map((q, qi) => {
        const items = errc[q.key] ?? [];
        return (
          <div
            key={q.key}
            className="relative rounded-[10px] border border-line bg-surface py-4 pl-[1.15rem] pr-4 transition-colors duration-200"
          >
            {/* Colored left rail */}
            <span
              aria-hidden
              className={`absolute left-0 top-3 h-[calc(100%-24px)] w-[3px] rounded-r-sm ${q.rail}`}
            />
            <h3 className={`mb-2 text-[0.88rem] font-bold ${q.title}`}>
              {t(`errc.${q.key}`)}
            </h3>
            <ul className="space-y-2.5">
              {items.map((item, i) => (
                <li
                  key={i}
                  className="fade-up"
                  style={{ animationDelay: `${(qi * items.length + i) * 60}ms` }}
                >
                  <div className="text-[0.84rem] font-semibold text-ink2">
                    {item.title}
                  </div>
                  <p className="text-[0.84rem] leading-relaxed text-ink3">
                    {item.detail}
                  </p>
                </li>
              ))}
            </ul>
          </div>
        );
      })}
    </div>
  );
}
