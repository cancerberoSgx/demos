**[ojos](../README.md)**

[Globals](../README.md) › ["op/bilateralFilter"](../modules/_op_bilateralfilter_.md) › [BilateralFilterOptions](_op_bilateralfilter_.bilateralfilteroptions.md)

# Interface: BilateralFilterOptions

## Hierarchy

* [OperationExecBaseOptions](_op_types_.operationexecbaseoptions.md)

  * [BilateralFilterConcreteOptions](_op_bilateralfilter_.bilateralfilterconcreteoptions.md)

  * **BilateralFilterOptions**

## Index

### Properties

* [borderType](_op_bilateralfilter_.bilateralfilteroptions.md#optional-bordertype)
* [d](_op_bilateralfilter_.bilateralfilteroptions.md#optional-d)
* [dst](_op_bilateralfilter_.bilateralfilteroptions.md#optional-dst)
* [sigmaColor](_op_bilateralfilter_.bilateralfilteroptions.md#sigmacolor)
* [sigmaSpace](_op_bilateralfilter_.bilateralfilteroptions.md#sigmaspace)
* [src](_op_bilateralfilter_.bilateralfilteroptions.md#src)

## Properties

### `Optional` borderType

• **borderType**? : *BorderTypes*

*Inherited from [WithBorderType](_op_types_.withbordertype.md).[borderType](_op_types_.withbordertype.md#optional-bordertype)*

*Defined in [op/types.ts:34](https://github.com/cancerberoSgx/mirada/blob/d83d69e/ojos/src/op/types.ts#L34)*

border mode used to extrapolate pixels outside of the image, see [BorderTypes]

___

### `Optional` d

• **d**? : *undefined | number*

*Inherited from [BilateralFilterConcreteOptions](_op_bilateralfilter_.bilateralfilterconcreteoptions.md).[d](_op_bilateralfilter_.bilateralfilterconcreteoptions.md#optional-d)*

*Defined in [op/bilateralFilter.ts:11](https://github.com/cancerberoSgx/mirada/blob/d83d69e/ojos/src/op/bilateralFilter.ts#L11)*

Diameter of each pixel neighborhood that is used during filtering. If it is non-positive, it is computed from sigmaSpace.

___

### `Optional` dst

• **dst**? : *Mat*

*Inherited from [OperationExecBaseOptions](_op_types_.operationexecbaseoptions.md).[dst](_op_types_.operationexecbaseoptions.md#optional-dst)*

*Defined in [op/types.ts:27](https://github.com/cancerberoSgx/mirada/blob/d83d69e/ojos/src/op/types.ts#L27)*

___

###  sigmaColor

• **sigmaColor**: *number*

*Inherited from [BilateralFilterConcreteOptions](_op_bilateralfilter_.bilateralfilterconcreteoptions.md).[sigmaColor](_op_bilateralfilter_.bilateralfilterconcreteoptions.md#sigmacolor)*

*Defined in [op/bilateralFilter.ts:15](https://github.com/cancerberoSgx/mirada/blob/d83d69e/ojos/src/op/bilateralFilter.ts#L15)*

Filter sigma in the color space. A larger value of the parameter means that farther colors within the pixel neighborhood (see sigmaSpace) will be mixed together, resulting in larger areas of semi-equal color.

___

###  sigmaSpace

• **sigmaSpace**: *number*

*Inherited from [BilateralFilterConcreteOptions](_op_bilateralfilter_.bilateralfilterconcreteoptions.md).[sigmaSpace](_op_bilateralfilter_.bilateralfilterconcreteoptions.md#sigmaspace)*

*Defined in [op/bilateralFilter.ts:19](https://github.com/cancerberoSgx/mirada/blob/d83d69e/ojos/src/op/bilateralFilter.ts#L19)*

Filter sigma in the coordinate space. A larger value of the parameter means that farther pixels will influence each other as long as their colors are close enough (see sigmaColor ). When d>0, it specifies the neighborhood size regardless of sigmaSpace. Otherwise, d is proportional to sigmaSpace.

___

###  src

• **src**: *Mat*

*Inherited from [OperationExecBaseOptions](_op_types_.operationexecbaseoptions.md).[src](_op_types_.operationexecbaseoptions.md#src)*

*Defined in [op/types.ts:26](https://github.com/cancerberoSgx/mirada/blob/d83d69e/ojos/src/op/types.ts#L26)*