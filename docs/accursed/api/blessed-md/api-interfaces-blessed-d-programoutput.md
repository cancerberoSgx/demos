---
id: api-interfaces-blessed-d-programoutput
title: ProgramOutput
sidebar_label: ProgramOutput
---

[blessed](api-readme.md) > [[blessed.d Module]](api-modules-blessed-d-module.md) > [ProgramOutput](api-interfaces-blessed-d-programoutput.md)

## Interface

program.output Writable implementation should implement this interface

## Hierarchy

 `Writable`

**↳ ProgramOutput**

## Implements

* `WritableStream`

### Constructors

* [constructor](api-interfaces-blessed-d-programoutput.md#constructor)

### Properties

* [column](api-interfaces-blessed-d-programoutput.md#column)
* [isTTY](api-interfaces-blessed-d-programoutput.md#istty)
* [rows](api-interfaces-blessed-d-programoutput.md#rows)
* [writable](api-interfaces-blessed-d-programoutput.md#writable)
* [writableHighWaterMark](api-interfaces-blessed-d-programoutput.md#writablehighwatermark)
* [writableLength](api-interfaces-blessed-d-programoutput.md#writablelength)
* [defaultMaxListeners](api-interfaces-blessed-d-programoutput.md#defaultmaxlisteners)

### Methods

* [_destroy](api-interfaces-blessed-d-programoutput.md#_destroy)
* [_final](api-interfaces-blessed-d-programoutput.md#_final)
* [_write](api-interfaces-blessed-d-programoutput.md#_write)
* [_writev](api-interfaces-blessed-d-programoutput.md#_writev)
* [addListener](api-interfaces-blessed-d-programoutput.md#addlistener)
* [cork](api-interfaces-blessed-d-programoutput.md#cork)
* [destroy](api-interfaces-blessed-d-programoutput.md#destroy)
* [emit](api-interfaces-blessed-d-programoutput.md#emit)
* [end](api-interfaces-blessed-d-programoutput.md#end)
* [eventNames](api-interfaces-blessed-d-programoutput.md#eventnames)
* [getMaxListeners](api-interfaces-blessed-d-programoutput.md#getmaxlisteners)
* [listenerCount](api-interfaces-blessed-d-programoutput.md#listenercount)
* [listeners](api-interfaces-blessed-d-programoutput.md#listeners)
* [off](api-interfaces-blessed-d-programoutput.md#off)
* [on](api-interfaces-blessed-d-programoutput.md#on)
* [once](api-interfaces-blessed-d-programoutput.md#once)
* [pipe](api-interfaces-blessed-d-programoutput.md#pipe)
* [prependListener](api-interfaces-blessed-d-programoutput.md#prependlistener)
* [prependOnceListener](api-interfaces-blessed-d-programoutput.md#prependoncelistener)
* [rawListeners](api-interfaces-blessed-d-programoutput.md#rawlisteners)
* [removeAllListeners](api-interfaces-blessed-d-programoutput.md#removealllisteners)
* [removeListener](api-interfaces-blessed-d-programoutput.md#removelistener)
* [setDefaultEncoding](api-interfaces-blessed-d-programoutput.md#setdefaultencoding)
* [setMaxListeners](api-interfaces-blessed-d-programoutput.md#setmaxlisteners)
* [uncork](api-interfaces-blessed-d-programoutput.md#uncork)
* [write](api-interfaces-blessed-d-programoutput.md#write)
* [listenerCount](api-interfaces-blessed-d-programoutput.md#listenercount-1)

---

## Constructors

<a id="constructor"></a>

###  constructor

⊕ **new ProgramOutput**(opts?: *`WritableOptions`*): [ProgramOutput](api-interfaces-blessed-d-programoutput.md)

*Inherited from Writable.__constructor*

*Defined in /Users/sebastiangurin/git/accursed/node_modules/@types/node/stream.d.ts:115*

**Parameters:**

| Name | Type |
| ------ | ------ |
| `Optional` opts | `WritableOptions` |

**Returns:** [ProgramOutput](api-interfaces-blessed-d-programoutput.md)

___

## Properties

<a id="column"></a>

###  column

**● column**: *`number`*

*Defined in [blessed.d.ts:47](https://github.com/cancerberoSgx/accursed/blob/f66c8ce/src/declarations/blessed.d.ts#L47)*

___
<a id="istty"></a>

### `<Optional>` isTTY

**● isTTY**: *`boolean`*

*Defined in [blessed.d.ts:46](https://github.com/cancerberoSgx/accursed/blob/f66c8ce/src/declarations/blessed.d.ts#L46)*

___
<a id="rows"></a>

###  rows

**● rows**: *`number`*

*Defined in [blessed.d.ts:48](https://github.com/cancerberoSgx/accursed/blob/f66c8ce/src/declarations/blessed.d.ts#L48)*

___
<a id="writable"></a>

###  writable

**● writable**: *`boolean`*

*Inherited from Writable.writable*

*Defined in /Users/sebastiangurin/git/accursed/node_modules/@types/node/stream.d.ts:113*

___
<a id="writablehighwatermark"></a>

###  writableHighWaterMark

**● writableHighWaterMark**: *`number`*

*Inherited from Writable.writableHighWaterMark*

*Defined in /Users/sebastiangurin/git/accursed/node_modules/@types/node/stream.d.ts:114*

___
<a id="writablelength"></a>

###  writableLength

**● writableLength**: *`number`*

*Inherited from Writable.writableLength*

*Defined in /Users/sebastiangurin/git/accursed/node_modules/@types/node/stream.d.ts:115*

___
<a id="defaultmaxlisteners"></a>

### `<Static>` defaultMaxListeners

**● defaultMaxListeners**: *`number`*

*Inherited from EventEmitter.defaultMaxListeners*

*Defined in /Users/sebastiangurin/git/accursed/node_modules/@types/node/events.d.ts:9*

___

## Methods

<a id="_destroy"></a>

###  _destroy

▸ **_destroy**(error: *`Error` \| `null`*, callback: *`function`*): `void`

*Inherited from Writable._destroy*

*Defined in /Users/sebastiangurin/git/accursed/node_modules/@types/node/stream.d.ts:119*

**Parameters:**

| Name | Type |
| ------ | ------ |
| error | `Error` \| `null` |
| callback | `function` |

**Returns:** `void`

___
<a id="_final"></a>

###  _final

▸ **_final**(callback: *`function`*): `void`

*Inherited from Writable._final*

*Defined in /Users/sebastiangurin/git/accursed/node_modules/@types/node/stream.d.ts:120*

**Parameters:**

| Name | Type |
| ------ | ------ |
| callback | `function` |

**Returns:** `void`

___
<a id="_write"></a>

###  _write

▸ **_write**(chunk: *`any`*, encoding: *`string`*, callback: *`function`*): `void`

*Inherited from Writable._write*

*Defined in /Users/sebastiangurin/git/accursed/node_modules/@types/node/stream.d.ts:117*

**Parameters:**

| Name | Type |
| ------ | ------ |
| chunk | `any` |
| encoding | `string` |
| callback | `function` |

**Returns:** `void`

___
<a id="_writev"></a>

### `<Optional>` _writev

▸ **_writev**(chunks: *`Array`<`object`>*, callback: *`function`*): `void`

*Inherited from Writable._writev*

*Defined in /Users/sebastiangurin/git/accursed/node_modules/@types/node/stream.d.ts:118*

**Parameters:**

| Name | Type |
| ------ | ------ |
| chunks | `Array`<`object`> |
| callback | `function` |

**Returns:** `void`

___
<a id="addlistener"></a>

###  addListener

▸ **addListener**(event: *"close"*, listener: *`function`*): `this`

▸ **addListener**(event: *"drain"*, listener: *`function`*): `this`

▸ **addListener**(event: *"error"*, listener: *`function`*): `this`

▸ **addListener**(event: *"finish"*, listener: *`function`*): `this`

▸ **addListener**(event: *"pipe"*, listener: *`function`*): `this`

▸ **addListener**(event: *"unpipe"*, listener: *`function`*): `this`

▸ **addListener**(event: *`string` \| `symbol`*, listener: *`function`*): `this`

*Inherited from Writable.addListener*

*Overrides EventEmitter.addListener*

*Defined in /Users/sebastiangurin/git/accursed/node_modules/@types/node/stream.d.ts:141*

Event emitter The defined events on documents including:

1.  close
2.  drain
3.  error
4.  finish
5.  pipe
6.  unpipe

**Parameters:**

| Name | Type |
| ------ | ------ |
| event | "close" |
| listener | `function` |

**Returns:** `this`

*Inherited from Writable.addListener*

*Overrides EventEmitter.addListener*

*Defined in /Users/sebastiangurin/git/accursed/node_modules/@types/node/stream.d.ts:142*

**Parameters:**

| Name | Type |
| ------ | ------ |
| event | "drain" |
| listener | `function` |

**Returns:** `this`

*Inherited from Writable.addListener*

*Overrides EventEmitter.addListener*

*Defined in /Users/sebastiangurin/git/accursed/node_modules/@types/node/stream.d.ts:143*

**Parameters:**

| Name | Type |
| ------ | ------ |
| event | "error" |
| listener | `function` |

**Returns:** `this`

*Inherited from Writable.addListener*

*Overrides EventEmitter.addListener*

*Defined in /Users/sebastiangurin/git/accursed/node_modules/@types/node/stream.d.ts:144*

**Parameters:**

| Name | Type |
| ------ | ------ |
| event | "finish" |
| listener | `function` |

**Returns:** `this`

*Inherited from Writable.addListener*

*Overrides EventEmitter.addListener*

*Defined in /Users/sebastiangurin/git/accursed/node_modules/@types/node/stream.d.ts:145*

**Parameters:**

| Name | Type |
| ------ | ------ |
| event | "pipe" |
| listener | `function` |

**Returns:** `this`

*Inherited from Writable.addListener*

*Overrides EventEmitter.addListener*

*Defined in /Users/sebastiangurin/git/accursed/node_modules/@types/node/stream.d.ts:146*

**Parameters:**

| Name | Type |
| ------ | ------ |
| event | "unpipe" |
| listener | `function` |

**Returns:** `this`

*Inherited from Writable.addListener*

*Overrides EventEmitter.addListener*

*Defined in /Users/sebastiangurin/git/accursed/node_modules/@types/node/stream.d.ts:147*

**Parameters:**

| Name | Type |
| ------ | ------ |
| event | `string` \| `symbol` |
| listener | `function` |

**Returns:** `this`

___
<a id="cork"></a>

###  cork

▸ **cork**(): `void`

*Inherited from Writable.cork*

*Defined in /Users/sebastiangurin/git/accursed/node_modules/@types/node/stream.d.ts:127*

**Returns:** `void`

___
<a id="destroy"></a>

###  destroy

▸ **destroy**(error?: *`Error`*): `void`

*Inherited from Writable.destroy*

*Defined in /Users/sebastiangurin/git/accursed/node_modules/@types/node/stream.d.ts:129*

**Parameters:**

| Name | Type |
| ------ | ------ |
| `Optional` error | `Error` |

**Returns:** `void`

___
<a id="emit"></a>

###  emit

▸ **emit**(event: *"close"*): `boolean`

▸ **emit**(event: *"drain"*): `boolean`

▸ **emit**(event: *"error"*, err: *`Error`*): `boolean`

▸ **emit**(event: *"finish"*): `boolean`

▸ **emit**(event: *"pipe"*, src: *`Readable`*): `boolean`

▸ **emit**(event: *"unpipe"*, src: *`Readable`*): `boolean`

▸ **emit**(event: *`string` \| `symbol`*, ...args: *`any`[]*): `boolean`

*Inherited from Writable.emit*

*Overrides EventEmitter.emit*

*Defined in /Users/sebastiangurin/git/accursed/node_modules/@types/node/stream.d.ts:149*

**Parameters:**

| Name | Type |
| ------ | ------ |
| event | "close" |

**Returns:** `boolean`

*Inherited from Writable.emit*

*Overrides EventEmitter.emit*

*Defined in /Users/sebastiangurin/git/accursed/node_modules/@types/node/stream.d.ts:150*

**Parameters:**

| Name | Type |
| ------ | ------ |
| event | "drain" |

**Returns:** `boolean`

*Inherited from Writable.emit*

*Overrides EventEmitter.emit*

*Defined in /Users/sebastiangurin/git/accursed/node_modules/@types/node/stream.d.ts:151*

**Parameters:**

| Name | Type |
| ------ | ------ |
| event | "error" |
| err | `Error` |

**Returns:** `boolean`

*Inherited from Writable.emit*

*Overrides EventEmitter.emit*

*Defined in /Users/sebastiangurin/git/accursed/node_modules/@types/node/stream.d.ts:152*

**Parameters:**

| Name | Type |
| ------ | ------ |
| event | "finish" |

**Returns:** `boolean`

*Inherited from Writable.emit*

*Overrides EventEmitter.emit*

*Defined in /Users/sebastiangurin/git/accursed/node_modules/@types/node/stream.d.ts:153*

**Parameters:**

| Name | Type |
| ------ | ------ |
| event | "pipe" |
| src | `Readable` |

**Returns:** `boolean`

*Inherited from Writable.emit*

*Overrides EventEmitter.emit*

*Defined in /Users/sebastiangurin/git/accursed/node_modules/@types/node/stream.d.ts:154*

**Parameters:**

| Name | Type |
| ------ | ------ |
| event | "unpipe" |
| src | `Readable` |

**Returns:** `boolean`

*Inherited from Writable.emit*

*Overrides EventEmitter.emit*

*Defined in /Users/sebastiangurin/git/accursed/node_modules/@types/node/stream.d.ts:155*

**Parameters:**

| Name | Type |
| ------ | ------ |
| event | `string` \| `symbol` |
| `Rest` args | `any`[] |

**Returns:** `boolean`

___
<a id="end"></a>

###  end

▸ **end**(cb?: *`function`*): `void`

▸ **end**(chunk: *`any`*, cb?: *`function`*): `void`

▸ **end**(chunk: *`any`*, encoding: *`string`*, cb?: *`function`*): `void`

*Inherited from Writable.end*

*Defined in /Users/sebastiangurin/git/accursed/node_modules/@types/node/stream.d.ts:124*

**Parameters:**

| Name | Type |
| ------ | ------ |
| `Optional` cb | `function` |

**Returns:** `void`

*Inherited from Writable.end*

*Defined in /Users/sebastiangurin/git/accursed/node_modules/@types/node/stream.d.ts:125*

**Parameters:**

| Name | Type |
| ------ | ------ |
| chunk | `any` |
| `Optional` cb | `function` |

**Returns:** `void`

*Inherited from Writable.end*

*Defined in /Users/sebastiangurin/git/accursed/node_modules/@types/node/stream.d.ts:126*

**Parameters:**

| Name | Type |
| ------ | ------ |
| chunk | `any` |
| encoding | `string` |
| `Optional` cb | `function` |

**Returns:** `void`

___
<a id="eventnames"></a>

###  eventNames

▸ **eventNames**(): `Array`<`string` \| `symbol`>

*Inherited from EventEmitter.eventNames*

*Overrides EventEmitter.eventNames*

*Defined in /Users/sebastiangurin/git/accursed/node_modules/@types/node/events.d.ts:24*

**Returns:** `Array`<`string` \| `symbol`>

___
<a id="getmaxlisteners"></a>

###  getMaxListeners

▸ **getMaxListeners**(): `number`

*Inherited from EventEmitter.getMaxListeners*

*Overrides EventEmitter.getMaxListeners*

*Defined in /Users/sebastiangurin/git/accursed/node_modules/@types/node/events.d.ts:20*

**Returns:** `number`

___
<a id="listenercount"></a>

###  listenerCount

▸ **listenerCount**(type: *`string` \| `symbol`*): `number`

*Inherited from EventEmitter.listenerCount*

*Overrides EventEmitter.listenerCount*

*Defined in /Users/sebastiangurin/git/accursed/node_modules/@types/node/events.d.ts:25*

**Parameters:**

| Name | Type |
| ------ | ------ |
| type | `string` \| `symbol` |

**Returns:** `number`

___
<a id="listeners"></a>

###  listeners

▸ **listeners**(event: *`string` \| `symbol`*): `Function`[]

*Inherited from EventEmitter.listeners*

*Overrides EventEmitter.listeners*

*Defined in /Users/sebastiangurin/git/accursed/node_modules/@types/node/events.d.ts:21*

**Parameters:**

| Name | Type |
| ------ | ------ |
| event | `string` \| `symbol` |

**Returns:** `Function`[]

___
<a id="off"></a>

###  off

▸ **off**(event: *`string` \| `symbol`*, listener: *`function`*): `this`

*Inherited from EventEmitter.off*

*Overrides EventEmitter.off*

*Defined in /Users/sebastiangurin/git/accursed/node_modules/@types/node/events.d.ts:17*

**Parameters:**

| Name | Type |
| ------ | ------ |
| event | `string` \| `symbol` |
| listener | `function` |

**Returns:** `this`

___
<a id="on"></a>

###  on

▸ **on**(event: *"close"*, listener: *`function`*): `this`

▸ **on**(event: *"drain"*, listener: *`function`*): `this`

▸ **on**(event: *"error"*, listener: *`function`*): `this`

▸ **on**(event: *"finish"*, listener: *`function`*): `this`

▸ **on**(event: *"pipe"*, listener: *`function`*): `this`

▸ **on**(event: *"unpipe"*, listener: *`function`*): `this`

▸ **on**(event: *`string` \| `symbol`*, listener: *`function`*): `this`

*Inherited from Writable.on*

*Overrides EventEmitter.on*

*Defined in /Users/sebastiangurin/git/accursed/node_modules/@types/node/stream.d.ts:157*

**Parameters:**

| Name | Type |
| ------ | ------ |
| event | "close" |
| listener | `function` |

**Returns:** `this`

*Inherited from Writable.on*

*Overrides EventEmitter.on*

*Defined in /Users/sebastiangurin/git/accursed/node_modules/@types/node/stream.d.ts:158*

**Parameters:**

| Name | Type |
| ------ | ------ |
| event | "drain" |
| listener | `function` |

**Returns:** `this`

*Inherited from Writable.on*

*Overrides EventEmitter.on*

*Defined in /Users/sebastiangurin/git/accursed/node_modules/@types/node/stream.d.ts:159*

**Parameters:**

| Name | Type |
| ------ | ------ |
| event | "error" |
| listener | `function` |

**Returns:** `this`

*Inherited from Writable.on*

*Overrides EventEmitter.on*

*Defined in /Users/sebastiangurin/git/accursed/node_modules/@types/node/stream.d.ts:160*

**Parameters:**

| Name | Type |
| ------ | ------ |
| event | "finish" |
| listener | `function` |

**Returns:** `this`

*Inherited from Writable.on*

*Overrides EventEmitter.on*

*Defined in /Users/sebastiangurin/git/accursed/node_modules/@types/node/stream.d.ts:161*

**Parameters:**

| Name | Type |
| ------ | ------ |
| event | "pipe" |
| listener | `function` |

**Returns:** `this`

*Inherited from Writable.on*

*Overrides EventEmitter.on*

*Defined in /Users/sebastiangurin/git/accursed/node_modules/@types/node/stream.d.ts:162*

**Parameters:**

| Name | Type |
| ------ | ------ |
| event | "unpipe" |
| listener | `function` |

**Returns:** `this`

*Inherited from Writable.on*

*Overrides EventEmitter.on*

*Defined in /Users/sebastiangurin/git/accursed/node_modules/@types/node/stream.d.ts:163*

**Parameters:**

| Name | Type |
| ------ | ------ |
| event | `string` \| `symbol` |
| listener | `function` |

**Returns:** `this`

___
<a id="once"></a>

###  once

▸ **once**(event: *"close"*, listener: *`function`*): `this`

▸ **once**(event: *"drain"*, listener: *`function`*): `this`

▸ **once**(event: *"error"*, listener: *`function`*): `this`

▸ **once**(event: *"finish"*, listener: *`function`*): `this`

▸ **once**(event: *"pipe"*, listener: *`function`*): `this`

▸ **once**(event: *"unpipe"*, listener: *`function`*): `this`

▸ **once**(event: *`string` \| `symbol`*, listener: *`function`*): `this`

*Inherited from Writable.once*

*Overrides EventEmitter.once*

*Defined in /Users/sebastiangurin/git/accursed/node_modules/@types/node/stream.d.ts:165*

**Parameters:**

| Name | Type |
| ------ | ------ |
| event | "close" |
| listener | `function` |

**Returns:** `this`

*Inherited from Writable.once*

*Overrides EventEmitter.once*

*Defined in /Users/sebastiangurin/git/accursed/node_modules/@types/node/stream.d.ts:166*

**Parameters:**

| Name | Type |
| ------ | ------ |
| event | "drain" |
| listener | `function` |

**Returns:** `this`

*Inherited from Writable.once*

*Overrides EventEmitter.once*

*Defined in /Users/sebastiangurin/git/accursed/node_modules/@types/node/stream.d.ts:167*

**Parameters:**

| Name | Type |
| ------ | ------ |
| event | "error" |
| listener | `function` |

**Returns:** `this`

*Inherited from Writable.once*

*Overrides EventEmitter.once*

*Defined in /Users/sebastiangurin/git/accursed/node_modules/@types/node/stream.d.ts:168*

**Parameters:**

| Name | Type |
| ------ | ------ |
| event | "finish" |
| listener | `function` |

**Returns:** `this`

*Inherited from Writable.once*

*Overrides EventEmitter.once*

*Defined in /Users/sebastiangurin/git/accursed/node_modules/@types/node/stream.d.ts:169*

**Parameters:**

| Name | Type |
| ------ | ------ |
| event | "pipe" |
| listener | `function` |

**Returns:** `this`

*Inherited from Writable.once*

*Overrides EventEmitter.once*

*Defined in /Users/sebastiangurin/git/accursed/node_modules/@types/node/stream.d.ts:170*

**Parameters:**

| Name | Type |
| ------ | ------ |
| event | "unpipe" |
| listener | `function` |

**Returns:** `this`

*Inherited from Writable.once*

*Overrides EventEmitter.once*

*Defined in /Users/sebastiangurin/git/accursed/node_modules/@types/node/stream.d.ts:171*

**Parameters:**

| Name | Type |
| ------ | ------ |
| event | `string` \| `symbol` |
| listener | `function` |

**Returns:** `this`

___
<a id="pipe"></a>

###  pipe

▸ **pipe**<`T`>(destination: *`T`*, options?: *`object`*): `T`

*Inherited from internal.pipe*

*Defined in /Users/sebastiangurin/git/accursed/node_modules/@types/node/stream.d.ts:5*

**Type parameters:**

#### T :  `WritableStream`
**Parameters:**

**destination: `T`**

**`Optional` options: `object`**

| Name | Type |
| ------ | ------ |
| `Optional` end | `boolean` |

**Returns:** `T`

___
<a id="prependlistener"></a>

###  prependListener

▸ **prependListener**(event: *"close"*, listener: *`function`*): `this`

▸ **prependListener**(event: *"drain"*, listener: *`function`*): `this`

▸ **prependListener**(event: *"error"*, listener: *`function`*): `this`

▸ **prependListener**(event: *"finish"*, listener: *`function`*): `this`

▸ **prependListener**(event: *"pipe"*, listener: *`function`*): `this`

▸ **prependListener**(event: *"unpipe"*, listener: *`function`*): `this`

▸ **prependListener**(event: *`string` \| `symbol`*, listener: *`function`*): `this`

*Inherited from Writable.prependListener*

*Overrides EventEmitter.prependListener*

*Defined in /Users/sebastiangurin/git/accursed/node_modules/@types/node/stream.d.ts:173*

**Parameters:**

| Name | Type |
| ------ | ------ |
| event | "close" |
| listener | `function` |

**Returns:** `this`

*Inherited from Writable.prependListener*

*Overrides EventEmitter.prependListener*

*Defined in /Users/sebastiangurin/git/accursed/node_modules/@types/node/stream.d.ts:174*

**Parameters:**

| Name | Type |
| ------ | ------ |
| event | "drain" |
| listener | `function` |

**Returns:** `this`

*Inherited from Writable.prependListener*

*Overrides EventEmitter.prependListener*

*Defined in /Users/sebastiangurin/git/accursed/node_modules/@types/node/stream.d.ts:175*

**Parameters:**

| Name | Type |
| ------ | ------ |
| event | "error" |
| listener | `function` |

**Returns:** `this`

*Inherited from Writable.prependListener*

*Overrides EventEmitter.prependListener*

*Defined in /Users/sebastiangurin/git/accursed/node_modules/@types/node/stream.d.ts:176*

**Parameters:**

| Name | Type |
| ------ | ------ |
| event | "finish" |
| listener | `function` |

**Returns:** `this`

*Inherited from Writable.prependListener*

*Overrides EventEmitter.prependListener*

*Defined in /Users/sebastiangurin/git/accursed/node_modules/@types/node/stream.d.ts:177*

**Parameters:**

| Name | Type |
| ------ | ------ |
| event | "pipe" |
| listener | `function` |

**Returns:** `this`

*Inherited from Writable.prependListener*

*Overrides EventEmitter.prependListener*

*Defined in /Users/sebastiangurin/git/accursed/node_modules/@types/node/stream.d.ts:178*

**Parameters:**

| Name | Type |
| ------ | ------ |
| event | "unpipe" |
| listener | `function` |

**Returns:** `this`

*Inherited from Writable.prependListener*

*Overrides EventEmitter.prependListener*

*Defined in /Users/sebastiangurin/git/accursed/node_modules/@types/node/stream.d.ts:179*

**Parameters:**

| Name | Type |
| ------ | ------ |
| event | `string` \| `symbol` |
| listener | `function` |

**Returns:** `this`

___
<a id="prependoncelistener"></a>

###  prependOnceListener

▸ **prependOnceListener**(event: *"close"*, listener: *`function`*): `this`

▸ **prependOnceListener**(event: *"drain"*, listener: *`function`*): `this`

▸ **prependOnceListener**(event: *"error"*, listener: *`function`*): `this`

▸ **prependOnceListener**(event: *"finish"*, listener: *`function`*): `this`

▸ **prependOnceListener**(event: *"pipe"*, listener: *`function`*): `this`

▸ **prependOnceListener**(event: *"unpipe"*, listener: *`function`*): `this`

▸ **prependOnceListener**(event: *`string` \| `symbol`*, listener: *`function`*): `this`

*Inherited from Writable.prependOnceListener*

*Overrides EventEmitter.prependOnceListener*

*Defined in /Users/sebastiangurin/git/accursed/node_modules/@types/node/stream.d.ts:181*

**Parameters:**

| Name | Type |
| ------ | ------ |
| event | "close" |
| listener | `function` |

**Returns:** `this`

*Inherited from Writable.prependOnceListener*

*Overrides EventEmitter.prependOnceListener*

*Defined in /Users/sebastiangurin/git/accursed/node_modules/@types/node/stream.d.ts:182*

**Parameters:**

| Name | Type |
| ------ | ------ |
| event | "drain" |
| listener | `function` |

**Returns:** `this`

*Inherited from Writable.prependOnceListener*

*Overrides EventEmitter.prependOnceListener*

*Defined in /Users/sebastiangurin/git/accursed/node_modules/@types/node/stream.d.ts:183*

**Parameters:**

| Name | Type |
| ------ | ------ |
| event | "error" |
| listener | `function` |

**Returns:** `this`

*Inherited from Writable.prependOnceListener*

*Overrides EventEmitter.prependOnceListener*

*Defined in /Users/sebastiangurin/git/accursed/node_modules/@types/node/stream.d.ts:184*

**Parameters:**

| Name | Type |
| ------ | ------ |
| event | "finish" |
| listener | `function` |

**Returns:** `this`

*Inherited from Writable.prependOnceListener*

*Overrides EventEmitter.prependOnceListener*

*Defined in /Users/sebastiangurin/git/accursed/node_modules/@types/node/stream.d.ts:185*

**Parameters:**

| Name | Type |
| ------ | ------ |
| event | "pipe" |
| listener | `function` |

**Returns:** `this`

*Inherited from Writable.prependOnceListener*

*Overrides EventEmitter.prependOnceListener*

*Defined in /Users/sebastiangurin/git/accursed/node_modules/@types/node/stream.d.ts:186*

**Parameters:**

| Name | Type |
| ------ | ------ |
| event | "unpipe" |
| listener | `function` |

**Returns:** `this`

*Inherited from Writable.prependOnceListener*

*Overrides EventEmitter.prependOnceListener*

*Defined in /Users/sebastiangurin/git/accursed/node_modules/@types/node/stream.d.ts:187*

**Parameters:**

| Name | Type |
| ------ | ------ |
| event | `string` \| `symbol` |
| listener | `function` |

**Returns:** `this`

___
<a id="rawlisteners"></a>

###  rawListeners

▸ **rawListeners**(event: *`string` \| `symbol`*): `Function`[]

*Inherited from EventEmitter.rawListeners*

*Overrides EventEmitter.rawListeners*

*Defined in /Users/sebastiangurin/git/accursed/node_modules/@types/node/events.d.ts:22*

**Parameters:**

| Name | Type |
| ------ | ------ |
| event | `string` \| `symbol` |

**Returns:** `Function`[]

___
<a id="removealllisteners"></a>

###  removeAllListeners

▸ **removeAllListeners**(event?: *`string` \| `symbol`*): `this`

*Inherited from EventEmitter.removeAllListeners*

*Overrides EventEmitter.removeAllListeners*

*Defined in /Users/sebastiangurin/git/accursed/node_modules/@types/node/events.d.ts:18*

**Parameters:**

| Name | Type |
| ------ | ------ |
| `Optional` event | `string` \| `symbol` |

**Returns:** `this`

___
<a id="removelistener"></a>

###  removeListener

▸ **removeListener**(event: *"close"*, listener: *`function`*): `this`

▸ **removeListener**(event: *"drain"*, listener: *`function`*): `this`

▸ **removeListener**(event: *"error"*, listener: *`function`*): `this`

▸ **removeListener**(event: *"finish"*, listener: *`function`*): `this`

▸ **removeListener**(event: *"pipe"*, listener: *`function`*): `this`

▸ **removeListener**(event: *"unpipe"*, listener: *`function`*): `this`

▸ **removeListener**(event: *`string` \| `symbol`*, listener: *`function`*): `this`

*Inherited from Writable.removeListener*

*Overrides EventEmitter.removeListener*

*Defined in /Users/sebastiangurin/git/accursed/node_modules/@types/node/stream.d.ts:189*

**Parameters:**

| Name | Type |
| ------ | ------ |
| event | "close" |
| listener | `function` |

**Returns:** `this`

*Inherited from Writable.removeListener*

*Overrides EventEmitter.removeListener*

*Defined in /Users/sebastiangurin/git/accursed/node_modules/@types/node/stream.d.ts:190*

**Parameters:**

| Name | Type |
| ------ | ------ |
| event | "drain" |
| listener | `function` |

**Returns:** `this`

*Inherited from Writable.removeListener*

*Overrides EventEmitter.removeListener*

*Defined in /Users/sebastiangurin/git/accursed/node_modules/@types/node/stream.d.ts:191*

**Parameters:**

| Name | Type |
| ------ | ------ |
| event | "error" |
| listener | `function` |

**Returns:** `this`

*Inherited from Writable.removeListener*

*Overrides EventEmitter.removeListener*

*Defined in /Users/sebastiangurin/git/accursed/node_modules/@types/node/stream.d.ts:192*

**Parameters:**

| Name | Type |
| ------ | ------ |
| event | "finish" |
| listener | `function` |

**Returns:** `this`

*Inherited from Writable.removeListener*

*Overrides EventEmitter.removeListener*

*Defined in /Users/sebastiangurin/git/accursed/node_modules/@types/node/stream.d.ts:193*

**Parameters:**

| Name | Type |
| ------ | ------ |
| event | "pipe" |
| listener | `function` |

**Returns:** `this`

*Inherited from Writable.removeListener*

*Overrides EventEmitter.removeListener*

*Defined in /Users/sebastiangurin/git/accursed/node_modules/@types/node/stream.d.ts:194*

**Parameters:**

| Name | Type |
| ------ | ------ |
| event | "unpipe" |
| listener | `function` |

**Returns:** `this`

*Inherited from Writable.removeListener*

*Overrides EventEmitter.removeListener*

*Defined in /Users/sebastiangurin/git/accursed/node_modules/@types/node/stream.d.ts:195*

**Parameters:**

| Name | Type |
| ------ | ------ |
| event | `string` \| `symbol` |
| listener | `function` |

**Returns:** `this`

___
<a id="setdefaultencoding"></a>

###  setDefaultEncoding

▸ **setDefaultEncoding**(encoding: *`string`*): `this`

*Inherited from Writable.setDefaultEncoding*

*Defined in /Users/sebastiangurin/git/accursed/node_modules/@types/node/stream.d.ts:123*

**Parameters:**

| Name | Type |
| ------ | ------ |
| encoding | `string` |

**Returns:** `this`

___
<a id="setmaxlisteners"></a>

###  setMaxListeners

▸ **setMaxListeners**(n: *`number`*): `this`

*Inherited from EventEmitter.setMaxListeners*

*Overrides EventEmitter.setMaxListeners*

*Defined in /Users/sebastiangurin/git/accursed/node_modules/@types/node/events.d.ts:19*

**Parameters:**

| Name | Type |
| ------ | ------ |
| n | `number` |

**Returns:** `this`

___
<a id="uncork"></a>

###  uncork

▸ **uncork**(): `void`

*Inherited from Writable.uncork*

*Defined in /Users/sebastiangurin/git/accursed/node_modules/@types/node/stream.d.ts:128*

**Returns:** `void`

___
<a id="write"></a>

###  write

▸ **write**(chunk: *`any`*, cb?: *`function`*): `boolean`

▸ **write**(chunk: *`any`*, encoding: *`string`*, cb?: *`function`*): `boolean`

*Inherited from Writable.write*

*Defined in /Users/sebastiangurin/git/accursed/node_modules/@types/node/stream.d.ts:121*

**Parameters:**

| Name | Type |
| ------ | ------ |
| chunk | `any` |
| `Optional` cb | `function` |

**Returns:** `boolean`

*Inherited from Writable.write*

*Defined in /Users/sebastiangurin/git/accursed/node_modules/@types/node/stream.d.ts:122*

**Parameters:**

| Name | Type |
| ------ | ------ |
| chunk | `any` |
| encoding | `string` |
| `Optional` cb | `function` |

**Returns:** `boolean`

___
<a id="listenercount-1"></a>

### `<Static>` listenerCount

▸ **listenerCount**(emitter: *`EventEmitter`*, event: *`string` \| `symbol`*): `number`

*Inherited from EventEmitter.listenerCount*

*Defined in /Users/sebastiangurin/git/accursed/node_modules/@types/node/events.d.ts:8*

*__deprecated__*: since v4.0.0

**Parameters:**

| Name | Type |
| ------ | ------ |
| emitter | `EventEmitter` |
| event | `string` \| `symbol` |

**Returns:** `number`

___

