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

*Defined in [blessed.d.ts:4786](https://github.com/cancerberoSgx/accursed/blob/f66c8ce/src/declarations/blessed.d.ts#L4786)*

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

*Defined in [blessed.d.ts:4781](https://github.com/cancerberoSgx/accursed/blob/f66c8ce/src/declarations/blessed.d.ts#L4781)*

___

## Methods

<a id="charwidth"></a>

###  charWidth

▸ **charWidth**(str: *`string`*, i?: *`number`*): `string`

*Defined in [blessed.d.ts:4775](https://github.com/cancerberoSgx/accursed/blob/f66c8ce/src/declarations/blessed.d.ts#L4775)*

**Parameters:**

| Name | Type |
| ------ | ------ |
| str | `string` |
| `Optional` i | `number` |

**Returns:** `string`

___
<a id="fromcodepoint"></a>

###  fromCodePoint

▸ **fromCodePoint**(unicode: *`number`*): `string`

*Defined in [blessed.d.ts:4773](https://github.com/cancerberoSgx/accursed/blob/f66c8ce/src/declarations/blessed.d.ts#L4773)*

**Parameters:**

| Name | Type |
| ------ | ------ |
| unicode | `number` |

**Returns:** `string`

___
<a id="issurrogate"></a>

###  isSurrogate

▸ **isSurrogate**(str: *`string`*, i?: *`number`*): `boolean`

*Defined in [blessed.d.ts:4779](https://github.com/cancerberoSgx/accursed/blob/f66c8ce/src/declarations/blessed.d.ts#L4779)*

**Parameters:**

| Name | Type |
| ------ | ------ |
| str | `string` |
| `Optional` i | `number` |

**Returns:** `boolean`

___
<a id="strwidth"></a>

###  strWidth

▸ **strWidth**(str: *`string`*): `number`

*Defined in [blessed.d.ts:4777](https://github.com/cancerberoSgx/accursed/blob/f66c8ce/src/declarations/blessed.d.ts#L4777)*

**Parameters:**

| Name | Type |
| ------ | ------ |
| str | `string` |

**Returns:** `number`

___

