[mirada](../README.md) › ["util/base64"](_util_base64_.md)

# External module: "util/base64"


## Index

### Functions

* [arrayBufferToBase64](_util_base64_.md#arraybuffertobase64)
* [arrayBufferToString](_util_base64_.md#arraybuffertostring)
* [arrayBufferToUrl](_util_base64_.md#arraybuffertourl)
* [base64ToUrl](_util_base64_.md#base64tourl)
* [dataToBase64](_util_base64_.md#datatobase64)
* [dataToUrl](_util_base64_.md#datatourl)
* [getDataUrlFileName](_util_base64_.md#getdataurlfilename)
* [urlToBase64](_util_base64_.md#urltobase64)

## Functions

###  arrayBufferToBase64

▸ **arrayBufferToBase64**(`buffer`: ArrayBuffer): *string*

*Defined in [util/base64.ts:30](https://github.com/cancerberoSgx/mirada/blob/e7b5ae6/mirada/src/util/base64.ts#L30)*

**Parameters:**

Name | Type |
------ | ------ |
`buffer` | ArrayBuffer |

**Returns:** *string*

___

###  arrayBufferToString

▸ **arrayBufferToString**(`buffer`: ArrayBuffer): *string*

*Defined in [util/base64.ts:39](https://github.com/cancerberoSgx/mirada/blob/e7b5ae6/mirada/src/util/base64.ts#L39)*

**Parameters:**

Name | Type |
------ | ------ |
`buffer` | ArrayBuffer |

**Returns:** *string*

___

###  arrayBufferToUrl

▸ **arrayBufferToUrl**(`buffer`: ArrayBuffer, `mime`: string, `name?`: undefined | string): *string*

*Defined in [util/base64.ts:34](https://github.com/cancerberoSgx/mirada/blob/e7b5ae6/mirada/src/util/base64.ts#L34)*

**Parameters:**

Name | Type |
------ | ------ |
`buffer` | ArrayBuffer |
`mime` | string |
`name?` | undefined &#124; string |

**Returns:** *string*

___

###  base64ToUrl

▸ **base64ToUrl**(`base64`: string, `mimeType`: string, `fileName?`: undefined | string): *string*

*Defined in [util/base64.ts:12](https://github.com/cancerberoSgx/mirada/blob/e7b5ae6/mirada/src/util/base64.ts#L12)*

Creates a DataUrl like `data:image/jpeg;name=hindenburg.jpg;base64,` using given base64 content, mimeType and fileName.

**Parameters:**

Name | Type |
------ | ------ |
`base64` | string |
`mimeType` | string |
`fileName?` | undefined &#124; string |

**Returns:** *string*

___

###  dataToBase64

▸ **dataToBase64**(`data`: string): *string*

*Defined in [util/base64.ts:5](https://github.com/cancerberoSgx/mirada/blob/e7b5ae6/mirada/src/util/base64.ts#L5)*

**Parameters:**

Name | Type |
------ | ------ |
`data` | string |

**Returns:** *string*

___

###  dataToUrl

▸ **dataToUrl**(`data`: string, `mimeType`: string, `fileName?`: undefined | string): *string*

*Defined in [util/base64.ts:1](https://github.com/cancerberoSgx/mirada/blob/e7b5ae6/mirada/src/util/base64.ts#L1)*

**Parameters:**

Name | Type |
------ | ------ |
`data` | string |
`mimeType` | string |
`fileName?` | undefined &#124; string |

**Returns:** *string*

___

###  getDataUrlFileName

▸ **getDataUrlFileName**(`url`: string): *string*

*Defined in [util/base64.ts:23](https://github.com/cancerberoSgx/mirada/blob/e7b5ae6/mirada/src/util/base64.ts#L23)*

Extracts the name of a data url like `data:image/jpeg;name=hindenburg.jpg;base64,`..., if any.

**Parameters:**

Name | Type |
------ | ------ |
`url` | string |

**Returns:** *string*

___

###  urlToBase64

▸ **urlToBase64**(`s`: string): *string*

*Defined in [util/base64.ts:16](https://github.com/cancerberoSgx/mirada/blob/e7b5ae6/mirada/src/util/base64.ts#L16)*

**Parameters:**

Name | Type |
------ | ------ |
`s` | string |

**Returns:** *string*