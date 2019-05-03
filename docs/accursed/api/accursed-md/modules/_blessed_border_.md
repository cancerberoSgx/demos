[accursed](../README.md) > ["blessed/border"](../modules/_blessed_border_.md)

# External module: "blessed/border"

## Index

### Enumerations

* [BorderSide](../enums/_blessed_border_.borderside.md)
* [BorderStyle](../enums/_blessed_border_.borderstyle.md)

### Type aliases

* [BoxStyles](_blessed_border_.md#boxstyles)

### Variables

* [borderStyles](_blessed_border_.md#borderstyles)
* [boxStyles](_blessed_border_.md#boxstyles-1)

### Functions

* [getBoxStyle](_blessed_border_.md#getboxstyle)
* [getBoxStyleChar](_blessed_border_.md#getboxstylechar)
* [getBoxStyles](_blessed_border_.md#getboxstyles)

---

## Type aliases

<a id="boxstyles"></a>

###  BoxStyles

**Ƭ BoxStyles**: *`object`*

*Defined in [blessed/border.ts:48](https://github.com/cancerberoSgx/accursed/blob/978b980/src/blessed/border.ts#L48)*

#### Type declaration

___

## Variables

<a id="borderstyles"></a>

### `<Const>` borderStyles

**● borderStyles**: *`string`[]* =  enumKeys(BorderStyle)

*Defined in [blessed/border.ts:28](https://github.com/cancerberoSgx/accursed/blob/978b980/src/blessed/border.ts#L28)*

___
<a id="boxstyles-1"></a>

### `<Let>` boxStyles

**● boxStyles**: *[BoxStyles](_blessed_border_.md#boxstyles) \| `undefined`*

*Defined in [blessed/border.ts:49](https://github.com/cancerberoSgx/accursed/blob/978b980/src/blessed/border.ts#L49)*

___

## Functions

<a id="getboxstyle"></a>

###  getBoxStyle

▸ **getBoxStyle**(s: *[BorderStyle](../enums/_blessed_border_.borderstyle.md)*): `object`

*Defined in [blessed/border.ts:41](https://github.com/cancerberoSgx/accursed/blob/978b980/src/blessed/border.ts#L41)*

**Parameters:**

| Name | Type |
| ------ | ------ |
| s | [BorderStyle](../enums/_blessed_border_.borderstyle.md) |

**Returns:** `object`

___
<a id="getboxstylechar"></a>

###  getBoxStyleChar

▸ **getBoxStyleChar**(s: *[BorderStyle](../enums/_blessed_border_.borderstyle.md)*, si: *[BorderSide](../enums/_blessed_border_.borderside.md)*): `string`

*Defined in [blessed/border.ts:45](https://github.com/cancerberoSgx/accursed/blob/978b980/src/blessed/border.ts#L45)*

**Parameters:**

| Name | Type |
| ------ | ------ |
| s | [BorderStyle](../enums/_blessed_border_.borderstyle.md) |
| si | [BorderSide](../enums/_blessed_border_.borderside.md) |

**Returns:** `string`

___
<a id="getboxstyles"></a>

### `<Const>` getBoxStyles

▸ **getBoxStyles**(): `object`

*Defined in [blessed/border.ts:50](https://github.com/cancerberoSgx/accursed/blob/978b980/src/blessed/border.ts#L50)*

**Returns:** `object`

___

