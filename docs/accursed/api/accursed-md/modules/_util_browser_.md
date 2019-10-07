[accursed](../README.md) › [Globals](../globals.md) › ["util/browser"](_util_browser_.md)

# External module: "util/browser"

## Index

### Variables

* [document](_util_browser_.md#document)
* [window](_util_browser_.md#window)

### Functions

* [createScreen2](_util_browser_.md#createscreen2)
* [createScreenForBrowser](_util_browser_.md#createscreenforbrowser)
* [inBrowser](_util_browser_.md#inbrowser)

## Variables

###  document

• **document**: *any*

*Defined in [util/browser.ts:6](https://github.com/cancerberoSgx/accursed/blob/5b2518e/src/util/browser.ts#L6)*

___

###  window

• **window**: *any*

*Defined in [util/browser.ts:5](https://github.com/cancerberoSgx/accursed/blob/5b2518e/src/util/browser.ts#L5)*

## Functions

###  createScreen2

▸ **createScreen2**(`options`: [ScreenOptions](_blessedtypes_.md#screenoptions)): *Promise‹[Screen](../classes/_declarations_blessed_d_.widgets.screen.md)›*

*Defined in [util/browser.ts:60](https://github.com/cancerberoSgx/accursed/blob/5b2518e/src/util/browser.ts#L60)*

creates a screen that works both on node.js and in browsers

**Parameters:**

Name | Type | Default |
------ | ------ | ------ |
`options` | [ScreenOptions](_blessedtypes_.md#screenoptions) |  {} |

**Returns:** *Promise‹[Screen](../classes/_declarations_blessed_d_.widgets.screen.md)›*

___

###  createScreenForBrowser

▸ **createScreenForBrowser**(`options`: [ScreenOptions](_blessedtypes_.md#screenoptions)): *Promise‹[Screen](../classes/_declarations_blessed_d_.widgets.screen.md)›*

*Defined in [util/browser.ts:11](https://github.com/cancerberoSgx/accursed/blob/5b2518e/src/util/browser.ts#L11)*

creates a screen using term.js as input/output so it works in the browser.

**Parameters:**

Name | Type | Default |
------ | ------ | ------ |
`options` | [ScreenOptions](_blessedtypes_.md#screenoptions) |  {} |

**Returns:** *Promise‹[Screen](../classes/_declarations_blessed_d_.widgets.screen.md)›*

___

###  inBrowser

▸ **inBrowser**(): *boolean*

*Defined in [util/browser.ts:55](https://github.com/cancerberoSgx/accursed/blob/5b2518e/src/util/browser.ts#L55)*

**Returns:** *boolean*
