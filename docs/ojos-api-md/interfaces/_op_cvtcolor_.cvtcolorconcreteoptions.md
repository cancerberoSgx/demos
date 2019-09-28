[ojos](../README.md) › ["op/cvtColor"](../modules/_op_cvtcolor_.md) › [CvtColorConcreteOptions](_op_cvtcolor_.cvtcolorconcreteoptions.md)

# Interface: CvtColorConcreteOptions

## Hierarchy

* **CvtColorConcreteOptions**

  ↳ [CvtColorOptions](_op_cvtcolor_.cvtcoloroptions.md)

## Index

### Properties

* [code](_op_cvtcolor_.cvtcolorconcreteoptions.md#code)
* [dstCn](_op_cvtcolor_.cvtcolorconcreteoptions.md#optional-dstcn)

## Properties

###  code

• **code**: *ColorConversionCodes*

*Defined in [op/cvtColor.ts:12](https://github.com/cancerberoSgx/mirada/blob/3544b58/ojos/src/op/cvtColor.ts#L12)*

color space conversion code (see ColorConversionCodes).

___

### `Optional` dstCn

• **dstCn**? : *undefined | number*

*Defined in [op/cvtColor.ts:16](https://github.com/cancerberoSgx/mirada/blob/3544b58/ojos/src/op/cvtColor.ts#L16)*

number of channels in the destination image; if the parameter is 0, the number of the channels is derived automatically from src and code.
