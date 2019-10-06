[accursed](../README.md) › [Globals](../globals.md) › ["util/anim"](_util_anim_.md)

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

## Type aliases

###  Timing

Ƭ **Timing**: *function*

*Defined in [util/anim.ts:3](https://github.com/cancerberoSgx/accursed/blob/468bf3c/src/util/anim.ts#L3)*

#### Type declaration:

▸ (`n`: number, `c?`: number, `d?`: number, `x?`: number, `y?`: number): *number*

**Parameters:**

Name | Type |
------ | ------ |
`n` | number |
`c?` | number |
`d?` | number |
`x?` | number |
`y?` | number |

___

###  TimingObject

Ƭ **TimingObject**: *object*

*Defined in [util/anim.ts:4](https://github.com/cancerberoSgx/accursed/blob/468bf3c/src/util/anim.ts#L4)*

#### Type declaration:

* **fn**(): *function*

  * (`duration`: number): *[Timing](_util_anim_.md#timing)*

## Functions

###  animate

▸ **animate**(`__namedParameters`: object): *void*

*Defined in [util/anim.ts:5](https://github.com/cancerberoSgx/accursed/blob/468bf3c/src/util/anim.ts#L5)*

**Parameters:**

▪ **__namedParameters**: *object*

Name | Type |
------ | ------ |
`draw` | function |
`duration` | number |
`lapse` | number |
`timing` | function &#124; object |

**Returns:** *void*

___

###  requestAnimationFrame

▸ **requestAnimationFrame**(`f`: function, `lapse`: number): *void*

*Defined in [util/anim.ts:32](https://github.com/cancerberoSgx/accursed/blob/468bf3c/src/util/anim.ts#L32)*

**Parameters:**

▪ **f**: *function*

▸ (...`args`: any[]): *any*

**Parameters:**

Name | Type |
------ | ------ |
`...args` | any[] |

▪`Default value`  **lapse**: *number*= 0

**Returns:** *void*
