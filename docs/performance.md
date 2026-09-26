[**finvizts**](README.md)

***

[finvizts](README.md) / performance

# performance

## Functions

### getPerformanceItems()

> **getPerformanceItems**(`client`, `path`, `options`, `extraParams?`, `perfColumn?`): `Promise`\<[`PerformanceItem`](types/performance.md#performanceitem)[]\>

Defined in: [performance.ts:42](https://github.com/7elephants/finvizTS/blob/d23addfae925d6c740f235b944360447f6cbc93c/src/performance.ts#L42)

Fetch futures, forex or crypto performance rows, optionally sorted by order/direction.
The API returns a multi-row CSV; each row is mapped to a PerformanceItem.

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

Blank cells intentionally parse to `NaN` (`parseFloat('')`), unlike fund-manager.ts, which
defaults them to `0` via `||`.

#### Returns

`Promise`\<[`PerformanceItem`](types/performance.md#performanceitem)[]\>
