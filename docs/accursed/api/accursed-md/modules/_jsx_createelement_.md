[accursed](../README.md) > ["jsx/createElement"](../modules/_jsx_createelement_.md)

# External module: "jsx/createElement"

## Index

### Classes

* [BlessedJsxImpl](../classes/_jsx_createelement_.blessedjsximpl.md)

### Interfaces

* [ComponentConstructor](../interfaces/_jsx_createelement_.componentconstructor.md)
* [Options](../interfaces/_jsx_createelement_.options.md)

### Variables

* [React](_jsx_createelement_.md#react)

### Functions

* [isComponentConstructor](_jsx_createelement_.md#iscomponentconstructor)
* [isElementLike](_jsx_createelement_.md#iselementlike)
* [ref](_jsx_createelement_.md#ref)
* [resolveRef](_jsx_createelement_.md#resolveref)

---

## Variables

<a id="react"></a>

### `<Const>` React

**● React**: *[BlessedJsx](../interfaces/_jsx_types_.blessedjsx.md)* =  new BlessedJsxImpl()

*Defined in [jsx/createElement.ts:346](https://github.com/cancerberoSgx/accursed/blob/978b980/src/jsx/createElement.ts#L346)*

___

## Functions

<a id="iscomponentconstructor"></a>

###  isComponentConstructor

▸ **isComponentConstructor**(tag: *`any`*): `boolean`

*Defined in [jsx/createElement.ts:33](https://github.com/cancerberoSgx/accursed/blob/978b980/src/jsx/createElement.ts#L33)*

**Parameters:**

| Name | Type |
| ------ | ------ |
| tag | `any` |

**Returns:** `boolean`

___
<a id="iselementlike"></a>

###  isElementLike

▸ **isElementLike**(e: *`any`*): `boolean`

*Defined in [jsx/createElement.ts:342](https://github.com/cancerberoSgx/accursed/blob/978b980/src/jsx/createElement.ts#L342)*

**Parameters:**

| Name | Type |
| ------ | ------ |
| e | `any` |

**Returns:** `boolean`

___
<a id="ref"></a>

###  ref

▸ **ref**<`C`>(fn: *`function`*): [RefObject](../interfaces/_jsx_types_.refobject.md)<`C`>

*Defined in [jsx/createElement.ts:351](https://github.com/cancerberoSgx/accursed/blob/978b980/src/jsx/createElement.ts#L351)*

Shortcut for `React.createRef`

**Type parameters:**

#### C :  [Component](../classes/_jsx_component_.component.md)<`any`> \| [Element](../interfaces/_jsx_types_.__global.jsx.element.md)
**Parameters:**

| Name | Type |
| ------ | ------ |
| fn | `function` |

**Returns:** [RefObject](../interfaces/_jsx_types_.refobject.md)<`C`>

___
<a id="resolveref"></a>

###  resolveRef

▸ **resolveRef**(options: *[ElementOptions](../interfaces/_declarations_blessed_d_.widgets.elementoptions.md)*, current: *`any`*): `void`

*Defined in [jsx/createElement.ts:359](https://github.com/cancerberoSgx/accursed/blob/978b980/src/jsx/createElement.ts#L359)*

internal tool to resolve refObject from given options

*__internal__*: 

**Parameters:**

| Name | Type |
| ------ | ------ |
| options | [ElementOptions](../interfaces/_declarations_blessed_d_.widgets.elementoptions.md) |
| current | `any` |

**Returns:** `void`

___

