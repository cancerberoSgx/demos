**[ojos](../README.md)**

[Globals](../README.md) › ["op/abstractOperation"](../modules/_op_abstractoperation_.md) › [AbstractOperation](_op_abstractoperation_.abstractoperation.md)

# Class: AbstractOperation <**T**>

## Type parameters

▪ **T**: *[OperationExecBaseOptions](../interfaces/_op_types_.operationexecbaseoptions.md)*

## Hierarchy

* **AbstractOperation**

  * [AdaptiveThreshold](_op_adaptivethreshold_.adaptivethreshold.md)

  * [BilateralFilter](_op_bilateralfilter_.bilateralfilter.md)

  * [Bitwise](_op_bitwise_.bitwise.md)

  * [BoxFilter](_op_boxfilter_.boxfilter.md)

  * [Canny](_op_canny_.canny.md)

  * [ConvertTo](_op_convertto_.convertto.md)

  * [Edge](_op_edge_.edge.md)

  * [FloodFill](_op_floodfill_.floodfill.md)

  * [GaussianBlur](_op_gaussianblur_.gaussianblur.md)

  * [HistEqualization](_op_histequalization_.histequalization.md)

  * [Math](_op_math_.math.md)

  * [MedianBlur](_op_medianblur_.medianblur.md)

  * [MorphologyEx](_op_morphologyex_.morphologyex.md)

  * [ReplaceColor](_op_replacecolor_.replacecolor.md)

  * [Threshold](_op_threshold_.threshold.md)

  * [WarpPerspective](_op_warpperspective_.warpperspective.md)

## Implements

* [ImageOperation](../interfaces/_op_types_.imageoperation.md)‹T›

## Index

### Constructors

* [constructor](_op_abstractoperation_.abstractoperation.md#constructor)

### Properties

* [defaultOptions](_op_abstractoperation_.abstractoperation.md#protected-optional-defaultoptions)
* [description](_op_abstractoperation_.abstractoperation.md#description)
* [isInPlace](_op_abstractoperation_.abstractoperation.md#protected-isinplace)
* [name](_op_abstractoperation_.abstractoperation.md#abstract-name)
* [noInPlace](_op_abstractoperation_.abstractoperation.md#noinplace)
* [sameSizeAndType](_op_abstractoperation_.abstractoperation.md#samesizeandtype)
* [validChannels](_op_abstractoperation_.abstractoperation.md#validchannels)
* [validateEachExec](_op_abstractoperation_.abstractoperation.md#protected-validateeachexec)
* [validated](_op_abstractoperation_.abstractoperation.md#protected-validated)

### Methods

* [_exec](_op_abstractoperation_.abstractoperation.md#protected-abstract-_exec)
* [afterExec](_op_abstractoperation_.abstractoperation.md#protected-afterexec)
* [allChannels](_op_abstractoperation_.abstractoperation.md#protected-allchannels)
* [checkInPlaceAfter](_op_abstractoperation_.abstractoperation.md#protected-checkinplaceafter)
* [checkInPlaceBefore](_op_abstractoperation_.abstractoperation.md#protected-checkinplacebefore)
* [checkInputImage](_op_abstractoperation_.abstractoperation.md#protected-checkinputimage)
* [checkOptions](_op_abstractoperation_.abstractoperation.md#protected-checkoptions)
* [exec](_op_abstractoperation_.abstractoperation.md#exec)
* [validate](_op_abstractoperation_.abstractoperation.md#protected-validate)

## Constructors

###  constructor

\+ **new AbstractOperation**(`defaultOptions?`: [T](undefined)): *[AbstractOperation](_op_abstractoperation_.abstractoperation.md)*

*Defined in [op/abstractOperation.ts:16](https://github.com/cancerberoSgx/mirada/blob/f2ba50d/ojos/src/op/abstractOperation.ts#L16)*

**Parameters:**

Name | Type |
------ | ------ |
`defaultOptions?` | [T](undefined) |

**Returns:** *[AbstractOperation](_op_abstractoperation_.abstractoperation.md)*

## Properties

### `Protected` `Optional` defaultOptions

• **defaultOptions**? : *[T](undefined)*

*Defined in [op/abstractOperation.ts:18](https://github.com/cancerberoSgx/mirada/blob/f2ba50d/ojos/src/op/abstractOperation.ts#L18)*

___

###  description

• **description**: *string* = "TODO"

*Implementation of [ImageOperation](../interfaces/_op_types_.imageoperation.md).[description](../interfaces/_op_types_.imageoperation.md#description)*

*Defined in [op/abstractOperation.ts:9](https://github.com/cancerberoSgx/mirada/blob/f2ba50d/ojos/src/op/abstractOperation.ts#L9)*

___

### `Protected` isInPlace

• **isInPlace**: *boolean* = false

*Defined in [op/abstractOperation.ts:12](https://github.com/cancerberoSgx/mirada/blob/f2ba50d/ojos/src/op/abstractOperation.ts#L12)*

___

### `Abstract` name

• **name**: *string*

*Implementation of [ImageOperation](../interfaces/_op_types_.imageoperation.md).[name](../interfaces/_op_types_.imageoperation.md#name)*

*Defined in [op/abstractOperation.ts:8](https://github.com/cancerberoSgx/mirada/blob/f2ba50d/ojos/src/op/abstractOperation.ts#L8)*

___

###  noInPlace

• **noInPlace**: *boolean* = false

*Implementation of [ImageOperation](../interfaces/_op_types_.imageoperation.md).[noInPlace](../interfaces/_op_types_.imageoperation.md#noinplace)*

*Defined in [op/abstractOperation.ts:10](https://github.com/cancerberoSgx/mirada/blob/f2ba50d/ojos/src/op/abstractOperation.ts#L10)*

___

###  sameSizeAndType

• **sameSizeAndType**: *boolean* = false

*Implementation of [ImageOperation](../interfaces/_op_types_.imageoperation.md).[sameSizeAndType](../interfaces/_op_types_.imageoperation.md#samesizeandtype)*

*Defined in [op/abstractOperation.ts:11](https://github.com/cancerberoSgx/mirada/blob/f2ba50d/ojos/src/op/abstractOperation.ts#L11)*

___

###  validChannels

• **validChannels**: *number[] | undefined* =  undefined

*Implementation of [ImageOperation](../interfaces/_op_types_.imageoperation.md).[validChannels](../interfaces/_op_types_.imageoperation.md#validchannels)*

*Defined in [op/abstractOperation.ts:16](https://github.com/cancerberoSgx/mirada/blob/f2ba50d/ojos/src/op/abstractOperation.ts#L16)*

___

### `Protected` validateEachExec

• **validateEachExec**: *boolean* = false

*Defined in [op/abstractOperation.ts:13](https://github.com/cancerberoSgx/mirada/blob/f2ba50d/ojos/src/op/abstractOperation.ts#L13)*

___

### `Protected` validated

• **validated**: *boolean* = false

*Defined in [op/abstractOperation.ts:14](https://github.com/cancerberoSgx/mirada/blob/f2ba50d/ojos/src/op/abstractOperation.ts#L14)*

## Methods

### `Protected` `Abstract` _exec

▸ **_exec**(`o`: [MandatoryDst](../modules/_op_abstractoperation_.md#mandatorydst)‹T›): *void*

*Defined in [op/abstractOperation.ts:24](https://github.com/cancerberoSgx/mirada/blob/f2ba50d/ojos/src/op/abstractOperation.ts#L24)*

**Parameters:**

Name | Type |
------ | ------ |
`o` | [MandatoryDst](../modules/_op_abstractoperation_.md#mandatorydst)‹T› |

**Returns:** *void*

___

### `Protected` afterExec

▸ **afterExec**(`options`: [MandatoryDst](../modules/_op_abstractoperation_.md#mandatorydst)‹T›): *void*

*Defined in [op/abstractOperation.ts:41](https://github.com/cancerberoSgx/mirada/blob/f2ba50d/ojos/src/op/abstractOperation.ts#L41)*

**Parameters:**

Name | Type |
------ | ------ |
`options` | [MandatoryDst](../modules/_op_abstractoperation_.md#mandatorydst)‹T› |

**Returns:** *void*

___

### `Protected` allChannels

▸ **allChannels**(`o`: T & [WithChannels](../interfaces/_op_types_.withchannels.md), `op`: function): *void*

*Defined in [op/abstractOperation.ts:89](https://github.com/cancerberoSgx/mirada/blob/f2ba50d/ojos/src/op/abstractOperation.ts#L89)*

**Parameters:**

▪ **o**: *T & [WithChannels](../interfaces/_op_types_.withchannels.md)*

▪ **op**: *function*

▸ (`o`: T): *void*

**Parameters:**

Name | Type |
------ | ------ |
`o` | T |

**Returns:** *void*

___

### `Protected` checkInPlaceAfter

▸ **checkInPlaceAfter**(`o`: [OperationExecBaseOptions](../interfaces/_op_types_.operationexecbaseoptions.md)): *void*

*Defined in [op/abstractOperation.ts:79](https://github.com/cancerberoSgx/mirada/blob/f2ba50d/ojos/src/op/abstractOperation.ts#L79)*

**Parameters:**

Name | Type |
------ | ------ |
`o` | [OperationExecBaseOptions](../interfaces/_op_types_.operationexecbaseoptions.md) |

**Returns:** *void*

___

### `Protected` checkInPlaceBefore

▸ **checkInPlaceBefore**(`o`: [OperationExecBaseOptions](../interfaces/_op_types_.operationexecbaseoptions.md)): *void*

*Defined in [op/abstractOperation.ts:70](https://github.com/cancerberoSgx/mirada/blob/f2ba50d/ojos/src/op/abstractOperation.ts#L70)*

**Parameters:**

Name | Type |
------ | ------ |
`o` | [OperationExecBaseOptions](../interfaces/_op_types_.operationexecbaseoptions.md) |

**Returns:** *void*

___

### `Protected` checkInputImage

▸ **checkInputImage**(`o`: T): *void*

*Defined in [op/abstractOperation.ts:43](https://github.com/cancerberoSgx/mirada/blob/f2ba50d/ojos/src/op/abstractOperation.ts#L43)*

**Parameters:**

Name | Type |
------ | ------ |
`o` | T |

**Returns:** *void*

___

### `Protected` checkOptions

▸ **checkOptions**(`o?`: [T](undefined)): *object & object*

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

*Defined in [op/abstractOperation.ts:26](https://github.com/cancerberoSgx/mirada/blob/f2ba50d/ojos/src/op/abstractOperation.ts#L26)*

**Parameters:**

Name | Type |
------ | ------ |
`o?` | [T](undefined) |

**Returns:** *Mat*

___

### `Protected` validate

▸ **validate**(`o`: T): *string | undefined*

*Defined in [op/abstractOperation.ts:21](https://github.com/cancerberoSgx/mirada/blob/f2ba50d/ojos/src/op/abstractOperation.ts#L21)*

**Parameters:**

Name | Type |
------ | ------ |
`o` | T |

**Returns:** *string | undefined*