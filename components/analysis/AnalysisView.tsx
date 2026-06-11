"use client";

import { useRef } from "react";
import { useI18n } from "@/lib/i18n";
import {
  type Analysis,
  type BoiSequence as BoiSequenceT,
  type Canvas,
  type Core,
  type Errc,
  type NonCustomers as NonCustomersT,
  type SixPaths as SixPathsT,
  type UtilityMap as UtilityMapT,
  clampLevel,
} from "@/lib/schema";
import { exportSvgToPng, slugify } from "@/lib/export/png";
import { SectionShell } from "./SectionShell";
import { SummaryBlock } from "./SummaryBlock";
import { StrategicMoves } from "./StrategicMoves";
import {
  CanvasSkeleton,
  GridSkeleton,
  MatrixSkeleton,
  StepsSkeleton,
  TiersSkeleton,
} from "./Skeletons";
import { StrategyCanvas } from "@/components/viz/StrategyCanvas";
import { ErrcGrid } from "@/components/viz/ErrcGrid";
import { SixPaths } from "@/components/viz/SixPaths";
import { BuyerUtilityMap } from "@/components/viz/BuyerUtilityMap";
import { NonCustomerTiers } from "@/components/viz/NonCustomerTiers";
import { BoiSequence } from "@/components/viz/BoiSequence";
import { Toolbar } from "@/components/ui/Toolbar";

type Status = "pending" | "streaming" | "done" | "error";
type Section<T> = { status: Status; data: T | null; partial: unknown };

export type AnalysisViewProps = {
  company: string;
  industry: string;
  coreStatus: Status;
  core: Core | null;
  corePartial: unknown;
  sixPaths: Section<SixPathsT>;
  utilityMap: Section<UtilityMapT>;
  nonCustomers: Section<NonCustomersT>;
  boiSequence: Section<BoiSequenceT>;
  analysis: Analysis | null;
  retrySection: (
    key: "sixPaths" | "utilityMap" | "nonCustomers" | "boiSequence"
  ) => void;
  updateBlueOcean: (values: number[]) => void;
};

/* ── Partial sanitizers (streaming JSON may be incomplete) ── */

function isStr(v: unknown): v is string {
  return typeof v === "string" && v.length > 0;
}

function rec(v: unknown): Record<string, unknown> | null {
  return v && typeof v === "object" && !Array.isArray(v)
    ? (v as Record<string, unknown>)
    : null;
}

function arr(v: unknown): unknown[] {
  return Array.isArray(v) ? v : [];
}

function sanitizeCanvas(v: unknown): Canvas | null {
  const o = rec(v);
  if (!o) return null;
  const factors = arr(o.factors)
    .map(rec)
    .filter((f): f is Record<string, unknown> => !!f && isStr(f.name))
    .map((f) => ({ name: String(f.name), rationale: isStr(f.rationale) ? f.rationale : "" }));
  if (factors.length < 2) return null;
  const nums = (key: string) =>
    arr(o[key])
      .slice(0, factors.length)
      .map((n) => clampLevel(Number(n)));
  return { factors, industry: nums("industry"), blueOcean: nums("blueOcean") };
}

function sanitizeErrc(v: unknown): Errc | null {
  const o = rec(v);
  if (!o) return null;
  const items = (key: string) =>
    arr(o[key])
      .map(rec)
      .filter((i): i is Record<string, unknown> => !!i && isStr(i.title) && isStr(i.detail))
      .map((i) => ({ title: String(i.title), detail: String(i.detail) }));
  const result = {
    eliminate: items("eliminate"),
    reduce: items("reduce"),
    raise: items("raise"),
    create: items("create"),
  };
  return Object.values(result).some((list) => list.length > 0) ? result : null;
}

function sanitizeSummary(v: unknown): Core["summary"] | null {
  const o = rec(v);
  if (!o || !isStr(o.headline)) return null;
  return {
    headline: String(o.headline),
    narrative: isStr(o.narrative) ? o.narrative : "",
    redOceanTraits: arr(o.redOceanTraits).filter(isStr) as string[],
    blueOceanThesis: isStr(o.blueOceanThesis) ? o.blueOceanThesis : "",
  };
}

function sanitizeSixPaths(v: unknown): SixPathsT | null {
  const o = rec(v);
  if (!o) return null;
  const KEYS = [
    "alternative-industries",
    "strategic-groups",
    "buyer-chain",
    "complementary-offerings",
    "functional-emotional",
    "time-trends",
  ];
  const paths = arr(o.paths)
    .map(rec)
    .filter(
      (p): p is Record<string, unknown> =>
        !!p &&
        isStr(p.path) &&
        KEYS.includes(String(p.path)) &&
        isStr(p.title) &&
        isStr(p.insight) &&
        isStr(p.opportunity)
    )
    .map((p) => ({
      path: p.path as SixPathsT["paths"][number]["path"],
      title: String(p.title),
      insight: String(p.insight),
      opportunity: String(p.opportunity),
    }));
  return paths.length > 0 ? { paths } : null;
}

function sanitizeUtilityMap(v: unknown): UtilityMapT | null {
  const o = rec(v);
  if (!o) return null;
  const STAGES = ["purchase", "delivery", "use", "supplements", "maintenance", "disposal"];
  const LEVERS = ["productivity", "simplicity", "convenience", "risk", "fun-image", "eco"];
  const STATUSES = ["industry-focus", "blocked", "opportunity", "neutral"];
  const cells = arr(o.cells)
    .map(rec)
    .filter(
      (c): c is Record<string, unknown> =>
        !!c &&
        isStr(c.stage) &&
        STAGES.includes(String(c.stage)) &&
        isStr(c.lever) &&
        LEVERS.includes(String(c.lever)) &&
        isStr(c.status) &&
        STATUSES.includes(String(c.status))
    )
    .map((c) => ({
      stage: c.stage as UtilityMapT["cells"][number]["stage"],
      lever: c.lever as UtilityMapT["cells"][number]["lever"],
      status: c.status as UtilityMapT["cells"][number]["status"],
      note: isStr(c.note) ? String(c.note) : null,
    }));
  return cells.length > 0
    ? { cells, keyInsight: isStr(o.keyInsight) ? String(o.keyInsight) : "" }
    : null;
}

/* ── View ─────────────────────────────────────────────────── */

export function AnalysisView(props: AnalysisViewProps) {
  const { t, lang } = useI18n();
  const canvasWrapRef = useRef<HTMLDivElement>(null);

  const core = props.core;
  const partial = rec(props.corePartial);

  const summary = core?.summary ?? sanitizeSummary(partial?.summary);
  const canvas = core?.canvas ?? sanitizeCanvas(partial?.canvas);
  const errc = core?.errc ?? sanitizeErrc(partial?.errc);
  const moves = core?.moves ?? null;

  const coreSecStatus = (has: boolean): Status =>
    props.coreStatus === "done"
      ? "done"
      : props.coreStatus === "error"
        ? "error"
        : has
          ? "streaming"
          : "pending";

  const sixPathsPartial =
    props.sixPaths.data ?? sanitizeSixPaths(props.sixPaths.partial);
  const utilityPartial =
    props.utilityMap.data ?? sanitizeUtilityMap(props.utilityMap.partial);

  const exportPng = () => {
    const svg = canvasWrapRef.current?.querySelector("svg");
    if (!svg) return;
    exportSvgToPng(
      svg,
      props.company,
      [
        { label: t("canvas.industry"), color: "#F06B58" },
        { label: t("canvas.blueOcean"), color: "#58B4F0" },
      ],
      `blue-ocean-${slugify(props.company)}.png`
    );
  };

  return (
    <div className="space-y-12">
      {/* Print-only report header */}
      <div className="print-only print-section">
        <p className="text-xs uppercase tracking-widest">{t("report.title")}</p>
        <h1 className="font-serif text-3xl mt-1">
          {props.company} — {props.industry}
        </h1>
        <p className="text-xs mt-1">
          {t("report.generatedFor")} {props.company} ·{" "}
          {new Date().toLocaleDateString(lang)}
        </p>
      </div>

      {/* Toolbar */}
      {props.analysis && (
        <Toolbar analysis={props.analysis} onExportPng={exportPng} />
      )}

      {/* Summary */}
      {summary ? (
        <div className="fade-up">
          <SummaryBlock summary={summary} />
        </div>
      ) : props.coreStatus !== "error" ? (
        <div className="space-y-3">
          <div className="skeleton bg-surface2 rounded h-10 w-2/3" />
          <div className="skeleton bg-surface2 rounded h-4 w-full" />
          <div className="skeleton bg-surface2 rounded h-4 w-5/6" />
        </div>
      ) : null}

      {/* Strategy canvas */}
      <SectionShell
        title={t("section.canvas")}
        color="green"
        status={coreSecStatus(!!canvas)}
        skeleton={<CanvasSkeleton />}
        delay={0.05}
      >
        <div ref={canvasWrapRef}>
          {canvas && (
            <StrategyCanvas
              canvas={canvas}
              editable={props.coreStatus === "done"}
              onChange={props.updateBlueOcean}
              animate
            />
          )}
        </div>
      </SectionShell>

      {/* ERRC */}
      <SectionShell
        title={t("section.errc")}
        color="amber"
        status={coreSecStatus(!!errc)}
        skeleton={<GridSkeleton />}
        delay={0.1}
      >
        {errc && <ErrcGrid errc={errc} />}
      </SectionShell>

      {/* Moves */}
      {(moves || props.coreStatus !== "done") && (
        <SectionShell
          title={t("section.moves")}
          color="blue"
          status={coreSecStatus(!!moves)}
          skeleton={<GridSkeleton />}
          delay={0.15}
        >
          {moves && <StrategicMoves moves={moves} />}
        </SectionShell>
      )}

      {/* Six paths */}
      <SectionShell
        title={t("section.sixPaths")}
        color="green"
        status={props.sixPaths.status === "streaming" ? (sixPathsPartial ? "streaming" : "pending") : props.sixPaths.status}
        skeleton={<GridSkeleton />}
        onRetry={() => props.retrySection("sixPaths")}
        delay={0.05}
      >
        {sixPathsPartial && <SixPaths sixPaths={sixPathsPartial} />}
      </SectionShell>

      {/* Buyer utility map */}
      <SectionShell
        title={t("section.utilityMap")}
        color="blue"
        status={props.utilityMap.status === "streaming" ? (utilityPartial ? "streaming" : "pending") : props.utilityMap.status}
        skeleton={<MatrixSkeleton />}
        onRetry={() => props.retrySection("utilityMap")}
        delay={0.05}
      >
        {utilityPartial && <BuyerUtilityMap utilityMap={utilityPartial} />}
      </SectionShell>

      {/* Noncustomers (rendered once complete) */}
      <SectionShell
        title={t("section.nonCustomers")}
        color="green"
        status={props.nonCustomers.status === "streaming" ? "pending" : props.nonCustomers.status}
        skeleton={<TiersSkeleton />}
        onRetry={() => props.retrySection("nonCustomers")}
        delay={0.05}
      >
        {props.nonCustomers.data && (
          <NonCustomerTiers nonCustomers={props.nonCustomers.data} />
        )}
      </SectionShell>

      {/* BOI sequence (rendered once complete) */}
      <SectionShell
        title={t("section.boi")}
        color="amber"
        status={props.boiSequence.status === "streaming" ? "pending" : props.boiSequence.status}
        skeleton={<StepsSkeleton />}
        onRetry={() => props.retrySection("boiSequence")}
        delay={0.05}
      >
        {props.boiSequence.data && (
          <BoiSequence boiSequence={props.boiSequence.data} />
        )}
      </SectionShell>
    </div>
  );
}
