[**finvizts**](../README.md)

***

[finvizts](../README.md) / types/insider

# types/insider

## Interfaces

### InsiderItem

Defined in: [types/insider.ts:57](https://github.com/7elephants/finvizTS/blob/32fcd93ddd781eae14ef7eb4cd2365c4fc65b963/src/types/insider.ts#L57)

A single insider trading transaction returned by the insider endpoint.

#### Properties

##### cost

> **cost**: `number`

Defined in: [types/insider.ts:64](https://github.com/7elephants/finvizTS/blob/32fcd93ddd781eae14ef7eb4cd2365c4fc65b963/src/types/insider.ts#L64)

##### date

> **date**: `Date`

Defined in: [types/insider.ts:62](https://github.com/7elephants/finvizTS/blob/32fcd93ddd781eae14ef7eb4cd2365c4fc65b963/src/types/insider.ts#L62)

##### owner

> **owner**: `string`

Defined in: [types/insider.ts:59](https://github.com/7elephants/finvizTS/blob/32fcd93ddd781eae14ef7eb4cd2365c4fc65b963/src/types/insider.ts#L59)

##### ownerCIK

> **ownerCIK**: `number`

Defined in: [types/insider.ts:60](https://github.com/7elephants/finvizTS/blob/32fcd93ddd781eae14ef7eb4cd2365c4fc65b963/src/types/insider.ts#L60)

##### relationship

> **relationship**: `string`

Defined in: [types/insider.ts:61](https://github.com/7elephants/finvizTS/blob/32fcd93ddd781eae14ef7eb4cd2365c4fc65b963/src/types/insider.ts#L61)

##### SECForm

> **SECForm**: `Date`

Defined in: [types/insider.ts:68](https://github.com/7elephants/finvizTS/blob/32fcd93ddd781eae14ef7eb4cd2365c4fc65b963/src/types/insider.ts#L68)

##### SECFormUrl

> **SECFormUrl**: `string`

Defined in: [types/insider.ts:69](https://github.com/7elephants/finvizTS/blob/32fcd93ddd781eae14ef7eb4cd2365c4fc65b963/src/types/insider.ts#L69)

##### shares

> **shares**: `number`

Defined in: [types/insider.ts:65](https://github.com/7elephants/finvizTS/blob/32fcd93ddd781eae14ef7eb4cd2365c4fc65b963/src/types/insider.ts#L65)

##### ticker

> **ticker**: `string`

Defined in: [types/insider.ts:58](https://github.com/7elephants/finvizTS/blob/32fcd93ddd781eae14ef7eb4cd2365c4fc65b963/src/types/insider.ts#L58)

##### totalShares

> **totalShares**: `number`

Defined in: [types/insider.ts:67](https://github.com/7elephants/finvizTS/blob/32fcd93ddd781eae14ef7eb4cd2365c4fc65b963/src/types/insider.ts#L67)

##### transactionType

> **transactionType**: `string`

Defined in: [types/insider.ts:63](https://github.com/7elephants/finvizTS/blob/32fcd93ddd781eae14ef7eb4cd2365c4fc65b963/src/types/insider.ts#L63)

##### value

> **value**: `number`

Defined in: [types/insider.ts:66](https://github.com/7elephants/finvizTS/blob/32fcd93ddd781eae14ef7eb4cd2365c4fc65b963/src/types/insider.ts#L66)

***

### InsiderOptions

Defined in: [types/insider.ts:46](https://github.com/7elephants/finvizTS/blob/32fcd93ddd781eae14ef7eb4cd2365c4fc65b963/src/types/insider.ts#L46)

Options for an insider trading request.

#### Properties

##### minimumTransactionValue?

> `optional` **minimumTransactionValue?**: `number`

Defined in: [types/insider.ts:49](https://github.com/7elephants/finvizTS/blob/32fcd93ddd781eae14ef7eb4cd2365c4fc65b963/src/types/insider.ts#L49)

##### order?

> `optional` **order?**: [`InsiderOrderType`](#insiderordertype)

Defined in: [types/insider.ts:52](https://github.com/7elephants/finvizTS/blob/32fcd93ddd781eae14ef7eb4cd2365c4fc65b963/src/types/insider.ts#L52)

##### orderDirection?

> `optional` **orderDirection?**: [`SortDirection`](../types.md#sortdirection)

Defined in: [types/insider.ts:53](https://github.com/7elephants/finvizTS/blob/32fcd93ddd781eae14ef7eb4cd2365c4fc65b963/src/types/insider.ts#L53)

##### ownerCIK?

> `optional` **ownerCIK?**: `number`

Defined in: [types/insider.ts:50](https://github.com/7elephants/finvizTS/blob/32fcd93ddd781eae14ef7eb4cd2365c4fc65b963/src/types/insider.ts#L50)

##### ownerRel?

> `optional` **ownerRel?**: [`InsiderOwnerRelationshipType`](#insiderownerrelationshiptype)

Defined in: [types/insider.ts:48](https://github.com/7elephants/finvizTS/blob/32fcd93ddd781eae14ef7eb4cd2365c4fc65b963/src/types/insider.ts#L48)

##### ticker?

> `optional` **ticker?**: `string`

Defined in: [types/insider.ts:51](https://github.com/7elephants/finvizTS/blob/32fcd93ddd781eae14ef7eb4cd2365c4fc65b963/src/types/insider.ts#L51)

##### type?

> `optional` **type?**: [`InsiderTransactionType`](#insidertransactiontype)

Defined in: [types/insider.ts:47](https://github.com/7elephants/finvizTS/blob/32fcd93ddd781eae14ef7eb4cd2365c4fc65b963/src/types/insider.ts#L47)

## Type Aliases

### InsiderOrderType

> **InsiderOrderType** = *typeof* [`InsiderOrderType`](#insiderordertype-1)\[keyof *typeof* [`InsiderOrderType`](#insiderordertype-1)\]

Defined in: [types/insider.ts:33](https://github.com/7elephants/finvizTS/blob/32fcd93ddd781eae14ef7eb4cd2365c4fc65b963/src/types/insider.ts#L33)

***

### InsiderOwnerRelationshipType

> **InsiderOwnerRelationshipType** = *typeof* [`InsiderOwnerRelationshipType`](#insiderownerrelationshiptype-1)\[keyof *typeof* [`InsiderOwnerRelationshipType`](#insiderownerrelationshiptype-1)\]

Defined in: [types/insider.ts:27](https://github.com/7elephants/finvizTS/blob/32fcd93ddd781eae14ef7eb4cd2365c4fc65b963/src/types/insider.ts#L27)

***

### InsiderTransactionType

> **InsiderTransactionType** = *typeof* [`InsiderTransactionType`](#insidertransactiontype-1)\[keyof *typeof* [`InsiderTransactionType`](#insidertransactiontype-1)\]

Defined in: [types/insider.ts:19](https://github.com/7elephants/finvizTS/blob/32fcd93ddd781eae14ef7eb4cd2365c4fc65b963/src/types/insider.ts#L19)

Valid transaction type values for the insider endpoint.

## Variables

### InsiderOrderType

> `const` **InsiderOrderType**: `object`

Defined in: [types/insider.ts:33](https://github.com/7elephants/finvizTS/blob/32fcd93ddd781eae14ef7eb4cd2365c4fc65b963/src/types/insider.ts#L33)

#### Type Declaration

##### ACCEPTED

> `readonly` **ACCEPTED**: `"accepted"` = `'accepted'`

##### TICKER

> `readonly` **TICKER**: `"ticker"` = `'ticker'`

##### TOTAL\_SHARES

> `readonly` **TOTAL\_SHARES**: `"sharesOwnedFollowingTransaction"` = `'sharesOwnedFollowingTransaction'`

##### TRANSACTION\_DATE

> `readonly` **TRANSACTION\_DATE**: `"transactionDate"` = `'transactionDate'`

##### TRANSACTION\_PRICE\_PER\_SHARE

> `readonly` **TRANSACTION\_PRICE\_PER\_SHARE**: `"transactionPricePerShare"` = `'transactionPricePerShare'`

##### TRANSACTION\_SHARES

> `readonly` **TRANSACTION\_SHARES**: `"transactionShares"` = `'transactionShares'`

##### TRANSACTION\_VALUE

> `readonly` **TRANSACTION\_VALUE**: `"transactionValue"` = `'transactionValue'`

***

### InsiderOwnerRelationshipType

> `const` **InsiderOwnerRelationshipType**: `object`

Defined in: [types/insider.ts:27](https://github.com/7elephants/finvizTS/blob/32fcd93ddd781eae14ef7eb4cd2365c4fc65b963/src/types/insider.ts#L27)

#### Type Declaration

##### EXCLUDE\_TEN\_PERCENT

> `readonly` **EXCLUDE\_TEN\_PERCENT**: `-10` = `-10`

##### INCLUDE\_TEN\_PERCENT

> `readonly` **INCLUDE\_TEN\_PERCENT**: `10` = `10`

***

### InsiderTransactionType

> `const` **InsiderTransactionType**: `object`

Defined in: [types/insider.ts:19](https://github.com/7elephants/finvizTS/blob/32fcd93ddd781eae14ef7eb4cd2365c4fc65b963/src/types/insider.ts#L19)

Valid transaction type values for the insider endpoint.

#### Type Declaration

##### ALL

> `readonly` **ALL**: `7` = `7`

##### BUY

> `readonly` **BUY**: `1` = `1`

##### OPTION\_EXERCISE

> `readonly` **OPTION\_EXERCISE**: `4` = `4`

##### SALE

> `readonly` **SALE**: `2` = `2`
