[**finvizts**](README.md)

***

[finvizts](README.md) / quote

# quote

## Functions

### getQuote()

> **getQuote**(`client`, `ticker`, `options`): `Promise`\<[`FinvizResponse`](types/response.md#finvizresponse)\<[`Quote`](types/quote.md#quote)\>\>

Defined in: [quote.ts:37](https://github.com/7elephants/finvizTS/blob/f744eabcb42982a597319cae2efa34ee2e597d43/src/quote.ts#L37)

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

`Promise`\<[`FinvizResponse`](types/response.md#finvizresponse)\<[`Quote`](types/quote.md#quote)\>\>
