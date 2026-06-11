import { parse as parsePartialJSON } from "partial-json";

/**
 * Client-side SSE consumption for /api/analyze and /api/framework.
 * Server frames are `data: <json>\n\n` where json is one of:
 *   {t: string}                                  — text delta
 *   {done: true, stopReason: string}             — successful end
 *   {error: {code: string, message: string}}     — terminal failure
 */

export interface SSEHandlers {
  /** Called with the FULL accumulated text on each delta (caller does partial parsing). */
  onText: (full: string) => void;
  onDone: (stopReason: string) => void;
  onError: (code: string, message: string) => void;
}

export async function consumeSSE(
  res: Response,
  handlers: SSEHandlers,
  signal?: AbortSignal
): Promise<void> {
  if (!res.body) {
    handlers.onError("api_error", "Empty response body.");
    return;
  }

  const reader = res.body.getReader();
  const decoder = new TextDecoder();
  let buffer = "";
  let accumulated = "";
  let terminated = false;

  const onAbort = () => {
    reader.cancel().catch(() => {});
  };
  signal?.addEventListener("abort", onAbort, { once: true });

  const handleFrame = (frame: string) => {
    for (const line of frame.split("\n")) {
      if (!line.startsWith("data:")) continue;
      const payload = line.slice(5).trim();
      if (!payload) continue;

      let event: unknown;
      try {
        event = JSON.parse(payload);
      } catch {
        continue; // malformed frame — skip defensively
      }
      if (typeof event !== "object" || event === null) continue;
      const e = event as {
        t?: unknown;
        done?: unknown;
        stopReason?: unknown;
        error?: { code?: unknown; message?: unknown };
      };

      if (typeof e.t === "string") {
        accumulated += e.t;
        handlers.onText(accumulated);
      } else if (e.done === true) {
        terminated = true;
        handlers.onDone(typeof e.stopReason === "string" ? e.stopReason : "end_turn");
      } else if (e.error) {
        terminated = true;
        handlers.onError(
          typeof e.error.code === "string" ? e.error.code : "api_error",
          typeof e.error.message === "string" ? e.error.message : ""
        );
      }
    }
  };

  try {
    for (;;) {
      const { done, value } = await reader.read();
      if (done) break;
      buffer += decoder.decode(value, { stream: true });

      let sep: number;
      while ((sep = buffer.indexOf("\n\n")) !== -1) {
        const frame = buffer.slice(0, sep);
        buffer = buffer.slice(sep + 2);
        handleFrame(frame);
        if (terminated) return;
      }
    }
    // Stream ended without a terminal event (network drop, server crash).
    if (!terminated && !signal?.aborted) {
      handlers.onError("api_error", "The stream ended unexpectedly.");
    }
  } finally {
    signal?.removeEventListener("abort", onAbort);
  }
}

/**
 * Best-effort partial JSON parse of an in-flight structured-output stream.
 * Strips any leading non-`{` noise defensively; returns null until a usable
 * partial object exists.
 */
export function tryPartialParse<T>(text: string): T | null {
  const start = text.indexOf("{");
  if (start === -1) return null;
  try {
    const parsed = parsePartialJSON(text.slice(start));
    return typeof parsed === "object" && parsed !== null ? (parsed as T) : null;
  } catch {
    return null;
  }
}
