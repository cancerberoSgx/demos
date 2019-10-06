[accursed](../README.md) › [Globals](../globals.md) › ["declarations/blessed.d"](../modules/_declarations_blessed_d_.md) › [Widgets](../modules/_declarations_blessed_d_.widgets.md) › [Node](_declarations_blessed_d_.widgets.node.md)

# Class: Node

The base node which everything inherits from.

## Hierarchy

* EventEmitter

  ↳ **Node**

  ↳ [NodeWithEvents](_declarations_blessed_d_.widgets.nodewithevents.md)

  ↳ [Node](_declarations_blessed_d_.widget.node.md)

## Implements

* [IHasOptions](../interfaces/_declarations_blessed_d_.widgets.ihasoptions.md)‹[INodeOptions](../interfaces/_declarations_blessed_d_.widgets.inodeoptions.md)›
* [IDestroyable](../interfaces/_declarations_blessed_d_.widgets.idestroyable.md)

## Index

### Constructors

* [constructor](_declarations_blessed_d_.widgets.node.md#constructor)

### Properties

* [$](_declarations_blessed_d_.widgets.node.md#$)
* [_](_declarations_blessed_d_.widgets.node.md#_)
* [children](_declarations_blessed_d_.widgets.node.md#children)
* [data](_declarations_blessed_d_.widgets.node.md#data)
* [focusable](_declarations_blessed_d_.widgets.node.md#focusable)
* [index](_declarations_blessed_d_.widgets.node.md#index)
* [lpos](_declarations_blessed_d_.widgets.node.md#lpos)
* [options](_declarations_blessed_d_.widgets.node.md#options)
* [parent](_declarations_blessed_d_.widgets.node.md#optional-parent)
* [screen](_declarations_blessed_d_.widgets.node.md#screen)
* [type](_declarations_blessed_d_.widgets.node.md#type)
* [uid](_declarations_blessed_d_.widgets.node.md#uid)
* [defaultMaxListeners](_declarations_blessed_d_.widgets.node.md#static-defaultmaxlisteners)

### Methods

* [addListener](_declarations_blessed_d_.widgets.node.md#addlistener)
* [append](_declarations_blessed_d_.widgets.node.md#append)
* [collectAncestors](_declarations_blessed_d_.widgets.node.md#collectancestors)
* [collectDescendants](_declarations_blessed_d_.widgets.node.md#collectdescendants)
* [destroy](_declarations_blessed_d_.widgets.node.md#destroy)
* [detach](_declarations_blessed_d_.widgets.node.md#detach)
* [emit](_declarations_blessed_d_.widgets.node.md#emit)
* [emitAncestors](_declarations_blessed_d_.widgets.node.md#emitancestors)
* [emitDescendants](_declarations_blessed_d_.widgets.node.md#emitdescendants)
* [eventNames](_declarations_blessed_d_.widgets.node.md#eventnames)
* [forAncestors](_declarations_blessed_d_.widgets.node.md#forancestors)
* [forDescendants](_declarations_blessed_d_.widgets.node.md#fordescendants)
* [free](_declarations_blessed_d_.widgets.node.md#free)
* [get](_declarations_blessed_d_.widgets.node.md#get)
* [getMaxListeners](_declarations_blessed_d_.widgets.node.md#getmaxlisteners)
* [hasAncestor](_declarations_blessed_d_.widgets.node.md#hasancestor)
* [hasDescendant](_declarations_blessed_d_.widgets.node.md#hasdescendant)
* [insert](_declarations_blessed_d_.widgets.node.md#insert)
* [insertAfter](_declarations_blessed_d_.widgets.node.md#insertafter)
* [insertBefore](_declarations_blessed_d_.widgets.node.md#insertbefore)
* [listenerCount](_declarations_blessed_d_.widgets.node.md#listenercount)
* [listeners](_declarations_blessed_d_.widgets.node.md#listeners)
* [off](_declarations_blessed_d_.widgets.node.md#off)
* [on](_declarations_blessed_d_.widgets.node.md#on)
* [once](_declarations_blessed_d_.widgets.node.md#once)
* [prepend](_declarations_blessed_d_.widgets.node.md#prepend)
* [prependListener](_declarations_blessed_d_.widgets.node.md#prependlistener)
* [prependOnceListener](_declarations_blessed_d_.widgets.node.md#prependoncelistener)
* [rawListeners](_declarations_blessed_d_.widgets.node.md#rawlisteners)
* [remove](_declarations_blessed_d_.widgets.node.md#remove)
* [removeAllListeners](_declarations_blessed_d_.widgets.node.md#removealllisteners)
* [removeListener](_declarations_blessed_d_.widgets.node.md#removelistener)
* [set](_declarations_blessed_d_.widgets.node.md#set)
* [setMaxListeners](_declarations_blessed_d_.widgets.node.md#setmaxlisteners)
* [listenerCount](_declarations_blessed_d_.widgets.node.md#static-listenercount)

## Constructors

###  constructor

\+ **new Node**(`options`: [INodeOptions](../interfaces/_declarations_blessed_d_.widgets.inodeoptions.md)): *[Node](_declarations_blessed_d_.widgets.node.md)*

*Defined in [declarations/blessed.d.ts:260](https://github.com/cancerberoSgx/accursed/blob/468bf3c/src/declarations/blessed.d.ts#L260)*

**Parameters:**

Name | Type |
------ | ------ |
`options` | [INodeOptions](../interfaces/_declarations_blessed_d_.widgets.inodeoptions.md) |

**Returns:** *[Node](_declarations_blessed_d_.widgets.node.md)*

## Properties

###  $

• **$**: *object*

*Defined in [declarations/blessed.d.ts:289](https://github.com/cancerberoSgx/accursed/blob/468bf3c/src/declarations/blessed.d.ts#L289)*

An object for any miscellaneous user data.

#### Type declaration:

* \[ **index**: *string*\]: any

___

###  _

• **_**: *object*

*Defined in [declarations/blessed.d.ts:284](https://github.com/cancerberoSgx/accursed/blob/468bf3c/src/declarations/blessed.d.ts#L284)*

An object for any miscellaneous user data.

#### Type declaration:

* \[ **index**: *string*\]: any

___

###  children

• **children**: *[Node](_declarations_blessed_d_.widgets.node.md)[]*

*Defined in [declarations/blessed.d.ts:316](https://github.com/cancerberoSgx/accursed/blob/468bf3c/src/declarations/blessed.d.ts#L316)*

Array of node's children.

___

###  data

• **data**: *object*

*Defined in [declarations/blessed.d.ts:279](https://github.com/cancerberoSgx/accursed/blob/468bf3c/src/declarations/blessed.d.ts#L279)*

An object for any miscellaneous user data.

#### Type declaration:

* \[ **index**: *string*\]: any

___

###  focusable

• **focusable**: *boolean*

*Defined in [declarations/blessed.d.ts:269](https://github.com/cancerberoSgx/accursed/blob/468bf3c/src/declarations/blessed.d.ts#L269)*

If true, `screen.focusNext()` and methods related to focus will consider this Element.

___

###  index

• **index**: *number*

*Defined in [declarations/blessed.d.ts:301](https://github.com/cancerberoSgx/accursed/blob/468bf3c/src/declarations/blessed.d.ts#L301)*

Render index (document order index) of the last render call.

___

###  lpos

• **lpos**: *[PositionCoords](_declarations_blessed_d_.widgets.positioncoords.md)*

*Defined in [declarations/blessed.d.ts:291](https://github.com/cancerberoSgx/accursed/blob/468bf3c/src/declarations/blessed.d.ts#L291)*

___

###  options

• **options**: *[INodeOptions](../interfaces/_declarations_blessed_d_.widgets.inodeoptions.md)*

*Implementation of [IHasOptions](../interfaces/_declarations_blessed_d_.widgets.ihasoptions.md).[options](../interfaces/_declarations_blessed_d_.widgets.ihasoptions.md#options)*

*Defined in [declarations/blessed.d.ts:274](https://github.com/cancerberoSgx/accursed/blob/468bf3c/src/declarations/blessed.d.ts#L274)*

Original options object.

___

### `Optional` parent

• **parent**? : *[Node](_declarations_blessed_d_.widgets.node.md)*

*Defined in [declarations/blessed.d.ts:311](https://github.com/cancerberoSgx/accursed/blob/468bf3c/src/declarations/blessed.d.ts#L311)*

Parent node. If null it means the element is not attached to any screen or program, or the node is a Screen.

___

###  screen

• **screen**: *[Screen](_declarations_blessed_d_.widgets.screen.md)*

*Defined in [declarations/blessed.d.ts:306](https://github.com/cancerberoSgx/accursed/blob/468bf3c/src/declarations/blessed.d.ts#L306)*

Parent screen.

___

###  type

• **type**: *string*

*Defined in [declarations/blessed.d.ts:296](https://github.com/cancerberoSgx/accursed/blob/468bf3c/src/declarations/blessed.d.ts#L296)*

Type of the node (e.g. box).

___

###  uid

• **uid**: *number*

*Defined in [declarations/blessed.d.ts:264](https://github.com/cancerberoSgx/accursed/blob/468bf3c/src/declarations/blessed.d.ts#L264)*

Unique identifier for Node instances. @internal

___

### `Static` defaultMaxListeners

▪ **defaultMaxListeners**: *number*

*Inherited from void*

Defined in /Users/sebastiangurin/git/accursed/node_modules/@types/node/events.d.ts:9

## Methods

###  addListener

▸ **addListener**(`event`: string | symbol, `listener`: function): *this*

*Inherited from void*

*Overrides void*

Defined in /Users/sebastiangurin/git/accursed/node_modules/@types/node/events.d.ts:11

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

###  append

▸ **append**(`node`: [Node](_declarations_blessed_d_.widgets.node.md)): *void*

*Defined in [declarations/blessed.d.ts:326](https://github.com/cancerberoSgx/accursed/blob/468bf3c/src/declarations/blessed.d.ts#L326)*

Append a node to this node's children.

**Parameters:**

Name | Type |
------ | ------ |
`node` | [Node](_declarations_blessed_d_.widgets.node.md) |

**Returns:** *void*

___

###  collectAncestors

▸ **collectAncestors**(`s?`: boolean): *void*

*Defined in [declarations/blessed.d.ts:362](https://github.com/cancerberoSgx/accursed/blob/468bf3c/src/declarations/blessed.d.ts#L362)*

**Parameters:**

Name | Type |
------ | ------ |
`s?` | boolean |

**Returns:** *void*

___

###  collectDescendants

▸ **collectDescendants**(`s?`: boolean): *void*

*Defined in [declarations/blessed.d.ts:361](https://github.com/cancerberoSgx/accursed/blob/468bf3c/src/declarations/blessed.d.ts#L361)*

**Parameters:**

Name | Type |
------ | ------ |
`s?` | boolean |

**Returns:** *void*

___

###  destroy

▸ **destroy**(): *void*

*Implementation of [IDestroyable](../interfaces/_declarations_blessed_d_.widgets.idestroyable.md)*

*Defined in [declarations/blessed.d.ts:375](https://github.com/cancerberoSgx/accursed/blob/468bf3c/src/declarations/blessed.d.ts#L375)*

[detach](_declarations_blessed_d_.widgets.node.md#detach)() this node from its parent, and will also detach and destroy each of its descendant nodes each of them emitting [[destory]] event also.

**Returns:** *void*

___

###  detach

▸ **detach**(): *void*

*Defined in [declarations/blessed.d.ts:351](https://github.com/cancerberoSgx/accursed/blob/468bf3c/src/declarations/blessed.d.ts#L351)*

Remove node from its parent.

**Returns:** *void*

___

###  emit

▸ **emit**(`event`: string | symbol, ...`args`: any[]): *boolean*

*Inherited from void*

*Overrides void*

Defined in /Users/sebastiangurin/git/accursed/node_modules/@types/node/events.d.ts:23

**Parameters:**

Name | Type |
------ | ------ |
`event` | string &#124; symbol |
`...args` | any[] |

**Returns:** *boolean*

___

###  emitAncestors

▸ **emitAncestors**(): *void*

*Defined in [declarations/blessed.d.ts:368](https://github.com/cancerberoSgx/accursed/blob/468bf3c/src/declarations/blessed.d.ts#L368)*

**Returns:** *void*

___

###  emitDescendants

▸ **emitDescendants**(`type?`: string, ...`args`: any[]): *void*

*Defined in [declarations/blessed.d.ts:367](https://github.com/cancerberoSgx/accursed/blob/468bf3c/src/declarations/blessed.d.ts#L367)*

Emit event for element, and recursively emit same event for all descendants. If `s` is provided it will call [[iter]] on self first.

**Parameters:**

Name | Type |
------ | ------ |
`type?` | string |
`...args` | any[] |

**Returns:** *void*

___

###  eventNames

▸ **eventNames**(): *Array‹string | symbol›*

*Inherited from void*

*Overrides void*

Defined in /Users/sebastiangurin/git/accursed/node_modules/@types/node/events.d.ts:24

**Returns:** *Array‹string | symbol›*

___

###  forAncestors

▸ **forAncestors**(`iter`: function, `s?`: boolean): *void*

*Defined in [declarations/blessed.d.ts:360](https://github.com/cancerberoSgx/accursed/blob/468bf3c/src/declarations/blessed.d.ts#L360)*

**Parameters:**

▪ **iter**: *function*

▸ (`node`: [Node](_declarations_blessed_d_.widgets.node.md)): *void*

**Parameters:**

Name | Type |
------ | ------ |
`node` | [Node](_declarations_blessed_d_.widgets.node.md) |

▪`Optional`  **s**: *boolean*

**Returns:** *void*

___

###  forDescendants

▸ **forDescendants**(`iter`: function, `s?`: boolean): *void*

*Defined in [declarations/blessed.d.ts:359](https://github.com/cancerberoSgx/accursed/blob/468bf3c/src/declarations/blessed.d.ts#L359)*

Visit each node's descendants, with [[iter]] function,  parents first.
If `s` is provided it will call [[iter]] on self first.

**Parameters:**

▪ **iter**: *function*

▸ (`node`: [Node](_declarations_blessed_d_.widgets.node.md)): *void*

**Parameters:**

Name | Type |
------ | ------ |
`node` | [Node](_declarations_blessed_d_.widgets.node.md) |

▪`Optional`  **s**: *boolean*

**Returns:** *void*

___

###  free

▸ **free**(): *void*

*Defined in [declarations/blessed.d.ts:353](https://github.com/cancerberoSgx/accursed/blob/468bf3c/src/declarations/blessed.d.ts#L353)*

**Returns:** *void*

___

###  get

▸ **get**<**T**>(`name`: string, `def`: T): *T*

*Defined in [declarations/blessed.d.ts:380](https://github.com/cancerberoSgx/accursed/blob/468bf3c/src/declarations/blessed.d.ts#L380)*

Get user property with a potential default value.

**Type parameters:**

▪ **T**

**Parameters:**

Name | Type |
------ | ------ |
`name` | string |
`def` | T |

**Returns:** *T*

___

###  getMaxListeners

▸ **getMaxListeners**(): *number*

*Inherited from void*

*Overrides void*

Defined in /Users/sebastiangurin/git/accursed/node_modules/@types/node/events.d.ts:20

**Returns:** *number*

___

###  hasAncestor

▸ **hasAncestor**<**T**>(`target`: [Node](_declarations_blessed_d_.widgets.node.md)): *[Node](_declarations_blessed_d_.widgets.node.md)*

*Defined in [declarations/blessed.d.ts:370](https://github.com/cancerberoSgx/accursed/blob/468bf3c/src/declarations/blessed.d.ts#L370)*

**Type parameters:**

▪ **T**: *[Node](_declarations_blessed_d_.widgets.node.md)*

**Parameters:**

Name | Type |
------ | ------ |
`target` | [Node](_declarations_blessed_d_.widgets.node.md) |

**Returns:** *[Node](_declarations_blessed_d_.widgets.node.md)*

___

###  hasDescendant

▸ **hasDescendant**<**T**>(`target`: [Node](_declarations_blessed_d_.widgets.node.md)): *[Node](_declarations_blessed_d_.widgets.node.md)*

*Defined in [declarations/blessed.d.ts:369](https://github.com/cancerberoSgx/accursed/blob/468bf3c/src/declarations/blessed.d.ts#L369)*

**Type parameters:**

▪ **T**: *[Node](_declarations_blessed_d_.widgets.node.md)*

**Parameters:**

Name | Type |
------ | ------ |
`target` | [Node](_declarations_blessed_d_.widgets.node.md) |

**Returns:** *[Node](_declarations_blessed_d_.widgets.node.md)*

___

###  insert

▸ **insert**(`node`: [Node](_declarations_blessed_d_.widgets.node.md), `index`: number): *void*

*Defined in [declarations/blessed.d.ts:336](https://github.com/cancerberoSgx/accursed/blob/468bf3c/src/declarations/blessed.d.ts#L336)*

Insert a node to this node's children at index i.

**Parameters:**

Name | Type |
------ | ------ |
`node` | [Node](_declarations_blessed_d_.widgets.node.md) |
`index` | number |

**Returns:** *void*

___

###  insertAfter

▸ **insertAfter**(`node`: [Node](_declarations_blessed_d_.widgets.node.md), `refNode`: [Node](_declarations_blessed_d_.widgets.node.md)): *void*

*Defined in [declarations/blessed.d.ts:346](https://github.com/cancerberoSgx/accursed/blob/468bf3c/src/declarations/blessed.d.ts#L346)*

Insert a node from node after the reference node.

**Parameters:**

Name | Type |
------ | ------ |
`node` | [Node](_declarations_blessed_d_.widgets.node.md) |
`refNode` | [Node](_declarations_blessed_d_.widgets.node.md) |

**Returns:** *void*

___

###  insertBefore

▸ **insertBefore**(`node`: [Node](_declarations_blessed_d_.widgets.node.md), `refNode`: [Node](_declarations_blessed_d_.widgets.node.md)): *void*

*Defined in [declarations/blessed.d.ts:341](https://github.com/cancerberoSgx/accursed/blob/468bf3c/src/declarations/blessed.d.ts#L341)*

Insert a node to this node's children before the reference node.

**Parameters:**

Name | Type |
------ | ------ |
`node` | [Node](_declarations_blessed_d_.widgets.node.md) |
`refNode` | [Node](_declarations_blessed_d_.widgets.node.md) |

**Returns:** *void*

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

▸ **on**(`event`: "reparent", `listener`: function): *void*

*Overrides void*

*Defined in [declarations/blessed.d.ts:390](https://github.com/cancerberoSgx/accursed/blob/468bf3c/src/declarations/blessed.d.ts#L390)*

Received when node gains a new parent. If the node was detached from the sreen, newParent will be undefined.

**Parameters:**

▪ **event**: *"reparent"*

▪ **listener**: *function*

▸ (`this`: this, `newParent?`: [Node](_declarations_blessed_d_.widgets.node.md)): *void*

**Parameters:**

Name | Type |
------ | ------ |
`this` | this |
`newParent?` | [Node](_declarations_blessed_d_.widgets.node.md) |

**Returns:** *void*

▸ **on**(`event`: "adopt", `listener`: function): *void*

*Overrides void*

*Defined in [declarations/blessed.d.ts:395](https://github.com/cancerberoSgx/accursed/blob/468bf3c/src/declarations/blessed.d.ts#L395)*

emitted by a parent node when adding a new child node.

**Parameters:**

▪ **event**: *"adopt"*

▪ **listener**: *function*

▸ (`this`: this, `newChildren`: [Node](_declarations_blessed_d_.widgets.node.md)): *void*

**Parameters:**

Name | Type |
------ | ------ |
`this` | this |
`newChildren` | [Node](_declarations_blessed_d_.widgets.node.md) |

**Returns:** *void*

▸ **on**(`event`: "attach", `listener`: function): *void*

*Overrides void*

*Defined in [declarations/blessed.d.ts:400](https://github.com/cancerberoSgx/accursed/blob/468bf3c/src/declarations/blessed.d.ts#L400)*

Emitted when the node or one of its ancestors is added to a parent and previous nor the node or any of its ancestors where  screen child.

**Parameters:**

▪ **event**: *"attach"*

▪ **listener**: *function*

▸ (`this`: this, `newParent`: [Node](_declarations_blessed_d_.widgets.node.md)): *void*

**Parameters:**

Name | Type |
------ | ------ |
`this` | this |
`newParent` | [Node](_declarations_blessed_d_.widgets.node.md) |

**Returns:** *void*

▸ **on**(`event`: "detach", `listener`: function): *void*

*Overrides void*

*Defined in [declarations/blessed.d.ts:405](https://github.com/cancerberoSgx/accursed/blob/468bf3c/src/declarations/blessed.d.ts#L405)*

Emitted by a node or an ancestor is being detached from the screen being previously a screen child

**Parameters:**

▪ **event**: *"detach"*

▪ **listener**: *function*

▸ (`this`: this, `newParent`: [Node](_declarations_blessed_d_.widgets.node.md)): *void*

**Parameters:**

Name | Type |
------ | ------ |
`this` | this |
`newParent` | [Node](_declarations_blessed_d_.widgets.node.md) |

**Returns:** *void*

▸ **on**(`event`: "remove", `listener`: function): *void*

*Overrides void*

*Defined in [declarations/blessed.d.ts:410](https://github.com/cancerberoSgx/accursed/blob/468bf3c/src/declarations/blessed.d.ts#L410)*

Triggered by a parent node when removing a child node

**Parameters:**

▪ **event**: *"remove"*

▪ **listener**: *function*

▸ (`this`: this, `removedChild`: [Node](_declarations_blessed_d_.widgets.node.md)): *void*

**Parameters:**

Name | Type |
------ | ------ |
`this` | this |
`removedChild` | [Node](_declarations_blessed_d_.widgets.node.md) |

**Returns:** *void*

▸ **on**(`event`: string, `listener`: function): *this*

*Overrides void*

*Defined in [declarations/blessed.d.ts:412](https://github.com/cancerberoSgx/accursed/blob/468bf3c/src/declarations/blessed.d.ts#L412)*

**Parameters:**

▪ **event**: *string*

▪ **listener**: *function*

▸ (...`args`: any[]): *void*

**Parameters:**

Name | Type |
------ | ------ |
`...args` | any[] |

**Returns:** *this*

___

###  once

▸ **once**(`event`: string | symbol, `listener`: function): *this*

*Inherited from void*

*Overrides void*

Defined in /Users/sebastiangurin/git/accursed/node_modules/@types/node/events.d.ts:13

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

###  prepend

▸ **prepend**(`node`: [Node](_declarations_blessed_d_.widgets.node.md)): *void*

*Defined in [declarations/blessed.d.ts:321](https://github.com/cancerberoSgx/accursed/blob/468bf3c/src/declarations/blessed.d.ts#L321)*

Prepend a node to this node's children.

**Parameters:**

Name | Type |
------ | ------ |
`node` | [Node](_declarations_blessed_d_.widgets.node.md) |

**Returns:** *void*

___

###  prependListener

▸ **prependListener**(`event`: string | symbol, `listener`: function): *this*

*Inherited from void*

*Overrides void*

Defined in /Users/sebastiangurin/git/accursed/node_modules/@types/node/events.d.ts:14

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

▸ **prependOnceListener**(`event`: string | symbol, `listener`: function): *this*

*Inherited from void*

*Overrides void*

Defined in /Users/sebastiangurin/git/accursed/node_modules/@types/node/events.d.ts:15

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

###  remove

▸ **remove**(`node`: [Node](_declarations_blessed_d_.widgets.node.md)): *void*

*Defined in [declarations/blessed.d.ts:331](https://github.com/cancerberoSgx/accursed/blob/468bf3c/src/declarations/blessed.d.ts#L331)*

Remove child node from node.

**Parameters:**

Name | Type |
------ | ------ |
`node` | [Node](_declarations_blessed_d_.widgets.node.md) |

**Returns:** *void*

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

▸ **removeListener**(`event`: string | symbol, `listener`: function): *this*

*Inherited from void*

*Overrides void*

Defined in /Users/sebastiangurin/git/accursed/node_modules/@types/node/events.d.ts:16

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

###  set

▸ **set**(`name`: string, `value`: any): *void*

*Defined in [declarations/blessed.d.ts:385](https://github.com/cancerberoSgx/accursed/blob/468bf3c/src/declarations/blessed.d.ts#L385)*

Set user property to value.

**Parameters:**

Name | Type |
------ | ------ |
`name` | string |
`value` | any |

**Returns:** *void*

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
