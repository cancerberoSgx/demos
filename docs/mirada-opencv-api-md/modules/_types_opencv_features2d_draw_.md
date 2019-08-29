**[mirada](../README.md)**

[Globals](../README.md) › ["types/opencv/features2d_draw"](_types_opencv_features2d_draw_.md)

# External module: "types/opencv/features2d_draw"

## Index

### Type aliases

* [DrawMatchesFlags](_types_opencv_features2d_draw_.md#drawmatchesflags)

### Variables

* [DEFAULT](_types_opencv_features2d_draw_.md#const-default)
* [DRAW_OVER_OUTIMG](_types_opencv_features2d_draw_.md#const-draw_over_outimg)
* [DRAW_RICH_KEYPOINTS](_types_opencv_features2d_draw_.md#const-draw_rich_keypoints)
* [NOT_DRAW_SINGLE_POINTS](_types_opencv_features2d_draw_.md#const-not_draw_single_points)

### Functions

* [drawKeypoints](_types_opencv_features2d_draw_.md#drawkeypoints)
* [drawMatches](_types_opencv_features2d_draw_.md#drawmatches)

## Type aliases

###  DrawMatchesFlags

Ƭ **DrawMatchesFlags**: *any*

*Defined in [types/opencv/features2d_draw.ts:87](https://github.com/cancerberoSgx/mirada/blob/dd33d35/mirada/src/types/opencv/features2d_draw.ts#L87)*

## Variables

### `Const` DEFAULT

• **DEFAULT**: *[DrawMatchesFlags](_types_opencv_features2d_draw_.md#drawmatchesflags)*

*Defined in [types/opencv/features2d_draw.ts:70](https://github.com/cancerberoSgx/mirada/blob/dd33d35/mirada/src/types/opencv/features2d_draw.ts#L70)*

Output image matrix will be created ([Mat::create]), i.e. existing memory of output image may be
reused. Two source image, matches and single keypoints will be drawn. For each keypoint only the
center point will be drawn (without the circle around keypoint with keypoint size and orientation).

___

### `Const` DRAW_OVER_OUTIMG

• **DRAW_OVER_OUTIMG**: *[DrawMatchesFlags](_types_opencv_features2d_draw_.md#drawmatchesflags)*

*Defined in [types/opencv/features2d_draw.ts:77](https://github.com/cancerberoSgx/mirada/blob/dd33d35/mirada/src/types/opencv/features2d_draw.ts#L77)*

Output image matrix will not be created ([Mat::create]). Matches will be drawn on existing content
of output image.

___

### `Const` DRAW_RICH_KEYPOINTS

• **DRAW_RICH_KEYPOINTS**: *[DrawMatchesFlags](_types_opencv_features2d_draw_.md#drawmatchesflags)*

*Defined in [types/opencv/features2d_draw.ts:85](https://github.com/cancerberoSgx/mirada/blob/dd33d35/mirada/src/types/opencv/features2d_draw.ts#L85)*

For each keypoint the circle around keypoint with keypoint size and orientation will be drawn.

___

### `Const` NOT_DRAW_SINGLE_POINTS

• **NOT_DRAW_SINGLE_POINTS**: *[DrawMatchesFlags](_types_opencv_features2d_draw_.md#drawmatchesflags)*

*Defined in [types/opencv/features2d_draw.ts:79](https://github.com/cancerberoSgx/mirada/blob/dd33d35/mirada/src/types/opencv/features2d_draw.ts#L79)*

## Functions

###  drawKeypoints

▸ **drawKeypoints**(`image`: InputArray, `keypoints`: any, `outImage`: InputOutputArray, `color?`: any, `flags?`: [DrawMatchesFlags](_types_opencv_features2d_draw_.md#drawmatchesflags)): *void*

*Defined in [types/opencv/features2d_draw.ts:24](https://github.com/cancerberoSgx/mirada/blob/dd33d35/mirada/src/types/opencv/features2d_draw.ts#L24)*

For Python API, flags are modified as cv.DRAW_MATCHES_FLAGS_DEFAULT,
cv.DRAW_MATCHES_FLAGS_DRAW_RICH_KEYPOINTS, cv.DRAW_MATCHES_FLAGS_DRAW_OVER_OUTIMG,
cv.DRAW_MATCHES_FLAGS_NOT_DRAW_SINGLE_POINTS

**Parameters:**

Name | Type | Description |
------ | ------ | ------ |
`image` | InputArray | Source image.  |
`keypoints` | any | Keypoints from the source image.  |
`outImage` | InputOutputArray | Output image. Its content depends on the flags value defining what is drawn in the output image. See possible flags bit values below.  |
`color?` | any | Color of keypoints.  |
`flags?` | [DrawMatchesFlags](_types_opencv_features2d_draw_.md#drawmatchesflags) | Flags setting drawing features. Possible flags bit values are defined by DrawMatchesFlags. See details above in drawMatches .  |

**Returns:** *void*

___

###  drawMatches

▸ **drawMatches**(`img1`: InputArray, `keypoints1`: any, `img2`: InputArray, `keypoints2`: any, `matches1to2`: any, `outImg`: InputOutputArray, `matchColor?`: any, `singlePointColor?`: any, `matchesMask?`: any, `flags?`: [DrawMatchesFlags](_types_opencv_features2d_draw_.md#drawmatchesflags)): *void*

*Defined in [types/opencv/features2d_draw.ts:56](https://github.com/cancerberoSgx/mirada/blob/dd33d35/mirada/src/types/opencv/features2d_draw.ts#L56)*

This function draws matches of keypoints from two images in the output image. Match is a line
connecting two keypoints (circles). See [cv::DrawMatchesFlags].

**Parameters:**

Name | Type | Description |
------ | ------ | ------ |
`img1` | InputArray | First source image.  |
`keypoints1` | any | Keypoints from the first source image.  |
`img2` | InputArray | Second source image.  |
`keypoints2` | any | Keypoints from the second source image.  |
`matches1to2` | any | Matches from the first image to the second one, which means that keypoints1[i] has a corresponding point in keypoints2[matches[i]] .  |
`outImg` | InputOutputArray | Output image. Its content depends on the flags value defining what is drawn in the output image. See possible flags bit values below.  |
`matchColor?` | any | Color of matches (lines and connected keypoints). If matchColor==Scalar::all(-1) , the color is generated randomly.  |
`singlePointColor?` | any | Color of single keypoints (circles), which means that keypoints do not have the matches. If singlePointColor==Scalar::all(-1) , the color is generated randomly.  |
`matchesMask?` | any | Mask determining which matches are drawn. If the mask is empty, all matches are drawn.  |
`flags?` | [DrawMatchesFlags](_types_opencv_features2d_draw_.md#drawmatchesflags) | Flags setting drawing features. Possible flags bit values are defined by DrawMatchesFlags.  |

**Returns:** *void*

▸ **drawMatches**(`img1`: InputArray, `keypoints1`: any, `img2`: InputArray, `keypoints2`: any, `matches1to2`: any, `outImg`: InputOutputArray, `matchColor?`: any, `singlePointColor?`: any, `matchesMask?`: any, `flags?`: [DrawMatchesFlags](_types_opencv_features2d_draw_.md#drawmatchesflags)): *void*

*Defined in [types/opencv/features2d_draw.ts:62](https://github.com/cancerberoSgx/mirada/blob/dd33d35/mirada/src/types/opencv/features2d_draw.ts#L62)*

This is an overloaded member function, provided for convenience. It differs from the above function
only in what argument(s) it accepts.

**Parameters:**

Name | Type |
------ | ------ |
`img1` | InputArray |
`keypoints1` | any |
`img2` | InputArray |
`keypoints2` | any |
`matches1to2` | any |
`outImg` | InputOutputArray |
`matchColor?` | any |
`singlePointColor?` | any |
`matchesMask?` | any |
`flags?` | [DrawMatchesFlags](_types_opencv_features2d_draw_.md#drawmatchesflags) |

**Returns:** *void*