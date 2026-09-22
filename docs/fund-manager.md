[**finvizts**](README.md)

***

[finvizts](README.md) / fund-manager

# fund-manager

## Functions

### getFundManagerItems()

> **getFundManagerItems**(`client`, `path`, `nameColumn`, `options`): `Promise`\<[`ManagerFundItem`](types/fund-manager.md#managerfunditem)[]\>

Defined in: [fund-manager.ts:28](https://github.com/7elephants/finvizTS/blob/32fcd93ddd781eae14ef7eb4cd2365c4fc65b963/src/fund-manager.ts#L28)

Fetch fund or fund-manager portfolios, optionally filtered by a search term and sorted by
order/direction. The API returns a multi-row CSV; each row is mapped to a ManagerFundItem.

#### Parameters

##### client

[`FinvizClient`](client.md#finvizclient)

Authenticated FinvizClient instance

##### path

`string`

`/export/funds` or `/export/managers`

##### nameColumn

`"Fund"` \| `"Manager"`

CSV column holding the fund/manager name

##### options

[`ManagerFundOptions`](types/fund-manager.md#managerfundoptions)

Search term and sort options

#### Returns

`Promise`\<[`ManagerFundItem`](types/fund-manager.md#managerfunditem)[]\>
