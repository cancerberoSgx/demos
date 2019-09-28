[ojos](../README.md) › ["op/math"](../modules/_op_math_.md) › [MathOptions](_op_math_.mathoptions.md)

# Interface: MathOptions

## Hierarchy

* [OperationExecBaseOptions](_op_types_.operationexecbaseoptions.md)

  ↳ [MathConcreteOptions](_op_math_.mathconcreteoptions.md)

  ↳ **MathOptions**

## Index

### Properties

* [dst](_op_math_.mathoptions.md#optional-dst)
* [dtype](_op_math_.mathoptions.md#optional-dtype)
* [mask](_op_math_.mathoptions.md#optional-mask)
* [scale](_op_math_.mathoptions.md#optional-scale)
* [src](_op_math_.mathoptions.md#src)
* [src2](_op_math_.mathoptions.md#src2)
* [type](_op_math_.mathoptions.md#type)

## Properties

### `Optional` dst

• **dst**? : *Mat*

*Inherited from [OperationExecBaseOptions](_op_types_.operationexecbaseoptions.md).[dst](_op_types_.operationexecbaseoptions.md#optional-dst)*

*Defined in [op/types.ts:50](https://github.com/cancerberoSgx/mirada/blob/3544b58/ojos/src/op/types.ts#L50)*

Output image. If not given it will be created. Note that you can give [src] as output image in which case the input image will be written.

___

### `Optional` dtype

• **dtype**? : *CVDataType*

*Inherited from [MathBaseOptions](_op_math_.mathbaseoptions.md).[dtype](_op_math_.mathbaseoptions.md#optional-dtype)*

*Defined in [op/math.ts:18](https://github.com/cancerberoSgx/mirada/blob/3544b58/ojos/src/op/math.ts#L18)*

optional depth of the output array

___

### `Optional` mask

• **mask**? : *Mat*

*Inherited from [MathConcreteOptions](_op_math_.mathconcreteoptions.md).[mask](_op_math_.mathconcreteoptions.md#optional-mask)*

*Defined in [op/math.ts:36](https://github.com/cancerberoSgx/mirada/blob/3544b58/ojos/src/op/math.ts#L36)*

only applies to 'add' and 'subtract'

___

### `Optional` scale

• **scale**? : *undefined | number*

*Inherited from [MathConcreteOptions](_op_math_.mathconcreteoptions.md).[scale](_op_math_.mathconcreteoptions.md#optional-scale)*

*Defined in [op/math.ts:40](https://github.com/cancerberoSgx/mirada/blob/3544b58/ojos/src/op/math.ts#L40)*

only applies to 'multiply' and 'divide'

___

###  src

• **src**: *Mat*

*Inherited from [OperationExecBaseOptions](_op_types_.operationexecbaseoptions.md).[src](_op_types_.operationexecbaseoptions.md#src)*

*Defined in [op/types.ts:46](https://github.com/cancerberoSgx/mirada/blob/3544b58/ojos/src/op/types.ts#L46)*

Input image.

___

###  src2

• **src2**: *Mat*

*Inherited from [MathBaseOptions](_op_math_.mathbaseoptions.md).[src2](_op_math_.mathbaseoptions.md#src2)*

*Defined in [op/math.ts:14](https://github.com/cancerberoSgx/mirada/blob/3544b58/ojos/src/op/math.ts#L14)*

	second input array of the same size and the same type as src

___

###  type

• **type**: *"add" | "subtract" | "divide" | "multiply" | "addWeighted"*

*Inherited from [MathConcreteOptions](_op_math_.mathconcreteoptions.md).[type](_op_math_.mathconcreteoptions.md#type)*

*Defined in [op/math.ts:32](https://github.com/cancerberoSgx/mirada/blob/3544b58/ojos/src/op/math.ts#L32)*
