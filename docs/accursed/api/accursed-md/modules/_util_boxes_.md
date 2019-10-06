[accursed](../README.md) › [Globals](../globals.md) › ["util/boxes"](_util_boxes_.md)

# External module: "util/boxes"

## Index

### Enumerations

* [BorderSide](../enums/_util_boxes_.borderside.md)
* [BorderStyle](../enums/_util_boxes_.borderstyle.md)

### Type aliases

* [BoxStyles](_util_boxes_.md#boxstyles)

### Variables

* [borderStyles](_util_boxes_.md#const-borderstyles)
* [boxStyles](_util_boxes_.md#let-boxstyles)

### Functions

* [getBoxStyle](_util_boxes_.md#getboxstyle)
* [getBoxStyleChar](_util_boxes_.md#getboxstylechar)
* [getBoxStyles](_util_boxes_.md#const-getboxstyles)

## Type aliases

###  BoxStyles

Ƭ **BoxStyles**: *object*

*Defined in [util/boxes.ts:49](https://github.com/cancerberoSgx/accursed/blob/468bf3c/src/util/boxes.ts#L49)*

#### Type declaration:

## Variables

### `Const` borderStyles

• **borderStyles**: *string[]* =  enumKeys(BorderStyle)

*Defined in [util/boxes.ts:28](https://github.com/cancerberoSgx/accursed/blob/468bf3c/src/util/boxes.ts#L28)*

___

### `Let` boxStyles

• **boxStyles**: *[BoxStyles](_util_boxes_.md#boxstyles) | undefined*

*Defined in [util/boxes.ts:53](https://github.com/cancerberoSgx/accursed/blob/468bf3c/src/util/boxes.ts#L53)*

## Functions

###  getBoxStyle

▸ **getBoxStyle**(`s`: [BorderStyle](../enums/_util_boxes_.borderstyle.md)): *object*

*Defined in [util/boxes.ts:41](https://github.com/cancerberoSgx/accursed/blob/468bf3c/src/util/boxes.ts#L41)*

**Parameters:**

Name | Type |
------ | ------ |
`s` | [BorderStyle](../enums/_util_boxes_.borderstyle.md) |

**Returns:** *object*

___

###  getBoxStyleChar

▸ **getBoxStyleChar**(`s`: [BorderStyle](../enums/_util_boxes_.borderstyle.md), `si`: [BorderSide](../enums/_util_boxes_.borderside.md)): *string*

*Defined in [util/boxes.ts:45](https://github.com/cancerberoSgx/accursed/blob/468bf3c/src/util/boxes.ts#L45)*

**Parameters:**

Name | Type |
------ | ------ |
`s` | [BorderStyle](../enums/_util_boxes_.borderstyle.md) |
`si` | [BorderSide](../enums/_util_boxes_.borderside.md) |

**Returns:** *string*

___

### `Const` getBoxStyles

▸ **getBoxStyles**(): *object*

*Defined in [util/boxes.ts:55](https://github.com/cancerberoSgx/accursed/blob/468bf3c/src/util/boxes.ts#L55)*

**Returns:** *object*
