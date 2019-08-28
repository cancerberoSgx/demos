**[mirada](../README.md)**

[Globals](../README.md) › ["types/emscripten"](../modules/_types_emscripten_.md) › [FS](_types_emscripten_.fs.md)

# Interface: FS

## Hierarchy

* **FS**

## Index

### Methods

* [allocate](_types_emscripten_.fs.md#allocate)
* [analyzePath](_types_emscripten_.fs.md#analyzepath)
* [chdir](_types_emscripten_.fs.md#chdir)
* [chmod](_types_emscripten_.fs.md#chmod)
* [chown](_types_emscripten_.fs.md#chown)
* [close](_types_emscripten_.fs.md#close)
* [createDataFile](_types_emscripten_.fs.md#createdatafile)
* [createLazyFile](_types_emscripten_.fs.md#createlazyfile)
* [createPreloadedFile](_types_emscripten_.fs.md#createpreloadedfile)
* [cwd](_types_emscripten_.fs.md#cwd)
* [fchmod](_types_emscripten_.fs.md#fchmod)
* [fchown](_types_emscripten_.fs.md#fchown)
* [ftruncate](_types_emscripten_.fs.md#ftruncate)
* [getPath](_types_emscripten_.fs.md#getpath)
* [init](_types_emscripten_.fs.md#init)
* [ioctl](_types_emscripten_.fs.md#ioctl)
* [isBlkdev](_types_emscripten_.fs.md#isblkdev)
* [isChrdev](_types_emscripten_.fs.md#ischrdev)
* [isDir](_types_emscripten_.fs.md#isdir)
* [isFIFO](_types_emscripten_.fs.md#isfifo)
* [isFile](_types_emscripten_.fs.md#isfile)
* [isLink](_types_emscripten_.fs.md#islink)
* [isSocket](_types_emscripten_.fs.md#issocket)
* [lchmod](_types_emscripten_.fs.md#lchmod)
* [lchown](_types_emscripten_.fs.md#lchown)
* [llseek](_types_emscripten_.fs.md#llseek)
* [lookupPath](_types_emscripten_.fs.md#lookuppath)
* [lstat](_types_emscripten_.fs.md#lstat)
* [major](_types_emscripten_.fs.md#major)
* [makedev](_types_emscripten_.fs.md#makedev)
* [minor](_types_emscripten_.fs.md#minor)
* [mkdev](_types_emscripten_.fs.md#mkdev)
* [mkdir](_types_emscripten_.fs.md#mkdir)
* [mmap](_types_emscripten_.fs.md#mmap)
* [mount](_types_emscripten_.fs.md#mount)
* [open](_types_emscripten_.fs.md#open)
* [read](_types_emscripten_.fs.md#read)
* [readFile](_types_emscripten_.fs.md#readfile)
* [readdir](_types_emscripten_.fs.md#readdir)
* [readlink](_types_emscripten_.fs.md#readlink)
* [registerDevice](_types_emscripten_.fs.md#registerdevice)
* [rename](_types_emscripten_.fs.md#rename)
* [rmdir](_types_emscripten_.fs.md#rmdir)
* [stat](_types_emscripten_.fs.md#stat)
* [symlink](_types_emscripten_.fs.md#symlink)
* [syncfs](_types_emscripten_.fs.md#syncfs)
* [truncate](_types_emscripten_.fs.md#truncate)
* [unlink](_types_emscripten_.fs.md#unlink)
* [unmount](_types_emscripten_.fs.md#unmount)
* [utime](_types_emscripten_.fs.md#utime)
* [write](_types_emscripten_.fs.md#write)
* [writeFile](_types_emscripten_.fs.md#writefile)

## Methods

###  allocate

▸ **allocate**(`stream`: [FSStream](_types_emscripten_.fsstream.md), `offset`: number, `length`: number): *void*

**Parameters:**

Name | Type |
------ | ------ |
`stream` | [FSStream](_types_emscripten_.fsstream.md) |
`offset` | number |
`length` | number |

**Returns:** *void*

___

###  analyzePath

▸ **analyzePath**(`p`: string): *any*

**Parameters:**

Name | Type |
------ | ------ |
`p` | string |

**Returns:** *any*

___

###  chdir

▸ **chdir**(`path`: string): *void*

**Parameters:**

Name | Type |
------ | ------ |
`path` | string |

**Returns:** *void*

___

###  chmod

▸ **chmod**(`path`: string, `mode`: number, `dontFollow?`: undefined | false | true): *void*

**Parameters:**

Name | Type |
------ | ------ |
`path` | string |
`mode` | number |
`dontFollow?` | undefined \| false \| true |

**Returns:** *void*

___

###  chown

▸ **chown**(`path`: string, `uid`: number, `gid`: number, `dontFollow?`: undefined | false | true): *void*

**Parameters:**

Name | Type |
------ | ------ |
`path` | string |
`uid` | number |
`gid` | number |
`dontFollow?` | undefined \| false \| true |

**Returns:** *void*

___

###  close

▸ **close**(`stream`: [FSStream](_types_emscripten_.fsstream.md)): *void*

**Parameters:**

Name | Type |
------ | ------ |
`stream` | [FSStream](_types_emscripten_.fsstream.md) |

**Returns:** *void*

___

###  createDataFile

▸ **createDataFile**(`parent`: string, `name`: string, `data`: ArrayBufferView, `canRead`: boolean, `canWrite`: boolean, `canOwn`: boolean): *void*

**Parameters:**

Name | Type |
------ | ------ |
`parent` | string |
`name` | string |
`data` | ArrayBufferView |
`canRead` | boolean |
`canWrite` | boolean |
`canOwn` | boolean |

**Returns:** *void*

___

###  createLazyFile

▸ **createLazyFile**(`parent`: string, `name`: string, `url`: string, `canRead`: boolean, `canWrite`: boolean): *[FSNode](_types_emscripten_.fsnode.md)*

**Parameters:**

Name | Type |
------ | ------ |
`parent` | string |
`name` | string |
`url` | string |
`canRead` | boolean |
`canWrite` | boolean |

**Returns:** *[FSNode](_types_emscripten_.fsnode.md)*

▸ **createLazyFile**(`parent`: [FSNode](_types_emscripten_.fsnode.md), `name`: string, `url`: string, `canRead`: boolean, `canWrite`: boolean): *[FSNode](_types_emscripten_.fsnode.md)*

**Parameters:**

Name | Type |
------ | ------ |
`parent` | [FSNode](_types_emscripten_.fsnode.md) |
`name` | string |
`url` | string |
`canRead` | boolean |
`canWrite` | boolean |

**Returns:** *[FSNode](_types_emscripten_.fsnode.md)*

___

###  createPreloadedFile

▸ **createPreloadedFile**(`parent`: string, `name`: string, `url`: string, `canRead`: boolean, `canWrite`: boolean, `onload?`: undefined | function, `onerror?`: undefined | function, `dontCreateFile?`: undefined | false | true, `canOwn?`: undefined | false | true): *void*

**Parameters:**

Name | Type |
------ | ------ |
`parent` | string |
`name` | string |
`url` | string |
`canRead` | boolean |
`canWrite` | boolean |
`onload?` | undefined \| function |
`onerror?` | undefined \| function |
`dontCreateFile?` | undefined \| false \| true |
`canOwn?` | undefined \| false \| true |

**Returns:** *void*

▸ **createPreloadedFile**(`parent`: [FSNode](_types_emscripten_.fsnode.md), `name`: string, `url`: string, `canRead`: boolean, `canWrite`: boolean, `onload?`: undefined | function, `onerror?`: undefined | function, `dontCreateFile?`: undefined | false | true, `canOwn?`: undefined | false | true): *void*

**Parameters:**

Name | Type |
------ | ------ |
`parent` | [FSNode](_types_emscripten_.fsnode.md) |
`name` | string |
`url` | string |
`canRead` | boolean |
`canWrite` | boolean |
`onload?` | undefined \| function |
`onerror?` | undefined \| function |
`dontCreateFile?` | undefined \| false \| true |
`canOwn?` | undefined \| false \| true |

**Returns:** *void*

___

###  cwd

▸ **cwd**(): *string*

**Returns:** *string*

___

###  fchmod

▸ **fchmod**(`fd`: number, `mode`: number): *void*

**Parameters:**

Name | Type |
------ | ------ |
`fd` | number |
`mode` | number |

**Returns:** *void*

___

###  fchown

▸ **fchown**(`fd`: number, `uid`: number, `gid`: number): *void*

**Parameters:**

Name | Type |
------ | ------ |
`fd` | number |
`uid` | number |
`gid` | number |

**Returns:** *void*

___

###  ftruncate

▸ **ftruncate**(`fd`: number, `len`: number): *void*

**Parameters:**

Name | Type |
------ | ------ |
`fd` | number |
`len` | number |

**Returns:** *void*

___

###  getPath

▸ **getPath**(`node`: [FSNode](_types_emscripten_.fsnode.md)): *string*

**Parameters:**

Name | Type |
------ | ------ |
`node` | [FSNode](_types_emscripten_.fsnode.md) |

**Returns:** *string*

___

###  init

▸ **init**(`input`: function, `output`: function, `error`: function): *void*

**Parameters:**

▪ **input**: *function*

▸ (): *number*

▪ **output**: *function*

▸ (`c`: number): *any*

**Parameters:**

Name | Type |
------ | ------ |
`c` | number |

▪ **error**: *function*

▸ (`c`: number): *any*

**Parameters:**

Name | Type |
------ | ------ |
`c` | number |

**Returns:** *void*

___

###  ioctl

▸ **ioctl**(`stream`: [FSStream](_types_emscripten_.fsstream.md), `cmd`: any, `arg`: any): *any*

**Parameters:**

Name | Type |
------ | ------ |
`stream` | [FSStream](_types_emscripten_.fsstream.md) |
`cmd` | any |
`arg` | any |

**Returns:** *any*

___

###  isBlkdev

▸ **isBlkdev**(`mode`: number): *boolean*

**Parameters:**

Name | Type |
------ | ------ |
`mode` | number |

**Returns:** *boolean*

___

###  isChrdev

▸ **isChrdev**(`mode`: number): *boolean*

**Parameters:**

Name | Type |
------ | ------ |
`mode` | number |

**Returns:** *boolean*

___

###  isDir

▸ **isDir**(`mode`: number): *boolean*

**Parameters:**

Name | Type |
------ | ------ |
`mode` | number |

**Returns:** *boolean*

___

###  isFIFO

▸ **isFIFO**(`mode`: number): *boolean*

**Parameters:**

Name | Type |
------ | ------ |
`mode` | number |

**Returns:** *boolean*

___

###  isFile

▸ **isFile**(`mode`: number): *boolean*

**Parameters:**

Name | Type |
------ | ------ |
`mode` | number |

**Returns:** *boolean*

___

###  isLink

▸ **isLink**(`mode`: number): *boolean*

**Parameters:**

Name | Type |
------ | ------ |
`mode` | number |

**Returns:** *boolean*

___

###  isSocket

▸ **isSocket**(`mode`: number): *boolean*

**Parameters:**

Name | Type |
------ | ------ |
`mode` | number |

**Returns:** *boolean*

___

###  lchmod

▸ **lchmod**(`path`: string, `mode`: number): *void*

**Parameters:**

Name | Type |
------ | ------ |
`path` | string |
`mode` | number |

**Returns:** *void*

___

###  lchown

▸ **lchown**(`path`: string, `uid`: number, `gid`: number): *void*

**Parameters:**

Name | Type |
------ | ------ |
`path` | string |
`uid` | number |
`gid` | number |

**Returns:** *void*

___

###  llseek

▸ **llseek**(`stream`: [FSStream](_types_emscripten_.fsstream.md), `offset`: number, `whence`: number): *any*

**Parameters:**

Name | Type |
------ | ------ |
`stream` | [FSStream](_types_emscripten_.fsstream.md) |
`offset` | number |
`whence` | number |

**Returns:** *any*

___

###  lookupPath

▸ **lookupPath**(`path`: string, `opts`: any): *[Lookup](_types_emscripten_.lookup.md)*

**Parameters:**

Name | Type |
------ | ------ |
`path` | string |
`opts` | any |

**Returns:** *[Lookup](_types_emscripten_.lookup.md)*

___

###  lstat

▸ **lstat**(`path`: string): *any*

**Parameters:**

Name | Type |
------ | ------ |
`path` | string |

**Returns:** *any*

___

###  major

▸ **major**(`dev`: number): *number*

**Parameters:**

Name | Type |
------ | ------ |
`dev` | number |

**Returns:** *number*

___

###  makedev

▸ **makedev**(`ma`: number, `mi`: number): *number*

**Parameters:**

Name | Type |
------ | ------ |
`ma` | number |
`mi` | number |

**Returns:** *number*

___

###  minor

▸ **minor**(`dev`: number): *number*

**Parameters:**

Name | Type |
------ | ------ |
`dev` | number |

**Returns:** *number*

___

###  mkdev

▸ **mkdev**(`path`: string, `mode?`: undefined | number, `dev?`: undefined | number): *any*

**Parameters:**

Name | Type |
------ | ------ |
`path` | string |
`mode?` | undefined \| number |
`dev?` | undefined \| number |

**Returns:** *any*

___

###  mkdir

▸ **mkdir**(`path`: string, `mode?`: undefined | number): *any*

**Parameters:**

Name | Type |
------ | ------ |
`path` | string |
`mode?` | undefined \| number |

**Returns:** *any*

___

###  mmap

▸ **mmap**(`stream`: [FSStream](_types_emscripten_.fsstream.md), `buffer`: ArrayBufferView, `offset`: number, `length`: number, `position`: number, `prot`: number, `flags`: number): *any*

**Parameters:**

Name | Type |
------ | ------ |
`stream` | [FSStream](_types_emscripten_.fsstream.md) |
`buffer` | ArrayBufferView |
`offset` | number |
`length` | number |
`position` | number |
`prot` | number |
`flags` | number |

**Returns:** *any*

___

###  mount

▸ **mount**(`type`: any, `opts`: any, `mountpoint`: string): *any*

**Parameters:**

Name | Type |
------ | ------ |
`type` | any |
`opts` | any |
`mountpoint` | string |

**Returns:** *any*

___

###  open

▸ **open**(`path`: string, `flags`: string, `mode?`: undefined | number, `fd_start?`: undefined | number, `fd_end?`: undefined | number): *[FSStream](_types_emscripten_.fsstream.md)*

**Parameters:**

Name | Type |
------ | ------ |
`path` | string |
`flags` | string |
`mode?` | undefined \| number |
`fd_start?` | undefined \| number |
`fd_end?` | undefined \| number |

**Returns:** *[FSStream](_types_emscripten_.fsstream.md)*

___

###  read

▸ **read**(`stream`: [FSStream](_types_emscripten_.fsstream.md), `buffer`: ArrayBufferView, `offset`: number, `length`: number, `position?`: undefined | number): *number*

**Parameters:**

Name | Type |
------ | ------ |
`stream` | [FSStream](_types_emscripten_.fsstream.md) |
`buffer` | ArrayBufferView |
`offset` | number |
`length` | number |
`position?` | undefined \| number |

**Returns:** *number*

___

###  readFile

▸ **readFile**(`path`: string, `opts?`: undefined | object): *ArrayBufferView*

**Parameters:**

Name | Type |
------ | ------ |
`path` | string |
`opts?` | undefined \| object |

**Returns:** *ArrayBufferView*

___

###  readdir

▸ **readdir**(`path`: string): *string[]*

**Parameters:**

Name | Type |
------ | ------ |
`path` | string |

**Returns:** *string[]*

___

###  readlink

▸ **readlink**(`path`: string): *string*

**Parameters:**

Name | Type |
------ | ------ |
`path` | string |

**Returns:** *string*

___

###  registerDevice

▸ **registerDevice**(`dev`: number, `ops`: any): *void*

**Parameters:**

Name | Type |
------ | ------ |
`dev` | number |
`ops` | any |

**Returns:** *void*

___

###  rename

▸ **rename**(`old_path`: string, `new_path`: string): *void*

**Parameters:**

Name | Type |
------ | ------ |
`old_path` | string |
`new_path` | string |

**Returns:** *void*

___

###  rmdir

▸ **rmdir**(`path`: string): *void*

**Parameters:**

Name | Type |
------ | ------ |
`path` | string |

**Returns:** *void*

___

###  stat

▸ **stat**(`path`: string, `dontFollow?`: undefined | false | true): *any*

**Parameters:**

Name | Type |
------ | ------ |
`path` | string |
`dontFollow?` | undefined \| false \| true |

**Returns:** *any*

___

###  symlink

▸ **symlink**(`oldpath`: string, `newpath`: string): *any*

**Parameters:**

Name | Type |
------ | ------ |
`oldpath` | string |
`newpath` | string |

**Returns:** *any*

___

###  syncfs

▸ **syncfs**(`populate`: boolean, `callback`: function): *void*

**Parameters:**

▪ **populate**: *boolean*

▪ **callback**: *function*

▸ (`e`: any): *any*

**Parameters:**

Name | Type |
------ | ------ |
`e` | any |

**Returns:** *void*

▸ **syncfs**(`callback`: function, `populate?`: undefined | false | true): *void*

**Parameters:**

▪ **callback**: *function*

▸ (`e`: any): *any*

**Parameters:**

Name | Type |
------ | ------ |
`e` | any |

▪`Optional`  **populate**: *undefined | false | true*

**Returns:** *void*

___

###  truncate

▸ **truncate**(`path`: string, `len`: number): *void*

**Parameters:**

Name | Type |
------ | ------ |
`path` | string |
`len` | number |

**Returns:** *void*

___

###  unlink

▸ **unlink**(`path`: string): *void*

**Parameters:**

Name | Type |
------ | ------ |
`path` | string |

**Returns:** *void*

___

###  unmount

▸ **unmount**(`mountpoint`: string): *void*

**Parameters:**

Name | Type |
------ | ------ |
`mountpoint` | string |

**Returns:** *void*

___

###  utime

▸ **utime**(`path`: string, `atime`: number, `mtime`: number): *void*

**Parameters:**

Name | Type |
------ | ------ |
`path` | string |
`atime` | number |
`mtime` | number |

**Returns:** *void*

___

###  write

▸ **write**(`stream`: [FSStream](_types_emscripten_.fsstream.md), `buffer`: ArrayBufferView, `offset`: number, `length`: number, `position?`: undefined | number, `canOwn?`: undefined | false | true): *number*

**Parameters:**

Name | Type |
------ | ------ |
`stream` | [FSStream](_types_emscripten_.fsstream.md) |
`buffer` | ArrayBufferView |
`offset` | number |
`length` | number |
`position?` | undefined \| number |
`canOwn?` | undefined \| false \| true |

**Returns:** *number*

___

###  writeFile

▸ **writeFile**(`path`: string, `data`: ArrayBufferView, `opts?`: undefined | object): *void*

**Parameters:**

Name | Type |
------ | ------ |
`path` | string |
`data` | ArrayBufferView |
`opts?` | undefined \| object |

**Returns:** *void*

▸ **writeFile**(`path`: string, `data`: string, `opts?`: undefined | object): *void*

**Parameters:**

Name | Type |
------ | ------ |
`path` | string |
`data` | string |
`opts?` | undefined \| object |

**Returns:** *void*