[accursed](../README.md) › [Globals](../globals.md) › ["declarations/blessedProgram.d"](../modules/_declarations_blessedprogram_d_.md) › [ProgramOutput](_declarations_blessedprogram_d_.programoutput.md)

# Interface: ProgramOutput

program.output Writable implementation should implement this interface

## Hierarchy

* Writable

  ↳ **ProgramOutput**

## Implements

* WritableStream

## Index

### Constructors

* [constructor](_declarations_blessedprogram_d_.programoutput.md#constructor)

### Properties

* [column](_declarations_blessedprogram_d_.programoutput.md#column)
* [destroyed](_declarations_blessedprogram_d_.programoutput.md#destroyed)
* [isTTY](_declarations_blessedprogram_d_.programoutput.md#optional-istty)
* [rows](_declarations_blessedprogram_d_.programoutput.md#rows)
* [writable](_declarations_blessedprogram_d_.programoutput.md#writable)
* [writableFinished](_declarations_blessedprogram_d_.programoutput.md#writablefinished)
* [writableHighWaterMark](_declarations_blessedprogram_d_.programoutput.md#writablehighwatermark)
* [writableLength](_declarations_blessedprogram_d_.programoutput.md#writablelength)
* [writableObjectMode](_declarations_blessedprogram_d_.programoutput.md#writableobjectmode)
* [defaultMaxListeners](_declarations_blessedprogram_d_.programoutput.md#static-defaultmaxlisteners)

### Methods

* [_destroy](_declarations_blessedprogram_d_.programoutput.md#_destroy)
* [_final](_declarations_blessedprogram_d_.programoutput.md#_final)
* [_write](_declarations_blessedprogram_d_.programoutput.md#_write)
* [_writev](_declarations_blessedprogram_d_.programoutput.md#optional-_writev)
* [addListener](_declarations_blessedprogram_d_.programoutput.md#addlistener)
* [cork](_declarations_blessedprogram_d_.programoutput.md#cork)
* [destroy](_declarations_blessedprogram_d_.programoutput.md#destroy)
* [emit](_declarations_blessedprogram_d_.programoutput.md#emit)
* [end](_declarations_blessedprogram_d_.programoutput.md#end)
* [eventNames](_declarations_blessedprogram_d_.programoutput.md#eventnames)
* [getMaxListeners](_declarations_blessedprogram_d_.programoutput.md#getmaxlisteners)
* [listenerCount](_declarations_blessedprogram_d_.programoutput.md#listenercount)
* [listeners](_declarations_blessedprogram_d_.programoutput.md#listeners)
* [off](_declarations_blessedprogram_d_.programoutput.md#off)
* [on](_declarations_blessedprogram_d_.programoutput.md#on)
* [once](_declarations_blessedprogram_d_.programoutput.md#once)
* [pipe](_declarations_blessedprogram_d_.programoutput.md#pipe)
* [prependListener](_declarations_blessedprogram_d_.programoutput.md#prependlistener)
* [prependOnceListener](_declarations_blessedprogram_d_.programoutput.md#prependoncelistener)
* [rawListeners](_declarations_blessedprogram_d_.programoutput.md#rawlisteners)
* [removeAllListeners](_declarations_blessedprogram_d_.programoutput.md#removealllisteners)
* [removeListener](_declarations_blessedprogram_d_.programoutput.md#removelistener)
* [setDefaultEncoding](_declarations_blessedprogram_d_.programoutput.md#setdefaultencoding)
* [setMaxListeners](_declarations_blessedprogram_d_.programoutput.md#setmaxlisteners)
* [uncork](_declarations_blessedprogram_d_.programoutput.md#uncork)
* [write](_declarations_blessedprogram_d_.programoutput.md#write)
* [listenerCount](_declarations_blessedprogram_d_.programoutput.md#static-listenercount)

## Constructors

###  constructor

\+ **new ProgramOutput**(`opts?`: WritableOptions): *[ProgramOutput](_declarations_blessedprogram_d_.programoutput.md)*

*Inherited from void*

Defined in /Users/sebastiangurin/git/accursed/node_modules/@types/node/stream.d.ts:125

**Parameters:**

Name | Type |
------ | ------ |
`opts?` | WritableOptions |

**Returns:** *[ProgramOutput](_declarations_blessedprogram_d_.programoutput.md)*

## Properties

###  column

• **column**: *number*

*Defined in [declarations/blessedProgram.d.ts:70](https://github.com/cancerberoSgx/accursed/blob/5b2518e/src/declarations/blessedProgram.d.ts#L70)*

___

###  destroyed

• **destroyed**: *boolean*

*Inherited from void*

Defined in /Users/sebastiangurin/git/accursed/node_modules/@types/node/stream.d.ts:125

___

### `Optional` isTTY

• **isTTY**? : *boolean*

*Defined in [declarations/blessedProgram.d.ts:69](https://github.com/cancerberoSgx/accursed/blob/5b2518e/src/declarations/blessedProgram.d.ts#L69)*

___

###  rows

• **rows**: *number*

*Defined in [declarations/blessedProgram.d.ts:71](https://github.com/cancerberoSgx/accursed/blob/5b2518e/src/declarations/blessedProgram.d.ts#L71)*

___

###  writable

• **writable**: *boolean*

*Inherited from void*

Defined in /Users/sebastiangurin/git/accursed/node_modules/@types/node/stream.d.ts:120

___

###  writableFinished

• **writableFinished**: *boolean*

*Inherited from void*

Defined in /Users/sebastiangurin/git/accursed/node_modules/@types/node/stream.d.ts:121

___

###  writableHighWaterMark

• **writableHighWaterMark**: *number*

*Inherited from void*

Defined in /Users/sebastiangurin/git/accursed/node_modules/@types/node/stream.d.ts:122

___

###  writableLength

• **writableLength**: *number*

*Inherited from void*

Defined in /Users/sebastiangurin/git/accursed/node_modules/@types/node/stream.d.ts:123

___

###  writableObjectMode

• **writableObjectMode**: *boolean*

*Inherited from void*

Defined in /Users/sebastiangurin/git/accursed/node_modules/@types/node/stream.d.ts:124

___

### `Static` defaultMaxListeners

▪ **defaultMaxListeners**: *number*

*Inherited from void*

Defined in /Users/sebastiangurin/git/accursed/node_modules/@types/node/events.d.ts:9

## Methods

###  _destroy

▸ **_destroy**(`error`: Error | null, `callback`: function): *void*

*Inherited from void*

Defined in /Users/sebastiangurin/git/accursed/node_modules/@types/node/stream.d.ts:129

**Parameters:**

▪ **error**: *Error | null*

▪ **callback**: *function*

▸ (`error?`: Error | null): *void*

**Parameters:**

Name | Type |
------ | ------ |
`error?` | Error &#124; null |

**Returns:** *void*

___

###  _final

▸ **_final**(`callback`: function): *void*

*Inherited from void*

Defined in /Users/sebastiangurin/git/accursed/node_modules/@types/node/stream.d.ts:130

**Parameters:**

▪ **callback**: *function*

▸ (`error?`: Error | null): *void*

**Parameters:**

Name | Type |
------ | ------ |
`error?` | Error &#124; null |

**Returns:** *void*

___

###  _write

▸ **_write**(`chunk`: any, `encoding`: string, `callback`: function): *void*

*Inherited from void*

Defined in /Users/sebastiangurin/git/accursed/node_modules/@types/node/stream.d.ts:127

**Parameters:**

▪ **chunk**: *any*

▪ **encoding**: *string*

▪ **callback**: *function*

▸ (`error?`: Error | null): *void*

**Parameters:**

Name | Type |
------ | ------ |
`error?` | Error &#124; null |

**Returns:** *void*

___

### `Optional` _writev

▸ **_writev**(`chunks`: Array‹object›, `callback`: function): *void*

*Inherited from void*

Defined in /Users/sebastiangurin/git/accursed/node_modules/@types/node/stream.d.ts:128

**Parameters:**

▪ **chunks**: *Array‹object›*

▪ **callback**: *function*

▸ (`error?`: Error | null): *void*

**Parameters:**

Name | Type |
------ | ------ |
`error?` | Error &#124; null |

**Returns:** *void*

___

###  addListener

▸ **addListener**(`event`: "close", `listener`: function): *this*

*Inherited from void*

*Overrides void*

Defined in /Users/sebastiangurin/git/accursed/node_modules/@types/node/stream.d.ts:151

Event emitter
The defined events on documents including:
1. close
2. drain
3. error
4. finish
5. pipe
6. unpipe

**Parameters:**

▪ **event**: *"close"*

▪ **listener**: *function*

▸ (): *void*

**Returns:** *this*

▸ **addListener**(`event`: "drain", `listener`: function): *this*

*Inherited from void*

*Overrides void*

Defined in /Users/sebastiangurin/git/accursed/node_modules/@types/node/stream.d.ts:152

**Parameters:**

▪ **event**: *"drain"*

▪ **listener**: *function*

▸ (): *void*

**Returns:** *this*

▸ **addListener**(`event`: "error", `listener`: function): *this*

*Inherited from void*

*Overrides void*

Defined in /Users/sebastiangurin/git/accursed/node_modules/@types/node/stream.d.ts:153

**Parameters:**

▪ **event**: *"error"*

▪ **listener**: *function*

▸ (`err`: Error): *void*

**Parameters:**

Name | Type |
------ | ------ |
`err` | Error |

**Returns:** *this*

▸ **addListener**(`event`: "finish", `listener`: function): *this*

*Inherited from void*

*Overrides void*

Defined in /Users/sebastiangurin/git/accursed/node_modules/@types/node/stream.d.ts:154

**Parameters:**

▪ **event**: *"finish"*

▪ **listener**: *function*

▸ (): *void*

**Returns:** *this*

▸ **addListener**(`event`: "pipe", `listener`: function): *this*

*Inherited from void*

*Overrides void*

Defined in /Users/sebastiangurin/git/accursed/node_modules/@types/node/stream.d.ts:155

**Parameters:**

▪ **event**: *"pipe"*

▪ **listener**: *function*

▸ (`src`: Readable): *void*

**Parameters:**

Name | Type |
------ | ------ |
`src` | Readable |

**Returns:** *this*

▸ **addListener**(`event`: "unpipe", `listener`: function): *this*

*Inherited from void*

*Overrides void*

Defined in /Users/sebastiangurin/git/accursed/node_modules/@types/node/stream.d.ts:156

**Parameters:**

▪ **event**: *"unpipe"*

▪ **listener**: *function*

▸ (`src`: Readable): *void*

**Parameters:**

Name | Type |
------ | ------ |
`src` | Readable |

**Returns:** *this*

▸ **addListener**(`event`: string | symbol, `listener`: function): *this*

*Inherited from void*

*Overrides void*

Defined in /Users/sebastiangurin/git/accursed/node_modules/@types/node/stream.d.ts:157

**Parameters:**

▪ **event**: *string | symbol*

▪ **listener**: *function*

▸ (...`args`: any[]): *void*

**Parameters:**

Name | Type |
------ | ------ |
`...args` | any[] |

**Returns:** *this*

___

###  cork

▸ **cork**(): *void*

*Inherited from void*

Defined in /Users/sebastiangurin/git/accursed/node_modules/@types/node/stream.d.ts:137

**Returns:** *void*

___

###  destroy

▸ **destroy**(`error?`: Error): *void*

*Inherited from void*

Defined in /Users/sebastiangurin/git/accursed/node_modules/@types/node/stream.d.ts:139

**Parameters:**

Name | Type |
------ | ------ |
`error?` | Error |

**Returns:** *void*

___

###  emit

▸ **emit**(`event`: "close"): *boolean*

*Inherited from void*

*Overrides void*

Defined in /Users/sebastiangurin/git/accursed/node_modules/@types/node/stream.d.ts:159

**Parameters:**

Name | Type |
------ | ------ |
`event` | "close" |

**Returns:** *boolean*

▸ **emit**(`event`: "drain"): *boolean*

*Inherited from void*

*Overrides void*

Defined in /Users/sebastiangurin/git/accursed/node_modules/@types/node/stream.d.ts:160

**Parameters:**

Name | Type |
------ | ------ |
`event` | "drain" |

**Returns:** *boolean*

▸ **emit**(`event`: "error", `err`: Error): *boolean*

*Inherited from void*

*Overrides void*

Defined in /Users/sebastiangurin/git/accursed/node_modules/@types/node/stream.d.ts:161

**Parameters:**

Name | Type |
------ | ------ |
`event` | "error" |
`err` | Error |

**Returns:** *boolean*

▸ **emit**(`event`: "finish"): *boolean*

*Inherited from void*

*Overrides void*

Defined in /Users/sebastiangurin/git/accursed/node_modules/@types/node/stream.d.ts:162

**Parameters:**

Name | Type |
------ | ------ |
`event` | "finish" |

**Returns:** *boolean*

▸ **emit**(`event`: "pipe", `src`: Readable): *boolean*

*Inherited from void*

*Overrides void*

Defined in /Users/sebastiangurin/git/accursed/node_modules/@types/node/stream.d.ts:163

**Parameters:**

Name | Type |
------ | ------ |
`event` | "pipe" |
`src` | Readable |

**Returns:** *boolean*

▸ **emit**(`event`: "unpipe", `src`: Readable): *boolean*

*Inherited from void*

*Overrides void*

Defined in /Users/sebastiangurin/git/accursed/node_modules/@types/node/stream.d.ts:164

**Parameters:**

Name | Type |
------ | ------ |
`event` | "unpipe" |
`src` | Readable |

**Returns:** *boolean*

▸ **emit**(`event`: string | symbol, ...`args`: any[]): *boolean*

*Inherited from void*

*Overrides void*

Defined in /Users/sebastiangurin/git/accursed/node_modules/@types/node/stream.d.ts:165

**Parameters:**

Name | Type |
------ | ------ |
`event` | string &#124; symbol |
`...args` | any[] |

**Returns:** *boolean*

___

###  end

▸ **end**(`cb?`: function): *void*

*Inherited from void*

Defined in /Users/sebastiangurin/git/accursed/node_modules/@types/node/stream.d.ts:134

**Parameters:**

▪`Optional`  **cb**: *function*

▸ (): *void*

**Returns:** *void*

▸ **end**(`chunk`: any, `cb?`: function): *void*

*Inherited from void*

Defined in /Users/sebastiangurin/git/accursed/node_modules/@types/node/stream.d.ts:135

**Parameters:**

▪ **chunk**: *any*

▪`Optional`  **cb**: *function*

▸ (): *void*

**Returns:** *void*

▸ **end**(`chunk`: any, `encoding`: string, `cb?`: function): *void*

*Inherited from void*

Defined in /Users/sebastiangurin/git/accursed/node_modules/@types/node/stream.d.ts:136

**Parameters:**

▪ **chunk**: *any*

▪ **encoding**: *string*

▪`Optional`  **cb**: *function*

▸ (): *void*

**Returns:** *void*

___

###  eventNames

▸ **eventNames**(): *Array‹string | symbol›*

*Inherited from void*

*Overrides void*

Defined in /Users/sebastiangurin/git/accursed/node_modules/@types/node/events.d.ts:24

**Returns:** *Array‹string | symbol›*

___

###  getMaxListeners

▸ **getMaxListeners**(): *number*

*Inherited from void*

*Overrides void*

Defined in /Users/sebastiangurin/git/accursed/node_modules/@types/node/events.d.ts:20

**Returns:** *number*

___

###  listenerCount

▸ **listenerCount**(`type`: string | symbol): *number*

*Inherited from void*

*Overrides void*

Defined in /Users/sebastiangurin/git/accursed/node_modules/@types/node/events.d.ts:25

**Parameters:**

Name | Type |
------ | ------ |
`type` | string &#124; symbol |

**Returns:** *number*

___

###  listeners

▸ **listeners**(`event`: string | symbol): *Function[]*

*Inherited from void*

*Overrides void*

Defined in /Users/sebastiangurin/git/accursed/node_modules/@types/node/events.d.ts:21

**Parameters:**

Name | Type |
------ | ------ |
`event` | string &#124; symbol |

**Returns:** *Function[]*

___

###  off

▸ **off**(`event`: string | symbol, `listener`: function): *this*

*Inherited from void*

*Overrides void*

Defined in /Users/sebastiangurin/git/accursed/node_modules/@types/node/events.d.ts:17

**Parameters:**

▪ **event**: *string | symbol*

▪ **listener**: *function*

▸ (...`args`: any[]): *void*

**Parameters:**

Name | Type |
------ | ------ |
`...args` | any[] |

**Returns:** *this*

___

###  on

▸ **on**(`event`: "close", `listener`: function): *this*

*Inherited from void*

*Overrides void*

Defined in /Users/sebastiangurin/git/accursed/node_modules/@types/node/stream.d.ts:167

**Parameters:**

▪ **event**: *"close"*

▪ **listener**: *function*

▸ (): *void*

**Returns:** *this*

▸ **on**(`event`: "drain", `listener`: function): *this*

*Inherited from void*

*Overrides void*

Defined in /Users/sebastiangurin/git/accursed/node_modules/@types/node/stream.d.ts:168

**Parameters:**

▪ **event**: *"drain"*

▪ **listener**: *function*

▸ (): *void*

**Returns:** *this*

▸ **on**(`event`: "error", `listener`: function): *this*

*Inherited from void*

*Overrides void*

Defined in /Users/sebastiangurin/git/accursed/node_modules/@types/node/stream.d.ts:169

**Parameters:**

▪ **event**: *"error"*

▪ **listener**: *function*

▸ (`err`: Error): *void*

**Parameters:**

Name | Type |
------ | ------ |
`err` | Error |

**Returns:** *this*

▸ **on**(`event`: "finish", `listener`: function): *this*

*Inherited from void*

*Overrides void*

Defined in /Users/sebastiangurin/git/accursed/node_modules/@types/node/stream.d.ts:170

**Parameters:**

▪ **event**: *"finish"*

▪ **listener**: *function*

▸ (): *void*

**Returns:** *this*

▸ **on**(`event`: "pipe", `listener`: function): *this*

*Inherited from void*

*Overrides void*

Defined in /Users/sebastiangurin/git/accursed/node_modules/@types/node/stream.d.ts:171

**Parameters:**

▪ **event**: *"pipe"*

▪ **listener**: *function*

▸ (`src`: Readable): *void*

**Parameters:**

Name | Type |
------ | ------ |
`src` | Readable |

**Returns:** *this*

▸ **on**(`event`: "unpipe", `listener`: function): *this*

*Inherited from void*

*Overrides void*

Defined in /Users/sebastiangurin/git/accursed/node_modules/@types/node/stream.d.ts:172

**Parameters:**

▪ **event**: *"unpipe"*

▪ **listener**: *function*

▸ (`src`: Readable): *void*

**Parameters:**

Name | Type |
------ | ------ |
`src` | Readable |

**Returns:** *this*

▸ **on**(`event`: string | symbol, `listener`: function): *this*

*Inherited from void*

*Overrides void*

Defined in /Users/sebastiangurin/git/accursed/node_modules/@types/node/stream.d.ts:173

**Parameters:**

▪ **event**: *string | symbol*

▪ **listener**: *function*

▸ (...`args`: any[]): *void*

**Parameters:**

Name | Type |
------ | ------ |
`...args` | any[] |

**Returns:** *this*

___

###  once

▸ **once**(`event`: "close", `listener`: function): *this*

*Inherited from void*

*Overrides void*

Defined in /Users/sebastiangurin/git/accursed/node_modules/@types/node/stream.d.ts:175

**Parameters:**

▪ **event**: *"close"*

▪ **listener**: *function*

▸ (): *void*

**Returns:** *this*

▸ **once**(`event`: "drain", `listener`: function): *this*

*Inherited from void*

*Overrides void*

Defined in /Users/sebastiangurin/git/accursed/node_modules/@types/node/stream.d.ts:176

**Parameters:**

▪ **event**: *"drain"*

▪ **listener**: *function*

▸ (): *void*

**Returns:** *this*

▸ **once**(`event`: "error", `listener`: function): *this*

*Inherited from void*

*Overrides void*

Defined in /Users/sebastiangurin/git/accursed/node_modules/@types/node/stream.d.ts:177

**Parameters:**

▪ **event**: *"error"*

▪ **listener**: *function*

▸ (`err`: Error): *void*

**Parameters:**

Name | Type |
------ | ------ |
`err` | Error |

**Returns:** *this*

▸ **once**(`event`: "finish", `listener`: function): *this*

*Inherited from void*

*Overrides void*

Defined in /Users/sebastiangurin/git/accursed/node_modules/@types/node/stream.d.ts:178

**Parameters:**

▪ **event**: *"finish"*

▪ **listener**: *function*

▸ (): *void*

**Returns:** *this*

▸ **once**(`event`: "pipe", `listener`: function): *this*

*Inherited from void*

*Overrides void*

Defined in /Users/sebastiangurin/git/accursed/node_modules/@types/node/stream.d.ts:179

**Parameters:**

▪ **event**: *"pipe"*

▪ **listener**: *function*

▸ (`src`: Readable): *void*

**Parameters:**

Name | Type |
------ | ------ |
`src` | Readable |

**Returns:** *this*

▸ **once**(`event`: "unpipe", `listener`: function): *this*

*Inherited from void*

*Overrides void*

Defined in /Users/sebastiangurin/git/accursed/node_modules/@types/node/stream.d.ts:180

**Parameters:**

▪ **event**: *"unpipe"*

▪ **listener**: *function*

▸ (`src`: Readable): *void*

**Parameters:**

Name | Type |
------ | ------ |
`src` | Readable |

**Returns:** *this*

▸ **once**(`event`: string | symbol, `listener`: function): *this*

*Inherited from void*

*Overrides void*

Defined in /Users/sebastiangurin/git/accursed/node_modules/@types/node/stream.d.ts:181

**Parameters:**

▪ **event**: *string | symbol*

▪ **listener**: *function*

▸ (...`args`: any[]): *void*

**Parameters:**

Name | Type |
------ | ------ |
`...args` | any[] |

**Returns:** *this*

___

###  pipe

▸ **pipe**<**T**>(`destination`: T, `options?`: object): *T*

*Inherited from void*

Defined in /Users/sebastiangurin/git/accursed/node_modules/@types/node/stream.d.ts:5

**Type parameters:**

▪ **T**: *WritableStream*

**Parameters:**

▪ **destination**: *T*

▪`Optional`  **options**: *object*

Name | Type |
------ | ------ |
`end?` | boolean |

**Returns:** *T*

___

###  prependListener

▸ **prependListener**(`event`: "close", `listener`: function): *this*

*Inherited from void*

*Overrides void*

Defined in /Users/sebastiangurin/git/accursed/node_modules/@types/node/stream.d.ts:183

**Parameters:**

▪ **event**: *"close"*

▪ **listener**: *function*

▸ (): *void*

**Returns:** *this*

▸ **prependListener**(`event`: "drain", `listener`: function): *this*

*Inherited from void*

*Overrides void*

Defined in /Users/sebastiangurin/git/accursed/node_modules/@types/node/stream.d.ts:184

**Parameters:**

▪ **event**: *"drain"*

▪ **listener**: *function*

▸ (): *void*

**Returns:** *this*

▸ **prependListener**(`event`: "error", `listener`: function): *this*

*Inherited from void*

*Overrides void*

Defined in /Users/sebastiangurin/git/accursed/node_modules/@types/node/stream.d.ts:185

**Parameters:**

▪ **event**: *"error"*

▪ **listener**: *function*

▸ (`err`: Error): *void*

**Parameters:**

Name | Type |
------ | ------ |
`err` | Error |

**Returns:** *this*

▸ **prependListener**(`event`: "finish", `listener`: function): *this*

*Inherited from void*

*Overrides void*

Defined in /Users/sebastiangurin/git/accursed/node_modules/@types/node/stream.d.ts:186

**Parameters:**

▪ **event**: *"finish"*

▪ **listener**: *function*

▸ (): *void*

**Returns:** *this*

▸ **prependListener**(`event`: "pipe", `listener`: function): *this*

*Inherited from void*

*Overrides void*

Defined in /Users/sebastiangurin/git/accursed/node_modules/@types/node/stream.d.ts:187

**Parameters:**

▪ **event**: *"pipe"*

▪ **listener**: *function*

▸ (`src`: Readable): *void*

**Parameters:**

Name | Type |
------ | ------ |
`src` | Readable |

**Returns:** *this*

▸ **prependListener**(`event`: "unpipe", `listener`: function): *this*

*Inherited from void*

*Overrides void*

Defined in /Users/sebastiangurin/git/accursed/node_modules/@types/node/stream.d.ts:188

**Parameters:**

▪ **event**: *"unpipe"*

▪ **listener**: *function*

▸ (`src`: Readable): *void*

**Parameters:**

Name | Type |
------ | ------ |
`src` | Readable |

**Returns:** *this*

▸ **prependListener**(`event`: string | symbol, `listener`: function): *this*

*Inherited from void*

*Overrides void*

Defined in /Users/sebastiangurin/git/accursed/node_modules/@types/node/stream.d.ts:189

**Parameters:**

▪ **event**: *string | symbol*

▪ **listener**: *function*

▸ (...`args`: any[]): *void*

**Parameters:**

Name | Type |
------ | ------ |
`...args` | any[] |

**Returns:** *this*

___

###  prependOnceListener

▸ **prependOnceListener**(`event`: "close", `listener`: function): *this*

*Inherited from void*

*Overrides void*

Defined in /Users/sebastiangurin/git/accursed/node_modules/@types/node/stream.d.ts:191

**Parameters:**

▪ **event**: *"close"*

▪ **listener**: *function*

▸ (): *void*

**Returns:** *this*

▸ **prependOnceListener**(`event`: "drain", `listener`: function): *this*

*Inherited from void*

*Overrides void*

Defined in /Users/sebastiangurin/git/accursed/node_modules/@types/node/stream.d.ts:192

**Parameters:**

▪ **event**: *"drain"*

▪ **listener**: *function*

▸ (): *void*

**Returns:** *this*

▸ **prependOnceListener**(`event`: "error", `listener`: function): *this*

*Inherited from void*

*Overrides void*

Defined in /Users/sebastiangurin/git/accursed/node_modules/@types/node/stream.d.ts:193

**Parameters:**

▪ **event**: *"error"*

▪ **listener**: *function*

▸ (`err`: Error): *void*

**Parameters:**

Name | Type |
------ | ------ |
`err` | Error |

**Returns:** *this*

▸ **prependOnceListener**(`event`: "finish", `listener`: function): *this*

*Inherited from void*

*Overrides void*

Defined in /Users/sebastiangurin/git/accursed/node_modules/@types/node/stream.d.ts:194

**Parameters:**

▪ **event**: *"finish"*

▪ **listener**: *function*

▸ (): *void*

**Returns:** *this*

▸ **prependOnceListener**(`event`: "pipe", `listener`: function): *this*

*Inherited from void*

*Overrides void*

Defined in /Users/sebastiangurin/git/accursed/node_modules/@types/node/stream.d.ts:195

**Parameters:**

▪ **event**: *"pipe"*

▪ **listener**: *function*

▸ (`src`: Readable): *void*

**Parameters:**

Name | Type |
------ | ------ |
`src` | Readable |

**Returns:** *this*

▸ **prependOnceListener**(`event`: "unpipe", `listener`: function): *this*

*Inherited from void*

*Overrides void*

Defined in /Users/sebastiangurin/git/accursed/node_modules/@types/node/stream.d.ts:196

**Parameters:**

▪ **event**: *"unpipe"*

▪ **listener**: *function*

▸ (`src`: Readable): *void*

**Parameters:**

Name | Type |
------ | ------ |
`src` | Readable |

**Returns:** *this*

▸ **prependOnceListener**(`event`: string | symbol, `listener`: function): *this*

*Inherited from void*

*Overrides void*

Defined in /Users/sebastiangurin/git/accursed/node_modules/@types/node/stream.d.ts:197

**Parameters:**

▪ **event**: *string | symbol*

▪ **listener**: *function*

▸ (...`args`: any[]): *void*

**Parameters:**

Name | Type |
------ | ------ |
`...args` | any[] |

**Returns:** *this*

___

###  rawListeners

▸ **rawListeners**(`event`: string | symbol): *Function[]*

*Inherited from void*

*Overrides void*

Defined in /Users/sebastiangurin/git/accursed/node_modules/@types/node/events.d.ts:22

**Parameters:**

Name | Type |
------ | ------ |
`event` | string &#124; symbol |

**Returns:** *Function[]*

___

###  removeAllListeners

▸ **removeAllListeners**(`event?`: string | symbol): *this*

*Inherited from void*

*Overrides void*

Defined in /Users/sebastiangurin/git/accursed/node_modules/@types/node/events.d.ts:18

**Parameters:**

Name | Type |
------ | ------ |
`event?` | string &#124; symbol |

**Returns:** *this*

___

###  removeListener

▸ **removeListener**(`event`: "close", `listener`: function): *this*

*Inherited from void*

*Overrides void*

Defined in /Users/sebastiangurin/git/accursed/node_modules/@types/node/stream.d.ts:199

**Parameters:**

▪ **event**: *"close"*

▪ **listener**: *function*

▸ (): *void*

**Returns:** *this*

▸ **removeListener**(`event`: "drain", `listener`: function): *this*

*Inherited from void*

*Overrides void*

Defined in /Users/sebastiangurin/git/accursed/node_modules/@types/node/stream.d.ts:200

**Parameters:**

▪ **event**: *"drain"*

▪ **listener**: *function*

▸ (): *void*

**Returns:** *this*

▸ **removeListener**(`event`: "error", `listener`: function): *this*

*Inherited from void*

*Overrides void*

Defined in /Users/sebastiangurin/git/accursed/node_modules/@types/node/stream.d.ts:201

**Parameters:**

▪ **event**: *"error"*

▪ **listener**: *function*

▸ (`err`: Error): *void*

**Parameters:**

Name | Type |
------ | ------ |
`err` | Error |

**Returns:** *this*

▸ **removeListener**(`event`: "finish", `listener`: function): *this*

*Inherited from void*

*Overrides void*

Defined in /Users/sebastiangurin/git/accursed/node_modules/@types/node/stream.d.ts:202

**Parameters:**

▪ **event**: *"finish"*

▪ **listener**: *function*

▸ (): *void*

**Returns:** *this*

▸ **removeListener**(`event`: "pipe", `listener`: function): *this*

*Inherited from void*

*Overrides void*

Defined in /Users/sebastiangurin/git/accursed/node_modules/@types/node/stream.d.ts:203

**Parameters:**

▪ **event**: *"pipe"*

▪ **listener**: *function*

▸ (`src`: Readable): *void*

**Parameters:**

Name | Type |
------ | ------ |
`src` | Readable |

**Returns:** *this*

▸ **removeListener**(`event`: "unpipe", `listener`: function): *this*

*Inherited from void*

*Overrides void*

Defined in /Users/sebastiangurin/git/accursed/node_modules/@types/node/stream.d.ts:204

**Parameters:**

▪ **event**: *"unpipe"*

▪ **listener**: *function*

▸ (`src`: Readable): *void*

**Parameters:**

Name | Type |
------ | ------ |
`src` | Readable |

**Returns:** *this*

▸ **removeListener**(`event`: string | symbol, `listener`: function): *this*

*Inherited from void*

*Overrides void*

Defined in /Users/sebastiangurin/git/accursed/node_modules/@types/node/stream.d.ts:205

**Parameters:**

▪ **event**: *string | symbol*

▪ **listener**: *function*

▸ (...`args`: any[]): *void*

**Parameters:**

Name | Type |
------ | ------ |
`...args` | any[] |

**Returns:** *this*

___

###  setDefaultEncoding

▸ **setDefaultEncoding**(`encoding`: string): *this*

*Inherited from void*

Defined in /Users/sebastiangurin/git/accursed/node_modules/@types/node/stream.d.ts:133

**Parameters:**

Name | Type |
------ | ------ |
`encoding` | string |

**Returns:** *this*

___

###  setMaxListeners

▸ **setMaxListeners**(`n`: number): *this*

*Inherited from void*

*Overrides void*

Defined in /Users/sebastiangurin/git/accursed/node_modules/@types/node/events.d.ts:19

**Parameters:**

Name | Type |
------ | ------ |
`n` | number |

**Returns:** *this*

___

###  uncork

▸ **uncork**(): *void*

*Inherited from void*

Defined in /Users/sebastiangurin/git/accursed/node_modules/@types/node/stream.d.ts:138

**Returns:** *void*

___

###  write

▸ **write**(`chunk`: any, `cb?`: function): *boolean*

*Inherited from void*

Defined in /Users/sebastiangurin/git/accursed/node_modules/@types/node/stream.d.ts:131

**Parameters:**

▪ **chunk**: *any*

▪`Optional`  **cb**: *function*

▸ (`error`: Error | null | undefined): *void*

**Parameters:**

Name | Type |
------ | ------ |
`error` | Error &#124; null &#124; undefined |

**Returns:** *boolean*

▸ **write**(`chunk`: any, `encoding`: string, `cb?`: function): *boolean*

*Inherited from void*

Defined in /Users/sebastiangurin/git/accursed/node_modules/@types/node/stream.d.ts:132

**Parameters:**

▪ **chunk**: *any*

▪ **encoding**: *string*

▪`Optional`  **cb**: *function*

▸ (`error`: Error | null | undefined): *void*

**Parameters:**

Name | Type |
------ | ------ |
`error` | Error &#124; null &#124; undefined |

**Returns:** *boolean*

___

### `Static` listenerCount

▸ **listenerCount**(`emitter`: EventEmitter, `event`: string | symbol): *number*

*Inherited from void*

Defined in /Users/sebastiangurin/git/accursed/node_modules/@types/node/events.d.ts:8

**`deprecated`** since v4.0.0

**Parameters:**

Name | Type |
------ | ------ |
`emitter` | EventEmitter |
`event` | string &#124; symbol |

**Returns:** *number*
