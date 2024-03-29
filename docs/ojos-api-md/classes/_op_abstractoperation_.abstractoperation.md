[ojos](../README.md) › ["op/abstractOperation"](../modules/_op_abstractoperation_.md) › [AbstractOperation](_op_abstractoperation_.abstractoperation.md)

# Class: AbstractOperation <**T**>

## Type parameters

▪ **T**: *[OperationExecBaseOptions](../interfaces/_op_types_.operationexecbaseoptions.md)*

## Hierarchy

* **AbstractOperation**

  ↳ [AdaptiveThreshold](_op_adaptivethreshold_.adaptivethreshold.md)

  ↳ [BilateralFilter](_op_bilateralfilter_.bilateralfilter.md)

  ↳ [Bitwise](_op_bitwise_.bitwise.md)

  ↳ [BoxFilter](_op_boxfilter_.boxfilter.md)

  ↳ [Canny](_op_canny_.canny.md)

  ↳ [Cartoonize](_op_cartoonize_.cartoonize.md)

  ↳ [Circle](_op_circle_.circle.md)

  ↳ [ConvertTo](_op_convertto_.convertto.md)

  ↳ [CvtColor](_op_cvtcolor_.cvtcolor.md)

  ↳ [Edge](_op_edge_.edge.md)

  ↳ [Ellipse](_op_ellipse_.ellipse.md)

  ↳ [Filter2D](_op_filter2d_.filter2d.md)

  ↳ [FloodFill](_op_floodfill_.floodfill.md)

  ↳ [GaussianBlur](_op_gaussianblur_.gaussianblur.md)

  ↳ [HistEqualization](_op_histequalization_.histequalization.md)

  ↳ [HoughLinesP](_op_houghlinesp_.houghlinesp.md)

  ↳ [InRange](_op_inrange_.inrange.md)

  ↳ [Line](_op_line_.line.md)

  ↳ [Math](_op_math_.math.md)

  ↳ [MedianBlur](_op_medianblur_.medianblur.md)

  ↳ [MorphologyEx](_op_morphologyex_.morphologyex.md)

  ↳ [Pyr](_op_pyr_.pyr.md)

  ↳ [Rectangle](_op_rectangle_.rectangle.md)

  ↳ [ReplaceColor](_op_replacecolor_.replacecolor.md)

  ↳ [Roi](_op_roi_.roi.md)

  ↳ [Threshold](_op_threshold_.threshold.md)

  ↳ [ToRgba](_op_torgba_.torgba.md)

  ↳ [WarpAffine](_op_warpaffine_.warpaffine.md)

  ↳ [WarpPerspective](_op_warpperspective_.warpperspective.md)

  ↳ [Wave](_op_wave_.wave.md)

## Implements

* [ImageOperation](../interfaces/_op_types_.imageoperation.md)‹T›

## Index

### Constructors

* [constructor](_op_abstractoperation_.abstractoperation.md#constructor)

### Properties

* [defaultOptions](_op_abstractoperation_.abstractoperation.md#protected-optional-defaultoptions)
* [description](_op_abstractoperation_.abstractoperation.md#description)
* [isInPlace](_op_abstractoperation_.abstractoperation.md#isinplace)
* [name](_op_abstractoperation_.abstractoperation.md#abstract-name)
* [noDst](_op_abstractoperation_.abstractoperation.md#nodst)
* [noInPlace](_op_abstractoperation_.abstractoperation.md#noinplace)
* [optionsOrder](_op_abstractoperation_.abstractoperation.md#optional-optionsorder)
* [sameSizeAndType](_op_abstractoperation_.abstractoperation.md#samesizeandtype)
* [validChannels](_op_abstractoperation_.abstractoperation.md#validchannels)
* [validateEachExec](_op_abstractoperation_.abstractoperation.md#protected-validateeachexec)
* [validated](_op_abstractoperation_.abstractoperation.md#protected-validated)

### Methods

* [_exec](_op_abstractoperation_.abstractoperation.md#protected-abstract-_exec)
* [afterExec](_op_abstractoperation_.abstractoperation.md#protected-afterexec)
* [allChannels](_op_abstractoperation_.abstractoperation.md#protected-allchannels)
* [checkDst](_op_abstractoperation_.abstractoperation.md#protected-checkdst)
* [checkInPlaceAfter](_op_abstractoperation_.abstractoperation.md#protected-checkinplaceafter)
* [checkInPlaceBefore](_op_abstractoperation_.abstractoperation.md#protected-checkinplacebefore)
* [checkInputImage](_op_abstractoperation_.abstractoperation.md#protected-checkinputimage)
* [checkOptions](_op_abstractoperation_.abstractoperation.md#protected-checkoptions)
* [exec](_op_abstractoperation_.abstractoperation.md#exec)
* [resolveOptionsObject](_op_abstractoperation_.abstractoperation.md#resolveoptionsobject)
* [validate](_op_abstractoperation_.abstractoperation.md#protected-validate)

## Constructors

###  constructor

\+ **new AbstractOperation**(`defaultOptions?`: [T](undefined)): *[AbstractOperation](_op_abstractoperation_.abstractoperation.md)*

*Defined in [op/abstractOperation.ts:18](https://github.com/cancerberoSgx/mirada/blob/3544b58/ojos/src/op/abstractOperation.ts#L18)*

**Parameters:**

Name | Type |
------ | ------ |
`defaultOptions?` | [T](undefined) |

**Returns:** *[AbstractOperation](_op_abstractoperation_.abstractoperation.md)*

## Properties

### `Protected` `Optional` defaultOptions

• **defaultOptions**? : *[T](undefined)*

*Defined in [op/abstractOperation.ts:20](https://github.com/cancerberoSgx/mirada/blob/3544b58/ojos/src/op/abstractOperation.ts#L20)*

___

###  description

• **description**: *string* = ""

*Implementation of [ImageOperation](../interfaces/_op_types_.imageoperation.md).[description](../interfaces/_op_types_.imageoperation.md#description)*

*Defined in [op/abstractOperation.ts:10](https://github.com/cancerberoSgx/mirada/blob/3544b58/ojos/src/op/abstractOperation.ts#L10)*

___

###  isInPlace

• **isInPlace**: *boolean* = false

*Defined in [op/abstractOperation.ts:13](https://github.com/cancerberoSgx/mirada/blob/3544b58/ojos/src/op/abstractOperation.ts#L13)*

___

### `Abstract` name

• **name**: *string*

*Implementation of [ImageOperation](../interfaces/_op_types_.imageoperation.md).[name](../interfaces/_op_types_.imageoperation.md#name)*

*Defined in [op/abstractOperation.ts:9](https://github.com/cancerberoSgx/mirada/blob/3544b58/ojos/src/op/abstractOperation.ts#L9)*

___

###  noDst

• **noDst**: *boolean* = false

*Implementation of [ImageOperation](../interfaces/_op_types_.imageoperation.md).[noDst](../interfaces/_op_types_.imageoperation.md#nodst)*

*Defined in [op/abstractOperation.ts:14](https://github.com/cancerberoSgx/mirada/blob/3544b58/ojos/src/op/abstractOperation.ts#L14)*

___

###  noInPlace

• **noInPlace**: *boolean* = false

*Implementation of [ImageOperation](../interfaces/_op_types_.imageoperation.md).[noInPlace](../interfaces/_op_types_.imageoperation.md#noinplace)*

*Defined in [op/abstractOperation.ts:11](https://github.com/cancerberoSgx/mirada/blob/3544b58/ojos/src/op/abstractOperation.ts#L11)*

___

### `Optional` optionsOrder

• **optionsOrder**? : *keyof T[]*

*Implementation of [ImageOperation](../interfaces/_op_types_.imageoperation.md).[optionsOrder](../interfaces/_op_types_.imageoperation.md#optional-optionsorder)*

*Defined in [op/abstractOperation.ts:17](https://github.com/cancerberoSgx/mirada/blob/3544b58/ojos/src/op/abstractOperation.ts#L17)*

___

###  sameSizeAndType

• **sameSizeAndType**: *boolean* = false

*Implementation of [ImageOperation](../interfaces/_op_types_.imageoperation.md).[sameSizeAndType](../interfaces/_op_types_.imageoperation.md#samesizeandtype)*

*Defined in [op/abstractOperation.ts:12](https://github.com/cancerberoSgx/mirada/blob/3544b58/ojos/src/op/abstractOperation.ts#L12)*

___

###  validChannels

• **validChannels**: *number[] | undefined* =  undefined

*Implementation of [ImageOperation](../interfaces/_op_types_.imageoperation.md).[validChannels](../interfaces/_op_types_.imageoperation.md#validchannels)*

*Defined in [op/abstractOperation.ts:18](https://github.com/cancerberoSgx/mirada/blob/3544b58/ojos/src/op/abstractOperation.ts#L18)*

___

### `Protected` validateEachExec

• **validateEachExec**: *boolean* = false

*Defined in [op/abstractOperation.ts:15](https://github.com/cancerberoSgx/mirada/blob/3544b58/ojos/src/op/abstractOperation.ts#L15)*

___

### `Protected` validated

• **validated**: *boolean* = false

*Defined in [op/abstractOperation.ts:16](https://github.com/cancerberoSgx/mirada/blob/3544b58/ojos/src/op/abstractOperation.ts#L16)*

## Methods

### `Protected` `Abstract` _exec

▸ **_exec**(`o`: [MandatoryDst](../modules/_op_abstractoperation_.md#mandatorydst)‹T›): *void*

*Defined in [op/abstractOperation.ts:28](https://github.com/cancerberoSgx/mirada/blob/3544b58/ojos/src/op/abstractOperation.ts#L28)*

**Parameters:**

Name | Type |
------ | ------ |
`o` | [MandatoryDst](../modules/_op_abstractoperation_.md#mandatorydst)‹T› |

**Returns:** *void*

___

### `Protected` afterExec

▸ **afterExec**(`options`: [MandatoryDst](../modules/_op_abstractoperation_.md#mandatorydst)‹T›): *void*

*Defined in [op/abstractOperation.ts:64](https://github.com/cancerberoSgx/mirada/blob/3544b58/ojos/src/op/abstractOperation.ts#L64)*

**Parameters:**

Name | Type |
------ | ------ |
`options` | [MandatoryDst](../modules/_op_abstractoperation_.md#mandatorydst)‹T› |

**Returns:** *void*

___

### `Protected` allChannels

▸ **allChannels**(`o`: T & [WithChannels](../interfaces/_op_types_.withchannels.md), `op`: function): *void*

*Defined in [op/abstractOperation.ts:127](https://github.com/cancerberoSgx/mirada/blob/3544b58/ojos/src/op/abstractOperation.ts#L127)*

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

### `Protected` checkDst

▸ **checkDst**(`options`: T): *void*

*Defined in [op/abstractOperation.ts:89](https://github.com/cancerberoSgx/mirada/blob/3544b58/ojos/src/op/abstractOperation.ts#L89)*

**Parameters:**

Name | Type |
------ | ------ |
`options` | T |

**Returns:** *void*

___

### `Protected` checkInPlaceAfter

▸ **checkInPlaceAfter**(`o`: [OperationExecBaseOptions](../interfaces/_op_types_.operationexecbaseoptions.md)): *void*

*Defined in [op/abstractOperation.ts:117](https://github.com/cancerberoSgx/mirada/blob/3544b58/ojos/src/op/abstractOperation.ts#L117)*

**Parameters:**

Name | Type |
------ | ------ |
`o` | [OperationExecBaseOptions](../interfaces/_op_types_.operationexecbaseoptions.md) |

**Returns:** *void*

___

### `Protected` checkInPlaceBefore

▸ **checkInPlaceBefore**(`o`: [OperationExecBaseOptions](../interfaces/_op_types_.operationexecbaseoptions.md)): *void*

*Defined in [op/abstractOperation.ts:108](https://github.com/cancerberoSgx/mirada/blob/3544b58/ojos/src/op/abstractOperation.ts#L108)*

**Parameters:**

Name | Type |
------ | ------ |
`o` | [OperationExecBaseOptions](../interfaces/_op_types_.operationexecbaseoptions.md) |

**Returns:** *void*

___

### `Protected` checkInputImage

▸ **checkInputImage**(`o`: T): *void*

*Defined in [op/abstractOperation.ts:67](https://github.com/cancerberoSgx/mirada/blob/3544b58/ojos/src/op/abstractOperation.ts#L67)*

**Parameters:**

Name | Type |
------ | ------ |
`o` | T |

**Returns:** *void*

___

### `Protected` checkOptions

▸ **checkOptions**(`o?`: [T](undefined)): *T*

*Defined in [op/abstractOperation.ts:70](https://github.com/cancerberoSgx/mirada/blob/3544b58/ojos/src/op/abstractOperation.ts#L70)*

**Parameters:**

Name | Type |
------ | ------ |
`o?` | [T](undefined) |

**Returns:** *T*

___

###  exec

▸ **exec**(...`o_`: [OperationExecParams](../modules/_op_types_.md#operationexecparams)‹T›): *Mat*

*Implementation of [ImageOperation](../interfaces/_op_types_.imageoperation.md)*

*Defined in [op/abstractOperation.ts:30](https://github.com/cancerberoSgx/mirada/blob/3544b58/ojos/src/op/abstractOperation.ts#L30)*

**Parameters:**

Name | Type |
------ | ------ |
`...o_` | [OperationExecParams](../modules/_op_types_.md#operationexecparams)‹T› |

**Returns:** *Mat*

___

###  resolveOptionsObject

▸ **resolveOptionsObject**(...`o`: [OperationExecParams](../modules/_op_types_.md#operationexecparams)‹T›): *T | undefined*

*Implementation of [ImageOperation](../interfaces/_op_types_.imageoperation.md)*

*Defined in [op/abstractOperation.ts:47](https://github.com/cancerberoSgx/mirada/blob/3544b58/ojos/src/op/abstractOperation.ts#L47)*

**Parameters:**

Name | Type |
------ | ------ |
`...o` | [OperationExecParams](../modules/_op_types_.md#operationexecparams)‹T› |

**Returns:** *T | undefined*

___

### `Protected` validate

▸ **validate**(`o`: T): *string | undefined*

*Defined in [op/abstractOperation.ts:24](https://github.com/cancerberoSgx/mirada/blob/3544b58/ojos/src/op/abstractOperation.ts#L24)*

**Parameters:**

Name | Type |
------ | ------ |
`o` | T |

**Returns:** *string | undefined*
