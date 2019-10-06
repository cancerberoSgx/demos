[accursed](../README.md) › [Globals](../globals.md) › ["blessed/virtualElement"](../modules/_blessed_virtualelement_.md) › [VirtualComponent](_blessed_virtualelement_.virtualcomponent.md)

# Class: VirtualComponent <**P, S, P**>

Why do we need this if we have props? you cannot decalre structured data like <tabPanel><tab><title>... etc - - props. only allows 21 level

simulates to be a lessed node until the next iteration of createElement so the parent can recognize it abd extract its info, and discard it.

## Type parameters

▪ **P**

▪ **S**

▪ **P**

## Hierarchy

* [Component](_jsx_component_.component.md)‹P, S›

  ↳ **VirtualComponent**

  ↳ [AccordionBlock](_jsx_components_accordion_.accordionblock.md)

  ↳ [Column](_jsx_components_columns_.column.md)

  ↳ [ListBarCommand](_jsx_components_listbar_.listbarcommand.md)

  ↳ [ListTableHead](_jsx_components_listtable_.listtablehead.md)

  ↳ [ListTableRow](_jsx_components_listtable_.listtablerow.md)

  ↳ [ListTableBody](_jsx_components_listtable_.listtablebody.md)

  ↳ [ListTableCell](_jsx_components_listtable_.listtablecell.md)

  ↳ [Row](_jsx_components_rows_.row.md)

  ↳ [SelectOption](_jsx_components_select_.selectoption.md)

  ↳ [TabLabel](_jsx_components_tabpanel_.tablabel.md)

  ↳ [Tab](_jsx_components_tabpanel_.tab.md)

  ↳ [TabBody](_jsx_components_tabpanel_.tabbody.md)

## Implements

* [VirtualElement](../interfaces/_blessed_virtualelement_.virtualelement.md)

## Index

### Constructors

* [constructor](_blessed_virtualelement_.virtualcomponent.md#constructor)

### Properties

* [__isVirtualComponent](_blessed_virtualelement_.virtualcomponent.md#private-__isvirtualcomponent)
* [_jsxChildrenProps](_blessed_virtualelement_.virtualcomponent.md#_jsxchildrenprops)
* [_saveJSXChildrenProps](_blessed_virtualelement_.virtualcomponent.md#_savejsxchildrenprops)
* [blessedElement](_blessed_virtualelement_.virtualcomponent.md#protected-blessedelement)
* [props](_blessed_virtualelement_.virtualcomponent.md#protected-props)
* [state](_blessed_virtualelement_.virtualcomponent.md#protected-state)
* [VIRTUAL_DATA_OPTION](_blessed_virtualelement_.virtualcomponent.md#static-virtual_data_option)
* [__isVirtualComponent](_blessed_virtualelement_.virtualcomponent.md#static-private-__isvirtualcomponent)

### Accessors

* [element](_blessed_virtualelement_.virtualcomponent.md#element)
* [screen](_blessed_virtualelement_.virtualcomponent.md#screen)
* [type](_blessed_virtualelement_.virtualcomponent.md#type)

### Methods

* [filterChildren](_blessed_virtualelement_.virtualcomponent.md#filterchildren)
* [filterDescendants](_blessed_virtualelement_.virtualcomponent.md#filterdescendants)
* [findChildren](_blessed_virtualelement_.virtualcomponent.md#findchildren)
* [findDescendant](_blessed_virtualelement_.virtualcomponent.md#finddescendant)
* [findDescendantNamed](_blessed_virtualelement_.virtualcomponent.md#finddescendantnamed)
* [getContent](_blessed_virtualelement_.virtualcomponent.md#getcontent)
* [getDescendantNamed](_blessed_virtualelement_.virtualcomponent.md#getdescendantnamed)
* [getElementData](_blessed_virtualelement_.virtualcomponent.md#getelementdata)
* [render](_blessed_virtualelement_.virtualcomponent.md#render)
* [replaceChildren](_blessed_virtualelement_.virtualcomponent.md#replacechildren)
* [saveVirtualData](_blessed_virtualelement_.virtualcomponent.md#savevirtualdata)
* [visitDescendants](_blessed_virtualelement_.virtualcomponent.md#visitdescendants)
* [createVirtualComponent](_blessed_virtualelement_.virtualcomponent.md#static-createvirtualcomponent)
* [createVirtualElement](_blessed_virtualelement_.virtualcomponent.md#static-createvirtualelement)
* [isVirtualComponent](_blessed_virtualelement_.virtualcomponent.md#static-isvirtualcomponent)
* [isVirtualElement](_blessed_virtualelement_.virtualcomponent.md#static-isvirtualelement)

## Constructors

###  constructor

\+ **new VirtualComponent**(`props`: P, `state`: S): *[VirtualComponent](_blessed_virtualelement_.virtualcomponent.md)*

*Inherited from [Component](_jsx_component_.component.md).[constructor](_jsx_component_.component.md#constructor)*

*Defined in [jsx/component.ts:27](https://github.com/cancerberoSgx/accursed/blob/468bf3c/src/jsx/component.ts#L27)*

**Parameters:**

Name | Type |
------ | ------ |
`props` | P |
`state` | S |

**Returns:** *[VirtualComponent](_blessed_virtualelement_.virtualcomponent.md)*

## Properties

### `Private` __isVirtualComponent

• **__isVirtualComponent**: *number* =  VirtualComponent.__isVirtualComponent

*Defined in [blessed/virtualElement.ts:18](https://github.com/cancerberoSgx/accursed/blob/468bf3c/src/blessed/virtualElement.ts#L18)*

___

###  _jsxChildrenProps

• **_jsxChildrenProps**: *any* =  undefined

*Inherited from [Component](_jsx_component_.component.md).[_jsxChildrenProps](_jsx_component_.component.md#_jsxchildrenprops)*

*Defined in [jsx/component.ts:35](https://github.com/cancerberoSgx/accursed/blob/468bf3c/src/jsx/component.ts#L35)*

___

###  _saveJSXChildrenProps

• **_saveJSXChildrenProps**: *boolean* = false

*Inherited from [Component](_jsx_component_.component.md).[_saveJSXChildrenProps](_jsx_component_.component.md#_savejsxchildrenprops)*

*Defined in [jsx/component.ts:34](https://github.com/cancerberoSgx/accursed/blob/468bf3c/src/jsx/component.ts#L34)*

If true then JSX children props will be save on property [_jsxChildrenProps](_blessed_virtualelement_.virtualcomponent.md#_jsxchildrenprops). Component subclasses
needing this information (like Virtual component parent) can override it.

___

### `Protected` blessedElement

• **blessedElement**: *[Element](../interfaces/_jsx_types_.__global.jsx.element.md)* =  undefined as any

*Inherited from [Component](_jsx_component_.component.md).[blessedElement](_jsx_component_.component.md#protected-blessedelement)*

*Defined in [jsx/component.ts:42](https://github.com/cancerberoSgx/accursed/blob/468bf3c/src/jsx/component.ts#L42)*

All class elements will have a reference to its rendered blessed element

___

### `Protected` props

• **props**: *P*

*Inherited from [Component](_jsx_component_.component.md).[props](_jsx_component_.component.md#protected-props)*

*Defined in [jsx/component.ts:28](https://github.com/cancerberoSgx/accursed/blob/468bf3c/src/jsx/component.ts#L28)*

___

### `Protected` state

• **state**: *S*

*Inherited from [Component](_jsx_component_.component.md).[state](_jsx_component_.component.md#protected-state)*

*Defined in [jsx/component.ts:28](https://github.com/cancerberoSgx/accursed/blob/468bf3c/src/jsx/component.ts#L28)*

___

### `Static` VIRTUAL_DATA_OPTION

▪ **VIRTUAL_DATA_OPTION**: *string* = "accursed.virtual.component"

*Defined in [blessed/virtualElement.ts:20](https://github.com/cancerberoSgx/accursed/blob/468bf3c/src/blessed/virtualElement.ts#L20)*

___

### `Static` `Private` __isVirtualComponent

▪ **__isVirtualComponent**: *number* = 123

*Defined in [blessed/virtualElement.ts:17](https://github.com/cancerberoSgx/accursed/blob/468bf3c/src/blessed/virtualElement.ts#L17)*

## Accessors

###  element

• **get element**(): *[BlessedElement](_declarations_blessed_d_.widgets.blessedelement.md)‹object›*

*Inherited from [Component](_jsx_component_.component.md).[element](_jsx_component_.component.md#element)*

*Defined in [jsx/component.ts:44](https://github.com/cancerberoSgx/accursed/blob/468bf3c/src/jsx/component.ts#L44)*

**Returns:** *[BlessedElement](_declarations_blessed_d_.widgets.blessedelement.md)‹object›*

___

###  screen

• **get screen**(): *[Screen](_declarations_blessed_d_.widgets.screen.md)*

*Inherited from [Component](_jsx_component_.component.md).[screen](_jsx_component_.component.md#screen)*

*Defined in [jsx/component.ts:84](https://github.com/cancerberoSgx/accursed/blob/468bf3c/src/jsx/component.ts#L84)*

**Returns:** *[Screen](_declarations_blessed_d_.widgets.screen.md)*

___

###  type

• **get type**(): *string*

*Inherited from [Component](_jsx_component_.component.md).[type](_jsx_component_.component.md#type)*

*Defined in [jsx/component.ts:51](https://github.com/cancerberoSgx/accursed/blob/468bf3c/src/jsx/component.ts#L51)*

return the type name of ths component container blessed element

**Returns:** *string*

## Methods

###  filterChildren

▸ **filterChildren**<**T**>(`p`: [ElementPredicate](../modules/_blessed_node_.md#elementpredicate)): *T[]*

*Inherited from [Component](_jsx_component_.component.md).[filterChildren](_jsx_component_.component.md#filterchildren)*

*Defined in [jsx/component.ts:79](https://github.com/cancerberoSgx/accursed/blob/468bf3c/src/jsx/component.ts#L79)*

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

*Inherited from [Component](_jsx_component_.component.md).[filterDescendants](_jsx_component_.component.md#filterdescendants)*

*Defined in [jsx/component.ts:71](https://github.com/cancerberoSgx/accursed/blob/468bf3c/src/jsx/component.ts#L71)*

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

*Inherited from [Component](_jsx_component_.component.md).[findChildren](_jsx_component_.component.md#findchildren)*

*Defined in [jsx/component.ts:75](https://github.com/cancerberoSgx/accursed/blob/468bf3c/src/jsx/component.ts#L75)*

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

*Inherited from [Component](_jsx_component_.component.md).[findDescendant](_jsx_component_.component.md#finddescendant)*

*Defined in [jsx/component.ts:63](https://github.com/cancerberoSgx/accursed/blob/468bf3c/src/jsx/component.ts#L63)*

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

*Inherited from [Component](_jsx_component_.component.md).[findDescendantNamed](_jsx_component_.component.md#finddescendantnamed)*

*Defined in [jsx/component.ts:67](https://github.com/cancerberoSgx/accursed/blob/468bf3c/src/jsx/component.ts#L67)*

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

*Inherited from [Component](_jsx_component_.component.md).[getContent](_jsx_component_.component.md#getcontent)*

*Defined in [jsx/component.ts:104](https://github.com/cancerberoSgx/accursed/blob/468bf3c/src/jsx/component.ts#L104)*

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

*Inherited from [Component](_jsx_component_.component.md).[getDescendantNamed](_jsx_component_.component.md#getdescendantnamed)*

*Defined in [jsx/component.ts:108](https://github.com/cancerberoSgx/accursed/blob/468bf3c/src/jsx/component.ts#L108)*

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

*Inherited from [Component](_jsx_component_.component.md).[getElementData](_jsx_component_.component.md#getelementdata)*

*Defined in [jsx/component.ts:55](https://github.com/cancerberoSgx/accursed/blob/468bf3c/src/jsx/component.ts#L55)*

**Type parameters:**

▪ **T**

**Parameters:**

Name | Type |
------ | ------ |
`key` | string |

**Returns:** *T*

___

###  render

▸ **render**(): *any*

*Overrides [Component](_jsx_component_.component.md).[render](_jsx_component_.component.md#abstract-render)*

*Defined in [blessed/virtualElement.ts:14](https://github.com/cancerberoSgx/accursed/blob/468bf3c/src/blessed/virtualElement.ts#L14)*

**Returns:** *any*

___

###  replaceChildren

▸ **replaceChildren**(`newChildren`: [Element](../interfaces/_jsx_types_.__global.jsx.element.md)[], `options`: object): *void*

*Inherited from [Component](_jsx_component_.component.md).[replaceChildren](_jsx_component_.component.md#replacechildren)*

*Defined in [jsx/component.ts:93](https://github.com/cancerberoSgx/accursed/blob/468bf3c/src/jsx/component.ts#L93)*

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

###  saveVirtualData

▸ **saveVirtualData**(`e`: [Element](../interfaces/_jsx_types_.__global.jsx.element.md)): *void*

*Implementation of [VirtualElement](../interfaces/_blessed_virtualelement_.virtualelement.md)*

*Defined in [blessed/virtualElement.ts:34](https://github.com/cancerberoSgx/accursed/blob/468bf3c/src/blessed/virtualElement.ts#L34)*

**Parameters:**

Name | Type |
------ | ------ |
`e` | [Element](../interfaces/_jsx_types_.__global.jsx.element.md) |

**Returns:** *void*

___

###  visitDescendants

▸ **visitDescendants**(`v`: [Visitor](../modules/_blessed_node_.md#visitor), `o`: [VisitorOptions](../interfaces/_blessed_node_.visitoroptions.md)): *boolean*

*Inherited from [Component](_jsx_component_.component.md).[visitDescendants](_jsx_component_.component.md#visitdescendants)*

*Defined in [jsx/component.ts:59](https://github.com/cancerberoSgx/accursed/blob/468bf3c/src/jsx/component.ts#L59)*

**Parameters:**

Name | Type | Default |
------ | ------ | ------ |
`v` | [Visitor](../modules/_blessed_node_.md#visitor) | - |
`o` | [VisitorOptions](../interfaces/_blessed_node_.visitoroptions.md) |  {} |

**Returns:** *boolean*

___

### `Static` createVirtualComponent

▸ **createVirtualComponent**<**T**>(`p`: T): *[VirtualComponent](_blessed_virtualelement_.virtualcomponent.md)‹T, object›*

*Defined in [blessed/virtualElement.ts:39](https://github.com/cancerberoSgx/accursed/blob/468bf3c/src/blessed/virtualElement.ts#L39)*

**Type parameters:**

▪ **T**

**Parameters:**

Name | Type |
------ | ------ |
`p` | T |

**Returns:** *[VirtualComponent](_blessed_virtualelement_.virtualcomponent.md)‹T, object›*

___

### `Static` createVirtualElement

▸ **createVirtualElement**(`c`: any, `tagName`: string): *any*

*Defined in [blessed/virtualElement.ts:31](https://github.com/cancerberoSgx/accursed/blob/468bf3c/src/blessed/virtualElement.ts#L31)*

**Parameters:**

Name | Type |
------ | ------ |
`c` | any |
`tagName` | string |

**Returns:** *any*

___

### `Static` isVirtualComponent

▸ **isVirtualComponent**(`c`: any): *boolean*

*Defined in [blessed/virtualElement.ts:25](https://github.com/cancerberoSgx/accursed/blob/468bf3c/src/blessed/virtualElement.ts#L25)*

**Parameters:**

Name | Type |
------ | ------ |
`c` | any |

**Returns:** *boolean*

___

### `Static` isVirtualElement

▸ **isVirtualElement**(`c`: any): *boolean*

*Defined in [blessed/virtualElement.ts:28](https://github.com/cancerberoSgx/accursed/blob/468bf3c/src/blessed/virtualElement.ts#L28)*

**Parameters:**

Name | Type |
------ | ------ |
`c` | any |

**Returns:** *boolean*
