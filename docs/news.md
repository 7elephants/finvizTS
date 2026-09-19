[**finvizts**](README.md)

***

[finvizts](README.md) / news

# news

## Functions

### getNews()

> **getNews**(`client`, `options?`): `Promise`\<[`NewsItem`](types/news.md#newsitem)[]\>

Defined in: [news.ts:24](https://github.com/7elephants/finvizTS/blob/d73323451cc466a717d752578726ed80f8ea4df6/src/news.ts#L24)

Fetch financial news filtered by type and optionally by ticker or portfolio.
The API returns a multi-row CSV; each row is mapped to a NewsItem.

#### Parameters

##### client

[`FinvizClient`](client.md#finvizclient)

Authenticated FinvizClient instance

##### options?

[`NewsOptions`](types/news.md#newsoptions) = `{}`

News type, optional ticker(s) or portfolio ID

#### Returns

`Promise`\<[`NewsItem`](types/news.md#newsitem)[]\>
