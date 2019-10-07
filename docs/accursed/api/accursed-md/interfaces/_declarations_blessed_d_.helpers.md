[accursed](../README.md) › [Globals](../globals.md) › ["declarations/blessed.d"](../modules/_declarations_blessed_d_.md) › [Helpers](_declarations_blessed_d_.helpers.md)

# Interface: Helpers

## Hierarchy

* **Helpers**

## Index

### Methods

* [attrToBinary](_declarations_blessed_d_.helpers.md#attrtobinary)
* [generateTags](_declarations_blessed_d_.helpers.md#generatetags)
* [stripTags](_declarations_blessed_d_.helpers.md#striptags)

## Methods

###  attrToBinary

▸ **attrToBinary**(`style`: [TStyle](_declarations_blessed_d_.widgets.types.tstyle.md), `element`: [BlessedElement](../classes/_declarations_blessed_d_.widgets.blessedelement.md)): *number*

*Defined in [declarations/blessed.d.ts:3733](https://github.com/cancerberoSgx/accursed/blob/5b2518e/src/declarations/blessed.d.ts#L3733)*

Convert style attributes to binary format.

**Parameters:**

Name | Type |
------ | ------ |
`style` | [TStyle](_declarations_blessed_d_.widgets.types.tstyle.md) |
`element` | [BlessedElement](../classes/_declarations_blessed_d_.widgets.blessedelement.md) |

**Returns:** *number*

___

###  generateTags

▸ **generateTags**(`style`: [TStyle](_declarations_blessed_d_.widgets.types.tstyle.md), `text`: string): *string*

*Defined in [declarations/blessed.d.ts:3731](https://github.com/cancerberoSgx/accursed/blob/5b2518e/src/declarations/blessed.d.ts#L3731)*

Generate text tags based on style object.

**Parameters:**

Name | Type |
------ | ------ |
`style` | [TStyle](_declarations_blessed_d_.widgets.types.tstyle.md) |
`text` | string |

**Returns:** *string*

___

###  stripTags

▸ **stripTags**(`text`: string): *string*

*Defined in [declarations/blessed.d.ts:3737](https://github.com/cancerberoSgx/accursed/blob/5b2518e/src/declarations/blessed.d.ts#L3737)*

Strip text of tags and SGR sequences.

**Parameters:**

Name | Type |
------ | ------ |
`text` | string |

**Returns:** *string*
