"use client";

import { useI18n } from "@/lib/i18n";
import Hero from "@/components/landing/Hero";
import AnalysisForm from "@/components/landing/AnalysisForm";
import ExampleGallery from "@/components/landing/ExampleGallery";
import HistoryList from "@/components/landing/HistoryList";

export default function Home() {
  const { t } = useI18n();

  return (
    <>
      <main className="flex-1">
        <Hero />
        <div className="mx-auto max-w-4xl space-y-14 px-5 pb-20">
          <AnalysisForm />
          <ExampleGallery />
          <HistoryList />
        </div>
      </main>
      <footer className="border-t border-line">
        <div className="mx-auto flex max-w-4xl flex-col gap-2 p-5 text-xs text-ink4 sm:flex-row sm:items-center sm:justify-between">
          <span>
            {t("footer.credit")} ·{" "}
            <a
              href="https://www.linkedin.com/in/claudioswijsen/"
              target="_blank"
              rel="noopener noreferrer"
              className="font-semibold text-green-dim"
            >
              Claudio Swijsen
            </a>
          </span>
          <span>{t("footer.framework")}</span>
        </div>
      </footer>
    </>
  );
}
