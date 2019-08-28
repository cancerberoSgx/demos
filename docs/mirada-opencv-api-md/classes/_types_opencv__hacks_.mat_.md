**[mirada](../README.md)**

[Globals](../README.md) › ["types/opencv/_hacks"](../modules/_types_opencv__hacks_.md) › [Mat_](_types_opencv__hacks_.mat_.md)

# Class: Mat_

since we don't support inheritance yet we force Mat to extend Mat_ which type defined here:

## Hierarchy

* [Vector](_types_opencv__hacks_.vector.md)‹[Mat](_types_opencv_mat_.mat.md)›

  * **Mat_**

  * [Mat](_types_opencv_mat_.mat.md)

## Index

### Properties

* [data](_types_opencv__hacks_.mat_.md#data)
* [data32F](_types_opencv__hacks_.mat_.md#data32f)

### Methods

* [charPtr](_types_opencv__hacks_.mat_.md#charptr)
* [delete](_types_opencv__hacks_.mat_.md#delete)
* [doublePtr](_types_opencv__hacks_.mat_.md#doubleptr)
* [floatPtr](_types_opencv__hacks_.mat_.md#floatptr)
* [get](_types_opencv__hacks_.mat_.md#get)
* [intPtr](_types_opencv__hacks_.mat_.md#intptr)
* [push_back](_types_opencv__hacks_.mat_.md#push_back)
* [resize](_types_opencv__hacks_.mat_.md#resize)
* [roi](_types_opencv__hacks_.mat_.md#roi)
* [set](_types_opencv__hacks_.mat_.md#set)
* [shortPtr](_types_opencv__hacks_.mat_.md#shortptr)
* [size](_types_opencv__hacks_.mat_.md#size)
* [ucharPtr](_types_opencv__hacks_.mat_.md#ucharptr)
* [ushortPtr](_types_opencv__hacks_.mat_.md#ushortptr)

## Properties

###  data

• **data**: *[ImageData](_types_opencv__hacks_.imagedata.md)*

*Defined in [types/opencv/_hacks.ts:119](https://github.com/cancerberoSgx/mirada/blob/170e57c/mirada/src/types/opencv/_hacks.ts#L119)*

___

###  data32F

• **data32F**: *any*

*Defined in [types/opencv/_hacks.ts:120](https://github.com/cancerberoSgx/mirada/blob/170e57c/mirada/src/types/opencv/_hacks.ts#L120)*

## Methods

###  charPtr

▸ **charPtr**(`i`: any, `j`: any): *any*

*Defined in [types/opencv/_hacks.ts:122](https://github.com/cancerberoSgx/mirada/blob/170e57c/mirada/src/types/opencv/_hacks.ts#L122)*

**Parameters:**

Name | Type |
------ | ------ |
`i` | any |
`j` | any |

**Returns:** *any*

___

###  delete

▸ **delete**(): *void*

*Overrides [Vector](_types_opencv__hacks_.vector.md).[delete](_types_opencv__hacks_.vector.md#delete)*

*Defined in [types/opencv/_hacks.ts:118](https://github.com/cancerberoSgx/mirada/blob/170e57c/mirada/src/types/opencv/_hacks.ts#L118)*

**Returns:** *void*

___

###  doublePtr

▸ **doublePtr**(`i`: any, `j`: any): *any*

*Defined in [types/opencv/_hacks.ts:127](https://github.com/cancerberoSgx/mirada/blob/170e57c/mirada/src/types/opencv/_hacks.ts#L127)*

**Parameters:**

Name | Type |
------ | ------ |
`i` | any |
`j` | any |

**Returns:** *any*

___

###  floatPtr

▸ **floatPtr**(`i`: any, `j`: any): *any*

*Defined in [types/opencv/_hacks.ts:126](https://github.com/cancerberoSgx/mirada/blob/170e57c/mirada/src/types/opencv/_hacks.ts#L126)*

**Parameters:**

Name | Type |
------ | ------ |
`i` | any |
`j` | any |

**Returns:** *any*

___

###  get

▸ **get**(`i`: number): *[Mat](_types_opencv_mat_.mat.md)*

*Inherited from [Vector](_types_opencv__hacks_.vector.md).[get](_types_opencv__hacks_.vector.md#get)*

*Defined in [types/opencv/_hacks.ts:76](https://github.com/cancerberoSgx/mirada/blob/170e57c/mirada/src/types/opencv/_hacks.ts#L76)*

**Parameters:**

Name | Type |
------ | ------ |
`i` | number |

**Returns:** *[Mat](_types_opencv_mat_.mat.md)*

___

###  intPtr

▸ **intPtr**(`i`: any, `j`: any): *any*

*Defined in [types/opencv/_hacks.ts:125](https://github.com/cancerberoSgx/mirada/blob/170e57c/mirada/src/types/opencv/_hacks.ts#L125)*

**Parameters:**

Name | Type |
------ | ------ |
`i` | any |
`j` | any |

**Returns:** *any*

▸ **intPtr**(`i`: any, `j`: any): *any*

*Defined in [types/opencv/_hacks.ts:128](https://github.com/cancerberoSgx/mirada/blob/170e57c/mirada/src/types/opencv/_hacks.ts#L128)*

**Parameters:**

Name | Type |
------ | ------ |
`i` | any |
`j` | any |

**Returns:** *any*

___

###  push_back

▸ **push_back**(`n`: [Mat](_types_opencv_mat_.mat.md)): *any*

*Inherited from [Vector](_types_opencv__hacks_.vector.md).[push_back](_types_opencv__hacks_.vector.md#push_back)*

*Defined in [types/opencv/_hacks.ts:79](https://github.com/cancerberoSgx/mirada/blob/170e57c/mirada/src/types/opencv/_hacks.ts#L79)*

**Parameters:**

Name | Type |
------ | ------ |
`n` | [Mat](_types_opencv_mat_.mat.md) |

**Returns:** *any*

___

###  resize

▸ **resize**(`count`: number, `value?`: [T]()): *void*

*Inherited from [Vector](_types_opencv__hacks_.vector.md).[resize](_types_opencv__hacks_.vector.md#resize)*

*Defined in [types/opencv/_hacks.ts:80](https://github.com/cancerberoSgx/mirada/blob/170e57c/mirada/src/types/opencv/_hacks.ts#L80)*

**Parameters:**

Name | Type |
------ | ------ |
`count` | number |
`value?` | [T]() |

**Returns:** *void*

___

###  roi

▸ **roi**(`rect`: [Rect](_types_opencv__hacks_.rect.md)): *[Mat](_types_opencv_mat_.mat.md)*

*Defined in [types/opencv/_hacks.ts:129](https://github.com/cancerberoSgx/mirada/blob/170e57c/mirada/src/types/opencv/_hacks.ts#L129)*

**Parameters:**

Name | Type |
------ | ------ |
`rect` | [Rect](_types_opencv__hacks_.rect.md) |

**Returns:** *[Mat](_types_opencv_mat_.mat.md)*

___

###  set

▸ **set**(`i`: number, `t`: [Mat](_types_opencv_mat_.mat.md)): *void*

*Inherited from [Vector](_types_opencv__hacks_.vector.md).[set](_types_opencv__hacks_.vector.md#set)*

*Defined in [types/opencv/_hacks.ts:77](https://github.com/cancerberoSgx/mirada/blob/170e57c/mirada/src/types/opencv/_hacks.ts#L77)*

**Parameters:**

Name | Type |
------ | ------ |
`i` | number |
`t` | [Mat](_types_opencv_mat_.mat.md) |

**Returns:** *void*

___

###  shortPtr

▸ **shortPtr**(`i`: any, `j`: any): *any*

*Defined in [types/opencv/_hacks.ts:123](https://github.com/cancerberoSgx/mirada/blob/170e57c/mirada/src/types/opencv/_hacks.ts#L123)*

**Parameters:**

Name | Type |
------ | ------ |
`i` | any |
`j` | any |

**Returns:** *any*

___

###  size

▸ **size**(): *number*

*Inherited from [Vector](_types_opencv__hacks_.vector.md).[size](_types_opencv__hacks_.vector.md#size)*

*Defined in [types/opencv/_hacks.ts:78](https://github.com/cancerberoSgx/mirada/blob/170e57c/mirada/src/types/opencv/_hacks.ts#L78)*

**Returns:** *number*

___

###  ucharPtr

▸ **ucharPtr**(`i`: any, `j`: any): *any*

*Defined in [types/opencv/_hacks.ts:121](https://github.com/cancerberoSgx/mirada/blob/170e57c/mirada/src/types/opencv/_hacks.ts#L121)*

**Parameters:**

Name | Type |
------ | ------ |
`i` | any |
`j` | any |

**Returns:** *any*

___

###  ushortPtr

▸ **ushortPtr**(`i`: any, `j`: any): *any*

*Defined in [types/opencv/_hacks.ts:124](https://github.com/cancerberoSgx/mirada/blob/170e57c/mirada/src/types/opencv/_hacks.ts#L124)*

**Parameters:**

Name | Type |
------ | ------ |
`i` | any |
`j` | any |

**Returns:** *any*