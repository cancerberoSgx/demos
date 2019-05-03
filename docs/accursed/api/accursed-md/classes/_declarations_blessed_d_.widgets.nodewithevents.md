[accursed](../README.md) > ["declarations/blessed.d"](../modules/_declarations_blessed_d_.md) > [Widgets](../modules/_declarations_blessed_d_.widgets.md) > [NodeWithEvents](../classes/_declarations_blessed_d_.widgets.nodewithevents.md)

# Class: NodeWithEvents

## Hierarchy

↳  [Node](_declarations_blessed_d_.widgets.node.md)

**↳ NodeWithEvents**

↳  [Screen](_declarations_blessed_d_.widgets.screen.md)

↳  [BlessedElement](_declarations_blessed_d_.widgets.blessedelement.md)

## Implements

* [IHasOptions](../interfaces/_declarations_blessed_d_.widgets.ihasoptions.md)<[INodeOptions](../interfaces/_declarations_blessed_d_.widgets.inodeoptions.md)>
* [IDestroyable](../interfaces/_declarations_blessed_d_.widgets.idestroyable.md)

## Index

### Constructors

* [constructor](_declarations_blessed_d_.widgets.nodewithevents.md#constructor)

### Properties

* [$](_declarations_blessed_d_.widgets.nodewithevents.md#_)
* [_](_declarations_blessed_d_.widgets.nodewithevents.md#_-1)
* [children](_declarations_blessed_d_.widgets.nodewithevents.md#children)
* [data](_declarations_blessed_d_.widgets.nodewithevents.md#data)
* [focusable](_declarations_blessed_d_.widgets.nodewithevents.md#focusable)
* [index](_declarations_blessed_d_.widgets.nodewithevents.md#index)
* [lpos](_declarations_blessed_d_.widgets.nodewithevents.md#lpos)
* [options](_declarations_blessed_d_.widgets.nodewithevents.md#options)
* [parent](_declarations_blessed_d_.widgets.nodewithevents.md#parent)
* [screen](_declarations_blessed_d_.widgets.nodewithevents.md#screen)
* [type](_declarations_blessed_d_.widgets.nodewithevents.md#type)
* [uid](_declarations_blessed_d_.widgets.nodewithevents.md#uid)
* [defaultMaxListeners](_declarations_blessed_d_.widgets.nodewithevents.md#defaultmaxlisteners)

### Methods

* [addListener](_declarations_blessed_d_.widgets.nodewithevents.md#addlistener)
* [append](_declarations_blessed_d_.widgets.nodewithevents.md#append)
* [collectAncestors](_declarations_blessed_d_.widgets.nodewithevents.md#collectancestors)
* [collectDescendants](_declarations_blessed_d_.widgets.nodewithevents.md#collectdescendants)
* [destroy](_declarations_blessed_d_.widgets.nodewithevents.md#destroy)
* [detach](_declarations_blessed_d_.widgets.nodewithevents.md#detach)
* [emit](_declarations_blessed_d_.widgets.nodewithevents.md#emit)
* [emitAncestors](_declarations_blessed_d_.widgets.nodewithevents.md#emitancestors)
* [emitDescendants](_declarations_blessed_d_.widgets.nodewithevents.md#emitdescendants)
* [eventNames](_declarations_blessed_d_.widgets.nodewithevents.md#eventnames)
* [forAncestors](_declarations_blessed_d_.widgets.nodewithevents.md#forancestors)
* [forDescendants](_declarations_blessed_d_.widgets.nodewithevents.md#fordescendants)
* [free](_declarations_blessed_d_.widgets.nodewithevents.md#free)
* [get](_declarations_blessed_d_.widgets.nodewithevents.md#get)
* [getMaxListeners](_declarations_blessed_d_.widgets.nodewithevents.md#getmaxlisteners)
* [hasAncestor](_declarations_blessed_d_.widgets.nodewithevents.md#hasancestor)
* [hasDescendant](_declarations_blessed_d_.widgets.nodewithevents.md#hasdescendant)
* [insert](_declarations_blessed_d_.widgets.nodewithevents.md#insert)
* [insertAfter](_declarations_blessed_d_.widgets.nodewithevents.md#insertafter)
* [insertBefore](_declarations_blessed_d_.widgets.nodewithevents.md#insertbefore)
* [key](_declarations_blessed_d_.widgets.nodewithevents.md#key)
* [listenerCount](_declarations_blessed_d_.widgets.nodewithevents.md#listenercount)
* [listeners](_declarations_blessed_d_.widgets.nodewithevents.md#listeners)
* [off](_declarations_blessed_d_.widgets.nodewithevents.md#off)
* [on](_declarations_blessed_d_.widgets.nodewithevents.md#on)
* [once](_declarations_blessed_d_.widgets.nodewithevents.md#once)
* [onceKey](_declarations_blessed_d_.widgets.nodewithevents.md#oncekey)
* [prepend](_declarations_blessed_d_.widgets.nodewithevents.md#prepend)
* [prependListener](_declarations_blessed_d_.widgets.nodewithevents.md#prependlistener)
* [prependOnceListener](_declarations_blessed_d_.widgets.nodewithevents.md#prependoncelistener)
* [rawListeners](_declarations_blessed_d_.widgets.nodewithevents.md#rawlisteners)
* [remove](_declarations_blessed_d_.widgets.nodewithevents.md#remove)
* [removeAllListeners](_declarations_blessed_d_.widgets.nodewithevents.md#removealllisteners)
* [removeKey](_declarations_blessed_d_.widgets.nodewithevents.md#removekey)
* [removeListener](_declarations_blessed_d_.widgets.nodewithevents.md#removelistener)
* [set](_declarations_blessed_d_.widgets.nodewithevents.md#set)
* [setMaxListeners](_declarations_blessed_d_.widgets.nodewithevents.md#setmaxlisteners)
* [unkey](_declarations_blessed_d_.widgets.nodewithevents.md#unkey)
* [listenerCount](_declarations_blessed_d_.widgets.nodewithevents.md#listenercount-1)

---

## Constructors

<a id="constructor"></a>

###  constructor

⊕ **new NodeWithEvents**(options: *[INodeOptions](../interfaces/_declarations_blessed_d_.widgets.inodeoptions.md)*): [NodeWithEvents](_declarations_blessed_d_.widgets.nodewithevents.md)

*Inherited from [Node](_declarations_blessed_d_.widgets.node.md).[constructor](_declarations_blessed_d_.widgets.node.md#constructor)*

*Defined in [declarations/blessed.d.ts:336](https://github.com/cancerberoSgx/accursed/blob/978b980/src/declarations/blessed.d.ts#L336)*

**Parameters:**

| Name | Type |
| ------ | ------ |
| options | [INodeOptions](../interfaces/_declarations_blessed_d_.widgets.inodeoptions.md) |

**Returns:** [NodeWithEvents](_declarations_blessed_d_.widgets.nodewithevents.md)

___

## Properties

<a id="_"></a>

###  $

**● $**: *`object`*

*Inherited from [Node](_declarations_blessed_d_.widgets.node.md).[$](_declarations_blessed_d_.widgets.node.md#_)*

*Defined in [declarations/blessed.d.ts:362](https://github.com/cancerberoSgx/accursed/blob/978b980/src/declarations/blessed.d.ts#L362)*

An object for any miscellaneous user data.

#### Type declaration

[index: `string`]: `any`

___
<a id="_-1"></a>

###  _

**● _**: *`object`*

*Inherited from [Node](_declarations_blessed_d_.widgets.node.md).[_](_declarations_blessed_d_.widgets.node.md#_-1)*

*Defined in [declarations/blessed.d.ts:357](https://github.com/cancerberoSgx/accursed/blob/978b980/src/declarations/blessed.d.ts#L357)*

An object for any miscellaneous user data.

#### Type declaration

[index: `string`]: `any`

___
<a id="children"></a>

###  children

**● children**: *[Node](_declarations_blessed_d_.widgets.node.md)[]*

*Inherited from [Node](_declarations_blessed_d_.widgets.node.md).[children](_declarations_blessed_d_.widgets.node.md#children)*

*Defined in [declarations/blessed.d.ts:389](https://github.com/cancerberoSgx/accursed/blob/978b980/src/declarations/blessed.d.ts#L389)*

Array of node's children.

___
<a id="data"></a>

###  data

**● data**: *`object`*

*Inherited from [Node](_declarations_blessed_d_.widgets.node.md).[data](_declarations_blessed_d_.widgets.node.md#data)*

*Defined in [declarations/blessed.d.ts:352](https://github.com/cancerberoSgx/accursed/blob/978b980/src/declarations/blessed.d.ts#L352)*

An object for any miscellaneous user data.

#### Type declaration

[index: `string`]: `any`

___
<a id="focusable"></a>

###  focusable

**● focusable**: *`boolean`*

*Inherited from [Node](_declarations_blessed_d_.widgets.node.md).[focusable](_declarations_blessed_d_.widgets.node.md#focusable)*

*Defined in [declarations/blessed.d.ts:342](https://github.com/cancerberoSgx/accursed/blob/978b980/src/declarations/blessed.d.ts#L342)*

___
<a id="index"></a>

###  index

**● index**: *`number`*

*Inherited from [Node](_declarations_blessed_d_.widgets.node.md).[index](_declarations_blessed_d_.widgets.node.md#index)*

*Defined in [declarations/blessed.d.ts:374](https://github.com/cancerberoSgx/accursed/blob/978b980/src/declarations/blessed.d.ts#L374)*

Render index (document order index) of the last render call.

___
<a id="lpos"></a>

###  lpos

**● lpos**: *[PositionCoords](_declarations_blessed_d_.widgets.positioncoords.md)*

*Inherited from [Node](_declarations_blessed_d_.widgets.node.md).[lpos](_declarations_blessed_d_.widgets.node.md#lpos)*

*Defined in [declarations/blessed.d.ts:364](https://github.com/cancerberoSgx/accursed/blob/978b980/src/declarations/blessed.d.ts#L364)*

___
<a id="options"></a>

###  options

**● options**: *[INodeOptions](../interfaces/_declarations_blessed_d_.widgets.inodeoptions.md)*

*Implementation of [IHasOptions](../interfaces/_declarations_blessed_d_.widgets.ihasoptions.md).[options](../interfaces/_declarations_blessed_d_.widgets.ihasoptions.md#options)*

*Inherited from [Node](_declarations_blessed_d_.widgets.node.md).[options](_declarations_blessed_d_.widgets.node.md#options)*

*Defined in [declarations/blessed.d.ts:347](https://github.com/cancerberoSgx/accursed/blob/978b980/src/declarations/blessed.d.ts#L347)*

Original options object.

___
<a id="parent"></a>

### `<Optional>` parent

**● parent**: *[Node](_declarations_blessed_d_.widgets.node.md)*

*Inherited from [Node](_declarations_blessed_d_.widgets.node.md).[parent](_declarations_blessed_d_.widgets.node.md#parent)*

*Defined in [declarations/blessed.d.ts:384](https://github.com/cancerberoSgx/accursed/blob/978b980/src/declarations/blessed.d.ts#L384)*

Parent node. If null it means the element is not attached to any screen or program, or the node is a Screen.

___
<a id="screen"></a>

###  screen

**● screen**: *[Screen](_declarations_blessed_d_.widgets.screen.md)*

*Inherited from [Node](_declarations_blessed_d_.widgets.node.md).[screen](_declarations_blessed_d_.widgets.node.md#screen)*

*Defined in [declarations/blessed.d.ts:379](https://github.com/cancerberoSgx/accursed/blob/978b980/src/declarations/blessed.d.ts#L379)*

Parent screen.

___
<a id="type"></a>

###  type

**● type**: *`string`*

*Inherited from [Node](_declarations_blessed_d_.widgets.node.md).[type](_declarations_blessed_d_.widgets.node.md#type)*

*Defined in [declarations/blessed.d.ts:369](https://github.com/cancerberoSgx/accursed/blob/978b980/src/declarations/blessed.d.ts#L369)*

Type of the node (e.g. box).

___
<a id="uid"></a>

###  uid

**● uid**: *`number`*

*Inherited from [Node](_declarations_blessed_d_.widgets.node.md).[uid](_declarations_blessed_d_.widgets.node.md#uid)*

*Defined in [declarations/blessed.d.ts:340](https://github.com/cancerberoSgx/accursed/blob/978b980/src/declarations/blessed.d.ts#L340)*

Unique identifier for Node instances. @internal

___
<a id="defaultmaxlisteners"></a>

### `<Static>` defaultMaxListeners

**● defaultMaxListeners**: *`number`*

*Inherited from EventEmitter.defaultMaxListeners*

*Defined in /Users/sebastiangurin/git/accursed/node_modules/@types/node/events.d.ts:9*

___

## Methods

<a id="addlistener"></a>

###  addListener

▸ **addListener**(event: *`string` \| `symbol`*, listener: *`function`*): `this`

*Inherited from EventEmitter.addListener*

*Overrides EventEmitter.addListener*

*Defined in /Users/sebastiangurin/git/accursed/node_modules/@types/node/events.d.ts:11*

**Parameters:**

| Name | Type |
| ------ | ------ |
| event | `string` \| `symbol` |
| listener | `function` |

**Returns:** `this`

___
<a id="append"></a>

###  append

▸ **append**(node: *[Node](_declarations_blessed_d_.widgets.node.md)*): `void`

*Inherited from [Node](_declarations_blessed_d_.widgets.node.md).[append](_declarations_blessed_d_.widgets.node.md#append)*

*Defined in [declarations/blessed.d.ts:399](https://github.com/cancerberoSgx/accursed/blob/978b980/src/declarations/blessed.d.ts#L399)*

Append a node to this node's children.

**Parameters:**

| Name | Type |
| ------ | ------ |
| node | [Node](_declarations_blessed_d_.widgets.node.md) |

**Returns:** `void`

___
<a id="collectancestors"></a>

###  collectAncestors

▸ **collectAncestors**(s?: *`boolean`*): `void`

*Inherited from [Node](_declarations_blessed_d_.widgets.node.md).[collectAncestors](_declarations_blessed_d_.widgets.node.md#collectancestors)*

*Defined in [declarations/blessed.d.ts:433](https://github.com/cancerberoSgx/accursed/blob/978b980/src/declarations/blessed.d.ts#L433)*

**Parameters:**

| Name | Type |
| ------ | ------ |
| `Optional` s | `boolean` |

**Returns:** `void`

___
<a id="collectdescendants"></a>

###  collectDescendants

▸ **collectDescendants**(s?: *`boolean`*): `void`

*Inherited from [Node](_declarations_blessed_d_.widgets.node.md).[collectDescendants](_declarations_blessed_d_.widgets.node.md#collectdescendants)*

*Defined in [declarations/blessed.d.ts:432](https://github.com/cancerberoSgx/accursed/blob/978b980/src/declarations/blessed.d.ts#L432)*

**Parameters:**

| Name | Type |
| ------ | ------ |
| `Optional` s | `boolean` |

**Returns:** `void`

___
<a id="destroy"></a>

###  destroy

▸ **destroy**(): `void`

*Implementation of [IDestroyable](../interfaces/_declarations_blessed_d_.widgets.idestroyable.md).[destroy](../interfaces/_declarations_blessed_d_.widgets.idestroyable.md#destroy)*

*Inherited from [Node](_declarations_blessed_d_.widgets.node.md).[destroy](_declarations_blessed_d_.widgets.node.md#destroy)*

*Defined in [declarations/blessed.d.ts:445](https://github.com/cancerberoSgx/accursed/blob/978b980/src/declarations/blessed.d.ts#L445)*

[detach](_declarations_blessed_d_.widgets.nodewithevents.md#detach)() this node from its parent, and will also detach and destroy each of its descendant nodes each of them emitting \[\[destory\]\] event also.

**Returns:** `void`

___
<a id="detach"></a>

###  detach

▸ **detach**(): `void`

*Inherited from [Node](_declarations_blessed_d_.widgets.node.md).[detach](_declarations_blessed_d_.widgets.node.md#detach)*

*Defined in [declarations/blessed.d.ts:424](https://github.com/cancerberoSgx/accursed/blob/978b980/src/declarations/blessed.d.ts#L424)*

Remove node from its parent.

**Returns:** `void`

___
<a id="emit"></a>

###  emit

▸ **emit**(event: *`string` \| `symbol`*, ...args: *`any`[]*): `boolean`

*Inherited from EventEmitter.emit*

*Overrides EventEmitter.emit*

*Defined in /Users/sebastiangurin/git/accursed/node_modules/@types/node/events.d.ts:23*

**Parameters:**

| Name | Type |
| ------ | ------ |
| event | `string` \| `symbol` |
| `Rest` args | `any`[] |

**Returns:** `boolean`

___
<a id="emitancestors"></a>

###  emitAncestors

▸ **emitAncestors**(): `void`

*Inherited from [Node](_declarations_blessed_d_.widgets.node.md).[emitAncestors](_declarations_blessed_d_.widgets.node.md#emitancestors)*

*Defined in [declarations/blessed.d.ts:439](https://github.com/cancerberoSgx/accursed/blob/978b980/src/declarations/blessed.d.ts#L439)*

**Returns:** `void`

___
<a id="emitdescendants"></a>

###  emitDescendants

▸ **emitDescendants**(type?: *`string`*, ...args: *`any`[]*): `void`

*Inherited from [Node](_declarations_blessed_d_.widgets.node.md).[emitDescendants](_declarations_blessed_d_.widgets.node.md#emitdescendants)*

*Defined in [declarations/blessed.d.ts:438](https://github.com/cancerberoSgx/accursed/blob/978b980/src/declarations/blessed.d.ts#L438)*

Emit event for element, and recursively emit same event for all descendants. If `s` is provided it will call \[\[iter\]\] on self first.

**Parameters:**

| Name | Type |
| ------ | ------ |
| `Optional` type | `string` |
| `Rest` args | `any`[] |

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
<a id="forancestors"></a>

###  forAncestors

▸ **forAncestors**(iter: *`function`*, s?: *`boolean`*): `void`

*Inherited from [Node](_declarations_blessed_d_.widgets.node.md).[forAncestors](_declarations_blessed_d_.widgets.node.md#forancestors)*

*Defined in [declarations/blessed.d.ts:431](https://github.com/cancerberoSgx/accursed/blob/978b980/src/declarations/blessed.d.ts#L431)*

**Parameters:**

| Name | Type |
| ------ | ------ |
| iter | `function` |
| `Optional` s | `boolean` |

**Returns:** `void`

___
<a id="fordescendants"></a>

###  forDescendants

▸ **forDescendants**(iter: *`function`*, s?: *`boolean`*): `void`

*Inherited from [Node](_declarations_blessed_d_.widgets.node.md).[forDescendants](_declarations_blessed_d_.widgets.node.md#fordescendants)*

*Defined in [declarations/blessed.d.ts:430](https://github.com/cancerberoSgx/accursed/blob/978b980/src/declarations/blessed.d.ts#L430)*

Visit each node's descendants, with \[\[iter\]\] function, parents first. If `s` is provided it will call \[\[iter\]\] on self first.

**Parameters:**

| Name | Type |
| ------ | ------ |
| iter | `function` |
| `Optional` s | `boolean` |

**Returns:** `void`

___
<a id="free"></a>

###  free

▸ **free**(): `void`

*Inherited from [Node](_declarations_blessed_d_.widgets.node.md).[free](_declarations_blessed_d_.widgets.node.md#free)*

*Defined in [declarations/blessed.d.ts:425](https://github.com/cancerberoSgx/accursed/blob/978b980/src/declarations/blessed.d.ts#L425)*

**Returns:** `void`

___
<a id="get"></a>

###  get

▸ **get**<`T`>(name: *`string`*, def: *`T`*): `T`

*Inherited from [Node](_declarations_blessed_d_.widgets.node.md).[get](_declarations_blessed_d_.widgets.node.md#get)*

*Defined in [declarations/blessed.d.ts:450](https://github.com/cancerberoSgx/accursed/blob/978b980/src/declarations/blessed.d.ts#L450)*

Get user property with a potential default value.

**Type parameters:**

#### T 
**Parameters:**

| Name | Type |
| ------ | ------ |
| name | `string` |
| def | `T` |

**Returns:** `T`

___
<a id="getmaxlisteners"></a>

###  getMaxListeners

▸ **getMaxListeners**(): `number`

*Inherited from EventEmitter.getMaxListeners*

*Overrides EventEmitter.getMaxListeners*

*Defined in /Users/sebastiangurin/git/accursed/node_modules/@types/node/events.d.ts:20*

**Returns:** `number`

___
<a id="hasancestor"></a>

###  hasAncestor

▸ **hasAncestor**<`T`>(target: *[Node](_declarations_blessed_d_.widgets.node.md)*): [Node](_declarations_blessed_d_.widgets.node.md)

*Inherited from [Node](_declarations_blessed_d_.widgets.node.md).[hasAncestor](_declarations_blessed_d_.widgets.node.md#hasancestor)*

*Defined in [declarations/blessed.d.ts:441](https://github.com/cancerberoSgx/accursed/blob/978b980/src/declarations/blessed.d.ts#L441)*

**Type parameters:**

#### T :  [Node](_declarations_blessed_d_.widgets.node.md)
**Parameters:**

| Name | Type |
| ------ | ------ |
| target | [Node](_declarations_blessed_d_.widgets.node.md) |

**Returns:** [Node](_declarations_blessed_d_.widgets.node.md)

___
<a id="hasdescendant"></a>

###  hasDescendant

▸ **hasDescendant**<`T`>(target: *[Node](_declarations_blessed_d_.widgets.node.md)*): [Node](_declarations_blessed_d_.widgets.node.md)

*Inherited from [Node](_declarations_blessed_d_.widgets.node.md).[hasDescendant](_declarations_blessed_d_.widgets.node.md#hasdescendant)*

*Defined in [declarations/blessed.d.ts:440](https://github.com/cancerberoSgx/accursed/blob/978b980/src/declarations/blessed.d.ts#L440)*

**Type parameters:**

#### T :  [Node](_declarations_blessed_d_.widgets.node.md)
**Parameters:**

| Name | Type |
| ------ | ------ |
| target | [Node](_declarations_blessed_d_.widgets.node.md) |

**Returns:** [Node](_declarations_blessed_d_.widgets.node.md)

___
<a id="insert"></a>

###  insert

▸ **insert**(node: *[Node](_declarations_blessed_d_.widgets.node.md)*, index: *`number`*): `void`

*Inherited from [Node](_declarations_blessed_d_.widgets.node.md).[insert](_declarations_blessed_d_.widgets.node.md#insert)*

*Defined in [declarations/blessed.d.ts:409](https://github.com/cancerberoSgx/accursed/blob/978b980/src/declarations/blessed.d.ts#L409)*

Insert a node to this node's children at index i.

**Parameters:**

| Name | Type |
| ------ | ------ |
| node | [Node](_declarations_blessed_d_.widgets.node.md) |
| index | `number` |

**Returns:** `void`

___
<a id="insertafter"></a>

###  insertAfter

▸ **insertAfter**(node: *[Node](_declarations_blessed_d_.widgets.node.md)*, refNode: *[Node](_declarations_blessed_d_.widgets.node.md)*): `void`

*Inherited from [Node](_declarations_blessed_d_.widgets.node.md).[insertAfter](_declarations_blessed_d_.widgets.node.md#insertafter)*

*Defined in [declarations/blessed.d.ts:419](https://github.com/cancerberoSgx/accursed/blob/978b980/src/declarations/blessed.d.ts#L419)*

Insert a node from node after the reference node.

**Parameters:**

| Name | Type |
| ------ | ------ |
| node | [Node](_declarations_blessed_d_.widgets.node.md) |
| refNode | [Node](_declarations_blessed_d_.widgets.node.md) |

**Returns:** `void`

___
<a id="insertbefore"></a>

###  insertBefore

▸ **insertBefore**(node: *[Node](_declarations_blessed_d_.widgets.node.md)*, refNode: *[Node](_declarations_blessed_d_.widgets.node.md)*): `void`

*Inherited from [Node](_declarations_blessed_d_.widgets.node.md).[insertBefore](_declarations_blessed_d_.widgets.node.md#insertbefore)*

*Defined in [declarations/blessed.d.ts:414](https://github.com/cancerberoSgx/accursed/blob/978b980/src/declarations/blessed.d.ts#L414)*

Insert a node to this node's children before the reference node.

**Parameters:**

| Name | Type |
| ------ | ------ |
| node | [Node](_declarations_blessed_d_.widgets.node.md) |
| refNode | [Node](_declarations_blessed_d_.widgets.node.md) |

**Returns:** `void`

___
<a id="key"></a>

###  key

▸ **key**(name: *`string` \| `string`[]*, listener: *[KeyEventListener](../modules/_declarations_blessed_d_.widgets.md#keyeventlistener)*): `void`

*Defined in [declarations/blessed.d.ts:558](https://github.com/cancerberoSgx/accursed/blob/978b980/src/declarations/blessed.d.ts#L558)*

Bind a keypress listener for a specific key.

**Parameters:**

| Name | Type |
| ------ | ------ |
| name | `string` \| `string`[] |
| listener | [KeyEventListener](../modules/_declarations_blessed_d_.widgets.md#keyeventlistener) |

**Returns:** `void`

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

▸ **on**(event: *`string`*, listener: *`function`*): `this`

▸ **on**(event: *[NodeMouseEventType](../modules/_declarations_blessed_d_.widgets.md#nodemouseeventtype)*, callback: *`function`*): `this`

▸ **on**(event: *"keypress"*, callback: *[KeyEventListener](../modules/_declarations_blessed_d_.widgets.md#keyeventlistener)*): `this`

▸ **on**(event: *[NodeScreenEventType](../modules/_declarations_blessed_d_.widgets.md#nodescreeneventtype)*, callback: *`function`*): `this`

▸ **on**(event: *"warning"*, callback: *`function`*): `this`

▸ **on**(event: *[NodeGenericEventType](../modules/_declarations_blessed_d_.widgets.md#nodegenericeventtype)*, callback: *`function`*): `this`

*Overrides [Node](_declarations_blessed_d_.widgets.node.md).[on](_declarations_blessed_d_.widgets.node.md#on)*

*Defined in [declarations/blessed.d.ts:577](https://github.com/cancerberoSgx/accursed/blob/978b980/src/declarations/blessed.d.ts#L577)*

Registers event listener to be notified on mouse events.

**Parameters:**

| Name | Type |
| ------ | ------ |
| event | `string` |
| listener | `function` |

**Returns:** `this`

*Overrides [Node](_declarations_blessed_d_.widgets.node.md).[on](_declarations_blessed_d_.widgets.node.md#on)*

*Defined in [declarations/blessed.d.ts:581](https://github.com/cancerberoSgx/accursed/blob/978b980/src/declarations/blessed.d.ts#L581)*

Registers event listener to be notified on mouse events.

**Parameters:**

| Name | Type |
| ------ | ------ |
| event | [NodeMouseEventType](../modules/_declarations_blessed_d_.widgets.md#nodemouseeventtype) |
| callback | `function` |

**Returns:** `this`

*Overrides [Node](_declarations_blessed_d_.widgets.node.md).[on](_declarations_blessed_d_.widgets.node.md#on)*

*Defined in [declarations/blessed.d.ts:586](https://github.com/cancerberoSgx/accursed/blob/978b980/src/declarations/blessed.d.ts#L586)*

Received on key events.

**Parameters:**

| Name | Type |
| ------ | ------ |
| event | "keypress" |
| callback | [KeyEventListener](../modules/_declarations_blessed_d_.widgets.md#keyeventlistener) |

**Returns:** `this`

*Overrides [Node](_declarations_blessed_d_.widgets.node.md).[on](_declarations_blessed_d_.widgets.node.md#on)*

*Defined in [declarations/blessed.d.ts:587](https://github.com/cancerberoSgx/accursed/blob/978b980/src/declarations/blessed.d.ts#L587)*

**Parameters:**

| Name | Type |
| ------ | ------ |
| event | [NodeScreenEventType](../modules/_declarations_blessed_d_.widgets.md#nodescreeneventtype) |
| callback | `function` |

**Returns:** `this`

*Overrides [Node](_declarations_blessed_d_.widgets.node.md).[on](_declarations_blessed_d_.widgets.node.md#on)*

*Defined in [declarations/blessed.d.ts:591](https://github.com/cancerberoSgx/accursed/blob/978b980/src/declarations/blessed.d.ts#L591)*

Received when blessed notices something untoward (output is not a tty, terminfo not found, etc).

**Parameters:**

| Name | Type |
| ------ | ------ |
| event | "warning" |
| callback | `function` |

**Returns:** `this`

*Overrides [Node](_declarations_blessed_d_.widgets.node.md).[on](_declarations_blessed_d_.widgets.node.md#on)*

*Defined in [declarations/blessed.d.ts:592](https://github.com/cancerberoSgx/accursed/blob/978b980/src/declarations/blessed.d.ts#L592)*

**Parameters:**

| Name | Type |
| ------ | ------ |
| event | [NodeGenericEventType](../modules/_declarations_blessed_d_.widgets.md#nodegenericeventtype) |
| callback | `function` |

**Returns:** `this`

___
<a id="once"></a>

###  once

▸ **once**(event: *`string` \| `symbol`*, listener: *`function`*): `this`

*Inherited from EventEmitter.once*

*Overrides EventEmitter.once*

*Defined in /Users/sebastiangurin/git/accursed/node_modules/@types/node/events.d.ts:13*

**Parameters:**

| Name | Type |
| ------ | ------ |
| event | `string` \| `symbol` |
| listener | `function` |

**Returns:** `this`

___
<a id="oncekey"></a>

###  onceKey

▸ **onceKey**(name: *`string`*, listener: *[KeyEventListener](../modules/_declarations_blessed_d_.widgets.md#keyeventlistener)*): `void`

*Defined in [declarations/blessed.d.ts:563](https://github.com/cancerberoSgx/accursed/blob/978b980/src/declarations/blessed.d.ts#L563)*

Bind a keypress listener for a specific key once.

**Parameters:**

| Name | Type |
| ------ | ------ |
| name | `string` |
| listener | [KeyEventListener](../modules/_declarations_blessed_d_.widgets.md#keyeventlistener) |

**Returns:** `void`

___
<a id="prepend"></a>

###  prepend

▸ **prepend**(node: *[Node](_declarations_blessed_d_.widgets.node.md)*): `void`

*Inherited from [Node](_declarations_blessed_d_.widgets.node.md).[prepend](_declarations_blessed_d_.widgets.node.md#prepend)*

*Defined in [declarations/blessed.d.ts:394](https://github.com/cancerberoSgx/accursed/blob/978b980/src/declarations/blessed.d.ts#L394)*

Prepend a node to this node's children.

**Parameters:**

| Name | Type |
| ------ | ------ |
| node | [Node](_declarations_blessed_d_.widgets.node.md) |

**Returns:** `void`

___
<a id="prependlistener"></a>

###  prependListener

▸ **prependListener**(event: *`string` \| `symbol`*, listener: *`function`*): `this`

*Inherited from EventEmitter.prependListener*

*Overrides EventEmitter.prependListener*

*Defined in /Users/sebastiangurin/git/accursed/node_modules/@types/node/events.d.ts:14*

**Parameters:**

| Name | Type |
| ------ | ------ |
| event | `string` \| `symbol` |
| listener | `function` |

**Returns:** `this`

___
<a id="prependoncelistener"></a>

###  prependOnceListener

▸ **prependOnceListener**(event: *`string` \| `symbol`*, listener: *`function`*): `this`

*Inherited from EventEmitter.prependOnceListener*

*Overrides EventEmitter.prependOnceListener*

*Defined in /Users/sebastiangurin/git/accursed/node_modules/@types/node/events.d.ts:15*

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
<a id="remove"></a>

###  remove

▸ **remove**(node: *[Node](_declarations_blessed_d_.widgets.node.md)*): `void`

*Inherited from [Node](_declarations_blessed_d_.widgets.node.md).[remove](_declarations_blessed_d_.widgets.node.md#remove)*

*Defined in [declarations/blessed.d.ts:404](https://github.com/cancerberoSgx/accursed/blob/978b980/src/declarations/blessed.d.ts#L404)*

Remove child node from node.

**Parameters:**

| Name | Type |
| ------ | ------ |
| node | [Node](_declarations_blessed_d_.widgets.node.md) |

**Returns:** `void`

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
<a id="removekey"></a>

###  removeKey

▸ **removeKey**(name: *`string`*, listener: *[KeyEventListener](../modules/_declarations_blessed_d_.widgets.md#keyeventlistener)*): `void`

*Defined in [declarations/blessed.d.ts:573](https://github.com/cancerberoSgx/accursed/blob/978b980/src/declarations/blessed.d.ts#L573)*

Remove a keypress listener for a specific key.

**Parameters:**

| Name | Type |
| ------ | ------ |
| name | `string` |
| listener | [KeyEventListener](../modules/_declarations_blessed_d_.widgets.md#keyeventlistener) |

**Returns:** `void`

___
<a id="removelistener"></a>

###  removeListener

▸ **removeListener**(event: *`string` \| `symbol`*, listener: *`function`*): `this`

*Inherited from EventEmitter.removeListener*

*Overrides EventEmitter.removeListener*

*Defined in /Users/sebastiangurin/git/accursed/node_modules/@types/node/events.d.ts:16*

**Parameters:**

| Name | Type |
| ------ | ------ |
| event | `string` \| `symbol` |
| listener | `function` |

**Returns:** `this`

___
<a id="set"></a>

###  set

▸ **set**(name: *`string`*, value: *`any`*): `void`

*Inherited from [Node](_declarations_blessed_d_.widgets.node.md).[set](_declarations_blessed_d_.widgets.node.md#set)*

*Defined in [declarations/blessed.d.ts:455](https://github.com/cancerberoSgx/accursed/blob/978b980/src/declarations/blessed.d.ts#L455)*

Set user property to value.

**Parameters:**

| Name | Type |
| ------ | ------ |
| name | `string` |
| value | `any` |

**Returns:** `void`

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
<a id="unkey"></a>

###  unkey

▸ **unkey**(name: *`string`*, listener: *[KeyEventListener](../modules/_declarations_blessed_d_.widgets.md#keyeventlistener)*): `void`

*Defined in [declarations/blessed.d.ts:568](https://github.com/cancerberoSgx/accursed/blob/978b980/src/declarations/blessed.d.ts#L568)*

Remove a keypress listener for a specific key.

**Parameters:**

| Name | Type |
| ------ | ------ |
| name | `string` |
| listener | [KeyEventListener](../modules/_declarations_blessed_d_.widgets.md#keyeventlistener) |

**Returns:** `void`

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

