[**finvizts**](README.md)

***

[finvizts](README.md) / filings

# filings

## Functions

### getLatestFilings()

> **getLatestFilings**\<`C`, `F`\>(`client`, `ticker`, `options?`): `Promise`\<[`FinvizResponse`](types/response.md#finvizresponse)\<[`Filing`](types/filings.md#filing), `F`\>\>

Defined in: [filings.ts:38](https://github.com/7elephants/finvizTS/blob/706aab1e24071062daf1484d72ac61b15cccad77/src/filings.ts#L38)

Fetch recent SEC filings for a single ticker symbol.
The API returns a multi-row CSV; each row is mapped to a Filing.

#### Type Parameters

##### C

`C` *extends* [`ResponseFormat`](types/response.md#responseformat) = `"parsed"`

##### F

`F` *extends* [`ResponseFormat`](types/response.md#responseformat) = `C`

#### Parameters

##### client

[`FinvizClient`](client.md#finvizclient)\<`C`\>

Authenticated FinvizClient instance

##### ticker

`string`

Stock ticker symbol (e.g. "MSFT")

##### options?

[`FilingOptions`](types/filings.md#filingoptions) & [`FormatOption`](types/response.md#formatoption)\<`F`\> = `{}`

Optional sort order and filing type filter, plus optional `format`
                 (`parsed` | `raw` | `both`) overriding the client default

#### Returns

`Promise`\<[`FinvizResponse`](types/response.md#finvizresponse)\<[`Filing`](types/filings.md#filing), `F`\>\>
