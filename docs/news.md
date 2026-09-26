[**finvizts**](README.md)

***

[finvizts](README.md) / news

# news

## Functions

### getNews()

> **getNews**(`client`, `options?`): `Promise`\<[`FinvizResponse`](types/response.md#finvizresponse)\<[`NewsItem`](types/news.md#newsitem)\>\>

Defined in: [news.ts:35](https://github.com/7elephants/finvizTS/blob/7e7978f9488c74f86a2da83536b1c7137358ef1d/src/news.ts#L35)

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
