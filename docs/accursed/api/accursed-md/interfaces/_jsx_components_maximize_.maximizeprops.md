[accursed](../README.md) > ["jsx-components/maximize"](../modules/_jsx_components_maximize_.md) > [MaximizeProps](../interfaces/_jsx_components_maximize_.maximizeprops.md)

# Interface: MaximizeProps

## Hierarchy

 `object`

**↳ MaximizeProps**

## Index

### Properties

* [button](_jsx_components_maximize_.maximizeprops.md#button)
* [children](_jsx_components_maximize_.maximizeprops.md#children)
* [maximizeLabel](_jsx_components_maximize_.maximizeprops.md#maximizelabel)
* [restoreLabel](_jsx_components_maximize_.maximizeprops.md#restorelabel)
* [title](_jsx_components_maximize_.maximizeprops.md#title)

### Methods

* [onMaximize](_jsx_components_maximize_.maximizeprops.md#onmaximize)

---

## Properties

<a id="button"></a>

### `<Optional>` button

**● button**: *[ButtonOptions](_declarations_blessed_d_.widgets.buttonoptions.md)*

*Defined in [jsx-components/maximize.tsx:23](https://github.com/cancerberoSgx/accursed/blob/978b980/src/jsx-components/maximize.tsx#L23)*

Options for the maximize/restore button.

___
<a id="children"></a>

### `<Optional>` children

**● children**: *[Element](_jsx_types_.__global.jsx.element.md)*

*Defined in [jsx-components/maximize.tsx:7](https://github.com/cancerberoSgx/accursed/blob/978b980/src/jsx-components/maximize.tsx#L7)*

___
<a id="maximizelabel"></a>

### `<Optional>` maximizeLabel

**● maximizeLabel**: *`string`*

*Defined in [jsx-components/maximize.tsx:11](https://github.com/cancerberoSgx/accursed/blob/978b980/src/jsx-components/maximize.tsx#L11)*

Label for the maximize button. Default: '\\u2921 maximize'.

___
<a id="restorelabel"></a>

### `<Optional>` restoreLabel

**● restoreLabel**: *`string`*

*Defined in [jsx-components/maximize.tsx:15](https://github.com/cancerberoSgx/accursed/blob/978b980/src/jsx-components/maximize.tsx#L15)*

Label for the restore button. Default: '\\u2935 restore'.

___
<a id="title"></a>

### `<Optional>` title

**● title**: *`string`*

*Defined in [jsx-components/maximize.tsx:19](https://github.com/cancerberoSgx/accursed/blob/978b980/src/jsx-components/maximize.tsx#L19)*

The title or label for information when maximized.

___

## Methods

<a id="onmaximize"></a>

### `<Optional>` onMaximize

▸ **onMaximize**(type: *"maximize" \| "restore"*, target: *[Element](_jsx_types_.__global.jsx.element.md)*): `any`

*Defined in [jsx-components/maximize.tsx:27](https://github.com/cancerberoSgx/accursed/blob/978b980/src/jsx-components/maximize.tsx#L27)*

Notifies listeners when a maximize or restore event occurs

**Parameters:**

| Name | Type |
| ------ | ------ |
| type | "maximize" \| "restore" |
| target | [Element](_jsx_types_.__global.jsx.element.md) |

**Returns:** `any`

___

