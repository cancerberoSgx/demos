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

*Defined in [util/anim.ts:81](https://github.com/cancerberoSgx/accursed/blob/468bf3c/src/util/anim.ts#L81)*

___

### `Let` c

• **c**: *number* = 1

*Defined in [util/anim.ts:80](https://github.com/cancerberoSgx/accursed/blob/468bf3c/src/util/anim.ts#L80)*

## Functions

### `Const` back

▸ **back**(`x`: number): *(Anonymous function)*

*Defined in [util/anim.ts:64](https://github.com/cancerberoSgx/accursed/blob/468bf3c/src/util/anim.ts#L64)*

“bow shooting”. First we “pull the bowstring”, and then “shoot”.

**Parameters:**

Name | Type | Default | Description |
------ | ------ | ------ | ------ |
`x` | number | 1.5 | “elasticity coefficient”. The distance of “bowstring pulling” is defined by it. Default value 1.5.  |

**Returns:** *(Anonymous function)*

___

### `Const` bounceEaseInOut

▸ **bounceEaseInOut**(): *(Anonymous function)*

*Defined in [util/anim.ts:78](https://github.com/cancerberoSgx/accursed/blob/468bf3c/src/util/anim.ts#L78)*

**Returns:** *(Anonymous function)*

___

### `Const` bounceEasyOut

▸ **bounceEasyOut**(): *(Anonymous function)*

*Defined in [util/anim.ts:52](https://github.com/cancerberoSgx/accursed/blob/468bf3c/src/util/anim.ts#L52)*

Imagine we are dropping a ball. It falls down, then bounces back a few times and stops. The bounce function does the same, but in the reverse order: “bouncing” starts immediately.

**Returns:** *(Anonymous function)*

___

###  bounceFn

▸ **bounceFn**(`timeFraction`: number): *number*

*Defined in [util/anim.ts:43](https://github.com/cancerberoSgx/accursed/blob/468bf3c/src/util/anim.ts#L43)*

**Parameters:**

Name | Type |
------ | ------ |
`timeFraction` | number |

**Returns:** *number*

___

### `Const` easeInBounce

▸ **easeInBounce**(): *any*

*Defined in [util/anim.ts:265](https://github.com/cancerberoSgx/accursed/blob/468bf3c/src/util/anim.ts#L265)*

**Returns:** *any*

___

### `Const` easeInCubic

▸ **easeInCubic**(): *any*

*Defined in [util/anim.ts:128](https://github.com/cancerberoSgx/accursed/blob/468bf3c/src/util/anim.ts#L128)*

**Returns:** *any*

___

### `Const` easeInElastic

▸ **easeInElastic**(): *any*

*Defined in [util/anim.ts:94](https://github.com/cancerberoSgx/accursed/blob/468bf3c/src/util/anim.ts#L94)*

**Returns:** *any*

___

### `Const` easeInExpo

▸ **easeInExpo**(): *any*

*Defined in [util/anim.ts:179](https://github.com/cancerberoSgx/accursed/blob/468bf3c/src/util/anim.ts#L179)*

**Returns:** *any*

___

### `Const` easeInOutBack

▸ **easeInOutBack**(): *any*

*Defined in [util/anim.ts:248](https://github.com/cancerberoSgx/accursed/blob/468bf3c/src/util/anim.ts#L248)*

**Returns:** *any*

___

### `Const` easeInOutBounce

▸ **easeInOutBounce**(): *any*

*Defined in [util/anim.ts:272](https://github.com/cancerberoSgx/accursed/blob/468bf3c/src/util/anim.ts#L272)*

**Returns:** *any*

___

### `Const` easeInOutCubic

▸ **easeInOutCubic**(): *any*

*Defined in [util/anim.ts:142](https://github.com/cancerberoSgx/accursed/blob/468bf3c/src/util/anim.ts#L142)*

**Returns:** *any*

___

### `Const` easeInOutElastic

▸ **easeInOutElastic**(): *any*

*Defined in [util/anim.ts:200](https://github.com/cancerberoSgx/accursed/blob/468bf3c/src/util/anim.ts#L200)*

**Returns:** *any*

___

### `Const` easeInOutExpo

▸ **easeInOutExpo**(): *any*

*Defined in [util/anim.ts:238](https://github.com/cancerberoSgx/accursed/blob/468bf3c/src/util/anim.ts#L238)*

**Returns:** *any*

___

### `Const` easeInOutQuad

▸ **easeInOutQuad**(): *any*

*Defined in [util/anim.ts:87](https://github.com/cancerberoSgx/accursed/blob/468bf3c/src/util/anim.ts#L87)*

**Returns:** *any*

___

### `Const` easeInOutQuart

▸ **easeInOutQuart**(): *any*

*Defined in [util/anim.ts:157](https://github.com/cancerberoSgx/accursed/blob/468bf3c/src/util/anim.ts#L157)*

**Returns:** *any*

___

### `Const` easeInOutQuint

▸ **easeInOutQuint**(): *any*

*Defined in [util/anim.ts:186](https://github.com/cancerberoSgx/accursed/blob/468bf3c/src/util/anim.ts#L186)*

**Returns:** *any*

___

### `Const` easeInQuad

▸ **easeInQuad**(): *any*

*Defined in [util/anim.ts:82](https://github.com/cancerberoSgx/accursed/blob/468bf3c/src/util/anim.ts#L82)*

**Returns:** *any*

___

### `Const` easeInQuart

▸ **easeInQuart**(): *any*

*Defined in [util/anim.ts:150](https://github.com/cancerberoSgx/accursed/blob/468bf3c/src/util/anim.ts#L150)*

**Returns:** *any*

___

### `Const` easeInQuint

▸ **easeInQuint**(): *any*

*Defined in [util/anim.ts:165](https://github.com/cancerberoSgx/accursed/blob/468bf3c/src/util/anim.ts#L165)*

**Returns:** *any*

___

### `Const` easeInSine

▸ **easeInSine**(): *any*

*Defined in [util/anim.ts:194](https://github.com/cancerberoSgx/accursed/blob/468bf3c/src/util/anim.ts#L194)*

**Returns:** *any*

___

### `Const` easeOutBack

▸ **easeOutBack**(): *any*

*Defined in [util/anim.ts:257](https://github.com/cancerberoSgx/accursed/blob/468bf3c/src/util/anim.ts#L257)*

**Returns:** *any*

___

### `Const` easeOutBounce

▸ **easeOutBounce**(): *any*

*Defined in [util/anim.ts:113](https://github.com/cancerberoSgx/accursed/blob/468bf3c/src/util/anim.ts#L113)*

**Returns:** *any*

___

### `Const` easeOutCubic

▸ **easeOutCubic**(): *any*

*Defined in [util/anim.ts:135](https://github.com/cancerberoSgx/accursed/blob/468bf3c/src/util/anim.ts#L135)*

**Returns:** *any*

___

### `Const` easeOutElastic

▸ **easeOutElastic**(): *any*

*Defined in [util/anim.ts:220](https://github.com/cancerberoSgx/accursed/blob/468bf3c/src/util/anim.ts#L220)*

**Returns:** *any*

___

### `Const` easeOutQuad

▸ **easeOutQuad**(): *any*

*Defined in [util/anim.ts:85](https://github.com/cancerberoSgx/accursed/blob/468bf3c/src/util/anim.ts#L85)*

**Returns:** *any*

___

### `Const` easeOutQuint

▸ **easeOutQuint**(): *any*

*Defined in [util/anim.ts:172](https://github.com/cancerberoSgx/accursed/blob/468bf3c/src/util/anim.ts#L172)*

**Returns:** *any*

___

### `Const` elastic

▸ **elastic**(`x`: number): *(Anonymous function)*

*Defined in [util/anim.ts:68](https://github.com/cancerberoSgx/accursed/blob/468bf3c/src/util/anim.ts#L68)*

**Parameters:**

Name | Type | Default | Description |
------ | ------ | ------ | ------ |
`x` | number | 1.5 | “initial range”  |

**Returns:** *(Anonymous function)*

___

###  makeEaseInOut

▸ **makeEaseInOut**(`timing`: [Timing](_util_anim_.md#timing)): *(Anonymous function)*

*Defined in [util/anim.ts:71](https://github.com/cancerberoSgx/accursed/blob/468bf3c/src/util/anim.ts#L71)*

**Parameters:**

Name | Type |
------ | ------ |
`timing` | [Timing](_util_anim_.md#timing) |

**Returns:** *(Anonymous function)*

___

###  makeEaseOut

▸ **makeEaseOut**(`timing`: [Timing](_util_anim_.md#timing)): *(Anonymous function)*

*Defined in [util/anim.ts:37](https://github.com/cancerberoSgx/accursed/blob/468bf3c/src/util/anim.ts#L37)*

**Parameters:**

Name | Type |
------ | ------ |
`timing` | [Timing](_util_anim_.md#timing) |

**Returns:** *(Anonymous function)*

___

###  quad

▸ **quad**(`timeFraction`: number): *number*

*Defined in [util/anim.ts:55](https://github.com/cancerberoSgx/accursed/blob/468bf3c/src/util/anim.ts#L55)*

parabolic curve

**Parameters:**

Name | Type |
------ | ------ |
`timeFraction` | number |

**Returns:** *number*
