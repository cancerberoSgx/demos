**[mirada](../README.md)**

[Globals](../README.md) › ["types/opencv/imgproc_transform"](_types_opencv_imgproc_transform_.md)

# External module: "types/opencv/imgproc_transform"

## Index

### Type aliases

* [InterpolationFlags](_types_opencv_imgproc_transform_.md#interpolationflags)
* [InterpolationMasks](_types_opencv_imgproc_transform_.md#interpolationmasks)
* [WarpPolarMode](_types_opencv_imgproc_transform_.md#warppolarmode)

### Variables

* [INTER_AREA](_types_opencv_imgproc_transform_.md#const-inter_area)
* [INTER_BITS](_types_opencv_imgproc_transform_.md#const-inter_bits)
* [INTER_BITS2](_types_opencv_imgproc_transform_.md#const-inter_bits2)
* [INTER_CUBIC](_types_opencv_imgproc_transform_.md#const-inter_cubic)
* [INTER_LANCZOS4](_types_opencv_imgproc_transform_.md#const-inter_lanczos4)
* [INTER_LINEAR](_types_opencv_imgproc_transform_.md#const-inter_linear)
* [INTER_LINEAR_EXACT](_types_opencv_imgproc_transform_.md#const-inter_linear_exact)
* [INTER_MAX](_types_opencv_imgproc_transform_.md#const-inter_max)
* [INTER_NEAREST](_types_opencv_imgproc_transform_.md#const-inter_nearest)
* [INTER_TAB_SIZE](_types_opencv_imgproc_transform_.md#const-inter_tab_size)
* [INTER_TAB_SIZE2](_types_opencv_imgproc_transform_.md#const-inter_tab_size2)
* [WARP_FILL_OUTLIERS](_types_opencv_imgproc_transform_.md#const-warp_fill_outliers)
* [WARP_INVERSE_MAP](_types_opencv_imgproc_transform_.md#const-warp_inverse_map)
* [WARP_POLAR_LINEAR](_types_opencv_imgproc_transform_.md#const-warp_polar_linear)
* [WARP_POLAR_LOG](_types_opencv_imgproc_transform_.md#const-warp_polar_log)

### Functions

* [convertMaps](_types_opencv_imgproc_transform_.md#convertmaps)
* [getAffineTransform](_types_opencv_imgproc_transform_.md#getaffinetransform)
* [getPerspectiveTransform](_types_opencv_imgproc_transform_.md#getperspectivetransform)
* [getRectSubPix](_types_opencv_imgproc_transform_.md#getrectsubpix)
* [getRotationMatrix2D](_types_opencv_imgproc_transform_.md#getrotationmatrix2d)
* [invertAffineTransform](_types_opencv_imgproc_transform_.md#invertaffinetransform)
* [linearPolar](_types_opencv_imgproc_transform_.md#linearpolar)
* [logPolar](_types_opencv_imgproc_transform_.md#logpolar)
* [remap](_types_opencv_imgproc_transform_.md#remap)
* [resize](_types_opencv_imgproc_transform_.md#resize)
* [warpAffine](_types_opencv_imgproc_transform_.md#warpaffine)
* [warpPerspective](_types_opencv_imgproc_transform_.md#warpperspective)
* [warpPolar](_types_opencv_imgproc_transform_.md#warppolar)

## Type aliases

###  InterpolationFlags

Ƭ **InterpolationFlags**: *any*

*Defined in [types/opencv/imgproc_transform.ts:481](https://github.com/cancerberoSgx/mirada/blob/ff42750/mirada/src/types/opencv/imgproc_transform.ts#L481)*

___

###  InterpolationMasks

Ƭ **InterpolationMasks**: *any*

*Defined in [types/opencv/imgproc_transform.ts:483](https://github.com/cancerberoSgx/mirada/blob/ff42750/mirada/src/types/opencv/imgproc_transform.ts#L483)*

___

###  WarpPolarMode

Ƭ **WarpPolarMode**: *any*

*Defined in [types/opencv/imgproc_transform.ts:485](https://github.com/cancerberoSgx/mirada/blob/ff42750/mirada/src/types/opencv/imgproc_transform.ts#L485)*

## Variables

### `Const` INTER_AREA

• **INTER_AREA**: *[InterpolationFlags](_types_opencv_imgproc_transform_.md#interpolationflags)*

*Defined in [types/opencv/imgproc_transform.ts:431](https://github.com/cancerberoSgx/mirada/blob/ff42750/mirada/src/types/opencv/imgproc_transform.ts#L431)*

resampling using pixel area relation. It may be a preferred method for image decimation, as it gives
moire'-free results. But when the image is zoomed, it is similar to the INTER_NEAREST method.

___

### `Const` INTER_BITS

• **INTER_BITS**: *[InterpolationMasks](_types_opencv_imgproc_transform_.md#interpolationmasks)*

*Defined in [types/opencv/imgproc_transform.ts:469](https://github.com/cancerberoSgx/mirada/blob/ff42750/mirada/src/types/opencv/imgproc_transform.ts#L469)*

___

### `Const` INTER_BITS2

• **INTER_BITS2**: *[InterpolationMasks](_types_opencv_imgproc_transform_.md#interpolationmasks)*

*Defined in [types/opencv/imgproc_transform.ts:471](https://github.com/cancerberoSgx/mirada/blob/ff42750/mirada/src/types/opencv/imgproc_transform.ts#L471)*

___

### `Const` INTER_CUBIC

• **INTER_CUBIC**: *[InterpolationFlags](_types_opencv_imgproc_transform_.md#interpolationflags)*

*Defined in [types/opencv/imgproc_transform.ts:424](https://github.com/cancerberoSgx/mirada/blob/ff42750/mirada/src/types/opencv/imgproc_transform.ts#L424)*

bicubic interpolation

___

### `Const` INTER_LANCZOS4

• **INTER_LANCZOS4**: *[InterpolationFlags](_types_opencv_imgproc_transform_.md#interpolationflags)*

*Defined in [types/opencv/imgproc_transform.ts:437](https://github.com/cancerberoSgx/mirada/blob/ff42750/mirada/src/types/opencv/imgproc_transform.ts#L437)*

Lanczos interpolation over 8x8 neighborhood

___

### `Const` INTER_LINEAR

• **INTER_LINEAR**: *[InterpolationFlags](_types_opencv_imgproc_transform_.md#interpolationflags)*

*Defined in [types/opencv/imgproc_transform.ts:418](https://github.com/cancerberoSgx/mirada/blob/ff42750/mirada/src/types/opencv/imgproc_transform.ts#L418)*

bilinear interpolation

___

### `Const` INTER_LINEAR_EXACT

• **INTER_LINEAR_EXACT**: *[InterpolationFlags](_types_opencv_imgproc_transform_.md#interpolationflags)*

*Defined in [types/opencv/imgproc_transform.ts:443](https://github.com/cancerberoSgx/mirada/blob/ff42750/mirada/src/types/opencv/imgproc_transform.ts#L443)*

Bit exact bilinear interpolation

___

### `Const` INTER_MAX

• **INTER_MAX**: *[InterpolationFlags](_types_opencv_imgproc_transform_.md#interpolationflags)*

*Defined in [types/opencv/imgproc_transform.ts:449](https://github.com/cancerberoSgx/mirada/blob/ff42750/mirada/src/types/opencv/imgproc_transform.ts#L449)*

mask for interpolation codes

___

### `Const` INTER_NEAREST

• **INTER_NEAREST**: *[InterpolationFlags](_types_opencv_imgproc_transform_.md#interpolationflags)*

*Defined in [types/opencv/imgproc_transform.ts:412](https://github.com/cancerberoSgx/mirada/blob/ff42750/mirada/src/types/opencv/imgproc_transform.ts#L412)*

nearest neighbor interpolation

___

### `Const` INTER_TAB_SIZE

• **INTER_TAB_SIZE**: *[InterpolationMasks](_types_opencv_imgproc_transform_.md#interpolationmasks)*

*Defined in [types/opencv/imgproc_transform.ts:473](https://github.com/cancerberoSgx/mirada/blob/ff42750/mirada/src/types/opencv/imgproc_transform.ts#L473)*

___

### `Const` INTER_TAB_SIZE2

• **INTER_TAB_SIZE2**: *[InterpolationMasks](_types_opencv_imgproc_transform_.md#interpolationmasks)*

*Defined in [types/opencv/imgproc_transform.ts:475](https://github.com/cancerberoSgx/mirada/blob/ff42750/mirada/src/types/opencv/imgproc_transform.ts#L475)*

___

### `Const` WARP_FILL_OUTLIERS

• **WARP_FILL_OUTLIERS**: *[InterpolationFlags](_types_opencv_imgproc_transform_.md#interpolationflags)*

*Defined in [types/opencv/imgproc_transform.ts:456](https://github.com/cancerberoSgx/mirada/blob/ff42750/mirada/src/types/opencv/imgproc_transform.ts#L456)*

flag, fills all of the destination image pixels. If some of them correspond to outliers in the
source image, they are set to zero

___

### `Const` WARP_INVERSE_MAP

• **WARP_INVERSE_MAP**: *[InterpolationFlags](_types_opencv_imgproc_transform_.md#interpolationflags)*

*Defined in [types/opencv/imgproc_transform.ts:467](https://github.com/cancerberoSgx/mirada/blob/ff42750/mirada/src/types/opencv/imgproc_transform.ts#L467)*

flag, inverse transformation

For example, [linearPolar] or [logPolar] transforms:

flag is **not** set: `$dst( \\rho , \\phi ) = src(x,y)$`
flag is set: `$dst(x,y) = src( \\rho , \\phi )$`

___

### `Const` WARP_POLAR_LINEAR

• **WARP_POLAR_LINEAR**: *[WarpPolarMode](_types_opencv_imgproc_transform_.md#warppolarmode)*

*Defined in [types/opencv/imgproc_transform.ts:477](https://github.com/cancerberoSgx/mirada/blob/ff42750/mirada/src/types/opencv/imgproc_transform.ts#L477)*

___

### `Const` WARP_POLAR_LOG

• **WARP_POLAR_LOG**: *[WarpPolarMode](_types_opencv_imgproc_transform_.md#warppolarmode)*

*Defined in [types/opencv/imgproc_transform.ts:479](https://github.com/cancerberoSgx/mirada/blob/ff42750/mirada/src/types/opencv/imgproc_transform.ts#L479)*

## Functions

###  convertMaps

▸ **convertMaps**(`map1`: InputArray, `map2`: InputArray, `dstmap1`: OutputArray, `dstmap2`: OutputArray, `dstmap1type`: [int](_types_opencv__hacks_.md#int), `nninterpolation?`: [bool](_types_opencv__hacks_.md#bool)): *void*

*Defined in [types/opencv/imgproc_transform.ts:55](https://github.com/cancerberoSgx/mirada/blob/ff42750/mirada/src/types/opencv/imgproc_transform.ts#L55)*

The function converts a pair of maps for remap from one representation to another. The following
options ( (map1.type(), map2.type()) `$\\rightarrow$` (dstmap1.type(), dstmap2.type()) ) are
supported:

`$\\texttt{(CV_32FC1, CV_32FC1)} \\rightarrow \\texttt{(CV_16SC2, CV_16UC1)}$`. This is the most
frequently used conversion operation, in which the original floating-point maps (see remap ) are
converted to a more compact and much faster fixed-point representation. The first output array
contains the rounded coordinates and the second array (created only when nninterpolation=false )
contains indices in the interpolation tables.
`$\\texttt{(CV_32FC2)} \\rightarrow \\texttt{(CV_16SC2, CV_16UC1)}$`. The same as above but the
original maps are stored in one 2-channel matrix.
Reverse conversion. Obviously, the reconstructed floating-point maps will not be exactly the same as
the originals.

[remap], [undistort], [initUndistortRectifyMap]

**Parameters:**

Name | Type | Description |
------ | ------ | ------ |
`map1` | InputArray | The first input map of type CV_16SC2, CV_32FC1, or CV_32FC2 .  |
`map2` | InputArray | The second input map of type CV_16UC1, CV_32FC1, or none (empty matrix), respectively.  |
`dstmap1` | OutputArray | The first output map that has the type dstmap1type and the same size as src .  |
`dstmap2` | OutputArray | The second output map.  |
`dstmap1type` | [int](_types_opencv__hacks_.md#int) | Type of the first output map that should be CV_16SC2, CV_32FC1, or CV_32FC2 .  |
`nninterpolation?` | [bool](_types_opencv__hacks_.md#bool) | Flag indicating whether the fixed-point maps are used for the nearest-neighbor or for a more complex interpolation.  |

**Returns:** *void*

___

###  getAffineTransform

▸ **getAffineTransform**(`src`: any, `dst`: any): *[Mat](../classes/_types_opencv_mat_.mat.md)*

*Defined in [types/opencv/imgproc_transform.ts:73](https://github.com/cancerberoSgx/mirada/blob/ff42750/mirada/src/types/opencv/imgproc_transform.ts#L73)*

The function calculates the `$2 \\times 3$` matrix of an affine transform so that:

`\\[\\begin{bmatrix} x'_i \\\\ y'_i \\end{bmatrix} = \\texttt{map_matrix} \\cdot \\begin{bmatrix}
x_i \\\\ y_i \\\\ 1 \\end{bmatrix}\\]`

where

`\\[dst(i)=(x'_i,y'_i), src(i)=(x_i, y_i), i=0,1,2\\]`

[warpAffine], [transform]

**Parameters:**

Name | Type | Description |
------ | ------ | ------ |
`src` | any | Coordinates of triangle vertices in the source image.  |
`dst` | any | Coordinates of the corresponding triangle vertices in the destination image.  |

**Returns:** *[Mat](../classes/_types_opencv_mat_.mat.md)*

▸ **getAffineTransform**(`src`: InputArray, `dst`: InputArray): *[Mat](../classes/_types_opencv_mat_.mat.md)*

*Defined in [types/opencv/imgproc_transform.ts:75](https://github.com/cancerberoSgx/mirada/blob/ff42750/mirada/src/types/opencv/imgproc_transform.ts#L75)*

**Parameters:**

Name | Type |
------ | ------ |
`src` | InputArray |
`dst` | InputArray |

**Returns:** *[Mat](../classes/_types_opencv_mat_.mat.md)*

___

###  getPerspectiveTransform

▸ **getPerspectiveTransform**(`src`: InputArray, `dst`: InputArray, `solveMethod?`: [int](_types_opencv__hacks_.md#int)): *[Mat](../classes/_types_opencv_mat_.mat.md)*

*Defined in [types/opencv/imgproc_transform.ts:95](https://github.com/cancerberoSgx/mirada/blob/ff42750/mirada/src/types/opencv/imgproc_transform.ts#L95)*

The function calculates the `$3 \\times 3$` matrix of a perspective transform so that:

`\\[\\begin{bmatrix} t_i x'_i \\\\ t_i y'_i \\\\ t_i \\end{bmatrix} = \\texttt{map_matrix} \\cdot
\\begin{bmatrix} x_i \\\\ y_i \\\\ 1 \\end{bmatrix}\\]`

where

`\\[dst(i)=(x'_i,y'_i), src(i)=(x_i, y_i), i=0,1,2,3\\]`

[findHomography], [warpPerspective], [perspectiveTransform]

**Parameters:**

Name | Type | Description |
------ | ------ | ------ |
`src` | InputArray | Coordinates of quadrangle vertices in the source image.  |
`dst` | InputArray | Coordinates of the corresponding quadrangle vertices in the destination image.  |
`solveMethod?` | [int](_types_opencv__hacks_.md#int) | method passed to cv::solve (DecompTypes)  |

**Returns:** *[Mat](../classes/_types_opencv_mat_.mat.md)*

▸ **getPerspectiveTransform**(`src`: any, `dst`: any, `solveMethod?`: [int](_types_opencv__hacks_.md#int)): *[Mat](../classes/_types_opencv_mat_.mat.md)*

*Defined in [types/opencv/imgproc_transform.ts:101](https://github.com/cancerberoSgx/mirada/blob/ff42750/mirada/src/types/opencv/imgproc_transform.ts#L101)*

This is an overloaded member function, provided for convenience. It differs from the above function
only in what argument(s) it accepts.

**Parameters:**

Name | Type |
------ | ------ |
`src` | any |
`dst` | any |
`solveMethod?` | [int](_types_opencv__hacks_.md#int) |

**Returns:** *[Mat](../classes/_types_opencv_mat_.mat.md)*

___

###  getRectSubPix

▸ **getRectSubPix**(`image`: InputArray, `patchSize`: [Size](../classes/_types_opencv__hacks_.size.md), `center`: Point2f, `patch`: OutputArray, `patchType?`: [int](_types_opencv__hacks_.md#int)): *void*

*Defined in [types/opencv/imgproc_transform.ts:127](https://github.com/cancerberoSgx/mirada/blob/ff42750/mirada/src/types/opencv/imgproc_transform.ts#L127)*

The function getRectSubPix extracts pixels from src:

`\\[patch(x, y) = src(x + \\texttt{center.x} - ( \\texttt{dst.cols} -1)*0.5, y + \\texttt{center.y}
- ( \\texttt{dst.rows} -1)*0.5)\\]`

where the values of the pixels at non-integer coordinates are retrieved using bilinear
interpolation. Every channel of multi-channel images is processed independently. Also the image
should be a single channel or three channel image. While the center of the rectangle must be inside
the image, parts of the rectangle may be outside.

[warpAffine], [warpPerspective]

**Parameters:**

Name | Type | Description |
------ | ------ | ------ |
`image` | InputArray | Source image.  |
`patchSize` | [Size](../classes/_types_opencv__hacks_.size.md) | Size of the extracted patch.  |
`center` | Point2f | Floating point coordinates of the center of the extracted rectangle within the source image. The center must be inside the image.  |
`patch` | OutputArray | Extracted patch that has the size patchSize and the same number of channels as src .  |
`patchType?` | [int](_types_opencv__hacks_.md#int) | Depth of the extracted pixels. By default, they have the same depth as src .  |

**Returns:** *void*

___

###  getRotationMatrix2D

▸ **getRotationMatrix2D**(`center`: Point2f, `angle`: [double](_types_opencv__hacks_.md#double), `scale`: [double](_types_opencv__hacks_.md#double)): *[Mat](../classes/_types_opencv_mat_.mat.md)*

*Defined in [types/opencv/imgproc_transform.ts:152](https://github.com/cancerberoSgx/mirada/blob/ff42750/mirada/src/types/opencv/imgproc_transform.ts#L152)*

The function calculates the following matrix:

`\\[\\begin{bmatrix} \\alpha & \\beta & (1- \\alpha ) \\cdot \\texttt{center.x} - \\beta \\cdot
\\texttt{center.y} \\\\ - \\beta & \\alpha & \\beta \\cdot \\texttt{center.x} + (1- \\alpha ) \\cdot
\\texttt{center.y} \\end{bmatrix}\\]`

where

`\\[\\begin{array}{l} \\alpha = \\texttt{scale} \\cdot \\cos \\texttt{angle} , \\\\ \\beta =
\\texttt{scale} \\cdot \\sin \\texttt{angle} \\end{array}\\]`

The transformation maps the rotation center to itself. If this is not the target, adjust the shift.

[getAffineTransform], [warpAffine], [transform]

**Parameters:**

Name | Type | Description |
------ | ------ | ------ |
`center` | Point2f | Center of the rotation in the source image.  |
`angle` | [double](_types_opencv__hacks_.md#double) | Rotation angle in degrees. Positive values mean counter-clockwise rotation (the coordinate origin is assumed to be the top-left corner).  |
`scale` | [double](_types_opencv__hacks_.md#double) | Isotropic scale factor.  |

**Returns:** *[Mat](../classes/_types_opencv_mat_.mat.md)*

___

###  invertAffineTransform

▸ **invertAffineTransform**(`M`: InputArray, `iM`: OutputArray): *void*

*Defined in [types/opencv/imgproc_transform.ts:165](https://github.com/cancerberoSgx/mirada/blob/ff42750/mirada/src/types/opencv/imgproc_transform.ts#L165)*

The function computes an inverse affine transformation represented by `$2 \\times 3$` matrix M:

`\\[\\begin{bmatrix} a_{11} & a_{12} & b_1 \\\\ a_{21} & a_{22} & b_2 \\end{bmatrix}\\]`

The result is also a `$2 \\times 3$` matrix of the same type as M.

**Parameters:**

Name | Type | Description |
------ | ------ | ------ |
`M` | InputArray | Original affine transformation.  |
`iM` | OutputArray | Output reverse affine transformation.  |

**Returns:** *void*

___

###  linearPolar

▸ **linearPolar**(`src`: InputArray, `dst`: OutputArray, `center`: Point2f, `maxRadius`: [double](_types_opencv__hacks_.md#double), `flags`: [int](_types_opencv__hacks_.md#int)): *void*

*Defined in [types/opencv/imgproc_transform.ts:167](https://github.com/cancerberoSgx/mirada/blob/ff42750/mirada/src/types/opencv/imgproc_transform.ts#L167)*

**Parameters:**

Name | Type |
------ | ------ |
`src` | InputArray |
`dst` | OutputArray |
`center` | Point2f |
`maxRadius` | [double](_types_opencv__hacks_.md#double) |
`flags` | [int](_types_opencv__hacks_.md#int) |

**Returns:** *void*

___

###  logPolar

▸ **logPolar**(`src`: InputArray, `dst`: OutputArray, `center`: Point2f, `M`: [double](_types_opencv__hacks_.md#double), `flags`: [int](_types_opencv__hacks_.md#int)): *void*

*Defined in [types/opencv/imgproc_transform.ts:169](https://github.com/cancerberoSgx/mirada/blob/ff42750/mirada/src/types/opencv/imgproc_transform.ts#L169)*

**Parameters:**

Name | Type |
------ | ------ |
`src` | InputArray |
`dst` | OutputArray |
`center` | Point2f |
`M` | [double](_types_opencv__hacks_.md#double) |
`flags` | [int](_types_opencv__hacks_.md#int) |

**Returns:** *void*

___

###  remap

▸ **remap**(`src`: InputArray, `dst`: OutputArray, `map1`: InputArray, `map2`: InputArray, `interpolation`: [int](_types_opencv__hacks_.md#int), `borderMode?`: [int](_types_opencv__hacks_.md#int), `borderValue?`: any): *void*

*Defined in [types/opencv/imgproc_transform.ts:209](https://github.com/cancerberoSgx/mirada/blob/ff42750/mirada/src/types/opencv/imgproc_transform.ts#L209)*

The function remap transforms the source image using the specified map:

`\\[\\texttt{dst} (x,y) = \\texttt{src} (map_x(x,y),map_y(x,y))\\]`

where values of pixels with non-integer coordinates are computed using one of available
interpolation methods. `$map_x$` and `$map_y$` can be encoded as separate floating-point maps in
`$map_1$` and `$map_2$` respectively, or interleaved floating-point maps of `$(x,y)$` in `$map_1$`,
or fixed-point maps created by using convertMaps. The reason you might want to convert from floating
to fixed-point representations of a map is that they can yield much faster (2x) remapping
operations. In the converted case, `$map_1$` contains pairs (cvFloor(x), cvFloor(y)) and `$map_2$`
contains indices in a table of interpolation coefficients.

This function cannot operate in-place.

Due to current implementation limitations the size of an input and output images should be less than
32767x32767.

**Parameters:**

Name | Type | Description |
------ | ------ | ------ |
`src` | InputArray | Source image.  |
`dst` | OutputArray | Destination image. It has the same size as map1 and the same type as src .  |
`map1` | InputArray | The first map of either (x,y) points or just x values having the type CV_16SC2 , CV_32FC1, or CV_32FC2. See convertMaps for details on converting a floating point representation to fixed-point for speed.  |
`map2` | InputArray | The second map of y values having the type CV_16UC1, CV_32FC1, or none (empty map if map1 is (x,y) points), respectively.  |
`interpolation` | [int](_types_opencv__hacks_.md#int) | Interpolation method (see InterpolationFlags). The method INTER_AREA is not supported by this function.  |
`borderMode?` | [int](_types_opencv__hacks_.md#int) | Pixel extrapolation method (see BorderTypes). When borderMode=BORDER_TRANSPARENT, it means that the pixels in the destination image that corresponds to the "outliers" in the source image are not modified by the function.  |
`borderValue?` | any | Value used in case of a constant border. By default, it is 0.  |

**Returns:** *void*

___

###  resize

▸ **resize**(`src`: InputArray, `dst`: OutputArray, `dsize`: [Size](../classes/_types_opencv__hacks_.size.md), `fx?`: [double](_types_opencv__hacks_.md#double), `fy?`: [double](_types_opencv__hacks_.md#double), `interpolation?`: [int](_types_opencv__hacks_.md#int)): *void*

*Defined in [types/opencv/imgproc_transform.ts:252](https://github.com/cancerberoSgx/mirada/blob/ff42750/mirada/src/types/opencv/imgproc_transform.ts#L252)*

The function resize resizes the image src down to or up to the specified size. Note that the initial
dst type or size are not taken into account. Instead, the size and type are derived from the
`src`,`dsize`,`fx`, and `fy`. If you want to resize src so that it fits the pre-created dst, you may
call the function as follows:

```cpp
// explicitly specify dsize=dst.size(); fx and fy will be computed from that.
resize(src, dst, dst.size(), 0, 0, interpolation);
```

 If you want to decimate the image by factor of 2 in each direction, you can call the function this
way:

```cpp
// specify fx and fy and let the function compute the destination image size.
resize(src, dst, Size(), 0.5, 0.5, interpolation);
```

 To shrink an image, it will generally look best with [INTER_AREA] interpolation, whereas to enlarge
an image, it will generally look best with c::INTER_CUBIC (slow) or [INTER_LINEAR] (faster but still
looks OK).

[warpAffine], [warpPerspective], [remap]

**Parameters:**

Name | Type | Description |
------ | ------ | ------ |
`src` | InputArray | input image.  |
`dst` | OutputArray | output image; it has the size dsize (when it is non-zero) or the size computed from src.size(), fx, and fy; the type of dst is the same as of src.  |
`dsize` | [Size](../classes/_types_opencv__hacks_.size.md) | output image size; if it equals zero, it is computed as: \[\texttt{dsize = Size(round(fx*src.cols), round(fy*src.rows))}\] Either dsize or both fx and fy must be non-zero.  |
`fx?` | [double](_types_opencv__hacks_.md#double) | scale factor along the horizontal axis; when it equals 0, it is computed as \[\texttt{(double)dsize.width/src.cols}\]  |
`fy?` | [double](_types_opencv__hacks_.md#double) | scale factor along the vertical axis; when it equals 0, it is computed as \[\texttt{(double)dsize.height/src.rows}\]  |
`interpolation?` | [int](_types_opencv__hacks_.md#int) | interpolation method, see InterpolationFlags  |

**Returns:** *void*

___

###  warpAffine

▸ **warpAffine**(`src`: InputArray, `dst`: OutputArray, `M`: InputArray, `dsize`: [Size](../classes/_types_opencv__hacks_.size.md), `flags?`: [int](_types_opencv__hacks_.md#int), `borderMode?`: [int](_types_opencv__hacks_.md#int), `borderValue?`: any): *void*

*Defined in [types/opencv/imgproc_transform.ts:284](https://github.com/cancerberoSgx/mirada/blob/ff42750/mirada/src/types/opencv/imgproc_transform.ts#L284)*

The function warpAffine transforms the source image using the specified matrix:

`\\[\\texttt{dst} (x,y) = \\texttt{src} ( \\texttt{M} _{11} x + \\texttt{M} _{12} y + \\texttt{M}
_{13}, \\texttt{M} _{21} x + \\texttt{M} _{22} y + \\texttt{M} _{23})\\]`

when the flag [WARP_INVERSE_MAP] is set. Otherwise, the transformation is first inverted with
[invertAffineTransform] and then put in the formula above instead of M. The function cannot operate
in-place.

[warpPerspective], [resize], [remap], [getRectSubPix], [transform]

**Parameters:**

Name | Type | Description |
------ | ------ | ------ |
`src` | InputArray | input image.  |
`dst` | OutputArray | output image that has the size dsize and the same type as src .  |
`M` | InputArray | $2\times 3$ transformation matrix.  |
`dsize` | [Size](../classes/_types_opencv__hacks_.size.md) | size of the output image.  |
`flags?` | [int](_types_opencv__hacks_.md#int) | combination of interpolation methods (see InterpolationFlags) and the optional flag WARP_INVERSE_MAP that means that M is the inverse transformation ( $\texttt{dst}\rightarrow\texttt{src}$ ).  |
`borderMode?` | [int](_types_opencv__hacks_.md#int) | pixel extrapolation method (see BorderTypes); when borderMode=BORDER_TRANSPARENT, it means that the pixels in the destination image corresponding to the "outliers" in the source image are not modified by the function.  |
`borderValue?` | any | value used in case of a constant border; by default, it is 0.  |

**Returns:** *void*

___

###  warpPerspective

▸ **warpPerspective**(`src`: InputArray, `dst`: OutputArray, `M`: InputArray, `dsize`: [Size](../classes/_types_opencv__hacks_.size.md), `flags?`: [int](_types_opencv__hacks_.md#int), `borderMode?`: [int](_types_opencv__hacks_.md#int), `borderValue?`: any): *void*

*Defined in [types/opencv/imgproc_transform.ts:314](https://github.com/cancerberoSgx/mirada/blob/ff42750/mirada/src/types/opencv/imgproc_transform.ts#L314)*

The function warpPerspective transforms the source image using the specified matrix:

`\\[\\texttt{dst} (x,y) = \\texttt{src} \\left ( \\frac{M_{11} x + M_{12} y + M_{13}}{M_{31} x +
M_{32} y + M_{33}} , \\frac{M_{21} x + M_{22} y + M_{23}}{M_{31} x + M_{32} y + M_{33}} \\right
)\\]`

when the flag [WARP_INVERSE_MAP] is set. Otherwise, the transformation is first inverted with invert
and then put in the formula above instead of M. The function cannot operate in-place.

[warpAffine], [resize], [remap], [getRectSubPix], [perspectiveTransform]

**Parameters:**

Name | Type | Description |
------ | ------ | ------ |
`src` | InputArray | input image.  |
`dst` | OutputArray | output image that has the size dsize and the same type as src .  |
`M` | InputArray | $3\times 3$ transformation matrix.  |
`dsize` | [Size](../classes/_types_opencv__hacks_.size.md) | size of the output image.  |
`flags?` | [int](_types_opencv__hacks_.md#int) | combination of interpolation methods (INTER_LINEAR or INTER_NEAREST) and the optional flag WARP_INVERSE_MAP, that sets M as the inverse transformation ( $\texttt{dst}\rightarrow\texttt{src}$ ).  |
`borderMode?` | [int](_types_opencv__hacks_.md#int) | pixel extrapolation method (BORDER_CONSTANT or BORDER_REPLICATE).  |
`borderValue?` | any | value used in case of a constant border; by default, it equals 0.  |

**Returns:** *void*

___

###  warpPolar

▸ **warpPolar**(`src`: InputArray, `dst`: OutputArray, `dsize`: [Size](../classes/_types_opencv__hacks_.size.md), `center`: Point2f, `maxRadius`: [double](_types_opencv__hacks_.md#double), `flags`: [int](_types_opencv__hacks_.md#int)): *void*

*Defined in [types/opencv/imgproc_transform.ts:406](https://github.com/cancerberoSgx/mirada/blob/ff42750/mirada/src/types/opencv/imgproc_transform.ts#L406)*

<a name="da/d54/group__imgproc__transform_1polar_remaps_reference_image"></a>
 Transform the source image using the following transformation: `\\[ dst(\\rho , \\phi ) = src(x,y)
\\]`

where `\\[ \\begin{array}{l} \\vec{I} = (x - center.x, \\;y - center.y) \\\\ \\phi = Kangle \\cdot
\\texttt{angle} (\\vec{I}) \\\\ \\rho = \\left\\{\\begin{matrix} Klin \\cdot \\texttt{magnitude}
(\\vec{I}) & default \\\\ Klog \\cdot log_e(\\texttt{magnitude} (\\vec{I})) & if \\; semilog \\\\
\\end{matrix}\\right. \\end{array} \\]`

and `\\[ \\begin{array}{l} Kangle = dsize.height / 2\\Pi \\\\ Klin = dsize.width / maxRadius \\\\
Klog = dsize.width / log_e(maxRadius) \\\\ \\end{array} \\]`

Polar mapping can be linear or semi-log. Add one of [WarpPolarMode] to `flags` to specify the polar
mapping mode.

Linear is the default mode.

The semilog mapping emulates the human "foveal" vision that permit very high acuity on the line of
sight (central vision) in contrast to peripheral vision where acuity is minor.

if both values in `dsize <=0` (default), the destination image will have (almost) same area of
source bounding circle: `\\[\\begin{array}{l} dsize.area \\leftarrow (maxRadius^2 \\cdot \\Pi) \\\\
dsize.width = \\texttt{cvRound}(maxRadius) \\\\ dsize.height = \\texttt{cvRound}(maxRadius \\cdot
\\Pi) \\\\ \\end{array}\\]`
if only `dsize.height <= 0`, the destination image area will be proportional to the bounding circle
area but scaled by `Kx * Kx`: `\\[\\begin{array}{l} dsize.height = \\texttt{cvRound}(dsize.width
\\cdot \\Pi) \\\\ \\end{array} \\]`
if both values in `dsize > 0`, the destination image will have the given size therefore the area of
the bounding circle will be scaled to `dsize`.

You can get reverse mapping adding [WARP_INVERSE_MAP] to `flags`

```cpp
        // direct transform
        warpPolar(src, lin_polar_img, Size(),center, maxRadius, flags);                     //
linear Polar
        warpPolar(src, log_polar_img, Size(),center, maxRadius, flags + WARP_POLAR_LOG);    //
semilog Polar
        // inverse transform
        warpPolar(lin_polar_img, recovered_lin_polar_img, src.size(), center, maxRadius, flags +
WARP_INVERSE_MAP);
        warpPolar(log_polar_img, recovered_log_polar, src.size(), center, maxRadius, flags +
WARP_POLAR_LOG + WARP_INVERSE_MAP);
```

 In addiction, to calculate the original coordinate from a polar mapped coordinate `$(rho, phi)->(x,
y)$`:

```cpp
        double angleRad, magnitude;
        double Kangle = dst.rows / CV_2PI;
        angleRad = phi / Kangle;
        if (flags & WARP_POLAR_LOG)
        {
            double Klog = dst.cols / std::log(maxRadius);
            magnitude = std::exp(rho / Klog);
        }
        else
        {
            double Klin = dst.cols / maxRadius;
            magnitude = rho / Klin;
        }
        int x = cvRound(center.x + magnitude * cos(angleRad));
        int y = cvRound(center.y + magnitude * sin(angleRad));
```

The function can not operate in-place.
To calculate magnitude and angle in degrees [cartToPolar] is used internally thus angles are
measured from 0 to 360 with accuracy about 0.3 degrees.
This function uses [remap]. Due to current implementation limitations the size of an input and
output images should be less than 32767x32767.

[cv::remap]

**Parameters:**

Name | Type | Description |
------ | ------ | ------ |
`src` | InputArray | Source image.  |
`dst` | OutputArray | Destination image. It will have same type as src.  |
`dsize` | [Size](../classes/_types_opencv__hacks_.size.md) | The destination image size (see description for valid options).  |
`center` | Point2f | The transformation center.  |
`maxRadius` | [double](_types_opencv__hacks_.md#double) | The radius of the bounding circle to transform. It determines the inverse magnitude scale parameter too.  |
`flags` | [int](_types_opencv__hacks_.md#int) | A combination of interpolation methods, InterpolationFlags + WarpPolarMode. Add WARP_POLAR_LINEAR to select linear polar mapping (default)Add WARP_POLAR_LOG to select semilog polar mappingAdd WARP_INVERSE_MAP for reverse mapping.  |

**Returns:** *void*