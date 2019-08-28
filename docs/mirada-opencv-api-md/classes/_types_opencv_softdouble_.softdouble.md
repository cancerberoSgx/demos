**[mirada](../README.md)**

[Globals](../README.md) › ["types/opencv/softdouble"](../modules/_types_opencv_softdouble_.md) › [softdouble](_types_opencv_softdouble_.softdouble.md)

# Class: softdouble

## Hierarchy

* **softdouble**

## Index

### Constructors

* [constructor](_types_opencv_softdouble_.softdouble.md#constructor)

### Properties

* [v](_types_opencv_softdouble_.softdouble.md#v)

### Methods

* [getExp](_types_opencv_softdouble_.softdouble.md#getexp)
* [getFrac](_types_opencv_softdouble_.softdouble.md#getfrac)
* [getSign](_types_opencv_softdouble_.softdouble.md#getsign)
* [isInf](_types_opencv_softdouble_.softdouble.md#isinf)
* [isNaN](_types_opencv_softdouble_.softdouble.md#isnan)
* [isSubnormal](_types_opencv_softdouble_.softdouble.md#issubnormal)
* [setExp](_types_opencv_softdouble_.softdouble.md#setexp)
* [setFrac](_types_opencv_softdouble_.softdouble.md#setfrac)
* [setSign](_types_opencv_softdouble_.softdouble.md#setsign)
* [eps](_types_opencv_softdouble_.softdouble.md#static-eps)
* [fromRaw](_types_opencv_softdouble_.softdouble.md#static-fromraw)
* [inf](_types_opencv_softdouble_.softdouble.md#static-inf)
* [max](_types_opencv_softdouble_.softdouble.md#static-max)
* [min](_types_opencv_softdouble_.softdouble.md#static-min)
* [nan](_types_opencv_softdouble_.softdouble.md#static-nan)
* [one](_types_opencv_softdouble_.softdouble.md#static-one)
* [pi](_types_opencv_softdouble_.softdouble.md#static-pi)
* [zero](_types_opencv_softdouble_.softdouble.md#static-zero)

## Constructors

###  constructor

\+ **new softdouble**(): *[softdouble](_types_opencv_softdouble_.softdouble.md)*

**Returns:** *[softdouble](_types_opencv_softdouble_.softdouble.md)*

\+ **new softdouble**(`c`: [softdouble](_types_opencv_softdouble_.softdouble.md)): *[softdouble](_types_opencv_softdouble_.softdouble.md)*

**Parameters:**

Name | Type |
------ | ------ |
`c` | [softdouble](_types_opencv_softdouble_.softdouble.md) |

**Returns:** *[softdouble](_types_opencv_softdouble_.softdouble.md)*

\+ **new softdouble**(`arg159`: [uint32_t](../modules/_types_opencv__hacks_.md#uint32_t)): *[softdouble](_types_opencv_softdouble_.softdouble.md)*

**Parameters:**

Name | Type |
------ | ------ |
`arg159` | [uint32_t](../modules/_types_opencv__hacks_.md#uint32_t) |

**Returns:** *[softdouble](_types_opencv_softdouble_.softdouble.md)*

\+ **new softdouble**(`arg160`: [uint64_t](../modules/_types_opencv__hacks_.md#uint64_t)): *[softdouble](_types_opencv_softdouble_.softdouble.md)*

**Parameters:**

Name | Type |
------ | ------ |
`arg160` | [uint64_t](../modules/_types_opencv__hacks_.md#uint64_t) |

**Returns:** *[softdouble](_types_opencv_softdouble_.softdouble.md)*

\+ **new softdouble**(`arg161`: [int32_t](../modules/_types_opencv__hacks_.md#int32_t)): *[softdouble](_types_opencv_softdouble_.softdouble.md)*

**Parameters:**

Name | Type |
------ | ------ |
`arg161` | [int32_t](../modules/_types_opencv__hacks_.md#int32_t) |

**Returns:** *[softdouble](_types_opencv_softdouble_.softdouble.md)*

\+ **new softdouble**(`arg162`: [int64_t](../modules/_types_opencv__hacks_.md#int64_t)): *[softdouble](_types_opencv_softdouble_.softdouble.md)*

**Parameters:**

Name | Type |
------ | ------ |
`arg162` | [int64_t](../modules/_types_opencv__hacks_.md#int64_t) |

**Returns:** *[softdouble](_types_opencv_softdouble_.softdouble.md)*

\+ **new softdouble**(`a`: any): *[softdouble](_types_opencv_softdouble_.softdouble.md)*

**Parameters:**

Name | Type |
------ | ------ |
`a` | any |

**Returns:** *[softdouble](_types_opencv_softdouble_.softdouble.md)*

## Properties

###  v

• **v**: *[uint64_t](../modules/_types_opencv__hacks_.md#uint64_t)*

## Methods

###  getExp

▸ **getExp**(): *[int](../modules/_types_opencv__hacks_.md#int)*

**Returns:** *[int](../modules/_types_opencv__hacks_.md#int)*

___

###  getFrac

▸ **getFrac**(): *[softdouble](_types_opencv_softdouble_.softdouble.md)*

  Returns a number 1 <= x < 2 with the same significand

**Returns:** *[softdouble](_types_opencv_softdouble_.softdouble.md)*

___

###  getSign

▸ **getSign**(): *[bool](../modules/_types_opencv__hacks_.md#bool)*

**Returns:** *[bool](../modules/_types_opencv__hacks_.md#bool)*

___

###  isInf

▸ **isInf**(): *[bool](../modules/_types_opencv__hacks_.md#bool)*

**Returns:** *[bool](../modules/_types_opencv__hacks_.md#bool)*

___

###  isNaN

▸ **isNaN**(): *[bool](../modules/_types_opencv__hacks_.md#bool)*

**Returns:** *[bool](../modules/_types_opencv__hacks_.md#bool)*

___

###  isSubnormal

▸ **isSubnormal**(): *[bool](../modules/_types_opencv__hacks_.md#bool)*

**Returns:** *[bool](../modules/_types_opencv__hacks_.md#bool)*

___

###  setExp

▸ **setExp**(`e`: [int](../modules/_types_opencv__hacks_.md#int)): *[softdouble](_types_opencv_softdouble_.softdouble.md)*

**Parameters:**

Name | Type |
------ | ------ |
`e` | [int](../modules/_types_opencv__hacks_.md#int) |

**Returns:** *[softdouble](_types_opencv_softdouble_.softdouble.md)*

___

###  setFrac

▸ **setFrac**(`s`: [softdouble](_types_opencv_softdouble_.softdouble.md)): *[softdouble](_types_opencv_softdouble_.softdouble.md)*

  Constructs a copy of a number with significand taken from parameter

**Parameters:**

Name | Type |
------ | ------ |
`s` | [softdouble](_types_opencv_softdouble_.softdouble.md) |

**Returns:** *[softdouble](_types_opencv_softdouble_.softdouble.md)*

___

###  setSign

▸ **setSign**(`sign`: [bool](../modules/_types_opencv__hacks_.md#bool)): *[softdouble](_types_opencv_softdouble_.softdouble.md)*

**Parameters:**

Name | Type |
------ | ------ |
`sign` | [bool](../modules/_types_opencv__hacks_.md#bool) |

**Returns:** *[softdouble](_types_opencv_softdouble_.softdouble.md)*

___

### `Static` eps

▸ **eps**(): *[softdouble](_types_opencv_softdouble_.softdouble.md)*

**Returns:** *[softdouble](_types_opencv_softdouble_.softdouble.md)*

___

### `Static` fromRaw

▸ **fromRaw**(`a`: [uint64_t](../modules/_types_opencv__hacks_.md#uint64_t)): *[softdouble](_types_opencv_softdouble_.softdouble.md)*

  Builds new value from raw binary representation

**Parameters:**

Name | Type |
------ | ------ |
`a` | [uint64_t](../modules/_types_opencv__hacks_.md#uint64_t) |

**Returns:** *[softdouble](_types_opencv_softdouble_.softdouble.md)*

___

### `Static` inf

▸ **inf**(): *[softdouble](_types_opencv_softdouble_.softdouble.md)*

**Returns:** *[softdouble](_types_opencv_softdouble_.softdouble.md)*

___

### `Static` max

▸ **max**(): *[softdouble](_types_opencv_softdouble_.softdouble.md)*

**Returns:** *[softdouble](_types_opencv_softdouble_.softdouble.md)*

___

### `Static` min

▸ **min**(): *[softdouble](_types_opencv_softdouble_.softdouble.md)*

**Returns:** *[softdouble](_types_opencv_softdouble_.softdouble.md)*

___

### `Static` nan

▸ **nan**(): *[softdouble](_types_opencv_softdouble_.softdouble.md)*

**Returns:** *[softdouble](_types_opencv_softdouble_.softdouble.md)*

___

### `Static` one

▸ **one**(): *[softdouble](_types_opencv_softdouble_.softdouble.md)*

**Returns:** *[softdouble](_types_opencv_softdouble_.softdouble.md)*

___

### `Static` pi

▸ **pi**(): *[softdouble](_types_opencv_softdouble_.softdouble.md)*

**Returns:** *[softdouble](_types_opencv_softdouble_.softdouble.md)*

___

### `Static` zero

▸ **zero**(): *[softdouble](_types_opencv_softdouble_.softdouble.md)*

**Returns:** *[softdouble](_types_opencv_softdouble_.softdouble.md)*