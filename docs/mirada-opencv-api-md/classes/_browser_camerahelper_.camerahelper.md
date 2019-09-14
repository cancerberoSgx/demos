[mirada](../README.md) › ["browser/cameraHelper"](../modules/_browser_camerahelper_.md) › [CameraHelper](_browser_camerahelper_.camerahelper.md)

# Class: CameraHelper


**`deprecated`** Obsoleted by VideoRenderer

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

*Defined in [browser/cameraHelper.ts:8](https://github.com/cancerberoSgx/mirada/blob/e7b5ae6/mirada/src/browser/cameraHelper.ts#L8)*

**Parameters:**

▪ **videoInput**: *HTMLVideoElement*

▪ **outputCanvas**: *HTMLCanvasElement*

▪ **callback**: *function*

▸ (): *void*

**Returns:** *[CameraHelper](_browser_camerahelper_.camerahelper.md)*

## Properties

###  callback

• **callback**: *function*

*Defined in [browser/cameraHelper.ts:10](https://github.com/cancerberoSgx/mirada/blob/e7b5ae6/mirada/src/browser/cameraHelper.ts#L10)*

#### Type declaration:

▸ (): *void*

___

### `Protected` onCameraStartedCallback

• **onCameraStartedCallback**: *function | undefined*

*Defined in [browser/cameraHelper.ts:8](https://github.com/cancerberoSgx/mirada/blob/e7b5ae6/mirada/src/browser/cameraHelper.ts#L8)*

___

###  outputCanvas

• **outputCanvas**: *HTMLCanvasElement*

*Defined in [browser/cameraHelper.ts:10](https://github.com/cancerberoSgx/mirada/blob/e7b5ae6/mirada/src/browser/cameraHelper.ts#L10)*

___

### `Protected` stream

• **stream**: *MediaStream | undefined*

*Defined in [browser/cameraHelper.ts:7](https://github.com/cancerberoSgx/mirada/blob/e7b5ae6/mirada/src/browser/cameraHelper.ts#L7)*

___

###  streaming

• **streaming**: *boolean* = false

*Defined in [browser/cameraHelper.ts:6](https://github.com/cancerberoSgx/mirada/blob/e7b5ae6/mirada/src/browser/cameraHelper.ts#L6)*

___

###  videoInput

• **videoInput**: *HTMLVideoElement*

*Defined in [browser/cameraHelper.ts:10](https://github.com/cancerberoSgx/mirada/blob/e7b5ae6/mirada/src/browser/cameraHelper.ts#L10)*

## Methods

### `Protected` onVideoCanPlay

▸ **onVideoCanPlay**(): *void*

*Defined in [browser/cameraHelper.ts:77](https://github.com/cancerberoSgx/mirada/blob/e7b5ae6/mirada/src/browser/cameraHelper.ts#L77)*

**Returns:** *void*

___

### `Protected` onVideoStarted

▸ **onVideoStarted**(): *void*

*Defined in [browser/cameraHelper.ts:64](https://github.com/cancerberoSgx/mirada/blob/e7b5ae6/mirada/src/browser/cameraHelper.ts#L64)*

**Returns:** *void*

___

### `Protected` onVideoStopped

▸ **onVideoStopped**(): *void*

*Defined in [browser/cameraHelper.ts:71](https://github.com/cancerberoSgx/mirada/blob/e7b5ae6/mirada/src/browser/cameraHelper.ts#L71)*

**Returns:** *void*

___

###  start

▸ **start**(): *void*

*Defined in [browser/cameraHelper.ts:16](https://github.com/cancerberoSgx/mirada/blob/e7b5ae6/mirada/src/browser/cameraHelper.ts#L16)*

**Returns:** *void*

___

###  startCamera

▸ **startCamera**(`resolution`: "qvga" | "vga", `callback`: function, `video`: HTMLVideoElement): *void*

*Defined in [browser/cameraHelper.ts:29](https://github.com/cancerberoSgx/mirada/blob/e7b5ae6/mirada/src/browser/cameraHelper.ts#L29)*

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

*Defined in [browser/cameraHelper.ts:22](https://github.com/cancerberoSgx/mirada/blob/e7b5ae6/mirada/src/browser/cameraHelper.ts#L22)*

**Returns:** *void*

___

###  stopCamera

▸ **stopCamera**(): *void*

*Defined in [browser/cameraHelper.ts:53](https://github.com/cancerberoSgx/mirada/blob/e7b5ae6/mirada/src/browser/cameraHelper.ts#L53)*

**Returns:** *void*