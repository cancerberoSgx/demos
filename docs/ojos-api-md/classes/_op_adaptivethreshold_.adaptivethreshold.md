**[ojos](../README.md)**

[Globals](../README.md) › ["op/adaptiveThreshold"](../modules/_op_adaptivethreshold_.md) › [AdaptiveThreshold](_op_adaptivethreshold_.adaptivethreshold.md)

# Class: AdaptiveThreshold

## Hierarchy

* [AbstractOperation](_op_abstractoperation_.abstractoperation.md)‹[AdaptiveThresholdOptions](../interfaces/_op_adaptivethreshold_.adaptivethresholdoptions.md)›

  * **AdaptiveThreshold**

## Implements

* [ImageOperation](../interfaces/_op_types_.imageoperation.md)‹[AdaptiveThresholdOptions](../interfaces/_op_adaptivethreshold_.adaptivethresholdoptions.md)›

## Index

### Constructors

* [constructor](_op_adaptivethreshold_.adaptivethreshold.md#constructor)

### Properties

* [defaultOptions](_op_adaptivethreshold_.adaptivethreshold.md#protected-optional-defaultoptions)
* [description](_op_adaptivethreshold_.adaptivethreshold.md#description)
* [isInPlace](_op_adaptivethreshold_.adaptivethreshold.md#protected-isinplace)
* [name](_op_adaptivethreshold_.adaptivethreshold.md#name)
* [noInPlace](_op_adaptivethreshold_.adaptivethreshold.md#noinplace)
* [sameSizeAndType](_op_adaptivethreshold_.adaptivethreshold.md#samesizeandtype)
* [validChannels](_op_adaptivethreshold_.adaptivethreshold.md#validchannels)

### Methods

* [_exec](_op_adaptivethreshold_.adaptivethreshold.md#protected-_exec)
* [checkInPlaceAfter](_op_adaptivethreshold_.adaptivethreshold.md#protected-checkinplaceafter)
* [checkInPlaceBefore](_op_adaptivethreshold_.adaptivethreshold.md#protected-checkinplacebefore)
* [checkOptions](_op_adaptivethreshold_.adaptivethreshold.md#protected-checkoptions)
* [exec](_op_adaptivethreshold_.adaptivethreshold.md#exec)

## Constructors

###  constructor

\+ **new AdaptiveThreshold**(`defaultOptions?`: [T](undefined)): *[AdaptiveThreshold](_op_adaptivethreshold_.adaptivethreshold.md)*

*Inherited from [AbstractOperation](_op_abstractoperation_.abstractoperation.md).[constructor](_op_abstractoperation_.abstractoperation.md#constructor)*

*Defined in [op/abstractOperation.ts:14](https://github.com/cancerberoSgx/mirada/blob/d83d69e/ojos/src/op/abstractOperation.ts#L14)*

**Parameters:**

Name | Type |
------ | ------ |
`defaultOptions?` | [T](undefined) |

**Returns:** *[AdaptiveThreshold](_op_adaptivethreshold_.adaptivethreshold.md)*

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

• **name**: *string* = "AdaptiveThreshold"

*Implementation of [ImageOperation](../interfaces/_op_types_.imageoperation.md).[name](../interfaces/_op_types_.imageoperation.md#name)*

*Overrides [AbstractOperation](_op_abstractoperation_.abstractoperation.md).[name](_op_abstractoperation_.abstractoperation.md#abstract-name)*

*Defined in [op/adaptiveThreshold.ts:18](https://github.com/cancerberoSgx/mirada/blob/d83d69e/ojos/src/op/adaptiveThreshold.ts#L18)*

___

###  noInPlace

• **noInPlace**: *boolean* = false

*Implementation of [ImageOperation](../interfaces/_op_types_.imageoperation.md).[noInPlace](../interfaces/_op_types_.imageoperation.md#noinplace)*

*Inherited from [AbstractOperation](_op_abstractoperation_.abstractoperation.md).[noInPlace](_op_abstractoperation_.abstractoperation.md#noinplace)*

*Defined in [op/abstractOperation.ts:11](https://github.com/cancerberoSgx/mirada/blob/d83d69e/ojos/src/op/abstractOperation.ts#L11)*

___

###  sameSizeAndType

• **sameSizeAndType**: *boolean* = true

*Implementation of [ImageOperation](../interfaces/_op_types_.imageoperation.md).[sameSizeAndType](../interfaces/_op_types_.imageoperation.md#samesizeandtype)*

*Overrides [AbstractOperation](_op_abstractoperation_.abstractoperation.md).[sameSizeAndType](_op_abstractoperation_.abstractoperation.md#samesizeandtype)*

*Defined in [op/adaptiveThreshold.ts:20](https://github.com/cancerberoSgx/mirada/blob/d83d69e/ojos/src/op/adaptiveThreshold.ts#L20)*

___

###  validChannels

• **validChannels**: *number[]* =  [1]

*Implementation of [ImageOperation](../interfaces/_op_types_.imageoperation.md).[validChannels](../interfaces/_op_types_.imageoperation.md#validchannels)*

*Overrides [AbstractOperation](_op_abstractoperation_.abstractoperation.md).[validChannels](_op_abstractoperation_.abstractoperation.md#validchannels)*

*Defined in [op/adaptiveThreshold.ts:19](https://github.com/cancerberoSgx/mirada/blob/d83d69e/ojos/src/op/adaptiveThreshold.ts#L19)*

## Methods

### `Protected` _exec

▸ **_exec**(`o`: [AdaptiveThresholdOptions](../interfaces/_op_adaptivethreshold_.adaptivethresholdoptions.md)): *Promise‹void›*

*Overrides [AbstractOperation](_op_abstractoperation_.abstractoperation.md).[_exec](_op_abstractoperation_.abstractoperation.md#protected-abstract-_exec)*

*Defined in [op/adaptiveThreshold.ts:21](https://github.com/cancerberoSgx/mirada/blob/d83d69e/ojos/src/op/adaptiveThreshold.ts#L21)*

**Parameters:**

Name | Type |
------ | ------ |
`o` | [AdaptiveThresholdOptions](../interfaces/_op_adaptivethreshold_.adaptivethresholdoptions.md) |

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