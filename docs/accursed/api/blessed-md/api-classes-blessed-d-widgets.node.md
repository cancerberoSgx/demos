---
id: api-classes-blessed-d-widgets.node
title: Node
sidebar_label: Node
---

[blessed](api-readme.md) > [[blessed.d Module]](api-modules-blessed-d-module.md) > [Widgets](api-modules-blessed-d-widgets.md) > [Node](api-classes-blessed-d-widgets.node.md)

## Class

The base node which everything inherits from.

## Hierarchy

 `EventEmitter`

**↳ Node**

↳  [NodeWithEvents](api-classes-blessed-d-widgets.nodewithevents.md)

↳  [Node](api-classes-blessed-d-widget.node.md)

## Implements

* [IHasOptions](api-interfaces-blessed-d-widgets.ihasoptions.md)<[INodeOptions](api-interfaces-blessed-d-widgets.inodeoptions.md)>
* [IDestroyable](api-interfaces-blessed-d-widgets.idestroyable.md)

### Constructors

* [constructor](api-classes-blessed-d-widgets.node.md#constructor)

### Properties

* [$](api-classes-blessed-d-widgets.node.md#_)
* [_](api-classes-blessed-d-widgets.node.md#_-1)
* [children](api-classes-blessed-d-widgets.node.md#children)
* [data](api-classes-blessed-d-widgets.node.md#data)
* [focusable](api-classes-blessed-d-widgets.node.md#focusable)
* [index](api-classes-blessed-d-widgets.node.md#index)
* [lpos](api-classes-blessed-d-widgets.node.md#lpos)
* [options](api-classes-blessed-d-widgets.node.md#options)
* [parent](api-classes-blessed-d-widgets.node.md#parent)
* [screen](api-classes-blessed-d-widgets.node.md#screen)
* [type](api-classes-blessed-d-widgets.node.md#type)
* [uid](api-classes-blessed-d-widgets.node.md#uid)
* [defaultMaxListeners](api-classes-blessed-d-widgets.node.md#defaultmaxlisteners)

### Methods

* [addListener](api-classes-blessed-d-widgets.node.md#addlistener)
* [append](api-classes-blessed-d-widgets.node.md#append)
* [collectAncestors](api-classes-blessed-d-widgets.node.md#collectancestors)
* [collectDescendants](api-classes-blessed-d-widgets.node.md#collectdescendants)
* [destroy](api-classes-blessed-d-widgets.node.md#destroy)
* [detach](api-classes-blessed-d-widgets.node.md#detach)
* [emit](api-classes-blessed-d-widgets.node.md#emit)
* [emitAncestors](api-classes-blessed-d-widgets.node.md#emitancestors)
* [emitDescendants](api-classes-blessed-d-widgets.node.md#emitdescendants)
* [eventNames](api-classes-blessed-d-widgets.node.md#eventnames)
* [forAncestors](api-classes-blessed-d-widgets.node.md#forancestors)
* [forDescendants](api-classes-blessed-d-widgets.node.md#fordescendants)
* [free](api-classes-blessed-d-widgets.node.md#free)
* [get](api-classes-blessed-d-widgets.node.md#get)
* [getMaxListeners](api-classes-blessed-d-widgets.node.md#getmaxlisteners)
* [hasAncestor](api-classes-blessed-d-widgets.node.md#hasancestor)
* [hasDescendant](api-classes-blessed-d-widgets.node.md#hasdescendant)
* [insert](api-classes-blessed-d-widgets.node.md#insert)
* [insertAfter](api-classes-blessed-d-widgets.node.md#insertafter)
* [insertBefore](api-classes-blessed-d-widgets.node.md#insertbefore)
* [listenerCount](api-classes-blessed-d-widgets.node.md#listenercount)
* [listeners](api-classes-blessed-d-widgets.node.md#listeners)
* [off](api-classes-blessed-d-widgets.node.md#off)
* [on](api-classes-blessed-d-widgets.node.md#on)
* [once](api-classes-blessed-d-widgets.node.md#once)
* [prepend](api-classes-blessed-d-widgets.node.md#prepend)
* [prependListener](api-classes-blessed-d-widgets.node.md#prependlistener)
* [prependOnceListener](api-classes-blessed-d-widgets.node.md#prependoncelistener)
* [rawListeners](api-classes-blessed-d-widgets.node.md#rawlisteners)
* [remove](api-classes-blessed-d-widgets.node.md#remove)
* [removeAllListeners](api-classes-blessed-d-widgets.node.md#removealllisteners)
* [removeListener](api-classes-blessed-d-widgets.node.md#removelistener)
* [set](api-classes-blessed-d-widgets.node.md#set)
* [setMaxListeners](api-classes-blessed-d-widgets.node.md#setmaxlisteners)
* [listenerCount](api-classes-blessed-d-widgets.node.md#listenercount-1)

---

## Constructors

<a id="constructor"></a>

###  constructor

⊕ **new Node**(options: *[INodeOptions](api-interfaces-blessed-d-widgets.inodeoptions.md)*): [Node](api-classes-blessed-d-widgets.node.md)

*Defined in [blessed.d.ts:1664](https://github.com/cancerberoSgx/accursed/blob/7a42e78/src/declarations/blessed.d.ts#L1664)*

**Parameters:**

| Name | Type |
| ------ | ------ |
| options | [INodeOptions](api-interfaces-blessed-d-widgets.inodeoptions.md) |

**Returns:** [Node](api-classes-blessed-d-widgets.node.md)

___

## Properties

<a id="_"></a>

###  $

**● $**: *`object`*

*Defined in [blessed.d.ts:1690](https://github.com/cancerberoSgx/accursed/blob/7a42e78/src/declarations/blessed.d.ts#L1690)*

An object for any miscellanous user data.

#### Type declaration

[index: `string`]: `any`

___
<a id="_-1"></a>

###  _

**● _**: *`object`*

*Defined in [blessed.d.ts:1685](https://github.com/cancerberoSgx/accursed/blob/7a42e78/src/declarations/blessed.d.ts#L1685)*

An object for any miscellanous user data.

#### Type declaration

[index: `string`]: `any`

___
<a id="children"></a>

###  children

**● children**: *[Node](api-classes-blessed-d-widgets.node.md)[]*

*Defined in [blessed.d.ts:1717](https://github.com/cancerberoSgx/accursed/blob/7a42e78/src/declarations/blessed.d.ts#L1717)*

Array of node's children.

___
<a id="data"></a>

###  data

**● data**: *`object`*

*Defined in [blessed.d.ts:1680](https://github.com/cancerberoSgx/accursed/blob/7a42e78/src/declarations/blessed.d.ts#L1680)*

An object for any miscellanous user data.

#### Type declaration

[index: `string`]: `any`

___
<a id="focusable"></a>

###  focusable

**● focusable**: *`boolean`*

*Defined in [blessed.d.ts:1670](https://github.com/cancerberoSgx/accursed/blob/7a42e78/src/declarations/blessed.d.ts#L1670)*

___
<a id="index"></a>

###  index

**● index**: *`number`*

*Defined in [blessed.d.ts:1702](https://github.com/cancerberoSgx/accursed/blob/7a42e78/src/declarations/blessed.d.ts#L1702)*

Render index (document order index) of the last render call.

___
<a id="lpos"></a>

###  lpos

**● lpos**: *[PositionCoords](api-classes-blessed-d-widgets.positioncoords.md)*

*Defined in [blessed.d.ts:1692](https://github.com/cancerberoSgx/accursed/blob/7a42e78/src/declarations/blessed.d.ts#L1692)*

___
<a id="options"></a>

###  options

**● options**: *[INodeOptions](api-interfaces-blessed-d-widgets.inodeoptions.md)*

*Implementation of [IHasOptions](api-interfaces-blessed-d-widgets.ihasoptions.md).[options](api-interfaces-blessed-d-widgets.ihasoptions.md#options)*

*Defined in [blessed.d.ts:1675](https://github.com/cancerberoSgx/accursed/blob/7a42e78/src/declarations/blessed.d.ts#L1675)*

Original options object.

___
<a id="parent"></a>

### `<Optional>` parent

**● parent**: *[Node](api-classes-blessed-d-widgets.node.md)*

*Defined in [blessed.d.ts:1712](https://github.com/cancerberoSgx/accursed/blob/7a42e78/src/declarations/blessed.d.ts#L1712)*

Parent node. If null it means the element is not attached to any screen or program, or the node is a Screen.

___
<a id="screen"></a>

###  screen

**● screen**: *[Screen](api-classes-blessed-d-widgets.screen.md)*

*Defined in [blessed.d.ts:1707](https://github.com/cancerberoSgx/accursed/blob/7a42e78/src/declarations/blessed.d.ts#L1707)*

Parent screen.

___
<a id="type"></a>

###  type

**● type**: *`string`*

*Defined in [blessed.d.ts:1697](https://github.com/cancerberoSgx/accursed/blob/7a42e78/src/declarations/blessed.d.ts#L1697)*

Type of the node (e.g. box).

___
<a id="uid"></a>

###  uid

**● uid**: *`number`*

*Defined in [blessed.d.ts:1668](https://github.com/cancerberoSgx/accursed/blob/7a42e78/src/declarations/blessed.d.ts#L1668)*

Unique identifier for Node instances. @internal

___
<a id="defaultmaxlisteners"></a>

### `<Static>` defaultMaxListeners

**● defaultMaxListeners**: *`number`*

*Inherited from EventEmitter.defaultMaxListeners*

*Defined in /Users/sebastiangurin/git/accursed/node_modules/@types/node/events.d.ts:8*

___

## Methods

<a id="addlistener"></a>

###  addListener

▸ **addListener**(event: *`string` \| `symbol`*, listener: *`function`*): `this`

*Inherited from EventEmitter.addListener*

*Overrides EventEmitter.addListener*

*Defined in /Users/sebastiangurin/git/accursed/node_modules/@types/node/events.d.ts:10*

**Parameters:**

| Name | Type |
| ------ | ------ |
| event | `string` \| `symbol` |
| listener | `function` |

**Returns:** `this`

___
<a id="append"></a>

###  append

▸ **append**(node: *[Node](api-classes-blessed-d-widgets.node.md)*): `void`

*Defined in [blessed.d.ts:1727](https://github.com/cancerberoSgx/accursed/blob/7a42e78/src/declarations/blessed.d.ts#L1727)*

Append a node to this node's children.

**Parameters:**

| Name | Type |
| ------ | ------ |
| node | [Node](api-classes-blessed-d-widgets.node.md) |

**Returns:** `void`

___
<a id="collectancestors"></a>

###  collectAncestors

▸ **collectAncestors**(s?: *`undefined` \| `false` \| `true`*): `void`

*Defined in [blessed.d.ts:1760](https://github.com/cancerberoSgx/accursed/blob/7a42e78/src/declarations/blessed.d.ts#L1760)*

**Parameters:**

| Name | Type |
| ------ | ------ |
| `Optional` s | `undefined` \| `false` \| `true` |

**Returns:** `void`

___
<a id="collectdescendants"></a>

###  collectDescendants

▸ **collectDescendants**(s?: *`undefined` \| `false` \| `true`*): `void`

*Defined in [blessed.d.ts:1759](https://github.com/cancerberoSgx/accursed/blob/7a42e78/src/declarations/blessed.d.ts#L1759)*

**Parameters:**

| Name | Type |
| ------ | ------ |
| `Optional` s | `undefined` \| `false` \| `true` |

**Returns:** `void`

___
<a id="destroy"></a>

###  destroy

▸ **destroy**(): `void`

*Implementation of [IDestroyable](api-interfaces-blessed-d-widgets.idestroyable.md).[destroy](api-interfaces-blessed-d-widgets.idestroyable.md#destroy)*

*Defined in [blessed.d.ts:1772](https://github.com/cancerberoSgx/accursed/blob/7a42e78/src/declarations/blessed.d.ts#L1772)*

[detach](api-classes-blessed-d-widgets.node.md#detach)() this node from its parent, and will also detach and destroy each of its descendant nodes each of them emitting \[\[destory\]\] event also.

**Returns:** `void`

___
<a id="detach"></a>

###  detach

▸ **detach**(): `void`

*Defined in [blessed.d.ts:1752](https://github.com/cancerberoSgx/accursed/blob/7a42e78/src/declarations/blessed.d.ts#L1752)*

Remove node from its parent.

**Returns:** `void`

___
<a id="emit"></a>

###  emit

▸ **emit**(event: *`string` \| `symbol`*, ...args: *`any`[]*): `boolean`

*Inherited from EventEmitter.emit*

*Overrides EventEmitter.emit*

*Defined in /Users/sebastiangurin/git/accursed/node_modules/@types/node/events.d.ts:22*

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

*Defined in [blessed.d.ts:1766](https://github.com/cancerberoSgx/accursed/blob/7a42e78/src/declarations/blessed.d.ts#L1766)*

**Returns:** `void`

___
<a id="emitdescendants"></a>

###  emitDescendants

▸ **emitDescendants**(type?: *`undefined` \| `string`*, ...args: *`any`[]*): `void`

*Defined in [blessed.d.ts:1765](https://github.com/cancerberoSgx/accursed/blob/7a42e78/src/declarations/blessed.d.ts#L1765)*

Emit event for element, and recursively emit same event for all descendants. If `s` is provided it will call \[\[iter\]\] on self first.

**Parameters:**

| Name | Type |
| ------ | ------ |
| `Optional` type | `undefined` \| `string` |
| `Rest` args | `any`[] |

**Returns:** `void`

___
<a id="eventnames"></a>

###  eventNames

▸ **eventNames**(): `Array`<`string` \| `symbol`>

*Inherited from EventEmitter.eventNames*

*Overrides EventEmitter.eventNames*

*Defined in /Users/sebastiangurin/git/accursed/node_modules/@types/node/events.d.ts:23*

**Returns:** `Array`<`string` \| `symbol`>

___
<a id="forancestors"></a>

###  forAncestors

▸ **forAncestors**(iter: *`function`*, s?: *`undefined` \| `false` \| `true`*): `void`

*Defined in [blessed.d.ts:1758](https://github.com/cancerberoSgx/accursed/blob/7a42e78/src/declarations/blessed.d.ts#L1758)*

**Parameters:**

| Name | Type |
| ------ | ------ |
| iter | `function` |
| `Optional` s | `undefined` \| `false` \| `true` |

**Returns:** `void`

___
<a id="fordescendants"></a>

###  forDescendants

▸ **forDescendants**(iter: *`function`*, s?: *`undefined` \| `false` \| `true`*): `void`

*Defined in [blessed.d.ts:1757](https://github.com/cancerberoSgx/accursed/blob/7a42e78/src/declarations/blessed.d.ts#L1757)*

Visit each node's descendants, with \[\[iter\]\] function, parents first. If `s` is provided it will call \[\[iter\]\] on self first.

**Parameters:**

| Name | Type |
| ------ | ------ |
| iter | `function` |
| `Optional` s | `undefined` \| `false` \| `true` |

**Returns:** `void`

___
<a id="free"></a>

###  free

▸ **free**(): `void`

*Defined in [blessed.d.ts:1753](https://github.com/cancerberoSgx/accursed/blob/7a42e78/src/declarations/blessed.d.ts#L1753)*

**Returns:** `void`

___
<a id="get"></a>

###  get

▸ **get**<`T`>(name: *`string`*, def: *`T`*): `T`

*Defined in [blessed.d.ts:1777](https://github.com/cancerberoSgx/accursed/blob/7a42e78/src/declarations/blessed.d.ts#L1777)*

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

*Defined in /Users/sebastiangurin/git/accursed/node_modules/@types/node/events.d.ts:19*

**Returns:** `number`

___
<a id="hasancestor"></a>

###  hasAncestor

▸ **hasAncestor**<`T`>(target: *[Node](api-classes-blessed-d-widgets.node.md)*): [Node](api-classes-blessed-d-widgets.node.md)

*Defined in [blessed.d.ts:1768](https://github.com/cancerberoSgx/accursed/blob/7a42e78/src/declarations/blessed.d.ts#L1768)*

**Type parameters:**

#### T :  [Node](api-classes-blessed-d-widgets.node.md)
**Parameters:**

| Name | Type |
| ------ | ------ |
| target | [Node](api-classes-blessed-d-widgets.node.md) |

**Returns:** [Node](api-classes-blessed-d-widgets.node.md)

___
<a id="hasdescendant"></a>

###  hasDescendant

▸ **hasDescendant**<`T`>(target: *[Node](api-classes-blessed-d-widgets.node.md)*): [Node](api-classes-blessed-d-widgets.node.md)

*Defined in [blessed.d.ts:1767](https://github.com/cancerberoSgx/accursed/blob/7a42e78/src/declarations/blessed.d.ts#L1767)*

**Type parameters:**

#### T :  [Node](api-classes-blessed-d-widgets.node.md)
**Parameters:**

| Name | Type |
| ------ | ------ |
| target | [Node](api-classes-blessed-d-widgets.node.md) |

**Returns:** [Node](api-classes-blessed-d-widgets.node.md)

___
<a id="insert"></a>

###  insert

▸ **insert**(node: *[Node](api-classes-blessed-d-widgets.node.md)*, index: *`number`*): `void`

*Defined in [blessed.d.ts:1737](https://github.com/cancerberoSgx/accursed/blob/7a42e78/src/declarations/blessed.d.ts#L1737)*

Insert a node to this node's children at index i.

**Parameters:**

| Name | Type |
| ------ | ------ |
| node | [Node](api-classes-blessed-d-widgets.node.md) |
| index | `number` |

**Returns:** `void`

___
<a id="insertafter"></a>

###  insertAfter

▸ **insertAfter**(node: *[Node](api-classes-blessed-d-widgets.node.md)*, refNode: *[Node](api-classes-blessed-d-widgets.node.md)*): `void`

*Defined in [blessed.d.ts:1747](https://github.com/cancerberoSgx/accursed/blob/7a42e78/src/declarations/blessed.d.ts#L1747)*

Insert a node from node after the reference node.

**Parameters:**

| Name | Type |
| ------ | ------ |
| node | [Node](api-classes-blessed-d-widgets.node.md) |
| refNode | [Node](api-classes-blessed-d-widgets.node.md) |

**Returns:** `void`

___
<a id="insertbefore"></a>

###  insertBefore

▸ **insertBefore**(node: *[Node](api-classes-blessed-d-widgets.node.md)*, refNode: *[Node](api-classes-blessed-d-widgets.node.md)*): `void`

*Defined in [blessed.d.ts:1742](https://github.com/cancerberoSgx/accursed/blob/7a42e78/src/declarations/blessed.d.ts#L1742)*

Insert a node to this node's children before the reference node.

**Parameters:**

| Name | Type |
| ------ | ------ |
| node | [Node](api-classes-blessed-d-widgets.node.md) |
| refNode | [Node](api-classes-blessed-d-widgets.node.md) |

**Returns:** `void`

___
<a id="listenercount"></a>

###  listenerCount

▸ **listenerCount**(type: *`string` \| `symbol`*): `number`

*Inherited from EventEmitter.listenerCount*

*Overrides EventEmitter.listenerCount*

*Defined in /Users/sebastiangurin/git/accursed/node_modules/@types/node/events.d.ts:24*

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

*Defined in /Users/sebastiangurin/git/accursed/node_modules/@types/node/events.d.ts:20*

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

*Defined in /Users/sebastiangurin/git/accursed/node_modules/@types/node/events.d.ts:16*

**Parameters:**

| Name | Type |
| ------ | ------ |
| event | `string` \| `symbol` |
| listener | `function` |

**Returns:** `this`

___
<a id="on"></a>

###  on

▸ **on**(event: *"reparent"*, listener: *`function`*): `void`

▸ **on**(event: *"adopt"*, listener: *`function`*): `void`

▸ **on**(event: *"attach"*, listener: *`function`*): `void`

▸ **on**(event: *"detach"*, listener: *`function`*): `void`

▸ **on**(event: *"remove"*, listener: *`function`*): `void`

▸ **on**(event: *`string`*, listener: *`function`*): `this`

*Overrides EventEmitter.on*

*Defined in [blessed.d.ts:1785](https://github.com/cancerberoSgx/accursed/blob/7a42e78/src/declarations/blessed.d.ts#L1785)*

Received when node gains a new parent. If the node was detached from the sreen, newParent will be undefined.

**Parameters:**

| Name | Type |
| ------ | ------ |
| event | "reparent" |
| listener | `function` |

**Returns:** `void`

*Overrides EventEmitter.on*

*Defined in [blessed.d.ts:1787](https://github.com/cancerberoSgx/accursed/blob/7a42e78/src/declarations/blessed.d.ts#L1787)*

emitted by a parent node when adding a new chhild node.

**Parameters:**

| Name | Type |
| ------ | ------ |
| event | "adopt" |
| listener | `function` |

**Returns:** `void`

*Overrides EventEmitter.on*

*Defined in [blessed.d.ts:1788](https://github.com/cancerberoSgx/accursed/blob/7a42e78/src/declarations/blessed.d.ts#L1788)*

**Parameters:**

| Name | Type |
| ------ | ------ |
| event | "attach" |
| listener | `function` |

**Returns:** `void`

*Overrides EventEmitter.on*

*Defined in [blessed.d.ts:1790](https://github.com/cancerberoSgx/accursed/blob/7a42e78/src/declarations/blessed.d.ts#L1790)*

Emitted by a node that is being detached frmo the screen or ancester.

**Parameters:**

| Name | Type |
| ------ | ------ |
| event | "detach" |
| listener | `function` |

**Returns:** `void`

*Overrides EventEmitter.on*

*Defined in [blessed.d.ts:1792](https://github.com/cancerberoSgx/accursed/blob/7a42e78/src/declarations/blessed.d.ts#L1792)*

Triggered by a parent node when removing a child node

**Parameters:**

| Name | Type |
| ------ | ------ |
| event | "remove" |
| listener | `function` |

**Returns:** `void`

*Overrides EventEmitter.on*

*Defined in [blessed.d.ts:1793](https://github.com/cancerberoSgx/accursed/blob/7a42e78/src/declarations/blessed.d.ts#L1793)*

**Parameters:**

| Name | Type |
| ------ | ------ |
| event | `string` |
| listener | `function` |

**Returns:** `this`

___
<a id="once"></a>

###  once

▸ **once**(event: *`string` \| `symbol`*, listener: *`function`*): `this`

*Inherited from EventEmitter.once*

*Overrides EventEmitter.once*

*Defined in /Users/sebastiangurin/git/accursed/node_modules/@types/node/events.d.ts:12*

**Parameters:**

| Name | Type |
| ------ | ------ |
| event | `string` \| `symbol` |
| listener | `function` |

**Returns:** `this`

___
<a id="prepend"></a>

###  prepend

▸ **prepend**(node: *[Node](api-classes-blessed-d-widgets.node.md)*): `void`

*Defined in [blessed.d.ts:1722](https://github.com/cancerberoSgx/accursed/blob/7a42e78/src/declarations/blessed.d.ts#L1722)*

Prepend a node to this node's children.

**Parameters:**

| Name | Type |
| ------ | ------ |
| node | [Node](api-classes-blessed-d-widgets.node.md) |

**Returns:** `void`

___
<a id="prependlistener"></a>

###  prependListener

▸ **prependListener**(event: *`string` \| `symbol`*, listener: *`function`*): `this`

*Inherited from EventEmitter.prependListener*

*Overrides EventEmitter.prependListener*

*Defined in /Users/sebastiangurin/git/accursed/node_modules/@types/node/events.d.ts:13*

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

*Defined in /Users/sebastiangurin/git/accursed/node_modules/@types/node/events.d.ts:14*

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

*Defined in /Users/sebastiangurin/git/accursed/node_modules/@types/node/events.d.ts:21*

**Parameters:**

| Name | Type |
| ------ | ------ |
| event | `string` \| `symbol` |

**Returns:** `Function`[]

___
<a id="remove"></a>

###  remove

▸ **remove**(node: *[Node](api-classes-blessed-d-widgets.node.md)*): `void`

*Defined in [blessed.d.ts:1732](https://github.com/cancerberoSgx/accursed/blob/7a42e78/src/declarations/blessed.d.ts#L1732)*

Remove child node from node.

**Parameters:**

| Name | Type |
| ------ | ------ |
| node | [Node](api-classes-blessed-d-widgets.node.md) |

**Returns:** `void`

___
<a id="removealllisteners"></a>

###  removeAllListeners

▸ **removeAllListeners**(event?: *`string` \| `symbol`*): `this`

*Inherited from EventEmitter.removeAllListeners*

*Overrides EventEmitter.removeAllListeners*

*Defined in /Users/sebastiangurin/git/accursed/node_modules/@types/node/events.d.ts:17*

**Parameters:**

| Name | Type |
| ------ | ------ |
| `Optional` event | `string` \| `symbol` |

**Returns:** `this`

___
<a id="removelistener"></a>

###  removeListener

▸ **removeListener**(event: *`string` \| `symbol`*, listener: *`function`*): `this`

*Inherited from EventEmitter.removeListener*

*Overrides EventEmitter.removeListener*

*Defined in /Users/sebastiangurin/git/accursed/node_modules/@types/node/events.d.ts:15*

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

*Defined in [blessed.d.ts:1782](https://github.com/cancerberoSgx/accursed/blob/7a42e78/src/declarations/blessed.d.ts#L1782)*

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

*Defined in /Users/sebastiangurin/git/accursed/node_modules/@types/node/events.d.ts:18*

**Parameters:**

| Name | Type |
| ------ | ------ |
| n | `number` |

**Returns:** `this`

___
<a id="listenercount-1"></a>

### `<Static>` listenerCount

▸ **listenerCount**(emitter: *`EventEmitter`*, event: *`string` \| `symbol`*): `number`

*Inherited from EventEmitter.listenerCount*

*Defined in /Users/sebastiangurin/git/accursed/node_modules/@types/node/events.d.ts:7*

*__deprecated__*: since v4.0.0

**Parameters:**

| Name | Type |
| ------ | ------ |
| emitter | `EventEmitter` |
| event | `string` \| `symbol` |

**Returns:** `number`

___

