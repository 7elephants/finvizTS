[**finvizts**](README.md)

***

[finvizts](README.md) / futures

# futures

## Functions

### getFutures()

> **getFutures**\<`C`, `F`\>(`client`, `options?`): `Promise`\<[`FinvizResponse`](types/response.md#finvizresponse)\<[`PerformanceItem`](types/performance.md#performanceitem), `F`\>\>

Defined in: [futures.ts:26](https://github.com/7elephants/finvizTS/blob/80a71835161ee929f23b53123ed4d2d457750e80/src/futures.ts#L26)

Fetch futures performance, optionally sorted by order/direction.
The API returns a multi-row CSV; each row is mapped to a FuturesItem.

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

[`PerformanceOptions`](types/performance.md#performanceoptions) & [`FormatOption`](types/response.md#formatoption)\<`F`\> = `{}`

Sort options, plus optional `format`
                 (`parsed` | `raw` | `both`) overriding the client default

#### Returns

`Promise`\<[`FinvizResponse`](types/response.md#finvizresponse)\<[`PerformanceItem`](types/performance.md#performanceitem), `F`\>\>
