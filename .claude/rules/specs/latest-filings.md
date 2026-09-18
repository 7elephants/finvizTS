## Description

The latest filings API allows for a single stock ticker to be requested and returns the latest SEC filings.

## Request

The screener endpoint is a GET request to `export/latest-filings` with the following query parameters:

- `auth` (required): Your API key
- `t` (required): The stock ticker symbol you want to retrieve data for. For example, `AAPL` for Apple Inc.
- `o` (optional): The column the results should be sorted by. The list of sortable columns is:

| Name       |
| ---------- |
| filingDate |
| reportDate |
| form       |

The default sort order is ascending. To sort in descending order, add a minus sign before the column name (e.g. `o=-filingDate`).

- `f` (optional): The field filters what type of filings to include in the response. The list of valid values is:

| Value                        | Description                                                             |
| ---------------------------- | ----------------------------------------------------------------------- |
| annual-quarterly-current     | All annual, quarterly, and current reports                              |
| insider-equity               | Insider equity awards, transactions, and ownership (Section 16 reports) |
| beneficial-ownership         | Beneficial ownership reports                                            |
| exempt-offerings             | Exempt offerings                                                        |
| registration-statements      | Registration statements and prospectuses                                |
| filing-review-correspondence | Filing review correspondence                                            |
| sec-orders-notices           | SEC orders and notices                                                  |
| proxy-materials              | Proxy materials                                                         |
| trust-indentures             | Trust indenture filings                                                 |

## Response

```csv
Filing Date,Report Date,Form,Description,Filing,Document
3/27/2026,,SCHEDULE 13G/A,,https://www.sec.gov/Archives/edgar/data/789019/000010290926001884/0000102909-26-001884-index.html,https://www.sec.gov/Archives/edgar/data/789019/000010290926001884/xslSCHEDULE_13G_X02/primary_doc.xml
3/24/2026,12/31/2025,11-K,"Annual reports of employee stock purchase, savings and similar plans pursuant to Section 15(d)",https://www.sec.gov/Archives/edgar/data/789019/000119312526120090/0001193125-26-120090-index.html,https://www.sec.gov/ix?doc=/Archives/edgar/data/789019/000119312526120090/msft-20251231.htm
3/16/2026,3/16/2026,4,Statement of changes in beneficial ownership of securities,https://www.sec.gov/Archives/edgar/data/789019/000078901926000066/0000789019-26-000066-index.html,https://www.sec.gov/Archives/edgar/data/789019/000078901926000066/xslF345X05/form4.xml
3/13/2026,3/12/2026,4,Statement of changes in beneficial ownership of securities,https://www.sec.gov/Archives/edgar/data/789019/000078901926000064/0000789019-26-000064-index.html,https://www.sec.gov/Archives/edgar/data/789019/000078901926000064/xslF345X05/form4.xml
3/13/2026,3/12/2026,4,Statement of changes in beneficial ownership of securities,https://www.sec.gov/Archives/edgar/data/789019/000078901926000063/0000789019-26-000063-index.html,https://www.sec.gov/Archives/edgar/data/789019/000078901926000063/xslF345X05/form4.xml
3/13/2026,3/12/2026,4,Statement of changes in beneficial ownership of securities,https://www.sec.gov/Archives/edgar/data/789019/000078901926000062/0000789019-26-000062-index.html,https://www.sec.gov/Archives/edgar/data/789019/000078901926000062/xslF345X05/form4.xml
3/13/2026,3/12/2026,4,Statement of changes in beneficial ownership of securities,https://www.sec.gov/Archives/edgar/data/789019/000078901926000061/0000789019-26-000061-index.html,https://www.sec.gov/Archives/edgar/data/789019/000078901926000061/xslF345X05/form4.xml
3/13/2026,3/12/2026,4,Statement of changes in beneficial ownership of securities,https://www.sec.gov/Archives/edgar/data/789019/000078901926000060/0000789019-26-000060-index.html,https://www.sec.gov/Archives/edgar/data/789019/000078901926000060/xslF345X05/form4.xml
3/13/2026,3/12/2026,4,Statement of changes in beneficial ownership of securities,https://www.sec.gov/Archives/edgar/data/789019/000078901926000059/0000789019-26-000059-index.html,https://www.sec.gov/Archives/edgar/data/789019/000078901926000059/xslF345X05/form4.xml
3/13/2026,3/12/2026,4,Statement of changes in beneficial ownership of securities,https://www.sec.gov/Archives/edgar/data/789019/000078901926000058/0000789019-26-000058-index.html,https://www.sec.gov/Archives/edgar/data/789019/000078901926000058/xslF345X05/form4.xml
```

## Example

`https://elite.finviz.com/export/latest-filings?auth=YOUR_API_KEY&t=MSFT&o=-filingDate&f=annual-quarterly-current`
