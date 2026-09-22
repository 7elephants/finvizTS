## Description

The managers API returns fund manager portfolio summaries (13F-based holdings analytics), optionally filtered by a search term and sorted by order/direction. This is the same underlying Finviz resource as the [funds API](funds.md), queried by manager name instead of fund name.

## Request

The managers endpoint is a GET request to `export/managers` with the following query parameters:

- `auth` (required): Your API key
- `search` (optional): Search term to filter by manager name.
- `sort` (optional): The column the results should be sorted by. The list of sortable columns is:

| Name                    |
| ------------------------ |
| most_popular            |
| portfolio_value         |
| num_investments         |
| new_purchased           |
| sold_out                |
| added                   |
| reduced                 |
| top_ten_concentration   |
| turnover                |
| time_held_top10         |
| time_held_all           |

The default sort order is ascending. To sort in descending order, add a minus sign before the column name (e.g. `sort=-portfolio_value`).

## Response

```csv
Name,Manager,Investor ID,Report Date,Portfolio Value,# Investments,New Purchased,Sold Out,Added,Reduced,Top 10 Concentration (%),Turnover (%),Time Held Top 10,Time Held All
Berkshire Hathaway Inc,Warren Buffett,1067983,3/31/2026,350000000000,45,2,1,3,4,85.5,5.2,12,10
```

## Example

`https://elite.finviz.com/export/managers?auth=YOUR_API_KEY&search=Berkshire&sort=-portfolio_value`
