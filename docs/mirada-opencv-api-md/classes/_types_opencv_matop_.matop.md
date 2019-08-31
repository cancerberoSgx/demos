**[mirada](../README.md)**

[Globals](../README.md) › ["types/opencv/MatOp"](../modules/_types_opencv_matop_.md) › [MatOp](_types_opencv_matop_.matop.md)

# Class: MatOp

## Hierarchy

* **MatOp**

## Index

### Constructors

* [constructor](_types_opencv_matop_.matop.md#constructor)

### Methods

* [abs](_types_opencv_matop_.matop.md#abs)
* [add](_types_opencv_matop_.matop.md#add)
* [assign](_types_opencv_matop_.matop.md#assign)
* [augAssignAdd](_types_opencv_matop_.matop.md#augassignadd)
* [augAssignAnd](_types_opencv_matop_.matop.md#augassignand)
* [augAssignDivide](_types_opencv_matop_.matop.md#augassigndivide)
* [augAssignMultiply](_types_opencv_matop_.matop.md#augassignmultiply)
* [augAssignOr](_types_opencv_matop_.matop.md#augassignor)
* [augAssignSubtract](_types_opencv_matop_.matop.md#augassignsubtract)
* [augAssignXor](_types_opencv_matop_.matop.md#augassignxor)
* [diag](_types_opencv_matop_.matop.md#diag)
* [divide](_types_opencv_matop_.matop.md#divide)
* [elementWise](_types_opencv_matop_.matop.md#elementwise)
* [invert](_types_opencv_matop_.matop.md#invert)
* [matmul](_types_opencv_matop_.matop.md#matmul)
* [multiply](_types_opencv_matop_.matop.md#multiply)
* [roi](_types_opencv_matop_.matop.md#roi)
* [size](_types_opencv_matop_.matop.md#size)
* [subtract](_types_opencv_matop_.matop.md#subtract)
* [transpose](_types_opencv_matop_.matop.md#transpose)
* [type](_types_opencv_matop_.matop.md#type)

## Constructors

###  constructor

\+ **new MatOp**(): *[MatOp](_types_opencv_matop_.matop.md)*

*Defined in [types/opencv/MatOp.ts:4](https://github.com/cancerberoSgx/mirada/blob/1c5d3d0/mirada/src/types/opencv/MatOp.ts#L4)*

**Returns:** *[MatOp](_types_opencv_matop_.matop.md)*

## Methods

###  abs

▸ **abs**(`expr`: [MatExpr](_types_opencv_matexpr_.matexpr.md), `res`: [MatExpr](_types_opencv_matexpr_.matexpr.md)): *[MatExpr](_types_opencv_matexpr_.matexpr.md)*

*Defined in [types/opencv/MatOp.ts:8](https://github.com/cancerberoSgx/mirada/blob/1c5d3d0/mirada/src/types/opencv/MatOp.ts#L8)*

**Parameters:**

Name | Type |
------ | ------ |
`expr` | [MatExpr](_types_opencv_matexpr_.matexpr.md) |
`res` | [MatExpr](_types_opencv_matexpr_.matexpr.md) |

**Returns:** *[MatExpr](_types_opencv_matexpr_.matexpr.md)*

___

###  add

▸ **add**(`expr1`: [MatExpr](_types_opencv_matexpr_.matexpr.md), `expr2`: [MatExpr](_types_opencv_matexpr_.matexpr.md), `res`: [MatExpr](_types_opencv_matexpr_.matexpr.md)): *[MatExpr](_types_opencv_matexpr_.matexpr.md)*

*Defined in [types/opencv/MatOp.ts:10](https://github.com/cancerberoSgx/mirada/blob/1c5d3d0/mirada/src/types/opencv/MatOp.ts#L10)*

**Parameters:**

Name | Type |
------ | ------ |
`expr1` | [MatExpr](_types_opencv_matexpr_.matexpr.md) |
`expr2` | [MatExpr](_types_opencv_matexpr_.matexpr.md) |
`res` | [MatExpr](_types_opencv_matexpr_.matexpr.md) |

**Returns:** *[MatExpr](_types_opencv_matexpr_.matexpr.md)*

▸ **add**(`expr1`: [MatExpr](_types_opencv_matexpr_.matexpr.md), `s`: [Scalar](_types_opencv__hacks_.scalar.md), `res`: [MatExpr](_types_opencv_matexpr_.matexpr.md)): *[MatExpr](_types_opencv_matexpr_.matexpr.md)*

*Defined in [types/opencv/MatOp.ts:12](https://github.com/cancerberoSgx/mirada/blob/1c5d3d0/mirada/src/types/opencv/MatOp.ts#L12)*

**Parameters:**

Name | Type |
------ | ------ |
`expr1` | [MatExpr](_types_opencv_matexpr_.matexpr.md) |
`s` | [Scalar](_types_opencv__hacks_.scalar.md) |
`res` | [MatExpr](_types_opencv_matexpr_.matexpr.md) |

**Returns:** *[MatExpr](_types_opencv_matexpr_.matexpr.md)*

___

###  assign

▸ **assign**(`expr`: [MatExpr](_types_opencv_matexpr_.matexpr.md), `m`: [Mat](_types_opencv_mat_.mat.md), `type?`: [int](../modules/_types_opencv__hacks_.md#int)): *[MatExpr](_types_opencv_matexpr_.matexpr.md)*

*Defined in [types/opencv/MatOp.ts:14](https://github.com/cancerberoSgx/mirada/blob/1c5d3d0/mirada/src/types/opencv/MatOp.ts#L14)*

**Parameters:**

Name | Type |
------ | ------ |
`expr` | [MatExpr](_types_opencv_matexpr_.matexpr.md) |
`m` | [Mat](_types_opencv_mat_.mat.md) |
`type?` | [int](../modules/_types_opencv__hacks_.md#int) |

**Returns:** *[MatExpr](_types_opencv_matexpr_.matexpr.md)*

___

###  augAssignAdd

▸ **augAssignAdd**(`expr`: [MatExpr](_types_opencv_matexpr_.matexpr.md), `m`: [Mat](_types_opencv_mat_.mat.md)): *[MatExpr](_types_opencv_matexpr_.matexpr.md)*

*Defined in [types/opencv/MatOp.ts:16](https://github.com/cancerberoSgx/mirada/blob/1c5d3d0/mirada/src/types/opencv/MatOp.ts#L16)*

**Parameters:**

Name | Type |
------ | ------ |
`expr` | [MatExpr](_types_opencv_matexpr_.matexpr.md) |
`m` | [Mat](_types_opencv_mat_.mat.md) |

**Returns:** *[MatExpr](_types_opencv_matexpr_.matexpr.md)*

___

###  augAssignAnd

▸ **augAssignAnd**(`expr`: [MatExpr](_types_opencv_matexpr_.matexpr.md), `m`: [Mat](_types_opencv_mat_.mat.md)): *[MatExpr](_types_opencv_matexpr_.matexpr.md)*

*Defined in [types/opencv/MatOp.ts:18](https://github.com/cancerberoSgx/mirada/blob/1c5d3d0/mirada/src/types/opencv/MatOp.ts#L18)*

**Parameters:**

Name | Type |
------ | ------ |
`expr` | [MatExpr](_types_opencv_matexpr_.matexpr.md) |
`m` | [Mat](_types_opencv_mat_.mat.md) |

**Returns:** *[MatExpr](_types_opencv_matexpr_.matexpr.md)*

___

###  augAssignDivide

▸ **augAssignDivide**(`expr`: [MatExpr](_types_opencv_matexpr_.matexpr.md), `m`: [Mat](_types_opencv_mat_.mat.md)): *[MatExpr](_types_opencv_matexpr_.matexpr.md)*

*Defined in [types/opencv/MatOp.ts:20](https://github.com/cancerberoSgx/mirada/blob/1c5d3d0/mirada/src/types/opencv/MatOp.ts#L20)*

**Parameters:**

Name | Type |
------ | ------ |
`expr` | [MatExpr](_types_opencv_matexpr_.matexpr.md) |
`m` | [Mat](_types_opencv_mat_.mat.md) |

**Returns:** *[MatExpr](_types_opencv_matexpr_.matexpr.md)*

___

###  augAssignMultiply

▸ **augAssignMultiply**(`expr`: [MatExpr](_types_opencv_matexpr_.matexpr.md), `m`: [Mat](_types_opencv_mat_.mat.md)): *[MatExpr](_types_opencv_matexpr_.matexpr.md)*

*Defined in [types/opencv/MatOp.ts:22](https://github.com/cancerberoSgx/mirada/blob/1c5d3d0/mirada/src/types/opencv/MatOp.ts#L22)*

**Parameters:**

Name | Type |
------ | ------ |
`expr` | [MatExpr](_types_opencv_matexpr_.matexpr.md) |
`m` | [Mat](_types_opencv_mat_.mat.md) |

**Returns:** *[MatExpr](_types_opencv_matexpr_.matexpr.md)*

___

###  augAssignOr

▸ **augAssignOr**(`expr`: [MatExpr](_types_opencv_matexpr_.matexpr.md), `m`: [Mat](_types_opencv_mat_.mat.md)): *[MatExpr](_types_opencv_matexpr_.matexpr.md)*

*Defined in [types/opencv/MatOp.ts:24](https://github.com/cancerberoSgx/mirada/blob/1c5d3d0/mirada/src/types/opencv/MatOp.ts#L24)*

**Parameters:**

Name | Type |
------ | ------ |
`expr` | [MatExpr](_types_opencv_matexpr_.matexpr.md) |
`m` | [Mat](_types_opencv_mat_.mat.md) |

**Returns:** *[MatExpr](_types_opencv_matexpr_.matexpr.md)*

___

###  augAssignSubtract

▸ **augAssignSubtract**(`expr`: [MatExpr](_types_opencv_matexpr_.matexpr.md), `m`: [Mat](_types_opencv_mat_.mat.md)): *[MatExpr](_types_opencv_matexpr_.matexpr.md)*

*Defined in [types/opencv/MatOp.ts:26](https://github.com/cancerberoSgx/mirada/blob/1c5d3d0/mirada/src/types/opencv/MatOp.ts#L26)*

**Parameters:**

Name | Type |
------ | ------ |
`expr` | [MatExpr](_types_opencv_matexpr_.matexpr.md) |
`m` | [Mat](_types_opencv_mat_.mat.md) |

**Returns:** *[MatExpr](_types_opencv_matexpr_.matexpr.md)*

___

###  augAssignXor

▸ **augAssignXor**(`expr`: [MatExpr](_types_opencv_matexpr_.matexpr.md), `m`: [Mat](_types_opencv_mat_.mat.md)): *[MatExpr](_types_opencv_matexpr_.matexpr.md)*

*Defined in [types/opencv/MatOp.ts:28](https://github.com/cancerberoSgx/mirada/blob/1c5d3d0/mirada/src/types/opencv/MatOp.ts#L28)*

**Parameters:**

Name | Type |
------ | ------ |
`expr` | [MatExpr](_types_opencv_matexpr_.matexpr.md) |
`m` | [Mat](_types_opencv_mat_.mat.md) |

**Returns:** *[MatExpr](_types_opencv_matexpr_.matexpr.md)*

___

###  diag

▸ **diag**(`expr`: [MatExpr](_types_opencv_matexpr_.matexpr.md), `d`: [int](../modules/_types_opencv__hacks_.md#int), `res`: [MatExpr](_types_opencv_matexpr_.matexpr.md)): *[MatExpr](_types_opencv_matexpr_.matexpr.md)*

*Defined in [types/opencv/MatOp.ts:30](https://github.com/cancerberoSgx/mirada/blob/1c5d3d0/mirada/src/types/opencv/MatOp.ts#L30)*

**Parameters:**

Name | Type |
------ | ------ |
`expr` | [MatExpr](_types_opencv_matexpr_.matexpr.md) |
`d` | [int](../modules/_types_opencv__hacks_.md#int) |
`res` | [MatExpr](_types_opencv_matexpr_.matexpr.md) |

**Returns:** *[MatExpr](_types_opencv_matexpr_.matexpr.md)*

___

###  divide

▸ **divide**(`expr1`: [MatExpr](_types_opencv_matexpr_.matexpr.md), `expr2`: [MatExpr](_types_opencv_matexpr_.matexpr.md), `res`: [MatExpr](_types_opencv_matexpr_.matexpr.md), `scale?`: [double](../modules/_types_opencv__hacks_.md#double)): *[MatExpr](_types_opencv_matexpr_.matexpr.md)*

*Defined in [types/opencv/MatOp.ts:32](https://github.com/cancerberoSgx/mirada/blob/1c5d3d0/mirada/src/types/opencv/MatOp.ts#L32)*

**Parameters:**

Name | Type |
------ | ------ |
`expr1` | [MatExpr](_types_opencv_matexpr_.matexpr.md) |
`expr2` | [MatExpr](_types_opencv_matexpr_.matexpr.md) |
`res` | [MatExpr](_types_opencv_matexpr_.matexpr.md) |
`scale?` | [double](../modules/_types_opencv__hacks_.md#double) |

**Returns:** *[MatExpr](_types_opencv_matexpr_.matexpr.md)*

▸ **divide**(`s`: [double](../modules/_types_opencv__hacks_.md#double), `expr`: [MatExpr](_types_opencv_matexpr_.matexpr.md), `res`: [MatExpr](_types_opencv_matexpr_.matexpr.md)): *[MatExpr](_types_opencv_matexpr_.matexpr.md)*

*Defined in [types/opencv/MatOp.ts:34](https://github.com/cancerberoSgx/mirada/blob/1c5d3d0/mirada/src/types/opencv/MatOp.ts#L34)*

**Parameters:**

Name | Type |
------ | ------ |
`s` | [double](../modules/_types_opencv__hacks_.md#double) |
`expr` | [MatExpr](_types_opencv_matexpr_.matexpr.md) |
`res` | [MatExpr](_types_opencv_matexpr_.matexpr.md) |

**Returns:** *[MatExpr](_types_opencv_matexpr_.matexpr.md)*

___

###  elementWise

▸ **elementWise**(`expr`: [MatExpr](_types_opencv_matexpr_.matexpr.md)): *[MatExpr](_types_opencv_matexpr_.matexpr.md)*

*Defined in [types/opencv/MatOp.ts:36](https://github.com/cancerberoSgx/mirada/blob/1c5d3d0/mirada/src/types/opencv/MatOp.ts#L36)*

**Parameters:**

Name | Type |
------ | ------ |
`expr` | [MatExpr](_types_opencv_matexpr_.matexpr.md) |

**Returns:** *[MatExpr](_types_opencv_matexpr_.matexpr.md)*

___

###  invert

▸ **invert**(`expr`: [MatExpr](_types_opencv_matexpr_.matexpr.md), `method`: [int](../modules/_types_opencv__hacks_.md#int), `res`: [MatExpr](_types_opencv_matexpr_.matexpr.md)): *[MatExpr](_types_opencv_matexpr_.matexpr.md)*

*Defined in [types/opencv/MatOp.ts:38](https://github.com/cancerberoSgx/mirada/blob/1c5d3d0/mirada/src/types/opencv/MatOp.ts#L38)*

**Parameters:**

Name | Type |
------ | ------ |
`expr` | [MatExpr](_types_opencv_matexpr_.matexpr.md) |
`method` | [int](../modules/_types_opencv__hacks_.md#int) |
`res` | [MatExpr](_types_opencv_matexpr_.matexpr.md) |

**Returns:** *[MatExpr](_types_opencv_matexpr_.matexpr.md)*

___

###  matmul

▸ **matmul**(`expr1`: [MatExpr](_types_opencv_matexpr_.matexpr.md), `expr2`: [MatExpr](_types_opencv_matexpr_.matexpr.md), `res`: [MatExpr](_types_opencv_matexpr_.matexpr.md)): *[MatExpr](_types_opencv_matexpr_.matexpr.md)*

*Defined in [types/opencv/MatOp.ts:40](https://github.com/cancerberoSgx/mirada/blob/1c5d3d0/mirada/src/types/opencv/MatOp.ts#L40)*

**Parameters:**

Name | Type |
------ | ------ |
`expr1` | [MatExpr](_types_opencv_matexpr_.matexpr.md) |
`expr2` | [MatExpr](_types_opencv_matexpr_.matexpr.md) |
`res` | [MatExpr](_types_opencv_matexpr_.matexpr.md) |

**Returns:** *[MatExpr](_types_opencv_matexpr_.matexpr.md)*

___

###  multiply

▸ **multiply**(`expr1`: [MatExpr](_types_opencv_matexpr_.matexpr.md), `expr2`: [MatExpr](_types_opencv_matexpr_.matexpr.md), `res`: [MatExpr](_types_opencv_matexpr_.matexpr.md), `scale?`: [double](../modules/_types_opencv__hacks_.md#double)): *[MatExpr](_types_opencv_matexpr_.matexpr.md)*

*Defined in [types/opencv/MatOp.ts:42](https://github.com/cancerberoSgx/mirada/blob/1c5d3d0/mirada/src/types/opencv/MatOp.ts#L42)*

**Parameters:**

Name | Type |
------ | ------ |
`expr1` | [MatExpr](_types_opencv_matexpr_.matexpr.md) |
`expr2` | [MatExpr](_types_opencv_matexpr_.matexpr.md) |
`res` | [MatExpr](_types_opencv_matexpr_.matexpr.md) |
`scale?` | [double](../modules/_types_opencv__hacks_.md#double) |

**Returns:** *[MatExpr](_types_opencv_matexpr_.matexpr.md)*

▸ **multiply**(`expr1`: [MatExpr](_types_opencv_matexpr_.matexpr.md), `s`: [double](../modules/_types_opencv__hacks_.md#double), `res`: [MatExpr](_types_opencv_matexpr_.matexpr.md)): *[MatExpr](_types_opencv_matexpr_.matexpr.md)*

*Defined in [types/opencv/MatOp.ts:44](https://github.com/cancerberoSgx/mirada/blob/1c5d3d0/mirada/src/types/opencv/MatOp.ts#L44)*

**Parameters:**

Name | Type |
------ | ------ |
`expr1` | [MatExpr](_types_opencv_matexpr_.matexpr.md) |
`s` | [double](../modules/_types_opencv__hacks_.md#double) |
`res` | [MatExpr](_types_opencv_matexpr_.matexpr.md) |

**Returns:** *[MatExpr](_types_opencv_matexpr_.matexpr.md)*

___

###  roi

▸ **roi**(`expr`: [MatExpr](_types_opencv_matexpr_.matexpr.md), `rowRange`: Range, `colRange`: Range, `res`: [MatExpr](_types_opencv_matexpr_.matexpr.md)): *[MatExpr](_types_opencv_matexpr_.matexpr.md)*

*Defined in [types/opencv/MatOp.ts:46](https://github.com/cancerberoSgx/mirada/blob/1c5d3d0/mirada/src/types/opencv/MatOp.ts#L46)*

**Parameters:**

Name | Type |
------ | ------ |
`expr` | [MatExpr](_types_opencv_matexpr_.matexpr.md) |
`rowRange` | Range |
`colRange` | Range |
`res` | [MatExpr](_types_opencv_matexpr_.matexpr.md) |

**Returns:** *[MatExpr](_types_opencv_matexpr_.matexpr.md)*

___

###  size

▸ **size**(`expr`: [MatExpr](_types_opencv_matexpr_.matexpr.md)): *[Size](_types_opencv__hacks_.size.md)*

*Defined in [types/opencv/MatOp.ts:48](https://github.com/cancerberoSgx/mirada/blob/1c5d3d0/mirada/src/types/opencv/MatOp.ts#L48)*

**Parameters:**

Name | Type |
------ | ------ |
`expr` | [MatExpr](_types_opencv_matexpr_.matexpr.md) |

**Returns:** *[Size](_types_opencv__hacks_.size.md)*

___

###  subtract

▸ **subtract**(`expr1`: [MatExpr](_types_opencv_matexpr_.matexpr.md), `expr2`: [MatExpr](_types_opencv_matexpr_.matexpr.md), `res`: [MatExpr](_types_opencv_matexpr_.matexpr.md)): *[MatExpr](_types_opencv_matexpr_.matexpr.md)*

*Defined in [types/opencv/MatOp.ts:50](https://github.com/cancerberoSgx/mirada/blob/1c5d3d0/mirada/src/types/opencv/MatOp.ts#L50)*

**Parameters:**

Name | Type |
------ | ------ |
`expr1` | [MatExpr](_types_opencv_matexpr_.matexpr.md) |
`expr2` | [MatExpr](_types_opencv_matexpr_.matexpr.md) |
`res` | [MatExpr](_types_opencv_matexpr_.matexpr.md) |

**Returns:** *[MatExpr](_types_opencv_matexpr_.matexpr.md)*

▸ **subtract**(`s`: [Scalar](_types_opencv__hacks_.scalar.md), `expr`: [MatExpr](_types_opencv_matexpr_.matexpr.md), `res`: [MatExpr](_types_opencv_matexpr_.matexpr.md)): *[Scalar](_types_opencv__hacks_.scalar.md)*

*Defined in [types/opencv/MatOp.ts:52](https://github.com/cancerberoSgx/mirada/blob/1c5d3d0/mirada/src/types/opencv/MatOp.ts#L52)*

**Parameters:**

Name | Type |
------ | ------ |
`s` | [Scalar](_types_opencv__hacks_.scalar.md) |
`expr` | [MatExpr](_types_opencv_matexpr_.matexpr.md) |
`res` | [MatExpr](_types_opencv_matexpr_.matexpr.md) |

**Returns:** *[Scalar](_types_opencv__hacks_.scalar.md)*

___

###  transpose

▸ **transpose**(`expr`: [MatExpr](_types_opencv_matexpr_.matexpr.md), `res`: [MatExpr](_types_opencv_matexpr_.matexpr.md)): *[MatExpr](_types_opencv_matexpr_.matexpr.md)*

*Defined in [types/opencv/MatOp.ts:54](https://github.com/cancerberoSgx/mirada/blob/1c5d3d0/mirada/src/types/opencv/MatOp.ts#L54)*

**Parameters:**

Name | Type |
------ | ------ |
`expr` | [MatExpr](_types_opencv_matexpr_.matexpr.md) |
`res` | [MatExpr](_types_opencv_matexpr_.matexpr.md) |

**Returns:** *[MatExpr](_types_opencv_matexpr_.matexpr.md)*

___

###  type

▸ **type**(`expr`: [MatExpr](_types_opencv_matexpr_.matexpr.md)): *[MatExpr](_types_opencv_matexpr_.matexpr.md)*

*Defined in [types/opencv/MatOp.ts:56](https://github.com/cancerberoSgx/mirada/blob/1c5d3d0/mirada/src/types/opencv/MatOp.ts#L56)*

**Parameters:**

Name | Type |
------ | ------ |
`expr` | [MatExpr](_types_opencv_matexpr_.matexpr.md) |

**Returns:** *[MatExpr](_types_opencv_matexpr_.matexpr.md)*