[accursed](../README.md) > ["blessed/treeView"](../modules/_blessed_treeview_.md) > [ITreeView](../interfaces/_blessed_treeview_.itreeview.md)

# Interface: ITreeView

## Type parameters
#### T :  [TreeViewNode](_blessed_treeview_.treeviewnode.md)
## Hierarchy

**ITreeView**

## Implemented by

* [TreeView](../classes/_blessed_treeview_.treeview.md)

## Index

### Methods

* [on](_blessed_treeview_.itreeview.md#on)

---

## Methods

<a id="on"></a>

###  on

▸ **on**(event: *"nodeSelect"*, callback: *`function`*): `this`

▸ **on**(event: *"nodeFocus"*, callback: *`function`*): `this`

▸ **on**(event: *"nodeExpand"*, callback: *`function`*): `this`

*Defined in [blessed/treeView.ts:97](https://github.com/cancerberoSgx/accursed/blob/978b980/src/blessed/treeView.ts#L97)*

Emitted when user selects a node (pressing enter). undefined value means the user un-select all nodes

**Parameters:**

| Name | Type |
| ------ | ------ |
| event | "nodeSelect" |
| callback | `function` |

**Returns:** `this`

*Defined in [blessed/treeView.ts:102](https://github.com/cancerberoSgx/accursed/blob/978b980/src/blessed/treeView.ts#L102)*

Emitted when user focus a tree node while navigating up or down with arrow keys.

**Parameters:**

| Name | Type |
| ------ | ------ |
| event | "nodeFocus" |
| callback | `function` |

**Returns:** `this`

*Defined in [blessed/treeView.ts:108](https://github.com/cancerberoSgx/accursed/blob/978b980/src/blessed/treeView.ts#L108)*

Emitted when user expand or collapses a node (pressing space). node.expanded property tells the current status of the node.

**Parameters:**

| Name | Type |
| ------ | ------ |
| event | "nodeExpand" |
| callback | `function` |

**Returns:** `this`

___

