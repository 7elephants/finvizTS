# finvizts

[![npm](https://img.shields.io/npm/v/finvizts)](https://www.npmjs.com/package/finvizts)
[![license](https://img.shields.io/npm/l/finvizts)](LICENSE)

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

All functions accept a `FinvizClient` as their first argument. Construct one client and reuse it across calls.

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

---

### `getQuote(client, ticker, options)` → `Promise<Quote[]>`

Fetch OHLCV time-series data for a single ticker.

```ts
import { getQuote, QuotePeriod, QuoteRange } from "finvizts";

const bars = await getQuote(client, "AAPL", {
  period: QuotePeriod.DAILY, // required
  range: QuoteRange.YEAR, // optional
});
// bars[0] → { Date, Open, High, Low, Close, Volume }
```

**`QuotePeriod`** — `MINUTE` `THREE_MINUTES` `FIVE_MINUTES` `FIFTEEN_MINUTES` `THIRTY_MINUTES` `HOURLY` `DAILY` `WEEKLY` `MONTHLY`

**`QuoteRange`** — `DAY` `FIVE_DAYS` `MONTH` `THREE_MONTHS` `SIX_MONTHS` `YEAR` `TWO_YEARS` `FIVE_YEARS` `YTD` `MAX` or a custom string like `"range_01-01-2020x12-31-2020"` / `"prev_1-0-0"`

---

### `getScreener(client, options?)` → `Promise<Screener[]>`

Query the stock screener with optional view, field selection, filters, and sorting.

```ts
import {
  getScreener,
  ScreenerView,
  ScreenerField,
  ScreenerOrder,
  ScreenerExchangeFilter,
  ScreenerCountryFilter,
  ScreenerSignal,
  SortDirection,
} from "finvizts";

const rows = await getScreener(client, {
  view: ScreenerView.OVERVIEW,
  fields: [ScreenerField.TICKER, ScreenerField.PRICE, ScreenerField.MARKET_CAP],
  filters: [ScreenerExchangeFilter.NASDAQ, ScreenerCountryFilter.USA],
  order: ScreenerOrder.PRICE,
  orderDirection: SortDirection.DESC,
  signal: ScreenerSignal.TOP_GAINERS,
});
```

| Option           | Type                               | Description                                                                     |
| ---------------- | ---------------------------------- | ------------------------------------------------------------------------------- |
| `view`           | `number`                           | View ID. Use `ScreenerView` constants or a custom numeric ID.                   |
| `fields`         | `number[]`                         | Columns to return. Use `ScreenerField` constants.                               |
| `filters`        | `string \| (string \| string[])[]` | Finviz filter string or array passed to `buildFilters()`.                       |
| `order`          | `string`                           | Sort column. Use `ScreenerOrder` constants or a raw string.                     |
| `orderDirection` | `string`                           | Sort direction. Use `SortDirection.ASC` (`''`) or `SortDirection.DESC` (`'-'`). |
| `rows`           | `number`                           | Starting row for pagination (1-based).                                          |
| `signal`         | `string`                           | Signal filter. Use `ScreenerSignal` constants or a raw string.                  |
| `tickers`        | `string \| string[]`               | Ticker symbol(s) to filter by.                                                  |

**`ScreenerView`** — `OVERVIEW(111)` `VALUATION(121)` `PERFORMANCE(131)` `OWNERSHIP(141)` `CUSTOM(151)` `FINANCIAL(161)` `TECHNICAL(171)` `ETF(181)` `ETF_PERFORMANCE(191)` `CHARTS(211)` `BASIC(311)` `NEWS(321)` `SNAPSHOT(341)` `TA(351)` `TICKERS(411)` `MAPS(711)`

**`ScreenerField`** — 80+ constants including `NO` `TICKER` `COMPANY` `SECTOR` `INDUSTRY` `COUNTRY` `MARKET_CAP` `PRICE` `VOLUME` `PE` `EPS` `BETA` `RSI` `SMA_50` `SMA_200` and more. See [src/types/screener/index.ts](src/types/screener/index.ts) for the full list.

**`ScreenerOrder`** — `TICKER` `COMPANY` `PRICE` `MARKET_CAP` `VOLUME` `CHANGE` `RSI` `BETA` `EPS_TTM` `PERFORMANCE_WEEK` `PERFORMANCE_YEAR` and many more. See [src/types/screener/order.ts](src/types/screener/order.ts) for the full list.

**`ScreenerSignal`** — `TOP_GAINERS` `TOP_LOSERS` `NEW_HIGH` `NEW_LOW` `MOST_VOLATILE` `MOST_ACTIVE` `UNUSUAL_VOLUME` `OVERBOUGHT` `OVERSOLD` `UPGRADES` `DOWNGRADES` `EARNINGS_BEFORE` `EARNINGS_AFTER` `RECENT_INSIDER_BUYING` `RECENT_INSIDER_SELLING` `HEAD_AND_SHOULDERS` and more.

**`SortDirection`** — `ASC` (`''`) `DESC` (`'-'`)

---

### `getNews(client, options?)` → `Promise<NewsItem[]>`

Fetch financial news by type, optionally filtered by ticker or portfolio.

```ts
import { getNews, NewsType } from "finvizts";

const news = await getNews(client, {
  type: NewsType.STOCK,
  tickers: "AAPL,MSFT",
});
// news[0] → { title, source, date, url, category, ticker }
```

| Option        | Type       | Description                                                      |
| ------------- | ---------- | ---------------------------------------------------------------- |
| `type`        | `NewsType` | Type of news. Defaults to `MARKET_BY_TIME`.                      |
| `tickers`     | `string`   | Comma-separated tickers (for `STOCK`, `ETF`, or `CRYPTO` types). |
| `portfolioId` | `string`   | Portfolio ID (for `STOCK` or `ETF` types).                       |

**`NewsType`** — `MARKET_BY_TIME(1)` `MARKET_BY_SOURCE(2)` `STOCK(3)` `ETF(4)` `CRYPTO(5)`

---

### `getPortfolio(client, portfolioId, options?)` → `Promise<Portfolio[]>`

Fetch holdings for a saved Finviz portfolio. Find the portfolio ID in the URL when viewing it on the Finviz website.

```ts
import {
  getPortfolio,
  PortfolioField,
  PortfolioOrder,
  SortDirection,
} from "finvizts";

const holdings = await getPortfolio(client, "1000983827", {
  order: PortfolioOrder.PRICE,
  orderDirection: SortDirection.DESC,
  fields: [
    PortfolioField.TICKER,
    PortfolioField.COMPANY,
    PortfolioField.PRICE,
    PortfolioField.COST,
  ],
});
```

| Option           | Type       | Description                                                                     |
| ---------------- | ---------- | ------------------------------------------------------------------------------- |
| `order`          | `string`   | Sort column. Use `PortfolioOrder` constants or a raw string.                    |
| `orderDirection` | `string`   | Sort direction. Use `SortDirection.ASC` (`''`) or `SortDirection.DESC` (`'-'`). |
| `fields`         | `number[]` | Column indices to include. Use `PortfolioField` constants.                      |

**`PortfolioField`** — `TICKER(0)` `COMPANY(1)` `PRICE(2)` `CHANGE_PERCENT(3)` `VOLUME(4)` `TRANSACTION(5)` `DATE(6)` `SHARES(7)` `COST(8)` `MARKET_VALUE(9)` `GAIN(10)` `GAIN_PERCENT(11)` `CHANGE(12)`

**`PortfolioOrder`** — `TICKER` `COMPANY` `PRICE` `CHANGE_PERCENT` `VOLUME`

---

### `getLatestFilings(client, ticker, options?)` → `Promise<Filing[]>`

Fetch recent SEC filings for a single ticker.

```ts
import { getLatestFilings, FilingFilter } from "finvizts";

const filings = await getLatestFilings(client, "MSFT", {
  order: "-filingDate",
  filter: FilingFilter.ANNUAL_QUARTERLY_CURRENT,
});
// filings[0] → { filingDate, reportDate, form, description, filing, document }
```

**`FilingFilter`** — `ANNUAL_QUARTERLY_CURRENT` `INSIDER_EQUITY` `BENEFICIAL_OWNERSHIP` `EXEMPT_OFFERINGS` `REGISTRATION_STATEMENTS` `FILING_REVIEW_CORRESPONDENCE` `SEC_ORDERS_NOTICES` `PROXY_MATERIALS` `TRUST_INDENTURES`

---

### `getOptionsChain(client, ticker, options)` → `Promise<Option[]>`

Fetch the options chain for a ticker at a specific expiration date.

```ts
import { getOptionsChain, OptionsViewType } from "finvizts";

const contracts = await getOptionsChain(client, "MSFT", {
  expiration: "2026-05-08", // required, yyyy-mm-dd
  viewType: OptionsViewType.PRICES, // optional, default: PRICES
});
```

**`OptionsViewType`** — `PRICES('oc')` `VOLATILITY_GREEKS('ocv')`

---

### `getGroups(client, group, viewId, options?)` → `Promise<Group[]>`

Fetch aggregated market data by sector, industry, country, or capitalization.

```ts
import { getGroups, GroupName, GroupView, IndustrySubgroup } from "finvizts";

const sectors = await getGroups(client, GroupName.SECTOR, GroupView.OVERVIEW);

const techIndustries = await getGroups(
  client,
  GroupName.INDUSTRY,
  GroupView.PERFORMANCE,
  {
    subgroup: IndustrySubgroup.TECHNOLOGY,
  },
);
```

**`GroupName`** — `SECTOR` `INDUSTRY` `COUNTRY` `CAPITALIZATION`

**`GroupView`** — `OVERVIEW(110)` `VALUATION(120)` `PERFORMANCE(140)` `CUSTOM(150)` `PERFORMANCE_CHART(210)` `SPECTRUM(310)` `CHARTS(410)` `MAPS(510)`

**`IndustrySubgroup`** — `BASIC_MATERIALS` `COMMUNICATION_SERVICES` `CONSUMER_CYCLICAL` `CONSUMER_DEFENSIVE` `ENERGY` `FINANCIAL` `HEALTHCARE` `INDUSTRIALS` `REAL_ESTATE` `TECHNOLOGY` `UTILITIES`

---

## Rate Limiting & Retries

`FinvizClient` enforces the Finviz Elite API's **1 request per 5 seconds** limit automatically:

- **Proactive rate limiting** — each request is delayed until the minimum interval since the last request has elapsed, so you never hit the limit unintentionally.
- **429 retry logic** — if the server still returns `429`, the client retries up to `maxRetries` times, waiting `retryDelayMs` between each attempt (or the `Retry-After` header value if present).

All three behaviours are configurable via `FinvizClientOptions`. To disable proactive rate limiting (e.g. in tests), pass `rateLimitMs: 0`.

## Error Handling

All functions throw `FinvizApiError` on HTTP errors. Check `statusCode` to distinguish error types.

```ts
import { FinvizApiError } from "finvizts";

try {
  const rows = await getScreener(client);
} catch (err) {
  if (err instanceof FinvizApiError) {
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
