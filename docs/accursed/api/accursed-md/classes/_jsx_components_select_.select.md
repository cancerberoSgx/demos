[accursed](../README.md) › [Globals](../globals.md) › ["jsx-components/select"](../modules/_jsx_components_select_.md) › [Select](_jsx_components_select_.select.md)

# Class: Select <**S, P**>

A select options widget similar to HTML's using blessed list widget.

Example:

```
<Select onChange={e=>log(e.value)}>
<SelectOption value="foo">Foo</SelectOption>
<SelectOption value="bar">Boo</SelectOption>
</Select>
```

## Type parameters

▪ **S**

▪ **P**

## Hierarchy

* [Component](_jsx_component_.component.md)‹[SelectProps](../interfaces/_jsx_components_select_.selectprops.md)›

  ↳ **Select**

## Index

### Constructors

* [constructor](_jsx_components_select_.select.md#constructor)

### Properties

* [_jsxChildrenProps](_jsx_components_select_.select.md#_jsxchildrenprops)
* [_saveJSXChildrenProps](_jsx_components_select_.select.md#_savejsxchildrenprops)
* [blessedElement](_jsx_components_select_.select.md#protected-blessedelement)
* [items](_jsx_components_select_.select.md#items)
* [list](_jsx_components_select_.select.md#list)
* [props](_jsx_components_select_.select.md#protected-props)
* [state](_jsx_components_select_.select.md#protected-state)
* [values](_jsx_components_select_.select.md#values)

### Accessors

* [element](_jsx_components_select_.select.md#element)
* [screen](_jsx_components_select_.select.md#screen)
* [type](_jsx_components_select_.select.md#type)

### Methods

* [filter](_jsx_components_select_.select.md#filter)
* [filterChildren](_jsx_components_select_.select.md#filterchildren)
* [filterDescendants](_jsx_components_select_.select.md#filterdescendants)
* [findChildren](_jsx_components_select_.select.md#findchildren)
* [findDescendant](_jsx_components_select_.select.md#finddescendant)
* [findDescendantNamed](_jsx_components_select_.select.md#finddescendantnamed)
* [getContent](_jsx_components_select_.select.md#getcontent)
* [getDescendantNamed](_jsx_components_select_.select.md#getdescendantnamed)
* [getElementData](_jsx_components_select_.select.md#getelementdata)
* [onKeyPress](_jsx_components_select_.select.md#onkeypress)
* [render](_jsx_components_select_.select.md#render)
* [replaceChildren](_jsx_components_select_.select.md#replacechildren)
* [visitDescendants](_jsx_components_select_.select.md#visitdescendants)

## Constructors

###  constructor

\+ **new Select**(`props`: P, `state`: S): *[Select](_jsx_components_select_.select.md)*

*Inherited from [Component](_jsx_component_.component.md).[constructor](_jsx_component_.component.md#constructor)*

*Defined in [jsx/component.ts:27](https://github.com/cancerberoSgx/accursed/blob/468bf3c/src/jsx/component.ts#L27)*

**Parameters:**

Name | Type |
------ | ------ |
`props` | P |
`state` | S |

**Returns:** *[Select](_jsx_components_select_.select.md)*

## Properties

###  _jsxChildrenProps

• **_jsxChildrenProps**: *any* =  undefined

*Inherited from [Component](_jsx_component_.component.md).[_jsxChildrenProps](_jsx_component_.component.md#_jsxchildrenprops)*

*Defined in [jsx/component.ts:35](https://github.com/cancerberoSgx/accursed/blob/468bf3c/src/jsx/component.ts#L35)*

___

###  _saveJSXChildrenProps

• **_saveJSXChildrenProps**: *boolean* = true

*Overrides [Component](_jsx_component_.component.md).[_saveJSXChildrenProps](_jsx_component_.component.md#_savejsxchildrenprops)*

*Defined in [jsx-components/select.tsx:46](https://github.com/cancerberoSgx/accursed/blob/468bf3c/src/jsx-components/select.tsx#L46)*

___

### `Protected` blessedElement

• **blessedElement**: *[Element](../interfaces/_jsx_types_.__global.jsx.element.md)* =  undefined as any

*Inherited from [Component](_jsx_component_.component.md).[blessedElement](_jsx_component_.component.md#protected-blessedelement)*

*Defined in [jsx/component.ts:42](https://github.com/cancerberoSgx/accursed/blob/468bf3c/src/jsx/component.ts#L42)*

All class elements will have a reference to its rendered blessed element

___

###  items

• **items**: *string[]*

*Defined in [jsx-components/select.tsx:48](https://github.com/cancerberoSgx/accursed/blob/468bf3c/src/jsx-components/select.tsx#L48)*

___

###  list

• **list**: *[List](_declarations_blessed_d_.widget.list.md)*

*Defined in [jsx-components/select.tsx:47](https://github.com/cancerberoSgx/accursed/blob/468bf3c/src/jsx-components/select.tsx#L47)*

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

###  values

• **values**: *any[]*

*Defined in [jsx-components/select.tsx:49](https://github.com/cancerberoSgx/accursed/blob/468bf3c/src/jsx-components/select.tsx#L49)*

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

###  filter

▸ **filter**(`predicate`: function): *void*

*Defined in [jsx-components/select.tsx:115](https://github.com/cancerberoSgx/accursed/blob/468bf3c/src/jsx-components/select.tsx#L115)*

Will hide those items for which given predicate returns false. Since items won't be removed, calling filter again will filter the whole list again, no just the currently visible items.

**Parameters:**

▪ **predicate**: *function*

▸ (`value`: string, `index`: number): *boolean*

**Parameters:**

Name | Type |
------ | ------ |
`value` | string |
`index` | number |

**Returns:** *void*

___

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

###  onKeyPress

▸ **onKeyPress**(`__namedParameters`: object): *void*

*Defined in [jsx-components/select.tsx:97](https://github.com/cancerberoSgx/accursed/blob/468bf3c/src/jsx-components/select.tsx#L97)*

**Parameters:**

▪ **__namedParameters**: *object*

Name | Type |
------ | ------ |
`ch` | string |
`key` | [IKeyEventArg](../interfaces/_declarations_blessed_d_.widgets.events.ikeyeventarg.md) |

**Returns:** *void*

___

###  render

▸ **render**(): *[Element](../interfaces/_jsx_types_.__global.jsx.element.md)‹P›*

*Overrides [Component](_jsx_component_.component.md).[render](_jsx_component_.component.md#abstract-render)*

*Defined in [jsx-components/select.tsx:50](https://github.com/cancerberoSgx/accursed/blob/468bf3c/src/jsx-components/select.tsx#L50)*

**Returns:** *[Element](../interfaces/_jsx_types_.__global.jsx.element.md)‹P›*

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
