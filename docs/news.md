[**finvizts**](README.md)

***

[finvizts](README.md) / news

# news

## Functions

### getNews()

> **getNews**(`client`, `options?`): `Promise`\<[`FinvizResponse`](types/response.md#finvizresponse)\<[`NewsItem`](types/news.md#newsitem)\>\>

Defined in: [news.ts:35](https://github.com/7elephants/finvizTS/blob/35b052f8358756be41e8745d2c1b57d3010c1398/src/news.ts#L35)

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

`Promise`\<[`FinvizResponse`](types/response.md#finvizresponse)\<[`NewsItem`](types/news.md#newsitem)\>\>
