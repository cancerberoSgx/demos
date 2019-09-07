**[ojos](../README.md)**

[Globals](../README.md) › ["op/canny"](../modules/_op_canny_.md) › [CannyOptions](_op_canny_.cannyoptions.md)

# Interface: CannyOptions

## Hierarchy

* [CannyConcreteOptions](_op_canny_.cannyconcreteoptions.md)

* [OperationExecBaseOptions](_op_types_.operationexecbaseoptions.md)

  * **CannyOptions**

## Index

### Properties

* [L2gradient](_op_canny_.cannyoptions.md#optional-l2gradient)
* [apertureSize](_op_canny_.cannyoptions.md#optional-aperturesize)
* [dst](_op_canny_.cannyoptions.md#optional-dst)
* [src](_op_canny_.cannyoptions.md#src)
* [threshold1](_op_canny_.cannyoptions.md#optional-threshold1)
* [threshold2](_op_canny_.cannyoptions.md#optional-threshold2)

## Properties

### `Optional` L2gradient

• **L2gradient**? : *undefined | false | true*

*Inherited from [CannyConcreteOptions](_op_canny_.cannyconcreteoptions.md).[L2gradient](_op_canny_.cannyconcreteoptions.md#optional-l2gradient)*

*Defined in [op/canny.ts:15](https://github.com/cancerberoSgx/mirada/blob/d83d69e/ojos/src/op/canny.ts#L15)*

___

### `Optional` apertureSize

• **apertureSize**? : *undefined | number*

*Inherited from [CannyConcreteOptions](_op_canny_.cannyconcreteoptions.md).[apertureSize](_op_canny_.cannyconcreteoptions.md#optional-aperturesize)*

*Defined in [op/canny.ts:14](https://github.com/cancerberoSgx/mirada/blob/d83d69e/ojos/src/op/canny.ts#L14)*

___

### `Optional` dst

• **dst**? : *Mat*

*Inherited from [OperationExecBaseOptions](_op_types_.operationexecbaseoptions.md).[dst](_op_types_.operationexecbaseoptions.md#optional-dst)*

*Defined in [op/types.ts:27](https://github.com/cancerberoSgx/mirada/blob/d83d69e/ojos/src/op/types.ts#L27)*

___

###  src

• **src**: *Mat*

*Inherited from [OperationExecBaseOptions](_op_types_.operationexecbaseoptions.md).[src](_op_types_.operationexecbaseoptions.md#src)*

*Defined in [op/types.ts:26](https://github.com/cancerberoSgx/mirada/blob/d83d69e/ojos/src/op/types.ts#L26)*

___

### `Optional` threshold1

• **threshold1**? : *undefined | number*

*Inherited from [CannyConcreteOptions](_op_canny_.cannyconcreteoptions.md).[threshold1](_op_canny_.cannyconcreteoptions.md#optional-threshold1)*

*Defined in [op/canny.ts:9](https://github.com/cancerberoSgx/mirada/blob/d83d69e/ojos/src/op/canny.ts#L9)*

___

### `Optional` threshold2

• **threshold2**? : *undefined | number*

*Inherited from [CannyConcreteOptions](_op_canny_.cannyconcreteoptions.md).[threshold2](_op_canny_.cannyconcreteoptions.md#optional-threshold2)*

*Defined in [op/canny.ts:13](https://github.com/cancerberoSgx/mirada/blob/d83d69e/ojos/src/op/canny.ts#L13)*

Observation: When this has low values flood pass through edges of color similar to the low channel