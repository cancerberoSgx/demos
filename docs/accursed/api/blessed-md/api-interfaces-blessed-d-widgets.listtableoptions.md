---
id: api-interfaces-blessed-d-widgets.listtableoptions
title: ListTableOptions
sidebar_label: ListTableOptions
---

[blessed](api-readme.md) > [[blessed.d Module]](api-modules-blessed-d-module.md) > [Widgets](api-modules-blessed-d-widgets.md) > [ListTableOptions](api-interfaces-blessed-d-widgets.listtableoptions.md)

## Interface

## Hierarchy

↳  [ListOptions](api-interfaces-blessed-d-widgets.listoptions.md)<[StyleListTable](api-interfaces-blessed-d-widgets.stylelisttable.md)>

**↳ ListTableOptions**

### Properties

* [_data](api-interfaces-blessed-d-widgets.listtableoptions.md#_data)
* [align](api-interfaces-blessed-d-widgets.listtableoptions.md#align)
* [alwaysScroll](api-interfaces-blessed-d-widgets.listtableoptions.md#alwaysscroll)
* [baseLimit](api-interfaces-blessed-d-widgets.listtableoptions.md#baselimit)
* [bg](api-interfaces-blessed-d-widgets.listtableoptions.md#bg)
* [bindings](api-interfaces-blessed-d-widgets.listtableoptions.md#bindings)
* [blink](api-interfaces-blessed-d-widgets.listtableoptions.md#blink)
* [bold](api-interfaces-blessed-d-widgets.listtableoptions.md#bold)
* [border](api-interfaces-blessed-d-widgets.listtableoptions.md#border)
* [bottom](api-interfaces-blessed-d-widgets.listtableoptions.md#bottom)
* [ch](api-interfaces-blessed-d-widgets.listtableoptions.md#ch)
* [children](api-interfaces-blessed-d-widgets.listtableoptions.md#children)
* [clickable](api-interfaces-blessed-d-widgets.listtableoptions.md#clickable)
* [content](api-interfaces-blessed-d-widgets.listtableoptions.md#content)
* [data](api-interfaces-blessed-d-widgets.listtableoptions.md#data)
* [dockBorders](api-interfaces-blessed-d-widgets.listtableoptions.md#dockborders)
* [draggable](api-interfaces-blessed-d-widgets.listtableoptions.md#draggable)
* [effects](api-interfaces-blessed-d-widgets.listtableoptions.md#effects)
* [fg](api-interfaces-blessed-d-widgets.listtableoptions.md#fg)
* [fixed](api-interfaces-blessed-d-widgets.listtableoptions.md#fixed)
* [focusEffects](api-interfaces-blessed-d-widgets.listtableoptions.md#focuseffects)
* [focusable](api-interfaces-blessed-d-widgets.listtableoptions.md#focusable)
* [focused](api-interfaces-blessed-d-widgets.listtableoptions.md#focused)
* [height](api-interfaces-blessed-d-widgets.listtableoptions.md#height)
* [hidden](api-interfaces-blessed-d-widgets.listtableoptions.md#hidden)
* [hoverBg](api-interfaces-blessed-d-widgets.listtableoptions.md#hoverbg)
* [hoverEffects](api-interfaces-blessed-d-widgets.listtableoptions.md#hovereffects)
* [hoverText](api-interfaces-blessed-d-widgets.listtableoptions.md#hovertext)
* [input](api-interfaces-blessed-d-widgets.listtableoptions.md#input)
* [interactive](api-interfaces-blessed-d-widgets.listtableoptions.md#interactive)
* [inverse](api-interfaces-blessed-d-widgets.listtableoptions.md#inverse)
* [invertSelected](api-interfaces-blessed-d-widgets.listtableoptions.md#invertselected)
* [invisible](api-interfaces-blessed-d-widgets.listtableoptions.md#invisible)
* [items](api-interfaces-blessed-d-widgets.listtableoptions.md#items)
* [keyable](api-interfaces-blessed-d-widgets.listtableoptions.md#keyable)
* [keys](api-interfaces-blessed-d-widgets.listtableoptions.md#keys)
* [label](api-interfaces-blessed-d-widgets.listtableoptions.md#label)
* [left](api-interfaces-blessed-d-widgets.listtableoptions.md#left)
* [mouse](api-interfaces-blessed-d-widgets.listtableoptions.md#mouse)
* [name](api-interfaces-blessed-d-widgets.listtableoptions.md#name)
* [noCellBorders](api-interfaces-blessed-d-widgets.listtableoptions.md#nocellborders)
* [noOverflow](api-interfaces-blessed-d-widgets.listtableoptions.md#nooverflow)
* [pad](api-interfaces-blessed-d-widgets.listtableoptions.md#pad)
* [padding](api-interfaces-blessed-d-widgets.listtableoptions.md#padding)
* [parent](api-interfaces-blessed-d-widgets.listtableoptions.md#parent)
* [position](api-interfaces-blessed-d-widgets.listtableoptions.md#position)
* [ref](api-interfaces-blessed-d-widgets.listtableoptions.md#ref)
* [right](api-interfaces-blessed-d-widgets.listtableoptions.md#right)
* [rows](api-interfaces-blessed-d-widgets.listtableoptions.md#rows)
* [screen](api-interfaces-blessed-d-widgets.listtableoptions.md#screen)
* [scrollable](api-interfaces-blessed-d-widgets.listtableoptions.md#scrollable)
* [scrollbar](api-interfaces-blessed-d-widgets.listtableoptions.md#scrollbar)
* [selectedBg](api-interfaces-blessed-d-widgets.listtableoptions.md#selectedbg)
* [shadow](api-interfaces-blessed-d-widgets.listtableoptions.md#shadow)
* [shrink](api-interfaces-blessed-d-widgets.listtableoptions.md#shrink)
* [style](api-interfaces-blessed-d-widgets.listtableoptions.md#style)
* [tags](api-interfaces-blessed-d-widgets.listtableoptions.md#tags)
* [top](api-interfaces-blessed-d-widgets.listtableoptions.md#top)
* [transparent](api-interfaces-blessed-d-widgets.listtableoptions.md#transparent)
* [underline](api-interfaces-blessed-d-widgets.listtableoptions.md#underline)
* [valign](api-interfaces-blessed-d-widgets.listtableoptions.md#valign)
* [vi](api-interfaces-blessed-d-widgets.listtableoptions.md#vi)
* [width](api-interfaces-blessed-d-widgets.listtableoptions.md#width)
* [wrap](api-interfaces-blessed-d-widgets.listtableoptions.md#wrap)

### Methods

* [search](api-interfaces-blessed-d-widgets.listtableoptions.md#search)

---

## Properties

<a id="_data"></a>

### `<Optional>` _data

**● _data**: *`object`*

*Inherited from [ElementOptions](api-interfaces-blessed-d-widgets.elementoptions.md).[_data](api-interfaces-blessed-d-widgets.elementoptions.md#_data)*

*Defined in [blessed.d.ts:2738](https://github.com/cancerberoSgx/accursed/blob/f66c8ce/src/declarations/blessed.d.ts#L2738)*

Miscelanus options. Currently JavaScript/Blessed allows to pass anything as option, this is just a bucket for TypeScript and have impact

#### Type declaration

[name: `string`]: `any`

___
<a id="align"></a>

### `<Optional>` align

**● align**: *"left" \| "center" \| "right"*

*Inherited from [ElementOptions](api-interfaces-blessed-d-widgets.elementoptions.md).[align](api-interfaces-blessed-d-widgets.elementoptions.md#align)*

*Defined in [blessed.d.ts:2675](https://github.com/cancerberoSgx/accursed/blob/f66c8ce/src/declarations/blessed.d.ts#L2675)*

Text alignment: left, center, or right.

___
<a id="alwaysscroll"></a>

### `<Optional>` alwaysScroll

**● alwaysScroll**: *`boolean`*

*Inherited from [ScrollableBoxOptions](api-interfaces-blessed-d-widgets.scrollableboxoptions.md).[alwaysScroll](api-interfaces-blessed-d-widgets.scrollableboxoptions.md#alwaysscroll)*

*Defined in [blessed.d.ts:3209](https://github.com/cancerberoSgx/accursed/blob/f66c8ce/src/declarations/blessed.d.ts#L3209)*

A option which causes the ignoring of childOffset. This in turn causes the childBase to change every time the element is scrolled.

___
<a id="baselimit"></a>

### `<Optional>` baseLimit

**● baseLimit**: *`number`*

*Inherited from [ScrollableBoxOptions](api-interfaces-blessed-d-widgets.scrollableboxoptions.md).[baseLimit](api-interfaces-blessed-d-widgets.scrollableboxoptions.md#baselimit)*

*Defined in [blessed.d.ts:3203](https://github.com/cancerberoSgx/accursed/blob/f66c8ce/src/declarations/blessed.d.ts#L3203)*

A limit to the childBase. Default is Infinity.

___
<a id="bg"></a>

### `<Optional>` bg

**● bg**: *[Color](api-modules-blessed-d-widgets.md#color)*

*Inherited from [ElementOptions](api-interfaces-blessed-d-widgets.elementoptions.md).[bg](api-interfaces-blessed-d-widgets.elementoptions.md#bg)*

*Defined in [blessed.d.ts:2579](https://github.com/cancerberoSgx/accursed/blob/f66c8ce/src/declarations/blessed.d.ts#L2579)*

___
<a id="bindings"></a>

### `<Optional>` bindings

**● bindings**: *`any`*

*Inherited from [BoxOptions](api-interfaces-blessed-d-widgets.boxoptions.md).[bindings](api-interfaces-blessed-d-widgets.boxoptions.md#bindings)*

*Defined in [blessed.d.ts:3239](https://github.com/cancerberoSgx/accursed/blob/f66c8ce/src/declarations/blessed.d.ts#L3239)*

___
<a id="blink"></a>

### `<Optional>` blink

**● blink**: *`boolean`*

*Inherited from [ElementOptions](api-interfaces-blessed-d-widgets.elementoptions.md).[blink](api-interfaces-blessed-d-widgets.elementoptions.md#blink)*

*Defined in [blessed.d.ts:2582](https://github.com/cancerberoSgx/accursed/blob/f66c8ce/src/declarations/blessed.d.ts#L2582)*

___
<a id="bold"></a>

### `<Optional>` bold

**● bold**: *`boolean`*

*Inherited from [ElementOptions](api-interfaces-blessed-d-widgets.elementoptions.md).[bold](api-interfaces-blessed-d-widgets.elementoptions.md#bold)*

*Defined in [blessed.d.ts:2580](https://github.com/cancerberoSgx/accursed/blob/f66c8ce/src/declarations/blessed.d.ts#L2580)*

___
<a id="border"></a>

### `<Optional>` border

**● border**: *[TBorder](api-interfaces-blessed-d-widgets.types.tborder.md) \| [BorderType](api-modules-blessed-d-widgets.types.md#bordertype)*

*Inherited from [ElementOptions](api-interfaces-blessed-d-widgets.elementoptions.md).[border](api-interfaces-blessed-d-widgets.elementoptions.md#border)*

*Defined in [blessed.d.ts:2592](https://github.com/cancerberoSgx/accursed/blob/f66c8ce/src/declarations/blessed.d.ts#L2592)*

Border object, see below.

___
<a id="bottom"></a>

### `<Optional>` bottom

**● bottom**: *[TPosition](api-modules-blessed-d-widgets.types.md#tposition)*

*Inherited from [ElementOptions](api-interfaces-blessed-d-widgets.elementoptions.md).[bottom](api-interfaces-blessed-d-widgets.elementoptions.md#bottom)*

*Defined in [blessed.d.ts:2696](https://github.com/cancerberoSgx/accursed/blob/f66c8ce/src/declarations/blessed.d.ts#L2696)*

___
<a id="ch"></a>

### `<Optional>` ch

**● ch**: *`string`*

*Inherited from [ElementOptions](api-interfaces-blessed-d-widgets.elementoptions.md).[ch](api-interfaces-blessed-d-widgets.elementoptions.md#ch)*

*Defined in [blessed.d.ts:2724](https://github.com/cancerberoSgx/accursed/blob/f66c8ce/src/declarations/blessed.d.ts#L2724)*

Background character (default is whitespace ).

___
<a id="children"></a>

### `<Optional>` children

**● children**: *[Node](api-classes-blessed-d-widgets.node.md)[]*

*Inherited from [INodeOptions](api-interfaces-blessed-d-widgets.inodeoptions.md).[children](api-interfaces-blessed-d-widgets.inodeoptions.md#children)*

*Defined in [blessed.d.ts:1630](https://github.com/cancerberoSgx/accursed/blob/f66c8ce/src/declarations/blessed.d.ts#L1630)*

___
<a id="clickable"></a>

### `<Optional>` clickable

**● clickable**: *`boolean`*

*Inherited from [ElementOptions](api-interfaces-blessed-d-widgets.elementoptions.md).[clickable](api-interfaces-blessed-d-widgets.elementoptions.md#clickable)*

*Defined in [blessed.d.ts:2602](https://github.com/cancerberoSgx/accursed/blob/f66c8ce/src/declarations/blessed.d.ts#L2602)*

Element is clickable.

___
<a id="content"></a>

### `<Optional>` content

**● content**: *`string`*

*Inherited from [ElementOptions](api-interfaces-blessed-d-widgets.elementoptions.md).[content](api-interfaces-blessed-d-widgets.elementoptions.md#content)*

*Defined in [blessed.d.ts:2597](https://github.com/cancerberoSgx/accursed/blob/f66c8ce/src/declarations/blessed.d.ts#L2597)*

Element's text content.

___
<a id="data"></a>

### `<Optional>` data

**● data**: *`string`[][]*

*Defined in [blessed.d.ts:3668](https://github.com/cancerberoSgx/accursed/blob/f66c8ce/src/declarations/blessed.d.ts#L3668)*

___
<a id="dockborders"></a>

### `<Optional>` dockBorders

**● dockBorders**: *`boolean`*

*Inherited from [ElementOptions](api-interfaces-blessed-d-widgets.elementoptions.md).[dockBorders](api-interfaces-blessed-d-widgets.elementoptions.md#dockborders)*

*Defined in [blessed.d.ts:2618](https://github.com/cancerberoSgx/accursed/blob/f66c8ce/src/declarations/blessed.d.ts#L2618)*

Automatically "dock" borders with other elements instead of overlapping, depending on position (experimental).

___
<a id="draggable"></a>

### `<Optional>` draggable

**● draggable**: *`boolean`*

*Inherited from [ElementOptions](api-interfaces-blessed-d-widgets.elementoptions.md).[draggable](api-interfaces-blessed-d-widgets.elementoptions.md#draggable)*

*Defined in [blessed.d.ts:2729](https://github.com/cancerberoSgx/accursed/blob/f66c8ce/src/declarations/blessed.d.ts#L2729)*

Allow the element to be dragged with the mouse.

___
<a id="effects"></a>

### `<Optional>` effects

**● effects**: *`object`*

*Inherited from [ElementOptions](api-interfaces-blessed-d-widgets.elementoptions.md).[effects](api-interfaces-blessed-d-widgets.elementoptions.md#effects)*

*Defined in [blessed.d.ts:2668](https://github.com/cancerberoSgx/accursed/blob/f66c8ce/src/declarations/blessed.d.ts#L2668)*

Same as style.focus and style.hover

#### Type declaration

`Optional`  focus: [TStyle](api-interfaces-blessed-d-widgets.types.tstyle.md)

`Optional`  hover: [TStyle](api-interfaces-blessed-d-widgets.types.tstyle.md)

___
<a id="fg"></a>

### `<Optional>` fg

**● fg**: *[Color](api-modules-blessed-d-widgets.md#color)*

*Inherited from [ElementOptions](api-interfaces-blessed-d-widgets.elementoptions.md).[fg](api-interfaces-blessed-d-widgets.elementoptions.md#fg)*

*Defined in [blessed.d.ts:2578](https://github.com/cancerberoSgx/accursed/blob/f66c8ce/src/declarations/blessed.d.ts#L2578)*

___
<a id="fixed"></a>

### `<Optional>` fixed

**● fixed**: *`boolean`*

*Inherited from [ElementOptions](api-interfaces-blessed-d-widgets.elementoptions.md).[fixed](api-interfaces-blessed-d-widgets.elementoptions.md#fixed)*

*Defined in [blessed.d.ts:2625](https://github.com/cancerberoSgx/accursed/blob/f66c8ce/src/declarations/blessed.d.ts#L2625)*

___
<a id="focuseffects"></a>

### `<Optional>` focusEffects

**● focusEffects**: *[TStyle](api-interfaces-blessed-d-widgets.types.tstyle.md)*

*Inherited from [ElementOptions](api-interfaces-blessed-d-widgets.elementoptions.md).[focusEffects](api-interfaces-blessed-d-widgets.elementoptions.md#focuseffects)*

*Defined in [blessed.d.ts:2664](https://github.com/cancerberoSgx/accursed/blob/f66c8ce/src/declarations/blessed.d.ts#L2664)*

Same as style.focus

___
<a id="focusable"></a>

### `<Optional>` focusable

**● focusable**: *`boolean`*

*Inherited from [INodeOptions](api-interfaces-blessed-d-widgets.inodeoptions.md).[focusable](api-interfaces-blessed-d-widgets.inodeoptions.md#focusable)*

*Defined in [blessed.d.ts:1634](https://github.com/cancerberoSgx/accursed/blob/f66c8ce/src/declarations/blessed.d.ts#L1634)*

If true, the node will obtain focus when m

___
<a id="focused"></a>

### `<Optional>` focused

**● focused**: *`boolean`*

*Inherited from [ElementOptions](api-interfaces-blessed-d-widgets.elementoptions.md).[focused](api-interfaces-blessed-d-widgets.elementoptions.md#focused)*

*Defined in [blessed.d.ts:2635](https://github.com/cancerberoSgx/accursed/blob/f66c8ce/src/declarations/blessed.d.ts#L2635)*

Element is focused.

___
<a id="height"></a>

### `<Optional>` height

**● height**: *`number` \| `string`*

*Inherited from [ElementOptions](api-interfaces-blessed-d-widgets.elementoptions.md).[height](api-interfaces-blessed-d-widgets.elementoptions.md#height)*

*Defined in [blessed.d.ts:2709](https://github.com/cancerberoSgx/accursed/blob/f66c8ce/src/declarations/blessed.d.ts#L2709)*

Offsets of the element relative to its parent. Can be a number, percentage (0-100%), or keyword (center). right and bottom do not accept keywords. Percentages can also have offsets (50%+1, 50%-1).

___
<a id="hidden"></a>

### `<Optional>` hidden

**● hidden**: *`boolean`*

*Inherited from [ElementOptions](api-interfaces-blessed-d-widgets.elementoptions.md).[hidden](api-interfaces-blessed-d-widgets.elementoptions.md#hidden)*

*Defined in [blessed.d.ts:2640](https://github.com/cancerberoSgx/accursed/blob/f66c8ce/src/declarations/blessed.d.ts#L2640)*

Whether the element is hidden.

___
<a id="hoverbg"></a>

### `<Optional>` hoverBg

**● hoverBg**: *[Color](api-modules-blessed-d-widgets.md#color)*

*Inherited from [ElementOptions](api-interfaces-blessed-d-widgets.elementoptions.md).[hoverBg](api-interfaces-blessed-d-widgets.elementoptions.md#hoverbg)*

*Defined in [blessed.d.ts:2655](https://github.com/cancerberoSgx/accursed/blob/f66c8ce/src/declarations/blessed.d.ts#L2655)*

Same as style.hover.bg

___
<a id="hovereffects"></a>

### `<Optional>` hoverEffects

**● hoverEffects**: *[TStyle](api-interfaces-blessed-d-widgets.types.tstyle.md)*

*Inherited from [ElementOptions](api-interfaces-blessed-d-widgets.elementoptions.md).[hoverEffects](api-interfaces-blessed-d-widgets.elementoptions.md#hovereffects)*

*Defined in [blessed.d.ts:2660](https://github.com/cancerberoSgx/accursed/blob/f66c8ce/src/declarations/blessed.d.ts#L2660)*

Same as style.hover

___
<a id="hovertext"></a>

### `<Optional>` hoverText

**● hoverText**: *`string`*

*Inherited from [ElementOptions](api-interfaces-blessed-d-widgets.elementoptions.md).[hoverText](api-interfaces-blessed-d-widgets.elementoptions.md#hovertext)*

*Defined in [blessed.d.ts:2650](https://github.com/cancerberoSgx/accursed/blob/f66c8ce/src/declarations/blessed.d.ts#L2650)*

A floating text label for the element which appears on mouseover.

___
<a id="input"></a>

### `<Optional>` input

**● input**: *`boolean`*

*Inherited from [ElementOptions](api-interfaces-blessed-d-widgets.elementoptions.md).[input](api-interfaces-blessed-d-widgets.elementoptions.md#input)*

*Defined in [blessed.d.ts:2607](https://github.com/cancerberoSgx/accursed/blob/f66c8ce/src/declarations/blessed.d.ts#L2607)*

Element is focusable and can receive key input.

___
<a id="interactive"></a>

### `<Optional>` interactive

**● interactive**: *`boolean`*

*Inherited from [ListOptions](api-interfaces-blessed-d-widgets.listoptions.md).[interactive](api-interfaces-blessed-d-widgets.listoptions.md#interactive)*

*Defined in [blessed.d.ts:3439](https://github.com/cancerberoSgx/accursed/blob/f66c8ce/src/declarations/blessed.d.ts#L3439)*

Whether the list is interactive and can have items selected (Default: true).

___
<a id="inverse"></a>

### `<Optional>` inverse

**● inverse**: *`boolean`*

*Inherited from [ElementOptions](api-interfaces-blessed-d-widgets.elementoptions.md).[inverse](api-interfaces-blessed-d-widgets.elementoptions.md#inverse)*

*Defined in [blessed.d.ts:2583](https://github.com/cancerberoSgx/accursed/blob/f66c8ce/src/declarations/blessed.d.ts#L2583)*

___
<a id="invertselected"></a>

### `<Optional>` invertSelected

**● invertSelected**: *`boolean`*

*Inherited from [ListOptions](api-interfaces-blessed-d-widgets.listoptions.md).[invertSelected](api-interfaces-blessed-d-widgets.listoptions.md#invertselected)*

*Defined in [blessed.d.ts:3444](https://github.com/cancerberoSgx/accursed/blob/f66c8ce/src/declarations/blessed.d.ts#L3444)*

Whether to automatically override tags and invert fg of item when selected (Default: true).

___
<a id="invisible"></a>

### `<Optional>` invisible

**● invisible**: *`boolean`*

*Inherited from [ElementOptions](api-interfaces-blessed-d-widgets.elementoptions.md).[invisible](api-interfaces-blessed-d-widgets.elementoptions.md#invisible)*

*Defined in [blessed.d.ts:2584](https://github.com/cancerberoSgx/accursed/blob/f66c8ce/src/declarations/blessed.d.ts#L2584)*

___
<a id="items"></a>

### `<Optional>` items

**● items**: *`string`[]*

*Inherited from [ListOptions](api-interfaces-blessed-d-widgets.listoptions.md).[items](api-interfaces-blessed-d-widgets.listoptions.md#items)*

*Defined in [blessed.d.ts:3422](https://github.com/cancerberoSgx/accursed/blob/f66c8ce/src/declarations/blessed.d.ts#L3422)*

An array of strings which become the list's items.

___
<a id="keyable"></a>

### `<Optional>` keyable

**● keyable**: *`boolean`*

*Inherited from [ElementOptions](api-interfaces-blessed-d-widgets.elementoptions.md).[keyable](api-interfaces-blessed-d-widgets.elementoptions.md#keyable)*

*Defined in [blessed.d.ts:2612](https://github.com/cancerberoSgx/accursed/blob/f66c8ce/src/declarations/blessed.d.ts#L2612)*

Keys enabled for this element.

___
<a id="keys"></a>

### `<Optional>` keys

**● keys**: *`string` \| `string`[] \| `boolean`*

*Inherited from [ScrollableTextOptions](api-interfaces-blessed-d-widgets.scrollabletextoptions.md).[keys](api-interfaces-blessed-d-widgets.scrollabletextoptions.md#keys)*

*Defined in [blessed.d.ts:3230](https://github.com/cancerberoSgx/accursed/blob/f66c8ce/src/declarations/blessed.d.ts#L3230)*

Use pre-defined keys (i or enter for insert, e for editor, C-e for editor while inserting).

___
<a id="label"></a>

### `<Optional>` label

**● label**: *`string`*

*Inherited from [ElementOptions](api-interfaces-blessed-d-widgets.elementoptions.md).[label](api-interfaces-blessed-d-widgets.elementoptions.md#label)*

*Defined in [blessed.d.ts:2645](https://github.com/cancerberoSgx/accursed/blob/f66c8ce/src/declarations/blessed.d.ts#L2645)*

A simple text label for the element.

___
<a id="left"></a>

### `<Optional>` left

**● left**: *[TTopLeft](api-modules-blessed-d-widgets.types.md#ttopleft)*

*Inherited from [ElementOptions](api-interfaces-blessed-d-widgets.elementoptions.md).[left](api-interfaces-blessed-d-widgets.elementoptions.md#left)*

*Defined in [blessed.d.ts:2694](https://github.com/cancerberoSgx/accursed/blob/f66c8ce/src/declarations/blessed.d.ts#L2694)*

___
<a id="mouse"></a>

### `<Optional>` mouse

**● mouse**: *`boolean`*

*Inherited from [ScrollableTextOptions](api-interfaces-blessed-d-widgets.scrollabletextoptions.md).[mouse](api-interfaces-blessed-d-widgets.scrollabletextoptions.md#mouse)*

*Defined in [blessed.d.ts:3225](https://github.com/cancerberoSgx/accursed/blob/f66c8ce/src/declarations/blessed.d.ts#L3225)*

Whether to enable automatic mouse support for this element. Use pre-defined mouse events (right-click for editor).

___
<a id="name"></a>

### `<Optional>` name

**● name**: *`string`*

*Inherited from [INodeOptions](api-interfaces-blessed-d-widgets.inodeoptions.md).[name](api-interfaces-blessed-d-widgets.inodeoptions.md#name)*

*Defined in [blessed.d.ts:1627](https://github.com/cancerberoSgx/accursed/blob/f66c8ce/src/declarations/blessed.d.ts#L1627)*

___
<a id="nocellborders"></a>

### `<Optional>` noCellBorders

**● noCellBorders**: *`boolean`*

*Defined in [blessed.d.ts:3679](https://github.com/cancerberoSgx/accursed/blob/f66c8ce/src/declarations/blessed.d.ts#L3679)*

Do not draw inner cells.

___
<a id="nooverflow"></a>

### `<Optional>` noOverflow

**● noOverflow**: *`boolean`*

*Inherited from [ElementOptions](api-interfaces-blessed-d-widgets.elementoptions.md).[noOverflow](api-interfaces-blessed-d-widgets.elementoptions.md#nooverflow)*

*Defined in [blessed.d.ts:2623](https://github.com/cancerberoSgx/accursed/blob/f66c8ce/src/declarations/blessed.d.ts#L2623)*

Hide content or children outside this element's viewport.

___
<a id="pad"></a>

### `<Optional>` pad

**● pad**: *`number`*

*Defined in [blessed.d.ts:3674](https://github.com/cancerberoSgx/accursed/blob/f66c8ce/src/declarations/blessed.d.ts#L3674)*

Spaces to attempt to pad on the sides of each cell. 2 by default: one space on each side (only useful if the width is shrunken).

___
<a id="padding"></a>

### `<Optional>` padding

**● padding**: *`number` \| [Padding](api-interfaces-blessed-d-widgets.padding.md)*

*Inherited from [ElementOptions](api-interfaces-blessed-d-widgets.elementoptions.md).[padding](api-interfaces-blessed-d-widgets.elementoptions.md#padding)*

*Defined in [blessed.d.ts:2691](https://github.com/cancerberoSgx/accursed/blob/f66c8ce/src/declarations/blessed.d.ts#L2691)*

Amount of padding on the inside of the element. Can be a number or an object containing the properties: left, right, top, and bottom.

___
<a id="parent"></a>

### `<Optional>` parent

**● parent**: *[Node](api-classes-blessed-d-widgets.node.md)*

*Inherited from [INodeOptions](api-interfaces-blessed-d-widgets.inodeoptions.md).[parent](api-interfaces-blessed-d-widgets.inodeoptions.md#parent)*

*Defined in [blessed.d.ts:1629](https://github.com/cancerberoSgx/accursed/blob/f66c8ce/src/declarations/blessed.d.ts#L1629)*

___
<a id="position"></a>

### `<Optional>` position

**● position**: *[Position](api-interfaces-blessed-d-widgets.position.md)*

*Inherited from [ElementOptions](api-interfaces-blessed-d-widgets.elementoptions.md).[position](api-interfaces-blessed-d-widgets.elementoptions.md#position)*

*Defined in [blessed.d.ts:2714](https://github.com/cancerberoSgx/accursed/blob/f66c8ce/src/declarations/blessed.d.ts#L2714)*

Can contain the above options.

___
<a id="ref"></a>

### `<Optional>` ref

**● ref**: *[RefObject](api-interfaces-blessed-d-widgets.refobject.md)*

*Inherited from [ElementOptions](api-interfaces-blessed-d-widgets.elementoptions.md).[ref](api-interfaces-blessed-d-widgets.elementoptions.md#ref)*

*Defined in [blessed.d.ts:2741](https://github.com/cancerberoSgx/accursed/blob/f66c8ce/src/declarations/blessed.d.ts#L2741)*

`accursed` library custom support for React-like Refs. Declare the option here so it works out of the box. [https://reactjs.org/docs/refs-and-the-dom.html](https://reactjs.org/docs/refs-and-the-dom.html). TODO: documentation

___
<a id="right"></a>

### `<Optional>` right

**● right**: *[TPosition](api-modules-blessed-d-widgets.types.md#tposition)*

*Inherited from [ElementOptions](api-interfaces-blessed-d-widgets.elementoptions.md).[right](api-interfaces-blessed-d-widgets.elementoptions.md#right)*

*Defined in [blessed.d.ts:2695](https://github.com/cancerberoSgx/accursed/blob/f66c8ce/src/declarations/blessed.d.ts#L2695)*

___
<a id="rows"></a>

### `<Optional>` rows

**● rows**: *`string`[]*

*Defined in [blessed.d.ts:3667](https://github.com/cancerberoSgx/accursed/blob/f66c8ce/src/declarations/blessed.d.ts#L3667)*

Array of array of strings representing rows.

___
<a id="screen"></a>

### `<Optional>` screen

**● screen**: *[Screen](api-classes-blessed-d-widgets.screen.md)*

*Inherited from [INodeOptions](api-interfaces-blessed-d-widgets.inodeoptions.md).[screen](api-interfaces-blessed-d-widgets.inodeoptions.md#screen)*

*Defined in [blessed.d.ts:1628](https://github.com/cancerberoSgx/accursed/blob/f66c8ce/src/declarations/blessed.d.ts#L1628)*

___
<a id="scrollable"></a>

### `<Optional>` scrollable

**● scrollable**: *`boolean`*

*Inherited from [ElementOptions](api-interfaces-blessed-d-widgets.elementoptions.md).[scrollable](api-interfaces-blessed-d-widgets.elementoptions.md#scrollable)*

*Defined in [blessed.d.ts:2719](https://github.com/cancerberoSgx/accursed/blob/f66c8ce/src/declarations/blessed.d.ts#L2719)*

Whether the element is scrollable or not.

___
<a id="scrollbar"></a>

### `<Optional>` scrollbar

**● scrollbar**: *`object` & [TStyle](api-interfaces-blessed-d-widgets.types.tstyle.md) \| `boolean`*

*Inherited from [ScrollableBoxOptions](api-interfaces-blessed-d-widgets.scrollableboxoptions.md).[scrollbar](api-interfaces-blessed-d-widgets.scrollableboxoptions.md#scrollbar)*

*Defined in [blessed.d.ts:3215](https://github.com/cancerberoSgx/accursed/blob/f66c8ce/src/declarations/blessed.d.ts#L3215)*

Object enabling a scrollbar. Style of the scrollbar track if present (takes regular style options).

___
<a id="selectedbg"></a>

### `<Optional>` selectedBg

**● selectedBg**: *`string`*

*Inherited from [ListOptions](api-interfaces-blessed-d-widgets.listoptions.md).[selectedBg](api-interfaces-blessed-d-widgets.listoptions.md#selectedbg)*

*Defined in [blessed.d.ts:3425](https://github.com/cancerberoSgx/accursed/blob/f66c8ce/src/declarations/blessed.d.ts#L3425)*

selected item backgroundColor

___
<a id="shadow"></a>

### `<Optional>` shadow

**● shadow**: *`boolean`*

*Inherited from [ElementOptions](api-interfaces-blessed-d-widgets.elementoptions.md).[shadow](api-interfaces-blessed-d-widgets.elementoptions.md#shadow)*

*Defined in [blessed.d.ts:2734](https://github.com/cancerberoSgx/accursed/blob/f66c8ce/src/declarations/blessed.d.ts#L2734)*

Draw a translucent offset shadow behind the element.

___
<a id="shrink"></a>

### `<Optional>` shrink

**● shrink**: *`boolean`*

*Inherited from [ElementOptions](api-interfaces-blessed-d-widgets.elementoptions.md).[shrink](api-interfaces-blessed-d-widgets.elementoptions.md#shrink)*

*Defined in [blessed.d.ts:2685](https://github.com/cancerberoSgx/accursed/blob/f66c8ce/src/declarations/blessed.d.ts#L2685)*

Shrink/flex/grow to content and child elements. Width/height during render.

___
<a id="style"></a>

### `<Optional>` style

**● style**: *[TStyle](api-interfaces-blessed-d-widgets.types.tstyle.md)*

*Inherited from [ElementOptions](api-interfaces-blessed-d-widgets.elementoptions.md).[style](api-interfaces-blessed-d-widgets.elementoptions.md#style)*

*Defined in [blessed.d.ts:2587](https://github.com/cancerberoSgx/accursed/blob/f66c8ce/src/declarations/blessed.d.ts#L2587)*

___
<a id="tags"></a>

### `<Optional>` tags

**● tags**: *`boolean`*

*Inherited from [ElementOptions](api-interfaces-blessed-d-widgets.elementoptions.md).[tags](api-interfaces-blessed-d-widgets.elementoptions.md#tags)*

*Defined in [blessed.d.ts:2576](https://github.com/cancerberoSgx/accursed/blob/f66c8ce/src/declarations/blessed.d.ts#L2576)*

___
<a id="top"></a>

### `<Optional>` top

**● top**: *[TTopLeft](api-modules-blessed-d-widgets.types.md#ttopleft)*

*Inherited from [ElementOptions](api-interfaces-blessed-d-widgets.elementoptions.md).[top](api-interfaces-blessed-d-widgets.elementoptions.md#top)*

*Defined in [blessed.d.ts:2693](https://github.com/cancerberoSgx/accursed/blob/f66c8ce/src/declarations/blessed.d.ts#L2693)*

___
<a id="transparent"></a>

### `<Optional>` transparent

**● transparent**: *`boolean`*

*Inherited from [ElementOptions](api-interfaces-blessed-d-widgets.elementoptions.md).[transparent](api-interfaces-blessed-d-widgets.elementoptions.md#transparent)*

*Defined in [blessed.d.ts:2585](https://github.com/cancerberoSgx/accursed/blob/f66c8ce/src/declarations/blessed.d.ts#L2585)*

___
<a id="underline"></a>

### `<Optional>` underline

**● underline**: *`boolean`*

*Inherited from [ElementOptions](api-interfaces-blessed-d-widgets.elementoptions.md).[underline](api-interfaces-blessed-d-widgets.elementoptions.md#underline)*

*Defined in [blessed.d.ts:2581](https://github.com/cancerberoSgx/accursed/blob/f66c8ce/src/declarations/blessed.d.ts#L2581)*

___
<a id="valign"></a>

### `<Optional>` valign

**● valign**: *"top" \| "middle" \| "bottom"*

*Inherited from [ElementOptions](api-interfaces-blessed-d-widgets.elementoptions.md).[valign](api-interfaces-blessed-d-widgets.elementoptions.md#valign)*

*Defined in [blessed.d.ts:2680](https://github.com/cancerberoSgx/accursed/blob/f66c8ce/src/declarations/blessed.d.ts#L2680)*

Vertical text alignment: top, middle, or bottom.

___
<a id="vi"></a>

### `<Optional>` vi

**● vi**: *`boolean`*

*Inherited from [ScrollableTextOptions](api-interfaces-blessed-d-widgets.scrollabletextoptions.md).[vi](api-interfaces-blessed-d-widgets.scrollabletextoptions.md#vi)*

*Defined in [blessed.d.ts:3235](https://github.com/cancerberoSgx/accursed/blob/f66c8ce/src/declarations/blessed.d.ts#L3235)*

Use vi keys with the keys option.

___
<a id="width"></a>

### `<Optional>` width

**● width**: *`number` \| `string`*

*Inherited from [ElementOptions](api-interfaces-blessed-d-widgets.elementoptions.md).[width](api-interfaces-blessed-d-widgets.elementoptions.md#width)*

*Defined in [blessed.d.ts:2702](https://github.com/cancerberoSgx/accursed/blob/f66c8ce/src/declarations/blessed.d.ts#L2702)*

Width/height of the element, can be a number, percentage (0-100%), or keyword (half or shrink). Percentages can also have offsets (50%+1, 50%-1).

___
<a id="wrap"></a>

### `<Optional>` wrap

**● wrap**: *`boolean`*

*Inherited from [ElementOptions](api-interfaces-blessed-d-widgets.elementoptions.md).[wrap](api-interfaces-blessed-d-widgets.elementoptions.md#wrap)*

*Defined in [blessed.d.ts:2630](https://github.com/cancerberoSgx/accursed/blob/f66c8ce/src/declarations/blessed.d.ts#L2630)*

Wrap content inside this element viewport.

___

## Methods

<a id="search"></a>

### `<Optional>` search

▸ **search**(err: *`any`*, value?: *`string`*): `void`

*Inherited from [ListOptions](api-interfaces-blessed-d-widgets.listoptions.md).[search](api-interfaces-blessed-d-widgets.listoptions.md#search)*

*Defined in [blessed.d.ts:3434](https://github.com/cancerberoSgx/accursed/blob/f66c8ce/src/declarations/blessed.d.ts#L3434)*

A function that is called when vi mode is enabled and the key / is pressed. This function accepts a callback function which should be called with the search string. The search string is then used to jump to an item that is found in items.

**Parameters:**

| Name | Type |
| ------ | ------ |
| err | `any` |
| `Optional` value | `string` |

**Returns:** `void`

___

