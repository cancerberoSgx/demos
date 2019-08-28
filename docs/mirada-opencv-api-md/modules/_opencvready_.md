**[mirada](../README.md)**

[Globals](../README.md) › ["opencvReady"](_opencvready_.md)

# External module: "opencvReady"

## Index

### Interfaces

* [LoadOptions](../interfaces/_opencvready_.loadoptions.md)

### Variables

* [FS_](_opencvready_.md#let-fs_)
* [FS_ROOT](_opencvready_.md#const-fs_root)
* [opencvLoaded](_opencvready_.md#let-opencvloaded)

### Functions

* [finishSetup](_opencvready_.md#finishsetup)
* [getFS](_opencvready_.md#getfs)
* [loadOpencv](_opencvready_.md#loadopencv)
* [loadOpencvBrowser](_opencvready_.md#loadopencvbrowser)
* [loadOpencvNode](_opencvready_.md#loadopencvnode)

## Variables

### `Let` FS_

• **FS_**: *[FS](../interfaces/_types_emscripten_.fs.md)*

___

### `Const` FS_ROOT

• **FS_ROOT**: *"/work"* = "/work"

___

### `Let` opencvLoaded

• **opencvLoaded**: *boolean* = false

## Functions

###  finishSetup

▸ **finishSetup**(): *Promise‹void›*

**Returns:** *Promise‹void›*

___

###  getFS

▸ **getFS**(): *[FS](../interfaces/_types_emscripten_.fs.md)*

gets the emscripten FS API

**Returns:** *[FS](../interfaces/_types_emscripten_.fs.md)*

___

###  loadOpencv

▸ **loadOpencv**(`options`: [LoadOptions](../interfaces/_opencvready_.loadoptions.md)): *Promise‹void› | Promise‹[FS](../interfaces/_types_emscripten_.fs.md)›*

Loads opencv.js file. It will do it only once no matter if called multiple times.
In the browser a new script element is created to load the file while in Node.js
the file is loaded using a require() call.

Returns a promise resolved when the library is ready or rejected if there's a problem.

Notice that among the options users can define the location of opencv.js file, which
in the case of the browser it could be in an external server.

**Parameters:**

Name | Type | Default |
------ | ------ | ------ |
`options` | [LoadOptions](../interfaces/_opencvready_.loadoptions.md) |  {} |

**Returns:** *Promise‹void› | Promise‹[FS](../interfaces/_types_emscripten_.fs.md)›*

___

###  loadOpencvBrowser

▸ **loadOpencvBrowser**(`o`: [LoadOptions](../interfaces/_opencvready_.loadoptions.md)): *Promise‹[FS](../interfaces/_types_emscripten_.fs.md)›*

**Parameters:**

Name | Type | Default |
------ | ------ | ------ |
`o` | [LoadOptions](../interfaces/_opencvready_.loadoptions.md) |  {} |

**Returns:** *Promise‹[FS](../interfaces/_types_emscripten_.fs.md)›*

___

###  loadOpencvNode

▸ **loadOpencvNode**(`o`: [LoadOptions](../interfaces/_opencvready_.loadoptions.md)): *Promise‹[FS](../interfaces/_types_emscripten_.fs.md)›*

**Parameters:**

Name | Type | Default |
------ | ------ | ------ |
`o` | [LoadOptions](../interfaces/_opencvready_.loadoptions.md) |  {} |

**Returns:** *Promise‹[FS](../interfaces/_types_emscripten_.fs.md)›*