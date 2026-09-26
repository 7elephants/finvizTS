[**finvizts**](README.md)

***

[finvizts](README.md) / insider

# insider

## Functions

### getInsiders()

> **getInsiders**(`client`, `options?`): `Promise`\<[`FinvizResponse`](types/response.md#finvizresponse)\<[`InsiderItem`](types/insider.md#insideritem)\>\>

Defined in: [insider.ts:44](https://github.com/7elephants/finvizTS/blob/f744eabcb42982a597319cae2efa34ee2e597d43/src/insider.ts#L44)

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

`Promise`\<[`FinvizResponse`](types/response.md#finvizresponse)\<[`InsiderItem`](types/insider.md#insideritem)\>\>
