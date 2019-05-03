[accursed](../README.md) > ["util/anim"](../modules/_util_anim_.md)

# External module: "util/anim"

## Index

### Modules

* [easing](_util_anim_.easing.md)

### Type aliases

* [Timing](_util_anim_.md#timing)
* [TimingObject](_util_anim_.md#timingobject)

### Functions

* [animate](_util_anim_.md#animate)
* [requestAnimationFrame](_util_anim_.md#requestanimationframe)

---

## Type aliases

<a id="timing"></a>

###  Timing

**Ƭ Timing**: *`function`*

*Defined in [util/anim.ts:3](https://github.com/cancerberoSgx/accursed/blob/978b980/src/util/anim.ts#L3)*

#### Type declaration
▸(n: *`number`*, c?: *`number`*, d?: *`number`*, x?: *`number`*, y?: *`number`*): `number`

**Parameters:**

| Name | Type |
| ------ | ------ |
| n | `number` |
| `Optional` c | `number` |
| `Optional` d | `number` |
| `Optional` x | `number` |
| `Optional` y | `number` |

**Returns:** `number`

___
<a id="timingobject"></a>

###  TimingObject

**Ƭ TimingObject**: *`object`*

*Defined in [util/anim.ts:4](https://github.com/cancerberoSgx/accursed/blob/978b980/src/util/anim.ts#L4)*

#### Type declaration

 fn: `function`

▸(duration: *`number`*): [Timing](_util_anim_.md#timing)

**Parameters:**

| Name | Type |
| ------ | ------ |
| duration | `number` |

**Returns:** [Timing](_util_anim_.md#timing)

___

## Functions

<a id="animate"></a>

###  animate

▸ **animate**(__namedParameters: *`object`*): `void`

*Defined in [util/anim.ts:5](https://github.com/cancerberoSgx/accursed/blob/978b980/src/util/anim.ts#L5)*

**Parameters:**

**__namedParameters: `object`**

| Name | Type |
| ------ | ------ |
| draw | `function` |
| duration | `number` |
| lapse | `number` |
| timing | `function` \| `object` |

**Returns:** `void`

___
<a id="requestanimationframe"></a>

###  requestAnimationFrame

▸ **requestAnimationFrame**(f: *`any`*, lapse?: *`number`*): `void`

*Defined in [util/anim.ts:32](https://github.com/cancerberoSgx/accursed/blob/978b980/src/util/anim.ts#L32)*

**Parameters:**

| Name | Type | Default value |
| ------ | ------ | ------ |
| f | `any` | - |
| `Default value` lapse | `number` | 0 |

**Returns:** `void`

___

