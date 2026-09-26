# v2.1.0 — Raw records: `parsed`, `raw` or `both` responses

**Branch:** `feature/raw-records` · **Version:** 2.0.0 → 2.1.0 (non-breaking)

## Summary

Every `get*` function could previously only return typed items. It can now also return the CSV records exactly as Finviz sent them (header → cell text), or both. You choose the format per client, per call, or both, and the return type narrows to match.

## What's new

### 1. `ResponseFormat` and three response shapes

| `format` | Response | Notes |
| --- | --- | --- |
| `parsed` (default) | `ParsedResponse<T>`: `{ items, errors }` | Same as 2.0 |
| `raw` | `RawResponse`: `{ raw, errors: [] }` | No cells are parsed, so `errors` is always empty |
| `both` | `ParsedAndRawResponse<T>`: `{ items, raw, errors }` | `ParseError.row` indexes both `items` and `raw` |

`raw` is a `RawRecord[]` (`Record<string, string>[]`).

### 2. Client default plus per-call override

```ts
import { FinvizClient, ResponseFormat, getInsiders, getNews } from 'finvizts';

const client = new FinvizClient({ apiToken, format: ResponseFormat.BOTH }); // FinvizClient<'both'>

const { items, raw, errors } = await getInsiders(client);                    // ParsedAndRawResponse<InsiderItem>
const { raw: news } = await getNews(client, { format: ResponseFormat.RAW }); // RawResponse
```

- `FinvizClientOptions.format` sets the client default, which is `parsed` when omitted. It is readable as `client.format`.
- Every `get*` accepts `format` in its options. This includes the untyped record endpoints (`getScreener`, `getPortfolio`, `getGroups`, `getOptionsChain`, `getEconomicCalendar`). For those endpoints, `both` returns the same array as `items` and `raw`.
- `FinvizResponse<T, F>` resolves to the shape for `F`. If the format is only known at runtime (a `FinvizClient<ResponseFormat>`), the result is a union of the three shapes. Narrow it with `'items' in response` or `'raw' in response`.

## Compatibility

This change adds features only. `FinvizClient` and `FinvizResponse<T>` default to `parsed`, so existing code compiles and behaves unchanged. All 237 pre-existing tests pass without edits.

## Implementation

- **`src/types/response.ts`** adds `ResponseFormat`, `RawRecord`, `FormatOption<F>`, `ParsedResponse<T>`, `RawResponse` and `ParsedAndRawResponse<T>`. `FinvizResponse<T, F = 'parsed'>` is now a conditional type over those shapes.
- **`src/client.ts`**: `FinvizClient<F extends ResponseFormat = 'parsed'>` stores `format`. `F` is inferred from the constructor option.
- **Endpoints:** every `get*` is generic `<C extends ResponseFormat = 'parsed', F extends ResponseFormat = C>` and takes `client: FinvizClient<C>` and `options: XOptions & FormatOption<F>`. When a call omits `format`, `F` falls back to the client's `C`. The internal helpers `getPerformanceItems` and `getFundManagerItems` pass the same type parameters through.
- **`src/parse.ts`** (internal):
  - `formatOf(client, options)` returns the per-call format if given, otherwise the client default.
  - `parseRows()` and `rawResponse()` take the format and shape the response in `formatResponse()`.
  - In `raw` mode, column parsing is skipped entirely.

## Testing

- **Offline:** 314 tests pass (up from 237). Typecheck, lint and build are clean. All new code has 100% coverage.
- New `tests/format.test.ts`:
  - Runs all 16 public `get*` functions in `parsed`, `raw` and `both` modes, and checks that a per-call `format` overrides the client default.
  - Makes compile-time assertions that return types narrow from the client default, from the per-call format, and to a union for `FinvizClient<ResponseFormat>`. ts-jest type-checks the file, so a wrong type fails the run; this was verified by breaking one assertion on purpose.
- `tests/parse.test.ts` covers `parseRows`, `rawResponse` and `formatOf` in each format, and checks that `raw` never calls a column parser.
- **Live:** `npm run test:live` passes 16/16 endpoints against the real Finviz Elite API in the default `parsed` mode. `getPortfolio` is skipped because `FINVIZ_PORTFOLIO_ID` is not set.

## Code review

Three reviewers covered simplicity, correctness and project conventions. No bugs were found. Two findings were fixed in `f6fac22`: an out-of-date workflow table in `performance.ts`, and a redundant `errors` field on `ParsedAndRawResponse`. The shared array in `both` mode for record endpoints was kept on purpose, to avoid doubling memory; it is documented in the code and the README.
