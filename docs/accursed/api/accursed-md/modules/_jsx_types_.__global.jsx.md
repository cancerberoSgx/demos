[accursed](../README.md) > ["jsx/types"](../modules/_jsx_types_.md) > [__global](../modules/_jsx_types_.__global.md) > [JSX](../modules/_jsx_types_.__global.jsx.md)

# Module: JSX

## Index

### Interfaces

* [Element](../interfaces/_jsx_types_.__global.jsx.element.md)
* [ElementAttributesProperty](../interfaces/_jsx_types_.__global.jsx.elementattributesproperty.md)
* [ElementChildrenAttribute](../interfaces/_jsx_types_.__global.jsx.elementchildrenattribute.md)
* [FunctionComponent](../interfaces/_jsx_types_.__global.jsx.functioncomponent.md)
* [IntrinsicElements](../interfaces/_jsx_types_.__global.jsx.intrinsicelements.md)
* [ReactNodeArray](../interfaces/_jsx_types_.__global.jsx.reactnodearray.md)

### Type aliases

* [BlessedJsxChild](_jsx_types_.__global.jsx.md#blessedjsxchild)
* [BlessedJsxFragment](_jsx_types_.__global.jsx.md#blessedjsxfragment)
* [BlessedJsxNode](_jsx_types_.__global.jsx.md#blessedjsxnode)
* [BlessedJsxText](_jsx_types_.__global.jsx.md#blessedjsxtext)
* [ElementType](_jsx_types_.__global.jsx.md#elementtype)
* [OptionsProps](_jsx_types_.__global.jsx.md#optionsprops)
* [PropsWithRef](_jsx_types_.__global.jsx.md#propswithref)

---

## Type aliases

<a id="blessedjsxchild"></a>

###  BlessedJsxChild

**Ƭ BlessedJsxChild**: *[Element](../interfaces/_jsx_types_.__global.jsx.element.md)<`any`> \| [BlessedJsxText](_jsx_types_.__global.jsx.md#blessedjsxtext)*

*Defined in [jsx/types.ts:175](https://github.com/cancerberoSgx/accursed/blob/978b980/src/jsx/types.ts#L175)*

___
<a id="blessedjsxfragment"></a>

###  BlessedJsxFragment

**Ƭ BlessedJsxFragment**: *`__type` \| [ReactNodeArray](../interfaces/_jsx_types_.__global.jsx.reactnodearray.md)*

*Defined in [jsx/types.ts:179](https://github.com/cancerberoSgx/accursed/blob/978b980/src/jsx/types.ts#L179)*

___
<a id="blessedjsxnode"></a>

###  BlessedJsxNode

**Ƭ BlessedJsxNode**: *[BlessedJsxChild](_jsx_types_.__global.jsx.md#blessedjsxchild) \| [BlessedJsxFragment](_jsx_types_.__global.jsx.md#blessedjsxfragment) \| `boolean` \| `null` \| [BlessedElement](../classes/_declarations_blessed_d_.widgets.blessedelement.md)[] \| [BlessedElement](../classes/_declarations_blessed_d_.widgets.blessedelement.md)*

*Defined in [jsx/types.ts:182](https://github.com/cancerberoSgx/accursed/blob/978b980/src/jsx/types.ts#L182)*

___
<a id="blessedjsxtext"></a>

###  BlessedJsxText

**Ƭ BlessedJsxText**: *`string` \| `number`*

*Defined in [jsx/types.ts:173](https://github.com/cancerberoSgx/accursed/blob/978b980/src/jsx/types.ts#L173)*

___
<a id="elementtype"></a>

###  ElementType

**Ƭ ElementType**: *`undefined` \| `string` \| [Component](../classes/_jsx_component_.component.md)<[PropsWithRef](_jsx_types_.__global.jsx.md#propswithref)<`P`>, `any`> \| [FunctionComponent](../interfaces/_jsx_types_.__global.jsx.functioncomponent.md)<[PropsWithRef](_jsx_types_.__global.jsx.md#propswithref)<`P`>>*

*Defined in [jsx/types.ts:161](https://github.com/cancerberoSgx/accursed/blob/978b980/src/jsx/types.ts#L161)*

___
<a id="optionsprops"></a>

###  OptionsProps

**Ƭ OptionsProps**: *[PropsWithRef](_jsx_types_.__global.jsx.md#propswithref)<`T`>*

*Defined in [jsx/types.ts:147](https://github.com/cancerberoSgx/accursed/blob/978b980/src/jsx/types.ts#L147)*

Adds extra props to Blessed options, like refs. TODO: we could add children here too ? and perhaps unify the rest in one place (onClick, etc)

___
<a id="propswithref"></a>

###  PropsWithRef

**Ƭ PropsWithRef**: *`P` & `object`*

*Defined in [jsx/types.ts:149](https://github.com/cancerberoSgx/accursed/blob/978b980/src/jsx/types.ts#L149)*

___

