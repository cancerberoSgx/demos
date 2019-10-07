[accursed](../README.md) › [Globals](../globals.md) › ["blessed/focus"](_blessed_focus_.md)

# External module: "blessed/focus"

## Index

### Type aliases

* [OnFocusChangeListener](_blessed_focus_.md#onfocuschangelistener)
* [OnFocusedListener](_blessed_focus_.md#onfocusedlistener)

### Variables

* [focusStyle](_blessed_focus_.md#const-focusstyle)
* [lastFocus](_blessed_focus_.md#let-lastfocus)
* [lastFocused](_blessed_focus_.md#let-lastfocused)
* [onFocusChangeInterval](_blessed_focus_.md#let-onfocuschangeinterval)
* [onFocusChangeListeners](_blessed_focus_.md#const-onfocuschangelisteners)
* [onFocusChangeTimer](_blessed_focus_.md#let-onfocuschangetimer)
* [onFocusedEmitter](_blessed_focus_.md#const-onfocusedemitter)
* [onFocused_focus](_blessed_focus_.md#let-onfocused_focus)

### Functions

* [installFocusHandler](_blessed_focus_.md#installfocushandler)
* [isFocused](_blessed_focus_.md#isfocused)
* [offFocused](_blessed_focus_.md#offfocused)
* [onBlur](_blessed_focus_.md#onblur)
* [onFocus](_blessed_focus_.md#onfocus)
* [onFocusChange](_blessed_focus_.md#onfocuschange)
* [onFocused](_blessed_focus_.md#onfocused)
* [resetFocusManager](_blessed_focus_.md#resetfocusmanager)
* [setOnFocusChangeInterval](_blessed_focus_.md#setonfocuschangeinterval)
* [uninstallFocusHandler](_blessed_focus_.md#uninstallfocushandler)

## Type aliases

###  OnFocusChangeListener

Ƭ **OnFocusChangeListener**: *function*

*Defined in [blessed/focus.ts:91](https://github.com/cancerberoSgx/accursed/blob/5b2518e/src/blessed/focus.ts#L91)*

#### Type declaration:

▸ (`focused?`: [Element](../interfaces/_jsx_types_.__global.jsx.element.md), `previous?`: [Element](../interfaces/_jsx_types_.__global.jsx.element.md)): *void*

**Parameters:**

Name | Type |
------ | ------ |
`focused?` | [Element](../interfaces/_jsx_types_.__global.jsx.element.md) |
`previous?` | [Element](../interfaces/_jsx_types_.__global.jsx.element.md) |

___

###  OnFocusedListener

Ƭ **OnFocusedListener**: *function*

*Defined in [blessed/focus.ts:25](https://github.com/cancerberoSgx/accursed/blob/5b2518e/src/blessed/focus.ts#L25)*

#### Type declaration:

▸ (`__namedParameters`: object): *void*

**Parameters:**

▪ **__namedParameters**: *object*

Name | Type |
------ | ------ |
`focused` | [BlessedElement](../classes/_declarations_blessed_d_.widgets.blessedelement.md)‹object› |
`old` | [BlessedElement](../classes/_declarations_blessed_d_.widgets.blessedelement.md)‹object› |

## Variables

### `Const` focusStyle

• **focusStyle**: *[Style](_blessedtypes_.md#style)*

*Defined in [blessed/focus.ts:38](https://github.com/cancerberoSgx/accursed/blob/5b2518e/src/blessed/focus.ts#L38)*

___

### `Let` lastFocus

• **lastFocus**: *object*

*Defined in [blessed/focus.ts:132](https://github.com/cancerberoSgx/accursed/blob/5b2518e/src/blessed/focus.ts#L132)*

#### Type declaration:

* \[ **id**: *string*\]: number

___

### `Let` lastFocused

• **lastFocused**: *[Element](../interfaces/_jsx_types_.__global.jsx.element.md) | undefined*

*Defined in [blessed/focus.ts:131](https://github.com/cancerberoSgx/accursed/blob/5b2518e/src/blessed/focus.ts#L131)*

___

### `Let` onFocusChangeInterval

• **onFocusChangeInterval**: *number* = 500

*Defined in [blessed/focus.ts:118](https://github.com/cancerberoSgx/accursed/blob/5b2518e/src/blessed/focus.ts#L118)*

___

### `Const` onFocusChangeListeners

• **onFocusChangeListeners**: *[OnFocusChangeListener](_blessed_focus_.md#onfocuschangelistener)[]* =  []

*Defined in [blessed/focus.ts:117](https://github.com/cancerberoSgx/accursed/blob/5b2518e/src/blessed/focus.ts#L117)*

___

### `Let` onFocusChangeTimer

• **onFocusChangeTimer**: *Timeout | undefined* =  undefined

*Defined in [blessed/focus.ts:129](https://github.com/cancerberoSgx/accursed/blob/5b2518e/src/blessed/focus.ts#L129)*

___

### `Const` onFocusedEmitter

• **onFocusedEmitter**: *Emitter‹any, function›* =  new Emitter()

*Defined in [blessed/focus.ts:34](https://github.com/cancerberoSgx/accursed/blob/5b2518e/src/blessed/focus.ts#L34)*

___

### `Let` onFocused_focus

• **onFocused_focus**: *[_focus](../classes/_declarations_blessed_d_.widgets.screen.md#_focus) | undefined*

*Defined in [blessed/focus.ts:36](https://github.com/cancerberoSgx/accursed/blob/5b2518e/src/blessed/focus.ts#L36)*

## Functions

###  installFocusHandler

▸ **installFocusHandler**(`focusId`: string, `elements`: [Element](../interfaces/_jsx_types_.__global.jsx.element.md)[], `screen`: [Screen](../classes/_declarations_blessed_d_.widgets.screen.md), `keys`: [string, string], `styleChildren`: boolean, `focusFirst`: boolean): *void*

*Defined in [blessed/focus.ts:160](https://github.com/cancerberoSgx/accursed/blob/5b2518e/src/blessed/focus.ts#L160)*

**`obsolete`** in favor of [onFocused](_blessed_focus_.md#onfocused).

**Parameters:**

Name | Type | Default |
------ | ------ | ------ |
`focusId` | string | - |
`elements` | [Element](../interfaces/_jsx_types_.__global.jsx.element.md)[] | - |
`screen` | [Screen](../classes/_declarations_blessed_d_.widgets.screen.md) | - |
`keys` | [string, string] |  ['tab', 'S-tab'] |
`styleChildren` | boolean | false |
`focusFirst` | boolean | false |

**Returns:** *void*

___

###  isFocused

▸ **isFocused**(`screen`: [Screen](../classes/_declarations_blessed_d_.widgets.screen.md), `el`: [Element](../interfaces/_jsx_types_.__global.jsx.element.md)): *true | [Node](../classes/_declarations_blessed_d_.widgets.node.md)*

*Defined in [blessed/focus.ts:6](https://github.com/cancerberoSgx/accursed/blob/5b2518e/src/blessed/focus.ts#L6)*

**Parameters:**

Name | Type |
------ | ------ |
`screen` | [Screen](../classes/_declarations_blessed_d_.widgets.screen.md) |
`el` | [Element](../interfaces/_jsx_types_.__global.jsx.element.md) |

**Returns:** *true | [Node](../classes/_declarations_blessed_d_.widgets.node.md)*

___

###  offFocused

▸ **offFocused**(`f`: [OnFocusedListener](_blessed_focus_.md#onfocusedlistener)): *void*

*Defined in [blessed/focus.ts:30](https://github.com/cancerberoSgx/accursed/blob/5b2518e/src/blessed/focus.ts#L30)*

Removes an onFocused listener. See [onFocused](_blessed_focus_.md#onfocused)

**Parameters:**

Name | Type |
------ | ------ |
`f` | [OnFocusedListener](_blessed_focus_.md#onfocusedlistener) |

**Returns:** *void*

___

###  onBlur

▸ **onBlur**(`el`: [Element](../interfaces/_jsx_types_.__global.jsx.element.md), `screen`: [Screen](../classes/_declarations_blessed_d_.widgets.screen.md), `fn`: function, `emitNow`: boolean): *void*

*Defined in [blessed/focus.ts:52](https://github.com/cancerberoSgx/accursed/blob/5b2518e/src/blessed/focus.ts#L52)*

**`obsolete`** in favor of [onFocused](_blessed_focus_.md#onfocused).

Provides blur/focus notifications on those terminals that focus protocol is not supported (so bless focus/blur events won't work).

It will poll screen.focused and notify when focus/blur is detected.

**Parameters:**

▪ **el**: *[Element](../interfaces/_jsx_types_.__global.jsx.element.md)*

▪ **screen**: *[Screen](../classes/_declarations_blessed_d_.widgets.screen.md)*

▪ **fn**: *function*

▸ (`focused?`: [Element](../interfaces/_jsx_types_.__global.jsx.element.md), `previous?`: [Element](../interfaces/_jsx_types_.__global.jsx.element.md)): *void*

**Parameters:**

Name | Type |
------ | ------ |
`focused?` | [Element](../interfaces/_jsx_types_.__global.jsx.element.md) |
`previous?` | [Element](../interfaces/_jsx_types_.__global.jsx.element.md) |

▪`Default value`  **emitNow**: *boolean*= false

**Returns:** *void*

___

###  onFocus

▸ **onFocus**(`el`: [Element](../interfaces/_jsx_types_.__global.jsx.element.md), `screen`: [Screen](../classes/_declarations_blessed_d_.widgets.screen.md), `fn`: [OnFocusChangeListener](_blessed_focus_.md#onfocuschangelistener), `emitNow`: boolean): *void*

*Defined in [blessed/focus.ts:75](https://github.com/cancerberoSgx/accursed/blob/5b2518e/src/blessed/focus.ts#L75)*

**`obsolete`** in favor of [onFocused](_blessed_focus_.md#onfocused).

Provides blur/focus notifications on those terminals that focus protocol is not supported (so bless focus/blur events won't work).

It will poll screen.focused and notify when focus/blur is detected.

**Parameters:**

Name | Type | Default |
------ | ------ | ------ |
`el` | [Element](../interfaces/_jsx_types_.__global.jsx.element.md) | - |
`screen` | [Screen](../classes/_declarations_blessed_d_.widgets.screen.md) | - |
`fn` | [OnFocusChangeListener](_blessed_focus_.md#onfocuschangelistener) | - |
`emitNow` | boolean | false |

**Returns:** *void*

___

###  onFocusChange

▸ **onFocusChange**(`screen`: [Screen](../classes/_declarations_blessed_d_.widgets.screen.md), `fn`: [OnFocusChangeListener](_blessed_focus_.md#onfocuschangelistener)): *void*

*Defined in [blessed/focus.ts:102](https://github.com/cancerberoSgx/accursed/blob/5b2518e/src/blessed/focus.ts#L102)*

**`obsolete`** in favor of [onFocused](_blessed_focus_.md#onfocused).

Provides blur/focus notifications on those terminals that focus protocol is not supported (so bless focus/blur events won't work).

It will poll screen.focused and notify when focus/blur is detected.

TODO: offFocusChange()

**Parameters:**

Name | Type |
------ | ------ |
`screen` | [Screen](../classes/_declarations_blessed_d_.widgets.screen.md) |
`fn` | [OnFocusChangeListener](_blessed_focus_.md#onfocuschangelistener) |

**Returns:** *void*

___

###  onFocused

▸ **onFocused**(`screen`: [Screen](../classes/_declarations_blessed_d_.widgets.screen.md), `f`: [OnFocusedListener](_blessed_focus_.md#onfocusedlistener)): *void*

*Defined in [blessed/focus.ts:13](https://github.com/cancerberoSgx/accursed/blob/5b2518e/src/blessed/focus.ts#L13)*

Same as [onFocus](_blessed_focus_.md#onfocus) but without polling screen.focused. This implementation wraps Screen.prototype._focus to detect when focused element changes

**Parameters:**

Name | Type |
------ | ------ |
`screen` | [Screen](../classes/_declarations_blessed_d_.widgets.screen.md) |
`f` | [OnFocusedListener](_blessed_focus_.md#onfocusedlistener) |

**Returns:** *void*

___

###  resetFocusManager

▸ **resetFocusManager**(): *void*

*Defined in [blessed/focus.ts:139](https://github.com/cancerberoSgx/accursed/blob/5b2518e/src/blessed/focus.ts#L139)*

**`obsolete`** in favor of [onFocused](_blessed_focus_.md#onfocused).

It resets the focus manager. Useful if you are destroying / recreating the screen.

**Returns:** *void*

___

###  setOnFocusChangeInterval

▸ **setOnFocusChangeInterval**(`t`: number): *void*

*Defined in [blessed/focus.ts:125](https://github.com/cancerberoSgx/accursed/blob/5b2518e/src/blessed/focus.ts#L125)*

**`obsolete`** in favor of [onFocused](_blessed_focus_.md#onfocused).

change the polling interval. By default it's 500 ms

**Parameters:**

Name | Type |
------ | ------ |
`t` | number |

**Returns:** *void*

___

###  uninstallFocusHandler

▸ **uninstallFocusHandler**(`focusId`: string): *void*

*Defined in [blessed/focus.ts:149](https://github.com/cancerberoSgx/accursed/blob/5b2518e/src/blessed/focus.ts#L149)*

**`obsolete`** in favor of [onFocused](_blessed_focus_.md#onfocused).

**Parameters:**

Name | Type |
------ | ------ |
`focusId` | string |

**Returns:** *void*
