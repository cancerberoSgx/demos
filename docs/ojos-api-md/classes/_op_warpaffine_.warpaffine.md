[ojos](../README.md) › ["op/warpAffine"](../modules/_op_warpaffine_.md) › [WarpAffine](_op_warpaffine_.warpaffine.md)

# Class: WarpAffine

Will use [estimateAffine2D] to calculate affine matrix from given [inputs] and [outputs] and then [warpAffine] to transform.

## Hierarchy

* [AbstractOperation](_op_abstractoperation_.abstractoperation.md)‹[WarpAffineOptions](../interfaces/_op_warpaffine_.warpaffineoptions.md)›

  ↳ **WarpAffine**

## Implements

* [ImageOperation](../interfaces/_op_types_.imageoperation.md)‹[WarpAffineOptions](../interfaces/_op_warpaffine_.warpaffineoptions.md)›

## Index

### Constructors

* [constructor](_op_warpaffine_.warpaffine.md#constructor)

### Properties

* [defaultOptions](_op_warpaffine_.warpaffine.md#protected-optional-defaultoptions)
* [description](_op_warpaffine_.warpaffine.md#description)
* [isInPlace](_op_warpaffine_.warpaffine.md#isinplace)
* [name](_op_warpaffine_.warpaffine.md#name)
* [noDst](_op_warpaffine_.warpaffine.md#nodst)
* [noInPlace](_op_warpaffine_.warpaffine.md#noinplace)
* [optionsOrder](_op_warpaffine_.warpaffine.md#optional-optionsorder)
* [sameSizeAndType](_op_warpaffine_.warpaffine.md#samesizeandtype)
* [validChannels](_op_warpaffine_.warpaffine.md#validchannels)
* [validateEachExec](_op_warpaffine_.warpaffine.md#protected-validateeachexec)
* [validated](_op_warpaffine_.warpaffine.md#protected-validated)

### Methods

* [_exec](_op_warpaffine_.warpaffine.md#protected-_exec)
* [afterExec](_op_warpaffine_.warpaffine.md#protected-afterexec)
* [allChannels](_op_warpaffine_.warpaffine.md#protected-allchannels)
* [checkDst](_op_warpaffine_.warpaffine.md#protected-checkdst)
* [checkInPlaceAfter](_op_warpaffine_.warpaffine.md#protected-checkinplaceafter)
* [checkInPlaceBefore](_op_warpaffine_.warpaffine.md#protected-checkinplacebefore)
* [checkInputImage](_op_warpaffine_.warpaffine.md#protected-checkinputimage)
* [checkOptions](_op_warpaffine_.warpaffine.md#protected-checkoptions)
* [exec](_op_warpaffine_.warpaffine.md#exec)
* [resolveOptionsObject](_op_warpaffine_.warpaffine.md#resolveoptionsobject)
* [validate](_op_warpaffine_.warpaffine.md#protected-validate)

## Constructors

###  constructor

\+ **new WarpAffine**(`defaultOptions?`: [T](undefined)): *[WarpAffine](_op_warpaffine_.warpaffine.md)*

*Inherited from [AbstractOperation](_op_abstractoperation_.abstractoperation.md).[constructor](_op_abstractoperation_.abstractoperation.md#constructor)*

*Defined in [op/abstractOperation.ts:18](https://github.com/cancerberoSgx/mirada/blob/3544b58/ojos/src/op/abstractOperation.ts#L18)*

**Parameters:**

Name | Type |
------ | ------ |
`defaultOptions?` | [T](undefined) |

**Returns:** *[WarpAffine](_op_warpaffine_.warpaffine.md)*

## Properties

### `Protected` `Optional` defaultOptions

• **defaultOptions**? : *[T](undefined)*

*Inherited from [AbstractOperation](_op_abstractoperation_.abstractoperation.md).[defaultOptions](_op_abstractoperation_.abstractoperation.md#protected-optional-defaultoptions)*

*Defined in [op/abstractOperation.ts:20](https://github.com/cancerberoSgx/mirada/blob/3544b58/ojos/src/op/abstractOperation.ts#L20)*

___

###  description

• **description**: *string* =  `Will use [estimateAffine2D] to calculate affine matrix from given [inputs] and [outputs] and then [warpAffine] to transform.`

*Implementation of [ImageOperation](../interfaces/_op_types_.imageoperation.md).[description](../interfaces/_op_types_.imageoperation.md#description)*

*Overrides [AbstractOperation](_op_abstractoperation_.abstractoperation.md).[description](_op_abstractoperation_.abstractoperation.md#description)*

*Defined in [op/warpAffine.ts:37](https://github.com/cancerberoSgx/mirada/blob/3544b58/ojos/src/op/warpAffine.ts#L37)*

___

###  isInPlace

• **isInPlace**: *boolean* = false

*Inherited from [AbstractOperation](_op_abstractoperation_.abstractoperation.md).[isInPlace](_op_abstractoperation_.abstractoperation.md#isinplace)*

*Defined in [op/abstractOperation.ts:13](https://github.com/cancerberoSgx/mirada/blob/3544b58/ojos/src/op/abstractOperation.ts#L13)*

___

###  name

• **name**: *string* = "WarpAffine"

*Implementation of [ImageOperation](../interfaces/_op_types_.imageoperation.md).[name](../interfaces/_op_types_.imageoperation.md#name)*

*Overrides [AbstractOperation](_op_abstractoperation_.abstractoperation.md).[name](_op_abstractoperation_.abstractoperation.md#abstract-name)*

*Defined in [op/warpAffine.ts:36](https://github.com/cancerberoSgx/mirada/blob/3544b58/ojos/src/op/warpAffine.ts#L36)*

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

*Defined in [op/warpAffine.ts:38](https://github.com/cancerberoSgx/mirada/blob/3544b58/ojos/src/op/warpAffine.ts#L38)*

___

### `Optional` optionsOrder

• **optionsOrder**? : *keyof T[]*

*Implementation of [ImageOperation](../interfaces/_op_types_.imageoperation.md).[optionsOrder](../interfaces/_op_types_.imageoperation.md#optional-optionsorder)*

*Inherited from [AbstractOperation](_op_abstractoperation_.abstractoperation.md).[optionsOrder](_op_abstractoperation_.abstractoperation.md#optional-optionsorder)*

*Defined in [op/abstractOperation.ts:17](https://github.com/cancerberoSgx/mirada/blob/3544b58/ojos/src/op/abstractOperation.ts#L17)*

___

###  sameSizeAndType

• **sameSizeAndType**: *boolean* = false

*Implementation of [ImageOperation](../interfaces/_op_types_.imageoperation.md).[sameSizeAndType](../interfaces/_op_types_.imageoperation.md#samesizeandtype)*

*Inherited from [AbstractOperation](_op_abstractoperation_.abstractoperation.md).[sameSizeAndType](_op_abstractoperation_.abstractoperation.md#samesizeandtype)*

*Defined in [op/abstractOperation.ts:12](https://github.com/cancerberoSgx/mirada/blob/3544b58/ojos/src/op/abstractOperation.ts#L12)*

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

▸ **_exec**(`o`: [WarpAffineOptions](../interfaces/_op_warpaffine_.warpaffineoptions.md)): *void*

*Overrides [AbstractOperation](_op_abstractoperation_.abstractoperation.md).[_exec](_op_abstractoperation_.abstractoperation.md#protected-abstract-_exec)*

*Defined in [op/warpAffine.ts:39](https://github.com/cancerberoSgx/mirada/blob/3544b58/ojos/src/op/warpAffine.ts#L39)*

**Parameters:**

Name | Type |
------ | ------ |
`o` | [WarpAffineOptions](../interfaces/_op_warpaffine_.warpaffineoptions.md) |

**Returns:** *void*

___

### `Protected` afterExec

▸ **afterExec**(`options`: [MandatoryDst](../modules/_op_abstractoperation_.md#mandatorydst)‹[WarpAffineOptions](../interfaces/_op_warpaffine_.warpaffineoptions.md)›): *void*

*Inherited from [AbstractOperation](_op_abstractoperation_.abstractoperation.md).[afterExec](_op_abstractoperation_.abstractoperation.md#protected-afterexec)*

*Defined in [op/abstractOperation.ts:64](https://github.com/cancerberoSgx/mirada/blob/3544b58/ojos/src/op/abstractOperation.ts#L64)*

**Parameters:**

Name | Type |
------ | ------ |
`options` | [MandatoryDst](../modules/_op_abstractoperation_.md#mandatorydst)‹[WarpAffineOptions](../interfaces/_op_warpaffine_.warpaffineoptions.md)› |

**Returns:** *void*

___

### `Protected` allChannels

▸ **allChannels**(`o`: [WarpAffineOptions](../interfaces/_op_warpaffine_.warpaffineoptions.md) & [WithChannels](../interfaces/_op_types_.withchannels.md), `op`: function): *void*

*Inherited from [AbstractOperation](_op_abstractoperation_.abstractoperation.md).[allChannels](_op_abstractoperation_.abstractoperation.md#protected-allchannels)*

*Defined in [op/abstractOperation.ts:127](https://github.com/cancerberoSgx/mirada/blob/3544b58/ojos/src/op/abstractOperation.ts#L127)*

**Parameters:**

▪ **o**: *[WarpAffineOptions](../interfaces/_op_warpaffine_.warpaffineoptions.md) & [WithChannels](../interfaces/_op_types_.withchannels.md)*

▪ **op**: *function*

▸ (`o`: [WarpAffineOptions](../interfaces/_op_warpaffine_.warpaffineoptions.md)): *void*

**Parameters:**

Name | Type |
------ | ------ |
`o` | [WarpAffineOptions](../interfaces/_op_warpaffine_.warpaffineoptions.md) |

**Returns:** *void*

___

### `Protected` checkDst

▸ **checkDst**(`options`: [WarpAffineOptions](../interfaces/_op_warpaffine_.warpaffineoptions.md)): *void*

*Inherited from [AbstractOperation](_op_abstractoperation_.abstractoperation.md).[checkDst](_op_abstractoperation_.abstractoperation.md#protected-checkdst)*

*Defined in [op/abstractOperation.ts:89](https://github.com/cancerberoSgx/mirada/blob/3544b58/ojos/src/op/abstractOperation.ts#L89)*

**Parameters:**

Name | Type |
------ | ------ |
`options` | [WarpAffineOptions](../interfaces/_op_warpaffine_.warpaffineoptions.md) |

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

▸ **checkInputImage**(`o`: [WarpAffineOptions](../interfaces/_op_warpaffine_.warpaffineoptions.md)): *void*

*Inherited from [AbstractOperation](_op_abstractoperation_.abstractoperation.md).[checkInputImage](_op_abstractoperation_.abstractoperation.md#protected-checkinputimage)*

*Defined in [op/abstractOperation.ts:67](https://github.com/cancerberoSgx/mirada/blob/3544b58/ojos/src/op/abstractOperation.ts#L67)*

**Parameters:**

Name | Type |
------ | ------ |
`o` | [WarpAffineOptions](../interfaces/_op_warpaffine_.warpaffineoptions.md) |

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

▸ **exec**(...`o_`: [OperationExecParams](../modules/_op_types_.md#operationexecparams)‹[WarpAffineOptions](../interfaces/_op_warpaffine_.warpaffineoptions.md)›): *Mat*

*Implementation of [ImageOperation](../interfaces/_op_types_.imageoperation.md)*

*Inherited from [AbstractOperation](_op_abstractoperation_.abstractoperation.md).[exec](_op_abstractoperation_.abstractoperation.md#exec)*

*Defined in [op/abstractOperation.ts:30](https://github.com/cancerberoSgx/mirada/blob/3544b58/ojos/src/op/abstractOperation.ts#L30)*

**Parameters:**

Name | Type |
------ | ------ |
`...o_` | [OperationExecParams](../modules/_op_types_.md#operationexecparams)‹[WarpAffineOptions](../interfaces/_op_warpaffine_.warpaffineoptions.md)› |

**Returns:** *Mat*

___

###  resolveOptionsObject

▸ **resolveOptionsObject**(...`o`: [OperationExecParams](../modules/_op_types_.md#operationexecparams)‹[WarpAffineOptions](../interfaces/_op_warpaffine_.warpaffineoptions.md)›): *[WarpAffineOptions](../interfaces/_op_warpaffine_.warpaffineoptions.md) | undefined*

*Implementation of [ImageOperation](../interfaces/_op_types_.imageoperation.md)*

*Inherited from [AbstractOperation](_op_abstractoperation_.abstractoperation.md).[resolveOptionsObject](_op_abstractoperation_.abstractoperation.md#resolveoptionsobject)*

*Defined in [op/abstractOperation.ts:47](https://github.com/cancerberoSgx/mirada/blob/3544b58/ojos/src/op/abstractOperation.ts#L47)*

**Parameters:**

Name | Type |
------ | ------ |
`...o` | [OperationExecParams](../modules/_op_types_.md#operationexecparams)‹[WarpAffineOptions](../interfaces/_op_warpaffine_.warpaffineoptions.md)› |

**Returns:** *[WarpAffineOptions](../interfaces/_op_warpaffine_.warpaffineoptions.md) | undefined*

___

### `Protected` validate

▸ **validate**(`o`: [WarpAffineOptions](../interfaces/_op_warpaffine_.warpaffineoptions.md)): *string | undefined*

*Inherited from [AbstractOperation](_op_abstractoperation_.abstractoperation.md).[validate](_op_abstractoperation_.abstractoperation.md#protected-validate)*

*Defined in [op/abstractOperation.ts:24](https://github.com/cancerberoSgx/mirada/blob/3544b58/ojos/src/op/abstractOperation.ts#L24)*

**Parameters:**

Name | Type |
------ | ------ |
`o` | [WarpAffineOptions](../interfaces/_op_warpaffine_.warpaffineoptions.md) |

**Returns:** *string | undefined*
