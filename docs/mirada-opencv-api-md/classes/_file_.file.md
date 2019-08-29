**[mirada](../README.md)**

[Globals](../README.md) › ["File"](../modules/_file_.md) › [File](_file_.file.md)

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
* [asImageData](_file_.file.md#asimagedata)
* [asMat](_file_.file.md#asmat)
* [delete](_file_.file.md#delete)
* [getExtension](_file_.file.md#getextension)
* [getMimeType](_file_.file.md#getmimetype)
* [show](_file_.file.md#show)
* [size](_file_.file.md#size)
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

Defined in File.ts:14

**Parameters:**

Name | Type |
------ | ------ |
`name` | string |
`_mat` | [Mat](_types_opencv_mat_.mat.md) |

**Returns:** *[File](_file_.file.md)*

## Properties

### `Protected` _mat

• **_mat**: *[Mat](_types_opencv_mat_.mat.md)*

Defined in File.ts:15

___

###  name

• **name**: *string*

Defined in File.ts:15

## Accessors

###  height

• **get height**(): *any*

Defined in File.ts:50

**Returns:** *any*

___

###  mat

• **get mat**(): *[Mat](_types_opencv_mat_.mat.md)*

Defined in File.ts:54

**Returns:** *[Mat](_types_opencv_mat_.mat.md)*

___

###  width

• **get width**(): *any*

Defined in File.ts:46

**Returns:** *any*

## Methods

###  asArrayBuffer

▸ **asArrayBuffer**(`format`: string): *Promise‹ArrayBuffer›*

Defined in File.ts:61

Returns an array buffer containing the image encoded in given format or inferring format from its name.

**Parameters:**

Name | Type | Default |
------ | ------ | ------ |
`format` | string |  this.getExtension() |

**Returns:** *Promise‹ArrayBuffer›*

___

###  asBase64

▸ **asBase64**(`format`: string): *Promise‹string›*

Defined in File.ts:80

**Parameters:**

Name | Type | Default |
------ | ------ | ------ |
`format` | string |  this.getExtension() |

**Returns:** *Promise‹string›*

___

###  asDataUrl

▸ **asDataUrl**(): *string*

Defined in File.ts:42

**Returns:** *string*

___

###  asImageData

▸ **asImageData**(): *[ImageData](_types_opencv__hacks_.imagedata.md)*

Defined in File.ts:38

**Returns:** *[ImageData](_types_opencv__hacks_.imagedata.md)*

___

###  asMat

▸ **asMat**(): *[Mat](_types_opencv_mat_.mat.md)*

Defined in File.ts:34

**Returns:** *[Mat](_types_opencv_mat_.mat.md)*

___

###  delete

▸ **delete**(): *any*

Defined in File.ts:85

**Returns:** *any*

___

###  getExtension

▸ **getExtension**(): *string*

Defined in File.ts:30

**Returns:** *string*

___

###  getMimeType

▸ **getMimeType**(): *undefined | string*

Defined in File.ts:26

**Returns:** *undefined | string*

___

###  show

▸ **show**(`el`: HTMLElement): *void*

Defined in File.ts:76

Shows this image in given HTML canvas or image element.

**Parameters:**

Name | Type |
------ | ------ |
`el` | HTMLElement |

**Returns:** *void*

___

###  size

▸ **size**(): *object*

Defined in File.ts:19

**Returns:** *object*

* **height**: *any* =  this._mat.rows

* **width**: *any* =  this._mat.cols

___

###  write

▸ **write**(`path`: string, `format`: string): *Promise‹void›*

Defined in File.ts:68

Writes this image on given file path, encoded in given format (or inferred form current name).

**Parameters:**

Name | Type | Default |
------ | ------ | ------ |
`path` | string |  this.name |
`format` | string |  this.getExtension() |

**Returns:** *Promise‹void›*

___

### `Static` `Private` _buildName

▸ **_buildName**(`name`: string | undefined): *string*

Defined in File.ts:206

**Parameters:**

Name | Type |
------ | ------ |
`name` | string \| undefined |

**Returns:** *string*

___

### `Static` asPath

▸ **asPath**(`f`: string | [File](_file_.file.md)): *string*

Defined in File.ts:198

**Parameters:**

Name | Type |
------ | ------ |
`f` | string \| [File](_file_.file.md) |

**Returns:** *string*

___

### `Static` fromArrayBuffer

▸ **fromArrayBuffer**(`buffer`: ArrayBuffer, `name?`: undefined | string): *Promise‹[File](_file_.file.md)›*

Defined in File.ts:100

Loads file from given array buffer containing an encoded image.

**Parameters:**

Name | Type |
------ | ------ |
`buffer` | ArrayBuffer |
`name?` | undefined \| string |

**Returns:** *Promise‹[File](_file_.file.md)›*

___

### `Static` fromArrayBufferView

▸ **fromArrayBufferView**(`a`: ArrayBufferView, `name?`: undefined | string): *Promise‹[File](_file_.file.md)›*

Defined in File.ts:115

Loads file from given array buffer view containing an encoded image.

**Parameters:**

Name | Type |
------ | ------ |
`a` | ArrayBufferView |
`name?` | undefined \| string |

**Returns:** *Promise‹[File](_file_.file.md)›*

___

### `Static` fromBase64

▸ **fromBase64**(`base64`: string, `name?`: undefined | string): *Promise‹[File](_file_.file.md)›*

Defined in File.ts:92

Loads file from given base64 string containing an encoded image.

**Parameters:**

Name | Type |
------ | ------ |
`base64` | string |
`name?` | undefined \| string |

**Returns:** *Promise‹[File](_file_.file.md)›*

___

### `Static` fromCanvas

▸ **fromCanvas**(`el`: HTMLElement | string): *[File](_file_.file.md)*

Defined in File.ts:156

Loads file form existing HTMLElement or HTMLImageElement

**Parameters:**

Name | Type |
------ | ------ |
`el` | HTMLElement \| string |

**Returns:** *[File](_file_.file.md)*

___

### `Static` fromData

▸ **fromData**(`data`: [ImageData](_types_opencv__hacks_.imagedata.md), `name?`: undefined | string): *[File](_file_.file.md)*

Defined in File.ts:202

**Parameters:**

Name | Type |
------ | ------ |
`data` | [ImageData](_types_opencv__hacks_.imagedata.md) |
`name?` | undefined \| string |

**Returns:** *[File](_file_.file.md)*

___

### `Static` fromDataUrl

▸ **fromDataUrl**(`dataUrl`: string, `name?`: undefined | string): *Promise‹[File](_file_.file.md)›*

Defined in File.ts:135

Loads file from given data url string containing an encoded image.

**Parameters:**

Name | Type |
------ | ------ |
`dataUrl` | string |
`name?` | undefined \| string |

**Returns:** *Promise‹[File](_file_.file.md)›*

___

### `Static` fromFile

▸ **fromFile**(`path`: string, `o`: [FileOptions](../interfaces/_file_.fileoptions.md)): *Promise‹[File](_file_.file.md)›*

Defined in File.ts:222

**Parameters:**

Name | Type | Default |
------ | ------ | ------ |
`path` | string | - |
`o` | [FileOptions](../interfaces/_file_.fileoptions.md) |  {} |

**Returns:** *Promise‹[File](_file_.file.md)›*

___

### `Static` fromHtmlFileInputElement

▸ **fromHtmlFileInputElement**(`el`: HTMLInputElement): *Promise‹[File](_file_.file.md)[]›*

Defined in File.ts:142

Loads files from files in html input element of type "file".

**Parameters:**

Name | Type |
------ | ------ |
`el` | HTMLInputElement |

**Returns:** *Promise‹[File](_file_.file.md)[]›*

___

### `Static` fromMat

▸ **fromMat**(`mat`: [Mat](_types_opencv_mat_.mat.md), `name?`: undefined | string): *[File](_file_.file.md)*

Defined in File.ts:210

**Parameters:**

Name | Type |
------ | ------ |
`mat` | [Mat](_types_opencv_mat_.mat.md) |
`name?` | undefined \| string |

**Returns:** *[File](_file_.file.md)*

___

### `Static` fromUrl

▸ **fromUrl**(`url`: string, `o`: RequestInit & [FileOptions](../interfaces/_file_.fileoptions.md)): *Promise‹[File](_file_.file.md)›*

Defined in File.ts:214

**Parameters:**

Name | Type | Default |
------ | ------ | ------ |
`url` | string | - |
`o` | RequestInit & [FileOptions](../interfaces/_file_.fileoptions.md) |  {} |

**Returns:** *Promise‹[File](_file_.file.md)›*

___

### `Static` getBufferFileName

▸ **getBufferFileName**(`a`: ArrayBuffer): *string*

Defined in File.ts:127

**Parameters:**

Name | Type |
------ | ------ |
`a` | ArrayBuffer |

**Returns:** *string*

___

### `Static` getBufferFileType

▸ **getBufferFileType**(`a`: ArrayBuffer): *FileTypeResult*

Defined in File.ts:119

**Parameters:**

Name | Type |
------ | ------ |
`a` | ArrayBuffer |

**Returns:** *FileTypeResult*

___

### `Static` isFile

▸ **isFile**(`f`: any): *boolean*

Defined in File.ts:193

**Parameters:**

Name | Type |
------ | ------ |
`f` | any |

**Returns:** *boolean*

___

### `Static` resolve

▸ **resolve**(`files`: string | [File](_file_.file.md) | undefined | undefined | string | [File](_file_.file.md)[]): *Promise‹[File](_file_.file.md)[]›*

Defined in File.ts:174

Given paths, urls or files it will try to load them all and return a list of File for those succeed.

**Parameters:**

Name | Type |
------ | ------ |
`files` | string \| [File](_file_.file.md) \| undefined \| undefined \| string \| [File](_file_.file.md)[] |

**Returns:** *Promise‹[File](_file_.file.md)[]›*

___

### `Static` resolveOne

▸ **resolveOne**(`files`: string | [File](_file_.file.md) | undefined | undefined | string | [File](_file_.file.md)[]): *Promise‹undefined | [File](_file_.file.md)›*

Defined in File.ts:166

Shortcut for [resolve] that returns the first result.

**Parameters:**

Name | Type |
------ | ------ |
`files` | string \| [File](_file_.file.md) \| undefined \| undefined \| string \| [File](_file_.file.md)[] |

**Returns:** *Promise‹undefined | [File](_file_.file.md)›*