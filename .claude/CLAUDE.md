# CLAUDE.md

This file provides guidance to Claude Code (claude.ai/code) when working with code in this repository.

## Project Overview

`finviz-ts` is a TypeScript npm package that provides a typed client for the [Finviz Elite API](https://finviz.com/api_explanation.ashx). It wraps authentication, HTTP transport, and the main endpoints (quote, screener, news) behind a clean, promise-based interface. The API is a CSV export-based API.

## Commands

```bash
# Install dependencies
npm install

# Build (CJS + ESM + .d.ts via tsup)
npm run build

# Watch mode
npm run dev

# Type-check without emitting
npm run typecheck

# Lint
npm run lint
npm run lint:fix

# Run all tests
npm test

# Run a single test file
npx jest tests/quote.test.ts

# Run tests with coverage
npm run test:coverage
```

## Architecture

```
src/
  index.ts      # Public API surface — re-exports everything
  client.ts     # FinvizClient class — wraps axios, injects auth_token on every request
  types.ts      # All shared TypeScript interfaces and types
  quote.ts      # getQuote(client, ticker) → QuoteData
  screener.ts   # getScreener(client, options) → ScreenerRow[]
  news.ts       # getNews(client, options) → NewsItem[]

tests/
  client.test.ts
  quote.test.ts
  screener.test.ts
  news.test.ts
```

### Key design decisions

- **`FinvizClient` is the single transport layer.** Every module function accepts a `FinvizClient` instance and delegates to `client.get()`. Consumers construct one client and pass it around.
- **Auth is injected by the client.** `auth_token` is appended to every request automatically in `client.get()` — individual modules never handle auth.
- **Endpoint paths are placeholders.** The exact paths (`/api/quote.ashx`, etc.) need to be verified against the official Finviz Elite API docs once accessible. Update `src/quote.ts`, `src/screener.ts`, and `src/news.ts` accordingly.
- **Build via tsup.** Produces both CJS and ESM outputs plus `.d.ts` declarations in `dist/`. The `exports` map in `package.json` handles format resolution.

## Environment

| Variable           | Purpose                                                                           |
| ------------------ | --------------------------------------------------------------------------------- |
| `FINVIZ_API_TOKEN` | Finviz Elite API token — load at runtime and pass to `FinvizClient({ apiToken })` |

Secrets go in `.env.local` (never committed).

## Branch & Workflow Rules

- Features → `feature/feature-name` off `main`
- Fixes → `fix/fix-name` off `main`
- Never create a branch if the current branch is not `main` — ask first
- Commit after every completed task
- Ask to run `@code-reviewer` before every merge
