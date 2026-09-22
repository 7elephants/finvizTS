# finvizts

[![npm](https://img.shields.io/npm/v/finvizts)](https://www.npmjs.com/package/finvizts)
[![license](https://img.shields.io/npm/l/finvizts)](LICENSE)
![GitHub Downloads (all assets, all releases)](https://img.shields.io/github/downloads/7elephants/finvizts/total)

Unofficial TypeScript client for the [Finviz Elite API](https://finviz.com/api_explanation.ashx). Wraps all endpoints behind a typed, promise-based interface with built-in CSV parsing and error handling.

> **Requires a Finviz Elite subscription.** API access is not available on the free tier.

## Install

```bash
npm install finvizts
```

## Quick Start

```ts
import {
  FinvizClient,
  getScreener,
  ScreenerView,
  ScreenerField,
  ScreenerExchangeFilter,
  ScreenerCountryFilter,
} from "finvizts";

const client = new FinvizClient({ apiToken: process.env.FINVIZ_API_TOKEN! });

const rows = await getScreener(client, {
  view: ScreenerView.OVERVIEW,
  fields: [ScreenerField.TICKER, ScreenerField.PRICE, ScreenerField.VOLUME],
  filters: [ScreenerExchangeFilter.NASDAQ, ScreenerCountryFilter.USA],
});

console.log(rows[0]); // { Ticker: 'AAPL', Price: '172.50', Volume: '55123456' }
```

## API Reference

Full API reference — every function, option, constant, and type — is generated from the source JSDoc and lives in [`docs/`](docs/README.md). Start at [docs/README.md](docs/README.md) for the module index.

All functions accept a `FinvizClient` as their first argument. Construct one client and reuse it across calls:

```ts
const client = new FinvizClient({
  apiToken: "YOUR_API_TOKEN", // required
  baseUrl: "https://elite.finviz.com", // optional override
  timeout: 10000, // optional, ms (default: 10000)
  rateLimitMs: 5000, // optional, min ms between requests (default: 5000)
  maxRetries: 3, // optional, max 429 retries (default: 3)
  retryDelayMs: 5000, // optional, ms to wait per retry when no Retry-After header (default: 5000)
});
```

| Function | Description | Docs |
| --- | --- | --- |
| `getQuote(client, ticker, options)` | OHLCV time-series data for a ticker | [docs/quote.md](docs/quote.md) |
| `getScreener(client, options?)` | Query the stock screener | [docs/screener.md](docs/screener.md) |
| `getNews(client, options?)` | Financial news by type/ticker/portfolio | [docs/news.md](docs/news.md) |
| `getPortfolio(client, portfolioId, options?)` | Holdings for a saved portfolio | [docs/portfolio.md](docs/portfolio.md) |
| `getLatestFilings(client, ticker, options?)` | Recent SEC filings for a ticker | [docs/filings.md](docs/filings.md) |
| `getOptionsChain(client, ticker, options)` | Options chain for a ticker/expiration | [docs/options.md](docs/options.md) |
| `getGroups(client, group, viewId, options?)` | Aggregated data by sector/industry/country/cap | [docs/groups.md](docs/groups.md) |
| `getInsiders(client, options?)` | Insider trading transactions | [docs/insider.md](docs/insider.md) |
| `getManagers(client, options?)` | Fund manager portfolios | [docs/manager.md](docs/manager.md) |
| `getFunds(client, options?)` | Fund portfolios | [docs/fund.md](docs/fund.md) |
| `getEconomicCalendar(client, options)` | Economic calendar events by date range | [docs/calendar.md](docs/calendar.md) |
| `getEarningsCalendar(client, options)` | Earnings reports by date range | [docs/calendar.md](docs/calendar.md) |
| `getDividendsCalendar(client, options)` | Upcoming ex-dividend dates by date range | [docs/calendar.md](docs/calendar.md) |

Request option types (`ScreenerOptions`, `QuoteOptions`, etc.) and every filter/enum constant (`ScreenerField`, `ScreenerOrder`, `ScreenerSignal`, `ScreenerExchangeFilter`, and the rest of the screener filter families) are documented under [docs/types/](docs/types/client.md).

### `getEconomicCalendar(client, options)` → `Promise<Calendar[]>`

Fetch economic calendar events for a date range.

```ts
import { getEconomicCalendar } from "finvizts";

const events = await getEconomicCalendar(client, {
  from: new Date("2026-03-01"), // required
  to: new Date("2026-03-31"), // optional
});
// events[0] → { Date, Time, Datetime, Release, Impact, For, Actual, Expected, Prior }
```

| Option | Type   | Description                                    |
| ------ | ------ | ----------------------------------------------- |
| `from` | `Date` | Start date of the range (required).              |
| `to`   | `Date` | Optional end date of the range.                  |

---

### `getEarningsCalendar(client, options)` → `Promise<EarningsCalendarItem[]>`

Fetch earnings reports for a date range (max 90 days from `from`), optionally sorted.

```ts
import { getEarningsCalendar, EarningsOrderType, SortDirection } from "finvizts";

const earnings = await getEarningsCalendar(client, {
  from: new Date("2026-07-20"), // required
  to: new Date("2026-07-24"), // optional, max 90 days from `from`
  order: EarningsOrderType.MARKET_CAP, // optional
  orderDirection: SortDirection.DESC, // optional
});
// earnings[0] → { date, ticker, company, marketCap, epsEstimate, epsActual, epsSurprise,
//                 epsGaapEstimate, epsGaapActual, epsGaapSurprise, revenueEstimate,
//                 revenueActual, revenueSurprise, oneDayPriceReaction }
```

| Option           | Type                | Description                                                                     |
| ---------------- | ------------------- | -------------------------------------------------------------------------------- |
| `from`           | `Date`              | Start date of the range (required).                                              |
| `to`             | `Date`              | Optional end date (max 90 days from `from`).                                     |
| `order`          | `EarningsOrderType` | Sort column. Use `EarningsOrderType` constants.                                  |
| `orderDirection` | `string`            | Sort direction. Use `SortDirection.ASC` (`''`) or `SortDirection.DESC` (`'-'`).  |

**`EarningsOrderType`** — `EARNINGS_DATE` `TICKER` `COMPANY` `MARKET_CAP` `EPS_ESTIMATE` `EPS_ACTUAL` `EPS_SURPRISE` `EPS_GAAP_ESTIMATE` `EPS_GAAP_ACTUAL` `EPS_GAAP_SURPRISE` `REVENUE_ESTIMATE` `REVENUE_ACTUAL` `REVENUE_SURPRISE` `ONE_DAY_PRICE_REACTION`

---

### `getDividendsCalendar(client, options)` → `Promise<DividendsCalendarItem[]>`

Fetch upcoming ex-dividend dates for a date range (max 90 days from `from`).

```ts
import { getDividendsCalendar } from "finvizts";

const dividends = await getDividendsCalendar(client, {
  from: new Date("2026-07-20"), // required
  to: new Date("2026-07-24"), // optional, max 90 days from `from`
});
// dividends[0] → { ticker, company, exDate, amount, special, dividendEstYield }
```

| Option | Type   | Description                                    |
| ------ | ------ | ----------------------------------------------- |
| `from` | `Date` | Start date of the range (required).              |
| `to`   | `Date` | Optional end date (max 90 days from `from`).     |

---

### `getInsiders(client, options?)` → `Promise<InsiderItem[]>`

Fetch insider trading transactions, optionally filtered by ticker, transaction type, owner relationship, minimum transaction value, or owner CIK.

```ts
import {
  getInsiders,
  InsiderTransactionType,
  InsiderOwnerRelationshipType,
  InsiderOrderType,
  SortDirection,
} from "finvizts";

const trades = await getInsiders(client, {
  ticker: "AAPL", // optional
  type: InsiderTransactionType.SALE, // optional
  ownerRel: InsiderOwnerRelationshipType.EXCLUDE_TEN_PERCENT, // optional
  minimumTransactionValue: 50000, // optional
  ownerCIK: 1214156, // optional
  order: InsiderOrderType.TRANSACTION_VALUE, // optional
  orderDirection: SortDirection.DESC, // optional
});
// trades[0] → { ticker, owner, ownerCIK, relationship, date, transactionType, cost,
//               shares, value, totalShares, SECForm, SECFormUrl }
```

| Option | Type | Description |
| --- | --- | --- |
| `ticker` | `string` | Filter by ticker symbol. |
| `type` | `InsiderTransactionType` | Filter by transaction type (`BUY`, `SALE`, `OPTION_EXERCISE`, `ALL`). |
| `ownerRel` | `InsiderOwnerRelationshipType` | Filter by 10%+ owner status (`INCLUDE_TEN_PERCENT`, `EXCLUDE_TEN_PERCENT`). |
| `minimumTransactionValue` | `number` | Minimum transaction value in dollars. |
| `ownerCIK` | `number` | Filter by owner's SEC CIK number. |
| `order` | `InsiderOrderType` | Sort column. |
| `orderDirection` | `string` | Sort direction. Use `SortDirection.ASC` (`''`) or `SortDirection.DESC` (`'-'`). |

---

### `getManagers(client, options?)` → `Promise<ManagerItem[]>`

Fetch fund manager portfolios, optionally filtered by a search term and sorted by order/direction.

```ts
import { getManagers, ManagerFundOrderType, SortDirection } from "finvizts";

const managers = await getManagers(client, {
  search: "Berkshire", // optional
  order: ManagerFundOrderType.PORTFOLIO_VALUE, // optional
  orderDirection: SortDirection.DESC, // optional
});
// managers[0] → { name, manager, id, reportDate, portfolioValue, numInvestments,
//                 newPurchases, soldOut, added, reduced, top10ConcentrationPct,
//                 turnOverPct, timeHeldTopTen, timeHeldAll }
```

| Option | Type | Description |
| --- | --- | --- |
| `search` | `string` | Search term to filter by manager name. |
| `order` | `ManagerFundOrderType` | Sort column. |
| `orderDirection` | `string` | Sort direction. Use `SortDirection.ASC` (`''`) or `SortDirection.DESC` (`'-'`). |

---

### `getFunds(client, options?)` → `Promise<FundItem[]>`

Fetch fund portfolios, optionally filtered by a search term and sorted by order/direction. Same underlying resource and response shape as `getManagers`, queried by fund name instead of manager name.

```ts
import { getFunds, ManagerFundOrderType, SortDirection } from "finvizts";

const funds = await getFunds(client, {
  search: "Vanguard", // optional
  order: ManagerFundOrderType.PORTFOLIO_VALUE, // optional
  orderDirection: SortDirection.DESC, // optional
});
// funds[0] → { name, manager, id, reportDate, portfolioValue, numInvestments,
//              newPurchases, soldOut, added, reduced, top10ConcentrationPct,
//              turnOverPct, timeHeldTopTen, timeHeldAll }
```

| Option | Type | Description |
| --- | --- | --- |
| `search` | `string` | Search term to filter by fund name. |
| `order` | `ManagerFundOrderType` | Sort column. |
| `orderDirection` | `string` | Sort direction. Use `SortDirection.ASC` (`''`) or `SortDirection.DESC` (`'-'`). |

---

## Rate Limiting & Retries

`FinvizClient` enforces the Finviz Elite API's **1 request per 5 seconds** limit automatically:

- **Proactive rate limiting** — each request is delayed until the minimum interval since the last request has elapsed, so you never hit the limit unintentionally.
- **429 retry logic** — if the server still returns `429`, the client retries up to `maxRetries` times, waiting `retryDelayMs` between each attempt (or the `Retry-After` header value if present).

All three behaviours are configurable via `FinvizClientOptions`. To disable proactive rate limiting (e.g. in tests), pass `rateLimitMs: 0`.

## Error Handling

All functions throw `FinvizError` on HTTP errors. Check `statusCode` to distinguish error types. See [docs/errors.md](docs/errors.md) for the full class reference.

```ts
import { FinvizError } from "finvizts";

try {
  const rows = await getScreener(client);
} catch (err) {
  if (err instanceof FinvizError) {
    console.error(err.message); // human-readable message
    console.error(err.statusCode); // 401, 429, 5xx, or undefined for network errors
    console.error(err.retryAfter); // parsed Retry-After header in seconds, if present
  }
}
```

When all retries are exhausted after a `429`, the thrown error message reads `"Finviz rate limit exceeded — exhausted N retries"`.

---

## License

MIT — see [LICENSE](LICENSE)
