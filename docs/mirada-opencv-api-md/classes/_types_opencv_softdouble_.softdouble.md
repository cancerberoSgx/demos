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

*Defined in [types/opencv/softdouble.ts:6](https://github.com/cancerberoSgx/mirada/blob/170e57c/mirada/src/types/opencv/softdouble.ts#L6)*

**Returns:** *[softdouble](_types_opencv_softdouble_.softdouble.md)*

\+ **new softdouble**(`c`: [softdouble](_types_opencv_softdouble_.softdouble.md)): *[softdouble](_types_opencv_softdouble_.softdouble.md)*

*Defined in [types/opencv/softdouble.ts:8](https://github.com/cancerberoSgx/mirada/blob/170e57c/mirada/src/types/opencv/softdouble.ts#L8)*

**Parameters:**

Name | Type |
------ | ------ |
`c` | [softdouble](_types_opencv_softdouble_.softdouble.md) |

**Returns:** *[softdouble](_types_opencv_softdouble_.softdouble.md)*

\+ **new softdouble**(`arg159`: [uint32_t](../modules/_types_opencv__hacks_.md#uint32_t)): *[softdouble](_types_opencv_softdouble_.softdouble.md)*

*Defined in [types/opencv/softdouble.ts:10](https://github.com/cancerberoSgx/mirada/blob/170e57c/mirada/src/types/opencv/softdouble.ts#L10)*

**Parameters:**

Name | Type |
------ | ------ |
`arg159` | [uint32_t](../modules/_types_opencv__hacks_.md#uint32_t) |

**Returns:** *[softdouble](_types_opencv_softdouble_.softdouble.md)*

\+ **new softdouble**(`arg160`: [uint64_t](../modules/_types_opencv__hacks_.md#uint64_t)): *[softdouble](_types_opencv_softdouble_.softdouble.md)*

*Defined in [types/opencv/softdouble.ts:12](https://github.com/cancerberoSgx/mirada/blob/170e57c/mirada/src/types/opencv/softdouble.ts#L12)*

**Parameters:**

Name | Type |
------ | ------ |
`arg160` | [uint64_t](../modules/_types_opencv__hacks_.md#uint64_t) |

**Returns:** *[softdouble](_types_opencv_softdouble_.softdouble.md)*

\+ **new softdouble**(`arg161`: [int32_t](../modules/_types_opencv__hacks_.md#int32_t)): *[softdouble](_types_opencv_softdouble_.softdouble.md)*

*Defined in [types/opencv/softdouble.ts:14](https://github.com/cancerberoSgx/mirada/blob/170e57c/mirada/src/types/opencv/softdouble.ts#L14)*

**Parameters:**

Name | Type |
------ | ------ |
`arg161` | [int32_t](../modules/_types_opencv__hacks_.md#int32_t) |

**Returns:** *[softdouble](_types_opencv_softdouble_.softdouble.md)*

\+ **new softdouble**(`arg162`: [int64_t](../modules/_types_opencv__hacks_.md#int64_t)): *[softdouble](_types_opencv_softdouble_.softdouble.md)*

*Defined in [types/opencv/softdouble.ts:16](https://github.com/cancerberoSgx/mirada/blob/170e57c/mirada/src/types/opencv/softdouble.ts#L16)*

**Parameters:**

Name | Type |
------ | ------ |
`arg162` | [int64_t](../modules/_types_opencv__hacks_.md#int64_t) |

**Returns:** *[softdouble](_types_opencv_softdouble_.softdouble.md)*

\+ **new softdouble**(`a`: any): *[softdouble](_types_opencv_softdouble_.softdouble.md)*

*Defined in [types/opencv/softdouble.ts:18](https://github.com/cancerberoSgx/mirada/blob/170e57c/mirada/src/types/opencv/softdouble.ts#L18)*

**Parameters:**

Name | Type |
------ | ------ |
`a` | any |

**Returns:** *[softdouble](_types_opencv_softdouble_.softdouble.md)*

## Properties

###  v

• **v**: *[uint64_t](../modules/_types_opencv__hacks_.md#uint64_t)*

*Defined in [types/opencv/softdouble.ts:6](https://github.com/cancerberoSgx/mirada/blob/170e57c/mirada/src/types/opencv/softdouble.ts#L6)*

## Methods

###  getExp

▸ **getExp**(): *[int](../modules/_types_opencv__hacks_.md#int)*

*Defined in [types/opencv/softdouble.ts:22](https://github.com/cancerberoSgx/mirada/blob/170e57c/mirada/src/types/opencv/softdouble.ts#L22)*

**Returns:** *[int](../modules/_types_opencv__hacks_.md#int)*

___

###  getFrac

▸ **getFrac**(): *[softdouble](_types_opencv_softdouble_.softdouble.md)*

*Defined in [types/opencv/softdouble.ts:27](https://github.com/cancerberoSgx/mirada/blob/170e57c/mirada/src/types/opencv/softdouble.ts#L27)*

  Returns a number 1 <= x < 2 with the same significand

**Returns:** *[softdouble](_types_opencv_softdouble_.softdouble.md)*

___

###  getSign

▸ **getSign**(): *[bool](../modules/_types_opencv__hacks_.md#bool)*

*Defined in [types/opencv/softdouble.ts:29](https://github.com/cancerberoSgx/mirada/blob/170e57c/mirada/src/types/opencv/softdouble.ts#L29)*

**Returns:** *[bool](../modules/_types_opencv__hacks_.md#bool)*

___

###  isInf

▸ **isInf**(): *[bool](../modules/_types_opencv__hacks_.md#bool)*

*Defined in [types/opencv/softdouble.ts:31](https://github.com/cancerberoSgx/mirada/blob/170e57c/mirada/src/types/opencv/softdouble.ts#L31)*

**Returns:** *[bool](../modules/_types_opencv__hacks_.md#bool)*

___

###  isNaN

▸ **isNaN**(): *[bool](../modules/_types_opencv__hacks_.md#bool)*

*Defined in [types/opencv/softdouble.ts:33](https://github.com/cancerberoSgx/mirada/blob/170e57c/mirada/src/types/opencv/softdouble.ts#L33)*

**Returns:** *[bool](../modules/_types_opencv__hacks_.md#bool)*

___

###  isSubnormal

▸ **isSubnormal**(): *[bool](../modules/_types_opencv__hacks_.md#bool)*

*Defined in [types/opencv/softdouble.ts:35](https://github.com/cancerberoSgx/mirada/blob/170e57c/mirada/src/types/opencv/softdouble.ts#L35)*

**Returns:** *[bool](../modules/_types_opencv__hacks_.md#bool)*

___

###  setExp

▸ **setExp**(`e`: [int](../modules/_types_opencv__hacks_.md#int)): *[softdouble](_types_opencv_softdouble_.softdouble.md)*

*Defined in [types/opencv/softdouble.ts:37](https://github.com/cancerberoSgx/mirada/blob/170e57c/mirada/src/types/opencv/softdouble.ts#L37)*

**Parameters:**

Name | Type |
------ | ------ |
`e` | [int](../modules/_types_opencv__hacks_.md#int) |

**Returns:** *[softdouble](_types_opencv_softdouble_.softdouble.md)*

___

###  setFrac

▸ **setFrac**(`s`: [softdouble](_types_opencv_softdouble_.softdouble.md)): *[softdouble](_types_opencv_softdouble_.softdouble.md)*

*Defined in [types/opencv/softdouble.ts:42](https://github.com/cancerberoSgx/mirada/blob/170e57c/mirada/src/types/opencv/softdouble.ts#L42)*

  Constructs a copy of a number with significand taken from parameter

**Parameters:**

Name | Type |
------ | ------ |
`s` | [softdouble](_types_opencv_softdouble_.softdouble.md) |

**Returns:** *[softdouble](_types_opencv_softdouble_.softdouble.md)*

___

###  setSign

▸ **setSign**(`sign`: [bool](../modules/_types_opencv__hacks_.md#bool)): *[softdouble](_types_opencv_softdouble_.softdouble.md)*

*Defined in [types/opencv/softdouble.ts:44](https://github.com/cancerberoSgx/mirada/blob/170e57c/mirada/src/types/opencv/softdouble.ts#L44)*

**Parameters:**

Name | Type |
------ | ------ |
`sign` | [bool](../modules/_types_opencv__hacks_.md#bool) |

**Returns:** *[softdouble](_types_opencv_softdouble_.softdouble.md)*

___

### `Static` eps

▸ **eps**(): *[softdouble](_types_opencv_softdouble_.softdouble.md)*

*Defined in [types/opencv/softdouble.ts:46](https://github.com/cancerberoSgx/mirada/blob/170e57c/mirada/src/types/opencv/softdouble.ts#L46)*

**Returns:** *[softdouble](_types_opencv_softdouble_.softdouble.md)*

___

### `Static` fromRaw

▸ **fromRaw**(`a`: [uint64_t](../modules/_types_opencv__hacks_.md#uint64_t)): *[softdouble](_types_opencv_softdouble_.softdouble.md)*

*Defined in [types/opencv/softdouble.ts:51](https://github.com/cancerberoSgx/mirada/blob/170e57c/mirada/src/types/opencv/softdouble.ts#L51)*

  Builds new value from raw binary representation

**Parameters:**

Name | Type |
------ | ------ |
`a` | [uint64_t](../modules/_types_opencv__hacks_.md#uint64_t) |

**Returns:** *[softdouble](_types_opencv_softdouble_.softdouble.md)*

___

### `Static` inf

▸ **inf**(): *[softdouble](_types_opencv_softdouble_.softdouble.md)*

*Defined in [types/opencv/softdouble.ts:53](https://github.com/cancerberoSgx/mirada/blob/170e57c/mirada/src/types/opencv/softdouble.ts#L53)*

**Returns:** *[softdouble](_types_opencv_softdouble_.softdouble.md)*

___

### `Static` max

▸ **max**(): *[softdouble](_types_opencv_softdouble_.softdouble.md)*

*Defined in [types/opencv/softdouble.ts:55](https://github.com/cancerberoSgx/mirada/blob/170e57c/mirada/src/types/opencv/softdouble.ts#L55)*

**Returns:** *[softdouble](_types_opencv_softdouble_.softdouble.md)*

___

### `Static` min

▸ **min**(): *[softdouble](_types_opencv_softdouble_.softdouble.md)*

*Defined in [types/opencv/softdouble.ts:57](https://github.com/cancerberoSgx/mirada/blob/170e57c/mirada/src/types/opencv/softdouble.ts#L57)*

**Returns:** *[softdouble](_types_opencv_softdouble_.softdouble.md)*

___

### `Static` nan

▸ **nan**(): *[softdouble](_types_opencv_softdouble_.softdouble.md)*

*Defined in [types/opencv/softdouble.ts:59](https://github.com/cancerberoSgx/mirada/blob/170e57c/mirada/src/types/opencv/softdouble.ts#L59)*

**Returns:** *[softdouble](_types_opencv_softdouble_.softdouble.md)*

___

### `Static` one

▸ **one**(): *[softdouble](_types_opencv_softdouble_.softdouble.md)*

*Defined in [types/opencv/softdouble.ts:61](https://github.com/cancerberoSgx/mirada/blob/170e57c/mirada/src/types/opencv/softdouble.ts#L61)*

**Returns:** *[softdouble](_types_opencv_softdouble_.softdouble.md)*

___

### `Static` pi

▸ **pi**(): *[softdouble](_types_opencv_softdouble_.softdouble.md)*

*Defined in [types/opencv/softdouble.ts:63](https://github.com/cancerberoSgx/mirada/blob/170e57c/mirada/src/types/opencv/softdouble.ts#L63)*

**Returns:** *[softdouble](_types_opencv_softdouble_.softdouble.md)*

___

### `Static` zero

▸ **zero**(): *[softdouble](_types_opencv_softdouble_.softdouble.md)*

*Defined in [types/opencv/softdouble.ts:65](https://github.com/cancerberoSgx/mirada/blob/170e57c/mirada/src/types/opencv/softdouble.ts#L65)*

**Returns:** *[softdouble](_types_opencv_softdouble_.softdouble.md)*