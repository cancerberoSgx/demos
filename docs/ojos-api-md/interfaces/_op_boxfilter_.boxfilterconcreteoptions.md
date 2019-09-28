[ojos](../README.md) › ["op/boxFilter"](../modules/_op_boxfilter_.md) › [BoxFilterConcreteOptions](_op_boxfilter_.boxfilterconcreteoptions.md)

# Interface: BoxFilterConcreteOptions

## Hierarchy

* [WithBorderType](_op_types_.withbordertype.md)

* [WithKSize](_op_types_.withksize.md)

* [WithKernelAnchor](_op_types_.withkernelanchor.md)

* [WithDDepth](_op_types_.withddepth.md)

  ↳ **BoxFilterConcreteOptions**

  ↳ [BoxFilterOptions](_op_boxfilter_.boxfilteroptions.md)

## Index

### Properties

* [anchor](_op_boxfilter_.boxfilterconcreteoptions.md#optional-anchor)
* [borderType](_op_boxfilter_.boxfilterconcreteoptions.md#optional-bordertype)
* [ddepth](_op_boxfilter_.boxfilterconcreteoptions.md#optional-ddepth)
* [ksize](_op_boxfilter_.boxfilterconcreteoptions.md#ksize)
* [normalize](_op_boxfilter_.boxfilterconcreteoptions.md#optional-normalize)

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

###  ksize

• **ksize**: *[SizeRepresentation](../modules/_util_util_.md#sizerepresentation)*

*Inherited from [WithKSize](_op_types_.withksize.md).[ksize](_op_types_.withksize.md#ksize)*

*Defined in [op/types.ts:78](https://github.com/cancerberoSgx/mirada/blob/3544b58/ojos/src/op/types.ts#L78)*

Transformation (blurring) kernel size. In general only odd numbers greater than 2 are accepted.

___

### `Optional` normalize

• **normalize**? : *undefined | false | true*

*Defined in [op/boxFilter.ts:12](https://github.com/cancerberoSgx/mirada/blob/3544b58/ojos/src/op/boxFilter.ts#L12)*

	flag, specifying whether the kernel is normalized by its area or not.
