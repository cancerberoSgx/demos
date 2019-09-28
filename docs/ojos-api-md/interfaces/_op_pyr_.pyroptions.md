[ojos](../README.md) › ["op/pyr"](../modules/_op_pyr_.md) › [PyrOptions](_op_pyr_.pyroptions.md)

# Interface: PyrOptions

## Hierarchy

* [OperationExecBaseOptions](_op_types_.operationexecbaseoptions.md)

  ↳ [PyrConcreteOptions](_op_pyr_.pyrconcreteoptions.md)

  ↳ **PyrOptions**

## Index

### Properties

* [borderType](_op_pyr_.pyroptions.md#optional-bordertype)
* [dst](_op_pyr_.pyroptions.md#optional-dst)
* [src](_op_pyr_.pyroptions.md#src)
* [type](_op_pyr_.pyroptions.md#type)

## Properties

### `Optional` borderType

• **borderType**? : *BorderTypes*

*Inherited from [WithBorderType](_op_types_.withbordertype.md).[borderType](_op_types_.withbordertype.md#optional-bordertype)*

*Defined in [op/types.ts:57](https://github.com/cancerberoSgx/mirada/blob/3544b58/ojos/src/op/types.ts#L57)*

border mode used to extrapolate pixels outside of the image, see [BorderTypes].

___

### `Optional` dst

• **dst**? : *Mat*

*Inherited from [OperationExecBaseOptions](_op_types_.operationexecbaseoptions.md).[dst](_op_types_.operationexecbaseoptions.md#optional-dst)*

*Defined in [op/types.ts:50](https://github.com/cancerberoSgx/mirada/blob/3544b58/ojos/src/op/types.ts#L50)*

Output image. If not given it will be created. Note that you can give [src] as output image in which case the input image will be written.

___

###  src

• **src**: *Mat*

*Inherited from [OperationExecBaseOptions](_op_types_.operationexecbaseoptions.md).[src](_op_types_.operationexecbaseoptions.md#src)*

*Defined in [op/types.ts:46](https://github.com/cancerberoSgx/mirada/blob/3544b58/ojos/src/op/types.ts#L46)*

Input image.

___

###  type

• **type**: *"up" | "down"*

*Inherited from [PyrConcreteOptions](_op_pyr_.pyrconcreteoptions.md).[type](_op_pyr_.pyrconcreteoptions.md#type)*

*Defined in [op/pyr.ts:12](https://github.com/cancerberoSgx/mirada/blob/3544b58/ojos/src/op/pyr.ts#L12)*

PyrUp or PyrDown.
