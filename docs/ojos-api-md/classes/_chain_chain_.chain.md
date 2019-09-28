[ojos](../README.md) › ["chain/chain"](../modules/_chain_chain_.md) › [Chain](_chain_chain_.chain.md)

# Class: Chain

## Hierarchy

* [ChainBase](_chain_chainbase_.chainbase.md)

  ↳ **Chain**

## Index

### Constructors

* [constructor](_chain_chain_.chain.md#constructor)

### Properties

* [_mode](_chain_chain_.chain.md#protected-_mode)
* [mat](_chain_chain_.chain.md#protected-mat)

### Methods

* [adaptiveThreshold](_chain_chain_.chain.md#adaptivethreshold)
* [asFile](_chain_chain_.chain.md#asfile)
* [bilateralFilter](_chain_chain_.chain.md#bilateralfilter)
* [bitwise](_chain_chain_.chain.md#bitwise)
* [boxFilter](_chain_chain_.chain.md#boxfilter)
* [canny](_chain_chain_.chain.md#canny)
* [cartoonize](_chain_chain_.chain.md#cartoonize)
* [circle](_chain_chain_.chain.md#circle)
* [convertTo](_chain_chain_.chain.md#convertto)
* [cvtColor](_chain_chain_.chain.md#cvtcolor)
* [edge](_chain_chain_.chain.md#edge)
* [ellipse](_chain_chain_.chain.md#ellipse)
* [filter2D](_chain_chain_.chain.md#filter2d)
* [floodFill](_chain_chain_.chain.md#floodfill)
* [gaussianBlur](_chain_chain_.chain.md#gaussianblur)
* [handle](_chain_chain_.chain.md#protected-handle)
* [histEqualization](_chain_chain_.chain.md#histequalization)
* [houghLinesP](_chain_chain_.chain.md#houghlinesp)
* [inRange](_chain_chain_.chain.md#inrange)
* [line](_chain_chain_.chain.md#line)
* [math](_chain_chain_.chain.md#math)
* [medianBlur](_chain_chain_.chain.md#medianblur)
* [mode](_chain_chain_.chain.md#mode)
* [morphologyEx](_chain_chain_.chain.md#morphologyex)
* [pyr](_chain_chain_.chain.md#pyr)
* [rectangle](_chain_chain_.chain.md#rectangle)
* [replaceColor](_chain_chain_.chain.md#replacecolor)
* [roi](_chain_chain_.chain.md#roi)
* [threshold](_chain_chain_.chain.md#threshold)
* [toRgba](_chain_chain_.chain.md#torgba)
* [warpAffine](_chain_chain_.chain.md#warpaffine)
* [warpPerspective](_chain_chain_.chain.md#warpperspective)
* [wave](_chain_chain_.chain.md#wave)
* [fromFile](_chain_chain_.chain.md#static-fromfile)

## Constructors

###  constructor

\+ **new Chain**(`mat`: Mat): *[Chain](_chain_chain_.chain.md)*

*Inherited from [ChainBase](_chain_chainbase_.chainbase.md).[constructor](_chain_chainbase_.chainbase.md#constructor)*

*Defined in [chain/chainBase.ts:9](https://github.com/cancerberoSgx/mirada/blob/3544b58/ojos/src/chain/chainBase.ts#L9)*

**Parameters:**

Name | Type | Default |
------ | ------ | ------ |
`mat` | Mat |  new cv.Mat() |

**Returns:** *[Chain](_chain_chain_.chain.md)*

## Properties

### `Protected` _mode

• **_mode**: *"map" | "array"*

*Inherited from [ChainBase](_chain_chainbase_.chainbase.md).[_mode](_chain_chainbase_.chainbase.md#protected-_mode)*

*Defined in [chain/chainBase.ts:9](https://github.com/cancerberoSgx/mirada/blob/3544b58/ojos/src/chain/chainBase.ts#L9)*

___

### `Protected` mat

• **mat**: *Mat*

*Inherited from [ChainBase](_chain_chainbase_.chainbase.md).[mat](_chain_chainbase_.chainbase.md#protected-mat)*

*Defined in [chain/chainBase.ts:11](https://github.com/cancerberoSgx/mirada/blob/3544b58/ojos/src/chain/chainBase.ts#L11)*

## Methods

###  adaptiveThreshold

▸ **adaptiveThreshold**(...`args`: [Params](../modules/_chain_chainbase_.md#params)‹[AdaptiveThresholdOptions](../interfaces/_op_adaptivethreshold_.adaptivethresholdoptions.md)›): *this*

*Defined in [chain/chain.ts:10](https://github.com/cancerberoSgx/mirada/blob/3544b58/ojos/src/chain/chain.ts#L10)*

transforms a grayscale image to a binary image

**Parameters:**

Name | Type |
------ | ------ |
`...args` | [Params](../modules/_chain_chainbase_.md#params)‹[AdaptiveThresholdOptions](../interfaces/_op_adaptivethreshold_.adaptivethresholdoptions.md)› |

**Returns:** *this*

___

###  asFile

▸ **asFile**(`name?`: undefined | string): *File*

*Inherited from [ChainBase](_chain_chainbase_.chainbase.md).[asFile](_chain_chainbase_.chainbase.md#asfile)*

*Defined in [chain/chainBase.ts:39](https://github.com/cancerberoSgx/mirada/blob/3544b58/ojos/src/chain/chainBase.ts#L39)*

**Parameters:**

Name | Type |
------ | ------ |
`name?` | undefined &#124; string |

**Returns:** *File*

___

###  bilateralFilter

▸ **bilateralFilter**(...`args`: [Params](../modules/_chain_chainbase_.md#params)‹[BilateralFilterOptions](../interfaces/_op_bilateralfilter_.bilateralfilteroptions.md)›): *this*

*Defined in [chain/chain.ts:21](https://github.com/cancerberoSgx/mirada/blob/3544b58/ojos/src/chain/chain.ts#L21)*

The function applies bilateral filtering to the input image, as described in bilateralFilter can reduce unwanted noise very well while keeping edges fairly sharp. However, it is very slow compared to most filters.

Sigma values*: For simplicity, you can set the 2 sigma values to be the same. If they are small (< 10), the filter will not have much effect, whereas if they are large (> 150), they will have a very strong effect, making the image look "cartoonish".

Filter size*: Large filters (d > 5) are very slow, so it is recommended to use d=5 for real-time applications, and perhaps d=9 for offline applications that need heavy noise filtering.

**Parameters:**

Name | Type |
------ | ------ |
`...args` | [Params](../modules/_chain_chainbase_.md#params)‹[BilateralFilterOptions](../interfaces/_op_bilateralfilter_.bilateralfilteroptions.md)› |

**Returns:** *this*

___

###  bitwise

▸ **bitwise**(...`args`: [Params](../modules/_chain_chainbase_.md#params)‹[BitwiseOptions](../interfaces/_op_bitwise_.bitwiseoptions.md)›): *this*

*Defined in [chain/chain.ts:28](https://github.com/cancerberoSgx/mirada/blob/3544b58/ojos/src/chain/chain.ts#L28)*

**Parameters:**

Name | Type |
------ | ------ |
`...args` | [Params](../modules/_chain_chainbase_.md#params)‹[BitwiseOptions](../interfaces/_op_bitwise_.bitwiseoptions.md)› |

**Returns:** *this*

___

###  boxFilter

▸ **boxFilter**(...`args`: [Params](../modules/_chain_chainbase_.md#params)‹[BoxFilterOptions](../interfaces/_op_boxfilter_.boxfilteroptions.md)›): *this*

*Defined in [chain/chain.ts:35](https://github.com/cancerberoSgx/mirada/blob/3544b58/ojos/src/chain/chain.ts#L35)*

smooths an image. Unnormalized box filter is useful for computing various integral characteristics over each pixel neighborhood, such as covariance matrices of image derivatives (used in dense optical flow algorithms, and so on).

**Parameters:**

Name | Type |
------ | ------ |
`...args` | [Params](../modules/_chain_chainbase_.md#params)‹[BoxFilterOptions](../interfaces/_op_boxfilter_.boxfilteroptions.md)› |

**Returns:** *this*

___

###  canny

▸ **canny**(...`args`: [Params](../modules/_chain_chainbase_.md#params)‹[CannyOptions](../interfaces/_op_canny_.cannyoptions.md)›): *this*

*Defined in [chain/chain.ts:42](https://github.com/cancerberoSgx/mirada/blob/3544b58/ojos/src/chain/chain.ts#L42)*

finds edges in the input image and marks them in the output map edges using the Canny algorithm. The smallest value between threshold1 and threshold2 is used for edge linking. The largest value is used to find initial segments of strong edges

**Parameters:**

Name | Type |
------ | ------ |
`...args` | [Params](../modules/_chain_chainbase_.md#params)‹[CannyOptions](../interfaces/_op_canny_.cannyoptions.md)› |

**Returns:** *this*

___

###  cartoonize

▸ **cartoonize**(...`args`: [Params](../modules/_chain_chainbase_.md#params)‹[CartoonizeOptions](../interfaces/_op_cartoonize_.cartoonizeoptions.md)›): *this*

*Defined in [chain/chain.ts:196](https://github.com/cancerberoSgx/mirada/blob/3544b58/ojos/src/chain/chain.ts#L196)*

convert an image into a cartoon-like image

**Parameters:**

Name | Type |
------ | ------ |
`...args` | [Params](../modules/_chain_chainbase_.md#params)‹[CartoonizeOptions](../interfaces/_op_cartoonize_.cartoonizeoptions.md)› |

**Returns:** *this*

___

###  circle

▸ **circle**(...`args`: [Params](../modules/_chain_chainbase_.md#params)‹[CircleOptions](../interfaces/_op_circle_.circleoptions.md)›): *this*

*Defined in [chain/chain.ts:49](https://github.com/cancerberoSgx/mirada/blob/3544b58/ojos/src/chain/chain.ts#L49)*

Draws a simple or filled circle with a given center and radius.

**Parameters:**

Name | Type |
------ | ------ |
`...args` | [Params](../modules/_chain_chainbase_.md#params)‹[CircleOptions](../interfaces/_op_circle_.circleoptions.md)› |

**Returns:** *this*

___

###  convertTo

▸ **convertTo**(...`args`: [Params](../modules/_chain_chainbase_.md#params)‹[ConvertToOptions](../interfaces/_op_convertto_.converttooptions.md)›): *this*

*Defined in [chain/chain.ts:56](https://github.com/cancerberoSgx/mirada/blob/3544b58/ojos/src/chain/chain.ts#L56)*

converts source pixel values to the target data type.

**Parameters:**

Name | Type |
------ | ------ |
`...args` | [Params](../modules/_chain_chainbase_.md#params)‹[ConvertToOptions](../interfaces/_op_convertto_.converttooptions.md)› |

**Returns:** *this*

___

###  cvtColor

▸ **cvtColor**(...`args`: [Params](../modules/_chain_chainbase_.md#params)‹[CvtColorOptions](../interfaces/_op_cvtcolor_.cvtcoloroptions.md)›): *this*

*Defined in [chain/chain.ts:168](https://github.com/cancerberoSgx/mirada/blob/3544b58/ojos/src/chain/chain.ts#L168)*

converts an input image from one color space to another. In case of a transformation to-from RGB color space, the order of the channels should be specified explicitly (RGB or BGR). Note that the default color format in OpenCV is often referred to as RGB but it is actually BGR (the bytes are reversed). So the first byte in a standard (24-bit) color image will be an 8-bit Blue component, the second byte will be Green, and the third byte will be Red. The fourth, fifth, and sixth bytes would then be the second pixel (Blue, then Green, then Red), and so on.

**Parameters:**

Name | Type |
------ | ------ |
`...args` | [Params](../modules/_chain_chainbase_.md#params)‹[CvtColorOptions](../interfaces/_op_cvtcolor_.cvtcoloroptions.md)› |

**Returns:** *this*

___

###  edge

▸ **edge**(...`args`: [Params](../modules/_chain_chainbase_.md#params)‹[EdgeOptions](../interfaces/_op_edge_.edgeoptions.md)›): *this*

*Defined in [chain/chain.ts:63](https://github.com/cancerberoSgx/mirada/blob/3544b58/ojos/src/chain/chain.ts#L63)*

facade around cv.Sobel, cv.Laplacian and cv.Scharr

**Parameters:**

Name | Type |
------ | ------ |
`...args` | [Params](../modules/_chain_chainbase_.md#params)‹[EdgeOptions](../interfaces/_op_edge_.edgeoptions.md)› |

**Returns:** *this*

___

###  ellipse

▸ **ellipse**(...`args`: [Params](../modules/_chain_chainbase_.md#params)‹[EllipseOptions](../interfaces/_op_ellipse_.ellipseoptions.md)›): *this*

*Defined in [chain/chain.ts:70](https://github.com/cancerberoSgx/mirada/blob/3544b58/ojos/src/chain/chain.ts#L70)*

Draws a simple or filled Ellipse with a given center size and rotation angle.

**Parameters:**

Name | Type |
------ | ------ |
`...args` | [Params](../modules/_chain_chainbase_.md#params)‹[EllipseOptions](../interfaces/_op_ellipse_.ellipseoptions.md)› |

**Returns:** *this*

___

###  filter2D

▸ **filter2D**(...`args`: [Params](../modules/_chain_chainbase_.md#params)‹[Filter2DOptions](../interfaces/_op_filter2d_.filter2doptions.md)›): *this*

*Defined in [chain/chain.ts:217](https://github.com/cancerberoSgx/mirada/blob/3544b58/ojos/src/chain/chain.ts#L217)*

Convolves an image with the kernel. The function applies an arbitrary linear filter to an image. In-place operation is supported. When the aperture is partially outside the image, the function interpolates outlier pixel values according to the specified border mode

**Parameters:**

Name | Type |
------ | ------ |
`...args` | [Params](../modules/_chain_chainbase_.md#params)‹[Filter2DOptions](../interfaces/_op_filter2d_.filter2doptions.md)› |

**Returns:** *this*

___

###  floodFill

▸ **floodFill**(...`args`: [Params](../modules/_chain_chainbase_.md#params)‹[FloodFillOptions](../interfaces/_op_floodfill_.floodfilloptions.md)›): *this*

*Defined in [chain/chain.ts:77](https://github.com/cancerberoSgx/mirada/blob/3544b58/ojos/src/chain/chain.ts#L77)*

This is a high level API for flood fill given color or image starting from given [seed] coords and involves several opencv operations.

**Parameters:**

Name | Type |
------ | ------ |
`...args` | [Params](../modules/_chain_chainbase_.md#params)‹[FloodFillOptions](../interfaces/_op_floodfill_.floodfilloptions.md)› |

**Returns:** *this*

___

###  gaussianBlur

▸ **gaussianBlur**(...`args`: [Params](../modules/_chain_chainbase_.md#params)‹[GaussianBlurOptions](../interfaces/_op_gaussianblur_.gaussianbluroptions.md)›): *this*

*Defined in [chain/chain.ts:84](https://github.com/cancerberoSgx/mirada/blob/3544b58/ojos/src/chain/chain.ts#L84)*

convolves the source image with the specified Gaussian kernel. In-place filtering is supported.

**Parameters:**

Name | Type |
------ | ------ |
`...args` | [Params](../modules/_chain_chainbase_.md#params)‹[GaussianBlurOptions](../interfaces/_op_gaussianblur_.gaussianbluroptions.md)› |

**Returns:** *this*

___

### `Protected` handle

▸ **handle**(`args`: any, `Class`: any): *this*

*Inherited from [ChainBase](_chain_chainbase_.chainbase.md).[handle](_chain_chainbase_.chainbase.md#protected-handle)*

*Defined in [chain/chainBase.ts:15](https://github.com/cancerberoSgx/mirada/blob/3544b58/ojos/src/chain/chainBase.ts#L15)*

**Parameters:**

Name | Type |
------ | ------ |
`args` | any |
`Class` | any |

**Returns:** *this*

___

###  histEqualization

▸ **histEqualization**(...`args`: [Params](../modules/_chain_chainbase_.md#params)‹[HistEqualizationOptions](../interfaces/_op_histequalization_.histequalizationoptions.md)›): *this*

*Defined in [chain/chain.ts:91](https://github.com/cancerberoSgx/mirada/blob/3544b58/ojos/src/chain/chain.ts#L91)*

Applies histogram equalization using cv.equalizeHist or cv.CLAHE. In case src image has multiple channels, equalization is applied on each of them independently and then the result is merged

**Parameters:**

Name | Type |
------ | ------ |
`...args` | [Params](../modules/_chain_chainbase_.md#params)‹[HistEqualizationOptions](../interfaces/_op_histequalization_.histequalizationoptions.md)› |

**Returns:** *this*

___

###  houghLinesP

▸ **houghLinesP**(...`args`: [Params](../modules/_chain_chainbase_.md#params)‹[HoughLinesPOptions](../interfaces/_op_houghlinesp_.houghlinespoptions.md)›): *this*

*Defined in [chain/chain.ts:210](https://github.com/cancerberoSgx/mirada/blob/3544b58/ojos/src/chain/chain.ts#L210)*

Finds line segments in a binary image using the probabilistic Hough transform. The function implements the probabilistic Hough transform algorithm for line detection. It returns parsed set of line segments in [line] option. If color is given it will draw lines in [dst]

**Parameters:**

Name | Type |
------ | ------ |
`...args` | [Params](../modules/_chain_chainbase_.md#params)‹[HoughLinesPOptions](../interfaces/_op_houghlinesp_.houghlinespoptions.md)› |

**Returns:** *this*

___

###  inRange

▸ **inRange**(...`args`: [Params](../modules/_chain_chainbase_.md#params)‹[InRangeOptions](../interfaces/_op_inrange_.inrangeoptions.md)›): *this*

*Defined in [chain/chain.ts:98](https://github.com/cancerberoSgx/mirada/blob/3544b58/ojos/src/chain/chain.ts#L98)*

[dst] is set to 255 (all 1 -bits) if [src] is within the specified 1D, 2D, 3D, ... box and 0 otherwise.

**Parameters:**

Name | Type |
------ | ------ |
`...args` | [Params](../modules/_chain_chainbase_.md#params)‹[InRangeOptions](../interfaces/_op_inrange_.inrangeoptions.md)› |

**Returns:** *this*

___

###  line

▸ **line**(...`args`: [Params](../modules/_chain_chainbase_.md#params)‹[LineOptions](../interfaces/_op_line_.lineoptions.md)›): *this*

*Defined in [chain/chain.ts:105](https://github.com/cancerberoSgx/mirada/blob/3544b58/ojos/src/chain/chain.ts#L105)*

Draws the line segment between pt1 and pt2 points in the image.

**Parameters:**

Name | Type |
------ | ------ |
`...args` | [Params](../modules/_chain_chainbase_.md#params)‹[LineOptions](../interfaces/_op_line_.lineoptions.md)› |

**Returns:** *this*

___

###  math

▸ **math**(...`args`: [Params](../modules/_chain_chainbase_.md#params)‹[MathOptions](../interfaces/_op_math_.mathoptions.md)›): *this*

*Defined in [chain/chain.ts:112](https://github.com/cancerberoSgx/mirada/blob/3544b58/ojos/src/chain/chain.ts#L112)*

performs math operations per pixel on images, like add, subtract, divide, addWeighted and multiply

**Parameters:**

Name | Type |
------ | ------ |
`...args` | [Params](../modules/_chain_chainbase_.md#params)‹[MathOptions](../interfaces/_op_math_.mathoptions.md)› |

**Returns:** *this*

___

###  medianBlur

▸ **medianBlur**(...`args`: [Params](../modules/_chain_chainbase_.md#params)‹[MedianBlurOptions](../interfaces/_op_medianblur_.medianbluroptions.md)›): *this*

*Defined in [chain/chain.ts:119](https://github.com/cancerberoSgx/mirada/blob/3544b58/ojos/src/chain/chain.ts#L119)*

smoothes an image using the median filter with the ksize x ksize aperture.

**Parameters:**

Name | Type |
------ | ------ |
`...args` | [Params](../modules/_chain_chainbase_.md#params)‹[MedianBlurOptions](../interfaces/_op_medianblur_.medianbluroptions.md)› |

**Returns:** *this*

___

###  mode

▸ **mode**(`mode`: "map" | "array"): *this*

*Inherited from [ChainBase](_chain_chainbase_.chainbase.md).[mode](_chain_chainbase_.chainbase.md#mode)*

*Defined in [chain/chainBase.ts:34](https://github.com/cancerberoSgx/mirada/blob/3544b58/ojos/src/chain/chainBase.ts#L34)*

**Parameters:**

Name | Type |
------ | ------ |
`mode` | "map" &#124; "array" |

**Returns:** *this*

___

###  morphologyEx

▸ **morphologyEx**(...`args`: [Params](../modules/_chain_chainbase_.md#params)‹[MorphologyExOptions](../interfaces/_op_morphologyex_.morphologyexoptions.md)›): *this*

*Defined in [chain/chain.ts:126](https://github.com/cancerberoSgx/mirada/blob/3544b58/ojos/src/chain/chain.ts#L126)*

perform advanced morphological transformations using an erosion and dilation as basic operations. In case of multi-channel images, each channel is processed independently.

**Parameters:**

Name | Type |
------ | ------ |
`...args` | [Params](../modules/_chain_chainbase_.md#params)‹[MorphologyExOptions](../interfaces/_op_morphologyex_.morphologyexoptions.md)› |

**Returns:** *this*

___

###  pyr

▸ **pyr**(...`args`: [Params](../modules/_chain_chainbase_.md#params)‹[PyrOptions](../interfaces/_op_pyr_.pyroptions.md)›): *this*

*Defined in [chain/chain.ts:175](https://github.com/cancerberoSgx/mirada/blob/3544b58/ojos/src/chain/chain.ts#L175)*

 Performs pyramid up or down on an image. PyrUp up samples an image and then blurs it. PyrDown blurs an image and down samples it. By default, size of the output image is computed as 'Size((src.cols+1)/2, (src.rows+1)/2)', but in any case, the following conditions should be satisfied: '|𝚍𝚜𝚝𝚜𝚒𝚣𝚎.𝚠𝚒𝚍𝚝𝚑∗2−src.cols|≤2|𝚍𝚜𝚝𝚜𝚒𝚣𝚎.𝚑𝚎𝚒𝚐𝚑𝚝∗2−src.rows|≤2'.

**Parameters:**

Name | Type |
------ | ------ |
`...args` | [Params](../modules/_chain_chainbase_.md#params)‹[PyrOptions](../interfaces/_op_pyr_.pyroptions.md)› |

**Returns:** *this*

___

###  rectangle

▸ **rectangle**(...`args`: [Params](../modules/_chain_chainbase_.md#params)‹[RectangleOptions](../interfaces/_op_rectangle_.rectangleoptions.md)›): *this*

*Defined in [chain/chain.ts:133](https://github.com/cancerberoSgx/mirada/blob/3544b58/ojos/src/chain/chain.ts#L133)*

Draws the Rectangle segment between pt1 and pt2 points in the image.

**Parameters:**

Name | Type |
------ | ------ |
`...args` | [Params](../modules/_chain_chainbase_.md#params)‹[RectangleOptions](../interfaces/_op_rectangle_.rectangleoptions.md)› |

**Returns:** *this*

___

###  replaceColor

▸ **replaceColor**(...`args`: [Params](../modules/_chain_chainbase_.md#params)‹[ReplaceColorOptions](../interfaces/_op_replacecolor_.replacecoloroptions.md)›): *this*

*Defined in [chain/chain.ts:140](https://github.com/cancerberoSgx/mirada/blob/3544b58/ojos/src/chain/chain.ts#L140)*

Will replace pixels within given boundaries with given color or image's pixels

**Parameters:**

Name | Type |
------ | ------ |
`...args` | [Params](../modules/_chain_chainbase_.md#params)‹[ReplaceColorOptions](../interfaces/_op_replacecolor_.replacecoloroptions.md)› |

**Returns:** *this*

___

###  roi

▸ **roi**(...`args`: [Params](../modules/_chain_chainbase_.md#params)‹[RoiOptions](../interfaces/_op_roi_.roioptions.md)›): *this*

*Defined in [chain/chain.ts:189](https://github.com/cancerberoSgx/mirada/blob/3544b58/ojos/src/chain/chain.ts#L189)*

Return an image which has a src sub region defined by in given rectangle expression

**Parameters:**

Name | Type |
------ | ------ |
`...args` | [Params](../modules/_chain_chainbase_.md#params)‹[RoiOptions](../interfaces/_op_roi_.roioptions.md)› |

**Returns:** *this*

___

###  threshold

▸ **threshold**(...`args`: [Params](../modules/_chain_chainbase_.md#params)‹[ThresholdOptions](../interfaces/_op_threshold_.thresholdoptions.md)›): *this*

*Defined in [chain/chain.ts:147](https://github.com/cancerberoSgx/mirada/blob/3544b58/ojos/src/chain/chain.ts#L147)*

Applies fixed-level thresholding to a multiple-channel array. The function is typically used to get a bi-level (binary) image out of a grayscale image or for removing a noise, that is, filtering out pixels with too small or too large values. There are several types of thresholding supported by the function. They are determined by type parameter.

**Parameters:**

Name | Type |
------ | ------ |
`...args` | [Params](../modules/_chain_chainbase_.md#params)‹[ThresholdOptions](../interfaces/_op_threshold_.thresholdoptions.md)› |

**Returns:** *this*

___

###  toRgba

▸ **toRgba**(...`args`: [Params](../modules/_chain_chainbase_.md#params)‹[ToRgbaOptions](../interfaces/_op_torgba_.torgbaoptions.md)›): *this*

*Defined in [chain/chain.ts:182](https://github.com/cancerberoSgx/mirada/blob/3544b58/ojos/src/chain/chain.ts#L182)*

Changes image type to 4 channel RGBA. This is often necessary to render in HTML canvas.

**Parameters:**

Name | Type |
------ | ------ |
`...args` | [Params](../modules/_chain_chainbase_.md#params)‹[ToRgbaOptions](../interfaces/_op_torgba_.torgbaoptions.md)› |

**Returns:** *this*

___

###  warpAffine

▸ **warpAffine**(...`args`: [Params](../modules/_chain_chainbase_.md#params)‹[WarpAffineOptions](../interfaces/_op_warpaffine_.warpaffineoptions.md)›): *this*

*Defined in [chain/chain.ts:154](https://github.com/cancerberoSgx/mirada/blob/3544b58/ojos/src/chain/chain.ts#L154)*

Will use [estimateAffine2D] to calculate affine matrix from given [inputs] and [outputs] and then [warpAffine] to transform.

**Parameters:**

Name | Type |
------ | ------ |
`...args` | [Params](../modules/_chain_chainbase_.md#params)‹[WarpAffineOptions](../interfaces/_op_warpaffine_.warpaffineoptions.md)› |

**Returns:** *this*

___

###  warpPerspective

▸ **warpPerspective**(...`args`: [Params](../modules/_chain_chainbase_.md#params)‹[WarpPerspectiveOptions](../interfaces/_op_warpperspective_.warpperspectiveoptions.md)›): *this*

*Defined in [chain/chain.ts:161](https://github.com/cancerberoSgx/mirada/blob/3544b58/ojos/src/chain/chain.ts#L161)*

Input should be float type and 1, 3or 4 channels. In doubt use toRgba().

**Parameters:**

Name | Type |
------ | ------ |
`...args` | [Params](../modules/_chain_chainbase_.md#params)‹[WarpPerspectiveOptions](../interfaces/_op_warpperspective_.warpperspectiveoptions.md)› |

**Returns:** *this*

___

###  wave

▸ **wave**(...`args`: [Params](../modules/_chain_chainbase_.md#params)‹[WaveOptions](../interfaces/_op_wave_.waveoptions.md)›): *this*

*Defined in [chain/chain.ts:203](https://github.com/cancerberoSgx/mirada/blob/3544b58/ojos/src/chain/chain.ts#L203)*

Waving like image warp

**Parameters:**

Name | Type |
------ | ------ |
`...args` | [Params](../modules/_chain_chainbase_.md#params)‹[WaveOptions](../interfaces/_op_wave_.waveoptions.md)› |

**Returns:** *this*

___

### `Static` fromFile

▸ **fromFile**(`f`: File): *[Chain](_chain_chain_.chain.md)*

*Inherited from [ChainBase](_chain_chainbase_.chainbase.md).[fromFile](_chain_chainbase_.chainbase.md#static-fromfile)*

*Defined in [chain/chainBase.ts:30](https://github.com/cancerberoSgx/mirada/blob/3544b58/ojos/src/chain/chainBase.ts#L30)*

**Parameters:**

Name | Type |
------ | ------ |
`f` | File |

**Returns:** *[Chain](_chain_chain_.chain.md)*
