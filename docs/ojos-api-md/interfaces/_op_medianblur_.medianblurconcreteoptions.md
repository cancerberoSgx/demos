[ojos](../README.md) › ["op/medianBlur"](../modules/_op_medianblur_.md) › [MedianBlurConcreteOptions](_op_medianblur_.medianblurconcreteoptions.md)

# Interface: MedianBlurConcreteOptions

## Hierarchy

* [WithBorderType](_op_types_.withbordertype.md)

* [WithKSize](_op_types_.withksize.md)

  ↳ **MedianBlurConcreteOptions**

  ↳ [MedianBlurOptions](_op_medianblur_.medianbluroptions.md)

## Index

### Properties

* [borderType](_op_medianblur_.medianblurconcreteoptions.md#optional-bordertype)
* [ksize](_op_medianblur_.medianblurconcreteoptions.md#ksize)

## Properties

### `Optional` borderType

• **borderType**? : *BorderTypes*

*Inherited from [WithBorderType](_op_types_.withbordertype.md).[borderType](_op_types_.withbordertype.md#optional-bordertype)*

*Defined in [op/types.ts:57](https://github.com/cancerberoSgx/mirada/blob/3544b58/ojos/src/op/types.ts#L57)*

border mode used to extrapolate pixels outside of the image, see [BorderTypes].

___

###  ksize

• **ksize**: *[SizeRepresentation](../modules/_util_util_.md#sizerepresentation)*

*Inherited from [WithKSize](_op_types_.withksize.md).[ksize](_op_types_.withksize.md#ksize)*

*Defined in [op/types.ts:78](https://github.com/cancerberoSgx/mirada/blob/3544b58/ojos/src/op/types.ts#L78)*

Transformation (blurring) kernel size. In general only odd numbers greater than 2 are accepted.
