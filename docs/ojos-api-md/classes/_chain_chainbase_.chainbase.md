[ojos](../README.md) › ["chain/chainBase"](../modules/_chain_chainbase_.md) › [ChainBase](_chain_chainbase_.chainbase.md)

# Class: ChainBase

## Hierarchy

* **ChainBase**

  ↳ [Chain](_chain_chain_.chain.md)

## Index

### Constructors

* [constructor](_chain_chainbase_.chainbase.md#constructor)

### Properties

* [_mode](_chain_chainbase_.chainbase.md#protected-_mode)
* [mat](_chain_chainbase_.chainbase.md#protected-mat)

### Methods

* [asFile](_chain_chainbase_.chainbase.md#asfile)
* [handle](_chain_chainbase_.chainbase.md#protected-handle)
* [mode](_chain_chainbase_.chainbase.md#mode)
* [fromFile](_chain_chainbase_.chainbase.md#static-fromfile)

## Constructors

###  constructor

\+ **new ChainBase**(`mat`: Mat): *[ChainBase](_chain_chainbase_.chainbase.md)*

*Defined in [chain/chainBase.ts:9](https://github.com/cancerberoSgx/mirada/blob/3544b58/ojos/src/chain/chainBase.ts#L9)*

**Parameters:**

Name | Type | Default |
------ | ------ | ------ |
`mat` | Mat |  new cv.Mat() |

**Returns:** *[ChainBase](_chain_chainbase_.chainbase.md)*

## Properties

### `Protected` _mode

• **_mode**: *"map" | "array"*

*Defined in [chain/chainBase.ts:9](https://github.com/cancerberoSgx/mirada/blob/3544b58/ojos/src/chain/chainBase.ts#L9)*

___

### `Protected` mat

• **mat**: *Mat*

*Defined in [chain/chainBase.ts:11](https://github.com/cancerberoSgx/mirada/blob/3544b58/ojos/src/chain/chainBase.ts#L11)*

## Methods

###  asFile

▸ **asFile**(`name?`: undefined | string): *File*

*Defined in [chain/chainBase.ts:39](https://github.com/cancerberoSgx/mirada/blob/3544b58/ojos/src/chain/chainBase.ts#L39)*

**Parameters:**

Name | Type |
------ | ------ |
`name?` | undefined &#124; string |

**Returns:** *File*

___

### `Protected` handle

▸ **handle**(`args`: any, `Class`: any): *this*

*Defined in [chain/chainBase.ts:15](https://github.com/cancerberoSgx/mirada/blob/3544b58/ojos/src/chain/chainBase.ts#L15)*

**Parameters:**

Name | Type |
------ | ------ |
`args` | any |
`Class` | any |

**Returns:** *this*

___

###  mode

▸ **mode**(`mode`: "map" | "array"): *this*

*Defined in [chain/chainBase.ts:34](https://github.com/cancerberoSgx/mirada/blob/3544b58/ojos/src/chain/chainBase.ts#L34)*

**Parameters:**

Name | Type |
------ | ------ |
`mode` | "map" &#124; "array" |

**Returns:** *this*

___

### `Static` fromFile

▸ **fromFile**(`f`: File): *[Chain](_chain_chain_.chain.md)*

*Defined in [chain/chainBase.ts:30](https://github.com/cancerberoSgx/mirada/blob/3544b58/ojos/src/chain/chainBase.ts#L30)*

**Parameters:**

Name | Type |
------ | ------ |
`f` | File |

**Returns:** *[Chain](_chain_chain_.chain.md)*
