import { AnalysisSchema, type Analysis } from "@/lib/schema";

const KEY = "boc:history";
const CAP = 20;

function readAll(): Analysis[] {
  try {
    const raw = localStorage.getItem(KEY);
    if (!raw) return [];
    const arr = JSON.parse(raw);
    if (!Array.isArray(arr)) return [];
    return arr
      .map((item) => AnalysisSchema.safeParse(item))
      .filter((r) => r.success)
      .map((r) => r.data);
  } catch {
    return [];
  }
}

function writeAll(items: Analysis[]): void {
  try {
    localStorage.setItem(KEY, JSON.stringify(items.slice(0, CAP)));
  } catch {
    // quota exceeded / private mode — history is best-effort
  }
}

/** Newest first. */
export function listHistory(): Analysis[] {
  return readAll();
}

export function getFromHistory(id: string): Analysis | null {
  return readAll().find((a) => a.meta.id === id) ?? null;
}

/** Upsert by meta.id, move to front, evict beyond cap (LRU). */
export function saveToHistory(analysis: Analysis): void {
  const rest = readAll().filter((a) => a.meta.id !== analysis.meta.id);
  writeAll([analysis, ...rest]);
}

export function deleteFromHistory(id: string): void {
  writeAll(readAll().filter((a) => a.meta.id !== id));
}
