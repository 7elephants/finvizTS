[**finvizts**](README.md)

***

[finvizts](README.md) / quote

# quote

## Functions

### getQuote()

> **getQuote**\<`C`, `F`\>(`client`, `ticker`, `options`): `Promise`\<[`FinvizResponse`](types/response.md#finvizresponse)\<[`Quote`](types/quote.md#quote), `F`\>\>

Defined in: [quote.ts:37](https://github.com/7elephants/finvizTS/blob/706aab1e24071062daf1484d72ac61b15cccad77/src/quote.ts#L37)

Fetch OHLCV time-series data for a single ticker symbol.
The API returns a multi-row CSV (header + data rows); each row becomes a Quote.

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

Stock ticker symbol (e.g. "AAPL")

##### options

[`QuoteOptions`](types/quote.md#quoteoptions) & [`FormatOption`](types/response.md#formatoption)\<`F`\>

Period (required) and optional range, plus optional `format`
                 (`parsed` | `raw` | `both`) overriding the client default

#### Returns

`Promise`\<[`FinvizResponse`](types/response.md#finvizresponse)\<[`Quote`](types/quote.md#quote), `F`\>\>
