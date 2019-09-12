**[ojos](../README.md)**

[Globals](../README.md) › ["op/types"](../modules/_op_types_.md) › [ImageOperation](_op_types_.imageoperation.md)

# Interface: ImageOperation <**T**>

## Type parameters

▪ **T**: *[OperationExecBaseOptions](_op_types_.operationexecbaseoptions.md)*

## Hierarchy

* **ImageOperation**

## Implemented by

* [AbstractOperation](../classes/_op_abstractoperation_.abstractoperation.md)
* [AdaptiveThreshold](../classes/_op_adaptivethreshold_.adaptivethreshold.md)
* [BilateralFilter](../classes/_op_bilateralfilter_.bilateralfilter.md)
* [Bitwise](../classes/_op_bitwise_.bitwise.md)
* [BoxFilter](../classes/_op_boxfilter_.boxfilter.md)
* [Canny](../classes/_op_canny_.canny.md)
* [ConvertTo](../classes/_op_convertto_.convertto.md)
* [Edge](../classes/_op_edge_.edge.md)
* [FloodFill](../classes/_op_floodfill_.floodfill.md)
* [GaussianBlur](../classes/_op_gaussianblur_.gaussianblur.md)
* [HistEqualization](../classes/_op_histequalization_.histequalization.md)
* [Math](../classes/_op_math_.math.md)
* [MedianBlur](../classes/_op_medianblur_.medianblur.md)
* [MorphologyEx](../classes/_op_morphologyex_.morphologyex.md)
* [ReplaceColor](../classes/_op_replacecolor_.replacecolor.md)
* [Threshold](../classes/_op_threshold_.threshold.md)
* [WarpPerspective](../classes/_op_warpperspective_.warpperspective.md)

## Index

### Properties

* [description](_op_types_.imageoperation.md#description)
* [name](_op_types_.imageoperation.md#name)
* [noInPlace](_op_types_.imageoperation.md#noinplace)
* [sameSizeAndType](_op_types_.imageoperation.md#samesizeandtype)
* [validChannels](_op_types_.imageoperation.md#validchannels)

### Methods

* [exec](_op_types_.imageoperation.md#exec)

## Properties

###  description

• **description**: *string*

*Defined in [op/types.ts:6](https://github.com/cancerberoSgx/mirada/blob/f2ba50d/ojos/src/op/types.ts#L6)*

___

###  name

• **name**: *string*

*Defined in [op/types.ts:5](https://github.com/cancerberoSgx/mirada/blob/f2ba50d/ojos/src/op/types.ts#L5)*

___

###  noInPlace

• **noInPlace**: *boolean*

*Defined in [op/types.ts:10](https://github.com/cancerberoSgx/mirada/blob/f2ba50d/ojos/src/op/types.ts#L10)*

The operation doesn't support "in-place" modifications. (passing the same mat as src and dst)

___

###  sameSizeAndType

• **sameSizeAndType**: *boolean*

*Defined in [op/types.ts:14](https://github.com/cancerberoSgx/mirada/blob/f2ba50d/ojos/src/op/types.ts#L14)*

Does the dst mat need to be of the same size and type as src?

___

###  validChannels

• **validChannels**: *number[] | undefined*

*Defined in [op/types.ts:18](https://github.com/cancerberoSgx/mirada/blob/f2ba50d/ojos/src/op/types.ts#L18)*

valid channel numbers of input images

## Methods

###  exec

▸ **exec**(`o?`: [T](undefined)): *Mat*

*Defined in [op/types.ts:19](https://github.com/cancerberoSgx/mirada/blob/f2ba50d/ojos/src/op/types.ts#L19)*

**Parameters:**

Name | Type |
------ | ------ |
`o?` | [T](undefined) |

**Returns:** *Mat*