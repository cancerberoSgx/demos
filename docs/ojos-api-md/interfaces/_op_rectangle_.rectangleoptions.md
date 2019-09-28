[ojos](../README.md) › ["op/rectangle"](../modules/_op_rectangle_.md) › [RectangleOptions](_op_rectangle_.rectangleoptions.md)

# Interface: RectangleOptions

## Hierarchy

* [OperationExecBaseOptions](_op_types_.operationexecbaseoptions.md)

  ↳ [RectangleConcreteOptions](_op_rectangle_.rectangleconcreteoptions.md)

  ↳ **RectangleOptions**

## Index

### Properties

* [color](_op_rectangle_.rectangleoptions.md#color)
* [dst](_op_rectangle_.rectangleoptions.md#optional-dst)
* [pt1](_op_rectangle_.rectangleoptions.md#pt1)
* [pt2](_op_rectangle_.rectangleoptions.md#pt2)
* [src](_op_rectangle_.rectangleoptions.md#src)

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

*Inherited from [RectangleConcreteOptions](_op_rectangle_.rectangleconcreteoptions.md).[pt1](_op_rectangle_.rectangleconcreteoptions.md#pt1)*

*Defined in [op/rectangle.ts:13](https://github.com/cancerberoSgx/mirada/blob/3544b58/ojos/src/op/rectangle.ts#L13)*

Vertex of the rectangle.

___

###  pt2

• **pt2**: *Point*

*Inherited from [RectangleConcreteOptions](_op_rectangle_.rectangleconcreteoptions.md).[pt2](_op_rectangle_.rectangleconcreteoptions.md#pt2)*

*Defined in [op/rectangle.ts:17](https://github.com/cancerberoSgx/mirada/blob/3544b58/ojos/src/op/rectangle.ts#L17)*

 Vertex of the rectangle opposite to [pt1].

___

###  src

• **src**: *Mat*

*Inherited from [OperationExecBaseOptions](_op_types_.operationexecbaseoptions.md).[src](_op_types_.operationexecbaseoptions.md#src)*

*Defined in [op/types.ts:46](https://github.com/cancerberoSgx/mirada/blob/3544b58/ojos/src/op/types.ts#L46)*

Input image.
