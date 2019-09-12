**[mirada](../README.md)**

[Globals](../README.md) › ["util/fileUtil"](_util_fileutil_.md)

# External module: "util/fileUtil"

## Index

### Interfaces

* [a](../interfaces/_util_fileutil_.a.md)

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

*Defined in [util/fileUtil.ts:14](https://github.com/cancerberoSgx/mirada/blob/f2ba50d/mirada/src/util/fileUtil.ts#L14)*

Returns file name / path of given file relative to emscripten FS root  (in the context of emscripten FS)

**Parameters:**

Name | Type |
------ | ------ |
`path` | string |

**Returns:** *string*

___

###  getFilePath

▸ **getFilePath**(`path`: string): *string*

*Defined in [util/fileUtil.ts:21](https://github.com/cancerberoSgx/mirada/blob/f2ba50d/mirada/src/util/fileUtil.ts#L21)*

Returns absolute path of given file (in the context of emscripten FS)

**Parameters:**

Name | Type |
------ | ------ |
`path` | string |

**Returns:** *string*

___

###  isDir

▸ **isDir**(`f`: string, `FS`: [FS](../interfaces/_types_emscripten_.fs.md)): *boolean*

*Defined in [util/fileUtil.ts:33](https://github.com/cancerberoSgx/mirada/blob/f2ba50d/mirada/src/util/fileUtil.ts#L33)*

**Parameters:**

Name | Type | Default |
------ | ------ | ------ |
`f` | string | - |
`FS` | [FS](../interfaces/_types_emscripten_.fs.md) |  cv.FS |

**Returns:** *boolean*

___

###  isFile

▸ **isFile**(`f`: string, `FS`: [FS](../interfaces/_types_emscripten_.fs.md)): *boolean*

*Defined in [util/fileUtil.ts:41](https://github.com/cancerberoSgx/mirada/blob/f2ba50d/mirada/src/util/fileUtil.ts#L41)*

**Parameters:**

Name | Type | Default |
------ | ------ | ------ |
`f` | string | - |
`FS` | [FS](../interfaces/_types_emscripten_.fs.md) |  cv.FS |

**Returns:** *boolean*

___

###  loadDataFile

▸ **loadDataFile**(`url`: string, `name?`: undefined | string): *Promise‹string›*

*Defined in [util/fileUtil.ts:53](https://github.com/cancerberoSgx/mirada/blob/f2ba50d/mirada/src/util/fileUtil.ts#L53)*

**Parameters:**

Name | Type |
------ | ------ |
`url` | string |
`name?` | undefined \| string |

**Returns:** *Promise‹string›*

___

###  readFile

▸ **readFile**(`f`: string, `FS`: [FS](../interfaces/_types_emscripten_.fs.md)): *ArrayBufferView*

*Defined in [util/fileUtil.ts:7](https://github.com/cancerberoSgx/mirada/blob/f2ba50d/mirada/src/util/fileUtil.ts#L7)*

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

*Defined in [util/fileUtil.ts:29](https://github.com/cancerberoSgx/mirada/blob/f2ba50d/mirada/src/util/fileUtil.ts#L29)*

**Parameters:**

Name | Type | Default |
------ | ------ | ------ |
`f` | string | - |
`FS` | [FS](../interfaces/_types_emscripten_.fs.md) |  cv.FS |

**Returns:** *void*

___

###  writeFile

▸ **writeFile**(`name`: string, `f`: ArrayBufferView, `FS`: [FS](../interfaces/_types_emscripten_.fs.md)): *void*

*Defined in [util/fileUtil.ts:25](https://github.com/cancerberoSgx/mirada/blob/f2ba50d/mirada/src/util/fileUtil.ts#L25)*

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

*Defined in [util/fileUtil.ts:49](https://github.com/cancerberoSgx/mirada/blob/f2ba50d/mirada/src/util/fileUtil.ts#L49)*

###  getFileName

• **getFileName**: *[getFileName](_util_fileutil_.md#getfilename)*

*Defined in [util/fileUtil.ts:50](https://github.com/cancerberoSgx/mirada/blob/f2ba50d/mirada/src/util/fileUtil.ts#L50)*

###  getFilePath

• **getFilePath**: *[getFilePath](_util_fileutil_.md#getfilepath)*

*Defined in [util/fileUtil.ts:50](https://github.com/cancerberoSgx/mirada/blob/f2ba50d/mirada/src/util/fileUtil.ts#L50)*

###  isDir

• **isDir**: *[isDir](_util_fileutil_.md#isdir)*

*Defined in [util/fileUtil.ts:50](https://github.com/cancerberoSgx/mirada/blob/f2ba50d/mirada/src/util/fileUtil.ts#L50)*

###  isFile

• **isFile**: *[isFile](_util_fileutil_.md#isfile)*

*Defined in [util/fileUtil.ts:50](https://github.com/cancerberoSgx/mirada/blob/f2ba50d/mirada/src/util/fileUtil.ts#L50)*

###  readFile

• **readFile**: *[readFile](_util_fileutil_.md#readfile)*

*Defined in [util/fileUtil.ts:50](https://github.com/cancerberoSgx/mirada/blob/f2ba50d/mirada/src/util/fileUtil.ts#L50)*

###  removeFile

• **removeFile**: *[removeFile](_util_fileutil_.md#removefile)*

*Defined in [util/fileUtil.ts:50](https://github.com/cancerberoSgx/mirada/blob/f2ba50d/mirada/src/util/fileUtil.ts#L50)*

###  writeFile

• **writeFile**: *[writeFile](_util_fileutil_.md#writefile)*

*Defined in [util/fileUtil.ts:50](https://github.com/cancerberoSgx/mirada/blob/f2ba50d/mirada/src/util/fileUtil.ts#L50)*