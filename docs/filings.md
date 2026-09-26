[**finvizts**](README.md)

***

[finvizts](README.md) / filings

# filings

## Functions

### getLatestFilings()

> **getLatestFilings**(`client`, `ticker`, `options?`): `Promise`\<[`FinvizResponse`](types/response.md#finvizresponse)\<[`Filing`](types/filings.md#filing)\>\>

Defined in: [filings.ts:37](https://github.com/7elephants/finvizTS/blob/35b052f8358756be41e8745d2c1b57d3010c1398/src/filings.ts#L37)

Fetch recent SEC filings for a single ticker symbol.
The API returns a multi-row CSV; each row is mapped to a Filing.

#### Parameters

##### client

[`FinvizClient`](client.md#finvizclient)

Authenticated FinvizClient instance

##### ticker

`string`

Stock ticker symbol (e.g. "MSFT")

##### options?

[`FilingOptions`](types/filings.md#filingoptions) = `{}`

Optional sort order and filing type filter

#### Returns

`Promise`\<[`FinvizResponse`](types/response.md#finvizresponse)\<[`Filing`](types/filings.md#filing)\>\>
