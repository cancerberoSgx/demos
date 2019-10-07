[accursed](../README.md) › [Globals](../globals.md) › ["declarations/blessed-contrib.d"](../modules/_declarations_blessed_contrib_d_.md) › [BlessedContrib](../modules/_declarations_blessed_contrib_d_.blessedcontrib.md) › [Widgets](../modules/_declarations_blessed_contrib_d_.blessedcontrib.widgets.md) › [TreeElementNode](_declarations_blessed_contrib_d_.blessedcontrib.widgets.treeelementnode.md)

# Interface: TreeElementNode

## Hierarchy

* **TreeElementNode**

## Index

### Properties

* [children](_declarations_blessed_contrib_d_.blessedcontrib.widgets.treeelementnode.md#optional-children)
* [childrenContent](_declarations_blessed_contrib_d_.blessedcontrib.widgets.treeelementnode.md#optional-childrencontent)
* [extended](_declarations_blessed_contrib_d_.blessedcontrib.widgets.treeelementnode.md#optional-extended)
* [name](_declarations_blessed_contrib_d_.blessedcontrib.widgets.treeelementnode.md#optional-name)

## Properties

### `Optional` children

• **children**? : *object | function*

*Defined in [declarations/blessed-contrib.d.ts:523](https://github.com/cancerberoSgx/accursed/blob/5b2518e/src/declarations/blessed-contrib.d.ts#L523)*

Type : hash or function(node){ return children } Desc : Node children.
The function must return a hash that could have been used as children
property If you use a function, the result will be stored in
node.childrenContent and children Example : Hash : {'Fruit':{ name:
'Fruit', children:{ 'Banana': {}, 'Cherry': {}}}} Function : see
examples/explorer.js

___

### `Optional` childrenContent

• **childrenContent**? : *object*

*Defined in [declarations/blessed-contrib.d.ts:533](https://github.com/cancerberoSgx/accursed/blob/5b2518e/src/declarations/blessed-contrib.d.ts#L533)*

Type : hash Desc : Children content for internal usage DO NOT MODIFY If
node.children is a hash, node.children===node.childrenContent If
node.children is a function, it's used to store the node.children()
result You can read this property, but you should never write it.
Usually this will be used to check if(node.childrenContent) in your
node.children function to generate children only once

#### Type declaration:

* \[ **name**: *string*\]: any

___

### `Optional` extended

• **extended**? : *boolean*

*Defined in [declarations/blessed-contrib.d.ts:507](https://github.com/cancerberoSgx/accursed/blob/5b2518e/src/declarations/blessed-contrib.d.ts#L507)*

Type : boolean Desc : Determine if this node is extended No effect when
  the node have no child Default value for each node will be
  treeInstance.options.extended if the node extended option is not set
  Example :

{'Fruit':{ name: 'Fruit', extended: true, children:{
  'Banana': {}, 'Cherry': {}}}}

___

### `Optional` name

• **name**? : *string*

*Defined in [declarations/blessed-contrib.d.ts:513](https://github.com/cancerberoSgx/accursed/blob/5b2518e/src/declarations/blessed-contrib.d.ts#L513)*

Type : string Desc : Node name If the node isn't the root and you don't
specify the name, will be set to hash key Example :` { name: 'Fruit'}`
