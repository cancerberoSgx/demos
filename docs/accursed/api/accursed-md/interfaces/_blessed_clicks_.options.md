[accursed](../README.md) > ["blessed/clicks"](../modules/_blessed_clicks_.md) > [Options](../interfaces/_blessed_clicks_.options.md)

# Interface: Options

## Hierarchy

**Options**

## Index

### Properties

* [handler](_blessed_clicks_.options.md#handler)
* [interval](_blessed_clicks_.options.md#interval)
* [once](_blessed_clicks_.options.md#once)
* [remove](_blessed_clicks_.options.md#remove)
* [target](_blessed_clicks_.options.md#target)

---

## Properties

<a id="handler"></a>

###  handler

**● handler**: *`function`*

*Defined in [blessed/clicks.ts:11](https://github.com/cancerberoSgx/accursed/blob/978b980/src/blessed/clicks.ts#L11)*

The handler function to be called on clicks. Notice that it receives a event object with a `count` property that indicate the amount of clicks.

#### Type declaration
▸(e: *[IMouseEventArg](_declarations_blessed_d_.widgets.events.imouseeventarg.md) & `object`*): `void`

**Parameters:**

| Name | Type |
| ------ | ------ |
| e | [IMouseEventArg](_declarations_blessed_d_.widgets.events.imouseeventarg.md) & `object` |

**Returns:** `void`

___
<a id="interval"></a>

### `<Optional>` interval

**● interval**: *`number`*

*Defined in [blessed/clicks.ts:16](https://github.com/cancerberoSgx/accursed/blob/978b980/src/blessed/clicks.ts#L16)*

The time tolerance for multiple clicks. If more time that this passes between multiple clicks then `count` resets. Default value is 250.

___
<a id="once"></a>

### `<Optional>` once

**● once**: *`boolean`*

*Defined in [blessed/clicks.ts:20](https://github.com/cancerberoSgx/accursed/blob/978b980/src/blessed/clicks.ts#L20)*

Install the click handler with `once()` instead of `on()`

___
<a id="remove"></a>

### `<Optional>` remove

**● remove**: *`boolean`*

*Defined in [blessed/clicks.ts:24](https://github.com/cancerberoSgx/accursed/blob/978b980/src/blessed/clicks.ts#L24)*

Remove the click listener from the target instead adding one.

___
<a id="target"></a>

###  target

**● target**: *[Element](_jsx_types_.__global.jsx.element.md) \| [Screen](../classes/_declarations_blessed_d_.widgets.screen.md)*

*Defined in [blessed/clicks.ts:6](https://github.com/cancerberoSgx/accursed/blob/978b980/src/blessed/clicks.ts#L6)*

Element to listen for clicks on.

___

