**[mirada](../README.md)**

[Globals](../README.md) › ["types/opencv/Node"](../modules/_types_opencv_node_.md) › [Node](_types_opencv_node_.node.md)

# Class: Node

## Hierarchy

* **Node**

## Index

### Constructors

* [constructor](_types_opencv_node_.node.md#constructor)

### Properties

* [classIdx](_types_opencv_node_.node.md#classidx)
* [defaultDir](_types_opencv_node_.node.md#defaultdir)
* [left](_types_opencv_node_.node.md#left)
* [parent](_types_opencv_node_.node.md#parent)
* [right](_types_opencv_node_.node.md#right)
* [split](_types_opencv_node_.node.md#split)
* [value](_types_opencv_node_.node.md#value)

## Constructors

###  constructor

\+ **new Node**(): *[Node](_types_opencv_node_.node.md)*

*Defined in [types/opencv/Node.ts:32](https://github.com/cancerberoSgx/mirada/blob/eecc091/mirada/src/types/opencv/Node.ts#L32)*

**Returns:** *[Node](_types_opencv_node_.node.md)*

## Properties

###  classIdx

• **classIdx**: *[int](../modules/_types_opencv__hacks_.md#int)*

*Defined in [types/opencv/Node.ts:11](https://github.com/cancerberoSgx/mirada/blob/eecc091/mirada/src/types/opencv/Node.ts#L11)*

  Class index normalized to 0..class_count-1 range and assigned to the node. It is used internally
in classification trees and tree ensembles.

___

###  defaultDir

• **defaultDir**: *[int](../modules/_types_opencv__hacks_.md#int)*

*Defined in [types/opencv/Node.ts:17](https://github.com/cancerberoSgx/mirada/blob/eecc091/mirada/src/types/opencv/Node.ts#L17)*

  Default direction where to go (-1: left or +1: right). It helps in the case of missing values.

___

###  left

• **left**: *[int](../modules/_types_opencv__hacks_.md#int)*

*Defined in [types/opencv/Node.ts:19](https://github.com/cancerberoSgx/mirada/blob/eecc091/mirada/src/types/opencv/Node.ts#L19)*

___

###  parent

• **parent**: *[int](../modules/_types_opencv__hacks_.md#int)*

*Defined in [types/opencv/Node.ts:21](https://github.com/cancerberoSgx/mirada/blob/eecc091/mirada/src/types/opencv/Node.ts#L21)*

___

###  right

• **right**: *[int](../modules/_types_opencv__hacks_.md#int)*

*Defined in [types/opencv/Node.ts:23](https://github.com/cancerberoSgx/mirada/blob/eecc091/mirada/src/types/opencv/Node.ts#L23)*

___

###  split

• **split**: *[int](../modules/_types_opencv__hacks_.md#int)*

*Defined in [types/opencv/Node.ts:25](https://github.com/cancerberoSgx/mirada/blob/eecc091/mirada/src/types/opencv/Node.ts#L25)*

___

###  value

• **value**: *[double](../modules/_types_opencv__hacks_.md#double)*

*Defined in [types/opencv/Node.ts:32](https://github.com/cancerberoSgx/mirada/blob/eecc091/mirada/src/types/opencv/Node.ts#L32)*

  Value at the node: a class label in case of classification or estimated function value in case of
regression.