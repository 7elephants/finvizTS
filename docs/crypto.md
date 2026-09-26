[**finvizts**](README.md)

***

[finvizts](README.md) / crypto

# crypto

## Functions

### getCrypto()

> **getCrypto**(`client`, `options?`): `Promise`\<[`PerformanceItem`](types/performance.md#performanceitem)[]\>

Defined in: crypto.ts:25

Fetch crypto performance, optionally sorted by order/direction.
The API returns a multi-row CSV; each row is mapped to a CryptoItem.

#### Parameters

##### client

[`FinvizClient`](client.md#finvizclient)

Authenticated FinvizClient instance

##### options?

[`PerformanceOptions`](types/performance.md#performanceoptions) = `{}`

Sort options

#### Returns

`Promise`\<[`PerformanceItem`](types/performance.md#performanceitem)[]\>
