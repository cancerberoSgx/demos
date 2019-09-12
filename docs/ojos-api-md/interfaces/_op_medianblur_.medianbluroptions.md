**[ojos](../README.md)**

[Globals](../README.md) › ["op/medianBlur"](../modules/_op_medianblur_.md) › [MedianBlurOptions](_op_medianblur_.medianbluroptions.md)

# Interface: MedianBlurOptions

## Hierarchy

* [OperationExecBaseOptions](_op_types_.operationexecbaseoptions.md)

  * [MedianBlurConcreteOptions](_op_medianblur_.medianblurconcreteoptions.md)

  * **MedianBlurOptions**

## Index

### Properties

* [borderType](_op_medianblur_.medianbluroptions.md#optional-bordertype)
* [dst](_op_medianblur_.medianbluroptions.md#optional-dst)
* [ksize](_op_medianblur_.medianbluroptions.md#ksize)
* [src](_op_medianblur_.medianbluroptions.md#src)

## Properties

### `Optional` borderType

• **borderType**? : *BorderTypes*

*Inherited from [WithBorderType](_op_types_.withbordertype.md).[borderType](_op_types_.withbordertype.md#optional-bordertype)*

*Defined in [op/types.ts:34](https://github.com/cancerberoSgx/mirada/blob/f2ba50d/ojos/src/op/types.ts#L34)*

border mode used to extrapolate pixels outside of the image, see [BorderTypes]

___

### `Optional` dst

• **dst**? : *Mat*

*Inherited from [OperationExecBaseOptions](_op_types_.operationexecbaseoptions.md).[dst](_op_types_.operationexecbaseoptions.md#optional-dst)*

*Defined in [op/types.ts:27](https://github.com/cancerberoSgx/mirada/blob/f2ba50d/ojos/src/op/types.ts#L27)*

___

###  ksize

• **ksize**: *number*

*Inherited from [MedianBlurConcreteOptions](_op_medianblur_.medianblurconcreteoptions.md).[ksize](_op_medianblur_.medianblurconcreteoptions.md#ksize)*

*Defined in [op/medianBlur.ts:9](https://github.com/cancerberoSgx/mirada/blob/f2ba50d/ojos/src/op/medianBlur.ts#L9)*

___

###  src

• **src**: *Mat*

*Inherited from [OperationExecBaseOptions](_op_types_.operationexecbaseoptions.md).[src](_op_types_.operationexecbaseoptions.md#src)*

*Defined in [op/types.ts:26](https://github.com/cancerberoSgx/mirada/blob/f2ba50d/ojos/src/op/types.ts#L26)*