[ojos](../README.md) › ["op/threshold"](../modules/_op_threshold_.md) › [ThresholdOptions](_op_threshold_.thresholdoptions.md)

# Interface: ThresholdOptions

## Hierarchy

* [OperationExecBaseOptions](_op_types_.operationexecbaseoptions.md)

* [ThresholdConcreteOptions](_op_threshold_.thresholdconcreteoptions.md)

  ↳ **ThresholdOptions**

## Index

### Properties

* [dst](_op_threshold_.thresholdoptions.md#optional-dst)
* [maxval](_op_threshold_.thresholdoptions.md#maxval)
* [src](_op_threshold_.thresholdoptions.md#src)
* [thresh](_op_threshold_.thresholdoptions.md#thresh)
* [thresholdType](_op_threshold_.thresholdoptions.md#thresholdtype)

## Properties

### `Optional` dst

• **dst**? : *Mat*

*Inherited from [OperationExecBaseOptions](_op_types_.operationexecbaseoptions.md).[dst](_op_types_.operationexecbaseoptions.md#optional-dst)*

*Defined in [op/types.ts:50](https://github.com/cancerberoSgx/mirada/blob/3544b58/ojos/src/op/types.ts#L50)*

Output image. If not given it will be created. Note that you can give [src] as output image in which case the input image will be written.

___

###  maxval

• **maxval**: *number*

*Inherited from [ThresholdConcreteOptions](_op_threshold_.thresholdconcreteoptions.md).[maxval](_op_threshold_.thresholdconcreteoptions.md#maxval)*

*Defined in [op/threshold.ts:16](https://github.com/cancerberoSgx/mirada/blob/3544b58/ojos/src/op/threshold.ts#L16)*

 maximum value to use with the THRESH_BINARY and THRESH_BINARY_INV thresholding types.

___

###  src

• **src**: *Mat*

*Inherited from [OperationExecBaseOptions](_op_types_.operationexecbaseoptions.md).[src](_op_types_.operationexecbaseoptions.md#src)*

*Defined in [op/types.ts:46](https://github.com/cancerberoSgx/mirada/blob/3544b58/ojos/src/op/types.ts#L46)*

Input image.

___

###  thresh

• **thresh**: *number*

*Inherited from [ThresholdConcreteOptions](_op_threshold_.thresholdconcreteoptions.md).[thresh](_op_threshold_.thresholdconcreteoptions.md#thresh)*

*Defined in [op/threshold.ts:12](https://github.com/cancerberoSgx/mirada/blob/3544b58/ojos/src/op/threshold.ts#L12)*

threshold value

___

###  thresholdType

• **thresholdType**: *ThresholdTypes*

*Inherited from [ThresholdConcreteOptions](_op_threshold_.thresholdconcreteoptions.md).[thresholdType](_op_threshold_.thresholdconcreteoptions.md#thresholdtype)*

*Defined in [op/threshold.ts:20](https://github.com/cancerberoSgx/mirada/blob/3544b58/ojos/src/op/threshold.ts#L20)*

thresholding type (see ThresholdTypes).
