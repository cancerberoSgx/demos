**[ojos](../README.md)**

[Globals](../README.md) › ["op/edge"](../modules/_op_edge_.md) › [Edge](_op_edge_.edge.md)

# Class: Edge

## Hierarchy

* [AbstractOperation](_op_abstractoperation_.abstractoperation.md)‹[EdgeOptions](../interfaces/_op_edge_.edgeoptions.md)›

  * **Edge**

## Implements

* [ImageOperation](../interfaces/_op_types_.imageoperation.md)‹[EdgeOptions](../interfaces/_op_edge_.edgeoptions.md)›

## Index

### Constructors

* [constructor](_op_edge_.edge.md#constructor)

### Properties

* [defaultOptions](_op_edge_.edge.md#protected-optional-defaultoptions)
* [description](_op_edge_.edge.md#description)
* [isInPlace](_op_edge_.edge.md#protected-isinplace)
* [name](_op_edge_.edge.md#name)
* [noInPlace](_op_edge_.edge.md#noinplace)
* [sameSizeAndType](_op_edge_.edge.md#samesizeandtype)
* [validChannels](_op_edge_.edge.md#validchannels)
* [validateEachExec](_op_edge_.edge.md#protected-validateeachexec)
* [validated](_op_edge_.edge.md#protected-validated)

### Methods

* [_exec](_op_edge_.edge.md#protected-_exec)
* [_execOne](_op_edge_.edge.md#protected-_execone)
* [afterExec](_op_edge_.edge.md#protected-afterexec)
* [allChannels](_op_edge_.edge.md#protected-allchannels)
* [checkInPlaceAfter](_op_edge_.edge.md#protected-checkinplaceafter)
* [checkInPlaceBefore](_op_edge_.edge.md#protected-checkinplacebefore)
* [checkInputImage](_op_edge_.edge.md#protected-checkinputimage)
* [checkOptions](_op_edge_.edge.md#protected-checkoptions)
* [exec](_op_edge_.edge.md#exec)
* [validate](_op_edge_.edge.md#protected-validate)

## Constructors

###  constructor

\+ **new Edge**(`defaultOptions?`: [T](undefined)): *[Edge](_op_edge_.edge.md)*

*Inherited from [AbstractOperation](_op_abstractoperation_.abstractoperation.md).[constructor](_op_abstractoperation_.abstractoperation.md#constructor)*

*Defined in [op/abstractOperation.ts:16](https://github.com/cancerberoSgx/mirada/blob/f2ba50d/ojos/src/op/abstractOperation.ts#L16)*

**Parameters:**

Name | Type |
------ | ------ |
`defaultOptions?` | [T](undefined) |

**Returns:** *[Edge](_op_edge_.edge.md)*

## Properties

### `Protected` `Optional` defaultOptions

• **defaultOptions**? : *[T](undefined)*

*Inherited from [AbstractOperation](_op_abstractoperation_.abstractoperation.md).[defaultOptions](_op_abstractoperation_.abstractoperation.md#protected-optional-defaultoptions)*

*Defined in [op/abstractOperation.ts:18](https://github.com/cancerberoSgx/mirada/blob/f2ba50d/ojos/src/op/abstractOperation.ts#L18)*

___

###  description

• **description**: *string* = "facade around cv.Sobel, cv.Laplacian and cv.Scharr"

*Implementation of [ImageOperation](../interfaces/_op_types_.imageoperation.md).[description](../interfaces/_op_types_.imageoperation.md#description)*

*Overrides [AbstractOperation](_op_abstractoperation_.abstractoperation.md).[description](_op_abstractoperation_.abstractoperation.md#description)*

*Defined in [op/edge.ts:43](https://github.com/cancerberoSgx/mirada/blob/f2ba50d/ojos/src/op/edge.ts#L43)*

___

### `Protected` isInPlace

• **isInPlace**: *boolean* = false

*Inherited from [AbstractOperation](_op_abstractoperation_.abstractoperation.md).[isInPlace](_op_abstractoperation_.abstractoperation.md#protected-isinplace)*

*Defined in [op/abstractOperation.ts:12](https://github.com/cancerberoSgx/mirada/blob/f2ba50d/ojos/src/op/abstractOperation.ts#L12)*

___

###  name

• **name**: *string* = "Edge"

*Implementation of [ImageOperation](../interfaces/_op_types_.imageoperation.md).[name](../interfaces/_op_types_.imageoperation.md#name)*

*Overrides [AbstractOperation](_op_abstractoperation_.abstractoperation.md).[name](_op_abstractoperation_.abstractoperation.md#abstract-name)*

*Defined in [op/edge.ts:42](https://github.com/cancerberoSgx/mirada/blob/f2ba50d/ojos/src/op/edge.ts#L42)*

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

*Defined in [op/edge.ts:44](https://github.com/cancerberoSgx/mirada/blob/f2ba50d/ojos/src/op/edge.ts#L44)*

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

▸ **_exec**(`o`: [EdgeOptions](../interfaces/_op_edge_.edgeoptions.md)): *void*

*Overrides [AbstractOperation](_op_abstractoperation_.abstractoperation.md).[_exec](_op_abstractoperation_.abstractoperation.md#protected-abstract-_exec)*

*Defined in [op/edge.ts:63](https://github.com/cancerberoSgx/mirada/blob/f2ba50d/ojos/src/op/edge.ts#L63)*

**Parameters:**

Name | Type |
------ | ------ |
`o` | [EdgeOptions](../interfaces/_op_edge_.edgeoptions.md) |

**Returns:** *void*

___

### `Protected` _execOne

▸ **_execOne**(`o`: [EdgeOptions](../interfaces/_op_edge_.edgeoptions.md)): *void*

*Defined in [op/edge.ts:66](https://github.com/cancerberoSgx/mirada/blob/f2ba50d/ojos/src/op/edge.ts#L66)*

**Parameters:**

Name | Type |
------ | ------ |
`o` | [EdgeOptions](../interfaces/_op_edge_.edgeoptions.md) |

**Returns:** *void*

___

### `Protected` afterExec

▸ **afterExec**(`options`: [MandatoryDst](../modules/_op_abstractoperation_.md#mandatorydst)‹[EdgeOptions](../interfaces/_op_edge_.edgeoptions.md)›): *void*

*Inherited from [AbstractOperation](_op_abstractoperation_.abstractoperation.md).[afterExec](_op_abstractoperation_.abstractoperation.md#protected-afterexec)*

*Defined in [op/abstractOperation.ts:41](https://github.com/cancerberoSgx/mirada/blob/f2ba50d/ojos/src/op/abstractOperation.ts#L41)*

**Parameters:**

Name | Type |
------ | ------ |
`options` | [MandatoryDst](../modules/_op_abstractoperation_.md#mandatorydst)‹[EdgeOptions](../interfaces/_op_edge_.edgeoptions.md)› |

**Returns:** *void*

___

### `Protected` allChannels

▸ **allChannels**(`o`: [EdgeOptions](../interfaces/_op_edge_.edgeoptions.md) & [WithChannels](../interfaces/_op_types_.withchannels.md), `op`: function): *void*

*Inherited from [AbstractOperation](_op_abstractoperation_.abstractoperation.md).[allChannels](_op_abstractoperation_.abstractoperation.md#protected-allchannels)*

*Defined in [op/abstractOperation.ts:89](https://github.com/cancerberoSgx/mirada/blob/f2ba50d/ojos/src/op/abstractOperation.ts#L89)*

**Parameters:**

▪ **o**: *[EdgeOptions](../interfaces/_op_edge_.edgeoptions.md) & [WithChannels](../interfaces/_op_types_.withchannels.md)*

▪ **op**: *function*

▸ (`o`: [EdgeOptions](../interfaces/_op_edge_.edgeoptions.md)): *void*

**Parameters:**

Name | Type |
------ | ------ |
`o` | [EdgeOptions](../interfaces/_op_edge_.edgeoptions.md) |

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

▸ **checkInputImage**(`o`: [EdgeOptions](../interfaces/_op_edge_.edgeoptions.md)): *void*

*Overrides [AbstractOperation](_op_abstractoperation_.abstractoperation.md).[checkInputImage](_op_abstractoperation_.abstractoperation.md#protected-checkinputimage)*

*Defined in [op/edge.ts:45](https://github.com/cancerberoSgx/mirada/blob/f2ba50d/ojos/src/op/edge.ts#L45)*

**Parameters:**

Name | Type |
------ | ------ |
`o` | [EdgeOptions](../interfaces/_op_edge_.edgeoptions.md) |

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

▸ **validate**(`o`: [EdgeOptions](../interfaces/_op_edge_.edgeoptions.md)): *undefined | "dx and dy are mandatory and must be less than 3" | "If ksize is given then it must be 1, 3, 5, or 7" | "If ksize is given then it must be positive and odd"*

*Overrides [AbstractOperation](_op_abstractoperation_.abstractoperation.md).[validate](_op_abstractoperation_.abstractoperation.md#protected-validate)*

*Defined in [op/edge.ts:51](https://github.com/cancerberoSgx/mirada/blob/f2ba50d/ojos/src/op/edge.ts#L51)*

**Parameters:**

Name | Type |
------ | ------ |
`o` | [EdgeOptions](../interfaces/_op_edge_.edgeoptions.md) |

**Returns:** *undefined | "dx and dy are mandatory and must be less than 3" | "If ksize is given then it must be 1, 3, 5, or 7" | "If ksize is given then it must be positive and odd"*