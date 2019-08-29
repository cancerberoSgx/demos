**[mirada](../README.md)**

[Globals](../README.md) › ["types/opencv/photo_inpaint"](_types_opencv_photo_inpaint_.md)

# External module: "types/opencv/photo_inpaint"

## Index

### Variables

* [INPAINT_NS](_types_opencv_photo_inpaint_.md#const-inpaint_ns)
* [INPAINT_TELEA](_types_opencv_photo_inpaint_.md#const-inpaint_telea)

### Functions

* [inpaint](_types_opencv_photo_inpaint_.md#inpaint)

## Variables

### `Const` INPAINT_NS

• **INPAINT_NS**: *any*

*Defined in [types/opencv/photo_inpaint.ts:30](https://github.com/cancerberoSgx/mirada/blob/ff42750/mirada/src/types/opencv/photo_inpaint.ts#L30)*

___

### `Const` INPAINT_TELEA

• **INPAINT_TELEA**: *any*

*Defined in [types/opencv/photo_inpaint.ts:32](https://github.com/cancerberoSgx/mirada/blob/ff42750/mirada/src/types/opencv/photo_inpaint.ts#L32)*

## Functions

###  inpaint

▸ **inpaint**(`src`: InputArray, `inpaintMask`: InputArray, `dst`: OutputArray, `inpaintRadius`: [double](_types_opencv__hacks_.md#double), `flags`: [int](_types_opencv__hacks_.md#int)): *void*

*Defined in [types/opencv/photo_inpaint.ts:28](https://github.com/cancerberoSgx/mirada/blob/ff42750/mirada/src/types/opencv/photo_inpaint.ts#L28)*

The function reconstructs the selected image area from the pixel near the area boundary. The
function may be used to remove dust and scratches from a scanned photo, or to remove undesirable
objects from still images or video. See  for more details.

An example using the inpainting technique can be found at opencv_source_code/samples/cpp/inpaint.cpp
(Python) An example using the inpainting technique can be found at
opencv_source_code/samples/python/inpaint.py

**Parameters:**

Name | Type | Description |
------ | ------ | ------ |
`src` | InputArray | Input 8-bit, 16-bit unsigned or 32-bit float 1-channel or 8-bit 3-channel image.  |
`inpaintMask` | InputArray | Inpainting mask, 8-bit 1-channel image. Non-zero pixels indicate the area that needs to be inpainted.  |
`dst` | OutputArray | Output image with the same size and type as src .  |
`inpaintRadius` | [double](_types_opencv__hacks_.md#double) | Radius of a circular neighborhood of each point inpainted that is considered by the algorithm.  |
`flags` | [int](_types_opencv__hacks_.md#int) | Inpainting method that could be cv::INPAINT_NS or cv::INPAINT_TELEA  |

**Returns:** *void*