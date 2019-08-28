**[mirada](../README.md)**

[Globals](../README.md) › ["types/opencv/objdetect"](_types_opencv_objdetect_.md)

# External module: "types/opencv/objdetect"

## Index

### Variables

* [CASCADE_DO_CANNY_PRUNING](_types_opencv_objdetect_.md#const-cascade_do_canny_pruning)
* [CASCADE_DO_ROUGH_SEARCH](_types_opencv_objdetect_.md#const-cascade_do_rough_search)
* [CASCADE_FIND_BIGGEST_OBJECT](_types_opencv_objdetect_.md#const-cascade_find_biggest_object)
* [CASCADE_SCALE_IMAGE](_types_opencv_objdetect_.md#const-cascade_scale_image)

### Functions

* [createFaceDetectionMaskGenerator](_types_opencv_objdetect_.md#createfacedetectionmaskgenerator)
* [groupRectangles](_types_opencv_objdetect_.md#grouprectangles)
* [groupRectangles_meanshift](_types_opencv_objdetect_.md#grouprectangles_meanshift)

## Variables

### `Const` CASCADE_DO_CANNY_PRUNING

• **CASCADE_DO_CANNY_PRUNING**: *any*

___

### `Const` CASCADE_DO_ROUGH_SEARCH

• **CASCADE_DO_ROUGH_SEARCH**: *any*

___

### `Const` CASCADE_FIND_BIGGEST_OBJECT

• **CASCADE_FIND_BIGGEST_OBJECT**: *any*

___

### `Const` CASCADE_SCALE_IMAGE

• **CASCADE_SCALE_IMAGE**: *any*

## Functions

###  createFaceDetectionMaskGenerator

▸ **createFaceDetectionMaskGenerator**(): *any*

**Returns:** *any*

___

###  groupRectangles

▸ **groupRectangles**(`rectList`: any, `groupThreshold`: [int](_types_opencv__hacks_.md#int), `eps?`: [double](_types_opencv__hacks_.md#double)): *void*

The function is a wrapper for the generic function partition . It clusters all the input rectangles
using the rectangle equivalence criteria that combines rectangles with similar sizes and similar
locations. The similarity is defined by eps. When eps=0 , no clustering is done at all. If
`$\\texttt{eps}\\rightarrow +\\inf$` , all the rectangles are put in one cluster. Then, the small
clusters containing less than or equal to groupThreshold rectangles are rejected. In each other
cluster, the average rectangle is computed and put into the output rectangle list.

**Parameters:**

Name | Type | Description |
------ | ------ | ------ |
`rectList` | any | Input/output vector of rectangles. Output vector includes retained and grouped rectangles. (The Python list is not modified in place.)  |
`groupThreshold` | [int](_types_opencv__hacks_.md#int) | Minimum possible number of rectangles minus 1. The threshold is used in a group of rectangles to retain it.  |
`eps?` | [double](_types_opencv__hacks_.md#double) | Relative difference between sides of the rectangles to merge them into a group.  |

**Returns:** *void*

▸ **groupRectangles**(`rectList`: any, `weights`: any, `groupThreshold`: [int](_types_opencv__hacks_.md#int), `eps?`: [double](_types_opencv__hacks_.md#double)): *void*

This is an overloaded member function, provided for convenience. It differs from the above function
only in what argument(s) it accepts.

**Parameters:**

Name | Type |
------ | ------ |
`rectList` | any |
`weights` | any |
`groupThreshold` | [int](_types_opencv__hacks_.md#int) |
`eps?` | [double](_types_opencv__hacks_.md#double) |

**Returns:** *void*

▸ **groupRectangles**(`rectList`: any, `groupThreshold`: [int](_types_opencv__hacks_.md#int), `eps`: [double](_types_opencv__hacks_.md#double), `weights`: any, `levelWeights`: any): *void*

This is an overloaded member function, provided for convenience. It differs from the above function
only in what argument(s) it accepts.

**Parameters:**

Name | Type |
------ | ------ |
`rectList` | any |
`groupThreshold` | [int](_types_opencv__hacks_.md#int) |
`eps` | [double](_types_opencv__hacks_.md#double) |
`weights` | any |
`levelWeights` | any |

**Returns:** *void*

▸ **groupRectangles**(`rectList`: any, `rejectLevels`: any, `levelWeights`: any, `groupThreshold`: [int](_types_opencv__hacks_.md#int), `eps?`: [double](_types_opencv__hacks_.md#double)): *void*

This is an overloaded member function, provided for convenience. It differs from the above function
only in what argument(s) it accepts.

**Parameters:**

Name | Type |
------ | ------ |
`rectList` | any |
`rejectLevels` | any |
`levelWeights` | any |
`groupThreshold` | [int](_types_opencv__hacks_.md#int) |
`eps?` | [double](_types_opencv__hacks_.md#double) |

**Returns:** *void*

___

###  groupRectangles_meanshift

▸ **groupRectangles_meanshift**(`rectList`: any, `foundWeights`: any, `foundScales`: any, `detectThreshold?`: [double](_types_opencv__hacks_.md#double), `winDetSize?`: [Size](../classes/_types_opencv__hacks_.size.md)): *void*

This is an overloaded member function, provided for convenience. It differs from the above function
only in what argument(s) it accepts.

**Parameters:**

Name | Type |
------ | ------ |
`rectList` | any |
`foundWeights` | any |
`foundScales` | any |
`detectThreshold?` | [double](_types_opencv__hacks_.md#double) |
`winDetSize?` | [Size](../classes/_types_opencv__hacks_.size.md) |

**Returns:** *void*