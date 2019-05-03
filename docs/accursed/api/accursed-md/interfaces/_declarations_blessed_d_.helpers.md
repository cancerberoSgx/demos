[accursed](../README.md) > ["declarations/blessed.d"](../modules/_declarations_blessed_d_.md) > [Helpers](../interfaces/_declarations_blessed_d_.helpers.md)

# Interface: Helpers

## Hierarchy

**Helpers**

## Index

### Methods

* [attrToBinary](_declarations_blessed_d_.helpers.md#attrtobinary)
* [generateTags](_declarations_blessed_d_.helpers.md#generatetags)
* [stripTags](_declarations_blessed_d_.helpers.md#striptags)

---

## Methods

<a id="attrtobinary"></a>

###  attrToBinary

▸ **attrToBinary**(style: *[TStyle](_declarations_blessed_d_.widgets.types.tstyle.md)*, element: *[BlessedElement](../classes/_declarations_blessed_d_.widgets.blessedelement.md)*): `number`

*Defined in [declarations/blessed.d.ts:3774](https://github.com/cancerberoSgx/accursed/blob/978b980/src/declarations/blessed.d.ts#L3774)*

Convert style attributes to binary format.

**Parameters:**

| Name | Type |
| ------ | ------ |
| style | [TStyle](_declarations_blessed_d_.widgets.types.tstyle.md) |
| element | [BlessedElement](../classes/_declarations_blessed_d_.widgets.blessedelement.md) |

**Returns:** `number`

___
<a id="generatetags"></a>

###  generateTags

▸ **generateTags**(style: *[TStyle](_declarations_blessed_d_.widgets.types.tstyle.md)*, text: *`string`*): `string`

*Defined in [declarations/blessed.d.ts:3772](https://github.com/cancerberoSgx/accursed/blob/978b980/src/declarations/blessed.d.ts#L3772)*

Generate text tags based on style object.

**Parameters:**

| Name | Type |
| ------ | ------ |
| style | [TStyle](_declarations_blessed_d_.widgets.types.tstyle.md) |
| text | `string` |

**Returns:** `string`

___
<a id="striptags"></a>

###  stripTags

▸ **stripTags**(text: *`string`*): `string`

*Defined in [declarations/blessed.d.ts:3778](https://github.com/cancerberoSgx/accursed/blob/978b980/src/declarations/blessed.d.ts#L3778)*

Strip text of tags and SGR sequences.

**Parameters:**

| Name | Type |
| ------ | ------ |
| text | `string` |

**Returns:** `string`

___

