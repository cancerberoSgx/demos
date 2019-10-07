[accursed](../README.md) › [Globals](../globals.md) › ["blessed/modal"](_blessed_modal_.md)

# External module: "blessed/modal"

## Index

### Variables

* [lastModalContent](_blessed_modal_.md#let-lastmodalcontent)
* [lastOnClosedListener](_blessed_modal_.md#let-lastonclosedlistener)
* [modalInstance](_blessed_modal_.md#let-modalinstance)

### Functions

* [closeModal](_blessed_modal_.md#closemodal)
* [isModalVisible](_blessed_modal_.md#ismodalvisible)
* [resetModals](_blessed_modal_.md#resetmodals)
* [showInModal](_blessed_modal_.md#showinmodal)

## Variables

### `Let` lastModalContent

• **lastModalContent**: *[Element](../interfaces/_jsx_types_.__global.jsx.element.md) | undefined*

*Defined in [blessed/modal.ts:55](https://github.com/cancerberoSgx/accursed/blob/5b2518e/src/blessed/modal.ts#L55)*

___

### `Let` lastOnClosedListener

• **lastOnClosedListener**: *undefined | function*

*Defined in [blessed/modal.ts:7](https://github.com/cancerberoSgx/accursed/blob/5b2518e/src/blessed/modal.ts#L7)*

___

### `Let` modalInstance

• **modalInstance**: *[Box](../classes/_declarations_blessed_d_.widget.box.md) | undefined*

*Defined in [blessed/modal.ts:54](https://github.com/cancerberoSgx/accursed/blob/5b2518e/src/blessed/modal.ts#L54)*

## Functions

###  closeModal

▸ **closeModal**(`screen`: [Screen](../classes/_declarations_blessed_d_.widgets.screen.md)): *void*

*Defined in [blessed/modal.ts:60](https://github.com/cancerberoSgx/accursed/blob/5b2518e/src/blessed/modal.ts#L60)*

Close current opened modal

**Parameters:**

Name | Type |
------ | ------ |
`screen` | [Screen](../classes/_declarations_blessed_d_.widgets.screen.md) |

**Returns:** *void*

___

###  isModalVisible

▸ **isModalVisible**(): *boolean*

*Defined in [blessed/modal.ts:87](https://github.com/cancerberoSgx/accursed/blob/5b2518e/src/blessed/modal.ts#L87)*

**Returns:** *boolean*

___

###  resetModals

▸ **resetModals**(): *void*

*Defined in [blessed/modal.ts:77](https://github.com/cancerberoSgx/accursed/blob/5b2518e/src/blessed/modal.ts#L77)*

Resets this manager. Useful when you are destroying / recreating screen to make sure there are no missing references to forgotten nodes.

**Returns:** *void*

___

###  showInModal

▸ **showInModal**(`screen`: [Screen](../classes/_declarations_blessed_d_.widgets.screen.md), `s`: string | [Element](../interfaces/_jsx_types_.__global.jsx.element.md), `title`: string, `width`: string, `height`: string, `onClosed?`: function): *[BoxElement](../classes/_declarations_blessed_d_.widgets.boxelement.md)*

*Defined in [blessed/modal.ts:12](https://github.com/cancerberoSgx/accursed/blob/5b2518e/src/blessed/modal.ts#L12)*

Easy to use modal: ``` showInModal(screen, anElement)``` or simply:  ``` showInModal(screen, 'some text')```

**Parameters:**

▪ **screen**: *[Screen](../classes/_declarations_blessed_d_.widgets.screen.md)*

▪ **s**: *string | [Element](../interfaces/_jsx_types_.__global.jsx.element.md)*

▪`Default value`  **title**: *string*= "Modal"

▪`Default value`  **width**: *string*= "50%"

▪`Default value`  **height**: *string*= "50%"

▪`Optional`  **onClosed**: *function*

▸ (): *void*

**Returns:** *[BoxElement](../classes/_declarations_blessed_d_.widgets.boxelement.md)*
