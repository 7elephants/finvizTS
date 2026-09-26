[**finvizts**](README.md)

***

[finvizts](README.md) / forex

# forex

## Functions

### getForex()

> **getForex**(`client`, `options?`): `Promise`\<[`PerformanceItem`](types/performance.md#performanceitem)[]\>

Defined in: [forex.ts:25](https://github.com/7elephants/finvizTS/blob/cf3affc8092870b336ac093aca4485addf4f6c2a/src/forex.ts#L25)

Fetch forex performance, optionally sorted by order/direction.
The API returns a multi-row CSV; each row is mapped to a ForexItem.

#### Parameters

##### client

[`FinvizClient`](client.md#finvizclient)

Authenticated FinvizClient instance

##### options?

[`ForexOptions`](types/forex.md#forexoptions) = `{}`

Unit and sort options

#### Returns

`Promise`\<[`PerformanceItem`](types/performance.md#performanceitem)[]\>
