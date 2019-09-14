[mirada](../README.md) › ["util/misc"](_util_misc_.md)

# External module: "util/misc"


## Index

### Variables

* [isBrowser](_util_misc_.md#const-isbrowser)

### Functions

* [buildError](_util_misc_.md#builderror)
* [msFrom](_util_misc_.md#msfrom)
* [now](_util_misc_.md#now)
* [resolveNodeModule](_util_misc_.md#resolvenodemodule)
* [timeFrom](_util_misc_.md#timefrom)

## Variables

### `Const` isBrowser

• **isBrowser**: *boolean* =  typeof performance !== 'undefined' && typeof performance.now === 'function'

*Defined in [util/misc.ts:31](https://github.com/cancerberoSgx/mirada/blob/e7b5ae6/mirada/src/util/misc.ts#L31)*

## Functions

###  buildError

▸ **buildError**(`e`: any): *Error*

*Defined in [util/misc.ts:4](https://github.com/cancerberoSgx/mirada/blob/e7b5ae6/mirada/src/util/misc.ts#L4)*

**Parameters:**

Name | Type |
------ | ------ |
`e` | any |

**Returns:** *Error*

___

###  msFrom

▸ **msFrom**(`t0`: number): *number*

*Defined in [util/misc.ts:23](https://github.com/cancerberoSgx/mirada/blob/e7b5ae6/mirada/src/util/misc.ts#L23)*

**Parameters:**

Name | Type |
------ | ------ |
`t0` | number |

**Returns:** *number*

___

###  now

▸ **now**(): *number*

*Defined in [util/misc.ts:32](https://github.com/cancerberoSgx/mirada/blob/e7b5ae6/mirada/src/util/misc.ts#L32)*

**Returns:** *number*

___

###  resolveNodeModule

▸ **resolveNodeModule**(`p`: string): *string*

*Defined in [util/misc.ts:12](https://github.com/cancerberoSgx/mirada/blob/e7b5ae6/mirada/src/util/misc.ts#L12)*

**Parameters:**

Name | Type |
------ | ------ |
`p` | string |

**Returns:** *string*

___

###  timeFrom

▸ **timeFrom**(`t0`: number): *string*

*Defined in [util/misc.ts:27](https://github.com/cancerberoSgx/mirada/blob/e7b5ae6/mirada/src/util/misc.ts#L27)*

**Parameters:**

Name | Type |
------ | ------ |
`t0` | number |

**Returns:** *string*