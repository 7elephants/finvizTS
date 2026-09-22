[**finvizts**](../README.md)

***

[finvizts](../README.md) / types/fund

# types/fund

## Type Aliases

### FundItem

> **FundItem** = [`ManagerFundItem`](fund-manager.md#managerfunditem)

Defined in: [types/fund.ts:20](https://github.com/7elephants/finvizTS/blob/32fcd93ddd781eae14ef7eb4cd2365c4fc65b963/src/types/fund.ts#L20)

A single fund portfolio returned by the funds endpoint. Identical in shape to `ManagerItem`.

***

### FundOptions

> **FundOptions** = [`ManagerFundOptions`](fund-manager.md#managerfundoptions)

Defined in: [types/fund.ts:17](https://github.com/7elephants/finvizTS/blob/32fcd93ddd781eae14ef7eb4cd2365c4fc65b963/src/types/fund.ts#L17)

Options for a funds request. Identical in shape to `ManagerOptions` — funds and fund
managers are the same underlying Finviz resource, queried by fund name vs. manager name.
