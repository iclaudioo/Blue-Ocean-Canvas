// Server-only module: imported exclusively from app/api/* route handlers.
// Never import this from client components — it reads ANTHROPIC_API_KEY.

import Anthropic from "@anthropic-ai/sdk";
import { zodOutputFormat } from "@anthropic-ai/sdk/helpers/zod";
import {
  CoreSchema,
  FRAMEWORK_SCHEMAS,
  type AnalyzeRequest,
  type FrameworkRequest,
} from "@/lib/schema";
import {
  SYSTEM_PROMPT,
  buildCorePrompt,
  buildFrameworkPrompt,
} from "@/lib/ai/prompts";
import { MOCK_CORE, MOCK_FRAMEWORKS } from "@/lib/ai/mock";

const MODEL = "claude-sonnet-4-6";
const CORE_MAX_TOKENS = 8000;
const FRAMEWORK_MAX_TOKENS = 4000;
const FRAMEWORK_RETRY_MAX_TOKENS = 6000;

/** SSE event payloads emitted on the wire as `data: <json>\n\n`. */
type SSEEvent =
  | { t: string }
  | { done: true; stopReason: string }
  | { error: { code: string; message: string } };

type Emit = (event: SSEEvent) => void;

/** Map SDK / unknown errors to safe client-facing error events. */
function toErrorEvent(err: unknown): { code: string; message: string } {
  if (err instanceof Anthropic.RateLimitError) {
    return {
      code: "rate_limited",
      message: "The AI service is rate limited right now. Try again shortly.",
    };
  }
  if (err instanceof Anthropic.APIError) {
    if (err.status === 529) {
      return {
        code: "overloaded",
        message: "The AI service is temporarily overloaded. Try again shortly.",
      };
    }
    return {
      code: "api_error",
      message: "The AI service returned an error. Please try again.",
    };
  }
  return {
    code: "api_error",
    message: "Something went wrong while generating. Please try again.",
  };
}

/**
 * Wrap an async producer in an SSE-encoded ReadableStream.
 * Errors are mapped to a terminal {error} event; raw internals never leak.
 */
function sseStream(
  run: (emit: Emit, signal: AbortSignal) => Promise<void>
): ReadableStream<Uint8Array> {
  const encoder = new TextEncoder();
  const abort = new AbortController();
  let closed = false;

  return new ReadableStream<Uint8Array>({
    async start(controller) {
      const emit: Emit = (event) => {
        if (closed) return;
        try {
          controller.enqueue(encoder.encode(`data: ${JSON.stringify(event)}\n\n`));
        } catch {
          closed = true;
        }
      };
      try {
        await run(emit, abort.signal);
      } catch (err) {
        if (!abort.signal.aborted) emit({ error: toErrorEvent(err) });
      } finally {
        if (!closed) {
          closed = true;
          try {
            controller.close();
          } catch {
            // already closed/errored — nothing to do
          }
        }
      }
    },
    cancel() {
      closed = true;
      abort.abort();
    },
  });
}

/** Stream a fixture in ~40-char chunks every ~15ms to exercise the streaming UI. */
function streamMock(payload: unknown): ReadableStream<Uint8Array> {
  return sseStream(async (emit, signal) => {
    const text = JSON.stringify(payload);
    for (let i = 0; i < text.length; i += 40) {
      if (signal.aborted) return;
      emit({ t: text.slice(i, i + 40) });
      await new Promise((resolve) => setTimeout(resolve, 15));
    }
    emit({ done: true, stopReason: "end_turn" });
  });
}

interface ClaudeCall {
  maxTokens: number;
  userPrompt: string;
  format: ReturnType<typeof zodOutputFormat>;
}

function streamClaude(call: ClaudeCall): ReadableStream<Uint8Array> {
  return sseStream(async (emit, signal) => {
    const client = new Anthropic();
    const stream = client.messages.stream(
      {
        model: MODEL,
        max_tokens: call.maxTokens,
        thinking: { type: "adaptive" },
        output_config: { format: call.format },
        system: [
          {
            type: "text",
            text: SYSTEM_PROMPT,
            cache_control: { type: "ephemeral" },
          },
        ],
        messages: [{ role: "user", content: call.userPrompt }],
      },
      { signal }
    );

    stream.on("text", (delta) => emit({ t: delta }));

    const final = await stream.finalMessage();
    if (final.stop_reason === "max_tokens") {
      emit({
        error: {
          code: "max_tokens",
          message:
            "The analysis was cut off before completing. Retry to regenerate with more room.",
        },
      });
      return;
    }
    if (final.stop_reason === "refusal") {
      emit({
        error: {
          code: "refusal",
          message:
            "The AI declined to analyze this input. Try rephrasing the company or industry description.",
        },
      });
      return;
    }
    emit({ done: true, stopReason: final.stop_reason ?? "end_turn" });
  });
}

/** Phase 1: stream the core analysis (summary, canvas, ERRC, moves) as SSE. */
export function streamCore(req: AnalyzeRequest): ReadableStream<Uint8Array> {
  if (process.env.MOCK_AI) {
    return streamMock(MOCK_CORE);
  }
  return streamClaude({
    maxTokens: CORE_MAX_TOKENS,
    userPrompt: buildCorePrompt(req),
    format: zodOutputFormat(CoreSchema),
  });
}

/** Phase 2: stream one framework section, seeded with the full core JSON. */
export function streamFramework(
  req: FrameworkRequest
): ReadableStream<Uint8Array> {
  if (process.env.MOCK_AI) {
    return streamMock(MOCK_FRAMEWORKS[req.framework]);
  }
  return streamClaude({
    maxTokens: req.retry ? FRAMEWORK_RETRY_MAX_TOKENS : FRAMEWORK_MAX_TOKENS,
    userPrompt: buildFrameworkPrompt(req.framework, req.core, req.meta),
    format: zodOutputFormat(FRAMEWORK_SCHEMAS[req.framework]),
  });
}
