"use client";

import { useI18n } from "@/lib/i18n";
import LangToggle from "@/components/ui/LangToggle";
import OceanWaves from "./OceanWaves";

export default function Hero() {
  const { t } = useI18n();

  return (
    <header className="relative overflow-hidden px-5 pt-16 pb-24 text-center">
      {/* Radial green glow behind the heading */}
      <div
        aria-hidden="true"
        className="pointer-events-none absolute inset-x-0 top-0 h-80"
        style={{
          background:
            "radial-gradient(ellipse at 50% -30%, rgba(78,205,160,0.07) 0%, transparent 70%)",
        }}
      />

      <div className="absolute top-4 right-4 z-10">
        <LangToggle />
      </div>

      <div className="fade-up relative mx-auto max-w-2xl">
        <div className="mb-4 inline-flex items-center gap-1.5 rounded-full border border-green/15 bg-green/[0.08] px-3 py-1.5 text-[0.68rem] font-semibold tracking-[0.12em] text-green uppercase">
          <span className="pulse h-1.5 w-1.5 rounded-full bg-green" />
          {t("app.tagline")}
        </div>

        <h1 className="font-serif text-4xl leading-[1.15] font-normal text-ink sm:text-5xl md:text-6xl">
          {t("app.heroTitle1")}
          <br />
          <em className="text-green italic">{t("app.heroTitle2")}</em>
        </h1>

        <p className="mx-auto mt-5 max-w-xl text-sm leading-relaxed text-ink3 sm:text-base">
          {t("app.heroSub")}
        </p>
      </div>

      <OceanWaves />
    </header>
  );
}
