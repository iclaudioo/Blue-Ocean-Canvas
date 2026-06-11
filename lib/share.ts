import LZString from "lz-string";
import { AnalysisSchema, type Analysis } from "@/lib/schema";

const HASH_PREFIX = "a=";

/** Serialize an analysis into a URL hash value (without leading '#'). */
export function encodeShare(analysis: Analysis): string {
  return (
    HASH_PREFIX +
    LZString.compressToEncodedURIComponent(JSON.stringify(analysis))
  );
}

/**
 * Parse a location.hash (with or without '#') back into an Analysis.
 * Returns null on any malformed/legacy input — callers fall back gracefully.
 */
export function decodeShare(hash: string): Analysis | null {
  try {
    const raw = hash.startsWith("#") ? hash.slice(1) : hash;
    if (!raw.startsWith(HASH_PREFIX)) return null;
    const json = LZString.decompressFromEncodedURIComponent(
      raw.slice(HASH_PREFIX.length)
    );
    if (!json) return null;
    const parsed = AnalysisSchema.safeParse(JSON.parse(json));
    return parsed.success ? parsed.data : null;
  } catch {
    return null;
  }
}

/** Full shareable URL for the current page + analysis. */
export function shareUrl(analysis: Analysis): string {
  const base = `${location.origin}/analysis`;
  return `${base}#${encodeShare(analysis)}`;
}
