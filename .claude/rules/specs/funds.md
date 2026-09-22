## Description

The funds API returns fund portfolio summaries (13F-based holdings analytics), optionally filtered by a search term and sorted by order/direction. This is the same underlying Finviz resource as the [managers API](managers.md), queried by fund name instead of manager name.

## Request

The funds endpoint is a GET request to `export/funds` with the following query parameters:

- `auth` (required): Your API key
- `search` (optional): Search term to filter by fund name.
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
Name,Fund,Investor ID,Report Date,Portfolio Value,# Investments,New Purchased,Sold Out,Added,Reduced,Top 10 Concentration (%),Turnover (%),Time Held Top 10,Time Held All
Vanguard Total Stock Market Index Fund,Vanguard Group,2011124,3/31/2026,1500000000000,3800,50,30,900,850,25.1,2.3,20,18
```

## Example

`https://elite.finviz.com/export/funds?auth=YOUR_API_KEY&search=Vanguard&sort=-portfolio_value`
