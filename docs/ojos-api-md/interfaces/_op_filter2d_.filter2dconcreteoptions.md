[ojos](../README.md) › ["op/filter2D"](../modules/_op_filter2d_.md) › [Filter2DConcreteOptions](_op_filter2d_.filter2dconcreteoptions.md)

# Interface: Filter2DConcreteOptions

## Hierarchy

* [WithBorderType](_op_types_.withbordertype.md)

  ↳ [WithKernel](_op_types_.withkernel.md)

* [WithDDepth](_op_types_.withddepth.md)

  ↳ **Filter2DConcreteOptions**

  ↳ [Filter2DOptions](_op_filter2d_.filter2doptions.md)

## Index

### Properties

* [anchor](_op_filter2d_.filter2dconcreteoptions.md#optional-anchor)
* [borderType](_op_filter2d_.filter2dconcreteoptions.md#optional-bordertype)
* [ddepth](_op_filter2d_.filter2dconcreteoptions.md#optional-ddepth)
* [delta](_op_filter2d_.filter2dconcreteoptions.md#optional-delta)
* [kernel](_op_filter2d_.filter2dconcreteoptions.md#kernel)

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

### `Optional` ddepth

• **ddepth**? : *undefined | number*

*Inherited from [WithDDepth](_op_types_.withddepth.md).[ddepth](_op_types_.withddepth.md#optional-ddepth)*

*Defined in [op/types.ts:99](https://github.com/cancerberoSgx/mirada/blob/3544b58/ojos/src/op/types.ts#L99)*

the output image dept. (-1 to use src.depth()).

___

### `Optional` delta

• **delta**? : *undefined | number*

*Defined in [op/filter2D.ts:11](https://github.com/cancerberoSgx/mirada/blob/3544b58/ojos/src/op/filter2D.ts#L11)*

optional value added to the filtered pixels before storing them in dst.

___

###  kernel

• **kernel**: *Mat*

*Inherited from [WithKernel](_op_types_.withkernel.md).[kernel](_op_types_.withkernel.md#kernel)*

*Defined in [op/types.ts:85](https://github.com/cancerberoSgx/mirada/blob/3544b58/ojos/src/op/types.ts#L85)*

Structuring element. It can be created using getStructuringElement.
