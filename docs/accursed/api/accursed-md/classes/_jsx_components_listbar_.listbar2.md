[accursed](../README.md) › [Globals](../globals.md) › ["jsx-components/listBar"](../modules/_jsx_components_listbar_.md) › [ListBar2](_jsx_components_listbar_.listbar2.md)

# Class: ListBar2 <**S, P**>

Example:
```jsx
<ListBar2 left="center">
<ListBarCommand
callback={() => {
showInModal(screen, 'play')
}}>
play
</ListBarCommand>
<ListBarCommand
callback={() => {
showInModal(screen, 'stop')
}}>
stop
</ListBarCommand>
...
</ListBar2>

```

## Type parameters

▪ **S**

▪ **P**

## Hierarchy

* [Component](_jsx_component_.component.md)‹[ListBarProps](../interfaces/_jsx_components_listbar_.listbarprops.md)›

  ↳ **ListBar2**

## Index

### Constructors

* [constructor](_jsx_components_listbar_.listbar2.md#constructor)

### Properties

* [_jsxChildrenProps](_jsx_components_listbar_.listbar2.md#_jsxchildrenprops)
* [_saveJSXChildrenProps](_jsx_components_listbar_.listbar2.md#_savejsxchildrenprops)
* [blessedElement](_jsx_components_listbar_.listbar2.md#protected-blessedelement)
* [dontEmitAction](_jsx_components_listbar_.listbar2.md#dontemitaction)
* [props](_jsx_components_listbar_.listbar2.md#protected-props)
* [state](_jsx_components_listbar_.listbar2.md#protected-state)

### Accessors

* [element](_jsx_components_listbar_.listbar2.md#element)
* [listBar](_jsx_components_listbar_.listbar2.md#listbar)
* [screen](_jsx_components_listbar_.listbar2.md#screen)
* [selectedIndex](_jsx_components_listbar_.listbar2.md#selectedindex)
* [selectedText](_jsx_components_listbar_.listbar2.md#selectedtext)
* [type](_jsx_components_listbar_.listbar2.md#type)

### Methods

* [addCommand](_jsx_components_listbar_.listbar2.md#addcommand)
* [execute](_jsx_components_listbar_.listbar2.md#execute)
* [filterChildren](_jsx_components_listbar_.listbar2.md#filterchildren)
* [filterDescendants](_jsx_components_listbar_.listbar2.md#filterdescendants)
* [findChildren](_jsx_components_listbar_.listbar2.md#findchildren)
* [findDescendant](_jsx_components_listbar_.listbar2.md#finddescendant)
* [findDescendantNamed](_jsx_components_listbar_.listbar2.md#finddescendantnamed)
* [getContent](_jsx_components_listbar_.listbar2.md#getcontent)
* [getDescendantNamed](_jsx_components_listbar_.listbar2.md#getdescendantnamed)
* [getElementData](_jsx_components_listbar_.listbar2.md#getelementdata)
* [handleAction](_jsx_components_listbar_.listbar2.md#protected-handleaction)
* [handleSelectItem](_jsx_components_listbar_.listbar2.md#protected-handleselectitem)
* [installHandlers](_jsx_components_listbar_.listbar2.md#protected-installhandlers)
* [render](_jsx_components_listbar_.listbar2.md#render)
* [replaceChildren](_jsx_components_listbar_.listbar2.md#replacechildren)
* [select](_jsx_components_listbar_.listbar2.md#select)
* [visitDescendants](_jsx_components_listbar_.listbar2.md#visitdescendants)

## Constructors

###  constructor

\+ **new ListBar2**(`p`: [ListBarProps](../interfaces/_jsx_components_listbar_.listbarprops.md), `s`: any): *[ListBar2](_jsx_components_listbar_.listbar2.md)*

*Overrides [Component](_jsx_component_.component.md).[constructor](_jsx_component_.component.md#constructor)*

*Defined in [jsx-components/listBar.tsx:58](https://github.com/cancerberoSgx/accursed/blob/5b2518e/src/jsx-components/listBar.tsx#L58)*

**Parameters:**

Name | Type |
------ | ------ |
`p` | [ListBarProps](../interfaces/_jsx_components_listbar_.listbarprops.md) |
`s` | any |

**Returns:** *[ListBar2](_jsx_components_listbar_.listbar2.md)*

## Properties

###  _jsxChildrenProps

• **_jsxChildrenProps**: *any* =  undefined

*Inherited from [Component](_jsx_component_.component.md).[_jsxChildrenProps](_jsx_component_.component.md#_jsxchildrenprops)*

*Defined in [jsx/component.ts:24](https://github.com/cancerberoSgx/accursed/blob/5b2518e/src/jsx/component.ts#L24)*

___

###  _saveJSXChildrenProps

• **_saveJSXChildrenProps**: *boolean* = true

*Overrides [Component](_jsx_component_.component.md).[_saveJSXChildrenProps](_jsx_component_.component.md#_savejsxchildrenprops)*

*Defined in [jsx-components/listBar.tsx:57](https://github.com/cancerberoSgx/accursed/blob/5b2518e/src/jsx-components/listBar.tsx#L57)*

___

### `Protected` blessedElement

• **blessedElement**: *[Element](../interfaces/_jsx_types_.__global.jsx.element.md)* =  undefined as any

*Inherited from [Component](_jsx_component_.component.md).[blessedElement](_jsx_component_.component.md#protected-blessedelement)*

*Defined in [jsx/component.ts:31](https://github.com/cancerberoSgx/accursed/blob/5b2518e/src/jsx/component.ts#L31)*

All class elements will have a reference to its rendered blessed element

___

###  dontEmitAction

• **dontEmitAction**: *any*

*Defined in [jsx-components/listBar.tsx:58](https://github.com/cancerberoSgx/accursed/blob/5b2518e/src/jsx-components/listBar.tsx#L58)*

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

## Accessors

###  element

• **get element**(): *[BlessedElement](_declarations_blessed_d_.widgets.blessedelement.md)‹object›*

*Inherited from [Component](_jsx_component_.component.md).[element](_jsx_component_.component.md#element)*

*Defined in [jsx/component.ts:33](https://github.com/cancerberoSgx/accursed/blob/5b2518e/src/jsx/component.ts#L33)*

**Returns:** *[BlessedElement](_declarations_blessed_d_.widgets.blessedelement.md)‹object›*

___

###  listBar

• **get listBar**(): *[ListBar](../modules/_blessedtypes_.md#listbar)*

*Defined in [jsx-components/listBar.tsx:147](https://github.com/cancerberoSgx/accursed/blob/5b2518e/src/jsx-components/listBar.tsx#L147)*

**Returns:** *[ListBar](../modules/_blessedtypes_.md#listbar)*

___

###  screen

• **get screen**(): *[Screen](_declarations_blessed_d_.widgets.screen.md)*

*Inherited from [Component](_jsx_component_.component.md).[screen](_jsx_component_.component.md#screen)*

*Defined in [jsx/component.ts:73](https://github.com/cancerberoSgx/accursed/blob/5b2518e/src/jsx/component.ts#L73)*

**Returns:** *[Screen](_declarations_blessed_d_.widgets.screen.md)*

___

###  selectedIndex

• **get selectedIndex**(): *number*

*Defined in [jsx-components/listBar.tsx:151](https://github.com/cancerberoSgx/accursed/blob/5b2518e/src/jsx-components/listBar.tsx#L151)*

**Returns:** *number*

___

###  selectedText

• **get selectedText**(): *string*

*Defined in [jsx-components/listBar.tsx:155](https://github.com/cancerberoSgx/accursed/blob/5b2518e/src/jsx-components/listBar.tsx#L155)*

**Returns:** *string*

___

###  type

• **get type**(): *string*

*Inherited from [Component](_jsx_component_.component.md).[type](_jsx_component_.component.md#type)*

*Defined in [jsx/component.ts:40](https://github.com/cancerberoSgx/accursed/blob/5b2518e/src/jsx/component.ts#L40)*

return the type name of ths component container blessed element

**Returns:** *string*

## Methods

###  addCommand

▸ **addCommand**(`c`: [Command](../interfaces/_jsx_components_listbar_.command.md), `options`: object): *void*

*Defined in [jsx-components/listBar.tsx:140](https://github.com/cancerberoSgx/accursed/blob/5b2518e/src/jsx-components/listBar.tsx#L140)*

**Parameters:**

▪ **c**: *[Command](../interfaces/_jsx_components_listbar_.command.md)*

▪`Default value`  **options**: *object*=  { dontRenderScreen: false }

Name | Type | Default |
------ | ------ | ------ |
`dontRenderScreen` | boolean | false |

**Returns:** *void*

___

###  execute

▸ **execute**(`index`: number, `options`: object): *void*

*Defined in [jsx-components/listBar.tsx:136](https://github.com/cancerberoSgx/accursed/blob/5b2518e/src/jsx-components/listBar.tsx#L136)*

This is equivalent to the user executing a command by pressing enter,  clicking it or pressing one of the commands [[keys]].

**Parameters:**

▪ **index**: *number*

▪`Default value`  **options**: *object*=  { dontEmit: false }

Name | Type |
------ | ------ |
`dontEmit?` | boolean |

**Returns:** *void*

___

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

### `Protected` handleAction

▸ **handleAction**(`index`: number, `item`: [Element](../interfaces/_jsx_types_.__global.jsx.element.md)): *void*

*Defined in [jsx-components/listBar.tsx:109](https://github.com/cancerberoSgx/accursed/blob/5b2518e/src/jsx-components/listBar.tsx#L109)*

**Parameters:**

Name | Type |
------ | ------ |
`index` | number |
`item` | [Element](../interfaces/_jsx_types_.__global.jsx.element.md) |

**Returns:** *void*

___

### `Protected` handleSelectItem

▸ **handleSelectItem**(`index`: number, `item`: [Element](../interfaces/_jsx_types_.__global.jsx.element.md)): *void*

*Defined in [jsx-components/listBar.tsx:115](https://github.com/cancerberoSgx/accursed/blob/5b2518e/src/jsx-components/listBar.tsx#L115)*

**Parameters:**

Name | Type |
------ | ------ |
`index` | number |
`item` | [Element](../interfaces/_jsx_types_.__global.jsx.element.md) |

**Returns:** *void*

___

### `Protected` installHandlers

▸ **installHandlers**(`c`: [ListBar](../modules/_blessedtypes_.md#listbar)): *void*

*Defined in [jsx-components/listBar.tsx:104](https://github.com/cancerberoSgx/accursed/blob/5b2518e/src/jsx-components/listBar.tsx#L104)*

**Parameters:**

Name | Type |
------ | ------ |
`c` | [ListBar](../modules/_blessedtypes_.md#listbar) |

**Returns:** *void*

___

###  render

▸ **render**(): *[Element](../interfaces/_jsx_types_.__global.jsx.element.md)‹P›*

*Overrides [Component](_jsx_component_.component.md).[render](_jsx_component_.component.md#abstract-render)*

*Defined in [jsx-components/listBar.tsx:66](https://github.com/cancerberoSgx/accursed/blob/5b2518e/src/jsx-components/listBar.tsx#L66)*

**Returns:** *[Element](../interfaces/_jsx_types_.__global.jsx.element.md)‹P›*

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

###  select

▸ **select**(`indexOrText`: number | string, `options`: object): *void*

*Defined in [jsx-components/listBar.tsx:124](https://github.com/cancerberoSgx/accursed/blob/5b2518e/src/jsx-components/listBar.tsx#L124)*

Will focus one of the list items. This won't call the callback, is the same action as moving though the list using the arrow keys.

**Parameters:**

▪ **indexOrText**: *number | string*

▪`Default value`  **options**: *object*=  { dontEmit: false }

Name | Type |
------ | ------ |
`dontEmit?` | boolean |

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
