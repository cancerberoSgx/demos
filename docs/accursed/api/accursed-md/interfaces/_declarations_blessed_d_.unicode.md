[accursed](../README.md) › [Globals](../globals.md) › ["declarations/blessed.d"](../modules/_declarations_blessed_d_.md) › [Unicode](_declarations_blessed_d_.unicode.md)

# Interface: Unicode

Unicode utilities, see [[Screen#fullUnicode]]. Wide, Surrogates, and Combining.

## Hierarchy

* **Unicode**

## Index

### Properties

* [chars](_declarations_blessed_d_.unicode.md#chars)
* [combiningTable](_declarations_blessed_d_.unicode.md#combiningtable)

### Methods

* [charWidth](_declarations_blessed_d_.unicode.md#charwidth)
* [fromCodePoint](_declarations_blessed_d_.unicode.md#fromcodepoint)
* [isSurrogate](_declarations_blessed_d_.unicode.md#issurrogate)
* [strWidth](_declarations_blessed_d_.unicode.md#strwidth)

## Properties

###  chars

• **chars**: *object*

*Defined in [declarations/blessed.d.ts:3695](https://github.com/cancerberoSgx/accursed/blob/468bf3c/src/declarations/blessed.d.ts#L3695)*

Regexps

#### Type declaration:

* **all**: *RegExp*

* **combining**: *RegExp*

* **surrogate**: *RegExp*

* **wide**: *RegExp*

___

###  combiningTable

• **combiningTable**: *number[][]*

*Defined in [declarations/blessed.d.ts:3690](https://github.com/cancerberoSgx/accursed/blob/468bf3c/src/declarations/blessed.d.ts#L3690)*

## Methods

###  charWidth

▸ **charWidth**(`str`: string, `i?`: number): *string*

*Defined in [declarations/blessed.d.ts:3681](https://github.com/cancerberoSgx/accursed/blob/468bf3c/src/declarations/blessed.d.ts#L3681)*

**Parameters:**

Name | Type |
------ | ------ |
`str` | string |
`i?` | number |

**Returns:** *string*

___

###  fromCodePoint

▸ **fromCodePoint**(`unicode`: number): *string*

*Defined in [declarations/blessed.d.ts:3679](https://github.com/cancerberoSgx/accursed/blob/468bf3c/src/declarations/blessed.d.ts#L3679)*

**Parameters:**

Name | Type |
------ | ------ |
`unicode` | number |

**Returns:** *string*

___

###  isSurrogate

▸ **isSurrogate**(`str`: string, `i?`: number): *boolean*

*Defined in [declarations/blessed.d.ts:3688](https://github.com/cancerberoSgx/accursed/blob/468bf3c/src/declarations/blessed.d.ts#L3688)*

**Parameters:**

Name | Type |
------ | ------ |
`str` | string |
`i?` | number |

**Returns:** *boolean*

___

###  strWidth

▸ **strWidth**(`str`: string): *number*

*Defined in [declarations/blessed.d.ts:3686](https://github.com/cancerberoSgx/accursed/blob/468bf3c/src/declarations/blessed.d.ts#L3686)*

Gets given string width.

**Parameters:**

Name | Type |
------ | ------ |
`str` | string |

**Returns:** *number*
