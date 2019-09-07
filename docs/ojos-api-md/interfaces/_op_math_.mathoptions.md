**[ojos](../README.md)**

[Globals](../README.md) › ["op/math"](../modules/_op_math_.md) › [MathOptions](_op_math_.mathoptions.md)

# Interface: MathOptions

## Hierarchy

* [OperationExecBaseOptions](_op_types_.operationexecbaseoptions.md)

* [MathConcreteOptions](_op_math_.mathconcreteoptions.md)

  * **MathOptions**

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

*Defined in [op/types.ts:27](https://github.com/cancerberoSgx/mirada/blob/d83d69e/ojos/src/op/types.ts#L27)*

___

### `Optional` dtype

• **dtype**? : *CVDataType*

*Inherited from [MathConcreteOptions](_op_math_.mathconcreteoptions.md).[dtype](_op_math_.mathconcreteoptions.md#optional-dtype)*

*Defined in [op/math.ts:25](https://github.com/cancerberoSgx/mirada/blob/d83d69e/ojos/src/op/math.ts#L25)*

optional depth of the output array

___

### `Optional` mask

• **mask**? : *Mat*

*Inherited from [MathConcreteOptions](_op_math_.mathconcreteoptions.md).[mask](_op_math_.mathconcreteoptions.md#optional-mask)*

*Defined in [op/math.ts:17](https://github.com/cancerberoSgx/mirada/blob/d83d69e/ojos/src/op/math.ts#L17)*

only applies to 'add' and 'subtract'

___

### `Optional` scale

• **scale**? : *undefined | number*

*Inherited from [MathConcreteOptions](_op_math_.mathconcreteoptions.md).[scale](_op_math_.mathconcreteoptions.md#optional-scale)*

*Defined in [op/math.ts:21](https://github.com/cancerberoSgx/mirada/blob/d83d69e/ojos/src/op/math.ts#L21)*

only applies to 'multiply' and 'divide'

___

###  src

• **src**: *Mat*

*Inherited from [OperationExecBaseOptions](_op_types_.operationexecbaseoptions.md).[src](_op_types_.operationexecbaseoptions.md#src)*

*Defined in [op/types.ts:26](https://github.com/cancerberoSgx/mirada/blob/d83d69e/ojos/src/op/types.ts#L26)*

___

###  src2

• **src2**: *Mat*

*Inherited from [MathConcreteOptions](_op_math_.mathconcreteoptions.md).[src2](_op_math_.mathconcreteoptions.md#src2)*

*Defined in [op/math.ts:13](https://github.com/cancerberoSgx/mirada/blob/d83d69e/ojos/src/op/math.ts#L13)*

	second input array of the same size and the same type as src

___

###  type

• **type**: *"add" | "subtract" | "divide" | "multiply"*

*Inherited from [MathConcreteOptions](_op_math_.mathconcreteoptions.md).[type](_op_math_.mathconcreteoptions.md#type)*

*Defined in [op/math.ts:9](https://github.com/cancerberoSgx/mirada/blob/d83d69e/ojos/src/op/math.ts#L9)*