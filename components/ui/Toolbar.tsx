"use client";

import { useState } from "react";
import { useRouter } from "next/navigation";
import { useI18n } from "@/lib/i18n";
import { shareUrl } from "@/lib/share";
import type { Analysis } from "@/lib/schema";

function fallbackCopy(text: string): boolean {
  const ta = document.createElement("textarea");
  ta.value = text;
  ta.style.position = "fixed";
  ta.style.opacity = "0";
  document.body.appendChild(ta);
  ta.select();
  let ok = false;
  try {
    ok = document.execCommand("copy");
  } catch {
    ok = false;
  }
  document.body.removeChild(ta);
  return ok;
}

const BTN =
  "text-xs font-semibold text-ink3 border border-line rounded-lg px-3 py-2 hover:text-ink hover:border-line-l transition-colors";

export function Toolbar({
  analysis,
  onExportPng,
}: {
  analysis: Analysis;
  onExportPng?: () => void;
}) {
  const { t } = useI18n();
  const router = useRouter();
  const [copied, setCopied] = useState(false);
  const [longLink, setLongLink] = useState(false);

  const copyLink = () => {
    const url = shareUrl(analysis);
    history.replaceState(null, "", "#" + url.split("#")[1]);
    setLongLink(url.length > 8000);
    const done = () => {
      setCopied(true);
      setTimeout(() => setCopied(false), 1500);
    };
    if (navigator.clipboard?.writeText) {
      navigator.clipboard.writeText(url).then(done, () => {
        if (fallbackCopy(url)) done();
      });
    } else if (fallbackCopy(url)) {
      done();
    }
  };

  return (
    <div className="no-print">
      <div className="flex flex-wrap items-center gap-2">
        <button onClick={copyLink} className={`${BTN} ${copied ? "text-green border-green-dim/50" : ""}`}>
          {copied ? t("tool.copied") : t("tool.copyLink")}
        </button>
        <button onClick={() => window.print()} className={BTN}>
          {t("tool.print")}
        </button>
        {onExportPng && (
          <button onClick={onExportPng} className={BTN}>
            {t("tool.png")}
          </button>
        )}
        <button
          onClick={() => router.push("/")}
          className="text-xs font-semibold text-green border border-green-dim/40 rounded-lg px-3 py-2 hover:bg-green/10 transition-colors ml-auto"
        >
          {t("tool.newAnalysis")}
        </button>
      </div>
      {longLink && (
        <p className="text-xs text-ink4 mt-2">{t("status.warning.longLink")}</p>
      )}
    </div>
  );
}
