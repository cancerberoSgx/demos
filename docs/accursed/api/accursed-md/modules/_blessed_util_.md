[accursed](../README.md) > ["blessed/util"](../modules/_blessed_util_.md)

# External module: "blessed/util"

## Index

### Variables

* [createScreen](_blessed_util_.md#createscreen)

### Functions

* [appendElementData](_blessed_util_.md#appendelementdata)
* [getElementData](_blessed_util_.md#getelementdata)
* [getElementLabel](_blessed_util_.md#getelementlabel)
* [installExitKeys](_blessed_util_.md#installexitkeys)
* [isBlessedElement](_blessed_util_.md#isblessedelement)
* [labelBlink](_blessed_util_.md#labelblink)
* [offValueChange](_blessed_util_.md#offvaluechange)
* [onButtonClicked](_blessed_util_.md#onbuttonclicked)
* [onValueChange](_blessed_util_.md#onvaluechange)
* [replaceChildren](_blessed_util_.md#replacechildren)
* [setElementData](_blessed_util_.md#setelementdata)

---

## Variables

<a id="createscreen"></a>

### `<Const>` createScreen

**● createScreen**: *[screen](_declarations_blessed_d_.md#screen)* =  blessed.screen

*Defined in [blessed/util.ts:221](https://github.com/cancerberoSgx/accursed/blob/978b980/src/blessed/util.ts#L221)*

___

## Functions

<a id="appendelementdata"></a>

###  appendElementData

▸ **appendElementData**<`T`>(e: *[Element](../interfaces/_jsx_types_.__global.jsx.element.md)*, path: *`string`*, value: *`T`*): `void`

*Defined in [blessed/util.ts:106](https://github.com/cancerberoSgx/accursed/blob/978b980/src/blessed/util.ts#L106)*

like setElementData but push the data in the propery value / creating an array if doesn exists. if st's not an array it throws

**Type parameters:**

#### T 
**Parameters:**

| Name | Type |
| ------ | ------ |
| e | [Element](../interfaces/_jsx_types_.__global.jsx.element.md) |
| path | `string` |
| value | `T` |

**Returns:** `void`

___
<a id="getelementdata"></a>

###  getElementData

▸ **getElementData**<`T`>(e: *[Element](../interfaces/_jsx_types_.__global.jsx.element.md)*, path: *`string`*): `T`

*Defined in [blessed/util.ts:87](https://github.com/cancerberoSgx/accursed/blob/978b980/src/blessed/util.ts#L87)*

extract property stored on e.$ by path.

**Type parameters:**

#### T 
**Parameters:**

| Name | Type |
| ------ | ------ |
| e | [Element](../interfaces/_jsx_types_.__global.jsx.element.md) |
| path | `string` |

**Returns:** `T`

___
<a id="getelementlabel"></a>

###  getElementLabel

▸ **getElementLabel**(el: *[Element](../interfaces/_jsx_types_.__global.jsx.element.md)*): [Element](../interfaces/_jsx_types_.__global.jsx.element.md) \| `undefined`

*Defined in [blessed/util.ts:59](https://github.com/cancerberoSgx/accursed/blob/978b980/src/blessed/util.ts#L59)*

returns element's internal representation of the label. Warning it uses internal blessed properties that could break in the future.

**Parameters:**

| Name | Type |
| ------ | ------ |
| el | [Element](../interfaces/_jsx_types_.__global.jsx.element.md) |

**Returns:** [Element](../interfaces/_jsx_types_.__global.jsx.element.md) \| `undefined`

___
<a id="installexitkeys"></a>

###  installExitKeys

▸ **installExitKeys**(screen: *[Screen](../classes/_declarations_blessed_d_.widgets.screen.md)*): `void`

*Defined in [blessed/util.ts:27](https://github.com/cancerberoSgx/accursed/blob/978b980/src/blessed/util.ts#L27)*

**Parameters:**

| Name | Type | Description |
| ------ | ------ | ------ |
| screen | [Screen](../classes/_declarations_blessed_d_.widgets.screen.md) |  install common exit keys on screen taking into account modals and other widgets that could use the same. |

**Returns:** `void`

___
<a id="isblessedelement"></a>

###  isBlessedElement

▸ **isBlessedElement**(n: *`any`*): `boolean`

*Defined in [blessed/util.ts:5](https://github.com/cancerberoSgx/accursed/blob/978b980/src/blessed/util.ts#L5)*

**Parameters:**

| Name | Type |
| ------ | ------ |
| n | `any` |

**Returns:** `boolean`

___
<a id="labelblink"></a>

###  labelBlink

▸ **labelBlink**(el: *[Element](../interfaces/_jsx_types_.__global.jsx.element.md)*, options?: *`object`*): `void`

*Defined in [blessed/util.ts:63](https://github.com/cancerberoSgx/accursed/blob/978b980/src/blessed/util.ts#L63)*

**Parameters:**

**el: [Element](../interfaces/_jsx_types_.__global.jsx.element.md)**

**`Default value` options: `object`**

| Name | Type |
| ------ | ------ |
| `Optional` omitBorder | `boolean` |
| `Optional` timeout | `number` |

**Returns:** `void`

___
<a id="offvaluechange"></a>

###  offValueChange

▸ **offValueChange**(el: *[Checkbox](../classes/_declarations_blessed_d_.widget.checkbox.md)*): `void`

*Defined in [blessed/util.ts:47](https://github.com/cancerberoSgx/accursed/blob/978b980/src/blessed/util.ts#L47)*

**Parameters:**

| Name | Type |
| ------ | ------ |
| el | [Checkbox](../classes/_declarations_blessed_d_.widget.checkbox.md) |

**Returns:** `void`

___
<a id="onbuttonclicked"></a>

###  onButtonClicked

▸ **onButtonClicked**(b: *[Button](../classes/_declarations_blessed_d_.widget.button.md)*, fn: *`function`*): `void`

*Defined in [blessed/util.ts:12](https://github.com/cancerberoSgx/accursed/blob/978b980/src/blessed/util.ts#L12)*

Besides reacting for click, also will react for pressed, enter and space keys.

**Parameters:**

| Name | Type |
| ------ | ------ |
| b | [Button](../classes/_declarations_blessed_d_.widget.button.md) |
| fn | `function` |

**Returns:** `void`

___
<a id="onvaluechange"></a>

###  onValueChange

▸ **onValueChange**(el: *[Checkbox](../classes/_declarations_blessed_d_.widget.checkbox.md)*, cb: *`function`*): `void`

*Defined in [blessed/util.ts:38](https://github.com/cancerberoSgx/accursed/blob/978b980/src/blessed/util.ts#L38)*

**Parameters:**

| Name | Type |
| ------ | ------ |
| el | [Checkbox](../classes/_declarations_blessed_d_.widget.checkbox.md) |
| cb | `function` |

**Returns:** `void`

___
<a id="replacechildren"></a>

###  replaceChildren

▸ **replaceChildren**(container: *[Element](../interfaces/_jsx_types_.__global.jsx.element.md)*, newChildren: *[Element](../interfaces/_jsx_types_.__global.jsx.element.md) \| [Element](../interfaces/_jsx_types_.__global.jsx.element.md)[]*, options?: *`object`*): `void`

*Defined in [blessed/util.ts:183](https://github.com/cancerberoSgx/accursed/blob/978b980/src/blessed/util.ts#L183)*

Hot replace all children of given container element with given \[\[newChildren\]\] array elements.

This can be used in dynamic views that need to replace a whole element subtree because they radically changed. For example, a Panel could offer different modalities for represent some data, that the user can demonically and each uses different element types. (for example one is a Tree, other is a Table and other is a listtab).

This method try to do and support the following modes:

*   quickly, just destroy current children and append new ones, and only after that call render.screen()
*   dontRender: same as previous but without calling render.screen()
*   careful: using previous, for complex data, seems to have flickering and the final screen looks dirty, with segments that are a mix from new UI and old .... this mode try to do several renders / hide/show so this doesn't happen, but it could be slower/costly.

**Parameters:**

**container: [Element](../interfaces/_jsx_types_.__global.jsx.element.md)**

**newChildren: [Element](../interfaces/_jsx_types_.__global.jsx.element.md) \| [Element](../interfaces/_jsx_types_.__global.jsx.element.md)[]**

**`Default value` options: `object`**

| Name | Type |
| ------ | ------ |
| mode | "quickly" \| "careful" \| "dontRender" |

**Returns:** `void`

___
<a id="setelementdata"></a>

###  setElementData

▸ **setElementData**<`T`>(e: *[Element](../interfaces/_jsx_types_.__global.jsx.element.md)*, path: *`string`*, value: *`T`*): `void`

*Defined in [blessed/util.ts:98](https://github.com/cancerberoSgx/accursed/blob/978b980/src/blessed/util.ts#L98)*

set property stored on e.$ by path.

**Type parameters:**

#### T 
**Parameters:**

| Name | Type |
| ------ | ------ |
| e | [Element](../interfaces/_jsx_types_.__global.jsx.element.md) |
| path | `string` |
| value | `T` |

**Returns:** `void`

___
