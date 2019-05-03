[accursed](../README.md) > ["util/misc"](../modules/_util_misc_.md)

# External module: "util/misc"

## Index

### Type aliases

* [Falsy](_util_misc_.md#falsy)
* [NotFalsy](_util_misc_.md#notfalsy)
* [RemoveProperties](_util_misc_.md#removeproperties)
* [falsy](_util_misc_.md#falsy-1)

### Functions

* [enumValueFromString](_util_misc_.md#enumvaluefromstring)
* [rgb2Hex](_util_misc_.md#rgb2hex)
* [strip](_util_misc_.md#strip)

---

## Type aliases

<a id="falsy"></a>

###  Falsy

**Ƭ Falsy**: *`Falsy<T>`*

*Defined in [util/misc.ts:24](https://github.com/cancerberoSgx/accursed/blob/978b980/src/util/misc.ts#L24)*

Without arguments it returns the union of all falsy values. With arguments it returns given type excluding falsy arguments. Example `Falsy<number\|boolean\|null>` will be `false\|null`

___
<a id="notfalsy"></a>

###  NotFalsy

**Ƭ NotFalsy**: *`Exclude`<`T`, [falsy](_util_misc_.md#falsy-1)>*

*Defined in [util/misc.ts:27](https://github.com/cancerberoSgx/accursed/blob/978b980/src/util/misc.ts#L27)*

Removes undefined from type. Example `Falsy<number\|boolean>` will be `number\|true`

___
<a id="removeproperties"></a>

###  RemoveProperties

**Ƭ RemoveProperties**: *`Pick`<`O`, `Exclude`<`keyof O`, `K`>>*

*Defined in [util/misc.ts:17](https://github.com/cancerberoSgx/accursed/blob/978b980/src/util/misc.ts#L17)*

___
<a id="falsy-1"></a>

###  falsy

**Ƭ falsy**: *`undefined` \| `null` \| `false` \| `""` \| `0`*

*Defined in [util/misc.ts:19](https://github.com/cancerberoSgx/accursed/blob/978b980/src/util/misc.ts#L19)*

___

## Functions

<a id="enumvaluefromstring"></a>

###  enumValueFromString

▸ **enumValueFromString**<`T`>(key: *`string`*, anEnum: *`any`*): `T` \| `undefined`

*Defined in [util/misc.ts:13](https://github.com/cancerberoSgx/accursed/blob/978b980/src/util/misc.ts#L13)*

return the Enum type from given string enum key obtained with key \[\[enumNoValueKeys\]\]

**Type parameters:**

#### T 
**Parameters:**

| Name | Type |
| ------ | ------ |
| key | `string` |
| anEnum | `any` |

**Returns:** `T` \| `undefined`

___
<a id="rgb2hex"></a>

###  rgb2Hex

▸ **rgb2Hex**(s: *`string`*): `string`

*Defined in [util/misc.ts:29](https://github.com/cancerberoSgx/accursed/blob/978b980/src/util/misc.ts#L29)*

**Parameters:**

| Name | Type |
| ------ | ------ |
| s | `string` |

**Returns:** `string`

___
<a id="strip"></a>

###  strip

▸ **strip**(s: *`string`*): `string`

*Defined in [util/misc.ts:6](https://github.com/cancerberoSgx/accursed/blob/978b980/src/util/misc.ts#L6)*

strips ANSI codes from a string. From [https://github.com/xpl/ansicolor/blob/master/ansicolor.js](https://github.com/xpl/ansicolor/blob/master/ansicolor.js)

**Parameters:**

| Name | Type | Description |
| ------ | ------ | ------ |
| s | `string` |  a string containing ANSI escape codes. |

**Returns:** `string`
clean string.

___

