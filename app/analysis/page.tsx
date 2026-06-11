"use client";

import { Suspense, useEffect, useRef, useState } from "react";
import Link from "next/link";
import { useRouter, useSearchParams } from "next/navigation";
import { useI18n } from "@/lib/i18n";
import { AnalyzeRequestSchema } from "@/lib/schema";
import { decodeShare } from "@/lib/share";
import { getFromHistory } from "@/lib/history";
import { getPreset } from "@/lib/presets";
import { useAnalysis } from "@/hooks/useAnalysis";
import { AnalysisView } from "@/components/analysis/AnalysisView";
import { LangToggle } from "@/components/ui/LangToggle";

function AnalysisInner() {
  const { lang, t } = useI18n();
  const router = useRouter();
  const params = useSearchParams();
  const ua = useAnalysis();
  const [mode, setMode] = useState<"loading" | "ready" | "badlink">("loading");
  const [reqMeta, setReqMeta] = useState<{ company: string; industry: string } | null>(null);
  const bootedRef = useRef(false);

  const presetId = params.get("preset");

  // Boot: hash share > history id > pending AI request > home
  useEffect(() => {
    if (bootedRef.current || presetId) return;
    bootedRef.current = true;

    if (location.hash.length > 1) {
      const shared = decodeShare(location.hash);
      if (shared) {
        ua.loadExisting(shared);
        setMode("ready");
        return;
      }
      setMode("badlink");
      return;
    }

    const historyId = params.get("h");
    if (historyId) {
      const stored = getFromHistory(historyId);
      if (stored) {
        ua.loadExisting(stored);
        setMode("ready");
        return;
      }
      setMode("badlink");
      return;
    }

    try {
      const pending = sessionStorage.getItem("boc:pending");
      if (pending) {
        sessionStorage.removeItem("boc:pending");
        const req = AnalyzeRequestSchema.safeParse(JSON.parse(pending));
        if (req.success) {
          setReqMeta({ company: req.data.company, industry: req.data.industry });
          ua.start(req.data);
          setMode("ready");
          return;
        }
      }
    } catch {
      // fall through to home
    }
    router.replace("/");
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);

  // Presets follow the language toggle (both languages are committed).
  useEffect(() => {
    if (!presetId) return;
    const preset = getPreset(presetId, lang);
    if (preset) {
      ua.loadExisting(preset);
      setMode("ready");
    } else {
      setMode("badlink");
    }
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [presetId, lang]);

  const meta = ua.analysis?.meta ?? null;
  const company = meta?.company ?? reqMeta?.company ?? "";
  const industry = meta?.industry ?? reqMeta?.industry ?? "";

  return (
    <main className="flex-1">
      {/* Top bar */}
      <div className="no-print border-b border-line">
        <div className="max-w-4xl mx-auto px-5 py-4 flex items-center justify-between gap-4">
          <Link
            href="/"
            className="font-serif text-lg text-ink hover:text-green transition-colors"
          >
            ← {t("app.title")}
          </Link>
          <LangToggle />
        </div>
      </div>

      <div className="max-w-4xl mx-auto px-5 py-8 pb-20">
        {mode === "badlink" ? (
          <div className="text-center py-20">
            <p className="text-ink3 mb-6">{t("status.linkError")}</p>
            <Link
              href="/"
              className="text-sm font-semibold text-green border border-green-dim/40 rounded-lg px-5 py-2.5 hover:bg-green/10 transition-colors"
            >
              {t("tool.newAnalysis")}
            </Link>
          </div>
        ) : mode === "loading" ? (
          <div className="space-y-3 py-10">
            <div className="skeleton bg-surface2 rounded h-10 w-2/3" />
            <div className="skeleton bg-surface2 rounded h-4 w-full" />
          </div>
        ) : (
          <>
            {(company || industry) && (
              <p className="no-print text-xs uppercase tracking-[0.12em] text-ink4 mb-6">
                {company}
                {industry && <span className="text-ink4"> · {industry}</span>}
              </p>
            )}
            {ua.error && (
              <div className="no-print bg-surface border border-red-dim/40 rounded-xl p-5 mb-8">
                <p className="text-sm text-red">
                  {ua.error === "rate_limited"
                    ? t("form.error.rateLimit")
                    : t("form.error.generic")}
                </p>
              </div>
            )}
            <AnalysisView
              company={company}
              industry={industry}
              coreStatus={ua.coreState.status}
              core={ua.coreState.data}
              corePartial={ua.coreState.partial}
              sixPaths={ua.sections.sixPaths}
              utilityMap={ua.sections.utilityMap}
              nonCustomers={ua.sections.nonCustomers}
              boiSequence={ua.sections.boiSequence}
              analysis={ua.analysis}
              retrySection={ua.retrySection}
              updateBlueOcean={ua.updateBlueOcean}
            />
          </>
        )}
      </div>

      <footer className="no-print border-t border-line">
        <div className="max-w-4xl mx-auto px-5 py-5 flex flex-col sm:flex-row gap-1.5 justify-between text-xs text-ink4">
          <span>
            {t("footer.credit")} ·{" "}
            <a
              href="https://www.linkedin.com/in/claudioswijsen/"
              target="_blank"
              rel="noreferrer"
              className="text-green-dim font-semibold"
            >
              Claudio Swijsen
            </a>
          </span>
          <span>{t("footer.framework")}</span>
        </div>
      </footer>
    </main>
  );
}

export default function AnalysisPage() {
  return (
    <Suspense fallback={null}>
      <AnalysisInner />
    </Suspense>
  );
}
