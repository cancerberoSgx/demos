**[mirada](../README.md)**

[Globals](../README.md) › ["format/jimpCodec"](../modules/_format_jimpcodec_.md) › [JimpCodec](_format_jimpcodec_.jimpcodec.md)

# Class: JimpCodec

Example of declaring a Jimp proxy as a class

```ts
import * as Jimp from 'jimp'
class JimpProxy implements FormatProxyClass {
async create() {
return new JimpFormatCodec(Jimp)
}
}
```

## Hierarchy

* **JimpCodec**

## Implements

* [FormatCodec](../interfaces/_types_mirada_.formatcodec.md)

## Index

### Constructors

* [constructor](_format_jimpcodec_.jimpcodec.md#constructor)

### Properties

* [jimp](_format_jimpcodec_.jimpcodec.md#protected-jimp)

### Methods

* [decode](_format_jimpcodec_.jimpcodec.md#decode)
* [encode](_format_jimpcodec_.jimpcodec.md#encode)

## Constructors

###  constructor

\+ **new JimpCodec**(`jimp`: [Jimp](../modules/_format_jimpcodec_.md#jimp)): *[JimpCodec](_format_jimpcodec_.jimpcodec.md)*

*Defined in [format/jimpCodec.ts:21](https://github.com/cancerberoSgx/mirada/blob/170e57c/mirada/src/format/jimpCodec.ts#L21)*

**Parameters:**

Name | Type |
------ | ------ |
`jimp` | [Jimp](../modules/_format_jimpcodec_.md#jimp) |

**Returns:** *[JimpCodec](_format_jimpcodec_.jimpcodec.md)*

## Properties

### `Protected` jimp

• **jimp**: *[Jimp](../modules/_format_jimpcodec_.md#jimp)*

*Defined in [format/jimpCodec.ts:22](https://github.com/cancerberoSgx/mirada/blob/170e57c/mirada/src/format/jimpCodec.ts#L22)*

## Methods

###  decode

▸ **decode**(`buffer`: ArrayBuffer): *Promise‹ImageData | undefined›*

*Defined in [format/jimpCodec.ts:24](https://github.com/cancerberoSgx/mirada/blob/170e57c/mirada/src/format/jimpCodec.ts#L24)*

**Parameters:**

Name | Type |
------ | ------ |
`buffer` | ArrayBuffer |

**Returns:** *Promise‹ImageData | undefined›*

___

###  encode

▸ **encode**(`data`: ImageData, `format`: string, `quality?`: undefined | number): *Promise‹ArrayBuffer | undefined›*

*Defined in [format/jimpCodec.ts:28](https://github.com/cancerberoSgx/mirada/blob/170e57c/mirada/src/format/jimpCodec.ts#L28)*

**Parameters:**

Name | Type |
------ | ------ |
`data` | ImageData |
`format` | string |
`quality?` | undefined \| number |

**Returns:** *Promise‹ArrayBuffer | undefined›*