**[ojos](../README.md)**

[Globals](../README.md) › ["op/gaussianBlur"](../modules/_op_gaussianblur_.md) › [GaussianBlurOptions](_op_gaussianblur_.gaussianbluroptions.md)

# Interface: GaussianBlurOptions

## Hierarchy

* [OperationExecBaseOptions](_op_types_.operationexecbaseoptions.md)

  * [GaussianBlurConcreteOptions](_op_gaussianblur_.gaussianblurconcreteoptions.md)

  * **GaussianBlurOptions**

## Index

### Properties

* [borderType](_op_gaussianblur_.gaussianbluroptions.md#optional-bordertype)
* [dst](_op_gaussianblur_.gaussianbluroptions.md#optional-dst)
* [ksize](_op_gaussianblur_.gaussianbluroptions.md#ksize)
* [sigmaX](_op_gaussianblur_.gaussianbluroptions.md#sigmax)
* [sigmaY](_op_gaussianblur_.gaussianbluroptions.md#optional-sigmay)
* [src](_op_gaussianblur_.gaussianbluroptions.md#src)

## Properties

### `Optional` borderType

• **borderType**? : *BorderTypes*

*Inherited from [WithBorderType](_op_types_.withbordertype.md).[borderType](_op_types_.withbordertype.md#optional-bordertype)*

*Defined in [op/types.ts:34](https://github.com/cancerberoSgx/mirada/blob/d83d69e/ojos/src/op/types.ts#L34)*

border mode used to extrapolate pixels outside of the image, see [BorderTypes]

___

### `Optional` dst

• **dst**? : *Mat*

*Inherited from [OperationExecBaseOptions](_op_types_.operationexecbaseoptions.md).[dst](_op_types_.operationexecbaseoptions.md#optional-dst)*

*Defined in [op/types.ts:27](https://github.com/cancerberoSgx/mirada/blob/d83d69e/ojos/src/op/types.ts#L27)*

___

###  ksize

• **ksize**: *Size*

*Inherited from [WithKSize](_op_types_.withksize.md).[ksize](_op_types_.withksize.md#ksize)*

*Defined in [op/types.ts:45](https://github.com/cancerberoSgx/mirada/blob/d83d69e/ojos/src/op/types.ts#L45)*

blurring kernel size. In general only odd numbers greater than 2 are accepted

___

###  sigmaX

• **sigmaX**: *number*

*Inherited from [GaussianBlurConcreteOptions](_op_gaussianblur_.gaussianblurconcreteoptions.md).[sigmaX](_op_gaussianblur_.gaussianblurconcreteoptions.md#sigmax)*

*Defined in [op/gaussianBlur.ts:8](https://github.com/cancerberoSgx/mirada/blob/d83d69e/ojos/src/op/gaussianBlur.ts#L8)*

___

### `Optional` sigmaY

• **sigmaY**? : *undefined | number*

*Inherited from [GaussianBlurConcreteOptions](_op_gaussianblur_.gaussianblurconcreteoptions.md).[sigmaY](_op_gaussianblur_.gaussianblurconcreteoptions.md#optional-sigmay)*

*Defined in [op/gaussianBlur.ts:9](https://github.com/cancerberoSgx/mirada/blob/d83d69e/ojos/src/op/gaussianBlur.ts#L9)*

___

###  src

• **src**: *Mat*

*Inherited from [OperationExecBaseOptions](_op_types_.operationexecbaseoptions.md).[src](_op_types_.operationexecbaseoptions.md#src)*

*Defined in [op/types.ts:26](https://github.com/cancerberoSgx/mirada/blob/d83d69e/ojos/src/op/types.ts#L26)*