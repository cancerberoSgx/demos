**[ojos](../README.md)**

[Globals](../README.md) › ["op/warpPerspective"](../modules/_op_warpperspective_.md) › [WarpPerspective](_op_warpperspective_.warpperspective.md)

# Class: WarpPerspective

Input should be float type and 1, 3or 4 channels. In doubt use toRgba().

## Hierarchy

* [AbstractOperation](_op_abstractoperation_.abstractoperation.md)‹[WarpPerspectiveOptions](../interfaces/_op_warpperspective_.warpperspectiveoptions.md)›

  * **WarpPerspective**

## Implements

* [ImageOperation](../interfaces/_op_types_.imageoperation.md)‹[WarpPerspectiveOptions](../interfaces/_op_warpperspective_.warpperspectiveoptions.md)›

## Index

### Constructors

* [constructor](_op_warpperspective_.warpperspective.md#constructor)

### Properties

* [defaultOptions](_op_warpperspective_.warpperspective.md#protected-optional-defaultoptions)
* [description](_op_warpperspective_.warpperspective.md#description)
* [isInPlace](_op_warpperspective_.warpperspective.md#protected-isinplace)
* [name](_op_warpperspective_.warpperspective.md#name)
* [noInPlace](_op_warpperspective_.warpperspective.md#noinplace)
* [sameSizeAndType](_op_warpperspective_.warpperspective.md#samesizeandtype)
* [validChannels](_op_warpperspective_.warpperspective.md#validchannels)

### Methods

* [_exec](_op_warpperspective_.warpperspective.md#protected-_exec)
* [checkInPlaceAfter](_op_warpperspective_.warpperspective.md#protected-checkinplaceafter)
* [checkInPlaceBefore](_op_warpperspective_.warpperspective.md#protected-checkinplacebefore)
* [checkOptions](_op_warpperspective_.warpperspective.md#protected-checkoptions)
* [exec](_op_warpperspective_.warpperspective.md#exec)

## Constructors

###  constructor

\+ **new WarpPerspective**(`defaultOptions?`: [T](undefined)): *[WarpPerspective](_op_warpperspective_.warpperspective.md)*

*Inherited from [AbstractOperation](_op_abstractoperation_.abstractoperation.md).[constructor](_op_abstractoperation_.abstractoperation.md#constructor)*

*Defined in [op/abstractOperation.ts:14](https://github.com/cancerberoSgx/mirada/blob/d83d69e/ojos/src/op/abstractOperation.ts#L14)*

**Parameters:**

Name | Type |
------ | ------ |
`defaultOptions?` | [T](undefined) |

**Returns:** *[WarpPerspective](_op_warpperspective_.warpperspective.md)*

## Properties

### `Protected` `Optional` defaultOptions

• **defaultOptions**? : *[T](undefined)*

*Inherited from [AbstractOperation](_op_abstractoperation_.abstractoperation.md).[defaultOptions](_op_abstractoperation_.abstractoperation.md#protected-optional-defaultoptions)*

*Defined in [op/abstractOperation.ts:16](https://github.com/cancerberoSgx/mirada/blob/d83d69e/ojos/src/op/abstractOperation.ts#L16)*

___

###  description

• **description**: *string* = "TODO"

*Implementation of [ImageOperation](../interfaces/_op_types_.imageoperation.md).[description](../interfaces/_op_types_.imageoperation.md#description)*

*Inherited from [AbstractOperation](_op_abstractoperation_.abstractoperation.md).[description](_op_abstractoperation_.abstractoperation.md#description)*

*Defined in [op/abstractOperation.ts:10](https://github.com/cancerberoSgx/mirada/blob/d83d69e/ojos/src/op/abstractOperation.ts#L10)*

___

### `Protected` isInPlace

• **isInPlace**: *boolean* = false

*Inherited from [AbstractOperation](_op_abstractoperation_.abstractoperation.md).[isInPlace](_op_abstractoperation_.abstractoperation.md#protected-isinplace)*

*Defined in [op/abstractOperation.ts:13](https://github.com/cancerberoSgx/mirada/blob/d83d69e/ojos/src/op/abstractOperation.ts#L13)*

___

###  name

• **name**: *string* = "warpPerspective"

*Implementation of [ImageOperation](../interfaces/_op_types_.imageoperation.md).[name](../interfaces/_op_types_.imageoperation.md#name)*

*Overrides [AbstractOperation](_op_abstractoperation_.abstractoperation.md).[name](_op_abstractoperation_.abstractoperation.md#abstract-name)*

*Defined in [op/warpPerspective.ts:16](https://github.com/cancerberoSgx/mirada/blob/d83d69e/ojos/src/op/warpPerspective.ts#L16)*

___

###  noInPlace

• **noInPlace**: *boolean* = true

*Implementation of [ImageOperation](../interfaces/_op_types_.imageoperation.md).[noInPlace](../interfaces/_op_types_.imageoperation.md#noinplace)*

*Overrides [AbstractOperation](_op_abstractoperation_.abstractoperation.md).[noInPlace](_op_abstractoperation_.abstractoperation.md#noinplace)*

*Defined in [op/warpPerspective.ts:17](https://github.com/cancerberoSgx/mirada/blob/d83d69e/ojos/src/op/warpPerspective.ts#L17)*

___

###  sameSizeAndType

• **sameSizeAndType**: *boolean* = false

*Implementation of [ImageOperation](../interfaces/_op_types_.imageoperation.md).[sameSizeAndType](../interfaces/_op_types_.imageoperation.md#samesizeandtype)*

*Inherited from [AbstractOperation](_op_abstractoperation_.abstractoperation.md).[sameSizeAndType](_op_abstractoperation_.abstractoperation.md#samesizeandtype)*

*Defined in [op/abstractOperation.ts:12](https://github.com/cancerberoSgx/mirada/blob/d83d69e/ojos/src/op/abstractOperation.ts#L12)*

___

###  validChannels

• **validChannels**: *number[] | undefined* =  undefined

*Implementation of [ImageOperation](../interfaces/_op_types_.imageoperation.md).[validChannels](../interfaces/_op_types_.imageoperation.md#validchannels)*

*Inherited from [AbstractOperation](_op_abstractoperation_.abstractoperation.md).[validChannels](_op_abstractoperation_.abstractoperation.md#validchannels)*

*Defined in [op/abstractOperation.ts:14](https://github.com/cancerberoSgx/mirada/blob/d83d69e/ojos/src/op/abstractOperation.ts#L14)*

## Methods

### `Protected` _exec

▸ **_exec**(`o`: [WarpPerspectiveOptions](../interfaces/_op_warpperspective_.warpperspectiveoptions.md)): *Promise‹void›*

*Overrides [AbstractOperation](_op_abstractoperation_.abstractoperation.md).[_exec](_op_abstractoperation_.abstractoperation.md#protected-abstract-_exec)*

*Defined in [op/warpPerspective.ts:18](https://github.com/cancerberoSgx/mirada/blob/d83d69e/ojos/src/op/warpPerspective.ts#L18)*

**Parameters:**

Name | Type |
------ | ------ |
`o` | [WarpPerspectiveOptions](../interfaces/_op_warpperspective_.warpperspectiveoptions.md) |

**Returns:** *Promise‹void›*

___

### `Protected` checkInPlaceAfter

▸ **checkInPlaceAfter**(`o`: [OperationExecBaseOptions](../interfaces/_op_types_.operationexecbaseoptions.md)): *void*

*Inherited from [AbstractOperation](_op_abstractoperation_.abstractoperation.md).[checkInPlaceAfter](_op_abstractoperation_.abstractoperation.md#protected-checkinplaceafter)*

*Defined in [op/abstractOperation.ts:60](https://github.com/cancerberoSgx/mirada/blob/d83d69e/ojos/src/op/abstractOperation.ts#L60)*

**Parameters:**

Name | Type |
------ | ------ |
`o` | [OperationExecBaseOptions](../interfaces/_op_types_.operationexecbaseoptions.md) |

**Returns:** *void*

___

### `Protected` checkInPlaceBefore

▸ **checkInPlaceBefore**(`o`: [OperationExecBaseOptions](../interfaces/_op_types_.operationexecbaseoptions.md)): *void*

*Inherited from [AbstractOperation](_op_abstractoperation_.abstractoperation.md).[checkInPlaceBefore](_op_abstractoperation_.abstractoperation.md#protected-checkinplacebefore)*

*Defined in [op/abstractOperation.ts:53](https://github.com/cancerberoSgx/mirada/blob/d83d69e/ojos/src/op/abstractOperation.ts#L53)*

**Parameters:**

Name | Type |
------ | ------ |
`o` | [OperationExecBaseOptions](../interfaces/_op_types_.operationexecbaseoptions.md) |

**Returns:** *void*

___

### `Protected` checkOptions

▸ **checkOptions**(`o?`: [T](undefined)): *object & object*

*Inherited from [AbstractOperation](_op_abstractoperation_.abstractoperation.md).[checkOptions](_op_abstractoperation_.abstractoperation.md#protected-checkoptions)*

*Defined in [op/abstractOperation.ts:30](https://github.com/cancerberoSgx/mirada/blob/d83d69e/ojos/src/op/abstractOperation.ts#L30)*

**Parameters:**

Name | Type |
------ | ------ |
`o?` | [T](undefined) |

**Returns:** *object & object*

___

###  exec

▸ **exec**(`o?`: [T](undefined)): *Promise‹Mat›*

*Implementation of [ImageOperation](../interfaces/_op_types_.imageoperation.md)*

*Inherited from [AbstractOperation](_op_abstractoperation_.abstractoperation.md).[exec](_op_abstractoperation_.abstractoperation.md#exec)*

*Defined in [op/abstractOperation.ts:22](https://github.com/cancerberoSgx/mirada/blob/d83d69e/ojos/src/op/abstractOperation.ts#L22)*

**Parameters:**

Name | Type |
------ | ------ |
`o?` | [T](undefined) |

**Returns:** *Promise‹Mat›*