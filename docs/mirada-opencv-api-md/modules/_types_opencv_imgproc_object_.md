**[mirada](../README.md)**

[Globals](../README.md) › ["types/opencv/imgproc_object"](_types_opencv_imgproc_object_.md)

# External module: "types/opencv/imgproc_object"

## Index

### Type aliases

* [TemplateMatchModes](_types_opencv_imgproc_object_.md#templatematchmodes)

### Variables

* [TM_CCOEFF](_types_opencv_imgproc_object_.md#const-tm_ccoeff)
* [TM_CCOEFF_NORMED](_types_opencv_imgproc_object_.md#const-tm_ccoeff_normed)
* [TM_CCORR](_types_opencv_imgproc_object_.md#const-tm_ccorr)
* [TM_CCORR_NORMED](_types_opencv_imgproc_object_.md#const-tm_ccorr_normed)
* [TM_SQDIFF](_types_opencv_imgproc_object_.md#const-tm_sqdiff)
* [TM_SQDIFF_NORMED](_types_opencv_imgproc_object_.md#const-tm_sqdiff_normed)

### Functions

* [matchTemplate](_types_opencv_imgproc_object_.md#matchtemplate)

## Type aliases

###  TemplateMatchModes

Ƭ **TemplateMatchModes**: *any*

*Defined in [types/opencv/imgproc_object.ts:53](https://github.com/cancerberoSgx/mirada/blob/ff42750/mirada/src/types/opencv/imgproc_object.ts#L53)*

## Variables

### `Const` TM_CCOEFF

• **TM_CCOEFF**: *[TemplateMatchModes](_types_opencv_imgproc_object_.md#templatematchmodes)*

*Defined in [types/opencv/imgproc_object.ts:49](https://github.com/cancerberoSgx/mirada/blob/ff42750/mirada/src/types/opencv/imgproc_object.ts#L49)*

`\\[R(x,y)= \\sum _{x',y'} (T'(x',y') \\cdot I'(x+x',y+y'))\\]` where `\\[\\begin{array}{l}
T'(x',y')=T(x',y') - 1/(w \\cdot h) \\cdot \\sum _{x'',y''} T(x'',y'') \\\\
I'(x+x',y+y')=I(x+x',y+y') - 1/(w \\cdot h) \\cdot \\sum _{x'',y''} I(x+x'',y+y'') \\end{array}\\]`

___

### `Const` TM_CCOEFF_NORMED

• **TM_CCOEFF_NORMED**: *[TemplateMatchModes](_types_opencv_imgproc_object_.md#templatematchmodes)*

*Defined in [types/opencv/imgproc_object.ts:51](https://github.com/cancerberoSgx/mirada/blob/ff42750/mirada/src/types/opencv/imgproc_object.ts#L51)*

___

### `Const` TM_CCORR

• **TM_CCORR**: *[TemplateMatchModes](_types_opencv_imgproc_object_.md#templatematchmodes)*

*Defined in [types/opencv/imgproc_object.ts:39](https://github.com/cancerberoSgx/mirada/blob/ff42750/mirada/src/types/opencv/imgproc_object.ts#L39)*

___

### `Const` TM_CCORR_NORMED

• **TM_CCORR_NORMED**: *[TemplateMatchModes](_types_opencv_imgproc_object_.md#templatematchmodes)*

*Defined in [types/opencv/imgproc_object.ts:41](https://github.com/cancerberoSgx/mirada/blob/ff42750/mirada/src/types/opencv/imgproc_object.ts#L41)*

___

### `Const` TM_SQDIFF

• **TM_SQDIFF**: *[TemplateMatchModes](_types_opencv_imgproc_object_.md#templatematchmodes)*

*Defined in [types/opencv/imgproc_object.ts:35](https://github.com/cancerberoSgx/mirada/blob/ff42750/mirada/src/types/opencv/imgproc_object.ts#L35)*

___

### `Const` TM_SQDIFF_NORMED

• **TM_SQDIFF_NORMED**: *[TemplateMatchModes](_types_opencv_imgproc_object_.md#templatematchmodes)*

*Defined in [types/opencv/imgproc_object.ts:37](https://github.com/cancerberoSgx/mirada/blob/ff42750/mirada/src/types/opencv/imgproc_object.ts#L37)*

## Functions

###  matchTemplate

▸ **matchTemplate**(`image`: InputArray, `templ`: InputArray, `result`: OutputArray, `method`: [int](_types_opencv__hacks_.md#int), `mask?`: InputArray): *void*

*Defined in [types/opencv/imgproc_object.ts:33](https://github.com/cancerberoSgx/mirada/blob/ff42750/mirada/src/types/opencv/imgproc_object.ts#L33)*

The function slides through image , compares the overlapped patches of size `$w \\times h$` against
templ using the specified method and stores the comparison results in result . Here are the formulae
for the available comparison methods ( `$I$` denotes image, `$T$` template, `$R$` result ). The
summation is done over template and/or the image patch: `$x' = 0...w-1, y' = 0...h-1$`

After the function finishes the comparison, the best matches can be found as global minimums (when
[TM_SQDIFF] was used) or maximums (when [TM_CCORR] or [TM_CCOEFF] was used) using the [minMaxLoc]
function. In case of a color image, template summation in the numerator and each sum in the
denominator is done over all of the channels and separate mean values are used for each channel.
That is, the function can take a color template and a color image. The result will still be a
single-channel image, which is easier to analyze.

**Parameters:**

Name | Type | Description |
------ | ------ | ------ |
`image` | InputArray | Image where the search is running. It must be 8-bit or 32-bit floating-point.  |
`templ` | InputArray | Searched template. It must be not greater than the source image and have the same data type.  |
`result` | OutputArray | Map of comparison results. It must be single-channel 32-bit floating-point. If image is $W \times H$ and templ is $w \times h$ , then result is $(W-w+1) \times (H-h+1)$ .  |
`method` | [int](_types_opencv__hacks_.md#int) | Parameter specifying the comparison method, see TemplateMatchModes  |
`mask?` | InputArray | Mask of searched template. It must have the same datatype and size with templ. It is not set by default. Currently, only the TM_SQDIFF and TM_CCORR_NORMED methods are supported.  |

**Returns:** *void*