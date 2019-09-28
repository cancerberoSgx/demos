[mirada](../README.md) › ["browser/canvasRender"](_browser_canvasrender_.md)

# External module: "browser/canvasRender"


## Index

### Interfaces

* [ABOptions](../interfaces/_browser_canvasrender_.aboptions.md)
* [Options](../interfaces/_browser_canvasrender_.options.md)
* [Result](../interfaces/_browser_canvasrender_.result.md)

### Variables

* [defaultABOptions](_browser_canvasrender_.md#const-defaultaboptions)

### Functions

* [renderArrayBufferInCanvas](_browser_canvasrender_.md#renderarraybufferincanvas)
* [renderInCanvas](_browser_canvasrender_.md#renderincanvas)
* [renderSvgInCanvas](_browser_canvasrender_.md#rendersvgincanvas)

### Object literals

* [defaultOptions](_browser_canvasrender_.md#const-defaultoptions)

## Variables

### `Const` defaultABOptions

• **defaultABOptions**: *[ABOptions](../interfaces/_browser_canvasrender_.aboptions.md)*

*Defined in [browser/canvasRender.ts:12](https://github.com/cancerberoSgx/mirada/blob/c8721d6/mirada/src/browser/canvasRender.ts#L12)*

## Functions

###  renderArrayBufferInCanvas

▸ **renderArrayBufferInCanvas**(`a`: ArrayBuffer, `mime`: string, `options`: [ABOptions](../interfaces/_browser_canvasrender_.aboptions.md)): *Promise‹[Result](../interfaces/_browser_canvasrender_.result.md)›*

*Defined in [browser/canvasRender.ts:28](https://github.com/cancerberoSgx/mirada/blob/c8721d6/mirada/src/browser/canvasRender.ts#L28)*

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

**Returns:** *Promise‹[Result](../interfaces/_browser_canvasrender_.result.md)›*

___

###  renderInCanvas

▸ **renderInCanvas**(`mat`: [Mat](../classes/_types_opencv_mat_.mat.md), `options?`: [Options](../interfaces/_browser_canvasrender_.options.md)): *HTMLCanvasElement*

*Defined in [browser/canvasRender.ts:88](https://github.com/cancerberoSgx/mirada/blob/c8721d6/mirada/src/browser/canvasRender.ts#L88)*

**Parameters:**

Name | Type |
------ | ------ |
`mat` | [Mat](../classes/_types_opencv_mat_.mat.md) |
`options?` | [Options](../interfaces/_browser_canvasrender_.options.md) |

**Returns:** *HTMLCanvasElement*

___

###  renderSvgInCanvas

▸ **renderSvgInCanvas**(`svg`: string, `options`: [ABOptions](../interfaces/_browser_canvasrender_.aboptions.md)): *Promise‹[Result](../interfaces/_browser_canvasrender_.result.md)›*

*Defined in [browser/canvasRender.ts:50](https://github.com/cancerberoSgx/mirada/blob/c8721d6/mirada/src/browser/canvasRender.ts#L50)*

**Parameters:**

Name | Type | Default |
------ | ------ | ------ |
`svg` | string | - |
`options` | [ABOptions](../interfaces/_browser_canvasrender_.aboptions.md) |  defaultABOptions |

**Returns:** *Promise‹[Result](../interfaces/_browser_canvasrender_.result.md)›*

## Object literals

### `Const` defaultOptions

### ▪ **defaultOptions**: *object*

*Defined in [browser/canvasRender.ts:83](https://github.com/cancerberoSgx/mirada/blob/c8721d6/mirada/src/browser/canvasRender.ts#L83)*

###  forceSameSize

• **forceSameSize**: *boolean* = true

*Defined in [browser/canvasRender.ts:85](https://github.com/cancerberoSgx/mirada/blob/c8721d6/mirada/src/browser/canvasRender.ts#L85)*

###  rgba

• **rgba**: *boolean* = true

*Defined in [browser/canvasRender.ts:84](https://github.com/cancerberoSgx/mirada/blob/c8721d6/mirada/src/browser/canvasRender.ts#L84)*