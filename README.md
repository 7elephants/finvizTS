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
import { FinvizClient, getScreener, ScreenerView, ScreenerField } from 'finvizts';

const client = new FinvizClient({ apiToken: process.env.FINVIZ_API_TOKEN! });

const rows = await getScreener(client, {
  view: ScreenerView.Overview,
  fields: [ScreenerField.Ticker, ScreenerField.Price, ScreenerField.Volume],
  filters: 'exch_nasd,geo_usa',
});

console.log(rows[0]); // { Ticker: 'AAPL', Price: '172.50', Volume: '55123456' }
```

## API Reference

All functions accept a `FinvizClient` as their first argument. Construct one client and reuse it across calls.

```ts
const client = new FinvizClient({
  apiToken: 'YOUR_API_TOKEN', // required
  baseUrl: 'https://elite.finviz.com', // optional override
  timeout: 10_000, // optional, ms (default: 10000)
});
```

---

### `getQuote(client, ticker, options)` → `Promise<Quote[]>`

Fetch OHLCV time-series data for a single ticker.

```ts
import { getQuote, QuotePeriod, QuoteRange } from 'finvizts';

const bars = await getQuote(client, 'AAPL', {
  period: QuotePeriod.Daily,  // required
  range: QuoteRange.Year1,    // optional
});
// bars[0] → { Date, Open, High, Low, Close, Volume }
```

**`QuotePeriod`** — `Minute1` `Minute3` `Minute5` `Minute15` `Minute30` `Hour1` `Daily` `Weekly` `Monthly`

**`QuoteRange`** — `Day1` `Day5` `Month1` `Month3` `Month6` `Year1` `Year2` `Year5` `YTD` `Max` or a custom string like `"range_01-01-2020x12-31-2020"` / `"prev_1-0-0"`

---

### `getScreener(client, options?)` → `Promise<Screener[]>`

Query the stock screener with optional view, field selection, filters, and sorting.

```ts
import { getScreener, ScreenerView, ScreenerField } from 'finvizts';

const rows = await getScreener(client, {
  view: ScreenerView.Overview,
  fields: [ScreenerField.Ticker, ScreenerField.Price, ScreenerField.MarketCap],
  filters: 'cap_largeover,geo_usa',
  order: '-price',
  signal: 'ta_topgainers',
});
```

| Option | Type | Description |
|--------|------|-------------|
| `view` | `number` | View ID. Use `ScreenerView` constants or a custom numeric ID. |
| `fields` | `number[]` | Columns to return. Use `ScreenerField` constants. |
| `filters` | `string` | Finviz filter string (e.g. `"cap_largeover,geo_usa"`). |
| `order` | `string` | Sort column. Prefix with `-` for descending. |
| `rows` | `number` | Starting row for pagination (1-based). |
| `signal` | `string` | Signal filter (e.g. `"ta_topgainers"`). |

**`ScreenerView`** — `Overview(111)` `Valuation(121)` `Performance(131)` `Ownership(141)` `Custom(151)` `Financial(161)` `Technical(171)` `ETF(181)` `ETFPerformance(191)` `Charts(211)` `Basic(311)` `News(321)` `Snapshot(341)` `TA(351)` `Tickers(411)` `Maps(711)`

**`ScreenerField`** — 80+ constants including `No` `Ticker` `Company` `Sector` `Industry` `Country` `MarketCap` `Price` `Volume` `PE` `EPS` `Beta` `RSI` `SMA50` `SMA200` and more. See [src/types.ts](src/types.ts) for the full list.

---

### `getNews(client, options?)` → `Promise<NewsItem[]>`

Fetch financial news by type, optionally filtered by ticker or portfolio.

```ts
import { getNews, NewsType } from 'finvizts';

const news = await getNews(client, {
  type: NewsType.Stock,
  tickers: 'AAPL,MSFT',
});
// news[0] → { title, source, date, url, category, ticker }
```

| Option | Type | Description |
|--------|------|-------------|
| `type` | `NewsType` | Type of news. Defaults to `MarketByTime`. |
| `tickers` | `string` | Comma-separated tickers (for `Stock`, `ETF`, or `Crypto` types). |
| `portfolioId` | `string` | Portfolio ID (for `Stock` or `ETF` types). |

**`NewsType`** — `MarketByTime(1)` `MarketBySource(2)` `Stock(3)` `ETF(4)` `Crypto(5)`

---

### `getPortfolio(client, portfolioId, options?)` → `Promise<Portfolio[]>`

Fetch holdings for a saved Finviz portfolio. Find the portfolio ID in the URL when viewing it on the Finviz website.

```ts
import { getPortfolio } from 'finvizts';

const holdings = await getPortfolio(client, '1000983827', {
  order: '-price',
  fields: [0, 1, 2, 8], // Ticker, Company, Price, Cost
});
```

| Option | Type | Description |
|--------|------|-------------|
| `order` | `string` | Sort column (`ticker` `company` `price` `changepct` `volume`). Prefix with `-` for descending. |
| `fields` | `number[]` | Column indices to include. |

---

### `getLatestFilings(client, ticker, options?)` → `Promise<Filing[]>`

Fetch recent SEC filings for a single ticker.

```ts
import { getLatestFilings, FilingFilter } from 'finvizts';

const filings = await getLatestFilings(client, 'MSFT', {
  order: '-filingDate',
  filter: FilingFilter.AnnualQuarterlyCurrent,
});
// filings[0] → { filingDate, reportDate, form, description, filing, document }
```

**`FilingFilter`** — `AnnualQuarterlyCurrent` `InsiderEquity` `BeneficialOwnership` `ExemptOfferings` `RegistrationStatements` `FilingReviewCorrespondence` `SECOrdersNotices` `ProxyMaterials` `TrustIndentures`

---

### `getOptionsChain(client, ticker, options)` → `Promise<Option[]>`

Fetch the options chain for a ticker at a specific expiration date.

```ts
import { getOptionsChain, OptionsViewType } from 'finvizts';

const contracts = await getOptionsChain(client, 'MSFT', {
  expiration: '2026-05-08',               // required, yyyy-mm-dd
  viewType: OptionsViewType.Prices,       // optional, default: Prices
});
```

**`OptionsViewType`** — `Prices('oc')` `VolatilityGreeks('ocv')`

---

### `getGroups(client, group, viewId, options?)` → `Promise<Group[]>`

Fetch aggregated market data by sector, industry, country, or capitalization.

```ts
import { getGroups, GroupName, GroupView, IndustrySubgroup } from 'finvizts';

const sectors = await getGroups(client, GroupName.Sector, GroupView.Overview);

const techIndustries = await getGroups(client, GroupName.Industry, GroupView.Performance, {
  subgroup: IndustrySubgroup.Technology,
});
```

**`GroupName`** — `Sector` `Industry` `Country` `Capitalization`

**`GroupView`** — `Overview(110)` `Valuation(120)` `Performance(140)` `Custom(150)` `PerformanceChart(210)` `Spectrum(310)` `Charts(410)` `Maps(510)`

**`IndustrySubgroup`** — `BasicMaterials` `CommunicationServices` `ConsumerCyclical` `ConsumerDefensive` `Energy` `Financial` `Healthcare` `Industrials` `RealEstate` `Technology` `Utilities`

---

## Error Handling

All functions throw `FinvizApiError` on HTTP errors. Check `statusCode` to distinguish error types.

```ts
import { FinvizApiError } from 'finvizts';

try {
  const rows = await getScreener(client);
} catch (err) {
  if (err instanceof FinvizApiError) {
    console.error(err.message);      // human-readable message
    console.error(err.statusCode);   // 401, 429, 5xx, or undefined for network errors
  }
}
```

> **Rate limit:** The Finviz Elite API allows **1 request per 5 seconds**. Exceeding this returns a `429` status, which `FinvizApiError` surfaces as `"Finviz rate limit exceeded (1 request per 5 seconds)"`.

---

## Environment Variables

| Variable | Description |
|----------|-------------|
| `FINVIZ_API_TOKEN` | Your Finviz Elite API token. Pass directly to `new FinvizClient({ apiToken })`. |
| `FINVIZ_BASE_URL` | Override the default base URL (`https://elite.finviz.com`). Read from `.env.local` automatically. |

Store secrets in `.env.local` (never commit this file):

```
FINVIZ_API_TOKEN=your_token_here
```

---

## License

MIT — see [LICENSE](LICENSE)
