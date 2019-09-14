[mirada](../README.md) › ["format/format"](_format_format_.md)

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
* [unInstallFormatProxies](_format_format_.md#uninstallformatproxies)
* [unloadFormatProxies](_format_format_.md#unloadformatproxies)

## Variables

### `Let` _proxyLoaded

• **_proxyLoaded**: *boolean* = false

*Defined in [format/format.ts:23](https://github.com/cancerberoSgx/mirada/blob/e7b5ae6/mirada/src/format/format.ts#L23)*

___

### `Const` codecs

• **codecs**: *[FormatCodec](../interfaces/_types_mirada_.formatcodec.md)[]* =  []

*Defined in [format/format.ts:21](https://github.com/cancerberoSgx/mirada/blob/e7b5ae6/mirada/src/format/format.ts#L21)*

___

### `Const` proxies

• **proxies**: *[FormatProxy](_types_mirada_.md#formatproxy)[]* =  []

*Defined in [format/format.ts:19](https://github.com/cancerberoSgx/mirada/blob/e7b5ae6/mirada/src/format/format.ts#L19)*

## Functions

###  createCodec

▸ **createCodec**(`proxy`: [FormatProxy](_types_mirada_.md#formatproxy)): *Promise‹[FormatCodec](../interfaces/_types_mirada_.formatcodec.md)›*

*Defined in [format/format.ts:25](https://github.com/cancerberoSgx/mirada/blob/e7b5ae6/mirada/src/format/format.ts#L25)*

**Parameters:**

Name | Type |
------ | ------ |
`proxy` | [FormatProxy](_types_mirada_.md#formatproxy) |

**Returns:** *Promise‹[FormatCodec](../interfaces/_types_mirada_.formatcodec.md)›*

___

###  decodeOrThrow

▸ **decodeOrThrow**(`buffer`: ArrayBuffer, `format?`: undefined | string): *Promise‹[ImageData](../classes/_types_opencv__hacks_.imagedata.md)›*

*Defined in [format/format.ts:54](https://github.com/cancerberoSgx/mirada/blob/e7b5ae6/mirada/src/format/format.ts#L54)*

**Parameters:**

Name | Type |
------ | ------ |
`buffer` | ArrayBuffer |
`format?` | undefined &#124; string |

**Returns:** *Promise‹[ImageData](../classes/_types_opencv__hacks_.imagedata.md)›*

___

###  encodeOrThrow

▸ **encodeOrThrow**(`data`: [ImageData](../classes/_types_opencv__hacks_.imagedata.md), `format`: string, `quality?`: undefined | number): *Promise‹ArrayBuffer›*

*Defined in [format/format.ts:61](https://github.com/cancerberoSgx/mirada/blob/e7b5ae6/mirada/src/format/format.ts#L61)*

**Parameters:**

Name | Type |
------ | ------ |
`data` | [ImageData](../classes/_types_opencv__hacks_.imagedata.md) |
`format` | string |
`quality?` | undefined &#124; number |

**Returns:** *Promise‹ArrayBuffer›*

___

###  getDefaultCodec

▸ **getDefaultCodec**(): *[FormatCodec](../interfaces/_types_mirada_.formatcodec.md)*

*Defined in [format/format.ts:46](https://github.com/cancerberoSgx/mirada/blob/e7b5ae6/mirada/src/format/format.ts#L46)*

**Returns:** *[FormatCodec](../interfaces/_types_mirada_.formatcodec.md)*

___

###  installFormatProxy

▸ **installFormatProxy**(`proxy`: [FormatProxy](_types_mirada_.md#formatproxy)): *Promise‹void›*

*Defined in [format/format.ts:11](https://github.com/cancerberoSgx/mirada/blob/e7b5ae6/mirada/src/format/format.ts#L11)*

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

*Defined in [format/format.ts:32](https://github.com/cancerberoSgx/mirada/blob/e7b5ae6/mirada/src/format/format.ts#L32)*

**`internal`** 

**Returns:** *Promise‹void›*

___

###  unInstallFormatProxies

▸ **unInstallFormatProxies**(): *Promise‹void›*

*Defined in [format/format.ts:15](https://github.com/cancerberoSgx/mirada/blob/e7b5ae6/mirada/src/format/format.ts#L15)*

**Returns:** *Promise‹void›*

___

###  unloadFormatProxies

▸ **unloadFormatProxies**(): *void*

*Defined in [format/format.ts:42](https://github.com/cancerberoSgx/mirada/blob/e7b5ae6/mirada/src/format/format.ts#L42)*

**Returns:** *void*