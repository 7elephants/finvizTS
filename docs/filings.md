[**finvizts**](README.md)

***

[finvizts](README.md) / filings

# filings

## Functions

### getLatestFilings()

> **getLatestFilings**(`client`, `ticker`, `options?`): `Promise`\<[`Filing`](types/filings.md#filing)[]\>

Defined in: [filings.ts:26](https://github.com/7elephants/finvizTS/blob/cf3affc8092870b336ac093aca4485addf4f6c2a/src/filings.ts#L26)

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
