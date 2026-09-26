[**finvizts**](README.md)

***

[finvizts](README.md) / screener

# screener

## Functions

### getScreener()

> **getScreener**\<`C`, `F`\>(`client`, `options?`): `Promise`\<[`FinvizResponse`](types/response.md#finvizresponse)\<[`Screener`](types/screener.md#screener), `F`\>\>

Defined in: [screener.ts:28](https://github.com/7elephants/finvizTS/blob/706aab1e24071062daf1484d72ac61b15cccad77/src/screener.ts#L28)

Query the Finviz screener with optional view, fields, filters, ordering, and pagination.
The API returns a multi-row CSV; each data row becomes a key/value record.

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

[`ScreenerOptions`](types/screener.md#screeneroptions) & [`FormatOption`](types/response.md#formatoption)\<`F`\> = `{}`

Screener options (view, fields, filters, order, rows, signal), plus optional `format`
                 (`parsed` | `raw` | `both`) overriding the client default

#### Returns

`Promise`\<[`FinvizResponse`](types/response.md#finvizresponse)\<[`Screener`](types/screener.md#screener), `F`\>\>
