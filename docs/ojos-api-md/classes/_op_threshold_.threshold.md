**[ojos](../README.md)**

[Globals](../README.md) › ["op/threshold"](../modules/_op_threshold_.md) › [Threshold](_op_threshold_.threshold.md)

# Class: Threshold

## Hierarchy

* [AbstractOperation](_op_abstractoperation_.abstractoperation.md)‹[ThresholdOptions](../interfaces/_op_threshold_.thresholdoptions.md)›

  * **Threshold**

## Implements

* [ImageOperation](../interfaces/_op_types_.imageoperation.md)‹[ThresholdOptions](../interfaces/_op_threshold_.thresholdoptions.md)›

## Index

### Constructors

* [constructor](_op_threshold_.threshold.md#constructor)

### Properties

* [defaultOptions](_op_threshold_.threshold.md#protected-optional-defaultoptions)
* [description](_op_threshold_.threshold.md#description)
* [isInPlace](_op_threshold_.threshold.md#protected-isinplace)
* [name](_op_threshold_.threshold.md#name)
* [noInPlace](_op_threshold_.threshold.md#noinplace)
* [sameSizeAndType](_op_threshold_.threshold.md#samesizeandtype)
* [validChannels](_op_threshold_.threshold.md#validchannels)

### Methods

* [_exec](_op_threshold_.threshold.md#protected-_exec)
* [checkInPlaceAfter](_op_threshold_.threshold.md#protected-checkinplaceafter)
* [checkInPlaceBefore](_op_threshold_.threshold.md#protected-checkinplacebefore)
* [checkOptions](_op_threshold_.threshold.md#protected-checkoptions)
* [exec](_op_threshold_.threshold.md#exec)

## Constructors

###  constructor

\+ **new Threshold**(`defaultOptions?`: [T](undefined)): *[Threshold](_op_threshold_.threshold.md)*

*Inherited from [AbstractOperation](_op_abstractoperation_.abstractoperation.md).[constructor](_op_abstractoperation_.abstractoperation.md#constructor)*

*Defined in [op/abstractOperation.ts:14](https://github.com/cancerberoSgx/mirada/blob/d83d69e/ojos/src/op/abstractOperation.ts#L14)*

**Parameters:**

Name | Type |
------ | ------ |
`defaultOptions?` | [T](undefined) |

**Returns:** *[Threshold](_op_threshold_.threshold.md)*

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

• **name**: *string* = "Threshold"

*Implementation of [ImageOperation](../interfaces/_op_types_.imageoperation.md).[name](../interfaces/_op_types_.imageoperation.md#name)*

*Overrides [AbstractOperation](_op_abstractoperation_.abstractoperation.md).[name](_op_abstractoperation_.abstractoperation.md#abstract-name)*

*Defined in [op/threshold.ts:15](https://github.com/cancerberoSgx/mirada/blob/d83d69e/ojos/src/op/threshold.ts#L15)*

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

*Defined in [op/threshold.ts:16](https://github.com/cancerberoSgx/mirada/blob/d83d69e/ojos/src/op/threshold.ts#L16)*

___

###  validChannels

• **validChannels**: *number[] | undefined* =  undefined

*Implementation of [ImageOperation](../interfaces/_op_types_.imageoperation.md).[validChannels](../interfaces/_op_types_.imageoperation.md#validchannels)*

*Inherited from [AbstractOperation](_op_abstractoperation_.abstractoperation.md).[validChannels](_op_abstractoperation_.abstractoperation.md#validchannels)*

*Defined in [op/abstractOperation.ts:14](https://github.com/cancerberoSgx/mirada/blob/d83d69e/ojos/src/op/abstractOperation.ts#L14)*

## Methods

### `Protected` _exec

▸ **_exec**(`o`: [ThresholdOptions](../interfaces/_op_threshold_.thresholdoptions.md)): *Promise‹void›*

*Overrides [AbstractOperation](_op_abstractoperation_.abstractoperation.md).[_exec](_op_abstractoperation_.abstractoperation.md#protected-abstract-_exec)*

*Defined in [op/threshold.ts:17](https://github.com/cancerberoSgx/mirada/blob/d83d69e/ojos/src/op/threshold.ts#L17)*

**Parameters:**

Name | Type |
------ | ------ |
`o` | [ThresholdOptions](../interfaces/_op_threshold_.thresholdoptions.md) |

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