# CLAUDE.md

This file provides guidance to Claude Code (claude.ai/code) when working with code in this repository.

## Project Overview

`finviz-ts` is a TypeScript npm package that provides a typed client for the [Finviz Elite API](https://finviz.com/api_explanation.ashx). It wraps authentication, HTTP transport, and all endpoints (quote, screener, news, portfolio, filings, options, groups, insiders, managers, funds, calendars) behind a clean, promise-based interface. The API is a CSV export-based API.

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
  index.ts        # Public API surface — re-exports everything
  client.ts       # FinvizClient — axios transport, CSV parsing, auth injection, rate limiting/retries
  csv.ts          # parseRecord() and parseRecords() — csv-parse wrappers
  errors.ts       # FinvizError — thrown on HTTP/network failures
  filters.ts      # buildFilters() — composes the screener `f` query string
  utils.ts        # formatDateToYYYYMMDD(), buildSortParam() — shared request-building helpers
  types/          # All shared TypeScript interfaces, types, and const objects (one file per domain)
  quote.ts        # getQuote(client, ticker, options) → QuoteRow[]
  screener.ts     # getScreener(client, options) → ScreenerRow[]
  news.ts         # getNews(client, options) → NewsItem[]
  portfolio.ts    # getPortfolio(client, portfolioId, options) → PortfolioRow[]
  filings.ts      # getLatestFilings(client, ticker, options) → FilingRow[]
  options.ts      # getOptionsChain(client, ticker, options) → OptionRow[]
  groups.ts       # getGroups(client, group, viewId, options) → GroupRow[]
  insider.ts      # getInsiders(client, options) → InsiderItem[]
  manager.ts      # getManagers(client, options) → ManagerItem[]
  fund.ts         # getFunds(client, options) → FundItem[]
  fund-manager.ts # getFundManagerItems() — internal helper shared by fund.ts/manager.ts (not exported)
  calendar.ts     # getEconomicCalendar(), getEarningsCalendar(), getDividendsCalendar()
  futures.ts      # getFutures(client, options) → FuturesItem[]
  forex.ts        # getForex(client, options) → ForexItem[]
  crypto.ts       # getCrypto(client, options) → CryptoItem[]
  performance.ts  # getPerformanceItems() — internal helper shared by futures.ts/forex.ts/crypto.ts (not exported)

tests/
  client.test.ts
  csv.test.ts
  quote.test.ts
  screener.test.ts
  news.test.ts
  portfolio.test.ts
  filings.test.ts
  insider.test.ts
  manager.test.ts
  fund.test.ts
  calendar.test.ts
  futures.test.ts
  forex.test.ts
  crypto.test.ts
```

### Key design decisions

- **All responses are CSV.** The Finviz API returns `text/csv`. Requests use `responseType: 'text'` and axios sends `Accept: text/csv`.
- **Two response shapes.** `client.getRecord()` handles two-row CSV (header + single value row) for quote; `client.getRecords()` handles N-row CSV for screener, news, and the rest of the multi-row endpoints. The `csv-parse` library does the actual parsing.
- **`FinvizClient` is the single transport layer.** Every module function accepts a `FinvizClient` instance. Consumers construct one client and pass it around. It also proactively rate-limits requests and retries `429` responses (see `.claude/rules/rate_limiting.md`).
- **Auth is injected by the client.** `auth` is appended to every request params automatically — individual modules never handle auth (see `.claude/rules/authenication.md`).
- **`fund.ts` and `manager.ts` share one implementation.** Funds and fund managers are the same underlying Finviz resource (`/export/funds` vs `/export/managers`), so both call the internal `getFundManagerItems()` in `fund-manager.ts`, which is not part of the public API surface.
- **`futures.ts`, `forex.ts` and `crypto.ts` share one implementation.** The three performance endpoints have identical request/response shapes, so each calls the internal `getPerformanceItems()` in `performance.ts`, which is not part of the public API surface.
- **Jest `.js` import mapping.** `moduleNameMapper` in `jest.config.js` strips `.js` extensions at test time since ts-jest runs CommonJS but source imports use ESM-style `.js` suffixes for tsup compatibility.

## Environment

The package does **not** read any environment variables directly. All configuration is passed through `FinvizClientOptions`.

| Variable           | Purpose                                                                                    |
| ------------------ | ------------------------------------------------------------------------------------------ |
| `FINVIZ_API_TOKEN` | Finviz Elite API token — load in your application and pass to `FinvizClient({ apiToken })` |

Secrets go in `.env.local` (never committed). Your application is responsible for loading env vars before constructing `FinvizClient`.

## Branch & Workflow Rules

- Features → `feature/feature-name` off `main`
- Fixes → `fix/fix-name` off `main`
- Never create a branch if the current branch is not `main` — ask first
- Commit after every completed task
- Ask to run `@code-reviewer` before every merge
- ALWAYS write and update JSDoc documentation for new code
- ALWAYS write frontmatter on new files created
- ALWAYS generate Markdown files and store in 'docs' directory when a PR is generated on a branch
- ALWAYS ask to bump the package version when a PR is generated on a branch
