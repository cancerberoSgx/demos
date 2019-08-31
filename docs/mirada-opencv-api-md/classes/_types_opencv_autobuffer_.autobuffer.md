**[mirada](../README.md)**

[Globals](../README.md) › ["types/opencv/AutoBuffer"](../modules/_types_opencv_autobuffer_.md) › [AutoBuffer](_types_opencv_autobuffer_.autobuffer.md)

# Class: AutoBuffer

The class is used for temporary buffers in functions and methods. If a temporary buffer is usually
small (a few K's of memory), but its size depends on the parameters, it makes sense to create a
small fixed-size array on stack and use it if it's large enough. If the required buffer size is
larger than the fixed size, another buffer of sufficient size is allocated dynamically and released
after the processing. Therefore, in typical cases, when the buffer size is small, there is no
overhead associated with malloc()/free(). At the same time, there is no limit on the size of
processed data.

This is what [AutoBuffer](#d8/dd0/classcv_1_1AutoBuffer}) does. The template takes 2 parameters -
type of the buffer elements and the number of stack-allocated elements. Here is how the class is
used:

```cpp
void my_func(const cv::Mat& m)
{
   cv::AutoBuffer<float> buf(1000); // create automatic buffer containing 1000 floats

   buf.allocate(m.rows); // if m.rows <= 1000, the pre-allocated buffer is used,
                         // otherwise the buffer of "m.rows" floats will be allocated
                         // dynamically and deallocated in cv::AutoBuffer destructor
   ...
}
```

Source:
[opencv2/core/utility.hpp](https://github.com/opencv/opencv/tree/master/modules/core/include/opencv2/core/utility.hpp#L128).

## Hierarchy

* **AutoBuffer**

## Index

### Constructors

* [constructor](_types_opencv_autobuffer_.autobuffer.md#constructor)

### Methods

* [allocate](_types_opencv_autobuffer_.autobuffer.md#allocate)
* [data](_types_opencv_autobuffer_.autobuffer.md#data)
* [deallocate](_types_opencv_autobuffer_.autobuffer.md#deallocate)
* [resize](_types_opencv_autobuffer_.autobuffer.md#resize)
* [size](_types_opencv_autobuffer_.autobuffer.md#size)

## Constructors

###  constructor

\+ **new AutoBuffer**(): *[AutoBuffer](_types_opencv_autobuffer_.autobuffer.md)*

*Defined in [types/opencv/AutoBuffer.ts:33](https://github.com/cancerberoSgx/mirada/blob/eecc091/mirada/src/types/opencv/AutoBuffer.ts#L33)*

**Returns:** *[AutoBuffer](_types_opencv_autobuffer_.autobuffer.md)*

\+ **new AutoBuffer**(`_size`: [size_t](../modules/_types_opencv__hacks_.md#size_t)): *[AutoBuffer](_types_opencv_autobuffer_.autobuffer.md)*

*Defined in [types/opencv/AutoBuffer.ts:35](https://github.com/cancerberoSgx/mirada/blob/eecc091/mirada/src/types/opencv/AutoBuffer.ts#L35)*

**Parameters:**

Name | Type |
------ | ------ |
`_size` | [size_t](../modules/_types_opencv__hacks_.md#size_t) |

**Returns:** *[AutoBuffer](_types_opencv_autobuffer_.autobuffer.md)*

\+ **new AutoBuffer**(`buf`: [AutoBuffer](_types_opencv_autobuffer_.autobuffer.md)): *[AutoBuffer](_types_opencv_autobuffer_.autobuffer.md)*

*Defined in [types/opencv/AutoBuffer.ts:37](https://github.com/cancerberoSgx/mirada/blob/eecc091/mirada/src/types/opencv/AutoBuffer.ts#L37)*

**Parameters:**

Name | Type |
------ | ------ |
`buf` | [AutoBuffer](_types_opencv_autobuffer_.autobuffer.md) |

**Returns:** *[AutoBuffer](_types_opencv_autobuffer_.autobuffer.md)*

## Methods

###  allocate

▸ **allocate**(`_size`: [size_t](../modules/_types_opencv__hacks_.md#size_t)): *void*

*Defined in [types/opencv/AutoBuffer.ts:41](https://github.com/cancerberoSgx/mirada/blob/eecc091/mirada/src/types/opencv/AutoBuffer.ts#L41)*

**Parameters:**

Name | Type |
------ | ------ |
`_size` | [size_t](../modules/_types_opencv__hacks_.md#size_t) |

**Returns:** *void*

___

###  data

▸ **data**(): *any*

*Defined in [types/opencv/AutoBuffer.ts:43](https://github.com/cancerberoSgx/mirada/blob/eecc091/mirada/src/types/opencv/AutoBuffer.ts#L43)*

**Returns:** *any*

▸ **data**(): *any*

*Defined in [types/opencv/AutoBuffer.ts:45](https://github.com/cancerberoSgx/mirada/blob/eecc091/mirada/src/types/opencv/AutoBuffer.ts#L45)*

**Returns:** *any*

___

###  deallocate

▸ **deallocate**(): *void*

*Defined in [types/opencv/AutoBuffer.ts:47](https://github.com/cancerberoSgx/mirada/blob/eecc091/mirada/src/types/opencv/AutoBuffer.ts#L47)*

**Returns:** *void*

___

###  resize

▸ **resize**(`_size`: [size_t](../modules/_types_opencv__hacks_.md#size_t)): *void*

*Defined in [types/opencv/AutoBuffer.ts:49](https://github.com/cancerberoSgx/mirada/blob/eecc091/mirada/src/types/opencv/AutoBuffer.ts#L49)*

**Parameters:**

Name | Type |
------ | ------ |
`_size` | [size_t](../modules/_types_opencv__hacks_.md#size_t) |

**Returns:** *void*

___

###  size

▸ **size**(): *[size_t](../modules/_types_opencv__hacks_.md#size_t)*

*Defined in [types/opencv/AutoBuffer.ts:51](https://github.com/cancerberoSgx/mirada/blob/eecc091/mirada/src/types/opencv/AutoBuffer.ts#L51)*

**Returns:** *[size_t](../modules/_types_opencv__hacks_.md#size_t)*