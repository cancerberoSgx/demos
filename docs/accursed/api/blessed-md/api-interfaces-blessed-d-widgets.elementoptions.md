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
* [bold](api-interfaces-blessed-d-widgets.elementoptions.md#bold)
* [border](api-interfaces-blessed-d-widgets.elementoptions.md#border)
* [bottom](api-interfaces-blessed-d-widgets.elementoptions.md#bottom)
* [ch](api-interfaces-blessed-d-widgets.elementoptions.md#ch)
* [children](api-interfaces-blessed-d-widgets.elementoptions.md#children)
* [clickable](api-interfaces-blessed-d-widgets.elementoptions.md#clickable)
* [content](api-interfaces-blessed-d-widgets.elementoptions.md#content)
* [draggable](api-interfaces-blessed-d-widgets.elementoptions.md#draggable)
* [fg](api-interfaces-blessed-d-widgets.elementoptions.md#fg)
* [focusable](api-interfaces-blessed-d-widgets.elementoptions.md#focusable)
* [focused](api-interfaces-blessed-d-widgets.elementoptions.md#focused)
* [height](api-interfaces-blessed-d-widgets.elementoptions.md#height)
* [hidden](api-interfaces-blessed-d-widgets.elementoptions.md#hidden)
* [hoverText](api-interfaces-blessed-d-widgets.elementoptions.md#hovertext)
* [input](api-interfaces-blessed-d-widgets.elementoptions.md#input)
* [keyable](api-interfaces-blessed-d-widgets.elementoptions.md#keyable)
* [label](api-interfaces-blessed-d-widgets.elementoptions.md#label)
* [left](api-interfaces-blessed-d-widgets.elementoptions.md#left)
* [name](api-interfaces-blessed-d-widgets.elementoptions.md#name)
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
* [underline](api-interfaces-blessed-d-widgets.elementoptions.md#underline)
* [valign](api-interfaces-blessed-d-widgets.elementoptions.md#valign)
* [width](api-interfaces-blessed-d-widgets.elementoptions.md#width)

---

## Properties

<a id="_data"></a>

### `<Optional>` _data

**● _data**: *`undefined` \| `object`*

*Defined in [blessed.d.ts:2685](https://github.com/cancerberoSgx/accursed/blob/7a42e78/src/declarations/blessed.d.ts#L2685)*

Miscelanus options. Currently JavaScript/Blessed allows to pass anything as option, this is just a bucket for TypeScript and have impact

___
<a id="align"></a>

### `<Optional>` align

**● align**: *"left" \| "center" \| "right"*

*Defined in [blessed.d.ts:2622](https://github.com/cancerberoSgx/accursed/blob/7a42e78/src/declarations/blessed.d.ts#L2622)*

Text alignment: left, center, or right.

___
<a id="bg"></a>

### `<Optional>` bg

**● bg**: *[Color](api-modules-blessed-d-widgets.md#color)*

*Defined in [blessed.d.ts:2572](https://github.com/cancerberoSgx/accursed/blob/7a42e78/src/declarations/blessed.d.ts#L2572)*

___
<a id="bold"></a>

### `<Optional>` bold

**● bold**: *`undefined` \| `false` \| `true`*

*Defined in [blessed.d.ts:2573](https://github.com/cancerberoSgx/accursed/blob/7a42e78/src/declarations/blessed.d.ts#L2573)*

___
<a id="border"></a>

### `<Optional>` border

**● border**: *[TBorder](api-interfaces-blessed-d-widgets.types.tborder.md) \| [BorderType](api-modules-blessed-d-widgets.types.md#bordertype)*

*Defined in [blessed.d.ts:2581](https://github.com/cancerberoSgx/accursed/blob/7a42e78/src/declarations/blessed.d.ts#L2581)*

Border object, see below.

___
<a id="bottom"></a>

### `<Optional>` bottom

**● bottom**: *[TPosition](api-modules-blessed-d-widgets.types.md#tposition)*

*Defined in [blessed.d.ts:2643](https://github.com/cancerberoSgx/accursed/blob/7a42e78/src/declarations/blessed.d.ts#L2643)*

___
<a id="ch"></a>

### `<Optional>` ch

**● ch**: *`undefined` \| `string`*

*Defined in [blessed.d.ts:2671](https://github.com/cancerberoSgx/accursed/blob/7a42e78/src/declarations/blessed.d.ts#L2671)*

Background character (default is whitespace ).

___
<a id="children"></a>

### `<Optional>` children

**● children**: *[Node](api-classes-blessed-d-widgets.node.md)[]*

*Inherited from [INodeOptions](api-interfaces-blessed-d-widgets.inodeoptions.md).[children](api-interfaces-blessed-d-widgets.inodeoptions.md#children)*

*Defined in [blessed.d.ts:1642](https://github.com/cancerberoSgx/accursed/blob/7a42e78/src/declarations/blessed.d.ts#L1642)*

___
<a id="clickable"></a>

### `<Optional>` clickable

**● clickable**: *`undefined` \| `false` \| `true`*

*Defined in [blessed.d.ts:2591](https://github.com/cancerberoSgx/accursed/blob/7a42e78/src/declarations/blessed.d.ts#L2591)*

Element is clickable.

___
<a id="content"></a>

### `<Optional>` content

**● content**: *`undefined` \| `string`*

*Defined in [blessed.d.ts:2586](https://github.com/cancerberoSgx/accursed/blob/7a42e78/src/declarations/blessed.d.ts#L2586)*

Element's text content.

___
<a id="draggable"></a>

### `<Optional>` draggable

**● draggable**: *`undefined` \| `false` \| `true`*

*Defined in [blessed.d.ts:2676](https://github.com/cancerberoSgx/accursed/blob/7a42e78/src/declarations/blessed.d.ts#L2676)*

Allow the element to be dragged with the mouse.

___
<a id="fg"></a>

### `<Optional>` fg

**● fg**: *[Color](api-modules-blessed-d-widgets.md#color)*

*Defined in [blessed.d.ts:2571](https://github.com/cancerberoSgx/accursed/blob/7a42e78/src/declarations/blessed.d.ts#L2571)*

___
<a id="focusable"></a>

### `<Optional>` focusable

**● focusable**: *`undefined` \| `false` \| `true`*

*Inherited from [INodeOptions](api-interfaces-blessed-d-widgets.inodeoptions.md).[focusable](api-interfaces-blessed-d-widgets.inodeoptions.md#focusable)*

*Defined in [blessed.d.ts:1646](https://github.com/cancerberoSgx/accursed/blob/7a42e78/src/declarations/blessed.d.ts#L1646)*

If true, the node will obtain focus when m

___
<a id="focused"></a>

### `<Optional>` focused

**● focused**: *`undefined` \| `false` \| `true`*

*Defined in [blessed.d.ts:2602](https://github.com/cancerberoSgx/accursed/blob/7a42e78/src/declarations/blessed.d.ts#L2602)*

Element is focused.

___
<a id="height"></a>

### `<Optional>` height

**● height**: *`number` \| `string`*

*Defined in [blessed.d.ts:2656](https://github.com/cancerberoSgx/accursed/blob/7a42e78/src/declarations/blessed.d.ts#L2656)*

Offsets of the element relative to its parent. Can be a number, percentage (0-100%), or keyword (center). right and bottom do not accept keywords. Percentages can also have offsets (50%+1, 50%-1).

___
<a id="hidden"></a>

### `<Optional>` hidden

**● hidden**: *`undefined` \| `false` \| `true`*

*Defined in [blessed.d.ts:2607](https://github.com/cancerberoSgx/accursed/blob/7a42e78/src/declarations/blessed.d.ts#L2607)*

Whether the element is hidden.

___
<a id="hovertext"></a>

### `<Optional>` hoverText

**● hoverText**: *`undefined` \| `string`*

*Defined in [blessed.d.ts:2617](https://github.com/cancerberoSgx/accursed/blob/7a42e78/src/declarations/blessed.d.ts#L2617)*

A floating text label for the element which appears on mouseover.

___
<a id="input"></a>

### `<Optional>` input

**● input**: *`undefined` \| `false` \| `true`*

*Defined in [blessed.d.ts:2596](https://github.com/cancerberoSgx/accursed/blob/7a42e78/src/declarations/blessed.d.ts#L2596)*

Element is focusable and can receive key input.

___
<a id="keyable"></a>

### `<Optional>` keyable

**● keyable**: *`undefined` \| `false` \| `true`*

*Defined in [blessed.d.ts:2597](https://github.com/cancerberoSgx/accursed/blob/7a42e78/src/declarations/blessed.d.ts#L2597)*

___
<a id="label"></a>

### `<Optional>` label

**● label**: *`undefined` \| `string`*

*Defined in [blessed.d.ts:2612](https://github.com/cancerberoSgx/accursed/blob/7a42e78/src/declarations/blessed.d.ts#L2612)*

A simple text label for the element.

___
<a id="left"></a>

### `<Optional>` left

**● left**: *[TTopLeft](api-modules-blessed-d-widgets.types.md#ttopleft)*

*Defined in [blessed.d.ts:2641](https://github.com/cancerberoSgx/accursed/blob/7a42e78/src/declarations/blessed.d.ts#L2641)*

___
<a id="name"></a>

### `<Optional>` name

**● name**: *`undefined` \| `string`*

*Inherited from [INodeOptions](api-interfaces-blessed-d-widgets.inodeoptions.md).[name](api-interfaces-blessed-d-widgets.inodeoptions.md#name)*

*Defined in [blessed.d.ts:1639](https://github.com/cancerberoSgx/accursed/blob/7a42e78/src/declarations/blessed.d.ts#L1639)*

___
<a id="padding"></a>

### `<Optional>` padding

**● padding**: *`number` \| [Padding](api-interfaces-blessed-d-widgets.padding.md)*

*Defined in [blessed.d.ts:2638](https://github.com/cancerberoSgx/accursed/blob/7a42e78/src/declarations/blessed.d.ts#L2638)*

Amount of padding on the inside of the element. Can be a number or an object containing the properties: left, right, top, and bottom.

___
<a id="parent"></a>

### `<Optional>` parent

**● parent**: *[Node](api-classes-blessed-d-widgets.node.md)*

*Inherited from [INodeOptions](api-interfaces-blessed-d-widgets.inodeoptions.md).[parent](api-interfaces-blessed-d-widgets.inodeoptions.md#parent)*

*Defined in [blessed.d.ts:1641](https://github.com/cancerberoSgx/accursed/blob/7a42e78/src/declarations/blessed.d.ts#L1641)*

___
<a id="position"></a>

### `<Optional>` position

**● position**: *[Position](api-interfaces-blessed-d-widgets.position.md)*

*Defined in [blessed.d.ts:2661](https://github.com/cancerberoSgx/accursed/blob/7a42e78/src/declarations/blessed.d.ts#L2661)*

Can contain the above options.

___
<a id="ref"></a>

### `<Optional>` ref

**● ref**: *[RefObject](api-interfaces-blessed-d-widgets.refobject.md)*

*Defined in [blessed.d.ts:2688](https://github.com/cancerberoSgx/accursed/blob/7a42e78/src/declarations/blessed.d.ts#L2688)*

`accursed` library custom support for React-like Refs. Declare the option here so it works out of the box. [https://reactjs.org/docs/refs-and-the-dom.html](https://reactjs.org/docs/refs-and-the-dom.html). TODO: documentation

___
<a id="right"></a>

### `<Optional>` right

**● right**: *[TPosition](api-modules-blessed-d-widgets.types.md#tposition)*

*Defined in [blessed.d.ts:2642](https://github.com/cancerberoSgx/accursed/blob/7a42e78/src/declarations/blessed.d.ts#L2642)*

___
<a id="screen"></a>

### `<Optional>` screen

**● screen**: *[Screen](api-classes-blessed-d-widgets.screen.md)*

*Inherited from [INodeOptions](api-interfaces-blessed-d-widgets.inodeoptions.md).[screen](api-interfaces-blessed-d-widgets.inodeoptions.md#screen)*

*Defined in [blessed.d.ts:1640](https://github.com/cancerberoSgx/accursed/blob/7a42e78/src/declarations/blessed.d.ts#L1640)*

___
<a id="scrollable"></a>

### `<Optional>` scrollable

**● scrollable**: *`undefined` \| `false` \| `true`*

*Defined in [blessed.d.ts:2666](https://github.com/cancerberoSgx/accursed/blob/7a42e78/src/declarations/blessed.d.ts#L2666)*

Whether the element is scrollable or not.

___
<a id="shadow"></a>

### `<Optional>` shadow

**● shadow**: *`undefined` \| `false` \| `true`*

*Defined in [blessed.d.ts:2681](https://github.com/cancerberoSgx/accursed/blob/7a42e78/src/declarations/blessed.d.ts#L2681)*

Draw a translucent offset shadow behind the element.

___
<a id="shrink"></a>

### `<Optional>` shrink

**● shrink**: *`undefined` \| `false` \| `true`*

*Defined in [blessed.d.ts:2632](https://github.com/cancerberoSgx/accursed/blob/7a42e78/src/declarations/blessed.d.ts#L2632)*

Shrink/flex/grow to content and child elements. Width/height during render.

___
<a id="style"></a>

### `<Optional>` style

**● style**: *[TStyle](api-interfaces-blessed-d-widgets.types.tstyle.md)*

*Defined in [blessed.d.ts:2576](https://github.com/cancerberoSgx/accursed/blob/7a42e78/src/declarations/blessed.d.ts#L2576)*

___
<a id="tags"></a>

### `<Optional>` tags

**● tags**: *`undefined` \| `false` \| `true`*

*Defined in [blessed.d.ts:2569](https://github.com/cancerberoSgx/accursed/blob/7a42e78/src/declarations/blessed.d.ts#L2569)*

___
<a id="top"></a>

### `<Optional>` top

**● top**: *[TTopLeft](api-modules-blessed-d-widgets.types.md#ttopleft)*

*Defined in [blessed.d.ts:2640](https://github.com/cancerberoSgx/accursed/blob/7a42e78/src/declarations/blessed.d.ts#L2640)*

___
<a id="underline"></a>

### `<Optional>` underline

**● underline**: *`undefined` \| `false` \| `true`*

*Defined in [blessed.d.ts:2574](https://github.com/cancerberoSgx/accursed/blob/7a42e78/src/declarations/blessed.d.ts#L2574)*

___
<a id="valign"></a>

### `<Optional>` valign

**● valign**: *"top" \| "middle" \| "bottom"*

*Defined in [blessed.d.ts:2627](https://github.com/cancerberoSgx/accursed/blob/7a42e78/src/declarations/blessed.d.ts#L2627)*

Vertical text alignment: top, middle, or bottom.

___
<a id="width"></a>

### `<Optional>` width

**● width**: *`number` \| `string`*

*Defined in [blessed.d.ts:2649](https://github.com/cancerberoSgx/accursed/blob/7a42e78/src/declarations/blessed.d.ts#L2649)*

Width/height of the element, can be a number, percentage (0-100%), or keyword (half or shrink). Percentages can also have offsets (50%+1, 50%-1).

___

