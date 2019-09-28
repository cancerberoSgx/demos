[ojos](../README.md) › ["op/floodFill"](../modules/_op_floodfill_.md) › [FloodFillOptions](_op_floodfill_.floodfilloptions.md)

# Interface: FloodFillOptions

## Hierarchy

* [OperationExecBaseOptions](_op_types_.operationexecbaseoptions.md)

  ↳ **FloodFillOptions**

## Index

### Properties

* [connectivity](_op_floodfill_.floodfilloptions.md#optional-connectivity)
* [dst](_op_floodfill_.floodfilloptions.md#optional-dst)
* [lowDiff](_op_floodfill_.floodfilloptions.md#optional-lowdiff)
* [newColorOrImage](_op_floodfill_.floodfilloptions.md#optional-newcolororimage)
* [preprocess](_op_floodfill_.floodfilloptions.md#optional-preprocess)
* [seed](_op_floodfill_.floodfilloptions.md#seed)
* [src](_op_floodfill_.floodfilloptions.md#src)
* [upDiff](_op_floodfill_.floodfilloptions.md#optional-updiff)

## Properties

### `Optional` connectivity

• **connectivity**? : *4 | 8*

*Defined in [op/floodFill.ts:11](https://github.com/cancerberoSgx/mirada/blob/3544b58/ojos/src/op/floodFill.ts#L11)*

___

### `Optional` dst

• **dst**? : *Mat*

*Inherited from [OperationExecBaseOptions](_op_types_.operationexecbaseoptions.md).[dst](_op_types_.operationexecbaseoptions.md#optional-dst)*

*Defined in [op/types.ts:50](https://github.com/cancerberoSgx/mirada/blob/3544b58/ojos/src/op/types.ts#L50)*

Output image. If not given it will be created. Note that you can give [src] as output image in which case the input image will be written.

___

### `Optional` lowDiff

• **lowDiff**? : *Scalar | number[]*

*Defined in [op/floodFill.ts:12](https://github.com/cancerberoSgx/mirada/blob/3544b58/ojos/src/op/floodFill.ts#L12)*

___

### `Optional` newColorOrImage

• **newColorOrImage**? : *Scalar | number[] | Mat*

*Defined in [op/floodFill.ts:10](https://github.com/cancerberoSgx/mirada/blob/3544b58/ojos/src/op/floodFill.ts#L10)*

___

### `Optional` preprocess

• **preprocess**? : *[FloodFillPreprocess](../modules/_op_floodfill_.md#floodfillpreprocess)[]*

*Defined in [op/floodFill.ts:9](https://github.com/cancerberoSgx/mirada/blob/3544b58/ojos/src/op/floodFill.ts#L9)*

___

###  seed

• **seed**: *Point*

*Defined in [op/floodFill.ts:8](https://github.com/cancerberoSgx/mirada/blob/3544b58/ojos/src/op/floodFill.ts#L8)*

___

###  src

• **src**: *Mat*

*Inherited from [OperationExecBaseOptions](_op_types_.operationexecbaseoptions.md).[src](_op_types_.operationexecbaseoptions.md#src)*

*Defined in [op/types.ts:46](https://github.com/cancerberoSgx/mirada/blob/3544b58/ojos/src/op/types.ts#L46)*

Input image.

___

### `Optional` upDiff

• **upDiff**? : *Scalar | number[]*

*Defined in [op/floodFill.ts:13](https://github.com/cancerberoSgx/mirada/blob/3544b58/ojos/src/op/floodFill.ts#L13)*
