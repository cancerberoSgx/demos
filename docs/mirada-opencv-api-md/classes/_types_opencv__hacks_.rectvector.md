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
* [resize](_types_opencv__hacks_.rectvector.md#resize)
* [set](_types_opencv__hacks_.rectvector.md#set)
* [size](_types_opencv__hacks_.rectvector.md#size)

## Constructors

###  constructor

\+ **new RectVector**(): *[RectVector](_types_opencv__hacks_.rectvector.md)*

*Inherited from [Rect](_types_opencv__hacks_.rect.md).[constructor](_types_opencv__hacks_.rect.md#constructor)*

**Returns:** *[RectVector](_types_opencv__hacks_.rectvector.md)*

\+ **new RectVector**(`point`: [Point](_types_opencv__hacks_.point.md), `size`: [Size](_types_opencv__hacks_.size.md)): *[RectVector](_types_opencv__hacks_.rectvector.md)*

*Inherited from [Rect](_types_opencv__hacks_.rect.md).[constructor](_types_opencv__hacks_.rect.md#constructor)*

**Parameters:**

Name | Type |
------ | ------ |
`point` | [Point](_types_opencv__hacks_.point.md) |
`size` | [Size](_types_opencv__hacks_.size.md) |

**Returns:** *[RectVector](_types_opencv__hacks_.rectvector.md)*

\+ **new RectVector**(`x`: number, `y`: number, `width`: number, `height`: number): *[RectVector](_types_opencv__hacks_.rectvector.md)*

*Inherited from [Rect](_types_opencv__hacks_.rect.md).[constructor](_types_opencv__hacks_.rect.md#constructor)*

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

___

###  width

• **width**: *number*

*Inherited from [Rect](_types_opencv__hacks_.rect.md).[width](_types_opencv__hacks_.rect.md#width)*

___

###  x

• **x**: *number*

*Inherited from [Rect](_types_opencv__hacks_.rect.md).[x](_types_opencv__hacks_.rect.md#x)*

___

###  y

• **y**: *number*

*Inherited from [Rect](_types_opencv__hacks_.rect.md).[y](_types_opencv__hacks_.rect.md#y)*

## Methods

###  delete

▸ **delete**(): *void*

**Returns:** *void*

___

###  get

▸ **get**(`i`: number): *[Rect](_types_opencv__hacks_.rect.md)*

**Parameters:**

Name | Type |
------ | ------ |
`i` | number |

**Returns:** *[Rect](_types_opencv__hacks_.rect.md)*

___

###  push_back

▸ **push_back**(`n`: [Rect](_types_opencv__hacks_.rect.md)): *void*

**Parameters:**

Name | Type |
------ | ------ |
`n` | [Rect](_types_opencv__hacks_.rect.md) |

**Returns:** *void*

___

###  resize

▸ **resize**(`count`: number, `value?`: [Rect](_types_opencv__hacks_.rect.md) | undefined): *void*

**Parameters:**

Name | Type |
------ | ------ |
`count` | number |
`value?` | [Rect](_types_opencv__hacks_.rect.md) \| undefined |

**Returns:** *void*

___

###  set

▸ **set**(`i`: number, `t`: [Rect](_types_opencv__hacks_.rect.md)): *void*

**Parameters:**

Name | Type |
------ | ------ |
`i` | number |
`t` | [Rect](_types_opencv__hacks_.rect.md) |

**Returns:** *void*

___

###  size

▸ **size**(): *number*

**Returns:** *number*