## Description

The quote API allows for a single stock ticker to be requested and returns them with the configured fields of a pre-determined view or custom view.

## Request

The screener endpoint is a GET request to `quote_export.ashx` with the following query parameters:

- `auth` (required): Your API key
- `t` (required): The stock ticker symbol you want to retrieve data for. For example, `AAPL` for Apple Inc.
- `p` (required): The period/interval of quote data you want to retrieve. The valid values are:

| Value | Description |
| ----- | ----------- |
| i1    | 1 minute    |
| i3    | 3 minutes   |
| i5    | 5 minutes   |
| i15   | 15 minutes  |
| i30   | 30 minutes  |
| h     | 1 hour      |
| d     | Daily       |
| w     | Weekly      |
| m     | Monthly     |

- 'r' (optional): The range of time to return data for. Here is a list of valid values:

| Value                       | Description                                                                                            |
| --------------------------- | ------------------------------------------------------------------------------------------------------ |
| d1                          | 1 day                                                                                                  |
| d5                          | 5 days                                                                                                 |
| m1                          | 1 month                                                                                                |
| m3                          | 3 months                                                                                               |
| m6                          | 6 months                                                                                               |
| y1                          | 1 year                                                                                                 |
| y2                          | 2 years                                                                                                |
| y5                          | 5 years                                                                                                |
| ytd                         | Year to date                                                                                           |
| max                         | Maximum available data                                                                                 |
| range_mm-dd-yyyyxmm-dd-yyyy | Custom date range (e.g. `range_01-01-2020x12-31-2020`)                                                 |
| prev_y-m-d                  | Custom range from now backwards (e.g. `prev_1-1-1` for going back 1 year, 1 month, and 1 day from now) |

## Response

```csv
Date,Open,High,Low,Close,Volume
3/31/2016,54.95,55.59,54.86,55.23,26360496
4/1/2016,55.05,55.61,54.57,55.57,24399192
4/4/2016,55.43,55.66,55,55.43,18928810
4/5/2016,55.19,55.3,54.46,54.56,19272256
4/6/2016,54.36,55.2,54.21,55.12,21188682
4/7/2016,54.87,54.91,54.23,54.46,19225092
4/8/2016,54.67,55.28,54.32,54.42,22167224
4/11/2016,54.49,55.15,54.3,54.31,21414228
4/12/2016,54.37,54.78,53.76,54.65,24944288
4/13/2016,55.12,55.438,54.89,55.35,20817960
```

## Example

`https://elite.finviz.com/quote_export.ashx?auth=YOUR_API_KEY&t=MSFT&p=d&r=y1`
