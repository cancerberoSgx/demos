---
id: api-classes-blessed-d-widgets.nodewithevents
title: NodeWithEvents
sidebar_label: NodeWithEvents
---

[blessed](api-readme.md) > [[blessed.d Module]](api-modules-blessed-d-module.md) > [Widgets](api-modules-blessed-d-widgets.md) > [NodeWithEvents](api-classes-blessed-d-widgets.nodewithevents.md)

## Class

## Hierarchy

↳  [Node](api-classes-blessed-d-widgets.node.md)

**↳ NodeWithEvents**

↳  [Screen](api-classes-blessed-d-widgets.screen.md)

↳  [BlessedElement](api-classes-blessed-d-widgets.blessedelement.md)

## Implements

* [IHasOptions](api-interfaces-blessed-d-widgets.ihasoptions.md)<[INodeOptions](api-interfaces-blessed-d-widgets.inodeoptions.md)>
* [IDestroyable](api-interfaces-blessed-d-widgets.idestroyable.md)

### Constructors

* [constructor](api-classes-blessed-d-widgets.nodewithevents.md#constructor)

### Properties

* [$](api-classes-blessed-d-widgets.nodewithevents.md#_)
* [_](api-classes-blessed-d-widgets.nodewithevents.md#_-1)
* [children](api-classes-blessed-d-widgets.nodewithevents.md#children)
* [data](api-classes-blessed-d-widgets.nodewithevents.md#data)
* [focusable](api-classes-blessed-d-widgets.nodewithevents.md#focusable)
* [index](api-classes-blessed-d-widgets.nodewithevents.md#index)
* [lpos](api-classes-blessed-d-widgets.nodewithevents.md#lpos)
* [options](api-classes-blessed-d-widgets.nodewithevents.md#options)
* [parent](api-classes-blessed-d-widgets.nodewithevents.md#parent)
* [screen](api-classes-blessed-d-widgets.nodewithevents.md#screen)
* [type](api-classes-blessed-d-widgets.nodewithevents.md#type)
* [uid](api-classes-blessed-d-widgets.nodewithevents.md#uid)
* [defaultMaxListeners](api-classes-blessed-d-widgets.nodewithevents.md#defaultmaxlisteners)

### Methods

* [addListener](api-classes-blessed-d-widgets.nodewithevents.md#addlistener)
* [append](api-classes-blessed-d-widgets.nodewithevents.md#append)
* [collectAncestors](api-classes-blessed-d-widgets.nodewithevents.md#collectancestors)
* [collectDescendants](api-classes-blessed-d-widgets.nodewithevents.md#collectdescendants)
* [destroy](api-classes-blessed-d-widgets.nodewithevents.md#destroy)
* [detach](api-classes-blessed-d-widgets.nodewithevents.md#detach)
* [emit](api-classes-blessed-d-widgets.nodewithevents.md#emit)
* [emitAncestors](api-classes-blessed-d-widgets.nodewithevents.md#emitancestors)
* [emitDescendants](api-classes-blessed-d-widgets.nodewithevents.md#emitdescendants)
* [eventNames](api-classes-blessed-d-widgets.nodewithevents.md#eventnames)
* [forAncestors](api-classes-blessed-d-widgets.nodewithevents.md#forancestors)
* [forDescendants](api-classes-blessed-d-widgets.nodewithevents.md#fordescendants)
* [free](api-classes-blessed-d-widgets.nodewithevents.md#free)
* [get](api-classes-blessed-d-widgets.nodewithevents.md#get)
* [getMaxListeners](api-classes-blessed-d-widgets.nodewithevents.md#getmaxlisteners)
* [hasAncestor](api-classes-blessed-d-widgets.nodewithevents.md#hasancestor)
* [hasDescendant](api-classes-blessed-d-widgets.nodewithevents.md#hasdescendant)
* [insert](api-classes-blessed-d-widgets.nodewithevents.md#insert)
* [insertAfter](api-classes-blessed-d-widgets.nodewithevents.md#insertafter)
* [insertBefore](api-classes-blessed-d-widgets.nodewithevents.md#insertbefore)
* [key](api-classes-blessed-d-widgets.nodewithevents.md#key)
* [listenerCount](api-classes-blessed-d-widgets.nodewithevents.md#listenercount)
* [listeners](api-classes-blessed-d-widgets.nodewithevents.md#listeners)
* [off](api-classes-blessed-d-widgets.nodewithevents.md#off)
* [on](api-classes-blessed-d-widgets.nodewithevents.md#on)
* [once](api-classes-blessed-d-widgets.nodewithevents.md#once)
* [onceKey](api-classes-blessed-d-widgets.nodewithevents.md#oncekey)
* [prepend](api-classes-blessed-d-widgets.nodewithevents.md#prepend)
* [prependListener](api-classes-blessed-d-widgets.nodewithevents.md#prependlistener)
* [prependOnceListener](api-classes-blessed-d-widgets.nodewithevents.md#prependoncelistener)
* [rawListeners](api-classes-blessed-d-widgets.nodewithevents.md#rawlisteners)
* [remove](api-classes-blessed-d-widgets.nodewithevents.md#remove)
* [removeAllListeners](api-classes-blessed-d-widgets.nodewithevents.md#removealllisteners)
* [removeKey](api-classes-blessed-d-widgets.nodewithevents.md#removekey)
* [removeListener](api-classes-blessed-d-widgets.nodewithevents.md#removelistener)
* [set](api-classes-blessed-d-widgets.nodewithevents.md#set)
* [setMaxListeners](api-classes-blessed-d-widgets.nodewithevents.md#setmaxlisteners)
* [unkey](api-classes-blessed-d-widgets.nodewithevents.md#unkey)
* [listenerCount](api-classes-blessed-d-widgets.nodewithevents.md#listenercount-1)

---

## Constructors

<a id="constructor"></a>

###  constructor

⊕ **new NodeWithEvents**(options: *[INodeOptions](api-interfaces-blessed-d-widgets.inodeoptions.md)*): [NodeWithEvents](api-classes-blessed-d-widgets.nodewithevents.md)

*Inherited from [Node](api-classes-blessed-d-widgets.node.md).[constructor](api-classes-blessed-d-widgets.node.md#constructor)*

*Defined in [blessed.d.ts:1664](https://github.com/cancerberoSgx/accursed/blob/7a42e78/src/declarations/blessed.d.ts#L1664)*

**Parameters:**

| Name | Type |
| ------ | ------ |
| options | [INodeOptions](api-interfaces-blessed-d-widgets.inodeoptions.md) |

**Returns:** [NodeWithEvents](api-classes-blessed-d-widgets.nodewithevents.md)

___

## Properties

<a id="_"></a>

###  $

**● $**: *`object`*

*Inherited from [Node](api-classes-blessed-d-widgets.node.md).[$](api-classes-blessed-d-widgets.node.md#_)*

*Defined in [blessed.d.ts:1690](https://github.com/cancerberoSgx/accursed/blob/7a42e78/src/declarations/blessed.d.ts#L1690)*

An object for any miscellanous user data.

#### Type declaration

[index: `string`]: `any`

___
<a id="_-1"></a>

###  _

**● _**: *`object`*

*Inherited from [Node](api-classes-blessed-d-widgets.node.md).[_](api-classes-blessed-d-widgets.node.md#_-1)*

*Defined in [blessed.d.ts:1685](https://github.com/cancerberoSgx/accursed/blob/7a42e78/src/declarations/blessed.d.ts#L1685)*

An object for any miscellanous user data.

#### Type declaration

[index: `string`]: `any`

___
<a id="children"></a>

###  children

**● children**: *[Node](api-classes-blessed-d-widgets.node.md)[]*

*Inherited from [Node](api-classes-blessed-d-widgets.node.md).[children](api-classes-blessed-d-widgets.node.md#children)*

*Defined in [blessed.d.ts:1717](https://github.com/cancerberoSgx/accursed/blob/7a42e78/src/declarations/blessed.d.ts#L1717)*

Array of node's children.

___
<a id="data"></a>

###  data

**● data**: *`object`*

*Inherited from [Node](api-classes-blessed-d-widgets.node.md).[data](api-classes-blessed-d-widgets.node.md#data)*

*Defined in [blessed.d.ts:1680](https://github.com/cancerberoSgx/accursed/blob/7a42e78/src/declarations/blessed.d.ts#L1680)*

An object for any miscellanous user data.

#### Type declaration

[index: `string`]: `any`

___
<a id="focusable"></a>

###  focusable

**● focusable**: *`boolean`*

*Inherited from [Node](api-classes-blessed-d-widgets.node.md).[focusable](api-classes-blessed-d-widgets.node.md#focusable)*

*Defined in [blessed.d.ts:1670](https://github.com/cancerberoSgx/accursed/blob/7a42e78/src/declarations/blessed.d.ts#L1670)*

___
<a id="index"></a>

###  index

**● index**: *`number`*

*Inherited from [Node](api-classes-blessed-d-widgets.node.md).[index](api-classes-blessed-d-widgets.node.md#index)*

*Defined in [blessed.d.ts:1702](https://github.com/cancerberoSgx/accursed/blob/7a42e78/src/declarations/blessed.d.ts#L1702)*

Render index (document order index) of the last render call.

___
<a id="lpos"></a>

###  lpos

**● lpos**: *[PositionCoords](api-classes-blessed-d-widgets.positioncoords.md)*

*Inherited from [Node](api-classes-blessed-d-widgets.node.md).[lpos](api-classes-blessed-d-widgets.node.md#lpos)*

*Defined in [blessed.d.ts:1692](https://github.com/cancerberoSgx/accursed/blob/7a42e78/src/declarations/blessed.d.ts#L1692)*

___
<a id="options"></a>

###  options

**● options**: *[INodeOptions](api-interfaces-blessed-d-widgets.inodeoptions.md)*

*Implementation of [IHasOptions](api-interfaces-blessed-d-widgets.ihasoptions.md).[options](api-interfaces-blessed-d-widgets.ihasoptions.md#options)*

*Inherited from [Node](api-classes-blessed-d-widgets.node.md).[options](api-classes-blessed-d-widgets.node.md#options)*

*Defined in [blessed.d.ts:1675](https://github.com/cancerberoSgx/accursed/blob/7a42e78/src/declarations/blessed.d.ts#L1675)*

Original options object.

___
<a id="parent"></a>

### `<Optional>` parent

**● parent**: *[Node](api-classes-blessed-d-widgets.node.md)*

*Inherited from [Node](api-classes-blessed-d-widgets.node.md).[parent](api-classes-blessed-d-widgets.node.md#parent)*

*Defined in [blessed.d.ts:1712](https://github.com/cancerberoSgx/accursed/blob/7a42e78/src/declarations/blessed.d.ts#L1712)*

Parent node. If null it means the element is not attached to any screen or program, or the node is a Screen.

___
<a id="screen"></a>

###  screen

**● screen**: *[Screen](api-classes-blessed-d-widgets.screen.md)*

*Inherited from [Node](api-classes-blessed-d-widgets.node.md).[screen](api-classes-blessed-d-widgets.node.md#screen)*

*Defined in [blessed.d.ts:1707](https://github.com/cancerberoSgx/accursed/blob/7a42e78/src/declarations/blessed.d.ts#L1707)*

Parent screen.

___
<a id="type"></a>

###  type

**● type**: *`string`*

*Inherited from [Node](api-classes-blessed-d-widgets.node.md).[type](api-classes-blessed-d-widgets.node.md#type)*

*Defined in [blessed.d.ts:1697](https://github.com/cancerberoSgx/accursed/blob/7a42e78/src/declarations/blessed.d.ts#L1697)*

Type of the node (e.g. box).

___
<a id="uid"></a>

###  uid

**● uid**: *`number`*

*Inherited from [Node](api-classes-blessed-d-widgets.node.md).[uid](api-classes-blessed-d-widgets.node.md#uid)*

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

*Inherited from [Node](api-classes-blessed-d-widgets.node.md).[append](api-classes-blessed-d-widgets.node.md#append)*

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

*Inherited from [Node](api-classes-blessed-d-widgets.node.md).[collectAncestors](api-classes-blessed-d-widgets.node.md#collectancestors)*

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

*Inherited from [Node](api-classes-blessed-d-widgets.node.md).[collectDescendants](api-classes-blessed-d-widgets.node.md#collectdescendants)*

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

*Inherited from [Node](api-classes-blessed-d-widgets.node.md).[destroy](api-classes-blessed-d-widgets.node.md#destroy)*

*Defined in [blessed.d.ts:1772](https://github.com/cancerberoSgx/accursed/blob/7a42e78/src/declarations/blessed.d.ts#L1772)*

[detach](api-classes-blessed-d-widgets.nodewithevents.md#detach)() this node from its parent, and will also detach and destroy each of its descendant nodes each of them emitting \[\[destory\]\] event also.

**Returns:** `void`

___
<a id="detach"></a>

###  detach

▸ **detach**(): `void`

*Inherited from [Node](api-classes-blessed-d-widgets.node.md).[detach](api-classes-blessed-d-widgets.node.md#detach)*

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

*Inherited from [Node](api-classes-blessed-d-widgets.node.md).[emitAncestors](api-classes-blessed-d-widgets.node.md#emitancestors)*

*Defined in [blessed.d.ts:1766](https://github.com/cancerberoSgx/accursed/blob/7a42e78/src/declarations/blessed.d.ts#L1766)*

**Returns:** `void`

___
<a id="emitdescendants"></a>

###  emitDescendants

▸ **emitDescendants**(type?: *`undefined` \| `string`*, ...args: *`any`[]*): `void`

*Inherited from [Node](api-classes-blessed-d-widgets.node.md).[emitDescendants](api-classes-blessed-d-widgets.node.md#emitdescendants)*

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

*Inherited from [Node](api-classes-blessed-d-widgets.node.md).[forAncestors](api-classes-blessed-d-widgets.node.md#forancestors)*

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

*Inherited from [Node](api-classes-blessed-d-widgets.node.md).[forDescendants](api-classes-blessed-d-widgets.node.md#fordescendants)*

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

*Inherited from [Node](api-classes-blessed-d-widgets.node.md).[free](api-classes-blessed-d-widgets.node.md#free)*

*Defined in [blessed.d.ts:1753](https://github.com/cancerberoSgx/accursed/blob/7a42e78/src/declarations/blessed.d.ts#L1753)*

**Returns:** `void`

___
<a id="get"></a>

###  get

▸ **get**<`T`>(name: *`string`*, def: *`T`*): `T`

*Inherited from [Node](api-classes-blessed-d-widgets.node.md).[get](api-classes-blessed-d-widgets.node.md#get)*

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

*Inherited from [Node](api-classes-blessed-d-widgets.node.md).[hasAncestor](api-classes-blessed-d-widgets.node.md#hasancestor)*

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

*Inherited from [Node](api-classes-blessed-d-widgets.node.md).[hasDescendant](api-classes-blessed-d-widgets.node.md#hasdescendant)*

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

*Inherited from [Node](api-classes-blessed-d-widgets.node.md).[insert](api-classes-blessed-d-widgets.node.md#insert)*

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

*Inherited from [Node](api-classes-blessed-d-widgets.node.md).[insertAfter](api-classes-blessed-d-widgets.node.md#insertafter)*

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

*Inherited from [Node](api-classes-blessed-d-widgets.node.md).[insertBefore](api-classes-blessed-d-widgets.node.md#insertbefore)*

*Defined in [blessed.d.ts:1742](https://github.com/cancerberoSgx/accursed/blob/7a42e78/src/declarations/blessed.d.ts#L1742)*

Insert a node to this node's children before the reference node.

**Parameters:**

| Name | Type |
| ------ | ------ |
| node | [Node](api-classes-blessed-d-widgets.node.md) |
| refNode | [Node](api-classes-blessed-d-widgets.node.md) |

**Returns:** `void`

___
<a id="key"></a>

###  key

▸ **key**(name: *`string` \| `string`[]*, listener: *[KeyEventListener](api-modules-blessed-d-widgets.md#keyeventlistener)*): `void`

*Defined in [blessed.d.ts:1859](https://github.com/cancerberoSgx/accursed/blob/7a42e78/src/declarations/blessed.d.ts#L1859)*

Bind a keypress listener for a specific key.

**Parameters:**

| Name | Type |
| ------ | ------ |
| name | `string` \| `string`[] |
| listener | [KeyEventListener](api-modules-blessed-d-widgets.md#keyeventlistener) |

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

▸ **on**(event: *`string`*, listener: *`function`*): `this`

▸ **on**(event: *[NodeMouseEventType](api-modules-blessed-d-widgets.md#nodemouseeventtype)*, callback: *`function`*): `this`

▸ **on**(event: *"keypress"*, callback: *[KeyEventListener](api-modules-blessed-d-widgets.md#keyeventlistener)*): `this`

▸ **on**(event: *[NodeScreenEventType](api-modules-blessed-d-widgets.md#nodescreeneventtype)*, callback: *`function`*): `this`

▸ **on**(event: *"warning"*, callback: *`function`*): `this`

▸ **on**(event: *[NodeGenericEventType](api-modules-blessed-d-widgets.md#nodegenericeventtype)*, callback: *`function`*): `this`

*Overrides [Node](api-classes-blessed-d-widgets.node.md).[on](api-classes-blessed-d-widgets.node.md#on)*

*Defined in [blessed.d.ts:1872](https://github.com/cancerberoSgx/accursed/blob/7a42e78/src/declarations/blessed.d.ts#L1872)*

**Parameters:**

| Name | Type |
| ------ | ------ |
| event | `string` |
| listener | `function` |

**Returns:** `this`

*Overrides [Node](api-classes-blessed-d-widgets.node.md).[on](api-classes-blessed-d-widgets.node.md#on)*

*Defined in [blessed.d.ts:1874](https://github.com/cancerberoSgx/accursed/blob/7a42e78/src/declarations/blessed.d.ts#L1874)*

Received on mouse events.

**Parameters:**

| Name | Type |
| ------ | ------ |
| event | [NodeMouseEventType](api-modules-blessed-d-widgets.md#nodemouseeventtype) |
| callback | `function` |

**Returns:** `this`

*Overrides [Node](api-classes-blessed-d-widgets.node.md).[on](api-classes-blessed-d-widgets.node.md#on)*

*Defined in [blessed.d.ts:1877](https://github.com/cancerberoSgx/accursed/blob/7a42e78/src/declarations/blessed.d.ts#L1877)*

Received on key events.

**Parameters:**

| Name | Type |
| ------ | ------ |
| event | "keypress" |
| callback | [KeyEventListener](api-modules-blessed-d-widgets.md#keyeventlistener) |

**Returns:** `this`

*Overrides [Node](api-classes-blessed-d-widgets.node.md).[on](api-classes-blessed-d-widgets.node.md#on)*

*Defined in [blessed.d.ts:1878](https://github.com/cancerberoSgx/accursed/blob/7a42e78/src/declarations/blessed.d.ts#L1878)*

**Parameters:**

| Name | Type |
| ------ | ------ |
| event | [NodeScreenEventType](api-modules-blessed-d-widgets.md#nodescreeneventtype) |
| callback | `function` |

**Returns:** `this`

*Overrides [Node](api-classes-blessed-d-widgets.node.md).[on](api-classes-blessed-d-widgets.node.md#on)*

*Defined in [blessed.d.ts:1880](https://github.com/cancerberoSgx/accursed/blob/7a42e78/src/declarations/blessed.d.ts#L1880)*

Received when blessed notices something untoward (output is not a tty, terminfo not found, etc).

**Parameters:**

| Name | Type |
| ------ | ------ |
| event | "warning" |
| callback | `function` |

**Returns:** `this`

*Overrides [Node](api-classes-blessed-d-widgets.node.md).[on](api-classes-blessed-d-widgets.node.md#on)*

*Defined in [blessed.d.ts:1881](https://github.com/cancerberoSgx/accursed/blob/7a42e78/src/declarations/blessed.d.ts#L1881)*

**Parameters:**

| Name | Type |
| ------ | ------ |
| event | [NodeGenericEventType](api-modules-blessed-d-widgets.md#nodegenericeventtype) |
| callback | `function` |

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
<a id="oncekey"></a>

###  onceKey

▸ **onceKey**(name: *`string`*, listener: *[KeyEventListener](api-modules-blessed-d-widgets.md#keyeventlistener)*): `void`

*Defined in [blessed.d.ts:1864](https://github.com/cancerberoSgx/accursed/blob/7a42e78/src/declarations/blessed.d.ts#L1864)*

Bind a keypress listener for a specific key once.

**Parameters:**

| Name | Type |
| ------ | ------ |
| name | `string` |
| listener | [KeyEventListener](api-modules-blessed-d-widgets.md#keyeventlistener) |

**Returns:** `void`

___
<a id="prepend"></a>

###  prepend

▸ **prepend**(node: *[Node](api-classes-blessed-d-widgets.node.md)*): `void`

*Inherited from [Node](api-classes-blessed-d-widgets.node.md).[prepend](api-classes-blessed-d-widgets.node.md#prepend)*

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

*Inherited from [Node](api-classes-blessed-d-widgets.node.md).[remove](api-classes-blessed-d-widgets.node.md#remove)*

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
<a id="removekey"></a>

###  removeKey

▸ **removeKey**(name: *`string`*, listener: *[KeyEventListener](api-modules-blessed-d-widgets.md#keyeventlistener)*): `void`

*Defined in [blessed.d.ts:1870](https://github.com/cancerberoSgx/accursed/blob/7a42e78/src/declarations/blessed.d.ts#L1870)*

**Parameters:**

| Name | Type |
| ------ | ------ |
| name | `string` |
| listener | [KeyEventListener](api-modules-blessed-d-widgets.md#keyeventlistener) |

**Returns:** `void`

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

*Inherited from [Node](api-classes-blessed-d-widgets.node.md).[set](api-classes-blessed-d-widgets.node.md#set)*

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
<a id="unkey"></a>

###  unkey

▸ **unkey**(name: *`string`*, listener: *[KeyEventListener](api-modules-blessed-d-widgets.md#keyeventlistener)*): `void`

*Defined in [blessed.d.ts:1869](https://github.com/cancerberoSgx/accursed/blob/7a42e78/src/declarations/blessed.d.ts#L1869)*

Remove a keypress listener for a specific key.

**Parameters:**

| Name | Type |
| ------ | ------ |
| name | `string` |
| listener | [KeyEventListener](api-modules-blessed-d-widgets.md#keyeventlistener) |

**Returns:** `void`

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
