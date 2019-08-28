**[mirada](../README.md)**

[Globals](../README.md) › ["format/canvasCodec"](../modules/_format_canvascodec_.md) › [CanvasCodec](_format_canvascodec_.canvascodec.md)

# Class: CanvasCodec

Example of declaring a format codec that uses DOM canvas instance which must be provided by the user.

```ts
import * as Jimp from 'jimp'
class JimpProxy implements FormatProxyClass {
async create() {
return new JimpFormatCodec(Jimp)
}
}
```

## Hierarchy

* **CanvasCodec**

## Implements

* [FormatCodec](../interfaces/_types_mirada_.formatcodec.md)

## Index

### Constructors

* [constructor](_format_canvascodec_.canvascodec.md#constructor)

### Methods

* [decode](_format_canvascodec_.canvascodec.md#decode)
* [encode](_format_canvascodec_.canvascodec.md#encode)

## Constructors

###  constructor

\+ **new CanvasCodec**(): *[CanvasCodec](_format_canvascodec_.canvascodec.md)*

*Defined in [format/canvasCodec.ts:17](https://github.com/cancerberoSgx/mirada/blob/170e57c/mirada/src/format/canvasCodec.ts#L17)*

**Returns:** *[CanvasCodec](_format_canvascodec_.canvascodec.md)*

## Methods

###  decode

▸ **decode**(`buffer`: ArrayBuffer): *Promise‹ImageData | undefined›*

*Defined in [format/canvasCodec.ts:20](https://github.com/cancerberoSgx/mirada/blob/170e57c/mirada/src/format/canvasCodec.ts#L20)*

**Parameters:**

Name | Type |
------ | ------ |
`buffer` | ArrayBuffer |

**Returns:** *Promise‹ImageData | undefined›*

___

###  encode

▸ **encode**(`data`: ImageData, `format`: string, `quality?`: undefined | number): *Promise‹ArrayBuffer | undefined›*

*Defined in [format/canvasCodec.ts:29](https://github.com/cancerberoSgx/mirada/blob/170e57c/mirada/src/format/canvasCodec.ts#L29)*

**Parameters:**

Name | Type |
------ | ------ |
`data` | ImageData |
`format` | string |
`quality?` | undefined \| number |

**Returns:** *Promise‹ArrayBuffer | undefined›*