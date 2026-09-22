## Description

The insiders API returns insider trading transactions (SEC Form 4 filings), optionally filtered by ticker, transaction type, owner relationship, minimum transaction value, or owner CIK.

## Request

The insiders endpoint is a GET request to `export/insiders` with the following query parameters:

- `auth` (required): Your API key
- `t` (optional): Filter by stock ticker symbol. For example, `AAPL` for Apple Inc.
- `tc` (optional): Filter by transaction type. Valid values are:

| Value | Description      |
| ----- | ----------------- |
| 1     | Buy                |
| 2     | Sale               |
| 4     | Option Exercise    |
| 7     | All (default)      |

- `or` (optional): Filter by 10%+ owner relationship. Valid values are:

| Value | Description                     |
| ----- | -------------------------------- |
| 10    | Include 10% owners                |
| -10   | Exclude 10% owners                 |

- `tv` (optional): Minimum transaction value in dollars.
- `oc` (optional): Filter by owner's SEC CIK number.
- `o` (optional): The column the results should be sorted by. The list of sortable columns is:

| Name                              |
| ---------------------------------- |
| accepted                          |
| ticker                            |
| transactionValue                  |
| transactionDate                   |
| transactionPricePerShare          |
| transactionShares                 |
| sharesOwnedFollowingTransaction   |

The default sort order is ascending. To sort in descending order, add a minus sign before the column name (e.g. `o=-transactionValue`).

## Response

```csv
Ticker,Owner,Owner CIK,Relationship,Date,Transaction,Cost,#Shares,Value ($),#Shares Total,SEC Form 4,SEC Form 4 Link
AAPL,Cook Timothy D,1214156,Officer,4/11/2026,Sale,198.5,50000,9925000,3200000,4/13/2026,https://www.sec.gov/example
```

## Example

`https://elite.finviz.com/export/insiders?auth=YOUR_API_KEY&t=AAPL&tc=2&o=-transactionValue`
