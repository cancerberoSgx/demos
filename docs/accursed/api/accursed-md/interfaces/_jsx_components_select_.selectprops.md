[accursed](../README.md) › [Globals](../globals.md) › ["jsx-components/select"](../modules/_jsx_components_select_.md) › [SelectProps](_jsx_components_select_.selectprops.md)

# Interface: SelectProps

## Hierarchy

* object

  ↳ **SelectProps**

## Index

### Properties

* [children](_jsx_components_select_.selectprops.md#children)
* [onSelect](_jsx_components_select_.selectprops.md#optional-onselect)
* [onSelectItem](_jsx_components_select_.selectprops.md#optional-onselectitem)
* [pageDownKeys](_jsx_components_select_.selectprops.md#optional-pagedownkeys)
* [pageUpKeys](_jsx_components_select_.selectprops.md#optional-pageupkeys)

## Properties

###  children

• **children**: *[SelectOption](../classes/_jsx_components_select_.selectoption.md)[]*

*Defined in [jsx-components/select.tsx:25](https://github.com/cancerberoSgx/accursed/blob/5b2518e/src/jsx-components/select.tsx#L25)*

___

### `Optional` onSelect

• **onSelect**? : *function*

*Defined in [jsx-components/select.tsx:12](https://github.com/cancerberoSgx/accursed/blob/5b2518e/src/jsx-components/select.tsx#L12)*

Emitted when user presses enter or clicks over a selected button. This is not triggers when user uses the arrow keys to move through the item list.

#### Type declaration:

▸ (`event`: [ArtificialEvent](_jsx_types_.artificialevent.md)‹[List](../classes/_declarations_blessed_d_.widget.list.md)› & object): *void*

**Parameters:**

Name | Type |
------ | ------ |
`event` | [ArtificialEvent](_jsx_types_.artificialevent.md)‹[List](../classes/_declarations_blessed_d_.widget.list.md)› & object |

___

### `Optional` onSelectItem

• **onSelectItem**? : *function*

*Defined in [jsx-components/select.tsx:16](https://github.com/cancerberoSgx/accursed/blob/5b2518e/src/jsx-components/select.tsx#L16)*

Emitted when user uses the arrow keys to move through the item list.Not emitted when user presses enter or clicks over a selected button.

#### Type declaration:

▸ (`event`: [ArtificialEvent](_jsx_types_.artificialevent.md)‹[List](../classes/_declarations_blessed_d_.widget.list.md)› & object): *void*

**Parameters:**

Name | Type |
------ | ------ |
`event` | [ArtificialEvent](_jsx_types_.artificialevent.md)‹[List](../classes/_declarations_blessed_d_.widget.list.md)› & object |

___

### `Optional` pageDownKeys

• **pageDownKeys**? : *string[]*

*Defined in [jsx-components/select.tsx:20](https://github.com/cancerberoSgx/accursed/blob/5b2518e/src/jsx-components/select.tsx#L20)*

If given, those keys will be installed in the list to advance 1 page down. By default [pagedown] is installed.

___

### `Optional` pageUpKeys

• **pageUpKeys**? : *string[]*

*Defined in [jsx-components/select.tsx:24](https://github.com/cancerberoSgx/accursed/blob/5b2518e/src/jsx-components/select.tsx#L24)*

If given, those keys will be installed in the list to advance 1 page up. By default [pagedown] is installed.
