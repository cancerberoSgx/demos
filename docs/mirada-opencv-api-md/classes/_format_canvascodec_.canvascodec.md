[mirada](../README.md) › ["format/canvasCodec"](../modules/_format_canvascodec_.md) › [CanvasCodec](_format_canvascodec_.canvascodec.md)

# Class: CanvasCodec


Example of declaring a format codec that uses DOM canvas instance which must be provided by the user.

```ts
import  jimp from 'jimp'
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

*Defined in [format/canvasCodec.ts:19](https://github.com/cancerberoSgx/mirada/blob/c8721d6/mirada/src/format/canvasCodec.ts#L19)*

**Returns:** *[CanvasCodec](_format_canvascodec_.canvascodec.md)*

## Methods

###  decode

▸ **decode**(`buffer`: ArrayBuffer, `format?`: undefined | string): *Promise‹ImageData | undefined›*

*Implementation of [FormatCodec](../interfaces/_types_mirada_.formatcodec.md)*

*Defined in [format/canvasCodec.ts:23](https://github.com/cancerberoSgx/mirada/blob/c8721d6/mirada/src/format/canvasCodec.ts#L23)*

**Parameters:**

Name | Type |
------ | ------ |
`buffer` | ArrayBuffer |
`format?` | undefined &#124; string |

**Returns:** *Promise‹ImageData | undefined›*

___

###  encode

▸ **encode**(`data`: ImageData, `format`: string, `quality?`: undefined | number): *Promise‹ArrayBuffer | undefined›*

*Defined in [format/canvasCodec.ts:33](https://github.com/cancerberoSgx/mirada/blob/c8721d6/mirada/src/format/canvasCodec.ts#L33)*

**Parameters:**

Name | Type |
------ | ------ |
`data` | ImageData |
`format` | string |
`quality?` | undefined &#124; number |

**Returns:** *Promise‹ArrayBuffer | undefined›*