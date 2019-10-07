[accursed](../README.md) › [Globals](../globals.md) › ["blessed/virtualElement"](../modules/_blessed_virtualelement_.md) › [VirtualElement](_blessed_virtualelement_.virtualelement.md)

# Interface: VirtualElement

## Hierarchy

* **VirtualElement**

## Implemented by

* [AccordionBlock](../classes/_jsx_components_accordion_.accordionblock.md)
* [Column](../classes/_jsx_components_columns_.column.md)
* [ListBarCommand](../classes/_jsx_components_listbar_.listbarcommand.md)
* [ListTableBody](../classes/_jsx_components_listtable_.listtablebody.md)
* [ListTableCell](../classes/_jsx_components_listtable_.listtablecell.md)
* [ListTableHead](../classes/_jsx_components_listtable_.listtablehead.md)
* [ListTableRow](../classes/_jsx_components_listtable_.listtablerow.md)
* [Row](../classes/_jsx_components_rows_.row.md)
* [SelectOption](../classes/_jsx_components_select_.selectoption.md)
* [Tab](../classes/_jsx_components_tabpanel_.tab.md)
* [TabBody](../classes/_jsx_components_tabpanel_.tabbody.md)
* [TabLabel](../classes/_jsx_components_tabpanel_.tablabel.md)
* [VirtualComponent](../classes/_blessed_virtualelement_.virtualcomponent.md)

## Index

### Methods

* [saveVirtualData](_blessed_virtualelement_.virtualelement.md#savevirtualdata)

## Methods

###  saveVirtualData

▸ **saveVirtualData**(`e`: [Element](_jsx_types_.__global.jsx.element.md)): *void*

*Defined in [blessed/virtualElement.ts:54](https://github.com/cancerberoSgx/accursed/blob/5b2518e/src/blessed/virtualElement.ts#L54)*

loads the data on this virtual element (object simulating to be a bkessing node temporarily on  given (real) parent e. E knowns that is fake and wont append it .. dont need to worry

**Parameters:**

Name | Type |
------ | ------ |
`e` | [Element](_jsx_types_.__global.jsx.element.md) |

**Returns:** *void*
