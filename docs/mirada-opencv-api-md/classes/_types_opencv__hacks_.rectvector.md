**[mirada](../README.md)**

[Globals](../README.md) › ["types/opencv/_hacks"](../modules/_types_opencv__hacks_.md) › [RectVector](_types_opencv__hacks_.rectvector.md)

# Class: RectVector

## Hierarchy

* [Rect](_types_opencv__hacks_.rect.md)

  * **RectVector**

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

* [delete](_types_opencv__hacks_.rectvector.md#delete)
* [get](_types_opencv__hacks_.rectvector.md#get)
* [push_back](_types_opencv__hacks_.rectvector.md#push_back)
* [put](_types_opencv__hacks_.rectvector.md#put)
* [resize](_types_opencv__hacks_.rectvector.md#resize)
* [set](_types_opencv__hacks_.rectvector.md#set)
* [size](_types_opencv__hacks_.rectvector.md#size)

## Constructors

###  constructor

\+ **new RectVector**(): *[RectVector](_types_opencv__hacks_.rectvector.md)*

*Inherited from [Rect](_types_opencv__hacks_.rect.md).[constructor](_types_opencv__hacks_.rect.md#constructor)*

*Defined in [types/opencv/_hacks.ts:36](https://github.com/cancerberoSgx/mirada/blob/eecc091/mirada/src/types/opencv/_hacks.ts#L36)*

**Returns:** *[RectVector](_types_opencv__hacks_.rectvector.md)*

\+ **new RectVector**(`point`: [Point](_types_opencv__hacks_.point.md), `size`: [Size](_types_opencv__hacks_.size.md)): *[RectVector](_types_opencv__hacks_.rectvector.md)*

*Inherited from [Rect](_types_opencv__hacks_.rect.md).[constructor](_types_opencv__hacks_.rect.md#constructor)*

*Defined in [types/opencv/_hacks.ts:37](https://github.com/cancerberoSgx/mirada/blob/eecc091/mirada/src/types/opencv/_hacks.ts#L37)*

**Parameters:**

Name | Type |
------ | ------ |
`point` | [Point](_types_opencv__hacks_.point.md) |
`size` | [Size](_types_opencv__hacks_.size.md) |

**Returns:** *[RectVector](_types_opencv__hacks_.rectvector.md)*

\+ **new RectVector**(`x`: number, `y`: number, `width`: number, `height`: number): *[RectVector](_types_opencv__hacks_.rectvector.md)*

*Inherited from [Rect](_types_opencv__hacks_.rect.md).[constructor](_types_opencv__hacks_.rect.md#constructor)*

*Defined in [types/opencv/_hacks.ts:38](https://github.com/cancerberoSgx/mirada/blob/eecc091/mirada/src/types/opencv/_hacks.ts#L38)*

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

*Defined in [types/opencv/_hacks.ts:43](https://github.com/cancerberoSgx/mirada/blob/eecc091/mirada/src/types/opencv/_hacks.ts#L43)*

___

###  width

• **width**: *number*

*Inherited from [Rect](_types_opencv__hacks_.rect.md).[width](_types_opencv__hacks_.rect.md#width)*

*Defined in [types/opencv/_hacks.ts:42](https://github.com/cancerberoSgx/mirada/blob/eecc091/mirada/src/types/opencv/_hacks.ts#L42)*

___

###  x

• **x**: *number*

*Inherited from [Rect](_types_opencv__hacks_.rect.md).[x](_types_opencv__hacks_.rect.md#x)*

*Defined in [types/opencv/_hacks.ts:40](https://github.com/cancerberoSgx/mirada/blob/eecc091/mirada/src/types/opencv/_hacks.ts#L40)*

___

###  y

• **y**: *number*

*Inherited from [Rect](_types_opencv__hacks_.rect.md).[y](_types_opencv__hacks_.rect.md#y)*

*Defined in [types/opencv/_hacks.ts:41](https://github.com/cancerberoSgx/mirada/blob/eecc091/mirada/src/types/opencv/_hacks.ts#L41)*

## Methods

###  delete

▸ **delete**(): *void*

*Defined in [types/opencv/_hacks.ts:100](https://github.com/cancerberoSgx/mirada/blob/eecc091/mirada/src/types/opencv/_hacks.ts#L100)*

**Returns:** *void*

___

###  get

▸ **get**(`i`: number): *[Rect](_types_opencv__hacks_.rect.md)*

*Defined in [types/opencv/_hacks.ts:94](https://github.com/cancerberoSgx/mirada/blob/eecc091/mirada/src/types/opencv/_hacks.ts#L94)*

**Parameters:**

Name | Type |
------ | ------ |
`i` | number |

**Returns:** *[Rect](_types_opencv__hacks_.rect.md)*

___

###  push_back

▸ **push_back**(`n`: [Rect](_types_opencv__hacks_.rect.md)): *void*

*Defined in [types/opencv/_hacks.ts:98](https://github.com/cancerberoSgx/mirada/blob/eecc091/mirada/src/types/opencv/_hacks.ts#L98)*

**Parameters:**

Name | Type |
------ | ------ |
`n` | [Rect](_types_opencv__hacks_.rect.md) |

**Returns:** *void*

___

###  put

▸ **put**(`i`: number, `j`: number, `data`: any): *any*

*Defined in [types/opencv/_hacks.ts:96](https://github.com/cancerberoSgx/mirada/blob/eecc091/mirada/src/types/opencv/_hacks.ts#L96)*

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

*Defined in [types/opencv/_hacks.ts:99](https://github.com/cancerberoSgx/mirada/blob/eecc091/mirada/src/types/opencv/_hacks.ts#L99)*

**Parameters:**

Name | Type |
------ | ------ |
`count` | number |
`value?` | [Rect](_types_opencv__hacks_.rect.md) \| undefined |

**Returns:** *void*

___

###  set

▸ **set**(`i`: number, `t`: [Rect](_types_opencv__hacks_.rect.md)): *void*

*Defined in [types/opencv/_hacks.ts:95](https://github.com/cancerberoSgx/mirada/blob/eecc091/mirada/src/types/opencv/_hacks.ts#L95)*

**Parameters:**

Name | Type |
------ | ------ |
`i` | number |
`t` | [Rect](_types_opencv__hacks_.rect.md) |

**Returns:** *void*

___

###  size

▸ **size**(): *number*

*Defined in [types/opencv/_hacks.ts:97](https://github.com/cancerberoSgx/mirada/blob/eecc091/mirada/src/types/opencv/_hacks.ts#L97)*

**Returns:** *number*