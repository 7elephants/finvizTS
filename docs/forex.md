[**finvizts**](README.md)

***

[finvizts](README.md) / forex

# forex

## Functions

### getForex()

> **getForex**(`client`, `options?`): `Promise`\<[`PerformanceItem`](types/performance.md#performanceitem)[]\>

Defined in: forex.ts:25

Fetch forex performance, optionally sorted by order/direction.
The API returns a multi-row CSV; each row is mapped to a ForexItem.

#### Parameters

##### client

[`FinvizClient`](client.md#finvizclient)

Authenticated FinvizClient instance

##### options?

[`PerformanceOptions`](types/performance.md#performanceoptions) = `{}`

Sort options

#### Returns

`Promise`\<[`PerformanceItem`](types/performance.md#performanceitem)[]\>
