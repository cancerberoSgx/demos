[accursed](../README.md) > ["jsx-components/tabPanel"](../modules/_jsx_components_tabpanel_.md) > [TabPanel](../classes/_jsx_components_tabpanel_.tabpanel.md)

# Class: TabPanel

Example:

```
<TabPanel activeStyle={{ fg: 'red', underline: true }} inactiveStyle={{ fg: 'blue', underline: false }}>
<Tab active={true}>
<TabLabel style={{ focus: { bg: 'yellow' } }}>tab 1</TabLabel>
<TabBody>
body1
{words().join(' ')}
<Br />
<button content={string()} border="line" focusable={true} /> <Br />
{words().join(' ')}
<Br />
<button content="button1" border="line" focusable={true} /> <Br />
{words().join(' ')}
</TabBody>
{}
</Tab>
<Tab>
<TabLabel style={{ focus: { bg: 'yellow' } }}>tab 2</TabLabel>
<TabBody>
body2
{words().join(' ')}
<Br />
<button content={string()} border="line" /> <Br />
{words().join(' ')}
<Br />
<button content="button2" border="line" /> <Br />
{words().join(' ')}
</TabBody>
{}
</Tab>
{}
</TabPanel>
```

## Type parameters
#### S 
#### P 
## Hierarchy

 [Component](_jsx_component_.component.md)<[TabPanelProps](../interfaces/_jsx_components_tabpanel_.tabpanelprops.md)>

**↳ TabPanel**

## Index

### Constructors

* [constructor](_jsx_components_tabpanel_.tabpanel.md#constructor)

### Properties

* [_jsxChildrenProps](_jsx_components_tabpanel_.tabpanel.md#_jsxchildrenprops)
* [_saveJSXChildrenProps](_jsx_components_tabpanel_.tabpanel.md#_savejsxchildrenprops)
* [blessedElement](_jsx_components_tabpanel_.tabpanel.md#blessedelement)
* [props](_jsx_components_tabpanel_.tabpanel.md#props)
* [state](_jsx_components_tabpanel_.tabpanel.md#state)

### Accessors

* [element](_jsx_components_tabpanel_.tabpanel.md#element)
* [screen](_jsx_components_tabpanel_.tabpanel.md#screen)
* [type](_jsx_components_tabpanel_.tabpanel.md#type)

### Methods

* [_selectTabNamed](_jsx_components_tabpanel_.tabpanel.md#_selecttabnamed)
* [filterChildren](_jsx_components_tabpanel_.tabpanel.md#filterchildren)
* [filterDescendants](_jsx_components_tabpanel_.tabpanel.md#filterdescendants)
* [findChildren](_jsx_components_tabpanel_.tabpanel.md#findchildren)
* [findDescendant](_jsx_components_tabpanel_.tabpanel.md#finddescendant)
* [getContent](_jsx_components_tabpanel_.tabpanel.md#getcontent)
* [getDescendantNamed](_jsx_components_tabpanel_.tabpanel.md#getdescendantnamed)
* [getElementData](_jsx_components_tabpanel_.tabpanel.md#getelementdata)
* [insertTab](_jsx_components_tabpanel_.tabpanel.md#inserttab)
* [render](_jsx_components_tabpanel_.tabpanel.md#render)
* [replaceChildren](_jsx_components_tabpanel_.tabpanel.md#replacechildren)
* [selectTab](_jsx_components_tabpanel_.tabpanel.md#selecttab)
* [visitDescendants](_jsx_components_tabpanel_.tabpanel.md#visitdescendants)
* [isBody](_jsx_components_tabpanel_.tabpanel.md#isbody)
* [isLabel](_jsx_components_tabpanel_.tabpanel.md#islabel)

---

## Constructors

<a id="constructor"></a>

###  constructor

⊕ **new TabPanel**(props: *`P`*, state: *`S`*): [TabPanel](_jsx_components_tabpanel_.tabpanel.md)

*Inherited from [Component](_jsx_component_.component.md).[constructor](_jsx_component_.component.md#constructor)*

*Defined in [jsx/component.ts:27](https://github.com/cancerberoSgx/accursed/blob/978b980/src/jsx/component.ts#L27)*

**Parameters:**

| Name | Type |
| ------ | ------ |
| props | `P` |
| state | `S` |

**Returns:** [TabPanel](_jsx_components_tabpanel_.tabpanel.md)

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

**● _saveJSXChildrenProps**: *`boolean`* = true

*Overrides [Component](_jsx_component_.component.md).[_saveJSXChildrenProps](_jsx_component_.component.md#_savejsxchildrenprops)*

*Defined in jsx-components/tabPanel.tsx:77*

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

<a id="_selecttabnamed"></a>

### `<Protected>` _selectTabNamed

▸ **_selectTabNamed**(tabName: *`String`*): `void`

*Defined in jsx-components/tabPanel.tsx:125*

**Parameters:**

| Name | Type |
| ------ | ------ |
| tabName | `String` |

**Returns:** `void`

___
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
<a id="inserttab"></a>

###  insertTab

▸ **insertTab**(tabProps: *`Partial`<[TabProps](../interfaces/_jsx_components_tabpanel_.tabprops.md)>*, labelProps: *`Partial`<[TabLabelProps](../interfaces/_jsx_components_tabpanel_.tablabelprops.md)>*, bodyProps: *[TabBodyProps](../interfaces/_jsx_components_tabpanel_.tabbodyprops.md)*, index: *`number`*): `void`

*Defined in jsx-components/tabPanel.tsx:152*

**Parameters:**

| Name | Type |
| ------ | ------ |
| tabProps | `Partial`<[TabProps](../interfaces/_jsx_components_tabpanel_.tabprops.md)> |
| labelProps | `Partial`<[TabLabelProps](../interfaces/_jsx_components_tabpanel_.tablabelprops.md)> |
| bodyProps | [TabBodyProps](../interfaces/_jsx_components_tabpanel_.tabbodyprops.md) |
| index | `number` |

**Returns:** `void`

___
<a id="render"></a>

###  render

▸ **render**(): [Element](../interfaces/_jsx_types_.__global.jsx.element.md)<`P`>

*Overrides [Component](_jsx_component_.component.md).[render](_jsx_component_.component.md#render)*

*Defined in jsx-components/tabPanel.tsx:79*

**Returns:** [Element](../interfaces/_jsx_types_.__global.jsx.element.md)<`P`>

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
<a id="selecttab"></a>

###  selectTab

▸ **selectTab**(tabIndex: *`number`*): `void`

*Defined in jsx-components/tabPanel.tsx:133*

**Parameters:**

| Name | Type |
| ------ | ------ |
| tabIndex | `number` |

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
<a id="isbody"></a>

### `<Static>``<Protected>` isBody

▸ **isBody**(d: *[Node](_declarations_blessed_d_.widgets.node.md)*): `boolean`

*Defined in jsx-components/tabPanel.tsx:207*

**Parameters:**

| Name | Type |
| ------ | ------ |
| d | [Node](_declarations_blessed_d_.widgets.node.md) |

**Returns:** `boolean`

___
<a id="islabel"></a>

### `<Static>` isLabel

▸ **isLabel**(e: *[Node](_declarations_blessed_d_.widgets.node.md)*): `boolean`

*Defined in jsx-components/tabPanel.tsx:211*

**Parameters:**

| Name | Type |
| ------ | ------ |
| e | [Node](_declarations_blessed_d_.widgets.node.md) |

**Returns:** `boolean`

___

