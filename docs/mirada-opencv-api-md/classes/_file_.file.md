[mirada](../README.md) › ["file"](../modules/_file_.md) › [File](_file_.file.md)

# Class: File


A thin layer on top of cv.Mat with lots of utilities to load, write, encode, etc.

## Hierarchy

* **File**

## Index

### Constructors

* [constructor](_file_.file.md#constructor)

### Properties

* [_mat](_file_.file.md#protected-_mat)
* [name](_file_.file.md#name)

### Accessors

* [height](_file_.file.md#height)
* [mat](_file_.file.md#mat)
* [width](_file_.file.md#width)

### Methods

* [asArrayBuffer](_file_.file.md#asarraybuffer)
* [asBase64](_file_.file.md#asbase64)
* [asDataUrl](_file_.file.md#asdataurl)
* [asHTMLImageData](_file_.file.md#ashtmlimagedata)
* [asImageData](_file_.file.md#asimagedata)
* [asMat](_file_.file.md#asmat)
* [clone](_file_.file.md#clone)
* [delete](_file_.file.md#delete)
* [getExtension](_file_.file.md#getextension)
* [getMimeType](_file_.file.md#getmimetype)
* [remove](_file_.file.md#remove)
* [setMat](_file_.file.md#setmat)
* [show](_file_.file.md#show)
* [size](_file_.file.md#size)
* [toRgba](_file_.file.md#torgba)
* [toString](_file_.file.md#tostring)
* [write](_file_.file.md#write)
* [_buildName](_file_.file.md#static-private-_buildname)
* [asPath](_file_.file.md#static-aspath)
* [fromArrayBuffer](_file_.file.md#static-fromarraybuffer)
* [fromArrayBufferView](_file_.file.md#static-fromarraybufferview)
* [fromBase64](_file_.file.md#static-frombase64)
* [fromCanvas](_file_.file.md#static-fromcanvas)
* [fromData](_file_.file.md#static-fromdata)
* [fromDataUrl](_file_.file.md#static-fromdataurl)
* [fromFile](_file_.file.md#static-fromfile)
* [fromHtmlFileInputElement](_file_.file.md#static-fromhtmlfileinputelement)
* [fromMat](_file_.file.md#static-frommat)
* [fromUrl](_file_.file.md#static-fromurl)
* [getBufferFileName](_file_.file.md#static-getbufferfilename)
* [getBufferFileType](_file_.file.md#static-getbufferfiletype)
* [isFile](_file_.file.md#static-isfile)
* [resolve](_file_.file.md#static-resolve)
* [resolveOne](_file_.file.md#static-resolveone)

## Constructors

###  constructor

\+ **new File**(`name`: string, `_mat`: [Mat](_types_opencv_mat_.mat.md)): *[File](_file_.file.md)*

*Defined in [file.ts:15](https://github.com/cancerberoSgx/mirada/blob/f0c0267/mirada/src/file.ts#L15)*

**Parameters:**

Name | Type |
------ | ------ |
`name` | string |
`_mat` | [Mat](_types_opencv_mat_.mat.md) |

**Returns:** *[File](_file_.file.md)*

## Properties

### `Protected` _mat

• **_mat**: *[Mat](_types_opencv_mat_.mat.md)*

*Defined in [file.ts:16](https://github.com/cancerberoSgx/mirada/blob/f0c0267/mirada/src/file.ts#L16)*

___

###  name

• **name**: *string*

*Defined in [file.ts:16](https://github.com/cancerberoSgx/mirada/blob/f0c0267/mirada/src/file.ts#L16)*

## Accessors

###  height

• **get height**(): *any*

*Defined in [file.ts:55](https://github.com/cancerberoSgx/mirada/blob/f0c0267/mirada/src/file.ts#L55)*

**Returns:** *any*

___

###  mat

• **get mat**(): *[Mat](_types_opencv_mat_.mat.md)*

*Defined in [file.ts:59](https://github.com/cancerberoSgx/mirada/blob/f0c0267/mirada/src/file.ts#L59)*

**Returns:** *[Mat](_types_opencv_mat_.mat.md)*

___

###  width

• **get width**(): *any*

*Defined in [file.ts:51](https://github.com/cancerberoSgx/mirada/blob/f0c0267/mirada/src/file.ts#L51)*

**Returns:** *any*

## Methods

###  asArrayBuffer

▸ **asArrayBuffer**(`format`: string): *Promise‹ArrayBuffer›*

*Defined in [file.ts:74](https://github.com/cancerberoSgx/mirada/blob/f0c0267/mirada/src/file.ts#L74)*

Returns an array buffer containing the image encoded in given format or inferring format from its name.

**Parameters:**

Name | Type | Default |
------ | ------ | ------ |
`format` | string |  this.getExtension() |

**Returns:** *Promise‹ArrayBuffer›*

___

###  asBase64

▸ **asBase64**(`format`: string): *Promise‹string›*

*Defined in [file.ts:101](https://github.com/cancerberoSgx/mirada/blob/f0c0267/mirada/src/file.ts#L101)*

**Parameters:**

Name | Type | Default |
------ | ------ | ------ |
`format` | string |  this.getExtension() |

**Returns:** *Promise‹string›*

___

###  asDataUrl

▸ **asDataUrl**(): *string*

*Defined in [file.ts:47](https://github.com/cancerberoSgx/mirada/blob/f0c0267/mirada/src/file.ts#L47)*

**Returns:** *string*

___

###  asHTMLImageData

▸ **asHTMLImageData**(): *ImageData*

*Defined in [file.ts:43](https://github.com/cancerberoSgx/mirada/blob/f0c0267/mirada/src/file.ts#L43)*

**Returns:** *ImageData*

___

###  asImageData

▸ **asImageData**(): *CVImageData*

*Defined in [file.ts:39](https://github.com/cancerberoSgx/mirada/blob/f0c0267/mirada/src/file.ts#L39)*

**Returns:** *CVImageData*

___

###  asMat

▸ **asMat**(): *[Mat](_types_opencv_mat_.mat.md)*

*Defined in [file.ts:35](https://github.com/cancerberoSgx/mirada/blob/f0c0267/mirada/src/file.ts#L35)*

**Returns:** *[Mat](_types_opencv_mat_.mat.md)*

___

###  clone

▸ **clone**(`name`: string): *[File](_file_.file.md)*

*Defined in [file.ts:123](https://github.com/cancerberoSgx/mirada/blob/f0c0267/mirada/src/file.ts#L123)*

**Parameters:**

Name | Type | Default |
------ | ------ | ------ |
`name` | string |  this.name |

**Returns:** *[File](_file_.file.md)*

___

###  delete

▸ **delete**(): *void*

*Defined in [file.ts:106](https://github.com/cancerberoSgx/mirada/blob/f0c0267/mirada/src/file.ts#L106)*

**Returns:** *void*

___

###  getExtension

▸ **getExtension**(): *string*

*Defined in [file.ts:31](https://github.com/cancerberoSgx/mirada/blob/f0c0267/mirada/src/file.ts#L31)*

**Returns:** *string*

___

###  getMimeType

▸ **getMimeType**(): *undefined | string*

*Defined in [file.ts:27](https://github.com/cancerberoSgx/mirada/blob/f0c0267/mirada/src/file.ts#L27)*

**Returns:** *undefined | string*

___

###  remove

▸ **remove**(`deleteMat`: boolean): *this*

*Defined in [file.ts:66](https://github.com/cancerberoSgx/mirada/blob/f0c0267/mirada/src/file.ts#L66)*

It removes the the file from file system and also delete() this file's Mat

**Parameters:**

Name | Type | Default |
------ | ------ | ------ |
`deleteMat` | boolean | true |

**Returns:** *this*

___

###  setMat

▸ **setMat**(`mat`: [Mat](_types_opencv_mat_.mat.md)): *this*

*Defined in [file.ts:87](https://github.com/cancerberoSgx/mirada/blob/f0c0267/mirada/src/file.ts#L87)*

**Parameters:**

Name | Type |
------ | ------ |
`mat` | [Mat](_types_opencv_mat_.mat.md) |

**Returns:** *this*

___

###  show

▸ **show**(`el`: HTMLElement): *this*

*Defined in [file.ts:96](https://github.com/cancerberoSgx/mirada/blob/f0c0267/mirada/src/file.ts#L96)*

Shows this image in given HTML canvas or image element.

**Parameters:**

Name | Type |
------ | ------ |
`el` | HTMLElement |

**Returns:** *this*

___

###  size

▸ **size**(): *object*

*Defined in [file.ts:20](https://github.com/cancerberoSgx/mirada/blob/f0c0267/mirada/src/file.ts#L20)*

**Returns:** *object*

* **height**: *any* =  this._mat.rows

* **width**: *any* =  this._mat.cols

___

###  toRgba

▸ **toRgba**(): *this*

*Defined in [file.ts:116](https://github.com/cancerberoSgx/mirada/blob/f0c0267/mirada/src/file.ts#L116)*

Converts the Mat of this file to RGBA channel type. It will replace the current mat and delete the original.

**Returns:** *this*

___

###  toString

▸ **toString**(): *string*

*Defined in [file.ts:252](https://github.com/cancerberoSgx/mirada/blob/f0c0267/mirada/src/file.ts#L252)*

**Returns:** *string*

___

###  write

▸ **write**(`path`: string, `format`: string): *Promise‹this›*

*Defined in [file.ts:81](https://github.com/cancerberoSgx/mirada/blob/f0c0267/mirada/src/file.ts#L81)*

Writes this image on given file path, encoded in given format (or inferred form current name).

**Parameters:**

Name | Type | Default |
------ | ------ | ------ |
`path` | string |  this.name |
`format` | string |  this.getExtension() |

**Returns:** *Promise‹this›*

___

### `Static` `Private` _buildName

▸ **_buildName**(`name`: string | undefined): *string*

*Defined in [file.ts:244](https://github.com/cancerberoSgx/mirada/blob/f0c0267/mirada/src/file.ts#L244)*

**Parameters:**

Name | Type |
------ | ------ |
`name` | string &#124; undefined |

**Returns:** *string*

___

### `Static` asPath

▸ **asPath**(`f`: string | [File](_file_.file.md)): *string*

*Defined in [file.ts:236](https://github.com/cancerberoSgx/mirada/blob/f0c0267/mirada/src/file.ts#L236)*

**Parameters:**

Name | Type |
------ | ------ |
`f` | string &#124; [File](_file_.file.md) |

**Returns:** *string*

___

### `Static` fromArrayBuffer

▸ **fromArrayBuffer**(`buffer`: ArrayBuffer, `name?`: undefined | string): *Promise‹[File](_file_.file.md)›*

*Defined in [file.ts:138](https://github.com/cancerberoSgx/mirada/blob/f0c0267/mirada/src/file.ts#L138)*

Loads file from given array buffer containing an encoded image.

**Parameters:**

Name | Type |
------ | ------ |
`buffer` | ArrayBuffer |
`name?` | undefined &#124; string |

**Returns:** *Promise‹[File](_file_.file.md)›*

___

### `Static` fromArrayBufferView

▸ **fromArrayBufferView**(`a`: ArrayBufferView, `name?`: undefined | string): *Promise‹[File](_file_.file.md)›*

*Defined in [file.ts:153](https://github.com/cancerberoSgx/mirada/blob/f0c0267/mirada/src/file.ts#L153)*

Loads file from given array buffer view containing an encoded image.

**Parameters:**

Name | Type |
------ | ------ |
`a` | ArrayBufferView |
`name?` | undefined &#124; string |

**Returns:** *Promise‹[File](_file_.file.md)›*

___

### `Static` fromBase64

▸ **fromBase64**(`base64`: string, `name?`: undefined | string): *Promise‹[File](_file_.file.md)›*

*Defined in [file.ts:130](https://github.com/cancerberoSgx/mirada/blob/f0c0267/mirada/src/file.ts#L130)*

Loads file from given base64 string containing an encoded image.

**Parameters:**

Name | Type |
------ | ------ |
`base64` | string |
`name?` | undefined &#124; string |

**Returns:** *Promise‹[File](_file_.file.md)›*

___

### `Static` fromCanvas

▸ **fromCanvas**(`el`: HTMLElement | string): *[File](_file_.file.md)*

*Defined in [file.ts:194](https://github.com/cancerberoSgx/mirada/blob/f0c0267/mirada/src/file.ts#L194)*

Loads file form existing HTMLElement or HTMLImageElement

**Parameters:**

Name | Type |
------ | ------ |
`el` | HTMLElement &#124; string |

**Returns:** *[File](_file_.file.md)*

___

### `Static` fromData

▸ **fromData**(`data`: CVImageData, `name?`: undefined | string): *[File](_file_.file.md)*

*Defined in [file.ts:240](https://github.com/cancerberoSgx/mirada/blob/f0c0267/mirada/src/file.ts#L240)*

**Parameters:**

Name | Type |
------ | ------ |
`data` | CVImageData |
`name?` | undefined &#124; string |

**Returns:** *[File](_file_.file.md)*

___

### `Static` fromDataUrl

▸ **fromDataUrl**(`dataUrl`: string, `name?`: undefined | string): *Promise‹[File](_file_.file.md)›*

*Defined in [file.ts:173](https://github.com/cancerberoSgx/mirada/blob/f0c0267/mirada/src/file.ts#L173)*

Loads file from given data url string containing an encoded image.

**Parameters:**

Name | Type |
------ | ------ |
`dataUrl` | string |
`name?` | undefined &#124; string |

**Returns:** *Promise‹[File](_file_.file.md)›*

___

### `Static` fromFile

▸ **fromFile**(`path`: string, `name`: string): *Promise‹[File](_file_.file.md)›*

*Defined in [file.ts:264](https://github.com/cancerberoSgx/mirada/blob/f0c0267/mirada/src/file.ts#L264)*

**Parameters:**

Name | Type | Default |
------ | ------ | ------ |
`path` | string | - |
`name` | string |  basename(path) |

**Returns:** *Promise‹[File](_file_.file.md)›*

___

### `Static` fromHtmlFileInputElement

▸ **fromHtmlFileInputElement**(`el`: HTMLInputElement): *Promise‹[File](_file_.file.md)[]›*

*Defined in [file.ts:180](https://github.com/cancerberoSgx/mirada/blob/f0c0267/mirada/src/file.ts#L180)*

Loads files from files in html input element of type "file".

**Parameters:**

Name | Type |
------ | ------ |
`el` | HTMLInputElement |

**Returns:** *Promise‹[File](_file_.file.md)[]›*

___

### `Static` fromMat

▸ **fromMat**(`mat`: [Mat](_types_opencv_mat_.mat.md), `name?`: undefined | string): *[File](_file_.file.md)*

*Defined in [file.ts:248](https://github.com/cancerberoSgx/mirada/blob/f0c0267/mirada/src/file.ts#L248)*

**Parameters:**

Name | Type |
------ | ------ |
`mat` | [Mat](_types_opencv_mat_.mat.md) |
`name?` | undefined &#124; string |

**Returns:** *[File](_file_.file.md)*

___

### `Static` fromUrl

▸ **fromUrl**(`url`: string, `o`: RequestInit & object): *Promise‹[File](_file_.file.md)›*

*Defined in [file.ts:256](https://github.com/cancerberoSgx/mirada/blob/f0c0267/mirada/src/file.ts#L256)*

**Parameters:**

Name | Type | Default |
------ | ------ | ------ |
`url` | string | - |
`o` | RequestInit & object |  {} |

**Returns:** *Promise‹[File](_file_.file.md)›*

___

### `Static` getBufferFileName

▸ **getBufferFileName**(`a`: ArrayBuffer): *string*

*Defined in [file.ts:165](https://github.com/cancerberoSgx/mirada/blob/f0c0267/mirada/src/file.ts#L165)*

**Parameters:**

Name | Type |
------ | ------ |
`a` | ArrayBuffer |

**Returns:** *string*

___

### `Static` getBufferFileType

▸ **getBufferFileType**(`a`: ArrayBuffer): *FileTypeResult*

*Defined in [file.ts:157](https://github.com/cancerberoSgx/mirada/blob/f0c0267/mirada/src/file.ts#L157)*

**Parameters:**

Name | Type |
------ | ------ |
`a` | ArrayBuffer |

**Returns:** *FileTypeResult*

___

### `Static` isFile

▸ **isFile**(`f`: any): *boolean*

*Defined in [file.ts:231](https://github.com/cancerberoSgx/mirada/blob/f0c0267/mirada/src/file.ts#L231)*

**Parameters:**

Name | Type |
------ | ------ |
`f` | any |

**Returns:** *boolean*

___

### `Static` resolve

▸ **resolve**(`files`: string | [File](_file_.file.md) | undefined | undefined | string | [File](_file_.file.md)[]): *Promise‹[File](_file_.file.md)[]›*

*Defined in [file.ts:212](https://github.com/cancerberoSgx/mirada/blob/f0c0267/mirada/src/file.ts#L212)*

Given paths, urls or files it will try to load them all and return a list of File for those succeed.

**Parameters:**

Name | Type |
------ | ------ |
`files` | string &#124; [File](_file_.file.md) &#124; undefined &#124; undefined &#124; string &#124; [File](_file_.file.md)[] |

**Returns:** *Promise‹[File](_file_.file.md)[]›*

___

### `Static` resolveOne

▸ **resolveOne**(`files`: string | [File](_file_.file.md) | undefined | undefined | string | [File](_file_.file.md)[]): *Promise‹undefined | [File](_file_.file.md)›*

*Defined in [file.ts:204](https://github.com/cancerberoSgx/mirada/blob/f0c0267/mirada/src/file.ts#L204)*

Shortcut for [resolve] that returns the first result.

**Parameters:**

Name | Type |
------ | ------ |
`files` | string &#124; [File](_file_.file.md) &#124; undefined &#124; undefined &#124; string &#124; [File](_file_.file.md)[] |

**Returns:** *Promise‹undefined | [File](_file_.file.md)›*