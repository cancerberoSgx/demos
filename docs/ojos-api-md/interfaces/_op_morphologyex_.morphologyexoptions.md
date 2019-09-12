**[ojos](../README.md)**

[Globals](../README.md) › ["op/morphologyEx"](../modules/_op_morphologyex_.md) › [MorphologyExOptions](_op_morphologyex_.morphologyexoptions.md)

# Interface: MorphologyExOptions

## Hierarchy

* [OperationExecBaseOptions](_op_types_.operationexecbaseoptions.md)

  * [MorphologyExConcreteOptions](_op_morphologyex_.morphologyexconcreteoptions.md)

  * **MorphologyExOptions**

## Index

### Properties

* [anchor](_op_morphologyex_.morphologyexoptions.md#optional-anchor)
* [borderType](_op_morphologyex_.morphologyexoptions.md#optional-bordertype)
* [borderValue](_op_morphologyex_.morphologyexoptions.md#optional-bordervalue)
* [dst](_op_morphologyex_.morphologyexoptions.md#optional-dst)
* [iterations](_op_morphologyex_.morphologyexoptions.md#optional-iterations)
* [kernel](_op_morphologyex_.morphologyexoptions.md#kernel)
* [op](_op_morphologyex_.morphologyexoptions.md#op)
* [src](_op_morphologyex_.morphologyexoptions.md#src)

## Properties

### `Optional` anchor

• **anchor**? : *Point*

*Inherited from [MorphologyExConcreteOptions](_op_morphologyex_.morphologyexconcreteoptions.md).[anchor](_op_morphologyex_.morphologyexconcreteoptions.md#optional-anchor)*

*Defined in [op/morphologyEx.ts:11](https://github.com/cancerberoSgx/mirada/blob/f2ba50d/ojos/src/op/morphologyEx.ts#L11)*

___

### `Optional` borderType

• **borderType**? : *BorderTypes*

*Inherited from [WithBorderType](_op_types_.withbordertype.md).[borderType](_op_types_.withbordertype.md#optional-bordertype)*

*Defined in [op/types.ts:34](https://github.com/cancerberoSgx/mirada/blob/f2ba50d/ojos/src/op/types.ts#L34)*

border mode used to extrapolate pixels outside of the image, see [BorderTypes]

___

### `Optional` borderValue

• **borderValue**? : *Scalar*

*Inherited from [WithBorderValue](_op_types_.withbordervalue.md).[borderValue](_op_types_.withbordervalue.md#optional-bordervalue)*

*Defined in [op/types.ts:38](https://github.com/cancerberoSgx/mirada/blob/f2ba50d/ojos/src/op/types.ts#L38)*

___

### `Optional` dst

• **dst**? : *Mat*

*Inherited from [OperationExecBaseOptions](_op_types_.operationexecbaseoptions.md).[dst](_op_types_.operationexecbaseoptions.md#optional-dst)*

*Defined in [op/types.ts:27](https://github.com/cancerberoSgx/mirada/blob/f2ba50d/ojos/src/op/types.ts#L27)*

___

### `Optional` iterations

• **iterations**? : *undefined | number*

*Inherited from [MorphologyExConcreteOptions](_op_morphologyex_.morphologyexconcreteoptions.md).[iterations](_op_morphologyex_.morphologyexconcreteoptions.md#optional-iterations)*

*Defined in [op/morphologyEx.ts:12](https://github.com/cancerberoSgx/mirada/blob/f2ba50d/ojos/src/op/morphologyEx.ts#L12)*

___

###  kernel

• **kernel**: *Mat*

*Inherited from [MorphologyExConcreteOptions](_op_morphologyex_.morphologyexconcreteoptions.md).[kernel](_op_morphologyex_.morphologyexconcreteoptions.md#kernel)*

*Defined in [op/morphologyEx.ts:10](https://github.com/cancerberoSgx/mirada/blob/f2ba50d/ojos/src/op/morphologyEx.ts#L10)*

___

###  op

• **op**: *MorphTypes*

*Inherited from [MorphologyExConcreteOptions](_op_morphologyex_.morphologyexconcreteoptions.md).[op](_op_morphologyex_.morphologyexconcreteoptions.md#op)*

*Defined in [op/morphologyEx.ts:9](https://github.com/cancerberoSgx/mirada/blob/f2ba50d/ojos/src/op/morphologyEx.ts#L9)*

___

###  src

• **src**: *Mat*

*Inherited from [OperationExecBaseOptions](_op_types_.operationexecbaseoptions.md).[src](_op_types_.operationexecbaseoptions.md#src)*

*Defined in [op/types.ts:26](https://github.com/cancerberoSgx/mirada/blob/f2ba50d/ojos/src/op/types.ts#L26)*