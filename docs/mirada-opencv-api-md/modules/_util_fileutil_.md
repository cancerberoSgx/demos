**[mirada](../README.md)**

[Globals](../README.md) › ["util/fileUtil"](_util_fileutil_.md)

# External module: "util/fileUtil"

## Index

### Functions

* [getFileName](_util_fileutil_.md#getfilename)
* [getFilePath](_util_fileutil_.md#getfilepath)
* [isDir](_util_fileutil_.md#isdir)
* [isFile](_util_fileutil_.md#isfile)
* [loadDataFile](_util_fileutil_.md#loaddatafile)
* [readFile](_util_fileutil_.md#readfile)
* [removeFile](_util_fileutil_.md#removefile)
* [writeFile](_util_fileutil_.md#writefile)

### Object literals

* [fileUtil](_util_fileutil_.md#const-fileutil)

## Functions

###  getFileName

▸ **getFileName**(`path`: string): *string*

Returns file name / path of given file relative to emscripten FS root  (in the context of emscripten FS)

**Parameters:**

Name | Type |
------ | ------ |
`path` | string |

**Returns:** *string*

___

###  getFilePath

▸ **getFilePath**(`path`: string): *string*

Returns absolute path of given file (in the context of emscripten FS)

**Parameters:**

Name | Type |
------ | ------ |
`path` | string |

**Returns:** *string*

___

###  isDir

▸ **isDir**(`f`: string, `FS`: [FS](../interfaces/_types_emscripten_.fs.md)): *boolean*

**Parameters:**

Name | Type | Default |
------ | ------ | ------ |
`f` | string | - |
`FS` | [FS](../interfaces/_types_emscripten_.fs.md) |  cv.FS |

**Returns:** *boolean*

___

###  isFile

▸ **isFile**(`f`: string, `FS`: [FS](../interfaces/_types_emscripten_.fs.md)): *boolean*

**Parameters:**

Name | Type | Default |
------ | ------ | ------ |
`f` | string | - |
`FS` | [FS](../interfaces/_types_emscripten_.fs.md) |  cv.FS |

**Returns:** *boolean*

___

###  loadDataFile

▸ **loadDataFile**(`url`: string, `name?`: undefined | string): *Promise‹string›*

**Parameters:**

Name | Type |
------ | ------ |
`url` | string |
`name?` | undefined \| string |

**Returns:** *Promise‹string›*

___

###  readFile

▸ **readFile**(`f`: string, `FS`: [FS](../interfaces/_types_emscripten_.fs.md)): *ArrayBufferView*

if given a file it ignores its contents and alwasys read again from FS

**Parameters:**

Name | Type | Default |
------ | ------ | ------ |
`f` | string | - |
`FS` | [FS](../interfaces/_types_emscripten_.fs.md) |  cv.FS |

**Returns:** *ArrayBufferView*

___

###  removeFile

▸ **removeFile**(`f`: string, `FS`: [FS](../interfaces/_types_emscripten_.fs.md)): *void*

**Parameters:**

Name | Type | Default |
------ | ------ | ------ |
`f` | string | - |
`FS` | [FS](../interfaces/_types_emscripten_.fs.md) |  cv.FS |

**Returns:** *void*

___

###  writeFile

▸ **writeFile**(`name`: string, `f`: ArrayBufferView, `FS`: [FS](../interfaces/_types_emscripten_.fs.md)): *void*

**Parameters:**

Name | Type | Default |
------ | ------ | ------ |
`name` | string | - |
`f` | ArrayBufferView | - |
`FS` | [FS](../interfaces/_types_emscripten_.fs.md) |  cv.FS |

**Returns:** *void*

## Object literals

### `Const` fileUtil

### ▪ **fileUtil**: *object*

###  getFileName

• **getFileName**: *[getFileName](_util_fileutil_.md#getfilename)*

###  getFilePath

• **getFilePath**: *[getFilePath](_util_fileutil_.md#getfilepath)*

###  isDir

• **isDir**: *[isDir](_util_fileutil_.md#isdir)*

###  isFile

• **isFile**: *[isFile](_util_fileutil_.md#isfile)*

###  readFile

• **readFile**: *[readFile](_util_fileutil_.md#readfile)*

###  removeFile

• **removeFile**: *[removeFile](_util_fileutil_.md#removefile)*

###  writeFile

• **writeFile**: *[writeFile](_util_fileutil_.md#writefile)*