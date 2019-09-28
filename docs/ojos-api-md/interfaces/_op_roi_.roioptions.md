[ojos](../README.md) › ["op/roi"](../modules/_op_roi_.md) › [RoiOptions](_op_roi_.roioptions.md)

# Interface: RoiOptions

## Hierarchy

* [OperationExecBaseOptions](_op_types_.operationexecbaseoptions.md)

* [RoiConcreteOptions](_op_roi_.roiconcreteoptions.md)

  ↳ **RoiOptions**

## Index

### Properties

* [dst](_op_roi_.roioptions.md#optional-dst)
* [expr](_op_roi_.roioptions.md#expr)
* [src](_op_roi_.roioptions.md#src)

## Properties

### `Optional` dst

• **dst**? : *Mat*

*Inherited from [OperationExecBaseOptions](_op_types_.operationexecbaseoptions.md).[dst](_op_types_.operationexecbaseoptions.md#optional-dst)*

*Defined in [op/types.ts:50](https://github.com/cancerberoSgx/mirada/blob/3544b58/ojos/src/op/types.ts#L50)*

Output image. If not given it will be created. Note that you can give [src] as output image in which case the input image will be written.

___

###  expr

• **expr**: *Rect*

*Inherited from [RoiConcreteOptions](_op_roi_.roiconcreteoptions.md).[expr](_op_roi_.roiconcreteoptions.md#expr)*

*Defined in [op/roi.ts:10](https://github.com/cancerberoSgx/mirada/blob/3544b58/ojos/src/op/roi.ts#L10)*

___

###  src

• **src**: *Mat*

*Inherited from [OperationExecBaseOptions](_op_types_.operationexecbaseoptions.md).[src](_op_types_.operationexecbaseoptions.md#src)*

*Defined in [op/types.ts:46](https://github.com/cancerberoSgx/mirada/blob/3544b58/ojos/src/op/types.ts#L46)*

Input image.
