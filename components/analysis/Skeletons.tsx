"use client";

/**
 * Loading skeletons that echo the geometry of the real viz components so the
 * layout doesn't jump when streamed content arrives. All blocks use the
 * `.skeleton` shimmer (disabled under prefers-reduced-motion).
 */

function Block({ className = "" }: { className?: string }) {
  return <div aria-hidden className={`skeleton rounded bg-surface2 ${className}`} />;
}

/** Mirrors StrategyCanvas: legend row, chart area, slider rows. */
export function CanvasSkeleton() {
  return (
    <div
      className="overflow-hidden rounded-xl border border-line bg-surface"
      aria-hidden
    >
      <div className="flex items-center gap-[18px] px-4 pb-2 pt-4 sm:px-6 sm:pt-5">
        <Block className="h-3.5 w-28" />
        <Block className="h-3.5 w-28" />
      </div>
      <div className="px-4 pb-4 sm:px-6">
        <Block className="h-[280px] w-full rounded-lg sm:h-[360px]" />
      </div>
      <div className="border-t border-line px-4 py-4 sm:px-6">
        {Array.from({ length: 4 }, (_, i) => (
          <div key={i} className="border-b border-line/50 py-2.5 last:border-b-0">
            <Block className="mb-2 h-3.5 w-40" />
            <Block className="h-1.5 w-full rounded-full" />
          </div>
        ))}
      </div>
    </div>
  );
}

/** Mirrors ErrcGrid / SixPaths: 2×2 ghost cards (1-col on mobile). */
export function GridSkeleton() {
  return (
    <div className="grid grid-cols-1 gap-2 sm:grid-cols-2" aria-hidden>
      {Array.from({ length: 4 }, (_, i) => (
        <div
          key={i}
          className="rounded-[10px] border border-line bg-surface p-4"
        >
          <Block className="mb-3 h-4 w-24" />
          <Block className="mb-2 h-3 w-full" />
          <Block className="mb-2 h-3 w-5/6" />
          <Block className="h-3 w-4/6" />
        </div>
      ))}
    </div>
  );
}

/** Mirrors BuyerUtilityMap: header row + 6×6 ghost cells + legend line. */
export function MatrixSkeleton() {
  return (
    <div className="rounded-xl border border-line bg-surface p-4 sm:p-5" aria-hidden>
      <div className="overflow-hidden">
        <div
          className="grid gap-1"
          style={{
            gridTemplateColumns: "minmax(108px, 150px) repeat(6, minmax(0, 1fr))",
          }}
        >
          <div />
          {Array.from({ length: 6 }, (_, i) => (
            <div key={`h-${i}`} className="flex h-9 items-end justify-center pb-1">
              <Block className="h-2.5 w-3/4" />
            </div>
          ))}
          {Array.from({ length: 6 }, (_, row) => (
            <div key={`r-${row}`} className="contents">
              <div className="flex h-12 items-center pr-2">
                <Block className="h-3 w-5/6" />
              </div>
              {Array.from({ length: 6 }, (_, col) => (
                <Block key={col} className="h-12 rounded-md" />
              ))}
            </div>
          ))}
        </div>
      </div>
      <div className="mt-4 flex gap-4">
        <Block className="h-3 w-20" />
        <Block className="h-3 w-20" />
        <Block className="h-3 w-20" />
      </div>
    </div>
  );
}

/** Mirrors NonCustomerTiers: ghost concentric circles + detail panel. */
export function TiersSkeleton() {
  return (
    <div className="flex flex-col gap-6 md:flex-row md:items-center" aria-hidden>
      <div className="mx-auto flex aspect-square w-full max-w-[440px] shrink-0 items-center justify-center md:w-[44%]">
        <div className="skeleton flex h-[82%] w-[82%] items-center justify-center rounded-full border border-line bg-surface2/40">
          <div className="flex h-[68%] w-[68%] items-center justify-center rounded-full border border-line bg-surface2/60">
            <div className="h-[55%] w-[55%] rounded-full border border-line bg-surface2" />
          </div>
        </div>
      </div>
      <div className="min-w-0 flex-1 rounded-[12px] border border-line bg-surface p-5">
        <Block className="mb-3 h-6 w-2/3" />
        <Block className="mb-2 h-3.5 w-full" />
        <Block className="mb-5 h-3.5 w-5/6" />
        <Block className="mb-2 h-3 w-24" />
        <Block className="mb-4 h-3.5 w-full" />
        <Block className="mb-2 h-3 w-24" />
        <Block className="h-3.5 w-4/5" />
      </div>
    </div>
  );
}

/** Mirrors BoiSequence: 4 ghost stepper rows. */
export function StepsSkeleton() {
  return (
    <div aria-hidden>
      {Array.from({ length: 4 }, (_, i) => (
        <div key={i} className="flex gap-4">
          <div className="flex w-9 shrink-0 flex-col items-center">
            <Block className="h-9 w-9 rounded-full" />
            {i < 3 && <div className="my-1.5 w-0.5 flex-1 rounded-full bg-line" />}
          </div>
          <div className={`min-w-0 flex-1 ${i < 3 ? "pb-4" : ""}`}>
            <div className="rounded-[12px] border border-line bg-surface p-4 sm:p-5">
              <div className="mb-3 flex items-center justify-between">
                <Block className="h-4.5 w-32" />
                <Block className="h-5 w-16 rounded-full" />
              </div>
              <Block className="mb-2 h-3 w-5/6" />
              <Block className="h-3 w-full" />
            </div>
          </div>
        </div>
      ))}
    </div>
  );
}
