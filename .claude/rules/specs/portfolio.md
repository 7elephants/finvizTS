## Description

The portfolio API allows for multiple stock tickers to be requested and returns them with the configured fields of a pre-determined view or custom view.

## Request

The screener endpoint is a GET request to `portfolio_export.ashx` with the following query parameters:

- `auth` (required): Your API key
- `pid` (required): The ID of the portfolio view you want to retrieve. You can get this ID by opening the portfolio on the Finviz website and looking at the URL. For example, if the URL is `https://elite.finviz.com/portfolio.ashx?pid=111`, then the `pid` would be `111`.

- `o` (optional): The column the results should be sorted by. The list of sortable columns is:

| Name      |
| --------- |
| ticker    |
| company   |
| price     |
| changepct |
| volume    |

The default sort order is ascending. To sort in descending order, add a minus sign before the column name (e.g. `o=-price`).

- `c` (optional): The columns to include in the response. This is a comma-separated list of column indices. The column indices are determined by the view you selected. For example, if you selected the "Overview" view, the columns are:

| Index | Name         |
| ----- | ------------ |
| 0     | Ticker       |
| 1     | Company      |
| 2     | Price        |
| 3     | Change (%)   |
| 4     | Volume       |
| 5     | Transaction  |
| 6     | Date         |
| 7     | Shares       |
| 8     | Cost         |
| 9     | Market Value |
| 10    | Gain ($)     |
| 11    | Gain (%)     |
| 12    | Change ($)   |

## Response

```csv
Ticker,Company,Price,Change%,Volume,Transaction,Date,Shares,Cost,Market Value,Gain$,Gain%,Change$
PFE,Pfizer Inc,26.92,-1.10%,27882413,Watch,12/15/2025,0,0,,,,
MO,Altria Group Inc,67.38,-0.12%,7115858,Watch,12/15/2025,0,0,,,,
MSFT,Microsoft Corporation,370.87,-0.59%,28111128,Watch,12/15/2025,0,0,,,,
SPY,SPDR S&P 500 ETF TRUST,679.46,-0.07%,42254222,Watch,12/15/2025,0,0,,,,
DELL,Dell Technologies Inc,177.8,-2.02%,4279742,Watch,12/15/2025,0,0,,,,
UVXY,ProShares Ultra VIX Short-Term Futures ETF 1.5x Shares,41.92,1.92%,3857466,Buy,5/8/2025,3000,26.66,125759.99,45779.99,57.24%,2369.99
SVXY,ProShares Short VIX Short-Term Futures ETF -0.5x Shares,48.87,-0.87%,1206553,Watch,12/15/2025,0,0,,,,
UVIX,2x Long VIX Futures ETF,6.4,2.40%,51155501,Watch,12/15/2025,0,0,,,,
PLTR,Palantir Technologies Inc,128.06,-1.86%,116656836,Watch,12/15/2025,0,0,,,,
SMCI,Super Micro Computer Inc,25.26,8.79%,43565769,Watch,12/15/2025,0,0,,,,
```

## Example

`https://elite.finviz.com/portfolio_export.ashx?auth=YOUR_API_KEY&pid=1000983827&o=company&c=0,1,2,8`
