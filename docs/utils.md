[**finvizts**](README.md)

***

[finvizts](README.md) / utils

# utils

## Functions

### buildSortParam()

> **buildSortParam**(`order?`, `orderDirection?`): `string`

Defined in: [utils.ts:35](https://github.com/7elephants/finvizTS/blob/80a71835161ee929f23b53123ed4d2d457750e80/src/utils.ts#L35)

Combines a sort column and direction into the single string most Finviz endpoints expect
(direction prefix, e.g. `-` for descending, followed by the column name).

#### Parameters

##### order?

`string`

Column to sort by.

##### orderDirection?

`string`

Sort direction (either `''` or `'-'`).

#### Returns

`string`

***

### formatDateToYYYYMMDD()

> **formatDateToYYYYMMDD**(`date`): `string`

Defined in: [utils.ts:20](https://github.com/7elephants/finvizTS/blob/80a71835161ee929f23b53123ed4d2d457750e80/src/utils.ts#L20)

Formats a Date object as a `YYYY-MM-DD` string.

#### Parameters

##### date

`Date`

The date to format.

#### Returns

`string`

The date formatted as `YYYY-MM-DD`.
