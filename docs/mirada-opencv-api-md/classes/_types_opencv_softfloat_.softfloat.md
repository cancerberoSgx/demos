[mirada](../README.md) › ["types/opencv/softfloat"](../modules/_types_opencv_softfloat_.md) › [softfloat](_types_opencv_softfloat_.softfloat.md)

# Class: softfloat


## Hierarchy

* **softfloat**

## Index

### Constructors

* [constructor](_types_opencv_softfloat_.softfloat.md#constructor)

### Properties

* [v](_types_opencv_softfloat_.softfloat.md#v)

### Methods

* [getExp](_types_opencv_softfloat_.softfloat.md#getexp)
* [getFrac](_types_opencv_softfloat_.softfloat.md#getfrac)
* [getSign](_types_opencv_softfloat_.softfloat.md#getsign)
* [isInf](_types_opencv_softfloat_.softfloat.md#isinf)
* [isNaN](_types_opencv_softfloat_.softfloat.md#isnan)
* [isSubnormal](_types_opencv_softfloat_.softfloat.md#issubnormal)
* [setExp](_types_opencv_softfloat_.softfloat.md#setexp)
* [setFrac](_types_opencv_softfloat_.softfloat.md#setfrac)
* [setSign](_types_opencv_softfloat_.softfloat.md#setsign)
* [eps](_types_opencv_softfloat_.softfloat.md#static-eps)
* [fromRaw](_types_opencv_softfloat_.softfloat.md#static-fromraw)
* [inf](_types_opencv_softfloat_.softfloat.md#static-inf)
* [max](_types_opencv_softfloat_.softfloat.md#static-max)
* [min](_types_opencv_softfloat_.softfloat.md#static-min)
* [nan](_types_opencv_softfloat_.softfloat.md#static-nan)
* [one](_types_opencv_softfloat_.softfloat.md#static-one)
* [pi](_types_opencv_softfloat_.softfloat.md#static-pi)
* [zero](_types_opencv_softfloat_.softfloat.md#static-zero)

## Constructors

###  constructor

\+ **new softfloat**(): *[softfloat](_types_opencv_softfloat_.softfloat.md)*

*Defined in [types/opencv/softfloat.ts:6](https://github.com/cancerberoSgx/mirada/blob/c8721d6/mirada/src/types/opencv/softfloat.ts#L6)*

**Returns:** *[softfloat](_types_opencv_softfloat_.softfloat.md)*

\+ **new softfloat**(`c`: [softfloat](_types_opencv_softfloat_.softfloat.md)): *[softfloat](_types_opencv_softfloat_.softfloat.md)*

*Defined in [types/opencv/softfloat.ts:8](https://github.com/cancerberoSgx/mirada/blob/c8721d6/mirada/src/types/opencv/softfloat.ts#L8)*

**Parameters:**

Name | Type |
------ | ------ |
`c` | [softfloat](_types_opencv_softfloat_.softfloat.md) |

**Returns:** *[softfloat](_types_opencv_softfloat_.softfloat.md)*

\+ **new softfloat**(`arg174`: [uint32_t](../modules/_types_opencv__hacks_.md#uint32_t)): *[softfloat](_types_opencv_softfloat_.softfloat.md)*

*Defined in [types/opencv/softfloat.ts:10](https://github.com/cancerberoSgx/mirada/blob/c8721d6/mirada/src/types/opencv/softfloat.ts#L10)*

**Parameters:**

Name | Type |
------ | ------ |
`arg174` | [uint32_t](../modules/_types_opencv__hacks_.md#uint32_t) |

**Returns:** *[softfloat](_types_opencv_softfloat_.softfloat.md)*

\+ **new softfloat**(`arg175`: [uint64_t](../modules/_types_opencv__hacks_.md#uint64_t)): *[softfloat](_types_opencv_softfloat_.softfloat.md)*

*Defined in [types/opencv/softfloat.ts:12](https://github.com/cancerberoSgx/mirada/blob/c8721d6/mirada/src/types/opencv/softfloat.ts#L12)*

**Parameters:**

Name | Type |
------ | ------ |
`arg175` | [uint64_t](../modules/_types_opencv__hacks_.md#uint64_t) |

**Returns:** *[softfloat](_types_opencv_softfloat_.softfloat.md)*

\+ **new softfloat**(`arg176`: [int32_t](../modules/_types_opencv__hacks_.md#int32_t)): *[softfloat](_types_opencv_softfloat_.softfloat.md)*

*Defined in [types/opencv/softfloat.ts:14](https://github.com/cancerberoSgx/mirada/blob/c8721d6/mirada/src/types/opencv/softfloat.ts#L14)*

**Parameters:**

Name | Type |
------ | ------ |
`arg176` | [int32_t](../modules/_types_opencv__hacks_.md#int32_t) |

**Returns:** *[softfloat](_types_opencv_softfloat_.softfloat.md)*

\+ **new softfloat**(`arg177`: [int64_t](../modules/_types_opencv__hacks_.md#int64_t)): *[softfloat](_types_opencv_softfloat_.softfloat.md)*

*Defined in [types/opencv/softfloat.ts:16](https://github.com/cancerberoSgx/mirada/blob/c8721d6/mirada/src/types/opencv/softfloat.ts#L16)*

**Parameters:**

Name | Type |
------ | ------ |
`arg177` | [int64_t](../modules/_types_opencv__hacks_.md#int64_t) |

**Returns:** *[softfloat](_types_opencv_softfloat_.softfloat.md)*

\+ **new softfloat**(`a`: any): *[softfloat](_types_opencv_softfloat_.softfloat.md)*

*Defined in [types/opencv/softfloat.ts:18](https://github.com/cancerberoSgx/mirada/blob/c8721d6/mirada/src/types/opencv/softfloat.ts#L18)*

**Parameters:**

Name | Type |
------ | ------ |
`a` | any |

**Returns:** *[softfloat](_types_opencv_softfloat_.softfloat.md)*

## Properties

###  v

• **v**: *[uint32_t](../modules/_types_opencv__hacks_.md#uint32_t)*

*Defined in [types/opencv/softfloat.ts:6](https://github.com/cancerberoSgx/mirada/blob/c8721d6/mirada/src/types/opencv/softfloat.ts#L6)*

## Methods

###  getExp

▸ **getExp**(): *[int](../modules/_types_opencv__hacks_.md#int)*

*Defined in [types/opencv/softfloat.ts:22](https://github.com/cancerberoSgx/mirada/blob/c8721d6/mirada/src/types/opencv/softfloat.ts#L22)*

**Returns:** *[int](../modules/_types_opencv__hacks_.md#int)*

___

###  getFrac

▸ **getFrac**(): *[softfloat](_types_opencv_softfloat_.softfloat.md)*

*Defined in [types/opencv/softfloat.ts:27](https://github.com/cancerberoSgx/mirada/blob/c8721d6/mirada/src/types/opencv/softfloat.ts#L27)*

  Returns a number 1 <= x < 2 with the same significand

**Returns:** *[softfloat](_types_opencv_softfloat_.softfloat.md)*

___

###  getSign

▸ **getSign**(): *[bool](../modules/_types_opencv__hacks_.md#bool)*

*Defined in [types/opencv/softfloat.ts:29](https://github.com/cancerberoSgx/mirada/blob/c8721d6/mirada/src/types/opencv/softfloat.ts#L29)*

**Returns:** *[bool](../modules/_types_opencv__hacks_.md#bool)*

___

###  isInf

▸ **isInf**(): *[bool](../modules/_types_opencv__hacks_.md#bool)*

*Defined in [types/opencv/softfloat.ts:31](https://github.com/cancerberoSgx/mirada/blob/c8721d6/mirada/src/types/opencv/softfloat.ts#L31)*

**Returns:** *[bool](../modules/_types_opencv__hacks_.md#bool)*

___

###  isNaN

▸ **isNaN**(): *[bool](../modules/_types_opencv__hacks_.md#bool)*

*Defined in [types/opencv/softfloat.ts:33](https://github.com/cancerberoSgx/mirada/blob/c8721d6/mirada/src/types/opencv/softfloat.ts#L33)*

**Returns:** *[bool](../modules/_types_opencv__hacks_.md#bool)*

___

###  isSubnormal

▸ **isSubnormal**(): *[bool](../modules/_types_opencv__hacks_.md#bool)*

*Defined in [types/opencv/softfloat.ts:35](https://github.com/cancerberoSgx/mirada/blob/c8721d6/mirada/src/types/opencv/softfloat.ts#L35)*

**Returns:** *[bool](../modules/_types_opencv__hacks_.md#bool)*

___

###  setExp

▸ **setExp**(`e`: [int](../modules/_types_opencv__hacks_.md#int)): *[softfloat](_types_opencv_softfloat_.softfloat.md)*

*Defined in [types/opencv/softfloat.ts:37](https://github.com/cancerberoSgx/mirada/blob/c8721d6/mirada/src/types/opencv/softfloat.ts#L37)*

**Parameters:**

Name | Type |
------ | ------ |
`e` | [int](../modules/_types_opencv__hacks_.md#int) |

**Returns:** *[softfloat](_types_opencv_softfloat_.softfloat.md)*

___

###  setFrac

▸ **setFrac**(`s`: [softfloat](_types_opencv_softfloat_.softfloat.md)): *[softfloat](_types_opencv_softfloat_.softfloat.md)*

*Defined in [types/opencv/softfloat.ts:42](https://github.com/cancerberoSgx/mirada/blob/c8721d6/mirada/src/types/opencv/softfloat.ts#L42)*

  Constructs a copy of a number with significand taken from parameter

**Parameters:**

Name | Type |
------ | ------ |
`s` | [softfloat](_types_opencv_softfloat_.softfloat.md) |

**Returns:** *[softfloat](_types_opencv_softfloat_.softfloat.md)*

___

###  setSign

▸ **setSign**(`sign`: [bool](../modules/_types_opencv__hacks_.md#bool)): *[softfloat](_types_opencv_softfloat_.softfloat.md)*

*Defined in [types/opencv/softfloat.ts:44](https://github.com/cancerberoSgx/mirada/blob/c8721d6/mirada/src/types/opencv/softfloat.ts#L44)*

**Parameters:**

Name | Type |
------ | ------ |
`sign` | [bool](../modules/_types_opencv__hacks_.md#bool) |

**Returns:** *[softfloat](_types_opencv_softfloat_.softfloat.md)*

___

### `Static` eps

▸ **eps**(): *[softfloat](_types_opencv_softfloat_.softfloat.md)*

*Defined in [types/opencv/softfloat.ts:46](https://github.com/cancerberoSgx/mirada/blob/c8721d6/mirada/src/types/opencv/softfloat.ts#L46)*

**Returns:** *[softfloat](_types_opencv_softfloat_.softfloat.md)*

___

### `Static` fromRaw

▸ **fromRaw**(`a`: [uint32_t](../modules/_types_opencv__hacks_.md#uint32_t)): *[softfloat](_types_opencv_softfloat_.softfloat.md)*

*Defined in [types/opencv/softfloat.ts:51](https://github.com/cancerberoSgx/mirada/blob/c8721d6/mirada/src/types/opencv/softfloat.ts#L51)*

  Builds new value from raw binary representation

**Parameters:**

Name | Type |
------ | ------ |
`a` | [uint32_t](../modules/_types_opencv__hacks_.md#uint32_t) |

**Returns:** *[softfloat](_types_opencv_softfloat_.softfloat.md)*

___

### `Static` inf

▸ **inf**(): *[softfloat](_types_opencv_softfloat_.softfloat.md)*

*Defined in [types/opencv/softfloat.ts:53](https://github.com/cancerberoSgx/mirada/blob/c8721d6/mirada/src/types/opencv/softfloat.ts#L53)*

**Returns:** *[softfloat](_types_opencv_softfloat_.softfloat.md)*

___

### `Static` max

▸ **max**(): *[softfloat](_types_opencv_softfloat_.softfloat.md)*

*Defined in [types/opencv/softfloat.ts:55](https://github.com/cancerberoSgx/mirada/blob/c8721d6/mirada/src/types/opencv/softfloat.ts#L55)*

**Returns:** *[softfloat](_types_opencv_softfloat_.softfloat.md)*

___

### `Static` min

▸ **min**(): *[softfloat](_types_opencv_softfloat_.softfloat.md)*

*Defined in [types/opencv/softfloat.ts:57](https://github.com/cancerberoSgx/mirada/blob/c8721d6/mirada/src/types/opencv/softfloat.ts#L57)*

**Returns:** *[softfloat](_types_opencv_softfloat_.softfloat.md)*

___

### `Static` nan

▸ **nan**(): *[softfloat](_types_opencv_softfloat_.softfloat.md)*

*Defined in [types/opencv/softfloat.ts:59](https://github.com/cancerberoSgx/mirada/blob/c8721d6/mirada/src/types/opencv/softfloat.ts#L59)*

**Returns:** *[softfloat](_types_opencv_softfloat_.softfloat.md)*

___

### `Static` one

▸ **one**(): *[softfloat](_types_opencv_softfloat_.softfloat.md)*

*Defined in [types/opencv/softfloat.ts:61](https://github.com/cancerberoSgx/mirada/blob/c8721d6/mirada/src/types/opencv/softfloat.ts#L61)*

**Returns:** *[softfloat](_types_opencv_softfloat_.softfloat.md)*

___

### `Static` pi

▸ **pi**(): *[softfloat](_types_opencv_softfloat_.softfloat.md)*

*Defined in [types/opencv/softfloat.ts:63](https://github.com/cancerberoSgx/mirada/blob/c8721d6/mirada/src/types/opencv/softfloat.ts#L63)*

**Returns:** *[softfloat](_types_opencv_softfloat_.softfloat.md)*

___

### `Static` zero

▸ **zero**(): *[softfloat](_types_opencv_softfloat_.softfloat.md)*

*Defined in [types/opencv/softfloat.ts:65](https://github.com/cancerberoSgx/mirada/blob/c8721d6/mirada/src/types/opencv/softfloat.ts#L65)*

**Returns:** *[softfloat](_types_opencv_softfloat_.softfloat.md)*