[ojos](../README.md) › ["op/replaceColor"](../modules/_op_replacecolor_.md) › [ReplaceColorOptions](_op_replacecolor_.replacecoloroptions.md)

# Interface: ReplaceColorOptions

## Hierarchy

* [OperationExecBaseOptions](_op_types_.operationexecbaseoptions.md)

  ↳ **ReplaceColorOptions**

## Index

### Properties

* [dst](_op_replacecolor_.replacecoloroptions.md#optional-dst)
* [highColor](_op_replacecolor_.replacecoloroptions.md#highcolor)
* [lowColor](_op_replacecolor_.replacecoloroptions.md#lowcolor)
* [newColorOrImage](_op_replacecolor_.replacecoloroptions.md#newcolororimage)
* [removeRest](_op_replacecolor_.replacecoloroptions.md#optional-removerest)
* [src](_op_replacecolor_.replacecoloroptions.md#src)

## Properties

### `Optional` dst

• **dst**? : *Mat*

*Inherited from [OperationExecBaseOptions](_op_types_.operationexecbaseoptions.md).[dst](_op_types_.operationexecbaseoptions.md#optional-dst)*

*Defined in [op/types.ts:50](https://github.com/cancerberoSgx/mirada/blob/3544b58/ojos/src/op/types.ts#L50)*

Output image. If not given it will be created. Note that you can give [src] as output image in which case the input image will be written.

___

###  highColor

• **highColor**: *Scalar | number[]*

*Defined in [op/replaceColor.ts:13](https://github.com/cancerberoSgx/mirada/blob/3544b58/ojos/src/op/replaceColor.ts#L13)*

Inclusive upper boundary array or a scalar.

___

###  lowColor

• **lowColor**: *Scalar | number[]*

*Defined in [op/replaceColor.ts:9](https://github.com/cancerberoSgx/mirada/blob/3544b58/ojos/src/op/replaceColor.ts#L9)*

inclusive lower boundary array or a scalar.

___

###  newColorOrImage

• **newColorOrImage**: *Scalar | number[] | Mat*

*Defined in [op/replaceColor.ts:17](https://github.com/cancerberoSgx/mirada/blob/3544b58/ojos/src/op/replaceColor.ts#L17)*

The color or image to write in those pixels within given boundaries.

___

### `Optional` removeRest

• **removeRest**? : *undefined | false | true*

*Defined in [op/replaceColor.ts:21](https://github.com/cancerberoSgx/mirada/blob/3544b58/ojos/src/op/replaceColor.ts#L21)*

if true the output will only contain the replaced color and the rest (that didn't matched) will be 0,0,0,0

___

###  src

• **src**: *Mat*

*Inherited from [OperationExecBaseOptions](_op_types_.operationexecbaseoptions.md).[src](_op_types_.operationexecbaseoptions.md#src)*

*Defined in [op/types.ts:46](https://github.com/cancerberoSgx/mirada/blob/3544b58/ojos/src/op/types.ts#L46)*

Input image.
