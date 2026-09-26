[**finvizts**](README.md)

***

[finvizts](README.md) / forex

# forex

## Functions

### getForex()

> **getForex**\<`C`, `F`\>(`client`, `options?`): `Promise`\<[`FinvizResponse`](types/response.md#finvizresponse)\<[`PerformanceItem`](types/performance.md#performanceitem), `F`\>\>

Defined in: [forex.ts:28](https://github.com/7elephants/finvizTS/blob/80a71835161ee929f23b53123ed4d2d457750e80/src/forex.ts#L28)

Fetch forex performance, in percent or pips, optionally sorted by order/direction. With
`unit: 'pips'` the CSV performance headers read `Performance in Pips (…)`.
The API returns a multi-row CSV; each row is mapped to a ForexItem.

#### Type Parameters

##### C

`C` *extends* [`ResponseFormat`](types/response.md#responseformat) = `"parsed"`

##### F

`F` *extends* [`ResponseFormat`](types/response.md#responseformat) = `C`

#### Parameters

##### client

[`FinvizClient`](client.md#finvizclient)\<`C`\>

Authenticated FinvizClient instance

##### options?

[`ForexOptions`](types/forex.md#forexoptions) & [`FormatOption`](types/response.md#formatoption)\<`F`\> = `{}`

Unit and sort options, plus optional `format`
                 (`parsed` | `raw` | `both`) overriding the client default

#### Returns

`Promise`\<[`FinvizResponse`](types/response.md#finvizresponse)\<[`PerformanceItem`](types/performance.md#performanceitem), `F`\>\>
