**[mirada](../README.md)**

[Globals](../README.md) › ["browser/canvasRender"](_browser_canvasrender_.md)

# External module: "browser/canvasRender"

## Index

### Interfaces

* [ABOptions](../interfaces/_browser_canvasrender_.aboptions.md)
* [Options](../interfaces/_browser_canvasrender_.options.md)

### Variables

* [defaultABOptions](_browser_canvasrender_.md#const-defaultaboptions)

### Functions

* [renderArrayBufferInCanvas](_browser_canvasrender_.md#renderarraybufferincanvas)
* [renderInCanvas](_browser_canvasrender_.md#renderincanvas)

### Object literals

* [defaultOptions](_browser_canvasrender_.md#const-defaultoptions)

## Variables

### `Const` defaultABOptions

• **defaultABOptions**: *[ABOptions](../interfaces/_browser_canvasrender_.aboptions.md)*

Defined in browser/canvasRender.ts:12

## Functions

###  renderArrayBufferInCanvas

▸ **renderArrayBufferInCanvas**(`a`: ArrayBuffer, `mime`: string, `options`: [ABOptions](../interfaces/_browser_canvasrender_.aboptions.md)): *Promise‹object›*

Defined in browser/canvasRender.ts:22

A sub optimal method to load a image array buffer (encoded in jpg, png) whiteouts knowing its format or size.
1) creates a blob and a url object
* loads the url in a HTML Image (to know its dimensions )
* draw the image in a canvas ().

This method is useful as a decoder for the browser without libraries

**Parameters:**

Name | Type | Default |
------ | ------ | ------ |
`a` | ArrayBuffer | - |
`mime` | string | - |
`options` | [ABOptions](../interfaces/_browser_canvasrender_.aboptions.md) |  defaultABOptions |

**Returns:** *Promise‹object›*

___

###  renderInCanvas

▸ **renderInCanvas**(`mat`: [Mat](../classes/_types_opencv_mat_.mat.md), `options?`: [Options](../interfaces/_browser_canvasrender_.options.md)): *HTMLCanvasElement*

Defined in browser/canvasRender.ts:63

**Parameters:**

Name | Type |
------ | ------ |
`mat` | [Mat](../classes/_types_opencv_mat_.mat.md) |
`options?` | [Options](../interfaces/_browser_canvasrender_.options.md) |

**Returns:** *HTMLCanvasElement*

## Object literals

### `Const` defaultOptions

### ▪ **defaultOptions**: *object*

Defined in browser/canvasRender.ts:58

###  forceSameSize

• **forceSameSize**: *boolean* = true

Defined in browser/canvasRender.ts:60

###  rgba

• **rgba**: *boolean* = true

Defined in browser/canvasRender.ts:59