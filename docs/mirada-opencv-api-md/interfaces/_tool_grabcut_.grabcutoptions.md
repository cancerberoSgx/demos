**[mirada](../README.md)**

[Globals](../README.md) › ["tool/grabCut"](../modules/_tool_grabcut_.md) › [GrabCutOptions](_tool_grabcut_.grabcutoptions.md)

# Interface: GrabCutOptions

## Hierarchy

* [Rect](../classes/_types_opencv__hacks_.rect.md)

  * **GrabCutOptions**

## Index

### Constructors

* [constructor](_tool_grabcut_.grabcutoptions.md#constructor)

### Properties

* [frameColor](_tool_grabcut_.grabcutoptions.md#optional-framecolor)
* [height](_tool_grabcut_.grabcutoptions.md#height)
* [image](_tool_grabcut_.grabcutoptions.md#image)
* [width](_tool_grabcut_.grabcutoptions.md#width)
* [x](_tool_grabcut_.grabcutoptions.md#x)
* [y](_tool_grabcut_.grabcutoptions.md#y)

## Constructors

###  constructor

\+ **new GrabCutOptions**(): *[GrabCutOptions](_tool_grabcut_.grabcutoptions.md)*

*Inherited from [Rect](../classes/_types_opencv__hacks_.rect.md).[constructor](../classes/_types_opencv__hacks_.rect.md#constructor)*

*Defined in [types/opencv/_hacks.ts:36](https://github.com/cancerberoSgx/mirada/blob/eecc091/mirada/src/types/opencv/_hacks.ts#L36)*

**Returns:** *[GrabCutOptions](_tool_grabcut_.grabcutoptions.md)*

\+ **new GrabCutOptions**(`point`: [Point](../classes/_types_opencv__hacks_.point.md), `size`: [Size](../classes/_types_opencv__hacks_.size.md)): *[GrabCutOptions](_tool_grabcut_.grabcutoptions.md)*

*Inherited from [Rect](../classes/_types_opencv__hacks_.rect.md).[constructor](../classes/_types_opencv__hacks_.rect.md#constructor)*

*Defined in [types/opencv/_hacks.ts:37](https://github.com/cancerberoSgx/mirada/blob/eecc091/mirada/src/types/opencv/_hacks.ts#L37)*

**Parameters:**

Name | Type |
------ | ------ |
`point` | [Point](../classes/_types_opencv__hacks_.point.md) |
`size` | [Size](../classes/_types_opencv__hacks_.size.md) |

**Returns:** *[GrabCutOptions](_tool_grabcut_.grabcutoptions.md)*

\+ **new GrabCutOptions**(`x`: number, `y`: number, `width`: number, `height`: number): *[GrabCutOptions](_tool_grabcut_.grabcutoptions.md)*

*Inherited from [Rect](../classes/_types_opencv__hacks_.rect.md).[constructor](../classes/_types_opencv__hacks_.rect.md#constructor)*

*Defined in [types/opencv/_hacks.ts:38](https://github.com/cancerberoSgx/mirada/blob/eecc091/mirada/src/types/opencv/_hacks.ts#L38)*

**Parameters:**

Name | Type |
------ | ------ |
`x` | number |
`y` | number |
`width` | number |
`height` | number |

**Returns:** *[GrabCutOptions](_tool_grabcut_.grabcutoptions.md)*

## Properties

### `Optional` frameColor

• **frameColor**? : *[Scalar](../classes/_types_opencv__hacks_.scalar.md)*

*Defined in [tool/grabCut.ts:11](https://github.com/cancerberoSgx/mirada/blob/eecc091/mirada/src/tool/grabCut.ts#L11)*

If given a rectangle frame will be drawn on given coordinates with that color.

___

###  height

• **height**: *number*

*Inherited from [Rect](../classes/_types_opencv__hacks_.rect.md).[height](../classes/_types_opencv__hacks_.rect.md#height)*

*Defined in [types/opencv/_hacks.ts:43](https://github.com/cancerberoSgx/mirada/blob/eecc091/mirada/src/types/opencv/_hacks.ts#L43)*

___

###  image

• **image**: *[File](../classes/_file_.file.md)*

*Defined in [tool/grabCut.ts:7](https://github.com/cancerberoSgx/mirada/blob/eecc091/mirada/src/tool/grabCut.ts#L7)*

___

###  width

• **width**: *number*

*Inherited from [Rect](../classes/_types_opencv__hacks_.rect.md).[width](../classes/_types_opencv__hacks_.rect.md#width)*

*Defined in [types/opencv/_hacks.ts:42](https://github.com/cancerberoSgx/mirada/blob/eecc091/mirada/src/types/opencv/_hacks.ts#L42)*

___

###  x

• **x**: *number*

*Inherited from [Rect](../classes/_types_opencv__hacks_.rect.md).[x](../classes/_types_opencv__hacks_.rect.md#x)*

*Defined in [types/opencv/_hacks.ts:40](https://github.com/cancerberoSgx/mirada/blob/eecc091/mirada/src/types/opencv/_hacks.ts#L40)*

___

###  y

• **y**: *number*

*Inherited from [Rect](../classes/_types_opencv__hacks_.rect.md).[y](../classes/_types_opencv__hacks_.rect.md#y)*

*Defined in [types/opencv/_hacks.ts:41](https://github.com/cancerberoSgx/mirada/blob/eecc091/mirada/src/types/opencv/_hacks.ts#L41)*