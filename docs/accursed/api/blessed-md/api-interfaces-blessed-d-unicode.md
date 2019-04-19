---
id: api-interfaces-blessed-d-unicode
title: Unicode
sidebar_label: Unicode
---

[blessed](api-readme.md) > [[blessed.d Module]](api-modules-blessed-d-module.md) > [Unicode](api-interfaces-blessed-d-unicode.md)

## Interface

Unicode utilities, see \[\[Screen#fullUnicode\]\]. Wide, Surrogates, and Combining.

## Hierarchy

**Unicode**

### Properties

* [chars](api-interfaces-blessed-d-unicode.md#chars)
* [combiningTable](api-interfaces-blessed-d-unicode.md#combiningtable)

### Methods

* [charWidth](api-interfaces-blessed-d-unicode.md#charwidth)
* [fromCodePoint](api-interfaces-blessed-d-unicode.md#fromcodepoint)
* [isSurrogate](api-interfaces-blessed-d-unicode.md#issurrogate)
* [strWidth](api-interfaces-blessed-d-unicode.md#strwidth)

---

## Properties

<a id="chars"></a>

###  chars

**● chars**: *`object`*

*Defined in [blessed.d.ts:4670](https://github.com/cancerberoSgx/accursed/blob/7a42e78/src/declarations/blessed.d.ts#L4670)*

Regexps

#### Type declaration

 all: `RegExp`

All wide chars including surrogate pairs.

 combining: `RegExp`

Regex to find combining characters.

 surrogate: `RegExp`

Regex to detect a surrogate pair.

 wide: `RegExp`

All surrogate pair wide chars.

___
<a id="combiningtable"></a>

###  combiningTable

**● combiningTable**: *`number`[][]*

*Defined in [blessed.d.ts:4665](https://github.com/cancerberoSgx/accursed/blob/7a42e78/src/declarations/blessed.d.ts#L4665)*

___

## Methods

<a id="charwidth"></a>

###  charWidth

▸ **charWidth**(str: *`string`*, i?: *`undefined` \| `number`*): `string`

*Defined in [blessed.d.ts:4659](https://github.com/cancerberoSgx/accursed/blob/7a42e78/src/declarations/blessed.d.ts#L4659)*

**Parameters:**

| Name | Type |
| ------ | ------ |
| str | `string` |
| `Optional` i | `undefined` \| `number` |

**Returns:** `string`

___
<a id="fromcodepoint"></a>

###  fromCodePoint

▸ **fromCodePoint**(unicode: *`number`*): `string`

*Defined in [blessed.d.ts:4657](https://github.com/cancerberoSgx/accursed/blob/7a42e78/src/declarations/blessed.d.ts#L4657)*

**Parameters:**

| Name | Type |
| ------ | ------ |
| unicode | `number` |

**Returns:** `string`

___
<a id="issurrogate"></a>

###  isSurrogate

▸ **isSurrogate**(str: *`string`*, i?: *`undefined` \| `number`*): `boolean`

*Defined in [blessed.d.ts:4663](https://github.com/cancerberoSgx/accursed/blob/7a42e78/src/declarations/blessed.d.ts#L4663)*

**Parameters:**

| Name | Type |
| ------ | ------ |
| str | `string` |
| `Optional` i | `undefined` \| `number` |

**Returns:** `boolean`

___
<a id="strwidth"></a>

###  strWidth

▸ **strWidth**(str: *`string`*): `number`

*Defined in [blessed.d.ts:4661](https://github.com/cancerberoSgx/accursed/blob/7a42e78/src/declarations/blessed.d.ts#L4661)*

**Parameters:**

| Name | Type |
| ------ | ------ |
| str | `string` |

**Returns:** `number`

___

