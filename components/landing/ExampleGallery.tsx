"use client";

import { useRouter } from "next/navigation";
import { useI18n } from "@/lib/i18n";
import { PRESET_META } from "@/lib/presets";

export default function ExampleGallery() {
  const router = useRouter();
  const { t, lang } = useI18n();

  return (
    <section className="relative">
      <h2 className="mb-5 text-center text-xs font-bold tracking-wide text-ink3 uppercase">
        {t("gallery.title")}
      </h2>
      <div className="grid grid-cols-1 gap-3 sm:grid-cols-2 md:grid-cols-3">
        {PRESET_META.map((preset, i) => (
          <button
            key={preset.id}
            type="button"
            onClick={() => router.push(`/analysis?preset=${preset.id}`)}
            style={{ animationDelay: `${i * 50}ms` }}
            className="fade-up rounded-xl border border-line bg-surface p-4 text-left transition-colors duration-200 hover:border-green-dim hover:bg-bg2"
          >
            <div className="font-semibold text-ink2">{preset.name[lang]}</div>
            <div className="mt-1 line-clamp-2 text-sm leading-relaxed text-ink4">
              {preset.sub[lang]}
            </div>
          </button>
        ))}
      </div>
    </section>
  );
}
