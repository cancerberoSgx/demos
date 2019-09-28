[ojos](../README.md) › ["util/color"](_util_color_.md)

# External module: "util/color"

## Index

### Interfaces

* [TColor](../interfaces/_util_color_.tcolor.md)

### Variables

* [scalarColors](_util_color_.md#const-scalarcolors)

### Functions

* [color](_util_color_.md#color)
* [randomScalarColor](_util_color_.md#randomscalarcolor)
* [scalarColor](_util_color_.md#scalarcolor)
* [scalarColorString](_util_color_.md#scalarcolorstring)

## Variables

### `Const` scalarColors

• **scalarColors**: *number[][]* =  [
  [255, 102, 51, 255], [255, 179, 153, 255], [255, 51, 255, 255], [255, 255, 153, 255],
  [0, 179, 230, 255], [230, 179, 51, 255], [51, 102, 230, 255], [153, 153, 102, 255],
  [153, 255, 153, 255], [179, 77, 77, 255], [128, 179, 0, 255], [128, 153, 0, 255],
  [230, 179, 179, 255], [102, 128, 179, 255], [102, 153, 26, 255], [255, 153, 230, 255],
  [204, 255, 26, 255], [255, 26, 102, 255], [230, 51, 26, 255], [51, 255, 204, 255],
  [102, 153, 77, 255], [179, 102, 204, 255], [77, 128, 0, 255], [179, 51, 0, 255],
  [204, 128, 204, 255], [102, 102, 77, 255], [153, 26, 255, 255], [230, 102, 255, 255],
  [77, 179, 255, 255], [26, 179, 153, 255], [230, 102, 179, 255], [51, 153, 26, 255],
  [204, 153, 153, 255], [179, 179, 26, 255], [0, 230, 128, 255], [77, 128, 102, 255],
  [128, 153, 128, 255], [230, 255, 128, 255], [26, 255, 51, 255], [153, 153, 51, 255],
  [255, 51, 128, 255], [204, 204, 0, 255], [102, 230, 77, 255], [77, 128, 204, 255],
  [153, 0, 179, 255], [230, 77, 102, 255], [77, 179, 128, 255], [255, 77, 77, 255],
  [153, 230, 230, 255], [102, 102, 255, 255]
]

*Defined in [util/color.ts:30](https://github.com/cancerberoSgx/mirada/blob/3544b58/ojos/src/util/color.ts#L30)*

## Functions

###  color

▸ **color**(`color?`: tinyColor.ColorInput, `opts?`: tinyColor.ConstructorOptions): *[TColor](../interfaces/_util_color_.tcolor.md)*

*Defined in [util/color.ts:5](https://github.com/cancerberoSgx/mirada/blob/3544b58/ojos/src/util/color.ts#L5)*

**Parameters:**

Name | Type |
------ | ------ |
`color?` | tinyColor.ColorInput |
`opts?` | tinyColor.ConstructorOptions |

**Returns:** *[TColor](../interfaces/_util_color_.tcolor.md)*

___

###  randomScalarColor

▸ **randomScalarColor**(): *number[]*

*Defined in [util/color.ts:26](https://github.com/cancerberoSgx/mirada/blob/3544b58/ojos/src/util/color.ts#L26)*

**Returns:** *number[]*

___

###  scalarColor

▸ **scalarColor**(`c`: tinyColor.ColorInput, `opts?`: tinyColor.ConstructorOptions): *Scalar*

*Defined in [util/color.ts:14](https://github.com/cancerberoSgx/mirada/blob/3544b58/ojos/src/util/color.ts#L14)*

**Parameters:**

Name | Type |
------ | ------ |
`c` | tinyColor.ColorInput |
`opts?` | tinyColor.ConstructorOptions |

**Returns:** *Scalar*

___

###  scalarColorString

▸ **scalarColorString**(`c`: tinyColor.ColorInput, `opts?`: tinyColor.ConstructorOptions): *string*

*Defined in [util/color.ts:18](https://github.com/cancerberoSgx/mirada/blob/3544b58/ojos/src/util/color.ts#L18)*

**Parameters:**

Name | Type |
------ | ------ |
`c` | tinyColor.ColorInput |
`opts?` | tinyColor.ConstructorOptions |

**Returns:** *string*
