---
id: api-classes-blessed-d-widget.node
title: Node
sidebar_label: Node
---

[blessed](api-readme.md) > [[blessed.d Module]](api-modules-blessed-d-module.md) > [widget](api-modules-blessed-d-widget.md) > [Node](api-classes-blessed-d-widget.node.md)

## Class

## Hierarchy

↳  [Node](api-classes-blessed-d-widgets.node.md)

**↳ Node**

## Implements

* [IHasOptions](api-interfaces-blessed-d-widgets.ihasoptions.md)<[INodeOptions](api-interfaces-blessed-d-widgets.inodeoptions.md)>
* [IDestroyable](api-interfaces-blessed-d-widgets.idestroyable.md)

### Constructors

* [constructor](api-classes-blessed-d-widget.node.md#constructor)

### Properties

* [$](api-classes-blessed-d-widget.node.md#_)
* [_](api-classes-blessed-d-widget.node.md#_-1)
* [children](api-classes-blessed-d-widget.node.md#children)
* [data](api-classes-blessed-d-widget.node.md#data)
* [focusable](api-classes-blessed-d-widget.node.md#focusable)
* [index](api-classes-blessed-d-widget.node.md#index)
* [lpos](api-classes-blessed-d-widget.node.md#lpos)
* [options](api-classes-blessed-d-widget.node.md#options)
* [parent](api-classes-blessed-d-widget.node.md#parent)
* [screen](api-classes-blessed-d-widget.node.md#screen)
* [type](api-classes-blessed-d-widget.node.md#type)
* [uid](api-classes-blessed-d-widget.node.md#uid)
* [defaultMaxListeners](api-classes-blessed-d-widget.node.md#defaultmaxlisteners)

### Methods

* [addListener](api-classes-blessed-d-widget.node.md#addlistener)
* [append](api-classes-blessed-d-widget.node.md#append)
* [collectAncestors](api-classes-blessed-d-widget.node.md#collectancestors)
* [collectDescendants](api-classes-blessed-d-widget.node.md#collectdescendants)
* [destroy](api-classes-blessed-d-widget.node.md#destroy)
* [detach](api-classes-blessed-d-widget.node.md#detach)
* [emit](api-classes-blessed-d-widget.node.md#emit)
* [emitAncestors](api-classes-blessed-d-widget.node.md#emitancestors)
* [emitDescendants](api-classes-blessed-d-widget.node.md#emitdescendants)
* [eventNames](api-classes-blessed-d-widget.node.md#eventnames)
* [forAncestors](api-classes-blessed-d-widget.node.md#forancestors)
* [forDescendants](api-classes-blessed-d-widget.node.md#fordescendants)
* [free](api-classes-blessed-d-widget.node.md#free)
* [get](api-classes-blessed-d-widget.node.md#get)
* [getMaxListeners](api-classes-blessed-d-widget.node.md#getmaxlisteners)
* [hasAncestor](api-classes-blessed-d-widget.node.md#hasancestor)
* [hasDescendant](api-classes-blessed-d-widget.node.md#hasdescendant)
* [insert](api-classes-blessed-d-widget.node.md#insert)
* [insertAfter](api-classes-blessed-d-widget.node.md#insertafter)
* [insertBefore](api-classes-blessed-d-widget.node.md#insertbefore)
* [listenerCount](api-classes-blessed-d-widget.node.md#listenercount)
* [listeners](api-classes-blessed-d-widget.node.md#listeners)
* [off](api-classes-blessed-d-widget.node.md#off)
* [on](api-classes-blessed-d-widget.node.md#on)
* [once](api-classes-blessed-d-widget.node.md#once)
* [prepend](api-classes-blessed-d-widget.node.md#prepend)
* [prependListener](api-classes-blessed-d-widget.node.md#prependlistener)
* [prependOnceListener](api-classes-blessed-d-widget.node.md#prependoncelistener)
* [rawListeners](api-classes-blessed-d-widget.node.md#rawlisteners)
* [remove](api-classes-blessed-d-widget.node.md#remove)
* [removeAllListeners](api-classes-blessed-d-widget.node.md#removealllisteners)
* [removeListener](api-classes-blessed-d-widget.node.md#removelistener)
* [set](api-classes-blessed-d-widget.node.md#set)
* [setMaxListeners](api-classes-blessed-d-widget.node.md#setmaxlisteners)
* [listenerCount](api-classes-blessed-d-widget.node.md#listenercount-1)

---

## Constructors

<a id="constructor"></a>

###  constructor

⊕ **new Node**(options: *[INodeOptions](api-interfaces-blessed-d-widgets.inodeoptions.md)*): [Node](api-classes-blessed-d-widget.node.md)

*Inherited from [Node](api-classes-blessed-d-widgets.node.md).[constructor](api-classes-blessed-d-widgets.node.md#constructor)*

*Defined in [blessed.d.ts:1652](https://github.com/cancerberoSgx/accursed/blob/f66c8ce/src/declarations/blessed.d.ts#L1652)*

**Parameters:**

| Name | Type |
| ------ | ------ |
| options | [INodeOptions](api-interfaces-blessed-d-widgets.inodeoptions.md) |

**Returns:** [Node](api-classes-blessed-d-widget.node.md)

___

## Properties

<a id="_"></a>

###  $

**● $**: *`object`*

*Inherited from [Node](api-classes-blessed-d-widgets.node.md).[$](api-classes-blessed-d-widgets.node.md#_)*

*Defined in [blessed.d.ts:1678](https://github.com/cancerberoSgx/accursed/blob/f66c8ce/src/declarations/blessed.d.ts#L1678)*

An object for any miscellanous user data.

#### Type declaration

[index: `string`]: `any`

___
<a id="_-1"></a>

###  _

**● _**: *`object`*

*Inherited from [Node](api-classes-blessed-d-widgets.node.md).[_](api-classes-blessed-d-widgets.node.md#_-1)*

*Defined in [blessed.d.ts:1673](https://github.com/cancerberoSgx/accursed/blob/f66c8ce/src/declarations/blessed.d.ts#L1673)*

An object for any miscellanous user data.

#### Type declaration

[index: `string`]: `any`

___
<a id="children"></a>

###  children

**● children**: *[Node](api-classes-blessed-d-widgets.node.md)[]*

*Inherited from [Node](api-classes-blessed-d-widgets.node.md).[children](api-classes-blessed-d-widgets.node.md#children)*

*Defined in [blessed.d.ts:1705](https://github.com/cancerberoSgx/accursed/blob/f66c8ce/src/declarations/blessed.d.ts#L1705)*

Array of node's children.

___
<a id="data"></a>

###  data

**● data**: *`object`*

*Inherited from [Node](api-classes-blessed-d-widgets.node.md).[data](api-classes-blessed-d-widgets.node.md#data)*

*Defined in [blessed.d.ts:1668](https://github.com/cancerberoSgx/accursed/blob/f66c8ce/src/declarations/blessed.d.ts#L1668)*

An object for any miscellanous user data.

#### Type declaration

[index: `string`]: `any`

___
<a id="focusable"></a>

###  focusable

**● focusable**: *`boolean`*

*Inherited from [Node](api-classes-blessed-d-widgets.node.md).[focusable](api-classes-blessed-d-widgets.node.md#focusable)*

*Defined in [blessed.d.ts:1658](https://github.com/cancerberoSgx/accursed/blob/f66c8ce/src/declarations/blessed.d.ts#L1658)*

___
<a id="index"></a>

###  index

**● index**: *`number`*

*Inherited from [Node](api-classes-blessed-d-widgets.node.md).[index](api-classes-blessed-d-widgets.node.md#index)*

*Defined in [blessed.d.ts:1690](https://github.com/cancerberoSgx/accursed/blob/f66c8ce/src/declarations/blessed.d.ts#L1690)*

Render index (document order index) of the last render call.

___
<a id="lpos"></a>

###  lpos

**● lpos**: *[PositionCoords](api-classes-blessed-d-widgets.positioncoords.md)*

*Inherited from [Node](api-classes-blessed-d-widgets.node.md).[lpos](api-classes-blessed-d-widgets.node.md#lpos)*

*Defined in [blessed.d.ts:1680](https://github.com/cancerberoSgx/accursed/blob/f66c8ce/src/declarations/blessed.d.ts#L1680)*

___
<a id="options"></a>

###  options

**● options**: *[INodeOptions](api-interfaces-blessed-d-widgets.inodeoptions.md)*

*Implementation of [IHasOptions](api-interfaces-blessed-d-widgets.ihasoptions.md).[options](api-interfaces-blessed-d-widgets.ihasoptions.md#options)*

*Inherited from [Node](api-classes-blessed-d-widgets.node.md).[options](api-classes-blessed-d-widgets.node.md#options)*

*Defined in [blessed.d.ts:1663](https://github.com/cancerberoSgx/accursed/blob/f66c8ce/src/declarations/blessed.d.ts#L1663)*

Original options object.

___
<a id="parent"></a>

### `<Optional>` parent

**● parent**: *[Node](api-classes-blessed-d-widgets.node.md)*

*Inherited from [Node](api-classes-blessed-d-widgets.node.md).[parent](api-classes-blessed-d-widgets.node.md#parent)*

*Defined in [blessed.d.ts:1700](https://github.com/cancerberoSgx/accursed/blob/f66c8ce/src/declarations/blessed.d.ts#L1700)*

Parent node. If null it means the element is not attached to any screen or program, or the node is a Screen.

___
<a id="screen"></a>

###  screen

**● screen**: *[Screen](api-classes-blessed-d-widgets.screen.md)*

*Inherited from [Node](api-classes-blessed-d-widgets.node.md).[screen](api-classes-blessed-d-widgets.node.md#screen)*

*Defined in [blessed.d.ts:1695](https://github.com/cancerberoSgx/accursed/blob/f66c8ce/src/declarations/blessed.d.ts#L1695)*

Parent screen.

___
<a id="type"></a>

###  type

**● type**: *`string`*

*Inherited from [Node](api-classes-blessed-d-widgets.node.md).[type](api-classes-blessed-d-widgets.node.md#type)*

*Defined in [blessed.d.ts:1685](https://github.com/cancerberoSgx/accursed/blob/f66c8ce/src/declarations/blessed.d.ts#L1685)*

Type of the node (e.g. box).

___
<a id="uid"></a>

###  uid

**● uid**: *`number`*

*Inherited from [Node](api-classes-blessed-d-widgets.node.md).[uid](api-classes-blessed-d-widgets.node.md#uid)*

*Defined in [blessed.d.ts:1656](https://github.com/cancerberoSgx/accursed/blob/f66c8ce/src/declarations/blessed.d.ts#L1656)*

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

▸ **append**(node: *[Node](api-classes-blessed-d-widgets.node.md)*): `void`

*Inherited from [Node](api-classes-blessed-d-widgets.node.md).[append](api-classes-blessed-d-widgets.node.md#append)*

*Defined in [blessed.d.ts:1715](https://github.com/cancerberoSgx/accursed/blob/f66c8ce/src/declarations/blessed.d.ts#L1715)*

Append a node to this node's children.

**Parameters:**

| Name | Type |
| ------ | ------ |
| node | [Node](api-classes-blessed-d-widgets.node.md) |

**Returns:** `void`

___
<a id="collectancestors"></a>

###  collectAncestors

▸ **collectAncestors**(s?: *`boolean`*): `void`

*Inherited from [Node](api-classes-blessed-d-widgets.node.md).[collectAncestors](api-classes-blessed-d-widgets.node.md#collectancestors)*

*Defined in [blessed.d.ts:1748](https://github.com/cancerberoSgx/accursed/blob/f66c8ce/src/declarations/blessed.d.ts#L1748)*

**Parameters:**

| Name | Type |
| ------ | ------ |
| `Optional` s | `boolean` |

**Returns:** `void`

___
<a id="collectdescendants"></a>

###  collectDescendants

▸ **collectDescendants**(s?: *`boolean`*): `void`

*Inherited from [Node](api-classes-blessed-d-widgets.node.md).[collectDescendants](api-classes-blessed-d-widgets.node.md#collectdescendants)*

*Defined in [blessed.d.ts:1747](https://github.com/cancerberoSgx/accursed/blob/f66c8ce/src/declarations/blessed.d.ts#L1747)*

**Parameters:**

| Name | Type |
| ------ | ------ |
| `Optional` s | `boolean` |

**Returns:** `void`

___
<a id="destroy"></a>

###  destroy

▸ **destroy**(): `void`

*Implementation of [IDestroyable](api-interfaces-blessed-d-widgets.idestroyable.md).[destroy](api-interfaces-blessed-d-widgets.idestroyable.md#destroy)*

*Inherited from [Node](api-classes-blessed-d-widgets.node.md).[destroy](api-classes-blessed-d-widgets.node.md#destroy)*

*Defined in [blessed.d.ts:1760](https://github.com/cancerberoSgx/accursed/blob/f66c8ce/src/declarations/blessed.d.ts#L1760)*

[detach](api-classes-blessed-d-widget.node.md#detach)() this node from its parent, and will also detach and destroy each of its descendant nodes each of them emitting \[\[destory\]\] event also.

**Returns:** `void`

___
<a id="detach"></a>

###  detach

▸ **detach**(): `void`

*Inherited from [Node](api-classes-blessed-d-widgets.node.md).[detach](api-classes-blessed-d-widgets.node.md#detach)*

*Defined in [blessed.d.ts:1740](https://github.com/cancerberoSgx/accursed/blob/f66c8ce/src/declarations/blessed.d.ts#L1740)*

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

*Inherited from [Node](api-classes-blessed-d-widgets.node.md).[emitAncestors](api-classes-blessed-d-widgets.node.md#emitancestors)*

*Defined in [blessed.d.ts:1754](https://github.com/cancerberoSgx/accursed/blob/f66c8ce/src/declarations/blessed.d.ts#L1754)*

**Returns:** `void`

___
<a id="emitdescendants"></a>

###  emitDescendants

▸ **emitDescendants**(type?: *`string`*, ...args: *`any`[]*): `void`

*Inherited from [Node](api-classes-blessed-d-widgets.node.md).[emitDescendants](api-classes-blessed-d-widgets.node.md#emitdescendants)*

*Defined in [blessed.d.ts:1753](https://github.com/cancerberoSgx/accursed/blob/f66c8ce/src/declarations/blessed.d.ts#L1753)*

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

*Inherited from [Node](api-classes-blessed-d-widgets.node.md).[forAncestors](api-classes-blessed-d-widgets.node.md#forancestors)*

*Defined in [blessed.d.ts:1746](https://github.com/cancerberoSgx/accursed/blob/f66c8ce/src/declarations/blessed.d.ts#L1746)*

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

*Inherited from [Node](api-classes-blessed-d-widgets.node.md).[forDescendants](api-classes-blessed-d-widgets.node.md#fordescendants)*

*Defined in [blessed.d.ts:1745](https://github.com/cancerberoSgx/accursed/blob/f66c8ce/src/declarations/blessed.d.ts#L1745)*

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

*Inherited from [Node](api-classes-blessed-d-widgets.node.md).[free](api-classes-blessed-d-widgets.node.md#free)*

*Defined in [blessed.d.ts:1741](https://github.com/cancerberoSgx/accursed/blob/f66c8ce/src/declarations/blessed.d.ts#L1741)*

**Returns:** `void`

___
<a id="get"></a>

###  get

▸ **get**<`T`>(name: *`string`*, def: *`T`*): `T`

*Inherited from [Node](api-classes-blessed-d-widgets.node.md).[get](api-classes-blessed-d-widgets.node.md#get)*

*Defined in [blessed.d.ts:1765](https://github.com/cancerberoSgx/accursed/blob/f66c8ce/src/declarations/blessed.d.ts#L1765)*

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

▸ **hasAncestor**<`T`>(target: *[Node](api-classes-blessed-d-widgets.node.md)*): [Node](api-classes-blessed-d-widgets.node.md)

*Inherited from [Node](api-classes-blessed-d-widgets.node.md).[hasAncestor](api-classes-blessed-d-widgets.node.md#hasancestor)*

*Defined in [blessed.d.ts:1756](https://github.com/cancerberoSgx/accursed/blob/f66c8ce/src/declarations/blessed.d.ts#L1756)*

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

*Inherited from [Node](api-classes-blessed-d-widgets.node.md).[hasDescendant](api-classes-blessed-d-widgets.node.md#hasdescendant)*

*Defined in [blessed.d.ts:1755](https://github.com/cancerberoSgx/accursed/blob/f66c8ce/src/declarations/blessed.d.ts#L1755)*

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

*Inherited from [Node](api-classes-blessed-d-widgets.node.md).[insert](api-classes-blessed-d-widgets.node.md#insert)*

*Defined in [blessed.d.ts:1725](https://github.com/cancerberoSgx/accursed/blob/f66c8ce/src/declarations/blessed.d.ts#L1725)*

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

*Inherited from [Node](api-classes-blessed-d-widgets.node.md).[insertAfter](api-classes-blessed-d-widgets.node.md#insertafter)*

*Defined in [blessed.d.ts:1735](https://github.com/cancerberoSgx/accursed/blob/f66c8ce/src/declarations/blessed.d.ts#L1735)*

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

*Inherited from [Node](api-classes-blessed-d-widgets.node.md).[insertBefore](api-classes-blessed-d-widgets.node.md#insertbefore)*

*Defined in [blessed.d.ts:1730](https://github.com/cancerberoSgx/accursed/blob/f66c8ce/src/declarations/blessed.d.ts#L1730)*

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

▸ **on**(event: *"reparent"*, listener: *`function`*): `void`

▸ **on**(event: *"adopt"*, listener: *`function`*): `void`

▸ **on**(event: *"attach"*, listener: *`function`*): `void`

▸ **on**(event: *"detach"*, listener: *`function`*): `void`

▸ **on**(event: *"remove"*, listener: *`function`*): `void`

▸ **on**(event: *`string`*, listener: *`function`*): `this`

*Inherited from [Node](api-classes-blessed-d-widgets.node.md).[on](api-classes-blessed-d-widgets.node.md#on)*

*Overrides EventEmitter.on*

*Defined in [blessed.d.ts:1773](https://github.com/cancerberoSgx/accursed/blob/f66c8ce/src/declarations/blessed.d.ts#L1773)*

Received when node gains a new parent. If the node was detached from the sreen, newParent will be undefined.

**Parameters:**

| Name | Type |
| ------ | ------ |
| event | "reparent" |
| listener | `function` |

**Returns:** `void`

*Inherited from [Node](api-classes-blessed-d-widgets.node.md).[on](api-classes-blessed-d-widgets.node.md#on)*

*Overrides EventEmitter.on*

*Defined in [blessed.d.ts:1775](https://github.com/cancerberoSgx/accursed/blob/f66c8ce/src/declarations/blessed.d.ts#L1775)*

emitted by a parent node when adding a new chhild node.

**Parameters:**

| Name | Type |
| ------ | ------ |
| event | "adopt" |
| listener | `function` |

**Returns:** `void`

*Inherited from [Node](api-classes-blessed-d-widgets.node.md).[on](api-classes-blessed-d-widgets.node.md#on)*

*Overrides EventEmitter.on*

*Defined in [blessed.d.ts:1776](https://github.com/cancerberoSgx/accursed/blob/f66c8ce/src/declarations/blessed.d.ts#L1776)*

**Parameters:**

| Name | Type |
| ------ | ------ |
| event | "attach" |
| listener | `function` |

**Returns:** `void`

*Inherited from [Node](api-classes-blessed-d-widgets.node.md).[on](api-classes-blessed-d-widgets.node.md#on)*

*Overrides EventEmitter.on*

*Defined in [blessed.d.ts:1778](https://github.com/cancerberoSgx/accursed/blob/f66c8ce/src/declarations/blessed.d.ts#L1778)*

Emitted by a node that is being detached frmo the screen or ancester.

**Parameters:**

| Name | Type |
| ------ | ------ |
| event | "detach" |
| listener | `function` |

**Returns:** `void`

*Inherited from [Node](api-classes-blessed-d-widgets.node.md).[on](api-classes-blessed-d-widgets.node.md#on)*

*Overrides EventEmitter.on*

*Defined in [blessed.d.ts:1780](https://github.com/cancerberoSgx/accursed/blob/f66c8ce/src/declarations/blessed.d.ts#L1780)*

Triggered by a parent node when removing a child node

**Parameters:**

| Name | Type |
| ------ | ------ |
| event | "remove" |
| listener | `function` |

**Returns:** `void`

*Inherited from [Node](api-classes-blessed-d-widgets.node.md).[on](api-classes-blessed-d-widgets.node.md#on)*

*Overrides EventEmitter.on*

*Defined in [blessed.d.ts:1781](https://github.com/cancerberoSgx/accursed/blob/f66c8ce/src/declarations/blessed.d.ts#L1781)*

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

*Defined in /Users/sebastiangurin/git/accursed/node_modules/@types/node/events.d.ts:13*

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

*Inherited from [Node](api-classes-blessed-d-widgets.node.md).[prepend](api-classes-blessed-d-widgets.node.md#prepend)*

*Defined in [blessed.d.ts:1710](https://github.com/cancerberoSgx/accursed/blob/f66c8ce/src/declarations/blessed.d.ts#L1710)*

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

▸ **remove**(node: *[Node](api-classes-blessed-d-widgets.node.md)*): `void`

*Inherited from [Node](api-classes-blessed-d-widgets.node.md).[remove](api-classes-blessed-d-widgets.node.md#remove)*

*Defined in [blessed.d.ts:1720](https://github.com/cancerberoSgx/accursed/blob/f66c8ce/src/declarations/blessed.d.ts#L1720)*

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

*Defined in /Users/sebastiangurin/git/accursed/node_modules/@types/node/events.d.ts:18*

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

*Inherited from [Node](api-classes-blessed-d-widgets.node.md).[set](api-classes-blessed-d-widgets.node.md#set)*

*Defined in [blessed.d.ts:1770](https://github.com/cancerberoSgx/accursed/blob/f66c8ce/src/declarations/blessed.d.ts#L1770)*

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

