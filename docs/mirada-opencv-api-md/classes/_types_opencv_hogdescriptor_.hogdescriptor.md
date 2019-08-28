**[mirada](../README.md)**

[Globals](../README.md) › ["types/opencv/HOGDescriptor"](../modules/_types_opencv_hogdescriptor_.md) › [HOGDescriptor](_types_opencv_hogdescriptor_.hogdescriptor.md)

# Class: HOGDescriptor

the HOG descriptor algorithm introduced by Navneet Dalal and Bill Triggs Dalal2005 .

useful links:

Source:
[opencv2/objdetect.hpp](https://github.com/opencv/opencv/tree/master/modules/core/include/opencv2/objdetect.hpp#L377).

## Hierarchy

* **HOGDescriptor**

## Index

### Constructors

* [constructor](_types_opencv_hogdescriptor_.hogdescriptor.md#constructor)

### Properties

* [L2HysThreshold](_types_opencv_hogdescriptor_.hogdescriptor.md#l2hysthreshold)
* [blockSize](_types_opencv_hogdescriptor_.hogdescriptor.md#blocksize)
* [blockStride](_types_opencv_hogdescriptor_.hogdescriptor.md#blockstride)
* [cellSize](_types_opencv_hogdescriptor_.hogdescriptor.md#cellsize)
* [derivAperture](_types_opencv_hogdescriptor_.hogdescriptor.md#derivaperture)
* [free_coef](_types_opencv_hogdescriptor_.hogdescriptor.md#free_coef)
* [gammaCorrection](_types_opencv_hogdescriptor_.hogdescriptor.md#gammacorrection)
* [histogramNormType](_types_opencv_hogdescriptor_.hogdescriptor.md#histogramnormtype)
* [nbins](_types_opencv_hogdescriptor_.hogdescriptor.md#nbins)
* [nlevels](_types_opencv_hogdescriptor_.hogdescriptor.md#nlevels)
* [oclSvmDetector](_types_opencv_hogdescriptor_.hogdescriptor.md#oclsvmdetector)
* [signedGradient](_types_opencv_hogdescriptor_.hogdescriptor.md#signedgradient)
* [svmDetector](_types_opencv_hogdescriptor_.hogdescriptor.md#svmdetector)
* [winSigma](_types_opencv_hogdescriptor_.hogdescriptor.md#winsigma)
* [winSize](_types_opencv_hogdescriptor_.hogdescriptor.md#winsize)

### Methods

* [checkDetectorSize](_types_opencv_hogdescriptor_.hogdescriptor.md#checkdetectorsize)
* [compute](_types_opencv_hogdescriptor_.hogdescriptor.md#compute)
* [computeGradient](_types_opencv_hogdescriptor_.hogdescriptor.md#computegradient)
* [copyTo](_types_opencv_hogdescriptor_.hogdescriptor.md#copyto)
* [detect](_types_opencv_hogdescriptor_.hogdescriptor.md#detect)
* [detectMultiScale](_types_opencv_hogdescriptor_.hogdescriptor.md#detectmultiscale)
* [detectMultiScaleROI](_types_opencv_hogdescriptor_.hogdescriptor.md#detectmultiscaleroi)
* [detectROI](_types_opencv_hogdescriptor_.hogdescriptor.md#detectroi)
* [getDescriptorSize](_types_opencv_hogdescriptor_.hogdescriptor.md#getdescriptorsize)
* [getWinSigma](_types_opencv_hogdescriptor_.hogdescriptor.md#getwinsigma)
* [groupRectangles](_types_opencv_hogdescriptor_.hogdescriptor.md#grouprectangles)
* [load](_types_opencv_hogdescriptor_.hogdescriptor.md#load)
* [read](_types_opencv_hogdescriptor_.hogdescriptor.md#read)
* [save](_types_opencv_hogdescriptor_.hogdescriptor.md#save)
* [setSVMDetector](_types_opencv_hogdescriptor_.hogdescriptor.md#setsvmdetector)
* [write](_types_opencv_hogdescriptor_.hogdescriptor.md#write)
* [getDaimlerPeopleDetector](_types_opencv_hogdescriptor_.hogdescriptor.md#static-getdaimlerpeopledetector)
* [getDefaultPeopleDetector](_types_opencv_hogdescriptor_.hogdescriptor.md#static-getdefaultpeopledetector)

## Constructors

###  constructor

\+ **new HOGDescriptor**(): *[HOGDescriptor](_types_opencv_hogdescriptor_.hogdescriptor.md)*

  aqual to [HOGDescriptor](Size(64,128), Size(16,16), Size(8,8), Size(8,8), 9 )

**Returns:** *[HOGDescriptor](_types_opencv_hogdescriptor_.hogdescriptor.md)*

\+ **new HOGDescriptor**(`_winSize`: [Size](_types_opencv__hacks_.size.md), `_blockSize`: [Size](_types_opencv__hacks_.size.md), `_blockStride`: [Size](_types_opencv__hacks_.size.md), `_cellSize`: [Size](_types_opencv__hacks_.size.md), `_nbins`: [int](../modules/_types_opencv__hacks_.md#int), `_derivAperture?`: [int](../modules/_types_opencv__hacks_.md#int), `_winSigma?`: [double](../modules/_types_opencv__hacks_.md#double), `_histogramNormType?`: any, `_L2HysThreshold?`: [double](../modules/_types_opencv__hacks_.md#double), `_gammaCorrection?`: [bool](../modules/_types_opencv__hacks_.md#bool), `_nlevels?`: [int](../modules/_types_opencv__hacks_.md#int), `_signedGradient?`: [bool](../modules/_types_opencv__hacks_.md#bool)): *[HOGDescriptor](_types_opencv_hogdescriptor_.hogdescriptor.md)*

  This is an overloaded member function, provided for convenience. It differs from the above
function only in what argument(s) it accepts.

**Parameters:**

Name | Type | Description |
------ | ------ | ------ |
`_winSize` | [Size](_types_opencv__hacks_.size.md) | sets winSize with given value.  |
`_blockSize` | [Size](_types_opencv__hacks_.size.md) | sets blockSize with given value.  |
`_blockStride` | [Size](_types_opencv__hacks_.size.md) | sets blockStride with given value.  |
`_cellSize` | [Size](_types_opencv__hacks_.size.md) | sets cellSize with given value.  |
`_nbins` | [int](../modules/_types_opencv__hacks_.md#int) | sets nbins with given value.  |
`_derivAperture?` | [int](../modules/_types_opencv__hacks_.md#int) | sets derivAperture with given value.  |
`_winSigma?` | [double](../modules/_types_opencv__hacks_.md#double) | sets winSigma with given value.  |
`_histogramNormType?` | any | sets histogramNormType with given value.  |
`_L2HysThreshold?` | [double](../modules/_types_opencv__hacks_.md#double) | sets L2HysThreshold with given value.  |
`_gammaCorrection?` | [bool](../modules/_types_opencv__hacks_.md#bool) | sets gammaCorrection with given value.  |
`_nlevels?` | [int](../modules/_types_opencv__hacks_.md#int) | sets nlevels with given value.  |
`_signedGradient?` | [bool](../modules/_types_opencv__hacks_.md#bool) | sets signedGradient with given value.  |

**Returns:** *[HOGDescriptor](_types_opencv_hogdescriptor_.hogdescriptor.md)*

\+ **new HOGDescriptor**(`filename`: String): *[HOGDescriptor](_types_opencv_hogdescriptor_.hogdescriptor.md)*

  This is an overloaded member function, provided for convenience. It differs from the above
function only in what argument(s) it accepts.

**Parameters:**

Name | Type | Description |
------ | ------ | ------ |
`filename` | String | The file name containing HOGDescriptor properties and coefficients for the linear SVM classifier.  |

**Returns:** *[HOGDescriptor](_types_opencv_hogdescriptor_.hogdescriptor.md)*

\+ **new HOGDescriptor**(`d`: [HOGDescriptor](_types_opencv_hogdescriptor_.hogdescriptor.md)): *[HOGDescriptor](_types_opencv_hogdescriptor_.hogdescriptor.md)*

  This is an overloaded member function, provided for convenience. It differs from the above
function only in what argument(s) it accepts.

**Parameters:**

Name | Type | Description |
------ | ------ | ------ |
`d` | [HOGDescriptor](_types_opencv_hogdescriptor_.hogdescriptor.md) | the HOGDescriptor which cloned to create a new one.  |

**Returns:** *[HOGDescriptor](_types_opencv_hogdescriptor_.hogdescriptor.md)*

## Properties

###  L2HysThreshold

• **L2HysThreshold**: *[double](../modules/_types_opencv__hacks_.md#double)*

___

###  blockSize

• **blockSize**: *[Size](_types_opencv__hacks_.size.md)*

___

###  blockStride

• **blockStride**: *[Size](_types_opencv__hacks_.size.md)*

___

###  cellSize

• **cellSize**: *[Size](_types_opencv__hacks_.size.md)*

___

###  derivAperture

• **derivAperture**: *[int](../modules/_types_opencv__hacks_.md#int)*

___

###  free_coef

• **free_coef**: *[float](../modules/_types_opencv__hacks_.md#float)*

___

###  gammaCorrection

• **gammaCorrection**: *[bool](../modules/_types_opencv__hacks_.md#bool)*

___

###  histogramNormType

• **histogramNormType**: *any*

___

###  nbins

• **nbins**: *[int](../modules/_types_opencv__hacks_.md#int)*

___

###  nlevels

• **nlevels**: *[int](../modules/_types_opencv__hacks_.md#int)*

___

###  oclSvmDetector

• **oclSvmDetector**: *[UMat](../modules/_types_opencv__hacks_.md#umat)*

___

###  signedGradient

• **signedGradient**: *[bool](../modules/_types_opencv__hacks_.md#bool)*

___

###  svmDetector

• **svmDetector**: *any*

___

###  winSigma

• **winSigma**: *[double](../modules/_types_opencv__hacks_.md#double)*

___

###  winSize

• **winSize**: *[Size](_types_opencv__hacks_.size.md)*

## Methods

###  checkDetectorSize

▸ **checkDetectorSize**(): *[bool](../modules/_types_opencv__hacks_.md#bool)*

**Returns:** *[bool](../modules/_types_opencv__hacks_.md#bool)*

___

###  compute

▸ **compute**(`img`: InputArray, `descriptors`: any, `winStride?`: [Size](_types_opencv__hacks_.size.md), `padding?`: [Size](_types_opencv__hacks_.size.md), `locations?`: [Point](_types_opencv__hacks_.point.md)): *InputArray*

**Parameters:**

Name | Type | Description |
------ | ------ | ------ |
`img` | InputArray | Matrix of the type CV_8U containing an image where HOG features will be calculated.  |
`descriptors` | any | Matrix of the type CV_32F  |
`winStride?` | [Size](_types_opencv__hacks_.size.md) | Window stride. It must be a multiple of block stride.  |
`padding?` | [Size](_types_opencv__hacks_.size.md) | Padding  |
`locations?` | [Point](_types_opencv__hacks_.point.md) | Vector of Point  |

**Returns:** *InputArray*

___

###  computeGradient

▸ **computeGradient**(`img`: InputArray, `grad`: InputOutputArray, `angleOfs`: InputOutputArray, `paddingTL?`: [Size](_types_opencv__hacks_.size.md), `paddingBR?`: [Size](_types_opencv__hacks_.size.md)): *InputArray*

**Parameters:**

Name | Type | Description |
------ | ------ | ------ |
`img` | InputArray | Matrix contains the image to be computed  |
`grad` | InputOutputArray | Matrix of type CV_32FC2 contains computed gradients  |
`angleOfs` | InputOutputArray | Matrix of type CV_8UC2 contains quantized gradient orientations  |
`paddingTL?` | [Size](_types_opencv__hacks_.size.md) | Padding from top-left  |
`paddingBR?` | [Size](_types_opencv__hacks_.size.md) | Padding from bottom-right  |

**Returns:** *InputArray*

___

###  copyTo

▸ **copyTo**(`c`: [HOGDescriptor](_types_opencv_hogdescriptor_.hogdescriptor.md)): *[HOGDescriptor](_types_opencv_hogdescriptor_.hogdescriptor.md)*

**Parameters:**

Name | Type | Description |
------ | ------ | ------ |
`c` | [HOGDescriptor](_types_opencv_hogdescriptor_.hogdescriptor.md) | cloned HOGDescriptor  |

**Returns:** *[HOGDescriptor](_types_opencv_hogdescriptor_.hogdescriptor.md)*

___

###  detect

▸ **detect**(`img`: InputArray, `foundLocations`: [Point](_types_opencv__hacks_.point.md), `weights`: any, `hitThreshold?`: [double](../modules/_types_opencv__hacks_.md#double), `winStride?`: [Size](_types_opencv__hacks_.size.md), `padding?`: [Size](_types_opencv__hacks_.size.md), `searchLocations?`: [Point](_types_opencv__hacks_.point.md)): *InputArray*

**Parameters:**

Name | Type | Description |
------ | ------ | ------ |
`img` | InputArray | Matrix of the type CV_8U or CV_8UC3 containing an image where objects are detected.  |
`foundLocations` | [Point](_types_opencv__hacks_.point.md) | Vector of point where each point contains left-top corner point of detected object boundaries.  |
`weights` | any | Vector that will contain confidence values for each detected object.  |
`hitThreshold?` | [double](../modules/_types_opencv__hacks_.md#double) | Threshold for the distance between features and SVM classifying plane. Usually it is 0 and should be specified in the detector coefficients (as the last free coefficient). But if the free coefficient is omitted (which is allowed), you can specify it manually here.  |
`winStride?` | [Size](_types_opencv__hacks_.size.md) | Window stride. It must be a multiple of block stride.  |
`padding?` | [Size](_types_opencv__hacks_.size.md) | Padding  |
`searchLocations?` | [Point](_types_opencv__hacks_.point.md) | Vector of Point includes set of requested locations to be evaluated.  |

**Returns:** *InputArray*

▸ **detect**(`img`: InputArray, `foundLocations`: [Point](_types_opencv__hacks_.point.md), `hitThreshold?`: [double](../modules/_types_opencv__hacks_.md#double), `winStride?`: [Size](_types_opencv__hacks_.size.md), `padding?`: [Size](_types_opencv__hacks_.size.md), `searchLocations?`: [Point](_types_opencv__hacks_.point.md)): *InputArray*

**Parameters:**

Name | Type | Description |
------ | ------ | ------ |
`img` | InputArray | Matrix of the type CV_8U or CV_8UC3 containing an image where objects are detected.  |
`foundLocations` | [Point](_types_opencv__hacks_.point.md) | Vector of point where each point contains left-top corner point of detected object boundaries.  |
`hitThreshold?` | [double](../modules/_types_opencv__hacks_.md#double) | Threshold for the distance between features and SVM classifying plane. Usually it is 0 and should be specified in the detector coefficients (as the last free coefficient). But if the free coefficient is omitted (which is allowed), you can specify it manually here.  |
`winStride?` | [Size](_types_opencv__hacks_.size.md) | Window stride. It must be a multiple of block stride.  |
`padding?` | [Size](_types_opencv__hacks_.size.md) | Padding  |
`searchLocations?` | [Point](_types_opencv__hacks_.point.md) | Vector of Point includes locations to search.  |

**Returns:** *InputArray*

___

###  detectMultiScale

▸ **detectMultiScale**(`img`: InputArray, `foundLocations`: [Rect](_types_opencv__hacks_.rect.md), `foundWeights`: any, `hitThreshold?`: [double](../modules/_types_opencv__hacks_.md#double), `winStride?`: [Size](_types_opencv__hacks_.size.md), `padding?`: [Size](_types_opencv__hacks_.size.md), `scale?`: [double](../modules/_types_opencv__hacks_.md#double), `finalThreshold?`: [double](../modules/_types_opencv__hacks_.md#double), `useMeanshiftGrouping?`: [bool](../modules/_types_opencv__hacks_.md#bool)): *InputArray*

**Parameters:**

Name | Type | Description |
------ | ------ | ------ |
`img` | InputArray | Matrix of the type CV_8U or CV_8UC3 containing an image where objects are detected.  |
`foundLocations` | [Rect](_types_opencv__hacks_.rect.md) | Vector of rectangles where each rectangle contains the detected object.  |
`foundWeights` | any | Vector that will contain confidence values for each detected object.  |
`hitThreshold?` | [double](../modules/_types_opencv__hacks_.md#double) | Threshold for the distance between features and SVM classifying plane. Usually it is 0 and should be specified in the detector coefficients (as the last free coefficient). But if the free coefficient is omitted (which is allowed), you can specify it manually here.  |
`winStride?` | [Size](_types_opencv__hacks_.size.md) | Window stride. It must be a multiple of block stride.  |
`padding?` | [Size](_types_opencv__hacks_.size.md) | Padding  |
`scale?` | [double](../modules/_types_opencv__hacks_.md#double) | Coefficient of the detection window increase.  |
`finalThreshold?` | [double](../modules/_types_opencv__hacks_.md#double) | Final threshold  |
`useMeanshiftGrouping?` | [bool](../modules/_types_opencv__hacks_.md#bool) | indicates grouping algorithm  |

**Returns:** *InputArray*

▸ **detectMultiScale**(`img`: InputArray, `foundLocations`: [Rect](_types_opencv__hacks_.rect.md), `hitThreshold?`: [double](../modules/_types_opencv__hacks_.md#double), `winStride?`: [Size](_types_opencv__hacks_.size.md), `padding?`: [Size](_types_opencv__hacks_.size.md), `scale?`: [double](../modules/_types_opencv__hacks_.md#double), `finalThreshold?`: [double](../modules/_types_opencv__hacks_.md#double), `useMeanshiftGrouping?`: [bool](../modules/_types_opencv__hacks_.md#bool)): *InputArray*

**Parameters:**

Name | Type | Description |
------ | ------ | ------ |
`img` | InputArray | Matrix of the type CV_8U or CV_8UC3 containing an image where objects are detected.  |
`foundLocations` | [Rect](_types_opencv__hacks_.rect.md) | Vector of rectangles where each rectangle contains the detected object.  |
`hitThreshold?` | [double](../modules/_types_opencv__hacks_.md#double) | Threshold for the distance between features and SVM classifying plane. Usually it is 0 and should be specified in the detector coefficients (as the last free coefficient). But if the free coefficient is omitted (which is allowed), you can specify it manually here.  |
`winStride?` | [Size](_types_opencv__hacks_.size.md) | Window stride. It must be a multiple of block stride.  |
`padding?` | [Size](_types_opencv__hacks_.size.md) | Padding  |
`scale?` | [double](../modules/_types_opencv__hacks_.md#double) | Coefficient of the detection window increase.  |
`finalThreshold?` | [double](../modules/_types_opencv__hacks_.md#double) | Final threshold  |
`useMeanshiftGrouping?` | [bool](../modules/_types_opencv__hacks_.md#bool) | indicates grouping algorithm  |

**Returns:** *InputArray*

___

###  detectMultiScaleROI

▸ **detectMultiScaleROI**(`img`: InputArray, `foundLocations`: any, `locations`: [DetectionROI](../modules/_types_opencv__hacks_.md#detectionroi), `hitThreshold?`: [double](../modules/_types_opencv__hacks_.md#double), `groupThreshold?`: [int](../modules/_types_opencv__hacks_.md#int)): *InputArray*

**Parameters:**

Name | Type | Description |
------ | ------ | ------ |
`img` | InputArray | Matrix of the type CV_8U or CV_8UC3 containing an image where objects are detected.  |
`foundLocations` | any | Vector of rectangles where each rectangle contains the detected object.  |
`locations` | [DetectionROI](../modules/_types_opencv__hacks_.md#detectionroi) | Vector of DetectionROI  |
`hitThreshold?` | [double](../modules/_types_opencv__hacks_.md#double) | Threshold for the distance between features and SVM classifying plane. Usually it is 0 and should be specified in the detector coefficients (as the last free coefficient). But if the free coefficient is omitted (which is allowed), you can specify it manually here.  |
`groupThreshold?` | [int](../modules/_types_opencv__hacks_.md#int) | Minimum possible number of rectangles minus 1. The threshold is used in a group of rectangles to retain it.  |

**Returns:** *InputArray*

___

###  detectROI

▸ **detectROI**(`img`: InputArray, `locations`: any, `foundLocations`: any, `confidences`: any, `hitThreshold?`: [double](../modules/_types_opencv__hacks_.md#double), `winStride?`: any, `padding?`: any): *InputArray*

**Parameters:**

Name | Type | Description |
------ | ------ | ------ |
`img` | InputArray | Matrix of the type CV_8U or CV_8UC3 containing an image where objects are detected.  |
`locations` | any | Vector of Point  |
`foundLocations` | any | Vector of Point where each Point is detected object's top-left point.  |
`confidences` | any | confidences  |
`hitThreshold?` | [double](../modules/_types_opencv__hacks_.md#double) | Threshold for the distance between features and SVM classifying plane. Usually it is 0 and should be specified in the detector coefficients (as the last free coefficient). But if the free coefficient is omitted (which is allowed), you can specify it manually here  |
`winStride?` | any | winStride  |
`padding?` | any | padding  |

**Returns:** *InputArray*

___

###  getDescriptorSize

▸ **getDescriptorSize**(): *[size_t](../modules/_types_opencv__hacks_.md#size_t)*

**Returns:** *[size_t](../modules/_types_opencv__hacks_.md#size_t)*

___

###  getWinSigma

▸ **getWinSigma**(): *[double](../modules/_types_opencv__hacks_.md#double)*

**Returns:** *[double](../modules/_types_opencv__hacks_.md#double)*

___

###  groupRectangles

▸ **groupRectangles**(`rectList`: any, `weights`: any, `groupThreshold`: [int](../modules/_types_opencv__hacks_.md#int), `eps`: [double](../modules/_types_opencv__hacks_.md#double)): *any*

**Parameters:**

Name | Type | Description |
------ | ------ | ------ |
`rectList` | any | Input/output vector of rectangles. Output vector includes retained and grouped rectangles. (The Python list is not modified in place.)  |
`weights` | any | Input/output vector of weights of rectangles. Output vector includes weights of retained and grouped rectangles. (The Python list is not modified in place.)  |
`groupThreshold` | [int](../modules/_types_opencv__hacks_.md#int) | Minimum possible number of rectangles minus 1. The threshold is used in a group of rectangles to retain it.  |
`eps` | [double](../modules/_types_opencv__hacks_.md#double) | Relative difference between sides of the rectangles to merge them into a group.  |

**Returns:** *any*

___

###  load

▸ **load**(`filename`: String, `objname?`: String): *String*

**Parameters:**

Name | Type | Description |
------ | ------ | ------ |
`filename` | String | Path of the file to read.  |
`objname?` | String | The optional name of the node to read (if empty, the first top-level node will be used).  |

**Returns:** *String*

___

###  read

▸ **read**(`fn`: [FileNode](../modules/_types_opencv__hacks_.md#filenode)): *[FileNode](../modules/_types_opencv__hacks_.md#filenode)*

**Parameters:**

Name | Type | Description |
------ | ------ | ------ |
`fn` | [FileNode](../modules/_types_opencv__hacks_.md#filenode) | File node  |

**Returns:** *[FileNode](../modules/_types_opencv__hacks_.md#filenode)*

___

###  save

▸ **save**(`filename`: String, `objname?`: String): *String*

**Parameters:**

Name | Type | Description |
------ | ------ | ------ |
`filename` | String | File name  |
`objname?` | String | Object name  |

**Returns:** *String*

___

###  setSVMDetector

▸ **setSVMDetector**(`svmdetector`: InputArray): *InputArray*

**Parameters:**

Name | Type | Description |
------ | ------ | ------ |
`svmdetector` | InputArray | coefficients for the linear SVM classifier.  |

**Returns:** *InputArray*

___

###  write

▸ **write**(`fs`: [FileStorage](../modules/_types_opencv__hacks_.md#filestorage), `objname`: String): *[FileStorage](../modules/_types_opencv__hacks_.md#filestorage)*

**Parameters:**

Name | Type | Description |
------ | ------ | ------ |
`fs` | [FileStorage](../modules/_types_opencv__hacks_.md#filestorage) | File storage  |
`objname` | String | Object name  |

**Returns:** *[FileStorage](../modules/_types_opencv__hacks_.md#filestorage)*

___

### `Static` getDaimlerPeopleDetector

▸ **getDaimlerPeopleDetector**(): *any*

**Returns:** *any*

___

### `Static` getDefaultPeopleDetector

▸ **getDefaultPeopleDetector**(): *any*

**Returns:** *any*