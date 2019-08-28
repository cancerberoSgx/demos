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

**Returns:** *[MatOp](_types_opencv_matop_.matop.md)*

## Methods

###  abs

▸ **abs**(`expr`: [MatExpr](_types_opencv_matexpr_.matexpr.md), `res`: [MatExpr](_types_opencv_matexpr_.matexpr.md)): *[MatExpr](_types_opencv_matexpr_.matexpr.md)*

**Parameters:**

Name | Type |
------ | ------ |
`expr` | [MatExpr](_types_opencv_matexpr_.matexpr.md) |
`res` | [MatExpr](_types_opencv_matexpr_.matexpr.md) |

**Returns:** *[MatExpr](_types_opencv_matexpr_.matexpr.md)*

___

###  add

▸ **add**(`expr1`: [MatExpr](_types_opencv_matexpr_.matexpr.md), `expr2`: [MatExpr](_types_opencv_matexpr_.matexpr.md), `res`: [MatExpr](_types_opencv_matexpr_.matexpr.md)): *[MatExpr](_types_opencv_matexpr_.matexpr.md)*

**Parameters:**

Name | Type |
------ | ------ |
`expr1` | [MatExpr](_types_opencv_matexpr_.matexpr.md) |
`expr2` | [MatExpr](_types_opencv_matexpr_.matexpr.md) |
`res` | [MatExpr](_types_opencv_matexpr_.matexpr.md) |

**Returns:** *[MatExpr](_types_opencv_matexpr_.matexpr.md)*

▸ **add**(`expr1`: [MatExpr](_types_opencv_matexpr_.matexpr.md), `s`: [Scalar](_types_opencv__hacks_.scalar.md), `res`: [MatExpr](_types_opencv_matexpr_.matexpr.md)): *[MatExpr](_types_opencv_matexpr_.matexpr.md)*

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

**Parameters:**

Name | Type |
------ | ------ |
`expr` | [MatExpr](_types_opencv_matexpr_.matexpr.md) |
`m` | [Mat](_types_opencv_mat_.mat.md) |

**Returns:** *[MatExpr](_types_opencv_matexpr_.matexpr.md)*

___

###  augAssignAnd

▸ **augAssignAnd**(`expr`: [MatExpr](_types_opencv_matexpr_.matexpr.md), `m`: [Mat](_types_opencv_mat_.mat.md)): *[MatExpr](_types_opencv_matexpr_.matexpr.md)*

**Parameters:**

Name | Type |
------ | ------ |
`expr` | [MatExpr](_types_opencv_matexpr_.matexpr.md) |
`m` | [Mat](_types_opencv_mat_.mat.md) |

**Returns:** *[MatExpr](_types_opencv_matexpr_.matexpr.md)*

___

###  augAssignDivide

▸ **augAssignDivide**(`expr`: [MatExpr](_types_opencv_matexpr_.matexpr.md), `m`: [Mat](_types_opencv_mat_.mat.md)): *[MatExpr](_types_opencv_matexpr_.matexpr.md)*

**Parameters:**

Name | Type |
------ | ------ |
`expr` | [MatExpr](_types_opencv_matexpr_.matexpr.md) |
`m` | [Mat](_types_opencv_mat_.mat.md) |

**Returns:** *[MatExpr](_types_opencv_matexpr_.matexpr.md)*

___

###  augAssignMultiply

▸ **augAssignMultiply**(`expr`: [MatExpr](_types_opencv_matexpr_.matexpr.md), `m`: [Mat](_types_opencv_mat_.mat.md)): *[MatExpr](_types_opencv_matexpr_.matexpr.md)*

**Parameters:**

Name | Type |
------ | ------ |
`expr` | [MatExpr](_types_opencv_matexpr_.matexpr.md) |
`m` | [Mat](_types_opencv_mat_.mat.md) |

**Returns:** *[MatExpr](_types_opencv_matexpr_.matexpr.md)*

___

###  augAssignOr

▸ **augAssignOr**(`expr`: [MatExpr](_types_opencv_matexpr_.matexpr.md), `m`: [Mat](_types_opencv_mat_.mat.md)): *[MatExpr](_types_opencv_matexpr_.matexpr.md)*

**Parameters:**

Name | Type |
------ | ------ |
`expr` | [MatExpr](_types_opencv_matexpr_.matexpr.md) |
`m` | [Mat](_types_opencv_mat_.mat.md) |

**Returns:** *[MatExpr](_types_opencv_matexpr_.matexpr.md)*

___

###  augAssignSubtract

▸ **augAssignSubtract**(`expr`: [MatExpr](_types_opencv_matexpr_.matexpr.md), `m`: [Mat](_types_opencv_mat_.mat.md)): *[MatExpr](_types_opencv_matexpr_.matexpr.md)*

**Parameters:**

Name | Type |
------ | ------ |
`expr` | [MatExpr](_types_opencv_matexpr_.matexpr.md) |
`m` | [Mat](_types_opencv_mat_.mat.md) |

**Returns:** *[MatExpr](_types_opencv_matexpr_.matexpr.md)*

___

###  augAssignXor

▸ **augAssignXor**(`expr`: [MatExpr](_types_opencv_matexpr_.matexpr.md), `m`: [Mat](_types_opencv_mat_.mat.md)): *[MatExpr](_types_opencv_matexpr_.matexpr.md)*

**Parameters:**

Name | Type |
------ | ------ |
`expr` | [MatExpr](_types_opencv_matexpr_.matexpr.md) |
`m` | [Mat](_types_opencv_mat_.mat.md) |

**Returns:** *[MatExpr](_types_opencv_matexpr_.matexpr.md)*

___

###  diag

▸ **diag**(`expr`: [MatExpr](_types_opencv_matexpr_.matexpr.md), `d`: [int](../modules/_types_opencv__hacks_.md#int), `res`: [MatExpr](_types_opencv_matexpr_.matexpr.md)): *[MatExpr](_types_opencv_matexpr_.matexpr.md)*

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

**Parameters:**

Name | Type |
------ | ------ |
`expr1` | [MatExpr](_types_opencv_matexpr_.matexpr.md) |
`expr2` | [MatExpr](_types_opencv_matexpr_.matexpr.md) |
`res` | [MatExpr](_types_opencv_matexpr_.matexpr.md) |
`scale?` | [double](../modules/_types_opencv__hacks_.md#double) |

**Returns:** *[MatExpr](_types_opencv_matexpr_.matexpr.md)*

▸ **divide**(`s`: [double](../modules/_types_opencv__hacks_.md#double), `expr`: [MatExpr](_types_opencv_matexpr_.matexpr.md), `res`: [MatExpr](_types_opencv_matexpr_.matexpr.md)): *[MatExpr](_types_opencv_matexpr_.matexpr.md)*

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

**Parameters:**

Name | Type |
------ | ------ |
`expr` | [MatExpr](_types_opencv_matexpr_.matexpr.md) |

**Returns:** *[MatExpr](_types_opencv_matexpr_.matexpr.md)*

___

###  invert

▸ **invert**(`expr`: [MatExpr](_types_opencv_matexpr_.matexpr.md), `method`: [int](../modules/_types_opencv__hacks_.md#int), `res`: [MatExpr](_types_opencv_matexpr_.matexpr.md)): *[MatExpr](_types_opencv_matexpr_.matexpr.md)*

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

**Parameters:**

Name | Type |
------ | ------ |
`expr1` | [MatExpr](_types_opencv_matexpr_.matexpr.md) |
`expr2` | [MatExpr](_types_opencv_matexpr_.matexpr.md) |
`res` | [MatExpr](_types_opencv_matexpr_.matexpr.md) |
`scale?` | [double](../modules/_types_opencv__hacks_.md#double) |

**Returns:** *[MatExpr](_types_opencv_matexpr_.matexpr.md)*

▸ **multiply**(`expr1`: [MatExpr](_types_opencv_matexpr_.matexpr.md), `s`: [double](../modules/_types_opencv__hacks_.md#double), `res`: [MatExpr](_types_opencv_matexpr_.matexpr.md)): *[MatExpr](_types_opencv_matexpr_.matexpr.md)*

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

**Parameters:**

Name | Type |
------ | ------ |
`expr` | [MatExpr](_types_opencv_matexpr_.matexpr.md) |

**Returns:** *[Size](_types_opencv__hacks_.size.md)*

___

###  subtract

▸ **subtract**(`expr1`: [MatExpr](_types_opencv_matexpr_.matexpr.md), `expr2`: [MatExpr](_types_opencv_matexpr_.matexpr.md), `res`: [MatExpr](_types_opencv_matexpr_.matexpr.md)): *[MatExpr](_types_opencv_matexpr_.matexpr.md)*

**Parameters:**

Name | Type |
------ | ------ |
`expr1` | [MatExpr](_types_opencv_matexpr_.matexpr.md) |
`expr2` | [MatExpr](_types_opencv_matexpr_.matexpr.md) |
`res` | [MatExpr](_types_opencv_matexpr_.matexpr.md) |

**Returns:** *[MatExpr](_types_opencv_matexpr_.matexpr.md)*

▸ **subtract**(`s`: [Scalar](_types_opencv__hacks_.scalar.md), `expr`: [MatExpr](_types_opencv_matexpr_.matexpr.md), `res`: [MatExpr](_types_opencv_matexpr_.matexpr.md)): *[Scalar](_types_opencv__hacks_.scalar.md)*

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

**Parameters:**

Name | Type |
------ | ------ |
`expr` | [MatExpr](_types_opencv_matexpr_.matexpr.md) |
`res` | [MatExpr](_types_opencv_matexpr_.matexpr.md) |

**Returns:** *[MatExpr](_types_opencv_matexpr_.matexpr.md)*

___

###  type

▸ **type**(`expr`: [MatExpr](_types_opencv_matexpr_.matexpr.md)): *[MatExpr](_types_opencv_matexpr_.matexpr.md)*

**Parameters:**

Name | Type |
------ | ------ |
`expr` | [MatExpr](_types_opencv_matexpr_.matexpr.md) |

**Returns:** *[MatExpr](_types_opencv_matexpr_.matexpr.md)*