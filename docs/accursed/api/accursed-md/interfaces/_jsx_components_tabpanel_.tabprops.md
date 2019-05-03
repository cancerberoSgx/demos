[accursed](../README.md) > ["jsx-components/tabPanel"](../modules/_jsx_components_tabpanel_.md) > [TabProps](../interfaces/_jsx_components_tabpanel_.tabprops.md)

# Interface: TabProps

## Hierarchy

↳  [CollapsibleProps](_jsx_components_collapsible_.collapsibleprops.md)

**↳ TabProps**

## Index

### Properties

* [active](_jsx_components_tabpanel_.tabprops.md#active)
* [auto](_jsx_components_tabpanel_.tabprops.md#auto)
* [children](_jsx_components_tabpanel_.tabprops.md#children)
* [collapsed](_jsx_components_tabpanel_.tabprops.md#collapsed)
* [collapsedHeight](_jsx_components_tabpanel_.tabprops.md#collapsedheight)
* [collapsedLabel](_jsx_components_tabpanel_.tabprops.md#collapsedlabel)
* [labelStyle](_jsx_components_tabpanel_.tabprops.md#labelstyle)
* [onCollapseChange](_jsx_components_tabpanel_.tabprops.md#oncollapsechange)
* [uncollapsedLabel](_jsx_components_tabpanel_.tabprops.md#uncollapsedlabel)

---

## Properties

<a id="active"></a>

### `<Optional>` active

**● active**: *`boolean`*

*Defined in jsx-components/tabPanel.tsx:35*

___
<a id="auto"></a>

### `<Optional>` auto

**● auto**: *`boolean`*

*Inherited from [CollapsibleOptions](_blessed_collapsible_.collapsibleoptions.md).[auto](_blessed_collapsible_.collapsibleoptions.md#auto)*

*Defined in [blessed/collapsible.ts:65](https://github.com/cancerberoSgx/accursed/blob/978b980/src/blessed/collapsible.ts#L65)*

Settings this to true will install a click listener on the element's label to toggle the collapse state. It will make sure there always be a label. Also it will hide/show non-label children when element is collapsed automatically.

If this property is false, then user is responsible of all of this: implementing handlers for triggering toggle/collapse (like buttons/checkbox), hiding/showing children on collapse, resize the element, etc.

By default the state will change when user left-click element's first line (y==0) .

Also optionally, collapsed / uncollapsed custom labels can be set with [collapsedLabel](_jsx_components_tabpanel_.tabprops.md#collapsedlabel) , [uncollapsedLabel](_jsx_components_tabpanel_.tabprops.md#uncollapsedlabel)

___
<a id="children"></a>

###  children

**● children**: *([TabLabel](../classes/_jsx_components_tabpanel_.tablabel.md) \| [TabBody](../classes/_jsx_components_tabpanel_.tabbody.md))[]*

*Overrides [CollapsibleProps](_jsx_components_collapsible_.collapsibleprops.md).[children](_jsx_components_collapsible_.collapsibleprops.md#children)*

*Defined in jsx-components/tabPanel.tsx:36*

___
<a id="collapsed"></a>

### `<Optional>` collapsed

**● collapsed**: *`boolean`*

*Inherited from [CollapsibleProps](_jsx_components_collapsible_.collapsibleprops.md).[collapsed](_jsx_components_collapsible_.collapsibleprops.md#collapsed)*

*Defined in [jsx-components/collapsible.tsx:11](https://github.com/cancerberoSgx/accursed/blob/978b980/src/jsx-components/collapsible.tsx#L11)*

If true the box will be collapsed by default.

___
<a id="collapsedheight"></a>

### `<Optional>` collapsedHeight

**● collapsedHeight**: *`number` \| `string`*

*Inherited from [CollapsibleOptions](_blessed_collapsible_.collapsibleoptions.md).[collapsedHeight](_blessed_collapsible_.collapsibleoptions.md#collapsedheight)*

*Defined in [blessed/collapsible.ts:55](https://github.com/cancerberoSgx/accursed/blob/978b980/src/blessed/collapsible.ts#L55)*

if provided, element will be collapsed to this height. by default it will be 3 to support auto: true, border and label

___
<a id="collapsedlabel"></a>

### `<Optional>` collapsedLabel

**● collapsedLabel**: *`string`*

*Inherited from [CollapsibleOptions](_blessed_collapsible_.collapsibleoptions.md).[collapsedLabel](_blessed_collapsible_.collapsibleoptions.md#collapsedlabel)*

*Defined in [blessed/collapsible.ts:67](https://github.com/cancerberoSgx/accursed/blob/978b980/src/blessed/collapsible.ts#L67)*

if provided it will set this label when element is collapsed

___
<a id="labelstyle"></a>

### `<Optional>` labelStyle

**● labelStyle**: *[Style](../modules/_blessedtypes_.md#style)*

*Inherited from [CollapsibleOptions](_blessed_collapsible_.collapsibleoptions.md).[labelStyle](_blessed_collapsible_.collapsibleoptions.md#labelstyle)*

*Defined in [blessed/collapsible.ts:72](https://github.com/cancerberoSgx/accursed/blob/978b980/src/blessed/collapsible.ts#L72)*

___
<a id="oncollapsechange"></a>

### `<Optional>` onCollapseChange

**● onCollapseChange**: *[onCollapseChange](_jsx_components_tabpanel_.tabprops.md#oncollapsechange)*

*Inherited from [CollapsibleProps](_jsx_components_collapsible_.collapsibleprops.md).[onCollapseChange](_jsx_components_collapsible_.collapsibleprops.md#oncollapsechange)*

*Overrides [CollapsibleOptions](_blessed_collapsible_.collapsibleoptions.md).[onCollapseChange](_blessed_collapsible_.collapsibleoptions.md#oncollapsechange)*

*Defined in [jsx-components/collapsible.tsx:16](https://github.com/cancerberoSgx/accursed/blob/978b980/src/jsx-components/collapsible.tsx#L16)*

Called when collapse/expand occurs

___
<a id="uncollapsedlabel"></a>

### `<Optional>` uncollapsedLabel

**● uncollapsedLabel**: *`string`*

*Inherited from [CollapsibleOptions](_blessed_collapsible_.collapsibleoptions.md).[uncollapsedLabel](_blessed_collapsible_.collapsibleoptions.md#uncollapsedlabel)*

*Defined in [blessed/collapsible.ts:69](https://github.com/cancerberoSgx/accursed/blob/978b980/src/blessed/collapsible.ts#L69)*

if provided it will set this label when element is uncollapsed

___

