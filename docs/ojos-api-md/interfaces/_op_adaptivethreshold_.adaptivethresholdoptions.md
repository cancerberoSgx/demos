[ojos](../README.md) › ["op/adaptiveThreshold"](../modules/_op_adaptivethreshold_.md) › [AdaptiveThresholdOptions](_op_adaptivethreshold_.adaptivethresholdoptions.md)

# Interface: AdaptiveThresholdOptions

## Hierarchy

* [OperationExecBaseOptions](_op_types_.operationexecbaseoptions.md)

* [AdaptiveThresholdConcreteOptions](_op_adaptivethreshold_.adaptivethresholdconcreteoptions.md)

  ↳ **AdaptiveThresholdOptions**

## Index

### Properties

* [C](_op_adaptivethreshold_.adaptivethresholdoptions.md#c)
* [adaptiveMethod](_op_adaptivethreshold_.adaptivethresholdoptions.md#adaptivemethod)
* [blockSize](_op_adaptivethreshold_.adaptivethresholdoptions.md#blocksize)
* [dst](_op_adaptivethreshold_.adaptivethresholdoptions.md#optional-dst)
* [maxval](_op_adaptivethreshold_.adaptivethresholdoptions.md#maxval)
* [src](_op_adaptivethreshold_.adaptivethresholdoptions.md#src)
* [thresholdType](_op_adaptivethreshold_.adaptivethresholdoptions.md#thresholdtype)

## Properties

###  C

• **C**: *number*

*Inherited from [AdaptiveThresholdConcreteOptions](_op_adaptivethreshold_.adaptivethresholdconcreteoptions.md).[C](_op_adaptivethreshold_.adaptivethresholdconcreteoptions.md#c)*

*Defined in [op/adaptiveThreshold.ts:14](https://github.com/cancerberoSgx/mirada/blob/3544b58/ojos/src/op/adaptiveThreshold.ts#L14)*

___

###  adaptiveMethod

• **adaptiveMethod**: *AdaptiveThresholdTypes*

*Inherited from [AdaptiveThresholdConcreteOptions](_op_adaptivethreshold_.adaptivethresholdconcreteoptions.md).[adaptiveMethod](_op_adaptivethreshold_.adaptivethresholdconcreteoptions.md#adaptivemethod)*

*Defined in [op/adaptiveThreshold.ts:12](https://github.com/cancerberoSgx/mirada/blob/3544b58/ojos/src/op/adaptiveThreshold.ts#L12)*

___

###  blockSize

• **blockSize**: *number*

*Inherited from [AdaptiveThresholdConcreteOptions](_op_adaptivethreshold_.adaptivethresholdconcreteoptions.md).[blockSize](_op_adaptivethreshold_.adaptivethresholdconcreteoptions.md#blocksize)*

*Defined in [op/adaptiveThreshold.ts:13](https://github.com/cancerberoSgx/mirada/blob/3544b58/ojos/src/op/adaptiveThreshold.ts#L13)*

___

### `Optional` dst

• **dst**? : *Mat*

*Inherited from [OperationExecBaseOptions](_op_types_.operationexecbaseoptions.md).[dst](_op_types_.operationexecbaseoptions.md#optional-dst)*

*Defined in [op/types.ts:50](https://github.com/cancerberoSgx/mirada/blob/3544b58/ojos/src/op/types.ts#L50)*

Output image. If not given it will be created. Note that you can give [src] as output image in which case the input image will be written.

___

###  maxval

• **maxval**: *number*

*Inherited from [AdaptiveThresholdConcreteOptions](_op_adaptivethreshold_.adaptivethresholdconcreteoptions.md).[maxval](_op_adaptivethreshold_.adaptivethresholdconcreteoptions.md#maxval)*

*Defined in [op/adaptiveThreshold.ts:10](https://github.com/cancerberoSgx/mirada/blob/3544b58/ojos/src/op/adaptiveThreshold.ts#L10)*

___

###  src

• **src**: *Mat*

*Inherited from [OperationExecBaseOptions](_op_types_.operationexecbaseoptions.md).[src](_op_types_.operationexecbaseoptions.md#src)*

*Defined in [op/types.ts:46](https://github.com/cancerberoSgx/mirada/blob/3544b58/ojos/src/op/types.ts#L46)*

Input image.

___

###  thresholdType

• **thresholdType**: *ThresholdTypes*

*Inherited from [AdaptiveThresholdConcreteOptions](_op_adaptivethreshold_.adaptivethresholdconcreteoptions.md).[thresholdType](_op_adaptivethreshold_.adaptivethresholdconcreteoptions.md#thresholdtype)*

*Defined in [op/adaptiveThreshold.ts:11](https://github.com/cancerberoSgx/mirada/blob/3544b58/ojos/src/op/adaptiveThreshold.ts#L11)*
