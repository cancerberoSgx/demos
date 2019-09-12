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
* [validateEachExec](_op_adaptivethreshold_.adaptivethreshold.md#protected-validateeachexec)
* [validated](_op_adaptivethreshold_.adaptivethreshold.md#protected-validated)

### Methods

* [_exec](_op_adaptivethreshold_.adaptivethreshold.md#protected-_exec)
* [afterExec](_op_adaptivethreshold_.adaptivethreshold.md#protected-afterexec)
* [allChannels](_op_adaptivethreshold_.adaptivethreshold.md#protected-allchannels)
* [checkInPlaceAfter](_op_adaptivethreshold_.adaptivethreshold.md#protected-checkinplaceafter)
* [checkInPlaceBefore](_op_adaptivethreshold_.adaptivethreshold.md#protected-checkinplacebefore)
* [checkInputImage](_op_adaptivethreshold_.adaptivethreshold.md#protected-checkinputimage)
* [checkOptions](_op_adaptivethreshold_.adaptivethreshold.md#protected-checkoptions)
* [exec](_op_adaptivethreshold_.adaptivethreshold.md#exec)
* [validate](_op_adaptivethreshold_.adaptivethreshold.md#protected-validate)

## Constructors

###  constructor

\+ **new AdaptiveThreshold**(`defaultOptions?`: [T](undefined)): *[AdaptiveThreshold](_op_adaptivethreshold_.adaptivethreshold.md)*

*Inherited from [AbstractOperation](_op_abstractoperation_.abstractoperation.md).[constructor](_op_abstractoperation_.abstractoperation.md#constructor)*

*Defined in [op/abstractOperation.ts:16](https://github.com/cancerberoSgx/mirada/blob/f2ba50d/ojos/src/op/abstractOperation.ts#L16)*

**Parameters:**

Name | Type |
------ | ------ |
`defaultOptions?` | [T](undefined) |

**Returns:** *[AdaptiveThreshold](_op_adaptivethreshold_.adaptivethreshold.md)*

## Properties

### `Protected` `Optional` defaultOptions

• **defaultOptions**? : *[T](undefined)*

*Inherited from [AbstractOperation](_op_abstractoperation_.abstractoperation.md).[defaultOptions](_op_abstractoperation_.abstractoperation.md#protected-optional-defaultoptions)*

*Defined in [op/abstractOperation.ts:18](https://github.com/cancerberoSgx/mirada/blob/f2ba50d/ojos/src/op/abstractOperation.ts#L18)*

___

###  description

• **description**: *string* = "TODO"

*Implementation of [ImageOperation](../interfaces/_op_types_.imageoperation.md).[description](../interfaces/_op_types_.imageoperation.md#description)*

*Inherited from [AbstractOperation](_op_abstractoperation_.abstractoperation.md).[description](_op_abstractoperation_.abstractoperation.md#description)*

*Defined in [op/abstractOperation.ts:9](https://github.com/cancerberoSgx/mirada/blob/f2ba50d/ojos/src/op/abstractOperation.ts#L9)*

___

### `Protected` isInPlace

• **isInPlace**: *boolean* = false

*Inherited from [AbstractOperation](_op_abstractoperation_.abstractoperation.md).[isInPlace](_op_abstractoperation_.abstractoperation.md#protected-isinplace)*

*Defined in [op/abstractOperation.ts:12](https://github.com/cancerberoSgx/mirada/blob/f2ba50d/ojos/src/op/abstractOperation.ts#L12)*

___

###  name

• **name**: *string* = "AdaptiveThreshold"

*Implementation of [ImageOperation](../interfaces/_op_types_.imageoperation.md).[name](../interfaces/_op_types_.imageoperation.md#name)*

*Overrides [AbstractOperation](_op_abstractoperation_.abstractoperation.md).[name](_op_abstractoperation_.abstractoperation.md#abstract-name)*

*Defined in [op/adaptiveThreshold.ts:18](https://github.com/cancerberoSgx/mirada/blob/f2ba50d/ojos/src/op/adaptiveThreshold.ts#L18)*

___

###  noInPlace

• **noInPlace**: *boolean* = false

*Implementation of [ImageOperation](../interfaces/_op_types_.imageoperation.md).[noInPlace](../interfaces/_op_types_.imageoperation.md#noinplace)*

*Inherited from [AbstractOperation](_op_abstractoperation_.abstractoperation.md).[noInPlace](_op_abstractoperation_.abstractoperation.md#noinplace)*

*Defined in [op/abstractOperation.ts:10](https://github.com/cancerberoSgx/mirada/blob/f2ba50d/ojos/src/op/abstractOperation.ts#L10)*

___

###  sameSizeAndType

• **sameSizeAndType**: *boolean* = true

*Implementation of [ImageOperation](../interfaces/_op_types_.imageoperation.md).[sameSizeAndType](../interfaces/_op_types_.imageoperation.md#samesizeandtype)*

*Overrides [AbstractOperation](_op_abstractoperation_.abstractoperation.md).[sameSizeAndType](_op_abstractoperation_.abstractoperation.md#samesizeandtype)*

*Defined in [op/adaptiveThreshold.ts:20](https://github.com/cancerberoSgx/mirada/blob/f2ba50d/ojos/src/op/adaptiveThreshold.ts#L20)*

___

###  validChannels

• **validChannels**: *number[]* =  [1]

*Implementation of [ImageOperation](../interfaces/_op_types_.imageoperation.md).[validChannels](../interfaces/_op_types_.imageoperation.md#validchannels)*

*Overrides [AbstractOperation](_op_abstractoperation_.abstractoperation.md).[validChannels](_op_abstractoperation_.abstractoperation.md#validchannels)*

*Defined in [op/adaptiveThreshold.ts:19](https://github.com/cancerberoSgx/mirada/blob/f2ba50d/ojos/src/op/adaptiveThreshold.ts#L19)*

___

### `Protected` validateEachExec

• **validateEachExec**: *boolean* = false

*Inherited from [AbstractOperation](_op_abstractoperation_.abstractoperation.md).[validateEachExec](_op_abstractoperation_.abstractoperation.md#protected-validateeachexec)*

*Defined in [op/abstractOperation.ts:13](https://github.com/cancerberoSgx/mirada/blob/f2ba50d/ojos/src/op/abstractOperation.ts#L13)*

___

### `Protected` validated

• **validated**: *boolean* = false

*Inherited from [AbstractOperation](_op_abstractoperation_.abstractoperation.md).[validated](_op_abstractoperation_.abstractoperation.md#protected-validated)*

*Defined in [op/abstractOperation.ts:14](https://github.com/cancerberoSgx/mirada/blob/f2ba50d/ojos/src/op/abstractOperation.ts#L14)*

## Methods

### `Protected` _exec

▸ **_exec**(`o`: [AdaptiveThresholdOptions](../interfaces/_op_adaptivethreshold_.adaptivethresholdoptions.md)): *void*

*Overrides [AbstractOperation](_op_abstractoperation_.abstractoperation.md).[_exec](_op_abstractoperation_.abstractoperation.md#protected-abstract-_exec)*

*Defined in [op/adaptiveThreshold.ts:21](https://github.com/cancerberoSgx/mirada/blob/f2ba50d/ojos/src/op/adaptiveThreshold.ts#L21)*

**Parameters:**

Name | Type |
------ | ------ |
`o` | [AdaptiveThresholdOptions](../interfaces/_op_adaptivethreshold_.adaptivethresholdoptions.md) |

**Returns:** *void*

___

### `Protected` afterExec

▸ **afterExec**(`options`: [MandatoryDst](../modules/_op_abstractoperation_.md#mandatorydst)‹[AdaptiveThresholdOptions](../interfaces/_op_adaptivethreshold_.adaptivethresholdoptions.md)›): *void*

*Inherited from [AbstractOperation](_op_abstractoperation_.abstractoperation.md).[afterExec](_op_abstractoperation_.abstractoperation.md#protected-afterexec)*

*Defined in [op/abstractOperation.ts:41](https://github.com/cancerberoSgx/mirada/blob/f2ba50d/ojos/src/op/abstractOperation.ts#L41)*

**Parameters:**

Name | Type |
------ | ------ |
`options` | [MandatoryDst](../modules/_op_abstractoperation_.md#mandatorydst)‹[AdaptiveThresholdOptions](../interfaces/_op_adaptivethreshold_.adaptivethresholdoptions.md)› |

**Returns:** *void*

___

### `Protected` allChannels

▸ **allChannels**(`o`: [AdaptiveThresholdOptions](../interfaces/_op_adaptivethreshold_.adaptivethresholdoptions.md) & [WithChannels](../interfaces/_op_types_.withchannels.md), `op`: function): *void*

*Inherited from [AbstractOperation](_op_abstractoperation_.abstractoperation.md).[allChannels](_op_abstractoperation_.abstractoperation.md#protected-allchannels)*

*Defined in [op/abstractOperation.ts:89](https://github.com/cancerberoSgx/mirada/blob/f2ba50d/ojos/src/op/abstractOperation.ts#L89)*

**Parameters:**

▪ **o**: *[AdaptiveThresholdOptions](../interfaces/_op_adaptivethreshold_.adaptivethresholdoptions.md) & [WithChannels](../interfaces/_op_types_.withchannels.md)*

▪ **op**: *function*

▸ (`o`: [AdaptiveThresholdOptions](../interfaces/_op_adaptivethreshold_.adaptivethresholdoptions.md)): *void*

**Parameters:**

Name | Type |
------ | ------ |
`o` | [AdaptiveThresholdOptions](../interfaces/_op_adaptivethreshold_.adaptivethresholdoptions.md) |

**Returns:** *void*

___

### `Protected` checkInPlaceAfter

▸ **checkInPlaceAfter**(`o`: [OperationExecBaseOptions](../interfaces/_op_types_.operationexecbaseoptions.md)): *void*

*Inherited from [AbstractOperation](_op_abstractoperation_.abstractoperation.md).[checkInPlaceAfter](_op_abstractoperation_.abstractoperation.md#protected-checkinplaceafter)*

*Defined in [op/abstractOperation.ts:79](https://github.com/cancerberoSgx/mirada/blob/f2ba50d/ojos/src/op/abstractOperation.ts#L79)*

**Parameters:**

Name | Type |
------ | ------ |
`o` | [OperationExecBaseOptions](../interfaces/_op_types_.operationexecbaseoptions.md) |

**Returns:** *void*

___

### `Protected` checkInPlaceBefore

▸ **checkInPlaceBefore**(`o`: [OperationExecBaseOptions](../interfaces/_op_types_.operationexecbaseoptions.md)): *void*

*Inherited from [AbstractOperation](_op_abstractoperation_.abstractoperation.md).[checkInPlaceBefore](_op_abstractoperation_.abstractoperation.md#protected-checkinplacebefore)*

*Defined in [op/abstractOperation.ts:70](https://github.com/cancerberoSgx/mirada/blob/f2ba50d/ojos/src/op/abstractOperation.ts#L70)*

**Parameters:**

Name | Type |
------ | ------ |
`o` | [OperationExecBaseOptions](../interfaces/_op_types_.operationexecbaseoptions.md) |

**Returns:** *void*

___

### `Protected` checkInputImage

▸ **checkInputImage**(`o`: [AdaptiveThresholdOptions](../interfaces/_op_adaptivethreshold_.adaptivethresholdoptions.md)): *void*

*Inherited from [AbstractOperation](_op_abstractoperation_.abstractoperation.md).[checkInputImage](_op_abstractoperation_.abstractoperation.md#protected-checkinputimage)*

*Defined in [op/abstractOperation.ts:43](https://github.com/cancerberoSgx/mirada/blob/f2ba50d/ojos/src/op/abstractOperation.ts#L43)*

**Parameters:**

Name | Type |
------ | ------ |
`o` | [AdaptiveThresholdOptions](../interfaces/_op_adaptivethreshold_.adaptivethresholdoptions.md) |

**Returns:** *void*

___

### `Protected` checkOptions

▸ **checkOptions**(`o?`: [T](undefined)): *object & object*

*Inherited from [AbstractOperation](_op_abstractoperation_.abstractoperation.md).[checkOptions](_op_abstractoperation_.abstractoperation.md#protected-checkoptions)*

*Defined in [op/abstractOperation.ts:45](https://github.com/cancerberoSgx/mirada/blob/f2ba50d/ojos/src/op/abstractOperation.ts#L45)*

**Parameters:**

Name | Type |
------ | ------ |
`o?` | [T](undefined) |

**Returns:** *object & object*

___

###  exec

▸ **exec**(`o?`: [T](undefined)): *Mat*

*Implementation of [ImageOperation](../interfaces/_op_types_.imageoperation.md)*

*Inherited from [AbstractOperation](_op_abstractoperation_.abstractoperation.md).[exec](_op_abstractoperation_.abstractoperation.md#exec)*

*Defined in [op/abstractOperation.ts:26](https://github.com/cancerberoSgx/mirada/blob/f2ba50d/ojos/src/op/abstractOperation.ts#L26)*

**Parameters:**

Name | Type |
------ | ------ |
`o?` | [T](undefined) |

**Returns:** *Mat*

___

### `Protected` validate

▸ **validate**(`o`: [AdaptiveThresholdOptions](../interfaces/_op_adaptivethreshold_.adaptivethresholdoptions.md)): *string | undefined*

*Inherited from [AbstractOperation](_op_abstractoperation_.abstractoperation.md).[validate](_op_abstractoperation_.abstractoperation.md#protected-validate)*

*Defined in [op/abstractOperation.ts:21](https://github.com/cancerberoSgx/mirada/blob/f2ba50d/ojos/src/op/abstractOperation.ts#L21)*

**Parameters:**

Name | Type |
------ | ------ |
`o` | [AdaptiveThresholdOptions](../interfaces/_op_adaptivethreshold_.adaptivethresholdoptions.md) |

**Returns:** *string | undefined*