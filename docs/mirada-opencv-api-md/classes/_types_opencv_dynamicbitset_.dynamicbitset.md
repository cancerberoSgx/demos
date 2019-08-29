**[mirada](../README.md)**

[Globals](../README.md) › ["types/opencv/DynamicBitset"](../modules/_types_opencv_dynamicbitset_.md) › [DynamicBitset](_types_opencv_dynamicbitset_.dynamicbitset.md)

# Class: DynamicBitset

Class re-implementing the boost version of it This helps not depending on boost, it also does not do
the bound checks and has a way to reset a block for speed

Source:
[opencv2/flann/dynamic_bitset.h](https://github.com/opencv/opencv/tree/master/modules/core/include/opencv2/flann/dynamic_bitset.h#L150).

## Hierarchy

* **DynamicBitset**

## Index

### Constructors

* [constructor](_types_opencv_dynamicbitset_.dynamicbitset.md#constructor)

### Methods

* [clear](_types_opencv_dynamicbitset_.dynamicbitset.md#clear)
* [empty](_types_opencv_dynamicbitset_.dynamicbitset.md#empty)
* [reset](_types_opencv_dynamicbitset_.dynamicbitset.md#reset)
* [reset_block](_types_opencv_dynamicbitset_.dynamicbitset.md#reset_block)
* [resize](_types_opencv_dynamicbitset_.dynamicbitset.md#resize)
* [set](_types_opencv_dynamicbitset_.dynamicbitset.md#set)
* [size](_types_opencv_dynamicbitset_.dynamicbitset.md#size)
* [test](_types_opencv_dynamicbitset_.dynamicbitset.md#test)

## Constructors

###  constructor

\+ **new DynamicBitset**(): *[DynamicBitset](_types_opencv_dynamicbitset_.dynamicbitset.md)*

*Defined in [types/opencv/DynamicBitset.ts:12](https://github.com/cancerberoSgx/mirada/blob/dd33d35/mirada/src/types/opencv/DynamicBitset.ts#L12)*

  default constructor

**Returns:** *[DynamicBitset](_types_opencv_dynamicbitset_.dynamicbitset.md)*

\+ **new DynamicBitset**(`sz`: [size_t](../modules/_types_opencv__hacks_.md#size_t)): *[DynamicBitset](_types_opencv_dynamicbitset_.dynamicbitset.md)*

*Defined in [types/opencv/DynamicBitset.ts:17](https://github.com/cancerberoSgx/mirada/blob/dd33d35/mirada/src/types/opencv/DynamicBitset.ts#L17)*

  only constructor we use in our code

**Parameters:**

Name | Type | Description |
------ | ------ | ------ |
`sz` | [size_t](../modules/_types_opencv__hacks_.md#size_t) | the size of the bitset (in bits)  |

**Returns:** *[DynamicBitset](_types_opencv_dynamicbitset_.dynamicbitset.md)*

## Methods

###  clear

▸ **clear**(): *void*

*Defined in [types/opencv/DynamicBitset.ts:29](https://github.com/cancerberoSgx/mirada/blob/dd33d35/mirada/src/types/opencv/DynamicBitset.ts#L29)*

  Sets all the bits to 0

**Returns:** *void*

___

###  empty

▸ **empty**(): *[bool](../modules/_types_opencv__hacks_.md#bool)*

*Defined in [types/opencv/DynamicBitset.ts:34](https://github.com/cancerberoSgx/mirada/blob/dd33d35/mirada/src/types/opencv/DynamicBitset.ts#L34)*

  true if the bitset is empty

**Returns:** *[bool](../modules/_types_opencv__hacks_.md#bool)*

___

###  reset

▸ **reset**(): *void*

*Defined in [types/opencv/DynamicBitset.ts:39](https://github.com/cancerberoSgx/mirada/blob/dd33d35/mirada/src/types/opencv/DynamicBitset.ts#L39)*

  set all the bits to 0

**Returns:** *void*

▸ **reset**(`index`: [size_t](../modules/_types_opencv__hacks_.md#size_t)): *void*

*Defined in [types/opencv/DynamicBitset.ts:41](https://github.com/cancerberoSgx/mirada/blob/dd33d35/mirada/src/types/opencv/DynamicBitset.ts#L41)*

**Parameters:**

Name | Type |
------ | ------ |
`index` | [size_t](../modules/_types_opencv__hacks_.md#size_t) |

**Returns:** *void*

___

###  reset_block

▸ **reset_block**(`index`: [size_t](../modules/_types_opencv__hacks_.md#size_t)): *void*

*Defined in [types/opencv/DynamicBitset.ts:43](https://github.com/cancerberoSgx/mirada/blob/dd33d35/mirada/src/types/opencv/DynamicBitset.ts#L43)*

**Parameters:**

Name | Type |
------ | ------ |
`index` | [size_t](../modules/_types_opencv__hacks_.md#size_t) |

**Returns:** *void*

___

###  resize

▸ **resize**(`sz`: [size_t](../modules/_types_opencv__hacks_.md#size_t)): *void*

*Defined in [types/opencv/DynamicBitset.ts:48](https://github.com/cancerberoSgx/mirada/blob/dd33d35/mirada/src/types/opencv/DynamicBitset.ts#L48)*

  resize the bitset so that it contains at least sz bits

**Parameters:**

Name | Type |
------ | ------ |
`sz` | [size_t](../modules/_types_opencv__hacks_.md#size_t) |

**Returns:** *void*

___

###  set

▸ **set**(`index`: [size_t](../modules/_types_opencv__hacks_.md#size_t)): *void*

*Defined in [types/opencv/DynamicBitset.ts:55](https://github.com/cancerberoSgx/mirada/blob/dd33d35/mirada/src/types/opencv/DynamicBitset.ts#L55)*

  set a bit to true

**Parameters:**

Name | Type | Description |
------ | ------ | ------ |
`index` | [size_t](../modules/_types_opencv__hacks_.md#size_t) | the index of the bit to set to 1  |

**Returns:** *void*

___

###  size

▸ **size**(): *[size_t](../modules/_types_opencv__hacks_.md#size_t)*

*Defined in [types/opencv/DynamicBitset.ts:60](https://github.com/cancerberoSgx/mirada/blob/dd33d35/mirada/src/types/opencv/DynamicBitset.ts#L60)*

  gives the number of contained bits

**Returns:** *[size_t](../modules/_types_opencv__hacks_.md#size_t)*

___

###  test

▸ **test**(`index`: [size_t](../modules/_types_opencv__hacks_.md#size_t)): *[bool](../modules/_types_opencv__hacks_.md#bool)*

*Defined in [types/opencv/DynamicBitset.ts:69](https://github.com/cancerberoSgx/mirada/blob/dd33d35/mirada/src/types/opencv/DynamicBitset.ts#L69)*

  check if a bit is set

  true if the bit is set

**Parameters:**

Name | Type | Description |
------ | ------ | ------ |
`index` | [size_t](../modules/_types_opencv__hacks_.md#size_t) | the index of the bit to check  |

**Returns:** *[bool](../modules/_types_opencv__hacks_.md#bool)*