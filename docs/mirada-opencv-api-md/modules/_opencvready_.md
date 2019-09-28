[mirada](../README.md) › ["opencvReady"](_opencvready_.md)

# External module: "opencvReady"


## Index

### Variables

* [FS_](_opencvready_.md#let-fs_)
* [FS_ROOT](_opencvready_.md#const-fs_root)
* [opencvLoaded](_opencvready_.md#let-opencvloaded)

### Functions

* [getFS](_opencvready_.md#getfs)
* [loadFormatCodecs](_opencvready_.md#loadformatcodecs)
* [loadOpencv](_opencvready_.md#loadopencv)
* [loadOpencvBrowser](_opencvready_.md#loadopencvbrowser)
* [loadOpencvNode](_opencvready_.md#loadopencvnode)

## Variables

### `Let` FS_

• **FS_**: *[FS](../interfaces/_types_emscripten_.fs.md) | undefined*

*Defined in [opencvReady.ts:10](https://github.com/cancerberoSgx/mirada/blob/c8721d6/mirada/src/opencvReady.ts#L10)*

___

### `Const` FS_ROOT

• **FS_ROOT**: *"/work"* = "/work"

*Defined in [opencvReady.ts:8](https://github.com/cancerberoSgx/mirada/blob/c8721d6/mirada/src/opencvReady.ts#L8)*

___

### `Let` opencvLoaded

• **opencvLoaded**: *boolean* = false

*Defined in [opencvReady.ts:19](https://github.com/cancerberoSgx/mirada/blob/c8721d6/mirada/src/opencvReady.ts#L19)*

## Functions

###  getFS

▸ **getFS**(): *[FS](../interfaces/_types_emscripten_.fs.md)*

*Defined in [opencvReady.ts:15](https://github.com/cancerberoSgx/mirada/blob/c8721d6/mirada/src/opencvReady.ts#L15)*

gets the emscripten FS API

**Returns:** *[FS](../interfaces/_types_emscripten_.fs.md)*

___

###  loadFormatCodecs

▸ **loadFormatCodecs**(`o`: [LoadOptions](../interfaces/_types_mirada_.loadoptions.md)): *Promise‹void›*

*Defined in [opencvReady.ts:57](https://github.com/cancerberoSgx/mirada/blob/c8721d6/mirada/src/opencvReady.ts#L57)*

**Parameters:**

Name | Type |
------ | ------ |
`o` | [LoadOptions](../interfaces/_types_mirada_.loadoptions.md) |

**Returns:** *Promise‹void›*

___

###  loadOpencv

▸ **loadOpencv**(`options`: [LoadOptions](../interfaces/_types_mirada_.loadoptions.md)): *Promise‹void›*

*Defined in [opencvReady.ts:31](https://github.com/cancerberoSgx/mirada/blob/c8721d6/mirada/src/opencvReady.ts#L31)*

Loads opencv.js file. It will do it only once no matter if called multiple times.
In the browser a new script element is created to load the file while in Node.js
the file is loaded using a require() call.

Returns a promise resolved when the library is ready or rejected if there's a problem.

Notice that among the options users can define the location of opencv.js file, which
in the case of the browser it could be in an external server.

**Parameters:**

Name | Type | Default |
------ | ------ | ------ |
`options` | [LoadOptions](../interfaces/_types_mirada_.loadoptions.md) |  {} |

**Returns:** *Promise‹void›*

___

###  loadOpencvBrowser

▸ **loadOpencvBrowser**(`o`: [LoadOptions](../interfaces/_types_mirada_.loadoptions.md)): *Promise‹[FS](../interfaces/_types_emscripten_.fs.md)›*

*Defined in [opencvReady.ts:101](https://github.com/cancerberoSgx/mirada/blob/c8721d6/mirada/src/opencvReady.ts#L101)*

**Parameters:**

Name | Type |
------ | ------ |
`o` | [LoadOptions](../interfaces/_types_mirada_.loadoptions.md) |

**Returns:** *Promise‹[FS](../interfaces/_types_emscripten_.fs.md)›*

___

###  loadOpencvNode

▸ **loadOpencvNode**(`o`: [LoadOptions](../interfaces/_types_mirada_.loadoptions.md)): *Promise‹[FS](../interfaces/_types_emscripten_.fs.md)›*

*Defined in [opencvReady.ts:64](https://github.com/cancerberoSgx/mirada/blob/c8721d6/mirada/src/opencvReady.ts#L64)*

**Parameters:**

Name | Type |
------ | ------ |
`o` | [LoadOptions](../interfaces/_types_mirada_.loadoptions.md) |

**Returns:** *Promise‹[FS](../interfaces/_types_emscripten_.fs.md)›*