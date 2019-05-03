---
id: api-interfaces-blessed-d-widgets.stylelisttable
title: StyleListTable
sidebar_label: StyleListTable
---

[blessed](api-readme.md) > [[blessed.d Module]](api-modules-blessed-d-module.md) > [Widgets](api-modules-blessed-d-widgets.md) > [StyleListTable](api-interfaces-blessed-d-widgets.stylelisttable.md)

## Interface

## Hierarchy

↳  [ListElementStyle](api-interfaces-blessed-d-widgets.listelementstyle.md)

**↳ StyleListTable**

### Properties

* [bg](api-interfaces-blessed-d-widgets.stylelisttable.md#bg)
* [blink](api-interfaces-blessed-d-widgets.stylelisttable.md#blink)
* [bold](api-interfaces-blessed-d-widgets.stylelisttable.md#bold)
* [border](api-interfaces-blessed-d-widgets.stylelisttable.md#border)
* [cell](api-interfaces-blessed-d-widgets.stylelisttable.md#cell)
* [ch](api-interfaces-blessed-d-widgets.stylelisttable.md#ch)
* [custom](api-interfaces-blessed-d-widgets.stylelisttable.md#custom)
* [fg](api-interfaces-blessed-d-widgets.stylelisttable.md#fg)
* [focus](api-interfaces-blessed-d-widgets.stylelisttable.md#focus)
* [header](api-interfaces-blessed-d-widgets.stylelisttable.md#header)
* [hover](api-interfaces-blessed-d-widgets.stylelisttable.md#hover)
* [inverse](api-interfaces-blessed-d-widgets.stylelisttable.md#inverse)
* [invisible](api-interfaces-blessed-d-widgets.stylelisttable.md#invisible)
* [item](api-interfaces-blessed-d-widgets.stylelisttable.md#item)
* [label](api-interfaces-blessed-d-widgets.stylelisttable.md#label)
* [overflow](api-interfaces-blessed-d-widgets.stylelisttable.md#overflow)
* [scrollbar](api-interfaces-blessed-d-widgets.stylelisttable.md#scrollbar)
* [selected](api-interfaces-blessed-d-widgets.stylelisttable.md#selected)
* [shadow](api-interfaces-blessed-d-widgets.stylelisttable.md#shadow)
* [track](api-interfaces-blessed-d-widgets.stylelisttable.md#track)
* [transparent](api-interfaces-blessed-d-widgets.stylelisttable.md#transparent)
* [underline](api-interfaces-blessed-d-widgets.stylelisttable.md#underline)

---

## Properties

<a id="bg"></a>

### `<Optional>` bg

**● bg**: *[Color](api-modules-blessed-d-widgets.md#color)*

*Inherited from [TStyle](api-interfaces-blessed-d-widgets.types.tstyle.md).[bg](api-interfaces-blessed-d-widgets.types.tstyle.md#bg)*

*Defined in [blessed.d.ts:1411](https://github.com/cancerberoSgx/accursed/blob/f66c8ce/src/declarations/blessed.d.ts#L1411)*

___
<a id="blink"></a>

### `<Optional>` blink

**● blink**: *`boolean`*

*Inherited from [TStyle](api-interfaces-blessed-d-widgets.types.tstyle.md).[blink](api-interfaces-blessed-d-widgets.types.tstyle.md#blink)*

*Defined in [blessed.d.ts:1416](https://github.com/cancerberoSgx/accursed/blob/f66c8ce/src/declarations/blessed.d.ts#L1416)*

___
<a id="bold"></a>

### `<Optional>` bold

**● bold**: *`boolean`*

*Inherited from [TStyle](api-interfaces-blessed-d-widgets.types.tstyle.md).[bold](api-interfaces-blessed-d-widgets.types.tstyle.md#bold)*

*Defined in [blessed.d.ts:1413](https://github.com/cancerberoSgx/accursed/blob/f66c8ce/src/declarations/blessed.d.ts#L1413)*

___
<a id="border"></a>

### `<Optional>` border

**● border**: *[TBorder](api-interfaces-blessed-d-widgets.types.tborder.md) \| [BorderType](api-modules-blessed-d-widgets.types.md#bordertype)*

*Inherited from [TStyle](api-interfaces-blessed-d-widgets.types.tstyle.md).[border](api-interfaces-blessed-d-widgets.types.tstyle.md#border)*

*Defined in [blessed.d.ts:1421](https://github.com/cancerberoSgx/accursed/blob/f66c8ce/src/declarations/blessed.d.ts#L1421)*

___
<a id="cell"></a>

### `<Optional>` cell

**● cell**: *`any`*

*Overrides [TStyle](api-interfaces-blessed-d-widgets.types.tstyle.md).[cell](api-interfaces-blessed-d-widgets.types.tstyle.md#cell)*

*Defined in [blessed.d.ts:3660](https://github.com/cancerberoSgx/accursed/blob/f66c8ce/src/declarations/blessed.d.ts#L3660)*

Cell style.

___
<a id="ch"></a>

### `<Optional>` ch

**● ch**: *`string`*

*Inherited from [TStyle](api-interfaces-blessed-d-widgets.types.tstyle.md).[ch](api-interfaces-blessed-d-widgets.types.tstyle.md#ch)*

*Defined in [blessed.d.ts:1414](https://github.com/cancerberoSgx/accursed/blob/f66c8ce/src/declarations/blessed.d.ts#L1414)*

___
<a id="custom"></a>

### `<Optional>` custom

**● custom**: *`object`*

*Inherited from [TStyle](api-interfaces-blessed-d-widgets.types.tstyle.md).[custom](api-interfaces-blessed-d-widgets.types.tstyle.md#custom)*

*Defined in [blessed.d.ts:1408](https://github.com/cancerberoSgx/accursed/blob/f66c8ce/src/declarations/blessed.d.ts#L1408)*

artificial type for user custom data (it doesn't exists just a type)

#### Type declaration

[name: `string`]: `any`

___
<a id="fg"></a>

### `<Optional>` fg

**● fg**: *[Color](api-modules-blessed-d-widgets.md#color)*

*Inherited from [TStyle](api-interfaces-blessed-d-widgets.types.tstyle.md).[fg](api-interfaces-blessed-d-widgets.types.tstyle.md#fg)*

*Defined in [blessed.d.ts:1412](https://github.com/cancerberoSgx/accursed/blob/f66c8ce/src/declarations/blessed.d.ts#L1412)*

___
<a id="focus"></a>

### `<Optional>` focus

**● focus**: *[TStyle](api-interfaces-blessed-d-widgets.types.tstyle.md)*

*Inherited from [TStyle](api-interfaces-blessed-d-widgets.types.tstyle.md).[focus](api-interfaces-blessed-d-widgets.types.tstyle.md#focus)*

*Defined in [blessed.d.ts:1425](https://github.com/cancerberoSgx/accursed/blob/f66c8ce/src/declarations/blessed.d.ts#L1425)*

___
<a id="header"></a>

### `<Optional>` header

**● header**: *`any`*

*Overrides [TStyle](api-interfaces-blessed-d-widgets.types.tstyle.md).[header](api-interfaces-blessed-d-widgets.types.tstyle.md#header)*

*Defined in [blessed.d.ts:3655](https://github.com/cancerberoSgx/accursed/blob/f66c8ce/src/declarations/blessed.d.ts#L3655)*

Header style.

___
<a id="hover"></a>

### `<Optional>` hover

**● hover**: *[TStyle](api-interfaces-blessed-d-widgets.types.tstyle.md)*

*Inherited from [TStyle](api-interfaces-blessed-d-widgets.types.tstyle.md).[hover](api-interfaces-blessed-d-widgets.types.tstyle.md#hover)*

*Defined in [blessed.d.ts:1428](https://github.com/cancerberoSgx/accursed/blob/f66c8ce/src/declarations/blessed.d.ts#L1428)*

___
<a id="inverse"></a>

### `<Optional>` inverse

**● inverse**: *`boolean`*

*Inherited from [TStyle](api-interfaces-blessed-d-widgets.types.tstyle.md).[inverse](api-interfaces-blessed-d-widgets.types.tstyle.md#inverse)*

*Defined in [blessed.d.ts:1417](https://github.com/cancerberoSgx/accursed/blob/f66c8ce/src/declarations/blessed.d.ts#L1417)*

___
<a id="invisible"></a>

### `<Optional>` invisible

**● invisible**: *`boolean`*

*Inherited from [TStyle](api-interfaces-blessed-d-widgets.types.tstyle.md).[invisible](api-interfaces-blessed-d-widgets.types.tstyle.md#invisible)*

*Defined in [blessed.d.ts:1418](https://github.com/cancerberoSgx/accursed/blob/f66c8ce/src/declarations/blessed.d.ts#L1418)*

___
<a id="item"></a>

### `<Optional>` item

**● item**: *[TStyle](api-interfaces-blessed-d-widgets.types.tstyle.md)*

*Inherited from [ListElementStyle](api-interfaces-blessed-d-widgets.listelementstyle.md).[item](api-interfaces-blessed-d-widgets.listelementstyle.md#item)*

*Overrides [TStyle](api-interfaces-blessed-d-widgets.types.tstyle.md).[item](api-interfaces-blessed-d-widgets.types.tstyle.md#item)*

*Defined in [blessed.d.ts:3410](https://github.com/cancerberoSgx/accursed/blob/f66c8ce/src/declarations/blessed.d.ts#L3410)*

___
<a id="label"></a>

### `<Optional>` label

**● label**: *[TStyle](api-interfaces-blessed-d-widgets.types.tstyle.md)*

*Inherited from [TStyle](api-interfaces-blessed-d-widgets.types.tstyle.md).[label](api-interfaces-blessed-d-widgets.types.tstyle.md#label)*

*Defined in [blessed.d.ts:1422](https://github.com/cancerberoSgx/accursed/blob/f66c8ce/src/declarations/blessed.d.ts#L1422)*

___
<a id="overflow"></a>

### `<Optional>` overflow

**● overflow**: *"hidden"*

*Inherited from [TStyle](api-interfaces-blessed-d-widgets.types.tstyle.md).[overflow](api-interfaces-blessed-d-widgets.types.tstyle.md#overflow)*

*Defined in [blessed.d.ts:1409](https://github.com/cancerberoSgx/accursed/blob/f66c8ce/src/declarations/blessed.d.ts#L1409)*

___
<a id="scrollbar"></a>

### `<Optional>` scrollbar

**● scrollbar**: *[TStyle](api-interfaces-blessed-d-widgets.types.tstyle.md) & `object` \| `true`*

*Inherited from [TStyle](api-interfaces-blessed-d-widgets.types.tstyle.md).[scrollbar](api-interfaces-blessed-d-widgets.types.tstyle.md#scrollbar)*

*Defined in [blessed.d.ts:1424](https://github.com/cancerberoSgx/accursed/blob/f66c8ce/src/declarations/blessed.d.ts#L1424)*

___
<a id="selected"></a>

### `<Optional>` selected

**● selected**: *[TStyle](api-interfaces-blessed-d-widgets.types.tstyle.md)*

*Inherited from [ListElementStyle](api-interfaces-blessed-d-widgets.listelementstyle.md).[selected](api-interfaces-blessed-d-widgets.listelementstyle.md#selected)*

*Overrides [TStyle](api-interfaces-blessed-d-widgets.types.tstyle.md).[selected](api-interfaces-blessed-d-widgets.types.tstyle.md#selected)*

*Defined in [blessed.d.ts:3409](https://github.com/cancerberoSgx/accursed/blob/f66c8ce/src/declarations/blessed.d.ts#L3409)*

___
<a id="shadow"></a>

### `<Optional>` shadow

**● shadow**: *`boolean`*

*Inherited from [TStyle](api-interfaces-blessed-d-widgets.types.tstyle.md).[shadow](api-interfaces-blessed-d-widgets.types.tstyle.md#shadow)*

*Defined in [blessed.d.ts:1420](https://github.com/cancerberoSgx/accursed/blob/f66c8ce/src/declarations/blessed.d.ts#L1420)*

___
<a id="track"></a>

### `<Optional>` track

**● track**: *[TStyle](api-interfaces-blessed-d-widgets.types.tstyle.md)*

*Inherited from [TStyle](api-interfaces-blessed-d-widgets.types.tstyle.md).[track](api-interfaces-blessed-d-widgets.types.tstyle.md#track)*

*Defined in [blessed.d.ts:1423](https://github.com/cancerberoSgx/accursed/blob/f66c8ce/src/declarations/blessed.d.ts#L1423)*

___
<a id="transparent"></a>

### `<Optional>` transparent

**● transparent**: *`boolean`*

*Inherited from [TStyle](api-interfaces-blessed-d-widgets.types.tstyle.md).[transparent](api-interfaces-blessed-d-widgets.types.tstyle.md#transparent)*

*Defined in [blessed.d.ts:1419](https://github.com/cancerberoSgx/accursed/blob/f66c8ce/src/declarations/blessed.d.ts#L1419)*

___
<a id="underline"></a>

### `<Optional>` underline

**● underline**: *`boolean`*

*Inherited from [TStyle](api-interfaces-blessed-d-widgets.types.tstyle.md).[underline](api-interfaces-blessed-d-widgets.types.tstyle.md#underline)*

*Defined in [blessed.d.ts:1415](https://github.com/cancerberoSgx/accursed/blob/f66c8ce/src/declarations/blessed.d.ts#L1415)*

___

