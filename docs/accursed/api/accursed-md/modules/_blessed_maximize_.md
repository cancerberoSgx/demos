[accursed](../README.md) > ["blessed/maximize"](../modules/_blessed_maximize_.md)

# External module: "blessed/maximize"

## Index

### Interfaces

* [Options](../interfaces/_blessed_maximize_.options.md)

### Variables

* [currentTarget](_blessed_maximize_.md#currenttarget)

### Functions

* [isMaximized](_blessed_maximize_.md#ismaximized)
* [restoreMaximize](_blessed_maximize_.md#restoremaximize)
* [setMaximized](_blessed_maximize_.md#setmaximized)

---

## Variables

<a id="currenttarget"></a>

### `<Let>` currentTarget

**● currentTarget**: *[Element](../interfaces/_jsx_types_.__global.jsx.element.md) \| `undefined`*

*Defined in [blessed/maximize.ts:73](https://github.com/cancerberoSgx/accursed/blob/978b980/src/blessed/maximize.ts#L73)*

___

## Functions

<a id="ismaximized"></a>

###  isMaximized

▸ **isMaximized**(el: *[Element](../interfaces/_jsx_types_.__global.jsx.element.md)*): `boolean`

*Defined in [blessed/maximize.ts:82](https://github.com/cancerberoSgx/accursed/blob/978b980/src/blessed/maximize.ts#L82)*

**Parameters:**

| Name | Type |
| ------ | ------ |
| el | [Element](../interfaces/_jsx_types_.__global.jsx.element.md) |

**Returns:** `boolean`

___
<a id="restoremaximize"></a>

###  restoreMaximize

▸ **restoreMaximize**(options?: *[Options](../interfaces/_blessed_maximize_.options.md)*): `void`

*Defined in [blessed/maximize.ts:78](https://github.com/cancerberoSgx/accursed/blob/978b980/src/blessed/maximize.ts#L78)*

restore the state of current maximized element if any

**Parameters:**

| Name | Type | Default value |
| ------ | ------ | ------ |
| `Default value` options | [Options](../interfaces/_blessed_maximize_.options.md) |  { auto: true } |

**Returns:** `void`

___
<a id="setmaximized"></a>

###  setMaximized

▸ **setMaximized**(el: *[Element](../interfaces/_jsx_types_.__global.jsx.element.md)*, maximize: *`boolean`*, options?: *[Options](../interfaces/_blessed_maximize_.options.md)*): `void`

*Defined in [blessed/maximize.ts:21](https://github.com/cancerberoSgx/accursed/blob/978b980/src/blessed/maximize.ts#L21)*

Maximize given element by attaching it as first child of the screen and with full dimensions. It stores original parent and index as data.

TODO: if auto: true, then if we are adding a button for restoring we should also add a button for maximize which we dont

**Parameters:**

| Name | Type | Default value |
| ------ | ------ | ------ |
| el | [Element](../interfaces/_jsx_types_.__global.jsx.element.md) | - |
| maximize | `boolean` | - |
| `Default value` options | [Options](../interfaces/_blessed_maximize_.options.md) |  { auto: true } |

**Returns:** `void`

___

