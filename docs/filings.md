[**finvizts**](README.md)

***

[finvizts](README.md) / filings

# filings

## Functions

### getLatestFilings()

> **getLatestFilings**(`client`, `ticker`, `options?`): `Promise`\<[`FinvizResponse`](types/response.md#finvizresponse)\<[`Filing`](types/filings.md#filing)\>\>

Defined in: [filings.ts:37](https://github.com/7elephants/finvizTS/blob/7e7978f9488c74f86a2da83536b1c7137358ef1d/src/filings.ts#L37)

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
