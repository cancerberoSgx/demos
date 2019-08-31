**[mirada](../README.md)**

[Globals](../README.md) › ["types/opencv/video_track"](_types_opencv_video_track_.md)

# External module: "types/opencv/video_track"

## Index

### Variables

* [MOTION_AFFINE](_types_opencv_video_track_.md#const-motion_affine)
* [MOTION_EUCLIDEAN](_types_opencv_video_track_.md#const-motion_euclidean)
* [MOTION_HOMOGRAPHY](_types_opencv_video_track_.md#const-motion_homography)
* [MOTION_TRANSLATION](_types_opencv_video_track_.md#const-motion_translation)
* [OPTFLOW_FARNEBACK_GAUSSIAN](_types_opencv_video_track_.md#const-optflow_farneback_gaussian)
* [OPTFLOW_LK_GET_MIN_EIGENVALS](_types_opencv_video_track_.md#const-optflow_lk_get_min_eigenvals)
* [OPTFLOW_USE_INITIAL_FLOW](_types_opencv_video_track_.md#const-optflow_use_initial_flow)

### Functions

* [CamShift](_types_opencv_video_track_.md#camshift)
* [buildOpticalFlowPyramid](_types_opencv_video_track_.md#buildopticalflowpyramid)
* [calcOpticalFlowFarneback](_types_opencv_video_track_.md#calcopticalflowfarneback)
* [calcOpticalFlowPyrLK](_types_opencv_video_track_.md#calcopticalflowpyrlk)
* [computeECC](_types_opencv_video_track_.md#computeecc)
* [estimateRigidTransform](_types_opencv_video_track_.md#estimaterigidtransform)
* [findTransformECC](_types_opencv_video_track_.md#findtransformecc)
* [meanShift](_types_opencv_video_track_.md#meanshift)
* [readOpticalFlow](_types_opencv_video_track_.md#readopticalflow)
* [writeOpticalFlow](_types_opencv_video_track_.md#writeopticalflow)

## Variables

### `Const` MOTION_AFFINE

• **MOTION_AFFINE**: *any*

*Defined in [types/opencv/video_track.ts:296](https://github.com/cancerberoSgx/mirada/blob/1c5d3d0/mirada/src/types/opencv/video_track.ts#L296)*

___

### `Const` MOTION_EUCLIDEAN

• **MOTION_EUCLIDEAN**: *any*

*Defined in [types/opencv/video_track.ts:294](https://github.com/cancerberoSgx/mirada/blob/1c5d3d0/mirada/src/types/opencv/video_track.ts#L294)*

___

### `Const` MOTION_HOMOGRAPHY

• **MOTION_HOMOGRAPHY**: *any*

*Defined in [types/opencv/video_track.ts:298](https://github.com/cancerberoSgx/mirada/blob/1c5d3d0/mirada/src/types/opencv/video_track.ts#L298)*

___

### `Const` MOTION_TRANSLATION

• **MOTION_TRANSLATION**: *any*

*Defined in [types/opencv/video_track.ts:292](https://github.com/cancerberoSgx/mirada/blob/1c5d3d0/mirada/src/types/opencv/video_track.ts#L292)*

___

### `Const` OPTFLOW_FARNEBACK_GAUSSIAN

• **OPTFLOW_FARNEBACK_GAUSSIAN**: *any*

*Defined in [types/opencv/video_track.ts:290](https://github.com/cancerberoSgx/mirada/blob/1c5d3d0/mirada/src/types/opencv/video_track.ts#L290)*

___

### `Const` OPTFLOW_LK_GET_MIN_EIGENVALS

• **OPTFLOW_LK_GET_MIN_EIGENVALS**: *any*

*Defined in [types/opencv/video_track.ts:288](https://github.com/cancerberoSgx/mirada/blob/1c5d3d0/mirada/src/types/opencv/video_track.ts#L288)*

___

### `Const` OPTFLOW_USE_INITIAL_FLOW

• **OPTFLOW_USE_INITIAL_FLOW**: *any*

*Defined in [types/opencv/video_track.ts:286](https://github.com/cancerberoSgx/mirada/blob/1c5d3d0/mirada/src/types/opencv/video_track.ts#L286)*

## Functions

###  CamShift

▸ **CamShift**(`probImage`: InputArray, `window`: any, `criteria`: [TermCriteria](../classes/_types_opencv__hacks_.termcriteria.md)): *[RotatedRect](../classes/_types_opencv_rotatedrect_.rotatedrect.md)*

*Defined in [types/opencv/video_track.ts:148](https://github.com/cancerberoSgx/mirada/blob/1c5d3d0/mirada/src/types/opencv/video_track.ts#L148)*

See the OpenCV sample camshiftdemo.c that tracks colored objects.

(Python) A sample explaining the camshift tracking algorithm can be found at
opencv_source_code/samples/python/camshift.py

**Parameters:**

Name | Type | Description |
------ | ------ | ------ |
`probImage` | InputArray | Back projection of the object histogram. See calcBackProject.  |
`window` | any | Initial search window.  |
`criteria` | [TermCriteria](../classes/_types_opencv__hacks_.termcriteria.md) | Stop criteria for the underlying meanShift. returns (in old interfaces) Number of iterations CAMSHIFT took to converge The function implements the CAMSHIFT object tracking algorithm Bradski98 . First, it finds an object center using meanShift and then adjusts the window size and finds the optimal rotation. The function returns the rotated rectangle structure that includes the object position, size, and orientation. The next position of the search window can be obtained with RotatedRect::boundingRect()  |

**Returns:** *[RotatedRect](../classes/_types_opencv_rotatedrect_.rotatedrect.md)*

___

###  buildOpticalFlowPyramid

▸ **buildOpticalFlowPyramid**(`img`: InputArray, `pyramid`: OutputArrayOfArrays, `winSize`: [Size](../classes/_types_opencv__hacks_.size.md), `maxLevel`: [int](_types_opencv__hacks_.md#int), `withDerivatives?`: [bool](_types_opencv__hacks_.md#bool), `pyrBorder?`: [int](_types_opencv__hacks_.md#int), `derivBorder?`: [int](_types_opencv__hacks_.md#int), `tryReuseInputImage?`: [bool](_types_opencv__hacks_.md#bool)): *[int](_types_opencv__hacks_.md#int)*

*Defined in [types/opencv/video_track.ts:29](https://github.com/cancerberoSgx/mirada/blob/1c5d3d0/mirada/src/types/opencv/video_track.ts#L29)*

number of levels in constructed pyramid. Can be less than maxLevel.

**Parameters:**

Name | Type | Description |
------ | ------ | ------ |
`img` | InputArray | 8-bit input image.  |
`pyramid` | OutputArrayOfArrays | output pyramid.  |
`winSize` | [Size](../classes/_types_opencv__hacks_.size.md) | window size of optical flow algorithm. Must be not less than winSize argument of calcOpticalFlowPyrLK. It is needed to calculate required padding for pyramid levels.  |
`maxLevel` | [int](_types_opencv__hacks_.md#int) | 0-based maximal pyramid level number.  |
`withDerivatives?` | [bool](_types_opencv__hacks_.md#bool) | set to precompute gradients for the every pyramid level. If pyramid is constructed without the gradients then calcOpticalFlowPyrLK will calculate them internally.  |
`pyrBorder?` | [int](_types_opencv__hacks_.md#int) | the border mode for pyramid layers.  |
`derivBorder?` | [int](_types_opencv__hacks_.md#int) | the border mode for gradients.  |
`tryReuseInputImage?` | [bool](_types_opencv__hacks_.md#bool) | put ROI of input image into the pyramid if possible. You can pass false to force data copying.  |

**Returns:** *[int](_types_opencv__hacks_.md#int)*

___

###  calcOpticalFlowFarneback

▸ **calcOpticalFlowFarneback**(`prev`: InputArray, `next`: InputArray, `flow`: InputOutputArray, `pyr_scale`: [double](_types_opencv__hacks_.md#double), `levels`: [int](_types_opencv__hacks_.md#int), `winsize`: [int](_types_opencv__hacks_.md#int), `iterations`: [int](_types_opencv__hacks_.md#int), `poly_n`: [int](_types_opencv__hacks_.md#int), `poly_sigma`: [double](_types_opencv__hacks_.md#double), `flags`: [int](_types_opencv__hacks_.md#int)): *void*

*Defined in [types/opencv/video_track.ts:75](https://github.com/cancerberoSgx/mirada/blob/1c5d3d0/mirada/src/types/opencv/video_track.ts#L75)*

The function finds an optical flow for each prev pixel using the Farneback2003 algorithm so that

`\\[\\texttt{prev} (y,x) \\sim \\texttt{next} ( y + \\texttt{flow} (y,x)[1], x + \\texttt{flow}
(y,x)[0])\\]`

An example using the optical flow algorithm described by Gunnar Farneback can be found at
opencv_source_code/samples/cpp/fback.cpp
(Python) An example using the optical flow algorithm described by Gunnar Farneback can be found at
opencv_source_code/samples/python/opt_flow.py

**Parameters:**

Name | Type | Description |
------ | ------ | ------ |
`prev` | InputArray | first 8-bit single-channel input image.  |
`next` | InputArray | second input image of the same size and the same type as prev.  |
`flow` | InputOutputArray | computed flow image that has the same size as prev and type CV_32FC2.  |
`pyr_scale` | [double](_types_opencv__hacks_.md#double) | parameter, specifying the image scale (<1) to build pyramids for each image; pyr_scale=0.5 means a classical pyramid, where each next layer is twice smaller than the previous one.  |
`levels` | [int](_types_opencv__hacks_.md#int) | number of pyramid layers including the initial image; levels=1 means that no extra layers are created and only the original images are used.  |
`winsize` | [int](_types_opencv__hacks_.md#int) | averaging window size; larger values increase the algorithm robustness to image noise and give more chances for fast motion detection, but yield more blurred motion field.  |
`iterations` | [int](_types_opencv__hacks_.md#int) | number of iterations the algorithm does at each pyramid level.  |
`poly_n` | [int](_types_opencv__hacks_.md#int) | size of the pixel neighborhood used to find polynomial expansion in each pixel; larger values mean that the image will be approximated with smoother surfaces, yielding more robust algorithm and more blurred motion field, typically poly_n =5 or 7.  |
`poly_sigma` | [double](_types_opencv__hacks_.md#double) | standard deviation of the Gaussian that is used to smooth derivatives used as a basis for the polynomial expansion; for poly_n=5, you can set poly_sigma=1.1, for poly_n=7, a good value would be poly_sigma=1.5.  |
`flags` | [int](_types_opencv__hacks_.md#int) | operation flags that can be a combination of the following: OPTFLOW_USE_INITIAL_FLOW uses the input flow as an initial flow approximation.OPTFLOW_FARNEBACK_GAUSSIAN uses the Gaussian $\texttt{winsize}\times\texttt{winsize}$ filter instead of a box filter of the same size for optical flow estimation; usually, this option gives z more accurate flow than with a box filter, at the cost of lower speed; normally, winsize for a Gaussian window should be set to a larger value to achieve the same level of robustness.  |

**Returns:** *void*

___

###  calcOpticalFlowPyrLK

▸ **calcOpticalFlowPyrLK**(`prevImg`: InputArray, `nextImg`: InputArray, `prevPts`: InputArray, `nextPts`: InputOutputArray, `status`: OutputArray, `err`: OutputArray, `winSize?`: [Size](../classes/_types_opencv__hacks_.size.md), `maxLevel?`: [int](_types_opencv__hacks_.md#int), `criteria?`: [TermCriteria](../classes/_types_opencv__hacks_.termcriteria.md), `flags?`: [int](_types_opencv__hacks_.md#int), `minEigThreshold?`: [double](_types_opencv__hacks_.md#double)): *void*

*Defined in [types/opencv/video_track.ts:129](https://github.com/cancerberoSgx/mirada/blob/1c5d3d0/mirada/src/types/opencv/video_track.ts#L129)*

The function implements a sparse iterative version of the Lucas-Kanade optical flow in pyramids. See
Bouguet00 . The function is parallelized with the TBB library.

An example using the Lucas-Kanade optical flow algorithm can be found at
opencv_source_code/samples/cpp/lkdemo.cpp
(Python) An example using the Lucas-Kanade optical flow algorithm can be found at
opencv_source_code/samples/python/lk_track.py
(Python) An example using the Lucas-Kanade tracker for homography matching can be found at
opencv_source_code/samples/python/lk_homography.py

**Parameters:**

Name | Type | Description |
------ | ------ | ------ |
`prevImg` | InputArray | first 8-bit input image or pyramid constructed by buildOpticalFlowPyramid.  |
`nextImg` | InputArray | second input image or pyramid of the same size and the same type as prevImg.  |
`prevPts` | InputArray | vector of 2D points for which the flow needs to be found; point coordinates must be single-precision floating-point numbers.  |
`nextPts` | InputOutputArray | output vector of 2D points (with single-precision floating-point coordinates) containing the calculated new positions of input features in the second image; when OPTFLOW_USE_INITIAL_FLOW flag is passed, the vector must have the same size as in the input.  |
`status` | OutputArray | output status vector (of unsigned chars); each element of the vector is set to 1 if the flow for the corresponding features has been found, otherwise, it is set to 0.  |
`err` | OutputArray | output vector of errors; each element of the vector is set to an error for the corresponding feature, type of the error measure can be set in flags parameter; if the flow wasn't found then the error is not defined (use the status parameter to find such cases).  |
`winSize?` | [Size](../classes/_types_opencv__hacks_.size.md) | size of the search window at each pyramid level.  |
`maxLevel?` | [int](_types_opencv__hacks_.md#int) | 0-based maximal pyramid level number; if set to 0, pyramids are not used (single level), if set to 1, two levels are used, and so on; if pyramids are passed to input then algorithm will use as many levels as pyramids have but no more than maxLevel.  |
`criteria?` | [TermCriteria](../classes/_types_opencv__hacks_.termcriteria.md) | parameter, specifying the termination criteria of the iterative search algorithm (after the specified maximum number of iterations criteria.maxCount or when the search window moves by less than criteria.epsilon.  |
`flags?` | [int](_types_opencv__hacks_.md#int) | operation flags: OPTFLOW_USE_INITIAL_FLOW uses initial estimations, stored in nextPts; if the flag is not set, then prevPts is copied to nextPts and is considered the initial estimate.OPTFLOW_LK_GET_MIN_EIGENVALS use minimum eigen values as an error measure (see minEigThreshold description); if the flag is not set, then L1 distance between patches around the original and a moved point, divided by number of pixels in a window, is used as a error measure.  |
`minEigThreshold?` | [double](_types_opencv__hacks_.md#double) | the algorithm calculates the minimum eigen value of a 2x2 normal matrix of optical flow equations (this matrix is called a spatial gradient matrix in Bouguet00), divided by number of pixels in a window; if this value is less than minEigThreshold, then a corresponding feature is filtered out and its flow is not processed, so it allows to remove bad points and get a performance boost.  |

**Returns:** *void*

___

###  computeECC

▸ **computeECC**(`templateImage`: InputArray, `inputImage`: InputArray, `inputMask?`: InputArray): *[double](_types_opencv__hacks_.md#double)*

*Defined in [types/opencv/video_track.ts:160](https://github.com/cancerberoSgx/mirada/blob/1c5d3d0/mirada/src/types/opencv/video_track.ts#L160)*

[findTransformECC]

**Parameters:**

Name | Type | Description |
------ | ------ | ------ |
`templateImage` | InputArray | single-channel template image; CV_8U or CV_32F array.  |
`inputImage` | InputArray | single-channel input image to be warped to provide an image similar to templateImage, same type as templateImage.  |
`inputMask?` | InputArray | An optional mask to indicate valid values of inputImage.  |

**Returns:** *[double](_types_opencv__hacks_.md#double)*

___

###  estimateRigidTransform

▸ **estimateRigidTransform**(`src`: InputArray, `dst`: InputArray, `fullAffine`: [bool](_types_opencv__hacks_.md#bool)): *[Mat](../classes/_types_opencv_mat_.mat.md)*

*Defined in [types/opencv/video_track.ts:183](https://github.com/cancerberoSgx/mirada/blob/1c5d3d0/mirada/src/types/opencv/video_track.ts#L183)*

The function finds an optimal affine transform *[A|b]* (a 2 x 3 floating-point matrix) that
approximates best the affine transformation between:  In case of point sets, the problem is
formulated as follows: you need to find a 2x2 matrix *A* and 2x1 vector *b* so that:

`\\[[A^*|b^*] = arg \\min _{[A|b]} \\sum _i \\| \\texttt{dst}[i] - A { \\texttt{src}[i]}^T - b \\|
^2\\]` where src[i] and dst[i] are the i-th points in src and dst, respectively `$[A|b]$` can be
either arbitrary (when fullAffine=true ) or have a form of `\\[\\begin{bmatrix} a_{11} & a_{12} &
b_1 \\\\ -a_{12} & a_{11} & b_2 \\end{bmatrix}\\]` when fullAffine=false.

[estimateAffine2D], [estimateAffinePartial2D], [getAffineTransform], [getPerspectiveTransform],
[findHomography]

**Parameters:**

Name | Type | Description |
------ | ------ | ------ |
`src` | InputArray | First input 2D point set stored in std::vector or Mat, or an image stored in Mat.  |
`dst` | InputArray | Second input 2D point set of the same size and the same type as A, or another image.  |
`fullAffine` | [bool](_types_opencv__hacks_.md#bool) | If true, the function finds an optimal affine transformation with no additional restrictions (6 degrees of freedom). Otherwise, the class of transformations to choose from is limited to combinations of translation, rotation, and uniform scaling (4 degrees of freedom).  |

**Returns:** *[Mat](../classes/_types_opencv_mat_.mat.md)*

___

###  findTransformECC

▸ **findTransformECC**(`templateImage`: InputArray, `inputImage`: InputArray, `warpMatrix`: InputOutputArray, `motionType`: [int](_types_opencv__hacks_.md#int), `criteria`: [TermCriteria](../classes/_types_opencv__hacks_.termcriteria.md), `inputMask`: InputArray, `gaussFiltSize`: [int](_types_opencv__hacks_.md#int)): *[double](_types_opencv__hacks_.md#double)*

*Defined in [types/opencv/video_track.ts:239](https://github.com/cancerberoSgx/mirada/blob/1c5d3d0/mirada/src/types/opencv/video_track.ts#L239)*

The function estimates the optimum transformation (warpMatrix) with respect to ECC criterion (EP08),
that is

`\\[\\texttt{warpMatrix} = \\texttt{warpMatrix} = \\arg\\max_{W}
\\texttt{ECC}(\\texttt{templateImage}(x,y),\\texttt{inputImage}(x',y'))\\]`

where

`\\[\\begin{bmatrix} x' \\\\ y' \\end{bmatrix} = W \\cdot \\begin{bmatrix} x \\\\ y \\\\ 1
\\end{bmatrix}\\]`

(the equation holds with homogeneous coordinates for homography). It returns the final enhanced
correlation coefficient, that is the correlation coefficient between the template image and the
final warped input image. When a `$3\\times 3$` matrix is given with motionType =0, 1 or 2, the
third row is ignored.

Unlike findHomography and estimateRigidTransform, the function findTransformECC implements an
area-based alignment that builds on intensity similarities. In essence, the function updates the
initial transformation that roughly aligns the images. If this information is missing, the identity
warp (unity matrix) is used as an initialization. Note that if images undergo strong
displacements/rotations, an initial transformation that roughly aligns the images is necessary
(e.g., a simple euclidean/similarity transform that allows for the images showing the same image
content approximately). Use inverse warping in the second image to take an image close to the first
one, i.e. use the flag WARP_INVERSE_MAP with warpAffine or warpPerspective. See also the OpenCV
sample image_alignment.cpp that demonstrates the use of the function. Note that the function throws
an exception if algorithm does not converges.

[computeECC], [estimateAffine2D], [estimateAffinePartial2D], [findHomography]

**Parameters:**

Name | Type | Description |
------ | ------ | ------ |
`templateImage` | InputArray | single-channel template image; CV_8U or CV_32F array.  |
`inputImage` | InputArray | single-channel input image which should be warped with the final warpMatrix in order to provide an image similar to templateImage, same type as templateImage.  |
`warpMatrix` | InputOutputArray | floating-point $2\times 3$ or $3\times 3$ mapping matrix (warp).  |
`motionType` | [int](_types_opencv__hacks_.md#int) | parameter, specifying the type of motion: MOTION_TRANSLATION sets a translational motion model; warpMatrix is $2\times 3$ with the first $2\times 2$ part being the unity matrix and the rest two parameters being estimated.MOTION_EUCLIDEAN sets a Euclidean (rigid) transformation as motion model; three parameters are estimated; warpMatrix is $2\times 3$.MOTION_AFFINE sets an affine motion model (DEFAULT); six parameters are estimated; warpMatrix is $2\times 3$.MOTION_HOMOGRAPHY sets a homography as a motion model; eight parameters are estimated;`warpMatrix` is $3\times 3$.  |
`criteria` | [TermCriteria](../classes/_types_opencv__hacks_.termcriteria.md) | parameter, specifying the termination criteria of the ECC algorithm; criteria.epsilon defines the threshold of the increment in the correlation coefficient between two iterations (a negative criteria.epsilon makes criteria.maxcount the only termination criterion). Default values are shown in the declaration above.  |
`inputMask` | InputArray | An optional mask to indicate valid values of inputImage.  |
`gaussFiltSize` | [int](_types_opencv__hacks_.md#int) | An optional value indicating size of gaussian blur filter; (DEFAULT: 5)  |

**Returns:** *[double](_types_opencv__hacks_.md#double)*

▸ **findTransformECC**(`templateImage`: InputArray, `inputImage`: InputArray, `warpMatrix`: InputOutputArray, `motionType?`: [int](_types_opencv__hacks_.md#int), `criteria?`: [TermCriteria](../classes/_types_opencv__hacks_.termcriteria.md), `inputMask?`: InputArray): *[double](_types_opencv__hacks_.md#double)*

*Defined in [types/opencv/video_track.ts:245](https://github.com/cancerberoSgx/mirada/blob/1c5d3d0/mirada/src/types/opencv/video_track.ts#L245)*

This is an overloaded member function, provided for convenience. It differs from the above function
only in what argument(s) it accepts.

**Parameters:**

Name | Type |
------ | ------ |
`templateImage` | InputArray |
`inputImage` | InputArray |
`warpMatrix` | InputOutputArray |
`motionType?` | [int](_types_opencv__hacks_.md#int) |
`criteria?` | [TermCriteria](../classes/_types_opencv__hacks_.termcriteria.md) |
`inputMask?` | InputArray |

**Returns:** *[double](_types_opencv__hacks_.md#double)*

___

###  meanShift

▸ **meanShift**(`probImage`: InputArray, `window`: any, `criteria`: [TermCriteria](../classes/_types_opencv__hacks_.termcriteria.md)): *[int](_types_opencv__hacks_.md#int)*

*Defined in [types/opencv/video_track.ts:264](https://github.com/cancerberoSgx/mirada/blob/1c5d3d0/mirada/src/types/opencv/video_track.ts#L264)*

**Parameters:**

Name | Type | Description |
------ | ------ | ------ |
`probImage` | InputArray | Back projection of the object histogram. See calcBackProject for details.  |
`window` | any | Initial search window.  |
`criteria` | [TermCriteria](../classes/_types_opencv__hacks_.termcriteria.md) | Stop criteria for the iterative search algorithm. returns : Number of iterations CAMSHIFT took to converge. The function implements the iterative object search algorithm. It takes the input back projection of an object and the initial position. The mass center in window of the back projection image is computed and the search window center shifts to the mass center. The procedure is repeated until the specified number of iterations criteria.maxCount is done or until the window center shifts by less than criteria.epsilon. The algorithm is used inside CamShift and, unlike CamShift , the search window size or orientation do not change during the search. You can simply pass the output of calcBackProject to this function. But better results can be obtained if you pre-filter the back projection and remove the noise. For example, you can do this by retrieving connected components with findContours , throwing away contours with small area ( contourArea ), and rendering the remaining contours with drawContours.  |

**Returns:** *[int](_types_opencv__hacks_.md#int)*

___

###  readOpticalFlow

▸ **readOpticalFlow**(`path`: any): *[Mat](../classes/_types_opencv_mat_.mat.md)*

*Defined in [types/opencv/video_track.ts:273](https://github.com/cancerberoSgx/mirada/blob/1c5d3d0/mirada/src/types/opencv/video_track.ts#L273)*

The function readOpticalFlow loads a flow field from a file and returns it as a single matrix.
Resulting [Mat] has a type CV_32FC2 - floating-point, 2-channel. First channel corresponds to the
flow in the horizontal direction (u), second - vertical (v).

**Parameters:**

Name | Type | Description |
------ | ------ | ------ |
`path` | any | Path to the file to be loaded  |

**Returns:** *[Mat](../classes/_types_opencv_mat_.mat.md)*

___

###  writeOpticalFlow

▸ **writeOpticalFlow**(`path`: any, `flow`: InputArray): *[bool](_types_opencv__hacks_.md#bool)*

*Defined in [types/opencv/video_track.ts:284](https://github.com/cancerberoSgx/mirada/blob/1c5d3d0/mirada/src/types/opencv/video_track.ts#L284)*

The function stores a flow field in a file, returns true on success, false otherwise. The flow field
must be a 2-channel, floating-point matrix (CV_32FC2). First channel corresponds to the flow in the
horizontal direction (u), second - vertical (v).

**Parameters:**

Name | Type | Description |
------ | ------ | ------ |
`path` | any | Path to the file to be written  |
`flow` | InputArray | Flow field to be stored  |

**Returns:** *[bool](_types_opencv__hacks_.md#bool)*