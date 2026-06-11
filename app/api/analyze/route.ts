import { AnalyzeRequestSchema } from "@/lib/schema";
import { streamCore } from "@/lib/ai/orchestrate";
import { checkRateLimit, originAllowed, rateLimitKey } from "@/lib/rate-limit";

export const maxDuration = 120;

const SSE_HEADERS = {
  "Content-Type": "text/event-stream",
  "Cache-Control": "no-cache, no-transform",
  Connection: "keep-alive",
} as const;

export async function POST(req: Request): Promise<Response> {
  if (!originAllowed(req)) {
    return Response.json({ error: "forbidden" }, { status: 403 });
  }

  const limit = checkRateLimit(rateLimitKey(req), "analyze");
  if (!limit.ok) {
    return Response.json(
      { error: "rate_limited" },
      {
        status: 429,
        headers: { "Retry-After": String(limit.retryAfterSec ?? 3600) },
      }
    );
  }

  let body: unknown;
  try {
    body = await req.json();
  } catch {
    return Response.json({ error: "invalid_json" }, { status: 400 });
  }

  const parsed = AnalyzeRequestSchema.safeParse(body);
  if (!parsed.success) {
    return Response.json({ error: "invalid_request" }, { status: 400 });
  }

  return new Response(streamCore(parsed.data), { headers: SSE_HEADERS });
}
