[accursed](../README.md) › [Globals](../globals.md) › ["jsx-components/autocomplete"](../modules/_jsx_components_autocomplete_.md) › [AutoComplete](_jsx_components_autocomplete_.autocomplete.md)

# Class: AutoComplete <**S, P**>

Basic autocomplete input, with given options string array using textbox and a list. The list is only shown
when there are matches and the textbox is being edited.

TODO: options to be (value:string)=>Promise<string[]>

## Type parameters

▪ **S**

▪ **P**

## Hierarchy

* [Component](_jsx_component_.component.md)‹[P](../interfaces/_jsx_components_autocomplete_.p.md)›

  ↳ **AutoComplete**

## Index

### Constructors

* [constructor](_jsx_components_autocomplete_.autocomplete.md#constructor)

### Properties

* [_jsxChildrenProps](_jsx_components_autocomplete_.autocomplete.md#_jsxchildrenprops)
* [_saveJSXChildrenProps](_jsx_components_autocomplete_.autocomplete.md#_savejsxchildrenprops)
* [blessedElement](_jsx_components_autocomplete_.autocomplete.md#protected-blessedelement)
* [inputRef](_jsx_components_autocomplete_.autocomplete.md#protected-inputref)
* [listRef](_jsx_components_autocomplete_.autocomplete.md#protected-listref)
* [options](_jsx_components_autocomplete_.autocomplete.md#protected-options)
* [props](_jsx_components_autocomplete_.autocomplete.md#protected-props)
* [state](_jsx_components_autocomplete_.autocomplete.md#protected-state)

### Accessors

* [element](_jsx_components_autocomplete_.autocomplete.md#element)
* [input](_jsx_components_autocomplete_.autocomplete.md#input)
* [list](_jsx_components_autocomplete_.autocomplete.md#list)
* [screen](_jsx_components_autocomplete_.autocomplete.md#screen)
* [type](_jsx_components_autocomplete_.autocomplete.md#type)

### Methods

* [filterChildren](_jsx_components_autocomplete_.autocomplete.md#filterchildren)
* [filterDescendants](_jsx_components_autocomplete_.autocomplete.md#filterdescendants)
* [findChildren](_jsx_components_autocomplete_.autocomplete.md#findchildren)
* [findDescendant](_jsx_components_autocomplete_.autocomplete.md#finddescendant)
* [findDescendantNamed](_jsx_components_autocomplete_.autocomplete.md#finddescendantnamed)
* [getContent](_jsx_components_autocomplete_.autocomplete.md#getcontent)
* [getDescendantNamed](_jsx_components_autocomplete_.autocomplete.md#getdescendantnamed)
* [getElementData](_jsx_components_autocomplete_.autocomplete.md#getelementdata)
* [render](_jsx_components_autocomplete_.autocomplete.md#render)
* [replaceChildren](_jsx_components_autocomplete_.autocomplete.md#replacechildren)
* [setOptions](_jsx_components_autocomplete_.autocomplete.md#setoptions)
* [visitDescendants](_jsx_components_autocomplete_.autocomplete.md#visitdescendants)

## Constructors

###  constructor

\+ **new AutoComplete**(`p`: [P](../interfaces/_jsx_components_autocomplete_.p.md), `s`: __type): *[AutoComplete](_jsx_components_autocomplete_.autocomplete.md)*

*Overrides [Component](_jsx_component_.component.md).[constructor](_jsx_component_.component.md#constructor)*

*Defined in [jsx-components/autocomplete.tsx:50](https://github.com/cancerberoSgx/accursed/blob/468bf3c/src/jsx-components/autocomplete.tsx#L50)*

**Parameters:**

Name | Type | Default |
------ | ------ | ------ |
`p` | [P](../interfaces/_jsx_components_autocomplete_.p.md) | - |
`s` | __type |  {} |

**Returns:** *[AutoComplete](_jsx_components_autocomplete_.autocomplete.md)*

## Properties

###  _jsxChildrenProps

• **_jsxChildrenProps**: *any* =  undefined

*Inherited from [Component](_jsx_component_.component.md).[_jsxChildrenProps](_jsx_component_.component.md#_jsxchildrenprops)*

*Defined in [jsx/component.ts:35](https://github.com/cancerberoSgx/accursed/blob/468bf3c/src/jsx/component.ts#L35)*

___

###  _saveJSXChildrenProps

• **_saveJSXChildrenProps**: *boolean* = false

*Inherited from [Component](_jsx_component_.component.md).[_saveJSXChildrenProps](_jsx_component_.component.md#_savejsxchildrenprops)*

*Defined in [jsx/component.ts:34](https://github.com/cancerberoSgx/accursed/blob/468bf3c/src/jsx/component.ts#L34)*

If true then JSX children props will be save on property [_jsxChildrenProps](_jsx_components_autocomplete_.autocomplete.md#_jsxchildrenprops). Component subclasses
needing this information (like Virtual component parent) can override it.

___

### `Protected` blessedElement

• **blessedElement**: *[Element](../interfaces/_jsx_types_.__global.jsx.element.md)* =  undefined as any

*Inherited from [Component](_jsx_component_.component.md).[blessedElement](_jsx_component_.component.md#protected-blessedelement)*

*Defined in [jsx/component.ts:42](https://github.com/cancerberoSgx/accursed/blob/468bf3c/src/jsx/component.ts#L42)*

All class elements will have a reference to its rendered blessed element

___

### `Protected` inputRef

• **inputRef**: *[RefObject](../interfaces/_jsx_types_.refobject.md)‹[TextboxElement](_declarations_blessed_d_.widgets.textboxelement.md)›* =  React.createRef<Textbox>(current => {
    if (this.props.inputOptions && this.props.inputOptions.ref) {
      // SO users still can pass ref in options
      this.props.inputOptions.ref.current = current
    }
  })

*Defined in [jsx-components/autocomplete.tsx:76](https://github.com/cancerberoSgx/accursed/blob/468bf3c/src/jsx-components/autocomplete.tsx#L76)*

___

### `Protected` listRef

• **listRef**: *[RefObject](../interfaces/_jsx_types_.refobject.md)‹[ListElement](_declarations_blessed_d_.widgets.listelement.md)›* =  React.createRef<List>(current => {
    if (this.props.listOptions && this.props.listOptions.ref) {
      // SO users still can pass ref in options
      this.props.listOptions.ref.current = current
    }
  })

*Defined in [jsx-components/autocomplete.tsx:69](https://github.com/cancerberoSgx/accursed/blob/468bf3c/src/jsx-components/autocomplete.tsx#L69)*

___

### `Protected` options

• **options**: *string[]* =  []

*Defined in [jsx-components/autocomplete.tsx:50](https://github.com/cancerberoSgx/accursed/blob/468bf3c/src/jsx-components/autocomplete.tsx#L50)*

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

## Accessors

###  element

• **get element**(): *[BlessedElement](_declarations_blessed_d_.widgets.blessedelement.md)‹object›*

*Inherited from [Component](_jsx_component_.component.md).[element](_jsx_component_.component.md#element)*

*Defined in [jsx/component.ts:44](https://github.com/cancerberoSgx/accursed/blob/468bf3c/src/jsx/component.ts#L44)*

**Returns:** *[BlessedElement](_declarations_blessed_d_.widgets.blessedelement.md)‹object›*

___

###  input

• **get input**(): *[TextboxElement](_declarations_blessed_d_.widgets.textboxelement.md)*

*Defined in [jsx-components/autocomplete.tsx:65](https://github.com/cancerberoSgx/accursed/blob/468bf3c/src/jsx-components/autocomplete.tsx#L65)*

**Returns:** *[TextboxElement](_declarations_blessed_d_.widgets.textboxelement.md)*

___

###  list

• **get list**(): *[ListElement](_declarations_blessed_d_.widgets.listelement.md)*

*Defined in [jsx-components/autocomplete.tsx:61](https://github.com/cancerberoSgx/accursed/blob/468bf3c/src/jsx-components/autocomplete.tsx#L61)*

**Returns:** *[ListElement](_declarations_blessed_d_.widgets.listelement.md)*

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

▸ **render**(): *[Element](../interfaces/_jsx_types_.__global.jsx.element.md)‹P›*

*Overrides [Component](_jsx_component_.component.md).[render](_jsx_component_.component.md#abstract-render)*

*Defined in [jsx-components/autocomplete.tsx:83](https://github.com/cancerberoSgx/accursed/blob/468bf3c/src/jsx-components/autocomplete.tsx#L83)*

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

###  setOptions

▸ **setOptions**(`options`: string[]): *void*

*Defined in [jsx-components/autocomplete.tsx:57](https://github.com/cancerberoSgx/accursed/blob/468bf3c/src/jsx-components/autocomplete.tsx#L57)*

**Parameters:**

Name | Type |
------ | ------ |
`options` | string[] |

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
