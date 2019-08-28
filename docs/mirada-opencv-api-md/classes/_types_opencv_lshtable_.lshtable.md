**[mirada](../README.md)**

[Globals](../README.md) › ["types/opencv/LshTable"](../modules/_types_opencv_lshtable_.md) › [LshTable](_types_opencv_lshtable_.lshtable.md)

# Class: LshTable

Lsh hash table. As its key is a sub-feature, and as usually the size of it is pretty small, we keep
it as a continuous memory array. The value is an index in the corpus of features (we keep it as an
unsigned int for pure memory reasons, it could be a size_t)

Source:
[opencv2/flann/lsh_table.h](https://github.com/opencv/opencv/tree/master/modules/core/include/opencv2/flann/lsh_table.h#L261).

## Hierarchy

* **LshTable**

## Index

### Constructors

* [constructor](_types_opencv_lshtable_.lshtable.md#constructor)

### Methods

* [add](_types_opencv_lshtable_.lshtable.md#add)
* [getBucketFromKey](_types_opencv_lshtable_.lshtable.md#getbucketfromkey)
* [getKey](_types_opencv_lshtable_.lshtable.md#getkey)
* [getStats](_types_opencv_lshtable_.lshtable.md#getstats)

## Constructors

###  constructor

\+ **new LshTable**(): *[LshTable](_types_opencv_lshtable_.lshtable.md)*

  Default constructor

**Returns:** *[LshTable](_types_opencv_lshtable_.lshtable.md)*

\+ **new LshTable**(`feature_size`: any, `key_size`: any): *[LshTable](_types_opencv_lshtable_.lshtable.md)*

  Default constructor Create the mask and allocate the memory

**Parameters:**

Name | Type | Description |
------ | ------ | ------ |
`feature_size` | any | is the size of the feature (considered as a ElementType[])  |
`key_size` | any | is the number of bits that are turned on in the feature  |

**Returns:** *[LshTable](_types_opencv_lshtable_.lshtable.md)*

\+ **new LshTable**(`feature_size`: any, `subsignature_size`: any): *[LshTable](_types_opencv_lshtable_.lshtable.md)*

  Default constructor
  Default constructor Create the mask and allocate the memory

**Parameters:**

Name | Type | Description |
------ | ------ | ------ |
`feature_size` | any | is the size of the feature (considered as a ElementType[])  |
`subsignature_size` | any | - |

**Returns:** *[LshTable](_types_opencv_lshtable_.lshtable.md)*

## Methods

###  add

▸ **add**(`value`: any, `feature`: any): *void*

  Add a feature to the table

**Parameters:**

Name | Type | Description |
------ | ------ | ------ |
`value` | any | the value to store for that feature  |
`feature` | any | the feature itself  |

**Returns:** *void*

▸ **add**(`dataset`: [Matrix](../modules/_types_opencv__hacks_.md#matrix)): *[Matrix](../modules/_types_opencv__hacks_.md#matrix)*

  Add a set of features to the table

**Parameters:**

Name | Type | Description |
------ | ------ | ------ |
`dataset` | [Matrix](../modules/_types_opencv__hacks_.md#matrix) | the values to store  |

**Returns:** *[Matrix](../modules/_types_opencv__hacks_.md#matrix)*

___

###  getBucketFromKey

▸ **getBucketFromKey**(`key`: [BucketKey](../modules/_types_opencv__hacks_.md#bucketkey)): *[Bucket](../modules/_types_opencv__hacks_.md#bucket)*

  Get a bucket given the key

**Parameters:**

Name | Type |
------ | ------ |
`key` | [BucketKey](../modules/_types_opencv__hacks_.md#bucketkey) |

**Returns:** *[Bucket](../modules/_types_opencv__hacks_.md#bucket)*

___

###  getKey

▸ **getKey**(`arg50`: any): *[size_t](../modules/_types_opencv__hacks_.md#size_t)*

  Compute the sub-signature of a feature

**Parameters:**

Name | Type |
------ | ------ |
`arg50` | any |

**Returns:** *[size_t](../modules/_types_opencv__hacks_.md#size_t)*

▸ **getKey**(`feature`: any): *[size_t](../modules/_types_opencv__hacks_.md#size_t)*

  Return the Subsignature of a feature

**Parameters:**

Name | Type | Description |
------ | ------ | ------ |
`feature` | any | the feature to analyze  |

**Returns:** *[size_t](../modules/_types_opencv__hacks_.md#size_t)*

___

###  getStats

▸ **getStats**(): *[LshStats](../modules/_types_opencv__hacks_.md#lshstats)*

  Get statistics about the table

**Returns:** *[LshStats](../modules/_types_opencv__hacks_.md#lshstats)*

▸ **getStats**(): *[LshStats](../modules/_types_opencv__hacks_.md#lshstats)*

**Returns:** *[LshStats](../modules/_types_opencv__hacks_.md#lshstats)*