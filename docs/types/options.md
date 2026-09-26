[**finvizts**](../README.md)

***

[finvizts](../README.md) / types/options

# types/options

## Interfaces

### OptionsChainOptions

Defined in: [types/options.ts:24](https://github.com/7elephants/finvizTS/blob/f744eabcb42982a597319cae2efa34ee2e597d43/src/types/options.ts#L24)

Options for an options chain request.

#### Properties

##### expiration

> **expiration**: `string`

Defined in: [types/options.ts:26](https://github.com/7elephants/finvizTS/blob/f744eabcb42982a597319cae2efa34ee2e597d43/src/types/options.ts#L26)

Option expiration date in yyyy-mm-dd format.

##### viewType?

> `optional` **viewType?**: [`OptionsViewType`](#optionsviewtype)

Defined in: [types/options.ts:28](https://github.com/7elephants/finvizTS/blob/f744eabcb42982a597319cae2efa34ee2e597d43/src/types/options.ts#L28)

View type (Prices or Volatility & Greeks).

## Type Aliases

### Option

> **Option** = `Record`\<`string`, `string`\>

Defined in: [types/options.ts:32](https://github.com/7elephants/finvizTS/blob/f744eabcb42982a597319cae2efa34ee2e597d43/src/types/options.ts#L32)

A single row returned by the options endpoint.

***

### OptionsViewType

> **OptionsViewType** = *typeof* [`OptionsViewType`](#optionsviewtype-1)\[keyof *typeof* [`OptionsViewType`](#optionsviewtype-1)\]

Defined in: [types/options.ts:15](https://github.com/7elephants/finvizTS/blob/f744eabcb42982a597319cae2efa34ee2e597d43/src/types/options.ts#L15)

Union of all known options view type values.

## Variables

### OptionsViewType

> `const` **OptionsViewType**: `object`

Defined in: [types/options.ts:15](https://github.com/7elephants/finvizTS/blob/f744eabcb42982a597319cae2efa34ee2e597d43/src/types/options.ts#L15)

Valid view types for the options endpoint.

#### Type Declaration

##### PRICES

> `readonly` **PRICES**: `"oc"` = `'oc'`

##### VOLATILITY\_GREEKS

> `readonly` **VOLATILITY\_GREEKS**: `"ocv"` = `'ocv'`
