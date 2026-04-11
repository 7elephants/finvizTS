## Description

The groups API allows for a single group to be requested and returns them with the configured fields of a pre-determined view or custom view.

## Request

The screener endpoint is a GET request to `grp_export.ashx` with the following query parameters:

- `auth` (required): Your API key
- `g` (required): The group name you want to retrieve. For example, if you want to retrieve the "Sectors" group, you would use `g=sector`. Here is a list of valid group names:

| Name           |
| -------------- |
| sector         |
| industry       |
| country        |
| capitalization |

- `sg` (optional): The subgroup name you want to retrieve. This is only applicable for certain groups that have subgroups. For example, if you want to retrieve the "Technology" subgroup within the "Sectors" group, you would use `sg=technology`. The valid subgroup names depend on the group you selected. `Industry` subgroups are:

| Name                  |
| --------------------- |
| basicmaterials        |
| communicationservices |
| consumercyclical      |
| consumerdefensive     |
| energy                |
| financial             |
| healthcare            |
| industrials           |
| realestate            |
| technology            |
| utilities             |

- `v` (required): The ID of the screener view you want to retrieve. The view ID determines which fields are returned in the response. Here is a table of the views and their corresponding IDs:

| ID  | Name               |
| --- | ------------------ |
| 110 | Overview (default) |
| 120 | Valuation          |
| 140 | Performance        |
| 150 | Custom             |
| 210 | Performance Chart  |
| 310 | Spectrum           |
| 410 | Charts             |
| 510 | Maps               |

- `c` (optional): The columns to include in the response. This is a comma-separated list of column indices. The column indices are determined by the view you selected. For example, if you selected the "Overview" view, the columns are:

| Index | Name                       |
| ----- | -------------------------- |
| 0     | No.                        |
| 1     | Name                       |
| 2     | Market Cap                 |
| 3     | P/E                        |
| 4     | Forward P/E                |
| 5     | PEG                        |
| 6     | P/S                        |
| 7     | P/B                        |
| 8     | P/C                        |
| 9     | P/Free Cash Flow           |
| 10    | Dividend Yield             |
| 11    | EPS growth past 5 years    |
| 12    | EPS growth next 5 years    |
| 13    | Sales growth past 5 years  |
| 14    | Float Short                |
| 15    | Performance (Week)         |
| 16    | Performance (Month)        |
| 17    | Performance (Quarter)      |
| 18    | Performance (Half Year)    |
| 19    | Performance (Year)         |
| 20    | Performance (Year To Date) |
| 21    | Analyst Recom              |
| 22    | Average Volume             |
| 23    | Relative Volume            |
| 24    | Change                     |
| 25    | Volume                     |
| 26    | Stocks                     |

## Response

```csv
No.,Name,Market Cap,P/E,Dividend Yield,Average Volume,Change,Volume,Stocks
1,Basic Materials,3000477.35,26.93,1.88%,850238.33,0.95%,561736176,281
2,Communication Services,12057514.83,38.25,0.57%,718053.2,-0.25%,518917588,264
3,Consumer Cyclical,8879311.46,30.09,0.82%,1158098.24,0.32%,883751070,551
4,Consumer Defensive,4424842.48,26.86,2.40%,479413.88,-1.22%,363413020,242
5,Energy,4611533.65,19.66,3.45%,865655.05,0.12%,635016421,253
6,Financial,13628854.75,17.3,1.99%,1543355.32,-0.69%,1117286062,1072
7,Healthcare,8299086.74,28.14,1.60%,1400815.7,-1.21%,1107634990,1078
8,Industrials,7552219.2,32.72,1.10%,1143886.24,-0.23%,919603560,687
9,Real Estate,1730837.76,32.76,3.83%,451533.63,0.24%,365759563,254
10,Technology,25791027.68,34.06,0.61%,2789265.27,0.66%,2922381653,781
11,Utilities,1958270.69,22.46,2.81%,228468.19,-0.13%,154494966,110
```

## Example

`https://elite.finviz.com/grp_export.ashx?auth=YOUR_API_KEY&g=sector&v=110`
