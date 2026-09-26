[**finvizts**](README.md)

***

[finvizts](README.md) / crypto

# crypto

## Functions

### getCrypto()

> **getCrypto**(`client`, `options?`): `Promise`\<[`FinvizResponse`](types/response.md#finvizresponse)\<[`PerformanceItem`](types/performance.md#performanceitem)\>\>

Defined in: [crypto.ts:25](https://github.com/7elephants/finvizTS/blob/35b052f8358756be41e8745d2c1b57d3010c1398/src/crypto.ts#L25)

Fetch crypto performance, optionally sorted by order/direction.
The API returns a multi-row CSV; each row is mapped to a CryptoItem.

#### Parameters

##### client

[`FinvizClient`](client.md#finvizclient)

Authenticated FinvizClient instance

##### options?

[`CryptoOptions`](types/crypto.md#cryptooptions) = `{}`

Quote currency and sort options

#### Returns

`Promise`\<[`FinvizResponse`](types/response.md#finvizresponse)\<[`PerformanceItem`](types/performance.md#performanceitem)\>\>
