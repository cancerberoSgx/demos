[accursed](../README.md) › [Globals](../globals.md) › ["declarations/blessedProgram.d"](../modules/_declarations_blessedprogram_d_.md) › [GpmClient](_declarations_blessedprogram_d_.gpmclient.md)

# Interface: GpmClient

## Hierarchy

* EventEmitter

  ↳ **GpmClient**

## Index

### Properties

* [defaultMaxListeners](_declarations_blessedprogram_d_.gpmclient.md#static-defaultmaxlisteners)

### Methods

* [addListener](_declarations_blessedprogram_d_.gpmclient.md#addlistener)
* [emit](_declarations_blessedprogram_d_.gpmclient.md#emit)
* [eventNames](_declarations_blessedprogram_d_.gpmclient.md#eventnames)
* [getMaxListeners](_declarations_blessedprogram_d_.gpmclient.md#getmaxlisteners)
* [listenerCount](_declarations_blessedprogram_d_.gpmclient.md#listenercount)
* [listeners](_declarations_blessedprogram_d_.gpmclient.md#listeners)
* [off](_declarations_blessedprogram_d_.gpmclient.md#off)
* [on](_declarations_blessedprogram_d_.gpmclient.md#on)
* [once](_declarations_blessedprogram_d_.gpmclient.md#once)
* [prependListener](_declarations_blessedprogram_d_.gpmclient.md#prependlistener)
* [prependOnceListener](_declarations_blessedprogram_d_.gpmclient.md#prependoncelistener)
* [rawListeners](_declarations_blessedprogram_d_.gpmclient.md#rawlisteners)
* [removeAllListeners](_declarations_blessedprogram_d_.gpmclient.md#removealllisteners)
* [removeListener](_declarations_blessedprogram_d_.gpmclient.md#removelistener)
* [setMaxListeners](_declarations_blessedprogram_d_.gpmclient.md#setmaxlisteners)
* [listenerCount](_declarations_blessedprogram_d_.gpmclient.md#static-listenercount)

## Properties

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

▸ **on**(`e`: "move", `c`: function): *this*

*Overrides void*

*Defined in [declarations/blessedProgram.d.ts:100](https://github.com/cancerberoSgx/accursed/blob/468bf3c/src/declarations/blessedProgram.d.ts#L100)*

**Parameters:**

▪ **e**: *"move"*

▪ **c**: *function*

▸ (`buttons`: any, `modifiers`: any, `x`: any, `y`: any): *void*

**Parameters:**

Name | Type |
------ | ------ |
`buttons` | any |
`modifiers` | any |
`x` | any |
`y` | any |

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
