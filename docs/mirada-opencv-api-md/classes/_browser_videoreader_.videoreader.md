**[mirada](../README.md)**

[Globals](../README.md) › ["browser/videoReader"](../modules/_browser_videoreader_.md) › [VideoReader](_browser_videoreader_.videoreader.md)

# Class: VideoReader

Usage example:

```js
const video = document.querySelector<HTMLVideoElement>('video')!
const canvas = document.querySelector<HTMLCanvasElement>('canvas')!;
try {
const FPS = 30
await loadOpencv()
const c = new VideoReader(video, canvas)
await c.canPlay()
const src = c.mat // read only!
const dst = new cv.Mat(src.rows, src.cols, cv.CV_8UC1)
const process = () => {
let t0 = now()
c.read() // reads video frame on src
cv.cvtColor(src, dst, cv.COLOR_RGBA2GRAY)
cv.imshow(canvas, dst)
let delay = 1000 / FPS - msFrom(t0)
setTimeout(process, delay)
}
process()
} catch (error) {
console.log('navigator.MediaDevices.getUserMedia error: ', error.message, error.name);
console.trace(error)
}
```

## Hierarchy

* **VideoReader**

## Index

### Constructors

* [constructor](_browser_videoreader_.videoreader.md#constructor)

### Properties

* [canvas](_browser_videoreader_.videoreader.md#protected-canvas)
* [ctx](_browser_videoreader_.videoreader.md#ctx)
* [mat](_browser_videoreader_.videoreader.md#mat)
* [o](_browser_videoreader_.videoreader.md#protected-o)
* [size](_browser_videoreader_.videoreader.md#protected-size)
* [streaming](_browser_videoreader_.videoreader.md#streaming)
* [video](_browser_videoreader_.videoreader.md#protected-video)

### Methods

* [canPlay](_browser_videoreader_.videoreader.md#canplay)
* [getSize](_browser_videoreader_.videoreader.md#protected-getsize)
* [matCheck](_browser_videoreader_.videoreader.md#private-matcheck)
* [read](_browser_videoreader_.videoreader.md#read)

### Object literals

* [defaultOptions](_browser_videoreader_.videoreader.md#static-defaultoptions)

## Constructors

###  constructor

\+ **new VideoReader**(`video`: HTMLVideoElement, `canvas`: HTMLCanvasElement, `o`: [Options](../interfaces/_browser_videoreader_.options.md)): *[VideoReader](_browser_videoreader_.videoreader.md)*

*Defined in [browser/videoReader.ts:49](https://github.com/cancerberoSgx/mirada/blob/cd60774/mirada/src/browser/videoReader.ts#L49)*

**Parameters:**

Name | Type | Default |
------ | ------ | ------ |
`video` | HTMLVideoElement | - |
`canvas` | HTMLCanvasElement | - |
`o` | [Options](../interfaces/_browser_videoreader_.options.md) |  VideoReader.defaultOptions |

**Returns:** *[VideoReader](_browser_videoreader_.videoreader.md)*

## Properties

### `Protected` canvas

• **canvas**: *HTMLCanvasElement*

*Defined in [browser/videoReader.ts:51](https://github.com/cancerberoSgx/mirada/blob/cd60774/mirada/src/browser/videoReader.ts#L51)*

___

###  ctx

• **ctx**: *CanvasRenderingContext2D*

*Defined in [browser/videoReader.ts:39](https://github.com/cancerberoSgx/mirada/blob/cd60774/mirada/src/browser/videoReader.ts#L39)*

___

###  mat

• **mat**: *[Mat](_types_opencv_mat_.mat.md)* =  null as any

*Defined in [browser/videoReader.ts:40](https://github.com/cancerberoSgx/mirada/blob/cd60774/mirada/src/browser/videoReader.ts#L40)*

___

### `Protected` o

• **o**: *[Options](../interfaces/_browser_videoreader_.options.md)*

*Defined in [browser/videoReader.ts:51](https://github.com/cancerberoSgx/mirada/blob/cd60774/mirada/src/browser/videoReader.ts#L51)*

___

### `Protected` size

• **size**: *[Size](_types_opencv__hacks_.size.md)*

*Defined in [browser/videoReader.ts:49](https://github.com/cancerberoSgx/mirada/blob/cd60774/mirada/src/browser/videoReader.ts#L49)*

___

###  streaming

• **streaming**: *boolean* = false

*Defined in [browser/videoReader.ts:41](https://github.com/cancerberoSgx/mirada/blob/cd60774/mirada/src/browser/videoReader.ts#L41)*

___

### `Protected` video

• **video**: *HTMLVideoElement*

*Defined in [browser/videoReader.ts:51](https://github.com/cancerberoSgx/mirada/blob/cd60774/mirada/src/browser/videoReader.ts#L51)*

## Methods

###  canPlay

▸ **canPlay**(): *Promise‹unknown›*

*Defined in [browser/videoReader.ts:57](https://github.com/cancerberoSgx/mirada/blob/cd60774/mirada/src/browser/videoReader.ts#L57)*

**Returns:** *Promise‹unknown›*

___

### `Protected` getSize

▸ **getSize**(): *[Size](_types_opencv__hacks_.size.md)*

*Defined in [browser/videoReader.ts:77](https://github.com/cancerberoSgx/mirada/blob/cd60774/mirada/src/browser/videoReader.ts#L77)*

**Returns:** *[Size](_types_opencv__hacks_.size.md)*

___

### `Private` matCheck

▸ **matCheck**(): *void*

*Defined in [browser/videoReader.ts:99](https://github.com/cancerberoSgx/mirada/blob/cd60774/mirada/src/browser/videoReader.ts#L99)*

**Returns:** *void*

___

###  read

▸ **read**(): *void*

*Defined in [browser/videoReader.ts:93](https://github.com/cancerberoSgx/mirada/blob/cd60774/mirada/src/browser/videoReader.ts#L93)*

**Returns:** *void*

## Object literals

### `Static` defaultOptions

### ▪ **defaultOptions**: *object*

*Defined in [browser/videoReader.ts:42](https://github.com/cancerberoSgx/mirada/blob/cd60774/mirada/src/browser/videoReader.ts#L42)*

###  size

• **size**: *"canvas"* = "canvas"

*Defined in [browser/videoReader.ts:43](https://github.com/cancerberoSgx/mirada/blob/cd60774/mirada/src/browser/videoReader.ts#L43)*

▪ **constraints**: *object*

*Defined in [browser/videoReader.ts:44](https://github.com/cancerberoSgx/mirada/blob/cd60774/mirada/src/browser/videoReader.ts#L44)*

* **audio**: *false* = false

* **video**: *true* = true