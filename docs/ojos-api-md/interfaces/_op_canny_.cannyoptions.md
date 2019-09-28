[ojos](../README.md) › ["op/canny"](../modules/_op_canny_.md) › [CannyOptions](_op_canny_.cannyoptions.md)

# Interface: CannyOptions

## Hierarchy

  ↳ [CannyConcreteOptions](_op_canny_.cannyconcreteoptions.md)

* [OperationExecBaseOptions](_op_types_.operationexecbaseoptions.md)

  ↳ **CannyOptions**

## Index

### Properties

* [L2gradient](_op_canny_.cannyoptions.md#optional-l2gradient)
* [apertureSize](_op_canny_.cannyoptions.md#optional-aperturesize)
* [channels](_op_canny_.cannyoptions.md#optional-channels)
* [dst](_op_canny_.cannyoptions.md#optional-dst)
* [src](_op_canny_.cannyoptions.md#src)
* [threshold1](_op_canny_.cannyoptions.md#optional-threshold1)
* [threshold2](_op_canny_.cannyoptions.md#optional-threshold2)

## Properties

### `Optional` L2gradient

• **L2gradient**? : *undefined | false | true*

*Inherited from [CannyConcreteOptions](_op_canny_.cannyconcreteoptions.md).[L2gradient](_op_canny_.cannyconcreteoptions.md#optional-l2gradient)*

*Defined in [op/canny.ts:23](https://github.com/cancerberoSgx/mirada/blob/3544b58/ojos/src/op/canny.ts#L23)*

if true a more accurate L2 norm will be used to calculate the image gradient magnitude

___

### `Optional` apertureSize

• **apertureSize**? : *undefined | number*

*Inherited from [CannyConcreteOptions](_op_canny_.cannyconcreteoptions.md).[apertureSize](_op_canny_.cannyconcreteoptions.md#optional-aperturesize)*

*Defined in [op/canny.ts:19](https://github.com/cancerberoSgx/mirada/blob/3544b58/ojos/src/op/canny.ts#L19)*

aperture size for the Sobel operator.

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

### `Optional` dst

• **dst**? : *Mat*

*Inherited from [OperationExecBaseOptions](_op_types_.operationexecbaseoptions.md).[dst](_op_types_.operationexecbaseoptions.md#optional-dst)*

*Defined in [op/types.ts:50](https://github.com/cancerberoSgx/mirada/blob/3544b58/ojos/src/op/types.ts#L50)*

Output image. If not given it will be created. Note that you can give [src] as output image in which case the input image will be written.

___

###  src

• **src**: *Mat*

*Inherited from [OperationExecBaseOptions](_op_types_.operationexecbaseoptions.md).[src](_op_types_.operationexecbaseoptions.md#src)*

*Defined in [op/types.ts:46](https://github.com/cancerberoSgx/mirada/blob/3544b58/ojos/src/op/types.ts#L46)*

Input image.

___

### `Optional` threshold1

• **threshold1**? : *undefined | number*

*Inherited from [CannyConcreteOptions](_op_canny_.cannyconcreteoptions.md).[threshold1](_op_canny_.cannyconcreteoptions.md#optional-threshold1)*

*Defined in [op/canny.ts:11](https://github.com/cancerberoSgx/mirada/blob/3544b58/ojos/src/op/canny.ts#L11)*

first threshold for the hysteresis procedure.

___

### `Optional` threshold2

• **threshold2**? : *undefined | number*

*Inherited from [CannyConcreteOptions](_op_canny_.cannyconcreteoptions.md).[threshold2](_op_canny_.cannyconcreteoptions.md#optional-threshold2)*

*Defined in [op/canny.ts:15](https://github.com/cancerberoSgx/mirada/blob/3544b58/ojos/src/op/canny.ts#L15)*

Observation: When this has low values flood pass through edges of color similar to the low channel
