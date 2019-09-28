[ojos](../README.md) › ["op/morphologyEx"](../modules/_op_morphologyex_.md) › [MorphologyExOptions](_op_morphologyex_.morphologyexoptions.md)

# Interface: MorphologyExOptions

## Hierarchy

* [OperationExecBaseOptions](_op_types_.operationexecbaseoptions.md)

  ↳ [MorphologyExConcreteOptions](_op_morphologyex_.morphologyexconcreteoptions.md)

  ↳ **MorphologyExOptions**

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

### `Optional` dst

• **dst**? : *Mat*

*Inherited from [OperationExecBaseOptions](_op_types_.operationexecbaseoptions.md).[dst](_op_types_.operationexecbaseoptions.md#optional-dst)*

*Defined in [op/types.ts:50](https://github.com/cancerberoSgx/mirada/blob/3544b58/ojos/src/op/types.ts#L50)*

Output image. If not given it will be created. Note that you can give [src] as output image in which case the input image will be written.

___

### `Optional` iterations

• **iterations**? : *undefined | number*

*Inherited from [MorphologyExConcreteOptions](_op_morphologyex_.morphologyexconcreteoptions.md).[iterations](_op_morphologyex_.morphologyexconcreteoptions.md#optional-iterations)*

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

*Inherited from [MorphologyExConcreteOptions](_op_morphologyex_.morphologyexconcreteoptions.md).[op](_op_morphologyex_.morphologyexconcreteoptions.md#op)*

*Defined in [op/morphologyEx.ts:12](https://github.com/cancerberoSgx/mirada/blob/3544b58/ojos/src/op/morphologyEx.ts#L12)*

Type of a morphological operation.

___

###  src

• **src**: *Mat*

*Inherited from [OperationExecBaseOptions](_op_types_.operationexecbaseoptions.md).[src](_op_types_.operationexecbaseoptions.md#src)*

*Defined in [op/types.ts:46](https://github.com/cancerberoSgx/mirada/blob/3544b58/ojos/src/op/types.ts#L46)*

Input image.
