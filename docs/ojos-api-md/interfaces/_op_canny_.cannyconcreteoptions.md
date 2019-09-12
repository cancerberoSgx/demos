**[ojos](../README.md)**

[Globals](../README.md) › ["op/canny"](../modules/_op_canny_.md) › [CannyConcreteOptions](_op_canny_.cannyconcreteoptions.md)

# Interface: CannyConcreteOptions

The function finds edges in the input image and marks them in the output map edges using the Canny algorithm. The smallest value between threshold1 and threshold2 is used for edge linking. The largest value is used to find initial segments of strong edges.

## Hierarchy

* [WithChannels](_op_types_.withchannels.md)

  * **CannyConcreteOptions**

  * [CannyOptions](_op_canny_.cannyoptions.md)

## Index

### Properties

* [L2gradient](_op_canny_.cannyconcreteoptions.md#optional-l2gradient)
* [apertureSize](_op_canny_.cannyconcreteoptions.md#optional-aperturesize)
* [channels](_op_canny_.cannyconcreteoptions.md#optional-channels)
* [threshold1](_op_canny_.cannyconcreteoptions.md#optional-threshold1)
* [threshold2](_op_canny_.cannyconcreteoptions.md#optional-threshold2)

## Properties

### `Optional` L2gradient

• **L2gradient**? : *undefined | false | true*

*Defined in [op/canny.ts:25](https://github.com/cancerberoSgx/mirada/blob/f2ba50d/ojos/src/op/canny.ts#L25)*

if true a more accurate L2 norm will be used to calculate the image gradient magnitude

___

### `Optional` apertureSize

• **apertureSize**? : *undefined | number*

*Defined in [op/canny.ts:21](https://github.com/cancerberoSgx/mirada/blob/f2ba50d/ojos/src/op/canny.ts#L21)*

aperture size for the Sobel operator.

___

### `Optional` channels

• **channels**? : *true | number[]*

*Inherited from [WithChannels](_op_types_.withchannels.md).[channels](_op_types_.withchannels.md#optional-channels)*

*Defined in [op/types.ts:52](https://github.com/cancerberoSgx/mirada/blob/f2ba50d/ojos/src/op/types.ts#L52)*

If true then all channels will be processed independently and then joined to build the result. The only exception is when there are 4 channels and in this case, if channels===true, the last 4th channel will be omitted (alpha). If an array of numbers is given then those channels will be processed only. If not given then the operation will behave normally, processing as single channle image.

___

### `Optional` threshold1

• **threshold1**? : *undefined | number*

*Defined in [op/canny.ts:13](https://github.com/cancerberoSgx/mirada/blob/f2ba50d/ojos/src/op/canny.ts#L13)*

first threshold for the hysteresis procedure.

___

### `Optional` threshold2

• **threshold2**? : *undefined | number*

*Defined in [op/canny.ts:17](https://github.com/cancerberoSgx/mirada/blob/f2ba50d/ojos/src/op/canny.ts#L17)*

Observation: When this has low values flood pass through edges of color similar to the low channel