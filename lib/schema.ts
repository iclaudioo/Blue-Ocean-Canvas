import { z } from "zod";

/**
 * Canonical Blue Ocean analysis model.
 * Presets and AI output both conform to AnalysisSchema.
 * Numeric range constraints are validated client-side (the structured-outputs
 * API strips min/max; zod enforces them on parse).
 */

export const Level = z.number().int().min(0).max(5);

export const CanvasSchema = z.object({
  factors: z.array(
    z.object({
      name: z.string(),
      rationale: z.string(),
    })
  ),
  industry: z.array(Level),
  blueOcean: z.array(Level),
});

export const ErrcItem = z.object({ title: z.string(), detail: z.string() });

export const ErrcSchema = z.object({
  eliminate: z.array(ErrcItem),
  reduce: z.array(ErrcItem),
  raise: z.array(ErrcItem),
  create: z.array(ErrcItem),
});

export const MoveSchema = z.object({ title: z.string(), body: z.string() });

export const CoreSchema = z.object({
  summary: z.object({
    headline: z.string(),
    narrative: z.string(),
    redOceanTraits: z.array(z.string()),
    blueOceanThesis: z.string(),
  }),
  canvas: CanvasSchema,
  errc: ErrcSchema,
  moves: z.array(MoveSchema),
});

export const SixPathKeys = [
  "alternative-industries",
  "strategic-groups",
  "buyer-chain",
  "complementary-offerings",
  "functional-emotional",
  "time-trends",
] as const;

export const SixPathsSchema = z.object({
  paths: z.array(
    z.object({
      path: z.enum(SixPathKeys),
      title: z.string(),
      insight: z.string(),
      opportunity: z.string(),
    })
  ),
});

export const UtilityStages = [
  "purchase",
  "delivery",
  "use",
  "supplements",
  "maintenance",
  "disposal",
] as const;

export const UtilityLevers = [
  "productivity",
  "simplicity",
  "convenience",
  "risk",
  "fun-image",
  "eco",
] as const;

export const UtilityCellStatus = z.enum([
  "industry-focus",
  "blocked",
  "opportunity",
  "neutral",
]);

export const UtilityMapSchema = z.object({
  cells: z.array(
    z.object({
      stage: z.enum(UtilityStages),
      lever: z.enum(UtilityLevers),
      status: UtilityCellStatus,
      note: z.string().nullable(),
    })
  ),
  keyInsight: z.string(),
});

export const NonCustomersSchema = z.object({
  tiers: z.array(
    z.object({
      tier: z.enum(["first", "second", "third"]),
      label: z.string(),
      whoTheyAre: z.string(),
      whyTheyLeave: z.string(),
      unlockStrategy: z.string(),
      relativeSize: z.enum(["small", "medium", "large"]),
    })
  ),
});

export const BoiGates = ["utility", "price", "cost", "adoption"] as const;

export const BoiSequenceSchema = z.object({
  steps: z.array(
    z.object({
      gate: z.enum(BoiGates),
      question: z.string(),
      verdict: z.enum(["pass", "risk", "fail"]),
      assessment: z.string(),
      actions: z.array(z.string()),
    })
  ),
  overallVerdict: z.enum(["go", "rework", "no-go"]),
  conclusion: z.string(),
});

export const LanguageSchema = z.enum(["en", "nl"]);

export const MetaSchema = z.object({
  id: z.string(),
  company: z.string(),
  industry: z.string(),
  context: z.string().optional(),
  language: LanguageSchema,
  source: z.enum(["preset", "ai"]),
  generatedAt: z.string(),
});

export const AnalysisSchema = z.object({
  v: z.literal(1),
  meta: MetaSchema,
  core: CoreSchema,
  sixPaths: SixPathsSchema,
  utilityMap: UtilityMapSchema,
  nonCustomers: NonCustomersSchema,
  boiSequence: BoiSequenceSchema,
});

export type Level5 = z.infer<typeof Level>;
export type Canvas = z.infer<typeof CanvasSchema>;
export type Errc = z.infer<typeof ErrcSchema>;
export type Move = z.infer<typeof MoveSchema>;
export type Core = z.infer<typeof CoreSchema>;
export type SixPaths = z.infer<typeof SixPathsSchema>;
export type SixPathKey = (typeof SixPathKeys)[number];
export type UtilityMap = z.infer<typeof UtilityMapSchema>;
export type UtilityStage = (typeof UtilityStages)[number];
export type UtilityLever = (typeof UtilityLevers)[number];
export type NonCustomers = z.infer<typeof NonCustomersSchema>;
export type BoiSequence = z.infer<typeof BoiSequenceSchema>;
export type BoiGate = (typeof BoiGates)[number];
export type Language = z.infer<typeof LanguageSchema>;
export type AnalysisMeta = z.infer<typeof MetaSchema>;
export type Analysis = z.infer<typeof AnalysisSchema>;

/** One AI framework section (phase-2 calls). */
export const FrameworkKeySchema = z.enum([
  "sixPaths",
  "utilityMap",
  "nonCustomers",
  "boiSequence",
]);
export type FrameworkKey = z.infer<typeof FrameworkKeySchema>;

export const FRAMEWORK_SCHEMAS = {
  sixPaths: SixPathsSchema,
  utilityMap: UtilityMapSchema,
  nonCustomers: NonCustomersSchema,
  boiSequence: BoiSequenceSchema,
} as const;

/** Request body for /api/analyze */
export const AnalyzeRequestSchema = z.object({
  company: z.string().min(1).max(120),
  industry: z.string().min(1).max(120),
  context: z.string().max(600).optional(),
  language: LanguageSchema,
});
export type AnalyzeRequest = z.infer<typeof AnalyzeRequestSchema>;

/** Request body for /api/framework */
export const FrameworkRequestSchema = z.object({
  framework: FrameworkKeySchema,
  core: CoreSchema,
  meta: z.object({
    company: z.string().min(1).max(120),
    industry: z.string().min(1).max(120),
    context: z.string().max(600).optional(),
    language: LanguageSchema,
  }),
  retry: z.boolean().optional(),
});
export type FrameworkRequest = z.infer<typeof FrameworkRequestSchema>;

/** Clamp helper used when restoring slider state from URLs/storage. */
export const clampLevel = (n: number): number =>
  Math.max(0, Math.min(5, Math.round(Number(n) || 0)));
