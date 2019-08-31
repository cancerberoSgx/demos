**[mirada](../README.md)**

[Globals](../README.md) › ["tool/chain"](../modules/_tool_chain_.md) › [Chain](_tool_chain_.chain.md)

# Class: Chain

## Hierarchy

* **Chain**

## Index

### Constructors

* [constructor](_tool_chain_.chain.md#constructor)

### Properties

* [mat](_tool_chain_.chain.md#protected-mat)

### Methods

* [asFile](_tool_chain_.chain.md#asfile)
* [filter2D](_tool_chain_.chain.md#filter2d)
* [roi](_tool_chain_.chain.md#roi)
* [toRgba](_tool_chain_.chain.md#torgba)

## Constructors

###  constructor

\+ **new Chain**(`mat`: [Mat](_types_opencv_mat_.mat.md)): *[Chain](_tool_chain_.chain.md)*

*Defined in [tool/chain.ts:5](https://github.com/cancerberoSgx/mirada/blob/eecc091/mirada/src/tool/chain.ts#L5)*

**Parameters:**

Name | Type | Default |
------ | ------ | ------ |
`mat` | [Mat](_types_opencv_mat_.mat.md) |  new cv.Mat() |

**Returns:** *[Chain](_tool_chain_.chain.md)*

## Properties

### `Protected` mat

• **mat**: *[Mat](_types_opencv_mat_.mat.md)*

*Defined in [tool/chain.ts:6](https://github.com/cancerberoSgx/mirada/blob/eecc091/mirada/src/tool/chain.ts#L6)*

## Methods

###  asFile

▸ **asFile**(`name?`: undefined | string): *[File](_file_.file.md)*

*Defined in [tool/chain.ts:23](https://github.com/cancerberoSgx/mirada/blob/eecc091/mirada/src/tool/chain.ts#L23)*

**Parameters:**

Name | Type |
------ | ------ |
`name?` | undefined \| string |

**Returns:** *[File](_file_.file.md)*

___

###  filter2D

▸ **filter2D**(`kernel`: [Mat](_types_opencv_mat_.mat.md), `depth?`: [CVDataType](../modules/_types_opencv__hacks_.md#cvdatatype), `anchor?`: [Point](_types_opencv__hacks_.point.md), `delta?`: undefined | number, `border?`: [BorderTypes](../modules/_types_opencv_core_array_.md#bordertypes)): *this*

*Defined in [tool/chain.ts:9](https://github.com/cancerberoSgx/mirada/blob/eecc091/mirada/src/tool/chain.ts#L9)*

**Parameters:**

Name | Type |
------ | ------ |
`kernel` | [Mat](_types_opencv_mat_.mat.md) |
`depth?` | [CVDataType](../modules/_types_opencv__hacks_.md#cvdatatype) |
`anchor?` | [Point](_types_opencv__hacks_.point.md) |
`delta?` | undefined \| number |
`border?` | [BorderTypes](../modules/_types_opencv_core_array_.md#bordertypes) |

**Returns:** *this*

___

###  roi

▸ **roi**(`expr`: [Rect](_types_opencv__hacks_.rect.md) | [Mat](_types_opencv_mat_.mat.md)): *this*

*Defined in [tool/chain.ts:17](https://github.com/cancerberoSgx/mirada/blob/eecc091/mirada/src/tool/chain.ts#L17)*

**Parameters:**

Name | Type |
------ | ------ |
`expr` | [Rect](_types_opencv__hacks_.rect.md) \| [Mat](_types_opencv_mat_.mat.md) |

**Returns:** *this*

___

###  toRgba

▸ **toRgba**(): *this*

*Defined in [tool/chain.ts:13](https://github.com/cancerberoSgx/mirada/blob/eecc091/mirada/src/tool/chain.ts#L13)*

**Returns:** *this*