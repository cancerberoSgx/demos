[accursed](../README.md) › [Globals](../globals.md) › ["util/debugNode"](_util_debugnode_.md)

# External module: "util/debugNode"

## Index

### Interfaces

* [Options](../interfaces/_util_debugnode_.options.md)
* [TreeNode](../interfaces/_util_debugnode_.treenode.md)

### Variables

* [lastFocused](_util_debugnode_.md#let-lastfocused)
* [timer](_util_debugnode_.md#let-timer)

### Functions

* [buildTreeNode](_util_debugnode_.md#buildtreenode)
* [getTreeNode](_util_debugnode_.md#gettreenode)
* [logText](_util_debugnode_.md#logtext)
* [renderDescendants](_util_debugnode_.md#renderdescendants)

### Object literals

* [defaultOptions](_util_debugnode_.md#const-defaultoptions)

## Variables

### `Let` lastFocused

• **lastFocused**: *[Element](../interfaces/_jsx_types_.__global.jsx.element.md)*

*Defined in [util/debugNode.tsx:60](https://github.com/cancerberoSgx/accursed/blob/468bf3c/src/util/debugNode.tsx#L60)*

___

### `Let` timer

• **timer**: *any*

*Defined in [util/debugNode.tsx:61](https://github.com/cancerberoSgx/accursed/blob/468bf3c/src/util/debugNode.tsx#L61)*

## Functions

###  buildTreeNode

▸ **buildTreeNode**(`el`: [Element](../interfaces/_jsx_types_.__global.jsx.element.md), `o`: [Options](../interfaces/_util_debugnode_.options.md)): *any*

*Defined in [util/debugNode.tsx:31](https://github.com/cancerberoSgx/accursed/blob/468bf3c/src/util/debugNode.tsx#L31)*

**Parameters:**

Name | Type | Default |
------ | ------ | ------ |
`el` | [Element](../interfaces/_jsx_types_.__global.jsx.element.md) | - |
`o` | [Options](../interfaces/_util_debugnode_.options.md) |  defaultOptions |

**Returns:** *any*

___

###  getTreeNode

▸ **getTreeNode**(`el`: [Element](../interfaces/_jsx_types_.__global.jsx.element.md) | [Screen](../classes/_declarations_blessed_d_.widgets.screen.md), `o`: [Options](../interfaces/_util_debugnode_.options.md)): *[TreeNode](../interfaces/_util_debugnode_.treenode.md)*

*Defined in [util/debugNode.tsx:27](https://github.com/cancerberoSgx/accursed/blob/468bf3c/src/util/debugNode.tsx#L27)*

**Parameters:**

Name | Type | Default |
------ | ------ | ------ |
`el` | [Element](../interfaces/_jsx_types_.__global.jsx.element.md) &#124; [Screen](../classes/_declarations_blessed_d_.widgets.screen.md) | - |
`o` | [Options](../interfaces/_util_debugnode_.options.md) |  defaultOptions |

**Returns:** *[TreeNode](../interfaces/_util_debugnode_.treenode.md)*

___

###  logText

▸ **logText**(`e`: [Element](../interfaces/_jsx_types_.__global.jsx.element.md) | [Screen](../classes/_declarations_blessed_d_.widgets.screen.md), ...`args`: any[]): *void*

*Defined in [util/debugNode.tsx:52](https://github.com/cancerberoSgx/accursed/blob/468bf3c/src/util/debugNode.tsx#L52)*

**Parameters:**

Name | Type |
------ | ------ |
`e` | [Element](../interfaces/_jsx_types_.__global.jsx.element.md) &#124; [Screen](../classes/_declarations_blessed_d_.widgets.screen.md) |
`...args` | any[] |

**Returns:** *void*

___

###  renderDescendants

▸ **renderDescendants**(`el`: [Element](../interfaces/_jsx_types_.__global.jsx.element.md) | [Screen](../classes/_declarations_blessed_d_.widgets.screen.md), `o`: [Options](../interfaces/_util_debugnode_.options.md) & [ElementOptions](../interfaces/_declarations_blessed_d_.widgets.elementoptions.md)): *[BlessedElement](../classes/_declarations_blessed_d_.widgets.blessedelement.md)‹object›*

*Defined in [util/debugNode.tsx:62](https://github.com/cancerberoSgx/accursed/blob/468bf3c/src/util/debugNode.tsx#L62)*

**Parameters:**

Name | Type | Default |
------ | ------ | ------ |
`el` | [Element](../interfaces/_jsx_types_.__global.jsx.element.md) &#124; [Screen](../classes/_declarations_blessed_d_.widgets.screen.md) | - |
`o` | [Options](../interfaces/_util_debugnode_.options.md) & [ElementOptions](../interfaces/_declarations_blessed_d_.widgets.elementoptions.md) |  defaultOptions |

**Returns:** *[BlessedElement](../classes/_declarations_blessed_d_.widgets.blessedelement.md)‹object›*

## Object literals

### `Const` defaultOptions

### ▪ **defaultOptions**: *object*

*Defined in [util/debugNode.tsx:14](https://github.com/cancerberoSgx/accursed/blob/468bf3c/src/util/debugNode.tsx#L14)*

###  getNodeLabel

▸ **getNodeLabel**(`n`: [Element](../interfaces/_jsx_types_.__global.jsx.element.md)): *string*

*Defined in [util/debugNode.tsx:15](https://github.com/cancerberoSgx/accursed/blob/468bf3c/src/util/debugNode.tsx#L15)*

**Parameters:**

Name | Type |
------ | ------ |
`n` | [Element](../interfaces/_jsx_types_.__global.jsx.element.md) |

**Returns:** *string*
