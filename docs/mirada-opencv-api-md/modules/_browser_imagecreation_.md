[mirada](../README.md) › ["browser/imageCreation"](_browser_imagecreation_.md)

# External module: "browser/imageCreation"


## Index

### Functions

* [asHtmlImageData](_browser_imagecreation_.md#ashtmlimagedata)
* [fetchImageData](_browser_imagecreation_.md#fetchimagedata)
* [fromInputFileElement](_browser_imagecreation_.md#frominputfileelement)

## Functions

###  asHtmlImageData

▸ **asHtmlImageData**(`img`: [Mat](../classes/_types_opencv_mat_.mat.md)): *ImageData*

*Defined in [browser/imageCreation.ts:27](https://github.com/cancerberoSgx/mirada/blob/f0c0267/mirada/src/browser/imageCreation.ts#L27)*

**Parameters:**

Name | Type |
------ | ------ |
`img` | [Mat](../classes/_types_opencv_mat_.mat.md) |

**Returns:** *ImageData*

___

###  fetchImageData

▸ **fetchImageData**(`url`: string): *Promise‹ImageData›*

*Defined in [browser/imageCreation.ts:10](https://github.com/cancerberoSgx/mirada/blob/f0c0267/mirada/src/browser/imageCreation.ts#L10)*

**Parameters:**

Name | Type |
------ | ------ |
`url` | string |

**Returns:** *Promise‹ImageData›*

___

###  fromInputFileElement

▸ **fromInputFileElement**(`a`: HTMLInputElement): *Promise‹[Mat](../classes/_types_opencv_mat_.mat.md)[]›*

*Defined in [browser/imageCreation.ts:5](https://github.com/cancerberoSgx/mirada/blob/f0c0267/mirada/src/browser/imageCreation.ts#L5)*

**Parameters:**

Name | Type |
------ | ------ |
`a` | HTMLInputElement |

**Returns:** *Promise‹[Mat](../classes/_types_opencv_mat_.mat.md)[]›*