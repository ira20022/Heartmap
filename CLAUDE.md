# CLAUDE.md

This file provides guidance to Claude Code (claude.ai/code) when working with code in this repository.

## Commands

```bash
npm run dev          # Start dev server on port 4028
npm run build        # Production build
npm run serve        # Start production server
npm run lint         # ESLint check
npm run lint:fix     # ESLint auto-fix
npm run format       # Prettier format
npm run type-check   # TypeScript check (no emit)
```

## Architecture

Next.js 15 App Router app with React 19, TypeScript, and Tailwind CSS. Dark theme via CSS custom properties in `src/styles/tailwind.css`.

**Pages (App Router):**
- `/` → Sign up / login screen (entry point redirects to `sign-up-login-screen`)
- `/quiz-screen` → 30-question behavioral quiz (the `QUESTIONS` array and quiz state live entirely in `QuizClient.tsx`)
- `/persona-results-screen` → Persona profile with 3 tabs: Traits, States, Compatibility
- `/partner-compatibility-screen` → Select two personas and run AI-powered compatibility analysis

**API Routes (all under `/api/ai/`):**
- `chat-completion/route.ts` — Universal AI proxy using `@rocketnew/llm-sdk`. Supports `OPEN_AI`, `ANTHROPIC`, `GEMINI`, `PERPLEXITY` providers. Handles both streaming (SSE) and non-streaming requests. Requires the corresponding `*_API_KEY` env var.
- `persona-analyze/route.ts` — Takes quiz answers, calls GPT-4.1-mini via the chat completion lib, returns a structured persona profile JSON.
- `compatibility-score/route.ts` — Takes two personas, calls GPT-4.1-mini, returns a compatibility report JSON.

**AI Client lib (`src/lib/ai/`):**
- `aiClient.ts` — Generic POST helper, throws on error responses.
- `chatCompletion.ts` — Wraps the chat-completion endpoint. `getChatCompletion()` for fire-and-forget, `getStreamingChatCompletion()` for SSE stream parsing (chunk/done/error event types).
- `hooks/useChat.ts` — React hook wrapping chatCompletion for component-level AI usage with streaming state.

**Current state notes:**
- The quiz saves answers to local state (`AnswerMap`) but **does not call `/api/ai/persona-analyze`** — it simulates a delay then navigates to results.
- The persona results screen uses hardcoded `MOCK_PERSONA` data instead of fetching from an API.
- The compatibility screen **does** call `/api/ai/compatibility-score` with real API integration.
- The `@dhiwise/component-tagger` webpack loader is configured in `next.config.mjs` — do not remove it.

**Design tokens** (all in `src/styles/tailwind.css` `:root`): background `#0D0F1A`, foreground `#F0EEF8`, primary `#E8547A` (rose), accent `#A78BFA` (violet), muted `#252840`. Custom utility classes include `.bg-gradient-hero`, `.bg-gradient-card`, `.card-border-glow`, `.text-gradient-aurora`, `.blur-premium`.