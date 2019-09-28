[ojos](../README.md) › ["op/cvtColor"](../modules/_op_cvtcolor_.md) › [CvtColorOptions](_op_cvtcolor_.cvtcoloroptions.md)

# Interface: CvtColorOptions

## Hierarchy

* [OperationExecBaseOptions](_op_types_.operationexecbaseoptions.md)

* [CvtColorConcreteOptions](_op_cvtcolor_.cvtcolorconcreteoptions.md)

  ↳ **CvtColorOptions**

## Index

### Properties

* [code](_op_cvtcolor_.cvtcoloroptions.md#code)
* [dst](_op_cvtcolor_.cvtcoloroptions.md#optional-dst)
* [dstCn](_op_cvtcolor_.cvtcoloroptions.md#optional-dstcn)
* [src](_op_cvtcolor_.cvtcoloroptions.md#src)

## Properties

###  code

• **code**: *ColorConversionCodes*

*Inherited from [CvtColorConcreteOptions](_op_cvtcolor_.cvtcolorconcreteoptions.md).[code](_op_cvtcolor_.cvtcolorconcreteoptions.md#code)*

*Defined in [op/cvtColor.ts:12](https://github.com/cancerberoSgx/mirada/blob/3544b58/ojos/src/op/cvtColor.ts#L12)*

color space conversion code (see ColorConversionCodes).

___

### `Optional` dst

• **dst**? : *Mat*

*Inherited from [OperationExecBaseOptions](_op_types_.operationexecbaseoptions.md).[dst](_op_types_.operationexecbaseoptions.md#optional-dst)*

*Defined in [op/types.ts:50](https://github.com/cancerberoSgx/mirada/blob/3544b58/ojos/src/op/types.ts#L50)*

Output image. If not given it will be created. Note that you can give [src] as output image in which case the input image will be written.

___

### `Optional` dstCn

• **dstCn**? : *undefined | number*

*Inherited from [CvtColorConcreteOptions](_op_cvtcolor_.cvtcolorconcreteoptions.md).[dstCn](_op_cvtcolor_.cvtcolorconcreteoptions.md#optional-dstcn)*

*Defined in [op/cvtColor.ts:16](https://github.com/cancerberoSgx/mirada/blob/3544b58/ojos/src/op/cvtColor.ts#L16)*

number of channels in the destination image; if the parameter is 0, the number of the channels is derived automatically from src and code.

___

###  src

• **src**: *Mat*

*Inherited from [OperationExecBaseOptions](_op_types_.operationexecbaseoptions.md).[src](_op_types_.operationexecbaseoptions.md#src)*

*Defined in [op/types.ts:46](https://github.com/cancerberoSgx/mirada/blob/3544b58/ojos/src/op/types.ts#L46)*

Input image.
