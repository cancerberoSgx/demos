
#  wasm-imagemagick

## Index

### Interfaces

* [CallResult](interfaces/callresult.md)
* [ExecuteConfig](interfaces/executeconfig.md)
* [ExecuteEvent](interfaces/executeevent.md)
* [ExecuteListener](interfaces/executelistener.md)
* [ExecuteResult](interfaces/executeresult.md)
* [ExecuteResultOne](interfaces/executeresultone.md)
* [ExecutionContext](interfaces/executioncontext.md)
* [ImageHome](interfaces/imagehome.md)
* [MagickFile](interfaces/magickfile.md)
* [MagickInputFile](interfaces/magickinputfile.md)
* [MagickOutputFile](interfaces/magickoutputfile.md)

### Type aliases

* [Command](#command)
* [ExecuteCommand](#executecommand)

### Variables

* [builtInImageNames](#builtinimagenames)
* [knownSupportedReadWriteImageFormats](#knownsupportedreadwriteimageformats)

### Functions

* [Call](#call)
* [addExecuteListener](#addexecutelistener)
* [arrayToCli](#arraytocli)
* [arrayToCliOne](#arraytoclione)
* [asCommand](#ascommand)
* [asExecuteConfig](#asexecuteconfig)
* [asInputFile](#asinputfile)
* [asOutputFile](#asoutputfile)
* [blobToString](#blobtostring)
* [blobToUint8Array](#blobtouint8array)
* [buildImageSrc](#buildimagesrc)
* [buildInputFile](#buildinputfile)
* [call](#call)
* [cliToArray](#clitoarray)
* [cliToArrayOne](#clitoarrayone)
* [compare](#compare)
* [compareNumber](#comparenumber)
* [createImageHome](#createimagehome)
* [execute](#execute)
* [executeAndReturnOutputFile](#executeandreturnoutputfile)
* [executeOne](#executeone)
* [extractInfo](#extractinfo)
* [getBuiltInImages](#getbuiltinimages)
* [getFileName](#getfilename)
* [getFileNameExtension](#getfilenameextension)
* [getInputFilesFromHtmlInputElement](#getinputfilesfromhtmlinputelement)
* [inputFileToOutputFile](#inputfiletooutputfile)
* [isExecuteCommand](#isexecutecommand)
* [loadImageElement](#loadimageelement)
* [newExecutionContext](#newexecutioncontext)
* [outputFileToInputFile](#outputfiletoinputfile)
* [uint8ArrayToBlob](#uint8arraytoblob)

---

## Type aliases

<a id="command"></a>

###  Command

**Ƭ Command**: *( `string` &#124; `number`)[]*

*Defined in [execute.ts:6](https://github.com/KnicKnic/WASM-ImageMagick/blob/7684a1c/src/execute.ts#L6)*

___
<a id="executecommand"></a>

###  ExecuteCommand

**Ƭ ExecuteCommand**: * [Command](#command)[] &#124; `string`[] &#124; `string`
*

*Defined in [execute.ts:14](https://github.com/KnicKnic/WASM-ImageMagick/blob/7684a1c/src/execute.ts#L14)*

___

## Variables

<a id="builtinimagenames"></a>

### `<Const>` builtInImageNames

**● builtInImageNames**: *`string`[]* =  ['rose:', 'logo:', 'wizard:', 'granite:', 'netscape:']

*Defined in [util/imageBuiltIn.ts:5](https://github.com/KnicKnic/WASM-ImageMagick/blob/7684a1c/src/util/imageBuiltIn.ts#L5)*

___
<a id="knownsupportedreadwriteimageformats"></a>

### `<Const>` knownSupportedReadWriteImageFormats

**● knownSupportedReadWriteImageFormats**: *`string`[]* =  [
  'jpg', 'png',
  'psd',
  'tiff', 'xcf', 'gif', 'bmp', 'tga', 'miff', 'ico', 'dcm', 'xpm', 'pcx',
  //  'pix', // gives error
  'fits',
  // 'djvu', // read only support
  'ppm',
  'pgm',
  'pfm',
  'mng',
  'hdr',
  'dds', // generated using convert -define "dds:compression={dxt1, dxt5, none}" to_rotate.png  to_rotate.dds
  'otb', // generated using convert to_rotate.png  to_rotate.otb

  'txt', // generated using convert to_rotate.png  to_rotate.txt

  // 'rgb', // fails because  MustSpecifyImageSize `to_rotate.rgb'
]

*Defined in [util/support.ts:4](https://github.com/KnicKnic/WASM-ImageMagick/blob/7684a1c/src/util/support.ts#L4)*

___

## Functions

<a id="call"></a>

###  Call

▸ **Call**(inputFiles: *[MagickInputFile](interfaces/magickinputfile.md)[]*, command: *`string`[]*): `Promise`<[MagickOutputFile](interfaces/magickoutputfile.md)[]>

*Defined in [magickApi.ts:16](https://github.com/KnicKnic/WASM-ImageMagick/blob/7684a1c/src/magickApi.ts#L16)*

**Parameters:**

| Name | Type |
| ------ | ------ |
| inputFiles | [MagickInputFile](interfaces/magickinputfile.md)[] |
| command | `string`[] |

**Returns:** `Promise`<[MagickOutputFile](interfaces/magickoutputfile.md)[]>

___
<a id="addexecutelistener"></a>

###  addExecuteListener

▸ **addExecuteListener**(l: *[ExecuteListener](interfaces/executelistener.md)*): `void`

*Defined in [execute.ts:89](https://github.com/KnicKnic/WASM-ImageMagick/blob/7684a1c/src/execute.ts#L89)*

**Parameters:**

| Name | Type |
| ------ | ------ |
| l | [ExecuteListener](interfaces/executelistener.md) |

**Returns:** `void`

___
<a id="arraytocli"></a>

###  arrayToCli

▸ **arrayToCli**(command: * [Command](#command) &#124; [Command](#command)[]*): `string`

*Defined in [util/cli.ts:20](https://github.com/KnicKnic/WASM-ImageMagick/blob/7684a1c/src/util/cli.ts#L20)*

generates a valid command line command from given Call/execute Command . Works with multiple commands

**Parameters:**

| Name | Type |
| ------ | ------ |
| command |  [Command](#command) &#124; [Command](#command)[]|

**Returns:** `string`

___
<a id="arraytoclione"></a>

###  arrayToCliOne

▸ **arrayToCliOne**(command: *[Command](#command)*): `string`

*Defined in [util/cli.ts:6](https://github.com/KnicKnic/WASM-ImageMagick/blob/7684a1c/src/util/cli.ts#L6)*

generates a valid command line command from given Call/execute Command. Works in a single command

**Parameters:**

| Name | Type |
| ------ | ------ |
| command | [Command](#command) |

**Returns:** `string`

___
<a id="ascommand"></a>

###  asCommand

▸ **asCommand**(c: *[ExecuteCommand](#executecommand)*): [Command](#command)[]

*Defined in [util/cli.ts:79](https://github.com/KnicKnic/WASM-ImageMagick/blob/7684a1c/src/util/cli.ts#L79)*

**Parameters:**

| Name | Type |
| ------ | ------ |
| c | [ExecuteCommand](#executecommand) |

**Returns:** [Command](#command)[]

___
<a id="asexecuteconfig"></a>

###  asExecuteConfig

▸ **asExecuteConfig**(arg: * [ExecuteConfig](interfaces/executeconfig.md) &#124; [ExecuteCommand](#executecommand)*): [ExecuteConfig](interfaces/executeconfig.md)

*Defined in [execute.ts:54](https://github.com/KnicKnic/WASM-ImageMagick/blob/7684a1c/src/execute.ts#L54)*

**Parameters:**

| Name | Type |
| ------ | ------ |
| arg |  [ExecuteConfig](interfaces/executeconfig.md) &#124; [ExecuteCommand](#executecommand)|

**Returns:** [ExecuteConfig](interfaces/executeconfig.md)

___
<a id="asinputfile"></a>

###  asInputFile

▸ **asInputFile**(f: *[MagickFile](interfaces/magickfile.md)*): `Promise`<[MagickInputFile](interfaces/magickinputfile.md)>

*Defined in [util/file.ts:50](https://github.com/KnicKnic/WASM-ImageMagick/blob/7684a1c/src/util/file.ts#L50)*

**Parameters:**

| Name | Type |
| ------ | ------ |
| f | [MagickFile](interfaces/magickfile.md) |

**Returns:** `Promise`<[MagickInputFile](interfaces/magickinputfile.md)>

___
<a id="asoutputfile"></a>

###  asOutputFile

▸ **asOutputFile**(f: *[MagickFile](interfaces/magickfile.md)*): `Promise`<[MagickOutputFile](interfaces/magickoutputfile.md)>

*Defined in [util/file.ts:57](https://github.com/KnicKnic/WASM-ImageMagick/blob/7684a1c/src/util/file.ts#L57)*

**Parameters:**

| Name | Type |
| ------ | ------ |
| f | [MagickFile](interfaces/magickfile.md) |

**Returns:** `Promise`<[MagickOutputFile](interfaces/magickoutputfile.md)>

___
<a id="blobtostring"></a>

###  blobToString

▸ **blobToString**(blb: *`Blob`*): `Promise`<`string`>

*Defined in [util/file.ts:14](https://github.com/KnicKnic/WASM-ImageMagick/blob/7684a1c/src/util/file.ts#L14)*

**Parameters:**

| Name | Type |
| ------ | ------ |
| blb | `Blob` |

**Returns:** `Promise`<`string`>

___
<a id="blobtouint8array"></a>

###  blobToUint8Array

▸ **blobToUint8Array**(blob: *`Blob`*): `Promise`<`Uint8Array`>

*Defined in [util/file.ts:3](https://github.com/KnicKnic/WASM-ImageMagick/blob/7684a1c/src/util/file.ts#L3)*

**Parameters:**

| Name | Type |
| ------ | ------ |
| blob | `Blob` |

**Returns:** `Promise`<`Uint8Array`>

___
<a id="buildimagesrc"></a>

###  buildImageSrc

▸ **buildImageSrc**(image: *[MagickFile](interfaces/magickfile.md)*, forceBrowserSupport?: *`boolean`*): `Promise`<`string`>

*Defined in [util/html.ts:23](https://github.com/KnicKnic/WASM-ImageMagick/blob/7684a1c/src/util/html.ts#L23)*

Return a string with the inline image content, suitable to be used to assign to an html img src attribute. See oadImageElement.

**Parameters:**

| Name | Type | Default value | Description |
| ------ | ------ | ------ | ------ |
| image | [MagickFile](interfaces/magickfile.md) | - |
| `Default value` forceBrowserSupport | `boolean` | false |  if true and the image extension is not supported by browsers, it will convert the image to png and return that src so it can be shown in browsers |

**Returns:** `Promise`<`string`>

___
<a id="buildinputfile"></a>

###  buildInputFile

▸ **buildInputFile**(url: *`string`*, name?: *`string`*): `Promise`<[MagickInputFile](interfaces/magickinputfile.md)>

*Defined in [util/file.ts:25](https://github.com/KnicKnic/WASM-ImageMagick/blob/7684a1c/src/util/file.ts#L25)*

**Parameters:**

| Name | Type | Default value |
| ------ | ------ | ------ |
| url | `string` | - |
| `Default value` name | `string` |  getFileName(url) |

**Returns:** `Promise`<[MagickInputFile](interfaces/magickinputfile.md)>

___
<a id="call"></a>

###  call

▸ **call**(inputFiles: *[MagickInputFile](interfaces/magickinputfile.md)[]*, command: *`string`[]*): `Promise`<[CallResult](interfaces/callresult.md)>

*Defined in [magickApi.ts:28](https://github.com/KnicKnic/WASM-ImageMagick/blob/7684a1c/src/magickApi.ts#L28)*

**Parameters:**

| Name | Type |
| ------ | ------ |
| inputFiles | [MagickInputFile](interfaces/magickinputfile.md)[] |
| command | `string`[] |

**Returns:** `Promise`<[CallResult](interfaces/callresult.md)>

___
<a id="clitoarray"></a>

###  cliToArray

▸ **cliToArray**(cliCommand: *`string`*): [Command](#command)[]

*Defined in [util/cli.ts:59](https://github.com/KnicKnic/WASM-ImageMagick/blob/7684a1c/src/util/cli.ts#L59)*

generates a valid Call/execute string\[\] command from given command line command. This works for strings containing multiple commands in different lines. TODO: respect '' character for continue the same command in a new line

**Parameters:**

| Name | Type |
| ------ | ------ |
| cliCommand | `string` |

**Returns:** [Command](#command)[]

___
<a id="clitoarrayone"></a>

###  cliToArrayOne

▸ **cliToArrayOne**(cliCommand: *`string`*): [Command](#command)

*Defined in [util/cli.ts:28](https://github.com/KnicKnic/WASM-ImageMagick/blob/7684a1c/src/util/cli.ts#L28)*

generates a valid Call/execute string\[\] command from given command line command. This works only for a single command

**Parameters:**

| Name | Type |
| ------ | ------ |
| cliCommand | `string` |

**Returns:** [Command](#command)

___
<a id="compare"></a>

###  compare

▸ **compare**(img1: * [MagickFile](interfaces/magickfile.md) &#124; `string`*, img2: * [MagickFile](interfaces/magickfile.md) &#124; `string`*, error?: *`number`*): `Promise`<`boolean`>

*Defined in [util/imageCompare.ts:3](https://github.com/KnicKnic/WASM-ImageMagick/blob/7684a1c/src/util/imageCompare.ts#L3)*

**Parameters:**

| Name | Type | Default value |
| ------ | ------ | ------ |
| img1 |  [MagickFile](interfaces/magickfile.md) &#124; `string`| - |
| img2 |  [MagickFile](interfaces/magickfile.md) &#124; `string`| - |
| `Default value` error | `number` | 0.015 |

**Returns:** `Promise`<`boolean`>

___
<a id="comparenumber"></a>

###  compareNumber

▸ **compareNumber**(img1: * [MagickFile](interfaces/magickfile.md) &#124; `string`*, img2: * [MagickFile](interfaces/magickfile.md) &#124; `string`*): `Promise`<`number`>

*Defined in [util/imageCompare.ts:8](https://github.com/KnicKnic/WASM-ImageMagick/blob/7684a1c/src/util/imageCompare.ts#L8)*

**Parameters:**

| Name | Type |
| ------ | ------ |
| img1 |  [MagickFile](interfaces/magickfile.md) &#124; `string`|
| img2 |  [MagickFile](interfaces/magickfile.md) &#124; `string`|

**Returns:** `Promise`<`number`>

___
<a id="createimagehome"></a>

###  createImageHome

▸ **createImageHome**(): `ImageHomeImpl`

*Defined in [imageHome.ts:61](https://github.com/KnicKnic/WASM-ImageMagick/blob/7684a1c/src/imageHome.ts#L61)*

**Returns:** `ImageHomeImpl`

___
<a id="execute"></a>

###  execute

▸ **execute**(configOrCommand: * [ExecuteConfig](interfaces/executeconfig.md) &#124; [ExecuteCommand](#executecommand)*): `Promise`<[ExecuteResult](interfaces/executeresult.md)>

*Defined in [execute.ts:134](https://github.com/KnicKnic/WASM-ImageMagick/blob/7684a1c/src/execute.ts#L134)*

Execute all commands in given config serially in order. Output files from a command become available as input files in next commands. The execution result will contain all generated outputFiles. If same file name is used later command output files will override previous ones. Example:

```ts
const {outputFiles} = await execute({
 inputFiles: [await buildInputFile('fn.png', 'image1.png')],
 commands: [
   ['convert', 'image1.png', "-bordercolor", "#ffee44", "-background", "#eeff55", "+polaroid", "image2.png"],
   // heads up: next command uses "image2.png" which was the output of previous command:
   ["convert", "image2.png", "-fill", "#997711", "-tint", "55"],
 ]
})
```

An alternative syntax with CLI-like strings is also supported:

```ts
const {outputFiles} = await execute({inputFiles: [], commands: [
  'convert rose: -rotate 70 image2.gif',
  'convert image2.gif -resize 33 image3.gif'
] })
```

Or if it's only one command using just a string:

```ts
const {outputFiles} = await execute({inputFiles: [foo], commands: `convert 'my face image.png' \\( +clone -channel R -fx B \\) +swap -channel B -fx v.R bar.gif`})
```

Note: in string syntax you must use single quotes for CLI arguments that need so (like 'my face image.png'). no multiline with \\ is supported.

`` ` ``

**Parameters:**

| Name | Type |
| ------ | ------ |
| configOrCommand |  [ExecuteConfig](interfaces/executeconfig.md) &#124; [ExecuteCommand](#executecommand)|

**Returns:** `Promise`<[ExecuteResult](interfaces/executeresult.md)>

___
<a id="executeandreturnoutputfile"></a>

###  executeAndReturnOutputFile

▸ **executeAndReturnOutputFile**(configOrCommand: * [ExecuteConfig](interfaces/executeconfig.md) &#124; [ExecuteCommand](#executecommand)*, outputFileName?: *`string`*): `Promise`< [MagickOutputFile](interfaces/magickoutputfile.md) &#124; `undefined`>

*Defined in [execute.ts:68](https://github.com/KnicKnic/WASM-ImageMagick/blob/7684a1c/src/execute.ts#L68)*

Assumes the command won't fail so returns one output file directly or undefined if it's not found (or error occurs)

**Parameters:**

| Name | Type | Description |
| ------ | ------ | ------ |
| configOrCommand |  [ExecuteConfig](interfaces/executeconfig.md) &#124; [ExecuteCommand](#executecommand)|  \- |
| `Optional` outputFileName | `string` |  optionally user can give the desired output file name |

**Returns:** `Promise`< [MagickOutputFile](interfaces/magickoutputfile.md) &#124; `undefined`>

___
<a id="executeone"></a>

###  executeOne

▸ **executeOne**(configOrCommand: * [ExecuteConfig](interfaces/executeconfig.md) &#124; [ExecuteCommand](#executecommand)*): `Promise`<[ExecuteResultOne](interfaces/executeresultone.md)>

*Defined in [execute.ts:25](https://github.com/KnicKnic/WASM-ImageMagick/blob/7684a1c/src/execute.ts#L25)*

execute first command in given config

**Parameters:**

| Name | Type |
| ------ | ------ |
| configOrCommand |  [ExecuteConfig](interfaces/executeconfig.md) &#124; [ExecuteCommand](#executecommand)|

**Returns:** `Promise`<[ExecuteResultOne](interfaces/executeresultone.md)>

___
<a id="extractinfo"></a>

###  extractInfo

▸ **extractInfo**(img: * [MagickFile](interfaces/magickfile.md) &#124; `string`*): `Promise`<`ExtractInfoResult`[]>

*Defined in [util/imageExtractInfo.ts:10](https://github.com/KnicKnic/WASM-ImageMagick/blob/7684a1c/src/util/imageExtractInfo.ts#L10)*

Execute `convert $IMG info.json` to extract image metadata. Returns the parsed info.json file contents

TODO: support several input images - we are already returning an array

**Parameters:**

| Name | Type | Description |
| ------ | ------ | ------ |
| img |  [MagickFile](interfaces/magickfile.md) &#124; `string`|  could be a string in case you want to extract information about built in images like \`rose:\` |

**Returns:** `Promise`<`ExtractInfoResult`[]>

___
<a id="getbuiltinimages"></a>

###  getBuiltInImages

▸ **getBuiltInImages**(): `Promise`<[MagickInputFile](interfaces/magickinputfile.md)[]>

*Defined in [util/imageBuiltIn.ts:7](https://github.com/KnicKnic/WASM-ImageMagick/blob/7684a1c/src/util/imageBuiltIn.ts#L7)*

**Returns:** `Promise`<[MagickInputFile](interfaces/magickinputfile.md)[]>

___
<a id="getfilename"></a>

###  getFileName

▸ **getFileName**(url: *`string`*): `string`

*Defined in [util/file.ts:64](https://github.com/KnicKnic/WASM-ImageMagick/blob/7684a1c/src/util/file.ts#L64)*

**Parameters:**

| Name | Type |
| ------ | ------ |
| url | `string` |

**Returns:** `string`

___
<a id="getfilenameextension"></a>

###  getFileNameExtension

▸ **getFileNameExtension**(filePathOrUrl: *`string`*): `string`

*Defined in [util/file.ts:77](https://github.com/KnicKnic/WASM-ImageMagick/blob/7684a1c/src/util/file.ts#L77)*

**Parameters:**

| Name | Type |
| ------ | ------ |
| filePathOrUrl | `string` |

**Returns:** `string`

___
<a id="getinputfilesfromhtmlinputelement"></a>

###  getInputFilesFromHtmlInputElement

▸ **getInputFilesFromHtmlInputElement**(el: *`HTMLInputElement`*): `Promise`<[MagickInputFile](interfaces/magickinputfile.md)[]>

*Defined in [util/html.ts:58](https://github.com/KnicKnic/WASM-ImageMagick/blob/7684a1c/src/util/html.ts#L58)*

will build MagickInputFile\[\] from given HTMLInputElement of type=file that user may used to select several files

**Parameters:**

| Name | Type |
| ------ | ------ |
| el | `HTMLInputElement` |

**Returns:** `Promise`<[MagickInputFile](interfaces/magickinputfile.md)[]>

___
<a id="inputfiletooutputfile"></a>

###  inputFileToOutputFile

▸ **inputFileToOutputFile**(file: *[MagickInputFile](interfaces/magickinputfile.md)*, name?: *`string`*): [MagickOutputFile](interfaces/magickoutputfile.md)

*Defined in [util/file.ts:43](https://github.com/KnicKnic/WASM-ImageMagick/blob/7684a1c/src/util/file.ts#L43)*

**Parameters:**

| Name | Type | Default value |
| ------ | ------ | ------ |
| file | [MagickInputFile](interfaces/magickinputfile.md) | - |
| `Default value` name | `string` |  file.name |

**Returns:** [MagickOutputFile](interfaces/magickoutputfile.md)

___
<a id="isexecutecommand"></a>

###  isExecuteCommand

▸ **isExecuteCommand**(arg: *`any`*): `boolean`

*Defined in [execute.ts:50](https://github.com/KnicKnic/WASM-ImageMagick/blob/7684a1c/src/execute.ts#L50)*

**Parameters:**

| Name | Type |
| ------ | ------ |
| arg | `any` |

**Returns:** `boolean`

___
<a id="loadimageelement"></a>

###  loadImageElement

▸ **loadImageElement**(image: *[MagickFile](interfaces/magickfile.md)*, el: *`HTMLImageElement`*, forceBrowserSupport?: *`boolean`*): `Promise`<`void`>

*Defined in [util/html.ts:12](https://github.com/KnicKnic/WASM-ImageMagick/blob/7684a1c/src/util/html.ts#L12)*

Will load given html img element src with the inline image content. In case forceBrowserSupport=true

**Parameters:**

| Name | Type | Default value | Description |
| ------ | ------ | ------ | ------ |
| image | [MagickFile](interfaces/magickfile.md) | - |  the image to be loaded |
| el | `HTMLImageElement` | - |  the html image element in which to load the image |
| `Default value` forceBrowserSupport | `boolean` | false |  if true and the image extension is not supported by browsers, it will convert the image to png and return that src so it can be shown in browsers |

**Returns:** `Promise`<`void`>

___
<a id="newexecutioncontext"></a>

###  newExecutionContext

▸ **newExecutionContext**(inheritFrom?: *[ExecutionContext](interfaces/executioncontext.md)*): [ExecutionContext](interfaces/executioncontext.md)

*Defined in [executionContext.ts:76](https://github.com/KnicKnic/WASM-ImageMagick/blob/7684a1c/src/executionContext.ts#L76)*

**Parameters:**

| Name | Type |
| ------ | ------ |
| `Optional` inheritFrom | [ExecutionContext](interfaces/executioncontext.md) |

**Returns:** [ExecutionContext](interfaces/executioncontext.md)

___
<a id="outputfiletoinputfile"></a>

###  outputFileToInputFile

▸ **outputFileToInputFile**(file: *[MagickOutputFile](interfaces/magickoutputfile.md)*, name?: *`string`*): `Promise`<[MagickInputFile](interfaces/magickinputfile.md)>

*Defined in [util/file.ts:36](https://github.com/KnicKnic/WASM-ImageMagick/blob/7684a1c/src/util/file.ts#L36)*

**Parameters:**

| Name | Type | Default value |
| ------ | ------ | ------ |
| file | [MagickOutputFile](interfaces/magickoutputfile.md) | - |
| `Default value` name | `string` |  file.name |

**Returns:** `Promise`<[MagickInputFile](interfaces/magickinputfile.md)>

___
<a id="uint8arraytoblob"></a>

###  uint8ArrayToBlob

▸ **uint8ArrayToBlob**(arr: *`Uint8Array`*): `Blob`

*Defined in [util/file.ts:32](https://github.com/KnicKnic/WASM-ImageMagick/blob/7684a1c/src/util/file.ts#L32)*

**Parameters:**

| Name | Type |
| ------ | ------ |
| arr | `Uint8Array` |

**Returns:** `Blob`

___

