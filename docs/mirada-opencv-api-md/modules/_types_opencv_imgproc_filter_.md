[mirada](../README.md) › ["types/opencv/imgproc_filter"](_types_opencv_imgproc_filter_.md)

# External module: "types/opencv/imgproc_filter"


## Index

### Type aliases

* [MorphShapes](_types_opencv_imgproc_filter_.md#morphshapes)
* [MorphTypes](_types_opencv_imgproc_filter_.md#morphtypes)
* [SpecialFilter](_types_opencv_imgproc_filter_.md#specialfilter)

### Variables

* [FILTER_SCHARR](_types_opencv_imgproc_filter_.md#const-filter_scharr)
* [MORPH_BLACKHAT](_types_opencv_imgproc_filter_.md#const-morph_blackhat)
* [MORPH_CLOSE](_types_opencv_imgproc_filter_.md#const-morph_close)
* [MORPH_CROSS](_types_opencv_imgproc_filter_.md#const-morph_cross)
* [MORPH_DILATE](_types_opencv_imgproc_filter_.md#const-morph_dilate)
* [MORPH_ELLIPSE](_types_opencv_imgproc_filter_.md#const-morph_ellipse)
* [MORPH_ERODE](_types_opencv_imgproc_filter_.md#const-morph_erode)
* [MORPH_GRADIENT](_types_opencv_imgproc_filter_.md#const-morph_gradient)
* [MORPH_HITMISS](_types_opencv_imgproc_filter_.md#const-morph_hitmiss)
* [MORPH_OPEN](_types_opencv_imgproc_filter_.md#const-morph_open)
* [MORPH_RECT](_types_opencv_imgproc_filter_.md#const-morph_rect)
* [MORPH_TOPHAT](_types_opencv_imgproc_filter_.md#const-morph_tophat)

### Functions

* [GaussianBlur](_types_opencv_imgproc_filter_.md#gaussianblur)
* [Laplacian](_types_opencv_imgproc_filter_.md#laplacian)
* [Scharr](_types_opencv_imgproc_filter_.md#scharr)
* [Sobel](_types_opencv_imgproc_filter_.md#sobel)
* [bilateralFilter](_types_opencv_imgproc_filter_.md#bilateralfilter)
* [blur](_types_opencv_imgproc_filter_.md#blur)
* [boxFilter](_types_opencv_imgproc_filter_.md#boxfilter)
* [buildPyramid](_types_opencv_imgproc_filter_.md#buildpyramid)
* [dilate](_types_opencv_imgproc_filter_.md#dilate)
* [erode](_types_opencv_imgproc_filter_.md#erode)
* [filter2D](_types_opencv_imgproc_filter_.md#filter2d)
* [getDerivKernels](_types_opencv_imgproc_filter_.md#getderivkernels)
* [getGaborKernel](_types_opencv_imgproc_filter_.md#getgaborkernel)
* [getGaussianKernel](_types_opencv_imgproc_filter_.md#getgaussiankernel)
* [getStructuringElement](_types_opencv_imgproc_filter_.md#getstructuringelement)
* [medianBlur](_types_opencv_imgproc_filter_.md#medianblur)
* [morphologyDefaultBorderValue](_types_opencv_imgproc_filter_.md#morphologydefaultbordervalue)
* [morphologyEx](_types_opencv_imgproc_filter_.md#morphologyex)
* [pyrDown](_types_opencv_imgproc_filter_.md#pyrdown)
* [pyrMeanShiftFiltering](_types_opencv_imgproc_filter_.md#pyrmeanshiftfiltering)
* [pyrUp](_types_opencv_imgproc_filter_.md#pyrup)
* [sepFilter2D](_types_opencv_imgproc_filter_.md#sepfilter2d)
* [spatialGradient](_types_opencv_imgproc_filter_.md#spatialgradient)
* [sqrBoxFilter](_types_opencv_imgproc_filter_.md#sqrboxfilter)

## Type aliases

###  MorphShapes

Ƭ **MorphShapes**: *any*

*Defined in [types/opencv/imgproc_filter.ts:742](https://github.com/cancerberoSgx/mirada/blob/e7b5ae6/mirada/src/types/opencv/imgproc_filter.ts#L742)*

___

###  MorphTypes

Ƭ **MorphTypes**: *any*

*Defined in [types/opencv/imgproc_filter.ts:744](https://github.com/cancerberoSgx/mirada/blob/e7b5ae6/mirada/src/types/opencv/imgproc_filter.ts#L744)*

___

###  SpecialFilter

Ƭ **SpecialFilter**: *any*

*Defined in [types/opencv/imgproc_filter.ts:746](https://github.com/cancerberoSgx/mirada/blob/e7b5ae6/mirada/src/types/opencv/imgproc_filter.ts#L746)*

## Variables

### `Const` FILTER_SCHARR

• **FILTER_SCHARR**: *[SpecialFilter](_types_opencv_imgproc_filter_.md#specialfilter)*

*Defined in [types/opencv/imgproc_filter.ts:740](https://github.com/cancerberoSgx/mirada/blob/e7b5ae6/mirada/src/types/opencv/imgproc_filter.ts#L740)*

___

### `Const` MORPH_BLACKHAT

• **MORPH_BLACKHAT**: *[MorphTypes](_types_opencv_imgproc_filter_.md#morphtypes)*

*Defined in [types/opencv/imgproc_filter.ts:731](https://github.com/cancerberoSgx/mirada/blob/e7b5ae6/mirada/src/types/opencv/imgproc_filter.ts#L731)*

"black hat" `\\[\\texttt{dst} = \\mathrm{blackhat} ( \\texttt{src} , \\texttt{element} )=
\\mathrm{close} ( \\texttt{src} , \\texttt{element} )- \\texttt{src}\\]`

___

### `Const` MORPH_CLOSE

• **MORPH_CLOSE**: *[MorphTypes](_types_opencv_imgproc_filter_.md#morphtypes)*

*Defined in [types/opencv/imgproc_filter.ts:709](https://github.com/cancerberoSgx/mirada/blob/e7b5ae6/mirada/src/types/opencv/imgproc_filter.ts#L709)*

a closing operation `\\[\\texttt{dst} = \\mathrm{close} ( \\texttt{src} , \\texttt{element} )=
\\mathrm{erode} ( \\mathrm{dilate} ( \\texttt{src} , \\texttt{element} ))\\]`

___

### `Const` MORPH_CROSS

• **MORPH_CROSS**: *[MorphShapes](_types_opencv_imgproc_filter_.md#morphshapes)*

*Defined in [types/opencv/imgproc_filter.ts:684](https://github.com/cancerberoSgx/mirada/blob/e7b5ae6/mirada/src/types/opencv/imgproc_filter.ts#L684)*

a cross-shaped structuring element: `\\[E_{ij} = \\fork{1}{if i=\\texttt{anchor.y} or
j=\\texttt{anchor.x}}{0}{otherwise}\\]`

___

### `Const` MORPH_DILATE

• **MORPH_DILATE**: *[MorphTypes](_types_opencv_imgproc_filter_.md#morphtypes)*

*Defined in [types/opencv/imgproc_filter.ts:695](https://github.com/cancerberoSgx/mirada/blob/e7b5ae6/mirada/src/types/opencv/imgproc_filter.ts#L695)*

___

### `Const` MORPH_ELLIPSE

• **MORPH_ELLIPSE**: *[MorphShapes](_types_opencv_imgproc_filter_.md#morphshapes)*

*Defined in [types/opencv/imgproc_filter.ts:691](https://github.com/cancerberoSgx/mirada/blob/e7b5ae6/mirada/src/types/opencv/imgproc_filter.ts#L691)*

an elliptic structuring element, that is, a filled ellipse inscribed into the rectangle Rect(0, 0,
esize.width, 0.esize.height)

___

### `Const` MORPH_ERODE

• **MORPH_ERODE**: *[MorphTypes](_types_opencv_imgproc_filter_.md#morphtypes)*

*Defined in [types/opencv/imgproc_filter.ts:693](https://github.com/cancerberoSgx/mirada/blob/e7b5ae6/mirada/src/types/opencv/imgproc_filter.ts#L693)*

___

### `Const` MORPH_GRADIENT

• **MORPH_GRADIENT**: *[MorphTypes](_types_opencv_imgproc_filter_.md#morphtypes)*

*Defined in [types/opencv/imgproc_filter.ts:717](https://github.com/cancerberoSgx/mirada/blob/e7b5ae6/mirada/src/types/opencv/imgproc_filter.ts#L717)*

a morphological gradient `\\[\\texttt{dst} = \\mathrm{morph\\_grad} ( \\texttt{src} ,
\\texttt{element} )= \\mathrm{dilate} ( \\texttt{src} , \\texttt{element} )- \\mathrm{erode} (
\\texttt{src} , \\texttt{element} )\\]`

___

### `Const` MORPH_HITMISS

• **MORPH_HITMISS**: *[MorphTypes](_types_opencv_imgproc_filter_.md#morphtypes)*

*Defined in [types/opencv/imgproc_filter.ts:738](https://github.com/cancerberoSgx/mirada/blob/e7b5ae6/mirada/src/types/opencv/imgproc_filter.ts#L738)*

"hit or miss" .- Only supported for CV_8UC1 binary images. A tutorial can be found in the
documentation

___

### `Const` MORPH_OPEN

• **MORPH_OPEN**: *[MorphTypes](_types_opencv_imgproc_filter_.md#morphtypes)*

*Defined in [types/opencv/imgproc_filter.ts:702](https://github.com/cancerberoSgx/mirada/blob/e7b5ae6/mirada/src/types/opencv/imgproc_filter.ts#L702)*

an opening operation `\\[\\texttt{dst} = \\mathrm{open} ( \\texttt{src} , \\texttt{element} )=
\\mathrm{dilate} ( \\mathrm{erode} ( \\texttt{src} , \\texttt{element} ))\\]`

___

### `Const` MORPH_RECT

• **MORPH_RECT**: *[MorphShapes](_types_opencv_imgproc_filter_.md#morphshapes)*

*Defined in [types/opencv/imgproc_filter.ts:677](https://github.com/cancerberoSgx/mirada/blob/e7b5ae6/mirada/src/types/opencv/imgproc_filter.ts#L677)*

___

### `Const` MORPH_TOPHAT

• **MORPH_TOPHAT**: *[MorphTypes](_types_opencv_imgproc_filter_.md#morphtypes)*

*Defined in [types/opencv/imgproc_filter.ts:724](https://github.com/cancerberoSgx/mirada/blob/e7b5ae6/mirada/src/types/opencv/imgproc_filter.ts#L724)*

"top hat" `\\[\\texttt{dst} = \\mathrm{tophat} ( \\texttt{src} , \\texttt{element} )= \\texttt{src}
- \\mathrm{open} ( \\texttt{src} , \\texttt{element} )\\]`

## Functions

###  GaussianBlur

▸ **GaussianBlur**(`src`: [InputArray](_types_opencv__hacks_.md#inputarray), `dst`: OutputArray, `ksize`: [Size](../classes/_types_opencv__hacks_.size.md), `sigmaX`: [double](_types_opencv__hacks_.md#double), `sigmaY?`: [double](_types_opencv__hacks_.md#double), `borderType?`: [int](_types_opencv__hacks_.md#int)): *void*

*Defined in [types/opencv/imgproc_filter.ts:255](https://github.com/cancerberoSgx/mirada/blob/e7b5ae6/mirada/src/types/opencv/imgproc_filter.ts#L255)*

The function convolves the source image with the specified Gaussian kernel. In-place filtering is
supported.

[sepFilter2D], [filter2D], [blur], [boxFilter], [bilateralFilter], [medianBlur]

**Parameters:**

Name | Type | Description |
------ | ------ | ------ |
`src` | [InputArray](_types_opencv__hacks_.md#inputarray) | input image; the image can have any number of channels, which are processed independently, but the depth should be CV_8U, CV_16U, CV_16S, CV_32F or CV_64F.  |
`dst` | OutputArray | output image of the same size and type as src.  |
`ksize` | [Size](../classes/_types_opencv__hacks_.size.md) | Gaussian kernel size. ksize.width and ksize.height can differ but they both must be positive and odd. Or, they can be zero's and then they are computed from sigma.  |
`sigmaX` | [double](_types_opencv__hacks_.md#double) | Gaussian kernel standard deviation in X direction.  |
`sigmaY?` | [double](_types_opencv__hacks_.md#double) | Gaussian kernel standard deviation in Y direction; if sigmaY is zero, it is set to be equal to sigmaX, if both sigmas are zeros, they are computed from ksize.width and ksize.height, respectively (see getGaussianKernel for details); to fully control the result regardless of possible future modifications of all this semantics, it is recommended to specify all of ksize, sigmaX, and sigmaY.  |
`borderType?` | [int](_types_opencv__hacks_.md#int) | pixel extrapolation method, see BorderTypes  |

**Returns:** *void*

___

###  Laplacian

▸ **Laplacian**(`src`: [InputArray](_types_opencv__hacks_.md#inputarray), `dst`: OutputArray, `ddepth`: [int](_types_opencv__hacks_.md#int), `ksize?`: [int](_types_opencv__hacks_.md#int), `scale?`: [double](_types_opencv__hacks_.md#double), `delta?`: [double](_types_opencv__hacks_.md#double), `borderType?`: [int](_types_opencv__hacks_.md#int)): *void*

*Defined in [types/opencv/imgproc_filter.ts:371](https://github.com/cancerberoSgx/mirada/blob/e7b5ae6/mirada/src/types/opencv/imgproc_filter.ts#L371)*

The function calculates the Laplacian of the source image by adding up the second x and y
derivatives calculated using the Sobel operator:

`\\[\\texttt{dst} = \\Delta \\texttt{src} = \\frac{\\partial^2 \\texttt{src}}{\\partial x^2} +
\\frac{\\partial^2 \\texttt{src}}{\\partial y^2}\\]`

This is done when `ksize > 1`. When `ksize == 1`, the Laplacian is computed by filtering the image
with the following `$3 \\times 3$` aperture:

`\\[\\vecthreethree {0}{1}{0}{1}{-4}{1}{0}{1}{0}\\]`

[Sobel], [Scharr]

**Parameters:**

Name | Type | Description |
------ | ------ | ------ |
`src` | [InputArray](_types_opencv__hacks_.md#inputarray) | Source image.  |
`dst` | OutputArray | Destination image of the same size and the same number of channels as src .  |
`ddepth` | [int](_types_opencv__hacks_.md#int) | Desired depth of the destination image.  |
`ksize?` | [int](_types_opencv__hacks_.md#int) | Aperture size used to compute the second-derivative filters. See getDerivKernels for details. The size must be positive and odd.  |
`scale?` | [double](_types_opencv__hacks_.md#double) | Optional scale factor for the computed Laplacian values. By default, no scaling is applied. See getDerivKernels for details.  |
`delta?` | [double](_types_opencv__hacks_.md#double) | Optional delta value that is added to the results prior to storing them in dst .  |
`borderType?` | [int](_types_opencv__hacks_.md#int) | Pixel extrapolation method, see BorderTypes  |

**Returns:** *void*

___

###  Scharr

▸ **Scharr**(`src`: [InputArray](_types_opencv__hacks_.md#inputarray), `dst`: OutputArray, `ddepth`: [int](_types_opencv__hacks_.md#int), `dx`: [int](_types_opencv__hacks_.md#int), `dy`: [int](_types_opencv__hacks_.md#int), `scale?`: [double](_types_opencv__hacks_.md#double), `delta?`: [double](_types_opencv__hacks_.md#double), `borderType?`: [int](_types_opencv__hacks_.md#int)): *void*

*Defined in [types/opencv/imgproc_filter.ts:547](https://github.com/cancerberoSgx/mirada/blob/e7b5ae6/mirada/src/types/opencv/imgproc_filter.ts#L547)*

The function computes the first x- or y- spatial image derivative using the Scharr operator. The
call

`\\[\\texttt{Scharr(src, dst, ddepth, dx, dy, scale, delta, borderType)}\\]`

is equivalent to

`\\[\\texttt{Sobel(src, dst, ddepth, dx, dy, FILTER_SCHARR, scale, delta, borderType)} .\\]`

[cartToPolar]

**Parameters:**

Name | Type | Description |
------ | ------ | ------ |
`src` | [InputArray](_types_opencv__hacks_.md#inputarray) | input image.  |
`dst` | OutputArray | output image of the same size and the same number of channels as src.  |
`ddepth` | [int](_types_opencv__hacks_.md#int) | output image depth, see combinations  |
`dx` | [int](_types_opencv__hacks_.md#int) | order of the derivative x.  |
`dy` | [int](_types_opencv__hacks_.md#int) | order of the derivative y.  |
`scale?` | [double](_types_opencv__hacks_.md#double) | optional scale factor for the computed derivative values; by default, no scaling is applied (see getDerivKernels for details).  |
`delta?` | [double](_types_opencv__hacks_.md#double) | optional delta value that is added to the results prior to storing them in dst.  |
`borderType?` | [int](_types_opencv__hacks_.md#int) | pixel extrapolation method, see BorderTypes  |

**Returns:** *void*

___

###  Sobel

▸ **Sobel**(`src`: [InputArray](_types_opencv__hacks_.md#inputarray), `dst`: OutputArray, `ddepth`: [int](_types_opencv__hacks_.md#int), `dx`: [int](_types_opencv__hacks_.md#int), `dy`: [int](_types_opencv__hacks_.md#int), `ksize?`: [int](_types_opencv__hacks_.md#int), `scale?`: [double](_types_opencv__hacks_.md#double), `delta?`: [double](_types_opencv__hacks_.md#double), `borderType?`: [int](_types_opencv__hacks_.md#int)): *void*

*Defined in [types/opencv/imgproc_filter.ts:627](https://github.com/cancerberoSgx/mirada/blob/e7b5ae6/mirada/src/types/opencv/imgproc_filter.ts#L627)*

In all cases except one, the `$\\texttt{ksize} \\times \\texttt{ksize}$` separable kernel is used to
calculate the derivative. When `$\\texttt{ksize = 1}$`, the `$3 \\times 1$` or `$1 \\times 3$`
kernel is used (that is, no Gaussian smoothing is done). `ksize = 1` can only be used for the first
or the second x- or y- derivatives.

There is also the special value `ksize = [FILTER_SCHARR] (-1)` that corresponds to the `$3\\times3$`
Scharr filter that may give more accurate results than the `$3\\times3$` Sobel. The Scharr aperture
is

`\\[\\vecthreethree{-3}{0}{3}{-10}{0}{10}{-3}{0}{3}\\]`

for the x-derivative, or transposed for the y-derivative.

The function calculates an image derivative by convolving the image with the appropriate kernel:

`\\[\\texttt{dst} = \\frac{\\partial^{xorder+yorder} \\texttt{src}}{\\partial x^{xorder} \\partial
y^{yorder}}\\]`

The Sobel operators combine Gaussian smoothing and differentiation, so the result is more or less
resistant to the noise. Most often, the function is called with ( xorder = 1, yorder = 0, ksize = 3)
or ( xorder = 0, yorder = 1, ksize = 3) to calculate the first x- or y- image derivative. The first
case corresponds to a kernel of:

`\\[\\vecthreethree{-1}{0}{1}{-2}{0}{2}{-1}{0}{1}\\]`

The second case corresponds to a kernel of:

`\\[\\vecthreethree{-1}{-2}{-1}{0}{0}{0}{1}{2}{1}\\]`

[Scharr], [Laplacian], [sepFilter2D], [filter2D], [GaussianBlur], [cartToPolar]

**Parameters:**

Name | Type | Description |
------ | ------ | ------ |
`src` | [InputArray](_types_opencv__hacks_.md#inputarray) | input image.  |
`dst` | OutputArray | output image of the same size and the same number of channels as src .  |
`ddepth` | [int](_types_opencv__hacks_.md#int) | output image depth, see combinations; in the case of 8-bit input images it will result in truncated derivatives.  |
`dx` | [int](_types_opencv__hacks_.md#int) | order of the derivative x.  |
`dy` | [int](_types_opencv__hacks_.md#int) | order of the derivative y.  |
`ksize?` | [int](_types_opencv__hacks_.md#int) | size of the extended Sobel kernel; it must be 1, 3, 5, or 7.  |
`scale?` | [double](_types_opencv__hacks_.md#double) | optional scale factor for the computed derivative values; by default, no scaling is applied (see getDerivKernels for details).  |
`delta?` | [double](_types_opencv__hacks_.md#double) | optional delta value that is added to the results prior to storing them in dst.  |
`borderType?` | [int](_types_opencv__hacks_.md#int) | pixel extrapolation method, see BorderTypes  |

**Returns:** *void*

___

###  bilateralFilter

▸ **bilateralFilter**(`src`: [InputArray](_types_opencv__hacks_.md#inputarray), `dst`: OutputArray, `d`: [int](_types_opencv__hacks_.md#int), `sigmaColor`: [double](_types_opencv__hacks_.md#double), `sigmaSpace`: [double](_types_opencv__hacks_.md#double), `borderType?`: [int](_types_opencv__hacks_.md#int)): *void*

*Defined in [types/opencv/imgproc_filter.ts:53](https://github.com/cancerberoSgx/mirada/blob/e7b5ae6/mirada/src/types/opencv/imgproc_filter.ts#L53)*

The function applies bilateral filtering to the input image, as described in  bilateralFilter can
reduce unwanted noise very well while keeping edges fairly sharp. However, it is very slow compared
to most filters.

Sigma values*: For simplicity, you can set the 2 sigma values to be the same. If they are small (<
10), the filter will not have much effect, whereas if they are large (> 150), they will have a very
strong effect, making the image look "cartoonish".

Filter size*: Large filters (d > 5) are very slow, so it is recommended to use d=5 for real-time
applications, and perhaps d=9 for offline applications that need heavy noise filtering.

This filter does not work inplace.

**Parameters:**

Name | Type | Description |
------ | ------ | ------ |
`src` | [InputArray](_types_opencv__hacks_.md#inputarray) | Source 8-bit or floating-point, 1-channel or 3-channel image.  |
`dst` | OutputArray | Destination image of the same size and type as src .  |
`d` | [int](_types_opencv__hacks_.md#int) | Diameter of each pixel neighborhood that is used during filtering. If it is non-positive, it is computed from sigmaSpace.  |
`sigmaColor` | [double](_types_opencv__hacks_.md#double) | Filter sigma in the color space. A larger value of the parameter means that farther colors within the pixel neighborhood (see sigmaSpace) will be mixed together, resulting in larger areas of semi-equal color.  |
`sigmaSpace` | [double](_types_opencv__hacks_.md#double) | Filter sigma in the coordinate space. A larger value of the parameter means that farther pixels will influence each other as long as their colors are close enough (see sigmaColor ). When d>0, it specifies the neighborhood size regardless of sigmaSpace. Otherwise, d is proportional to sigmaSpace.  |
`borderType?` | [int](_types_opencv__hacks_.md#int) | border mode used to extrapolate pixels outside of the image, see BorderTypes  |

**Returns:** *void*

___

###  blur

▸ **blur**(`src`: [InputArray](_types_opencv__hacks_.md#inputarray), `dst`: OutputArray, `ksize`: [Size](../classes/_types_opencv__hacks_.size.md), `anchor?`: [Point](../classes/_types_opencv__hacks_.point.md), `borderType?`: [int](_types_opencv__hacks_.md#int)): *void*

*Defined in [types/opencv/imgproc_filter.ts:79](https://github.com/cancerberoSgx/mirada/blob/e7b5ae6/mirada/src/types/opencv/imgproc_filter.ts#L79)*

The function smooths an image using the kernel:

`\\[\\texttt{K} = \\frac{1}{\\texttt{ksize.width*ksize.height}} \\begin{bmatrix} 1 & 1 & 1 & \\cdots
& 1 & 1 \\\\ 1 & 1 & 1 & \\cdots & 1 & 1 \\\\ \\hdotsfor{6} \\\\ 1 & 1 & 1 & \\cdots & 1 & 1 \\\\
\\end{bmatrix}\\]`

The call `blur(src, dst, ksize, anchor, borderType)` is equivalent to `boxFilter(src, dst,
src.type(), anchor, true, borderType)`.

[boxFilter], [bilateralFilter], [GaussianBlur], [medianBlur]

**Parameters:**

Name | Type | Description |
------ | ------ | ------ |
`src` | [InputArray](_types_opencv__hacks_.md#inputarray) | input image; it can have any number of channels, which are processed independently, but the depth should be CV_8U, CV_16U, CV_16S, CV_32F or CV_64F.  |
`dst` | OutputArray | output image of the same size and type as src.  |
`ksize` | [Size](../classes/_types_opencv__hacks_.size.md) | blurring kernel size.  |
`anchor?` | [Point](../classes/_types_opencv__hacks_.point.md) | anchor point; default value Point(-1,-1) means that the anchor is at the kernel center.  |
`borderType?` | [int](_types_opencv__hacks_.md#int) | border mode used to extrapolate pixels outside of the image, see BorderTypes  |

**Returns:** *void*

___

###  boxFilter

▸ **boxFilter**(`src`: [InputArray](_types_opencv__hacks_.md#inputarray), `dst`: OutputArray, `ddepth`: [int](_types_opencv__hacks_.md#int), `ksize`: [Size](../classes/_types_opencv__hacks_.size.md), `anchor?`: [Point](../classes/_types_opencv__hacks_.point.md), `normalize?`: [bool](_types_opencv__hacks_.md#bool), `borderType?`: [int](_types_opencv__hacks_.md#int)): *void*

*Defined in [types/opencv/imgproc_filter.ts:114](https://github.com/cancerberoSgx/mirada/blob/e7b5ae6/mirada/src/types/opencv/imgproc_filter.ts#L114)*

The function smooths an image using the kernel:

`\\[\\texttt{K} = \\alpha \\begin{bmatrix} 1 & 1 & 1 & \\cdots & 1 & 1 \\\\ 1 & 1 & 1 & \\cdots & 1
& 1 \\\\ \\hdotsfor{6} \\\\ 1 & 1 & 1 & \\cdots & 1 & 1 \\end{bmatrix}\\]`

where

`\\[\\alpha = \\fork{\\frac{1}{\\texttt{ksize.width*ksize.height}}}{when
\\texttt{normalize=true}}{1}{otherwise}\\]`

Unnormalized box filter is useful for computing various integral characteristics over each pixel
neighborhood, such as covariance matrices of image derivatives (used in dense optical flow
algorithms, and so on). If you need to compute pixel sums over variable-size windows, use
[integral].

[blur], [bilateralFilter], [GaussianBlur], [medianBlur], [integral]

**Parameters:**

Name | Type | Description |
------ | ------ | ------ |
`src` | [InputArray](_types_opencv__hacks_.md#inputarray) | input image.  |
`dst` | OutputArray | output image of the same size and type as src.  |
`ddepth` | [int](_types_opencv__hacks_.md#int) | the output image depth (-1 to use src.depth()).  |
`ksize` | [Size](../classes/_types_opencv__hacks_.size.md) | blurring kernel size.  |
`anchor?` | [Point](../classes/_types_opencv__hacks_.point.md) | anchor point; default value Point(-1,-1) means that the anchor is at the kernel center.  |
`normalize?` | [bool](_types_opencv__hacks_.md#bool) | flag, specifying whether the kernel is normalized by its area or not.  |
`borderType?` | [int](_types_opencv__hacks_.md#int) | border mode used to extrapolate pixels outside of the image, see BorderTypes  |

**Returns:** *void*

___

###  buildPyramid

▸ **buildPyramid**(`src`: [InputArray](_types_opencv__hacks_.md#inputarray), `dst`: OutputArrayOfArrays, `maxlevel`: [int](_types_opencv__hacks_.md#int), `borderType?`: [int](_types_opencv__hacks_.md#int)): *void*

*Defined in [types/opencv/imgproc_filter.ts:129](https://github.com/cancerberoSgx/mirada/blob/e7b5ae6/mirada/src/types/opencv/imgproc_filter.ts#L129)*

The function constructs a vector of images and builds the Gaussian pyramid by recursively applying
pyrDown to the previously built pyramid layers, starting from `dst[0]==src`.

**Parameters:**

Name | Type | Description |
------ | ------ | ------ |
`src` | [InputArray](_types_opencv__hacks_.md#inputarray) | Source image. Check pyrDown for the list of supported types.  |
`dst` | OutputArrayOfArrays | Destination vector of maxlevel+1 images of the same type as src. dst[0] will be the same as src. dst[1] is the next pyramid layer, a smoothed and down-sized src, and so on.  |
`maxlevel` | [int](_types_opencv__hacks_.md#int) | 0-based index of the last (the smallest) pyramid layer. It must be non-negative.  |
`borderType?` | [int](_types_opencv__hacks_.md#int) | Pixel extrapolation method, see BorderTypes (BORDER_CONSTANT isn't supported)  |

**Returns:** *void*

___

###  dilate

▸ **dilate**(`src`: [InputArray](_types_opencv__hacks_.md#inputarray), `dst`: OutputArray, `kernel`: [InputArray](_types_opencv__hacks_.md#inputarray), `anchor?`: [Point](../classes/_types_opencv__hacks_.point.md), `iterations?`: [int](_types_opencv__hacks_.md#int), `borderType?`: [int](_types_opencv__hacks_.md#int), `borderValue?`: any): *void*

*Defined in [types/opencv/imgproc_filter.ts:158](https://github.com/cancerberoSgx/mirada/blob/e7b5ae6/mirada/src/types/opencv/imgproc_filter.ts#L158)*

The function dilates the source image using the specified structuring element that determines the
shape of a pixel neighborhood over which the maximum is taken: `\\[\\texttt{dst} (x,y) = \\max
_{(x',y'): \\, \\texttt{element} (x',y') \\ne0 } \\texttt{src} (x+x',y+y')\\]`

The function supports the in-place mode. Dilation can be applied several ( iterations ) times. In
case of multi-channel images, each channel is processed independently.

[erode], [morphologyEx], [getStructuringElement]

**Parameters:**

Name | Type | Description |
------ | ------ | ------ |
`src` | [InputArray](_types_opencv__hacks_.md#inputarray) | input image; the number of channels can be arbitrary, but the depth should be one of CV_8U, CV_16U, CV_16S, CV_32F or CV_64F.  |
`dst` | OutputArray | output image of the same size and type as src.  |
`kernel` | [InputArray](_types_opencv__hacks_.md#inputarray) | structuring element used for dilation; if elemenat=Mat(), a 3 x 3 rectangular structuring element is used. Kernel can be created using getStructuringElement  |
`anchor?` | [Point](../classes/_types_opencv__hacks_.point.md) | position of the anchor within the element; default value (-1, -1) means that the anchor is at the element center.  |
`iterations?` | [int](_types_opencv__hacks_.md#int) | number of times dilation is applied.  |
`borderType?` | [int](_types_opencv__hacks_.md#int) | pixel extrapolation method, see BorderTypes  |
`borderValue?` | any | border value in case of a constant border  |

**Returns:** *void*

___

###  erode

▸ **erode**(`src`: [InputArray](_types_opencv__hacks_.md#inputarray), `dst`: OutputArray, `kernel`: [InputArray](_types_opencv__hacks_.md#inputarray), `anchor?`: [Point](../classes/_types_opencv__hacks_.point.md), `iterations?`: [int](_types_opencv__hacks_.md#int), `borderType?`: [int](_types_opencv__hacks_.md#int), `borderValue?`: any): *void*

*Defined in [types/opencv/imgproc_filter.ts:189](https://github.com/cancerberoSgx/mirada/blob/e7b5ae6/mirada/src/types/opencv/imgproc_filter.ts#L189)*

The function erodes the source image using the specified structuring element that determines the
shape of a pixel neighborhood over which the minimum is taken:

`\\[\\texttt{dst} (x,y) = \\min _{(x',y'): \\, \\texttt{element} (x',y') \\ne0 } \\texttt{src}
(x+x',y+y')\\]`

The function supports the in-place mode. Erosion can be applied several ( iterations ) times. In
case of multi-channel images, each channel is processed independently.

[dilate], [morphologyEx], [getStructuringElement]

**Parameters:**

Name | Type | Description |
------ | ------ | ------ |
`src` | [InputArray](_types_opencv__hacks_.md#inputarray) | input image; the number of channels can be arbitrary, but the depth should be one of CV_8U, CV_16U, CV_16S, CV_32F or CV_64F.  |
`dst` | OutputArray | output image of the same size and type as src.  |
`kernel` | [InputArray](_types_opencv__hacks_.md#inputarray) | structuring element used for erosion; if element=Mat(), a 3 x 3 rectangular structuring element is used. Kernel can be created using getStructuringElement.  |
`anchor?` | [Point](../classes/_types_opencv__hacks_.point.md) | position of the anchor within the element; default value (-1, -1) means that the anchor is at the element center.  |
`iterations?` | [int](_types_opencv__hacks_.md#int) | number of times erosion is applied.  |
`borderType?` | [int](_types_opencv__hacks_.md#int) | pixel extrapolation method, see BorderTypes  |
`borderValue?` | any | border value in case of a constant border  |

**Returns:** *void*

___

###  filter2D

▸ **filter2D**(`src`: [InputArray](_types_opencv__hacks_.md#inputarray), `dst`: OutputArray, `ddepth`: [int](_types_opencv__hacks_.md#int), `kernel`: [InputArray](_types_opencv__hacks_.md#inputarray), `anchor?`: [Point](../classes/_types_opencv__hacks_.point.md), `delta?`: [double](_types_opencv__hacks_.md#double), `borderType?`: [int](_types_opencv__hacks_.md#int)): *void*

*Defined in [types/opencv/imgproc_filter.ts:229](https://github.com/cancerberoSgx/mirada/blob/e7b5ae6/mirada/src/types/opencv/imgproc_filter.ts#L229)*

The function applies an arbitrary linear filter to an image. In-place operation is supported. When
the aperture is partially outside the image, the function interpolates outlier pixel values
according to the specified border mode.

The function does actually compute correlation, not the convolution:

`\\[\\texttt{dst} (x,y) = \\sum _{ \\stackrel{0\\leq x' < \\texttt{kernel.cols},}{0\\leq y' <
\\texttt{kernel.rows}} } \\texttt{kernel} (x',y')* \\texttt{src} (x+x'- \\texttt{anchor.x} ,y+y'-
\\texttt{anchor.y} )\\]`

That is, the kernel is not mirrored around the anchor point. If you need a real convolution, flip
the kernel using [flip] and set the new anchor to `(kernel.cols - anchor.x - 1, kernel.rows -
anchor.y - 1)`.

The function uses the DFT-based algorithm in case of sufficiently large kernels (~`11 x 11` or
larger) and the direct algorithm for small kernels.

[sepFilter2D], [dft], [matchTemplate]

**Parameters:**

Name | Type | Description |
------ | ------ | ------ |
`src` | [InputArray](_types_opencv__hacks_.md#inputarray) | input image.  |
`dst` | OutputArray | output image of the same size and the same number of channels as src.  |
`ddepth` | [int](_types_opencv__hacks_.md#int) | desired depth of the destination image, see combinations  |
`kernel` | [InputArray](_types_opencv__hacks_.md#inputarray) | convolution kernel (or rather a correlation kernel), a single-channel floating point matrix; if you want to apply different kernels to different channels, split the image into separate color planes using split and process them individually.  |
`anchor?` | [Point](../classes/_types_opencv__hacks_.point.md) | anchor of the kernel that indicates the relative position of a filtered point within the kernel; the anchor should lie within the kernel; default value (-1,-1) means that the anchor is at the kernel center.  |
`delta?` | [double](_types_opencv__hacks_.md#double) | optional value added to the filtered pixels before storing them in dst.  |
`borderType?` | [int](_types_opencv__hacks_.md#int) | pixel extrapolation method, see BorderTypes  |

**Returns:** *void*

___

###  getDerivKernels

▸ **getDerivKernels**(`kx`: OutputArray, `ky`: OutputArray, `dx`: [int](_types_opencv__hacks_.md#int), `dy`: [int](_types_opencv__hacks_.md#int), `ksize`: [int](_types_opencv__hacks_.md#int), `normalize?`: [bool](_types_opencv__hacks_.md#bool), `ktype?`: [int](_types_opencv__hacks_.md#int)): *void*

*Defined in [types/opencv/imgproc_filter.ts:280](https://github.com/cancerberoSgx/mirada/blob/e7b5ae6/mirada/src/types/opencv/imgproc_filter.ts#L280)*

The function computes and returns the filter coefficients for spatial image derivatives. When
`ksize=FILTER_SCHARR`, the Scharr `$3 \\times 3$` kernels are generated (see [Scharr]). Otherwise,
Sobel kernels are generated (see [Sobel]). The filters are normally passed to [sepFilter2D] or to

**Parameters:**

Name | Type | Description |
------ | ------ | ------ |
`kx` | OutputArray | Output matrix of row filter coefficients. It has the type ktype .  |
`ky` | OutputArray | Output matrix of column filter coefficients. It has the type ktype .  |
`dx` | [int](_types_opencv__hacks_.md#int) | Derivative order in respect of x.  |
`dy` | [int](_types_opencv__hacks_.md#int) | Derivative order in respect of y.  |
`ksize` | [int](_types_opencv__hacks_.md#int) | Aperture size. It can be FILTER_SCHARR, 1, 3, 5, or 7.  |
`normalize?` | [bool](_types_opencv__hacks_.md#bool) | Flag indicating whether to normalize (scale down) the filter coefficients or not. Theoretically, the coefficients should have the denominator $=2^{ksize*2-dx-dy-2}$. If you are going to filter floating-point images, you are likely to use the normalized kernels. But if you compute derivatives of an 8-bit image, store the results in a 16-bit image, and wish to preserve all the fractional bits, you may want to set normalize=false .  |
`ktype?` | [int](_types_opencv__hacks_.md#int) | Type of filter coefficients. It can be CV_32f or CV_64F .  |

**Returns:** *void*

___

###  getGaborKernel

▸ **getGaborKernel**(`ksize`: [Size](../classes/_types_opencv__hacks_.size.md), `sigma`: [double](_types_opencv__hacks_.md#double), `theta`: [double](_types_opencv__hacks_.md#double), `lambd`: [double](_types_opencv__hacks_.md#double), `gamma`: [double](_types_opencv__hacks_.md#double), `psi?`: [double](_types_opencv__hacks_.md#double), `ktype?`: [int](_types_opencv__hacks_.md#int)): *[Mat](../classes/_types_opencv_mat_.mat.md)*

*Defined in [types/opencv/imgproc_filter.ts:299](https://github.com/cancerberoSgx/mirada/blob/e7b5ae6/mirada/src/types/opencv/imgproc_filter.ts#L299)*

For more details about gabor filter equations and parameters, see: .

**Parameters:**

Name | Type | Description |
------ | ------ | ------ |
`ksize` | [Size](../classes/_types_opencv__hacks_.size.md) | Size of the filter returned.  |
`sigma` | [double](_types_opencv__hacks_.md#double) | Standard deviation of the gaussian envelope.  |
`theta` | [double](_types_opencv__hacks_.md#double) | Orientation of the normal to the parallel stripes of a Gabor function.  |
`lambd` | [double](_types_opencv__hacks_.md#double) | Wavelength of the sinusoidal factor.  |
`gamma` | [double](_types_opencv__hacks_.md#double) | Spatial aspect ratio.  |
`psi?` | [double](_types_opencv__hacks_.md#double) | Phase offset.  |
`ktype?` | [int](_types_opencv__hacks_.md#int) | Type of filter coefficients. It can be CV_32F or CV_64F .  |

**Returns:** *[Mat](../classes/_types_opencv_mat_.mat.md)*

___

###  getGaussianKernel

▸ **getGaussianKernel**(`ksize`: [int](_types_opencv__hacks_.md#int), `sigma`: [double](_types_opencv__hacks_.md#double), `ktype?`: [int](_types_opencv__hacks_.md#int)): *[Mat](../classes/_types_opencv_mat_.mat.md)*

*Defined in [types/opencv/imgproc_filter.ts:323](https://github.com/cancerberoSgx/mirada/blob/e7b5ae6/mirada/src/types/opencv/imgproc_filter.ts#L323)*

The function computes and returns the `$\\texttt{ksize} \\times 1$` matrix of Gaussian filter
coefficients:

`\\[G_i= \\alpha *e^{-(i-( \\texttt{ksize} -1)/2)^2/(2* \\texttt{sigma}^2)},\\]`

where `$i=0..\\texttt{ksize}-1$` and `$\\alpha$` is the scale factor chosen so that `$\\sum_i
G_i=1$`.

Two of such generated kernels can be passed to sepFilter2D. Those functions automatically recognize
smoothing kernels (a symmetrical kernel with sum of weights equal to 1) and handle them accordingly.
You may also use the higher-level GaussianBlur.

[sepFilter2D], [getDerivKernels], [getStructuringElement], [GaussianBlur]

**Parameters:**

Name | Type | Description |
------ | ------ | ------ |
`ksize` | [int](_types_opencv__hacks_.md#int) | Aperture size. It should be odd ( $\texttt{ksize} \mod 2 = 1$ ) and positive.  |
`sigma` | [double](_types_opencv__hacks_.md#double) | Gaussian standard deviation. If it is non-positive, it is computed from ksize as sigma = 0.3*((ksize-1)*0.5 - 1) + 0.8.  |
`ktype?` | [int](_types_opencv__hacks_.md#int) | Type of filter coefficients. It can be CV_32F or CV_64F .  |

**Returns:** *[Mat](../classes/_types_opencv_mat_.mat.md)*

___

###  getStructuringElement

▸ **getStructuringElement**(`shape`: [int](_types_opencv__hacks_.md#int), `ksize`: [Size](../classes/_types_opencv__hacks_.size.md), `anchor?`: [Point](../classes/_types_opencv__hacks_.point.md)): *[Mat](../classes/_types_opencv_mat_.mat.md)*

*Defined in [types/opencv/imgproc_filter.ts:339](https://github.com/cancerberoSgx/mirada/blob/e7b5ae6/mirada/src/types/opencv/imgproc_filter.ts#L339)*

The function constructs and returns the structuring element that can be further passed to [erode],
[dilate] or [morphologyEx]. But you can also construct an arbitrary binary mask yourself and use it
as the structuring element.

**Parameters:**

Name | Type | Description |
------ | ------ | ------ |
`shape` | [int](_types_opencv__hacks_.md#int) | Element shape that could be one of MorphShapes  |
`ksize` | [Size](../classes/_types_opencv__hacks_.size.md) | Size of the structuring element.  |
`anchor?` | [Point](../classes/_types_opencv__hacks_.point.md) | Anchor position within the element. The default value $(-1, -1)$ means that the anchor is at the center. Note that only the shape of a cross-shaped element depends on the anchor position. In other cases the anchor just regulates how much the result of the morphological operation is shifted.  |

**Returns:** *[Mat](../classes/_types_opencv_mat_.mat.md)*

___

###  medianBlur

▸ **medianBlur**(`src`: [InputArray](_types_opencv__hacks_.md#inputarray), `dst`: OutputArray, `ksize`: [int](_types_opencv__hacks_.md#int)): *void*

*Defined in [types/opencv/imgproc_filter.ts:389](https://github.com/cancerberoSgx/mirada/blob/e7b5ae6/mirada/src/types/opencv/imgproc_filter.ts#L389)*

The function smoothes an image using the median filter with the `$\\texttt{ksize} \\times
\\texttt{ksize}$` aperture. Each channel of a multi-channel image is processed independently.
In-place operation is supported.

The median filter uses [BORDER_REPLICATE] internally to cope with border pixels, see [BorderTypes]

[bilateralFilter], [blur], [boxFilter], [GaussianBlur]

**Parameters:**

Name | Type | Description |
------ | ------ | ------ |
`src` | [InputArray](_types_opencv__hacks_.md#inputarray) | input 1-, 3-, or 4-channel image; when ksize is 3 or 5, the image depth should be CV_8U, CV_16U, or CV_32F, for larger aperture sizes, it can only be CV_8U.  |
`dst` | OutputArray | destination array of the same size and type as src.  |
`ksize` | [int](_types_opencv__hacks_.md#int) | aperture linear size; it must be odd and greater than 1, for example: 3, 5, 7 ...  |

**Returns:** *void*

___

###  morphologyDefaultBorderValue

▸ **morphologyDefaultBorderValue**(): *[Scalar](../classes/_types_opencv__hacks_.scalar.md)*

*Defined in [types/opencv/imgproc_filter.ts:391](https://github.com/cancerberoSgx/mirada/blob/e7b5ae6/mirada/src/types/opencv/imgproc_filter.ts#L391)*

**Returns:** *[Scalar](../classes/_types_opencv__hacks_.scalar.md)*

___

###  morphologyEx

▸ **morphologyEx**(`src`: [InputArray](_types_opencv__hacks_.md#inputarray), `dst`: OutputArray, `op`: [int](_types_opencv__hacks_.md#int), `kernel`: [InputArray](_types_opencv__hacks_.md#inputarray), `anchor?`: [Point](../classes/_types_opencv__hacks_.point.md), `iterations?`: [int](_types_opencv__hacks_.md#int), `borderType?`: [int](_types_opencv__hacks_.md#int), `borderValue?`: any): *void*

*Defined in [types/opencv/imgproc_filter.ts:425](https://github.com/cancerberoSgx/mirada/blob/e7b5ae6/mirada/src/types/opencv/imgproc_filter.ts#L425)*

The function [cv::morphologyEx] can perform advanced morphological transformations using an erosion
and dilation as basic operations.

Any of the operations can be done in-place. In case of multi-channel images, each channel is
processed independently.

[dilate], [erode], [getStructuringElement]

The number of iterations is the number of times erosion or dilatation operation will be applied. For
instance, an opening operation ([MORPH_OPEN]) with two iterations is equivalent to apply
successively: erode -> erode -> dilate -> dilate (and not erode -> dilate -> erode -> dilate).

**Parameters:**

Name | Type | Description |
------ | ------ | ------ |
`src` | [InputArray](_types_opencv__hacks_.md#inputarray) | Source image. The number of channels can be arbitrary. The depth should be one of CV_8U, CV_16U, CV_16S, CV_32F or CV_64F.  |
`dst` | OutputArray | Destination image of the same size and type as source image.  |
`op` | [int](_types_opencv__hacks_.md#int) | Type of a morphological operation, see MorphTypes  |
`kernel` | [InputArray](_types_opencv__hacks_.md#inputarray) | Structuring element. It can be created using getStructuringElement.  |
`anchor?` | [Point](../classes/_types_opencv__hacks_.point.md) | Anchor position with the kernel. Negative values mean that the anchor is at the kernel center.  |
`iterations?` | [int](_types_opencv__hacks_.md#int) | Number of times erosion and dilation are applied.  |
`borderType?` | [int](_types_opencv__hacks_.md#int) | Pixel extrapolation method, see BorderTypes  |
`borderValue?` | any | Border value in case of a constant border. The default value has a special meaning.  |

**Returns:** *void*

___

###  pyrDown

▸ **pyrDown**(`src`: [InputArray](_types_opencv__hacks_.md#inputarray), `dst`: OutputArray, `dstsize?`: any, `borderType?`: [int](_types_opencv__hacks_.md#int)): *void*

*Defined in [types/opencv/imgproc_filter.ts:450](https://github.com/cancerberoSgx/mirada/blob/e7b5ae6/mirada/src/types/opencv/imgproc_filter.ts#L450)*

By default, size of the output image is computed as `Size((src.cols+1)/2, (src.rows+1)/2)`, but in
any case, the following conditions should be satisfied:

`\\[\\begin{array}{l} | \\texttt{dstsize.width} *2-src.cols| \\leq 2 \\\\ | \\texttt{dstsize.height}
*2-src.rows| \\leq 2 \\end{array}\\]`

The function performs the downsampling step of the Gaussian pyramid construction. First, it
convolves the source image with the kernel:

`\\[\\frac{1}{256} \\begin{bmatrix} 1 & 4 & 6 & 4 & 1 \\\\ 4 & 16 & 24 & 16 & 4 \\\\ 6 & 24 & 36 &
24 & 6 \\\\ 4 & 16 & 24 & 16 & 4 \\\\ 1 & 4 & 6 & 4 & 1 \\end{bmatrix}\\]`

Then, it downsamples the image by rejecting even rows and columns.

**Parameters:**

Name | Type | Description |
------ | ------ | ------ |
`src` | [InputArray](_types_opencv__hacks_.md#inputarray) | input image.  |
`dst` | OutputArray | output image; it has the specified size and the same type as src.  |
`dstsize?` | any | size of the output image.  |
`borderType?` | [int](_types_opencv__hacks_.md#int) | Pixel extrapolation method, see BorderTypes (BORDER_CONSTANT isn't supported)  |

**Returns:** *void*

___

###  pyrMeanShiftFiltering

▸ **pyrMeanShiftFiltering**(`src`: [InputArray](_types_opencv__hacks_.md#inputarray), `dst`: OutputArray, `sp`: [double](_types_opencv__hacks_.md#double), `sr`: [double](_types_opencv__hacks_.md#double), `maxLevel?`: [int](_types_opencv__hacks_.md#int), `termcrit?`: [TermCriteria](../classes/_types_opencv__hacks_.termcriteria.md)): *void*

*Defined in [types/opencv/imgproc_filter.ts:493](https://github.com/cancerberoSgx/mirada/blob/e7b5ae6/mirada/src/types/opencv/imgproc_filter.ts#L493)*

The function implements the filtering stage of meanshift segmentation, that is, the output of the
function is the filtered "posterized" image with color gradients and fine-grain texture flattened.
At every pixel (X,Y) of the input image (or down-sized input image, see below) the function executes
meanshift iterations, that is, the pixel (X,Y) neighborhood in the joint space-color hyperspace is
considered:

`\\[(x,y): X- \\texttt{sp} \\le x \\le X+ \\texttt{sp} , Y- \\texttt{sp} \\le y \\le Y+ \\texttt{sp}
, ||(R,G,B)-(r,g,b)|| \\le \\texttt{sr}\\]`

where (R,G,B) and (r,g,b) are the vectors of color components at (X,Y) and (x,y), respectively
(though, the algorithm does not depend on the color space used, so any 3-component color space can
be used instead). Over the neighborhood the average spatial value (X',Y') and average color vector
(R',G',B') are found and they act as the neighborhood center on the next iteration:

`\\[(X,Y)~(X',Y'), (R,G,B)~(R',G',B').\\]`

After the iterations over, the color components of the initial pixel (that is, the pixel from where
the iterations started) are set to the final value (average color at the last iteration):

`\\[I(X,Y) <- (R*,G*,B*)\\]`

When maxLevel > 0, the gaussian pyramid of maxLevel+1 levels is built, and the above procedure is
run on the smallest layer first. After that, the results are propagated to the larger layer and the
iterations are run again only on those pixels where the layer colors differ by more than sr from the
lower-resolution layer of the pyramid. That makes boundaries of color regions sharper. Note that the
results will be actually different from the ones obtained by running the meanshift procedure on the
whole original image (i.e. when maxLevel==0).

**Parameters:**

Name | Type | Description |
------ | ------ | ------ |
`src` | [InputArray](_types_opencv__hacks_.md#inputarray) | The source 8-bit, 3-channel image.  |
`dst` | OutputArray | The destination image of the same format and the same size as the source.  |
`sp` | [double](_types_opencv__hacks_.md#double) | The spatial window radius.  |
`sr` | [double](_types_opencv__hacks_.md#double) | The color window radius.  |
`maxLevel?` | [int](_types_opencv__hacks_.md#int) | Maximum level of the pyramid for the segmentation.  |
`termcrit?` | [TermCriteria](../classes/_types_opencv__hacks_.termcriteria.md) | Termination criteria: when to stop meanshift iterations.  |

**Returns:** *void*

___

###  pyrUp

▸ **pyrUp**(`src`: [InputArray](_types_opencv__hacks_.md#inputarray), `dst`: OutputArray, `dstsize?`: any, `borderType?`: [int](_types_opencv__hacks_.md#int)): *void*

*Defined in [types/opencv/imgproc_filter.ts:516](https://github.com/cancerberoSgx/mirada/blob/e7b5ae6/mirada/src/types/opencv/imgproc_filter.ts#L516)*

By default, size of the output image is computed as `Size(src.cols\\*2, (src.rows\\*2)`, but in any
case, the following conditions should be satisfied:

`\\[\\begin{array}{l} | \\texttt{dstsize.width} -src.cols*2| \\leq ( \\texttt{dstsize.width} \\mod
2) \\\\ | \\texttt{dstsize.height} -src.rows*2| \\leq ( \\texttt{dstsize.height} \\mod 2)
\\end{array}\\]`

The function performs the upsampling step of the Gaussian pyramid construction, though it can
actually be used to construct the Laplacian pyramid. First, it upsamples the source image by
injecting even zero rows and columns and then convolves the result with the same kernel as in
pyrDown multiplied by 4.

**Parameters:**

Name | Type | Description |
------ | ------ | ------ |
`src` | [InputArray](_types_opencv__hacks_.md#inputarray) | input image.  |
`dst` | OutputArray | output image. It has the specified size and the same type as src .  |
`dstsize?` | any | size of the output image.  |
`borderType?` | [int](_types_opencv__hacks_.md#int) | Pixel extrapolation method, see BorderTypes (only BORDER_DEFAULT is supported)  |

**Returns:** *void*

___

###  sepFilter2D

▸ **sepFilter2D**(`src`: [InputArray](_types_opencv__hacks_.md#inputarray), `dst`: OutputArray, `ddepth`: [int](_types_opencv__hacks_.md#int), `kernelX`: [InputArray](_types_opencv__hacks_.md#inputarray), `kernelY`: [InputArray](_types_opencv__hacks_.md#inputarray), `anchor?`: [Point](../classes/_types_opencv__hacks_.point.md), `delta?`: [double](_types_opencv__hacks_.md#double), `borderType?`: [int](_types_opencv__hacks_.md#int)): *void*

*Defined in [types/opencv/imgproc_filter.ts:573](https://github.com/cancerberoSgx/mirada/blob/e7b5ae6/mirada/src/types/opencv/imgproc_filter.ts#L573)*

The function applies a separable linear filter to the image. That is, first, every row of src is
filtered with the 1D kernel kernelX. Then, every column of the result is filtered with the 1D kernel
kernelY. The final result shifted by delta is stored in dst .

[filter2D], [Sobel], [GaussianBlur], [boxFilter], [blur]

**Parameters:**

Name | Type | Description |
------ | ------ | ------ |
`src` | [InputArray](_types_opencv__hacks_.md#inputarray) | Source image.  |
`dst` | OutputArray | Destination image of the same size and the same number of channels as src .  |
`ddepth` | [int](_types_opencv__hacks_.md#int) | Destination image depth, see combinations  |
`kernelX` | [InputArray](_types_opencv__hacks_.md#inputarray) | Coefficients for filtering each row.  |
`kernelY` | [InputArray](_types_opencv__hacks_.md#inputarray) | Coefficients for filtering each column.  |
`anchor?` | [Point](../classes/_types_opencv__hacks_.point.md) | Anchor position within the kernel. The default value $(-1,-1)$ means that the anchor is at the kernel center.  |
`delta?` | [double](_types_opencv__hacks_.md#double) | Value added to the filtered results before storing them.  |
`borderType?` | [int](_types_opencv__hacks_.md#int) | Pixel extrapolation method, see BorderTypes  |

**Returns:** *void*

___

###  spatialGradient

▸ **spatialGradient**(`src`: [InputArray](_types_opencv__hacks_.md#inputarray), `dx`: OutputArray, `dy`: OutputArray, `ksize?`: [int](_types_opencv__hacks_.md#int), `borderType?`: [int](_types_opencv__hacks_.md#int)): *void*

*Defined in [types/opencv/imgproc_filter.ts:649](https://github.com/cancerberoSgx/mirada/blob/e7b5ae6/mirada/src/types/opencv/imgproc_filter.ts#L649)*

Equivalent to calling:

```cpp
Sobel( src, dx, CV_16SC1, 1, 0, 3 );
Sobel( src, dy, CV_16SC1, 0, 1, 3 );
```

[Sobel]

**Parameters:**

Name | Type | Description |
------ | ------ | ------ |
`src` | [InputArray](_types_opencv__hacks_.md#inputarray) | input image.  |
`dx` | OutputArray | output image with first-order derivative in x.  |
`dy` | OutputArray | output image with first-order derivative in y.  |
`ksize?` | [int](_types_opencv__hacks_.md#int) | size of Sobel kernel. It must be 3.  |
`borderType?` | [int](_types_opencv__hacks_.md#int) | pixel extrapolation method, see BorderTypes  |

**Returns:** *void*

___

###  sqrBoxFilter

▸ **sqrBoxFilter**(`src`: [InputArray](_types_opencv__hacks_.md#inputarray), `dst`: OutputArray, `ddepth`: [int](_types_opencv__hacks_.md#int), `ksize`: [Size](../classes/_types_opencv__hacks_.size.md), `anchor?`: [Point](../classes/_types_opencv__hacks_.point.md), `normalize?`: [bool](_types_opencv__hacks_.md#bool), `borderType?`: [int](_types_opencv__hacks_.md#int)): *void*

*Defined in [types/opencv/imgproc_filter.ts:675](https://github.com/cancerberoSgx/mirada/blob/e7b5ae6/mirada/src/types/opencv/imgproc_filter.ts#L675)*

For every pixel `$ (x, y) $` in the source image, the function calculates the sum of squares of
those neighboring pixel values which overlap the filter placed over the pixel `$ (x, y) $`.

The unnormalized square box filter can be useful in computing local image statistics such as the the
local variance and standard deviation around the neighborhood of a pixel.

[boxFilter]

**Parameters:**

Name | Type | Description |
------ | ------ | ------ |
`src` | [InputArray](_types_opencv__hacks_.md#inputarray) | input image  |
`dst` | OutputArray | output image of the same size and type as _src  |
`ddepth` | [int](_types_opencv__hacks_.md#int) | the output image depth (-1 to use src.depth())  |
`ksize` | [Size](../classes/_types_opencv__hacks_.size.md) | kernel size  |
`anchor?` | [Point](../classes/_types_opencv__hacks_.point.md) | kernel anchor point. The default value of Point(-1, -1) denotes that the anchor is at the kernel center.  |
`normalize?` | [bool](_types_opencv__hacks_.md#bool) | flag, specifying whether the kernel is to be normalized by it's area or not.  |
`borderType?` | [int](_types_opencv__hacks_.md#int) | border mode used to extrapolate pixels outside of the image, see BorderTypes  |

**Returns:** *void*