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
  client.ts     # FinvizClient — axios transport, CSV parsing, auth injection
  csv.ts        # parseRecord() and parseRecords() — csv-parse wrappers
  types.ts      # All shared TypeScript interfaces and types
  quote.ts      # getQuote(client, ticker) → QuoteData
  screener.ts   # getScreener(client, options) → ScreenerRow[]
  news.ts       # getNews(client, options) → NewsItem[]

tests/
  client.test.ts
  csv.test.ts
  quote.test.ts
  screener.test.ts
  news.test.ts
```

### Key design decisions

- **All responses are CSV.** The Finviz API returns `text/csv`. Requests use `responseType: 'text'` and axios sends `Accept: text/csv`.
- **Two response shapes.** `client.getRecord()` handles two-row CSV (header + single value row) for quote; `client.getRecords()` handles N-row CSV for screener and news. The `csv-parse` library does the actual parsing.
- **`FinvizClient` is the single transport layer.** Every module function accepts a `FinvizClient` instance. Consumers construct one client and pass it around.
- **Auth is injected by the client.** `auth_token` is appended to every request params automatically — individual modules never handle auth.
- **Endpoint paths are placeholders.** The exact paths (`/api/quote.ashx`, etc.) need to be verified against the official Finviz Elite API docs. Update `src/quote.ts`, `src/screener.ts`, and `src/news.ts` accordingly.
- **Jest `.js` import mapping.** `moduleNameMapper` in `jest.config.js` strips `.js` extensions at test time since ts-jest runs CommonJS but source imports use ESM-style `.js` suffixes for tsup compatibility.

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
