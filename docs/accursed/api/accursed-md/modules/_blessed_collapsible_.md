[accursed](../README.md) › [Globals](../globals.md) › ["blessed/collapsible"](_blessed_collapsible_.md)

# External module: "blessed/collapsible"

## Index

### Interfaces

* [CollapsibleOptions](../interfaces/_blessed_collapsible_.collapsibleoptions.md)

### Type aliases

* [onCollapseChange](_blessed_collapsible_.md#oncollapsechange)

### Functions

* [installCollapsible](_blessed_collapsible_.md#installcollapsible)
* [isCollapsed](_blessed_collapsible_.md#iscollapsed)
* [setCollapsed](_blessed_collapsible_.md#setcollapsed)
* [toggleCollapsed](_blessed_collapsible_.md#togglecollapsed)
* [uninstallCollapsible](_blessed_collapsible_.md#uninstallcollapsible)

## Type aliases

###  onCollapseChange

Ƭ **onCollapseChange**: *function*

*Defined in [blessed/collapsible.ts:74](https://github.com/cancerberoSgx/accursed/blob/468bf3c/src/blessed/collapsible.ts#L74)*

#### Type declaration:

▸ (`e`: [ArtificialEvent](../interfaces/_jsx_types_.artificialevent.md)‹[Element](../interfaces/_jsx_types_.__global.jsx.element.md)› & object): *void*

**Parameters:**

Name | Type |
------ | ------ |
`e` | [ArtificialEvent](../interfaces/_jsx_types_.artificialevent.md)‹[Element](../interfaces/_jsx_types_.__global.jsx.element.md)› & object |

## Functions

###  installCollapsible

▸ **installCollapsible**(`el`: [Element](../interfaces/_jsx_types_.__global.jsx.element.md), `options`: [CollapsibleOptions](../interfaces/_blessed_collapsible_.collapsibleoptions.md)): *void*

*Defined in [blessed/collapsible.ts:76](https://github.com/cancerberoSgx/accursed/blob/468bf3c/src/blessed/collapsible.ts#L76)*

**Parameters:**

Name | Type | Default |
------ | ------ | ------ |
`el` | [Element](../interfaces/_jsx_types_.__global.jsx.element.md) | - |
`options` | [CollapsibleOptions](../interfaces/_blessed_collapsible_.collapsibleoptions.md) |  {} |

**Returns:** *void*

___

###  isCollapsed

▸ **isCollapsed**(`el`: [Element](../interfaces/_jsx_types_.__global.jsx.element.md)): *any*

*Defined in [blessed/collapsible.ts:6](https://github.com/cancerberoSgx/accursed/blob/468bf3c/src/blessed/collapsible.ts#L6)*

**Parameters:**

Name | Type |
------ | ------ |
`el` | [Element](../interfaces/_jsx_types_.__global.jsx.element.md) |

**Returns:** *any*

___

###  setCollapsed

▸ **setCollapsed**(`el`: [Element](../interfaces/_jsx_types_.__global.jsx.element.md), `collapsed`: boolean, `andRenderScreen?`: boolean, `dontNotify`: boolean): *void*

*Defined in [blessed/collapsible.ts:10](https://github.com/cancerberoSgx/accursed/blob/468bf3c/src/blessed/collapsible.ts#L10)*

**Parameters:**

Name | Type | Default |
------ | ------ | ------ |
`el` | [Element](../interfaces/_jsx_types_.__global.jsx.element.md) | - |
`collapsed` | boolean | - |
`andRenderScreen?` | boolean | - |
`dontNotify` | boolean | false |

**Returns:** *void*

___

###  toggleCollapsed

▸ **toggleCollapsed**(`el`: [Element](../interfaces/_jsx_types_.__global.jsx.element.md), `andRenderScreen`: boolean): *void*

*Defined in [blessed/collapsible.ts:47](https://github.com/cancerberoSgx/accursed/blob/468bf3c/src/blessed/collapsible.ts#L47)*

**Parameters:**

Name | Type | Default |
------ | ------ | ------ |
`el` | [Element](../interfaces/_jsx_types_.__global.jsx.element.md) | - |
`andRenderScreen` | boolean | false |

**Returns:** *void*

___

###  uninstallCollapsible

▸ **uninstallCollapsible**(`el`: [Element](../interfaces/_jsx_types_.__global.jsx.element.md)): *void*

*Defined in [blessed/collapsible.ts:122](https://github.com/cancerberoSgx/accursed/blob/468bf3c/src/blessed/collapsible.ts#L122)*

**Parameters:**

Name | Type |
------ | ------ |
`el` | [Element](../interfaces/_jsx_types_.__global.jsx.element.md) |

**Returns:** *void*
