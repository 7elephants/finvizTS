[**finvizts**](README.md)

***

[finvizts](README.md) / quote

# quote

## Functions

### getQuote()

> **getQuote**(`client`, `ticker`, `options`): `Promise`\<[`Quote`](types/quote.md#quote)[]\>

Defined in: [quote.ts:24](https://github.com/7elephants/finvizTS/blob/cf3affc8092870b336ac093aca4485addf4f6c2a/src/quote.ts#L24)

Fetch OHLCV time-series data for a single ticker symbol.
The API returns a multi-row CSV (header + data rows); each row becomes a Quote.

#### Parameters

##### client

[`FinvizClient`](client.md#finvizclient)

Authenticated FinvizClient instance

##### ticker

`string`

Stock ticker symbol (e.g. "AAPL")

##### options

[`QuoteOptions`](types/quote.md#quoteoptions)

Period (required) and optional range

#### Returns

`Promise`\<[`Quote`](types/quote.md#quote)[]\>
