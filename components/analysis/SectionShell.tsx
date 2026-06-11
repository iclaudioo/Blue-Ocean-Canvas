"use client";

import type { ReactNode } from "react";
import { useI18n } from "@/lib/i18n";

const COLORS = {
  green: "bg-green",
  red: "bg-red",
  blue: "bg-blue",
  amber: "bg-amber",
} as const;

type Props = {
  title: string;
  color: keyof typeof COLORS;
  status?: "pending" | "streaming" | "done" | "error";
  onRetry?: () => void;
  skeleton?: ReactNode;
  children: ReactNode;
  delay?: number;
  actions?: ReactNode;
};

export function SectionShell({
  title,
  color,
  status = "done",
  onRetry,
  skeleton,
  children,
  delay = 0,
  actions,
}: Props) {
  const { t } = useI18n();

  return (
    <section
      className="fade-up print-section"
      style={{ animationDelay: `${delay}s` }}
    >
      <div className="flex items-center gap-2.5 mb-3.5">
        <div className={`w-[3px] h-[18px] rounded-sm shrink-0 ${COLORS[color]}`} />
        <h2 className="font-serif text-xl text-ink">{title}</h2>
        {status === "streaming" && (
          <span className="text-xs text-ink4 pulse no-print">
            {t("status.thinking")}
          </span>
        )}
        {actions && <div className="ml-auto no-print">{actions}</div>}
      </div>

      {status === "error" ? (
        <div className="bg-surface border border-line rounded-xl p-6 text-center no-print">
          <p className="text-sm text-ink3 mb-3">{t("status.sectionError")}</p>
          {onRetry && (
            <button
              onClick={onRetry}
              className="text-sm font-semibold text-green border border-green-dim/40 rounded-lg px-4 py-2 hover:bg-green/10 transition-colors"
            >
              {t("status.retry")}
            </button>
          )}
        </div>
      ) : status === "pending" && skeleton ? (
        skeleton
      ) : (
        children
      )}
    </section>
  );
}
