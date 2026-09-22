## Description

The calendar API has three sub-resources: economic events, earnings reports, and upcoming ex-dividend dates. Each is queried over a date range.

## Economic Calendar

GET request to `export/calendar/economic`:

- `auth` (required): Your API key
- `dateFrom` (required): Start of the date range, formatted `YYYY-MM-DD`.
- `dateTo` (optional): End of the date range, formatted `YYYY-MM-DD`.

### Response

```csv
Date,Time,Datetime,Release,Impact,For,Actual,Expected,Prior
3/27/2026,8:30AM,2026-03-27 08:30:00,Durable Goods Orders,2,Feb,,1.5%,3.1%
```

### Example

`https://elite.finviz.com/export/calendar/economic?auth=YOUR_API_KEY&dateFrom=2026-03-01&dateTo=2026-03-31`

---

## Earnings Calendar

GET request to `export/calendar/earnings`:

- `auth` (required): Your API key
- `dateFrom` (required): Start of the date range, formatted `YYYY-MM-DD`.
- `dateTo` (optional): End of the date range, formatted `YYYY-MM-DD` (max 90 days from `dateFrom`).
- `sort` (optional): The column the results should be sorted by. The list of sortable columns is:

| Name                    |
| ------------------------ |
| earningsDate            |
| ticker                  |
| company                 |
| marketCap               |
| epsEstimate             |
| epsActual               |
| epsSurprise             |
| epsReportedEstimate     |
| epsReportedActual       |
| epsReportedSurprise     |
| salesEstimate           |
| salesActual             |
| salesSurprise           |
| oneDayPriceReaction     |

The default sort order is ascending. To sort in descending order, add a minus sign before the column name (e.g. `sort=-marketCap`).

### Response

```csv
Date,Ticker,Company,Market Cap,EPS Estimate,EPS Actual,EPS Surprise,EPS GAAP Estimate,EPS GAAP Actual,EPS GAAP Surprise,Revenue Estimate,Revenue Actual,Revenue Surprise,1-Day Price Reaction
2026-07-20 08:30,AMC,AMC Entertainment Holdings Inc,2410.03,0.0039,-0.02,-612.82,0.0039,-0.02,-612.82,1503.121,1596.7,6.23,26.80
```

### Example

`https://elite.finviz.com/export/calendar/earnings?auth=YOUR_API_KEY&dateFrom=2026-07-20&dateTo=2026-07-24&sort=-marketCap`

---

## Dividends Calendar

GET request to `export/calendar/dividends`:

- `auth` (required): Your API key
- `dateFrom` (required): Start of the date range, formatted `YYYY-MM-DD`.
- `dateTo` (optional): End of the date range, formatted `YYYY-MM-DD` (max 90 days from `dateFrom`).

### Response

```csv
Ticker,Company,Ex-Date,Amount,Special,Dividend Est. Yield
CAT,Caterpillar Inc,2026-07-20,1.63,,0.77
```

### Example

`https://elite.finviz.com/export/calendar/dividends?auth=YOUR_API_KEY&dateFrom=2026-07-20&dateTo=2026-07-24`
