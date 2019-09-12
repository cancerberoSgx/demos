**[ojos](../README.md)**

[Globals](../README.md) › ["color"](../modules/_color_.md) › [TColor](_color_.tcolor.md)

# Interface: TColor

## Hierarchy

* Instance

  * **TColor**

## Index

### Methods

* [analogous](_color_.tcolor.md#analogous)
* [brighten](_color_.tcolor.md#brighten)
* [clone](_color_.tcolor.md#clone)
* [complement](_color_.tcolor.md#complement)
* [darken](_color_.tcolor.md#darken)
* [desaturate](_color_.tcolor.md#desaturate)
* [getAlpha](_color_.tcolor.md#getalpha)
* [getBrightness](_color_.tcolor.md#getbrightness)
* [getFormat](_color_.tcolor.md#getformat)
* [getLuminance](_color_.tcolor.md#getluminance)
* [getOriginalInput](_color_.tcolor.md#getoriginalinput)
* [greyscale](_color_.tcolor.md#greyscale)
* [isDark](_color_.tcolor.md#isdark)
* [isLight](_color_.tcolor.md#islight)
* [isValid](_color_.tcolor.md#isvalid)
* [lighten](_color_.tcolor.md#lighten)
* [monochromatic](_color_.tcolor.md#monochromatic)
* [saturate](_color_.tcolor.md#saturate)
* [setAlpha](_color_.tcolor.md#setalpha)
* [spin](_color_.tcolor.md#spin)
* [splitcomplement](_color_.tcolor.md#splitcomplement)
* [tetrad](_color_.tcolor.md#tetrad)
* [toFilter](_color_.tcolor.md#tofilter)
* [toHex](_color_.tcolor.md#tohex)
* [toHex8](_color_.tcolor.md#tohex8)
* [toHex8String](_color_.tcolor.md#tohex8string)
* [toHexString](_color_.tcolor.md#tohexstring)
* [toHsl](_color_.tcolor.md#tohsl)
* [toHslString](_color_.tcolor.md#tohslstring)
* [toHsv](_color_.tcolor.md#tohsv)
* [toHsvString](_color_.tcolor.md#tohsvstring)
* [toName](_color_.tcolor.md#toname)
* [toPercentageRgb](_color_.tcolor.md#topercentagergb)
* [toPercentageRgbString](_color_.tcolor.md#topercentagergbstring)
* [toRgb](_color_.tcolor.md#torgb)
* [toRgbString](_color_.tcolor.md#torgbstring)
* [toScalar](_color_.tcolor.md#toscalar)
* [toString](_color_.tcolor.md#tostring)
* [triad](_color_.tcolor.md#triad)

## Methods

###  analogous

▸ **analogous**(`results?`: undefined | number, `slices?`: undefined | number): *Instance[]*

*Inherited from void*

Defined in /Users/sebastiangurin/git/mirada/ojos/node_modules/@types/tinycolor2/index.d.ts:638

Gets an analogous color scheme based off of the current color.

**Parameters:**

Name | Type | Description |
------ | ------ | ------ |
`results?` | undefined \| number | The amount of results to return.  Default value: 6. |
`slices?` | undefined \| number | The amount to slice the input color by.  Default value: 30.  |

**Returns:** *Instance[]*

___

###  brighten

▸ **brighten**(`amount?`: undefined | number): *Instance*

*Inherited from void*

Defined in /Users/sebastiangurin/git/mirada/ojos/node_modules/@types/tinycolor2/index.d.ts:590

Brighten the color a given amount.

**Parameters:**

Name | Type | Description |
------ | ------ | ------ |
`amount?` | undefined \| number | The amount to brighten by. The valid range is 0 to 100.  Default value: 10.  |

**Returns:** *Instance*

___

###  clone

▸ **clone**(): *Instance*

*Inherited from void*

Defined in /Users/sebastiangurin/git/mirada/ojos/node_modules/@types/tinycolor2/index.d.ts:574

Gets a new instance with the current color

**Returns:** *Instance*

___

###  complement

▸ **complement**(): *Instance*

*Inherited from void*

Defined in /Users/sebastiangurin/git/mirada/ojos/node_modules/@types/tinycolor2/index.d.ts:643

Gets the complement of the current color

**Returns:** *Instance*

___

###  darken

▸ **darken**(`amount?`: undefined | number): *Instance*

*Inherited from void*

Defined in /Users/sebastiangurin/git/mirada/ojos/node_modules/@types/tinycolor2/index.d.ts:599

Darken the color a given amount.
 Providing 100 will always return black.

**Parameters:**

Name | Type | Description |
------ | ------ | ------ |
`amount?` | undefined \| number | The amount to darken by. The valid range is 0 to 100.  Default value: 10.  |

**Returns:** *Instance*

___

###  desaturate

▸ **desaturate**(`amount?`: undefined | number): *Instance*

*Inherited from void*

Defined in /Users/sebastiangurin/git/mirada/ojos/node_modules/@types/tinycolor2/index.d.ts:607

Desaturate the color a given amount.
 Providing 100 will is the same as calling greyscale.

**Parameters:**

Name | Type | Description |
------ | ------ | ------ |
`amount?` | undefined \| number | The amount to desaturate by. The valid range is 0 to 100.  Default value: 10.  |

**Returns:** *Instance*

___

###  getAlpha

▸ **getAlpha**(): *number*

*Inherited from void*

Defined in /Users/sebastiangurin/git/mirada/ojos/node_modules/@types/tinycolor2/index.d.ts:470

Returns the alpha value of the color

**Returns:** *number*

___

###  getBrightness

▸ **getBrightness**(): *number*

*Inherited from void*

Defined in /Users/sebastiangurin/git/mirada/ojos/node_modules/@types/tinycolor2/index.d.ts:475

Returns the perceived brightness of the color, from 0-255.

**Returns:** *number*

___

###  getFormat

▸ **getFormat**(): *string*

*Inherited from void*

Defined in /Users/sebastiangurin/git/mirada/ojos/node_modules/@types/tinycolor2/index.d.ts:465

Returns the format used to create the tinycolor instance.

**Returns:** *string*

___

###  getLuminance

▸ **getLuminance**(): *number*

*Inherited from void*

Defined in /Users/sebastiangurin/git/mirada/ojos/node_modules/@types/tinycolor2/index.d.ts:480

Returns the perceived luminance of a color, from 0-1.

**Returns:** *number*

___

###  getOriginalInput

▸ **getOriginalInput**(): *ColorInput*

*Inherited from void*

Defined in /Users/sebastiangurin/git/mirada/ojos/node_modules/@types/tinycolor2/index.d.ts:460

Returns the input passed into the constructer used to create the tinycolor instance.

**Returns:** *ColorInput*

___

###  greyscale

▸ **greyscale**(): *Instance*

*Inherited from void*

Defined in /Users/sebastiangurin/git/mirada/ojos/node_modules/@types/tinycolor2/index.d.ts:621

Completely desaturates a color into greyscale.
Same as calling desaturate(100).

**Returns:** *Instance*

___

###  isDark

▸ **isDark**(): *boolean*

*Inherited from void*

Defined in /Users/sebastiangurin/git/mirada/ojos/node_modules/@types/tinycolor2/index.d.ts:445

Return an indication whether the color's perceived brightness is dark.

**Returns:** *boolean*

___

###  isLight

▸ **isLight**(): *boolean*

*Inherited from void*

Defined in /Users/sebastiangurin/git/mirada/ojos/node_modules/@types/tinycolor2/index.d.ts:450

Return an indication whether the color's perceived brightness is light.

**Returns:** *boolean*

___

###  isValid

▸ **isValid**(): *boolean*

*Inherited from void*

Defined in /Users/sebastiangurin/git/mirada/ojos/node_modules/@types/tinycolor2/index.d.ts:455

Return an indication whether the color was successfully parsed.

**Returns:** *boolean*

___

###  lighten

▸ **lighten**(`amount?`: undefined | number): *Instance*

*Inherited from void*

Defined in /Users/sebastiangurin/git/mirada/ojos/node_modules/@types/tinycolor2/index.d.ts:582

Lighten the color a given amount. Providing 100 will always return white.

**Parameters:**

Name | Type | Description |
------ | ------ | ------ |
`amount?` | undefined \| number | The amount to lighten by. The valid range is 0 to 100.  Default value: 10.  |

**Returns:** *Instance*

___

###  monochromatic

▸ **monochromatic**(`results?`: undefined | number): *Instance[]*

*Inherited from void*

Defined in /Users/sebastiangurin/git/mirada/ojos/node_modules/@types/tinycolor2/index.d.ts:651

Gets a monochromatic color scheme based off of the current color.

**Parameters:**

Name | Type | Description |
------ | ------ | ------ |
`results?` | undefined \| number | The amount of results to return.  Default value: 6.  |

**Returns:** *Instance[]*

___

###  saturate

▸ **saturate**(`amount?`: undefined | number): *Instance*

*Inherited from void*

Defined in /Users/sebastiangurin/git/mirada/ojos/node_modules/@types/tinycolor2/index.d.ts:615

Saturate the color a given amount.

**Parameters:**

Name | Type | Description |
------ | ------ | ------ |
`amount?` | undefined \| number | The amount to saturate by. The valid range is 0  to 100.  Default value: 10.  |

**Returns:** *Instance*

___

###  setAlpha

▸ **setAlpha**(`alpha`: number): *Instance*

*Inherited from void*

Defined in /Users/sebastiangurin/git/mirada/ojos/node_modules/@types/tinycolor2/index.d.ts:487

Sets the alpha value on the current color.

**Parameters:**

Name | Type | Description |
------ | ------ | ------ |
`alpha` | number | The new alpha value. The accepted range is 0-1.  |

**Returns:** *Instance*

___

###  spin

▸ **spin**(`amount`: number): *Instance*

*Inherited from void*

Defined in /Users/sebastiangurin/git/mirada/ojos/node_modules/@types/tinycolor2/index.d.ts:628

Spin the hue a given amount. Calling with 0, 360, or -360 will do nothing.

**Parameters:**

Name | Type | Description |
------ | ------ | ------ |
`amount` | number | The amount to spin by. The valid range is -360 to 360.  |

**Returns:** *Instance*

___

###  splitcomplement

▸ **splitcomplement**(): *[Instance, Instance, Instance]*

*Inherited from void*

Defined in /Users/sebastiangurin/git/mirada/ojos/node_modules/@types/tinycolor2/index.d.ts:656

Gets a split complement color scheme based off of the current color.

**Returns:** *[Instance, Instance, Instance]*

___

###  tetrad

▸ **tetrad**(): *[Instance, Instance, Instance, Instance]*

*Inherited from void*

Defined in /Users/sebastiangurin/git/mirada/ojos/node_modules/@types/tinycolor2/index.d.ts:666

Gets a tetrad based off of the current color.

**Returns:** *[Instance, Instance, Instance, Instance]*

___

###  toFilter

▸ **toFilter**(): *string*

*Inherited from void*

Defined in /Users/sebastiangurin/git/mirada/ojos/node_modules/@types/tinycolor2/index.d.ts:561

Returns the color represented as a Microsoft filter for use in old versions of IE.

**Returns:** *string*

___

###  toHex

▸ **toHex**(): *string*

*Inherited from void*

Defined in /Users/sebastiangurin/git/mirada/ojos/node_modules/@types/tinycolor2/index.d.ts:514

Returns the hex value of the color.

**Returns:** *string*

___

###  toHex8

▸ **toHex8**(): *string*

*Inherited from void*

Defined in /Users/sebastiangurin/git/mirada/ojos/node_modules/@types/tinycolor2/index.d.ts:524

Returns the hex 8 value of the color.

**Returns:** *string*

___

###  toHex8String

▸ **toHex8String**(): *string*

*Inherited from void*

Defined in /Users/sebastiangurin/git/mirada/ojos/node_modules/@types/tinycolor2/index.d.ts:529

Returns the hex 8  value of the color -with a # appened.

**Returns:** *string*

___

###  toHexString

▸ **toHexString**(): *string*

*Inherited from void*

Defined in /Users/sebastiangurin/git/mirada/ojos/node_modules/@types/tinycolor2/index.d.ts:519

Returns the hex value of the color -with a # appened.

**Returns:** *string*

___

###  toHsl

▸ **toHsl**(): *HSLA*

*Inherited from void*

Defined in /Users/sebastiangurin/git/mirada/ojos/node_modules/@types/tinycolor2/index.d.ts:503

Returns the object as a HSLA object.

**Returns:** *HSLA*

___

###  toHslString

▸ **toHslString**(): *string*

*Inherited from void*

Defined in /Users/sebastiangurin/git/mirada/ojos/node_modules/@types/tinycolor2/index.d.ts:509

Returns the hsla values interpolated into a string with the following format:
"hsla(xxx, xxx, xxx, xx)".

**Returns:** *string*

___

###  toHsv

▸ **toHsv**(): *HSVA*

*Inherited from void*

Defined in /Users/sebastiangurin/git/mirada/ojos/node_modules/@types/tinycolor2/index.d.ts:492

Returns the object as a HSVA object.

**Returns:** *HSVA*

___

###  toHsvString

▸ **toHsvString**(): *string*

*Inherited from void*

Defined in /Users/sebastiangurin/git/mirada/ojos/node_modules/@types/tinycolor2/index.d.ts:498

Returns the hsva values interpolated into a string with the following format:
"hsva(xxx, xxx, xxx, xx)".

**Returns:** *string*

___

###  toName

▸ **toName**(): *string | false*

*Inherited from void*

Defined in /Users/sebastiangurin/git/mirada/ojos/node_modules/@types/tinycolor2/index.d.ts:556

The 'real' name of the color -if there is one.

**Returns:** *string | false*

___

###  toPercentageRgb

▸ **toPercentageRgb**(): *PRGBA*

*Inherited from void*

Defined in /Users/sebastiangurin/git/mirada/ojos/node_modules/@types/tinycolor2/index.d.ts:545

Returns the object as a RGBA object.

**Returns:** *PRGBA*

___

###  toPercentageRgbString

▸ **toPercentageRgbString**(): *string*

*Inherited from void*

Defined in /Users/sebastiangurin/git/mirada/ojos/node_modules/@types/tinycolor2/index.d.ts:551

Returns the RGBA relative values interpolated into a string with the following format:
"RGBA(xxx, xxx, xxx, xx)".

**Returns:** *string*

___

###  toRgb

▸ **toRgb**(): *RGBA*

*Inherited from void*

Defined in /Users/sebastiangurin/git/mirada/ojos/node_modules/@types/tinycolor2/index.d.ts:534

Returns the object as a RGBA object.

**Returns:** *RGBA*

___

###  toRgbString

▸ **toRgbString**(): *string*

*Inherited from void*

Defined in /Users/sebastiangurin/git/mirada/ojos/node_modules/@types/tinycolor2/index.d.ts:540

Returns the RGBA values interpolated into a string with the following format:
"RGBA(xxx, xxx, xxx, xx)".

**Returns:** *string*

___

###  toScalar

▸ **toScalar**(): *Scalar*

*Defined in [color.ts:17](https://github.com/cancerberoSgx/mirada/blob/f2ba50d/ojos/src/color.ts#L17)*

**Returns:** *Scalar*

___

###  toString

▸ **toString**(`format?`: "rgb" | "prgb" | "hex" | "hex6" | "hex3" | "hex4" | "hex8" | "name" | "hsl" | "hsv"): *string*

*Inherited from void*

Defined in /Users/sebastiangurin/git/mirada/ojos/node_modules/@types/tinycolor2/index.d.ts:569

String representation of the color.

**Parameters:**

Name | Type | Description |
------ | ------ | ------ |
`format?` | "rgb" \| "prgb" \| "hex" \| "hex6" \| "hex3" \| "hex4" \| "hex8" \| "name" \| "hsl" \| "hsv" | The format to be used when displaying the string representation.  The accepted values are: "rgb", "prgb", "hex6", "hex3", "hex8", "name", "hsl", "hsv".  |

**Returns:** *string*

___

###  triad

▸ **triad**(): *[Instance, Instance, Instance]*

*Inherited from void*

Defined in /Users/sebastiangurin/git/mirada/ojos/node_modules/@types/tinycolor2/index.d.ts:661

Gets a triad based off of the current color.

**Returns:** *[Instance, Instance, Instance]*