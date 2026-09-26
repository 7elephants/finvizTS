[**finvizts**](README.md)

***

[finvizts](README.md) / performance

# performance

## Functions

### getPerformanceItems()

> **getPerformanceItems**(`client`, `path`, `options`, `extraParams?`): `Promise`\<[`PerformanceItem`](types/performance.md#performanceitem)[]\>

Defined in: [performance.ts:29](https://github.com/7elephants/finvizTS/blob/cf3affc8092870b336ac093aca4485addf4f6c2a/src/performance.ts#L29)

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

Sort options

###### order?

`string`

###### orderDirection?

[`SortDirection`](types.md#sortdirection)

##### extraParams?

`Record`\<`string`, `string` \| `undefined`\> = `{}`

Endpoint-specific query params (e.g. forex `unit`, crypto `c`)

#### Returns

`Promise`\<[`PerformanceItem`](types/performance.md#performanceitem)[]\>
