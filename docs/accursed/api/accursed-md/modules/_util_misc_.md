[accursed](../README.md) › [Globals](../globals.md) › ["util/misc"](_util_misc_.md)

# External module: "util/misc"

## Index

### Type aliases

* [Falsy](_util_misc_.md#falsy)
* [NotFalsy](_util_misc_.md#notfalsy)
* [RemoveProperties](_util_misc_.md#removeproperties)
* [falsy](_util_misc_.md#falsy)

### Functions

* [enumValueFromString](_util_misc_.md#enumvaluefromstring)
* [rgb2Hex](_util_misc_.md#rgb2hex)
* [strip](_util_misc_.md#strip)

## Type aliases

###  Falsy

Ƭ **Falsy**: *Falsy<T>*

*Defined in [util/misc.ts:24](https://github.com/cancerberoSgx/accursed/blob/5b2518e/src/util/misc.ts#L24)*

Without arguments it returns the union of all falsy values. With arguments it returns given type excluding falsy arguments.  Example `Falsy<number|boolean|null> ` will be `false|null`

___

###  NotFalsy

Ƭ **NotFalsy**: *Exclude‹T, [falsy](_util_misc_.md#falsy)›*

*Defined in [util/misc.ts:27](https://github.com/cancerberoSgx/accursed/blob/5b2518e/src/util/misc.ts#L27)*

Removes undefined from type.  Example `Falsy<number|boolean>` will be `number|true`

___

###  RemoveProperties

Ƭ **RemoveProperties**: *Pick‹O, Exclude‹keyof O, K››*

*Defined in [util/misc.ts:17](https://github.com/cancerberoSgx/accursed/blob/5b2518e/src/util/misc.ts#L17)*

___

###  falsy

Ƭ **falsy**: *undefined | null | false | "" | 0*

*Defined in [util/misc.ts:19](https://github.com/cancerberoSgx/accursed/blob/5b2518e/src/util/misc.ts#L19)*

## Functions

###  enumValueFromString

▸ **enumValueFromString**<**T**>(`key`: string, `anEnum`: any): *T | undefined*

*Defined in [util/misc.ts:13](https://github.com/cancerberoSgx/accursed/blob/5b2518e/src/util/misc.ts#L13)*

return the Enum type from given string enum key obtained with key [[enumNoValueKeys]]

**Type parameters:**

▪ **T**

**Parameters:**

Name | Type |
------ | ------ |
`key` | string |
`anEnum` | any |

**Returns:** *T | undefined*

___

###  rgb2Hex

▸ **rgb2Hex**(`s`: string): *string*

*Defined in [util/misc.ts:29](https://github.com/cancerberoSgx/accursed/blob/5b2518e/src/util/misc.ts#L29)*

**Parameters:**

Name | Type |
------ | ------ |
`s` | string |

**Returns:** *string*

___

###  strip

▸ **strip**(`s`: string): *string*

*Defined in [util/misc.ts:6](https://github.com/cancerberoSgx/accursed/blob/5b2518e/src/util/misc.ts#L6)*

strips ANSI codes from a string. From https://github.com/xpl/ansicolor/blob/master/ansicolor.js

**Parameters:**

Name | Type | Description |
------ | ------ | ------ |
`s` | string | a string containing ANSI escape codes. |

**Returns:** *string*

clean string.
