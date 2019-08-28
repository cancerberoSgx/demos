**[mirada](../README.md)**

[Globals](../README.md) › ["util/browserImageUtil"](_util_browserimageutil_.md)

# External module: "util/browserImageUtil"

## Index

### Classes

* [CameraHelper](../classes/_util_browserimageutil_.camerahelper.md)

### Functions

* [fetchImageData](_util_browserimageutil_.md#fetchimagedata)
* [fromInputFileElement](_util_browserimageutil_.md#frominputfileelement)
* [getHtmlImageData](_util_browserimageutil_.md#gethtmlimagedata)
* [renderArrayBufferInCanvas](_util_browserimageutil_.md#renderarraybufferincanvas)
* [renderInCanvas](_util_browserimageutil_.md#renderincanvas)

## Functions

###  fetchImageData

▸ **fetchImageData**(`url`: string): *Promise‹ImageData›*

*Defined in [util/browserImageUtil.ts:11](https://github.com/cancerberoSgx/mirada/blob/170e57c/mirada/src/util/browserImageUtil.ts#L11)*

**Parameters:**

Name | Type |
------ | ------ |
`url` | string |

**Returns:** *Promise‹ImageData›*

___

###  fromInputFileElement

▸ **fromInputFileElement**(`a`: HTMLInputElement): *Promise‹[Mat](../classes/_types_opencv_mat_.mat.md)[]›*

*Defined in [util/browserImageUtil.ts:6](https://github.com/cancerberoSgx/mirada/blob/170e57c/mirada/src/util/browserImageUtil.ts#L6)*

**Parameters:**

Name | Type |
------ | ------ |
`a` | HTMLInputElement |

**Returns:** *Promise‹[Mat](../classes/_types_opencv_mat_.mat.md)[]›*

___

###  getHtmlImageData

▸ **getHtmlImageData**(`img`: [Mat](../classes/_types_opencv_mat_.mat.md)): *ImageData*

*Defined in [util/browserImageUtil.ts:72](https://github.com/cancerberoSgx/mirada/blob/170e57c/mirada/src/util/browserImageUtil.ts#L72)*

**Parameters:**

Name | Type |
------ | ------ |
`img` | [Mat](../classes/_types_opencv_mat_.mat.md) |

**Returns:** *ImageData*

___

###  renderArrayBufferInCanvas

▸ **renderArrayBufferInCanvas**(`a`: ArrayBuffer, `canvas?`: HTMLCanvasElement, `appendToBody`: boolean): *Promise‹object›*

*Defined in [util/browserImageUtil.ts:36](https://github.com/cancerberoSgx/mirada/blob/170e57c/mirada/src/util/browserImageUtil.ts#L36)*

A sub optimal method to load a image array buffer (encoded in jpg, png) whiteouts knowing its format or size.
1) creates a blob and a url object
* loads the url in a HTML Image (to know its dimensions )
* draw the image in a canvas ().

This method is useful as a decoder for the browser without libraries

**Parameters:**

Name | Type | Default |
------ | ------ | ------ |
`a` | ArrayBuffer | - |
`canvas?` | HTMLCanvasElement | - |
`appendToBody` | boolean | false |

**Returns:** *Promise‹object›*

___

###  renderInCanvas

▸ **renderInCanvas**(`mat`: [Mat](../classes/_types_opencv_mat_.mat.md), `canvas?`: HTMLCanvasElement, `appendToBody`: boolean, `rgba`: boolean): *HTMLCanvasElement*

*Defined in [util/browserImageUtil.ts:56](https://github.com/cancerberoSgx/mirada/blob/170e57c/mirada/src/util/browserImageUtil.ts#L56)*

**Parameters:**

Name | Type | Default |
------ | ------ | ------ |
`mat` | [Mat](../classes/_types_opencv_mat_.mat.md) | - |
`canvas?` | HTMLCanvasElement | - |
`appendToBody` | boolean | false |
`rgba` | boolean | true |

**Returns:** *HTMLCanvasElement*