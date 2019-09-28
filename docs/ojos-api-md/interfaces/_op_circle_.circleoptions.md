[ojos](../README.md) › ["op/circle"](../modules/_op_circle_.md) › [CircleOptions](_op_circle_.circleoptions.md)

# Interface: CircleOptions

## Hierarchy

* [OperationExecBaseOptions](_op_types_.operationexecbaseoptions.md)

  ↳ [CircleConcreteOptions](_op_circle_.circleconcreteoptions.md)

  ↳ **CircleOptions**

## Index

### Properties

* [center](_op_circle_.circleoptions.md#center)
* [color](_op_circle_.circleoptions.md#color)
* [dst](_op_circle_.circleoptions.md#optional-dst)
* [radius](_op_circle_.circleoptions.md#radius)
* [src](_op_circle_.circleoptions.md#src)

## Properties

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

###  radius

• **radius**: *number*

*Inherited from [CircleConcreteOptions](_op_circle_.circleconcreteoptions.md).[radius](_op_circle_.circleconcreteoptions.md#radius)*

*Defined in [op/circle.ts:12](https://github.com/cancerberoSgx/mirada/blob/3544b58/ojos/src/op/circle.ts#L12)*

  Radius of the circle.

___

###  src

• **src**: *Mat*

*Inherited from [OperationExecBaseOptions](_op_types_.operationexecbaseoptions.md).[src](_op_types_.operationexecbaseoptions.md#src)*

*Defined in [op/types.ts:46](https://github.com/cancerberoSgx/mirada/blob/3544b58/ojos/src/op/types.ts#L46)*

Input image.
