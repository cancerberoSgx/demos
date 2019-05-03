[accursed](../README.md) > ["blessed/focus"](../modules/_blessed_focus_.md)

# External module: "blessed/focus"

## Index

### Type aliases

* [OnFocusChangeListener](_blessed_focus_.md#onfocuschangelistener)
* [OnFocusedListener](_blessed_focus_.md#onfocusedlistener)

### Variables

* [focusStyle](_blessed_focus_.md#focusstyle)
* [lastFocus](_blessed_focus_.md#lastfocus)
* [lastFocused](_blessed_focus_.md#lastfocused)
* [onFocusChangeInterval](_blessed_focus_.md#onfocuschangeinterval)
* [onFocusChangeListeners](_blessed_focus_.md#onfocuschangelisteners)
* [onFocusChangeTimer](_blessed_focus_.md#onfocuschangetimer)
* [onFocusedEmitter](_blessed_focus_.md#onfocusedemitter)
* [onFocused_focus](_blessed_focus_.md#onfocused_focus)

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

---

## Type aliases

<a id="onfocuschangelistener"></a>

###  OnFocusChangeListener

**Ƭ OnFocusChangeListener**: *`function`*

*Defined in [blessed/focus.ts:87](https://github.com/cancerberoSgx/accursed/blob/978b980/src/blessed/focus.ts#L87)*

#### Type declaration
▸(focused?: *[Element](../interfaces/_jsx_types_.__global.jsx.element.md)*, previous?: *[Element](../interfaces/_jsx_types_.__global.jsx.element.md)*): `void`

**Parameters:**

| Name | Type |
| ------ | ------ |
| `Optional` focused | [Element](../interfaces/_jsx_types_.__global.jsx.element.md) |
| `Optional` previous | [Element](../interfaces/_jsx_types_.__global.jsx.element.md) |

**Returns:** `void`

___
<a id="onfocusedlistener"></a>

###  OnFocusedListener

**Ƭ OnFocusedListener**: *`function`*

*Defined in [blessed/focus.ts:24](https://github.com/cancerberoSgx/accursed/blob/978b980/src/blessed/focus.ts#L24)*

#### Type declaration
▸(__namedParameters: *`object`*): `void`

**Parameters:**

**__namedParameters: `object`**

| Name | Type |
| ------ | ------ |
| focused | [BlessedElement](../classes/_declarations_blessed_d_.widgets.blessedelement.md)<`object`> |
| old | [BlessedElement](../classes/_declarations_blessed_d_.widgets.blessedelement.md)<`object`> |

**Returns:** `void`

___

## Variables

<a id="focusstyle"></a>

### `<Const>` focusStyle

**● focusStyle**: *[Style](_blessedtypes_.md#style)*

*Defined in [blessed/focus.ts:34](https://github.com/cancerberoSgx/accursed/blob/978b980/src/blessed/focus.ts#L34)*

___
<a id="lastfocus"></a>

### `<Let>` lastFocus

**● lastFocus**: *`object`*

*Defined in [blessed/focus.ts:128](https://github.com/cancerberoSgx/accursed/blob/978b980/src/blessed/focus.ts#L128)*

#### Type declaration

[id: `string`]: `number`

___
<a id="lastfocused"></a>

### `<Let>` lastFocused

**● lastFocused**: *[Element](../interfaces/_jsx_types_.__global.jsx.element.md) \| `undefined`*

*Defined in [blessed/focus.ts:127](https://github.com/cancerberoSgx/accursed/blob/978b980/src/blessed/focus.ts#L127)*

___
<a id="onfocuschangeinterval"></a>

### `<Let>` onFocusChangeInterval

**● onFocusChangeInterval**: *`number`* = 500

*Defined in [blessed/focus.ts:114](https://github.com/cancerberoSgx/accursed/blob/978b980/src/blessed/focus.ts#L114)*

___
<a id="onfocuschangelisteners"></a>

### `<Const>` onFocusChangeListeners

**● onFocusChangeListeners**: *[OnFocusChangeListener](_blessed_focus_.md#onfocuschangelistener)[]* =  []

*Defined in [blessed/focus.ts:113](https://github.com/cancerberoSgx/accursed/blob/978b980/src/blessed/focus.ts#L113)*

___
<a id="onfocuschangetimer"></a>

### `<Let>` onFocusChangeTimer

**● onFocusChangeTimer**: *`Timeout` \| `undefined`* =  undefined

*Defined in [blessed/focus.ts:125](https://github.com/cancerberoSgx/accursed/blob/978b980/src/blessed/focus.ts#L125)*

___
<a id="onfocusedemitter"></a>

### `<Const>` onFocusedEmitter

**● onFocusedEmitter**: *`Emitter`<`any`, `function`>* =  new Emitter()

*Defined in [blessed/focus.ts:31](https://github.com/cancerberoSgx/accursed/blob/978b980/src/blessed/focus.ts#L31)*

___
<a id="onfocused_focus"></a>

### `<Let>` onFocused_focus

**● onFocused_focus**: *[_focus](../classes/_declarations_blessed_d_.widgets.screen.md#_focus) \| `undefined`*

*Defined in [blessed/focus.ts:32](https://github.com/cancerberoSgx/accursed/blob/978b980/src/blessed/focus.ts#L32)*

___

## Functions

<a id="installfocushandler"></a>

###  installFocusHandler

▸ **installFocusHandler**(focusId: *`string`*, elements: *[Element](../interfaces/_jsx_types_.__global.jsx.element.md)[]*, screen: *[Screen](../classes/_declarations_blessed_d_.widgets.screen.md)*, keys?: *[`string`, `string`]*, styleChildren?: *`boolean`*, focusFirst?: *`boolean`*): `void`

*Defined in [blessed/focus.ts:154](https://github.com/cancerberoSgx/accursed/blob/978b980/src/blessed/focus.ts#L154)*

*__obsolete__*: in favor of [onFocused](_blessed_focus_.md#onfocused).

**Parameters:**

| Name | Type | Default value |
| ------ | ------ | ------ |
| focusId | `string` | - |
| elements | [Element](../interfaces/_jsx_types_.__global.jsx.element.md)[] | - |
| screen | [Screen](../classes/_declarations_blessed_d_.widgets.screen.md) | - |
| `Default value` keys | [`string`, `string`] |  [&#x27;tab&#x27;, &#x27;S-tab&#x27;] |
| `Default value` styleChildren | `boolean` | false |
| `Default value` focusFirst | `boolean` | false |

**Returns:** `void`

___
<a id="isfocused"></a>

###  isFocused

▸ **isFocused**(screen: *[Screen](../classes/_declarations_blessed_d_.widgets.screen.md)*, el: *[Element](../interfaces/_jsx_types_.__global.jsx.element.md)*): `true` \| [Node](../classes/_declarations_blessed_d_.widgets.node.md)

*Defined in [blessed/focus.ts:6](https://github.com/cancerberoSgx/accursed/blob/978b980/src/blessed/focus.ts#L6)*

**Parameters:**

| Name | Type |
| ------ | ------ |
| screen | [Screen](../classes/_declarations_blessed_d_.widgets.screen.md) |
| el | [Element](../interfaces/_jsx_types_.__global.jsx.element.md) |

**Returns:** `true` \| [Node](../classes/_declarations_blessed_d_.widgets.node.md)

___
<a id="offfocused"></a>

###  offFocused

▸ **offFocused**(f: *[OnFocusedListener](_blessed_focus_.md#onfocusedlistener)*): `void`

*Defined in [blessed/focus.ts:28](https://github.com/cancerberoSgx/accursed/blob/978b980/src/blessed/focus.ts#L28)*

Removes an onFocused listener. See [onFocused](_blessed_focus_.md#onfocused)

**Parameters:**

| Name | Type |
| ------ | ------ |
| f | [OnFocusedListener](_blessed_focus_.md#onfocusedlistener) |

**Returns:** `void`

___
<a id="onblur"></a>

###  onBlur

▸ **onBlur**(el: *[Element](../interfaces/_jsx_types_.__global.jsx.element.md)*, screen: *[Screen](../classes/_declarations_blessed_d_.widgets.screen.md)*, fn: *`function`*, emitNow?: *`boolean`*): `void`

*Defined in [blessed/focus.ts:48](https://github.com/cancerberoSgx/accursed/blob/978b980/src/blessed/focus.ts#L48)*

*__obsolete__*: in favor of [onFocused](_blessed_focus_.md#onfocused).

Provides blur/focus notifications on those terminals that focus protocol is not supported (so bless focus/blur events won't work).

It will poll screen.focused and notify when focus/blur is detected.

**Parameters:**

| Name | Type | Default value |
| ------ | ------ | ------ |
| el | [Element](../interfaces/_jsx_types_.__global.jsx.element.md) | - |
| screen | [Screen](../classes/_declarations_blessed_d_.widgets.screen.md) | - |
| fn | `function` | - |
| `Default value` emitNow | `boolean` | false |

**Returns:** `void`

___
<a id="onfocus"></a>

###  onFocus

▸ **onFocus**(el: *[Element](../interfaces/_jsx_types_.__global.jsx.element.md)*, screen: *[Screen](../classes/_declarations_blessed_d_.widgets.screen.md)*, fn: *[OnFocusChangeListener](_blessed_focus_.md#onfocuschangelistener)*, emitNow?: *`boolean`*): `void`

*Defined in [blessed/focus.ts:71](https://github.com/cancerberoSgx/accursed/blob/978b980/src/blessed/focus.ts#L71)*

*__obsolete__*: in favor of [onFocused](_blessed_focus_.md#onfocused).

Provides blur/focus notifications on those terminals that focus protocol is not supported (so bless focus/blur events won't work).

It will poll screen.focused and notify when focus/blur is detected.

**Parameters:**

| Name | Type | Default value |
| ------ | ------ | ------ |
| el | [Element](../interfaces/_jsx_types_.__global.jsx.element.md) | - |
| screen | [Screen](../classes/_declarations_blessed_d_.widgets.screen.md) | - |
| fn | [OnFocusChangeListener](_blessed_focus_.md#onfocuschangelistener) | - |
| `Default value` emitNow | `boolean` | false |

**Returns:** `void`

___
<a id="onfocuschange"></a>

###  onFocusChange

▸ **onFocusChange**(screen: *[Screen](../classes/_declarations_blessed_d_.widgets.screen.md)*, fn: *[OnFocusChangeListener](_blessed_focus_.md#onfocuschangelistener)*): `void`

*Defined in [blessed/focus.ts:98](https://github.com/cancerberoSgx/accursed/blob/978b980/src/blessed/focus.ts#L98)*

*__obsolete__*: in favor of [onFocused](_blessed_focus_.md#onfocused).

Provides blur/focus notifications on those terminals that focus protocol is not supported (so bless focus/blur events won't work).

It will poll screen.focused and notify when focus/blur is detected.

TODO: offFocusChange()

**Parameters:**

| Name | Type |
| ------ | ------ |
| screen | [Screen](../classes/_declarations_blessed_d_.widgets.screen.md) |
| fn | [OnFocusChangeListener](_blessed_focus_.md#onfocuschangelistener) |

**Returns:** `void`

___
<a id="onfocused"></a>

###  onFocused

▸ **onFocused**(screen: *[Screen](../classes/_declarations_blessed_d_.widgets.screen.md)*, f: *[OnFocusedListener](_blessed_focus_.md#onfocusedlistener)*): `void`

*Defined in [blessed/focus.ts:13](https://github.com/cancerberoSgx/accursed/blob/978b980/src/blessed/focus.ts#L13)*

Same as [onFocus](_blessed_focus_.md#onfocus) but without polling screen.focused. This implementation wraps Screen.prototype.\_focus to detect when focused element changes

**Parameters:**

| Name | Type |
| ------ | ------ |
| screen | [Screen](../classes/_declarations_blessed_d_.widgets.screen.md) |
| f | [OnFocusedListener](_blessed_focus_.md#onfocusedlistener) |

**Returns:** `void`

___
<a id="resetfocusmanager"></a>

###  resetFocusManager

▸ **resetFocusManager**(): `void`

*Defined in [blessed/focus.ts:135](https://github.com/cancerberoSgx/accursed/blob/978b980/src/blessed/focus.ts#L135)*

*__obsolete__*: in favor of [onFocused](_blessed_focus_.md#onfocused).

It resets the focus manager. Useful if you are destroying / recreating the screen.

**Returns:** `void`

___
<a id="setonfocuschangeinterval"></a>

###  setOnFocusChangeInterval

▸ **setOnFocusChangeInterval**(t: *`number`*): `void`

*Defined in [blessed/focus.ts:121](https://github.com/cancerberoSgx/accursed/blob/978b980/src/blessed/focus.ts#L121)*

*__obsolete__*: in favor of [onFocused](_blessed_focus_.md#onfocused).

change the polling interval. By default it's 500 ms

**Parameters:**

| Name | Type |
| ------ | ------ |
| t | `number` |

**Returns:** `void`

___
<a id="uninstallfocushandler"></a>

###  uninstallFocusHandler

▸ **uninstallFocusHandler**(focusId: *`string`*): `void`

*Defined in [blessed/focus.ts:144](https://github.com/cancerberoSgx/accursed/blob/978b980/src/blessed/focus.ts#L144)*

*__obsolete__*: in favor of [onFocused](_blessed_focus_.md#onfocused).

**Parameters:**

| Name | Type |
| ------ | ------ |
| focusId | `string` |

**Returns:** `void`

___

