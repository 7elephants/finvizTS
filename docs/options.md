[**finvizts**](README.md)

***

[finvizts](README.md) / options

# options

## Functions

### getOptionsChain()

> **getOptionsChain**(`client`, `ticker`, `options`): `Promise`\<[`FinvizResponse`](types/response.md#finvizresponse)\<[`Option`](types/options.md#option)\>\>

Defined in: [options.ts:26](https://github.com/7elephants/finvizTS/blob/f744eabcb42982a597319cae2efa34ee2e597d43/src/options.ts#L26)

Fetch the options chain for a single ticker symbol at a given expiration date.
The API returns a multi-row CSV; each row represents one option contract.

#### Parameters

##### client

[`FinvizClient`](client.md#finvizclient)

Authenticated FinvizClient instance

##### ticker

`string`

Stock ticker symbol (e.g. "MSFT")

##### options

[`OptionsChainOptions`](types/options.md#optionschainoptions)

Expiration date (required) and optional view type

#### Returns

`Promise`\<[`FinvizResponse`](types/response.md#finvizresponse)\<[`Option`](types/options.md#option)\>\>
