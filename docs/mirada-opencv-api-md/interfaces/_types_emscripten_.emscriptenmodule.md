**[mirada](../README.md)**

[Globals](../README.md) › ["types/emscripten"](../modules/_types_emscripten_.md) › [EmscriptenModule](_types_emscripten_.emscriptenmodule.md)

# Interface: EmscriptenModule

## Hierarchy

* **EmscriptenModule**

## Index

### Properties

* [ALLOC_DYNAMIC](_types_emscripten_.emscriptenmodule.md#alloc_dynamic)
* [ALLOC_NONE](_types_emscripten_.emscriptenmodule.md#alloc_none)
* [ALLOC_NORMAL](_types_emscripten_.emscriptenmodule.md#alloc_normal)
* [ALLOC_STACK](_types_emscripten_.emscriptenmodule.md#alloc_stack)
* [ALLOC_STATIC](_types_emscripten_.emscriptenmodule.md#alloc_static)
* [FAST_MEMORY](_types_emscripten_.emscriptenmodule.md#fast_memory)
* [FHEAP](_types_emscripten_.emscriptenmodule.md#fheap)
* [HEAP](_types_emscripten_.emscriptenmodule.md#heap)
* [HEAP16](_types_emscripten_.emscriptenmodule.md#heap16)
* [HEAP32](_types_emscripten_.emscriptenmodule.md#heap32)
* [HEAP8](_types_emscripten_.emscriptenmodule.md#heap8)
* [HEAPF32](_types_emscripten_.emscriptenmodule.md#heapf32)
* [HEAPF64](_types_emscripten_.emscriptenmodule.md#heapf64)
* [HEAPU16](_types_emscripten_.emscriptenmodule.md#heapu16)
* [HEAPU32](_types_emscripten_.emscriptenmodule.md#heapu32)
* [HEAPU8](_types_emscripten_.emscriptenmodule.md#heapu8)
* [IHEAP](_types_emscripten_.emscriptenmodule.md#iheap)
* [Runtime](_types_emscripten_.emscriptenmodule.md#runtime)
* [TOTAL_MEMORY](_types_emscripten_.emscriptenmodule.md#total_memory)
* [TOTAL_STACK](_types_emscripten_.emscriptenmodule.md#total_stack)
* [arguments](_types_emscripten_.emscriptenmodule.md#arguments)
* [environment](_types_emscripten_.emscriptenmodule.md#environment)
* [filePackagePrefixURL](_types_emscripten_.emscriptenmodule.md#filepackageprefixurl)
* [logReadFiles](_types_emscripten_.emscriptenmodule.md#logreadfiles)
* [noExitRuntime](_types_emscripten_.emscriptenmodule.md#noexitruntime)
* [noInitialRun](_types_emscripten_.emscriptenmodule.md#noinitialrun)
* [onAbort](_types_emscripten_.emscriptenmodule.md#onabort)
* [onRuntimeInitialized](_types_emscripten_.emscriptenmodule.md#onruntimeinitialized)
* [postRun](_types_emscripten_.emscriptenmodule.md#postrun)
* [preInit](_types_emscripten_.emscriptenmodule.md#preinit)
* [preRun](_types_emscripten_.emscriptenmodule.md#prerun)
* [preinitializedWebGLContext](_types_emscripten_.emscriptenmodule.md#preinitializedwebglcontext)
* [preloadedAudios](_types_emscripten_.emscriptenmodule.md#preloadedaudios)
* [preloadedImages](_types_emscripten_.emscriptenmodule.md#preloadedimages)
* [wasmBinary](_types_emscripten_.emscriptenmodule.md#wasmbinary)

### Methods

* [_free](_types_emscripten_.emscriptenmodule.md#_free)
* [_malloc](_types_emscripten_.emscriptenmodule.md#_malloc)
* [addOnExit](_types_emscripten_.emscriptenmodule.md#addonexit)
* [addOnInit](_types_emscripten_.emscriptenmodule.md#addoninit)
* [addOnPostRun](_types_emscripten_.emscriptenmodule.md#addonpostrun)
* [addOnPreMain](_types_emscripten_.emscriptenmodule.md#addonpremain)
* [addOnPreRun](_types_emscripten_.emscriptenmodule.md#addonprerun)
* [addRunDependency](_types_emscripten_.emscriptenmodule.md#addrundependency)
* [allocate](_types_emscripten_.emscriptenmodule.md#allocate)
* [ccall](_types_emscripten_.emscriptenmodule.md#ccall)
* [cwrap](_types_emscripten_.emscriptenmodule.md#cwrap)
* [destroy](_types_emscripten_.emscriptenmodule.md#destroy)
* [getPreloadedPackage](_types_emscripten_.emscriptenmodule.md#getpreloadedpackage)
* [getValue](_types_emscripten_.emscriptenmodule.md#getvalue)
* [instantiateWasm](_types_emscripten_.emscriptenmodule.md#instantiatewasm)
* [intArrayFromString](_types_emscripten_.emscriptenmodule.md#intarrayfromstring)
* [intArrayToString](_types_emscripten_.emscriptenmodule.md#intarraytostring)
* [locateFile](_types_emscripten_.emscriptenmodule.md#locatefile)
* [onCustomMessage](_types_emscripten_.emscriptenmodule.md#oncustommessage)
* [print](_types_emscripten_.emscriptenmodule.md#print)
* [printErr](_types_emscripten_.emscriptenmodule.md#printerr)
* [removeRunDependency](_types_emscripten_.emscriptenmodule.md#removerundependency)
* [setValue](_types_emscripten_.emscriptenmodule.md#setvalue)
* [writeArrayToMemory](_types_emscripten_.emscriptenmodule.md#writearraytomemory)
* [writeAsciiToMemory](_types_emscripten_.emscriptenmodule.md#writeasciitomemory)
* [writeStringToMemory](_types_emscripten_.emscriptenmodule.md#writestringtomemory)

## Properties

###  ALLOC_DYNAMIC

• **ALLOC_DYNAMIC**: *number*

___

###  ALLOC_NONE

• **ALLOC_NONE**: *number*

___

###  ALLOC_NORMAL

• **ALLOC_NORMAL**: *number*

___

###  ALLOC_STACK

• **ALLOC_STACK**: *number*

___

###  ALLOC_STATIC

• **ALLOC_STATIC**: *number*

___

###  FAST_MEMORY

• **FAST_MEMORY**: *number*

___

###  FHEAP

• **FHEAP**: *Float64Array*

___

###  HEAP

• **HEAP**: *Int32Array*

___

###  HEAP16

• **HEAP16**: *Int16Array*

___

###  HEAP32

• **HEAP32**: *Int32Array*

___

###  HEAP8

• **HEAP8**: *Int8Array*

___

###  HEAPF32

• **HEAPF32**: *Float32Array*

___

###  HEAPF64

• **HEAPF64**: *Float64Array*

___

###  HEAPU16

• **HEAPU16**: *Uint16Array*

___

###  HEAPU32

• **HEAPU32**: *Uint32Array*

___

###  HEAPU8

• **HEAPU8**: *Uint8Array*

___

###  IHEAP

• **IHEAP**: *Int32Array*

___

###  Runtime

• **Runtime**: *any*

___

###  TOTAL_MEMORY

• **TOTAL_MEMORY**: *number*

___

###  TOTAL_STACK

• **TOTAL_STACK**: *number*

___

###  arguments

• **arguments**: *string[]*

___

###  environment

• **environment**: *[EnvironmentType](../modules/_types_emscripten_.md#environmenttype)*

___

###  filePackagePrefixURL

• **filePackagePrefixURL**: *string*

___

###  logReadFiles

• **logReadFiles**: *boolean*

___

###  noExitRuntime

• **noExitRuntime**: *boolean*

___

###  noInitialRun

• **noInitialRun**: *boolean*

___

###  onAbort

• **onAbort**: *function*

#### Type declaration:

▸ (`what`: any): *void*

**Parameters:**

Name | Type |
------ | ------ |
`what` | any |

___

###  onRuntimeInitialized

• **onRuntimeInitialized**: *function*

#### Type declaration:

▸ (): *void*

___

###  postRun

• **postRun**: *Array‹function›*

___

###  preInit

• **preInit**: *Array‹function›*

___

###  preRun

• **preRun**: *Array‹function›*

___

###  preinitializedWebGLContext

• **preinitializedWebGLContext**: *WebGLRenderingContext*

___

###  preloadedAudios

• **preloadedAudios**: *any*

___

###  preloadedImages

• **preloadedImages**: *any*

___

###  wasmBinary

• **wasmBinary**: *ArrayBuffer*

## Methods

###  _free

▸ **_free**(`ptr`: number): *void*

**Parameters:**

Name | Type |
------ | ------ |
`ptr` | number |

**Returns:** *void*

___

###  _malloc

▸ **_malloc**(`size`: number): *number*

**Parameters:**

Name | Type |
------ | ------ |
`size` | number |

**Returns:** *number*

___

###  addOnExit

▸ **addOnExit**(`cb`: function): *void*

**Parameters:**

▪ **cb**: *function*

▸ (): *any*

**Returns:** *void*

___

###  addOnInit

▸ **addOnInit**(`cb`: function): *void*

**Parameters:**

▪ **cb**: *function*

▸ (): *any*

**Returns:** *void*

___

###  addOnPostRun

▸ **addOnPostRun**(`cb`: function): *void*

**Parameters:**

▪ **cb**: *function*

▸ (): *any*

**Returns:** *void*

___

###  addOnPreMain

▸ **addOnPreMain**(`cb`: function): *void*

**Parameters:**

▪ **cb**: *function*

▸ (): *any*

**Returns:** *void*

___

###  addOnPreRun

▸ **addOnPreRun**(`cb`: function): *void*

**Parameters:**

▪ **cb**: *function*

▸ (): *any*

**Returns:** *void*

___

###  addRunDependency

▸ **addRunDependency**(`id`: any): *void*

**Parameters:**

Name | Type |
------ | ------ |
`id` | any |

**Returns:** *void*

___

###  allocate

▸ **allocate**(`slab`: any, `types`: string | string[], `allocator`: number, `ptr`: number): *number*

**Parameters:**

Name | Type |
------ | ------ |
`slab` | any |
`types` | string \| string[] |
`allocator` | number |
`ptr` | number |

**Returns:** *number*

___

###  ccall

▸ **ccall**(`ident`: string, `returnType`: [ValueType](../modules/_types_emscripten_.md#valuetype) | null, `argTypes`: [ValueType](../modules/_types_emscripten_.md#valuetype)[], `args`: [TypeCompatibleWithC](../modules/_types_emscripten_.md#typecompatiblewithc)[], `opts?`: [CCallOpts](_types_emscripten_.ccallopts.md)): *any*

**Parameters:**

Name | Type |
------ | ------ |
`ident` | string |
`returnType` | [ValueType](../modules/_types_emscripten_.md#valuetype) \| null |
`argTypes` | [ValueType](../modules/_types_emscripten_.md#valuetype)[] |
`args` | [TypeCompatibleWithC](../modules/_types_emscripten_.md#typecompatiblewithc)[] |
`opts?` | [CCallOpts](_types_emscripten_.ccallopts.md) |

**Returns:** *any*

___

###  cwrap

▸ **cwrap**(`ident`: string, `returnType`: [ValueType](../modules/_types_emscripten_.md#valuetype) | null, `argTypes`: [ValueType](../modules/_types_emscripten_.md#valuetype)[], `opts?`: [CCallOpts](_types_emscripten_.ccallopts.md)): *function*

**Parameters:**

Name | Type |
------ | ------ |
`ident` | string |
`returnType` | [ValueType](../modules/_types_emscripten_.md#valuetype) \| null |
`argTypes` | [ValueType](../modules/_types_emscripten_.md#valuetype)[] |
`opts?` | [CCallOpts](_types_emscripten_.ccallopts.md) |

**Returns:** *function*

▸ (...`args`: any[]): *any*

**Parameters:**

Name | Type |
------ | ------ |
`...args` | any[] |

___

###  destroy

▸ **destroy**(`object`: object): *void*

**Parameters:**

Name | Type |
------ | ------ |
`object` | object |

**Returns:** *void*

___

###  getPreloadedPackage

▸ **getPreloadedPackage**(`remotePackageName`: string, `remotePackageSize`: number): *ArrayBuffer*

**Parameters:**

Name | Type |
------ | ------ |
`remotePackageName` | string |
`remotePackageSize` | number |

**Returns:** *ArrayBuffer*

___

###  getValue

▸ **getValue**(`ptr`: number, `type`: string, `noSafe?`: undefined | false | true): *number*

**Parameters:**

Name | Type |
------ | ------ |
`ptr` | number |
`type` | string |
`noSafe?` | undefined \| false \| true |

**Returns:** *number*

___

###  instantiateWasm

▸ **instantiateWasm**(`imports`: [WebAssemblyImports](../modules/_types_emscripten_.md#webassemblyimports), `successCallback`: function): *[WebAssemblyExports](../modules/_types_emscripten_.md#webassemblyexports)*

**Parameters:**

▪ **imports**: *[WebAssemblyImports](../modules/_types_emscripten_.md#webassemblyimports)*

▪ **successCallback**: *function*

▸ (`module`: [WebAssemblyModule](_types_emscripten_.webassemblymodule.md)): *void*

**Parameters:**

Name | Type |
------ | ------ |
`module` | [WebAssemblyModule](_types_emscripten_.webassemblymodule.md) |

**Returns:** *[WebAssemblyExports](../modules/_types_emscripten_.md#webassemblyexports)*

___

###  intArrayFromString

▸ **intArrayFromString**(`stringy`: string, `dontAddNull?`: undefined | false | true, `length?`: undefined | number): *number[]*

**Parameters:**

Name | Type |
------ | ------ |
`stringy` | string |
`dontAddNull?` | undefined \| false \| true |
`length?` | undefined \| number |

**Returns:** *number[]*

___

###  intArrayToString

▸ **intArrayToString**(`array`: number[]): *string*

**Parameters:**

Name | Type |
------ | ------ |
`array` | number[] |

**Returns:** *string*

___

###  locateFile

▸ **locateFile**(`url`: string): *string*

**Parameters:**

Name | Type |
------ | ------ |
`url` | string |

**Returns:** *string*

___

###  onCustomMessage

▸ **onCustomMessage**(`event`: MessageEvent): *void*

**Parameters:**

Name | Type |
------ | ------ |
`event` | MessageEvent |

**Returns:** *void*

___

###  print

▸ **print**(`str`: string): *void*

**Parameters:**

Name | Type |
------ | ------ |
`str` | string |

**Returns:** *void*

___

###  printErr

▸ **printErr**(`str`: string): *void*

**Parameters:**

Name | Type |
------ | ------ |
`str` | string |

**Returns:** *void*

___

###  removeRunDependency

▸ **removeRunDependency**(`id`: any): *void*

**Parameters:**

Name | Type |
------ | ------ |
`id` | any |

**Returns:** *void*

___

###  setValue

▸ **setValue**(`ptr`: number, `value`: any, `type`: string, `noSafe?`: undefined | false | true): *void*

**Parameters:**

Name | Type |
------ | ------ |
`ptr` | number |
`value` | any |
`type` | string |
`noSafe?` | undefined \| false \| true |

**Returns:** *void*

___

###  writeArrayToMemory

▸ **writeArrayToMemory**(`array`: number[], `buffer`: number): *void*

**Parameters:**

Name | Type |
------ | ------ |
`array` | number[] |
`buffer` | number |

**Returns:** *void*

___

###  writeAsciiToMemory

▸ **writeAsciiToMemory**(`str`: string, `buffer`: number, `dontAddNull`: boolean): *void*

**Parameters:**

Name | Type |
------ | ------ |
`str` | string |
`buffer` | number |
`dontAddNull` | boolean |

**Returns:** *void*

___

###  writeStringToMemory

▸ **writeStringToMemory**(`str`: string, `buffer`: number, `dontAddNull`: boolean): *void*

**Parameters:**

Name | Type |
------ | ------ |
`str` | string |
`buffer` | number |
`dontAddNull` | boolean |

**Returns:** *void*