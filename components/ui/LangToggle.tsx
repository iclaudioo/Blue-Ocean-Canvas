"use client";

import { useI18n } from "@/lib/i18n";
import type { Language } from "@/lib/schema";

const LANGS: Language[] = ["en", "nl"];

export default function LangToggle() {
  const { lang, setLang } = useI18n();

  return (
    <div className="inline-flex items-center rounded-full border border-line bg-surface p-0.5">
      {LANGS.map((l) => (
        <button
          key={l}
          type="button"
          onClick={() => setLang(l)}
          aria-pressed={lang === l}
          className={`rounded-full px-2.5 py-1 text-xs uppercase tracking-wide transition-colors duration-200 ${
            lang === l
              ? "bg-green/10 font-semibold text-green"
              : "text-ink3 hover:text-ink2"
          }`}
        >
          {l}
        </button>
      ))}
    </div>
  );
}
