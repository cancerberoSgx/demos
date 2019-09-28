[ojos](../README.md) › ["op/morphologyEx"](../modules/_op_morphologyex_.md) › [MorphologyExConcreteOptions](_op_morphologyex_.morphologyexconcreteoptions.md)

# Interface: MorphologyExConcreteOptions

## Hierarchy

* [WithBorderType](_op_types_.withbordertype.md)

* [WithBorderValue](_op_types_.withbordervalue.md)

  ↳ [WithKernel](_op_types_.withkernel.md)

  ↳ **MorphologyExConcreteOptions**

  ↳ [MorphologyExOptions](_op_morphologyex_.morphologyexoptions.md)

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

*Inherited from [WithKernelAnchor](_op_types_.withkernelanchor.md).[anchor](_op_types_.withkernelanchor.md#optional-anchor)*

*Defined in [op/types.ts:92](https://github.com/cancerberoSgx/mirada/blob/3544b58/ojos/src/op/types.ts#L92)*

Anchor position with the kernel. Negative values mean that the anchor is at the kernel center

___

### `Optional` borderType

• **borderType**? : *BorderTypes*

*Inherited from [WithBorderType](_op_types_.withbordertype.md).[borderType](_op_types_.withbordertype.md#optional-bordertype)*

*Defined in [op/types.ts:57](https://github.com/cancerberoSgx/mirada/blob/3544b58/ojos/src/op/types.ts#L57)*

border mode used to extrapolate pixels outside of the image, see [BorderTypes].

___

### `Optional` borderValue

• **borderValue**? : *Scalar*

*Inherited from [WithBorderValue](_op_types_.withbordervalue.md).[borderValue](_op_types_.withbordervalue.md#optional-bordervalue)*

*Defined in [op/types.ts:64](https://github.com/cancerberoSgx/mirada/blob/3544b58/ojos/src/op/types.ts#L64)*

The color of the border.

___

### `Optional` iterations

• **iterations**? : *undefined | number*

*Defined in [op/morphologyEx.ts:16](https://github.com/cancerberoSgx/mirada/blob/3544b58/ojos/src/op/morphologyEx.ts#L16)*

The number of iterations is the number of times erosion or dilatation operation will be applied. For instance, an opening operation ([MORPH_OPEN]) with two iterations is equivalent to apply successively: erode -> erode -> dilate -> dilate (and not erode -> dilate -> erode -> dilate). By default 1.

___

###  kernel

• **kernel**: *Mat*

*Inherited from [WithKernel](_op_types_.withkernel.md).[kernel](_op_types_.withkernel.md#kernel)*

*Defined in [op/types.ts:85](https://github.com/cancerberoSgx/mirada/blob/3544b58/ojos/src/op/types.ts#L85)*

Structuring element. It can be created using getStructuringElement.

___

###  op

• **op**: *MorphTypes*

*Defined in [op/morphologyEx.ts:12](https://github.com/cancerberoSgx/mirada/blob/3544b58/ojos/src/op/morphologyEx.ts#L12)*

Type of a morphological operation.
