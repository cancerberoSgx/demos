[accursed](../README.md) > ["blessesContrib/treeUtil"](../modules/_blessescontrib_treeutil_.md)

# External module: "blessesContrib/treeUtil"

## Index

### Functions

* [isTreeElement](_blessescontrib_treeutil_.md#istreeelement)
* [onTreeNodeFocus](_blessescontrib_treeutil_.md#ontreenodefocus)
* [visitTreeNodes](_blessescontrib_treeutil_.md#visittreenodes)

---

## Functions

<a id="istreeelement"></a>

###  isTreeElement

▸ **isTreeElement**(t: *`any`*): `boolean`

*Defined in [blessesContrib/treeUtil.ts:31](https://github.com/cancerberoSgx/accursed/blob/978b980/src/blessesContrib/treeUtil.ts#L31)*

**Parameters:**

| Name | Type |
| ------ | ------ |
| t | `any` |

**Returns:** `boolean`

___
<a id="ontreenodefocus"></a>

###  onTreeNodeFocus

▸ **onTreeNodeFocus**<`T`>(tree: *`contrib.Widgets.TreeElement`<`T`>*, fn: *`function`*): `void`

*Defined in [blessesContrib/treeUtil.ts:6](https://github.com/cancerberoSgx/accursed/blob/978b980/src/blessesContrib/treeUtil.ts#L6)*

notifies when used "hovers" a tree node (not enter, just overs the node when navigating with arrow keys.)

**Type parameters:**

#### T :  `contrib.Widgets.TreeElementNode`
**Parameters:**

| Name | Type |
| ------ | ------ |
| tree | `contrib.Widgets.TreeElement`<`T`> |
| fn | `function` |

**Returns:** `void`

___
<a id="visittreenodes"></a>

###  visitTreeNodes

▸ **visitTreeNodes**<`N`>(tree: *`contrib.Widgets.TreeElement`<`N`> \| `N`*, v: *`function`*): `void`

*Defined in [blessesContrib/treeUtil.ts:19](https://github.com/cancerberoSgx/accursed/blob/978b980/src/blessesContrib/treeUtil.ts#L19)*

**Type parameters:**

#### N :  `contrib.Widgets.TreeElementNode`
**Parameters:**

| Name | Type |
| ------ | ------ |
| tree | `contrib.Widgets.TreeElement`<`N`> \| `N` |
| v | `function` |

**Returns:** `void`

___

