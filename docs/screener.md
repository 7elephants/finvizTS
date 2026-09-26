[**finvizts**](README.md)

***

[finvizts](README.md) / screener

# screener

## Functions

### getScreener()

> **getScreener**(`client`, `options?`): `Promise`\<[`Screener`](types/screener.md#screener)[]\>

Defined in: [screener.ts:26](https://github.com/7elephants/finvizTS/blob/d00d34aa8d6b6f5017c56eafb1130a718f09ad93/src/screener.ts#L26)

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

`Promise`\<[`Screener`](types/screener.md#screener)[]\>
