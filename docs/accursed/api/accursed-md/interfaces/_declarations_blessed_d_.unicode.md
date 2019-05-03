[accursed](../README.md) > ["declarations/blessed.d"](../modules/_declarations_blessed_d_.md) > [Unicode](../interfaces/_declarations_blessed_d_.unicode.md)

# Interface: Unicode

Unicode utilities, see \[\[Screen#fullUnicode\]\]. Wide, Surrogates, and Combining.

## Hierarchy

**Unicode**

## Index

### Properties

* [chars](_declarations_blessed_d_.unicode.md#chars)
* [combiningTable](_declarations_blessed_d_.unicode.md#combiningtable)

### Methods

* [charWidth](_declarations_blessed_d_.unicode.md#charwidth)
* [fromCodePoint](_declarations_blessed_d_.unicode.md#fromcodepoint)
* [isSurrogate](_declarations_blessed_d_.unicode.md#issurrogate)
* [strWidth](_declarations_blessed_d_.unicode.md#strwidth)

---

## Properties

<a id="chars"></a>

###  chars

**● chars**: *`object`*

*Defined in [declarations/blessed.d.ts:3737](https://github.com/cancerberoSgx/accursed/blob/978b980/src/declarations/blessed.d.ts#L3737)*

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

*Defined in [declarations/blessed.d.ts:3732](https://github.com/cancerberoSgx/accursed/blob/978b980/src/declarations/blessed.d.ts#L3732)*

___

## Methods

<a id="charwidth"></a>

###  charWidth

▸ **charWidth**(str: *`string`*, i?: *`number`*): `string`

*Defined in [declarations/blessed.d.ts:3723](https://github.com/cancerberoSgx/accursed/blob/978b980/src/declarations/blessed.d.ts#L3723)*

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

*Defined in [declarations/blessed.d.ts:3721](https://github.com/cancerberoSgx/accursed/blob/978b980/src/declarations/blessed.d.ts#L3721)*

**Parameters:**

| Name | Type |
| ------ | ------ |
| unicode | `number` |

**Returns:** `string`

___
<a id="issurrogate"></a>

###  isSurrogate

▸ **isSurrogate**(str: *`string`*, i?: *`number`*): `boolean`

*Defined in [declarations/blessed.d.ts:3730](https://github.com/cancerberoSgx/accursed/blob/978b980/src/declarations/blessed.d.ts#L3730)*

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

*Defined in [declarations/blessed.d.ts:3728](https://github.com/cancerberoSgx/accursed/blob/978b980/src/declarations/blessed.d.ts#L3728)*

Gets given string width.

**Parameters:**

| Name | Type |
| ------ | ------ |
| str | `string` |

**Returns:** `number`

___

