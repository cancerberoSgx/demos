[ojos](../README.md) › ["op/edge"](../modules/_op_edge_.md) › [EdgeConcreteOptions](_op_edge_.edgeconcreteoptions.md)

# Interface: EdgeConcreteOptions

## Hierarchy

* [WithBorderType](_op_types_.withbordertype.md)

* [WithKSize](_op_types_.withksize.md)

* [WithChannels](_op_types_.withchannels.md)

* [WithDDepth](_op_types_.withddepth.md)

  ↳ **EdgeConcreteOptions**

  ↳ [EdgeOptions](_op_edge_.edgeoptions.md)

## Index

### Properties

* [borderType](_op_edge_.edgeconcreteoptions.md#optional-bordertype)
* [channels](_op_edge_.edgeconcreteoptions.md#optional-channels)
* [ddepth](_op_edge_.edgeconcreteoptions.md#optional-ddepth)
* [delta](_op_edge_.edgeconcreteoptions.md#optional-delta)
* [dx](_op_edge_.edgeconcreteoptions.md#optional-dx)
* [dy](_op_edge_.edgeconcreteoptions.md#optional-dy)
* [ksize](_op_edge_.edgeconcreteoptions.md#ksize)
* [scale](_op_edge_.edgeconcreteoptions.md#optional-scale)
* [type](_op_edge_.edgeconcreteoptions.md#type)

## Properties

### `Optional` borderType

• **borderType**? : *BorderTypes*

*Inherited from [WithBorderType](_op_types_.withbordertype.md).[borderType](_op_types_.withbordertype.md#optional-bordertype)*

*Defined in [op/types.ts:57](https://github.com/cancerberoSgx/mirada/blob/3544b58/ojos/src/op/types.ts#L57)*

border mode used to extrapolate pixels outside of the image, see [BorderTypes].

___

### `Optional` channels

• **channels**? : *true | number[]*

*Inherited from [WithChannels](_op_types_.withchannels.md).[channels](_op_types_.withchannels.md#optional-channels)*

*Defined in [op/types.ts:109](https://github.com/cancerberoSgx/mirada/blob/3544b58/ojos/src/op/types.ts#L109)*

If true then all channels will be processed independently and then joined to build the result. The only
exception is when there are 4 channels and in this case, if channels===true, the last 4th channel will be
omitted (alpha). If an array of numbers is given then those channels will be processed only. If not given
then the operation will behave normally, processing as single channel image.

___

### `Optional` ddepth

• **ddepth**? : *undefined | number*

*Inherited from [WithDDepth](_op_types_.withddepth.md).[ddepth](_op_types_.withddepth.md#optional-ddepth)*

*Defined in [op/types.ts:99](https://github.com/cancerberoSgx/mirada/blob/3544b58/ojos/src/op/types.ts#L99)*

the output image dept. (-1 to use src.depth()).

___

### `Optional` delta

• **delta**? : *undefined | number*

*Defined in [op/edge.ts:21](https://github.com/cancerberoSgx/mirada/blob/3544b58/ojos/src/op/edge.ts#L21)*

Optional delta value that is added to the results prior to storing them in dst .

___

### `Optional` dx

• **dx**? : *undefined | number*

*Defined in [op/edge.ts:13](https://github.com/cancerberoSgx/mirada/blob/3544b58/ojos/src/op/edge.ts#L13)*

Applies only for Scharr and Sobel (and are mandatory in that case). Also must less than 3

___

### `Optional` dy

• **dy**? : *undefined | number*

*Defined in [op/edge.ts:17](https://github.com/cancerberoSgx/mirada/blob/3544b58/ojos/src/op/edge.ts#L17)*

Applies only for Scharr and Sobel (and are mandatory in that case)

___

###  ksize

• **ksize**: *[SizeRepresentation](../modules/_util_util_.md#sizerepresentation)*

*Inherited from [WithKSize](_op_types_.withksize.md).[ksize](_op_types_.withksize.md#ksize)*

*Defined in [op/types.ts:78](https://github.com/cancerberoSgx/mirada/blob/3544b58/ojos/src/op/types.ts#L78)*

Transformation (blurring) kernel size. In general only odd numbers greater than 2 are accepted.

___

### `Optional` scale

• **scale**? : *undefined | number*

*Defined in [op/edge.ts:25](https://github.com/cancerberoSgx/mirada/blob/3544b58/ojos/src/op/edge.ts#L25)*

Optional scale factor for the computed Laplacian values. By default, no scaling is applied. See getDerivKernels for details.

___

###  type

• **type**: *"sobel" | "scharr" | "laplacian"*

*Defined in [op/edge.ts:9](https://github.com/cancerberoSgx/mirada/blob/3544b58/ojos/src/op/edge.ts#L9)*
