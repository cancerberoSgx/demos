**[mirada](../README.md)**

[Globals](../README.md) › ["file"](../modules/_file_.md) › [File](_file_.file.md)

# Class: File

A thin layer on top of cv.Mat with lots of utilities to load, write, encode, etc.

## Hierarchy

* **File**

## Index

### Constructors

* [constructor](_file_.file.md#constructor)

### Properties

* [mat](_file_.file.md#protected-mat)
* [name](_file_.file.md#name)

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

\+ **new File**(`name`: string, `mat`: [Mat](_types_opencv_mat_.mat.md)): *[File](_file_.file.md)*

**Parameters:**

Name | Type |
------ | ------ |
`name` | string |
`mat` | [Mat](_types_opencv_mat_.mat.md) |

**Returns:** *[File](_file_.file.md)*

## Properties

### `Protected` mat

• **mat**: *[Mat](_types_opencv_mat_.mat.md)*

___

###  name

• **name**: *string*

## Methods

###  asArrayBuffer

▸ **asArrayBuffer**(`format`: string): *Promise‹ArrayBuffer›*

Returns an array buffer containing the image encoded in given format or inferring format from its name.

**Parameters:**

Name | Type | Default |
------ | ------ | ------ |
`format` | string |  this.getExtension() |

**Returns:** *Promise‹ArrayBuffer›*

___

###  asBase64

▸ **asBase64**(`format`: string): *Promise‹string›*

**Parameters:**

Name | Type | Default |
------ | ------ | ------ |
`format` | string |  this.getExtension() |

**Returns:** *Promise‹string›*

___

###  asDataUrl

▸ **asDataUrl**(): *string*

**Returns:** *string*

___

###  asImageData

▸ **asImageData**(): *[ImageData](_types_opencv__hacks_.imagedata.md)*

**Returns:** *[ImageData](_types_opencv__hacks_.imagedata.md)*

___

###  asMat

▸ **asMat**(): *[Mat](_types_opencv_mat_.mat.md)*

**Returns:** *[Mat](_types_opencv_mat_.mat.md)*

___

###  delete

▸ **delete**(): *any*

**Returns:** *any*

___

###  getExtension

▸ **getExtension**(): *string*

**Returns:** *string*

___

###  getMimeType

▸ **getMimeType**(): *undefined | string*

**Returns:** *undefined | string*

___

###  show

▸ **show**(`el`: HTMLElement): *void*

Shows this image in given HTML canvas or image element.

**Parameters:**

Name | Type |
------ | ------ |
`el` | HTMLElement |

**Returns:** *void*

___

###  size

▸ **size**(): *object*

**Returns:** *object*

* **height**: *any* =  this.mat.rows

* **width**: *any* =  this.mat.cols

___

###  write

▸ **write**(`path`: string, `format`: string): *Promise‹void›*

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

**Parameters:**

Name | Type |
------ | ------ |
`name` | string \| undefined |

**Returns:** *string*

___

### `Static` asPath

▸ **asPath**(`f`: string | [File](_file_.file.md)): *string*

**Parameters:**

Name | Type |
------ | ------ |
`f` | string \| [File](_file_.file.md) |

**Returns:** *string*

___

### `Static` fromArrayBuffer

▸ **fromArrayBuffer**(`buffer`: ArrayBuffer, `name?`: undefined | string): *Promise‹[File](_file_.file.md)›*

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

Loads file form existing HTMLElement or HTMLImageElement

**Parameters:**

Name | Type |
------ | ------ |
`el` | HTMLElement \| string |

**Returns:** *[File](_file_.file.md)*

___

### `Static` fromData

▸ **fromData**(`data`: [ImageData](_types_opencv__hacks_.imagedata.md), `name?`: undefined | string): *[File](_file_.file.md)*

**Parameters:**

Name | Type |
------ | ------ |
`data` | [ImageData](_types_opencv__hacks_.imagedata.md) |
`name?` | undefined \| string |

**Returns:** *[File](_file_.file.md)*

___

### `Static` fromDataUrl

▸ **fromDataUrl**(`dataUrl`: string, `name?`: undefined | string): *Promise‹[File](_file_.file.md)›*

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

**Parameters:**

Name | Type | Default |
------ | ------ | ------ |
`path` | string | - |
`o` | [FileOptions](../interfaces/_file_.fileoptions.md) |  {} |

**Returns:** *Promise‹[File](_file_.file.md)›*

___

### `Static` fromHtmlFileInputElement

▸ **fromHtmlFileInputElement**(`el`: HTMLInputElement): *Promise‹[File](_file_.file.md)[]›*

Loads files from files in html input element of type "file".

**Parameters:**

Name | Type |
------ | ------ |
`el` | HTMLInputElement |

**Returns:** *Promise‹[File](_file_.file.md)[]›*

___

### `Static` fromMat

▸ **fromMat**(`mat`: [Mat](_types_opencv_mat_.mat.md), `name?`: undefined | string): *[File](_file_.file.md)*

**Parameters:**

Name | Type |
------ | ------ |
`mat` | [Mat](_types_opencv_mat_.mat.md) |
`name?` | undefined \| string |

**Returns:** *[File](_file_.file.md)*

___

### `Static` fromUrl

▸ **fromUrl**(`url`: string, `o`: RequestInit & [FileOptions](../interfaces/_file_.fileoptions.md)): *Promise‹[File](_file_.file.md)›*

**Parameters:**

Name | Type | Default |
------ | ------ | ------ |
`url` | string | - |
`o` | RequestInit & [FileOptions](../interfaces/_file_.fileoptions.md) |  {} |

**Returns:** *Promise‹[File](_file_.file.md)›*

___

### `Static` getBufferFileName

▸ **getBufferFileName**(`a`: ArrayBuffer): *string*

**Parameters:**

Name | Type |
------ | ------ |
`a` | ArrayBuffer |

**Returns:** *string*

___

### `Static` getBufferFileType

▸ **getBufferFileType**(`a`: ArrayBuffer): *FileTypeResult*

**Parameters:**

Name | Type |
------ | ------ |
`a` | ArrayBuffer |

**Returns:** *FileTypeResult*

___

### `Static` isFile

▸ **isFile**(`f`: any): *boolean*

**Parameters:**

Name | Type |
------ | ------ |
`f` | any |

**Returns:** *boolean*

___

### `Static` resolve

▸ **resolve**(`files`: string | [File](_file_.file.md) | undefined | undefined | string | [File](_file_.file.md)[]): *Promise‹[File](_file_.file.md)[]›*

Given paths, urls or files it will try to load them all and return a list of File for those succeed.

**Parameters:**

Name | Type |
------ | ------ |
`files` | string \| [File](_file_.file.md) \| undefined \| undefined \| string \| [File](_file_.file.md)[] |

**Returns:** *Promise‹[File](_file_.file.md)[]›*

___

### `Static` resolveOne

▸ **resolveOne**(`files`: string | [File](_file_.file.md) | undefined | undefined | string | [File](_file_.file.md)[]): *Promise‹undefined | [File](_file_.file.md)›*

Shortcut for [resolve] that returns the first result.

**Parameters:**

Name | Type |
------ | ------ |
`files` | string \| [File](_file_.file.md) \| undefined \| undefined \| string \| [File](_file_.file.md)[] |

**Returns:** *Promise‹undefined | [File](_file_.file.md)›*