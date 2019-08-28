**[mirada](../README.md)**

[Globals](../README.md) › ["util/browserImageUtil"](../modules/_util_browserimageutil_.md) › [CameraHelper](_util_browserimageutil_.camerahelper.md)

# Class: CameraHelper

## Hierarchy

* **CameraHelper**

## Index

### Constructors

* [constructor](_util_browserimageutil_.camerahelper.md#constructor)

### Properties

* [callback](_util_browserimageutil_.camerahelper.md#callback)
* [onCameraStartedCallback](_util_browserimageutil_.camerahelper.md#protected-oncamerastartedcallback)
* [outputCanvas](_util_browserimageutil_.camerahelper.md#outputcanvas)
* [stream](_util_browserimageutil_.camerahelper.md#protected-stream)
* [streaming](_util_browserimageutil_.camerahelper.md#streaming)
* [videoInput](_util_browserimageutil_.camerahelper.md#videoinput)

### Methods

* [onVideoCanPlay](_util_browserimageutil_.camerahelper.md#protected-onvideocanplay)
* [onVideoStarted](_util_browserimageutil_.camerahelper.md#protected-onvideostarted)
* [onVideoStopped](_util_browserimageutil_.camerahelper.md#protected-onvideostopped)
* [start](_util_browserimageutil_.camerahelper.md#start)
* [startCamera](_util_browserimageutil_.camerahelper.md#startcamera)
* [stop](_util_browserimageutil_.camerahelper.md#stop)
* [stopCamera](_util_browserimageutil_.camerahelper.md#stopcamera)

## Constructors

###  constructor

\+ **new CameraHelper**(`videoInput`: HTMLVideoElement, `outputCanvas`: HTMLCanvasElement, `callback`: function): *[CameraHelper](_util_browserimageutil_.camerahelper.md)*

*Defined in [util/browserImageUtil.ts:81](https://github.com/cancerberoSgx/mirada/blob/170e57c/mirada/src/util/browserImageUtil.ts#L81)*

**Parameters:**

▪ **videoInput**: *HTMLVideoElement*

▪ **outputCanvas**: *HTMLCanvasElement*

▪ **callback**: *function*

▸ (): *void*

**Returns:** *[CameraHelper](_util_browserimageutil_.camerahelper.md)*

## Properties

###  callback

• **callback**: *function*

*Defined in [util/browserImageUtil.ts:83](https://github.com/cancerberoSgx/mirada/blob/170e57c/mirada/src/util/browserImageUtil.ts#L83)*

#### Type declaration:

▸ (): *void*

___

### `Protected` onCameraStartedCallback

• **onCameraStartedCallback**: *function | undefined*

*Defined in [util/browserImageUtil.ts:81](https://github.com/cancerberoSgx/mirada/blob/170e57c/mirada/src/util/browserImageUtil.ts#L81)*

___

###  outputCanvas

• **outputCanvas**: *HTMLCanvasElement*

*Defined in [util/browserImageUtil.ts:83](https://github.com/cancerberoSgx/mirada/blob/170e57c/mirada/src/util/browserImageUtil.ts#L83)*

___

### `Protected` stream

• **stream**: *MediaStream | undefined*

*Defined in [util/browserImageUtil.ts:80](https://github.com/cancerberoSgx/mirada/blob/170e57c/mirada/src/util/browserImageUtil.ts#L80)*

___

###  streaming

• **streaming**: *boolean* = false

*Defined in [util/browserImageUtil.ts:79](https://github.com/cancerberoSgx/mirada/blob/170e57c/mirada/src/util/browserImageUtil.ts#L79)*

___

###  videoInput

• **videoInput**: *HTMLVideoElement*

*Defined in [util/browserImageUtil.ts:83](https://github.com/cancerberoSgx/mirada/blob/170e57c/mirada/src/util/browserImageUtil.ts#L83)*

## Methods

### `Protected` onVideoCanPlay

▸ **onVideoCanPlay**(): *void*

*Defined in [util/browserImageUtil.ts:143](https://github.com/cancerberoSgx/mirada/blob/170e57c/mirada/src/util/browserImageUtil.ts#L143)*

**Returns:** *void*

___

### `Protected` onVideoStarted

▸ **onVideoStarted**(): *void*

*Defined in [util/browserImageUtil.ts:132](https://github.com/cancerberoSgx/mirada/blob/170e57c/mirada/src/util/browserImageUtil.ts#L132)*

**Returns:** *void*

___

### `Protected` onVideoStopped

▸ **onVideoStopped**(): *void*

*Defined in [util/browserImageUtil.ts:138](https://github.com/cancerberoSgx/mirada/blob/170e57c/mirada/src/util/browserImageUtil.ts#L138)*

**Returns:** *void*

___

###  start

▸ **start**(): *void*

*Defined in [util/browserImageUtil.ts:88](https://github.com/cancerberoSgx/mirada/blob/170e57c/mirada/src/util/browserImageUtil.ts#L88)*

**Returns:** *void*

___

###  startCamera

▸ **startCamera**(`resolution`: "qvga" | "vga", `callback`: function, `video`: HTMLVideoElement): *void*

*Defined in [util/browserImageUtil.ts:99](https://github.com/cancerberoSgx/mirada/blob/170e57c/mirada/src/util/browserImageUtil.ts#L99)*

**Parameters:**

▪ **resolution**: *"qvga" | "vga"*

▪ **callback**: *function*

▸ (...`args`: any[]): *any*

**Parameters:**

Name | Type |
------ | ------ |
`...args` | any[] |

▪ **video**: *HTMLVideoElement*

**Returns:** *void*

___

###  stop

▸ **stop**(): *void*

*Defined in [util/browserImageUtil.ts:93](https://github.com/cancerberoSgx/mirada/blob/170e57c/mirada/src/util/browserImageUtil.ts#L93)*

**Returns:** *void*

___

###  stopCamera

▸ **stopCamera**(): *void*

*Defined in [util/browserImageUtil.ts:122](https://github.com/cancerberoSgx/mirada/blob/170e57c/mirada/src/util/browserImageUtil.ts#L122)*

**Returns:** *void*