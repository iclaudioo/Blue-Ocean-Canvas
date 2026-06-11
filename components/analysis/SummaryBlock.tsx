"use client";

import type { Core } from "@/lib/schema";
import type { ReactNode } from "react";

/** Render **bold** markers as green strong tags (no other markdown). */
export function renderBold(text: string): ReactNode[] {
  return text.split(/\*\*(.+?)\*\*/g).map((part, i) =>
    i % 2 === 1 ? (
      <strong key={i} className="text-green font-semibold">
        {part}
      </strong>
    ) : (
      <span key={i}>{part}</span>
    )
  );
}

export function SummaryBlock({ summary }: { summary: Core["summary"] }) {
  return (
    <div className="print-section">
      <h2 className="font-serif text-3xl sm:text-4xl text-ink leading-tight mb-4">
        {summary.headline}
      </h2>
      <p className="text-[0.95rem] leading-[1.72] text-ink2 max-w-2xl mb-5">
        {renderBold(summary.narrative)}
      </p>
      {summary.redOceanTraits.length > 0 && (
        <ul className="flex flex-wrap gap-2 mb-5">
          {summary.redOceanTraits.map((trait, i) => (
            <li
              key={i}
              className="text-xs text-red/90 bg-red/[0.07] border border-red-dim/25 rounded-full px-3 py-1.5"
            >
              {trait}
            </li>
          ))}
        </ul>
      )}
      <p className="text-[0.95rem] leading-relaxed max-w-2xl border-l-2 border-green pl-4 text-ink">
        {renderBold(summary.blueOceanThesis)}
      </p>
    </div>
  );
}
