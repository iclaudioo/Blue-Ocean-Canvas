"use client";

import { useState, type FormEvent } from "react";
import { useRouter } from "next/navigation";
import { useI18n } from "@/lib/i18n";
import type { AnalyzeRequest } from "@/lib/schema";

const inputClass =
  "w-full rounded-lg border border-line bg-bg2 px-4 py-3 text-ink placeholder:text-ink4 focus:border-green-dim focus:outline-none transition-colors duration-200";

const labelClass = "mb-1.5 block text-sm font-semibold text-ink2";

export default function AnalysisForm() {
  const router = useRouter();
  const { t, lang } = useI18n();
  const [company, setCompany] = useState("");
  const [industry, setIndustry] = useState("");
  const [context, setContext] = useState("");
  const [showError, setShowError] = useState(false);

  function handleSubmit(e: FormEvent<HTMLFormElement>) {
    e.preventDefault();
    if (!company.trim() || !industry.trim()) {
      setShowError(true);
      return;
    }
    setShowError(false);
    const req: AnalyzeRequest = {
      company,
      industry,
      context: context || undefined,
      language: lang,
    };
    sessionStorage.setItem("boc:pending", JSON.stringify(req));
    router.push("/analysis");
  }

  return (
    <form
      onSubmit={handleSubmit}
      noValidate
      className="relative z-10 mx-auto -mt-10 max-w-2xl rounded-2xl border border-line bg-surface p-5 shadow-[0_8px_32px_rgba(0,0,0,0.35)] sm:p-7"
    >
      <div className="space-y-5">
        <div>
          <label htmlFor="boc-company" className={labelClass}>
            {t("form.company")}
          </label>
          <input
            id="boc-company"
            name="company"
            type="text"
            maxLength={120}
            value={company}
            onChange={(e) => setCompany(e.target.value)}
            placeholder={t("form.companyPlaceholder")}
            className={inputClass}
          />
        </div>

        <div>
          <label htmlFor="boc-industry" className={labelClass}>
            {t("form.industry")}
          </label>
          <input
            id="boc-industry"
            name="industry"
            type="text"
            maxLength={120}
            value={industry}
            onChange={(e) => setIndustry(e.target.value)}
            placeholder={t("form.industryPlaceholder")}
            className={inputClass}
          />
        </div>

        <div>
          <label htmlFor="boc-context" className={labelClass}>
            {t("form.context")}
          </label>
          <textarea
            id="boc-context"
            name="context"
            rows={2}
            maxLength={600}
            value={context}
            onChange={(e) => setContext(e.target.value)}
            placeholder={t("form.contextPlaceholder")}
            className={`${inputClass} resize-none`}
          />
        </div>

        {showError && (
          <p role="alert" className="text-sm text-red">
            {t("form.error.required")}
          </p>
        )}

        <button
          type="submit"
          className="w-full rounded-lg bg-green py-3.5 font-semibold text-bg transition-colors duration-200 hover:bg-green-dim"
        >
          {t("form.submit")}
        </button>
      </div>
    </form>
  );
}
