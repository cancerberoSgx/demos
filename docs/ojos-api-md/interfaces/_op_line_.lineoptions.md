[ojos](../README.md) › ["op/line"](../modules/_op_line_.md) › [LineOptions](_op_line_.lineoptions.md)

# Interface: LineOptions

## Hierarchy

* [OperationExecBaseOptions](_op_types_.operationexecbaseoptions.md)

  ↳ [LineConcreteOptions](_op_line_.lineconcreteoptions.md)

  ↳ **LineOptions**

## Index

### Properties

* [color](_op_line_.lineoptions.md#color)
* [dst](_op_line_.lineoptions.md#optional-dst)
* [pt1](_op_line_.lineoptions.md#pt1)
* [pt2](_op_line_.lineoptions.md#pt2)
* [src](_op_line_.lineoptions.md#src)

## Properties

###  color

• **color**: *Scalar*

*Inherited from [WithColor](_op_types_.withcolor.md).[color](_op_types_.withcolor.md#color)*

*Defined in [op/types.ts:120](https://github.com/cancerberoSgx/mirada/blob/3544b58/ojos/src/op/types.ts#L120)*

___

### `Optional` dst

• **dst**? : *Mat*

*Inherited from [OperationExecBaseOptions](_op_types_.operationexecbaseoptions.md).[dst](_op_types_.operationexecbaseoptions.md#optional-dst)*

*Defined in [op/types.ts:50](https://github.com/cancerberoSgx/mirada/blob/3544b58/ojos/src/op/types.ts#L50)*

Output image. If not given it will be created. Note that you can give [src] as output image in which case the input image will be written.

___

###  pt1

• **pt1**: *Point*

*Inherited from [LineConcreteOptions](_op_line_.lineconcreteoptions.md).[pt1](_op_line_.lineconcreteoptions.md#pt1)*

*Defined in [op/line.ts:13](https://github.com/cancerberoSgx/mirada/blob/3544b58/ojos/src/op/line.ts#L13)*

First point of the line segment.

___

###  pt2

• **pt2**: *Point*

*Inherited from [LineConcreteOptions](_op_line_.lineconcreteoptions.md).[pt2](_op_line_.lineconcreteoptions.md#pt2)*

*Defined in [op/line.ts:17](https://github.com/cancerberoSgx/mirada/blob/3544b58/ojos/src/op/line.ts#L17)*

Second point of the line segment.

___

###  src

• **src**: *Mat*

*Inherited from [OperationExecBaseOptions](_op_types_.operationexecbaseoptions.md).[src](_op_types_.operationexecbaseoptions.md#src)*

*Defined in [op/types.ts:46](https://github.com/cancerberoSgx/mirada/blob/3544b58/ojos/src/op/types.ts#L46)*

Input image.
