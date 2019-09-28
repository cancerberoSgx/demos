[ojos](../README.md) › ["op/edge"](../modules/_op_edge_.md) › [EdgeOptions](_op_edge_.edgeoptions.md)

# Interface: EdgeOptions

## Hierarchy

* [OperationExecBaseOptions](_op_types_.operationexecbaseoptions.md)

  ↳ [EdgeConcreteOptions](_op_edge_.edgeconcreteoptions.md)

  ↳ **EdgeOptions**

## Index

### Properties

* [borderType](_op_edge_.edgeoptions.md#optional-bordertype)
* [channels](_op_edge_.edgeoptions.md#optional-channels)
* [ddepth](_op_edge_.edgeoptions.md#optional-ddepth)
* [delta](_op_edge_.edgeoptions.md#optional-delta)
* [dst](_op_edge_.edgeoptions.md#optional-dst)
* [dx](_op_edge_.edgeoptions.md#optional-dx)
* [dy](_op_edge_.edgeoptions.md#optional-dy)
* [ksize](_op_edge_.edgeoptions.md#ksize)
* [scale](_op_edge_.edgeoptions.md#optional-scale)
* [src](_op_edge_.edgeoptions.md#src)
* [type](_op_edge_.edgeoptions.md#type)

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

*Inherited from [EdgeConcreteOptions](_op_edge_.edgeconcreteoptions.md).[delta](_op_edge_.edgeconcreteoptions.md#optional-delta)*

*Defined in [op/edge.ts:21](https://github.com/cancerberoSgx/mirada/blob/3544b58/ojos/src/op/edge.ts#L21)*

Optional delta value that is added to the results prior to storing them in dst .

___

### `Optional` dst

• **dst**? : *Mat*

*Inherited from [OperationExecBaseOptions](_op_types_.operationexecbaseoptions.md).[dst](_op_types_.operationexecbaseoptions.md#optional-dst)*

*Defined in [op/types.ts:50](https://github.com/cancerberoSgx/mirada/blob/3544b58/ojos/src/op/types.ts#L50)*

Output image. If not given it will be created. Note that you can give [src] as output image in which case the input image will be written.

___

### `Optional` dx

• **dx**? : *undefined | number*

*Inherited from [EdgeConcreteOptions](_op_edge_.edgeconcreteoptions.md).[dx](_op_edge_.edgeconcreteoptions.md#optional-dx)*

*Defined in [op/edge.ts:13](https://github.com/cancerberoSgx/mirada/blob/3544b58/ojos/src/op/edge.ts#L13)*

Applies only for Scharr and Sobel (and are mandatory in that case). Also must less than 3

___

### `Optional` dy

• **dy**? : *undefined | number*

*Inherited from [EdgeConcreteOptions](_op_edge_.edgeconcreteoptions.md).[dy](_op_edge_.edgeconcreteoptions.md#optional-dy)*

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

*Inherited from [EdgeConcreteOptions](_op_edge_.edgeconcreteoptions.md).[scale](_op_edge_.edgeconcreteoptions.md#optional-scale)*

*Defined in [op/edge.ts:25](https://github.com/cancerberoSgx/mirada/blob/3544b58/ojos/src/op/edge.ts#L25)*

Optional scale factor for the computed Laplacian values. By default, no scaling is applied. See getDerivKernels for details.

___

###  src

• **src**: *Mat*

*Inherited from [OperationExecBaseOptions](_op_types_.operationexecbaseoptions.md).[src](_op_types_.operationexecbaseoptions.md#src)*

*Defined in [op/types.ts:46](https://github.com/cancerberoSgx/mirada/blob/3544b58/ojos/src/op/types.ts#L46)*

Input image.

___

###  type

• **type**: *"sobel" | "scharr" | "laplacian"*

*Inherited from [EdgeConcreteOptions](_op_edge_.edgeconcreteoptions.md).[type](_op_edge_.edgeconcreteoptions.md#type)*

*Defined in [op/edge.ts:9](https://github.com/cancerberoSgx/mirada/blob/3544b58/ojos/src/op/edge.ts#L9)*
