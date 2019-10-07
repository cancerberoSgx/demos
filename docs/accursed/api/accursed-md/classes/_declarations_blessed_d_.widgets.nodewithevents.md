[accursed](../README.md) › [Globals](../globals.md) › ["declarations/blessed.d"](../modules/_declarations_blessed_d_.md) › [Widgets](../modules/_declarations_blessed_d_.widgets.md) › [NodeWithEvents](_declarations_blessed_d_.widgets.nodewithevents.md)

# Class: NodeWithEvents

This is an artificial abstract class type, it doesn't really exist on blessed types. Was defined only to better organize the typings source code.

## Hierarchy

  ↳ [Node](_declarations_blessed_d_.widgets.node.md)

  ↳ **NodeWithEvents**

  ↳ [Screen](_declarations_blessed_d_.widgets.screen.md)

  ↳ [BlessedElement](_declarations_blessed_d_.widgets.blessedelement.md)

## Implements

* [IHasOptions](../interfaces/_declarations_blessed_d_.widgets.ihasoptions.md)‹[INodeOptions](../interfaces/_declarations_blessed_d_.widgets.inodeoptions.md)›
* [IDestroyable](../interfaces/_declarations_blessed_d_.widgets.idestroyable.md)

## Index

### Constructors

* [constructor](_declarations_blessed_d_.widgets.nodewithevents.md#constructor)

### Properties

* [$](_declarations_blessed_d_.widgets.nodewithevents.md#$)
* [_](_declarations_blessed_d_.widgets.nodewithevents.md#_)
* [children](_declarations_blessed_d_.widgets.nodewithevents.md#children)
* [data](_declarations_blessed_d_.widgets.nodewithevents.md#data)
* [focusable](_declarations_blessed_d_.widgets.nodewithevents.md#focusable)
* [index](_declarations_blessed_d_.widgets.nodewithevents.md#index)
* [lpos](_declarations_blessed_d_.widgets.nodewithevents.md#lpos)
* [options](_declarations_blessed_d_.widgets.nodewithevents.md#options)
* [parent](_declarations_blessed_d_.widgets.nodewithevents.md#optional-parent)
* [screen](_declarations_blessed_d_.widgets.nodewithevents.md#screen)
* [type](_declarations_blessed_d_.widgets.nodewithevents.md#type)
* [uid](_declarations_blessed_d_.widgets.nodewithevents.md#uid)
* [defaultMaxListeners](_declarations_blessed_d_.widgets.nodewithevents.md#static-defaultmaxlisteners)

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
* [listenerCount](_declarations_blessed_d_.widgets.nodewithevents.md#static-listenercount)

## Constructors

###  constructor

\+ **new NodeWithEvents**(`options`: [INodeOptions](../interfaces/_declarations_blessed_d_.widgets.inodeoptions.md)): *[NodeWithEvents](_declarations_blessed_d_.widgets.nodewithevents.md)*

*Inherited from [Node](_declarations_blessed_d_.widgets.node.md).[constructor](_declarations_blessed_d_.widgets.node.md#constructor)*

*Defined in [declarations/blessed.d.ts:260](https://github.com/cancerberoSgx/accursed/blob/5b2518e/src/declarations/blessed.d.ts#L260)*

**Parameters:**

Name | Type |
------ | ------ |
`options` | [INodeOptions](../interfaces/_declarations_blessed_d_.widgets.inodeoptions.md) |

**Returns:** *[NodeWithEvents](_declarations_blessed_d_.widgets.nodewithevents.md)*

## Properties

###  $

• **$**: *object*

*Inherited from [Node](_declarations_blessed_d_.widgets.node.md).[$](_declarations_blessed_d_.widgets.node.md#$)*

*Defined in [declarations/blessed.d.ts:289](https://github.com/cancerberoSgx/accursed/blob/5b2518e/src/declarations/blessed.d.ts#L289)*

An object for any miscellaneous user data.

#### Type declaration:

* \[ **index**: *string*\]: any

___

###  _

• **_**: *object*

*Inherited from [Node](_declarations_blessed_d_.widgets.node.md).[_](_declarations_blessed_d_.widgets.node.md#_)*

*Defined in [declarations/blessed.d.ts:284](https://github.com/cancerberoSgx/accursed/blob/5b2518e/src/declarations/blessed.d.ts#L284)*

An object for any miscellaneous user data.

#### Type declaration:

* \[ **index**: *string*\]: any

___

###  children

• **children**: *[Node](_declarations_blessed_d_.widgets.node.md)[]*

*Inherited from [Node](_declarations_blessed_d_.widgets.node.md).[children](_declarations_blessed_d_.widgets.node.md#children)*

*Defined in [declarations/blessed.d.ts:316](https://github.com/cancerberoSgx/accursed/blob/5b2518e/src/declarations/blessed.d.ts#L316)*

Array of node's children.

___

###  data

• **data**: *object*

*Inherited from [Node](_declarations_blessed_d_.widgets.node.md).[data](_declarations_blessed_d_.widgets.node.md#data)*

*Defined in [declarations/blessed.d.ts:279](https://github.com/cancerberoSgx/accursed/blob/5b2518e/src/declarations/blessed.d.ts#L279)*

An object for any miscellaneous user data.

#### Type declaration:

* \[ **index**: *string*\]: any

___

###  focusable

• **focusable**: *boolean*

*Inherited from [Node](_declarations_blessed_d_.widgets.node.md).[focusable](_declarations_blessed_d_.widgets.node.md#focusable)*

*Defined in [declarations/blessed.d.ts:269](https://github.com/cancerberoSgx/accursed/blob/5b2518e/src/declarations/blessed.d.ts#L269)*

If true, `screen.focusNext()` and methods related to focus will consider this Element.

___

###  index

• **index**: *number*

*Inherited from [Node](_declarations_blessed_d_.widgets.node.md).[index](_declarations_blessed_d_.widgets.node.md#index)*

*Defined in [declarations/blessed.d.ts:301](https://github.com/cancerberoSgx/accursed/blob/5b2518e/src/declarations/blessed.d.ts#L301)*

Render index (document order index) of the last render call.

___

###  lpos

• **lpos**: *[PositionCoords](_declarations_blessed_d_.widgets.positioncoords.md)*

*Inherited from [Node](_declarations_blessed_d_.widgets.node.md).[lpos](_declarations_blessed_d_.widgets.node.md#lpos)*

*Defined in [declarations/blessed.d.ts:291](https://github.com/cancerberoSgx/accursed/blob/5b2518e/src/declarations/blessed.d.ts#L291)*

___

###  options

• **options**: *[INodeOptions](../interfaces/_declarations_blessed_d_.widgets.inodeoptions.md)*

*Implementation of [IHasOptions](../interfaces/_declarations_blessed_d_.widgets.ihasoptions.md).[options](../interfaces/_declarations_blessed_d_.widgets.ihasoptions.md#options)*

*Inherited from [Node](_declarations_blessed_d_.widgets.node.md).[options](_declarations_blessed_d_.widgets.node.md#options)*

*Defined in [declarations/blessed.d.ts:274](https://github.com/cancerberoSgx/accursed/blob/5b2518e/src/declarations/blessed.d.ts#L274)*

Original options object.

___

### `Optional` parent

• **parent**? : *[Node](_declarations_blessed_d_.widgets.node.md)*

*Inherited from [Node](_declarations_blessed_d_.widgets.node.md).[parent](_declarations_blessed_d_.widgets.node.md#optional-parent)*

*Defined in [declarations/blessed.d.ts:311](https://github.com/cancerberoSgx/accursed/blob/5b2518e/src/declarations/blessed.d.ts#L311)*

Parent node. If null it means the element is not attached to any screen or program, or the node is a Screen.

___

###  screen

• **screen**: *[Screen](_declarations_blessed_d_.widgets.screen.md)*

*Inherited from [Node](_declarations_blessed_d_.widgets.node.md).[screen](_declarations_blessed_d_.widgets.node.md#screen)*

*Defined in [declarations/blessed.d.ts:306](https://github.com/cancerberoSgx/accursed/blob/5b2518e/src/declarations/blessed.d.ts#L306)*

Parent screen.

___

###  type

• **type**: *string*

*Inherited from [Node](_declarations_blessed_d_.widgets.node.md).[type](_declarations_blessed_d_.widgets.node.md#type)*

*Defined in [declarations/blessed.d.ts:296](https://github.com/cancerberoSgx/accursed/blob/5b2518e/src/declarations/blessed.d.ts#L296)*

Type of the node (e.g. box).

___

###  uid

• **uid**: *number*

*Inherited from [Node](_declarations_blessed_d_.widgets.node.md).[uid](_declarations_blessed_d_.widgets.node.md#uid)*

*Defined in [declarations/blessed.d.ts:264](https://github.com/cancerberoSgx/accursed/blob/5b2518e/src/declarations/blessed.d.ts#L264)*

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

*Inherited from [Node](_declarations_blessed_d_.widgets.node.md).[append](_declarations_blessed_d_.widgets.node.md#append)*

*Defined in [declarations/blessed.d.ts:326](https://github.com/cancerberoSgx/accursed/blob/5b2518e/src/declarations/blessed.d.ts#L326)*

Append a node to this node's children.

**Parameters:**

Name | Type |
------ | ------ |
`node` | [Node](_declarations_blessed_d_.widgets.node.md) |

**Returns:** *void*

___

###  collectAncestors

▸ **collectAncestors**(`s?`: boolean): *void*

*Inherited from [Node](_declarations_blessed_d_.widgets.node.md).[collectAncestors](_declarations_blessed_d_.widgets.node.md#collectancestors)*

*Defined in [declarations/blessed.d.ts:362](https://github.com/cancerberoSgx/accursed/blob/5b2518e/src/declarations/blessed.d.ts#L362)*

**Parameters:**

Name | Type |
------ | ------ |
`s?` | boolean |

**Returns:** *void*

___

###  collectDescendants

▸ **collectDescendants**(`s?`: boolean): *void*

*Inherited from [Node](_declarations_blessed_d_.widgets.node.md).[collectDescendants](_declarations_blessed_d_.widgets.node.md#collectdescendants)*

*Defined in [declarations/blessed.d.ts:361](https://github.com/cancerberoSgx/accursed/blob/5b2518e/src/declarations/blessed.d.ts#L361)*

**Parameters:**

Name | Type |
------ | ------ |
`s?` | boolean |

**Returns:** *void*

___

###  destroy

▸ **destroy**(): *void*

*Implementation of [IDestroyable](../interfaces/_declarations_blessed_d_.widgets.idestroyable.md)*

*Inherited from [Node](_declarations_blessed_d_.widgets.node.md).[destroy](_declarations_blessed_d_.widgets.node.md#destroy)*

*Defined in [declarations/blessed.d.ts:375](https://github.com/cancerberoSgx/accursed/blob/5b2518e/src/declarations/blessed.d.ts#L375)*

[detach](_declarations_blessed_d_.widgets.nodewithevents.md#detach)() this node from its parent, and will also detach and destroy each of its descendant nodes each of them emitting [[destory]] event also.

**Returns:** *void*

___

###  detach

▸ **detach**(): *void*

*Inherited from [Node](_declarations_blessed_d_.widgets.node.md).[detach](_declarations_blessed_d_.widgets.node.md#detach)*

*Defined in [declarations/blessed.d.ts:351](https://github.com/cancerberoSgx/accursed/blob/5b2518e/src/declarations/blessed.d.ts#L351)*

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

*Inherited from [Node](_declarations_blessed_d_.widgets.node.md).[emitAncestors](_declarations_blessed_d_.widgets.node.md#emitancestors)*

*Defined in [declarations/blessed.d.ts:368](https://github.com/cancerberoSgx/accursed/blob/5b2518e/src/declarations/blessed.d.ts#L368)*

**Returns:** *void*

___

###  emitDescendants

▸ **emitDescendants**(`type?`: string, ...`args`: any[]): *void*

*Inherited from [Node](_declarations_blessed_d_.widgets.node.md).[emitDescendants](_declarations_blessed_d_.widgets.node.md#emitdescendants)*

*Defined in [declarations/blessed.d.ts:367](https://github.com/cancerberoSgx/accursed/blob/5b2518e/src/declarations/blessed.d.ts#L367)*

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

*Inherited from [Node](_declarations_blessed_d_.widgets.node.md).[forAncestors](_declarations_blessed_d_.widgets.node.md#forancestors)*

*Defined in [declarations/blessed.d.ts:360](https://github.com/cancerberoSgx/accursed/blob/5b2518e/src/declarations/blessed.d.ts#L360)*

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

*Inherited from [Node](_declarations_blessed_d_.widgets.node.md).[forDescendants](_declarations_blessed_d_.widgets.node.md#fordescendants)*

*Defined in [declarations/blessed.d.ts:359](https://github.com/cancerberoSgx/accursed/blob/5b2518e/src/declarations/blessed.d.ts#L359)*

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

*Inherited from [Node](_declarations_blessed_d_.widgets.node.md).[free](_declarations_blessed_d_.widgets.node.md#free)*

*Defined in [declarations/blessed.d.ts:353](https://github.com/cancerberoSgx/accursed/blob/5b2518e/src/declarations/blessed.d.ts#L353)*

**Returns:** *void*

___

###  get

▸ **get**<**T**>(`name`: string, `def`: T): *T*

*Inherited from [Node](_declarations_blessed_d_.widgets.node.md).[get](_declarations_blessed_d_.widgets.node.md#get)*

*Defined in [declarations/blessed.d.ts:380](https://github.com/cancerberoSgx/accursed/blob/5b2518e/src/declarations/blessed.d.ts#L380)*

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

*Inherited from [Node](_declarations_blessed_d_.widgets.node.md).[hasAncestor](_declarations_blessed_d_.widgets.node.md#hasancestor)*

*Defined in [declarations/blessed.d.ts:370](https://github.com/cancerberoSgx/accursed/blob/5b2518e/src/declarations/blessed.d.ts#L370)*

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

*Inherited from [Node](_declarations_blessed_d_.widgets.node.md).[hasDescendant](_declarations_blessed_d_.widgets.node.md#hasdescendant)*

*Defined in [declarations/blessed.d.ts:369](https://github.com/cancerberoSgx/accursed/blob/5b2518e/src/declarations/blessed.d.ts#L369)*

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

*Inherited from [Node](_declarations_blessed_d_.widgets.node.md).[insert](_declarations_blessed_d_.widgets.node.md#insert)*

*Defined in [declarations/blessed.d.ts:336](https://github.com/cancerberoSgx/accursed/blob/5b2518e/src/declarations/blessed.d.ts#L336)*

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

*Inherited from [Node](_declarations_blessed_d_.widgets.node.md).[insertAfter](_declarations_blessed_d_.widgets.node.md#insertafter)*

*Defined in [declarations/blessed.d.ts:346](https://github.com/cancerberoSgx/accursed/blob/5b2518e/src/declarations/blessed.d.ts#L346)*

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

*Inherited from [Node](_declarations_blessed_d_.widgets.node.md).[insertBefore](_declarations_blessed_d_.widgets.node.md#insertbefore)*

*Defined in [declarations/blessed.d.ts:341](https://github.com/cancerberoSgx/accursed/blob/5b2518e/src/declarations/blessed.d.ts#L341)*

Insert a node to this node's children before the reference node.

**Parameters:**

Name | Type |
------ | ------ |
`node` | [Node](_declarations_blessed_d_.widgets.node.md) |
`refNode` | [Node](_declarations_blessed_d_.widgets.node.md) |

**Returns:** *void*

___

###  key

▸ **key**(`name`: string | string[], `listener`: [KeyEventListener](../modules/_declarations_blessed_d_.widgets.md#keyeventlistener)): *void*

*Defined in [declarations/blessed.d.ts:491](https://github.com/cancerberoSgx/accursed/blob/5b2518e/src/declarations/blessed.d.ts#L491)*

Bind a keypress listener for a specific key.

**Parameters:**

Name | Type |
------ | ------ |
`name` | string &#124; string[] |
`listener` | [KeyEventListener](../modules/_declarations_blessed_d_.widgets.md#keyeventlistener) |

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

▸ **on**(`event`: string, `listener`: function): *this*

*Overrides [Node](_declarations_blessed_d_.widgets.node.md).[on](_declarations_blessed_d_.widgets.node.md#on)*

*Defined in [declarations/blessed.d.ts:511](https://github.com/cancerberoSgx/accursed/blob/5b2518e/src/declarations/blessed.d.ts#L511)*

Registers event listener to be notified on mouse events.

**Parameters:**

▪ **event**: *string*

▪ **listener**: *function*

▸ (...`args`: any[]): *void*

**Parameters:**

Name | Type |
------ | ------ |
`...args` | any[] |

**Returns:** *this*

▸ **on**(`event`: [NodeMouseEventType](../modules/_declarations_blessed_d_.widgets.md#nodemouseeventtype), `callback`: function): *this*

*Overrides [Node](_declarations_blessed_d_.widgets.node.md).[on](_declarations_blessed_d_.widgets.node.md#on)*

*Defined in [declarations/blessed.d.ts:515](https://github.com/cancerberoSgx/accursed/blob/5b2518e/src/declarations/blessed.d.ts#L515)*

Registers event listener to be notified on mouse events.

**Parameters:**

▪ **event**: *[NodeMouseEventType](../modules/_declarations_blessed_d_.widgets.md#nodemouseeventtype)*

▪ **callback**: *function*

▸ (`arg`: [IMouseEventArg](../interfaces/_declarations_blessed_d_.widgets.events.imouseeventarg.md)): *void*

**Parameters:**

Name | Type |
------ | ------ |
`arg` | [IMouseEventArg](../interfaces/_declarations_blessed_d_.widgets.events.imouseeventarg.md) |

**Returns:** *this*

▸ **on**(`event`: "keypress", `callback`: [KeyEventListener](../modules/_declarations_blessed_d_.widgets.md#keyeventlistener)): *this*

*Overrides [Node](_declarations_blessed_d_.widgets.node.md).[on](_declarations_blessed_d_.widgets.node.md#on)*

*Defined in [declarations/blessed.d.ts:519](https://github.com/cancerberoSgx/accursed/blob/5b2518e/src/declarations/blessed.d.ts#L519)*

Received on key events.

**Parameters:**

Name | Type |
------ | ------ |
`event` | "keypress" |
`callback` | [KeyEventListener](../modules/_declarations_blessed_d_.widgets.md#keyeventlistener) |

**Returns:** *this*

▸ **on**(`event`: [NodeScreenEventType](../modules/_declarations_blessed_d_.widgets.md#nodescreeneventtype), `callback`: function): *this*

*Overrides [Node](_declarations_blessed_d_.widgets.node.md).[on](_declarations_blessed_d_.widgets.node.md#on)*

*Defined in [declarations/blessed.d.ts:520](https://github.com/cancerberoSgx/accursed/blob/5b2518e/src/declarations/blessed.d.ts#L520)*

**Parameters:**

▪ **event**: *[NodeScreenEventType](../modules/_declarations_blessed_d_.widgets.md#nodescreeneventtype)*

▪ **callback**: *function*

▸ (`arg`: [Screen](_declarations_blessed_d_.widgets.screen.md)): *void*

**Parameters:**

Name | Type |
------ | ------ |
`arg` | [Screen](_declarations_blessed_d_.widgets.screen.md) |

**Returns:** *this*

▸ **on**(`event`: "warning", `callback`: function): *this*

*Overrides [Node](_declarations_blessed_d_.widgets.node.md).[on](_declarations_blessed_d_.widgets.node.md#on)*

*Defined in [declarations/blessed.d.ts:524](https://github.com/cancerberoSgx/accursed/blob/5b2518e/src/declarations/blessed.d.ts#L524)*

Received when blessed notices something untoward (output is not a tty, terminfo not found, etc).

**Parameters:**

▪ **event**: *"warning"*

▪ **callback**: *function*

▸ (`text`: string): *void*

**Parameters:**

Name | Type |
------ | ------ |
`text` | string |

**Returns:** *this*

▸ **on**(`event`: [NodeGenericEventType](../modules/_declarations_blessed_d_.widgets.md#nodegenericeventtype), `callback`: function): *this*

*Overrides [Node](_declarations_blessed_d_.widgets.node.md).[on](_declarations_blessed_d_.widgets.node.md#on)*

*Defined in [declarations/blessed.d.ts:525](https://github.com/cancerberoSgx/accursed/blob/5b2518e/src/declarations/blessed.d.ts#L525)*

**Parameters:**

▪ **event**: *[NodeGenericEventType](../modules/_declarations_blessed_d_.widgets.md#nodegenericeventtype)*

▪ **callback**: *function*

▸ (`arg`: [INodeGenericEventArg](../interfaces/_declarations_blessed_d_.widgets.events.inodegenericeventarg.md)): *void*

**Parameters:**

Name | Type |
------ | ------ |
`arg` | [INodeGenericEventArg](../interfaces/_declarations_blessed_d_.widgets.events.inodegenericeventarg.md) |

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

###  onceKey

▸ **onceKey**(`name`: string, `listener`: [KeyEventListener](../modules/_declarations_blessed_d_.widgets.md#keyeventlistener)): *void*

*Defined in [declarations/blessed.d.ts:496](https://github.com/cancerberoSgx/accursed/blob/5b2518e/src/declarations/blessed.d.ts#L496)*

Bind a keypress listener for a specific key once.

**Parameters:**

Name | Type |
------ | ------ |
`name` | string |
`listener` | [KeyEventListener](../modules/_declarations_blessed_d_.widgets.md#keyeventlistener) |

**Returns:** *void*

___

###  prepend

▸ **prepend**(`node`: [Node](_declarations_blessed_d_.widgets.node.md)): *void*

*Inherited from [Node](_declarations_blessed_d_.widgets.node.md).[prepend](_declarations_blessed_d_.widgets.node.md#prepend)*

*Defined in [declarations/blessed.d.ts:321](https://github.com/cancerberoSgx/accursed/blob/5b2518e/src/declarations/blessed.d.ts#L321)*

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

*Inherited from [Node](_declarations_blessed_d_.widgets.node.md).[remove](_declarations_blessed_d_.widgets.node.md#remove)*

*Defined in [declarations/blessed.d.ts:331](https://github.com/cancerberoSgx/accursed/blob/5b2518e/src/declarations/blessed.d.ts#L331)*

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

###  removeKey

▸ **removeKey**(`name`: string, `listener`: [KeyEventListener](../modules/_declarations_blessed_d_.widgets.md#keyeventlistener)): *void*

*Defined in [declarations/blessed.d.ts:506](https://github.com/cancerberoSgx/accursed/blob/5b2518e/src/declarations/blessed.d.ts#L506)*

Remove a keypress listener for a specific key.

**Parameters:**

Name | Type |
------ | ------ |
`name` | string |
`listener` | [KeyEventListener](../modules/_declarations_blessed_d_.widgets.md#keyeventlistener) |

**Returns:** *void*

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

*Inherited from [Node](_declarations_blessed_d_.widgets.node.md).[set](_declarations_blessed_d_.widgets.node.md#set)*

*Defined in [declarations/blessed.d.ts:385](https://github.com/cancerberoSgx/accursed/blob/5b2518e/src/declarations/blessed.d.ts#L385)*

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

###  unkey

▸ **unkey**(`name`: string, `listener`: [KeyEventListener](../modules/_declarations_blessed_d_.widgets.md#keyeventlistener)): *void*

*Defined in [declarations/blessed.d.ts:501](https://github.com/cancerberoSgx/accursed/blob/5b2518e/src/declarations/blessed.d.ts#L501)*

Remove a keypress listener for a specific key.

**Parameters:**

Name | Type |
------ | ------ |
`name` | string |
`listener` | [KeyEventListener](../modules/_declarations_blessed_d_.widgets.md#keyeventlistener) |

**Returns:** *void*

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
