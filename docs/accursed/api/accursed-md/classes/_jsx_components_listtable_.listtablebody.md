[accursed](../README.md) > ["jsx-components/listTable"](../modules/_jsx_components_listtable_.md) > [ListTableBody](../classes/_jsx_components_listtable_.listtablebody.md)

# Class: ListTableBody

## Type parameters
#### S 
#### P 
## Hierarchy

↳  [VirtualComponent](_blessed_virtualelement_.virtualcomponent.md)<[ListTableBodyProps](../interfaces/_jsx_components_listtable_.listtablebodyprops.md)>

**↳ ListTableBody**

## Implements

* [VirtualElement](../interfaces/_blessed_virtualelement_.virtualelement.md)

## Index

### Constructors

* [constructor](_jsx_components_listtable_.listtablebody.md#constructor)

### Properties

* [_jsxChildrenProps](_jsx_components_listtable_.listtablebody.md#_jsxchildrenprops)
* [_saveJSXChildrenProps](_jsx_components_listtable_.listtablebody.md#_savejsxchildrenprops)
* [blessedElement](_jsx_components_listtable_.listtablebody.md#blessedelement)
* [props](_jsx_components_listtable_.listtablebody.md#props)
* [state](_jsx_components_listtable_.listtablebody.md#state)
* [VIRTUAL_DATA_OPTION](_jsx_components_listtable_.listtablebody.md#virtual_data_option)

### Accessors

* [element](_jsx_components_listtable_.listtablebody.md#element)
* [screen](_jsx_components_listtable_.listtablebody.md#screen)
* [type](_jsx_components_listtable_.listtablebody.md#type)

### Methods

* [filterChildren](_jsx_components_listtable_.listtablebody.md#filterchildren)
* [filterDescendants](_jsx_components_listtable_.listtablebody.md#filterdescendants)
* [findChildren](_jsx_components_listtable_.listtablebody.md#findchildren)
* [findDescendant](_jsx_components_listtable_.listtablebody.md#finddescendant)
* [getContent](_jsx_components_listtable_.listtablebody.md#getcontent)
* [getDescendantNamed](_jsx_components_listtable_.listtablebody.md#getdescendantnamed)
* [getElementData](_jsx_components_listtable_.listtablebody.md#getelementdata)
* [render](_jsx_components_listtable_.listtablebody.md#render)
* [replaceChildren](_jsx_components_listtable_.listtablebody.md#replacechildren)
* [saveVirtualData](_jsx_components_listtable_.listtablebody.md#savevirtualdata)
* [visitDescendants](_jsx_components_listtable_.listtablebody.md#visitdescendants)
* [createVirtualComponent](_jsx_components_listtable_.listtablebody.md#createvirtualcomponent)
* [createVirtualElement](_jsx_components_listtable_.listtablebody.md#createvirtualelement)
* [isVirtualComponent](_jsx_components_listtable_.listtablebody.md#isvirtualcomponent)
* [isVirtualElement](_jsx_components_listtable_.listtablebody.md#isvirtualelement)

---

## Constructors

<a id="constructor"></a>

###  constructor

⊕ **new ListTableBody**(props: *`P`*, state: *`S`*): [ListTableBody](_jsx_components_listtable_.listtablebody.md)

*Inherited from [Component](_jsx_component_.component.md).[constructor](_jsx_component_.component.md#constructor)*

*Defined in [jsx/component.ts:27](https://github.com/cancerberoSgx/accursed/blob/978b980/src/jsx/component.ts#L27)*

**Parameters:**

| Name | Type |
| ------ | ------ |
| props | `P` |
| state | `S` |

**Returns:** [ListTableBody](_jsx_components_listtable_.listtablebody.md)

___

## Properties

<a id="_jsxchildrenprops"></a>

###  _jsxChildrenProps

**● _jsxChildrenProps**: *`any`* =  undefined

*Inherited from [Component](_jsx_component_.component.md).[_jsxChildrenProps](_jsx_component_.component.md#_jsxchildrenprops)*

*Defined in [jsx/component.ts:35](https://github.com/cancerberoSgx/accursed/blob/978b980/src/jsx/component.ts#L35)*

___
<a id="_savejsxchildrenprops"></a>

###  _saveJSXChildrenProps

**● _saveJSXChildrenProps**: *`boolean`* = false

*Inherited from [Component](_jsx_component_.component.md).[_saveJSXChildrenProps](_jsx_component_.component.md#_savejsxchildrenprops)*

*Defined in [jsx/component.ts:34](https://github.com/cancerberoSgx/accursed/blob/978b980/src/jsx/component.ts#L34)*

If true then JSX children props will be save on property [\_jsxChildrenProps](_jsx_components_listtable_.listtablebody.md#_jsxchildrenprops). Component subclasses needing this information (like Virtual component parent) can override it.

___
<a id="blessedelement"></a>

### `<Protected>` blessedElement

**● blessedElement**: *[Element](../interfaces/_jsx_types_.__global.jsx.element.md)* =  undefined as any

*Inherited from [Component](_jsx_component_.component.md).[blessedElement](_jsx_component_.component.md#blessedelement)*

*Defined in [jsx/component.ts:42](https://github.com/cancerberoSgx/accursed/blob/978b980/src/jsx/component.ts#L42)*

All class elements will have a reference to its rendered blessed element

___
<a id="props"></a>

### `<Protected>` props

**● props**: *`P`*

*Inherited from [Component](_jsx_component_.component.md).[props](_jsx_component_.component.md#props)*

*Defined in [jsx/component.ts:28](https://github.com/cancerberoSgx/accursed/blob/978b980/src/jsx/component.ts#L28)*

___
<a id="state"></a>

### `<Protected>` state

**● state**: *`S`*

*Inherited from [Component](_jsx_component_.component.md).[state](_jsx_component_.component.md#state)*

*Defined in [jsx/component.ts:28](https://github.com/cancerberoSgx/accursed/blob/978b980/src/jsx/component.ts#L28)*

___
<a id="virtual_data_option"></a>

### `<Static>` VIRTUAL_DATA_OPTION

**● VIRTUAL_DATA_OPTION**: *`string`* = "accursed.virtual.component"

*Inherited from [VirtualComponent](_blessed_virtualelement_.virtualcomponent.md).[VIRTUAL_DATA_OPTION](_blessed_virtualelement_.virtualcomponent.md#virtual_data_option)*

*Defined in [blessed/virtualElement.ts:20](https://github.com/cancerberoSgx/accursed/blob/978b980/src/blessed/virtualElement.ts#L20)*

___

## Accessors

<a id="element"></a>

###  element

**get element**(): [BlessedElement](_declarations_blessed_d_.widgets.blessedelement.md)<`object`>

*Inherited from [Component](_jsx_component_.component.md).[element](_jsx_component_.component.md#element)*

*Defined in [jsx/component.ts:44](https://github.com/cancerberoSgx/accursed/blob/978b980/src/jsx/component.ts#L44)*

**Returns:** [BlessedElement](_declarations_blessed_d_.widgets.blessedelement.md)<`object`>

___
<a id="screen"></a>

###  screen

**get screen**(): [Screen](_declarations_blessed_d_.widgets.screen.md)

*Inherited from [Component](_jsx_component_.component.md).[screen](_jsx_component_.component.md#screen)*

*Defined in [jsx/component.ts:80](https://github.com/cancerberoSgx/accursed/blob/978b980/src/jsx/component.ts#L80)*

**Returns:** [Screen](_declarations_blessed_d_.widgets.screen.md)

___
<a id="type"></a>

###  type

**get type**(): `string`

*Inherited from [Component](_jsx_component_.component.md).[type](_jsx_component_.component.md#type)*

*Defined in [jsx/component.ts:51](https://github.com/cancerberoSgx/accursed/blob/978b980/src/jsx/component.ts#L51)*

return the type name of ths component container blessed element

**Returns:** `string`

___

## Methods

<a id="filterchildren"></a>

###  filterChildren

▸ **filterChildren**<`T`>(p: *[ElementPredicate](../modules/_blessed_node_.md#elementpredicate)*): `T`[]

*Inherited from [Component](_jsx_component_.component.md).[filterChildren](_jsx_component_.component.md#filterchildren)*

*Defined in [jsx/component.ts:75](https://github.com/cancerberoSgx/accursed/blob/978b980/src/jsx/component.ts#L75)*

**Type parameters:**

#### T :  [Element](../interfaces/_jsx_types_.__global.jsx.element.md)
**Parameters:**

| Name | Type |
| ------ | ------ |
| p | [ElementPredicate](../modules/_blessed_node_.md#elementpredicate) |

**Returns:** `T`[]

___
<a id="filterdescendants"></a>

###  filterDescendants

▸ **filterDescendants**<`T`>(p: *[ElementPredicate](../modules/_blessed_node_.md#elementpredicate)*): `T`[]

*Inherited from [Component](_jsx_component_.component.md).[filterDescendants](_jsx_component_.component.md#filterdescendants)*

*Defined in [jsx/component.ts:67](https://github.com/cancerberoSgx/accursed/blob/978b980/src/jsx/component.ts#L67)*

**Type parameters:**

#### T :  [Element](../interfaces/_jsx_types_.__global.jsx.element.md)
**Parameters:**

| Name | Type |
| ------ | ------ |
| p | [ElementPredicate](../modules/_blessed_node_.md#elementpredicate) |

**Returns:** `T`[]

___
<a id="findchildren"></a>

###  findChildren

▸ **findChildren**<`T`>(p: *[ElementPredicate](../modules/_blessed_node_.md#elementpredicate)*): `T` \| `undefined`

*Inherited from [Component](_jsx_component_.component.md).[findChildren](_jsx_component_.component.md#findchildren)*

*Defined in [jsx/component.ts:71](https://github.com/cancerberoSgx/accursed/blob/978b980/src/jsx/component.ts#L71)*

**Type parameters:**

#### T :  [Element](../interfaces/_jsx_types_.__global.jsx.element.md)
**Parameters:**

| Name | Type |
| ------ | ------ |
| p | [ElementPredicate](../modules/_blessed_node_.md#elementpredicate) |

**Returns:** `T` \| `undefined`

___
<a id="finddescendant"></a>

###  findDescendant

▸ **findDescendant**<`T`>(p: *[ElementPredicate](../modules/_blessed_node_.md#elementpredicate)*): `T` \| `undefined`

*Inherited from [Component](_jsx_component_.component.md).[findDescendant](_jsx_component_.component.md#finddescendant)*

*Defined in [jsx/component.ts:63](https://github.com/cancerberoSgx/accursed/blob/978b980/src/jsx/component.ts#L63)*

**Type parameters:**

#### T :  [Element](../interfaces/_jsx_types_.__global.jsx.element.md)
**Parameters:**

| Name | Type |
| ------ | ------ |
| p | [ElementPredicate](../modules/_blessed_node_.md#elementpredicate) |

**Returns:** `T` \| `undefined`

___
<a id="getcontent"></a>

###  getContent

▸ **getContent**(options?: *`object`*): `string`

*Inherited from [Component](_jsx_component_.component.md).[getContent](_jsx_component_.component.md#getcontent)*

*Defined in [jsx/component.ts:100](https://github.com/cancerberoSgx/accursed/blob/978b980/src/jsx/component.ts#L100)*

Returns the text content of given node and all its children, in order. By default stripped from ansi escape chars and trimmed, and separated by space, but is configurable through options.

**Parameters:**

**`Default value` options: `object`**

| Name | Type |
| ------ | ------ |
| `Optional` childrenLast | `boolean` |
| `Optional` dontStrip | `boolean` |
| `Optional` dontTrim | `boolean` |

**Returns:** `string`

___
<a id="getdescendantnamed"></a>

###  getDescendantNamed

▸ **getDescendantNamed**<`T`>(n: *`string`*): `T` \| `undefined`

*Inherited from [Component](_jsx_component_.component.md).[getDescendantNamed](_jsx_component_.component.md#getdescendantnamed)*

*Defined in [jsx/component.ts:104](https://github.com/cancerberoSgx/accursed/blob/978b980/src/jsx/component.ts#L104)*

**Type parameters:**

#### T :  [Element](../interfaces/_jsx_types_.__global.jsx.element.md)
**Parameters:**

| Name | Type |
| ------ | ------ |
| n | `string` |

**Returns:** `T` \| `undefined`

___
<a id="getelementdata"></a>

###  getElementData

▸ **getElementData**<`T`>(key: *`string`*): `T`

*Inherited from [Component](_jsx_component_.component.md).[getElementData](_jsx_component_.component.md#getelementdata)*

*Defined in [jsx/component.ts:55](https://github.com/cancerberoSgx/accursed/blob/978b980/src/jsx/component.ts#L55)*

**Type parameters:**

#### T 
**Parameters:**

| Name | Type |
| ------ | ------ |
| key | `string` |

**Returns:** `T`

___
<a id="render"></a>

###  render

▸ **render**(): `any`

*Inherited from [VirtualComponent](_blessed_virtualelement_.virtualcomponent.md).[render](_blessed_virtualelement_.virtualcomponent.md#render)*

*Overrides [Component](_jsx_component_.component.md).[render](_jsx_component_.component.md#render)*

*Defined in [blessed/virtualElement.ts:14](https://github.com/cancerberoSgx/accursed/blob/978b980/src/blessed/virtualElement.ts#L14)*

**Returns:** `any`

___
<a id="replacechildren"></a>

###  replaceChildren

▸ **replaceChildren**(newChildren: *[Element](../interfaces/_jsx_types_.__global.jsx.element.md)[]*, options?: *`object`*): `void`

*Inherited from [Component](_jsx_component_.component.md).[replaceChildren](_jsx_component_.component.md#replacechildren)*

*Defined in [jsx/component.ts:89](https://github.com/cancerberoSgx/accursed/blob/978b980/src/jsx/component.ts#L89)*

Hot replace all children on this node with given \[\[newChildren\]\] array elements. This is a visual operation, and only should eb performed when the component need to implement a radicals different view dynamically since it couldnt costly.

**Parameters:**

**newChildren: [Element](../interfaces/_jsx_types_.__global.jsx.element.md)[]**

**`Default value` options: `object`**

| Name | Type |
| ------ | ------ |
| mode | "quickly" \| "careful" \| "dontRender" |

**Returns:** `void`

___
<a id="savevirtualdata"></a>

###  saveVirtualData

▸ **saveVirtualData**(e: *[Element](../interfaces/_jsx_types_.__global.jsx.element.md)*): `void`

*Implementation of [VirtualElement](../interfaces/_blessed_virtualelement_.virtualelement.md).[saveVirtualData](../interfaces/_blessed_virtualelement_.virtualelement.md#savevirtualdata)*

*Inherited from [VirtualComponent](_blessed_virtualelement_.virtualcomponent.md).[saveVirtualData](_blessed_virtualelement_.virtualcomponent.md#savevirtualdata)*

*Defined in [blessed/virtualElement.ts:34](https://github.com/cancerberoSgx/accursed/blob/978b980/src/blessed/virtualElement.ts#L34)*

**Parameters:**

| Name | Type |
| ------ | ------ |
| e | [Element](../interfaces/_jsx_types_.__global.jsx.element.md) |

**Returns:** `void`

___
<a id="visitdescendants"></a>

###  visitDescendants

▸ **visitDescendants**(v: *[Visitor](../modules/_blessed_node_.md#visitor)*, o?: *[VisitorOptions](../interfaces/_blessed_node_.visitoroptions.md)*): `boolean`

*Inherited from [Component](_jsx_component_.component.md).[visitDescendants](_jsx_component_.component.md#visitdescendants)*

*Defined in [jsx/component.ts:59](https://github.com/cancerberoSgx/accursed/blob/978b980/src/jsx/component.ts#L59)*

**Parameters:**

| Name | Type | Default value |
| ------ | ------ | ------ |
| v | [Visitor](../modules/_blessed_node_.md#visitor) | - |
| `Default value` o | [VisitorOptions](../interfaces/_blessed_node_.visitoroptions.md) |  {} |

**Returns:** `boolean`

___
<a id="createvirtualcomponent"></a>

### `<Static>` createVirtualComponent

▸ **createVirtualComponent**<`T`>(p: *`T`*): [VirtualComponent](_blessed_virtualelement_.virtualcomponent.md)<`T`, `object`>

*Inherited from [VirtualComponent](_blessed_virtualelement_.virtualcomponent.md).[createVirtualComponent](_blessed_virtualelement_.virtualcomponent.md#createvirtualcomponent)*

*Defined in [blessed/virtualElement.ts:39](https://github.com/cancerberoSgx/accursed/blob/978b980/src/blessed/virtualElement.ts#L39)*

**Type parameters:**

#### T 
**Parameters:**

| Name | Type |
| ------ | ------ |
| p | `T` |

**Returns:** [VirtualComponent](_blessed_virtualelement_.virtualcomponent.md)<`T`, `object`>

___
<a id="createvirtualelement"></a>

### `<Static>` createVirtualElement

▸ **createVirtualElement**(c: *`any`*, tagName: *`string`*): `any`

*Inherited from [VirtualComponent](_blessed_virtualelement_.virtualcomponent.md).[createVirtualElement](_blessed_virtualelement_.virtualcomponent.md#createvirtualelement)*

*Defined in [blessed/virtualElement.ts:31](https://github.com/cancerberoSgx/accursed/blob/978b980/src/blessed/virtualElement.ts#L31)*

**Parameters:**

| Name | Type |
| ------ | ------ |
| c | `any` |
| tagName | `string` |

**Returns:** `any`

___
<a id="isvirtualcomponent"></a>

### `<Static>` isVirtualComponent

▸ **isVirtualComponent**(c: *`any`*): `boolean`

*Inherited from [VirtualComponent](_blessed_virtualelement_.virtualcomponent.md).[isVirtualComponent](_blessed_virtualelement_.virtualcomponent.md#isvirtualcomponent)*

*Defined in [blessed/virtualElement.ts:25](https://github.com/cancerberoSgx/accursed/blob/978b980/src/blessed/virtualElement.ts#L25)*

**Parameters:**

| Name | Type |
| ------ | ------ |
| c | `any` |

**Returns:** `boolean`

___
<a id="isvirtualelement"></a>

### `<Static>` isVirtualElement

▸ **isVirtualElement**(c: *`any`*): `boolean`

*Inherited from [VirtualComponent](_blessed_virtualelement_.virtualcomponent.md).[isVirtualElement](_blessed_virtualelement_.virtualcomponent.md#isvirtualelement)*

*Defined in [blessed/virtualElement.ts:28](https://github.com/cancerberoSgx/accursed/blob/978b980/src/blessed/virtualElement.ts#L28)*

**Parameters:**

| Name | Type |
| ------ | ------ |
| c | `any` |

**Returns:** `boolean`

___

