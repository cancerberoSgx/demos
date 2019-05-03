---
id: api-interfaces-blessed-d-widgets.elementoptions
title: ElementOptions
sidebar_label: ElementOptions
---

[blessed](api-readme.md) > [[blessed.d Module]](api-modules-blessed-d-module.md) > [Widgets](api-modules-blessed-d-widgets.md) > [ElementOptions](api-interfaces-blessed-d-widgets.elementoptions.md)

## Interface

## Hierarchy

↳  [INodeOptions](api-interfaces-blessed-d-widgets.inodeoptions.md)

**↳ ElementOptions**

↳  [ScrollableBoxOptions](api-interfaces-blessed-d-widgets.scrollableboxoptions.md)

↳  [TextOptions](api-interfaces-blessed-d-widgets.textoptions.md)

↳  [LayoutOptions](api-interfaces-blessed-d-widgets.layoutoptions.md)

### Properties

* [_data](api-interfaces-blessed-d-widgets.elementoptions.md#_data)
* [align](api-interfaces-blessed-d-widgets.elementoptions.md#align)
* [bg](api-interfaces-blessed-d-widgets.elementoptions.md#bg)
* [blink](api-interfaces-blessed-d-widgets.elementoptions.md#blink)
* [bold](api-interfaces-blessed-d-widgets.elementoptions.md#bold)
* [border](api-interfaces-blessed-d-widgets.elementoptions.md#border)
* [bottom](api-interfaces-blessed-d-widgets.elementoptions.md#bottom)
* [ch](api-interfaces-blessed-d-widgets.elementoptions.md#ch)
* [children](api-interfaces-blessed-d-widgets.elementoptions.md#children)
* [clickable](api-interfaces-blessed-d-widgets.elementoptions.md#clickable)
* [content](api-interfaces-blessed-d-widgets.elementoptions.md#content)
* [dockBorders](api-interfaces-blessed-d-widgets.elementoptions.md#dockborders)
* [draggable](api-interfaces-blessed-d-widgets.elementoptions.md#draggable)
* [effects](api-interfaces-blessed-d-widgets.elementoptions.md#effects)
* [fg](api-interfaces-blessed-d-widgets.elementoptions.md#fg)
* [fixed](api-interfaces-blessed-d-widgets.elementoptions.md#fixed)
* [focusEffects](api-interfaces-blessed-d-widgets.elementoptions.md#focuseffects)
* [focusable](api-interfaces-blessed-d-widgets.elementoptions.md#focusable)
* [focused](api-interfaces-blessed-d-widgets.elementoptions.md#focused)
* [height](api-interfaces-blessed-d-widgets.elementoptions.md#height)
* [hidden](api-interfaces-blessed-d-widgets.elementoptions.md#hidden)
* [hoverBg](api-interfaces-blessed-d-widgets.elementoptions.md#hoverbg)
* [hoverEffects](api-interfaces-blessed-d-widgets.elementoptions.md#hovereffects)
* [hoverText](api-interfaces-blessed-d-widgets.elementoptions.md#hovertext)
* [input](api-interfaces-blessed-d-widgets.elementoptions.md#input)
* [inverse](api-interfaces-blessed-d-widgets.elementoptions.md#inverse)
* [invisible](api-interfaces-blessed-d-widgets.elementoptions.md#invisible)
* [keyable](api-interfaces-blessed-d-widgets.elementoptions.md#keyable)
* [label](api-interfaces-blessed-d-widgets.elementoptions.md#label)
* [left](api-interfaces-blessed-d-widgets.elementoptions.md#left)
* [name](api-interfaces-blessed-d-widgets.elementoptions.md#name)
* [noOverflow](api-interfaces-blessed-d-widgets.elementoptions.md#nooverflow)
* [padding](api-interfaces-blessed-d-widgets.elementoptions.md#padding)
* [parent](api-interfaces-blessed-d-widgets.elementoptions.md#parent)
* [position](api-interfaces-blessed-d-widgets.elementoptions.md#position)
* [ref](api-interfaces-blessed-d-widgets.elementoptions.md#ref)
* [right](api-interfaces-blessed-d-widgets.elementoptions.md#right)
* [screen](api-interfaces-blessed-d-widgets.elementoptions.md#screen)
* [scrollable](api-interfaces-blessed-d-widgets.elementoptions.md#scrollable)
* [shadow](api-interfaces-blessed-d-widgets.elementoptions.md#shadow)
* [shrink](api-interfaces-blessed-d-widgets.elementoptions.md#shrink)
* [style](api-interfaces-blessed-d-widgets.elementoptions.md#style)
* [tags](api-interfaces-blessed-d-widgets.elementoptions.md#tags)
* [top](api-interfaces-blessed-d-widgets.elementoptions.md#top)
* [transparent](api-interfaces-blessed-d-widgets.elementoptions.md#transparent)
* [underline](api-interfaces-blessed-d-widgets.elementoptions.md#underline)
* [valign](api-interfaces-blessed-d-widgets.elementoptions.md#valign)
* [width](api-interfaces-blessed-d-widgets.elementoptions.md#width)
* [wrap](api-interfaces-blessed-d-widgets.elementoptions.md#wrap)

---

## Properties

<a id="_data"></a>

### `<Optional>` _data

**● _data**: *`object`*

*Defined in [blessed.d.ts:2738](https://github.com/cancerberoSgx/accursed/blob/f66c8ce/src/declarations/blessed.d.ts#L2738)*

Miscelanus options. Currently JavaScript/Blessed allows to pass anything as option, this is just a bucket for TypeScript and have impact

#### Type declaration

[name: `string`]: `any`

___
<a id="align"></a>

### `<Optional>` align

**● align**: *"left" \| "center" \| "right"*

*Defined in [blessed.d.ts:2675](https://github.com/cancerberoSgx/accursed/blob/f66c8ce/src/declarations/blessed.d.ts#L2675)*

Text alignment: left, center, or right.

___
<a id="bg"></a>

### `<Optional>` bg

**● bg**: *[Color](api-modules-blessed-d-widgets.md#color)*

*Defined in [blessed.d.ts:2579](https://github.com/cancerberoSgx/accursed/blob/f66c8ce/src/declarations/blessed.d.ts#L2579)*

___
<a id="blink"></a>

### `<Optional>` blink

**● blink**: *`boolean`*

*Defined in [blessed.d.ts:2582](https://github.com/cancerberoSgx/accursed/blob/f66c8ce/src/declarations/blessed.d.ts#L2582)*

___
<a id="bold"></a>

### `<Optional>` bold

**● bold**: *`boolean`*

*Defined in [blessed.d.ts:2580](https://github.com/cancerberoSgx/accursed/blob/f66c8ce/src/declarations/blessed.d.ts#L2580)*

___
<a id="border"></a>

### `<Optional>` border

**● border**: *[TBorder](api-interfaces-blessed-d-widgets.types.tborder.md) \| [BorderType](api-modules-blessed-d-widgets.types.md#bordertype)*

*Defined in [blessed.d.ts:2592](https://github.com/cancerberoSgx/accursed/blob/f66c8ce/src/declarations/blessed.d.ts#L2592)*

Border object, see below.

___
<a id="bottom"></a>

### `<Optional>` bottom

**● bottom**: *[TPosition](api-modules-blessed-d-widgets.types.md#tposition)*

*Defined in [blessed.d.ts:2696](https://github.com/cancerberoSgx/accursed/blob/f66c8ce/src/declarations/blessed.d.ts#L2696)*

___
<a id="ch"></a>

### `<Optional>` ch

**● ch**: *`string`*

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

*Defined in [blessed.d.ts:2602](https://github.com/cancerberoSgx/accursed/blob/f66c8ce/src/declarations/blessed.d.ts#L2602)*

Element is clickable.

___
<a id="content"></a>

### `<Optional>` content

**● content**: *`string`*

*Defined in [blessed.d.ts:2597](https://github.com/cancerberoSgx/accursed/blob/f66c8ce/src/declarations/blessed.d.ts#L2597)*

Element's text content.

___
<a id="dockborders"></a>

### `<Optional>` dockBorders

**● dockBorders**: *`boolean`*

*Defined in [blessed.d.ts:2618](https://github.com/cancerberoSgx/accursed/blob/f66c8ce/src/declarations/blessed.d.ts#L2618)*

Automatically "dock" borders with other elements instead of overlapping, depending on position (experimental).

___
<a id="draggable"></a>

### `<Optional>` draggable

**● draggable**: *`boolean`*

*Defined in [blessed.d.ts:2729](https://github.com/cancerberoSgx/accursed/blob/f66c8ce/src/declarations/blessed.d.ts#L2729)*

Allow the element to be dragged with the mouse.

___
<a id="effects"></a>

### `<Optional>` effects

**● effects**: *`object`*

*Defined in [blessed.d.ts:2668](https://github.com/cancerberoSgx/accursed/blob/f66c8ce/src/declarations/blessed.d.ts#L2668)*

Same as style.focus and style.hover

#### Type declaration

`Optional`  focus: [TStyle](api-interfaces-blessed-d-widgets.types.tstyle.md)

`Optional`  hover: [TStyle](api-interfaces-blessed-d-widgets.types.tstyle.md)

___
<a id="fg"></a>

### `<Optional>` fg

**● fg**: *[Color](api-modules-blessed-d-widgets.md#color)*

*Defined in [blessed.d.ts:2578](https://github.com/cancerberoSgx/accursed/blob/f66c8ce/src/declarations/blessed.d.ts#L2578)*

___
<a id="fixed"></a>

### `<Optional>` fixed

**● fixed**: *`boolean`*

*Defined in [blessed.d.ts:2625](https://github.com/cancerberoSgx/accursed/blob/f66c8ce/src/declarations/blessed.d.ts#L2625)*

___
<a id="focuseffects"></a>

### `<Optional>` focusEffects

**● focusEffects**: *[TStyle](api-interfaces-blessed-d-widgets.types.tstyle.md)*

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

*Defined in [blessed.d.ts:2635](https://github.com/cancerberoSgx/accursed/blob/f66c8ce/src/declarations/blessed.d.ts#L2635)*

Element is focused.

___
<a id="height"></a>

### `<Optional>` height

**● height**: *`number` \| `string`*

*Defined in [blessed.d.ts:2709](https://github.com/cancerberoSgx/accursed/blob/f66c8ce/src/declarations/blessed.d.ts#L2709)*

Offsets of the element relative to its parent. Can be a number, percentage (0-100%), or keyword (center). right and bottom do not accept keywords. Percentages can also have offsets (50%+1, 50%-1).

___
<a id="hidden"></a>

### `<Optional>` hidden

**● hidden**: *`boolean`*

*Defined in [blessed.d.ts:2640](https://github.com/cancerberoSgx/accursed/blob/f66c8ce/src/declarations/blessed.d.ts#L2640)*

Whether the element is hidden.

___
<a id="hoverbg"></a>

### `<Optional>` hoverBg

**● hoverBg**: *[Color](api-modules-blessed-d-widgets.md#color)*

*Defined in [blessed.d.ts:2655](https://github.com/cancerberoSgx/accursed/blob/f66c8ce/src/declarations/blessed.d.ts#L2655)*

Same as style.hover.bg

___
<a id="hovereffects"></a>

### `<Optional>` hoverEffects

**● hoverEffects**: *[TStyle](api-interfaces-blessed-d-widgets.types.tstyle.md)*

*Defined in [blessed.d.ts:2660](https://github.com/cancerberoSgx/accursed/blob/f66c8ce/src/declarations/blessed.d.ts#L2660)*

Same as style.hover

___
<a id="hovertext"></a>

### `<Optional>` hoverText

**● hoverText**: *`string`*

*Defined in [blessed.d.ts:2650](https://github.com/cancerberoSgx/accursed/blob/f66c8ce/src/declarations/blessed.d.ts#L2650)*

A floating text label for the element which appears on mouseover.

___
<a id="input"></a>

### `<Optional>` input

**● input**: *`boolean`*

*Defined in [blessed.d.ts:2607](https://github.com/cancerberoSgx/accursed/blob/f66c8ce/src/declarations/blessed.d.ts#L2607)*

Element is focusable and can receive key input.

___
<a id="inverse"></a>

### `<Optional>` inverse

**● inverse**: *`boolean`*

*Defined in [blessed.d.ts:2583](https://github.com/cancerberoSgx/accursed/blob/f66c8ce/src/declarations/blessed.d.ts#L2583)*

___
<a id="invisible"></a>

### `<Optional>` invisible

**● invisible**: *`boolean`*

*Defined in [blessed.d.ts:2584](https://github.com/cancerberoSgx/accursed/blob/f66c8ce/src/declarations/blessed.d.ts#L2584)*

___
<a id="keyable"></a>

### `<Optional>` keyable

**● keyable**: *`boolean`*

*Defined in [blessed.d.ts:2612](https://github.com/cancerberoSgx/accursed/blob/f66c8ce/src/declarations/blessed.d.ts#L2612)*

Keys enabled for this element.

___
<a id="label"></a>

### `<Optional>` label

**● label**: *`string`*

*Defined in [blessed.d.ts:2645](https://github.com/cancerberoSgx/accursed/blob/f66c8ce/src/declarations/blessed.d.ts#L2645)*

A simple text label for the element.

___
<a id="left"></a>

### `<Optional>` left

**● left**: *[TTopLeft](api-modules-blessed-d-widgets.types.md#ttopleft)*

*Defined in [blessed.d.ts:2694](https://github.com/cancerberoSgx/accursed/blob/f66c8ce/src/declarations/blessed.d.ts#L2694)*

___
<a id="name"></a>

### `<Optional>` name

**● name**: *`string`*

*Inherited from [INodeOptions](api-interfaces-blessed-d-widgets.inodeoptions.md).[name](api-interfaces-blessed-d-widgets.inodeoptions.md#name)*

*Defined in [blessed.d.ts:1627](https://github.com/cancerberoSgx/accursed/blob/f66c8ce/src/declarations/blessed.d.ts#L1627)*

___
<a id="nooverflow"></a>

### `<Optional>` noOverflow

**● noOverflow**: *`boolean`*

*Defined in [blessed.d.ts:2623](https://github.com/cancerberoSgx/accursed/blob/f66c8ce/src/declarations/blessed.d.ts#L2623)*

Hide content or children outside this element's viewport.

___
<a id="padding"></a>

### `<Optional>` padding

**● padding**: *`number` \| [Padding](api-interfaces-blessed-d-widgets.padding.md)*

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

*Defined in [blessed.d.ts:2714](https://github.com/cancerberoSgx/accursed/blob/f66c8ce/src/declarations/blessed.d.ts#L2714)*

Can contain the above options.

___
<a id="ref"></a>

### `<Optional>` ref

**● ref**: *[RefObject](api-interfaces-blessed-d-widgets.refobject.md)*

*Defined in [blessed.d.ts:2741](https://github.com/cancerberoSgx/accursed/blob/f66c8ce/src/declarations/blessed.d.ts#L2741)*

`accursed` library custom support for React-like Refs. Declare the option here so it works out of the box. [https://reactjs.org/docs/refs-and-the-dom.html](https://reactjs.org/docs/refs-and-the-dom.html). TODO: documentation

___
<a id="right"></a>

### `<Optional>` right

**● right**: *[TPosition](api-modules-blessed-d-widgets.types.md#tposition)*

*Defined in [blessed.d.ts:2695](https://github.com/cancerberoSgx/accursed/blob/f66c8ce/src/declarations/blessed.d.ts#L2695)*

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

*Defined in [blessed.d.ts:2719](https://github.com/cancerberoSgx/accursed/blob/f66c8ce/src/declarations/blessed.d.ts#L2719)*

Whether the element is scrollable or not.

___
<a id="shadow"></a>

### `<Optional>` shadow

**● shadow**: *`boolean`*

*Defined in [blessed.d.ts:2734](https://github.com/cancerberoSgx/accursed/blob/f66c8ce/src/declarations/blessed.d.ts#L2734)*

Draw a translucent offset shadow behind the element.

___
<a id="shrink"></a>

### `<Optional>` shrink

**● shrink**: *`boolean`*

*Defined in [blessed.d.ts:2685](https://github.com/cancerberoSgx/accursed/blob/f66c8ce/src/declarations/blessed.d.ts#L2685)*

Shrink/flex/grow to content and child elements. Width/height during render.

___
<a id="style"></a>

### `<Optional>` style

**● style**: *[TStyle](api-interfaces-blessed-d-widgets.types.tstyle.md)*

*Defined in [blessed.d.ts:2587](https://github.com/cancerberoSgx/accursed/blob/f66c8ce/src/declarations/blessed.d.ts#L2587)*

___
<a id="tags"></a>

### `<Optional>` tags

**● tags**: *`boolean`*

*Defined in [blessed.d.ts:2576](https://github.com/cancerberoSgx/accursed/blob/f66c8ce/src/declarations/blessed.d.ts#L2576)*

___
<a id="top"></a>

### `<Optional>` top

**● top**: *[TTopLeft](api-modules-blessed-d-widgets.types.md#ttopleft)*

*Defined in [blessed.d.ts:2693](https://github.com/cancerberoSgx/accursed/blob/f66c8ce/src/declarations/blessed.d.ts#L2693)*

___
<a id="transparent"></a>

### `<Optional>` transparent

**● transparent**: *`boolean`*

*Defined in [blessed.d.ts:2585](https://github.com/cancerberoSgx/accursed/blob/f66c8ce/src/declarations/blessed.d.ts#L2585)*

___
<a id="underline"></a>

### `<Optional>` underline

**● underline**: *`boolean`*

*Defined in [blessed.d.ts:2581](https://github.com/cancerberoSgx/accursed/blob/f66c8ce/src/declarations/blessed.d.ts#L2581)*

___
<a id="valign"></a>

### `<Optional>` valign

**● valign**: *"top" \| "middle" \| "bottom"*

*Defined in [blessed.d.ts:2680](https://github.com/cancerberoSgx/accursed/blob/f66c8ce/src/declarations/blessed.d.ts#L2680)*

Vertical text alignment: top, middle, or bottom.

___
<a id="width"></a>

### `<Optional>` width

**● width**: *`number` \| `string`*

*Defined in [blessed.d.ts:2702](https://github.com/cancerberoSgx/accursed/blob/f66c8ce/src/declarations/blessed.d.ts#L2702)*

Width/height of the element, can be a number, percentage (0-100%), or keyword (half or shrink). Percentages can also have offsets (50%+1, 50%-1).

___
<a id="wrap"></a>

### `<Optional>` wrap

**● wrap**: *`boolean`*

*Defined in [blessed.d.ts:2630](https://github.com/cancerberoSgx/accursed/blob/f66c8ce/src/declarations/blessed.d.ts#L2630)*

Wrap content inside this element viewport.

___

