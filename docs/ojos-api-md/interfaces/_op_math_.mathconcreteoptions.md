**[ojos](../README.md)**

[Globals](../README.md) › ["op/math"](../modules/_op_math_.md) › [MathConcreteOptions](_op_math_.mathconcreteoptions.md)

# Interface: MathConcreteOptions

## Hierarchy

* **MathConcreteOptions**

  * [MathOptions](_op_math_.mathoptions.md)

## Index

### Properties

* [dtype](_op_math_.mathconcreteoptions.md#optional-dtype)
* [mask](_op_math_.mathconcreteoptions.md#optional-mask)
* [scale](_op_math_.mathconcreteoptions.md#optional-scale)
* [src2](_op_math_.mathconcreteoptions.md#src2)
* [type](_op_math_.mathconcreteoptions.md#type)

## Properties

### `Optional` dtype

• **dtype**? : *CVDataType*

*Defined in [op/math.ts:25](https://github.com/cancerberoSgx/mirada/blob/d83d69e/ojos/src/op/math.ts#L25)*

optional depth of the output array

___

### `Optional` mask

• **mask**? : *Mat*

*Defined in [op/math.ts:17](https://github.com/cancerberoSgx/mirada/blob/d83d69e/ojos/src/op/math.ts#L17)*

only applies to 'add' and 'subtract'

___

### `Optional` scale

• **scale**? : *undefined | number*

*Defined in [op/math.ts:21](https://github.com/cancerberoSgx/mirada/blob/d83d69e/ojos/src/op/math.ts#L21)*

only applies to 'multiply' and 'divide'

___

###  src2

• **src2**: *Mat*

*Defined in [op/math.ts:13](https://github.com/cancerberoSgx/mirada/blob/d83d69e/ojos/src/op/math.ts#L13)*

	second input array of the same size and the same type as src

___

###  type

• **type**: *"add" | "subtract" | "divide" | "multiply"*

*Defined in [op/math.ts:9](https://github.com/cancerberoSgx/mirada/blob/d83d69e/ojos/src/op/math.ts#L9)*