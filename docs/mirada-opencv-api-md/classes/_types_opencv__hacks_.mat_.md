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

___

###  data32F

• **data32F**: *any*

## Methods

###  charPtr

▸ **charPtr**(`i`: any, `j`: any): *any*

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

**Returns:** *void*

___

###  doublePtr

▸ **doublePtr**(`i`: any, `j`: any): *any*

**Parameters:**

Name | Type |
------ | ------ |
`i` | any |
`j` | any |

**Returns:** *any*

___

###  floatPtr

▸ **floatPtr**(`i`: any, `j`: any): *any*

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

**Parameters:**

Name | Type |
------ | ------ |
`i` | number |

**Returns:** *[Mat](_types_opencv_mat_.mat.md)*

___

###  intPtr

▸ **intPtr**(`i`: any, `j`: any): *any*

**Parameters:**

Name | Type |
------ | ------ |
`i` | any |
`j` | any |

**Returns:** *any*

▸ **intPtr**(`i`: any, `j`: any): *any*

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

**Parameters:**

Name | Type |
------ | ------ |
`n` | [Mat](_types_opencv_mat_.mat.md) |

**Returns:** *any*

___

###  resize

▸ **resize**(`count`: number, `value?`: [T]()): *void*

*Inherited from [Vector](_types_opencv__hacks_.vector.md).[resize](_types_opencv__hacks_.vector.md#resize)*

**Parameters:**

Name | Type |
------ | ------ |
`count` | number |
`value?` | [T]() |

**Returns:** *void*

___

###  roi

▸ **roi**(`rect`: [Rect](_types_opencv__hacks_.rect.md)): *[Mat](_types_opencv_mat_.mat.md)*

**Parameters:**

Name | Type |
------ | ------ |
`rect` | [Rect](_types_opencv__hacks_.rect.md) |

**Returns:** *[Mat](_types_opencv_mat_.mat.md)*

___

###  set

▸ **set**(`i`: number, `t`: [Mat](_types_opencv_mat_.mat.md)): *void*

*Inherited from [Vector](_types_opencv__hacks_.vector.md).[set](_types_opencv__hacks_.vector.md#set)*

**Parameters:**

Name | Type |
------ | ------ |
`i` | number |
`t` | [Mat](_types_opencv_mat_.mat.md) |

**Returns:** *void*

___

###  shortPtr

▸ **shortPtr**(`i`: any, `j`: any): *any*

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

**Returns:** *number*

___

###  ucharPtr

▸ **ucharPtr**(`i`: any, `j`: any): *any*

**Parameters:**

Name | Type |
------ | ------ |
`i` | any |
`j` | any |

**Returns:** *any*

___

###  ushortPtr

▸ **ushortPtr**(`i`: any, `j`: any): *any*

**Parameters:**

Name | Type |
------ | ------ |
`i` | any |
`j` | any |

**Returns:** *any*