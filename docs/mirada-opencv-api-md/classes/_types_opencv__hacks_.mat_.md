[mirada](../README.md) › ["types/opencv/_hacks"](../modules/_types_opencv__hacks_.md) › [Mat_](_types_opencv__hacks_.mat_.md)

# Class: Mat_


since we don't support inheritance yet we force Mat to extend Mat_ which type defined here:

## Hierarchy

  ↳ [Vector](_types_opencv__hacks_.vector.md)‹[Mat](_types_opencv_mat_.mat.md)›

  ↳ **Mat_**

  ↳ [Mat](_types_opencv_mat_.mat.md)

## Index

### Properties

* [data](_types_opencv__hacks_.mat_.md#data)
* [data16S](_types_opencv__hacks_.mat_.md#data16s)
* [data16U](_types_opencv__hacks_.mat_.md#data16u)
* [data32F](_types_opencv__hacks_.mat_.md#data32f)
* [data32S](_types_opencv__hacks_.mat_.md#data32s)
* [data32U](_types_opencv__hacks_.mat_.md#data32u)
* [data64F](_types_opencv__hacks_.mat_.md#data64f)
* [data8S](_types_opencv__hacks_.mat_.md#data8s)
* [data8U](_types_opencv__hacks_.mat_.md#data8u)

### Methods

* [charPtr](_types_opencv__hacks_.mat_.md#charptr)
* [clone](_types_opencv__hacks_.mat_.md#clone)
* [delete](_types_opencv__hacks_.mat_.md#delete)
* [deleteLater](_types_opencv__hacks_.mat_.md#deletelater)
* [doublePtr](_types_opencv__hacks_.mat_.md#doubleptr)
* [floatPtr](_types_opencv__hacks_.mat_.md#floatptr)
* [get](_types_opencv__hacks_.mat_.md#get)
* [intPtr](_types_opencv__hacks_.mat_.md#intptr)
* [isAliasOf](_types_opencv__hacks_.mat_.md#isaliasof)
* [isDeleted](_types_opencv__hacks_.mat_.md#isdeleted)
* [push_back](_types_opencv__hacks_.mat_.md#push_back)
* [put](_types_opencv__hacks_.mat_.md#put)
* [resize](_types_opencv__hacks_.mat_.md#resize)
* [roi](_types_opencv__hacks_.mat_.md#roi)
* [set](_types_opencv__hacks_.mat_.md#set)
* [shortPtr](_types_opencv__hacks_.mat_.md#shortptr)
* [ucharPtr](_types_opencv__hacks_.mat_.md#ucharptr)
* [ushortPtr](_types_opencv__hacks_.mat_.md#ushortptr)

## Properties

###  data

• **data**: *Uint8Array*

*Defined in [types/opencv/_hacks.ts:178](https://github.com/cancerberoSgx/mirada/blob/e7b5ae6/mirada/src/types/opencv/_hacks.ts#L178)*

___

###  data16S

• **data16S**: *Int16Array*

*Defined in [types/opencv/_hacks.ts:182](https://github.com/cancerberoSgx/mirada/blob/e7b5ae6/mirada/src/types/opencv/_hacks.ts#L182)*

___

###  data16U

• **data16U**: *Uint16Array*

*Defined in [types/opencv/_hacks.ts:181](https://github.com/cancerberoSgx/mirada/blob/e7b5ae6/mirada/src/types/opencv/_hacks.ts#L181)*

___

###  data32F

• **data32F**: *Float32Array*

*Defined in [types/opencv/_hacks.ts:186](https://github.com/cancerberoSgx/mirada/blob/e7b5ae6/mirada/src/types/opencv/_hacks.ts#L186)*

___

###  data32S

• **data32S**: *Int32Array*

*Defined in [types/opencv/_hacks.ts:184](https://github.com/cancerberoSgx/mirada/blob/e7b5ae6/mirada/src/types/opencv/_hacks.ts#L184)*

___

###  data32U

• **data32U**: *Uint32Array*

*Defined in [types/opencv/_hacks.ts:183](https://github.com/cancerberoSgx/mirada/blob/e7b5ae6/mirada/src/types/opencv/_hacks.ts#L183)*

___

###  data64F

• **data64F**: *Float64Array*

*Defined in [types/opencv/_hacks.ts:185](https://github.com/cancerberoSgx/mirada/blob/e7b5ae6/mirada/src/types/opencv/_hacks.ts#L185)*

___

###  data8S

• **data8S**: *Int8Array*

*Defined in [types/opencv/_hacks.ts:179](https://github.com/cancerberoSgx/mirada/blob/e7b5ae6/mirada/src/types/opencv/_hacks.ts#L179)*

___

###  data8U

• **data8U**: *Uint8Array*

*Defined in [types/opencv/_hacks.ts:180](https://github.com/cancerberoSgx/mirada/blob/e7b5ae6/mirada/src/types/opencv/_hacks.ts#L180)*

## Methods

###  charPtr

▸ **charPtr**(`i`: any, `j`: any): *any*

*Defined in [types/opencv/_hacks.ts:188](https://github.com/cancerberoSgx/mirada/blob/e7b5ae6/mirada/src/types/opencv/_hacks.ts#L188)*

**Parameters:**

Name | Type |
------ | ------ |
`i` | any |
`j` | any |

**Returns:** *any*

___

###  clone

▸ **clone**(...`a`: any[]): *any*

*Inherited from [EmscriptenEmbindInstance](_types_opencv__hacks_.emscriptenembindinstance.md).[clone](_types_opencv__hacks_.emscriptenembindinstance.md#clone)*

*Defined in [types/opencv/_hacks.ts:120](https://github.com/cancerberoSgx/mirada/blob/e7b5ae6/mirada/src/types/opencv/_hacks.ts#L120)*

**Parameters:**

Name | Type |
------ | ------ |
`...a` | any[] |

**Returns:** *any*

___

###  delete

▸ **delete**(): *void*

*Inherited from [Vector](_types_opencv__hacks_.vector.md).[delete](_types_opencv__hacks_.vector.md#delete)*

*Overrides [EmscriptenEmbindInstance](_types_opencv__hacks_.emscriptenembindinstance.md).[delete](_types_opencv__hacks_.emscriptenembindinstance.md#delete)*

*Defined in [types/opencv/_hacks.ts:130](https://github.com/cancerberoSgx/mirada/blob/e7b5ae6/mirada/src/types/opencv/_hacks.ts#L130)*

**Returns:** *void*

▸ **delete**(): *void*

*Inherited from [Vector](_types_opencv__hacks_.vector.md).[delete](_types_opencv__hacks_.vector.md#delete)*

*Overrides [EmscriptenEmbindInstance](_types_opencv__hacks_.emscriptenembindinstance.md).[delete](_types_opencv__hacks_.emscriptenembindinstance.md#delete)*

*Defined in [types/opencv/_hacks.ts:138](https://github.com/cancerberoSgx/mirada/blob/e7b5ae6/mirada/src/types/opencv/_hacks.ts#L138)*

**Returns:** *void*

___

###  deleteLater

▸ **deleteLater**(...`a`: any[]): *any*

*Inherited from [EmscriptenEmbindInstance](_types_opencv__hacks_.emscriptenembindinstance.md).[deleteLater](_types_opencv__hacks_.emscriptenembindinstance.md#deletelater)*

*Defined in [types/opencv/_hacks.ts:123](https://github.com/cancerberoSgx/mirada/blob/e7b5ae6/mirada/src/types/opencv/_hacks.ts#L123)*

**Parameters:**

Name | Type |
------ | ------ |
`...a` | any[] |

**Returns:** *any*

___

###  doublePtr

▸ **doublePtr**(`i`: any, `j`: any): *any*

*Defined in [types/opencv/_hacks.ts:193](https://github.com/cancerberoSgx/mirada/blob/e7b5ae6/mirada/src/types/opencv/_hacks.ts#L193)*

**Parameters:**

Name | Type |
------ | ------ |
`i` | any |
`j` | any |

**Returns:** *any*

___

###  floatPtr

▸ **floatPtr**(`i`: any, `j`: any): *any*

*Defined in [types/opencv/_hacks.ts:192](https://github.com/cancerberoSgx/mirada/blob/e7b5ae6/mirada/src/types/opencv/_hacks.ts#L192)*

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

*Defined in [types/opencv/_hacks.ts:131](https://github.com/cancerberoSgx/mirada/blob/e7b5ae6/mirada/src/types/opencv/_hacks.ts#L131)*

**Parameters:**

Name | Type |
------ | ------ |
`i` | number |

**Returns:** *[Mat](_types_opencv_mat_.mat.md)*

▸ **get**(`i`: number, `j`: number, `data`: any): *[Mat](_types_opencv_mat_.mat.md)*

*Inherited from [Vector](_types_opencv__hacks_.vector.md).[get](_types_opencv__hacks_.vector.md#get)*

*Defined in [types/opencv/_hacks.ts:132](https://github.com/cancerberoSgx/mirada/blob/e7b5ae6/mirada/src/types/opencv/_hacks.ts#L132)*

**Parameters:**

Name | Type |
------ | ------ |
`i` | number |
`j` | number |
`data` | any |

**Returns:** *[Mat](_types_opencv_mat_.mat.md)*

___

###  intPtr

▸ **intPtr**(`i`: any, `j`: any): *any*

*Defined in [types/opencv/_hacks.ts:191](https://github.com/cancerberoSgx/mirada/blob/e7b5ae6/mirada/src/types/opencv/_hacks.ts#L191)*

**Parameters:**

Name | Type |
------ | ------ |
`i` | any |
`j` | any |

**Returns:** *any*

▸ **intPtr**(`i`: any, `j`: any): *any*

*Defined in [types/opencv/_hacks.ts:194](https://github.com/cancerberoSgx/mirada/blob/e7b5ae6/mirada/src/types/opencv/_hacks.ts#L194)*

**Parameters:**

Name | Type |
------ | ------ |
`i` | any |
`j` | any |

**Returns:** *any*

___

###  isAliasOf

▸ **isAliasOf**(...`a`: any[]): *any*

*Inherited from [EmscriptenEmbindInstance](_types_opencv__hacks_.emscriptenembindinstance.md).[isAliasOf](_types_opencv__hacks_.emscriptenembindinstance.md#isaliasof)*

*Defined in [types/opencv/_hacks.ts:119](https://github.com/cancerberoSgx/mirada/blob/e7b5ae6/mirada/src/types/opencv/_hacks.ts#L119)*

**Parameters:**

Name | Type |
------ | ------ |
`...a` | any[] |

**Returns:** *any*

___

###  isDeleted

▸ **isDeleted**(...`a`: any[]): *any*

*Inherited from [EmscriptenEmbindInstance](_types_opencv__hacks_.emscriptenembindinstance.md).[isDeleted](_types_opencv__hacks_.emscriptenembindinstance.md#isdeleted)*

*Defined in [types/opencv/_hacks.ts:122](https://github.com/cancerberoSgx/mirada/blob/e7b5ae6/mirada/src/types/opencv/_hacks.ts#L122)*

**Parameters:**

Name | Type |
------ | ------ |
`...a` | any[] |

**Returns:** *any*

___

###  push_back

▸ **push_back**(`n`: [Mat](_types_opencv_mat_.mat.md)): *any*

*Inherited from [Vector](_types_opencv__hacks_.vector.md).[push_back](_types_opencv__hacks_.vector.md#push_back)*

*Defined in [types/opencv/_hacks.ts:136](https://github.com/cancerberoSgx/mirada/blob/e7b5ae6/mirada/src/types/opencv/_hacks.ts#L136)*

**Parameters:**

Name | Type |
------ | ------ |
`n` | [Mat](_types_opencv_mat_.mat.md) |

**Returns:** *any*

___

###  put

▸ **put**(`i`: number, `j`: number, `data`: any): *any*

*Inherited from [Vector](_types_opencv__hacks_.vector.md).[put](_types_opencv__hacks_.vector.md#put)*

*Defined in [types/opencv/_hacks.ts:134](https://github.com/cancerberoSgx/mirada/blob/e7b5ae6/mirada/src/types/opencv/_hacks.ts#L134)*

**Parameters:**

Name | Type |
------ | ------ |
`i` | number |
`j` | number |
`data` | any |

**Returns:** *any*

___

###  resize

▸ **resize**(`count`: number, `value?`: [T](undefined)): *void*

*Inherited from [Vector](_types_opencv__hacks_.vector.md).[resize](_types_opencv__hacks_.vector.md#resize)*

*Defined in [types/opencv/_hacks.ts:137](https://github.com/cancerberoSgx/mirada/blob/e7b5ae6/mirada/src/types/opencv/_hacks.ts#L137)*

**Parameters:**

Name | Type |
------ | ------ |
`count` | number |
`value?` | [T](undefined) |

**Returns:** *void*

___

###  roi

▸ **roi**(`expr`: [Rect](_types_opencv__hacks_.rect.md) | [Mat_](_types_opencv__hacks_.mat_.md)): *[Mat](_types_opencv_mat_.mat.md)*

*Defined in [types/opencv/_hacks.ts:200](https://github.com/cancerberoSgx/mirada/blob/e7b5ae6/mirada/src/types/opencv/_hacks.ts#L200)*

Sometimes, you will have to play with certain region of images. For eye detection in images, first face detection is done all over the image and when face is obtained, we select the face region alone and search for eyes inside it instead of searching whole image. It improves accuracy (because eyes are always on faces) and performance (because we search for a small area).

Heads up : in JS seems only one argument is expected

**Parameters:**

Name | Type |
------ | ------ |
`expr` | [Rect](_types_opencv__hacks_.rect.md) &#124; [Mat_](_types_opencv__hacks_.mat_.md) |

**Returns:** *[Mat](_types_opencv_mat_.mat.md)*

___

###  set

▸ **set**(`i`: number, `t`: [Mat](_types_opencv_mat_.mat.md)): *void*

*Inherited from [Vector](_types_opencv__hacks_.vector.md).[set](_types_opencv__hacks_.vector.md#set)*

*Defined in [types/opencv/_hacks.ts:133](https://github.com/cancerberoSgx/mirada/blob/e7b5ae6/mirada/src/types/opencv/_hacks.ts#L133)*

**Parameters:**

Name | Type |
------ | ------ |
`i` | number |
`t` | [Mat](_types_opencv_mat_.mat.md) |

**Returns:** *void*

___

###  shortPtr

▸ **shortPtr**(`i`: any, `j`: any): *any*

*Defined in [types/opencv/_hacks.ts:189](https://github.com/cancerberoSgx/mirada/blob/e7b5ae6/mirada/src/types/opencv/_hacks.ts#L189)*

**Parameters:**

Name | Type |
------ | ------ |
`i` | any |
`j` | any |

**Returns:** *any*

___

###  ucharPtr

▸ **ucharPtr**(`i`: any, `j`: any): *any*

*Defined in [types/opencv/_hacks.ts:187](https://github.com/cancerberoSgx/mirada/blob/e7b5ae6/mirada/src/types/opencv/_hacks.ts#L187)*

**Parameters:**

Name | Type |
------ | ------ |
`i` | any |
`j` | any |

**Returns:** *any*

___

###  ushortPtr

▸ **ushortPtr**(`i`: any, `j`: any): *any*

*Defined in [types/opencv/_hacks.ts:190](https://github.com/cancerberoSgx/mirada/blob/e7b5ae6/mirada/src/types/opencv/_hacks.ts#L190)*

**Parameters:**

Name | Type |
------ | ------ |
`i` | any |
`j` | any |

**Returns:** *any*