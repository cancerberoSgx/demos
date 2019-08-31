**[mirada](../README.md)**

[Globals](../README.md) › ["util/imageUtil"](_util_imageutil_.md)

# External module: "util/imageUtil"

## Index

### Functions

* [asMat](_util_imageutil_.md#asmat)
* [compareL2](_util_imageutil_.md#comparel2)
* [fromArrayBuffer](_util_imageutil_.md#fromarraybuffer)
* [fromFile](_util_imageutil_.md#fromfile)
* [fromUrl](_util_imageutil_.md#fromurl)
* [toImageData](_util_imageutil_.md#toimagedata)
* [toRgba](_util_imageutil_.md#torgba)

## Functions

###  asMat

▸ **asMat**(`f`: [File](../classes/_file_.file.md) | [Mat](../classes/_types_opencv_mat_.mat.md)): *[Mat](../classes/_types_opencv_mat_.mat.md)*

*Defined in [util/imageUtil.ts:69](https://github.com/cancerberoSgx/mirada/blob/eecc091/mirada/src/util/imageUtil.ts#L69)*

**Parameters:**

Name | Type |
------ | ------ |
`f` | [File](../classes/_file_.file.md) \| [Mat](../classes/_types_opencv_mat_.mat.md) |

**Returns:** *[Mat](../classes/_types_opencv_mat_.mat.md)*

___

###  compareL2

▸ **compareL2**(`f1`: [Mat](../classes/_types_opencv_mat_.mat.md) | [File](../classes/_file_.file.md), `f2`: [Mat](../classes/_types_opencv_mat_.mat.md) | [File](../classes/_file_.file.md)): *number*

*Defined in [util/imageUtil.ts:55](https://github.com/cancerberoSgx/mirada/blob/eecc091/mirada/src/util/imageUtil.ts#L55)*

Compare two images by getting the L2 error (square-root of sum of squared error). The lower the result the more similar are the images.

**Parameters:**

Name | Type |
------ | ------ |
`f1` | [Mat](../classes/_types_opencv_mat_.mat.md) \| [File](../classes/_file_.file.md) |
`f2` | [Mat](../classes/_types_opencv_mat_.mat.md) \| [File](../classes/_file_.file.md) |

**Returns:** *number*

___

###  fromArrayBuffer

▸ **fromArrayBuffer**(`a`: ArrayBuffer): *Promise‹[Mat](../classes/_types_opencv_mat_.mat.md)›*

*Defined in [util/imageUtil.ts:44](https://github.com/cancerberoSgx/mirada/blob/eecc091/mirada/src/util/imageUtil.ts#L44)*

**Parameters:**

Name | Type |
------ | ------ |
`a` | ArrayBuffer |

**Returns:** *Promise‹[Mat](../classes/_types_opencv_mat_.mat.md)›*

___

###  fromFile

▸ **fromFile**(`f`: string): *Promise‹[Mat](../classes/_types_opencv_mat_.mat.md)›*

*Defined in [util/imageUtil.ts:39](https://github.com/cancerberoSgx/mirada/blob/eecc091/mirada/src/util/imageUtil.ts#L39)*

**Parameters:**

Name | Type |
------ | ------ |
`f` | string |

**Returns:** *Promise‹[Mat](../classes/_types_opencv_mat_.mat.md)›*

___

###  fromUrl

▸ **fromUrl**(`f`: string): *Promise‹[Mat](../classes/_types_opencv_mat_.mat.md)›*

*Defined in [util/imageUtil.ts:49](https://github.com/cancerberoSgx/mirada/blob/eecc091/mirada/src/util/imageUtil.ts#L49)*

**Parameters:**

Name | Type |
------ | ------ |
`f` | string |

**Returns:** *Promise‹[Mat](../classes/_types_opencv_mat_.mat.md)›*

___

###  toImageData

▸ **toImageData**(`img`: [Mat](../classes/_types_opencv_mat_.mat.md)): *object*

*Defined in [util/imageUtil.ts:7](https://github.com/cancerberoSgx/mirada/blob/eecc091/mirada/src/util/imageUtil.ts#L7)*

Creates an CV ImageData object from given image.

**Parameters:**

Name | Type |
------ | ------ |
`img` | [Mat](../classes/_types_opencv_mat_.mat.md) |

**Returns:** *object*

* **data**: *Uint8ClampedArray* =  new Uint8ClampedArray(img.data)

* **height**: *any* =  img.rows

* **width**: *any* =  img.cols

___

###  toRgba

▸ **toRgba**(`mat`: [Mat](../classes/_types_opencv_mat_.mat.md), `dst`: [Mat](../classes/_types_opencv_mat_.mat.md)): *[Mat](../classes/_types_opencv_mat_.mat.md)*

*Defined in [util/imageUtil.ts:19](https://github.com/cancerberoSgx/mirada/blob/eecc091/mirada/src/util/imageUtil.ts#L19)*

Returns a new image that is identical to given (1, 3 or 4 channels)
but has 4 RGBA channels.

**Parameters:**

Name | Type | Default |
------ | ------ | ------ |
`mat` | [Mat](../classes/_types_opencv_mat_.mat.md) | - |
`dst` | [Mat](../classes/_types_opencv_mat_.mat.md) |  new cv.Mat() |

**Returns:** *[Mat](../classes/_types_opencv_mat_.mat.md)*