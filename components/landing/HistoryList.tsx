"use client";

import { useEffect, useState } from "react";
import { useRouter } from "next/navigation";
import { useI18n } from "@/lib/i18n";
import { deleteFromHistory, listHistory } from "@/lib/history";
import type { Analysis } from "@/lib/schema";

const MAX_ROWS = 5;

export default function HistoryList() {
  const router = useRouter();
  const { t, lang } = useI18n();
  // null = not mounted yet (localStorage unavailable during SSR)
  const [items, setItems] = useState<Analysis[] | null>(null);

  useEffect(() => {
    setItems(listHistory());
  }, []);

  if (!items || items.length === 0) return null;

  function handleDelete(id: string) {
    deleteFromHistory(id);
    setItems(listHistory());
  }

  return (
    <section>
      <h2 className="mb-5 text-center text-xs font-bold tracking-wide text-ink3 uppercase">
        {t("history.title")}
      </h2>
      <ul className="space-y-2">
        {items.slice(0, MAX_ROWS).map((analysis) => {
          const { id, company, industry, generatedAt } = analysis.meta;
          return (
            <li
              key={id}
              className="flex items-center justify-between gap-3 rounded-lg border border-line bg-surface px-4 py-3"
            >
              <div className="min-w-0">
                <div className="truncate font-semibold text-ink">{company}</div>
                <div className="truncate text-xs text-ink4">
                  {industry} · {new Date(generatedAt).toLocaleDateString(lang)}
                </div>
              </div>
              <div className="flex shrink-0 items-center gap-3">
                <button
                  type="button"
                  onClick={() => router.push(`/analysis?h=${id}`)}
                  className="text-sm font-semibold text-green transition-colors duration-200 hover:text-green-dim"
                >
                  {t("history.open")}
                </button>
                <button
                  type="button"
                  aria-label={t("history.delete")}
                  onClick={() => handleDelete(id)}
                  className="px-1 text-lg leading-none text-ink4 transition-colors duration-200 hover:text-red"
                >
                  ×
                </button>
              </div>
            </li>
          );
        })}
      </ul>
    </section>
  );
}
