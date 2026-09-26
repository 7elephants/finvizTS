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
| Unparseable (e.g. `N/A`, `12abc`, `3,800` in an integer column) | `NaN`, or partially parsed (`parseFloat('12abc')` → 12) | `undefined` **and** a `ParseError` |

Numbers are now parsed strictly with `Number()` instead of `parseFloat`/`parseInt`.

### 3. Record endpoints are wrapped but otherwise unchanged

`getScreener`, `getPortfolio`, `getGroups`, `getOptionsChain` and `getEconomicCalendar` return the raw CSV records in `items`, with blank cells still `''`. Their `errors` array is always empty.

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

- **`src/parse.ts`** (new, internal): `RowSchema<T>` maps each item property to a column parser (`text`, `number`, `integer` or `date`). `parseRows(rows, schema)` builds the items and collects errors; `rawResponse(rows)` wraps untyped records. Because the schema is keyed by `keyof T`, TypeScript flags any item field that is left out.
- **`src/types/response.ts`** (new, public): `FinvizResponse`, `ParseError` and `ParseErrorExpected`.
- The endpoint modules replace their hand-written `row.map(...)` with a schema constant and pass it to `parseRows()`. Performance and fund/manager use small schema factories because their column names vary by endpoint.

## Testing

- 121 tests pass; typecheck, lint and build are clean.
- New `tests/parse.test.ts` covers the parsers, blank/whitespace handling, error reporting and `rawResponse`.
- New `tests/groups.test.ts` and `tests/options.test.ts`; these modules had no tests before.
- Endpoint tests were updated from asserting `NaN`/`0`/`''` to asserting `undefined`. The calendar, crypto, fund, manager and insider suites also check `errors`, and the earnings calendar suite covers an unparseable cell end to end.
- Line coverage is 99.5%. The remaining gaps were already there before this change: `client.ts:117`, `errors.ts:27`, and branches in `filters.ts`.
