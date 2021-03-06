[accursed](../README.md) › [Globals](../globals.md) › ["jsx/createElement"](_jsx_createelement_.md)

# External module: "jsx/createElement"

## Index

### Classes

* [BlessedJsxImpl](../classes/_jsx_createelement_.blessedjsximpl.md)

### Interfaces

* [ComponentConstructor](../interfaces/_jsx_createelement_.componentconstructor.md)
* [Options](../interfaces/_jsx_createelement_.options.md)

### Variables

* [React](_jsx_createelement_.md#const-react)

### Functions

* [isComponentConstructor](_jsx_createelement_.md#iscomponentconstructor)
* [isElementLike](_jsx_createelement_.md#iselementlike)
* [ref](_jsx_createelement_.md#ref)
* [resolveRef](_jsx_createelement_.md#resolveref)

## Variables

### `Const` React

• **React**: *[BlessedJsx](../interfaces/_jsx_types_.blessedjsx.md)* =  new BlessedJsxImpl()

*Defined in [jsx/createElement.ts:329](https://github.com/cancerberoSgx/accursed/blob/5b2518e/src/jsx/createElement.ts#L329)*

## Functions

###  isComponentConstructor

▸ **isComponentConstructor**(`tag`: any): *boolean*

*Defined in [jsx/createElement.ts:16](https://github.com/cancerberoSgx/accursed/blob/5b2518e/src/jsx/createElement.ts#L16)*

**Parameters:**

Name | Type |
------ | ------ |
`tag` | any |

**Returns:** *boolean*

___

###  isElementLike

▸ **isElementLike**(`e`: any): *boolean*

*Defined in [jsx/createElement.ts:325](https://github.com/cancerberoSgx/accursed/blob/5b2518e/src/jsx/createElement.ts#L325)*

**Parameters:**

Name | Type |
------ | ------ |
`e` | any |

**Returns:** *boolean*

___

###  ref

▸ **ref**<**C**>(`fn`: function): *[RefObject](../interfaces/_jsx_types_.refobject.md)‹C›*

*Defined in [jsx/createElement.ts:334](https://github.com/cancerberoSgx/accursed/blob/5b2518e/src/jsx/createElement.ts#L334)*

Shortcut for `React.createRef`

**Type parameters:**

▪ **C**: *[Component](../classes/_jsx_component_.component.md)‹any› | [Element](../interfaces/_jsx_types_.__global.jsx.element.md)*

**Parameters:**

▪ **fn**: *function*

▸ (`c`: C): *void*

**Parameters:**

Name | Type |
------ | ------ |
`c` | C |

**Returns:** *[RefObject](../interfaces/_jsx_types_.refobject.md)‹C›*

___

###  resolveRef

▸ **resolveRef**(`options`: [ElementOptions](../interfaces/_declarations_blessed_d_.widgets.elementoptions.md), `current`: any): *void*

*Defined in [jsx/createElement.ts:342](https://github.com/cancerberoSgx/accursed/blob/5b2518e/src/jsx/createElement.ts#L342)*

internal tool to resolve refObject from given options

**`internal`** 

**Parameters:**

Name | Type |
------ | ------ |
`options` | [ElementOptions](../interfaces/_declarations_blessed_d_.widgets.elementoptions.md) |
`current` | any |

**Returns:** *void*
