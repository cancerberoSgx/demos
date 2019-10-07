[accursed](../README.md) › [Globals](../globals.md) › ["jsx/createElement"](../modules/_jsx_createelement_.md) › [BlessedJsxImpl](_jsx_createelement_.blessedjsximpl.md)

# Class: BlessedJsxImpl

In this implementation, all the work is dont by createElement, that returns ready to use blessed elements.
Attributes and children are only implemented for intrinsic elements and all blessed types in
JSX.IntrinsicElement should be supported. All event handlers in types are supported.

## Hierarchy

* **BlessedJsxImpl**

## Implements

* [BlessedJsx](../interfaces/_jsx_types_.blessedjsx.md)

## Index

### Constructors

* [constructor](_jsx_createelement_.blessedjsximpl.md#constructor)

### Properties

* [afterElementCreatedListeners](_jsx_createelement_.blessedjsximpl.md#private-afterelementcreatedlisteners)
* [afterRenderListeners](_jsx_createelement_.blessedjsximpl.md#private-afterrenderlisteners)
* [beforeAppendChildListeners](_jsx_createelement_.blessedjsximpl.md#private-beforeappendchildlisteners)
* [beforeElementCreatedListeners](_jsx_createelement_.blessedjsximpl.md#private-beforeelementcreatedlisteners)
* [defaultPluginsInstalled](_jsx_createelement_.blessedjsximpl.md#private-defaultpluginsinstalled)
* [options](_jsx_createelement_.blessedjsximpl.md#protected-options)

### Methods

* [_addChildrenArray](_jsx_createelement_.blessedjsximpl.md#private-_addchildrenarray)
* [addAfterElementCreatedListener](_jsx_createelement_.blessedjsximpl.md#addafterelementcreatedlistener)
* [addAfterRenderListener](_jsx_createelement_.blessedjsximpl.md#addafterrenderlistener)
* [addBeforeAppendChildListener](_jsx_createelement_.blessedjsximpl.md#addbeforeappendchildlistener)
* [addBeforeElementCreatedListener](_jsx_createelement_.blessedjsximpl.md#addbeforeelementcreatedlistener)
* [addIntrinsicElementConstructors](_jsx_createelement_.blessedjsximpl.md#addintrinsicelementconstructors)
* [appendChild](_jsx_createelement_.blessedjsximpl.md#protected-appendchild)
* [createElement](_jsx_createelement_.blessedjsximpl.md#createelement)
* [createRef](_jsx_createelement_.blessedjsximpl.md#createref)
* [createTextNode](_jsx_createelement_.blessedjsximpl.md#protected-createtextnode)
* [installAttributesAndChildren](_jsx_createelement_.blessedjsximpl.md#private-installattributesandchildren)
* [installRefs](_jsx_createelement_.blessedjsximpl.md#private-installrefs)
* [intrinsicElementFactory](_jsx_createelement_.blessedjsximpl.md#protected-intrinsicelementfactory)
* [render](_jsx_createelement_.blessedjsximpl.md#render)

### Object literals

* [_intrinsicElementFactory](_jsx_createelement_.blessedjsximpl.md#private-_intrinsicelementfactory)

## Constructors

###  constructor

\+ **new BlessedJsxImpl**(`options`: [Options](../interfaces/_jsx_createelement_.options.md)): *[BlessedJsxImpl](_jsx_createelement_.blessedjsximpl.md)*

*Defined in [jsx/createElement.ts:41](https://github.com/cancerberoSgx/accursed/blob/5b2518e/src/jsx/createElement.ts#L41)*

**Parameters:**

Name | Type | Default |
------ | ------ | ------ |
`options` | [Options](../interfaces/_jsx_createelement_.options.md) |  {} |

**Returns:** *[BlessedJsxImpl](_jsx_createelement_.blessedjsximpl.md)*

## Properties

### `Private` afterElementCreatedListeners

• **afterElementCreatedListeners**: *[AfterElementCreatedListener](../modules/_jsx_types_.md#afterelementcreatedlistener)[]* =  []

*Defined in [jsx/createElement.ts:298](https://github.com/cancerberoSgx/accursed/blob/5b2518e/src/jsx/createElement.ts#L298)*

___

### `Private` afterRenderListeners

• **afterRenderListeners**: *[AfterRenderListener](../modules/_jsx_types_.md#afterrenderlistener)[]* =  []

*Defined in [jsx/createElement.ts:313](https://github.com/cancerberoSgx/accursed/blob/5b2518e/src/jsx/createElement.ts#L313)*

___

### `Private` beforeAppendChildListeners

• **beforeAppendChildListeners**: *[BeforeAppendChildListener](../modules/_jsx_types_.md#beforeappendchildlistener)[]* =  []

*Defined in [jsx/createElement.ts:303](https://github.com/cancerberoSgx/accursed/blob/5b2518e/src/jsx/createElement.ts#L303)*

___

### `Private` beforeElementCreatedListeners

• **beforeElementCreatedListeners**: *[BeforeElementCreatedListener](../modules/_jsx_types_.md#beforeelementcreatedlistener)[]* =  []

*Defined in [jsx/createElement.ts:308](https://github.com/cancerberoSgx/accursed/blob/5b2518e/src/jsx/createElement.ts#L308)*

___

### `Private` defaultPluginsInstalled

• **defaultPluginsInstalled**: *boolean* = false

*Defined in [jsx/createElement.ts:45](https://github.com/cancerberoSgx/accursed/blob/5b2518e/src/jsx/createElement.ts#L45)*

___

### `Protected` options

• **options**: *[Options](../interfaces/_jsx_createelement_.options.md)*

*Defined in [jsx/createElement.ts:43](https://github.com/cancerberoSgx/accursed/blob/5b2518e/src/jsx/createElement.ts#L43)*

## Methods

### `Private` _addChildrenArray

▸ **_addChildrenArray**(`c`: any[], `el`: [BlessedElement](_declarations_blessed_d_.widgets.blessedelement.md)): *void*

*Defined in [jsx/createElement.ts:255](https://github.com/cancerberoSgx/accursed/blob/5b2518e/src/jsx/createElement.ts#L255)*

**Parameters:**

Name | Type |
------ | ------ |
`c` | any[] |
`el` | [BlessedElement](_declarations_blessed_d_.widgets.blessedelement.md) |

**Returns:** *void*

___

###  addAfterElementCreatedListener

▸ **addAfterElementCreatedListener**(`l`: [AfterElementCreatedListener](../modules/_jsx_types_.md#afterelementcreatedlistener)): *void*

*Implementation of [BlessedJsx](../interfaces/_jsx_types_.blessedjsx.md)*

*Defined in [jsx/createElement.ts:299](https://github.com/cancerberoSgx/accursed/blob/5b2518e/src/jsx/createElement.ts#L299)*

**Parameters:**

Name | Type |
------ | ------ |
`l` | [AfterElementCreatedListener](../modules/_jsx_types_.md#afterelementcreatedlistener) |

**Returns:** *void*

___

###  addAfterRenderListener

▸ **addAfterRenderListener**(`l`: [AfterRenderListener](../modules/_jsx_types_.md#afterrenderlistener)): *void*

*Implementation of [BlessedJsx](../interfaces/_jsx_types_.blessedjsx.md)*

*Defined in [jsx/createElement.ts:314](https://github.com/cancerberoSgx/accursed/blob/5b2518e/src/jsx/createElement.ts#L314)*

**Parameters:**

Name | Type |
------ | ------ |
`l` | [AfterRenderListener](../modules/_jsx_types_.md#afterrenderlistener) |

**Returns:** *void*

___

###  addBeforeAppendChildListener

▸ **addBeforeAppendChildListener**(`l`: [BeforeAppendChildListener](../modules/_jsx_types_.md#beforeappendchildlistener)): *void*

*Implementation of [BlessedJsx](../interfaces/_jsx_types_.blessedjsx.md)*

*Defined in [jsx/createElement.ts:304](https://github.com/cancerberoSgx/accursed/blob/5b2518e/src/jsx/createElement.ts#L304)*

**Parameters:**

Name | Type |
------ | ------ |
`l` | [BeforeAppendChildListener](../modules/_jsx_types_.md#beforeappendchildlistener) |

**Returns:** *void*

___

###  addBeforeElementCreatedListener

▸ **addBeforeElementCreatedListener**(`l`: [BeforeElementCreatedListener](../modules/_jsx_types_.md#beforeelementcreatedlistener)): *void*

*Implementation of [BlessedJsx](../interfaces/_jsx_types_.blessedjsx.md)*

*Defined in [jsx/createElement.ts:309](https://github.com/cancerberoSgx/accursed/blob/5b2518e/src/jsx/createElement.ts#L309)*

**Parameters:**

Name | Type |
------ | ------ |
`l` | [BeforeElementCreatedListener](../modules/_jsx_types_.md#beforeelementcreatedlistener) |

**Returns:** *void*

___

###  addIntrinsicElementConstructors

▸ **addIntrinsicElementConstructors**(`blessedElementConstructors`: object): *void*

*Defined in [jsx/createElement.ts:33](https://github.com/cancerberoSgx/accursed/blob/5b2518e/src/jsx/createElement.ts#L33)*

**Parameters:**

Name | Type |
------ | ------ |
`blessedElementConstructors` | object |

**Returns:** *void*

___

### `Protected` appendChild

▸ **appendChild**(`el`: [Element](../interfaces/_jsx_types_.__global.jsx.element.md), `child`: [Element](../interfaces/_jsx_types_.__global.jsx.element.md)): *any*

*Defined in [jsx/createElement.ts:274](https://github.com/cancerberoSgx/accursed/blob/5b2518e/src/jsx/createElement.ts#L274)*

all children blessed nodes, even from text  are appended to the blessed element using this method, so
subclasses can override to do something about it. will notify beforeAppendChildListeners and if any
return true the child won't be appended

**Parameters:**

Name | Type |
------ | ------ |
`el` | [Element](../interfaces/_jsx_types_.__global.jsx.element.md) |
`child` | [Element](../interfaces/_jsx_types_.__global.jsx.element.md) |

**Returns:** *any*

___

###  createElement

▸ **createElement**(`tag`: [ElementType](../modules/_jsx_types_.__global.jsx.md#elementtype), `attrs`: [BlessedJsxAttrs](../modules/_jsx_types_.md#blessedjsxattrs), ...`children`: any[]): *__type*

*Implementation of [BlessedJsx](../interfaces/_jsx_types_.blessedjsx.md)*

*Defined in [jsx/createElement.ts:63](https://github.com/cancerberoSgx/accursed/blob/5b2518e/src/jsx/createElement.ts#L63)*

**Parameters:**

Name | Type |
------ | ------ |
`tag` | [ElementType](../modules/_jsx_types_.__global.jsx.md#elementtype) |
`attrs` | [BlessedJsxAttrs](../modules/_jsx_types_.md#blessedjsxattrs) |
`...children` | any[] |

**Returns:** *__type*

___

###  createRef

▸ **createRef**<**T**>(`callback?`: function): *[RefObject](../interfaces/_jsx_types_.refobject.md)‹T›*

*Defined in [jsx/createElement.ts:317](https://github.com/cancerberoSgx/accursed/blob/5b2518e/src/jsx/createElement.ts#L317)*

**Type parameters:**

▪ **T**: *[Element](../interfaces/_jsx_types_.__global.jsx.element.md) | [Component](_jsx_component_.component.md)*

**Parameters:**

▪`Optional`  **callback**: *function*

▸ (`current`: T | undefined): *any*

**Parameters:**

Name | Type |
------ | ------ |
`current` | T &#124; undefined |

**Returns:** *[RefObject](../interfaces/_jsx_types_.refobject.md)‹T›*

___

### `Protected` createTextNode

▸ **createTextNode**(`c`: [BlessedJsxText](../modules/_jsx_types_.__global.jsx.md#blessedjsxtext), `el`: [Element](../interfaces/_jsx_types_.__global.jsx.element.md)): *[TextElement](_declarations_blessed_d_.widgets.textelement.md)‹[TextOptions](../interfaces/_declarations_blessed_d_.widgets.textoptions.md)›*

*Defined in [jsx/createElement.ts:291](https://github.com/cancerberoSgx/accursed/blob/5b2518e/src/jsx/createElement.ts#L291)*

Default blessed Node factory for text like "foo" in <box>foo</box>

**Parameters:**

Name | Type |
------ | ------ |
`c` | [BlessedJsxText](../modules/_jsx_types_.__global.jsx.md#blessedjsxtext) |
`el` | [Element](../interfaces/_jsx_types_.__global.jsx.element.md) |

**Returns:** *[TextElement](_declarations_blessed_d_.widgets.textelement.md)‹[TextOptions](../interfaces/_declarations_blessed_d_.widgets.textoptions.md)›*

___

### `Private` installAttributesAndChildren

▸ **installAttributesAndChildren**(`jsxNode`: [BlessedJsxNode](../modules/_jsx_types_.__global.jsx.md#blessedjsxnode), `blessedEventMethodAttributes`: any, `artificialEventAttributes`: any, `children`: any[]): *any*

*Defined in [jsx/createElement.ts:168](https://github.com/cancerberoSgx/accursed/blob/5b2518e/src/jsx/createElement.ts#L168)*

**Parameters:**

Name | Type |
------ | ------ |
`jsxNode` | [BlessedJsxNode](../modules/_jsx_types_.__global.jsx.md#blessedjsxnode) |
`blessedEventMethodAttributes` | any |
`artificialEventAttributes` | any |
`children` | any[] |

**Returns:** *any*

___

### `Private` installRefs

▸ **installRefs**(`el`: [BlessedJsxNode](../modules/_jsx_types_.__global.jsx.md#blessedjsxnode), `component`: [Component](_jsx_component_.component.md)): *any*

*Defined in [jsx/createElement.ts:151](https://github.com/cancerberoSgx/accursed/blob/5b2518e/src/jsx/createElement.ts#L151)*

**Parameters:**

Name | Type |
------ | ------ |
`el` | [BlessedJsxNode](../modules/_jsx_types_.__global.jsx.md#blessedjsxnode) |
`component` | [Component](_jsx_component_.component.md) |

**Returns:** *any*

___

### `Protected` intrinsicElementFactory

▸ **intrinsicElementFactory**<**O**, **T**>(`type`: string): *[blessedElementConstructor](../modules/_jsx_types_.md#blessedelementconstructor)‹O, T› | undefined*

*Defined in [jsx/createElement.ts:27](https://github.com/cancerberoSgx/accursed/blob/5b2518e/src/jsx/createElement.ts#L27)*

**Type parameters:**

▪ **O**: *[ElementOptions](../interfaces/_declarations_blessed_d_.widgets.elementoptions.md)*

▪ **T**: *[Element](../interfaces/_jsx_types_.__global.jsx.element.md)‹O›*

**Parameters:**

Name | Type |
------ | ------ |
`type` | string |

**Returns:** *[blessedElementConstructor](../modules/_jsx_types_.md#blessedelementconstructor)‹O, T› | undefined*

___

###  render

▸ **render**(`e`: [Element](../interfaces/_jsx_types_.__global.jsx.element.md)): *any*

*Defined in [jsx/createElement.ts:47](https://github.com/cancerberoSgx/accursed/blob/5b2518e/src/jsx/createElement.ts#L47)*

**Parameters:**

Name | Type |
------ | ------ |
`e` | [Element](../interfaces/_jsx_types_.__global.jsx.element.md) |

**Returns:** *any*

## Object literals

### `Private` _intrinsicElementFactory

### ▪ **_intrinsicElementFactory**: *object*

*Defined in [jsx/createElement.ts:26](https://github.com/cancerberoSgx/accursed/blob/5b2518e/src/jsx/createElement.ts#L26)*
