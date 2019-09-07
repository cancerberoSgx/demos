**[ojos](../README.md)**

[Globals](../README.md) › ["op/bitwise"](../modules/_op_bitwise_.md) › [BitwiseOptions](_op_bitwise_.bitwiseoptions.md)

# Interface: BitwiseOptions

## Hierarchy

* [OperationExecBaseOptions](_op_types_.operationexecbaseoptions.md)

* [BitwiseConcreteOptions](_op_bitwise_.bitwiseconcreteoptions.md)

  * **BitwiseOptions**

## Index

### Properties

* [dst](_op_bitwise_.bitwiseoptions.md#optional-dst)
* [mask](_op_bitwise_.bitwiseoptions.md#optional-mask)
* [src](_op_bitwise_.bitwiseoptions.md#src)
* [src2](_op_bitwise_.bitwiseoptions.md#optional-src2)
* [type](_op_bitwise_.bitwiseoptions.md#type)

## Properties

### `Optional` dst

• **dst**? : *Mat*

*Inherited from [OperationExecBaseOptions](_op_types_.operationexecbaseoptions.md).[dst](_op_types_.operationexecbaseoptions.md#optional-dst)*

*Defined in [op/types.ts:27](https://github.com/cancerberoSgx/mirada/blob/d83d69e/ojos/src/op/types.ts#L27)*

___

### `Optional` mask

• **mask**? : *Mat*

*Inherited from [BitwiseConcreteOptions](_op_bitwise_.bitwiseconcreteoptions.md).[mask](_op_bitwise_.bitwiseconcreteoptions.md#optional-mask)*

*Defined in [op/bitwise.ts:12](https://github.com/cancerberoSgx/mirada/blob/d83d69e/ojos/src/op/bitwise.ts#L12)*

___

###  src

• **src**: *Mat*

*Inherited from [OperationExecBaseOptions](_op_types_.operationexecbaseoptions.md).[src](_op_types_.operationexecbaseoptions.md#src)*

*Defined in [op/types.ts:26](https://github.com/cancerberoSgx/mirada/blob/d83d69e/ojos/src/op/types.ts#L26)*

___

### `Optional` src2

• **src2**? : *Mat*

*Inherited from [BitwiseConcreteOptions](_op_bitwise_.bitwiseconcreteoptions.md).[src2](_op_bitwise_.bitwiseconcreteoptions.md#optional-src2)*

*Defined in [op/bitwise.ts:11](https://github.com/cancerberoSgx/mirada/blob/d83d69e/ojos/src/op/bitwise.ts#L11)*

___

###  type

• **type**: *"and" | "or" | "not" | "xor"*

*Inherited from [BitwiseConcreteOptions](_op_bitwise_.bitwiseconcreteoptions.md).[type](_op_bitwise_.bitwiseconcreteoptions.md#type)*

*Defined in [op/bitwise.ts:10](https://github.com/cancerberoSgx/mirada/blob/d83d69e/ojos/src/op/bitwise.ts#L10)*