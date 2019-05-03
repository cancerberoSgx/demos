[accursed](../README.md) > ["jsx-components/maximize"](../modules/_jsx_components_maximize_.md) > [Maximize](../classes/_jsx_components_maximize_.maximize.md)

# Class: Maximize

Will add maximize/restore controllers to its child automatically. In the following example, we wrap the `box`with `Maximize` and it will automatically add "Maximize" button at the top-right corner and when maximized it will also be "Restore" button. It relies on setMaximized() utility for this. Example:

```
<Maximize>
<box
width="100%"
height="100%"
focusable={true}
ref={React.createRef<Box>(c => (this.editorContainer = c))}
/>
</Maximize>
```

## Type parameters
#### P 
## Hierarchy

 [Component](_jsx_component_.component.md)<[MaximizeProps](../interfaces/_jsx_components_maximize_.maximizeprops.md), `__type`>

**↳ Maximize**

## Index

### Constructors

* [constructor](_jsx_components_maximize_.maximize.md#constructor)

### Properties

* [_jsxChildrenProps](_jsx_components_maximize_.maximize.md#_jsxchildrenprops)
* [_saveJSXChildrenProps](_jsx_components_maximize_.maximize.md#_savejsxchildrenprops)
* [blessedElement](_jsx_components_maximize_.maximize.md#blessedelement)
* [props](_jsx_components_maximize_.maximize.md#props)
* [state](_jsx_components_maximize_.maximize.md#state)

### Accessors

* [element](_jsx_components_maximize_.maximize.md#element)
* [screen](_jsx_components_maximize_.maximize.md#screen)
* [type](_jsx_components_maximize_.maximize.md#type)

### Methods

* [filterChildren](_jsx_components_maximize_.maximize.md#filterchildren)
* [filterDescendants](_jsx_components_maximize_.maximize.md#filterdescendants)
* [findChildren](_jsx_components_maximize_.maximize.md#findchildren)
* [findDescendant](_jsx_components_maximize_.maximize.md#finddescendant)
* [getContent](_jsx_components_maximize_.maximize.md#getcontent)
* [getDescendantNamed](_jsx_components_maximize_.maximize.md#getdescendantnamed)
* [getElementData](_jsx_components_maximize_.maximize.md#getelementdata)
* [render](_jsx_components_maximize_.maximize.md#render)
* [replaceChildren](_jsx_components_maximize_.maximize.md#replacechildren)
* [toggleMaximized](_jsx_components_maximize_.maximize.md#togglemaximized)
* [visitDescendants](_jsx_components_maximize_.maximize.md#visitdescendants)

### Object literals

* [defaultProps](_jsx_components_maximize_.maximize.md#defaultprops)

---

## Constructors

<a id="constructor"></a>

###  constructor

⊕ **new Maximize**(props: *`P`*, state: *`__type`*): [Maximize](_jsx_components_maximize_.maximize.md)

*Inherited from [Component](_jsx_component_.component.md).[constructor](_jsx_component_.component.md#constructor)*

*Defined in [jsx/component.ts:27](https://github.com/cancerberoSgx/accursed/blob/978b980/src/jsx/component.ts#L27)*

**Parameters:**

| Name | Type |
| ------ | ------ |
| props | `P` |
| state | `__type` |

**Returns:** [Maximize](_jsx_components_maximize_.maximize.md)

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

If true then JSX children props will be save on property [\_jsxChildrenProps](_jsx_components_maximize_.maximize.md#_jsxchildrenprops). Component subclasses needing this information (like Virtual component parent) can override it.

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

**● state**: *`__type`*

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

▸ **render**(): [Element](../interfaces/_jsx_types_.__global.jsx.element.md)<`P`>

*Overrides [Component](_jsx_component_.component.md).[render](_jsx_component_.component.md#render)*

*Defined in [jsx-components/maximize.tsx:52](https://github.com/cancerberoSgx/accursed/blob/978b980/src/jsx-components/maximize.tsx#L52)*

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
<a id="togglemaximized"></a>

###  toggleMaximized

▸ **toggleMaximized**(container: *[Element](../interfaces/_jsx_types_.__global.jsx.element.md)*, btn: *[Button](_declarations_blessed_d_.widget.button.md)*, label?: *`string`*): `void`

*Defined in [jsx-components/maximize.tsx:76](https://github.com/cancerberoSgx/accursed/blob/978b980/src/jsx-components/maximize.tsx#L76)*

**Parameters:**

| Name | Type |
| ------ | ------ |
| container | [Element](../interfaces/_jsx_types_.__global.jsx.element.md) |
| btn | [Button](_declarations_blessed_d_.widget.button.md) |
| `Optional` label | `string` |

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

## Object literals

<a id="defaultprops"></a>

### `<Static>``<Private>` defaultProps

**defaultProps**: *`object`*

*Defined in [jsx-components/maximize.tsx:47](https://github.com/cancerberoSgx/accursed/blob/978b980/src/jsx-components/maximize.tsx#L47)*

<a id="defaultprops.maximizelabel"></a>

####  maximizeLabel

**● maximizeLabel**: *`string`* = " ⤡ maximize"

*Defined in [jsx-components/maximize.tsx:49](https://github.com/cancerberoSgx/accursed/blob/978b980/src/jsx-components/maximize.tsx#L49)*

___
<a id="defaultprops.restorelabel"></a>

####  restoreLabel

**● restoreLabel**: *`string`* = " ⤵ restore"

*Defined in [jsx-components/maximize.tsx:48](https://github.com/cancerberoSgx/accursed/blob/978b980/src/jsx-components/maximize.tsx#L48)*

___
<a id="defaultprops.title"></a>

####  title

**● title**: *`string`* = ""

*Defined in [jsx-components/maximize.tsx:50](https://github.com/cancerberoSgx/accursed/blob/978b980/src/jsx-components/maximize.tsx#L50)*

___

___

