# Blue Ocean Strategy Studio

AI-powered Blue Ocean Strategy analysis for any company and industry. Enter a
company and sector, and the studio generates a full, coherent analysis rendered
into interactive visualizations:

- **Strategy canvas** — industry vs. blue ocean value curves, editable via sliders
- **Four actions framework (ERRC)** — eliminate / reduce / raise / create
- **Six paths framework** — six exploration directions with sector-specific insights
- **Buyer utility map** — the 6×6 utility levers × buyer experience cycle heatmap
- **Three tiers of noncustomers** — concentric-circle visualization with unlock strategies
- **Blue ocean strategy sequence** — utility → price → cost → adoption gate check

Eight curated example industries work instantly without an API key, in both
English and Dutch. AI generation streams in progressively, section by section.

Based on *Blue Ocean Strategy* by W. Chan Kim & Renée Mauborgne.

## Stack

Next.js (App Router) · TypeScript · Tailwind CSS v4 · custom SVG visualizations ·
Claude API (`claude-sonnet-4-6`) with structured outputs, streamed over SSE.
No database; sharing is a compressed URL hash, history lives in localStorage.

## Development

```bash
npm install
cp .env.example .env.local   # add your ANTHROPIC_API_KEY
npm run dev
```

To develop without an API key, set `MOCK_AI=1` in `.env.local` — the API routes
stream a built-in fixture so the full streaming UX works offline.

Checks: `npm run lint`, `npx tsc --noEmit`, `npm run build`.

## Deployment (Vercel)

1. Import the repository in Vercel.
2. Set the `ANTHROPIC_API_KEY` environment variable.
3. Deploy. The AI routes use the Node runtime with `maxDuration = 120`;
   streaming starts within seconds so function timeouts are not an issue on
   Hobby (fluid compute) or Pro plans.

### Rate limiting

The API routes apply an in-memory sliding window per IP (6 analyses/hour,
40 framework calls/hour) plus an Origin check and strict input length caps.
On serverless this is per-warm-instance — adequate for a portfolio tool whose
real cost ceiling is the per-call `max_tokens` cap. For strict limits, swap
`lib/rate-limit.ts` for `@upstash/ratelimit` backed by Redis.

## Project layout

```
app/                  pages + API routes (analyze, framework)
components/viz/       the six framework visualizations (custom SVG/CSS)
components/analysis/  results page composition, skeletons, section shells
components/landing/   hero, waves, form, example gallery, history
lib/schema.ts         canonical zod Analysis model (single source of truth)
lib/ai/               prompts, Claude orchestration, mock fixtures
lib/presets/          8 curated industries × 2 languages
lib/i18n/             EN/NL dictionaries + provider
legacy/index.html     the original single-file app, kept for reference
```

## Credits

Built with [Claude](https://claude.ai) ·
[Claudio Swijsen](https://www.linkedin.com/in/claudioswijsen/)
