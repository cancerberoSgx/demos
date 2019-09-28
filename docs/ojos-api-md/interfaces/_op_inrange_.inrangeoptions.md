[ojos](../README.md) › ["op/inRange"](../modules/_op_inrange_.md) › [InRangeOptions](_op_inrange_.inrangeoptions.md)

# Interface: InRangeOptions

## Hierarchy

* [OperationExecBaseOptions](_op_types_.operationexecbaseoptions.md)

* [InRangeConcreteOptions](_op_inrange_.inrangeconcreteoptions.md)

  ↳ **InRangeOptions**

## Index

### Properties

* [dst](_op_inrange_.inrangeoptions.md#optional-dst)
* [lowerb](_op_inrange_.inrangeoptions.md#lowerb)
* [src](_op_inrange_.inrangeoptions.md#src)
* [upperb](_op_inrange_.inrangeoptions.md#upperb)

## Properties

### `Optional` dst

• **dst**? : *Mat*

*Inherited from [OperationExecBaseOptions](_op_types_.operationexecbaseoptions.md).[dst](_op_types_.operationexecbaseoptions.md#optional-dst)*

*Defined in [op/types.ts:50](https://github.com/cancerberoSgx/mirada/blob/3544b58/ojos/src/op/types.ts#L50)*

Output image. If not given it will be created. Note that you can give [src] as output image in which case the input image will be written.

___

###  lowerb

• **lowerb**: *Mat | Scalar*

*Inherited from [InRangeConcreteOptions](_op_inrange_.inrangeconcreteoptions.md).[lowerb](_op_inrange_.inrangeconcreteoptions.md#lowerb)*

*Defined in [op/inRange.ts:12](https://github.com/cancerberoSgx/mirada/blob/3544b58/ojos/src/op/inRange.ts#L12)*

inclusive lower boundary array or a scalar.

___

###  src

• **src**: *Mat*

*Inherited from [OperationExecBaseOptions](_op_types_.operationexecbaseoptions.md).[src](_op_types_.operationexecbaseoptions.md#src)*

*Defined in [op/types.ts:46](https://github.com/cancerberoSgx/mirada/blob/3544b58/ojos/src/op/types.ts#L46)*

Input image.

___

###  upperb

• **upperb**: *Mat | Scalar*

*Inherited from [InRangeConcreteOptions](_op_inrange_.inrangeconcreteoptions.md).[upperb](_op_inrange_.inrangeconcreteoptions.md#upperb)*

*Defined in [op/inRange.ts:16](https://github.com/cancerberoSgx/mirada/blob/3544b58/ojos/src/op/inRange.ts#L16)*

inclusive upper boundary array or a scalar.
