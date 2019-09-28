[mirada](../README.md) › ["types/opencv/BFMatcher"](../modules/_types_opencv_bfmatcher_.md) › [BFMatcher](_types_opencv_bfmatcher_.bfmatcher.md)

# Class: BFMatcher


For each descriptor in the first set, this matcher finds the closest descriptor in the second set by
trying each one. This descriptor matcher supports masking permissible matches of descriptor sets.

Source:
[opencv2/features2d.hpp](https://github.com/opencv/opencv/tree/master/modules/core/include/opencv2/features2d.hpp#L1140).

## Hierarchy

* **BFMatcher**

## Index

### Constructors

* [constructor](_types_opencv_bfmatcher_.bfmatcher.md#constructor)

### Methods

* [clone](_types_opencv_bfmatcher_.bfmatcher.md#clone)
* [isMaskSupported](_types_opencv_bfmatcher_.bfmatcher.md#ismasksupported)
* [create](_types_opencv_bfmatcher_.bfmatcher.md#static-create)

## Constructors

###  constructor

\+ **new BFMatcher**(`normType?`: [int](../modules/_types_opencv__hacks_.md#int), `crossCheck?`: [bool](../modules/_types_opencv__hacks_.md#bool)): *[BFMatcher](_types_opencv_bfmatcher_.bfmatcher.md)*

*Defined in [types/opencv/BFMatcher.ts:12](https://github.com/cancerberoSgx/mirada/blob/c8721d6/mirada/src/types/opencv/BFMatcher.ts#L12)*

**Parameters:**

Name | Type |
------ | ------ |
`normType?` | [int](../modules/_types_opencv__hacks_.md#int) |
`crossCheck?` | [bool](../modules/_types_opencv__hacks_.md#bool) |

**Returns:** *[BFMatcher](_types_opencv_bfmatcher_.bfmatcher.md)*

## Methods

###  clone

▸ **clone**(`emptyTrainData?`: [bool](../modules/_types_opencv__hacks_.md#bool)): *[Ptr](../modules/_types_opencv__hacks_.md#ptr)*

*Defined in [types/opencv/BFMatcher.ts:21](https://github.com/cancerberoSgx/mirada/blob/c8721d6/mirada/src/types/opencv/BFMatcher.ts#L21)*

**Parameters:**

Name | Type | Description |
------ | ------ | ------ |
`emptyTrainData?` | [bool](../modules/_types_opencv__hacks_.md#bool) | If emptyTrainData is false, the method creates a deep copy of the object, that is, copies both parameters and train data. If emptyTrainData is true, the method creates an object copy with the current parameters but with empty train data.  |

**Returns:** *[Ptr](../modules/_types_opencv__hacks_.md#ptr)*

___

###  isMaskSupported

▸ **isMaskSupported**(): *[bool](../modules/_types_opencv__hacks_.md#bool)*

*Defined in [types/opencv/BFMatcher.ts:23](https://github.com/cancerberoSgx/mirada/blob/c8721d6/mirada/src/types/opencv/BFMatcher.ts#L23)*

**Returns:** *[bool](../modules/_types_opencv__hacks_.md#bool)*

___

### `Static` create

▸ **create**(`normType?`: [int](../modules/_types_opencv__hacks_.md#int), `crossCheck?`: [bool](../modules/_types_opencv__hacks_.md#bool)): *[Ptr](../modules/_types_opencv__hacks_.md#ptr)*

*Defined in [types/opencv/BFMatcher.ts:38](https://github.com/cancerberoSgx/mirada/blob/c8721d6/mirada/src/types/opencv/BFMatcher.ts#L38)*

**Parameters:**

Name | Type | Description |
------ | ------ | ------ |
`normType?` | [int](../modules/_types_opencv__hacks_.md#int) | One of NORM_L1, NORM_L2, NORM_HAMMING, NORM_HAMMING2. L1 and L2 norms are preferable choices for SIFT and SURF descriptors, NORM_HAMMING should be used with ORB, BRISK and BRIEF, NORM_HAMMING2 should be used with ORB when WTA_K==3 or 4 (see ORB::ORB constructor description).  |
`crossCheck?` | [bool](../modules/_types_opencv__hacks_.md#bool) | If it is false, this is will be default BFMatcher behaviour when it finds the k nearest neighbors for each query descriptor. If crossCheck==true, then the knnMatch() method with k=1 will only return pairs (i,j) such that for i-th query descriptor the j-th descriptor in the matcher's collection is the nearest and vice versa, i.e. the BFMatcher will only return consistent pairs. Such technique usually produces best results with minimal number of outliers when there are enough matches. This is alternative to the ratio test, used by D. Lowe in SIFT paper.  |

**Returns:** *[Ptr](../modules/_types_opencv__hacks_.md#ptr)*