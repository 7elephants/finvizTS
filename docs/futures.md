[**finvizts**](README.md)

***

[finvizts](README.md) / futures

# futures

## Functions

### getFutures()

> **getFutures**(`client`, `options?`): `Promise`\<[`FinvizResponse`](types/response.md#finvizresponse)\<[`PerformanceItem`](types/performance.md#performanceitem)\>\>

Defined in: [futures.ts:25](https://github.com/7elephants/finvizTS/blob/f744eabcb42982a597319cae2efa34ee2e597d43/src/futures.ts#L25)

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
