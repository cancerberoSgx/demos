[accursed](../README.md) › [Globals](../globals.md) › ["blessed/collapsible"](../modules/_blessed_collapsible_.md) › [CollapsibleOptions](_blessed_collapsible_.collapsibleoptions.md)

# Interface: CollapsibleOptions

## Hierarchy

* **CollapsibleOptions**

  ↳ [CollapsibleProps](_jsx_components_collapsible_.collapsibleprops.md)

## Index

### Properties

* [auto](_blessed_collapsible_.collapsibleoptions.md#optional-auto)
* [collapsedHeight](_blessed_collapsible_.collapsibleoptions.md#optional-collapsedheight)
* [collapsedLabel](_blessed_collapsible_.collapsibleoptions.md#optional-collapsedlabel)
* [labelStyle](_blessed_collapsible_.collapsibleoptions.md#optional-labelstyle)
* [onCollapseChange](_blessed_collapsible_.collapsibleoptions.md#optional-oncollapsechange)
* [uncollapsedLabel](_blessed_collapsible_.collapsibleoptions.md#optional-uncollapsedlabel)

## Properties

### `Optional` auto

• **auto**? : *boolean*

*Defined in [blessed/collapsible.ts:65](https://github.com/cancerberoSgx/accursed/blob/5b2518e/src/blessed/collapsible.ts#L65)*

Settings this to true will install a click listener on the element's label to toggle the collapse state. It will make sure there always be a label. Also it will hide/show non-label children when element is collapsed automatically.

If this property is false, then user is responsible of all of this: implementing handlers for triggering toggle/collapse (like buttons/checkbox), hiding/showing children on collapse, resize the element, etc.

By default the state will change when user left-click element's first line (y==0) .

Also optionally, collapsed / uncollapsed custom labels can be set with [collapsedLabel](_blessed_collapsible_.collapsibleoptions.md#optional-collapsedlabel) , [uncollapsedLabel](_blessed_collapsible_.collapsibleoptions.md#optional-uncollapsedlabel)

___

### `Optional` collapsedHeight

• **collapsedHeight**? : *number | string*

*Defined in [blessed/collapsible.ts:55](https://github.com/cancerberoSgx/accursed/blob/5b2518e/src/blessed/collapsible.ts#L55)*

if provided, element will be collapsed to this height. by default it will be 3 to support auto: true, border and label

___

### `Optional` collapsedLabel

• **collapsedLabel**? : *string*

*Defined in [blessed/collapsible.ts:67](https://github.com/cancerberoSgx/accursed/blob/5b2518e/src/blessed/collapsible.ts#L67)*

if provided it will set this label when element is collapsed

___

### `Optional` labelStyle

• **labelStyle**? : *[Style](../modules/_blessedtypes_.md#style)*

*Defined in [blessed/collapsible.ts:72](https://github.com/cancerberoSgx/accursed/blob/5b2518e/src/blessed/collapsible.ts#L72)*

___

### `Optional` onCollapseChange

• **onCollapseChange**? : *[onCollapseChange](_blessed_collapsible_.collapsibleoptions.md#optional-oncollapsechange)*

*Defined in [blessed/collapsible.ts:71](https://github.com/cancerberoSgx/accursed/blob/5b2518e/src/blessed/collapsible.ts#L71)*

called when collapse/expand occurs

___

### `Optional` uncollapsedLabel

• **uncollapsedLabel**? : *string*

*Defined in [blessed/collapsible.ts:69](https://github.com/cancerberoSgx/accursed/blob/5b2518e/src/blessed/collapsible.ts#L69)*

if provided it will set this label when element is uncollapsed
