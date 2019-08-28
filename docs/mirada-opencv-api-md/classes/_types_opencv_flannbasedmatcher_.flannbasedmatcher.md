**[mirada](../README.md)**

[Globals](../README.md) › ["types/opencv/FlannBasedMatcher"](../modules/_types_opencv_flannbasedmatcher_.md) › [FlannBasedMatcher](_types_opencv_flannbasedmatcher_.flannbasedmatcher.md)

# Class: FlannBasedMatcher

This matcher trains [cv::flann::Index](#d1/db2/classcv_1_1flann_1_1Index}) on a train descriptor
collection and calls its nearest search methods to find the best matches. So, this matcher may be
faster when matching a large train collection than the brute force matcher.
[FlannBasedMatcher](#dc/de2/classcv_1_1FlannBasedMatcher}) does not support masking permissible
matches of descriptor sets because [flann::Index](#d1/db2/classcv_1_1flann_1_1Index}) does not
support this. :

Source:
[opencv2/features2d.hpp](https://github.com/opencv/opencv/tree/master/modules/core/include/opencv2/features2d.hpp#L1187).

## Hierarchy

* **FlannBasedMatcher**

## Index

### Constructors

* [constructor](_types_opencv_flannbasedmatcher_.flannbasedmatcher.md#constructor)

### Methods

* [add](_types_opencv_flannbasedmatcher_.flannbasedmatcher.md#add)
* [clear](_types_opencv_flannbasedmatcher_.flannbasedmatcher.md#clear)
* [clone](_types_opencv_flannbasedmatcher_.flannbasedmatcher.md#clone)
* [isMaskSupported](_types_opencv_flannbasedmatcher_.flannbasedmatcher.md#ismasksupported)
* [read](_types_opencv_flannbasedmatcher_.flannbasedmatcher.md#read)
* [train](_types_opencv_flannbasedmatcher_.flannbasedmatcher.md#train)
* [write](_types_opencv_flannbasedmatcher_.flannbasedmatcher.md#write)
* [create](_types_opencv_flannbasedmatcher_.flannbasedmatcher.md#static-create)

## Constructors

###  constructor

\+ **new FlannBasedMatcher**(`indexParams?`: [Ptr](../modules/_types_opencv__hacks_.md#ptr), `searchParams?`: [Ptr](../modules/_types_opencv__hacks_.md#ptr)): *[FlannBasedMatcher](_types_opencv_flannbasedmatcher_.flannbasedmatcher.md)*

**Parameters:**

Name | Type |
------ | ------ |
`indexParams?` | [Ptr](../modules/_types_opencv__hacks_.md#ptr) |
`searchParams?` | [Ptr](../modules/_types_opencv__hacks_.md#ptr) |

**Returns:** *[FlannBasedMatcher](_types_opencv_flannbasedmatcher_.flannbasedmatcher.md)*

## Methods

###  add

▸ **add**(`descriptors`: InputArrayOfArrays): *InputArrayOfArrays*

  If the collection is not empty, the new descriptors are added to existing train descriptors.

**Parameters:**

Name | Type | Description |
------ | ------ | ------ |
`descriptors` | InputArrayOfArrays | Descriptors to add. Each descriptors[i] is a set of descriptors from the same train image.  |

**Returns:** *InputArrayOfArrays*

___

###  clear

▸ **clear**(): *void*

**Returns:** *void*

___

###  clone

▸ **clone**(`emptyTrainData?`: [bool](../modules/_types_opencv__hacks_.md#bool)): *[Ptr](../modules/_types_opencv__hacks_.md#ptr)*

**Parameters:**

Name | Type | Description |
------ | ------ | ------ |
`emptyTrainData?` | [bool](../modules/_types_opencv__hacks_.md#bool) | If emptyTrainData is false, the method creates a deep copy of the object, that is, copies both parameters and train data. If emptyTrainData is true, the method creates an object copy with the current parameters but with empty train data.  |

**Returns:** *[Ptr](../modules/_types_opencv__hacks_.md#ptr)*

___

###  isMaskSupported

▸ **isMaskSupported**(): *[bool](../modules/_types_opencv__hacks_.md#bool)*

**Returns:** *[bool](../modules/_types_opencv__hacks_.md#bool)*

___

###  read

▸ **read**(`fn`: [FileNode](../modules/_types_opencv__hacks_.md#filenode)): *[FileNode](../modules/_types_opencv__hacks_.md#filenode)*

**Parameters:**

Name | Type |
------ | ------ |
`fn` | [FileNode](../modules/_types_opencv__hacks_.md#filenode) |

**Returns:** *[FileNode](../modules/_types_opencv__hacks_.md#filenode)*

___

###  train

▸ **train**(): *void*

  Trains a descriptor matcher (for example, the flann index). In all methods to match, the method
[train()] is run every time before matching. Some descriptor matchers (for example,
BruteForceMatcher) have an empty implementation of this method. Other matchers really train their
inner structures (for example, [FlannBasedMatcher] trains [flann::Index] ).

**Returns:** *void*

___

###  write

▸ **write**(`fs`: [FileStorage](../modules/_types_opencv__hacks_.md#filestorage)): *[FileStorage](../modules/_types_opencv__hacks_.md#filestorage)*

**Parameters:**

Name | Type |
------ | ------ |
`fs` | [FileStorage](../modules/_types_opencv__hacks_.md#filestorage) |

**Returns:** *[FileStorage](../modules/_types_opencv__hacks_.md#filestorage)*

___

### `Static` create

▸ **create**(): *[Ptr](../modules/_types_opencv__hacks_.md#ptr)*

**Returns:** *[Ptr](../modules/_types_opencv__hacks_.md#ptr)*