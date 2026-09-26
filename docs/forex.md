[**finvizts**](README.md)

***

[finvizts](README.md) / forex

# forex

## Functions

### getForex()

> **getForex**(`client`, `options?`): `Promise`\<[`PerformanceItem`](types/performance.md#performanceitem)[]\>

Defined in: [forex.ts:27](https://github.com/7elephants/finvizTS/blob/5e4c7e375813a9349118ed5f6293931806e2095b/src/forex.ts#L27)

Fetch forex performance, in percent or pips, optionally sorted by order/direction. With
`unit: 'pips'` the CSV performance headers read `Performance in Pips (…)`.
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
