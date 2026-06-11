"use client";

import type { Move } from "@/lib/schema";

export function StrategicMoves({ moves }: { moves: Move[] }) {
  return (
    <div className="space-y-2">
      {moves.map((move, i) => (
        <div
          key={i}
          className="bg-surface border border-line rounded-[10px] p-5 fade-up"
          style={{ animationDelay: `${i * 0.08}s` }}
        >
          <h4 className="text-[0.95rem] font-bold text-ink mb-1.5">
            {move.title}
          </h4>
          <p className="text-sm text-ink2 leading-[1.65]">{move.body}</p>
        </div>
      ))}
    </div>
  );
}
