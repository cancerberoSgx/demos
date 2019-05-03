[accursed](../README.md) > ["jsx/createElement"](../modules/_jsx_createelement_.md) > [BlessedJsxImpl](../classes/_jsx_createelement_.blessedjsximpl.md)

# Class: BlessedJsxImpl

In this implementation, all the work is dont by createElement, that returns ready to use blessed elements. Attributes and children are only implemented for intrinsic elements and all blessed types in JSX.IntrinsicElement should be supported. All event handlers in types are supported.

## Hierarchy

**BlessedJsxImpl**

## Implements

* [BlessedJsx](../interfaces/_jsx_types_.blessedjsx.md)

## Index

### Constructors

* [constructor](_jsx_createelement_.blessedjsximpl.md#constructor)

### Properties

* [afterElementCreatedListeners](_jsx_createelement_.blessedjsximpl.md#afterelementcreatedlisteners)
* [afterRenderListeners](_jsx_createelement_.blessedjsximpl.md#afterrenderlisteners)
* [beforeAppendChildListeners](_jsx_createelement_.blessedjsximpl.md#beforeappendchildlisteners)
* [beforeElementCreatedListeners](_jsx_createelement_.blessedjsximpl.md#beforeelementcreatedlisteners)
* [defaultPluginsInstalled](_jsx_createelement_.blessedjsximpl.md#defaultpluginsinstalled)
* [options](_jsx_createelement_.blessedjsximpl.md#options)

### Methods

* [_addChildrenArray](_jsx_createelement_.blessedjsximpl.md#_addchildrenarray)
* [addAfterElementCreatedListener](_jsx_createelement_.blessedjsximpl.md#addafterelementcreatedlistener)
* [addAfterRenderListener](_jsx_createelement_.blessedjsximpl.md#addafterrenderlistener)
* [addBeforeAppendChildListener](_jsx_createelement_.blessedjsximpl.md#addbeforeappendchildlistener)
* [addBeforeElementCreatedListener](_jsx_createelement_.blessedjsximpl.md#addbeforeelementcreatedlistener)
* [addIntrinsicElementConstructors](_jsx_createelement_.blessedjsximpl.md#addintrinsicelementconstructors)
* [appendChild](_jsx_createelement_.blessedjsximpl.md#appendchild)
* [createElement](_jsx_createelement_.blessedjsximpl.md#createelement)
* [createRef](_jsx_createelement_.blessedjsximpl.md#createref)
* [createTextNode](_jsx_createelement_.blessedjsximpl.md#createtextnode)
* [installAttributesAndChildren](_jsx_createelement_.blessedjsximpl.md#installattributesandchildren)
* [installRefs](_jsx_createelement_.blessedjsximpl.md#installrefs)
* [intrinsicElementFactory](_jsx_createelement_.blessedjsximpl.md#intrinsicelementfactory)
* [render](_jsx_createelement_.blessedjsximpl.md#render)

### Object literals

* [_intrinsicElementFactory](_jsx_createelement_.blessedjsximpl.md#_intrinsicelementfactory)

---

## Constructors

<a id="constructor"></a>

###  constructor

⊕ **new BlessedJsxImpl**(options?: *[Options](../interfaces/_jsx_createelement_.options.md)*): [BlessedJsxImpl](_jsx_createelement_.blessedjsximpl.md)

*Defined in [jsx/createElement.ts:58](https://github.com/cancerberoSgx/accursed/blob/978b980/src/jsx/createElement.ts#L58)*

**Parameters:**

| Name | Type | Default value |
| ------ | ------ | ------ |
| `Default value` options | [Options](../interfaces/_jsx_createelement_.options.md) |  {} |

**Returns:** [BlessedJsxImpl](_jsx_createelement_.blessedjsximpl.md)

___

## Properties

<a id="afterelementcreatedlisteners"></a>

### `<Private>` afterElementCreatedListeners

**● afterElementCreatedListeners**: *[AfterElementCreatedListener](../modules/_jsx_types_.md#afterelementcreatedlistener)[]* =  []

*Defined in [jsx/createElement.ts:315](https://github.com/cancerberoSgx/accursed/blob/978b980/src/jsx/createElement.ts#L315)*

___
<a id="afterrenderlisteners"></a>

### `<Private>` afterRenderListeners

**● afterRenderListeners**: *[AfterRenderListener](../modules/_jsx_types_.md#afterrenderlistener)[]* =  []

*Defined in [jsx/createElement.ts:330](https://github.com/cancerberoSgx/accursed/blob/978b980/src/jsx/createElement.ts#L330)*

___
<a id="beforeappendchildlisteners"></a>

### `<Private>` beforeAppendChildListeners

**● beforeAppendChildListeners**: *[BeforeAppendChildListener](../modules/_jsx_types_.md#beforeappendchildlistener)[]* =  []

*Defined in [jsx/createElement.ts:320](https://github.com/cancerberoSgx/accursed/blob/978b980/src/jsx/createElement.ts#L320)*

___
<a id="beforeelementcreatedlisteners"></a>

### `<Private>` beforeElementCreatedListeners

**● beforeElementCreatedListeners**: *[BeforeElementCreatedListener](../modules/_jsx_types_.md#beforeelementcreatedlistener)[]* =  []

*Defined in [jsx/createElement.ts:325](https://github.com/cancerberoSgx/accursed/blob/978b980/src/jsx/createElement.ts#L325)*

___
<a id="defaultpluginsinstalled"></a>

### `<Private>` defaultPluginsInstalled

**● defaultPluginsInstalled**: *`boolean`* = false

*Defined in [jsx/createElement.ts:62](https://github.com/cancerberoSgx/accursed/blob/978b980/src/jsx/createElement.ts#L62)*

___
<a id="options"></a>

### `<Protected>` options

**● options**: *[Options](../interfaces/_jsx_createelement_.options.md)*

*Defined in [jsx/createElement.ts:60](https://github.com/cancerberoSgx/accursed/blob/978b980/src/jsx/createElement.ts#L60)*

___

## Methods

<a id="_addchildrenarray"></a>

### `<Private>` _addChildrenArray

▸ **_addChildrenArray**(c: *`any`[]*, el: *[BlessedElement](_declarations_blessed_d_.widgets.blessedelement.md)*): `void`

*Defined in [jsx/createElement.ts:272](https://github.com/cancerberoSgx/accursed/blob/978b980/src/jsx/createElement.ts#L272)*

**Parameters:**

| Name | Type |
| ------ | ------ |
| c | `any`[] |
| el | [BlessedElement](_declarations_blessed_d_.widgets.blessedelement.md) |

**Returns:** `void`

___
<a id="addafterelementcreatedlistener"></a>

###  addAfterElementCreatedListener

▸ **addAfterElementCreatedListener**(l: *[AfterElementCreatedListener](../modules/_jsx_types_.md#afterelementcreatedlistener)*): `void`

*Implementation of [BlessedJsx](../interfaces/_jsx_types_.blessedjsx.md).[addAfterElementCreatedListener](../interfaces/_jsx_types_.blessedjsx.md#addafterelementcreatedlistener)*

*Defined in [jsx/createElement.ts:316](https://github.com/cancerberoSgx/accursed/blob/978b980/src/jsx/createElement.ts#L316)*

**Parameters:**

| Name | Type |
| ------ | ------ |
| l | [AfterElementCreatedListener](../modules/_jsx_types_.md#afterelementcreatedlistener) |

**Returns:** `void`

___
<a id="addafterrenderlistener"></a>

###  addAfterRenderListener

▸ **addAfterRenderListener**(l: *[AfterRenderListener](../modules/_jsx_types_.md#afterrenderlistener)*): `void`

*Implementation of [BlessedJsx](../interfaces/_jsx_types_.blessedjsx.md).[addAfterRenderListener](../interfaces/_jsx_types_.blessedjsx.md#addafterrenderlistener)*

*Defined in [jsx/createElement.ts:331](https://github.com/cancerberoSgx/accursed/blob/978b980/src/jsx/createElement.ts#L331)*

**Parameters:**

| Name | Type |
| ------ | ------ |
| l | [AfterRenderListener](../modules/_jsx_types_.md#afterrenderlistener) |

**Returns:** `void`

___
<a id="addbeforeappendchildlistener"></a>

###  addBeforeAppendChildListener

▸ **addBeforeAppendChildListener**(l: *[BeforeAppendChildListener](../modules/_jsx_types_.md#beforeappendchildlistener)*): `void`

*Implementation of [BlessedJsx](../interfaces/_jsx_types_.blessedjsx.md).[addBeforeAppendChildListener](../interfaces/_jsx_types_.blessedjsx.md#addbeforeappendchildlistener)*

*Defined in [jsx/createElement.ts:321](https://github.com/cancerberoSgx/accursed/blob/978b980/src/jsx/createElement.ts#L321)*

**Parameters:**

| Name | Type |
| ------ | ------ |
| l | [BeforeAppendChildListener](../modules/_jsx_types_.md#beforeappendchildlistener) |

**Returns:** `void`

___
<a id="addbeforeelementcreatedlistener"></a>

###  addBeforeElementCreatedListener

▸ **addBeforeElementCreatedListener**(l: *[BeforeElementCreatedListener](../modules/_jsx_types_.md#beforeelementcreatedlistener)*): `void`

*Implementation of [BlessedJsx](../interfaces/_jsx_types_.blessedjsx.md).[addBeforeElementCreatedListener](../interfaces/_jsx_types_.blessedjsx.md#addbeforeelementcreatedlistener)*

*Defined in [jsx/createElement.ts:326](https://github.com/cancerberoSgx/accursed/blob/978b980/src/jsx/createElement.ts#L326)*

**Parameters:**

| Name | Type |
| ------ | ------ |
| l | [BeforeElementCreatedListener](../modules/_jsx_types_.md#beforeelementcreatedlistener) |

**Returns:** `void`

___
<a id="addintrinsicelementconstructors"></a>

###  addIntrinsicElementConstructors

▸ **addIntrinsicElementConstructors**(blessedElementConstructors: *`object`*): `void`

*Defined in [jsx/createElement.ts:50](https://github.com/cancerberoSgx/accursed/blob/978b980/src/jsx/createElement.ts#L50)*

**Parameters:**

| Name | Type |
| ------ | ------ |
| blessedElementConstructors | `object` |

**Returns:** `void`

___
<a id="appendchild"></a>

### `<Protected>` appendChild

▸ **appendChild**(el: *[Element](../interfaces/_jsx_types_.__global.jsx.element.md)*, child: *[Element](../interfaces/_jsx_types_.__global.jsx.element.md)*): `any`

*Defined in [jsx/createElement.ts:291](https://github.com/cancerberoSgx/accursed/blob/978b980/src/jsx/createElement.ts#L291)*

all children blessed nodes, even from text are appended to the blessed element using this method, so subclasses can override to do something about it. will notify beforeAppendChildListeners and if any return true the child won't be appended

**Parameters:**

| Name | Type |
| ------ | ------ |
| el | [Element](../interfaces/_jsx_types_.__global.jsx.element.md) |
| child | [Element](../interfaces/_jsx_types_.__global.jsx.element.md) |

**Returns:** `any`

___
<a id="createelement"></a>

###  createElement

▸ **createElement**(tag: *[ElementType](../modules/_jsx_types_.__global.jsx.md#elementtype)*, attrs: *[BlessedJsxAttrs](../modules/_jsx_types_.md#blessedjsxattrs)*, ...children: *`any`[]*): `__type`

*Implementation of [BlessedJsx](../interfaces/_jsx_types_.blessedjsx.md).[createElement](../interfaces/_jsx_types_.blessedjsx.md#createelement)*

*Defined in [jsx/createElement.ts:80](https://github.com/cancerberoSgx/accursed/blob/978b980/src/jsx/createElement.ts#L80)*

**Parameters:**

| Name | Type |
| ------ | ------ |
| tag | [ElementType](../modules/_jsx_types_.__global.jsx.md#elementtype) |
| attrs | [BlessedJsxAttrs](../modules/_jsx_types_.md#blessedjsxattrs) |
| `Rest` children | `any`[] |

**Returns:** `__type`

___
<a id="createref"></a>

###  createRef

▸ **createRef**<`T`>(callback?: *`function`*): [RefObject](../interfaces/_jsx_types_.refobject.md)<`T`>

*Defined in [jsx/createElement.ts:334](https://github.com/cancerberoSgx/accursed/blob/978b980/src/jsx/createElement.ts#L334)*

**Type parameters:**

#### T :  [Element](../interfaces/_jsx_types_.__global.jsx.element.md) \| [Component](_jsx_component_.component.md)
**Parameters:**

| Name | Type |
| ------ | ------ |
| `Optional` callback | `function` |

**Returns:** [RefObject](../interfaces/_jsx_types_.refobject.md)<`T`>

___
<a id="createtextnode"></a>

### `<Protected>` createTextNode

▸ **createTextNode**(c: *[BlessedJsxText](../modules/_jsx_types_.__global.jsx.md#blessedjsxtext)*, el: *[Element](../interfaces/_jsx_types_.__global.jsx.element.md)*): [TextElement](_declarations_blessed_d_.widgets.textelement.md)<[TextOptions](../interfaces/_declarations_blessed_d_.widgets.textoptions.md)>

*Defined in [jsx/createElement.ts:308](https://github.com/cancerberoSgx/accursed/blob/978b980/src/jsx/createElement.ts#L308)*

Default blessed Node factory for text like "foo" in foo

**Parameters:**

| Name | Type |
| ------ | ------ |
| c | [BlessedJsxText](../modules/_jsx_types_.__global.jsx.md#blessedjsxtext) |
| el | [Element](../interfaces/_jsx_types_.__global.jsx.element.md) |

**Returns:** [TextElement](_declarations_blessed_d_.widgets.textelement.md)<[TextOptions](../interfaces/_declarations_blessed_d_.widgets.textoptions.md)>

___
<a id="installattributesandchildren"></a>

### `<Private>` installAttributesAndChildren

▸ **installAttributesAndChildren**(jsxNode: *[BlessedJsxNode](../modules/_jsx_types_.__global.jsx.md#blessedjsxnode)*, blessedEventMethodAttributes: *`any`*, artificialEventAttributes: *`any`*, children: *`any`[]*): `any`

*Defined in [jsx/createElement.ts:185](https://github.com/cancerberoSgx/accursed/blob/978b980/src/jsx/createElement.ts#L185)*

**Parameters:**

| Name | Type |
| ------ | ------ |
| jsxNode | [BlessedJsxNode](../modules/_jsx_types_.__global.jsx.md#blessedjsxnode) |
| blessedEventMethodAttributes | `any` |
| artificialEventAttributes | `any` |
| children | `any`[] |

**Returns:** `any`

___
<a id="installrefs"></a>

### `<Private>` installRefs

▸ **installRefs**(el: *[BlessedJsxNode](../modules/_jsx_types_.__global.jsx.md#blessedjsxnode)*, component: *[Component](_jsx_component_.component.md)*): `any`

*Defined in [jsx/createElement.ts:168](https://github.com/cancerberoSgx/accursed/blob/978b980/src/jsx/createElement.ts#L168)*

**Parameters:**

| Name | Type |
| ------ | ------ |
| el | [BlessedJsxNode](../modules/_jsx_types_.__global.jsx.md#blessedjsxnode) |
| component | [Component](_jsx_component_.component.md) |

**Returns:** `any`

___
<a id="intrinsicelementfactory"></a>

### `<Protected>` intrinsicElementFactory

▸ **intrinsicElementFactory**<`O`,`T`>(type: *`string`*): [blessedElementConstructor](../modules/_jsx_types_.md#blessedelementconstructor)<`O`, `T`> \| `undefined`

*Defined in [jsx/createElement.ts:44](https://github.com/cancerberoSgx/accursed/blob/978b980/src/jsx/createElement.ts#L44)*

**Type parameters:**

#### O :  [ElementOptions](../interfaces/_declarations_blessed_d_.widgets.elementoptions.md)
#### T :  [Element](../interfaces/_jsx_types_.__global.jsx.element.md)<`O`>
**Parameters:**

| Name | Type |
| ------ | ------ |
| type | `string` |

**Returns:** [blessedElementConstructor](../modules/_jsx_types_.md#blessedelementconstructor)<`O`, `T`> \| `undefined`

___
<a id="render"></a>

###  render

▸ **render**(e: *[Element](../interfaces/_jsx_types_.__global.jsx.element.md)*): `any`

*Defined in [jsx/createElement.ts:64](https://github.com/cancerberoSgx/accursed/blob/978b980/src/jsx/createElement.ts#L64)*

**Parameters:**

| Name | Type |
| ------ | ------ |
| e | [Element](../interfaces/_jsx_types_.__global.jsx.element.md) |

**Returns:** `any`

___

## Object literals

<a id="_intrinsicelementfactory"></a>

### `<Private>` _intrinsicElementFactory

**_intrinsicElementFactory**: *`object`*

*Defined in [jsx/createElement.ts:43](https://github.com/cancerberoSgx/accursed/blob/978b980/src/jsx/createElement.ts#L43)*

___

