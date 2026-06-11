import type { Analysis, Language } from "@/lib/schema";
import { healthcare } from "./healthcare";
import { financial } from "./financial";
import { professional } from "./professional";
import { manufacturing } from "./manufacturing";
import { retail } from "./retail";
import { saas } from "./saas";
import { hospitality } from "./hospitality";
import { education } from "./education";

export type LocalizedPreset = { en: Analysis; nl: Analysis };

export type PresetId =
  | "healthcare"
  | "financial"
  | "professional"
  | "manufacturing"
  | "retail"
  | "saas"
  | "hospitality"
  | "education";

const REGISTRY: Record<PresetId, LocalizedPreset> = {
  healthcare,
  financial,
  professional,
  manufacturing,
  retail,
  saas,
  hospitality,
  education,
};

export type PresetMeta = {
  id: PresetId;
  name: { en: string; nl: string };
  sub: { en: string; nl: string };
};

export const PRESET_META: PresetMeta[] = (
  Object.keys(REGISTRY) as PresetId[]
).map((id) => ({
  id,
  name: {
    en: REGISTRY[id].en.meta.company,
    nl: REGISTRY[id].nl.meta.company,
  },
  sub: {
    en: REGISTRY[id].en.meta.industry,
    nl: REGISTRY[id].nl.meta.industry,
  },
}));

export function getPreset(id: string, lang: Language): Analysis | null {
  if (!(id in REGISTRY)) return null;
  return REGISTRY[id as PresetId][lang];
}
