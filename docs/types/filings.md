[**finvizts**](../README.md)

***

[finvizts](../README.md) / types/filings

# types/filings

## Interfaces

### Filing

Defined in: [types/filings.ts:53](https://github.com/7elephants/finvizTS/blob/d00d34aa8d6b6f5017c56eafb1130a718f09ad93/src/types/filings.ts#L53)

A single row returned by the latest-filings endpoint.

#### Properties

##### description

> **description**: `string`

Defined in: [types/filings.ts:57](https://github.com/7elephants/finvizTS/blob/d00d34aa8d6b6f5017c56eafb1130a718f09ad93/src/types/filings.ts#L57)

##### document

> **document**: `string`

Defined in: [types/filings.ts:59](https://github.com/7elephants/finvizTS/blob/d00d34aa8d6b6f5017c56eafb1130a718f09ad93/src/types/filings.ts#L59)

##### filing

> **filing**: `string`

Defined in: [types/filings.ts:58](https://github.com/7elephants/finvizTS/blob/d00d34aa8d6b6f5017c56eafb1130a718f09ad93/src/types/filings.ts#L58)

##### filingDate

> **filingDate**: `string`

Defined in: [types/filings.ts:54](https://github.com/7elephants/finvizTS/blob/d00d34aa8d6b6f5017c56eafb1130a718f09ad93/src/types/filings.ts#L54)

##### form

> **form**: `string`

Defined in: [types/filings.ts:56](https://github.com/7elephants/finvizTS/blob/d00d34aa8d6b6f5017c56eafb1130a718f09ad93/src/types/filings.ts#L56)

##### reportDate

> **reportDate**: `string`

Defined in: [types/filings.ts:55](https://github.com/7elephants/finvizTS/blob/d00d34aa8d6b6f5017c56eafb1130a718f09ad93/src/types/filings.ts#L55)

***

### FilingOptions

Defined in: [types/filings.ts:43](https://github.com/7elephants/finvizTS/blob/d00d34aa8d6b6f5017c56eafb1130a718f09ad93/src/types/filings.ts#L43)

Options for a latest-filings request.

#### Properties

##### filter?

> `optional` **filter?**: [`FilingFilter`](#filingfilter)

Defined in: [types/filings.ts:49](https://github.com/7elephants/finvizTS/blob/d00d34aa8d6b6f5017c56eafb1130a718f09ad93/src/types/filings.ts#L49)

Filter by filing type.

##### order?

> `optional` **order?**: [`FilingOrder`](#filingorder)

Defined in: [types/filings.ts:45](https://github.com/7elephants/finvizTS/blob/d00d34aa8d6b6f5017c56eafb1130a718f09ad93/src/types/filings.ts#L45)

Column to sort by.

##### orderDirection?

> `optional` **orderDirection?**: [`SortDirection`](../types.md#sortdirection)

Defined in: [types/filings.ts:47](https://github.com/7elephants/finvizTS/blob/d00d34aa8d6b6f5017c56eafb1130a718f09ad93/src/types/filings.ts#L47)

Sort direction (either "" or "-").

## Type Aliases

### FilingFilter

> **FilingFilter** = *typeof* [`FilingFilter`](#filingfilter-1)\[keyof *typeof* [`FilingFilter`](#filingfilter-1)\]

Defined in: [types/filings.ts:17](https://github.com/7elephants/finvizTS/blob/d00d34aa8d6b6f5017c56eafb1130a718f09ad93/src/types/filings.ts#L17)

Union of all known filing filter values.

***

### FilingOrder

> **FilingOrder** = *typeof* [`FilingOrder`](#filingorder-1)\[keyof *typeof* [`FilingOrder`](#filingorder-1)\]

Defined in: [types/filings.ts:33](https://github.com/7elephants/finvizTS/blob/d00d34aa8d6b6f5017c56eafb1130a718f09ad93/src/types/filings.ts#L33)

Union of all known filing order values.

## Variables

### FilingFilter

> `const` **FilingFilter**: `object`

Defined in: [types/filings.ts:17](https://github.com/7elephants/finvizTS/blob/d00d34aa8d6b6f5017c56eafb1130a718f09ad93/src/types/filings.ts#L17)

Valid filing filter values for the latest-filings endpoint.

#### Type Declaration

##### ANNUAL\_QUARTERLY\_CURRENT

> `readonly` **ANNUAL\_QUARTERLY\_CURRENT**: `"annual-quarterly-current"` = `'annual-quarterly-current'`

##### BENEFICIAL\_OWNERSHIP

> `readonly` **BENEFICIAL\_OWNERSHIP**: `"beneficial-ownership"` = `'beneficial-ownership'`

##### EXEMPT\_OFFERINGS

> `readonly` **EXEMPT\_OFFERINGS**: `"exempt-offerings"` = `'exempt-offerings'`

##### FILING\_REVIEW\_CORRESPONDENCE

> `readonly` **FILING\_REVIEW\_CORRESPONDENCE**: `"filing-review-correspondence"` = `'filing-review-correspondence'`

##### INSIDER\_EQUITY

> `readonly` **INSIDER\_EQUITY**: `"insider-equity"` = `'insider-equity'`

##### PROXY\_MATERIALS

> `readonly` **PROXY\_MATERIALS**: `"proxy-materials"` = `'proxy-materials'`

##### REGISTRATION\_STATEMENTS

> `readonly` **REGISTRATION\_STATEMENTS**: `"registration-statements"` = `'registration-statements'`

##### SEC\_ORDERS\_NOTICES

> `readonly` **SEC\_ORDERS\_NOTICES**: `"sec-orders-notices"` = `'sec-orders-notices'`

##### TRUST\_INDENTURES

> `readonly` **TRUST\_INDENTURES**: `"trust-indentures"` = `'trust-indentures'`

***

### FilingOrder

> `const` **FilingOrder**: `object`

Defined in: [types/filings.ts:33](https://github.com/7elephants/finvizTS/blob/d00d34aa8d6b6f5017c56eafb1130a718f09ad93/src/types/filings.ts#L33)

Valid sort column values for the latest-filings `o` query parameter.

#### Type Declaration

##### DATE

> `readonly` **DATE**: `"filingDate"` = `'filingDate'`

##### FORM

> `readonly` **FORM**: `"form"` = `'form'`

##### REPORT\_DATE

> `readonly` **REPORT\_DATE**: `"reportDate"` = `'reportDate'`
