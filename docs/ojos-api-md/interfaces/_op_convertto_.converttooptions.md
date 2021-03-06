[ojos](../README.md) › ["op/convertTo"](../modules/_op_convertto_.md) › [ConvertToOptions](_op_convertto_.converttooptions.md)

# Interface: ConvertToOptions

## Hierarchy

* [OperationExecBaseOptions](_op_types_.operationexecbaseoptions.md)

* [ConvertToConcreteOptions](_op_convertto_.converttoconcreteoptions.md)

  ↳ **ConvertToOptions**

## Index

### Properties

* [alpha](_op_convertto_.converttooptions.md#optional-alpha)
* [beta](_op_convertto_.converttooptions.md#optional-beta)
* [dst](_op_convertto_.converttooptions.md#optional-dst)
* [dtype](_op_convertto_.converttooptions.md#optional-dtype)
* [src](_op_convertto_.converttooptions.md#src)

## Properties

### `Optional` alpha

• **alpha**? : *undefined | number*

*Inherited from [ConvertToConcreteOptions](_op_convertto_.converttoconcreteoptions.md).[alpha](_op_convertto_.converttoconcreteoptions.md#optional-alpha)*

*Defined in [op/convertTo.ts:11](https://github.com/cancerberoSgx/mirada/blob/3544b58/ojos/src/op/convertTo.ts#L11)*

 Color scale factor.

___

### `Optional` beta

• **beta**? : *undefined | number*

*Inherited from [ConvertToConcreteOptions](_op_convertto_.converttoconcreteoptions.md).[beta](_op_convertto_.converttoconcreteoptions.md#optional-beta)*

*Defined in [op/convertTo.ts:15](https://github.com/cancerberoSgx/mirada/blob/3544b58/ojos/src/op/convertTo.ts#L15)*

Delta added to the scaled values.

___

### `Optional` dst

• **dst**? : *Mat*

*Inherited from [OperationExecBaseOptions](_op_types_.operationexecbaseoptions.md).[dst](_op_types_.operationexecbaseoptions.md#optional-dst)*

*Defined in [op/types.ts:50](https://github.com/cancerberoSgx/mirada/blob/3544b58/ojos/src/op/types.ts#L50)*

Output image. If not given it will be created. Note that you can give [src] as output image in which case the input image will be written.

___

### `Optional` dtype

• **dtype**? : *undefined | number*

*Inherited from [ConvertToConcreteOptions](_op_convertto_.converttoconcreteoptions.md).[dtype](_op_convertto_.converttoconcreteoptions.md#optional-dtype)*

*Defined in [op/convertTo.ts:19](https://github.com/cancerberoSgx/mirada/blob/3544b58/ojos/src/op/convertTo.ts#L19)*

Output image depth, for example, cv.CV_8U

___

###  src

• **src**: *Mat*

*Inherited from [OperationExecBaseOptions](_op_types_.operationexecbaseoptions.md).[src](_op_types_.operationexecbaseoptions.md#src)*

*Defined in [op/types.ts:46](https://github.com/cancerberoSgx/mirada/blob/3544b58/ojos/src/op/types.ts#L46)*

Input image.
