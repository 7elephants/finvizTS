[**finvizts**](README.md)

***

[finvizts](README.md) / options

# options

## Functions

### getOptionsChain()

> **getOptionsChain**(`client`, `ticker`, `options`): `Promise`\<[`Option`](types/options.md#option)[]\>

Defined in: [options.ts:25](https://github.com/7elephants/finvizTS/blob/32fcd93ddd781eae14ef7eb4cd2365c4fc65b963/src/options.ts#L25)

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

`Promise`\<[`Option`](types/options.md#option)[]\>
