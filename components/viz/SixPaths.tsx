"use client";

import { SixPathKeys, type SixPaths as SixPathsData } from "@/lib/schema";
import { useI18n } from "@/lib/i18n";

export function SixPaths({ sixPaths }: { sixPaths: SixPathsData }) {
  const { t } = useI18n();

  // Canonical Six Paths order; tolerate partially streamed data.
  const ordered = SixPathKeys.map((key) => ({
    key,
    entry: (sixPaths.paths ?? []).find((p) => p.path === key),
  })).filter((x) => x.entry != null);

  return (
    <div className="grid grid-cols-1 gap-2 sm:grid-cols-2">
      {ordered.map(({ key, entry }, i) => (
        <article
          key={key}
          className="fade-up rounded-[12px] border border-line bg-surface p-5 transition-colors duration-200 hover:border-line-l"
          style={{ animationDelay: `${i * 80}ms` }}
        >
          <div className="mb-2 flex items-baseline gap-3">
            <span
              aria-hidden
              className="font-serif text-[1.6rem] leading-none text-ink4"
            >
              {String(i + 1).padStart(2, "0")}
            </span>
            <h3 className="font-serif text-[1.05rem] leading-snug text-ink">
              {t(`path.${key}`)}
            </h3>
          </div>
          <p className="mb-3 text-[0.86rem] leading-relaxed text-ink2">
            {entry!.insight}
          </p>
          <div className="rounded-lg border border-green-dim/30 bg-green/[0.07] px-3 py-2.5">
            <div className="mb-1 text-[0.66rem] font-bold uppercase tracking-[0.1em] text-green">
              {t("path.opportunity")}
            </div>
            <p className="text-[0.84rem] leading-relaxed text-ink2">
              {entry!.opportunity}
            </p>
          </div>
        </article>
      ))}
    </div>
  );
}
