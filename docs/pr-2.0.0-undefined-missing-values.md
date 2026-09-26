# v2.0.0 — Undefined for missing values, parse errors in responses

**Branch:** `feature/undefined-missing-values` · **Version:** 1.4.0 → 2.0.0 (breaking)

## Summary

When Finviz leaves a cell blank, typed items used to hold one of several placeholder values depending on the endpoint: `''`, `0`, `NaN`, or an Invalid Date. Now every missing value is `undefined`, and every `get*` function also reports cells that were present but could not be parsed.

## Breaking changes

### 1. Every `get*` returns `FinvizResponse<T>`

```ts
// Before (1.x)
const rows: ForexItem[] = await getForex(client);

// After (2.0)
const { items, errors }: FinvizResponse<ForexItem> = await getForex(client);
```

```ts
interface FinvizResponse<T> {
  items: T[];
  errors: ParseError[];
}

interface ParseError {
  row: number;      // zero-based index into items
  column: string;   // CSV header, e.g. 'Price'
  field: string;    // item property, e.g. 'price'
  value: string;    // raw cell that failed to parse
  expected: 'number' | 'integer' | 'date';
}
```

This applies to all functions: `getQuote`, `getScreener`, `getNews`, `getPortfolio`, `getLatestFilings`, `getOptionsChain`, `getGroups`, `getInsiders`, `getManagers`, `getFunds`, `getEconomicCalendar`, `getEarningsCalendar`, `getDividendsCalendar`, `getFutures`, `getForex` and `getCrypto`.

### 2. Typed item fields are `T | undefined`

This covers every field of `EarningsCalendarItem`, `DividendsCalendarItem`, `InsiderItem`, `ManagerItem`/`FundItem`, `FuturesItem`/`ForexItem`/`CryptoItem`, `NewsItem`, `Filing` and `Quote`. The key is always present on the object; only its value is `undefined`.

| Cell | 1.x result | 2.0 result |
| --- | --- | --- |
| Blank, whitespace-only or column missing | `''`, `0`, `NaN` or Invalid Date (varied by endpoint) | `undefined`, no error |
| Valid value | Parsed value | Parsed value (text is trimmed) |
| Unparseable (e.g. `N/A`, `12abc`, `2/31/2026`) | `NaN`, or partially parsed (`parseFloat('12abc')` → 12) | `undefined` **and** a `ParseError` |

Numbers are now parsed strictly with `Number()` instead of `parseFloat`/`parseInt`, but thousands separators are accepted (`1,234.5` → `1234.5`).

### 3. Record endpoints are wrapped but otherwise unchanged

`getScreener`, `getPortfolio`, `getGroups`, `getOptionsChain` and `getEconomicCalendar` return the raw CSV records in `items`, with blank cells still `''`. Their `errors` array is always empty.

### 4. Date parsing fix: `DividendsCalendarItem.exDate` and `ManagerItem`/`FundItem.reportDate`

In 1.x, `YYYY-MM-DD` values were read with `new Date(string)`, which treats a date-only ISO string as UTC. West of Greenwich that put the date one day early (`2026-07-20` → July 19 in New York). The live API returns this format for `exDate` and for the fund/manager `Report Date`. All `Date` fields are now built in local time from explicit parts of Finviz's `YYYY-MM-DD` and `M/D/YYYY` formats (each with an optional time), so no field depends on the JavaScript engine's handling of date strings. Any other format, or an impossible date, is reported as a `ParseError`.

### 5. Fixes found by running against the live API

- **`ManagerItem.manager` / `FundItem.manager` was always empty.** Finviz's columns are `Portfolio Manager` (managers) and `Series Name` (funds), not `Manager`/`Fund`. For funds, `manager` now holds the fund **series** name (e.g. `VANGUARD HEALTH CARE FUND`), and `name` holds the filer (e.g. `VANGUARD SPECIALIZED FUNDS`).
- **The package root now exports every constant.** 88 const objects, including all `Screener*Filter` families, `ScreenerOrder`, `ScreenerSignal`, `PortfolioField`, `PortfolioOrder` and `FilingOrder`, were missing from `finvizts`, so the README Quick Start threw at runtime. `src/index.ts` now uses `export * from './types'`, and `tests/index.test.ts` guards against regressions. This change only adds exports.
- **Economic calendar docs:** the actual columns are `Event, Date, Time, Impact, For, Actual, Expected, Prior`. The README and spec are corrected; the code is unchanged because this endpoint returns raw records.
- **Removed `Quote.ChangeFromOpen`.** Finviz never returns this column for any period (daily, weekly or intraday), so the field was always empty. `Quote` now has only `Date`, `Open`, `High`, `Low`, `Close` and `Volume`.

## Migration

```ts
// 1.x
const earnings = await getEarningsCalendar(client, { from });
earnings.filter((e) => !Number.isNaN(e.epsActual));

// 2.0
const { items: earnings, errors } = await getEarningsCalendar(client, { from });
earnings.filter((e) => e.epsActual !== undefined);
if (errors.length) console.warn('Unparseable cells', errors);
```

## Implementation

- **`src/parse.ts`** (new, internal): `RowSchema<T>` maps each item property to a column parser (`text`, `number`, `integer` or `date`). `parseRows(rows, schema)` builds the items and collects errors; `rawResponse(rows)` wraps untyped records. Because the schema is keyed by `keyof T`, TypeScript flags any item field that is left out. `date()` matches the two Finviz date formats with regexes and builds a local `Date`, checking that no component rolled over (so `2/31/2026` is rejected).
- **`src/types/response.ts`** (new, public): `FinvizResponse`, `ParseError` and `ParseErrorExpected`.
- The endpoint modules replace their hand-written `row.map(...)` with a schema constant and pass it to `parseRows()`. Performance and fund/manager use small schema factories because their column names vary by endpoint.

## Testing

- **Live:** `npm run test:live`: 16/16 endpoints pass against the real Finviz Elite API with **0 parse errors**, and every typed field is populated (except market-news `ticker` and dividend `special`, which Finviz legitimately omits). `getPortfolio` is skipped unless `FINVIZ_PORTFOLIO_ID` is set.
- **Offline:** 236 tests pass under `TZ=America/Los_Angeles`, `UTC` and `Asia/Tokyo`; typecheck, lint and build are clean.
- New `tests/parse.test.ts` covers the parsers (including both date formats, rollover and thousands separators), blank/whitespace handling, error reporting and `rawResponse`.
- New `tests/index.test.ts` checks that every const object in `src/types` is exported from the package root.
- New `tests/groups.test.ts` and `tests/options.test.ts`; these modules had no tests before.
- New `tests/live/smoke.test.ts` is opt-in and excluded from `npm test`.
- Endpoint tests were updated from asserting `NaN`/`0`/`''` to asserting `undefined`. The calendar, crypto, fund, manager and insider suites also check `errors`, and the earnings calendar suite covers an unparseable cell end to end.
