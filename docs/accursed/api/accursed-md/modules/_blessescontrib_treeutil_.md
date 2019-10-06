[accursed](../README.md) › [Globals](../globals.md) › ["blessesContrib/treeUtil"](_blessescontrib_treeutil_.md)

# External module: "blessesContrib/treeUtil"

## Index

### Functions

* [isTreeElement](_blessescontrib_treeutil_.md#istreeelement)
* [onTreeNodeFocus](_blessescontrib_treeutil_.md#ontreenodefocus)
* [visitTreeNodes](_blessescontrib_treeutil_.md#visittreenodes)

## Functions

###  isTreeElement

▸ **isTreeElement**(`t`: any): *boolean*

*Defined in [blessesContrib/treeUtil.ts:31](https://github.com/cancerberoSgx/accursed/blob/468bf3c/src/blessesContrib/treeUtil.ts#L31)*

**Parameters:**

Name | Type |
------ | ------ |
`t` | any |

**Returns:** *boolean*

___

###  onTreeNodeFocus

▸ **onTreeNodeFocus**<**T**>(`tree`: contrib.Widgets.TreeElement‹T›, `fn`: function): *void*

*Defined in [blessesContrib/treeUtil.ts:6](https://github.com/cancerberoSgx/accursed/blob/468bf3c/src/blessesContrib/treeUtil.ts#L6)*

notifies when used "hovers" a tree node (not enter, just overs the node when navigating with arrow keys.)

**Type parameters:**

▪ **T**: *contrib.Widgets.TreeElementNode*

**Parameters:**

▪ **tree**: *contrib.Widgets.TreeElement‹T›*

▪ **fn**: *function*

▸ (`selectedNode`: T): *void*

**Parameters:**

Name | Type |
------ | ------ |
`selectedNode` | T |

**Returns:** *void*

___

###  visitTreeNodes

▸ **visitTreeNodes**<**N**>(`tree`: contrib.Widgets.TreeElement‹N› | N, `v`: function): *void*

*Defined in [blessesContrib/treeUtil.ts:19](https://github.com/cancerberoSgx/accursed/blob/468bf3c/src/blessesContrib/treeUtil.ts#L19)*

**Type parameters:**

▪ **N**: *contrib.Widgets.TreeElementNode*

**Parameters:**

▪ **tree**: *contrib.Widgets.TreeElement‹N› | N*

▪ **v**: *function*

▸ (`node`: N): *void*

**Parameters:**

Name | Type |
------ | ------ |
`node` | N |

**Returns:** *void*
