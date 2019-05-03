[accursed](../README.md) > ["util/anim"](../modules/_util_anim_.md) > [easing](../modules/_util_anim_.easing.md)

# Module: easing

## Index

### Variables

* [b](_util_anim_.easing.md#b)
* [c](_util_anim_.easing.md#c)

### Functions

* [back](_util_anim_.easing.md#back)
* [bounceEaseInOut](_util_anim_.easing.md#bounceeaseinout)
* [bounceEasyOut](_util_anim_.easing.md#bounceeasyout)
* [bounceFn](_util_anim_.easing.md#bouncefn)
* [easeInBounce](_util_anim_.easing.md#easeinbounce)
* [easeInCubic](_util_anim_.easing.md#easeincubic)
* [easeInElastic](_util_anim_.easing.md#easeinelastic)
* [easeInExpo](_util_anim_.easing.md#easeinexpo)
* [easeInOutBack](_util_anim_.easing.md#easeinoutback)
* [easeInOutBounce](_util_anim_.easing.md#easeinoutbounce)
* [easeInOutCubic](_util_anim_.easing.md#easeinoutcubic)
* [easeInOutElastic](_util_anim_.easing.md#easeinoutelastic)
* [easeInOutExpo](_util_anim_.easing.md#easeinoutexpo)
* [easeInOutQuad](_util_anim_.easing.md#easeinoutquad)
* [easeInOutQuart](_util_anim_.easing.md#easeinoutquart)
* [easeInOutQuint](_util_anim_.easing.md#easeinoutquint)
* [easeInQuad](_util_anim_.easing.md#easeinquad)
* [easeInQuart](_util_anim_.easing.md#easeinquart)
* [easeInQuint](_util_anim_.easing.md#easeinquint)
* [easeInSine](_util_anim_.easing.md#easeinsine)
* [easeOutBack](_util_anim_.easing.md#easeoutback)
* [easeOutBounce](_util_anim_.easing.md#easeoutbounce)
* [easeOutCubic](_util_anim_.easing.md#easeoutcubic)
* [easeOutElastic](_util_anim_.easing.md#easeoutelastic)
* [easeOutQuad](_util_anim_.easing.md#easeoutquad)
* [easeOutQuint](_util_anim_.easing.md#easeoutquint)
* [elastic](_util_anim_.easing.md#elastic)
* [makeEaseInOut](_util_anim_.easing.md#makeeaseinout)
* [makeEaseOut](_util_anim_.easing.md#makeeaseout)
* [quad](_util_anim_.easing.md#quad)

---

## Variables

<a id="b"></a>

###  b

**● b**: *`number`* = 0

*Defined in [util/anim.ts:81](https://github.com/cancerberoSgx/accursed/blob/978b980/src/util/anim.ts#L81)*

___
<a id="c"></a>

###  c

**● c**: *`number`* = 1

*Defined in [util/anim.ts:80](https://github.com/cancerberoSgx/accursed/blob/978b980/src/util/anim.ts#L80)*

___

## Functions

<a id="back"></a>

### `<Const>` back

▸ **back**(x?: *`number`*): `(Anonymous function)`

*Defined in [util/anim.ts:64](https://github.com/cancerberoSgx/accursed/blob/978b980/src/util/anim.ts#L64)*

“bow shooting”. First we “pull the bowstring”, and then “shoot”.

**Parameters:**

| Name | Type | Default value | Description |
| ------ | ------ | ------ | ------ |
| `Default value` x | `number` | 1.5 |  “elasticity coefficient”. The distance of “bowstring pulling” is defined by it. Default value 1.5. |

**Returns:** `(Anonymous function)`

___
<a id="bounceeaseinout"></a>

### `<Const>` bounceEaseInOut

▸ **bounceEaseInOut**(): `(Anonymous function)`

*Defined in [util/anim.ts:78](https://github.com/cancerberoSgx/accursed/blob/978b980/src/util/anim.ts#L78)*

**Returns:** `(Anonymous function)`

___
<a id="bounceeasyout"></a>

### `<Const>` bounceEasyOut

▸ **bounceEasyOut**(): `(Anonymous function)`

*Defined in [util/anim.ts:52](https://github.com/cancerberoSgx/accursed/blob/978b980/src/util/anim.ts#L52)*

Imagine we are dropping a ball. It falls down, then bounces back a few times and stops. The bounce function does the same, but in the reverse order: “bouncing” starts immediately.

**Returns:** `(Anonymous function)`

___
<a id="bouncefn"></a>

###  bounceFn

▸ **bounceFn**(timeFraction: *`number`*): `number`

*Defined in [util/anim.ts:43](https://github.com/cancerberoSgx/accursed/blob/978b980/src/util/anim.ts#L43)*

**Parameters:**

| Name | Type |
| ------ | ------ |
| timeFraction | `number` |

**Returns:** `number`

___
<a id="easeinbounce"></a>

### `<Const>` easeInBounce

▸ **easeInBounce**(): `any`

*Defined in [util/anim.ts:257](https://github.com/cancerberoSgx/accursed/blob/978b980/src/util/anim.ts#L257)*

**Returns:** `any`

___
<a id="easeincubic"></a>

### `<Const>` easeInCubic

▸ **easeInCubic**(): `any`

*Defined in [util/anim.ts:124](https://github.com/cancerberoSgx/accursed/blob/978b980/src/util/anim.ts#L124)*

**Returns:** `any`

___
<a id="easeinelastic"></a>

### `<Const>` easeInElastic

▸ **easeInElastic**(): `any`

*Defined in [util/anim.ts:92](https://github.com/cancerberoSgx/accursed/blob/978b980/src/util/anim.ts#L92)*

**Returns:** `any`

___
<a id="easeinexpo"></a>

### `<Const>` easeInExpo

▸ **easeInExpo**(): `any`

*Defined in [util/anim.ts:175](https://github.com/cancerberoSgx/accursed/blob/978b980/src/util/anim.ts#L175)*

**Returns:** `any`

___
<a id="easeinoutback"></a>

### `<Const>` easeInOutBack

▸ **easeInOutBack**(): `any`

*Defined in [util/anim.ts:240](https://github.com/cancerberoSgx/accursed/blob/978b980/src/util/anim.ts#L240)*

**Returns:** `any`

___
<a id="easeinoutbounce"></a>

### `<Const>` easeInOutBounce

▸ **easeInOutBounce**(): `any`

*Defined in [util/anim.ts:264](https://github.com/cancerberoSgx/accursed/blob/978b980/src/util/anim.ts#L264)*

**Returns:** `any`

___
<a id="easeinoutcubic"></a>

### `<Const>` easeInOutCubic

▸ **easeInOutCubic**(): `any`

*Defined in [util/anim.ts:138](https://github.com/cancerberoSgx/accursed/blob/978b980/src/util/anim.ts#L138)*

**Returns:** `any`

___
<a id="easeinoutelastic"></a>

### `<Const>` easeInOutElastic

▸ **easeInOutElastic**(): `any`

*Defined in [util/anim.ts:196](https://github.com/cancerberoSgx/accursed/blob/978b980/src/util/anim.ts#L196)*

**Returns:** `any`

___
<a id="easeinoutexpo"></a>

### `<Const>` easeInOutExpo

▸ **easeInOutExpo**(): `any`

*Defined in [util/anim.ts:230](https://github.com/cancerberoSgx/accursed/blob/978b980/src/util/anim.ts#L230)*

**Returns:** `any`

___
<a id="easeinoutquad"></a>

### `<Const>` easeInOutQuad

▸ **easeInOutQuad**(): `any`

*Defined in [util/anim.ts:85](https://github.com/cancerberoSgx/accursed/blob/978b980/src/util/anim.ts#L85)*

**Returns:** `any`

___
<a id="easeinoutquart"></a>

### `<Const>` easeInOutQuart

▸ **easeInOutQuart**(): `any`

*Defined in [util/anim.ts:153](https://github.com/cancerberoSgx/accursed/blob/978b980/src/util/anim.ts#L153)*

**Returns:** `any`

___
<a id="easeinoutquint"></a>

### `<Const>` easeInOutQuint

▸ **easeInOutQuint**(): `any`

*Defined in [util/anim.ts:182](https://github.com/cancerberoSgx/accursed/blob/978b980/src/util/anim.ts#L182)*

**Returns:** `any`

___
<a id="easeinquad"></a>

### `<Const>` easeInQuad

▸ **easeInQuad**(): `any`

*Defined in [util/anim.ts:82](https://github.com/cancerberoSgx/accursed/blob/978b980/src/util/anim.ts#L82)*

**Returns:** `any`

___
<a id="easeinquart"></a>

### `<Const>` easeInQuart

▸ **easeInQuart**(): `any`

*Defined in [util/anim.ts:146](https://github.com/cancerberoSgx/accursed/blob/978b980/src/util/anim.ts#L146)*

**Returns:** `any`

___
<a id="easeinquint"></a>

### `<Const>` easeInQuint

▸ **easeInQuint**(): `any`

*Defined in [util/anim.ts:161](https://github.com/cancerberoSgx/accursed/blob/978b980/src/util/anim.ts#L161)*

**Returns:** `any`

___
<a id="easeinsine"></a>

### `<Const>` easeInSine

▸ **easeInSine**(): `any`

*Defined in [util/anim.ts:190](https://github.com/cancerberoSgx/accursed/blob/978b980/src/util/anim.ts#L190)*

**Returns:** `any`

___
<a id="easeoutback"></a>

### `<Const>` easeOutBack

▸ **easeOutBack**(): `any`

*Defined in [util/anim.ts:249](https://github.com/cancerberoSgx/accursed/blob/978b980/src/util/anim.ts#L249)*

**Returns:** `any`

___
<a id="easeoutbounce"></a>

### `<Const>` easeOutBounce

▸ **easeOutBounce**(): `any`

*Defined in [util/anim.ts:109](https://github.com/cancerberoSgx/accursed/blob/978b980/src/util/anim.ts#L109)*

**Returns:** `any`

___
<a id="easeoutcubic"></a>

### `<Const>` easeOutCubic

▸ **easeOutCubic**(): `any`

*Defined in [util/anim.ts:131](https://github.com/cancerberoSgx/accursed/blob/978b980/src/util/anim.ts#L131)*

**Returns:** `any`

___
<a id="easeoutelastic"></a>

### `<Const>` easeOutElastic

▸ **easeOutElastic**(): `any`

*Defined in [util/anim.ts:214](https://github.com/cancerberoSgx/accursed/blob/978b980/src/util/anim.ts#L214)*

**Returns:** `any`

___
<a id="easeoutquad"></a>

### `<Const>` easeOutQuad

▸ **easeOutQuad**(): `any`

*Defined in [util/anim.ts:84](https://github.com/cancerberoSgx/accursed/blob/978b980/src/util/anim.ts#L84)*

**Returns:** `any`

___
<a id="easeoutquint"></a>

### `<Const>` easeOutQuint

▸ **easeOutQuint**(): `any`

*Defined in [util/anim.ts:168](https://github.com/cancerberoSgx/accursed/blob/978b980/src/util/anim.ts#L168)*

**Returns:** `any`

___
<a id="elastic"></a>

### `<Const>` elastic

▸ **elastic**(x?: *`number`*): `(Anonymous function)`

*Defined in [util/anim.ts:68](https://github.com/cancerberoSgx/accursed/blob/978b980/src/util/anim.ts#L68)*

**Parameters:**

| Name | Type | Default value | Description |
| ------ | ------ | ------ | ------ |
| `Default value` x | `number` | 1.5 |  “initial range” |

**Returns:** `(Anonymous function)`

___
<a id="makeeaseinout"></a>

###  makeEaseInOut

▸ **makeEaseInOut**(timing: *`any`*): `(Anonymous function)`

*Defined in [util/anim.ts:71](https://github.com/cancerberoSgx/accursed/blob/978b980/src/util/anim.ts#L71)*

**Parameters:**

| Name | Type |
| ------ | ------ |
| timing | `any` |

**Returns:** `(Anonymous function)`

___
<a id="makeeaseout"></a>

###  makeEaseOut

▸ **makeEaseOut**(timing: *[Timing](_util_anim_.md#timing)*): `(Anonymous function)`

*Defined in [util/anim.ts:37](https://github.com/cancerberoSgx/accursed/blob/978b980/src/util/anim.ts#L37)*

**Parameters:**

| Name | Type |
| ------ | ------ |
| timing | [Timing](_util_anim_.md#timing) |

**Returns:** `(Anonymous function)`

___
<a id="quad"></a>

###  quad

▸ **quad**(timeFraction: *`any`*): `number`

*Defined in [util/anim.ts:55](https://github.com/cancerberoSgx/accursed/blob/978b980/src/util/anim.ts#L55)*

parabolic curve

**Parameters:**

| Name | Type |
| ------ | ------ |
| timeFraction | `any` |

**Returns:** `number`

___

