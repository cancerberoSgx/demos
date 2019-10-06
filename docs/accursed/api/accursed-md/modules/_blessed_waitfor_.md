[accursed](../README.md) › [Globals](../globals.md) › ["blessed/waitFor"](_blessed_waitfor_.md)

# External module: "blessed/waitFor"

## Index

### Interfaces

* [WaitForPredicateOptions](../interfaces/_blessed_waitfor_.waitforpredicateoptions.md)

### Functions

* [isAttached](_blessed_waitfor_.md#isattached)
* [waitForAttached](_blessed_waitfor_.md#waitforattached)
* [waitForPredicate](_blessed_waitfor_.md#waitforpredicate)
* [waitForRender](_blessed_waitfor_.md#waitforrender)

### Object literals

* [defaultOptions](_blessed_waitfor_.md#const-defaultoptions)

## Functions

###  isAttached

▸ **isAttached**(`e`: [Element](../interfaces/_jsx_types_.__global.jsx.element.md), `to?`: [Screen](../classes/_declarations_blessed_d_.widgets.screen.md)): *boolean*

*Defined in [blessed/waitFor.ts:34](https://github.com/cancerberoSgx/accursed/blob/468bf3c/src/blessed/waitFor.ts#L34)*

**Parameters:**

Name | Type |
------ | ------ |
`e` | [Element](../interfaces/_jsx_types_.__global.jsx.element.md) |
`to?` | [Screen](../classes/_declarations_blessed_d_.widgets.screen.md) |

**Returns:** *boolean*

___

###  waitForAttached

▸ **waitForAttached**(`e`: [Element](../interfaces/_jsx_types_.__global.jsx.element.md), `options`: [WaitForPredicateOptions](../interfaces/_blessed_waitfor_.waitforpredicateoptions.md)): *Promise‹boolean›*

*Defined in [blessed/waitFor.ts:41](https://github.com/cancerberoSgx/accursed/blob/468bf3c/src/blessed/waitFor.ts#L41)*

**Parameters:**

Name | Type | Default |
------ | ------ | ------ |
`e` | [Element](../interfaces/_jsx_types_.__global.jsx.element.md) | - |
`options` | [WaitForPredicateOptions](../interfaces/_blessed_waitfor_.waitforpredicateoptions.md) |  { interval: 200, timeout: 3000 } |

**Returns:** *Promise‹boolean›*

___

###  waitForPredicate

▸ **waitForPredicate**<**T**>(`p`: function, `options`: [WaitForPredicateOptions](../interfaces/_blessed_waitfor_.waitforpredicateoptions.md) | string): *Promise‹T›*

*Defined in [blessed/waitFor.ts:14](https://github.com/cancerberoSgx/accursed/blob/468bf3c/src/blessed/waitFor.ts#L14)*

**Type parameters:**

▪ **T**

**Parameters:**

▪ **p**: *function*

▸ (...`args`: any[]): *T | undefined*

**Parameters:**

Name | Type |
------ | ------ |
`...args` | any[] |

▪`Default value`  **options**: *[WaitForPredicateOptions](../interfaces/_blessed_waitfor_.waitforpredicateoptions.md) | string*=  { interval: 200, timeout: 3000 }

**Returns:** *Promise‹T›*

___

###  waitForRender

▸ **waitForRender**(`e`: [Element](../interfaces/_jsx_types_.__global.jsx.element.md), `options`: [WaitForPredicateOptions](../interfaces/_blessed_waitfor_.waitforpredicateoptions.md)): *Promise‹void›*

*Defined in [blessed/waitFor.ts:44](https://github.com/cancerberoSgx/accursed/blob/468bf3c/src/blessed/waitFor.ts#L44)*

**Parameters:**

Name | Type | Default |
------ | ------ | ------ |
`e` | [Element](../interfaces/_jsx_types_.__global.jsx.element.md) | - |
`options` | [WaitForPredicateOptions](../interfaces/_blessed_waitfor_.waitforpredicateoptions.md) |  { interval: 200, timeout: 3000 } |

**Returns:** *Promise‹void›*

## Object literals

### `Const` defaultOptions

### ▪ **defaultOptions**: *object*

*Defined in [blessed/waitFor.ts:13](https://github.com/cancerberoSgx/accursed/blob/468bf3c/src/blessed/waitFor.ts#L13)*

###  interval

• **interval**: *number* = 200

*Defined in [blessed/waitFor.ts:13](https://github.com/cancerberoSgx/accursed/blob/468bf3c/src/blessed/waitFor.ts#L13)*

###  timeout

• **timeout**: *number* = 3000

*Defined in [blessed/waitFor.ts:13](https://github.com/cancerberoSgx/accursed/blob/468bf3c/src/blessed/waitFor.ts#L13)*
