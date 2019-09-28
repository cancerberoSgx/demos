[ojos](../README.md) › ["op/filter2D"](../modules/_op_filter2d_.md) › [Filter2DOptions](_op_filter2d_.filter2doptions.md)

# Interface: Filter2DOptions

## Hierarchy

* [OperationExecBaseOptions](_op_types_.operationexecbaseoptions.md)

  ↳ [Filter2DConcreteOptions](_op_filter2d_.filter2dconcreteoptions.md)

  ↳ **Filter2DOptions**

## Index

### Properties

* [anchor](_op_filter2d_.filter2doptions.md#optional-anchor)
* [borderType](_op_filter2d_.filter2doptions.md#optional-bordertype)
* [ddepth](_op_filter2d_.filter2doptions.md#optional-ddepth)
* [delta](_op_filter2d_.filter2doptions.md#optional-delta)
* [dst](_op_filter2d_.filter2doptions.md#optional-dst)
* [kernel](_op_filter2d_.filter2doptions.md#kernel)
* [src](_op_filter2d_.filter2doptions.md#src)

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

*Inherited from [Filter2DConcreteOptions](_op_filter2d_.filter2dconcreteoptions.md).[delta](_op_filter2d_.filter2dconcreteoptions.md#optional-delta)*

*Defined in [op/filter2D.ts:11](https://github.com/cancerberoSgx/mirada/blob/3544b58/ojos/src/op/filter2D.ts#L11)*

optional value added to the filtered pixels before storing them in dst.

___

### `Optional` dst

• **dst**? : *Mat*

*Inherited from [OperationExecBaseOptions](_op_types_.operationexecbaseoptions.md).[dst](_op_types_.operationexecbaseoptions.md#optional-dst)*

*Defined in [op/types.ts:50](https://github.com/cancerberoSgx/mirada/blob/3544b58/ojos/src/op/types.ts#L50)*

Output image. If not given it will be created. Note that you can give [src] as output image in which case the input image will be written.

___

###  kernel

• **kernel**: *Mat*

*Inherited from [WithKernel](_op_types_.withkernel.md).[kernel](_op_types_.withkernel.md#kernel)*

*Defined in [op/types.ts:85](https://github.com/cancerberoSgx/mirada/blob/3544b58/ojos/src/op/types.ts#L85)*

Structuring element. It can be created using getStructuringElement.

___

###  src

• **src**: *Mat*

*Inherited from [OperationExecBaseOptions](_op_types_.operationexecbaseoptions.md).[src](_op_types_.operationexecbaseoptions.md#src)*

*Defined in [op/types.ts:46](https://github.com/cancerberoSgx/mirada/blob/3544b58/ojos/src/op/types.ts#L46)*

Input image.
