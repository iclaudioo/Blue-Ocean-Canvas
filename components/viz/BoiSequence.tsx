"use client";

import { BoiGates, type BoiSequence as BoiSequenceData } from "@/lib/schema";
import { useI18n } from "@/lib/i18n";

type Step = BoiSequenceData["steps"][number];
type Verdict = Step["verdict"];
type Overall = BoiSequenceData["overallVerdict"];

const VERDICT_STYLE: Record<
  Verdict,
  { chip: string; mark: string; circle: string; spine: string }
> = {
  pass: {
    chip: "border-green-dim/40 bg-green/10 text-green",
    mark: "✓",
    circle: "border-green-dim bg-green/10 text-green",
    spine: "bg-green-dim",
  },
  risk: {
    chip: "border-amber/40 bg-amber/10 text-amber",
    mark: "!",
    circle: "border-amber bg-amber/10 text-amber",
    spine: "bg-amber/60",
  },
  fail: {
    chip: "border-red-dim/40 bg-red/10 text-red",
    mark: "✕",
    circle: "border-red-dim bg-red/10 text-red",
    spine: "bg-red-dim/60",
  },
};

const OVERALL_STYLE: Record<Overall, { box: string; word: string }> = {
  go: { box: "border-green-dim/40 bg-green/[0.08]", word: "text-green" },
  rework: { box: "border-amber/40 bg-amber/[0.08]", word: "text-amber" },
  "no-go": { box: "border-red-dim/40 bg-red/[0.08]", word: "text-red" },
};

export function BoiSequence({ boiSequence }: { boiSequence: BoiSequenceData }) {
  const { t } = useI18n();

  // Canonical gate order; tolerate partially streamed steps.
  const steps = BoiGates.map((gate) =>
    (boiSequence.steps ?? []).find((s) => s.gate === gate)
  ).filter((s): s is Step => s != null);

  const firstNonPass = steps.findIndex((s) => s.verdict !== "pass");

  return (
    <div>
      <ol className="list-none">
        {steps.map((step, i) => {
          const v = VERDICT_STYLE[step.verdict];
          const isLast = i === steps.length - 1;
          // The spine fills downward up to (and including) the first non-pass gate.
          const reached = firstNonPass === -1 || i < firstNonPass;
          const spineColor =
            reached && step.verdict === "pass" ? "bg-green-dim" : "bg-line";

          return (
            <li
              key={step.gate}
              className="fade-up flex gap-4"
              style={{ animationDelay: `${i * 120}ms` }}
            >
              {/* Spine: numbered circle + connector */}
              <div className="flex w-9 shrink-0 flex-col items-center">
                <div
                  className={`flex h-9 w-9 items-center justify-center rounded-full border-2 font-serif text-[0.95rem] ${v.circle}`}
                  aria-hidden
                >
                  {i + 1}
                </div>
                {!isLast && (
                  <div className={`my-1.5 w-0.5 flex-1 rounded-full ${spineColor}`} />
                )}
              </div>

              {/* Step card */}
              <div className={`min-w-0 flex-1 ${isLast ? "" : "pb-4"}`}>
                <div className="rounded-[12px] border border-line bg-surface p-4 transition-colors duration-200 hover:border-line-l sm:p-5">
                  <div className="mb-2 flex flex-wrap items-center justify-between gap-2">
                    <h3 className="font-serif text-[1.15rem] text-ink">
                      {t(`boi.${step.gate}`)}
                    </h3>
                    <span
                      className={`inline-flex items-center gap-1.5 rounded-full border px-2.5 py-0.5 text-[0.7rem] font-bold uppercase tracking-[0.06em] ${v.chip}`}
                    >
                      <span aria-hidden>{v.mark}</span>
                      {t(`boi.${step.verdict}`)}
                    </span>
                  </div>
                  <p className="mb-2 text-[0.84rem] italic leading-relaxed text-ink3">
                    {step.question}
                  </p>
                  <p className="text-[0.86rem] leading-relaxed text-ink2">
                    {step.assessment}
                  </p>

                  {step.verdict !== "pass" && step.actions.length > 0 && (
                    <details className="group mt-3 rounded-lg border border-line/70 bg-bg2">
                      <summary className="cursor-pointer list-none select-none px-3.5 py-2 text-[0.74rem] font-bold uppercase tracking-[0.08em] text-ink3 transition-colors duration-200 hover:text-ink2 [&::-webkit-details-marker]:hidden">
                        <span aria-hidden className="mr-1.5 inline-block transition-transform duration-200 group-open:rotate-90">
                          ▸
                        </span>
                        {t("boi.actions")}
                      </summary>
                      <ul className="space-y-1.5 px-3.5 pb-3 pt-1">
                        {step.actions.map((action, ai) => (
                          <li
                            key={ai}
                            className="flex gap-2 text-[0.82rem] leading-relaxed text-ink2"
                          >
                            <span aria-hidden className="mt-[2px] text-ink4">
                              –
                            </span>
                            {action}
                          </li>
                        ))}
                      </ul>
                    </details>
                  )}
                </div>
              </div>
            </li>
          );
        })}
      </ol>

      {/* Overall verdict banner */}
      <div
        className={`fade-up mt-2 rounded-[12px] border p-5 ${OVERALL_STYLE[boiSequence.overallVerdict].box}`}
        style={{ animationDelay: `${steps.length * 120}ms` }}
      >
        <div
          className={`mb-1 font-serif text-[1.5rem] leading-none ${OVERALL_STYLE[boiSequence.overallVerdict].word}`}
        >
          {t(`boi.${boiSequence.overallVerdict}`)}
        </div>
        <p className="max-w-[640px] text-[0.88rem] leading-relaxed text-ink2">
          {boiSequence.conclusion}
        </p>
      </div>
    </div>
  );
}
