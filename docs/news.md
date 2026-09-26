[**finvizts**](README.md)

***

[finvizts](README.md) / news

# news

## Functions

### getNews()

> **getNews**\<`C`, `F`\>(`client`, `options?`): `Promise`\<[`FinvizResponse`](types/response.md#finvizresponse)\<[`NewsItem`](types/news.md#newsitem), `F`\>\>

Defined in: [news.ts:36](https://github.com/7elephants/finvizTS/blob/80a71835161ee929f23b53123ed4d2d457750e80/src/news.ts#L36)

Fetch financial news filtered by type and optionally by ticker or portfolio.
The API returns a multi-row CSV; each row is mapped to a NewsItem.

#### Type Parameters

##### C

`C` *extends* [`ResponseFormat`](types/response.md#responseformat) = `"parsed"`

##### F

`F` *extends* [`ResponseFormat`](types/response.md#responseformat) = `C`

#### Parameters

##### client

[`FinvizClient`](client.md#finvizclient)\<`C`\>

Authenticated FinvizClient instance

##### options?

[`NewsOptions`](types/news.md#newsoptions) & [`FormatOption`](types/response.md#formatoption)\<`F`\> = `{}`

News type, optional ticker(s) or portfolio ID, plus optional `format`
                 (`parsed` | `raw` | `both`) overriding the client default

#### Returns

`Promise`\<[`FinvizResponse`](types/response.md#finvizresponse)\<[`NewsItem`](types/news.md#newsitem), `F`\>\>
