[accursed](../README.md) › [Globals](../globals.md) › ["jsx/component"](../modules/_jsx_component_.md) › [Component](_jsx_component_.component.md)

# Class: Component <**UP, S, P**>

Simple abstract Component class (like React.Component) but without life cycle methods.

Has a dummy state property that subclasses could implement some behavior for, right now it does nothing.

## Type parameters

▪ **UP**

▪ **S**

▪ **P**

## Hierarchy

* **Component**

  ↳ [VirtualComponent](_blessed_virtualelement_.virtualcomponent.md)

  ↳ [Collapsible](_jsx_components_collapsible_.collapsible.md)

  ↳ [Accordion](_jsx_components_accordion_.accordion.md)

  ↳ [AutoComplete](_jsx_components_autocomplete_.autocomplete.md)

  ↳ [Button2](_jsx_components_button_.button2.md)

  ↳ [Columns](_jsx_components_columns_.columns.md)

  ↳ [ListBar2](_jsx_components_listbar_.listbar2.md)

  ↳ [ListTable2](_jsx_components_listtable_.listtable2.md)

  ↳ [Maximize](_jsx_components_maximize_.maximize.md)

  ↳ [OptionsProvider](_jsx_components_optionsprovider_.optionsprovider.md)

  ↳ [Rows](_jsx_components_rows_.rows.md)

  ↳ [Select](_jsx_components_select_.select.md)

  ↳ [ShowIf](_jsx_components_showif_.showif.md)

  ↳ [TabPanel](_jsx_components_tabpanel_.tabpanel.md)

## Index

### Constructors

* [constructor](_jsx_component_.component.md#constructor)

### Properties

* [_jsxChildrenProps](_jsx_component_.component.md#_jsxchildrenprops)
* [_saveJSXChildrenProps](_jsx_component_.component.md#_savejsxchildrenprops)
* [blessedElement](_jsx_component_.component.md#protected-blessedelement)
* [props](_jsx_component_.component.md#protected-props)
* [state](_jsx_component_.component.md#protected-state)

### Accessors

* [element](_jsx_component_.component.md#element)
* [screen](_jsx_component_.component.md#screen)
* [type](_jsx_component_.component.md#type)

### Methods

* [filterChildren](_jsx_component_.component.md#filterchildren)
* [filterDescendants](_jsx_component_.component.md#filterdescendants)
* [findChildren](_jsx_component_.component.md#findchildren)
* [findDescendant](_jsx_component_.component.md#finddescendant)
* [findDescendantNamed](_jsx_component_.component.md#finddescendantnamed)
* [getContent](_jsx_component_.component.md#getcontent)
* [getDescendantNamed](_jsx_component_.component.md#getdescendantnamed)
* [getElementData](_jsx_component_.component.md#getelementdata)
* [render](_jsx_component_.component.md#abstract-render)
* [replaceChildren](_jsx_component_.component.md#replacechildren)
* [visitDescendants](_jsx_component_.component.md#visitdescendants)

## Constructors

###  constructor

\+ **new Component**(`props`: P, `state`: S): *[Component](_jsx_component_.component.md)*

*Defined in [jsx/component.ts:16](https://github.com/cancerberoSgx/accursed/blob/5b2518e/src/jsx/component.ts#L16)*

**Parameters:**

Name | Type |
------ | ------ |
`props` | P |
`state` | S |

**Returns:** *[Component](_jsx_component_.component.md)*

## Properties

###  _jsxChildrenProps

• **_jsxChildrenProps**: *any* =  undefined

*Defined in [jsx/component.ts:24](https://github.com/cancerberoSgx/accursed/blob/5b2518e/src/jsx/component.ts#L24)*

___

###  _saveJSXChildrenProps

• **_saveJSXChildrenProps**: *boolean* = false

*Defined in [jsx/component.ts:23](https://github.com/cancerberoSgx/accursed/blob/5b2518e/src/jsx/component.ts#L23)*

If true then JSX children props will be save on property [_jsxChildrenProps](_jsx_component_.component.md#_jsxchildrenprops). Component subclasses
needing this information (like Virtual component parent) can override it.

___

### `Protected` blessedElement

• **blessedElement**: *[Element](../interfaces/_jsx_types_.__global.jsx.element.md)* =  undefined as any

*Defined in [jsx/component.ts:31](https://github.com/cancerberoSgx/accursed/blob/5b2518e/src/jsx/component.ts#L31)*

All class elements will have a reference to its rendered blessed element

___

### `Protected` props

• **props**: *P*

*Defined in [jsx/component.ts:17](https://github.com/cancerberoSgx/accursed/blob/5b2518e/src/jsx/component.ts#L17)*

___

### `Protected` state

• **state**: *S*

*Defined in [jsx/component.ts:17](https://github.com/cancerberoSgx/accursed/blob/5b2518e/src/jsx/component.ts#L17)*

## Accessors

###  element

• **get element**(): *[BlessedElement](_declarations_blessed_d_.widgets.blessedelement.md)‹object›*

*Defined in [jsx/component.ts:33](https://github.com/cancerberoSgx/accursed/blob/5b2518e/src/jsx/component.ts#L33)*

**Returns:** *[BlessedElement](_declarations_blessed_d_.widgets.blessedelement.md)‹object›*

___

###  screen

• **get screen**(): *[Screen](_declarations_blessed_d_.widgets.screen.md)*

*Defined in [jsx/component.ts:73](https://github.com/cancerberoSgx/accursed/blob/5b2518e/src/jsx/component.ts#L73)*

**Returns:** *[Screen](_declarations_blessed_d_.widgets.screen.md)*

___

###  type

• **get type**(): *string*

*Defined in [jsx/component.ts:40](https://github.com/cancerberoSgx/accursed/blob/5b2518e/src/jsx/component.ts#L40)*

return the type name of ths component container blessed element

**Returns:** *string*

## Methods

###  filterChildren

▸ **filterChildren**<**T**>(`p`: [ElementPredicate](../modules/_blessed_node_.md#elementpredicate)): *T[]*

*Defined in [jsx/component.ts:68](https://github.com/cancerberoSgx/accursed/blob/5b2518e/src/jsx/component.ts#L68)*

**Type parameters:**

▪ **T**: *[Element](../interfaces/_jsx_types_.__global.jsx.element.md)*

**Parameters:**

Name | Type |
------ | ------ |
`p` | [ElementPredicate](../modules/_blessed_node_.md#elementpredicate) |

**Returns:** *T[]*

___

###  filterDescendants

▸ **filterDescendants**<**T**>(`p`: [ElementPredicate](../modules/_blessed_node_.md#elementpredicate)): *T[]*

*Defined in [jsx/component.ts:60](https://github.com/cancerberoSgx/accursed/blob/5b2518e/src/jsx/component.ts#L60)*

**Type parameters:**

▪ **T**: *[Element](../interfaces/_jsx_types_.__global.jsx.element.md)*

**Parameters:**

Name | Type |
------ | ------ |
`p` | [ElementPredicate](../modules/_blessed_node_.md#elementpredicate) |

**Returns:** *T[]*

___

###  findChildren

▸ **findChildren**<**T**>(`p`: [ElementPredicate](../modules/_blessed_node_.md#elementpredicate)): *T | undefined*

*Defined in [jsx/component.ts:64](https://github.com/cancerberoSgx/accursed/blob/5b2518e/src/jsx/component.ts#L64)*

**Type parameters:**

▪ **T**: *[Element](../interfaces/_jsx_types_.__global.jsx.element.md)*

**Parameters:**

Name | Type |
------ | ------ |
`p` | [ElementPredicate](../modules/_blessed_node_.md#elementpredicate) |

**Returns:** *T | undefined*

___

###  findDescendant

▸ **findDescendant**<**T**>(`p`: [ElementPredicate](../modules/_blessed_node_.md#elementpredicate)): *T | undefined*

*Defined in [jsx/component.ts:52](https://github.com/cancerberoSgx/accursed/blob/5b2518e/src/jsx/component.ts#L52)*

**Type parameters:**

▪ **T**: *[Element](../interfaces/_jsx_types_.__global.jsx.element.md)*

**Parameters:**

Name | Type |
------ | ------ |
`p` | [ElementPredicate](../modules/_blessed_node_.md#elementpredicate) |

**Returns:** *T | undefined*

___

###  findDescendantNamed

▸ **findDescendantNamed**<**T**>(`name`: string): *T | undefined*

*Defined in [jsx/component.ts:56](https://github.com/cancerberoSgx/accursed/blob/5b2518e/src/jsx/component.ts#L56)*

**Type parameters:**

▪ **T**: *[Element](../interfaces/_jsx_types_.__global.jsx.element.md)*

**Parameters:**

Name | Type |
------ | ------ |
`name` | string |

**Returns:** *T | undefined*

___

###  getContent

▸ **getContent**(`options`: object): *string*

*Defined in [jsx/component.ts:93](https://github.com/cancerberoSgx/accursed/blob/5b2518e/src/jsx/component.ts#L93)*

Returns the text content of given node and all its children, in order. By default stripped from ansi
escape chars and trimmed, and separated by space, but is configurable through options.

**Parameters:**

▪`Default value`  **options**: *object*=  {}

Name | Type |
------ | ------ |
`childrenLast?` | boolean |
`dontStrip?` | boolean |
`dontTrim?` | boolean |

**Returns:** *string*

___

###  getDescendantNamed

▸ **getDescendantNamed**<**T**>(`n`: string): *T | undefined*

*Defined in [jsx/component.ts:97](https://github.com/cancerberoSgx/accursed/blob/5b2518e/src/jsx/component.ts#L97)*

**Type parameters:**

▪ **T**: *[Element](../interfaces/_jsx_types_.__global.jsx.element.md)*

**Parameters:**

Name | Type |
------ | ------ |
`n` | string |

**Returns:** *T | undefined*

___

###  getElementData

▸ **getElementData**<**T**>(`key`: string): *T*

*Defined in [jsx/component.ts:44](https://github.com/cancerberoSgx/accursed/blob/5b2518e/src/jsx/component.ts#L44)*

**Type parameters:**

▪ **T**

**Parameters:**

Name | Type |
------ | ------ |
`key` | string |

**Returns:** *T*

___

### `Abstract` render

▸ **render**(): *[BlessedJsxNode](../modules/_jsx_types_.__global.jsx.md#blessedjsxnode)*

*Defined in [jsx/component.ts:26](https://github.com/cancerberoSgx/accursed/blob/5b2518e/src/jsx/component.ts#L26)*

**Returns:** *[BlessedJsxNode](../modules/_jsx_types_.__global.jsx.md#blessedjsxnode)*

___

###  replaceChildren

▸ **replaceChildren**(`newChildren`: [Element](../interfaces/_jsx_types_.__global.jsx.element.md)[], `options`: object): *void*

*Defined in [jsx/component.ts:82](https://github.com/cancerberoSgx/accursed/blob/5b2518e/src/jsx/component.ts#L82)*

 Hot replace all children on this node with given [[newChildren]] array elements. This is a visual
 operation, and only should eb performed when the component need to implement a radicals different view
 dynamically since it couldnt costly.

**Parameters:**

▪ **newChildren**: *[Element](../interfaces/_jsx_types_.__global.jsx.element.md)[]*

▪`Default value`  **options**: *object*=  { mode: 'careful' }

Name | Type |
------ | ------ |
`mode` | "quickly" &#124; "careful" &#124; "dontRender" |

**Returns:** *void*

___

###  visitDescendants

▸ **visitDescendants**(`v`: [Visitor](../modules/_blessed_node_.md#visitor), `o`: [VisitorOptions](../interfaces/_blessed_node_.visitoroptions.md)): *boolean*

*Defined in [jsx/component.ts:48](https://github.com/cancerberoSgx/accursed/blob/5b2518e/src/jsx/component.ts#L48)*

**Parameters:**

Name | Type | Default |
------ | ------ | ------ |
`v` | [Visitor](../modules/_blessed_node_.md#visitor) | - |
`o` | [VisitorOptions](../interfaces/_blessed_node_.visitoroptions.md) |  {} |

**Returns:** *boolean*
