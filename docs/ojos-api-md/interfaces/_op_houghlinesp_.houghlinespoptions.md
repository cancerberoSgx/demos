[ojos](../README.md) › ["op/houghLinesP"](../modules/_op_houghlinesp_.md) › [HoughLinesPOptions](_op_houghlinesp_.houghlinespoptions.md)

# Interface: HoughLinesPOptions

## Hierarchy

* [OperationExecBaseOptions](_op_types_.operationexecbaseoptions.md)

* [HoughLinesPConcreteOptions](_op_houghlinesp_.houghlinespconcreteoptions.md)

  ↳ **HoughLinesPOptions**

## Index

### Properties

* [color](_op_houghlinesp_.houghlinespoptions.md#optional-color)
* [dst](_op_houghlinesp_.houghlinespoptions.md#optional-dst)
* [edgeApertureSize](_op_houghlinesp_.houghlinespoptions.md#optional-edgeaperturesize)
* [edgeL2gradient](_op_houghlinesp_.houghlinespoptions.md#optional-edgel2gradient)
* [edgeThreshold](_op_houghlinesp_.houghlinespoptions.md#optional-edgethreshold)
* [edgeThreshold2](_op_houghlinesp_.houghlinespoptions.md#optional-edgethreshold2)
* [lines](_op_houghlinesp_.houghlinespoptions.md#lines)
* [maxLineGap](_op_houghlinesp_.houghlinespoptions.md#optional-maxlinegap)
* [minLineLength](_op_houghlinesp_.houghlinespoptions.md#optional-minlinelength)
* [rho](_op_houghlinesp_.houghlinespoptions.md#rho)
* [src](_op_houghlinesp_.houghlinespoptions.md#src)
* [theta](_op_houghlinesp_.houghlinespoptions.md#theta)
* [threshold](_op_houghlinesp_.houghlinespoptions.md#threshold)

## Properties

### `Optional` color

• **color**? : *Scalar*

*Inherited from [HoughLinesPConcreteOptions](_op_houghlinesp_.houghlinespconcreteoptions.md).[color](_op_houghlinesp_.houghlinespconcreteoptions.md#optional-color)*

*Defined in [op/houghLinesP.ts:35](https://github.com/cancerberoSgx/mirada/blob/3544b58/ojos/src/op/houghLinesP.ts#L35)*

if given, line segments will be drawn in [dst]

___

### `Optional` dst

• **dst**? : *Mat*

*Inherited from [OperationExecBaseOptions](_op_types_.operationexecbaseoptions.md).[dst](_op_types_.operationexecbaseoptions.md#optional-dst)*

*Defined in [op/types.ts:50](https://github.com/cancerberoSgx/mirada/blob/3544b58/ojos/src/op/types.ts#L50)*

Output image. If not given it will be created. Note that you can give [src] as output image in which case the input image will be written.

___

### `Optional` edgeApertureSize

• **edgeApertureSize**? : *undefined | number*

*Inherited from [HoughLinesPConcreteOptions](_op_houghlinesp_.houghlinespconcreteoptions.md).[edgeApertureSize](_op_houghlinesp_.houghlinespconcreteoptions.md#optional-edgeaperturesize)*

*Defined in [op/houghLinesP.ts:38](https://github.com/cancerberoSgx/mirada/blob/3544b58/ojos/src/op/houghLinesP.ts#L38)*

___

### `Optional` edgeL2gradient

• **edgeL2gradient**? : *undefined | false | true*

*Inherited from [HoughLinesPConcreteOptions](_op_houghlinesp_.houghlinespconcreteoptions.md).[edgeL2gradient](_op_houghlinesp_.houghlinespconcreteoptions.md#optional-edgel2gradient)*

*Defined in [op/houghLinesP.ts:39](https://github.com/cancerberoSgx/mirada/blob/3544b58/ojos/src/op/houghLinesP.ts#L39)*

___

### `Optional` edgeThreshold

• **edgeThreshold**? : *undefined | number*

*Inherited from [HoughLinesPConcreteOptions](_op_houghlinesp_.houghlinespconcreteoptions.md).[edgeThreshold](_op_houghlinesp_.houghlinespconcreteoptions.md#optional-edgethreshold)*

*Defined in [op/houghLinesP.ts:36](https://github.com/cancerberoSgx/mirada/blob/3544b58/ojos/src/op/houghLinesP.ts#L36)*

___

### `Optional` edgeThreshold2

• **edgeThreshold2**? : *undefined | number*

*Inherited from [HoughLinesPConcreteOptions](_op_houghlinesp_.houghlinespconcreteoptions.md).[edgeThreshold2](_op_houghlinesp_.houghlinespconcreteoptions.md#optional-edgethreshold2)*

*Defined in [op/houghLinesP.ts:37](https://github.com/cancerberoSgx/mirada/blob/3544b58/ojos/src/op/houghLinesP.ts#L37)*

___

###  lines

• **lines**: *[LineSegment](_op_types_.linesegment.md)[]*

*Inherited from [HoughLinesPConcreteOptions](_op_houghlinesp_.houghlinespconcreteoptions.md).[lines](_op_houghlinesp_.houghlinespconcreteoptions.md#lines)*

*Defined in [op/houghLinesP.ts:11](https://github.com/cancerberoSgx/mirada/blob/3544b58/ojos/src/op/houghLinesP.ts#L11)*

	parsed line segment objects.

___

### `Optional` maxLineGap

• **maxLineGap**? : *undefined | number*

*Inherited from [HoughLinesPConcreteOptions](_op_houghlinesp_.houghlinespconcreteoptions.md).[maxLineGap](_op_houghlinesp_.houghlinespconcreteoptions.md#optional-maxlinegap)*

*Defined in [op/houghLinesP.ts:31](https://github.com/cancerberoSgx/mirada/blob/3544b58/ojos/src/op/houghLinesP.ts#L31)*

maximum allowed gap between points on the same line to link them.

___

### `Optional` minLineLength

• **minLineLength**? : *undefined | number*

*Inherited from [HoughLinesPConcreteOptions](_op_houghlinesp_.houghlinespconcreteoptions.md).[minLineLength](_op_houghlinesp_.houghlinespconcreteoptions.md#optional-minlinelength)*

*Defined in [op/houghLinesP.ts:27](https://github.com/cancerberoSgx/mirada/blob/3544b58/ojos/src/op/houghLinesP.ts#L27)*

minimum line length. Line segments shorter than that are rejected.

___

###  rho

• **rho**: *number*

*Inherited from [HoughLinesPConcreteOptions](_op_houghlinesp_.houghlinespconcreteoptions.md).[rho](_op_houghlinesp_.houghlinespconcreteoptions.md#rho)*

*Defined in [op/houghLinesP.ts:15](https://github.com/cancerberoSgx/mirada/blob/3544b58/ojos/src/op/houghLinesP.ts#L15)*

distance resolution of the accumulator in pixels.

___

###  src

• **src**: *Mat*

*Inherited from [OperationExecBaseOptions](_op_types_.operationexecbaseoptions.md).[src](_op_types_.operationexecbaseoptions.md#src)*

*Defined in [op/types.ts:46](https://github.com/cancerberoSgx/mirada/blob/3544b58/ojos/src/op/types.ts#L46)*

Input image.

___

###  theta

• **theta**: *number*

*Inherited from [HoughLinesPConcreteOptions](_op_houghlinesp_.houghlinespconcreteoptions.md).[theta](_op_houghlinesp_.houghlinespconcreteoptions.md#theta)*

*Defined in [op/houghLinesP.ts:19](https://github.com/cancerberoSgx/mirada/blob/3544b58/ojos/src/op/houghLinesP.ts#L19)*

angle resolution of the accumulator in radians.

___

###  threshold

• **threshold**: *number*

*Inherited from [HoughLinesPConcreteOptions](_op_houghlinesp_.houghlinespconcreteoptions.md).[threshold](_op_houghlinesp_.houghlinespconcreteoptions.md#threshold)*

*Defined in [op/houghLinesP.ts:23](https://github.com/cancerberoSgx/mirada/blob/3544b58/ojos/src/op/houghLinesP.ts#L23)*

accumulator threshold parameter. Only those lines are returned that get enough votes
