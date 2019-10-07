[accursed](../README.md) › [Globals](../globals.md) › ["blessed/treeView"](../modules/_blessed_treeview_.md) › [ITreeView](_blessed_treeview_.itreeview.md)

# Interface: ITreeView <**T**>

## Type parameters

▪ **T**: *[TreeViewNode](_blessed_treeview_.treeviewnode.md)*

## Hierarchy

* **ITreeView**

## Implemented by

* [TreeView](../classes/_blessed_treeview_.treeview.md)

## Index

### Methods

* [on](_blessed_treeview_.itreeview.md#on)

## Methods

###  on

▸ **on**(`event`: "nodeSelect", `callback`: function): *this*

*Defined in [blessed/treeView.ts:103](https://github.com/cancerberoSgx/accursed/blob/5b2518e/src/blessed/treeView.ts#L103)*

Emitted when user selects a node (pressing enter). undefined value means the user un-select all nodes

**Parameters:**

▪ **event**: *"nodeSelect"*

▪ **callback**: *function*

▸ (`node`: [Node](_blessed_treeview_.node.md)): *void*

**Parameters:**

Name | Type |
------ | ------ |
`node` | [Node](_blessed_treeview_.node.md) |

**Returns:** *this*

▸ **on**(`event`: "nodeFocus", `callback`: function): *this*

*Defined in [blessed/treeView.ts:108](https://github.com/cancerberoSgx/accursed/blob/5b2518e/src/blessed/treeView.ts#L108)*

Emitted when user focus a tree node while navigating up or down with arrow keys.

**Parameters:**

▪ **event**: *"nodeFocus"*

▪ **callback**: *function*

▸ (`node`: [Node](_blessed_treeview_.node.md)): *void*

**Parameters:**

Name | Type |
------ | ------ |
`node` | [Node](_blessed_treeview_.node.md) |

**Returns:** *this*

▸ **on**(`event`: "nodeExpand", `callback`: function): *this*

*Defined in [blessed/treeView.ts:114](https://github.com/cancerberoSgx/accursed/blob/5b2518e/src/blessed/treeView.ts#L114)*

Emitted when user expand or collapses a node (pressing space). node.expanded property tells the current
status of the node.

**Parameters:**

▪ **event**: *"nodeExpand"*

▪ **callback**: *function*

▸ (`node`: [Node](_blessed_treeview_.node.md)): *void*

**Parameters:**

Name | Type |
------ | ------ |
`node` | [Node](_blessed_treeview_.node.md) |

**Returns:** *this*
