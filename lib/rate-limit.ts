/**
 * In-memory sliding-window rate limiter for the API routes.
 * Best-effort: state lives in the server process (resets on redeploy,
 * not shared across instances) — fine for this app's abuse ceiling.
 */

export type RateLimitBucket = "analyze" | "framework";

const WINDOW_MS = 60 * 60 * 1000; // 1 hour

const LIMITS: Record<RateLimitBucket, number> = {
  analyze: 6,
  framework: 40,
};

/** bucket:key → sorted timestamps (ms) of accepted requests inside the window. */
const hits = new Map<string, number[]>();

export function checkRateLimit(
  key: string,
  bucket: RateLimitBucket
): { ok: boolean; retryAfterSec?: number } {
  const now = Date.now();
  const mapKey = `${bucket}:${key}`;
  const recent = (hits.get(mapKey) ?? []).filter((t) => now - t < WINDOW_MS);

  if (recent.length >= LIMITS[bucket]) {
    hits.set(mapKey, recent);
    const retryAfterSec = Math.max(
      1,
      Math.ceil((recent[0] + WINDOW_MS - now) / 1000)
    );
    return { ok: false, retryAfterSec };
  }

  recent.push(now);
  hits.set(mapKey, recent);
  return { ok: true };
}

/** Rate-limit key: first hop of x-forwarded-for, falling back to "local". */
export function rateLimitKey(req: Request): string {
  const xff = req.headers.get("x-forwarded-for");
  const first = xff?.split(",")[0]?.trim();
  return first || "local";
}

/**
 * True when there is no Origin header (same-origin navigations, curl) or the
 * Origin host matches the request Host. Blocks cross-site browser POSTs.
 */
export function originAllowed(req: Request): boolean {
  const origin = req.headers.get("origin");
  if (!origin) return true;
  const host = req.headers.get("host");
  if (!host) return false;
  try {
    return new URL(origin).host === host;
  } catch {
    return false;
  }
}
