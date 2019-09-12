**[ojos](../README.md)**

[Globals](../README.md) › ["op/canny"](../modules/_op_canny_.md) › [Canny](_op_canny_.canny.md)

# Class: Canny

## Hierarchy

* [AbstractOperation](_op_abstractoperation_.abstractoperation.md)‹[CannyOptions](../interfaces/_op_canny_.cannyoptions.md)›

  * **Canny**

## Implements

* [ImageOperation](../interfaces/_op_types_.imageoperation.md)‹[CannyOptions](../interfaces/_op_canny_.cannyoptions.md)›

## Index

### Constructors

* [constructor](_op_canny_.canny.md#constructor)

### Properties

* [defaultOptions](_op_canny_.canny.md#protected-optional-defaultoptions)
* [description](_op_canny_.canny.md#description)
* [isInPlace](_op_canny_.canny.md#protected-isinplace)
* [name](_op_canny_.canny.md#name)
* [noInPlace](_op_canny_.canny.md#noinplace)
* [sameSizeAndType](_op_canny_.canny.md#samesizeandtype)
* [validChannels](_op_canny_.canny.md#validchannels)
* [validateEachExec](_op_canny_.canny.md#protected-validateeachexec)
* [validated](_op_canny_.canny.md#protected-validated)

### Methods

* [_exec](_op_canny_.canny.md#protected-_exec)
* [_execOne](_op_canny_.canny.md#protected-_execone)
* [afterExec](_op_canny_.canny.md#protected-afterexec)
* [allChannels](_op_canny_.canny.md#protected-allchannels)
* [checkInPlaceAfter](_op_canny_.canny.md#protected-checkinplaceafter)
* [checkInPlaceBefore](_op_canny_.canny.md#protected-checkinplacebefore)
* [checkInputImage](_op_canny_.canny.md#protected-checkinputimage)
* [checkOptions](_op_canny_.canny.md#protected-checkoptions)
* [exec](_op_canny_.canny.md#exec)
* [validate](_op_canny_.canny.md#protected-validate)

## Constructors

###  constructor

\+ **new Canny**(`defaultOptions?`: [T](undefined)): *[Canny](_op_canny_.canny.md)*

*Inherited from [AbstractOperation](_op_abstractoperation_.abstractoperation.md).[constructor](_op_abstractoperation_.abstractoperation.md#constructor)*

*Defined in [op/abstractOperation.ts:16](https://github.com/cancerberoSgx/mirada/blob/f2ba50d/ojos/src/op/abstractOperation.ts#L16)*

**Parameters:**

Name | Type |
------ | ------ |
`defaultOptions?` | [T](undefined) |

**Returns:** *[Canny](_op_canny_.canny.md)*

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

• **name**: *string* = "Canny"

*Implementation of [ImageOperation](../interfaces/_op_types_.imageoperation.md).[name](../interfaces/_op_types_.imageoperation.md#name)*

*Overrides [AbstractOperation](_op_abstractoperation_.abstractoperation.md).[name](_op_abstractoperation_.abstractoperation.md#abstract-name)*

*Defined in [op/canny.ts:29](https://github.com/cancerberoSgx/mirada/blob/f2ba50d/ojos/src/op/canny.ts#L29)*

___

###  noInPlace

• **noInPlace**: *boolean* = true

*Implementation of [ImageOperation](../interfaces/_op_types_.imageoperation.md).[noInPlace](../interfaces/_op_types_.imageoperation.md#noinplace)*

*Overrides [AbstractOperation](_op_abstractoperation_.abstractoperation.md).[noInPlace](_op_abstractoperation_.abstractoperation.md#noinplace)*

*Defined in [op/canny.ts:30](https://github.com/cancerberoSgx/mirada/blob/f2ba50d/ojos/src/op/canny.ts#L30)*

___

###  sameSizeAndType

• **sameSizeAndType**: *boolean* = false

*Implementation of [ImageOperation](../interfaces/_op_types_.imageoperation.md).[sameSizeAndType](../interfaces/_op_types_.imageoperation.md#samesizeandtype)*

*Inherited from [AbstractOperation](_op_abstractoperation_.abstractoperation.md).[sameSizeAndType](_op_abstractoperation_.abstractoperation.md#samesizeandtype)*

*Defined in [op/abstractOperation.ts:11](https://github.com/cancerberoSgx/mirada/blob/f2ba50d/ojos/src/op/abstractOperation.ts#L11)*

___

###  validChannels

• **validChannels**: *number[] | undefined* =  undefined

*Implementation of [ImageOperation](../interfaces/_op_types_.imageoperation.md).[validChannels](../interfaces/_op_types_.imageoperation.md#validchannels)*

*Inherited from [AbstractOperation](_op_abstractoperation_.abstractoperation.md).[validChannels](_op_abstractoperation_.abstractoperation.md#validchannels)*

*Defined in [op/abstractOperation.ts:16](https://github.com/cancerberoSgx/mirada/blob/f2ba50d/ojos/src/op/abstractOperation.ts#L16)*

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

▸ **_exec**(`o`: [CannyOptions](../interfaces/_op_canny_.cannyoptions.md)): *void*

*Overrides [AbstractOperation](_op_abstractoperation_.abstractoperation.md).[_exec](_op_abstractoperation_.abstractoperation.md#protected-abstract-_exec)*

*Defined in [op/canny.ts:38](https://github.com/cancerberoSgx/mirada/blob/f2ba50d/ojos/src/op/canny.ts#L38)*

**Parameters:**

Name | Type |
------ | ------ |
`o` | [CannyOptions](../interfaces/_op_canny_.cannyoptions.md) |

**Returns:** *void*

___

### `Protected` _execOne

▸ **_execOne**(`o`: [CannyOptions](../interfaces/_op_canny_.cannyoptions.md)): *void*

*Defined in [op/canny.ts:41](https://github.com/cancerberoSgx/mirada/blob/f2ba50d/ojos/src/op/canny.ts#L41)*

**Parameters:**

Name | Type |
------ | ------ |
`o` | [CannyOptions](../interfaces/_op_canny_.cannyoptions.md) |

**Returns:** *void*

___

### `Protected` afterExec

▸ **afterExec**(`options`: [MandatoryDst](../modules/_op_abstractoperation_.md#mandatorydst)‹[CannyOptions](../interfaces/_op_canny_.cannyoptions.md)›): *void*

*Inherited from [AbstractOperation](_op_abstractoperation_.abstractoperation.md).[afterExec](_op_abstractoperation_.abstractoperation.md#protected-afterexec)*

*Defined in [op/abstractOperation.ts:41](https://github.com/cancerberoSgx/mirada/blob/f2ba50d/ojos/src/op/abstractOperation.ts#L41)*

**Parameters:**

Name | Type |
------ | ------ |
`options` | [MandatoryDst](../modules/_op_abstractoperation_.md#mandatorydst)‹[CannyOptions](../interfaces/_op_canny_.cannyoptions.md)› |

**Returns:** *void*

___

### `Protected` allChannels

▸ **allChannels**(`o`: [CannyOptions](../interfaces/_op_canny_.cannyoptions.md) & [WithChannels](../interfaces/_op_types_.withchannels.md), `op`: function): *void*

*Inherited from [AbstractOperation](_op_abstractoperation_.abstractoperation.md).[allChannels](_op_abstractoperation_.abstractoperation.md#protected-allchannels)*

*Defined in [op/abstractOperation.ts:89](https://github.com/cancerberoSgx/mirada/blob/f2ba50d/ojos/src/op/abstractOperation.ts#L89)*

**Parameters:**

▪ **o**: *[CannyOptions](../interfaces/_op_canny_.cannyoptions.md) & [WithChannels](../interfaces/_op_types_.withchannels.md)*

▪ **op**: *function*

▸ (`o`: [CannyOptions](../interfaces/_op_canny_.cannyoptions.md)): *void*

**Parameters:**

Name | Type |
------ | ------ |
`o` | [CannyOptions](../interfaces/_op_canny_.cannyoptions.md) |

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

▸ **checkInputImage**(`o`: [CannyOptions](../interfaces/_op_canny_.cannyoptions.md)): *void*

*Inherited from [AbstractOperation](_op_abstractoperation_.abstractoperation.md).[checkInputImage](_op_abstractoperation_.abstractoperation.md#protected-checkinputimage)*

*Defined in [op/abstractOperation.ts:43](https://github.com/cancerberoSgx/mirada/blob/f2ba50d/ojos/src/op/abstractOperation.ts#L43)*

**Parameters:**

Name | Type |
------ | ------ |
`o` | [CannyOptions](../interfaces/_op_canny_.cannyoptions.md) |

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

▸ **validate**(`o`: [CannyOptions](../interfaces/_op_canny_.cannyoptions.md)): *undefined | "Aperture size must be odd and greater than 2"*

*Overrides [AbstractOperation](_op_abstractoperation_.abstractoperation.md).[validate](_op_abstractoperation_.abstractoperation.md#protected-validate)*

*Defined in [op/canny.ts:32](https://github.com/cancerberoSgx/mirada/blob/f2ba50d/ojos/src/op/canny.ts#L32)*

**Parameters:**

Name | Type |
------ | ------ |
`o` | [CannyOptions](../interfaces/_op_canny_.cannyoptions.md) |

**Returns:** *undefined | "Aperture size must be odd and greater than 2"*