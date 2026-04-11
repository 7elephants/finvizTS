## Description

The news API allows for a single group to be requested and returns them with the configured fields of a pre-determined view or custom view.

## Request

The screener endpoint is a GET request to `news_export.ashx` with the following query parameters:

- `auth` (required): Your API key
- `v` (required): Type of news to retrieve. Valid values are:

| Value | Description              |
| ----- | ------------------------ |
| 1     | Market by time (default) |
| 2     | Market by source         |
| 3     | Stock (no ETFs)          |
| 4     | ETF                      |
| 5     | Crypto                   |

- `pid` (optional): If `v=3` or `v=4`, you can specify a portfolio ID to retrieve news for the stocks in that portfolio.
- `t` (optional): If `v=3` or `v=4`, you can specify a stock tickers in a CSV list (e.g., `t=AAPL,MSFT`). This will override the `pid` parameter if both are provided. If `v=5`, you can specify a crypto tickers (e.g., `t=BTC,ETH`).

## Response

```csv
Title,Source,Date,Url,Category,Ticker
Nike on the brink as shares crash 75% from highs. Critics say brand went woke and is now broke (but heres the truth),Moneywise,4/11/2026 8:20,https://finance.yahoo.com/markets/stocks/articles/nike-brink-shares-crash-75-122000902.html,Stock,NKE
R - Elevance Health: The Multi-Year Re-Rating Opportunity,GuruFocus.com,4/11/2026 8:16,https://finance.yahoo.com/sectors/healthcare/articles/r-elevance-health-multi-rating-121635764.html,Stock,ELV
'Not as bullish': Big banks are entering Q1 earnings season on less certain footing than in January,Yahoo Finance,4/11/2026 8:08,https://finance.yahoo.com/markets/stocks/article/not-as-bullish-big-banks-are-entering-q1-earnings-season-on-less-certain-footing-than-in-january-120803928.html,Stock,"C,JPM,BAC,GS,MS,WFC"
How to avoid 2 troubling new retirement trends,Yahoo Finance Video,4/11/2026 8:00,https://finance.yahoo.com/video/how-to-avoid-2-troubling-new-retirement-trends-120000616.html,Stock,WMT
Software stocks are plunging. Why that's a warning sign for the entire market: Chart of the Day,Yahoo Finance,4/11/2026 7:37,https://finance.yahoo.com/news/software-stocks-are-plunging-why-thats-a-warning-sign-for-the-entire-market-chart-of-the-day-113707428.html,Stock,"IGV,SOXX,CIBR,DDOG,DOCU,INTU,NET,RNG,SKYY,TEAM,WCLD,WDAY,XSW,ZS,SNOW,HUBS"
It's been one of Wall Street's most heated AI debates - and it may be totally missing the point,MarketWatch,4/11/2026 7:30,https://www.marketwatch.com/story/its-been-one-of-wall-streets-most-heated-ai-debates-and-it-may-be-totally-missing-the-point-0b8857ef?mod=mw_FV,Stock,"COHR,CRDO,LITE"
Japan Bets $16 Billion to Propel Rapidus in Global AI Chip Race,Bloomberg,4/11/2026 7:25,https://finance.yahoo.com/sectors/technology/articles/japan-bets-16-billion-propel-112506649.html,Stock,"ASML,AAPL,TSLA,NVDA,INTC,IBM"
"BioNTech and DualityBio's Antibody-Drug Conjugate Trastuzumab Pamirtecan Demonstrated Clinically Meaningful Efficacy in Patients with HER2-Expressing, Recurrent Endometrial Cancer",GlobeNewswire,4/11/2026 7:00,https://elite.finviz.com/news/343911/biontech-and-dualitybios-antibody-drug-conjugate-trastuzumab-pamirtecan-demonstrated-clinically-meaningful-efficacy-in-patients-with-her2-expressing-recurrent-endometrial-cancer,Stock,BNTX
Worker who said he wasnt paid enough to live accused of torching Kimberly-Clark warehouse serving 50 million,Moneywise,4/11/2026 6:45,https://finance.yahoo.com/economy/policy/articles/worker-said-wasn-t-paid-104500107.html,Stock,KMB
"EU airports warn of looming ""systemic"" jet fuel crunch on Hormuz blockade",Investing.com,4/11/2026 6:15,https://finance.yahoo.com/m/65a23375-9b6c-3429-8e97-776a435fd784/eu-airports-warn-of-looming.html,Stock,RYAAY
"Chinese investment in Brazil pivots from power dams to ice cream, courting consumers",Reuters,4/11/2026 6:10,https://finance.yahoo.com/economy/policy/articles/chinese-investment-brazil-pivots-power-101014359.html,Stock,"SBUX,MCD"
Wyloo project drilling to drive Novo news flow - ICYMI,Proactive,4/11/2026 6:00,https://finance.yahoo.com/m/dad53f7b-b855-36a1-ab08-c0b0f43fc7af/wyloo-project-drilling-to.html,Stock,NVO

```

## Example

`https://elite.finviz.com/news_export.ashx?auth=YOUR_API_KEY&&v=1`
