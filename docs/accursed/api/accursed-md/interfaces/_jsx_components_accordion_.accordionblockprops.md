[accursed](../README.md) › [Globals](../globals.md) › ["jsx-components/accordion"](../modules/_jsx_components_accordion_.md) › [AccordionBlockProps](_jsx_components_accordion_.accordionblockprops.md)

# Interface: AccordionBlockProps

## Hierarchy

  ↳ [CollapsibleProps](_jsx_components_collapsible_.collapsibleprops.md)

  ↳ **AccordionBlockProps**

## Index

### Properties

* [auto](_jsx_components_accordion_.accordionblockprops.md#optional-auto)
* [children](_jsx_components_accordion_.accordionblockprops.md#children)
* [collapsed](_jsx_components_accordion_.accordionblockprops.md#optional-collapsed)
* [collapsedHeight](_jsx_components_accordion_.accordionblockprops.md#optional-collapsedheight)
* [collapsedLabel](_jsx_components_accordion_.accordionblockprops.md#optional-collapsedlabel)
* [labelStyle](_jsx_components_accordion_.accordionblockprops.md#optional-labelstyle)
* [onCollapseChange](_jsx_components_accordion_.accordionblockprops.md#optional-oncollapsechange)
* [uncollapsedLabel](_jsx_components_accordion_.accordionblockprops.md#optional-uncollapsedlabel)

## Properties

### `Optional` auto

• **auto**? : *boolean*

*Inherited from [CollapsibleOptions](_blessed_collapsible_.collapsibleoptions.md).[auto](_blessed_collapsible_.collapsibleoptions.md#optional-auto)*

*Defined in [blessed/collapsible.ts:65](https://github.com/cancerberoSgx/accursed/blob/5b2518e/src/blessed/collapsible.ts#L65)*

Settings this to true will install a click listener on the element's label to toggle the collapse state. It will make sure there always be a label. Also it will hide/show non-label children when element is collapsed automatically.

If this property is false, then user is responsible of all of this: implementing handlers for triggering toggle/collapse (like buttons/checkbox), hiding/showing children on collapse, resize the element, etc.

By default the state will change when user left-click element's first line (y==0) .

Also optionally, collapsed / uncollapsed custom labels can be set with [collapsedLabel](_jsx_components_accordion_.accordionblockprops.md#optional-collapsedlabel) , [uncollapsedLabel](_jsx_components_accordion_.accordionblockprops.md#optional-uncollapsedlabel)

___

###  children

• **children**: *[BlessedJsxNode](../modules/_jsx_types_.__global.jsx.md#blessedjsxnode) | [BlessedJsxNode](../modules/_jsx_types_.__global.jsx.md#blessedjsxnode)[]*

*Overrides [CollapsibleProps](_jsx_components_collapsible_.collapsibleprops.md).[children](_jsx_components_collapsible_.collapsibleprops.md#children)*

*Defined in [jsx-components/accordion.tsx:10](https://github.com/cancerberoSgx/accursed/blob/5b2518e/src/jsx-components/accordion.tsx#L10)*

___

### `Optional` collapsed

• **collapsed**? : *boolean*

*Inherited from [CollapsibleProps](_jsx_components_collapsible_.collapsibleprops.md).[collapsed](_jsx_components_collapsible_.collapsibleprops.md#optional-collapsed)*

*Defined in [jsx-components/collapsible.tsx:11](https://github.com/cancerberoSgx/accursed/blob/5b2518e/src/jsx-components/collapsible.tsx#L11)*

If true the box will be collapsed by default.

___

### `Optional` collapsedHeight

• **collapsedHeight**? : *number | string*

*Inherited from [CollapsibleOptions](_blessed_collapsible_.collapsibleoptions.md).[collapsedHeight](_blessed_collapsible_.collapsibleoptions.md#optional-collapsedheight)*

*Defined in [blessed/collapsible.ts:55](https://github.com/cancerberoSgx/accursed/blob/5b2518e/src/blessed/collapsible.ts#L55)*

if provided, element will be collapsed to this height. by default it will be 3 to support auto: true, border and label

___

### `Optional` collapsedLabel

• **collapsedLabel**? : *string*

*Inherited from [CollapsibleOptions](_blessed_collapsible_.collapsibleoptions.md).[collapsedLabel](_blessed_collapsible_.collapsibleoptions.md#optional-collapsedlabel)*

*Defined in [blessed/collapsible.ts:67](https://github.com/cancerberoSgx/accursed/blob/5b2518e/src/blessed/collapsible.ts#L67)*

if provided it will set this label when element is collapsed

___

### `Optional` labelStyle

• **labelStyle**? : *[Style](../modules/_blessedtypes_.md#style)*

*Inherited from [CollapsibleOptions](_blessed_collapsible_.collapsibleoptions.md).[labelStyle](_blessed_collapsible_.collapsibleoptions.md#optional-labelstyle)*

*Defined in [blessed/collapsible.ts:72](https://github.com/cancerberoSgx/accursed/blob/5b2518e/src/blessed/collapsible.ts#L72)*

___

### `Optional` onCollapseChange

• **onCollapseChange**? : *[onCollapseChange](_jsx_components_accordion_.accordionblockprops.md#optional-oncollapsechange)*

*Inherited from [CollapsibleProps](_jsx_components_collapsible_.collapsibleprops.md).[onCollapseChange](_jsx_components_collapsible_.collapsibleprops.md#optional-oncollapsechange)*

*Overrides [CollapsibleOptions](_blessed_collapsible_.collapsibleoptions.md).[onCollapseChange](_blessed_collapsible_.collapsibleoptions.md#optional-oncollapsechange)*

*Defined in [jsx-components/collapsible.tsx:16](https://github.com/cancerberoSgx/accursed/blob/5b2518e/src/jsx-components/collapsible.tsx#L16)*

Called when collapse/expand occurs

___

### `Optional` uncollapsedLabel

• **uncollapsedLabel**? : *string*

*Inherited from [CollapsibleOptions](_blessed_collapsible_.collapsibleoptions.md).[uncollapsedLabel](_blessed_collapsible_.collapsibleoptions.md#optional-uncollapsedlabel)*

*Defined in [blessed/collapsible.ts:69](https://github.com/cancerberoSgx/accursed/blob/5b2518e/src/blessed/collapsible.ts#L69)*

if provided it will set this label when element is uncollapsed
