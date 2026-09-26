[**finvizts**](README.md)

***

[finvizts](README.md) / options

# options

## Functions

### getOptionsChain()

> **getOptionsChain**(`client`, `ticker`, `options`): `Promise`\<[`FinvizResponse`](types/response.md#finvizresponse)\<[`Option`](types/options.md#option)\>\>

Defined in: [options.ts:26](https://github.com/7elephants/finvizTS/blob/35b052f8358756be41e8745d2c1b57d3010c1398/src/options.ts#L26)

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
