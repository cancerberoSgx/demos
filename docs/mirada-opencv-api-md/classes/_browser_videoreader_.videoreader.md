[mirada](../README.md) › ["browser/videoReader"](../modules/_browser_videoreader_.md) › [VideoReader](_browser_videoreader_.videoreader.md)

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
* [stream](_browser_videoreader_.videoreader.md#protected-stream)
* [streaming](_browser_videoreader_.videoreader.md#streaming)
* [video](_browser_videoreader_.videoreader.md#protected-video)

### Methods

* [canPlay](_browser_videoreader_.videoreader.md#canplay)
* [getSize](_browser_videoreader_.videoreader.md#protected-getsize)
* [matCheck](_browser_videoreader_.videoreader.md#private-matcheck)
* [read](_browser_videoreader_.videoreader.md#read)
* [stop](_browser_videoreader_.videoreader.md#stop)

### Object literals

* [defaultOptions](_browser_videoreader_.videoreader.md#static-protected-defaultoptions)

## Constructors

###  constructor

\+ **new VideoReader**(`video`: HTMLVideoElement, `canvas`: HTMLCanvasElement, `o`: [Options](../interfaces/_browser_videoreader_.options.md)): *[VideoReader](_browser_videoreader_.videoreader.md)*

*Defined in [browser/videoReader.ts:56](https://github.com/cancerberoSgx/mirada/blob/c8721d6/mirada/src/browser/videoReader.ts#L56)*

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

*Defined in [browser/videoReader.ts:58](https://github.com/cancerberoSgx/mirada/blob/c8721d6/mirada/src/browser/videoReader.ts#L58)*

___

###  ctx

• **ctx**: *CanvasRenderingContext2D*

*Defined in [browser/videoReader.ts:40](https://github.com/cancerberoSgx/mirada/blob/c8721d6/mirada/src/browser/videoReader.ts#L40)*

___

###  mat

• **mat**: *[Mat](_types_opencv_mat_.mat.md)* =  null as any

*Defined in [browser/videoReader.ts:41](https://github.com/cancerberoSgx/mirada/blob/c8721d6/mirada/src/browser/videoReader.ts#L41)*

___

### `Protected` o

• **o**: *[Options](../interfaces/_browser_videoreader_.options.md)*

*Defined in [browser/videoReader.ts:58](https://github.com/cancerberoSgx/mirada/blob/c8721d6/mirada/src/browser/videoReader.ts#L58)*

___

### `Protected` size

• **size**: *[Size](_types_opencv__hacks_.size.md)*

*Defined in [browser/videoReader.ts:42](https://github.com/cancerberoSgx/mirada/blob/c8721d6/mirada/src/browser/videoReader.ts#L42)*

___

### `Protected` stream

• **stream**: *MediaStream | undefined*

*Defined in [browser/videoReader.ts:56](https://github.com/cancerberoSgx/mirada/blob/c8721d6/mirada/src/browser/videoReader.ts#L56)*

___

###  streaming

• **streaming**: *boolean* = false

*Defined in [browser/videoReader.ts:47](https://github.com/cancerberoSgx/mirada/blob/c8721d6/mirada/src/browser/videoReader.ts#L47)*

Indicates if the video is currently being processed

___

### `Protected` video

• **video**: *HTMLVideoElement*

*Defined in [browser/videoReader.ts:58](https://github.com/cancerberoSgx/mirada/blob/c8721d6/mirada/src/browser/videoReader.ts#L58)*

## Methods

###  canPlay

▸ **canPlay**(): *Promise‹unknown›*

*Defined in [browser/videoReader.ts:73](https://github.com/cancerberoSgx/mirada/blob/c8721d6/mirada/src/browser/videoReader.ts#L73)*

**Returns:** *Promise‹unknown›*

___

### `Protected` getSize

▸ **getSize**(): *[Size](_types_opencv__hacks_.size.md)*

*Defined in [browser/videoReader.ts:101](https://github.com/cancerberoSgx/mirada/blob/c8721d6/mirada/src/browser/videoReader.ts#L101)*

**Returns:** *[Size](_types_opencv__hacks_.size.md)*

___

### `Private` matCheck

▸ **matCheck**(): *void*

*Defined in [browser/videoReader.ts:117](https://github.com/cancerberoSgx/mirada/blob/c8721d6/mirada/src/browser/videoReader.ts#L117)*

**Returns:** *void*

___

###  read

▸ **read**(): *void*

*Defined in [browser/videoReader.ts:67](https://github.com/cancerberoSgx/mirada/blob/c8721d6/mirada/src/browser/videoReader.ts#L67)*

reads current video frame into [mat]

**Returns:** *void*

___

###  stop

▸ **stop**(): *void*

*Defined in [browser/videoReader.ts:93](https://github.com/cancerberoSgx/mirada/blob/c8721d6/mirada/src/browser/videoReader.ts#L93)*

**Returns:** *void*

## Object literals

### `Static` `Protected` defaultOptions

### ▪ **defaultOptions**: *object*

*Defined in [browser/videoReader.ts:49](https://github.com/cancerberoSgx/mirada/blob/c8721d6/mirada/src/browser/videoReader.ts#L49)*

###  size

• **size**: *"canvas"* = "canvas"

*Defined in [browser/videoReader.ts:50](https://github.com/cancerberoSgx/mirada/blob/c8721d6/mirada/src/browser/videoReader.ts#L50)*

▪ **constraints**: *object*

*Defined in [browser/videoReader.ts:51](https://github.com/cancerberoSgx/mirada/blob/c8721d6/mirada/src/browser/videoReader.ts#L51)*

* **audio**: *false* = false

* **video**: *true* = true