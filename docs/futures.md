[**finvizts**](README.md)

***

[finvizts](README.md) / futures

# futures

## Functions

### getFutures()

> **getFutures**(`client`, `options?`): `Promise`\<[`PerformanceItem`](types/performance.md#performanceitem)[]\>

Defined in: [futures.ts:25](https://github.com/7elephants/finvizTS/blob/d23addfae925d6c740f235b944360447f6cbc93c/src/futures.ts#L25)

Fetch futures performance, optionally sorted by order/direction.
The API returns a multi-row CSV; each row is mapped to a FuturesItem.

#### Parameters

##### client

[`FinvizClient`](client.md#finvizclient)

Authenticated FinvizClient instance

##### options?

[`PerformanceOptions`](types/performance.md#performanceoptions) = `{}`

Sort options

#### Returns

`Promise`\<[`PerformanceItem`](types/performance.md#performanceitem)[]\>
