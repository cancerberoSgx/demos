**[ojos](../README.md)**

[Globals](../README.md) › ["op/boxFilter"](../modules/_op_boxfilter_.md) › [BoxFilterOptions](_op_boxfilter_.boxfilteroptions.md)

# Interface: BoxFilterOptions

## Hierarchy

* [OperationExecBaseOptions](_op_types_.operationexecbaseoptions.md)

  * [BoxFilterConcreteOptions](_op_boxfilter_.boxfilterconcreteoptions.md)

  * **BoxFilterOptions**

## Index

### Properties

* [anchor](_op_boxfilter_.boxfilteroptions.md#optional-anchor)
* [borderType](_op_boxfilter_.boxfilteroptions.md#optional-bordertype)
* [depth](_op_boxfilter_.boxfilteroptions.md#optional-depth)
* [dst](_op_boxfilter_.boxfilteroptions.md#optional-dst)
* [ksize](_op_boxfilter_.boxfilteroptions.md#ksize)
* [normalize](_op_boxfilter_.boxfilteroptions.md#optional-normalize)
* [src](_op_boxfilter_.boxfilteroptions.md#src)

## Properties

### `Optional` anchor

• **anchor**? : *Point*

*Inherited from [BoxFilterConcreteOptions](_op_boxfilter_.boxfilterconcreteoptions.md).[anchor](_op_boxfilter_.boxfilterconcreteoptions.md#optional-anchor)*

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

*Inherited from [BoxFilterConcreteOptions](_op_boxfilter_.boxfilterconcreteoptions.md).[depth](_op_boxfilter_.boxfilterconcreteoptions.md#optional-depth)*

*Defined in [op/boxFilter.ts:12](https://github.com/cancerberoSgx/mirada/blob/d83d69e/ojos/src/op/boxFilter.ts#L12)*

the output image dept. (-1 to use src.depth()).

___

### `Optional` dst

• **dst**? : *Mat*

*Inherited from [OperationExecBaseOptions](_op_types_.operationexecbaseoptions.md).[dst](_op_types_.operationexecbaseoptions.md#optional-dst)*

*Defined in [op/types.ts:27](https://github.com/cancerberoSgx/mirada/blob/d83d69e/ojos/src/op/types.ts#L27)*

___

###  ksize

• **ksize**: *Size*

*Inherited from [WithKSize](_op_types_.withksize.md).[ksize](_op_types_.withksize.md#ksize)*

*Defined in [op/types.ts:45](https://github.com/cancerberoSgx/mirada/blob/d83d69e/ojos/src/op/types.ts#L45)*

blurring kernel size. In general only odd numbers greater than 2 are accepted

___

### `Optional` normalize

• **normalize**? : *undefined | false | true*

*Inherited from [BoxFilterConcreteOptions](_op_boxfilter_.boxfilterconcreteoptions.md).[normalize](_op_boxfilter_.boxfilterconcreteoptions.md#optional-normalize)*

*Defined in [op/boxFilter.ts:20](https://github.com/cancerberoSgx/mirada/blob/d83d69e/ojos/src/op/boxFilter.ts#L20)*

	flag, specifying whether the kernel is normalized by its area or not.

___

###  src

• **src**: *Mat*

*Inherited from [OperationExecBaseOptions](_op_types_.operationexecbaseoptions.md).[src](_op_types_.operationexecbaseoptions.md#src)*

*Defined in [op/types.ts:26](https://github.com/cancerberoSgx/mirada/blob/d83d69e/ojos/src/op/types.ts#L26)*