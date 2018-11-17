[wasm-imagemagick](../README.md) > [ImageHome](../interfaces/imagehome.md)

# Interface: ImageHome

## Hierarchy

**ImageHome**

## Index

### Methods

* [addBuiltInImages](imagehome.md#addbuiltinimages)
* [get](imagehome.md#get)
* [getAll](imagehome.md#getall)
* [isRegistered](imagehome.md#isregistered)
* [register](imagehome.md#register)
* [remove](imagehome.md#remove)

---

## Methods

<a id="addbuiltinimages"></a>

###  addBuiltInImages

▸ **addBuiltInImages**(): `Promise`<`void`>

*Defined in [imageHome.ts:11](https://github.com/KnicKnic/WASM-ImageMagick/blob/7684a1c/src/imageHome.ts#L11)*

**Returns:** `Promise`<`void`>

___
<a id="get"></a>

###  get

▸ **get**(name: *`string`*): `Promise`<[MagickInputFile](magickinputfile.md)>

*Defined in [imageHome.ts:7](https://github.com/KnicKnic/WASM-ImageMagick/blob/7684a1c/src/imageHome.ts#L7)*

**Parameters:**

| Name | Type |
| ------ | ------ |
| name | `string` |

**Returns:** `Promise`<[MagickInputFile](magickinputfile.md)>

___
<a id="getall"></a>

###  getAll

▸ **getAll**(): `Promise`<[MagickInputFile](magickinputfile.md)[]>

*Defined in [imageHome.ts:10](https://github.com/KnicKnic/WASM-ImageMagick/blob/7684a1c/src/imageHome.ts#L10)*

**Returns:** `Promise`<[MagickInputFile](magickinputfile.md)[]>

___
<a id="isregistered"></a>

###  isRegistered

▸ **isRegistered**(name: *`string`*): `boolean`

*Defined in [imageHome.ts:9](https://github.com/KnicKnic/WASM-ImageMagick/blob/7684a1c/src/imageHome.ts#L9)*

**Parameters:**

| Name | Type |
| ------ | ------ |
| name | `string` |

**Returns:** `boolean`

___
<a id="register"></a>

###  register

▸ **register**(file: *[MagickFile](magickfile.md)*, name?: *`string`*): `void`

*Defined in [imageHome.ts:8](https://github.com/KnicKnic/WASM-ImageMagick/blob/7684a1c/src/imageHome.ts#L8)*

**Parameters:**

| Name | Type |
| ------ | ------ |
| file | [MagickFile](magickfile.md) |
| `Optional` name | `string` |

**Returns:** `void`

___
<a id="remove"></a>

###  remove

▸ **remove**(names: *`string`[]*): [MagickInputFile](magickinputfile.md)[]

*Defined in [imageHome.ts:6](https://github.com/KnicKnic/WASM-ImageMagick/blob/7684a1c/src/imageHome.ts#L6)*

**Parameters:**

| Name | Type |
| ------ | ------ |
| names | `string`[] |

**Returns:** [MagickInputFile](magickinputfile.md)[]

___

