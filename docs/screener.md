[**finvizts**](README.md)

***

[finvizts](README.md) / screener

# screener

## Functions

### getScreener()

> **getScreener**(`client`, `options?`): `Promise`\<[`FinvizResponse`](types/response.md#finvizresponse)\<[`Screener`](types/screener.md#screener)\>\>

Defined in: [screener.ts:27](https://github.com/7elephants/finvizTS/blob/7e7978f9488c74f86a2da83536b1c7137358ef1d/src/screener.ts#L27)

Query the Finviz screener with optional view, fields, filters, ordering, and pagination.
The API returns a multi-row CSV; each data row becomes a key/value record.

#### Parameters

##### client

[`FinvizClient`](client.md#finvizclient)

Authenticated FinvizClient instance

##### options?

[`ScreenerOptions`](types/screener.md#screeneroptions) = `{}`

Screener options (view, fields, filters, order, rows, signal)

#### Returns

`Promise`\<[`FinvizResponse`](types/response.md#finvizresponse)\<[`Screener`](types/screener.md#screener)\>\>
