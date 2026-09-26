[**finvizts**](README.md)

***

[finvizts](README.md) / futures

# futures

## Functions

### getFutures()

> **getFutures**(`client`, `options?`): `Promise`\<[`FinvizResponse`](types/response.md#finvizresponse)\<[`PerformanceItem`](types/performance.md#performanceitem)\>\>

Defined in: [futures.ts:25](https://github.com/7elephants/finvizTS/blob/7e7978f9488c74f86a2da83536b1c7137358ef1d/src/futures.ts#L25)

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

`Promise`\<[`FinvizResponse`](types/response.md#finvizresponse)\<[`PerformanceItem`](types/performance.md#performanceitem)\>\>
