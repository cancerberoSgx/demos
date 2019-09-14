[mirada](../README.md) › ["util/imageUtil"](_util_imageutil_.md)

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

*Defined in [util/imageUtil.ts:170](https://github.com/cancerberoSgx/mirada/blob/e7b5ae6/mirada/src/util/imageUtil.ts#L170)*

___

### `Let` _noArray

• **_noArray**: *[Mat](../classes/_types_opencv_mat_.mat.md)*

*Defined in [util/imageUtil.ts:120](https://github.com/cancerberoSgx/mirada/blob/e7b5ae6/mirada/src/util/imageUtil.ts#L120)*

___

### `Const` asImageData

• **asImageData**: *[toImageData](_util_imageutil_.md#toimagedata)* =  toImageData

*Defined in [util/imageUtil.ts:16](https://github.com/cancerberoSgx/mirada/blob/e7b5ae6/mirada/src/util/imageUtil.ts#L16)*

## Functions

###  ab2str

▸ **ab2str**(`buf`: Uint8Array): *string*

*Defined in [util/imageUtil.ts:176](https://github.com/cancerberoSgx/mirada/blob/e7b5ae6/mirada/src/util/imageUtil.ts#L176)*

**Parameters:**

Name | Type |
------ | ------ |
`buf` | Uint8Array |

**Returns:** *string*

___

###  asMat

▸ **asMat**(`f`: [File](../classes/_file_.file.md) | [Mat](../classes/_types_opencv_mat_.mat.md)): *[Mat](../classes/_types_opencv_mat_.mat.md)*

*Defined in [util/imageUtil.ts:79](https://github.com/cancerberoSgx/mirada/blob/e7b5ae6/mirada/src/util/imageUtil.ts#L79)*

**Parameters:**

Name | Type |
------ | ------ |
`f` | [File](../classes/_file_.file.md) &#124; [Mat](../classes/_types_opencv_mat_.mat.md) |

**Returns:** *[Mat](../classes/_types_opencv_mat_.mat.md)*

___

###  compareL2

▸ **compareL2**(`f1`: [Mat](../classes/_types_opencv_mat_.mat.md) | [File](../classes/_file_.file.md), `f2`: [Mat](../classes/_types_opencv_mat_.mat.md) | [File](../classes/_file_.file.md), `destroyBoth`: boolean): *number*

*Defined in [util/imageUtil.ts:63](https://github.com/cancerberoSgx/mirada/blob/e7b5ae6/mirada/src/util/imageUtil.ts#L63)*

Compare two images by getting the L2 error (square-root of sum of squared error). The lower the result the more similar are the images.

**Parameters:**

Name | Type | Default |
------ | ------ | ------ |
`f1` | [Mat](../classes/_types_opencv_mat_.mat.md) &#124; [File](../classes/_file_.file.md) | - |
`f2` | [Mat](../classes/_types_opencv_mat_.mat.md) &#124; [File](../classes/_file_.file.md) | - |
`destroyBoth` | boolean | false |

**Returns:** *number*

___

###  data2mat

▸ **data2mat**(`d`: [MatData](../interfaces/_util_imageutil_.matdata.md)): *[Mat](../classes/_types_opencv_mat_.mat.md)*

*Defined in [util/imageUtil.ts:162](https://github.com/cancerberoSgx/mirada/blob/e7b5ae6/mirada/src/util/imageUtil.ts#L162)*

**Parameters:**

Name | Type |
------ | ------ |
`d` | [MatData](../interfaces/_util_imageutil_.matdata.md) |

**Returns:** *[Mat](../classes/_types_opencv_mat_.mat.md)*

___

###  del

▸ **del**(...`m`: [EmscriptenEmbindInstance](../classes/_types_opencv__hacks_.emscriptenembindinstance.md)[]): *void*

*Defined in [util/imageUtil.ts:83](https://github.com/cancerberoSgx/mirada/blob/e7b5ae6/mirada/src/util/imageUtil.ts#L83)*

**Parameters:**

Name | Type |
------ | ------ |
`...m` | [EmscriptenEmbindInstance](../classes/_types_opencv__hacks_.emscriptenembindinstance.md)[] |

**Returns:** *void*

___

###  fromArrayBuffer

▸ **fromArrayBuffer**(`a`: ArrayBuffer): *Promise‹[Mat](../classes/_types_opencv_mat_.mat.md)›*

*Defined in [util/imageUtil.ts:50](https://github.com/cancerberoSgx/mirada/blob/e7b5ae6/mirada/src/util/imageUtil.ts#L50)*

**Parameters:**

Name | Type |
------ | ------ |
`a` | ArrayBuffer |

**Returns:** *Promise‹[Mat](../classes/_types_opencv_mat_.mat.md)›*

___

###  fromFile

▸ **fromFile**(`f`: string): *Promise‹[Mat](../classes/_types_opencv_mat_.mat.md)›*

*Defined in [util/imageUtil.ts:45](https://github.com/cancerberoSgx/mirada/blob/e7b5ae6/mirada/src/util/imageUtil.ts#L45)*

**Parameters:**

Name | Type |
------ | ------ |
`f` | string |

**Returns:** *Promise‹[Mat](../classes/_types_opencv_mat_.mat.md)›*

___

###  fromUrl

▸ **fromUrl**(`f`: string): *Promise‹[Mat](../classes/_types_opencv_mat_.mat.md)›*

*Defined in [util/imageUtil.ts:55](https://github.com/cancerberoSgx/mirada/blob/e7b5ae6/mirada/src/util/imageUtil.ts#L55)*

**Parameters:**

Name | Type |
------ | ------ |
`f` | string |

**Returns:** *Promise‹[Mat](../classes/_types_opencv_mat_.mat.md)›*

___

###  get

▸ **get**(`m`: [Mat](../classes/_types_opencv_mat_.mat.md), `x`: number, `y`: number): *any[]*

*Defined in [util/imageUtil.ts:101](https://github.com/cancerberoSgx/mirada/blob/e7b5ae6/mirada/src/util/imageUtil.ts#L101)*

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

*Defined in [util/imageUtil.ts:18](https://github.com/cancerberoSgx/mirada/blob/e7b5ae6/mirada/src/util/imageUtil.ts#L18)*

**Parameters:**

Name | Type |
------ | ------ |
`m` | any |

**Returns:** *boolean*

___

###  isMatData

▸ **isMatData**(`d`: any): *boolean*

*Defined in [util/imageUtil.ts:166](https://github.com/cancerberoSgx/mirada/blob/e7b5ae6/mirada/src/util/imageUtil.ts#L166)*

**Parameters:**

Name | Type |
------ | ------ |
`d` | any |

**Returns:** *boolean*

___

###  isSize

▸ **isSize**(`size`: any): *boolean*

*Defined in [util/imageUtil.ts:139](https://github.com/cancerberoSgx/mirada/blob/e7b5ae6/mirada/src/util/imageUtil.ts#L139)*

**Parameters:**

Name | Type |
------ | ------ |
`size` | any |

**Returns:** *boolean*

___

###  jsonParseWithMat

▸ **jsonParseWithMat**(`d`: string): *any*

*Defined in [util/imageUtil.ts:201](https://github.com/cancerberoSgx/mirada/blob/e7b5ae6/mirada/src/util/imageUtil.ts#L201)*

Executes JSON.parse on JSON containing Mat instances.

**Parameters:**

Name | Type |
------ | ------ |
`d` | string |

**Returns:** *any*

___

###  jsonStringifyWithMat

▸ **jsonStringifyWithMat**(`s`: any): *string*

*Defined in [util/imageUtil.ts:187](https://github.com/cancerberoSgx/mirada/blob/e7b5ae6/mirada/src/util/imageUtil.ts#L187)*

Executes JSON.stringify on JSON containing Mat instances.

**Parameters:**

Name | Type |
------ | ------ |
`s` | any |

**Returns:** *string*

___

###  map

▸ **map**(`mat`: [Mat](../classes/_types_opencv_mat_.mat.md), `dst`: [Mat](../classes/_types_opencv_mat_.mat.md), `fn`: function): *void*

*Defined in [util/imageUtil.ts:111](https://github.com/cancerberoSgx/mirada/blob/e7b5ae6/mirada/src/util/imageUtil.ts#L111)*

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

*Defined in [util/imageUtil.ts:153](https://github.com/cancerberoSgx/mirada/blob/e7b5ae6/mirada/src/util/imageUtil.ts#L153)*

**Parameters:**

Name | Type |
------ | ------ |
`m` | [Mat](../classes/_types_opencv_mat_.mat.md) |

**Returns:** *[MatData](../interfaces/_util_imageutil_.matdata.md)*

___

###  noArray

▸ **noArray**(): *[Mat](../classes/_types_opencv_mat_.mat.md)*

*Defined in [util/imageUtil.ts:124](https://github.com/cancerberoSgx/mirada/blob/e7b5ae6/mirada/src/util/imageUtil.ts#L124)*

for overload methods that won't accept undefined as argument, like 'mask' cv.add()

**Returns:** *[Mat](../classes/_types_opencv_mat_.mat.md)*

___

###  pointToSize

▸ **pointToSize**(`p`: [Point](../classes/_types_opencv__hacks_.point.md)): *[Size](../classes/_types_opencv__hacks_.size.md)*

*Defined in [util/imageUtil.ts:131](https://github.com/cancerberoSgx/mirada/blob/e7b5ae6/mirada/src/util/imageUtil.ts#L131)*

**Parameters:**

Name | Type |
------ | ------ |
`p` | [Point](../classes/_types_opencv__hacks_.point.md) |

**Returns:** *[Size](../classes/_types_opencv__hacks_.size.md)*

___

###  set

▸ **set**(`m`: [Mat](../classes/_types_opencv_mat_.mat.md), `x`: number, `y`: number, `val`: [Scalar](../classes/_types_opencv__hacks_.scalar.md)): *void*

*Defined in [util/imageUtil.ts:90](https://github.com/cancerberoSgx/mirada/blob/e7b5ae6/mirada/src/util/imageUtil.ts#L90)*

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

*Defined in [util/imageUtil.ts:135](https://github.com/cancerberoSgx/mirada/blob/e7b5ae6/mirada/src/util/imageUtil.ts#L135)*

**Parameters:**

Name | Type |
------ | ------ |
`s` | [Size](../classes/_types_opencv__hacks_.size.md) |

**Returns:** *[Point](../classes/_types_opencv__hacks_.point.md)*

___

###  str2ab

▸ **str2ab**(`str`: string): *Uint8Array*

*Defined in [util/imageUtil.ts:180](https://github.com/cancerberoSgx/mirada/blob/e7b5ae6/mirada/src/util/imageUtil.ts#L180)*

**Parameters:**

Name | Type |
------ | ------ |
`str` | string |

**Returns:** *Uint8Array*

___

###  toImageData

▸ **toImageData**(`img`: [Mat](../classes/_types_opencv_mat_.mat.md)): *object*

*Defined in [util/imageUtil.ts:8](https://github.com/cancerberoSgx/mirada/blob/e7b5ae6/mirada/src/util/imageUtil.ts#L8)*

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

*Defined in [util/imageUtil.ts:25](https://github.com/cancerberoSgx/mirada/blob/e7b5ae6/mirada/src/util/imageUtil.ts#L25)*

Returns a new image that is identical to given (1, 3 or 4 channels) but has 4 RGBA channels.

**Parameters:**

Name | Type | Default |
------ | ------ | ------ |
`mat` | [Mat](../classes/_types_opencv_mat_.mat.md) | - |
`dst` | [Mat](../classes/_types_opencv_mat_.mat.md) |  new cv.Mat() |

**Returns:** *[Mat](../classes/_types_opencv_mat_.mat.md)*