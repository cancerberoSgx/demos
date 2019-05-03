[accursed](../README.md) > ["jsx-components/listBar"](../modules/_jsx_components_listbar_.md) > [ListBarProps](../interfaces/_jsx_components_listbar_.listbarprops.md)

# Interface: ListBarProps

## Hierarchy

 `object`

**↳ ListBarProps**

## Index

### Properties

* [children](_jsx_components_listbar_.listbarprops.md#children)

### Methods

* [onCommand](_jsx_components_listbar_.listbarprops.md#oncommand)
* [onSelectItem](_jsx_components_listbar_.listbarprops.md#onselectitem)

---

## Properties

<a id="children"></a>

###  children

**● children**: *[ListBarCommand](../classes/_jsx_components_listbar_.listbarcommand.md) \| [ListBarCommand](../classes/_jsx_components_listbar_.listbarcommand.md)[]*

*Defined in [jsx-components/listBar.tsx:9](https://github.com/cancerberoSgx/accursed/blob/978b980/src/jsx-components/listBar.tsx#L9)*

___

## Methods

<a id="oncommand"></a>

### `<Optional>` onCommand

▸ **onCommand**(index: *`number`*, item: *[Element](_jsx_types_.__global.jsx.element.md)*): `void`

*Defined in [jsx-components/listBar.tsx:17](https://github.com/cancerberoSgx/accursed/blob/978b980/src/jsx-components/listBar.tsx#L17)*

Notifies when the user presses ENTER or clicks a command.

**Parameters:**

| Name | Type |
| ------ | ------ |
| index | `number` |
| item | [Element](_jsx_types_.__global.jsx.element.md) |

**Returns:** `void`

___
<a id="onselectitem"></a>

### `<Optional>` onSelectItem

▸ **onSelectItem**(index: *`number`*, item: *[Element](_jsx_types_.__global.jsx.element.md)*): `void`

*Defined in [jsx-components/listBar.tsx:13](https://github.com/cancerberoSgx/accursed/blob/978b980/src/jsx-components/listBar.tsx#L13)*

Notifies when the user moves thought the list as when pressing arrow functions. Notice that the user did not actionate the command, is just exploring the options.

**Parameters:**

| Name | Type |
| ------ | ------ |
| index | `number` |
| item | [Element](_jsx_types_.__global.jsx.element.md) |

**Returns:** `void`

___

