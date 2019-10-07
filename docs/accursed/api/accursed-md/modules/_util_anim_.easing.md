[accursed](../README.md) › [Globals](../globals.md) › ["util/anim"](_util_anim_.md) › [easing](_util_anim_.easing.md)

# Module: easing

## Index

### Variables

* [b](_util_anim_.easing.md#let-b)
* [c](_util_anim_.easing.md#let-c)

### Functions

* [back](_util_anim_.easing.md#const-back)
* [bounceEaseInOut](_util_anim_.easing.md#const-bounceeaseinout)
* [bounceEasyOut](_util_anim_.easing.md#const-bounceeasyout)
* [bounceFn](_util_anim_.easing.md#bouncefn)
* [easeInBounce](_util_anim_.easing.md#const-easeinbounce)
* [easeInCubic](_util_anim_.easing.md#const-easeincubic)
* [easeInElastic](_util_anim_.easing.md#const-easeinelastic)
* [easeInExpo](_util_anim_.easing.md#const-easeinexpo)
* [easeInOutBack](_util_anim_.easing.md#const-easeinoutback)
* [easeInOutBounce](_util_anim_.easing.md#const-easeinoutbounce)
* [easeInOutCubic](_util_anim_.easing.md#const-easeinoutcubic)
* [easeInOutElastic](_util_anim_.easing.md#const-easeinoutelastic)
* [easeInOutExpo](_util_anim_.easing.md#const-easeinoutexpo)
* [easeInOutQuad](_util_anim_.easing.md#const-easeinoutquad)
* [easeInOutQuart](_util_anim_.easing.md#const-easeinoutquart)
* [easeInOutQuint](_util_anim_.easing.md#const-easeinoutquint)
* [easeInQuad](_util_anim_.easing.md#const-easeinquad)
* [easeInQuart](_util_anim_.easing.md#const-easeinquart)
* [easeInQuint](_util_anim_.easing.md#const-easeinquint)
* [easeInSine](_util_anim_.easing.md#const-easeinsine)
* [easeOutBack](_util_anim_.easing.md#const-easeoutback)
* [easeOutBounce](_util_anim_.easing.md#const-easeoutbounce)
* [easeOutCubic](_util_anim_.easing.md#const-easeoutcubic)
* [easeOutElastic](_util_anim_.easing.md#const-easeoutelastic)
* [easeOutQuad](_util_anim_.easing.md#const-easeoutquad)
* [easeOutQuint](_util_anim_.easing.md#const-easeoutquint)
* [elastic](_util_anim_.easing.md#const-elastic)
* [makeEaseInOut](_util_anim_.easing.md#makeeaseinout)
* [makeEaseOut](_util_anim_.easing.md#makeeaseout)
* [quad](_util_anim_.easing.md#quad)

## Variables

### `Let` b

• **b**: *number* = 0

*Defined in [util/anim.ts:76](https://github.com/cancerberoSgx/accursed/blob/5b2518e/src/util/anim.ts#L76)*

___

### `Let` c

• **c**: *number* = 1

*Defined in [util/anim.ts:75](https://github.com/cancerberoSgx/accursed/blob/5b2518e/src/util/anim.ts#L75)*

## Functions

### `Const` back

▸ **back**(`x`: number): *(Anonymous function)*

*Defined in [util/anim.ts:59](https://github.com/cancerberoSgx/accursed/blob/5b2518e/src/util/anim.ts#L59)*

“bow shooting”. First we “pull the bowstring”, and then “shoot”.

**Parameters:**

Name | Type | Default | Description |
------ | ------ | ------ | ------ |
`x` | number | 1.5 | “elasticity coefficient”. The distance of “bowstring pulling” is defined by it. Default value 1.5.  |

**Returns:** *(Anonymous function)*

___

### `Const` bounceEaseInOut

▸ **bounceEaseInOut**(): *(Anonymous function)*

*Defined in [util/anim.ts:73](https://github.com/cancerberoSgx/accursed/blob/5b2518e/src/util/anim.ts#L73)*

**Returns:** *(Anonymous function)*

___

### `Const` bounceEasyOut

▸ **bounceEasyOut**(): *(Anonymous function)*

*Defined in [util/anim.ts:47](https://github.com/cancerberoSgx/accursed/blob/5b2518e/src/util/anim.ts#L47)*

Imagine we are dropping a ball. It falls down, then bounces back a few times and stops. The bounce function does the same, but in the reverse order: “bouncing” starts immediately.

**Returns:** *(Anonymous function)*

___

###  bounceFn

▸ **bounceFn**(`timeFraction`: number): *number*

*Defined in [util/anim.ts:38](https://github.com/cancerberoSgx/accursed/blob/5b2518e/src/util/anim.ts#L38)*

**Parameters:**

Name | Type |
------ | ------ |
`timeFraction` | number |

**Returns:** *number*

___

### `Const` easeInBounce

▸ **easeInBounce**(): *any*

*Defined in [util/anim.ts:260](https://github.com/cancerberoSgx/accursed/blob/5b2518e/src/util/anim.ts#L260)*

**Returns:** *any*

___

### `Const` easeInCubic

▸ **easeInCubic**(): *any*

*Defined in [util/anim.ts:123](https://github.com/cancerberoSgx/accursed/blob/5b2518e/src/util/anim.ts#L123)*

**Returns:** *any*

___

### `Const` easeInElastic

▸ **easeInElastic**(): *any*

*Defined in [util/anim.ts:89](https://github.com/cancerberoSgx/accursed/blob/5b2518e/src/util/anim.ts#L89)*

**Returns:** *any*

___

### `Const` easeInExpo

▸ **easeInExpo**(): *any*

*Defined in [util/anim.ts:174](https://github.com/cancerberoSgx/accursed/blob/5b2518e/src/util/anim.ts#L174)*

**Returns:** *any*

___

### `Const` easeInOutBack

▸ **easeInOutBack**(): *any*

*Defined in [util/anim.ts:243](https://github.com/cancerberoSgx/accursed/blob/5b2518e/src/util/anim.ts#L243)*

**Returns:** *any*

___

### `Const` easeInOutBounce

▸ **easeInOutBounce**(): *any*

*Defined in [util/anim.ts:267](https://github.com/cancerberoSgx/accursed/blob/5b2518e/src/util/anim.ts#L267)*

**Returns:** *any*

___

### `Const` easeInOutCubic

▸ **easeInOutCubic**(): *any*

*Defined in [util/anim.ts:137](https://github.com/cancerberoSgx/accursed/blob/5b2518e/src/util/anim.ts#L137)*

**Returns:** *any*

___

### `Const` easeInOutElastic

▸ **easeInOutElastic**(): *any*

*Defined in [util/anim.ts:195](https://github.com/cancerberoSgx/accursed/blob/5b2518e/src/util/anim.ts#L195)*

**Returns:** *any*

___

### `Const` easeInOutExpo

▸ **easeInOutExpo**(): *any*

*Defined in [util/anim.ts:233](https://github.com/cancerberoSgx/accursed/blob/5b2518e/src/util/anim.ts#L233)*

**Returns:** *any*

___

### `Const` easeInOutQuad

▸ **easeInOutQuad**(): *any*

*Defined in [util/anim.ts:82](https://github.com/cancerberoSgx/accursed/blob/5b2518e/src/util/anim.ts#L82)*

**Returns:** *any*

___

### `Const` easeInOutQuart

▸ **easeInOutQuart**(): *any*

*Defined in [util/anim.ts:152](https://github.com/cancerberoSgx/accursed/blob/5b2518e/src/util/anim.ts#L152)*

**Returns:** *any*

___

### `Const` easeInOutQuint

▸ **easeInOutQuint**(): *any*

*Defined in [util/anim.ts:181](https://github.com/cancerberoSgx/accursed/blob/5b2518e/src/util/anim.ts#L181)*

**Returns:** *any*

___

### `Const` easeInQuad

▸ **easeInQuad**(): *any*

*Defined in [util/anim.ts:77](https://github.com/cancerberoSgx/accursed/blob/5b2518e/src/util/anim.ts#L77)*

**Returns:** *any*

___

### `Const` easeInQuart

▸ **easeInQuart**(): *any*

*Defined in [util/anim.ts:145](https://github.com/cancerberoSgx/accursed/blob/5b2518e/src/util/anim.ts#L145)*

**Returns:** *any*

___

### `Const` easeInQuint

▸ **easeInQuint**(): *any*

*Defined in [util/anim.ts:160](https://github.com/cancerberoSgx/accursed/blob/5b2518e/src/util/anim.ts#L160)*

**Returns:** *any*

___

### `Const` easeInSine

▸ **easeInSine**(): *any*

*Defined in [util/anim.ts:189](https://github.com/cancerberoSgx/accursed/blob/5b2518e/src/util/anim.ts#L189)*

**Returns:** *any*

___

### `Const` easeOutBack

▸ **easeOutBack**(): *any*

*Defined in [util/anim.ts:252](https://github.com/cancerberoSgx/accursed/blob/5b2518e/src/util/anim.ts#L252)*

**Returns:** *any*

___

### `Const` easeOutBounce

▸ **easeOutBounce**(): *any*

*Defined in [util/anim.ts:108](https://github.com/cancerberoSgx/accursed/blob/5b2518e/src/util/anim.ts#L108)*

**Returns:** *any*

___

### `Const` easeOutCubic

▸ **easeOutCubic**(): *any*

*Defined in [util/anim.ts:130](https://github.com/cancerberoSgx/accursed/blob/5b2518e/src/util/anim.ts#L130)*

**Returns:** *any*

___

### `Const` easeOutElastic

▸ **easeOutElastic**(): *any*

*Defined in [util/anim.ts:215](https://github.com/cancerberoSgx/accursed/blob/5b2518e/src/util/anim.ts#L215)*

**Returns:** *any*

___

### `Const` easeOutQuad

▸ **easeOutQuad**(): *any*

*Defined in [util/anim.ts:80](https://github.com/cancerberoSgx/accursed/blob/5b2518e/src/util/anim.ts#L80)*

**Returns:** *any*

___

### `Const` easeOutQuint

▸ **easeOutQuint**(): *any*

*Defined in [util/anim.ts:167](https://github.com/cancerberoSgx/accursed/blob/5b2518e/src/util/anim.ts#L167)*

**Returns:** *any*

___

### `Const` elastic

▸ **elastic**(`x`: number): *(Anonymous function)*

*Defined in [util/anim.ts:63](https://github.com/cancerberoSgx/accursed/blob/5b2518e/src/util/anim.ts#L63)*

**Parameters:**

Name | Type | Default | Description |
------ | ------ | ------ | ------ |
`x` | number | 1.5 | “initial range”  |

**Returns:** *(Anonymous function)*

___

###  makeEaseInOut

▸ **makeEaseInOut**(`timing`: [Timing](_util_anim_.md#timing)): *(Anonymous function)*

*Defined in [util/anim.ts:66](https://github.com/cancerberoSgx/accursed/blob/5b2518e/src/util/anim.ts#L66)*

**Parameters:**

Name | Type |
------ | ------ |
`timing` | [Timing](_util_anim_.md#timing) |

**Returns:** *(Anonymous function)*

___

###  makeEaseOut

▸ **makeEaseOut**(`timing`: [Timing](_util_anim_.md#timing)): *(Anonymous function)*

*Defined in [util/anim.ts:32](https://github.com/cancerberoSgx/accursed/blob/5b2518e/src/util/anim.ts#L32)*

**Parameters:**

Name | Type |
------ | ------ |
`timing` | [Timing](_util_anim_.md#timing) |

**Returns:** *(Anonymous function)*

___

###  quad

▸ **quad**(`timeFraction`: number): *number*

*Defined in [util/anim.ts:50](https://github.com/cancerberoSgx/accursed/blob/5b2518e/src/util/anim.ts#L50)*

parabolic curve

**Parameters:**

Name | Type |
------ | ------ |
`timeFraction` | number |

**Returns:** *number*
