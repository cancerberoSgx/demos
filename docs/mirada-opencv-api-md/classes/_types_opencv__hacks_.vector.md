**[mirada](../README.md)**

[Globals](../README.md) › ["types/opencv/_hacks"](../modules/_types_opencv__hacks_.md) › [Vector](_types_opencv__hacks_.vector.md)

# Class: Vector <**T**>

## Type parameters

▪ **T**

## Hierarchy

* **Vector**

  * [Vec3d](_types_opencv__hacks_.vec3d.md)

  * [IntVector](_types_opencv__hacks_.intvector.md)

  * [FloatVector](_types_opencv__hacks_.floatvector.md)

  * [DoubleVector](_types_opencv__hacks_.doublevector.md)

  * [PointVector](_types_opencv__hacks_.pointvector.md)

  * [KeyPointVector](_types_opencv__hacks_.keypointvector.md)

  * [DMatchVector](_types_opencv__hacks_.dmatchvector.md)

  * [DMatchVectorVector](_types_opencv__hacks_.dmatchvectorvector.md)

  * [Mat_](_types_opencv__hacks_.mat_.md)

## Implemented by

* [RectVector](_types_opencv__hacks_.rectvector.md)

## Index

### Methods

* [delete](_types_opencv__hacks_.vector.md#delete)
* [get](_types_opencv__hacks_.vector.md#get)
* [push_back](_types_opencv__hacks_.vector.md#push_back)
* [put](_types_opencv__hacks_.vector.md#put)
* [resize](_types_opencv__hacks_.vector.md#resize)
* [set](_types_opencv__hacks_.vector.md#set)
* [size](_types_opencv__hacks_.vector.md#size)

## Methods

###  delete

▸ **delete**(): *void*

*Defined in [types/opencv/_hacks.ts:80](https://github.com/cancerberoSgx/mirada/blob/ff42750/mirada/src/types/opencv/_hacks.ts#L80)*

**Returns:** *void*

___

###  get

▸ **get**(`i`: number): *T*

*Defined in [types/opencv/_hacks.ts:73](https://github.com/cancerberoSgx/mirada/blob/ff42750/mirada/src/types/opencv/_hacks.ts#L73)*

**Parameters:**

Name | Type |
------ | ------ |
`i` | number |

**Returns:** *T*

▸ **get**(`i`: number, `j`: number, `data`: any): *T*

*Defined in [types/opencv/_hacks.ts:74](https://github.com/cancerberoSgx/mirada/blob/ff42750/mirada/src/types/opencv/_hacks.ts#L74)*

**Parameters:**

Name | Type |
------ | ------ |
`i` | number |
`j` | number |
`data` | any |

**Returns:** *T*

___

###  push_back

▸ **push_back**(`n`: T): *any*

*Defined in [types/opencv/_hacks.ts:78](https://github.com/cancerberoSgx/mirada/blob/ff42750/mirada/src/types/opencv/_hacks.ts#L78)*

**Parameters:**

Name | Type |
------ | ------ |
`n` | T |

**Returns:** *any*

___

###  put

▸ **put**(`i`: number, `j`: number, `data`: any): *any*

*Defined in [types/opencv/_hacks.ts:76](https://github.com/cancerberoSgx/mirada/blob/ff42750/mirada/src/types/opencv/_hacks.ts#L76)*

**Parameters:**

Name | Type |
------ | ------ |
`i` | number |
`j` | number |
`data` | any |

**Returns:** *any*

___

###  resize

▸ **resize**(`count`: number, `value?`: [T]()): *void*

*Defined in [types/opencv/_hacks.ts:79](https://github.com/cancerberoSgx/mirada/blob/ff42750/mirada/src/types/opencv/_hacks.ts#L79)*

**Parameters:**

Name | Type |
------ | ------ |
`count` | number |
`value?` | [T]() |

**Returns:** *void*

___

###  set

▸ **set**(`i`: number, `t`: T): *void*

*Defined in [types/opencv/_hacks.ts:75](https://github.com/cancerberoSgx/mirada/blob/ff42750/mirada/src/types/opencv/_hacks.ts#L75)*

**Parameters:**

Name | Type |
------ | ------ |
`i` | number |
`t` | T |

**Returns:** *void*

___

###  size

▸ **size**(): *number*

*Defined in [types/opencv/_hacks.ts:77](https://github.com/cancerberoSgx/mirada/blob/ff42750/mirada/src/types/opencv/_hacks.ts#L77)*

**Returns:** *number*