[**finvizts**](README.md)

***

[finvizts](README.md) / options

# options

## Functions

### getOptionsChain()

> **getOptionsChain**(`client`, `ticker`, `options`): `Promise`\<[`FinvizResponse`](types/response.md#finvizresponse)\<[`Option`](types/options.md#option)\>\>

Defined in: [options.ts:26](https://github.com/7elephants/finvizTS/blob/4598e28fe579e13cc299b61a0dd62e18c7c17595/src/options.ts#L26)

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
