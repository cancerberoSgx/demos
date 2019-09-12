**[ojos](../README.md)**

[Globals](../README.md) › ["op/edge"](../modules/_op_edge_.md) › [EdgeConcreteOptions](_op_edge_.edgeconcreteoptions.md)

# Interface: EdgeConcreteOptions

## Hierarchy

* [WithBorderType](_op_types_.withbordertype.md)

* [WithChannels](_op_types_.withchannels.md)

  * **EdgeConcreteOptions**

  * [EdgeOptions](_op_edge_.edgeoptions.md)

## Index

### Properties

* [borderType](_op_edge_.edgeconcreteoptions.md#optional-bordertype)
* [channels](_op_edge_.edgeconcreteoptions.md#optional-channels)
* [ddepth](_op_edge_.edgeconcreteoptions.md#optional-ddepth)
* [delta](_op_edge_.edgeconcreteoptions.md#optional-delta)
* [dx](_op_edge_.edgeconcreteoptions.md#optional-dx)
* [dy](_op_edge_.edgeconcreteoptions.md#optional-dy)
* [ksize](_op_edge_.edgeconcreteoptions.md#optional-ksize)
* [scale](_op_edge_.edgeconcreteoptions.md#optional-scale)
* [type](_op_edge_.edgeconcreteoptions.md#type)

## Properties

### `Optional` borderType

• **borderType**? : *BorderTypes*

*Inherited from [WithBorderType](_op_types_.withbordertype.md).[borderType](_op_types_.withbordertype.md#optional-bordertype)*

*Defined in [op/types.ts:34](https://github.com/cancerberoSgx/mirada/blob/f2ba50d/ojos/src/op/types.ts#L34)*

border mode used to extrapolate pixels outside of the image, see [BorderTypes]

___

### `Optional` channels

• **channels**? : *true | number[]*

*Inherited from [WithChannels](_op_types_.withchannels.md).[channels](_op_types_.withchannels.md#optional-channels)*

*Defined in [op/types.ts:52](https://github.com/cancerberoSgx/mirada/blob/f2ba50d/ojos/src/op/types.ts#L52)*

If true then all channels will be processed independently and then joined to build the result. The only exception is when there are 4 channels and in this case, if channels===true, the last 4th channel will be omitted (alpha). If an array of numbers is given then those channels will be processed only. If not given then the operation will behave normally, processing as single channle image.

___

### `Optional` ddepth

• **ddepth**? : *undefined | number*

*Defined in [op/edge.ts:18](https://github.com/cancerberoSgx/mirada/blob/f2ba50d/ojos/src/op/edge.ts#L18)*

Desired depth of the destination image. Combinations:
```
input           output
CV_8U	          -1/CV_16S/CV_32F/CV_64F
CV_16U/CV_16S	  -1/CV_32F/CV_64F
CV_32F	        -1/CV_32F/CV_64F
CV_64F	        -1/CV_64F

___

### `Optional` delta

• **delta**? : *undefined | number*

*Defined in [op/edge.ts:34](https://github.com/cancerberoSgx/mirada/blob/f2ba50d/ojos/src/op/edge.ts#L34)*

Optional delta value that is added to the results prior to storing them in dst .

___

### `Optional` dx

• **dx**? : *undefined | number*

*Defined in [op/edge.ts:22](https://github.com/cancerberoSgx/mirada/blob/f2ba50d/ojos/src/op/edge.ts#L22)*

Applies only for Scharr and Sobel (and are mandatory in that case). Also must less than 3

___

### `Optional` dy

• **dy**? : *undefined | number*

*Defined in [op/edge.ts:26](https://github.com/cancerberoSgx/mirada/blob/f2ba50d/ojos/src/op/edge.ts#L26)*

Applies only for Scharr and Sobel (and are mandatory in that case)

___

### `Optional` ksize

• **ksize**? : *undefined | number*

*Defined in [op/edge.ts:30](https://github.com/cancerberoSgx/mirada/blob/f2ba50d/ojos/src/op/edge.ts#L30)*

Aperture size used to compute the second-derivative filters. See getDerivKernels for details. The size must be positive and odd. applies only for Sobel and Laplacian

___

### `Optional` scale

• **scale**? : *undefined | number*

*Defined in [op/edge.ts:38](https://github.com/cancerberoSgx/mirada/blob/f2ba50d/ojos/src/op/edge.ts#L38)*

Optional scale factor for the computed Laplacian values. By default, no scaling is applied. See getDerivKernels for details.

___

###  type

• **type**: *"sobel" | "scharr" | "laplacian"*

*Defined in [op/edge.ts:8](https://github.com/cancerberoSgx/mirada/blob/f2ba50d/ojos/src/op/edge.ts#L8)*