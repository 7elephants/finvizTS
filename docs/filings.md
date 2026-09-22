[**finvizts**](README.md)

***

[finvizts](README.md) / filings

# filings

## Functions

### getLatestFilings()

> **getLatestFilings**(`client`, `ticker`, `options?`): `Promise`\<[`Filing`](types/filings.md#filing)[]\>

Defined in: [filings.ts:26](https://github.com/7elephants/finvizTS/blob/32fcd93ddd781eae14ef7eb4cd2365c4fc65b963/src/filings.ts#L26)

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

`Promise`\<[`Filing`](types/filings.md#filing)[]\>
