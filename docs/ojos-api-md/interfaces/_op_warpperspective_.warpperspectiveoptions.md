**[ojos](../README.md)**

[Globals](../README.md) › ["op/warpPerspective"](../modules/_op_warpperspective_.md) › [WarpPerspectiveOptions](_op_warpperspective_.warpperspectiveoptions.md)

# Interface: WarpPerspectiveOptions

## Hierarchy

* [OperationExecBaseOptions](_op_types_.operationexecbaseoptions.md)

* [WithBorderType](_op_types_.withbordertype.md)

* [WithBorderValue](_op_types_.withbordervalue.md)

  * **WarpPerspectiveOptions**

## Index

### Properties

* [borderType](_op_warpperspective_.warpperspectiveoptions.md#optional-bordertype)
* [borderValue](_op_warpperspective_.warpperspectiveoptions.md#optional-bordervalue)
* [drawPoints](_op_warpperspective_.warpperspectiveoptions.md#optional-drawpoints)
* [dst](_op_warpperspective_.warpperspectiveoptions.md#optional-dst)
* [flags](_op_warpperspective_.warpperspectiveoptions.md#optional-flags)
* [inputs](_op_warpperspective_.warpperspectiveoptions.md#inputs)
* [outputs](_op_warpperspective_.warpperspectiveoptions.md#outputs)
* [size](_op_warpperspective_.warpperspectiveoptions.md#optional-size)
* [solveMethod](_op_warpperspective_.warpperspectiveoptions.md#optional-solvemethod)
* [src](_op_warpperspective_.warpperspectiveoptions.md#src)

## Properties

### `Optional` borderType

• **borderType**? : *BorderTypes*

*Inherited from [WithBorderType](_op_types_.withbordertype.md).[borderType](_op_types_.withbordertype.md#optional-bordertype)*

*Defined in [op/types.ts:34](https://github.com/cancerberoSgx/mirada/blob/f2ba50d/ojos/src/op/types.ts#L34)*

border mode used to extrapolate pixels outside of the image, see [BorderTypes]

___

### `Optional` borderValue

• **borderValue**? : *Scalar*

*Inherited from [WithBorderValue](_op_types_.withbordervalue.md).[borderValue](_op_types_.withbordervalue.md#optional-bordervalue)*

*Defined in [op/types.ts:38](https://github.com/cancerberoSgx/mirada/blob/f2ba50d/ojos/src/op/types.ts#L38)*

___

### `Optional` drawPoints

• **drawPoints**? : *Scalar[] | true*

*Defined in [op/warpPerspective.ts:29](https://github.com/cancerberoSgx/mirada/blob/f2ba50d/ojos/src/op/warpPerspective.ts#L29)*

___

### `Optional` dst

• **dst**? : *Mat*

*Inherited from [OperationExecBaseOptions](_op_types_.operationexecbaseoptions.md).[dst](_op_types_.operationexecbaseoptions.md#optional-dst)*

*Defined in [op/types.ts:27](https://github.com/cancerberoSgx/mirada/blob/f2ba50d/ojos/src/op/types.ts#L27)*

___

### `Optional` flags

• **flags**? : *undefined | number*

*Defined in [op/warpPerspective.ts:19](https://github.com/cancerberoSgx/mirada/blob/f2ba50d/ojos/src/op/warpPerspective.ts#L19)*

combination of interpolation methods (INTER_LINEAR or INTER_NEAREST) and the optional flag WARP_INVERSE_MAP, that sets M as the inverse transformation

___

###  inputs

• **inputs**: *Scalar*

*Defined in [op/warpPerspective.ts:11](https://github.com/cancerberoSgx/mirada/blob/f2ba50d/ojos/src/op/warpPerspective.ts#L11)*

 Coordinates of quadrangle vertices in the source image.

___

###  outputs

• **outputs**: *Scalar*

*Defined in [op/warpPerspective.ts:15](https://github.com/cancerberoSgx/mirada/blob/f2ba50d/ojos/src/op/warpPerspective.ts#L15)*

Coordinates of the corresponding quadrangle vertices in the destination image.

___

### `Optional` size

• **size**? : *Size*

*Defined in [op/warpPerspective.ts:23](https://github.com/cancerberoSgx/mirada/blob/f2ba50d/ojos/src/op/warpPerspective.ts#L23)*

size of the output image.

___

### `Optional` solveMethod

• **solveMethod**? : *DecompTypes*

*Defined in [op/warpPerspective.ts:28](https://github.com/cancerberoSgx/mirada/blob/f2ba50d/ojos/src/op/warpPerspective.ts#L28)*

method passed to cv::solve (DecompTypes)

___

###  src

• **src**: *Mat*

*Inherited from [OperationExecBaseOptions](_op_types_.operationexecbaseoptions.md).[src](_op_types_.operationexecbaseoptions.md#src)*

*Defined in [op/types.ts:26](https://github.com/cancerberoSgx/mirada/blob/f2ba50d/ojos/src/op/types.ts#L26)*