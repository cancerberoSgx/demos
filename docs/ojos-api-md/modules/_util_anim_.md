[ojos](../README.md) › ["util/anim"](_util_anim_.md)

# External module: "util/anim"

## Index

### Interfaces

* [AnimateOptions](../interfaces/_util_anim_.animateoptions.md)

### Type aliases

* [Easing](_util_anim_.md#easing)

### Variables

* [easingNames](_util_anim_.md#const-easingnames)

### Functions

* [animate](_util_anim_.md#animate)

### Object literals

* [easingExclude](_util_anim_.md#const-easingexclude)

## Type aliases

###  Easing

Ƭ **Easing**: *keyof RemoveProperties<easing, keyof object>*

*Defined in [util/anim.ts:10](https://github.com/cancerberoSgx/mirada/blob/3544b58/ojos/src/util/anim.ts#L10)*

## Variables

### `Const` easingNames

• **easingNames**: *"bounceEasyOut" | "back" | "elastic" | "bounceEaseInOut" | "easeInQuad" | "easeOutQuad" | "easeInOutQuad" | "easeInElastic" | "easeOutBounce" | "easeInCubic" | "easeOutCubic" | "easeInOutCubic" | "easeOutQuint" | "easeInExpo" | "easeInOutQuint" | "easeInSine" | "easeInOutElastic" | "easeOutElastic" | "easeInOutExpo" | "easeInOutBack" | "easeOutBack" | "easeInBounce" | "easeInOutBounce"[]* =  objectKeys(easing).filter(f => !objectKeys(easingExclude).includes(f as any)) as Easing[]

*Defined in [util/anim.ts:12](https://github.com/cancerberoSgx/mirada/blob/3544b58/ojos/src/util/anim.ts#L12)*

## Functions

###  animate

▸ **animate**(`o`: [AnimateOptions](../interfaces/_util_anim_.animateoptions.md)): *Promise‹void›*

*Defined in [util/anim.ts:22](https://github.com/cancerberoSgx/mirada/blob/3544b58/ojos/src/util/anim.ts#L22)*

**Parameters:**

Name | Type |
------ | ------ |
`o` | [AnimateOptions](../interfaces/_util_anim_.animateoptions.md) |

**Returns:** *Promise‹void›*

## Object literals

### `Const` easingExclude

### ▪ **easingExclude**: *object*

*Defined in [util/anim.ts:3](https://github.com/cancerberoSgx/mirada/blob/3544b58/ojos/src/util/anim.ts#L3)*

###  easeInOutQuart

• **easeInOutQuart**: *number* = 1

*Defined in [util/anim.ts:7](https://github.com/cancerberoSgx/mirada/blob/3544b58/ojos/src/util/anim.ts#L7)*

###  easeInQuart

• **easeInQuart**: *number* = 1

*Defined in [util/anim.ts:5](https://github.com/cancerberoSgx/mirada/blob/3544b58/ojos/src/util/anim.ts#L5)*

###  easeInQuint

• **easeInQuint**: *number* = 1

*Defined in [util/anim.ts:6](https://github.com/cancerberoSgx/mirada/blob/3544b58/ojos/src/util/anim.ts#L6)*

###  quad

• **quad**: *number* = 1

*Defined in [util/anim.ts:4](https://github.com/cancerberoSgx/mirada/blob/3544b58/ojos/src/util/anim.ts#L4)*
