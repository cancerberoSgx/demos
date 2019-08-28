**[mirada](../README.md)**

[Globals](../README.md) › ["types/opencv/DescriptorMatcher"](../modules/_types_opencv_descriptormatcher_.md) › [DescriptorMatcher](_types_opencv_descriptormatcher_.descriptormatcher.md)

# Class: DescriptorMatcher

It has two groups of match methods: for matching descriptors of an image with another image or with
an image set.

Source:
[opencv2/features2d.hpp](https://github.com/opencv/opencv/tree/master/modules/core/include/opencv2/features2d.hpp#L860).

## Hierarchy

* **DescriptorMatcher**

## Index

### Methods

* [add](_types_opencv_descriptormatcher_.descriptormatcher.md#add)
* [clear](_types_opencv_descriptormatcher_.descriptormatcher.md#clear)
* [clone](_types_opencv_descriptormatcher_.descriptormatcher.md#clone)
* [empty](_types_opencv_descriptormatcher_.descriptormatcher.md#empty)
* [getTrainDescriptors](_types_opencv_descriptormatcher_.descriptormatcher.md#gettraindescriptors)
* [isMaskSupported](_types_opencv_descriptormatcher_.descriptormatcher.md#ismasksupported)
* [knnMatch](_types_opencv_descriptormatcher_.descriptormatcher.md#knnmatch)
* [match](_types_opencv_descriptormatcher_.descriptormatcher.md#match)
* [radiusMatch](_types_opencv_descriptormatcher_.descriptormatcher.md#radiusmatch)
* [read](_types_opencv_descriptormatcher_.descriptormatcher.md#read)
* [train](_types_opencv_descriptormatcher_.descriptormatcher.md#train)
* [write](_types_opencv_descriptormatcher_.descriptormatcher.md#write)
* [create](_types_opencv_descriptormatcher_.descriptormatcher.md#static-create)

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

###  empty

▸ **empty**(): *[bool](../modules/_types_opencv__hacks_.md#bool)*

**Returns:** *[bool](../modules/_types_opencv__hacks_.md#bool)*

___

###  getTrainDescriptors

▸ **getTrainDescriptors**(): *[Mat](_types_opencv_mat_.mat.md)*

**Returns:** *[Mat](_types_opencv_mat_.mat.md)*

___

###  isMaskSupported

▸ **isMaskSupported**(): *[bool](../modules/_types_opencv__hacks_.md#bool)*

**Returns:** *[bool](../modules/_types_opencv__hacks_.md#bool)*

___

###  knnMatch

▸ **knnMatch**(`queryDescriptors`: InputArray, `trainDescriptors`: InputArray, `matches`: [DMatch](../modules/_types_opencv__hacks_.md#dmatch), `k`: [int](../modules/_types_opencv__hacks_.md#int), `mask?`: InputArray, `compactResult?`: [bool](../modules/_types_opencv__hacks_.md#bool)): *InputArray*

  These extended variants of [DescriptorMatcher::match] methods find several best matches for each
query descriptor. The matches are returned in the distance increasing order. See
[DescriptorMatcher::match] for the details about query and train descriptors.

**Parameters:**

Name | Type | Description |
------ | ------ | ------ |
`queryDescriptors` | InputArray | Query set of descriptors.  |
`trainDescriptors` | InputArray | Train set of descriptors. This set is not added to the train descriptors collection stored in the class object.  |
`matches` | [DMatch](../modules/_types_opencv__hacks_.md#dmatch) | Matches. Each matches[i] is k or less matches for the same query descriptor.  |
`k` | [int](../modules/_types_opencv__hacks_.md#int) | Count of best matches found per each query descriptor or less if a query descriptor has less than k possible matches in total.  |
`mask?` | InputArray | Mask specifying permissible matches between an input query and train matrices of descriptors.  |
`compactResult?` | [bool](../modules/_types_opencv__hacks_.md#bool) | Parameter used when the mask (or masks) is not empty. If compactResult is false, the matches vector has the same size as queryDescriptors rows. If compactResult is true, the matches vector does not contain matches for fully masked-out query descriptors.  |

**Returns:** *InputArray*

▸ **knnMatch**(`queryDescriptors`: InputArray, `matches`: [DMatch](../modules/_types_opencv__hacks_.md#dmatch), `k`: [int](../modules/_types_opencv__hacks_.md#int), `masks?`: InputArrayOfArrays, `compactResult?`: [bool](../modules/_types_opencv__hacks_.md#bool)): *InputArray*

  This is an overloaded member function, provided for convenience. It differs from the above
function only in what argument(s) it accepts.

**Parameters:**

Name | Type | Description |
------ | ------ | ------ |
`queryDescriptors` | InputArray | Query set of descriptors.  |
`matches` | [DMatch](../modules/_types_opencv__hacks_.md#dmatch) | Matches. Each matches[i] is k or less matches for the same query descriptor.  |
`k` | [int](../modules/_types_opencv__hacks_.md#int) | Count of best matches found per each query descriptor or less if a query descriptor has less than k possible matches in total.  |
`masks?` | InputArrayOfArrays | Set of masks. Each masks[i] specifies permissible matches between the input query descriptors and stored train descriptors from the i-th image trainDescCollection[i].  |
`compactResult?` | [bool](../modules/_types_opencv__hacks_.md#bool) | Parameter used when the mask (or masks) is not empty. If compactResult is false, the matches vector has the same size as queryDescriptors rows. If compactResult is true, the matches vector does not contain matches for fully masked-out query descriptors.  |

**Returns:** *InputArray*

___

###  match

▸ **match**(`queryDescriptors`: InputArray, `trainDescriptors`: InputArray, `matches`: [DMatch](../modules/_types_opencv__hacks_.md#dmatch), `mask?`: InputArray): *InputArray*

  In the first variant of this method, the train descriptors are passed as an input argument. In the
second variant of the method, train descriptors collection that was set by [DescriptorMatcher::add]
is used. Optional mask (or masks) can be passed to specify which query and training descriptors can
be matched. Namely, queryDescriptors[i] can be matched with trainDescriptors[j] only if
mask.at<uchar>(i,j) is non-zero.

**Parameters:**

Name | Type | Description |
------ | ------ | ------ |
`queryDescriptors` | InputArray | Query set of descriptors.  |
`trainDescriptors` | InputArray | Train set of descriptors. This set is not added to the train descriptors collection stored in the class object.  |
`matches` | [DMatch](../modules/_types_opencv__hacks_.md#dmatch) | Matches. If a query descriptor is masked out in mask , no match is added for this descriptor. So, matches size may be smaller than the query descriptors count.  |
`mask?` | InputArray | Mask specifying permissible matches between an input query and train matrices of descriptors.  |

**Returns:** *InputArray*

▸ **match**(`queryDescriptors`: InputArray, `matches`: [DMatch](../modules/_types_opencv__hacks_.md#dmatch), `masks?`: InputArrayOfArrays): *InputArray*

  This is an overloaded member function, provided for convenience. It differs from the above
function only in what argument(s) it accepts.

**Parameters:**

Name | Type | Description |
------ | ------ | ------ |
`queryDescriptors` | InputArray | Query set of descriptors.  |
`matches` | [DMatch](../modules/_types_opencv__hacks_.md#dmatch) | Matches. If a query descriptor is masked out in mask , no match is added for this descriptor. So, matches size may be smaller than the query descriptors count.  |
`masks?` | InputArrayOfArrays | Set of masks. Each masks[i] specifies permissible matches between the input query descriptors and stored train descriptors from the i-th image trainDescCollection[i].  |

**Returns:** *InputArray*

___

###  radiusMatch

▸ **radiusMatch**(`queryDescriptors`: InputArray, `trainDescriptors`: InputArray, `matches`: [DMatch](../modules/_types_opencv__hacks_.md#dmatch), `maxDistance`: [float](../modules/_types_opencv__hacks_.md#float), `mask?`: InputArray, `compactResult?`: [bool](../modules/_types_opencv__hacks_.md#bool)): *InputArray*

  For each query descriptor, the methods find such training descriptors that the distance between
the query descriptor and the training descriptor is equal or smaller than maxDistance. Found matches
are returned in the distance increasing order.

**Parameters:**

Name | Type | Description |
------ | ------ | ------ |
`queryDescriptors` | InputArray | Query set of descriptors.  |
`trainDescriptors` | InputArray | Train set of descriptors. This set is not added to the train descriptors collection stored in the class object.  |
`matches` | [DMatch](../modules/_types_opencv__hacks_.md#dmatch) | Found matches.  |
`maxDistance` | [float](../modules/_types_opencv__hacks_.md#float) | Threshold for the distance between matched descriptors. Distance means here metric distance (e.g. Hamming distance), not the distance between coordinates (which is measured in Pixels)!  |
`mask?` | InputArray | Mask specifying permissible matches between an input query and train matrices of descriptors.  |
`compactResult?` | [bool](../modules/_types_opencv__hacks_.md#bool) | Parameter used when the mask (or masks) is not empty. If compactResult is false, the matches vector has the same size as queryDescriptors rows. If compactResult is true, the matches vector does not contain matches for fully masked-out query descriptors.  |

**Returns:** *InputArray*

▸ **radiusMatch**(`queryDescriptors`: InputArray, `matches`: [DMatch](../modules/_types_opencv__hacks_.md#dmatch), `maxDistance`: [float](../modules/_types_opencv__hacks_.md#float), `masks?`: InputArrayOfArrays, `compactResult?`: [bool](../modules/_types_opencv__hacks_.md#bool)): *InputArray*

  This is an overloaded member function, provided for convenience. It differs from the above
function only in what argument(s) it accepts.

**Parameters:**

Name | Type | Description |
------ | ------ | ------ |
`queryDescriptors` | InputArray | Query set of descriptors.  |
`matches` | [DMatch](../modules/_types_opencv__hacks_.md#dmatch) | Found matches.  |
`maxDistance` | [float](../modules/_types_opencv__hacks_.md#float) | Threshold for the distance between matched descriptors. Distance means here metric distance (e.g. Hamming distance), not the distance between coordinates (which is measured in Pixels)!  |
`masks?` | InputArrayOfArrays | Set of masks. Each masks[i] specifies permissible matches between the input query descriptors and stored train descriptors from the i-th image trainDescCollection[i].  |
`compactResult?` | [bool](../modules/_types_opencv__hacks_.md#bool) | Parameter used when the mask (or masks) is not empty. If compactResult is false, the matches vector has the same size as queryDescriptors rows. If compactResult is true, the matches vector does not contain matches for fully masked-out query descriptors.  |

**Returns:** *InputArray*

___

###  read

▸ **read**(`fileName`: String): *String*

**Parameters:**

Name | Type |
------ | ------ |
`fileName` | String |

**Returns:** *String*

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

▸ **write**(`fileName`: String): *String*

**Parameters:**

Name | Type |
------ | ------ |
`fileName` | String |

**Returns:** *String*

▸ **write**(`fs`: [FileStorage](../modules/_types_opencv__hacks_.md#filestorage)): *[FileStorage](../modules/_types_opencv__hacks_.md#filestorage)*

**Parameters:**

Name | Type |
------ | ------ |
`fs` | [FileStorage](../modules/_types_opencv__hacks_.md#filestorage) |

**Returns:** *[FileStorage](../modules/_types_opencv__hacks_.md#filestorage)*

▸ **write**(`fs`: [Ptr](../modules/_types_opencv__hacks_.md#ptr), `name?`: String): *[Ptr](../modules/_types_opencv__hacks_.md#ptr)*

**Parameters:**

Name | Type |
------ | ------ |
`fs` | [Ptr](../modules/_types_opencv__hacks_.md#ptr) |
`name?` | String |

**Returns:** *[Ptr](../modules/_types_opencv__hacks_.md#ptr)*

___

### `Static` create

▸ **create**(`descriptorMatcherType`: String): *[Ptr](../modules/_types_opencv__hacks_.md#ptr)*

**Parameters:**

Name | Type | Description |
------ | ------ | ------ |
`descriptorMatcherType` | String | Descriptor matcher type. Now the following matcher types are supported:   BruteForce (it uses L2 )BruteForce-L1BruteForce-HammingBruteForce-Hamming(2)FlannBased  |

**Returns:** *[Ptr](../modules/_types_opencv__hacks_.md#ptr)*

▸ **create**(`matcherType`: any): *[Ptr](../modules/_types_opencv__hacks_.md#ptr)*

**Parameters:**

Name | Type |
------ | ------ |
`matcherType` | any |

**Returns:** *[Ptr](../modules/_types_opencv__hacks_.md#ptr)*