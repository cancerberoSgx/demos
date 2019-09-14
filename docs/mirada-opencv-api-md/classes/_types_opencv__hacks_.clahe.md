[mirada](../README.md) › ["types/opencv/_hacks"](../modules/_types_opencv__hacks_.md) › [CLAHE](_types_opencv__hacks_.clahe.md)

# Class: CLAHE


Base class for Contrast Limited Adaptive Histogram Equalization.

## Hierarchy

  ↳ [Algorithm](_types_opencv_algorithm_.algorithm.md)

  ↳ **CLAHE**

## Index

### Constructors

* [constructor](_types_opencv__hacks_.clahe.md#constructor)

### Methods

* [apply](_types_opencv__hacks_.clahe.md#apply)
* [clear](_types_opencv__hacks_.clahe.md#clear)
* [clone](_types_opencv__hacks_.clahe.md#clone)
* [collectGarbage](_types_opencv__hacks_.clahe.md#collectgarbage)
* [delete](_types_opencv__hacks_.clahe.md#delete)
* [deleteLater](_types_opencv__hacks_.clahe.md#deletelater)
* [empty](_types_opencv__hacks_.clahe.md#empty)
* [getClipLimit](_types_opencv__hacks_.clahe.md#getcliplimit)
* [getDefaultName](_types_opencv__hacks_.clahe.md#getdefaultname)
* [getTilesGridSize](_types_opencv__hacks_.clahe.md#gettilesgridsize)
* [isAliasOf](_types_opencv__hacks_.clahe.md#isaliasof)
* [isDeleted](_types_opencv__hacks_.clahe.md#isdeleted)
* [read](_types_opencv__hacks_.clahe.md#read)
* [save](_types_opencv__hacks_.clahe.md#save)
* [setClipLimit](_types_opencv__hacks_.clahe.md#setcliplimit)
* [setTilesGridSize](_types_opencv__hacks_.clahe.md#settilesgridsize)
* [write](_types_opencv__hacks_.clahe.md#write)
* [load](_types_opencv__hacks_.clahe.md#static-load)
* [loadFromString](_types_opencv__hacks_.clahe.md#static-loadfromstring)
* [read](_types_opencv__hacks_.clahe.md#static-read)

## Constructors

###  constructor

\+ **new CLAHE**(`clipLimit?`: [double](../modules/_types_opencv__hacks_.md#double), `totalGridSize?`: [Size](_types_opencv__hacks_.size.md)): *[CLAHE](_types_opencv__hacks_.clahe.md)*

*Overrides [Algorithm](_types_opencv_algorithm_.algorithm.md).[constructor](_types_opencv_algorithm_.algorithm.md#constructor)*

*Defined in [types/opencv/_hacks.ts:79](https://github.com/cancerberoSgx/mirada/blob/2aa7cf1/mirada/src/types/opencv/_hacks.ts#L79)*

**Parameters:**

Name | Type | Description |
------ | ------ | ------ |
`clipLimit?` | [double](../modules/_types_opencv__hacks_.md#double) | Threshold for contrast limiting. Default.  40.0, |
`totalGridSize?` | [Size](_types_opencv__hacks_.size.md) | Size of grid for histogram equalization. Input image will be divided into equally sized rectangular tiles. tileGridSize defines the number of tiles in row and column. Default: Size(8, 8)  |

**Returns:** *[CLAHE](_types_opencv__hacks_.clahe.md)*

## Methods

###  apply

▸ **apply**(`src`: [Mat](_types_opencv_mat_.mat.md), `dst`: [Mat](_types_opencv_mat_.mat.md)): *void*

*Defined in [types/opencv/_hacks.ts:90](https://github.com/cancerberoSgx/mirada/blob/2aa7cf1/mirada/src/types/opencv/_hacks.ts#L90)*

Equalizes the histogram of a grayscale image using Contrast Limited Adaptive Histogram Equalization.

**Parameters:**

Name | Type | Description |
------ | ------ | ------ |
`src` | [Mat](_types_opencv_mat_.mat.md) | Source image of type CV_8UC1 or CV_16UC1. |
`dst` | [Mat](_types_opencv_mat_.mat.md) | Destination image.  |

**Returns:** *void*

___

###  clear

▸ **clear**(): *void*

*Inherited from [Algorithm](_types_opencv_algorithm_.algorithm.md).[clear](_types_opencv_algorithm_.algorithm.md#clear)*

*Defined in [types/opencv/Algorithm.ts:53](https://github.com/cancerberoSgx/mirada/blob/2aa7cf1/mirada/src/types/opencv/Algorithm.ts#L53)*

**Returns:** *void*

___

###  clone

▸ **clone**(...`a`: any[]): *any*

*Inherited from [EmscriptenEmbindInstance](_types_opencv__hacks_.emscriptenembindinstance.md).[clone](_types_opencv__hacks_.emscriptenembindinstance.md#clone)*

*Defined in [types/opencv/_hacks.ts:120](https://github.com/cancerberoSgx/mirada/blob/2aa7cf1/mirada/src/types/opencv/_hacks.ts#L120)*

**Parameters:**

Name | Type |
------ | ------ |
`...a` | any[] |

**Returns:** *any*

___

###  collectGarbage

▸ **collectGarbage**(): *void*

*Defined in [types/opencv/_hacks.ts:91](https://github.com/cancerberoSgx/mirada/blob/2aa7cf1/mirada/src/types/opencv/_hacks.ts#L91)*

**Returns:** *void*

___

###  delete

▸ **delete**(...`a`: any[]): *any*

*Inherited from [EmscriptenEmbindInstance](_types_opencv__hacks_.emscriptenembindinstance.md).[delete](_types_opencv__hacks_.emscriptenembindinstance.md#delete)*

*Defined in [types/opencv/_hacks.ts:121](https://github.com/cancerberoSgx/mirada/blob/2aa7cf1/mirada/src/types/opencv/_hacks.ts#L121)*

**Parameters:**

Name | Type |
------ | ------ |
`...a` | any[] |

**Returns:** *any*

___

###  deleteLater

▸ **deleteLater**(...`a`: any[]): *any*

*Inherited from [EmscriptenEmbindInstance](_types_opencv__hacks_.emscriptenembindinstance.md).[deleteLater](_types_opencv__hacks_.emscriptenembindinstance.md#deletelater)*

*Defined in [types/opencv/_hacks.ts:123](https://github.com/cancerberoSgx/mirada/blob/2aa7cf1/mirada/src/types/opencv/_hacks.ts#L123)*

**Parameters:**

Name | Type |
------ | ------ |
`...a` | any[] |

**Returns:** *any*

___

###  empty

▸ **empty**(): *[bool](../modules/_types_opencv__hacks_.md#bool)*

*Inherited from [Algorithm](_types_opencv_algorithm_.algorithm.md).[empty](_types_opencv_algorithm_.algorithm.md#empty)*

*Defined in [types/opencv/Algorithm.ts:55](https://github.com/cancerberoSgx/mirada/blob/2aa7cf1/mirada/src/types/opencv/Algorithm.ts#L55)*

**Returns:** *[bool](../modules/_types_opencv__hacks_.md#bool)*

___

###  getClipLimit

▸ **getClipLimit**(): *[double](../modules/_types_opencv__hacks_.md#double)*

*Defined in [types/opencv/_hacks.ts:95](https://github.com/cancerberoSgx/mirada/blob/2aa7cf1/mirada/src/types/opencv/_hacks.ts#L95)*

Returns threshold value for contrast limiting.

**Returns:** *[double](../modules/_types_opencv__hacks_.md#double)*

___

###  getDefaultName

▸ **getDefaultName**(): *String*

*Inherited from [Algorithm](_types_opencv_algorithm_.algorithm.md).[getDefaultName](_types_opencv_algorithm_.algorithm.md#getdefaultname)*

*Defined in [types/opencv/Algorithm.ts:61](https://github.com/cancerberoSgx/mirada/blob/2aa7cf1/mirada/src/types/opencv/Algorithm.ts#L61)*

  Returns the algorithm string identifier. This string is used as top level xml/yml node tag when
the object is saved to a file or string.

**Returns:** *String*

___

###  getTilesGridSize

▸ **getTilesGridSize**(): *[Size](_types_opencv__hacks_.size.md)*

*Defined in [types/opencv/_hacks.ts:99](https://github.com/cancerberoSgx/mirada/blob/2aa7cf1/mirada/src/types/opencv/_hacks.ts#L99)*

Returns Size defines the number of tiles in row and column.

**Returns:** *[Size](_types_opencv__hacks_.size.md)*

___

###  isAliasOf

▸ **isAliasOf**(...`a`: any[]): *any*

*Inherited from [EmscriptenEmbindInstance](_types_opencv__hacks_.emscriptenembindinstance.md).[isAliasOf](_types_opencv__hacks_.emscriptenembindinstance.md#isaliasof)*

*Defined in [types/opencv/_hacks.ts:119](https://github.com/cancerberoSgx/mirada/blob/2aa7cf1/mirada/src/types/opencv/_hacks.ts#L119)*

**Parameters:**

Name | Type |
------ | ------ |
`...a` | any[] |

**Returns:** *any*

___

###  isDeleted

▸ **isDeleted**(...`a`: any[]): *any*

*Inherited from [EmscriptenEmbindInstance](_types_opencv__hacks_.emscriptenembindinstance.md).[isDeleted](_types_opencv__hacks_.emscriptenembindinstance.md#isdeleted)*

*Defined in [types/opencv/_hacks.ts:122](https://github.com/cancerberoSgx/mirada/blob/2aa7cf1/mirada/src/types/opencv/_hacks.ts#L122)*

**Parameters:**

Name | Type |
------ | ------ |
`...a` | any[] |

**Returns:** *any*

___

###  read

▸ **read**(`fn`: [FileNode](../modules/_types_opencv__hacks_.md#filenode)): *[FileNode](../modules/_types_opencv__hacks_.md#filenode)*

*Inherited from [Algorithm](_types_opencv_algorithm_.algorithm.md).[read](_types_opencv_algorithm_.algorithm.md#read)*

*Defined in [types/opencv/Algorithm.ts:63](https://github.com/cancerberoSgx/mirada/blob/2aa7cf1/mirada/src/types/opencv/Algorithm.ts#L63)*

**Parameters:**

Name | Type |
------ | ------ |
`fn` | [FileNode](../modules/_types_opencv__hacks_.md#filenode) |

**Returns:** *[FileNode](../modules/_types_opencv__hacks_.md#filenode)*

___

###  save

▸ **save**(`filename`: String): *String*

*Inherited from [Algorithm](_types_opencv_algorithm_.algorithm.md).[save](_types_opencv_algorithm_.algorithm.md#save)*

*Defined in [types/opencv/Algorithm.ts:69](https://github.com/cancerberoSgx/mirada/blob/2aa7cf1/mirada/src/types/opencv/Algorithm.ts#L69)*

  Saves the algorithm to a file. In order to make this method work, the derived class must implement
Algorithm::write(FileStorage& fs).

**Parameters:**

Name | Type |
------ | ------ |
`filename` | String |

**Returns:** *String*

___

###  setClipLimit

▸ **setClipLimit**(`clipLimit`: [double](../modules/_types_opencv__hacks_.md#double)): *void*

*Defined in [types/opencv/_hacks.ts:103](https://github.com/cancerberoSgx/mirada/blob/2aa7cf1/mirada/src/types/opencv/_hacks.ts#L103)*

Sets threshold for contrast limiting.

**Parameters:**

Name | Type |
------ | ------ |
`clipLimit` | [double](../modules/_types_opencv__hacks_.md#double) |

**Returns:** *void*

___

###  setTilesGridSize

▸ **setTilesGridSize**(`tileGridSize`: [Size](_types_opencv__hacks_.size.md)): *void*

*Defined in [types/opencv/_hacks.ts:108](https://github.com/cancerberoSgx/mirada/blob/2aa7cf1/mirada/src/types/opencv/_hacks.ts#L108)*

Sets size of grid for histogram equalization. Input image will be divided into equally sized rectangular tiles.

**Parameters:**

Name | Type | Description |
------ | ------ | ------ |
`tileGridSize` | [Size](_types_opencv__hacks_.size.md) | defines the number of tiles in row and column.  |

**Returns:** *void*

___

###  write

▸ **write**(`fs`: [FileStorage](../modules/_types_opencv__hacks_.md#filestorage)): *[FileStorage](../modules/_types_opencv__hacks_.md#filestorage)*

*Inherited from [Algorithm](_types_opencv_algorithm_.algorithm.md).[write](_types_opencv_algorithm_.algorithm.md#write)*

*Defined in [types/opencv/Algorithm.ts:71](https://github.com/cancerberoSgx/mirada/blob/2aa7cf1/mirada/src/types/opencv/Algorithm.ts#L71)*

**Parameters:**

Name | Type |
------ | ------ |
`fs` | [FileStorage](../modules/_types_opencv__hacks_.md#filestorage) |

**Returns:** *[FileStorage](../modules/_types_opencv__hacks_.md#filestorage)*

▸ **write**(`fs`: [Ptr](../modules/_types_opencv__hacks_.md#ptr), `name?`: String): *[Ptr](../modules/_types_opencv__hacks_.md#ptr)*

*Inherited from [Algorithm](_types_opencv_algorithm_.algorithm.md).[write](_types_opencv_algorithm_.algorithm.md#write)*

*Defined in [types/opencv/Algorithm.ts:73](https://github.com/cancerberoSgx/mirada/blob/2aa7cf1/mirada/src/types/opencv/Algorithm.ts#L73)*

**Parameters:**

Name | Type |
------ | ------ |
`fs` | [Ptr](../modules/_types_opencv__hacks_.md#ptr) |
`name?` | String |

**Returns:** *[Ptr](../modules/_types_opencv__hacks_.md#ptr)*

___

### `Static` load

▸ **load**(`arg0`: any, `filename`: String, `objname?`: String): *[Ptr](../modules/_types_opencv__hacks_.md#ptr)*

*Inherited from [Algorithm](_types_opencv_algorithm_.algorithm.md).[load](_types_opencv_algorithm_.algorithm.md#static-load)*

*Defined in [types/opencv/Algorithm.ts:90](https://github.com/cancerberoSgx/mirada/blob/2aa7cf1/mirada/src/types/opencv/Algorithm.ts#L90)*

  This is static template method of [Algorithm]. It's usage is following (in the case of SVM):

  ```cpp
  Ptr<SVM> svm = Algorithm::load<SVM>("my_svm_model.xml");
  ```

   In order to make this method work, the derived class must overwrite [Algorithm::read](const
[FileNode]& fn).

**Parameters:**

Name | Type | Description |
------ | ------ | ------ |
`arg0` | any | - |
`filename` | String | Name of the file to read.  |
`objname?` | String | The optional name of the node to read (if empty, the first top-level node will be used)  |

**Returns:** *[Ptr](../modules/_types_opencv__hacks_.md#ptr)*

___

### `Static` loadFromString

▸ **loadFromString**(`arg1`: any, `strModel`: String, `objname?`: String): *[Ptr](../modules/_types_opencv__hacks_.md#ptr)*

*Inherited from [Algorithm](_types_opencv_algorithm_.algorithm.md).[loadFromString](_types_opencv_algorithm_.algorithm.md#static-loadfromstring)*

*Defined in [types/opencv/Algorithm.ts:104](https://github.com/cancerberoSgx/mirada/blob/2aa7cf1/mirada/src/types/opencv/Algorithm.ts#L104)*

  This is static template method of [Algorithm]. It's usage is following (in the case of SVM):

  ```cpp
  Ptr<SVM> svm = Algorithm::loadFromString<SVM>(myStringModel);
  ```

**Parameters:**

Name | Type | Description |
------ | ------ | ------ |
`arg1` | any | - |
`strModel` | String | The string variable containing the model you want to load.  |
`objname?` | String | The optional name of the node to read (if empty, the first top-level node will be used)  |

**Returns:** *[Ptr](../modules/_types_opencv__hacks_.md#ptr)*

___

### `Static` read

▸ **read**(`arg2`: any, `fn`: [FileNode](../modules/_types_opencv__hacks_.md#filenode)): *[Ptr](../modules/_types_opencv__hacks_.md#ptr)*

*Inherited from [Algorithm](_types_opencv_algorithm_.algorithm.md).[read](_types_opencv_algorithm_.algorithm.md#static-read)*

*Defined in [types/opencv/Algorithm.ts:118](https://github.com/cancerberoSgx/mirada/blob/2aa7cf1/mirada/src/types/opencv/Algorithm.ts#L118)*

  This is static template method of [Algorithm]. It's usage is following (in the case of SVM):

  ```cpp
  cv::FileStorage fsRead("example.xml", FileStorage::READ);
  Ptr<SVM> svm = Algorithm::read<SVM>(fsRead.root());
  ```

   In order to make this method work, the derived class must overwrite [Algorithm::read](const
[FileNode]& fn) and also have static create() method without parameters (or with all the optional
parameters)

**Parameters:**

Name | Type |
------ | ------ |
`arg2` | any |
`fn` | [FileNode](../modules/_types_opencv__hacks_.md#filenode) |

**Returns:** *[Ptr](../modules/_types_opencv__hacks_.md#ptr)*