[mirada](../README.md) › ["types/opencv/core_hal_interface"](_types_opencv_core_hal_interface_.md)

# External module: "types/opencv/core_hal_interface"


## Index

### Functions

* [hal_ni_dct2D](_types_opencv_core_hal_interface_.md#hal_ni_dct2d)
* [hal_ni_dctFree2D](_types_opencv_core_hal_interface_.md#hal_ni_dctfree2d)
* [hal_ni_dctInit2D](_types_opencv_core_hal_interface_.md#hal_ni_dctinit2d)
* [hal_ni_dft1D](_types_opencv_core_hal_interface_.md#hal_ni_dft1d)
* [hal_ni_dft2D](_types_opencv_core_hal_interface_.md#hal_ni_dft2d)
* [hal_ni_dftFree1D](_types_opencv_core_hal_interface_.md#hal_ni_dftfree1d)
* [hal_ni_dftFree2D](_types_opencv_core_hal_interface_.md#hal_ni_dftfree2d)
* [hal_ni_dftInit1D](_types_opencv_core_hal_interface_.md#hal_ni_dftinit1d)
* [hal_ni_dftInit2D](_types_opencv_core_hal_interface_.md#hal_ni_dftinit2d)
* [hal_ni_minMaxIdx](_types_opencv_core_hal_interface_.md#hal_ni_minmaxidx)

## Functions

###  hal_ni_dct2D

▸ **hal_ni_dct2D**(`context`: [cvhalDFT](_types_opencv__hacks_.md#cvhaldft), `src_data`: [uchar](_types_opencv__hacks_.md#uchar), `src_step`: [size_t](_types_opencv__hacks_.md#size_t), `dst_data`: [uchar](_types_opencv__hacks_.md#uchar), `dst_step`: [size_t](_types_opencv__hacks_.md#size_t)): *[cvhalDFT](_types_opencv__hacks_.md#cvhaldft)*

*Defined in [types/opencv/core_hal_interface.ts:19](https://github.com/cancerberoSgx/mirada/blob/2aa7cf1/mirada/src/types/opencv/core_hal_interface.ts#L19)*

**Parameters:**

Name | Type | Description |
------ | ------ | ------ |
`context` | [cvhalDFT](_types_opencv__hacks_.md#cvhaldft) | pointer to context storing all necessary data  |
`src_data` | [uchar](_types_opencv__hacks_.md#uchar) | source image data and step  |
`src_step` | [size_t](_types_opencv__hacks_.md#size_t) | - |
`dst_data` | [uchar](_types_opencv__hacks_.md#uchar) | destination image data and step  |
`dst_step` | [size_t](_types_opencv__hacks_.md#size_t) | - |

**Returns:** *[cvhalDFT](_types_opencv__hacks_.md#cvhaldft)*

___

###  hal_ni_dctFree2D

▸ **hal_ni_dctFree2D**(`context`: [cvhalDFT](_types_opencv__hacks_.md#cvhaldft)): *[cvhalDFT](_types_opencv__hacks_.md#cvhaldft)*

*Defined in [types/opencv/core_hal_interface.ts:24](https://github.com/cancerberoSgx/mirada/blob/2aa7cf1/mirada/src/types/opencv/core_hal_interface.ts#L24)*

**Parameters:**

Name | Type | Description |
------ | ------ | ------ |
`context` | [cvhalDFT](_types_opencv__hacks_.md#cvhaldft) | pointer to context storing all necessary data  |

**Returns:** *[cvhalDFT](_types_opencv__hacks_.md#cvhaldft)*

___

###  hal_ni_dctInit2D

▸ **hal_ni_dctInit2D**(`context`: [cvhalDFT](_types_opencv__hacks_.md#cvhaldft), `width`: [int](_types_opencv__hacks_.md#int), `height`: [int](_types_opencv__hacks_.md#int), `depth`: [int](_types_opencv__hacks_.md#int), `flags`: [int](_types_opencv__hacks_.md#int)): *[cvhalDFT](_types_opencv__hacks_.md#cvhaldft)*

*Defined in [types/opencv/core_hal_interface.ts:35](https://github.com/cancerberoSgx/mirada/blob/2aa7cf1/mirada/src/types/opencv/core_hal_interface.ts#L35)*

**Parameters:**

Name | Type | Description |
------ | ------ | ------ |
`context` | [cvhalDFT](_types_opencv__hacks_.md#cvhaldft) | double pointer to context storing all necessary data  |
`width` | [int](_types_opencv__hacks_.md#int) | image dimensions  |
`height` | [int](_types_opencv__hacks_.md#int) | - |
`depth` | [int](_types_opencv__hacks_.md#int) | image type (CV_32F or CV64F)  |
`flags` | [int](_types_opencv__hacks_.md#int) | algorithm options (combination of CV_HAL_DFT_INVERSE, ...)  |

**Returns:** *[cvhalDFT](_types_opencv__hacks_.md#cvhaldft)*

___

###  hal_ni_dft1D

▸ **hal_ni_dft1D**(`context`: [cvhalDFT](_types_opencv__hacks_.md#cvhaldft), `src`: [uchar](_types_opencv__hacks_.md#uchar), `dst`: [uchar](_types_opencv__hacks_.md#uchar)): *[cvhalDFT](_types_opencv__hacks_.md#cvhaldft)*

*Defined in [types/opencv/core_hal_interface.ts:44](https://github.com/cancerberoSgx/mirada/blob/2aa7cf1/mirada/src/types/opencv/core_hal_interface.ts#L44)*

**Parameters:**

Name | Type | Description |
------ | ------ | ------ |
`context` | [cvhalDFT](_types_opencv__hacks_.md#cvhaldft) | pointer to context storing all necessary data  |
`src` | [uchar](_types_opencv__hacks_.md#uchar) | source data  |
`dst` | [uchar](_types_opencv__hacks_.md#uchar) | destination data  |

**Returns:** *[cvhalDFT](_types_opencv__hacks_.md#cvhaldft)*

___

###  hal_ni_dft2D

▸ **hal_ni_dft2D**(`context`: [cvhalDFT](_types_opencv__hacks_.md#cvhaldft), `src_data`: [uchar](_types_opencv__hacks_.md#uchar), `src_step`: [size_t](_types_opencv__hacks_.md#size_t), `dst_data`: [uchar](_types_opencv__hacks_.md#uchar), `dst_step`: [size_t](_types_opencv__hacks_.md#size_t)): *[cvhalDFT](_types_opencv__hacks_.md#cvhaldft)*

*Defined in [types/opencv/core_hal_interface.ts:53](https://github.com/cancerberoSgx/mirada/blob/2aa7cf1/mirada/src/types/opencv/core_hal_interface.ts#L53)*

**Parameters:**

Name | Type | Description |
------ | ------ | ------ |
`context` | [cvhalDFT](_types_opencv__hacks_.md#cvhaldft) | pointer to context storing all necessary data  |
`src_data` | [uchar](_types_opencv__hacks_.md#uchar) | source image data and step  |
`src_step` | [size_t](_types_opencv__hacks_.md#size_t) | - |
`dst_data` | [uchar](_types_opencv__hacks_.md#uchar) | destination image data and step  |
`dst_step` | [size_t](_types_opencv__hacks_.md#size_t) | - |

**Returns:** *[cvhalDFT](_types_opencv__hacks_.md#cvhaldft)*

___

###  hal_ni_dftFree1D

▸ **hal_ni_dftFree1D**(`context`: [cvhalDFT](_types_opencv__hacks_.md#cvhaldft)): *[cvhalDFT](_types_opencv__hacks_.md#cvhaldft)*

*Defined in [types/opencv/core_hal_interface.ts:58](https://github.com/cancerberoSgx/mirada/blob/2aa7cf1/mirada/src/types/opencv/core_hal_interface.ts#L58)*

**Parameters:**

Name | Type | Description |
------ | ------ | ------ |
`context` | [cvhalDFT](_types_opencv__hacks_.md#cvhaldft) | pointer to context storing all necessary data  |

**Returns:** *[cvhalDFT](_types_opencv__hacks_.md#cvhaldft)*

___

###  hal_ni_dftFree2D

▸ **hal_ni_dftFree2D**(`context`: [cvhalDFT](_types_opencv__hacks_.md#cvhaldft)): *[cvhalDFT](_types_opencv__hacks_.md#cvhaldft)*

*Defined in [types/opencv/core_hal_interface.ts:63](https://github.com/cancerberoSgx/mirada/blob/2aa7cf1/mirada/src/types/opencv/core_hal_interface.ts#L63)*

**Parameters:**

Name | Type | Description |
------ | ------ | ------ |
`context` | [cvhalDFT](_types_opencv__hacks_.md#cvhaldft) | pointer to context storing all necessary data  |

**Returns:** *[cvhalDFT](_types_opencv__hacks_.md#cvhaldft)*

___

###  hal_ni_dftInit1D

▸ **hal_ni_dftInit1D**(`context`: [cvhalDFT](_types_opencv__hacks_.md#cvhaldft), `len`: [int](_types_opencv__hacks_.md#int), `count`: [int](_types_opencv__hacks_.md#int), `depth`: [int](_types_opencv__hacks_.md#int), `flags`: [int](_types_opencv__hacks_.md#int), `needBuffer`: any): *[cvhalDFT](_types_opencv__hacks_.md#cvhaldft)*

*Defined in [types/opencv/core_hal_interface.ts:79](https://github.com/cancerberoSgx/mirada/blob/2aa7cf1/mirada/src/types/opencv/core_hal_interface.ts#L79)*

**Parameters:**

Name | Type | Description |
------ | ------ | ------ |
`context` | [cvhalDFT](_types_opencv__hacks_.md#cvhaldft) | double pointer to context storing all necessary data  |
`len` | [int](_types_opencv__hacks_.md#int) | transformed array length  |
`count` | [int](_types_opencv__hacks_.md#int) | estimated transformation count  |
`depth` | [int](_types_opencv__hacks_.md#int) | array type (CV_32F or CV_64F)  |
`flags` | [int](_types_opencv__hacks_.md#int) | algorithm options (combination of CV_HAL_DFT_INVERSE, CV_HAL_DFT_SCALE, ...)  |
`needBuffer` | any | pointer to boolean variable, if valid pointer provided, then variable value should be set to true to signal that additional memory buffer is needed for operations  |

**Returns:** *[cvhalDFT](_types_opencv__hacks_.md#cvhaldft)*

___

###  hal_ni_dftInit2D

▸ **hal_ni_dftInit2D**(`context`: [cvhalDFT](_types_opencv__hacks_.md#cvhaldft), `width`: [int](_types_opencv__hacks_.md#int), `height`: [int](_types_opencv__hacks_.md#int), `depth`: [int](_types_opencv__hacks_.md#int), `src_channels`: [int](_types_opencv__hacks_.md#int), `dst_channels`: [int](_types_opencv__hacks_.md#int), `flags`: [int](_types_opencv__hacks_.md#int), `nonzero_rows`: [int](_types_opencv__hacks_.md#int)): *[cvhalDFT](_types_opencv__hacks_.md#cvhaldft)*

*Defined in [types/opencv/core_hal_interface.ts:96](https://github.com/cancerberoSgx/mirada/blob/2aa7cf1/mirada/src/types/opencv/core_hal_interface.ts#L96)*

**Parameters:**

Name | Type | Description |
------ | ------ | ------ |
`context` | [cvhalDFT](_types_opencv__hacks_.md#cvhaldft) | double pointer to context storing all necessary data  |
`width` | [int](_types_opencv__hacks_.md#int) | image dimensions  |
`height` | [int](_types_opencv__hacks_.md#int) | - |
`depth` | [int](_types_opencv__hacks_.md#int) | image type (CV_32F or CV64F)  |
`src_channels` | [int](_types_opencv__hacks_.md#int) | number of channels in input image  |
`dst_channels` | [int](_types_opencv__hacks_.md#int) | number of channels in output image  |
`flags` | [int](_types_opencv__hacks_.md#int) | algorithm options (combination of CV_HAL_DFT_INVERSE, ...)  |
`nonzero_rows` | [int](_types_opencv__hacks_.md#int) | number of nonzero rows in image, can be used for optimization  |

**Returns:** *[cvhalDFT](_types_opencv__hacks_.md#cvhaldft)*

___

###  hal_ni_minMaxIdx

▸ **hal_ni_minMaxIdx**(`src_data`: [uchar](_types_opencv__hacks_.md#uchar), `src_step`: [size_t](_types_opencv__hacks_.md#size_t), `width`: [int](_types_opencv__hacks_.md#int), `height`: [int](_types_opencv__hacks_.md#int), `depth`: [int](_types_opencv__hacks_.md#int), `minVal`: any, `maxVal`: any, `minIdx`: any, `maxIdx`: any, `mask`: [uchar](_types_opencv__hacks_.md#uchar)): *[uchar](_types_opencv__hacks_.md#uchar)*

*Defined in [types/opencv/core_hal_interface.ts:111](https://github.com/cancerberoSgx/mirada/blob/2aa7cf1/mirada/src/types/opencv/core_hal_interface.ts#L111)*

**Parameters:**

Name | Type | Description |
------ | ------ | ------ |
`src_data` | [uchar](_types_opencv__hacks_.md#uchar) | Source image  |
`src_step` | [size_t](_types_opencv__hacks_.md#size_t) | - |
`width` | [int](_types_opencv__hacks_.md#int) | Source image dimensions  |
`height` | [int](_types_opencv__hacks_.md#int) | - |
`depth` | [int](_types_opencv__hacks_.md#int) | Depth of source image  |
`minVal` | any | Pointer to the returned global minimum and maximum in an array.  |
`maxVal` | any | - |
`minIdx` | any | Pointer to the returned minimum and maximum location.  |
`maxIdx` | any | - |
`mask` | [uchar](_types_opencv__hacks_.md#uchar) | Specified array region.  |

**Returns:** *[uchar](_types_opencv__hacks_.md#uchar)*