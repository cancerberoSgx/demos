[accursed](../README.md) › [Globals](../globals.md) › ["jsx-components/select"](../modules/_jsx_components_select_.md) › [SelectOption](_jsx_components_select_.selectoption.md)

# Class: SelectOption <**S, P**>

## Type parameters

▪ **S**

▪ **P**

## Hierarchy

  ↳ [VirtualComponent](_blessed_virtualelement_.virtualcomponent.md)‹[SelectOptionProps](../interfaces/_jsx_components_select_.selectoptionprops.md)›

  ↳ **SelectOption**

## Implements

* [VirtualElement](../interfaces/_blessed_virtualelement_.virtualelement.md)

## Index

### Constructors

* [constructor](_jsx_components_select_.selectoption.md#constructor)

### Properties

* [_jsxChildrenProps](_jsx_components_select_.selectoption.md#_jsxchildrenprops)
* [_saveJSXChildrenProps](_jsx_components_select_.selectoption.md#_savejsxchildrenprops)
* [blessedElement](_jsx_components_select_.selectoption.md#protected-blessedelement)
* [props](_jsx_components_select_.selectoption.md#protected-props)
* [state](_jsx_components_select_.selectoption.md#protected-state)
* [VIRTUAL_DATA_OPTION](_jsx_components_select_.selectoption.md#static-virtual_data_option)

### Accessors

* [element](_jsx_components_select_.selectoption.md#element)
* [screen](_jsx_components_select_.selectoption.md#screen)
* [type](_jsx_components_select_.selectoption.md#type)

### Methods

* [filterChildren](_jsx_components_select_.selectoption.md#filterchildren)
* [filterDescendants](_jsx_components_select_.selectoption.md#filterdescendants)
* [findChildren](_jsx_components_select_.selectoption.md#findchildren)
* [findDescendant](_jsx_components_select_.selectoption.md#finddescendant)
* [findDescendantNamed](_jsx_components_select_.selectoption.md#finddescendantnamed)
* [getContent](_jsx_components_select_.selectoption.md#getcontent)
* [getDescendantNamed](_jsx_components_select_.selectoption.md#getdescendantnamed)
* [getElementData](_jsx_components_select_.selectoption.md#getelementdata)
* [render](_jsx_components_select_.selectoption.md#render)
* [replaceChildren](_jsx_components_select_.selectoption.md#replacechildren)
* [saveVirtualData](_jsx_components_select_.selectoption.md#savevirtualdata)
* [visitDescendants](_jsx_components_select_.selectoption.md#visitdescendants)
* [createVirtualComponent](_jsx_components_select_.selectoption.md#static-createvirtualcomponent)
* [createVirtualElement](_jsx_components_select_.selectoption.md#static-createvirtualelement)
* [isVirtualComponent](_jsx_components_select_.selectoption.md#static-isvirtualcomponent)
* [isVirtualElement](_jsx_components_select_.selectoption.md#static-isvirtualelement)

## Constructors

###  constructor

\+ **new SelectOption**(`props`: P, `state`: S): *[SelectOption](_jsx_components_select_.selectoption.md)*

*Inherited from [Component](_jsx_component_.component.md).[constructor](_jsx_component_.component.md#constructor)*

*Defined in [jsx/component.ts:16](https://github.com/cancerberoSgx/accursed/blob/5b2518e/src/jsx/component.ts#L16)*

**Parameters:**

Name | Type |
------ | ------ |
`props` | P |
`state` | S |

**Returns:** *[SelectOption](_jsx_components_select_.selectoption.md)*

## Properties

###  _jsxChildrenProps

• **_jsxChildrenProps**: *any* =  undefined

*Inherited from [Component](_jsx_component_.component.md).[_jsxChildrenProps](_jsx_component_.component.md#_jsxchildrenprops)*

*Defined in [jsx/component.ts:24](https://github.com/cancerberoSgx/accursed/blob/5b2518e/src/jsx/component.ts#L24)*

___

###  _saveJSXChildrenProps

• **_saveJSXChildrenProps**: *boolean* = false

*Inherited from [Component](_jsx_component_.component.md).[_saveJSXChildrenProps](_jsx_component_.component.md#_savejsxchildrenprops)*

*Defined in [jsx/component.ts:23](https://github.com/cancerberoSgx/accursed/blob/5b2518e/src/jsx/component.ts#L23)*

If true then JSX children props will be save on property [_jsxChildrenProps](_jsx_components_select_.selectoption.md#_jsxchildrenprops). Component subclasses
needing this information (like Virtual component parent) can override it.

___

### `Protected` blessedElement

• **blessedElement**: *[Element](../interfaces/_jsx_types_.__global.jsx.element.md)* =  undefined as any

*Inherited from [Component](_jsx_component_.component.md).[blessedElement](_jsx_component_.component.md#protected-blessedelement)*

*Defined in [jsx/component.ts:31](https://github.com/cancerberoSgx/accursed/blob/5b2518e/src/jsx/component.ts#L31)*

All class elements will have a reference to its rendered blessed element

___

### `Protected` props

• **props**: *P*

*Inherited from [Component](_jsx_component_.component.md).[props](_jsx_component_.component.md#protected-props)*

*Defined in [jsx/component.ts:17](https://github.com/cancerberoSgx/accursed/blob/5b2518e/src/jsx/component.ts#L17)*

___

### `Protected` state

• **state**: *S*

*Inherited from [Component](_jsx_component_.component.md).[state](_jsx_component_.component.md#protected-state)*

*Defined in [jsx/component.ts:17](https://github.com/cancerberoSgx/accursed/blob/5b2518e/src/jsx/component.ts#L17)*

___

### `Static` VIRTUAL_DATA_OPTION

▪ **VIRTUAL_DATA_OPTION**: *string* = "accursed.virtual.component"

*Inherited from [VirtualComponent](_blessed_virtualelement_.virtualcomponent.md).[VIRTUAL_DATA_OPTION](_blessed_virtualelement_.virtualcomponent.md#static-virtual_data_option)*

*Defined in [blessed/virtualElement.ts:20](https://github.com/cancerberoSgx/accursed/blob/5b2518e/src/blessed/virtualElement.ts#L20)*

## Accessors

###  element

• **get element**(): *[BlessedElement](_declarations_blessed_d_.widgets.blessedelement.md)‹object›*

*Inherited from [Component](_jsx_component_.component.md).[element](_jsx_component_.component.md#element)*

*Defined in [jsx/component.ts:33](https://github.com/cancerberoSgx/accursed/blob/5b2518e/src/jsx/component.ts#L33)*

**Returns:** *[BlessedElement](_declarations_blessed_d_.widgets.blessedelement.md)‹object›*

___

###  screen

• **get screen**(): *[Screen](_declarations_blessed_d_.widgets.screen.md)*

*Inherited from [Component](_jsx_component_.component.md).[screen](_jsx_component_.component.md#screen)*

*Defined in [jsx/component.ts:73](https://github.com/cancerberoSgx/accursed/blob/5b2518e/src/jsx/component.ts#L73)*

**Returns:** *[Screen](_declarations_blessed_d_.widgets.screen.md)*

___

###  type

• **get type**(): *string*

*Inherited from [Component](_jsx_component_.component.md).[type](_jsx_component_.component.md#type)*

*Defined in [jsx/component.ts:40](https://github.com/cancerberoSgx/accursed/blob/5b2518e/src/jsx/component.ts#L40)*

return the type name of ths component container blessed element

**Returns:** *string*

## Methods

###  filterChildren

▸ **filterChildren**<**T**>(`p`: [ElementPredicate](../modules/_blessed_node_.md#elementpredicate)): *T[]*

*Inherited from [Component](_jsx_component_.component.md).[filterChildren](_jsx_component_.component.md#filterchildren)*

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

*Inherited from [Component](_jsx_component_.component.md).[filterDescendants](_jsx_component_.component.md#filterdescendants)*

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

*Inherited from [Component](_jsx_component_.component.md).[findChildren](_jsx_component_.component.md#findchildren)*

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

*Inherited from [Component](_jsx_component_.component.md).[findDescendant](_jsx_component_.component.md#finddescendant)*

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

*Inherited from [Component](_jsx_component_.component.md).[findDescendantNamed](_jsx_component_.component.md#finddescendantnamed)*

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

*Inherited from [Component](_jsx_component_.component.md).[getContent](_jsx_component_.component.md#getcontent)*

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

*Inherited from [Component](_jsx_component_.component.md).[getDescendantNamed](_jsx_component_.component.md#getdescendantnamed)*

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

*Inherited from [Component](_jsx_component_.component.md).[getElementData](_jsx_component_.component.md#getelementdata)*

*Defined in [jsx/component.ts:44](https://github.com/cancerberoSgx/accursed/blob/5b2518e/src/jsx/component.ts#L44)*

**Type parameters:**

▪ **T**

**Parameters:**

Name | Type |
------ | ------ |
`key` | string |

**Returns:** *T*

___

###  render

▸ **render**(): *string*

*Inherited from [VirtualComponent](_blessed_virtualelement_.virtualcomponent.md).[render](_blessed_virtualelement_.virtualcomponent.md#render)*

*Overrides [Component](_jsx_component_.component.md).[render](_jsx_component_.component.md#abstract-render)*

*Defined in [blessed/virtualElement.ts:14](https://github.com/cancerberoSgx/accursed/blob/5b2518e/src/blessed/virtualElement.ts#L14)*

**Returns:** *string*

___

###  replaceChildren

▸ **replaceChildren**(`newChildren`: [Element](../interfaces/_jsx_types_.__global.jsx.element.md)[], `options`: object): *void*

*Inherited from [Component](_jsx_component_.component.md).[replaceChildren](_jsx_component_.component.md#replacechildren)*

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

###  saveVirtualData

▸ **saveVirtualData**(`e`: [Element](../interfaces/_jsx_types_.__global.jsx.element.md)): *void*

*Implementation of [VirtualElement](../interfaces/_blessed_virtualelement_.virtualelement.md)*

*Inherited from [VirtualComponent](_blessed_virtualelement_.virtualcomponent.md).[saveVirtualData](_blessed_virtualelement_.virtualcomponent.md#savevirtualdata)*

*Defined in [blessed/virtualElement.ts:34](https://github.com/cancerberoSgx/accursed/blob/5b2518e/src/blessed/virtualElement.ts#L34)*

**Parameters:**

Name | Type |
------ | ------ |
`e` | [Element](../interfaces/_jsx_types_.__global.jsx.element.md) |

**Returns:** *void*

___

###  visitDescendants

▸ **visitDescendants**(`v`: [Visitor](../modules/_blessed_node_.md#visitor), `o`: [VisitorOptions](../interfaces/_blessed_node_.visitoroptions.md)): *boolean*

*Inherited from [Component](_jsx_component_.component.md).[visitDescendants](_jsx_component_.component.md#visitdescendants)*

*Defined in [jsx/component.ts:48](https://github.com/cancerberoSgx/accursed/blob/5b2518e/src/jsx/component.ts#L48)*

**Parameters:**

Name | Type | Default |
------ | ------ | ------ |
`v` | [Visitor](../modules/_blessed_node_.md#visitor) | - |
`o` | [VisitorOptions](../interfaces/_blessed_node_.visitoroptions.md) |  {} |

**Returns:** *boolean*

___

### `Static` createVirtualComponent

▸ **createVirtualComponent**<**T**>(`p`: T): *[VirtualComponent](_blessed_virtualelement_.virtualcomponent.md)‹T, object›*

*Inherited from [VirtualComponent](_blessed_virtualelement_.virtualcomponent.md).[createVirtualComponent](_blessed_virtualelement_.virtualcomponent.md#static-createvirtualcomponent)*

*Defined in [blessed/virtualElement.ts:39](https://github.com/cancerberoSgx/accursed/blob/5b2518e/src/blessed/virtualElement.ts#L39)*

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

*Inherited from [VirtualComponent](_blessed_virtualelement_.virtualcomponent.md).[createVirtualElement](_blessed_virtualelement_.virtualcomponent.md#static-createvirtualelement)*

*Defined in [blessed/virtualElement.ts:31](https://github.com/cancerberoSgx/accursed/blob/5b2518e/src/blessed/virtualElement.ts#L31)*

**Parameters:**

Name | Type |
------ | ------ |
`c` | any |
`tagName` | string |

**Returns:** *any*

___

### `Static` isVirtualComponent

▸ **isVirtualComponent**(`c`: any): *boolean*

*Inherited from [VirtualComponent](_blessed_virtualelement_.virtualcomponent.md).[isVirtualComponent](_blessed_virtualelement_.virtualcomponent.md#static-isvirtualcomponent)*

*Defined in [blessed/virtualElement.ts:25](https://github.com/cancerberoSgx/accursed/blob/5b2518e/src/blessed/virtualElement.ts#L25)*

**Parameters:**

Name | Type |
------ | ------ |
`c` | any |

**Returns:** *boolean*

___

### `Static` isVirtualElement

▸ **isVirtualElement**(`c`: any): *boolean*

*Inherited from [VirtualComponent](_blessed_virtualelement_.virtualcomponent.md).[isVirtualElement](_blessed_virtualelement_.virtualcomponent.md#static-isvirtualelement)*

*Defined in [blessed/virtualElement.ts:28](https://github.com/cancerberoSgx/accursed/blob/5b2518e/src/blessed/virtualElement.ts#L28)*

**Parameters:**

Name | Type |
------ | ------ |
`c` | any |

**Returns:** *boolean*
