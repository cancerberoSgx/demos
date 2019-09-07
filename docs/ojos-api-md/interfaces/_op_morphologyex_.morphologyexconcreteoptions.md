**[ojos](../README.md)**

[Globals](../README.md) › ["op/morphologyEx"](../modules/_op_morphologyex_.md) › [MorphologyExConcreteOptions](_op_morphologyex_.morphologyexconcreteoptions.md)

# Interface: MorphologyExConcreteOptions

## Hierarchy

* [WithBorderType](_op_types_.withbordertype.md)

* [WithBorderValue](_op_types_.withbordervalue.md)

  * **MorphologyExConcreteOptions**

  * [MorphologyExOptions](_op_morphologyex_.morphologyexoptions.md)

## Index

### Properties

* [anchor](_op_morphologyex_.morphologyexconcreteoptions.md#optional-anchor)
* [borderType](_op_morphologyex_.morphologyexconcreteoptions.md#optional-bordertype)
* [borderValue](_op_morphologyex_.morphologyexconcreteoptions.md#optional-bordervalue)
* [iterations](_op_morphologyex_.morphologyexconcreteoptions.md#optional-iterations)
* [kernel](_op_morphologyex_.morphologyexconcreteoptions.md#kernel)
* [op](_op_morphologyex_.morphologyexconcreteoptions.md#op)

## Properties

### `Optional` anchor

• **anchor**? : *Point*

*Defined in [op/morphologyEx.ts:11](https://github.com/cancerberoSgx/mirada/blob/d83d69e/ojos/src/op/morphologyEx.ts#L11)*

___

### `Optional` borderType

• **borderType**? : *BorderTypes*

*Inherited from [WithBorderType](_op_types_.withbordertype.md).[borderType](_op_types_.withbordertype.md#optional-bordertype)*

*Defined in [op/types.ts:34](https://github.com/cancerberoSgx/mirada/blob/d83d69e/ojos/src/op/types.ts#L34)*

border mode used to extrapolate pixels outside of the image, see [BorderTypes]

___

### `Optional` borderValue

• **borderValue**? : *Scalar*

*Inherited from [WithBorderValue](_op_types_.withbordervalue.md).[borderValue](_op_types_.withbordervalue.md#optional-bordervalue)*

*Defined in [op/types.ts:38](https://github.com/cancerberoSgx/mirada/blob/d83d69e/ojos/src/op/types.ts#L38)*

___

### `Optional` iterations

• **iterations**? : *undefined | number*

*Defined in [op/morphologyEx.ts:12](https://github.com/cancerberoSgx/mirada/blob/d83d69e/ojos/src/op/morphologyEx.ts#L12)*

___

###  kernel

• **kernel**: *Mat*

*Defined in [op/morphologyEx.ts:10](https://github.com/cancerberoSgx/mirada/blob/d83d69e/ojos/src/op/morphologyEx.ts#L10)*

___

###  op

• **op**: *MorphTypes*

*Defined in [op/morphologyEx.ts:9](https://github.com/cancerberoSgx/mirada/blob/d83d69e/ojos/src/op/morphologyEx.ts#L9)*