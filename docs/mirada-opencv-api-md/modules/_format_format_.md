**[mirada](../README.md)**

[Globals](../README.md) › ["format/format"](_format_format_.md)

# External module: "format/format"

## Index

### Variables

* [_proxyLoaded](_format_format_.md#let-_proxyloaded)
* [codecs](_format_format_.md#const-codecs)
* [proxies](_format_format_.md#const-proxies)

### Functions

* [createCodec](_format_format_.md#createcodec)
* [decodeOrThrow](_format_format_.md#decodeorthrow)
* [encodeOrThrow](_format_format_.md#encodeorthrow)
* [getDefaultCodec](_format_format_.md#getdefaultcodec)
* [installFormatProxy](_format_format_.md#installformatproxy)
* [loadFormatProxies](_format_format_.md#loadformatproxies)

## Variables

### `Let` _proxyLoaded

• **_proxyLoaded**: *boolean* = false

*Defined in [format/format.ts:20](https://github.com/cancerberoSgx/mirada/blob/170e57c/mirada/src/format/format.ts#L20)*

___

### `Const` codecs

• **codecs**: *[FormatCodec](../interfaces/_types_mirada_.formatcodec.md)[]* =  []

*Defined in [format/format.ts:18](https://github.com/cancerberoSgx/mirada/blob/170e57c/mirada/src/format/format.ts#L18)*

___

### `Const` proxies

• **proxies**: *[FormatProxy](_types_mirada_.md#formatproxy)[]* =  []

*Defined in [format/format.ts:17](https://github.com/cancerberoSgx/mirada/blob/170e57c/mirada/src/format/format.ts#L17)*

## Functions

###  createCodec

▸ **createCodec**(`proxy`: [FormatProxy](_types_mirada_.md#formatproxy)): *Promise‹[FormatCodec](../interfaces/_types_mirada_.formatcodec.md)›*

*Defined in [format/format.ts:22](https://github.com/cancerberoSgx/mirada/blob/170e57c/mirada/src/format/format.ts#L22)*

**Parameters:**

Name | Type |
------ | ------ |
`proxy` | [FormatProxy](_types_mirada_.md#formatproxy) |

**Returns:** *Promise‹[FormatCodec](../interfaces/_types_mirada_.formatcodec.md)›*

___

###  decodeOrThrow

▸ **decodeOrThrow**(`buffer`: ArrayBuffer, `format?`: undefined | string): *Promise‹[ImageData](../classes/_types_opencv__hacks_.imagedata.md)›*

*Defined in [format/format.ts:48](https://github.com/cancerberoSgx/mirada/blob/170e57c/mirada/src/format/format.ts#L48)*

**Parameters:**

Name | Type |
------ | ------ |
`buffer` | ArrayBuffer |
`format?` | undefined \| string |

**Returns:** *Promise‹[ImageData](../classes/_types_opencv__hacks_.imagedata.md)›*

___

###  encodeOrThrow

▸ **encodeOrThrow**(`data`: [ImageData](../classes/_types_opencv__hacks_.imagedata.md), `format`: string, `quality?`: undefined | number): *Promise‹ArrayBuffer›*

*Defined in [format/format.ts:55](https://github.com/cancerberoSgx/mirada/blob/170e57c/mirada/src/format/format.ts#L55)*

**Parameters:**

Name | Type |
------ | ------ |
`data` | [ImageData](../classes/_types_opencv__hacks_.imagedata.md) |
`format` | string |
`quality?` | undefined \| number |

**Returns:** *Promise‹ArrayBuffer›*

___

###  getDefaultCodec

▸ **getDefaultCodec**(): *[FormatCodec](../interfaces/_types_mirada_.formatcodec.md)*

*Defined in [format/format.ts:40](https://github.com/cancerberoSgx/mirada/blob/170e57c/mirada/src/format/format.ts#L40)*

**Returns:** *[FormatCodec](../interfaces/_types_mirada_.formatcodec.md)*

___

###  installFormatProxy

▸ **installFormatProxy**(`proxy`: [FormatProxy](_types_mirada_.md#formatproxy)): *Promise‹void›*

*Defined in [format/format.ts:12](https://github.com/cancerberoSgx/mirada/blob/170e57c/mirada/src/format/format.ts#L12)*

Nor or opencv.js or this library implement any image format so users are
responsible of providing a FormatProxy using some library.

**Parameters:**

Name | Type |
------ | ------ |
`proxy` | [FormatProxy](_types_mirada_.md#formatproxy) |

**Returns:** *Promise‹void›*

___

###  loadFormatProxies

▸ **loadFormatProxies**(): *Promise‹void›*

*Defined in [format/format.ts:29](https://github.com/cancerberoSgx/mirada/blob/170e57c/mirada/src/format/format.ts#L29)*

**`internal`** 

**Returns:** *Promise‹void›*