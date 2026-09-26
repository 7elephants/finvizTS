## Description

The futures, forex and crypto performance APIs return price and performance (5 minutes to 1 year) for a fixed set of instruments. All three share one request and response shape, differing only in path.

## Request

GET requests to `export/futures/performance`, `export/forex/performance` and `export/crypto/performance` with the following query parameters:

- `auth` (required): Your API key
- `sort` (optional): The column the results should be sorted by. Rows with no value are always listed last, in both directions. The list of sortable columns is:

| Name            | Column                  |
| --------------- | ----------------------- |
| perfDayPct      | Day performance (default is `-perfDayPct`, best first) |
| ticker          | Ticker                  |
| name            | Name                    |
| last            | Price                   |
| perf5minPct     | 5-minute performance    |
| perfHourPct     | Hour performance        |
| perfWeekPct     | Week performance        |
| perfMonthPct    | Month performance       |
| perfMtdPct      | Month-to-date           |
| perfQuarterPct  | Quarter performance     |
| perfHalfYearPct | Half-year performance   |
| perfYtdPct      | Year-to-date            |
| perfYearPct     | Year performance        |

The same sort keys apply to futures, forex and crypto. With no `sort`, Finviz orders by day performance, best first. A given column sorts ascending unless prefixed. To sort in descending order, add a minus sign before the column name (e.g. `sort=-perfDayPct`).

- `unit` (optional, forex only): `pct` (default) or `pips`. With `unit=pips` every performance sort column ends in `Pips` instead of `Pct` (e.g. `sort=-perfWeekPips`), and the sort value must match the unit.
- `c` (optional, crypto only): Quote currency. One of `USD` (default), `USDT`, `EUR`, `BTC`.

## Response

Futures (`@` prefixed tickers):

```csv
No.,Ticker,Name,Price,Performance (5 Minutes),Performance (1 Hour),Performance (Day),Performance (Week),Performance (Month),Performance (Month To Date),Performance (Quarter),Performance (Half Year),Performance (Year To Date),Performance (Year)
1,@PL,Platinum,1778.4,-0.08,-0.06,1.46,-1.59,-4.51,-0.93,9.75,-9.23,-14.41,10.4
```

Forex (`BASE/QUOTE` tickers; with `unit=pips` the performance headers read `Performance in Pips (Day)` etc. and values are whole pips):

```csv
No.,Ticker,Name,Price,Performance (5 Minutes),Performance (1 Hour),Performance (Day),Performance (Week),Performance (Month),Performance (Month To Date),Performance (Quarter),Performance (Half Year),Performance (Year To Date),Performance (Year)
2,GBP/USD,British Pound,1.3244,0,-0.04,0.19,-1.11,-2.95,-2.24,0.41,-0.89,-1.57,-0.72
```

Forex with `unit=pips`:

```csv
No.,Ticker,Name,Price,Performance in Pips (5 Minutes),Performance in Pips (1 Hour),Performance in Pips (Day),Performance in Pips (Week),Performance in Pips (Month),Performance in Pips (Month To Date),Performance in Pips (Quarter),Performance in Pips (Half Year),Performance in Pips (Year To Date),Performance in Pips (Year)
2,GBP/USD,British Pound,1.3244,0,-5,26,-148,-403,-303,54,-119,-211,-96
```

Crypto (`@` prefixed tickers; small prices use scientific notation, and newer coins may have blank long-range performance):

```csv
No.,Ticker,Name,Price,Performance (5 Minutes),Performance (1 Hour),Performance (Day),Performance (Week),Performance (Month),Performance (Month To Date),Performance (Quarter),Performance (Half Year),Performance (Year To Date),Performance (Year)
15,@SHIB,Shiba Inu,6.04E-06,0.17,0.5,1.85,11.85,13.75,20.08,41.12,1.85,-12.97,-49.2
8,@GRAM,Gram,1.504,0.8,1.35,3.94,9.62,8.05,11.99,,,,
```

## Examples

`https://elite.finviz.com/export/futures/performance?auth=YOUR_API_KEY&sort=-perfDayPct`

`https://elite.finviz.com/export/forex/performance?auth=YOUR_API_KEY&unit=pips&sort=-perfWeekPips`

`https://elite.finviz.com/export/crypto/performance?auth=YOUR_API_KEY&c=EUR`
