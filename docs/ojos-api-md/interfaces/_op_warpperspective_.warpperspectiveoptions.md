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
* [dst](_op_warpperspective_.warpperspectiveoptions.md#optional-dst)
* [inputs](_op_warpperspective_.warpperspectiveoptions.md#inputs)
* [outputs](_op_warpperspective_.warpperspectiveoptions.md#outputs)
* [size](_op_warpperspective_.warpperspectiveoptions.md#optional-size)
* [solveMethod](_op_warpperspective_.warpperspectiveoptions.md#optional-solvemethod)
* [src](_op_warpperspective_.warpperspectiveoptions.md#src)

## Properties

### `Optional` borderType

• **borderType**? : *BorderTypes*

*Inherited from [WithBorderType](_op_types_.withbordertype.md).[borderType](_op_types_.withbordertype.md#optional-bordertype)*

*Defined in [op/types.ts:34](https://github.com/cancerberoSgx/mirada/blob/d83d69e/ojos/src/op/types.ts#L34)*

border mode used to extrapolate pixels outside of the image, see [BorderTypes]

___

### `Optional` borderValue

• **borderValue**? : *Scalar*

*Inherited from [WithBorderValue](_op_types_.withbordervalue.md).[borderValue](_op_types_.withbordervalue.md#optional-bordervalue)*

*Defined in [op/types.ts:38](https://github.com/cancerberoSgx/mirada/blob/d83d69e/ojos/src/op/types.ts#L38)*

___

### `Optional` dst

• **dst**? : *Mat*

*Inherited from [OperationExecBaseOptions](_op_types_.operationexecbaseoptions.md).[dst](_op_types_.operationexecbaseoptions.md#optional-dst)*

*Defined in [op/types.ts:27](https://github.com/cancerberoSgx/mirada/blob/d83d69e/ojos/src/op/types.ts#L27)*

___

###  inputs

• **inputs**: *Scalar | Mat*

*Defined in [op/warpPerspective.ts:6](https://github.com/cancerberoSgx/mirada/blob/d83d69e/ojos/src/op/warpPerspective.ts#L6)*

___

###  outputs

• **outputs**: *Scalar | Mat*

*Defined in [op/warpPerspective.ts:7](https://github.com/cancerberoSgx/mirada/blob/d83d69e/ojos/src/op/warpPerspective.ts#L7)*

___

### `Optional` size

• **size**? : *Size*

*Defined in [op/warpPerspective.ts:9](https://github.com/cancerberoSgx/mirada/blob/d83d69e/ojos/src/op/warpPerspective.ts#L9)*

___

### `Optional` solveMethod

• **solveMethod**? : *SolvePnPMethod*

*Defined in [op/warpPerspective.ts:8](https://github.com/cancerberoSgx/mirada/blob/d83d69e/ojos/src/op/warpPerspective.ts#L8)*

___

###  src

• **src**: *Mat*

*Inherited from [OperationExecBaseOptions](_op_types_.operationexecbaseoptions.md).[src](_op_types_.operationexecbaseoptions.md#src)*

*Defined in [op/types.ts:26](https://github.com/cancerberoSgx/mirada/blob/d83d69e/ojos/src/op/types.ts#L26)*