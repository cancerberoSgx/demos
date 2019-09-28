[ojos](../README.md) › ["op/bilateralFilter"](../modules/_op_bilateralfilter_.md) › [BilateralFilter](_op_bilateralfilter_.bilateralfilter.md)

# Class: BilateralFilter

The function applies bilateral filtering to the input image, as described in bilateralFilter can reduce unwanted noise very well while keeping edges fairly sharp. However, it is very slow compared to most filters.

Sigma values*: For simplicity, you can set the 2 sigma values to be the same. If they are small (< 10), the filter will not have much effect, whereas if they are large (> 150), they will have a very strong effect, making the image look "cartoonish".

Filter size*: Large filters (d > 5) are very slow, so it is recommended to use d=5 for real-time applications, and perhaps d=9 for offline applications that need heavy noise filtering.

## Hierarchy

* [AbstractOperation](_op_abstractoperation_.abstractoperation.md)‹[BilateralFilterOptions](../interfaces/_op_bilateralfilter_.bilateralfilteroptions.md)›

  ↳ **BilateralFilter**

## Implements

* [ImageOperation](../interfaces/_op_types_.imageoperation.md)‹[BilateralFilterOptions](../interfaces/_op_bilateralfilter_.bilateralfilteroptions.md)›

## Index

### Constructors

* [constructor](_op_bilateralfilter_.bilateralfilter.md#constructor)

### Properties

* [defaultOptions](_op_bilateralfilter_.bilateralfilter.md#protected-optional-defaultoptions)
* [description](_op_bilateralfilter_.bilateralfilter.md#description)
* [isInPlace](_op_bilateralfilter_.bilateralfilter.md#isinplace)
* [name](_op_bilateralfilter_.bilateralfilter.md#name)
* [noDst](_op_bilateralfilter_.bilateralfilter.md#nodst)
* [noInPlace](_op_bilateralfilter_.bilateralfilter.md#noinplace)
* [optionsOrder](_op_bilateralfilter_.bilateralfilter.md#optional-optionsorder)
* [sameSizeAndType](_op_bilateralfilter_.bilateralfilter.md#samesizeandtype)
* [validChannels](_op_bilateralfilter_.bilateralfilter.md#validchannels)
* [validateEachExec](_op_bilateralfilter_.bilateralfilter.md#protected-validateeachexec)
* [validated](_op_bilateralfilter_.bilateralfilter.md#protected-validated)

### Methods

* [_exec](_op_bilateralfilter_.bilateralfilter.md#protected-_exec)
* [afterExec](_op_bilateralfilter_.bilateralfilter.md#protected-afterexec)
* [allChannels](_op_bilateralfilter_.bilateralfilter.md#protected-allchannels)
* [checkDst](_op_bilateralfilter_.bilateralfilter.md#protected-checkdst)
* [checkInPlaceAfter](_op_bilateralfilter_.bilateralfilter.md#protected-checkinplaceafter)
* [checkInPlaceBefore](_op_bilateralfilter_.bilateralfilter.md#protected-checkinplacebefore)
* [checkInputImage](_op_bilateralfilter_.bilateralfilter.md#protected-checkinputimage)
* [checkOptions](_op_bilateralfilter_.bilateralfilter.md#protected-checkoptions)
* [exec](_op_bilateralfilter_.bilateralfilter.md#exec)
* [resolveOptionsObject](_op_bilateralfilter_.bilateralfilter.md#resolveoptionsobject)
* [validate](_op_bilateralfilter_.bilateralfilter.md#protected-validate)

## Constructors

###  constructor

\+ **new BilateralFilter**(`defaultOptions?`: [T](undefined)): *[BilateralFilter](_op_bilateralfilter_.bilateralfilter.md)*

*Inherited from [AbstractOperation](_op_abstractoperation_.abstractoperation.md).[constructor](_op_abstractoperation_.abstractoperation.md#constructor)*

*Defined in [op/abstractOperation.ts:18](https://github.com/cancerberoSgx/mirada/blob/3544b58/ojos/src/op/abstractOperation.ts#L18)*

**Parameters:**

Name | Type |
------ | ------ |
`defaultOptions?` | [T](undefined) |

**Returns:** *[BilateralFilter](_op_bilateralfilter_.bilateralfilter.md)*

## Properties

### `Protected` `Optional` defaultOptions

• **defaultOptions**? : *[T](undefined)*

*Inherited from [AbstractOperation](_op_abstractoperation_.abstractoperation.md).[defaultOptions](_op_abstractoperation_.abstractoperation.md#protected-optional-defaultoptions)*

*Defined in [op/abstractOperation.ts:20](https://github.com/cancerberoSgx/mirada/blob/3544b58/ojos/src/op/abstractOperation.ts#L20)*

___

###  description

• **description**: *string* =  `The function applies bilateral filtering to the input image, as described in bilateralFilter can reduce unwanted noise very well while keeping edges fairly sharp. However, it is very slow compared to most filters. 
  
  Sigma values*: For simplicity, you can set the 2 sigma values to be the same. If they are small (< 10), the filter will not have much effect, whereas if they are large (> 150), they will have a very strong effect, making the image look "cartoonish".
  
  Filter size*: Large filters (d > 5) are very slow, so it is recommended to use d=5 for real-time applications, and perhaps d=9 for offline applications that need heavy noise filtering.`

*Implementation of [ImageOperation](../interfaces/_op_types_.imageoperation.md).[description](../interfaces/_op_types_.imageoperation.md#description)*

*Overrides [AbstractOperation](_op_abstractoperation_.abstractoperation.md).[description](_op_abstractoperation_.abstractoperation.md#description)*

*Defined in [op/bilateralFilter.ts:31](https://github.com/cancerberoSgx/mirada/blob/3544b58/ojos/src/op/bilateralFilter.ts#L31)*

___

###  isInPlace

• **isInPlace**: *boolean* = false

*Inherited from [AbstractOperation](_op_abstractoperation_.abstractoperation.md).[isInPlace](_op_abstractoperation_.abstractoperation.md#isinplace)*

*Defined in [op/abstractOperation.ts:13](https://github.com/cancerberoSgx/mirada/blob/3544b58/ojos/src/op/abstractOperation.ts#L13)*

___

###  name

• **name**: *string* = "BilateralFilter"

*Implementation of [ImageOperation](../interfaces/_op_types_.imageoperation.md).[name](../interfaces/_op_types_.imageoperation.md#name)*

*Overrides [AbstractOperation](_op_abstractoperation_.abstractoperation.md).[name](_op_abstractoperation_.abstractoperation.md#abstract-name)*

*Defined in [op/bilateralFilter.ts:30](https://github.com/cancerberoSgx/mirada/blob/3544b58/ojos/src/op/bilateralFilter.ts#L30)*

___

###  noDst

• **noDst**: *boolean* = false

*Implementation of [ImageOperation](../interfaces/_op_types_.imageoperation.md).[noDst](../interfaces/_op_types_.imageoperation.md#nodst)*

*Inherited from [AbstractOperation](_op_abstractoperation_.abstractoperation.md).[noDst](_op_abstractoperation_.abstractoperation.md#nodst)*

*Defined in [op/abstractOperation.ts:14](https://github.com/cancerberoSgx/mirada/blob/3544b58/ojos/src/op/abstractOperation.ts#L14)*

___

###  noInPlace

• **noInPlace**: *boolean* = true

*Implementation of [ImageOperation](../interfaces/_op_types_.imageoperation.md).[noInPlace](../interfaces/_op_types_.imageoperation.md#noinplace)*

*Overrides [AbstractOperation](_op_abstractoperation_.abstractoperation.md).[noInPlace](_op_abstractoperation_.abstractoperation.md#noinplace)*

*Defined in [op/bilateralFilter.ts:36](https://github.com/cancerberoSgx/mirada/blob/3544b58/ojos/src/op/bilateralFilter.ts#L36)*

___

### `Optional` optionsOrder

• **optionsOrder**? : *keyof T[]*

*Implementation of [ImageOperation](../interfaces/_op_types_.imageoperation.md).[optionsOrder](../interfaces/_op_types_.imageoperation.md#optional-optionsorder)*

*Inherited from [AbstractOperation](_op_abstractoperation_.abstractoperation.md).[optionsOrder](_op_abstractoperation_.abstractoperation.md#optional-optionsorder)*

*Defined in [op/abstractOperation.ts:17](https://github.com/cancerberoSgx/mirada/blob/3544b58/ojos/src/op/abstractOperation.ts#L17)*

___

###  sameSizeAndType

• **sameSizeAndType**: *boolean* = true

*Implementation of [ImageOperation](../interfaces/_op_types_.imageoperation.md).[sameSizeAndType](../interfaces/_op_types_.imageoperation.md#samesizeandtype)*

*Overrides [AbstractOperation](_op_abstractoperation_.abstractoperation.md).[sameSizeAndType](_op_abstractoperation_.abstractoperation.md#samesizeandtype)*

*Defined in [op/bilateralFilter.ts:37](https://github.com/cancerberoSgx/mirada/blob/3544b58/ojos/src/op/bilateralFilter.ts#L37)*

___

###  validChannels

• **validChannels**: *number[]* =  [1, 3]

*Implementation of [ImageOperation](../interfaces/_op_types_.imageoperation.md).[validChannels](../interfaces/_op_types_.imageoperation.md#validchannels)*

*Overrides [AbstractOperation](_op_abstractoperation_.abstractoperation.md).[validChannels](_op_abstractoperation_.abstractoperation.md#validchannels)*

*Defined in [op/bilateralFilter.ts:38](https://github.com/cancerberoSgx/mirada/blob/3544b58/ojos/src/op/bilateralFilter.ts#L38)*

___

### `Protected` validateEachExec

• **validateEachExec**: *boolean* = false

*Inherited from [AbstractOperation](_op_abstractoperation_.abstractoperation.md).[validateEachExec](_op_abstractoperation_.abstractoperation.md#protected-validateeachexec)*

*Defined in [op/abstractOperation.ts:15](https://github.com/cancerberoSgx/mirada/blob/3544b58/ojos/src/op/abstractOperation.ts#L15)*

___

### `Protected` validated

• **validated**: *boolean* = false

*Inherited from [AbstractOperation](_op_abstractoperation_.abstractoperation.md).[validated](_op_abstractoperation_.abstractoperation.md#protected-validated)*

*Defined in [op/abstractOperation.ts:16](https://github.com/cancerberoSgx/mirada/blob/3544b58/ojos/src/op/abstractOperation.ts#L16)*

## Methods

### `Protected` _exec

▸ **_exec**(`o`: [BilateralFilterOptions](../interfaces/_op_bilateralfilter_.bilateralfilteroptions.md)): *void*

*Overrides [AbstractOperation](_op_abstractoperation_.abstractoperation.md).[_exec](_op_abstractoperation_.abstractoperation.md#protected-abstract-_exec)*

*Defined in [op/bilateralFilter.ts:39](https://github.com/cancerberoSgx/mirada/blob/3544b58/ojos/src/op/bilateralFilter.ts#L39)*

**Parameters:**

Name | Type |
------ | ------ |
`o` | [BilateralFilterOptions](../interfaces/_op_bilateralfilter_.bilateralfilteroptions.md) |

**Returns:** *void*

___

### `Protected` afterExec

▸ **afterExec**(`options`: [MandatoryDst](../modules/_op_abstractoperation_.md#mandatorydst)‹[BilateralFilterOptions](../interfaces/_op_bilateralfilter_.bilateralfilteroptions.md)›): *void*

*Inherited from [AbstractOperation](_op_abstractoperation_.abstractoperation.md).[afterExec](_op_abstractoperation_.abstractoperation.md#protected-afterexec)*

*Defined in [op/abstractOperation.ts:64](https://github.com/cancerberoSgx/mirada/blob/3544b58/ojos/src/op/abstractOperation.ts#L64)*

**Parameters:**

Name | Type |
------ | ------ |
`options` | [MandatoryDst](../modules/_op_abstractoperation_.md#mandatorydst)‹[BilateralFilterOptions](../interfaces/_op_bilateralfilter_.bilateralfilteroptions.md)› |

**Returns:** *void*

___

### `Protected` allChannels

▸ **allChannels**(`o`: [BilateralFilterOptions](../interfaces/_op_bilateralfilter_.bilateralfilteroptions.md) & [WithChannels](../interfaces/_op_types_.withchannels.md), `op`: function): *void*

*Inherited from [AbstractOperation](_op_abstractoperation_.abstractoperation.md).[allChannels](_op_abstractoperation_.abstractoperation.md#protected-allchannels)*

*Defined in [op/abstractOperation.ts:127](https://github.com/cancerberoSgx/mirada/blob/3544b58/ojos/src/op/abstractOperation.ts#L127)*

**Parameters:**

▪ **o**: *[BilateralFilterOptions](../interfaces/_op_bilateralfilter_.bilateralfilteroptions.md) & [WithChannels](../interfaces/_op_types_.withchannels.md)*

▪ **op**: *function*

▸ (`o`: [BilateralFilterOptions](../interfaces/_op_bilateralfilter_.bilateralfilteroptions.md)): *void*

**Parameters:**

Name | Type |
------ | ------ |
`o` | [BilateralFilterOptions](../interfaces/_op_bilateralfilter_.bilateralfilteroptions.md) |

**Returns:** *void*

___

### `Protected` checkDst

▸ **checkDst**(`options`: [BilateralFilterOptions](../interfaces/_op_bilateralfilter_.bilateralfilteroptions.md)): *void*

*Inherited from [AbstractOperation](_op_abstractoperation_.abstractoperation.md).[checkDst](_op_abstractoperation_.abstractoperation.md#protected-checkdst)*

*Defined in [op/abstractOperation.ts:89](https://github.com/cancerberoSgx/mirada/blob/3544b58/ojos/src/op/abstractOperation.ts#L89)*

**Parameters:**

Name | Type |
------ | ------ |
`options` | [BilateralFilterOptions](../interfaces/_op_bilateralfilter_.bilateralfilteroptions.md) |

**Returns:** *void*

___

### `Protected` checkInPlaceAfter

▸ **checkInPlaceAfter**(`o`: [OperationExecBaseOptions](../interfaces/_op_types_.operationexecbaseoptions.md)): *void*

*Inherited from [AbstractOperation](_op_abstractoperation_.abstractoperation.md).[checkInPlaceAfter](_op_abstractoperation_.abstractoperation.md#protected-checkinplaceafter)*

*Defined in [op/abstractOperation.ts:117](https://github.com/cancerberoSgx/mirada/blob/3544b58/ojos/src/op/abstractOperation.ts#L117)*

**Parameters:**

Name | Type |
------ | ------ |
`o` | [OperationExecBaseOptions](../interfaces/_op_types_.operationexecbaseoptions.md) |

**Returns:** *void*

___

### `Protected` checkInPlaceBefore

▸ **checkInPlaceBefore**(`o`: [OperationExecBaseOptions](../interfaces/_op_types_.operationexecbaseoptions.md)): *void*

*Inherited from [AbstractOperation](_op_abstractoperation_.abstractoperation.md).[checkInPlaceBefore](_op_abstractoperation_.abstractoperation.md#protected-checkinplacebefore)*

*Defined in [op/abstractOperation.ts:108](https://github.com/cancerberoSgx/mirada/blob/3544b58/ojos/src/op/abstractOperation.ts#L108)*

**Parameters:**

Name | Type |
------ | ------ |
`o` | [OperationExecBaseOptions](../interfaces/_op_types_.operationexecbaseoptions.md) |

**Returns:** *void*

___

### `Protected` checkInputImage

▸ **checkInputImage**(`o`: [BilateralFilterOptions](../interfaces/_op_bilateralfilter_.bilateralfilteroptions.md)): *void*

*Inherited from [AbstractOperation](_op_abstractoperation_.abstractoperation.md).[checkInputImage](_op_abstractoperation_.abstractoperation.md#protected-checkinputimage)*

*Defined in [op/abstractOperation.ts:67](https://github.com/cancerberoSgx/mirada/blob/3544b58/ojos/src/op/abstractOperation.ts#L67)*

**Parameters:**

Name | Type |
------ | ------ |
`o` | [BilateralFilterOptions](../interfaces/_op_bilateralfilter_.bilateralfilteroptions.md) |

**Returns:** *void*

___

### `Protected` checkOptions

▸ **checkOptions**(`o?`: [T](undefined)): *T*

*Inherited from [AbstractOperation](_op_abstractoperation_.abstractoperation.md).[checkOptions](_op_abstractoperation_.abstractoperation.md#protected-checkoptions)*

*Defined in [op/abstractOperation.ts:70](https://github.com/cancerberoSgx/mirada/blob/3544b58/ojos/src/op/abstractOperation.ts#L70)*

**Parameters:**

Name | Type |
------ | ------ |
`o?` | [T](undefined) |

**Returns:** *T*

___

###  exec

▸ **exec**(...`o_`: [OperationExecParams](../modules/_op_types_.md#operationexecparams)‹[BilateralFilterOptions](../interfaces/_op_bilateralfilter_.bilateralfilteroptions.md)›): *Mat*

*Implementation of [ImageOperation](../interfaces/_op_types_.imageoperation.md)*

*Inherited from [AbstractOperation](_op_abstractoperation_.abstractoperation.md).[exec](_op_abstractoperation_.abstractoperation.md#exec)*

*Defined in [op/abstractOperation.ts:30](https://github.com/cancerberoSgx/mirada/blob/3544b58/ojos/src/op/abstractOperation.ts#L30)*

**Parameters:**

Name | Type |
------ | ------ |
`...o_` | [OperationExecParams](../modules/_op_types_.md#operationexecparams)‹[BilateralFilterOptions](../interfaces/_op_bilateralfilter_.bilateralfilteroptions.md)› |

**Returns:** *Mat*

___

###  resolveOptionsObject

▸ **resolveOptionsObject**(...`o`: [OperationExecParams](../modules/_op_types_.md#operationexecparams)‹[BilateralFilterOptions](../interfaces/_op_bilateralfilter_.bilateralfilteroptions.md)›): *[BilateralFilterOptions](../interfaces/_op_bilateralfilter_.bilateralfilteroptions.md) | undefined*

*Implementation of [ImageOperation](../interfaces/_op_types_.imageoperation.md)*

*Inherited from [AbstractOperation](_op_abstractoperation_.abstractoperation.md).[resolveOptionsObject](_op_abstractoperation_.abstractoperation.md#resolveoptionsobject)*

*Defined in [op/abstractOperation.ts:47](https://github.com/cancerberoSgx/mirada/blob/3544b58/ojos/src/op/abstractOperation.ts#L47)*

**Parameters:**

Name | Type |
------ | ------ |
`...o` | [OperationExecParams](../modules/_op_types_.md#operationexecparams)‹[BilateralFilterOptions](../interfaces/_op_bilateralfilter_.bilateralfilteroptions.md)› |

**Returns:** *[BilateralFilterOptions](../interfaces/_op_bilateralfilter_.bilateralfilteroptions.md) | undefined*

___

### `Protected` validate

▸ **validate**(`o`: [BilateralFilterOptions](../interfaces/_op_bilateralfilter_.bilateralfilteroptions.md)): *string | undefined*

*Inherited from [AbstractOperation](_op_abstractoperation_.abstractoperation.md).[validate](_op_abstractoperation_.abstractoperation.md#protected-validate)*

*Defined in [op/abstractOperation.ts:24](https://github.com/cancerberoSgx/mirada/blob/3544b58/ojos/src/op/abstractOperation.ts#L24)*

**Parameters:**

Name | Type |
------ | ------ |
`o` | [BilateralFilterOptions](../interfaces/_op_bilateralfilter_.bilateralfilteroptions.md) |

**Returns:** *string | undefined*
