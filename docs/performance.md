[**finvizts**](README.md)

***

[finvizts](README.md) / performance

# performance

## Functions

### getPerformanceItems()

> **getPerformanceItems**(`client`, `path`, `options`, `extraParams?`, `perfColumn?`): `Promise`\<[`FinvizResponse`](types/response.md#finvizresponse)\<[`PerformanceItem`](types/performance.md#performanceitem)\>\>

Defined in: [performance.ts:65](https://github.com/7elephants/finvizTS/blob/f744eabcb42982a597319cae2efa34ee2e597d43/src/performance.ts#L65)

Fetch futures, forex or crypto performance rows, optionally sorted by order/direction.
The API returns a multi-row CSV; each row is mapped to a PerformanceItem via
parseRows().

#### Parameters

##### client

[`FinvizClient`](client.md#finvizclient)

Authenticated FinvizClient instance

##### path

`PerformancePath`

`/export/futures/performance`, `/export/forex/performance` or
                 `/export/crypto/performance`

##### options

[`PerformanceOptions`](types/performance.md#performanceoptions) \| [`ForexOptions`](types/forex.md#forexoptions)

Sort options

##### extraParams?

`Record`\<`string`, `string` \| `undefined`\> = `{}`

Endpoint-specific query params (e.g. forex `unit`, crypto `c`)

##### perfColumn?

`string` = `'Performance'`

CSV header prefix of the performance columns (forex pips uses
                     `Performance in Pips`)

Blank cells (e.g. newly listed crypto with no long-range history) are `undefined`.

#### Returns

`Promise`\<[`FinvizResponse`](types/response.md#finvizresponse)\<[`PerformanceItem`](types/performance.md#performanceitem)\>\>
