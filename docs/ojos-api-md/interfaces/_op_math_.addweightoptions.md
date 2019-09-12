**[ojos](../README.md)**

[Globals](../README.md) › ["op/math"](../modules/_op_math_.md) › [AddWeightOptions](_op_math_.addweightoptions.md)

# Interface: AddWeightOptions

## Hierarchy

* [AddWeightConcreteOptions](_op_math_.addweightconcreteoptions.md)

* [MathBaseOptions](_op_math_.mathbaseoptions.md)

* [OperationExecBaseOptions](_op_types_.operationexecbaseoptions.md)

  * **AddWeightOptions**

## Index

### Properties

* [alpha](_op_math_.addweightoptions.md#alpha)
* [beta](_op_math_.addweightoptions.md#beta)
* [dst](_op_math_.addweightoptions.md#optional-dst)
* [dtype](_op_math_.addweightoptions.md#optional-dtype)
* [gamma](_op_math_.addweightoptions.md#gamma)
* [src](_op_math_.addweightoptions.md#src)
* [src2](_op_math_.addweightoptions.md#src2)

## Properties

###  alpha

• **alpha**: *number*

*Inherited from [AddWeightConcreteOptions](_op_math_.addweightconcreteoptions.md).[alpha](_op_math_.addweightconcreteoptions.md#alpha)*

*Defined in [op/math.ts:22](https://github.com/cancerberoSgx/mirada/blob/f2ba50d/ojos/src/op/math.ts#L22)*

___

###  beta

• **beta**: *number*

*Inherited from [AddWeightConcreteOptions](_op_math_.addweightconcreteoptions.md).[beta](_op_math_.addweightconcreteoptions.md#beta)*

*Defined in [op/math.ts:23](https://github.com/cancerberoSgx/mirada/blob/f2ba50d/ojos/src/op/math.ts#L23)*

___

### `Optional` dst

• **dst**? : *Mat*

*Inherited from [OperationExecBaseOptions](_op_types_.operationexecbaseoptions.md).[dst](_op_types_.operationexecbaseoptions.md#optional-dst)*

*Defined in [op/types.ts:27](https://github.com/cancerberoSgx/mirada/blob/f2ba50d/ojos/src/op/types.ts#L27)*

___

### `Optional` dtype

• **dtype**? : *CVDataType*

*Inherited from [MathBaseOptions](_op_math_.mathbaseoptions.md).[dtype](_op_math_.mathbaseoptions.md#optional-dtype)*

*Defined in [op/math.ts:18](https://github.com/cancerberoSgx/mirada/blob/f2ba50d/ojos/src/op/math.ts#L18)*

optional depth of the output array

___

###  gamma

• **gamma**: *number*

*Inherited from [AddWeightConcreteOptions](_op_math_.addweightconcreteoptions.md).[gamma](_op_math_.addweightconcreteoptions.md#gamma)*

*Defined in [op/math.ts:24](https://github.com/cancerberoSgx/mirada/blob/f2ba50d/ojos/src/op/math.ts#L24)*

___

###  src

• **src**: *Mat*

*Inherited from [OperationExecBaseOptions](_op_types_.operationexecbaseoptions.md).[src](_op_types_.operationexecbaseoptions.md#src)*

*Defined in [op/types.ts:26](https://github.com/cancerberoSgx/mirada/blob/f2ba50d/ojos/src/op/types.ts#L26)*

___

###  src2

• **src2**: *Mat*

*Inherited from [MathBaseOptions](_op_math_.mathbaseoptions.md).[src2](_op_math_.mathbaseoptions.md#src2)*

*Defined in [op/math.ts:14](https://github.com/cancerberoSgx/mirada/blob/f2ba50d/ojos/src/op/math.ts#L14)*

	second input array of the same size and the same type as src