[mirada](../README.md) › ["types/opencv/_hacks"](../modules/_types_opencv__hacks_.md) › [RectVector](_types_opencv__hacks_.rectvector.md)

# Class: RectVector


## Hierarchy

* [Rect](_types_opencv__hacks_.rect.md)

  ↳ **RectVector**

## Implements

* [Vector](_types_opencv__hacks_.vector.md)‹[Rect](_types_opencv__hacks_.rect.md)›

## Index

### Constructors

* [constructor](_types_opencv__hacks_.rectvector.md#constructor)

### Properties

* [height](_types_opencv__hacks_.rectvector.md#height)
* [width](_types_opencv__hacks_.rectvector.md#width)
* [x](_types_opencv__hacks_.rectvector.md#x)
* [y](_types_opencv__hacks_.rectvector.md#y)

### Methods

* [clone](_types_opencv__hacks_.rectvector.md#clone)
* [delete](_types_opencv__hacks_.rectvector.md#delete)
* [deleteLater](_types_opencv__hacks_.rectvector.md#deletelater)
* [get](_types_opencv__hacks_.rectvector.md#get)
* [isAliasOf](_types_opencv__hacks_.rectvector.md#isaliasof)
* [isDeleted](_types_opencv__hacks_.rectvector.md#isdeleted)
* [push_back](_types_opencv__hacks_.rectvector.md#push_back)
* [put](_types_opencv__hacks_.rectvector.md#put)
* [resize](_types_opencv__hacks_.rectvector.md#resize)
* [set](_types_opencv__hacks_.rectvector.md#set)
* [size](_types_opencv__hacks_.rectvector.md#size)

## Constructors

###  constructor

\+ **new RectVector**(): *[RectVector](_types_opencv__hacks_.rectvector.md)*

*Inherited from [Rect](_types_opencv__hacks_.rect.md).[constructor](_types_opencv__hacks_.rect.md#constructor)*

*Defined in [types/opencv/_hacks.ts:37](https://github.com/cancerberoSgx/mirada/blob/e7b5ae6/mirada/src/types/opencv/_hacks.ts#L37)*

**Returns:** *[RectVector](_types_opencv__hacks_.rectvector.md)*

\+ **new RectVector**(`point`: [Point](_types_opencv__hacks_.point.md), `size`: [Size](_types_opencv__hacks_.size.md)): *[RectVector](_types_opencv__hacks_.rectvector.md)*

*Inherited from [Rect](_types_opencv__hacks_.rect.md).[constructor](_types_opencv__hacks_.rect.md#constructor)*

*Defined in [types/opencv/_hacks.ts:38](https://github.com/cancerberoSgx/mirada/blob/e7b5ae6/mirada/src/types/opencv/_hacks.ts#L38)*

**Parameters:**

Name | Type |
------ | ------ |
`point` | [Point](_types_opencv__hacks_.point.md) |
`size` | [Size](_types_opencv__hacks_.size.md) |

**Returns:** *[RectVector](_types_opencv__hacks_.rectvector.md)*

\+ **new RectVector**(`x`: number, `y`: number, `width`: number, `height`: number): *[RectVector](_types_opencv__hacks_.rectvector.md)*

*Inherited from [Rect](_types_opencv__hacks_.rect.md).[constructor](_types_opencv__hacks_.rect.md#constructor)*

*Defined in [types/opencv/_hacks.ts:39](https://github.com/cancerberoSgx/mirada/blob/e7b5ae6/mirada/src/types/opencv/_hacks.ts#L39)*

**Parameters:**

Name | Type |
------ | ------ |
`x` | number |
`y` | number |
`width` | number |
`height` | number |

**Returns:** *[RectVector](_types_opencv__hacks_.rectvector.md)*

## Properties

###  height

• **height**: *number*

*Inherited from [Rect](_types_opencv__hacks_.rect.md).[height](_types_opencv__hacks_.rect.md#height)*

*Defined in [types/opencv/_hacks.ts:44](https://github.com/cancerberoSgx/mirada/blob/e7b5ae6/mirada/src/types/opencv/_hacks.ts#L44)*

___

###  width

• **width**: *number*

*Inherited from [Rect](_types_opencv__hacks_.rect.md).[width](_types_opencv__hacks_.rect.md#width)*

*Defined in [types/opencv/_hacks.ts:43](https://github.com/cancerberoSgx/mirada/blob/e7b5ae6/mirada/src/types/opencv/_hacks.ts#L43)*

___

###  x

• **x**: *number*

*Inherited from [Rect](_types_opencv__hacks_.rect.md).[x](_types_opencv__hacks_.rect.md#x)*

*Defined in [types/opencv/_hacks.ts:41](https://github.com/cancerberoSgx/mirada/blob/e7b5ae6/mirada/src/types/opencv/_hacks.ts#L41)*

___

###  y

• **y**: *number*

*Inherited from [Rect](_types_opencv__hacks_.rect.md).[y](_types_opencv__hacks_.rect.md#y)*

*Defined in [types/opencv/_hacks.ts:42](https://github.com/cancerberoSgx/mirada/blob/e7b5ae6/mirada/src/types/opencv/_hacks.ts#L42)*

## Methods

###  clone

▸ **clone**(...`a`: any[]): *any*

*Defined in [types/opencv/_hacks.ts:153](https://github.com/cancerberoSgx/mirada/blob/e7b5ae6/mirada/src/types/opencv/_hacks.ts#L153)*

**Parameters:**

Name | Type |
------ | ------ |
`...a` | any[] |

**Returns:** *any*

___

###  delete

▸ **delete**(...`a`: any[]): *any*

*Defined in [types/opencv/_hacks.ts:154](https://github.com/cancerberoSgx/mirada/blob/e7b5ae6/mirada/src/types/opencv/_hacks.ts#L154)*

**Parameters:**

Name | Type |
------ | ------ |
`...a` | any[] |

**Returns:** *any*

▸ **delete**(): *void*

*Defined in [types/opencv/_hacks.ts:162](https://github.com/cancerberoSgx/mirada/blob/e7b5ae6/mirada/src/types/opencv/_hacks.ts#L162)*

**Returns:** *void*

___

###  deleteLater

▸ **deleteLater**(...`a`: any[]): *any*

*Defined in [types/opencv/_hacks.ts:156](https://github.com/cancerberoSgx/mirada/blob/e7b5ae6/mirada/src/types/opencv/_hacks.ts#L156)*

**Parameters:**

Name | Type |
------ | ------ |
`...a` | any[] |

**Returns:** *any*

___

###  get

▸ **get**(`i`: number): *[Rect](_types_opencv__hacks_.rect.md)*

*Defined in [types/opencv/_hacks.ts:151](https://github.com/cancerberoSgx/mirada/blob/e7b5ae6/mirada/src/types/opencv/_hacks.ts#L151)*

**Parameters:**

Name | Type |
------ | ------ |
`i` | number |

**Returns:** *[Rect](_types_opencv__hacks_.rect.md)*

___

###  isAliasOf

▸ **isAliasOf**(...`a`: any[]): *any*

*Defined in [types/opencv/_hacks.ts:152](https://github.com/cancerberoSgx/mirada/blob/e7b5ae6/mirada/src/types/opencv/_hacks.ts#L152)*

**Parameters:**

Name | Type |
------ | ------ |
`...a` | any[] |

**Returns:** *any*

___

###  isDeleted

▸ **isDeleted**(...`a`: any[]): *any*

*Defined in [types/opencv/_hacks.ts:155](https://github.com/cancerberoSgx/mirada/blob/e7b5ae6/mirada/src/types/opencv/_hacks.ts#L155)*

**Parameters:**

Name | Type |
------ | ------ |
`...a` | any[] |

**Returns:** *any*

___

###  push_back

▸ **push_back**(`n`: [Rect](_types_opencv__hacks_.rect.md)): *void*

*Defined in [types/opencv/_hacks.ts:160](https://github.com/cancerberoSgx/mirada/blob/e7b5ae6/mirada/src/types/opencv/_hacks.ts#L160)*

**Parameters:**

Name | Type |
------ | ------ |
`n` | [Rect](_types_opencv__hacks_.rect.md) |

**Returns:** *void*

___

###  put

▸ **put**(`i`: number, `j`: number, `data`: any): *any*

*Defined in [types/opencv/_hacks.ts:158](https://github.com/cancerberoSgx/mirada/blob/e7b5ae6/mirada/src/types/opencv/_hacks.ts#L158)*

**Parameters:**

Name | Type |
------ | ------ |
`i` | number |
`j` | number |
`data` | any |

**Returns:** *any*

___

###  resize

▸ **resize**(`count`: number, `value?`: [Rect](_types_opencv__hacks_.rect.md) | undefined): *void*

*Defined in [types/opencv/_hacks.ts:161](https://github.com/cancerberoSgx/mirada/blob/e7b5ae6/mirada/src/types/opencv/_hacks.ts#L161)*

**Parameters:**

Name | Type |
------ | ------ |
`count` | number |
`value?` | [Rect](_types_opencv__hacks_.rect.md) &#124; undefined |

**Returns:** *void*

___

###  set

▸ **set**(`i`: number, `t`: [Rect](_types_opencv__hacks_.rect.md)): *void*

*Defined in [types/opencv/_hacks.ts:157](https://github.com/cancerberoSgx/mirada/blob/e7b5ae6/mirada/src/types/opencv/_hacks.ts#L157)*

**Parameters:**

Name | Type |
------ | ------ |
`i` | number |
`t` | [Rect](_types_opencv__hacks_.rect.md) |

**Returns:** *void*

___

###  size

▸ **size**(): *number*

*Defined in [types/opencv/_hacks.ts:159](https://github.com/cancerberoSgx/mirada/blob/e7b5ae6/mirada/src/types/opencv/_hacks.ts#L159)*

**Returns:** *number*