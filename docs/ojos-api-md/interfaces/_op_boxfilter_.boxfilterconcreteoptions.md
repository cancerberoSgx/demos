**[ojos](../README.md)**

[Globals](../README.md) › ["op/boxFilter"](../modules/_op_boxfilter_.md) › [BoxFilterConcreteOptions](_op_boxfilter_.boxfilterconcreteoptions.md)

# Interface: BoxFilterConcreteOptions

## Hierarchy

* [WithBorderType](_op_types_.withbordertype.md)

* [WithKSize](_op_types_.withksize.md)

  * **BoxFilterConcreteOptions**

  * [BoxFilterOptions](_op_boxfilter_.boxfilteroptions.md)

## Index

### Properties

* [anchor](_op_boxfilter_.boxfilterconcreteoptions.md#optional-anchor)
* [borderType](_op_boxfilter_.boxfilterconcreteoptions.md#optional-bordertype)
* [depth](_op_boxfilter_.boxfilterconcreteoptions.md#optional-depth)
* [ksize](_op_boxfilter_.boxfilterconcreteoptions.md#ksize)
* [normalize](_op_boxfilter_.boxfilterconcreteoptions.md#optional-normalize)

## Properties

### `Optional` anchor

• **anchor**? : *Point*

*Defined in [op/boxFilter.ts:16](https://github.com/cancerberoSgx/mirada/blob/d83d69e/ojos/src/op/boxFilter.ts#L16)*

anchor point; default value Point(-1,-1) means that the anchor is at the kernel center

___

### `Optional` borderType

• **borderType**? : *BorderTypes*

*Inherited from [WithBorderType](_op_types_.withbordertype.md).[borderType](_op_types_.withbordertype.md#optional-bordertype)*

*Defined in [op/types.ts:34](https://github.com/cancerberoSgx/mirada/blob/d83d69e/ojos/src/op/types.ts#L34)*

border mode used to extrapolate pixels outside of the image, see [BorderTypes]

___

### `Optional` depth

• **depth**? : *undefined | number*

*Defined in [op/boxFilter.ts:12](https://github.com/cancerberoSgx/mirada/blob/d83d69e/ojos/src/op/boxFilter.ts#L12)*

the output image dept. (-1 to use src.depth()).

___

###  ksize

• **ksize**: *Size*

*Inherited from [WithKSize](_op_types_.withksize.md).[ksize](_op_types_.withksize.md#ksize)*

*Defined in [op/types.ts:45](https://github.com/cancerberoSgx/mirada/blob/d83d69e/ojos/src/op/types.ts#L45)*

blurring kernel size. In general only odd numbers greater than 2 are accepted

___

### `Optional` normalize

• **normalize**? : *undefined | false | true*

*Defined in [op/boxFilter.ts:20](https://github.com/cancerberoSgx/mirada/blob/d83d69e/ojos/src/op/boxFilter.ts#L20)*

	flag, specifying whether the kernel is normalized by its area or not.