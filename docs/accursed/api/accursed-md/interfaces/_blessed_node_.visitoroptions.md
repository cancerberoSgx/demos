[accursed](../README.md) > ["blessed/node"](../modules/_blessed_node_.md) > [VisitorOptions](../interfaces/_blessed_node_.visitoroptions.md)

# Interface: VisitorOptions

settings for visitDescendants regarding visiting order and visit interruption modes.

## Hierarchy

**VisitorOptions**

## Index

### Properties

* [breakOnDescendantSignal](_blessed_node_.visitoroptions.md#breakondescendantsignal)
* [childrenFirst](_blessed_node_.visitoroptions.md#childrenfirst)
* [visitDescendantsOnSelfSignalAnyway](_blessed_node_.visitoroptions.md#visitdescendantsonselfsignalanyway)

---

## Properties

<a id="breakondescendantsignal"></a>

### `<Optional>` breakOnDescendantSignal

**● breakOnDescendantSignal**: *`boolean`*

*Defined in [blessed/node.ts:15](https://github.com/cancerberoSgx/accursed/blob/978b980/src/blessed/node.ts#L15)*

if a descendant visitor returned true, we stop visiting and signal up

___
<a id="childrenfirst"></a>

### `<Optional>` childrenFirst

**● childrenFirst**: *`boolean`*

*Defined in [blessed/node.ts:11](https://github.com/cancerberoSgx/accursed/blob/978b980/src/blessed/node.ts#L11)*

___
<a id="visitdescendantsonselfsignalanyway"></a>

### `<Optional>` visitDescendantsOnSelfSignalAnyway

**● visitDescendantsOnSelfSignalAnyway**: *`boolean`*

*Defined in [blessed/node.ts:19](https://github.com/cancerberoSgx/accursed/blob/978b980/src/blessed/node.ts#L19)*

no matter if visitor returns true for a node, it will still visit its descendants and then break the chain

___

