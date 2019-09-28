[ojos](../README.md) › ["op/types"](../modules/_op_types_.md) › [WithKernel](_op_types_.withkernel.md)

# Interface: WithKernel

## Hierarchy

* [WithKernelAnchor](_op_types_.withkernelanchor.md)

  ↳ **WithKernel**

  ↳ [Filter2DConcreteOptions](_op_filter2d_.filter2dconcreteoptions.md)

  ↳ [MorphologyExConcreteOptions](_op_morphologyex_.morphologyexconcreteoptions.md)

## Index

### Properties

* [anchor](_op_types_.withkernel.md#optional-anchor)
* [kernel](_op_types_.withkernel.md#kernel)

## Properties

### `Optional` anchor

• **anchor**? : *Point*

*Inherited from [WithKernelAnchor](_op_types_.withkernelanchor.md).[anchor](_op_types_.withkernelanchor.md#optional-anchor)*

*Defined in [op/types.ts:92](https://github.com/cancerberoSgx/mirada/blob/3544b58/ojos/src/op/types.ts#L92)*

Anchor position with the kernel. Negative values mean that the anchor is at the kernel center

___

###  kernel

• **kernel**: *Mat*

*Defined in [op/types.ts:85](https://github.com/cancerberoSgx/mirada/blob/3544b58/ojos/src/op/types.ts#L85)*

Structuring element. It can be created using getStructuringElement.
