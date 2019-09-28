[ojos](../README.md) › ["op/gaussianBlur"](../modules/_op_gaussianblur_.md) › [GaussianBlur](_op_gaussianblur_.gaussianblur.md)

# Class: GaussianBlur

convolves the source image with the specified Gaussian kernel. In-place filtering is supported.

## Hierarchy

* [AbstractOperation](_op_abstractoperation_.abstractoperation.md)‹[GaussianBlurOptions](../interfaces/_op_gaussianblur_.gaussianbluroptions.md)›

  ↳ **GaussianBlur**

## Implements

* [ImageOperation](../interfaces/_op_types_.imageoperation.md)‹[GaussianBlurOptions](../interfaces/_op_gaussianblur_.gaussianbluroptions.md)›

## Index

### Constructors

* [constructor](_op_gaussianblur_.gaussianblur.md#constructor)

### Properties

* [defaultOptions](_op_gaussianblur_.gaussianblur.md#protected-optional-defaultoptions)
* [description](_op_gaussianblur_.gaussianblur.md#description)
* [isInPlace](_op_gaussianblur_.gaussianblur.md#isinplace)
* [name](_op_gaussianblur_.gaussianblur.md#name)
* [noDst](_op_gaussianblur_.gaussianblur.md#nodst)
* [noInPlace](_op_gaussianblur_.gaussianblur.md#noinplace)
* [optionsOrder](_op_gaussianblur_.gaussianblur.md#optional-optionsorder)
* [sameSizeAndType](_op_gaussianblur_.gaussianblur.md#samesizeandtype)
* [validChannels](_op_gaussianblur_.gaussianblur.md#validchannels)
* [validateEachExec](_op_gaussianblur_.gaussianblur.md#protected-validateeachexec)
* [validated](_op_gaussianblur_.gaussianblur.md#protected-validated)

### Methods

* [_exec](_op_gaussianblur_.gaussianblur.md#protected-_exec)
* [afterExec](_op_gaussianblur_.gaussianblur.md#protected-afterexec)
* [allChannels](_op_gaussianblur_.gaussianblur.md#protected-allchannels)
* [checkDst](_op_gaussianblur_.gaussianblur.md#protected-checkdst)
* [checkInPlaceAfter](_op_gaussianblur_.gaussianblur.md#protected-checkinplaceafter)
* [checkInPlaceBefore](_op_gaussianblur_.gaussianblur.md#protected-checkinplacebefore)
* [checkInputImage](_op_gaussianblur_.gaussianblur.md#protected-checkinputimage)
* [checkOptions](_op_gaussianblur_.gaussianblur.md#protected-checkoptions)
* [exec](_op_gaussianblur_.gaussianblur.md#exec)
* [resolveOptionsObject](_op_gaussianblur_.gaussianblur.md#resolveoptionsobject)
* [validate](_op_gaussianblur_.gaussianblur.md#protected-validate)

## Constructors

###  constructor

\+ **new GaussianBlur**(`defaultOptions?`: [T](undefined)): *[GaussianBlur](_op_gaussianblur_.gaussianblur.md)*

*Inherited from [AbstractOperation](_op_abstractoperation_.abstractoperation.md).[constructor](_op_abstractoperation_.abstractoperation.md#constructor)*

*Defined in [op/abstractOperation.ts:18](https://github.com/cancerberoSgx/mirada/blob/3544b58/ojos/src/op/abstractOperation.ts#L18)*

**Parameters:**

Name | Type |
------ | ------ |
`defaultOptions?` | [T](undefined) |

**Returns:** *[GaussianBlur](_op_gaussianblur_.gaussianblur.md)*

## Properties

### `Protected` `Optional` defaultOptions

• **defaultOptions**? : *[T](undefined)*

*Inherited from [AbstractOperation](_op_abstractoperation_.abstractoperation.md).[defaultOptions](_op_abstractoperation_.abstractoperation.md#protected-optional-defaultoptions)*

*Defined in [op/abstractOperation.ts:20](https://github.com/cancerberoSgx/mirada/blob/3544b58/ojos/src/op/abstractOperation.ts#L20)*

___

###  description

• **description**: *string* = "convolves the source image with the specified Gaussian kernel. In-place filtering is supported."

*Implementation of [ImageOperation](../interfaces/_op_types_.imageoperation.md).[description](../interfaces/_op_types_.imageoperation.md#description)*

*Overrides [AbstractOperation](_op_abstractoperation_.abstractoperation.md).[description](_op_abstractoperation_.abstractoperation.md#description)*

*Defined in [op/gaussianBlur.ts:18](https://github.com/cancerberoSgx/mirada/blob/3544b58/ojos/src/op/gaussianBlur.ts#L18)*

___

###  isInPlace

• **isInPlace**: *boolean* = false

*Inherited from [AbstractOperation](_op_abstractoperation_.abstractoperation.md).[isInPlace](_op_abstractoperation_.abstractoperation.md#isinplace)*

*Defined in [op/abstractOperation.ts:13](https://github.com/cancerberoSgx/mirada/blob/3544b58/ojos/src/op/abstractOperation.ts#L13)*

___

###  name

• **name**: *string* = "GaussianBlur"

*Implementation of [ImageOperation](../interfaces/_op_types_.imageoperation.md).[name](../interfaces/_op_types_.imageoperation.md#name)*

*Overrides [AbstractOperation](_op_abstractoperation_.abstractoperation.md).[name](_op_abstractoperation_.abstractoperation.md#abstract-name)*

*Defined in [op/gaussianBlur.ts:17](https://github.com/cancerberoSgx/mirada/blob/3544b58/ojos/src/op/gaussianBlur.ts#L17)*

___

###  noDst

• **noDst**: *boolean* = false

*Implementation of [ImageOperation](../interfaces/_op_types_.imageoperation.md).[noDst](../interfaces/_op_types_.imageoperation.md#nodst)*

*Inherited from [AbstractOperation](_op_abstractoperation_.abstractoperation.md).[noDst](_op_abstractoperation_.abstractoperation.md#nodst)*

*Defined in [op/abstractOperation.ts:14](https://github.com/cancerberoSgx/mirada/blob/3544b58/ojos/src/op/abstractOperation.ts#L14)*

___

###  noInPlace

• **noInPlace**: *boolean* = false

*Implementation of [ImageOperation](../interfaces/_op_types_.imageoperation.md).[noInPlace](../interfaces/_op_types_.imageoperation.md#noinplace)*

*Inherited from [AbstractOperation](_op_abstractoperation_.abstractoperation.md).[noInPlace](_op_abstractoperation_.abstractoperation.md#noinplace)*

*Defined in [op/abstractOperation.ts:11](https://github.com/cancerberoSgx/mirada/blob/3544b58/ojos/src/op/abstractOperation.ts#L11)*

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

*Defined in [op/gaussianBlur.ts:19](https://github.com/cancerberoSgx/mirada/blob/3544b58/ojos/src/op/gaussianBlur.ts#L19)*

___

###  validChannels

• **validChannels**: *number[] | undefined* =  undefined

*Implementation of [ImageOperation](../interfaces/_op_types_.imageoperation.md).[validChannels](../interfaces/_op_types_.imageoperation.md#validchannels)*

*Inherited from [AbstractOperation](_op_abstractoperation_.abstractoperation.md).[validChannels](_op_abstractoperation_.abstractoperation.md#validchannels)*

*Defined in [op/abstractOperation.ts:18](https://github.com/cancerberoSgx/mirada/blob/3544b58/ojos/src/op/abstractOperation.ts#L18)*

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

▸ **_exec**(`o`: [GaussianBlurOptions](../interfaces/_op_gaussianblur_.gaussianbluroptions.md)): *void*

*Overrides [AbstractOperation](_op_abstractoperation_.abstractoperation.md).[_exec](_op_abstractoperation_.abstractoperation.md#protected-abstract-_exec)*

*Defined in [op/gaussianBlur.ts:20](https://github.com/cancerberoSgx/mirada/blob/3544b58/ojos/src/op/gaussianBlur.ts#L20)*

**Parameters:**

Name | Type |
------ | ------ |
`o` | [GaussianBlurOptions](../interfaces/_op_gaussianblur_.gaussianbluroptions.md) |

**Returns:** *void*

___

### `Protected` afterExec

▸ **afterExec**(`options`: [MandatoryDst](../modules/_op_abstractoperation_.md#mandatorydst)‹[GaussianBlurOptions](../interfaces/_op_gaussianblur_.gaussianbluroptions.md)›): *void*

*Inherited from [AbstractOperation](_op_abstractoperation_.abstractoperation.md).[afterExec](_op_abstractoperation_.abstractoperation.md#protected-afterexec)*

*Defined in [op/abstractOperation.ts:64](https://github.com/cancerberoSgx/mirada/blob/3544b58/ojos/src/op/abstractOperation.ts#L64)*

**Parameters:**

Name | Type |
------ | ------ |
`options` | [MandatoryDst](../modules/_op_abstractoperation_.md#mandatorydst)‹[GaussianBlurOptions](../interfaces/_op_gaussianblur_.gaussianbluroptions.md)› |

**Returns:** *void*

___

### `Protected` allChannels

▸ **allChannels**(`o`: [GaussianBlurOptions](../interfaces/_op_gaussianblur_.gaussianbluroptions.md) & [WithChannels](../interfaces/_op_types_.withchannels.md), `op`: function): *void*

*Inherited from [AbstractOperation](_op_abstractoperation_.abstractoperation.md).[allChannels](_op_abstractoperation_.abstractoperation.md#protected-allchannels)*

*Defined in [op/abstractOperation.ts:127](https://github.com/cancerberoSgx/mirada/blob/3544b58/ojos/src/op/abstractOperation.ts#L127)*

**Parameters:**

▪ **o**: *[GaussianBlurOptions](../interfaces/_op_gaussianblur_.gaussianbluroptions.md) & [WithChannels](../interfaces/_op_types_.withchannels.md)*

▪ **op**: *function*

▸ (`o`: [GaussianBlurOptions](../interfaces/_op_gaussianblur_.gaussianbluroptions.md)): *void*

**Parameters:**

Name | Type |
------ | ------ |
`o` | [GaussianBlurOptions](../interfaces/_op_gaussianblur_.gaussianbluroptions.md) |

**Returns:** *void*

___

### `Protected` checkDst

▸ **checkDst**(`options`: [GaussianBlurOptions](../interfaces/_op_gaussianblur_.gaussianbluroptions.md)): *void*

*Inherited from [AbstractOperation](_op_abstractoperation_.abstractoperation.md).[checkDst](_op_abstractoperation_.abstractoperation.md#protected-checkdst)*

*Defined in [op/abstractOperation.ts:89](https://github.com/cancerberoSgx/mirada/blob/3544b58/ojos/src/op/abstractOperation.ts#L89)*

**Parameters:**

Name | Type |
------ | ------ |
`options` | [GaussianBlurOptions](../interfaces/_op_gaussianblur_.gaussianbluroptions.md) |

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

▸ **checkInputImage**(`o`: [GaussianBlurOptions](../interfaces/_op_gaussianblur_.gaussianbluroptions.md)): *void*

*Inherited from [AbstractOperation](_op_abstractoperation_.abstractoperation.md).[checkInputImage](_op_abstractoperation_.abstractoperation.md#protected-checkinputimage)*

*Defined in [op/abstractOperation.ts:67](https://github.com/cancerberoSgx/mirada/blob/3544b58/ojos/src/op/abstractOperation.ts#L67)*

**Parameters:**

Name | Type |
------ | ------ |
`o` | [GaussianBlurOptions](../interfaces/_op_gaussianblur_.gaussianbluroptions.md) |

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

▸ **exec**(...`o_`: [OperationExecParams](../modules/_op_types_.md#operationexecparams)‹[GaussianBlurOptions](../interfaces/_op_gaussianblur_.gaussianbluroptions.md)›): *Mat*

*Implementation of [ImageOperation](../interfaces/_op_types_.imageoperation.md)*

*Inherited from [AbstractOperation](_op_abstractoperation_.abstractoperation.md).[exec](_op_abstractoperation_.abstractoperation.md#exec)*

*Defined in [op/abstractOperation.ts:30](https://github.com/cancerberoSgx/mirada/blob/3544b58/ojos/src/op/abstractOperation.ts#L30)*

**Parameters:**

Name | Type |
------ | ------ |
`...o_` | [OperationExecParams](../modules/_op_types_.md#operationexecparams)‹[GaussianBlurOptions](../interfaces/_op_gaussianblur_.gaussianbluroptions.md)› |

**Returns:** *Mat*

___

###  resolveOptionsObject

▸ **resolveOptionsObject**(...`o`: [OperationExecParams](../modules/_op_types_.md#operationexecparams)‹[GaussianBlurOptions](../interfaces/_op_gaussianblur_.gaussianbluroptions.md)›): *[GaussianBlurOptions](../interfaces/_op_gaussianblur_.gaussianbluroptions.md) | undefined*

*Implementation of [ImageOperation](../interfaces/_op_types_.imageoperation.md)*

*Inherited from [AbstractOperation](_op_abstractoperation_.abstractoperation.md).[resolveOptionsObject](_op_abstractoperation_.abstractoperation.md#resolveoptionsobject)*

*Defined in [op/abstractOperation.ts:47](https://github.com/cancerberoSgx/mirada/blob/3544b58/ojos/src/op/abstractOperation.ts#L47)*

**Parameters:**

Name | Type |
------ | ------ |
`...o` | [OperationExecParams](../modules/_op_types_.md#operationexecparams)‹[GaussianBlurOptions](../interfaces/_op_gaussianblur_.gaussianbluroptions.md)› |

**Returns:** *[GaussianBlurOptions](../interfaces/_op_gaussianblur_.gaussianbluroptions.md) | undefined*

___

### `Protected` validate

▸ **validate**(`o`: [GaussianBlurOptions](../interfaces/_op_gaussianblur_.gaussianbluroptions.md)): *string | undefined*

*Inherited from [AbstractOperation](_op_abstractoperation_.abstractoperation.md).[validate](_op_abstractoperation_.abstractoperation.md#protected-validate)*

*Defined in [op/abstractOperation.ts:24](https://github.com/cancerberoSgx/mirada/blob/3544b58/ojos/src/op/abstractOperation.ts#L24)*

**Parameters:**

Name | Type |
------ | ------ |
`o` | [GaussianBlurOptions](../interfaces/_op_gaussianblur_.gaussianbluroptions.md) |

**Returns:** *string | undefined*
