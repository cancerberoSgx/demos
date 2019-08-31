**[mirada](../README.md)**

[Globals](../README.md) › ["browser/cameraHelper"](../modules/_browser_camerahelper_.md) › [CameraHelper](_browser_camerahelper_.camerahelper.md)

# Class: CameraHelper

## Hierarchy

* **CameraHelper**

## Index

### Constructors

* [constructor](_browser_camerahelper_.camerahelper.md#constructor)

### Properties

* [callback](_browser_camerahelper_.camerahelper.md#callback)
* [onCameraStartedCallback](_browser_camerahelper_.camerahelper.md#protected-oncamerastartedcallback)
* [outputCanvas](_browser_camerahelper_.camerahelper.md#outputcanvas)
* [stream](_browser_camerahelper_.camerahelper.md#protected-stream)
* [streaming](_browser_camerahelper_.camerahelper.md#streaming)
* [videoInput](_browser_camerahelper_.camerahelper.md#videoinput)

### Methods

* [onVideoCanPlay](_browser_camerahelper_.camerahelper.md#protected-onvideocanplay)
* [onVideoStarted](_browser_camerahelper_.camerahelper.md#protected-onvideostarted)
* [onVideoStopped](_browser_camerahelper_.camerahelper.md#protected-onvideostopped)
* [start](_browser_camerahelper_.camerahelper.md#start)
* [startCamera](_browser_camerahelper_.camerahelper.md#startcamera)
* [stop](_browser_camerahelper_.camerahelper.md#stop)
* [stopCamera](_browser_camerahelper_.camerahelper.md#stopcamera)

## Constructors

###  constructor

\+ **new CameraHelper**(`videoInput`: HTMLVideoElement, `outputCanvas`: HTMLCanvasElement, `callback`: function): *[CameraHelper](_browser_camerahelper_.camerahelper.md)*

*Defined in [browser/cameraHelper.ts:4](https://github.com/cancerberoSgx/mirada/blob/1c5d3d0/mirada/src/browser/cameraHelper.ts#L4)*

**Parameters:**

▪ **videoInput**: *HTMLVideoElement*

▪ **outputCanvas**: *HTMLCanvasElement*

▪ **callback**: *function*

▸ (): *void*

**Returns:** *[CameraHelper](_browser_camerahelper_.camerahelper.md)*

## Properties

###  callback

• **callback**: *function*

*Defined in [browser/cameraHelper.ts:5](https://github.com/cancerberoSgx/mirada/blob/1c5d3d0/mirada/src/browser/cameraHelper.ts#L5)*

#### Type declaration:

▸ (): *void*

___

### `Protected` onCameraStartedCallback

• **onCameraStartedCallback**: *function | undefined*

*Defined in [browser/cameraHelper.ts:4](https://github.com/cancerberoSgx/mirada/blob/1c5d3d0/mirada/src/browser/cameraHelper.ts#L4)*

___

###  outputCanvas

• **outputCanvas**: *HTMLCanvasElement*

*Defined in [browser/cameraHelper.ts:5](https://github.com/cancerberoSgx/mirada/blob/1c5d3d0/mirada/src/browser/cameraHelper.ts#L5)*

___

### `Protected` stream

• **stream**: *MediaStream | undefined*

*Defined in [browser/cameraHelper.ts:3](https://github.com/cancerberoSgx/mirada/blob/1c5d3d0/mirada/src/browser/cameraHelper.ts#L3)*

___

###  streaming

• **streaming**: *boolean* = false

*Defined in [browser/cameraHelper.ts:2](https://github.com/cancerberoSgx/mirada/blob/1c5d3d0/mirada/src/browser/cameraHelper.ts#L2)*

___

###  videoInput

• **videoInput**: *HTMLVideoElement*

*Defined in [browser/cameraHelper.ts:5](https://github.com/cancerberoSgx/mirada/blob/1c5d3d0/mirada/src/browser/cameraHelper.ts#L5)*

## Methods

### `Protected` onVideoCanPlay

▸ **onVideoCanPlay**(): *void*

*Defined in [browser/cameraHelper.ts:65](https://github.com/cancerberoSgx/mirada/blob/1c5d3d0/mirada/src/browser/cameraHelper.ts#L65)*

**Returns:** *void*

___

### `Protected` onVideoStarted

▸ **onVideoStarted**(): *void*

*Defined in [browser/cameraHelper.ts:54](https://github.com/cancerberoSgx/mirada/blob/1c5d3d0/mirada/src/browser/cameraHelper.ts#L54)*

**Returns:** *void*

___

### `Protected` onVideoStopped

▸ **onVideoStopped**(): *void*

*Defined in [browser/cameraHelper.ts:60](https://github.com/cancerberoSgx/mirada/blob/1c5d3d0/mirada/src/browser/cameraHelper.ts#L60)*

**Returns:** *void*

___

###  start

▸ **start**(): *void*

*Defined in [browser/cameraHelper.ts:10](https://github.com/cancerberoSgx/mirada/blob/1c5d3d0/mirada/src/browser/cameraHelper.ts#L10)*

**Returns:** *void*

___

###  startCamera

▸ **startCamera**(`resolution`: "qvga" | "vga", `callback`: function, `video`: HTMLVideoElement): *void*

*Defined in [browser/cameraHelper.ts:21](https://github.com/cancerberoSgx/mirada/blob/1c5d3d0/mirada/src/browser/cameraHelper.ts#L21)*

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

*Defined in [browser/cameraHelper.ts:15](https://github.com/cancerberoSgx/mirada/blob/1c5d3d0/mirada/src/browser/cameraHelper.ts#L15)*

**Returns:** *void*

___

###  stopCamera

▸ **stopCamera**(): *void*

*Defined in [browser/cameraHelper.ts:44](https://github.com/cancerberoSgx/mirada/blob/1c5d3d0/mirada/src/browser/cameraHelper.ts#L44)*

**Returns:** *void*