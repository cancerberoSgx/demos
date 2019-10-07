[accursed](../README.md) › [Globals](../globals.md) › ["jsx/types"](_jsx_types_.md) › [__global](_jsx_types_.__global.md) › [JSX](_jsx_types_.__global.jsx.md)

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

## Type aliases

###  BlessedJsxChild

Ƭ **BlessedJsxChild**: *[Element](../interfaces/_jsx_types_.__global.jsx.element.md)‹any› | [BlessedJsxText](_jsx_types_.__global.jsx.md#blessedjsxtext)*

*Defined in [jsx/types.ts:126](https://github.com/cancerberoSgx/accursed/blob/5b2518e/src/jsx/types.ts#L126)*

___

###  BlessedJsxFragment

Ƭ **BlessedJsxFragment**: *__type | [ReactNodeArray](../interfaces/_jsx_types_.__global.jsx.reactnodearray.md)*

*Defined in [jsx/types.ts:130](https://github.com/cancerberoSgx/accursed/blob/5b2518e/src/jsx/types.ts#L130)*

___

###  BlessedJsxNode

Ƭ **BlessedJsxNode**: *[BlessedJsxChild](_jsx_types_.__global.jsx.md#blessedjsxchild) | [BlessedJsxFragment](_jsx_types_.__global.jsx.md#blessedjsxfragment) | boolean | null | [BlessedElement](../classes/_declarations_blessed_d_.widgets.blessedelement.md)[] | [BlessedElement](../classes/_declarations_blessed_d_.widgets.blessedelement.md)*

*Defined in [jsx/types.ts:133](https://github.com/cancerberoSgx/accursed/blob/5b2518e/src/jsx/types.ts#L133)*

___

###  BlessedJsxText

Ƭ **BlessedJsxText**: *string | number*

*Defined in [jsx/types.ts:124](https://github.com/cancerberoSgx/accursed/blob/5b2518e/src/jsx/types.ts#L124)*

___

###  ElementType

Ƭ **ElementType**: *undefined | string | [Component](../classes/_jsx_component_.component.md)‹[PropsWithRef](_jsx_types_.__global.jsx.md#propswithref)‹P›, any› | [FunctionComponent](../interfaces/_jsx_types_.__global.jsx.functioncomponent.md)‹[PropsWithRef](_jsx_types_.__global.jsx.md#propswithref)‹P››*

*Defined in [jsx/types.ts:112](https://github.com/cancerberoSgx/accursed/blob/5b2518e/src/jsx/types.ts#L112)*

___

###  OptionsProps

Ƭ **OptionsProps**: *[PropsWithRef](_jsx_types_.__global.jsx.md#propswithref)‹T›*

*Defined in [jsx/types.ts:98](https://github.com/cancerberoSgx/accursed/blob/5b2518e/src/jsx/types.ts#L98)*

Adds extra props to Blessed options, like refs. TODO: we could add children here too ? and perhaps
unify the rest in one place (onClick, etc)

___

###  PropsWithRef

Ƭ **PropsWithRef**: *P & object*

*Defined in [jsx/types.ts:100](https://github.com/cancerberoSgx/accursed/blob/5b2518e/src/jsx/types.ts#L100)*
