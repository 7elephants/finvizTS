## Description

The screener API allows for multiple stock tickers to be requested and returns them with the configured fields of a pre-determined view or custom view.

## Request

The screener endpoint is a GET request to `export.ashx` with the following query parameters:

- `auth` (required)): Your API key
- `v` (required): The ID of the screener view you want to retrieve. The view ID determines which fields are returned in the response. Here is a table of the views and their corresponding IDs:

| ID  | Name            |
| --- | --------------- |
| 111 | Overview        |
| 121 | Valuation       |
| 131 | Performance     |
| 141 | Ownership       |
| 151 | Custom          |
| 161 | Financial       |
| 171 | Technical       |
| 181 | ETF             |
| 191 | ETF Performance |
| 211 | Charts          |
| 311 | Basic           |
| 321 | News            |
| 341 | Snapshot        |
| 351 | TA              |
| 411 | Tickers         |
| 711 | Maps            |

You can also create your own custom view by selecting the fields you want on the Finviz website and then using the ID of that view in the API request.

- `c` (optional): The fields you want to retrieve. This is a comma-separated list of field codes. The field codes depend on the view you selected. Here is a list of some common field codes:

| ID  | Name                          |
| --- | ----------------------------- |
| 0   | No.                           |
| 1   | Ticker                        |
| 2   | Company                       |
| 3   | Sector                        |
| 4   | Industry                      |
| 5   | Country                       |
| 6   | Market Capitalization         |
| 7   | P/E                           |
| 8   | Forward P/E                   |
| 9   | PEG                           |
| 10  | P/S                           |
| 11  | P/B                           |
| 12  | P/Cash                        |
| 13  | P/Free Cash Flow              |
| 14  | Dividend Yield                |
| 15  | Payout Ratio                  |
| 16  | EPS                           |
| 17  | EPS Growth This Year          |
| 18  | EPS Growth Next Year          |
| 19  | EPS Growth Past 5Y            |
| 20  | EPS Growth Next 5Y            |
| 21  | Sales Growth Past 5Y          |
| 22  | EPS Growth Qtr Over Qtr       |
| 23  | Sales Growth Qtr Over Qtr     |
| 24  | Shares Outstanding            |
| 25  | Shares Float                  |
| 26  | Insider Ownership             |
| 27  | Insider Transactions          |
| 28  | Institutional Ownership       |
| 29  | Institutional Transactions    |
| 30  | Short Float                   |
| 31  | Short Ratio                   |
| 32  | Return on Assets              |
| 33  | Return on Equity              |
| 34  | Return on Invested Capital    |
| 35  | Current Ratio                 |
| 36  | Quick Ratio                   |
| 37  | Long Term Debt / Equity       |
| 38  | Total Debt/Equity             |
| 39  | Gross Margin                  |
| 40  | Operating Margin              |
| 41  | Net Profit Margin             |
| 42  | Performance (Week)            |
| 43  | Performance (Month)           |
| 44  | Performance (Quarter)         |
| 45  | Performance (Half Year)       |
| 46  | Performance (Year)            |
| 47  | Performance (YTD)             |
| 48  | Beta                          |
| 49  | Average True Range            |
| 50  | Volatility (Week)             |
| 51  | Volatility (Month)            |
| 52  | 20-Day Simple Moving Average  |
| 53  | 50-Day Simple Moving Average  |
| 54  | 200-Day Simple Moving Average |
| 55  | 50-Day High                   |
| 56  | 50-Day Low                    |
| 57  | 52-Week High                  |
| 58  | 52-Week Low                   |
| 59  | RSI                           |
| 60  | Change From Open (%)          |
| 61  | Gap (%)                       |
| 62  | Analyst Recommendation        |
| 63  | Average Volume                |
| 64  | Relative Volume               |
| 65  | Price                         |
| 66  | Change (%)                    |
| 67  | Volume                        |
| 68  | Earnings Date                 |
| 69  | Target Price                  |
| 70  | IPO Date                      |
| 73  | Book Value Per Share          |
| 74  | Cash Per Share                |
| 75  | Dividend                      |
| 76  | Employees                     |
| 77  | EPS Estimate Next Quarter     |
| 78  | Income                        |
| 79  | Index                         |
| 80  | Optionable                    |
| 81  | Previous Close                |
| 82  | Sales                         |
| 83  | Shortable                     |
| 84  | Short Interest                |
| 85  | Float/Outstanding             |
| 86  | Open                          |
| 87  | High                          |
| 88  | Low                           |
| 100 | Asset Type                    |
| 103 | Category                      |
| 105 | Tags                          |
| 107 | Net Expense Ratio             |
| 108 | Total Holdings                |
| 109 | AUM                           |
| 112 | Net Flows 1M                  |
| 113 | Net Flows 1M (%)              |
| 114 | Net Flows 3M                  |
| 115 | Net Flows 3M (%)              |
| 116 | Net Flows YTD                 |
| 117 | Net Flows YTD (%)             |
| 120 | Return 1Y (%)                 |
| 121 | Return 3Y (%)                 |
| 122 | Return 5Y (%)                 |
| 125 | All-Time High                 |
| 126 | All-Time Low                  |
| 127 | EPS Surprise                  |
| 128 | Revenue Surprise              |
| 129 | Exchange                      |
| 130 | Dividend TTM                  |
| 131 | Dividend Ex-Date              |
| 132 | EPS Year Over Year TTM        |
| 133 | Sales Year Over Team TTM      |
| 134 | 52-Week Range                 |
| 135 | News Time                     |
| 136 | News URL                      |
| 137 | News Title                    |
| 138 | Performance (3Y)              |
| 139 | Performance (5Y)              |
| 140 | Performance (10Y)             |
| 142 | EPS Growth Past 3Y            |
| 143 | Sales Growth Past 3Y          |
| 144 | Enterprise Value              |
| 145 | EV/EBITDA                     |
| 146 | EV/Sales                      |
| 147 | Dividend Growth 1Y            |
| 148 | Dividend Growth 3Y            |
| 149 | Dividend Growth 5Y            |
| 150 | Daily Digest                  |

## Response

```csv
No.,Ticker,Company,Sector,Industry,Country,Market Cap,P/E,Price,Change,Volume
1,A,Agilent Technologies Inc,Healthcare,Diagnostics & Research,USA,32516.22,25.37,115.06,-0.29%,1033245
2,AA,Alcoa Corp,Basic Materials,Aluminum,USA,19269.88,16.28,73.03,-0.33%,3186785
3,AAA,Alternative Access First Priority CLO Bond ETF,Financial,Exchange Traded Fund,USA,,,24.93,0.20%,5637
4,AAAA,Amplius Aggressive Asset Allocation ETF,Financial,Exchange Traded Fund,USA,,,27.9,0.04%,11825
5,AAAC,Columbia AAA CLO ETF,Financial,Exchange Traded Fund,USA,,,20,0.05%,6
6,AAAU,Goldman Sachs Physical Gold ETF,Financial,Exchange Traded Fund,USA,,,46.95,-0.15%,1391115
7,AACB,Artius II Acquisition Inc,Financial,Shell Companies,USA,286.71,659.87,10.36,0.00%,9134
8,AACG,ATA Creativity Global ADR,Consumer Defensive,Education & Training Services,China,33.07,,1.04,6.63%,1009
9,AACI,Armada Acquisition Corp III,Financial,Shell Companies,USA,83.97,,9.87,0.00%,1137
10,AACOU,Abony Acquisition Corp I,Financial,Shell Companies,USA,205.32,,9.92,0.00%,0
```

## Example

`https://elite.finviz.com/export.ashx?auth=YOUR_API_KEY&v=152&c=0,1,2`
