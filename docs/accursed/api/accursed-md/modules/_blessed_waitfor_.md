[accursed](../README.md) > ["blessed/waitFor"](../modules/_blessed_waitfor_.md)

# External module: "blessed/waitFor"

## Index

### Interfaces

* [WaitForPredicateOptions](../interfaces/_blessed_waitfor_.waitforpredicateoptions.md)

### Functions

* [isAttached](_blessed_waitfor_.md#isattached)
* [waitForAttached](_blessed_waitfor_.md#waitforattached)
* [waitForPredicate](_blessed_waitfor_.md#waitforpredicate)
* [waitForRender](_blessed_waitfor_.md#waitforrender)

### Object literals

* [defaultOptions](_blessed_waitfor_.md#defaultoptions)

---

## Functions

<a id="isattached"></a>

###  isAttached

▸ **isAttached**(e: *[Element](../interfaces/_jsx_types_.__global.jsx.element.md)*, to?: *[Screen](../classes/_declarations_blessed_d_.widgets.screen.md)*): `boolean`

*Defined in [blessed/waitFor.ts:34](https://github.com/cancerberoSgx/accursed/blob/978b980/src/blessed/waitFor.ts#L34)*

**Parameters:**

| Name | Type |
| ------ | ------ |
| e | [Element](../interfaces/_jsx_types_.__global.jsx.element.md) |
| `Optional` to | [Screen](../classes/_declarations_blessed_d_.widgets.screen.md) |

**Returns:** `boolean`

___
<a id="waitforattached"></a>

###  waitForAttached

▸ **waitForAttached**(e: *[Element](../interfaces/_jsx_types_.__global.jsx.element.md)*, options?: *[WaitForPredicateOptions](../interfaces/_blessed_waitfor_.waitforpredicateoptions.md)*): `Promise`<`boolean`>

*Defined in [blessed/waitFor.ts:41](https://github.com/cancerberoSgx/accursed/blob/978b980/src/blessed/waitFor.ts#L41)*

**Parameters:**

| Name | Type | Default value |
| ------ | ------ | ------ |
| e | [Element](../interfaces/_jsx_types_.__global.jsx.element.md) | - |
| `Default value` options | [WaitForPredicateOptions](../interfaces/_blessed_waitfor_.waitforpredicateoptions.md) |  { interval: 200, timeout: 3000 } |

**Returns:** `Promise`<`boolean`>

___
<a id="waitforpredicate"></a>

###  waitForPredicate

▸ **waitForPredicate**<`T`>(p: *`function`*, options?: *[WaitForPredicateOptions](../interfaces/_blessed_waitfor_.waitforpredicateoptions.md) \| `string`*): `Promise`<`T`>

*Defined in [blessed/waitFor.ts:14](https://github.com/cancerberoSgx/accursed/blob/978b980/src/blessed/waitFor.ts#L14)*

**Type parameters:**

#### T 
**Parameters:**

| Name | Type | Default value |
| ------ | ------ | ------ |
| p | `function` | - |
| `Default value` options | [WaitForPredicateOptions](../interfaces/_blessed_waitfor_.waitforpredicateoptions.md) \| `string` |  { interval: 200, timeout: 3000 } |

**Returns:** `Promise`<`T`>

___
<a id="waitforrender"></a>

###  waitForRender

▸ **waitForRender**(e: *[Element](../interfaces/_jsx_types_.__global.jsx.element.md)*, options?: *[WaitForPredicateOptions](../interfaces/_blessed_waitfor_.waitforpredicateoptions.md)*): `Promise`<`void`>

*Defined in [blessed/waitFor.ts:44](https://github.com/cancerberoSgx/accursed/blob/978b980/src/blessed/waitFor.ts#L44)*

**Parameters:**

| Name | Type | Default value |
| ------ | ------ | ------ |
| e | [Element](../interfaces/_jsx_types_.__global.jsx.element.md) | - |
| `Default value` options | [WaitForPredicateOptions](../interfaces/_blessed_waitfor_.waitforpredicateoptions.md) |  { interval: 200, timeout: 3000 } |

**Returns:** `Promise`<`void`>

___

## Object literals

<a id="defaultoptions"></a>

### `<Const>` defaultOptions

**defaultOptions**: *`object`*

*Defined in [blessed/waitFor.ts:13](https://github.com/cancerberoSgx/accursed/blob/978b980/src/blessed/waitFor.ts#L13)*

<a id="defaultoptions.interval"></a>

####  interval

**● interval**: *`number`* = 200

*Defined in [blessed/waitFor.ts:13](https://github.com/cancerberoSgx/accursed/blob/978b980/src/blessed/waitFor.ts#L13)*

___
<a id="defaultoptions.timeout"></a>

####  timeout

**● timeout**: *`number`* = 3000

*Defined in [blessed/waitFor.ts:13](https://github.com/cancerberoSgx/accursed/blob/978b980/src/blessed/waitFor.ts#L13)*

___

___

