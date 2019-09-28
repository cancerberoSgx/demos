[ojos](../README.md) › ["op/ellipse"](../modules/_op_ellipse_.md) › [EllipseOptions](_op_ellipse_.ellipseoptions.md)

# Interface: EllipseOptions

## Hierarchy

* [OperationExecBaseOptions](_op_types_.operationexecbaseoptions.md)

  ↳ [EllipseConcreteOptions](_op_ellipse_.ellipseconcreteoptions.md)

  ↳ **EllipseOptions**

## Index

### Properties

* [angle](_op_ellipse_.ellipseoptions.md#angle)
* [center](_op_ellipse_.ellipseoptions.md#center)
* [color](_op_ellipse_.ellipseoptions.md#color)
* [dst](_op_ellipse_.ellipseoptions.md#optional-dst)
* [size](_op_ellipse_.ellipseoptions.md#size)
* [src](_op_ellipse_.ellipseoptions.md#src)

## Properties

###  angle

• **angle**: *number*

*Inherited from [EllipseConcreteOptions](_op_ellipse_.ellipseconcreteoptions.md).[angle](_op_ellipse_.ellipseconcreteoptions.md#angle)*

*Defined in [op/ellipse.ts:12](https://github.com/cancerberoSgx/mirada/blob/3544b58/ojos/src/op/ellipse.ts#L12)*

Ellipse angle in degrees.

___

###  center

• **center**: *Point*

*Inherited from [WithCenter](_op_types_.withcenter.md).[center](_op_types_.withcenter.md#center)*

*Defined in [op/types.ts:141](https://github.com/cancerberoSgx/mirada/blob/3544b58/ojos/src/op/types.ts#L141)*

Shape's center coordinates.

___

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

###  size

• **size**: *Size*

*Inherited from [WithSize](_op_types_.withsize.md).[size](_op_types_.withsize.md#size)*

*Defined in [op/types.ts:71](https://github.com/cancerberoSgx/mirada/blob/3544b58/ojos/src/op/types.ts#L71)*

Output image or shape size.

___

###  src

• **src**: *Mat*

*Inherited from [OperationExecBaseOptions](_op_types_.operationexecbaseoptions.md).[src](_op_types_.operationexecbaseoptions.md#src)*

*Defined in [op/types.ts:46](https://github.com/cancerberoSgx/mirada/blob/3544b58/ojos/src/op/types.ts#L46)*

Input image.
