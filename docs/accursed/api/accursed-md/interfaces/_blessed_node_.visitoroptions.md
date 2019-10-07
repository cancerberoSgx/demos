[accursed](../README.md) › [Globals](../globals.md) › ["blessed/node"](../modules/_blessed_node_.md) › [VisitorOptions](_blessed_node_.visitoroptions.md)

# Interface: VisitorOptions

settings for visitDescendants regarding visiting order and visit interruption modes.

## Hierarchy

* **VisitorOptions**

## Index

### Properties

* [breakOnDescendantSignal](_blessed_node_.visitoroptions.md#optional-breakondescendantsignal)
* [childrenFirst](_blessed_node_.visitoroptions.md#optional-childrenfirst)
* [visitDescendantsOnSelfSignalAnyway](_blessed_node_.visitoroptions.md#optional-visitdescendantsonselfsignalanyway)

## Properties

### `Optional` breakOnDescendantSignal

• **breakOnDescendantSignal**? : *boolean*

*Defined in [blessed/node.ts:15](https://github.com/cancerberoSgx/accursed/blob/5b2518e/src/blessed/node.ts#L15)*

if a descendant visitor returned true, we stop visiting and signal up

___

### `Optional` childrenFirst

• **childrenFirst**? : *boolean*

*Defined in [blessed/node.ts:11](https://github.com/cancerberoSgx/accursed/blob/5b2518e/src/blessed/node.ts#L11)*

___

### `Optional` visitDescendantsOnSelfSignalAnyway

• **visitDescendantsOnSelfSignalAnyway**? : *boolean*

*Defined in [blessed/node.ts:19](https://github.com/cancerberoSgx/accursed/blob/5b2518e/src/blessed/node.ts#L19)*

no matter if visitor returns true for a node, it will still visit its descendants and then break the chain
