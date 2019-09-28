[ojos](../README.md) › ["op/math"](../modules/_op_math_.md) › [MathConcreteOptions](_op_math_.mathconcreteoptions.md)

# Interface: MathConcreteOptions

## Hierarchy

* [MathBaseOptions](_op_math_.mathbaseoptions.md)

* object

  ↳ **MathConcreteOptions**

  ↳ [MathOptions](_op_math_.mathoptions.md)

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

*Inherited from [MathBaseOptions](_op_math_.mathbaseoptions.md).[dtype](_op_math_.mathbaseoptions.md#optional-dtype)*

*Defined in [op/math.ts:18](https://github.com/cancerberoSgx/mirada/blob/3544b58/ojos/src/op/math.ts#L18)*

optional depth of the output array

___

### `Optional` mask

• **mask**? : *Mat*

*Defined in [op/math.ts:36](https://github.com/cancerberoSgx/mirada/blob/3544b58/ojos/src/op/math.ts#L36)*

only applies to 'add' and 'subtract'

___

### `Optional` scale

• **scale**? : *undefined | number*

*Defined in [op/math.ts:40](https://github.com/cancerberoSgx/mirada/blob/3544b58/ojos/src/op/math.ts#L40)*

only applies to 'multiply' and 'divide'

___

###  src2

• **src2**: *Mat*

*Inherited from [MathBaseOptions](_op_math_.mathbaseoptions.md).[src2](_op_math_.mathbaseoptions.md#src2)*

*Defined in [op/math.ts:14](https://github.com/cancerberoSgx/mirada/blob/3544b58/ojos/src/op/math.ts#L14)*

	second input array of the same size and the same type as src

___

###  type

• **type**: *"add" | "subtract" | "divide" | "multiply" | "addWeighted"*

*Defined in [op/math.ts:32](https://github.com/cancerberoSgx/mirada/blob/3544b58/ojos/src/op/math.ts#L32)*
