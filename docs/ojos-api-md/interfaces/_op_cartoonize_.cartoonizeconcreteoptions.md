[ojos](../README.md) › ["op/cartoonize"](../modules/_op_cartoonize_.md) › [CartoonizeConcreteOptions](_op_cartoonize_.cartoonizeconcreteoptions.md)

# Interface: CartoonizeConcreteOptions

## Hierarchy

* object

  ↳ **CartoonizeConcreteOptions**

  ↳ [CartoonizeOptions](_op_cartoonize_.cartoonizeoptions.md)

## Index

### Properties

* [blurSize](_op_cartoonize_.cartoonizeconcreteoptions.md#optional-blursize)
* [dirt](_op_cartoonize_.cartoonizeconcreteoptions.md#optional-dirt)
* [downSampleCount](_op_cartoonize_.cartoonizeconcreteoptions.md#optional-downsamplecount)
* [filterColor](_op_cartoonize_.cartoonizeconcreteoptions.md#optional-filtercolor)
* [filterDiameter](_op_cartoonize_.cartoonizeconcreteoptions.md#optional-filterdiameter)
* [filterIterations](_op_cartoonize_.cartoonizeconcreteoptions.md#optional-filteriterations)
* [filterSpace](_op_cartoonize_.cartoonizeconcreteoptions.md#optional-filterspace)

## Properties

### `Optional` blurSize

• **blurSize**? : *undefined | number*

*Defined in [op/cartoonize.ts:33](https://github.com/cancerberoSgx/mirada/blob/3544b58/ojos/src/op/cartoonize.ts#L33)*

kernel size of blur filter. Default 3.

___

### `Optional` dirt

• **dirt**? : *undefined | number*

*Defined in [op/cartoonize.ts:37](https://github.com/cancerberoSgx/mirada/blob/3544b58/ojos/src/op/cartoonize.ts#L37)*

black "dirt" spots - the lower the dirty - default: 2

___

### `Optional` downSampleCount

• **downSampleCount**? : *undefined | number*

*Defined in [op/cartoonize.ts:13](https://github.com/cancerberoSgx/mirada/blob/3544b58/ojos/src/op/cartoonize.ts#L13)*

times the original image is shrink and enlarged (internally using pyrDown and pyrUp) . Default: 2

___

### `Optional` filterColor

• **filterColor**? : *undefined | number*

*Defined in [op/cartoonize.ts:25](https://github.com/cancerberoSgx/mirada/blob/3544b58/ojos/src/op/cartoonize.ts#L25)*

bilateralFilter filterColor option. Default: 9

___

### `Optional` filterDiameter

• **filterDiameter**? : *undefined | number*

*Defined in [op/cartoonize.ts:21](https://github.com/cancerberoSgx/mirada/blob/3544b58/ojos/src/op/cartoonize.ts#L21)*

bilateralFilter filterDiameter option. Default: 9

___

### `Optional` filterIterations

• **filterIterations**? : *undefined | number*

*Defined in [op/cartoonize.ts:17](https://github.com/cancerberoSgx/mirada/blob/3544b58/ojos/src/op/cartoonize.ts#L17)*

number of times bilateralFilter is applied. Default: 20

___

### `Optional` filterSpace

• **filterSpace**? : *undefined | number*

*Defined in [op/cartoonize.ts:29](https://github.com/cancerberoSgx/mirada/blob/3544b58/ojos/src/op/cartoonize.ts#L29)*

bilateralFilter filterSpace option. Default: 7
