[ojos](../README.md) › ["util/magicaCodec"](../modules/_util_magicacodec_.md) › [MagicaCodec](_util_magicacodec_.magicacodec.md)

# Class: MagicaCodec

## Hierarchy

* **MagicaCodec**

## Implements

* FormatCodec

## Index

### Constructors

* [constructor](_util_magicacodec_.magicacodec.md#constructor)

### Properties

* [magica](_util_magicacodec_.magicacodec.md#protected-magica)

### Methods

* [decode](_util_magicacodec_.magicacodec.md#decode)
* [encode](_util_magicacodec_.magicacodec.md#encode)

## Constructors

###  constructor

\+ **new MagicaCodec**(`magica`: [Magica](../interfaces/_util_magicacodec_.magica.md)): *[MagicaCodec](_util_magicacodec_.magicacodec.md)*

*Defined in [util/magicaCodec.ts:18](https://github.com/cancerberoSgx/mirada/blob/3544b58/ojos/src/util/magicaCodec.ts#L18)*

**Parameters:**

Name | Type |
------ | ------ |
`magica` | [Magica](../interfaces/_util_magicacodec_.magica.md) |

**Returns:** *[MagicaCodec](_util_magicacodec_.magicacodec.md)*

## Properties

### `Protected` magica

• **magica**: *[Magica](../interfaces/_util_magicacodec_.magica.md)*

*Defined in [util/magicaCodec.ts:19](https://github.com/cancerberoSgx/mirada/blob/3544b58/ojos/src/util/magicaCodec.ts#L19)*

## Methods

###  decode

▸ **decode**(`buffer`: ArrayBuffer): *Promise‹ImageData | undefined›*

*Defined in [util/magicaCodec.ts:22](https://github.com/cancerberoSgx/mirada/blob/3544b58/ojos/src/util/magicaCodec.ts#L22)*

**Parameters:**

Name | Type |
------ | ------ |
`buffer` | ArrayBuffer |

**Returns:** *Promise‹ImageData | undefined›*

___

###  encode

▸ **encode**(`data`: ImageData, `format`: string, `quality?`: undefined | number): *Promise‹ArrayBuffer | undefined›*

*Defined in [util/magicaCodec.ts:32](https://github.com/cancerberoSgx/mirada/blob/3544b58/ojos/src/util/magicaCodec.ts#L32)*

**Parameters:**

Name | Type |
------ | ------ |
`data` | ImageData |
`format` | string |
`quality?` | undefined &#124; number |

**Returns:** *Promise‹ArrayBuffer | undefined›*
