[ojos](../README.md) › ["op/cartoonize"](../modules/_op_cartoonize_.md) › [CartoonizeOptions](_op_cartoonize_.cartoonizeoptions.md)

# Interface: CartoonizeOptions

## Hierarchy

* [OperationExecBaseOptions](_op_types_.operationexecbaseoptions.md)

  ↳ [CartoonizeConcreteOptions](_op_cartoonize_.cartoonizeconcreteoptions.md)

  ↳ **CartoonizeOptions**

## Index

### Properties

* [blurSize](_op_cartoonize_.cartoonizeoptions.md#optional-blursize)
* [dirt](_op_cartoonize_.cartoonizeoptions.md#optional-dirt)
* [downSampleCount](_op_cartoonize_.cartoonizeoptions.md#optional-downsamplecount)
* [dst](_op_cartoonize_.cartoonizeoptions.md#optional-dst)
* [filterColor](_op_cartoonize_.cartoonizeoptions.md#optional-filtercolor)
* [filterDiameter](_op_cartoonize_.cartoonizeoptions.md#optional-filterdiameter)
* [filterIterations](_op_cartoonize_.cartoonizeoptions.md#optional-filteriterations)
* [filterSpace](_op_cartoonize_.cartoonizeoptions.md#optional-filterspace)
* [src](_op_cartoonize_.cartoonizeoptions.md#src)

## Properties

### `Optional` blurSize

• **blurSize**? : *undefined | number*

*Inherited from [CartoonizeConcreteOptions](_op_cartoonize_.cartoonizeconcreteoptions.md).[blurSize](_op_cartoonize_.cartoonizeconcreteoptions.md#optional-blursize)*

*Defined in [op/cartoonize.ts:33](https://github.com/cancerberoSgx/mirada/blob/3544b58/ojos/src/op/cartoonize.ts#L33)*

kernel size of blur filter. Default 3.

___

### `Optional` dirt

• **dirt**? : *undefined | number*

*Inherited from [CartoonizeConcreteOptions](_op_cartoonize_.cartoonizeconcreteoptions.md).[dirt](_op_cartoonize_.cartoonizeconcreteoptions.md#optional-dirt)*

*Defined in [op/cartoonize.ts:37](https://github.com/cancerberoSgx/mirada/blob/3544b58/ojos/src/op/cartoonize.ts#L37)*

black "dirt" spots - the lower the dirty - default: 2

___

### `Optional` downSampleCount

• **downSampleCount**? : *undefined | number*

*Inherited from [CartoonizeConcreteOptions](_op_cartoonize_.cartoonizeconcreteoptions.md).[downSampleCount](_op_cartoonize_.cartoonizeconcreteoptions.md#optional-downsamplecount)*

*Defined in [op/cartoonize.ts:13](https://github.com/cancerberoSgx/mirada/blob/3544b58/ojos/src/op/cartoonize.ts#L13)*

times the original image is shrink and enlarged (internally using pyrDown and pyrUp) . Default: 2

___

### `Optional` dst

• **dst**? : *Mat*

*Inherited from [OperationExecBaseOptions](_op_types_.operationexecbaseoptions.md).[dst](_op_types_.operationexecbaseoptions.md#optional-dst)*

*Defined in [op/types.ts:50](https://github.com/cancerberoSgx/mirada/blob/3544b58/ojos/src/op/types.ts#L50)*

Output image. If not given it will be created. Note that you can give [src] as output image in which case the input image will be written.

___

### `Optional` filterColor

• **filterColor**? : *undefined | number*

*Inherited from [CartoonizeConcreteOptions](_op_cartoonize_.cartoonizeconcreteoptions.md).[filterColor](_op_cartoonize_.cartoonizeconcreteoptions.md#optional-filtercolor)*

*Defined in [op/cartoonize.ts:25](https://github.com/cancerberoSgx/mirada/blob/3544b58/ojos/src/op/cartoonize.ts#L25)*

bilateralFilter filterColor option. Default: 9

___

### `Optional` filterDiameter

• **filterDiameter**? : *undefined | number*

*Inherited from [CartoonizeConcreteOptions](_op_cartoonize_.cartoonizeconcreteoptions.md).[filterDiameter](_op_cartoonize_.cartoonizeconcreteoptions.md#optional-filterdiameter)*

*Defined in [op/cartoonize.ts:21](https://github.com/cancerberoSgx/mirada/blob/3544b58/ojos/src/op/cartoonize.ts#L21)*

bilateralFilter filterDiameter option. Default: 9

___

### `Optional` filterIterations

• **filterIterations**? : *undefined | number*

*Inherited from [CartoonizeConcreteOptions](_op_cartoonize_.cartoonizeconcreteoptions.md).[filterIterations](_op_cartoonize_.cartoonizeconcreteoptions.md#optional-filteriterations)*

*Defined in [op/cartoonize.ts:17](https://github.com/cancerberoSgx/mirada/blob/3544b58/ojos/src/op/cartoonize.ts#L17)*

number of times bilateralFilter is applied. Default: 20

___

### `Optional` filterSpace

• **filterSpace**? : *undefined | number*

*Inherited from [CartoonizeConcreteOptions](_op_cartoonize_.cartoonizeconcreteoptions.md).[filterSpace](_op_cartoonize_.cartoonizeconcreteoptions.md#optional-filterspace)*

*Defined in [op/cartoonize.ts:29](https://github.com/cancerberoSgx/mirada/blob/3544b58/ojos/src/op/cartoonize.ts#L29)*

bilateralFilter filterSpace option. Default: 7

___

###  src

• **src**: *Mat*

*Inherited from [OperationExecBaseOptions](_op_types_.operationexecbaseoptions.md).[src](_op_types_.operationexecbaseoptions.md#src)*

*Defined in [op/types.ts:46](https://github.com/cancerberoSgx/mirada/blob/3544b58/ojos/src/op/types.ts#L46)*

Input image.
