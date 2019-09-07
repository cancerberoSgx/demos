**[mirada](../README.md)**

[Globals](../README.md) › ["util/imageUtil"](_util_imageutil_.md)

# External module: "util/imageUtil"

## Index

### Variables

* [asImageData](_util_imageutil_.md#const-asimagedata)

### Functions

* [asMat](_util_imageutil_.md#asmat)
* [compareL2](_util_imageutil_.md#comparel2)
* [del](_util_imageutil_.md#del)
* [fromArrayBuffer](_util_imageutil_.md#fromarraybuffer)
* [fromFile](_util_imageutil_.md#fromfile)
* [fromUrl](_util_imageutil_.md#fromurl)
* [get](_util_imageutil_.md#get)
* [isMat](_util_imageutil_.md#ismat)
* [set](_util_imageutil_.md#set)
* [toImageData](_util_imageutil_.md#toimagedata)
* [toRgba](_util_imageutil_.md#torgba)

## Variables

### `Const` asImageData

• **asImageData**: *[toImageData](_util_imageutil_.md#toimagedata)* =  toImageData

*Defined in [util/imageUtil.ts:14](https://github.com/cancerberoSgx/mirada/blob/cd60774/mirada/src/util/imageUtil.ts#L14)*

## Functions

###  asMat

▸ **asMat**(`f`: [File](../classes/_file_.file.md) | [Mat](../classes/_types_opencv_mat_.mat.md)): *[Mat](../classes/_types_opencv_mat_.mat.md)*

*Defined in [util/imageUtil.ts:77](https://github.com/cancerberoSgx/mirada/blob/cd60774/mirada/src/util/imageUtil.ts#L77)*

**Parameters:**

Name | Type |
------ | ------ |
`f` | [File](../classes/_file_.file.md) \| [Mat](../classes/_types_opencv_mat_.mat.md) |

**Returns:** *[Mat](../classes/_types_opencv_mat_.mat.md)*

___

###  compareL2

▸ **compareL2**(`f1`: [Mat](../classes/_types_opencv_mat_.mat.md) | [File](../classes/_file_.file.md), `f2`: [Mat](../classes/_types_opencv_mat_.mat.md) | [File](../classes/_file_.file.md), `destroyBoth`: boolean): *number*

*Defined in [util/imageUtil.ts:61](https://github.com/cancerberoSgx/mirada/blob/cd60774/mirada/src/util/imageUtil.ts#L61)*

Compare two images by getting the L2 error (square-root of sum of squared error). The lower the result the more similar are the images.

**Parameters:**

Name | Type | Default |
------ | ------ | ------ |
`f1` | [Mat](../classes/_types_opencv_mat_.mat.md) \| [File](../classes/_file_.file.md) | - |
`f2` | [Mat](../classes/_types_opencv_mat_.mat.md) \| [File](../classes/_file_.file.md) | - |
`destroyBoth` | boolean | false |

**Returns:** *number*

___

###  del

▸ **del**(...`m`: [Mat](../classes/_types_opencv_mat_.mat.md)[]): *void*

*Defined in [util/imageUtil.ts:81](https://github.com/cancerberoSgx/mirada/blob/cd60774/mirada/src/util/imageUtil.ts#L81)*

**Parameters:**

Name | Type |
------ | ------ |
`...m` | [Mat](../classes/_types_opencv_mat_.mat.md)[] |

**Returns:** *void*

___

###  fromArrayBuffer

▸ **fromArrayBuffer**(`a`: ArrayBuffer): *Promise‹[Mat](../classes/_types_opencv_mat_.mat.md)›*

*Defined in [util/imageUtil.ts:48](https://github.com/cancerberoSgx/mirada/blob/cd60774/mirada/src/util/imageUtil.ts#L48)*

**Parameters:**

Name | Type |
------ | ------ |
`a` | ArrayBuffer |

**Returns:** *Promise‹[Mat](../classes/_types_opencv_mat_.mat.md)›*

___

###  fromFile

▸ **fromFile**(`f`: string): *Promise‹[Mat](../classes/_types_opencv_mat_.mat.md)›*

*Defined in [util/imageUtil.ts:43](https://github.com/cancerberoSgx/mirada/blob/cd60774/mirada/src/util/imageUtil.ts#L43)*

**Parameters:**

Name | Type |
------ | ------ |
`f` | string |

**Returns:** *Promise‹[Mat](../classes/_types_opencv_mat_.mat.md)›*

___

###  fromUrl

▸ **fromUrl**(`f`: string): *Promise‹[Mat](../classes/_types_opencv_mat_.mat.md)›*

*Defined in [util/imageUtil.ts:53](https://github.com/cancerberoSgx/mirada/blob/cd60774/mirada/src/util/imageUtil.ts#L53)*

**Parameters:**

Name | Type |
------ | ------ |
`f` | string |

**Returns:** *Promise‹[Mat](../classes/_types_opencv_mat_.mat.md)›*

___

###  get

▸ **get**(`m`: [Mat](../classes/_types_opencv_mat_.mat.md), `x`: number, `y`: number): *any[]*

*Defined in [util/imageUtil.ts:98](https://github.com/cancerberoSgx/mirada/blob/cd60774/mirada/src/util/imageUtil.ts#L98)*

gets the color of pixel at coords (x,y)

**Parameters:**

Name | Type |
------ | ------ |
`m` | [Mat](../classes/_types_opencv_mat_.mat.md) |
`x` | number |
`y` | number |

**Returns:** *any[]*

___

###  isMat

▸ **isMat**(`m`: any): *boolean*

*Defined in [util/imageUtil.ts:16](https://github.com/cancerberoSgx/mirada/blob/cd60774/mirada/src/util/imageUtil.ts#L16)*

**Parameters:**

Name | Type |
------ | ------ |
`m` | any |

**Returns:** *boolean*

___

###  set

▸ **set**(`m`: [Mat](../classes/_types_opencv_mat_.mat.md), `x`: number, `y`: number, `val`: [Scalar](../classes/_types_opencv__hacks_.scalar.md)): *void*

*Defined in [util/imageUtil.ts:88](https://github.com/cancerberoSgx/mirada/blob/cd60774/mirada/src/util/imageUtil.ts#L88)*

sets the color of pixel at coords (x,y)

**Parameters:**

Name | Type |
------ | ------ |
`m` | [Mat](../classes/_types_opencv_mat_.mat.md) |
`x` | number |
`y` | number |
`val` | [Scalar](../classes/_types_opencv__hacks_.scalar.md) |

**Returns:** *void*

___

###  toImageData

▸ **toImageData**(`img`: [Mat](../classes/_types_opencv_mat_.mat.md)): *object*

*Defined in [util/imageUtil.ts:7](https://github.com/cancerberoSgx/mirada/blob/cd60774/mirada/src/util/imageUtil.ts#L7)*

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

*Defined in [util/imageUtil.ts:23](https://github.com/cancerberoSgx/mirada/blob/cd60774/mirada/src/util/imageUtil.ts#L23)*

Returns a new image that is identical to given (1, 3 or 4 channels) but has 4 RGBA channels.

**Parameters:**

Name | Type | Default |
------ | ------ | ------ |
`mat` | [Mat](../classes/_types_opencv_mat_.mat.md) | - |
`dst` | [Mat](../classes/_types_opencv_mat_.mat.md) |  new cv.Mat() |

**Returns:** *[Mat](../classes/_types_opencv_mat_.mat.md)*