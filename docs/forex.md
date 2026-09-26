[**finvizts**](README.md)

***

[finvizts](README.md) / forex

# forex

## Functions

### getForex()

> **getForex**(`client`, `options?`): `Promise`\<[`PerformanceItem`](types/performance.md#performanceitem)[]\>

Defined in: [forex.ts:27](https://github.com/7elephants/finvizTS/blob/d23addfae925d6c740f235b944360447f6cbc93c/src/forex.ts#L27)

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
