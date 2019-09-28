[ojos](../README.md) › ["op/gaussianBlur"](../modules/_op_gaussianblur_.md) › [GaussianBlurConcreteOptions](_op_gaussianblur_.gaussianblurconcreteoptions.md)

# Interface: GaussianBlurConcreteOptions

## Hierarchy

* [WithBorderType](_op_types_.withbordertype.md)

* [WithKSize](_op_types_.withksize.md)

  ↳ **GaussianBlurConcreteOptions**

  ↳ [GaussianBlurOptions](_op_gaussianblur_.gaussianbluroptions.md)

## Index

### Properties

* [borderType](_op_gaussianblur_.gaussianblurconcreteoptions.md#optional-bordertype)
* [ksize](_op_gaussianblur_.gaussianblurconcreteoptions.md#ksize)
* [sigmaX](_op_gaussianblur_.gaussianblurconcreteoptions.md#sigmax)
* [sigmaY](_op_gaussianblur_.gaussianblurconcreteoptions.md#optional-sigmay)

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

___

###  sigmaX

• **sigmaX**: *number*

*Defined in [op/gaussianBlur.ts:9](https://github.com/cancerberoSgx/mirada/blob/3544b58/ojos/src/op/gaussianBlur.ts#L9)*

___

### `Optional` sigmaY

• **sigmaY**? : *undefined | number*

*Defined in [op/gaussianBlur.ts:10](https://github.com/cancerberoSgx/mirada/blob/3544b58/ojos/src/op/gaussianBlur.ts#L10)*
