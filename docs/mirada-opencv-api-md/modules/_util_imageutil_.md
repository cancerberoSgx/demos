**[mirada](../README.md)**

[Globals](../README.md) › ["util/imageUtil"](_util_imageutil_.md)

# External module: "util/imageUtil"

## Index

### Interfaces

* [MatData](../interfaces/_util_imageutil_.matdata.md)

### Variables

* [_Buffer](_util_imageutil_.md#let-_buffer)
* [_noArray](_util_imageutil_.md#let-_noarray)
* [asImageData](_util_imageutil_.md#const-asimagedata)

### Functions

* [ab2str](_util_imageutil_.md#ab2str)
* [asMat](_util_imageutil_.md#asmat)
* [compareL2](_util_imageutil_.md#comparel2)
* [data2mat](_util_imageutil_.md#data2mat)
* [del](_util_imageutil_.md#del)
* [fromArrayBuffer](_util_imageutil_.md#fromarraybuffer)
* [fromFile](_util_imageutil_.md#fromfile)
* [fromUrl](_util_imageutil_.md#fromurl)
* [get](_util_imageutil_.md#get)
* [isMat](_util_imageutil_.md#ismat)
* [isMatData](_util_imageutil_.md#ismatdata)
* [isSize](_util_imageutil_.md#issize)
* [jsonParseWithMat](_util_imageutil_.md#jsonparsewithmat)
* [jsonStringifyWithMat](_util_imageutil_.md#jsonstringifywithmat)
* [map](_util_imageutil_.md#map)
* [mat2data](_util_imageutil_.md#mat2data)
* [noArray](_util_imageutil_.md#noarray)
* [pointToSize](_util_imageutil_.md#pointtosize)
* [set](_util_imageutil_.md#set)
* [sizeToPoint](_util_imageutil_.md#sizetopoint)
* [str2ab](_util_imageutil_.md#str2ab)
* [toImageData](_util_imageutil_.md#toimagedata)
* [toRgba](_util_imageutil_.md#torgba)

## Variables

### `Let` _Buffer

• **_Buffer**: *Buffer* =  require('buffer/').Buffer as typeof Buffer

*Defined in [util/imageUtil.ts:169](https://github.com/cancerberoSgx/mirada/blob/f2ba50d/mirada/src/util/imageUtil.ts#L169)*

___

### `Let` _noArray

• **_noArray**: *[Mat](../classes/_types_opencv_mat_.mat.md)*

*Defined in [util/imageUtil.ts:119](https://github.com/cancerberoSgx/mirada/blob/f2ba50d/mirada/src/util/imageUtil.ts#L119)*

___

### `Const` asImageData

• **asImageData**: *[toImageData](_util_imageutil_.md#toimagedata)* =  toImageData

*Defined in [util/imageUtil.ts:15](https://github.com/cancerberoSgx/mirada/blob/f2ba50d/mirada/src/util/imageUtil.ts#L15)*

## Functions

###  ab2str

▸ **ab2str**(`buf`: Uint8Array): *string*

*Defined in [util/imageUtil.ts:175](https://github.com/cancerberoSgx/mirada/blob/f2ba50d/mirada/src/util/imageUtil.ts#L175)*

**Parameters:**

Name | Type |
------ | ------ |
`buf` | Uint8Array |

**Returns:** *string*

___

###  asMat

▸ **asMat**(`f`: [File](../classes/_file_.file.md) | [Mat](../classes/_types_opencv_mat_.mat.md)): *[Mat](../classes/_types_opencv_mat_.mat.md)*

*Defined in [util/imageUtil.ts:78](https://github.com/cancerberoSgx/mirada/blob/f2ba50d/mirada/src/util/imageUtil.ts#L78)*

**Parameters:**

Name | Type |
------ | ------ |
`f` | [File](../classes/_file_.file.md) \| [Mat](../classes/_types_opencv_mat_.mat.md) |

**Returns:** *[Mat](../classes/_types_opencv_mat_.mat.md)*

___

###  compareL2

▸ **compareL2**(`f1`: [Mat](../classes/_types_opencv_mat_.mat.md) | [File](../classes/_file_.file.md), `f2`: [Mat](../classes/_types_opencv_mat_.mat.md) | [File](../classes/_file_.file.md), `destroyBoth`: boolean): *number*

*Defined in [util/imageUtil.ts:62](https://github.com/cancerberoSgx/mirada/blob/f2ba50d/mirada/src/util/imageUtil.ts#L62)*

Compare two images by getting the L2 error (square-root of sum of squared error). The lower the result the more similar are the images.

**Parameters:**

Name | Type | Default |
------ | ------ | ------ |
`f1` | [Mat](../classes/_types_opencv_mat_.mat.md) \| [File](../classes/_file_.file.md) | - |
`f2` | [Mat](../classes/_types_opencv_mat_.mat.md) \| [File](../classes/_file_.file.md) | - |
`destroyBoth` | boolean | false |

**Returns:** *number*

___

###  data2mat

▸ **data2mat**(`d`: [MatData](../interfaces/_util_imageutil_.matdata.md)): *[Mat](../classes/_types_opencv_mat_.mat.md)*

*Defined in [util/imageUtil.ts:161](https://github.com/cancerberoSgx/mirada/blob/f2ba50d/mirada/src/util/imageUtil.ts#L161)*

**Parameters:**

Name | Type |
------ | ------ |
`d` | [MatData](../interfaces/_util_imageutil_.matdata.md) |

**Returns:** *[Mat](../classes/_types_opencv_mat_.mat.md)*

___

###  del

▸ **del**(...`m`: [Mat](../classes/_types_opencv_mat_.mat.md)[]): *void*

*Defined in [util/imageUtil.ts:82](https://github.com/cancerberoSgx/mirada/blob/f2ba50d/mirada/src/util/imageUtil.ts#L82)*

**Parameters:**

Name | Type |
------ | ------ |
`...m` | [Mat](../classes/_types_opencv_mat_.mat.md)[] |

**Returns:** *void*

___

###  fromArrayBuffer

▸ **fromArrayBuffer**(`a`: ArrayBuffer): *Promise‹[Mat](../classes/_types_opencv_mat_.mat.md)›*

*Defined in [util/imageUtil.ts:49](https://github.com/cancerberoSgx/mirada/blob/f2ba50d/mirada/src/util/imageUtil.ts#L49)*

**Parameters:**

Name | Type |
------ | ------ |
`a` | ArrayBuffer |

**Returns:** *Promise‹[Mat](../classes/_types_opencv_mat_.mat.md)›*

___

###  fromFile

▸ **fromFile**(`f`: string): *Promise‹[Mat](../classes/_types_opencv_mat_.mat.md)›*

*Defined in [util/imageUtil.ts:44](https://github.com/cancerberoSgx/mirada/blob/f2ba50d/mirada/src/util/imageUtil.ts#L44)*

**Parameters:**

Name | Type |
------ | ------ |
`f` | string |

**Returns:** *Promise‹[Mat](../classes/_types_opencv_mat_.mat.md)›*

___

###  fromUrl

▸ **fromUrl**(`f`: string): *Promise‹[Mat](../classes/_types_opencv_mat_.mat.md)›*

*Defined in [util/imageUtil.ts:54](https://github.com/cancerberoSgx/mirada/blob/f2ba50d/mirada/src/util/imageUtil.ts#L54)*

**Parameters:**

Name | Type |
------ | ------ |
`f` | string |

**Returns:** *Promise‹[Mat](../classes/_types_opencv_mat_.mat.md)›*

___

###  get

▸ **get**(`m`: [Mat](../classes/_types_opencv_mat_.mat.md), `x`: number, `y`: number): *any[]*

*Defined in [util/imageUtil.ts:100](https://github.com/cancerberoSgx/mirada/blob/f2ba50d/mirada/src/util/imageUtil.ts#L100)*

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

*Defined in [util/imageUtil.ts:17](https://github.com/cancerberoSgx/mirada/blob/f2ba50d/mirada/src/util/imageUtil.ts#L17)*

**Parameters:**

Name | Type |
------ | ------ |
`m` | any |

**Returns:** *boolean*

___

###  isMatData

▸ **isMatData**(`d`: any): *boolean*

*Defined in [util/imageUtil.ts:165](https://github.com/cancerberoSgx/mirada/blob/f2ba50d/mirada/src/util/imageUtil.ts#L165)*

**Parameters:**

Name | Type |
------ | ------ |
`d` | any |

**Returns:** *boolean*

___

###  isSize

▸ **isSize**(`size`: any): *boolean*

*Defined in [util/imageUtil.ts:138](https://github.com/cancerberoSgx/mirada/blob/f2ba50d/mirada/src/util/imageUtil.ts#L138)*

**Parameters:**

Name | Type |
------ | ------ |
`size` | any |

**Returns:** *boolean*

___

###  jsonParseWithMat

▸ **jsonParseWithMat**(`d`: string): *any*

*Defined in [util/imageUtil.ts:200](https://github.com/cancerberoSgx/mirada/blob/f2ba50d/mirada/src/util/imageUtil.ts#L200)*

Executes JSON.parse on JSON containing Mat instances.

**Parameters:**

Name | Type |
------ | ------ |
`d` | string |

**Returns:** *any*

___

###  jsonStringifyWithMat

▸ **jsonStringifyWithMat**(`s`: any): *string*

*Defined in [util/imageUtil.ts:186](https://github.com/cancerberoSgx/mirada/blob/f2ba50d/mirada/src/util/imageUtil.ts#L186)*

Executes JSON.stringify on JSON containing Mat instances.

**Parameters:**

Name | Type |
------ | ------ |
`s` | any |

**Returns:** *string*

___

###  map

▸ **map**(`mat`: [Mat](../classes/_types_opencv_mat_.mat.md), `dst`: [Mat](../classes/_types_opencv_mat_.mat.md), `fn`: function): *void*

*Defined in [util/imageUtil.ts:110](https://github.com/cancerberoSgx/mirada/blob/f2ba50d/mirada/src/util/imageUtil.ts#L110)*

**Parameters:**

▪ **mat**: *[Mat](../classes/_types_opencv_mat_.mat.md)*

▪ **dst**: *[Mat](../classes/_types_opencv_mat_.mat.md)*

▪ **fn**: *function*

▸ (`p`: [Scalar](../classes/_types_opencv__hacks_.scalar.md), `x`: number, `y`: number): *[Scalar](../classes/_types_opencv__hacks_.scalar.md)*

**Parameters:**

Name | Type |
------ | ------ |
`p` | [Scalar](../classes/_types_opencv__hacks_.scalar.md) |
`x` | number |
`y` | number |

**Returns:** *void*

___

###  mat2data

▸ **mat2data**(`m`: [Mat](../classes/_types_opencv_mat_.mat.md)): *[MatData](../interfaces/_util_imageutil_.matdata.md)*

*Defined in [util/imageUtil.ts:152](https://github.com/cancerberoSgx/mirada/blob/f2ba50d/mirada/src/util/imageUtil.ts#L152)*

**Parameters:**

Name | Type |
------ | ------ |
`m` | [Mat](../classes/_types_opencv_mat_.mat.md) |

**Returns:** *[MatData](../interfaces/_util_imageutil_.matdata.md)*

___

###  noArray

▸ **noArray**(): *[Mat](../classes/_types_opencv_mat_.mat.md)*

*Defined in [util/imageUtil.ts:123](https://github.com/cancerberoSgx/mirada/blob/f2ba50d/mirada/src/util/imageUtil.ts#L123)*

for overload methods that won't accept undefined as argument, like 'mask' cv.add()

**Returns:** *[Mat](../classes/_types_opencv_mat_.mat.md)*

___

###  pointToSize

▸ **pointToSize**(`p`: [Point](../classes/_types_opencv__hacks_.point.md)): *[Size](../classes/_types_opencv__hacks_.size.md)*

*Defined in [util/imageUtil.ts:130](https://github.com/cancerberoSgx/mirada/blob/f2ba50d/mirada/src/util/imageUtil.ts#L130)*

**Parameters:**

Name | Type |
------ | ------ |
`p` | [Point](../classes/_types_opencv__hacks_.point.md) |

**Returns:** *[Size](../classes/_types_opencv__hacks_.size.md)*

___

###  set

▸ **set**(`m`: [Mat](../classes/_types_opencv_mat_.mat.md), `x`: number, `y`: number, `val`: [Scalar](../classes/_types_opencv__hacks_.scalar.md)): *void*

*Defined in [util/imageUtil.ts:89](https://github.com/cancerberoSgx/mirada/blob/f2ba50d/mirada/src/util/imageUtil.ts#L89)*

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

###  sizeToPoint

▸ **sizeToPoint**(`s`: [Size](../classes/_types_opencv__hacks_.size.md)): *[Point](../classes/_types_opencv__hacks_.point.md)*

*Defined in [util/imageUtil.ts:134](https://github.com/cancerberoSgx/mirada/blob/f2ba50d/mirada/src/util/imageUtil.ts#L134)*

**Parameters:**

Name | Type |
------ | ------ |
`s` | [Size](../classes/_types_opencv__hacks_.size.md) |

**Returns:** *[Point](../classes/_types_opencv__hacks_.point.md)*

___

###  str2ab

▸ **str2ab**(`str`: string): *Uint8Array*

*Defined in [util/imageUtil.ts:179](https://github.com/cancerberoSgx/mirada/blob/f2ba50d/mirada/src/util/imageUtil.ts#L179)*

**Parameters:**

Name | Type |
------ | ------ |
`str` | string |

**Returns:** *Uint8Array*

___

###  toImageData

▸ **toImageData**(`img`: [Mat](../classes/_types_opencv_mat_.mat.md)): *object*

*Defined in [util/imageUtil.ts:8](https://github.com/cancerberoSgx/mirada/blob/f2ba50d/mirada/src/util/imageUtil.ts#L8)*

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

*Defined in [util/imageUtil.ts:24](https://github.com/cancerberoSgx/mirada/blob/f2ba50d/mirada/src/util/imageUtil.ts#L24)*

Returns a new image that is identical to given (1, 3 or 4 channels) but has 4 RGBA channels.

**Parameters:**

Name | Type | Default |
------ | ------ | ------ |
`mat` | [Mat](../classes/_types_opencv_mat_.mat.md) | - |
`dst` | [Mat](../classes/_types_opencv_mat_.mat.md) |  new cv.Mat() |

**Returns:** *[Mat](../classes/_types_opencv_mat_.mat.md)*