[**finvizts**](README.md)

***

[finvizts](README.md) / performance

# performance

## Functions

### getPerformanceItems()

> **getPerformanceItems**(`client`, `path`, `options`): `Promise`\<[`PerformanceItem`](types/performance.md#performanceitem)[]\>

Defined in: performance.ts:28

Fetch futures, forex or crypto performance rows, optionally sorted by order/direction.
The API returns a multi-row CSV; each row is mapped to a PerformanceItem.

#### Parameters

##### client

[`FinvizClient`](client.md#finvizclient)

Authenticated FinvizClient instance

##### path

`string`

`/export/futures/performance`, `/export/forex/performance` or
                 `/export/crypto/performance`

##### options

[`PerformanceOptions`](types/performance.md#performanceoptions)

Sort options

#### Returns

`Promise`\<[`PerformanceItem`](types/performance.md#performanceitem)[]\>
