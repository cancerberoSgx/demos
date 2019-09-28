[mirada](../README.md) › ["format/jimpCodec"](../modules/_format_jimpcodec_.md) › [JimpCodec](_format_jimpcodec_.jimpcodec.md)

# Class: JimpCodec


Example of declaring a Jimp proxy as a class

```ts
import  jimp from 'jimp'
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

*Defined in [format/jimpCodec.ts:23](https://github.com/cancerberoSgx/mirada/blob/c8721d6/mirada/src/format/jimpCodec.ts#L23)*

**Parameters:**

Name | Type |
------ | ------ |
`jimp` | [Jimp](../modules/_format_jimpcodec_.md#jimp) |

**Returns:** *[JimpCodec](_format_jimpcodec_.jimpcodec.md)*

## Properties

### `Protected` jimp

• **jimp**: *[Jimp](../modules/_format_jimpcodec_.md#jimp)*

*Defined in [format/jimpCodec.ts:24](https://github.com/cancerberoSgx/mirada/blob/c8721d6/mirada/src/format/jimpCodec.ts#L24)*

## Methods

###  decode

▸ **decode**(`buffer`: ArrayBuffer): *Promise‹ImageData | undefined›*

*Defined in [format/jimpCodec.ts:27](https://github.com/cancerberoSgx/mirada/blob/c8721d6/mirada/src/format/jimpCodec.ts#L27)*

**Parameters:**

Name | Type |
------ | ------ |
`buffer` | ArrayBuffer |

**Returns:** *Promise‹ImageData | undefined›*

___

###  encode

▸ **encode**(`data`: ImageData, `format`: string, `quality?`: undefined | number): *Promise‹ArrayBuffer | undefined›*

*Defined in [format/jimpCodec.ts:32](https://github.com/cancerberoSgx/mirada/blob/c8721d6/mirada/src/format/jimpCodec.ts#L32)*

**Parameters:**

Name | Type |
------ | ------ |
`data` | ImageData |
`format` | string |
`quality?` | undefined &#124; number |

**Returns:** *Promise‹ArrayBuffer | undefined›*