[ojos](../README.md) › ["util/magicaCodec"](../modules/_util_magicacodec_.md) › [Magica](_util_magicacodec_.magica.md)

# Interface: Magica

## Hierarchy

* **Magica**

## Index

### Methods

* [fromArrayBuffer](_util_magicacodec_.magica.md#fromarraybuffer)
* [fromRGBAImageData](_util_magicacodec_.magica.md#fromrgbaimagedata)
* [run](_util_magicacodec_.magica.md#run)

## Methods

###  fromArrayBuffer

▸ **fromArrayBuffer**(`buffer`: ArrayBuffer): *Promise‹[MagicaFile](_util_magicacodec_.magicafile.md) | undefined›*

*Defined in [util/magicaCodec.ts:14](https://github.com/cancerberoSgx/mirada/blob/3544b58/ojos/src/util/magicaCodec.ts#L14)*

**Parameters:**

Name | Type |
------ | ------ |
`buffer` | ArrayBuffer |

**Returns:** *Promise‹[MagicaFile](_util_magicacodec_.magicafile.md) | undefined›*

___

###  fromRGBAImageData

▸ **fromRGBAImageData**(`data`: ImageData): *Promise‹[MagicaFile](_util_magicacodec_.magicafile.md) | undefined›*

*Defined in [util/magicaCodec.ts:15](https://github.com/cancerberoSgx/mirada/blob/3544b58/ojos/src/util/magicaCodec.ts#L15)*

**Parameters:**

Name | Type |
------ | ------ |
`data` | ImageData |

**Returns:** *Promise‹[MagicaFile](_util_magicacodec_.magicafile.md) | undefined›*

___

###  run

▸ **run**(`o`: object): *Promise‹object›*

*Defined in [util/magicaCodec.ts:13](https://github.com/cancerberoSgx/mirada/blob/3544b58/ojos/src/util/magicaCodec.ts#L13)*

**Parameters:**

▪ **o**: *object*

Name | Type |
------ | ------ |
`inputFiles` | [MagicaFile](_util_magicacodec_.magicafile.md)[] |
`script` | string |

**Returns:** *Promise‹object›*
