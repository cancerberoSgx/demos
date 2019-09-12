**[ojos](../README.md)**

[Globals](../README.md) › ["op/replaceColor"](../modules/_op_replacecolor_.md) › [ReplaceColorOptions](_op_replacecolor_.replacecoloroptions.md)

# Interface: ReplaceColorOptions

## Hierarchy

* [OperationExecBaseOptions](_op_types_.operationexecbaseoptions.md)

  * **ReplaceColorOptions**

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

*Defined in [op/types.ts:27](https://github.com/cancerberoSgx/mirada/blob/f2ba50d/ojos/src/op/types.ts#L27)*

___

###  highColor

• **highColor**: *Scalar | number[]*

*Defined in [op/replaceColor.ts:7](https://github.com/cancerberoSgx/mirada/blob/f2ba50d/ojos/src/op/replaceColor.ts#L7)*

___

###  lowColor

• **lowColor**: *Scalar | number[]*

*Defined in [op/replaceColor.ts:6](https://github.com/cancerberoSgx/mirada/blob/f2ba50d/ojos/src/op/replaceColor.ts#L6)*

___

###  newColorOrImage

• **newColorOrImage**: *Scalar | number[] | Mat*

*Defined in [op/replaceColor.ts:8](https://github.com/cancerberoSgx/mirada/blob/f2ba50d/ojos/src/op/replaceColor.ts#L8)*

___

### `Optional` removeRest

• **removeRest**? : *undefined | false | true*

*Defined in [op/replaceColor.ts:12](https://github.com/cancerberoSgx/mirada/blob/f2ba50d/ojos/src/op/replaceColor.ts#L12)*

if true the output will only contain the replaced color and the rest (that didn't matched) will be 0,0,0,0

___

###  src

• **src**: *Mat*

*Inherited from [OperationExecBaseOptions](_op_types_.operationexecbaseoptions.md).[src](_op_types_.operationexecbaseoptions.md#src)*

*Defined in [op/types.ts:26](https://github.com/cancerberoSgx/mirada/blob/f2ba50d/ojos/src/op/types.ts#L26)*