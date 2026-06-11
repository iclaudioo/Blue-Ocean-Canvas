"use client";

import { useEffect, useRef, useState } from "react";
import {
  AnalysisSchema,
  CoreSchema,
  FRAMEWORK_SCHEMAS,
  clampLevel,
  type Analysis,
  type AnalysisMeta,
  type AnalyzeRequest,
  type BoiSequence,
  type Core,
  type FrameworkKey,
  type FrameworkRequest,
  type NonCustomers,
  type SixPaths,
  type UtilityMap,
} from "@/lib/schema";
import { saveToHistory } from "@/lib/history";
import { consumeSSE, tryPartialParse } from "@/lib/stream";

export type SectionKey = FrameworkKey;

export type SectionStatus = "pending" | "streaming" | "done" | "error";

export type SectionState<T> = {
  status: SectionStatus;
  data: T | null;
  partial: Partial<T> | null;
  error?: string;
};

type FrameworkData = {
  sixPaths: SixPaths;
  utilityMap: UtilityMap;
  nonCustomers: NonCustomers;
  boiSequence: BoiSequence;
};

export type Sections = { [K in SectionKey]: SectionState<FrameworkData[K]> };

export type AnalysisPhase = "idle" | "core" | "frameworks" | "done" | "error";

const SECTION_KEYS: SectionKey[] = [
  "sixPaths",
  "utilityMap",
  "nonCustomers",
  "boiSequence",
];

/** Throttle interval for partial-parse UI updates while streaming. */
const PARTIAL_THROTTLE_MS = 80;

function emptySection<T>(): SectionState<T> {
  return { status: "pending", data: null, partial: null };
}

function initialSections(): Sections {
  return {
    sixPaths: emptySection(),
    utilityMap: emptySection(),
    nonCustomers: emptySection(),
    boiSequence: emptySection(),
  };
}

function httpErrorCode(status: number): string {
  return status === 429 ? "rate_limited" : "api_error";
}

/** Clamp canvas level arrays on the raw parsed JSON before zod validation. */
function clampCanvasLevels(json: unknown): unknown {
  if (typeof json !== "object" || json === null) return json;
  const obj = json as { canvas?: unknown };
  if (typeof obj.canvas !== "object" || obj.canvas === null) return json;
  const canvas = obj.canvas as { industry?: unknown; blueOcean?: unknown };
  const fix = (arr: unknown) =>
    Array.isArray(arr) ? arr.map((n) => clampLevel(Number(n))) : arr;
  return {
    ...obj,
    canvas: {
      ...canvas,
      industry: fix(canvas.industry),
      blueOcean: fix(canvas.blueOcean),
    },
  };
}

export interface UseAnalysisResult {
  phase: AnalysisPhase;
  coreState: SectionState<Core>;
  sections: Sections;
  /** Assembled when core + all four sections are done. */
  analysis: Analysis | null;
  start: (req: AnalyzeRequest) => void;
  retrySection: (key: SectionKey) => void;
  /** For presets / share links / history: phase "done", everything populated. */
  loadExisting: (a: Analysis) => void;
  reset: () => void;
  /** Fatal core error code (e.g. "rate_limited", "api_error", "refusal"). */
  error: string | null;
  /** Slider edits on a finished analysis: immutable update + history save. */
  updateBlueOcean: (values: number[]) => void;
}

export function useAnalysis(): UseAnalysisResult {
  const [phase, setPhase] = useState<AnalysisPhase>("idle");
  const [coreState, setCoreState] = useState<SectionState<Core>>(emptySection);
  const [sections, setSections] = useState<Sections>(initialSections);
  const [analysis, setAnalysisState] = useState<Analysis | null>(null);
  const [error, setError] = useState<string | null>(null);

  const runIdRef = useRef(0);
  const abortRef = useRef<AbortController | null>(null);
  const metaRef = useRef<AnalysisMeta | null>(null);
  const coreRef = useRef<Core | null>(null);
  const resultsRef = useRef<Partial<FrameworkData>>({});
  const analysisRef = useRef<Analysis | null>(null);

  useEffect(() => {
    return () => {
      abortRef.current?.abort();
    };
  }, []);

  function setAnalysis(a: Analysis | null) {
    analysisRef.current = a;
    setAnalysisState(a);
  }

  function setSection<K extends SectionKey>(
    key: K,
    next:
      | SectionState<FrameworkData[K]>
      | ((prev: SectionState<FrameworkData[K]>) => SectionState<FrameworkData[K]>)
  ) {
    setSections(
      (prev) =>
        ({
          ...prev,
          [key]: typeof next === "function" ? next(prev[key]) : next,
        }) as Sections
    );
  }

  function failCore(run: number, code: string) {
    if (runIdRef.current !== run) return;
    setCoreState((s) => ({ ...s, status: "error", partial: null, error: code }));
    setPhase("error");
    setError(code);
  }

  function maybeAssemble(run: number) {
    if (runIdRef.current !== run) return;
    const core = coreRef.current;
    const meta = metaRef.current;
    const r = resultsRef.current;
    if (
      !core ||
      !meta ||
      !r.sixPaths ||
      !r.utilityMap ||
      !r.nonCustomers ||
      !r.boiSequence
    ) {
      return;
    }
    try {
      const assembled = AnalysisSchema.parse({
        v: 1,
        meta,
        core,
        sixPaths: r.sixPaths,
        utilityMap: r.utilityMap,
        nonCustomers: r.nonCustomers,
        boiSequence: r.boiSequence,
      });
      setAnalysis(assembled);
      setPhase("done");
      saveToHistory(assembled);
    } catch {
      setPhase("error");
      setError("api_error");
    }
  }

  async function runSection<K extends SectionKey>(
    run: number,
    key: K,
    retry: boolean,
    signal: AbortSignal,
    autoRetryLeft: boolean
  ): Promise<void> {
    const core = coreRef.current;
    const meta = metaRef.current;
    if (!core || !meta || runIdRef.current !== run) return;

    setSection(key, { status: "streaming", data: null, partial: null });

    const body: FrameworkRequest = {
      framework: key,
      core,
      meta: {
        company: meta.company,
        industry: meta.industry,
        context: meta.context,
        language: meta.language,
      },
      retry: retry ? true : undefined,
    };

    let res: Response;
    try {
      res = await fetch("/api/framework", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify(body),
        signal,
      });
    } catch {
      if (signal.aborted || runIdRef.current !== run) return;
      if (autoRetryLeft) {
        // One automatic silent retry on network-level failure.
        void runSection(run, key, retry, signal, false);
        return;
      }
      setSection(key, {
        status: "error",
        data: null,
        partial: null,
        error: "api_error",
      });
      return;
    }
    if (runIdRef.current !== run) return;
    if (!res.ok) {
      setSection(key, {
        status: "error",
        data: null,
        partial: null,
        error: httpErrorCode(res.status),
      });
      return;
    }

    let full = "";
    let lastParse = 0;
    let failed = false;
    let finished = false;

    await consumeSSE(
      res,
      {
        onText: (text) => {
          full = text;
          const now = Date.now();
          if (now - lastParse < PARTIAL_THROTTLE_MS || runIdRef.current !== run)
            return;
          lastParse = now;
          const partial = tryPartialParse<FrameworkData[K]>(text);
          if (partial) {
            setSection(key, (s) => ({ ...s, status: "streaming", partial }));
          }
        },
        onDone: () => {
          finished = true;
        },
        onError: (code) => {
          failed = true;
          if (runIdRef.current === run) {
            setSection(key, {
              status: "error",
              data: null,
              partial: null,
              error: code,
            });
          }
        },
      },
      signal
    );

    if (runIdRef.current !== run || signal.aborted || failed || !finished) return;

    let data: FrameworkData[K] | null = null;
    try {
      const result = FRAMEWORK_SCHEMAS[key].safeParse(JSON.parse(full));
      if (result.success) data = result.data as FrameworkData[K];
    } catch {
      // fall through to error state
    }

    if (!data) {
      setSection(key, {
        status: "error",
        data: null,
        partial: null,
        error: "api_error",
      });
      return;
    }

    resultsRef.current[key] = data;
    setSection(key, { status: "done", data, partial: null });
    maybeAssemble(run);
  }

  async function runCore(
    run: number,
    req: AnalyzeRequest,
    signal: AbortSignal
  ): Promise<void> {
    let res: Response;
    try {
      res = await fetch("/api/analyze", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify(req),
        signal,
      });
    } catch {
      if (signal.aborted || runIdRef.current !== run) return;
      failCore(run, "api_error");
      return;
    }
    if (runIdRef.current !== run) return;
    if (!res.ok) {
      failCore(run, httpErrorCode(res.status));
      return;
    }

    let full = "";
    let lastParse = 0;
    let failed = false;
    let finished = false;

    await consumeSSE(
      res,
      {
        onText: (text) => {
          full = text;
          const now = Date.now();
          if (now - lastParse < PARTIAL_THROTTLE_MS || runIdRef.current !== run)
            return;
          lastParse = now;
          const partial = tryPartialParse<Core>(text);
          if (partial) {
            setCoreState((s) => ({ ...s, status: "streaming", partial }));
          }
        },
        onDone: () => {
          finished = true;
        },
        onError: (code) => {
          failed = true;
          failCore(run, code);
        },
      },
      signal
    );

    if (runIdRef.current !== run || signal.aborted || failed || !finished) return;

    let parsedCore: Core | null = null;
    try {
      const result = CoreSchema.safeParse(clampCanvasLevels(JSON.parse(full)));
      if (result.success) parsedCore = result.data;
    } catch {
      // fall through to error state
    }

    if (!parsedCore) {
      failCore(run, "api_error");
      return;
    }

    coreRef.current = parsedCore;
    setCoreState({ status: "done", data: parsedCore, partial: null });
    setPhase("frameworks");

    // Fire all four framework calls in parallel.
    for (const key of SECTION_KEYS) {
      void runSection(run, key, false, signal, true);
    }
  }

  function start(req: AnalyzeRequest): void {
    abortRef.current?.abort();
    const controller = new AbortController();
    abortRef.current = controller;
    const run = ++runIdRef.current;

    const meta: AnalysisMeta = {
      id: crypto.randomUUID(),
      company: req.company,
      industry: req.industry,
      context: req.context,
      language: req.language,
      source: "ai",
      generatedAt: new Date().toISOString(),
    };
    metaRef.current = meta;
    coreRef.current = null;
    resultsRef.current = {};
    setAnalysis(null);
    setError(null);
    setCoreState({ status: "streaming", data: null, partial: null });
    setSections(initialSections());
    setPhase("core");

    void runCore(run, req, controller.signal);
  }

  function retrySection(key: SectionKey): void {
    if (!coreRef.current || !metaRef.current) return;
    const run = runIdRef.current;

    let controller = abortRef.current;
    if (!controller || controller.signal.aborted) {
      controller = new AbortController();
      abortRef.current = controller;
    }

    setPhase("frameworks");
    delete resultsRef.current[key];
    void runSection(run, key, true, controller.signal, true);
  }

  function loadExisting(a: Analysis): void {
    abortRef.current?.abort();
    abortRef.current = null;
    runIdRef.current += 1;

    metaRef.current = a.meta;
    coreRef.current = a.core;
    resultsRef.current = {
      sixPaths: a.sixPaths,
      utilityMap: a.utilityMap,
      nonCustomers: a.nonCustomers,
      boiSequence: a.boiSequence,
    };
    setError(null);
    setCoreState({ status: "done", data: a.core, partial: null });
    setSections({
      sixPaths: { status: "done", data: a.sixPaths, partial: null },
      utilityMap: { status: "done", data: a.utilityMap, partial: null },
      nonCustomers: { status: "done", data: a.nonCustomers, partial: null },
      boiSequence: { status: "done", data: a.boiSequence, partial: null },
    });
    setAnalysis(a);
    setPhase("done");
  }

  function reset(): void {
    abortRef.current?.abort();
    abortRef.current = null;
    runIdRef.current += 1;

    metaRef.current = null;
    coreRef.current = null;
    resultsRef.current = {};
    setAnalysis(null);
    setError(null);
    setCoreState(emptySection());
    setSections(initialSections());
    setPhase("idle");
  }

  function updateBlueOcean(values: number[]): void {
    const prev = analysisRef.current;
    if (!prev) return;
    const blueOcean = values.map(clampLevel);
    const next: Analysis = {
      ...prev,
      core: {
        ...prev.core,
        canvas: { ...prev.core.canvas, blueOcean },
      },
    };
    coreRef.current = next.core;
    setAnalysis(next);
    setCoreState((s) => (s.data ? { ...s, data: next.core } : s));
    saveToHistory(next);
  }

  return {
    phase,
    coreState,
    sections,
    analysis,
    start,
    retrySection,
    loadExisting,
    reset,
    error,
    updateBlueOcean,
  };
}
