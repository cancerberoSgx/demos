[mirada](../README.md) › ["types/opencv/BOWTrainer"](../modules/_types_opencv_bowtrainer_.md) › [BOWTrainer](_types_opencv_bowtrainer_.bowtrainer.md)

# Class: BOWTrainer


For details, see, for example, *Visual Categorization with Bags of Keypoints* by Gabriella Csurka,
Christopher R. Dance, Lixin Fan, Jutta Willamowski, Cedric Bray, 2004. :

Source:
[opencv2/features2d.hpp](https://github.com/opencv/opencv/tree/master/modules/core/include/opencv2/features2d.hpp#L1339).

## Hierarchy

* **BOWTrainer**

## Index

### Constructors

* [constructor](_types_opencv_bowtrainer_.bowtrainer.md#constructor)

### Methods

* [add](_types_opencv_bowtrainer_.bowtrainer.md#add)
* [clear](_types_opencv_bowtrainer_.bowtrainer.md#clear)
* [cluster](_types_opencv_bowtrainer_.bowtrainer.md#cluster)
* [descriptorsCount](_types_opencv_bowtrainer_.bowtrainer.md#descriptorscount)
* [getDescriptors](_types_opencv_bowtrainer_.bowtrainer.md#getdescriptors)

## Constructors

###  constructor

\+ **new BOWTrainer**(): *[BOWTrainer](_types_opencv_bowtrainer_.bowtrainer.md)*

*Defined in [types/opencv/BOWTrainer.ts:12](https://github.com/cancerberoSgx/mirada/blob/f0c0267/mirada/src/types/opencv/BOWTrainer.ts#L12)*

**Returns:** *[BOWTrainer](_types_opencv_bowtrainer_.bowtrainer.md)*

## Methods

###  add

▸ **add**(`descriptors`: [Mat](_types_opencv_mat_.mat.md)): *[Mat](_types_opencv_mat_.mat.md)*

*Defined in [types/opencv/BOWTrainer.ts:22](https://github.com/cancerberoSgx/mirada/blob/f0c0267/mirada/src/types/opencv/BOWTrainer.ts#L22)*

  The training set is clustered using clustermethod to construct the vocabulary.

**Parameters:**

Name | Type | Description |
------ | ------ | ------ |
`descriptors` | [Mat](_types_opencv_mat_.mat.md) | Descriptors to add to a training set. Each row of the descriptors matrix is a descriptor.  |

**Returns:** *[Mat](_types_opencv_mat_.mat.md)*

___

###  clear

▸ **clear**(): *void*

*Defined in [types/opencv/BOWTrainer.ts:24](https://github.com/cancerberoSgx/mirada/blob/f0c0267/mirada/src/types/opencv/BOWTrainer.ts#L24)*

**Returns:** *void*

___

###  cluster

▸ **cluster**(): *[Mat](_types_opencv_mat_.mat.md)*

*Defined in [types/opencv/BOWTrainer.ts:30](https://github.com/cancerberoSgx/mirada/blob/f0c0267/mirada/src/types/opencv/BOWTrainer.ts#L30)*

  This is an overloaded member function, provided for convenience. It differs from the above
function only in what argument(s) it accepts.

**Returns:** *[Mat](_types_opencv_mat_.mat.md)*

▸ **cluster**(`descriptors`: [Mat](_types_opencv_mat_.mat.md)): *[Mat](_types_opencv_mat_.mat.md)*

*Defined in [types/opencv/BOWTrainer.ts:40](https://github.com/cancerberoSgx/mirada/blob/f0c0267/mirada/src/types/opencv/BOWTrainer.ts#L40)*

  The vocabulary consists of cluster centers. So, this method returns the vocabulary. In the first
variant of the method, train descriptors stored in the object are clustered. In the second variant,
input descriptors are clustered.

**Parameters:**

Name | Type | Description |
------ | ------ | ------ |
`descriptors` | [Mat](_types_opencv_mat_.mat.md) | Descriptors to cluster. Each row of the descriptors matrix is a descriptor. Descriptors are not added to the inner train descriptor set.  |

**Returns:** *[Mat](_types_opencv_mat_.mat.md)*

___

###  descriptorsCount

▸ **descriptorsCount**(): *[int](../modules/_types_opencv__hacks_.md#int)*

*Defined in [types/opencv/BOWTrainer.ts:42](https://github.com/cancerberoSgx/mirada/blob/f0c0267/mirada/src/types/opencv/BOWTrainer.ts#L42)*

**Returns:** *[int](../modules/_types_opencv__hacks_.md#int)*

___

###  getDescriptors

▸ **getDescriptors**(): *[Mat](_types_opencv_mat_.mat.md)*

*Defined in [types/opencv/BOWTrainer.ts:44](https://github.com/cancerberoSgx/mirada/blob/f0c0267/mirada/src/types/opencv/BOWTrainer.ts#L44)*

**Returns:** *[Mat](_types_opencv_mat_.mat.md)*