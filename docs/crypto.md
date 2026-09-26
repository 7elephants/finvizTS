[**finvizts**](README.md)

***

[finvizts](README.md) / crypto

# crypto

## Functions

### getCrypto()

> **getCrypto**(`client`, `options?`): `Promise`\<[`PerformanceItem`](types/performance.md#performanceitem)[]\>

Defined in: [crypto.ts:25](https://github.com/7elephants/finvizTS/blob/d23addfae925d6c740f235b944360447f6cbc93c/src/crypto.ts#L25)

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

`Promise`\<[`PerformanceItem`](types/performance.md#performanceitem)[]\>
