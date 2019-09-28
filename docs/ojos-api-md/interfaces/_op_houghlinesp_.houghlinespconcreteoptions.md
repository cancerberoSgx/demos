[ojos](../README.md) › ["op/houghLinesP"](../modules/_op_houghlinesp_.md) › [HoughLinesPConcreteOptions](_op_houghlinesp_.houghlinespconcreteoptions.md)

# Interface: HoughLinesPConcreteOptions

## Hierarchy

* **HoughLinesPConcreteOptions**

  ↳ [HoughLinesPOptions](_op_houghlinesp_.houghlinespoptions.md)

## Index

### Properties

* [color](_op_houghlinesp_.houghlinespconcreteoptions.md#optional-color)
* [edgeApertureSize](_op_houghlinesp_.houghlinespconcreteoptions.md#optional-edgeaperturesize)
* [edgeL2gradient](_op_houghlinesp_.houghlinespconcreteoptions.md#optional-edgel2gradient)
* [edgeThreshold](_op_houghlinesp_.houghlinespconcreteoptions.md#optional-edgethreshold)
* [edgeThreshold2](_op_houghlinesp_.houghlinespconcreteoptions.md#optional-edgethreshold2)
* [lines](_op_houghlinesp_.houghlinespconcreteoptions.md#lines)
* [maxLineGap](_op_houghlinesp_.houghlinespconcreteoptions.md#optional-maxlinegap)
* [minLineLength](_op_houghlinesp_.houghlinespconcreteoptions.md#optional-minlinelength)
* [rho](_op_houghlinesp_.houghlinespconcreteoptions.md#rho)
* [theta](_op_houghlinesp_.houghlinespconcreteoptions.md#theta)
* [threshold](_op_houghlinesp_.houghlinespconcreteoptions.md#threshold)

## Properties

### `Optional` color

• **color**? : *Scalar*

*Defined in [op/houghLinesP.ts:35](https://github.com/cancerberoSgx/mirada/blob/3544b58/ojos/src/op/houghLinesP.ts#L35)*

if given, line segments will be drawn in [dst]

___

### `Optional` edgeApertureSize

• **edgeApertureSize**? : *undefined | number*

*Defined in [op/houghLinesP.ts:38](https://github.com/cancerberoSgx/mirada/blob/3544b58/ojos/src/op/houghLinesP.ts#L38)*

___

### `Optional` edgeL2gradient

• **edgeL2gradient**? : *undefined | false | true*

*Defined in [op/houghLinesP.ts:39](https://github.com/cancerberoSgx/mirada/blob/3544b58/ojos/src/op/houghLinesP.ts#L39)*

___

### `Optional` edgeThreshold

• **edgeThreshold**? : *undefined | number*

*Defined in [op/houghLinesP.ts:36](https://github.com/cancerberoSgx/mirada/blob/3544b58/ojos/src/op/houghLinesP.ts#L36)*

___

### `Optional` edgeThreshold2

• **edgeThreshold2**? : *undefined | number*

*Defined in [op/houghLinesP.ts:37](https://github.com/cancerberoSgx/mirada/blob/3544b58/ojos/src/op/houghLinesP.ts#L37)*

___

###  lines

• **lines**: *[LineSegment](_op_types_.linesegment.md)[]*

*Defined in [op/houghLinesP.ts:11](https://github.com/cancerberoSgx/mirada/blob/3544b58/ojos/src/op/houghLinesP.ts#L11)*

	parsed line segment objects.

___

### `Optional` maxLineGap

• **maxLineGap**? : *undefined | number*

*Defined in [op/houghLinesP.ts:31](https://github.com/cancerberoSgx/mirada/blob/3544b58/ojos/src/op/houghLinesP.ts#L31)*

maximum allowed gap between points on the same line to link them.

___

### `Optional` minLineLength

• **minLineLength**? : *undefined | number*

*Defined in [op/houghLinesP.ts:27](https://github.com/cancerberoSgx/mirada/blob/3544b58/ojos/src/op/houghLinesP.ts#L27)*

minimum line length. Line segments shorter than that are rejected.

___

###  rho

• **rho**: *number*

*Defined in [op/houghLinesP.ts:15](https://github.com/cancerberoSgx/mirada/blob/3544b58/ojos/src/op/houghLinesP.ts#L15)*

distance resolution of the accumulator in pixels.

___

###  theta

• **theta**: *number*

*Defined in [op/houghLinesP.ts:19](https://github.com/cancerberoSgx/mirada/blob/3544b58/ojos/src/op/houghLinesP.ts#L19)*

angle resolution of the accumulator in radians.

___

###  threshold

• **threshold**: *number*

*Defined in [op/houghLinesP.ts:23](https://github.com/cancerberoSgx/mirada/blob/3544b58/ojos/src/op/houghLinesP.ts#L23)*

accumulator threshold parameter. Only those lines are returned that get enough votes
