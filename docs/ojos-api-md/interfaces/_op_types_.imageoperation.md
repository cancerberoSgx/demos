[ojos](../README.md) › ["op/types"](../modules/_op_types_.md) › [ImageOperation](_op_types_.imageoperation.md)

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
* [Cartoonize](../classes/_op_cartoonize_.cartoonize.md)
* [Circle](../classes/_op_circle_.circle.md)
* [ConvertTo](../classes/_op_convertto_.convertto.md)
* [CvtColor](../classes/_op_cvtcolor_.cvtcolor.md)
* [Edge](../classes/_op_edge_.edge.md)
* [Ellipse](../classes/_op_ellipse_.ellipse.md)
* [Filter2D](../classes/_op_filter2d_.filter2d.md)
* [FloodFill](../classes/_op_floodfill_.floodfill.md)
* [GaussianBlur](../classes/_op_gaussianblur_.gaussianblur.md)
* [HistEqualization](../classes/_op_histequalization_.histequalization.md)
* [HoughLinesP](../classes/_op_houghlinesp_.houghlinesp.md)
* [InRange](../classes/_op_inrange_.inrange.md)
* [Line](../classes/_op_line_.line.md)
* [Math](../classes/_op_math_.math.md)
* [MedianBlur](../classes/_op_medianblur_.medianblur.md)
* [MorphologyEx](../classes/_op_morphologyex_.morphologyex.md)
* [Pyr](../classes/_op_pyr_.pyr.md)
* [Rectangle](../classes/_op_rectangle_.rectangle.md)
* [ReplaceColor](../classes/_op_replacecolor_.replacecolor.md)
* [Roi](../classes/_op_roi_.roi.md)
* [Threshold](../classes/_op_threshold_.threshold.md)
* [ToRgba](../classes/_op_torgba_.torgba.md)
* [WarpAffine](../classes/_op_warpaffine_.warpaffine.md)
* [WarpPerspective](../classes/_op_warpperspective_.warpperspective.md)
* [Wave](../classes/_op_wave_.wave.md)

## Index

### Properties

* [description](_op_types_.imageoperation.md#description)
* [name](_op_types_.imageoperation.md#name)
* [noDst](_op_types_.imageoperation.md#nodst)
* [noInPlace](_op_types_.imageoperation.md#noinplace)
* [optionsOrder](_op_types_.imageoperation.md#optional-optionsorder)
* [sameSizeAndType](_op_types_.imageoperation.md#samesizeandtype)
* [validChannels](_op_types_.imageoperation.md#validchannels)

### Methods

* [exec](_op_types_.imageoperation.md#exec)
* [resolveOptionsObject](_op_types_.imageoperation.md#resolveoptionsobject)

## Properties

###  description

• **description**: *string*

*Defined in [op/types.ts:13](https://github.com/cancerberoSgx/mirada/blob/3544b58/ojos/src/op/types.ts#L13)*

Operation description paragraph.

___

###  name

• **name**: *string*

*Defined in [op/types.ts:9](https://github.com/cancerberoSgx/mirada/blob/3544b58/ojos/src/op/types.ts#L9)*

Unique name identifying this operation.

___

###  noDst

• **noDst**: *boolean*

*Defined in [op/types.ts:25](https://github.com/cancerberoSgx/mirada/blob/3544b58/ojos/src/op/types.ts#L25)*

The operation implementation doesn't support a [dst] Mat (always write to src).

___

###  noInPlace

• **noInPlace**: *boolean*

*Defined in [op/types.ts:17](https://github.com/cancerberoSgx/mirada/blob/3544b58/ojos/src/op/types.ts#L17)*

The operation doesn't support "in-place" modifications. (passing the same mat as [src] and [dst]).

___

### `Optional` optionsOrder

• **optionsOrder**? : *keyof T[]*

*Defined in [op/types.ts:33](https://github.com/cancerberoSgx/mirada/blob/3544b58/ojos/src/op/types.ts#L33)*

If defined, the operation supports options as array, example: `new GaussianBlur().exec(src, dst, 5, 2.2)` and in the form of statements : `GaussianBlur src out1 5 2.2` which could be less verbose alternative.

___

###  sameSizeAndType

• **sameSizeAndType**: *boolean*

*Defined in [op/types.ts:21](https://github.com/cancerberoSgx/mirada/blob/3544b58/ojos/src/op/types.ts#L21)*

Does the dst mat need to be of the same size and type as [src]?.

___

###  validChannels

• **validChannels**: *number[] | undefined*

*Defined in [op/types.ts:29](https://github.com/cancerberoSgx/mirada/blob/3544b58/ojos/src/op/types.ts#L29)*

Valid channel numbers of input images.

## Methods

###  exec

▸ **exec**(...`o_`: [OperationExecParams](../modules/_op_types_.md#operationexecparams)‹T›): *Mat*

*Defined in [op/types.ts:35](https://github.com/cancerberoSgx/mirada/blob/3544b58/ojos/src/op/types.ts#L35)*

**Parameters:**

Name | Type |
------ | ------ |
`...o_` | [OperationExecParams](../modules/_op_types_.md#operationexecparams)‹T› |

**Returns:** *Mat*

___

###  resolveOptionsObject

▸ **resolveOptionsObject**(...`o`: [OperationExecParams](../modules/_op_types_.md#operationexecparams)‹T›): *T | undefined*

*Defined in [op/types.ts:37](https://github.com/cancerberoSgx/mirada/blob/3544b58/ojos/src/op/types.ts#L37)*

**Parameters:**

Name | Type |
------ | ------ |
`...o` | [OperationExecParams](../modules/_op_types_.md#operationexecparams)‹T› |

**Returns:** *T | undefined*
