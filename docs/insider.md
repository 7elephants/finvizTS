[**finvizts**](README.md)

***

[finvizts](README.md) / insider

# insider

## Functions

### getInsiders()

> **getInsiders**(`client`, `options?`): `Promise`\<[`InsiderItem`](types/insider.md#insideritem)[]\>

Defined in: [insider.ts:27](https://github.com/7elephants/finvizTS/blob/d23addfae925d6c740f235b944360447f6cbc93c/src/insider.ts#L27)

Fetch insider trading transactions, optionally filtered by ticker, transaction type,
owner relationship, minimum transaction value, or owner CIK.
The API returns a multi-row CSV; each row is mapped to an InsiderItem.

#### Parameters

##### client

[`FinvizClient`](client.md#finvizclient)

Authenticated FinvizClient instance

##### options?

[`InsiderOptions`](types/insider.md#insideroptions) = `{}`

Ticker, transaction type, owner relationship, and sort options

#### Returns

`Promise`\<[`InsiderItem`](types/insider.md#insideritem)[]\>
