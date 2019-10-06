[accursed](../README.md) › [Globals](../globals.md) › ["jsx/types"](../modules/_jsx_types_.md) › [BlessedJsx](_jsx_types_.blessedjsx.md)

# Interface: BlessedJsx

Type of the `React` object as in `React.createElement`.

Note: it could have another name than React, but if so tsconfig needs to be configured (JSXFactory) so for
simplicity we name the instance `React`

## Hierarchy

* **BlessedJsx**

## Implemented by

* [BlessedJsxImpl](../classes/_jsx_createelement_.blessedjsximpl.md)

## Index

### Methods

* [addAfterElementCreatedListener](_jsx_types_.blessedjsx.md#addafterelementcreatedlistener)
* [addAfterRenderListener](_jsx_types_.blessedjsx.md#addafterrenderlistener)
* [addBeforeAppendChildListener](_jsx_types_.blessedjsx.md#addbeforeappendchildlistener)
* [addBeforeElementCreatedListener](_jsx_types_.blessedjsx.md#addbeforeelementcreatedlistener)
* [addIntrinsicElementConstructors](_jsx_types_.blessedjsx.md#addintrinsicelementconstructors)
* [createElement](_jsx_types_.blessedjsx.md#createelement)
* [createRef](_jsx_types_.blessedjsx.md#createref)
* [render](_jsx_types_.blessedjsx.md#render)

## Methods

###  addAfterElementCreatedListener

▸ **addAfterElementCreatedListener**(`l`: [AfterElementCreatedListener](../modules/_jsx_types_.md#afterelementcreatedlistener)): *void*

*Defined in [jsx/types.ts:223](https://github.com/cancerberoSgx/accursed/blob/468bf3c/src/jsx/types.ts#L223)*

add listeners that will be notifies just after the Blessed Element instance is created. Attributes and
children have not yet been set, besides blessed options native ones.

**Parameters:**

Name | Type |
------ | ------ |
`l` | [AfterElementCreatedListener](../modules/_jsx_types_.md#afterelementcreatedlistener) |

**Returns:** *void*

___

###  addAfterRenderListener

▸ **addAfterRenderListener**(`l`: [AfterRenderListener](../modules/_jsx_types_.md#afterrenderlistener)): *void*

*Defined in [jsx/types.ts:241](https://github.com/cancerberoSgx/accursed/blob/468bf3c/src/jsx/types.ts#L241)*

Add listeners that will be called after React.render() call finished rendering a whole hierarchy of items

**Parameters:**

Name | Type |
------ | ------ |
`l` | [AfterRenderListener](../modules/_jsx_types_.md#afterrenderlistener) |

**Returns:** *void*

___

###  addBeforeAppendChildListener

▸ **addBeforeAppendChildListener**(`l`: [BeforeAppendChildListener](../modules/_jsx_types_.md#beforeappendchildlistener)): *void*

*Defined in [jsx/types.ts:228](https://github.com/cancerberoSgx/accursed/blob/468bf3c/src/jsx/types.ts#L228)*

add listeners that will be notified just before a child is appended to its parent blessed element even
for notes created from JSXText. If any listener return true the notification chain will stop, the
children won't be appended to the element.

**Parameters:**

Name | Type |
------ | ------ |
`l` | [BeforeAppendChildListener](../modules/_jsx_types_.md#beforeappendchildlistener) |

**Returns:** *void*

___

###  addBeforeElementCreatedListener

▸ **addBeforeElementCreatedListener**(`l`: [BeforeElementCreatedListener](../modules/_jsx_types_.md#beforeelementcreatedlistener)): *void*

*Defined in [jsx/types.ts:236](https://github.com/cancerberoSgx/accursed/blob/468bf3c/src/jsx/types.ts#L236)*

add listeners that will be notified just before the blessed.foo() function is call with all the options
 as they are (normalized and valid).Children are blessed elements unless the TextNodes that are still
 literals so be careful!. If any of the listeners returns a blessed element, it will interrupt the
 listener chain and that instance will be used instead of calling the blessed function.

**Parameters:**

Name | Type |
------ | ------ |
`l` | [BeforeElementCreatedListener](../modules/_jsx_types_.md#beforeelementcreatedlistener) |

**Returns:** *void*

___

###  addIntrinsicElementConstructors

▸ **addIntrinsicElementConstructors**(`blessedElementConstructors`: object): *void*

*Defined in [jsx/types.ts:256](https://github.com/cancerberoSgx/accursed/blob/468bf3c/src/jsx/types.ts#L256)*

By default, accursed supports only blessed element intrinsic elements, and the creator functions for a
gigen tag name is taken from the blessed namespace as in `require('blessed').button({...})`. With this
method, users users can mix third party blessed object creators, like  blessed--contrib for creating more
intrinsic elements. If so they should also augment the global JSX namespace if they want to support
TypeScript.

**Parameters:**

Name | Type |
------ | ------ |
`blessedElementConstructors` | object |

**Returns:** *void*

___

###  createElement

▸ **createElement**(`tag`: [ElementType](../modules/_jsx_types_.__global.jsx.md#elementtype), `attrs`: [BlessedJsxAttrs](../modules/_jsx_types_.md#blessedjsxattrs), ...`children`: any[]): *[BlessedJsxNode](../modules/_jsx_types_.__global.jsx.md#blessedjsxnode)*

*Defined in [jsx/types.ts:214](https://github.com/cancerberoSgx/accursed/blob/468bf3c/src/jsx/types.ts#L214)*

JSX.Element to blessed node factory method. i.e. `<box>foo</box>` will be translated to
`React.createElement('box', {}, ['foo'])`.

This method should never be called directly by users, although is called internally when users call
[[React.createEkenebt]]

**Parameters:**

Name | Type |
------ | ------ |
`tag` | [ElementType](../modules/_jsx_types_.__global.jsx.md#elementtype) |
`attrs` | [BlessedJsxAttrs](../modules/_jsx_types_.md#blessedjsxattrs) |
`...children` | any[] |

**Returns:** *[BlessedJsxNode](../modules/_jsx_types_.__global.jsx.md#blessedjsxnode)*

___

###  createRef

▸ **createRef**<**T**>(`callback?`: function): *[RefObject](_jsx_types_.refobject.md)‹T›*

*Defined in [jsx/types.ts:247](https://github.com/cancerberoSgx/accursed/blob/468bf3c/src/jsx/types.ts#L247)*

Creates a react-like Ref object to associate blessed elements with variables in the code at render-time.
See https://reactjs.org/docs/refs-and-the-dom.html.

**Type parameters:**

▪ **T**: *[Element](_jsx_types_.__global.jsx.element.md) | [Component](../classes/_jsx_component_.component.md)*

**Parameters:**

▪`Optional`  **callback**: *function*

▸ (`current`: T | undefined): *void*

**Parameters:**

Name | Type |
------ | ------ |
`current` | T &#124; undefined |

**Returns:** *[RefObject](_jsx_types_.refobject.md)‹T›*

___

###  render

▸ **render**(`e`: [Element](_jsx_types_.__global.jsx.element.md), `options?`: [RenderOptions](_jsx_types_.renderoptions.md)): *[Element](_jsx_types_.__global.jsx.element.md)*

*Defined in [jsx/types.ts:219](https://github.com/cancerberoSgx/accursed/blob/468bf3c/src/jsx/types.ts#L219)*

Creates a blessed.element from given JSX expression. Will create blessed nodes recursively, bottom-up.

**Parameters:**

Name | Type |
------ | ------ |
`e` | [Element](_jsx_types_.__global.jsx.element.md) |
`options?` | [RenderOptions](_jsx_types_.renderoptions.md) |

**Returns:** *[Element](_jsx_types_.__global.jsx.element.md)*
