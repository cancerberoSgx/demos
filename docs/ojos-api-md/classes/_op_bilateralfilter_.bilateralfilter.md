**[ojos](../README.md)**

[Globals](../README.md) › ["op/bilateralFilter"](../modules/_op_bilateralfilter_.md) › [BilateralFilter](_op_bilateralfilter_.bilateralfilter.md)

# Class: BilateralFilter

The function applies bilateral filtering to the input image, as described in bilateralFilter can reduce unwanted noise very well while keeping edges fairly sharp. However, it is very slow compared to most filters.

Sigma values*: For simplicity, you can set the 2 sigma values to be the same. If they are small (< 10), the filter will not have much effect, whereas if they are large (> 150), they will have a very strong effect, making the image look "cartoonish".

Filter size*: Large filters (d > 5) are very slow, so it is recommended to use d=5 for real-time applications, and perhaps d=9 for offline applications that need heavy noise filtering.

## Hierarchy

* [AbstractOperation](_op_abstractoperation_.abstractoperation.md)‹[BilateralFilterOptions](../interfaces/_op_bilateralfilter_.bilateralfilteroptions.md)›

  * **BilateralFilter**

## Implements

* [ImageOperation](../interfaces/_op_types_.imageoperation.md)‹[BilateralFilterOptions](../interfaces/_op_bilateralfilter_.bilateralfilteroptions.md)›

## Index

### Constructors

* [constructor](_op_bilateralfilter_.bilateralfilter.md#constructor)

### Properties

* [defaultOptions](_op_bilateralfilter_.bilateralfilter.md#protected-optional-defaultoptions)
* [description](_op_bilateralfilter_.bilateralfilter.md#description)
* [isInPlace](_op_bilateralfilter_.bilateralfilter.md#protected-isinplace)
* [name](_op_bilateralfilter_.bilateralfilter.md#name)
* [noInPlace](_op_bilateralfilter_.bilateralfilter.md#noinplace)
* [sameSizeAndType](_op_bilateralfilter_.bilateralfilter.md#samesizeandtype)
* [validChannels](_op_bilateralfilter_.bilateralfilter.md#validchannels)

### Methods

* [_exec](_op_bilateralfilter_.bilateralfilter.md#protected-_exec)
* [checkInPlaceAfter](_op_bilateralfilter_.bilateralfilter.md#protected-checkinplaceafter)
* [checkInPlaceBefore](_op_bilateralfilter_.bilateralfilter.md#protected-checkinplacebefore)
* [checkOptions](_op_bilateralfilter_.bilateralfilter.md#protected-checkoptions)
* [exec](_op_bilateralfilter_.bilateralfilter.md#exec)

## Constructors

###  constructor

\+ **new BilateralFilter**(`defaultOptions?`: [T](undefined)): *[BilateralFilter](_op_bilateralfilter_.bilateralfilter.md)*

*Inherited from [AbstractOperation](_op_abstractoperation_.abstractoperation.md).[constructor](_op_abstractoperation_.abstractoperation.md#constructor)*

*Defined in [op/abstractOperation.ts:14](https://github.com/cancerberoSgx/mirada/blob/d83d69e/ojos/src/op/abstractOperation.ts#L14)*

**Parameters:**

Name | Type |
------ | ------ |
`defaultOptions?` | [T](undefined) |

**Returns:** *[BilateralFilter](_op_bilateralfilter_.bilateralfilter.md)*

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

• **name**: *string* = "BilateralFilter"

*Implementation of [ImageOperation](../interfaces/_op_types_.imageoperation.md).[name](../interfaces/_op_types_.imageoperation.md#name)*

*Overrides [AbstractOperation](_op_abstractoperation_.abstractoperation.md).[name](_op_abstractoperation_.abstractoperation.md#abstract-name)*

*Defined in [op/bilateralFilter.ts:30](https://github.com/cancerberoSgx/mirada/blob/d83d69e/ojos/src/op/bilateralFilter.ts#L30)*

___

###  noInPlace

• **noInPlace**: *boolean* = true

*Implementation of [ImageOperation](../interfaces/_op_types_.imageoperation.md).[noInPlace](../interfaces/_op_types_.imageoperation.md#noinplace)*

*Overrides [AbstractOperation](_op_abstractoperation_.abstractoperation.md).[noInPlace](_op_abstractoperation_.abstractoperation.md#noinplace)*

*Defined in [op/bilateralFilter.ts:31](https://github.com/cancerberoSgx/mirada/blob/d83d69e/ojos/src/op/bilateralFilter.ts#L31)*

___

###  sameSizeAndType

• **sameSizeAndType**: *boolean* = true

*Implementation of [ImageOperation](../interfaces/_op_types_.imageoperation.md).[sameSizeAndType](../interfaces/_op_types_.imageoperation.md#samesizeandtype)*

*Overrides [AbstractOperation](_op_abstractoperation_.abstractoperation.md).[sameSizeAndType](_op_abstractoperation_.abstractoperation.md#samesizeandtype)*

*Defined in [op/bilateralFilter.ts:32](https://github.com/cancerberoSgx/mirada/blob/d83d69e/ojos/src/op/bilateralFilter.ts#L32)*

___

###  validChannels

• **validChannels**: *number[]* =  [1, 3]

*Implementation of [ImageOperation](../interfaces/_op_types_.imageoperation.md).[validChannels](../interfaces/_op_types_.imageoperation.md#validchannels)*

*Overrides [AbstractOperation](_op_abstractoperation_.abstractoperation.md).[validChannels](_op_abstractoperation_.abstractoperation.md#validchannels)*

*Defined in [op/bilateralFilter.ts:33](https://github.com/cancerberoSgx/mirada/blob/d83d69e/ojos/src/op/bilateralFilter.ts#L33)*

## Methods

### `Protected` _exec

▸ **_exec**(`o`: [BilateralFilterOptions](../interfaces/_op_bilateralfilter_.bilateralfilteroptions.md)): *Promise‹void›*

*Overrides [AbstractOperation](_op_abstractoperation_.abstractoperation.md).[_exec](_op_abstractoperation_.abstractoperation.md#protected-abstract-_exec)*

*Defined in [op/bilateralFilter.ts:34](https://github.com/cancerberoSgx/mirada/blob/d83d69e/ojos/src/op/bilateralFilter.ts#L34)*

**Parameters:**

Name | Type |
------ | ------ |
`o` | [BilateralFilterOptions](../interfaces/_op_bilateralfilter_.bilateralfilteroptions.md) |

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