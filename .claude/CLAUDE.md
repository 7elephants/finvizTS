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

# Live smoke tests against the real Finviz API (opt-in, ~90s; needs FINVIZ_API_TOKEN in .env.local)
npm run test:live
```

## Architecture

```
src/
  index.ts        # Public API surface — re-exports everything
  client.ts       # FinvizClient — axios transport, CSV parsing, auth injection, rate limiting/retries
  csv.ts          # parseRecord() and parseRecords() — csv-parse wrappers
  parse.ts        # parseRows(), rawResponse() + text/number/integer/date column parsers — record → typed item mapping (not exported)
  errors.ts       # FinvizError — thrown on HTTP/network failures
  filters.ts      # buildFilters() — composes the screener `f` query string
  utils.ts        # formatDateToYYYYMMDD(), buildSortParam() — shared request-building helpers
  types/          # All shared TypeScript interfaces, types, and const objects (one file per domain; response.ts holds FinvizResponse/ParseError)
  quote.ts        # getQuote(client, ticker, options) → FinvizResponse<Quote>
  screener.ts     # getScreener(client, options) → FinvizResponse<Screener>
  news.ts         # getNews(client, options) → FinvizResponse<NewsItem>
  portfolio.ts    # getPortfolio(client, portfolioId, options) → FinvizResponse<Portfolio>
  filings.ts      # getLatestFilings(client, ticker, options) → FinvizResponse<Filing>
  options.ts      # getOptionsChain(client, ticker, options) → FinvizResponse<Option>
  groups.ts       # getGroups(client, group, viewId, options) → FinvizResponse<Group>
  insider.ts      # getInsiders(client, options) → FinvizResponse<InsiderItem>
  manager.ts      # getManagers(client, options) → FinvizResponse<ManagerItem>
  fund.ts         # getFunds(client, options) → FinvizResponse<FundItem>
  fund-manager.ts # getFundManagerItems() — internal helper shared by fund.ts/manager.ts (not exported)
  calendar.ts     # getEconomicCalendar(), getEarningsCalendar(), getDividendsCalendar()
  futures.ts      # getFutures(client, options) → FinvizResponse<FuturesItem>
  forex.ts        # getForex(client, options) → FinvizResponse<ForexItem>
  crypto.ts       # getCrypto(client, options) → FinvizResponse<CryptoItem>
  performance.ts  # getPerformanceItems() — internal helper shared by futures.ts/forex.ts/crypto.ts (not exported)

tests/
  client.test.ts
  csv.test.ts
  index.test.ts       # every const in src/types is re-exported from the package root
  parse.test.ts
  quote.test.ts
  screener.test.ts
  news.test.ts
  portfolio.test.ts
  filings.test.ts
  options.test.ts
  groups.test.ts
  insider.test.ts
  manager.test.ts
  fund.test.ts
  calendar.test.ts
  futures.test.ts
  forex.test.ts
  crypto.test.ts
  live/smoke.test.ts  # opt-in live API test (npm run test:live); excluded from npm test
```

### Key design decisions

- **All responses are CSV.** The Finviz API returns `text/csv`. Requests use `responseType: 'text'` and axios sends `Accept: text/csv`.
- **Two response shapes.** `client.getRecord()` handles two-row CSV (header + single value row) for quote; `client.getRecords()` handles N-row CSV for screener, news, and the rest of the multi-row endpoints. The `csv-parse` library does the actual parsing.
- **Every `get*` returns `FinvizResponse<T>` (`{ items, errors }`).** Typed endpoints declare a `RowSchema<T>` (item property → `text`/`number`/`integer`/`date` column parser) and call `parseRows()` in `parse.ts`. Every item field is `T | undefined`: blank/missing cells become `undefined`; non-blank cells that fail to parse also become `undefined` and are reported as a `ParseError { row, column, field, value, expected }`. Record endpoints (screener, portfolio, groups, options, economic calendar) return raw rows via `rawResponse()` with an empty `errors` array.
- **The package root re-exports all of `src/types` via `export *`.** Don't hand-list type exports in `src/index.ts`; `tests/index.test.ts` fails if a const object in `src/types` isn't reachable from the package root.
- **Fund/manager name column.** Finviz's CSV header is `Series Name` for `/export/funds` and `Portfolio Manager` for `/export/managers`; both map to `ManagerFundItem.manager`.
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
| `FINVIZ_BASE_URL` | Optional base URL override (used by `npm run test:live`) |
| `FINVIZ_PORTFOLIO_ID` | Optional portfolio ID; enables the `getPortfolio` case in `npm run test:live` |

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
