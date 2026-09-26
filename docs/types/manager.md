[**finvizts**](../README.md)

***

[finvizts](../README.md) / types/manager

# types/manager

## Type Aliases

### ManagerItem

> **ManagerItem** = [`ManagerFundItem`](fund-manager.md#managerfunditem)

Defined in: [types/manager.ts:20](https://github.com/7elephants/finvizTS/blob/706aab1e24071062daf1484d72ac61b15cccad77/src/types/manager.ts#L20)

A single fund manager portfolio returned by the managers endpoint. Identical in shape to `FundItem`.

***

### ManagerOptions

> **ManagerOptions** = [`ManagerFundOptions`](fund-manager.md#managerfundoptions)

Defined in: [types/manager.ts:17](https://github.com/7elephants/finvizTS/blob/706aab1e24071062daf1484d72ac61b15cccad77/src/types/manager.ts#L17)

Options for a fund managers request. Identical in shape to `FundOptions` — fund managers
and funds are the same underlying Finviz resource, queried by manager name vs. fund name.
