---
id: api-interfaces-blessed-d-widgets.terminaloptions
title: TerminalOptions
sidebar_label: TerminalOptions
---

[blessed](api-readme.md) > [[blessed.d Module]](api-modules-blessed-d-module.md) > [Widgets](api-modules-blessed-d-widgets.md) > [TerminalOptions](api-interfaces-blessed-d-widgets.terminaloptions.md)

## Interface

## Hierarchy

↳  [BoxOptions](api-interfaces-blessed-d-widgets.boxoptions.md)

**↳ TerminalOptions**

### Properties

* [_data](api-interfaces-blessed-d-widgets.terminaloptions.md#_data)
* [align](api-interfaces-blessed-d-widgets.terminaloptions.md#align)
* [alwaysScroll](api-interfaces-blessed-d-widgets.terminaloptions.md#alwaysscroll)
* [args](api-interfaces-blessed-d-widgets.terminaloptions.md#args)
* [baseLimit](api-interfaces-blessed-d-widgets.terminaloptions.md#baselimit)
* [bg](api-interfaces-blessed-d-widgets.terminaloptions.md#bg)
* [bindings](api-interfaces-blessed-d-widgets.terminaloptions.md#bindings)
* [bold](api-interfaces-blessed-d-widgets.terminaloptions.md#bold)
* [border](api-interfaces-blessed-d-widgets.terminaloptions.md#border)
* [bottom](api-interfaces-blessed-d-widgets.terminaloptions.md#bottom)
* [ch](api-interfaces-blessed-d-widgets.terminaloptions.md#ch)
* [children](api-interfaces-blessed-d-widgets.terminaloptions.md#children)
* [clickable](api-interfaces-blessed-d-widgets.terminaloptions.md#clickable)
* [content](api-interfaces-blessed-d-widgets.terminaloptions.md#content)
* [cursor](api-interfaces-blessed-d-widgets.terminaloptions.md#cursor)
* [draggable](api-interfaces-blessed-d-widgets.terminaloptions.md#draggable)
* [env](api-interfaces-blessed-d-widgets.terminaloptions.md#env)
* [fg](api-interfaces-blessed-d-widgets.terminaloptions.md#fg)
* [focusable](api-interfaces-blessed-d-widgets.terminaloptions.md#focusable)
* [focused](api-interfaces-blessed-d-widgets.terminaloptions.md#focused)
* [height](api-interfaces-blessed-d-widgets.terminaloptions.md#height)
* [hidden](api-interfaces-blessed-d-widgets.terminaloptions.md#hidden)
* [hoverText](api-interfaces-blessed-d-widgets.terminaloptions.md#hovertext)
* [input](api-interfaces-blessed-d-widgets.terminaloptions.md#input)
* [keyable](api-interfaces-blessed-d-widgets.terminaloptions.md#keyable)
* [keys](api-interfaces-blessed-d-widgets.terminaloptions.md#keys)
* [label](api-interfaces-blessed-d-widgets.terminaloptions.md#label)
* [left](api-interfaces-blessed-d-widgets.terminaloptions.md#left)
* [mouse](api-interfaces-blessed-d-widgets.terminaloptions.md#mouse)
* [name](api-interfaces-blessed-d-widgets.terminaloptions.md#name)
* [padding](api-interfaces-blessed-d-widgets.terminaloptions.md#padding)
* [parent](api-interfaces-blessed-d-widgets.terminaloptions.md#parent)
* [position](api-interfaces-blessed-d-widgets.terminaloptions.md#position)
* [ref](api-interfaces-blessed-d-widgets.terminaloptions.md#ref)
* [right](api-interfaces-blessed-d-widgets.terminaloptions.md#right)
* [screen](api-interfaces-blessed-d-widgets.terminaloptions.md#screen)
* [scrollable](api-interfaces-blessed-d-widgets.terminaloptions.md#scrollable)
* [scrollbar](api-interfaces-blessed-d-widgets.terminaloptions.md#scrollbar)
* [shadow](api-interfaces-blessed-d-widgets.terminaloptions.md#shadow)
* [shell](api-interfaces-blessed-d-widgets.terminaloptions.md#shell)
* [shrink](api-interfaces-blessed-d-widgets.terminaloptions.md#shrink)
* [style](api-interfaces-blessed-d-widgets.terminaloptions.md#style)
* [tags](api-interfaces-blessed-d-widgets.terminaloptions.md#tags)
* [terminal](api-interfaces-blessed-d-widgets.terminaloptions.md#terminal)
* [top](api-interfaces-blessed-d-widgets.terminaloptions.md#top)
* [underline](api-interfaces-blessed-d-widgets.terminaloptions.md#underline)
* [valign](api-interfaces-blessed-d-widgets.terminaloptions.md#valign)
* [vi](api-interfaces-blessed-d-widgets.terminaloptions.md#vi)
* [width](api-interfaces-blessed-d-widgets.terminaloptions.md#width)

### Methods

* [handler](api-interfaces-blessed-d-widgets.terminaloptions.md#handler)

---

## Properties

<a id="_data"></a>

### `<Optional>` _data

**● _data**: *`undefined` \| `object`*

*Inherited from [ElementOptions](api-interfaces-blessed-d-widgets.elementoptions.md).[_data](api-interfaces-blessed-d-widgets.elementoptions.md#_data)*

*Defined in [blessed.d.ts:2685](https://github.com/cancerberoSgx/accursed/blob/7a42e78/src/declarations/blessed.d.ts#L2685)*

Miscelanus options. Currently JavaScript/Blessed allows to pass anything as option, this is just a bucket for TypeScript and have impact

___
<a id="align"></a>

### `<Optional>` align

**● align**: *"left" \| "center" \| "right"*

*Inherited from [ElementOptions](api-interfaces-blessed-d-widgets.elementoptions.md).[align](api-interfaces-blessed-d-widgets.elementoptions.md#align)*

*Defined in [blessed.d.ts:2622](https://github.com/cancerberoSgx/accursed/blob/7a42e78/src/declarations/blessed.d.ts#L2622)*

Text alignment: left, center, or right.

___
<a id="alwaysscroll"></a>

### `<Optional>` alwaysScroll

**● alwaysScroll**: *`undefined` \| `false` \| `true`*

*Inherited from [ScrollableBoxOptions](api-interfaces-blessed-d-widgets.scrollableboxoptions.md).[alwaysScroll](api-interfaces-blessed-d-widgets.scrollableboxoptions.md#alwaysscroll)*

*Defined in [blessed.d.ts:3128](https://github.com/cancerberoSgx/accursed/blob/7a42e78/src/declarations/blessed.d.ts#L3128)*

A option which causes the ignoring of childOffset. This in turn causes the childBase to change every time the element is scrolled.

___
<a id="args"></a>

### `<Optional>` args

**● args**: *`any`*

*Defined in [blessed.d.ts:4241](https://github.com/cancerberoSgx/accursed/blob/7a42e78/src/declarations/blessed.d.ts#L4241)*

args for shell.

___
<a id="baselimit"></a>

### `<Optional>` baseLimit

**● baseLimit**: *`undefined` \| `number`*

*Inherited from [ScrollableBoxOptions](api-interfaces-blessed-d-widgets.scrollableboxoptions.md).[baseLimit](api-interfaces-blessed-d-widgets.scrollableboxoptions.md#baselimit)*

*Defined in [blessed.d.ts:3122](https://github.com/cancerberoSgx/accursed/blob/7a42e78/src/declarations/blessed.d.ts#L3122)*

A limit to the childBase. Default is Infinity.

___
<a id="bg"></a>

### `<Optional>` bg

**● bg**: *[Color](api-modules-blessed-d-widgets.md#color)*

*Inherited from [ElementOptions](api-interfaces-blessed-d-widgets.elementoptions.md).[bg](api-interfaces-blessed-d-widgets.elementoptions.md#bg)*

*Defined in [blessed.d.ts:2572](https://github.com/cancerberoSgx/accursed/blob/7a42e78/src/declarations/blessed.d.ts#L2572)*

___
<a id="bindings"></a>

### `<Optional>` bindings

**● bindings**: *`any`*

*Inherited from [BoxOptions](api-interfaces-blessed-d-widgets.boxoptions.md).[bindings](api-interfaces-blessed-d-widgets.boxoptions.md#bindings)*

*Defined in [blessed.d.ts:3156](https://github.com/cancerberoSgx/accursed/blob/7a42e78/src/declarations/blessed.d.ts#L3156)*

___
<a id="bold"></a>

### `<Optional>` bold

**● bold**: *`undefined` \| `false` \| `true`*

*Inherited from [ElementOptions](api-interfaces-blessed-d-widgets.elementoptions.md).[bold](api-interfaces-blessed-d-widgets.elementoptions.md#bold)*

*Defined in [blessed.d.ts:2573](https://github.com/cancerberoSgx/accursed/blob/7a42e78/src/declarations/blessed.d.ts#L2573)*

___
<a id="border"></a>

### `<Optional>` border

**● border**: *[TBorder](api-interfaces-blessed-d-widgets.types.tborder.md) \| [BorderType](api-modules-blessed-d-widgets.types.md#bordertype)*

*Inherited from [ElementOptions](api-interfaces-blessed-d-widgets.elementoptions.md).[border](api-interfaces-blessed-d-widgets.elementoptions.md#border)*

*Defined in [blessed.d.ts:2581](https://github.com/cancerberoSgx/accursed/blob/7a42e78/src/declarations/blessed.d.ts#L2581)*

Border object, see below.

___
<a id="bottom"></a>

### `<Optional>` bottom

**● bottom**: *[TPosition](api-modules-blessed-d-widgets.types.md#tposition)*

*Inherited from [ElementOptions](api-interfaces-blessed-d-widgets.elementoptions.md).[bottom](api-interfaces-blessed-d-widgets.elementoptions.md#bottom)*

*Defined in [blessed.d.ts:2643](https://github.com/cancerberoSgx/accursed/blob/7a42e78/src/declarations/blessed.d.ts#L2643)*

___
<a id="ch"></a>

### `<Optional>` ch

**● ch**: *`undefined` \| `string`*

*Inherited from [ElementOptions](api-interfaces-blessed-d-widgets.elementoptions.md).[ch](api-interfaces-blessed-d-widgets.elementoptions.md#ch)*

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

*Inherited from [ElementOptions](api-interfaces-blessed-d-widgets.elementoptions.md).[clickable](api-interfaces-blessed-d-widgets.elementoptions.md#clickable)*

*Defined in [blessed.d.ts:2591](https://github.com/cancerberoSgx/accursed/blob/7a42e78/src/declarations/blessed.d.ts#L2591)*

Element is clickable.

___
<a id="content"></a>

### `<Optional>` content

**● content**: *`undefined` \| `string`*

*Inherited from [ElementOptions](api-interfaces-blessed-d-widgets.elementoptions.md).[content](api-interfaces-blessed-d-widgets.elementoptions.md#content)*

*Defined in [blessed.d.ts:2586](https://github.com/cancerberoSgx/accursed/blob/7a42e78/src/declarations/blessed.d.ts#L2586)*

Element's text content.

___
<a id="cursor"></a>

### `<Optional>` cursor

**● cursor**: *"line" \| "underline" \| "block"*

*Defined in [blessed.d.ts:4246](https://github.com/cancerberoSgx/accursed/blob/7a42e78/src/declarations/blessed.d.ts#L4246)*

can be line, underline, and block.

___
<a id="draggable"></a>

### `<Optional>` draggable

**● draggable**: *`undefined` \| `false` \| `true`*

*Inherited from [ElementOptions](api-interfaces-blessed-d-widgets.elementoptions.md).[draggable](api-interfaces-blessed-d-widgets.elementoptions.md#draggable)*

*Defined in [blessed.d.ts:2676](https://github.com/cancerberoSgx/accursed/blob/7a42e78/src/declarations/blessed.d.ts#L2676)*

Allow the element to be dragged with the mouse.

___
<a id="env"></a>

### `<Optional>` env

**● env**: *`any`*

*Defined in [blessed.d.ts:4253](https://github.com/cancerberoSgx/accursed/blob/7a42e78/src/declarations/blessed.d.ts#L4253)*

Object for process env.

___
<a id="fg"></a>

### `<Optional>` fg

**● fg**: *[Color](api-modules-blessed-d-widgets.md#color)*

*Inherited from [ElementOptions](api-interfaces-blessed-d-widgets.elementoptions.md).[fg](api-interfaces-blessed-d-widgets.elementoptions.md#fg)*

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

*Inherited from [ElementOptions](api-interfaces-blessed-d-widgets.elementoptions.md).[focused](api-interfaces-blessed-d-widgets.elementoptions.md#focused)*

*Defined in [blessed.d.ts:2602](https://github.com/cancerberoSgx/accursed/blob/7a42e78/src/declarations/blessed.d.ts#L2602)*

Element is focused.

___
<a id="height"></a>

### `<Optional>` height

**● height**: *`number` \| `string`*

*Inherited from [ElementOptions](api-interfaces-blessed-d-widgets.elementoptions.md).[height](api-interfaces-blessed-d-widgets.elementoptions.md#height)*

*Defined in [blessed.d.ts:2656](https://github.com/cancerberoSgx/accursed/blob/7a42e78/src/declarations/blessed.d.ts#L2656)*

Offsets of the element relative to its parent. Can be a number, percentage (0-100%), or keyword (center). right and bottom do not accept keywords. Percentages can also have offsets (50%+1, 50%-1).

___
<a id="hidden"></a>

### `<Optional>` hidden

**● hidden**: *`undefined` \| `false` \| `true`*

*Inherited from [ElementOptions](api-interfaces-blessed-d-widgets.elementoptions.md).[hidden](api-interfaces-blessed-d-widgets.elementoptions.md#hidden)*

*Defined in [blessed.d.ts:2607](https://github.com/cancerberoSgx/accursed/blob/7a42e78/src/declarations/blessed.d.ts#L2607)*

Whether the element is hidden.

___
<a id="hovertext"></a>

### `<Optional>` hoverText

**● hoverText**: *`undefined` \| `string`*

*Inherited from [ElementOptions](api-interfaces-blessed-d-widgets.elementoptions.md).[hoverText](api-interfaces-blessed-d-widgets.elementoptions.md#hovertext)*

*Defined in [blessed.d.ts:2617](https://github.com/cancerberoSgx/accursed/blob/7a42e78/src/declarations/blessed.d.ts#L2617)*

A floating text label for the element which appears on mouseover.

___
<a id="input"></a>

### `<Optional>` input

**● input**: *`undefined` \| `false` \| `true`*

*Inherited from [ElementOptions](api-interfaces-blessed-d-widgets.elementoptions.md).[input](api-interfaces-blessed-d-widgets.elementoptions.md#input)*

*Defined in [blessed.d.ts:2596](https://github.com/cancerberoSgx/accursed/blob/7a42e78/src/declarations/blessed.d.ts#L2596)*

Element is focusable and can receive key input.

___
<a id="keyable"></a>

### `<Optional>` keyable

**● keyable**: *`undefined` \| `false` \| `true`*

*Inherited from [ElementOptions](api-interfaces-blessed-d-widgets.elementoptions.md).[keyable](api-interfaces-blessed-d-widgets.elementoptions.md#keyable)*

*Defined in [blessed.d.ts:2597](https://github.com/cancerberoSgx/accursed/blob/7a42e78/src/declarations/blessed.d.ts#L2597)*

___
<a id="keys"></a>

### `<Optional>` keys

**● keys**: *`string` \| `string`[] \| `boolean`*

*Inherited from [ScrollableTextOptions](api-interfaces-blessed-d-widgets.scrollabletextoptions.md).[keys](api-interfaces-blessed-d-widgets.scrollabletextoptions.md#keys)*

*Defined in [blessed.d.ts:3147](https://github.com/cancerberoSgx/accursed/blob/7a42e78/src/declarations/blessed.d.ts#L3147)*

Use pre-defined keys (i or enter for insert, e for editor, C-e for editor while inserting).

___
<a id="label"></a>

### `<Optional>` label

**● label**: *`undefined` \| `string`*

*Inherited from [ElementOptions](api-interfaces-blessed-d-widgets.elementoptions.md).[label](api-interfaces-blessed-d-widgets.elementoptions.md#label)*

*Defined in [blessed.d.ts:2612](https://github.com/cancerberoSgx/accursed/blob/7a42e78/src/declarations/blessed.d.ts#L2612)*

A simple text label for the element.

___
<a id="left"></a>

### `<Optional>` left

**● left**: *[TTopLeft](api-modules-blessed-d-widgets.types.md#ttopleft)*

*Inherited from [ElementOptions](api-interfaces-blessed-d-widgets.elementoptions.md).[left](api-interfaces-blessed-d-widgets.elementoptions.md#left)*

*Defined in [blessed.d.ts:2641](https://github.com/cancerberoSgx/accursed/blob/7a42e78/src/declarations/blessed.d.ts#L2641)*

___
<a id="mouse"></a>

### `<Optional>` mouse

**● mouse**: *`undefined` \| `false` \| `true`*

*Inherited from [ScrollableTextOptions](api-interfaces-blessed-d-widgets.scrollabletextoptions.md).[mouse](api-interfaces-blessed-d-widgets.scrollabletextoptions.md#mouse)*

*Defined in [blessed.d.ts:3142](https://github.com/cancerberoSgx/accursed/blob/7a42e78/src/declarations/blessed.d.ts#L3142)*

Whether to enable automatic mouse support for this element. Use pre-defined mouse events (right-click for editor).

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

*Inherited from [ElementOptions](api-interfaces-blessed-d-widgets.elementoptions.md).[padding](api-interfaces-blessed-d-widgets.elementoptions.md#padding)*

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

*Inherited from [ElementOptions](api-interfaces-blessed-d-widgets.elementoptions.md).[position](api-interfaces-blessed-d-widgets.elementoptions.md#position)*

*Defined in [blessed.d.ts:2661](https://github.com/cancerberoSgx/accursed/blob/7a42e78/src/declarations/blessed.d.ts#L2661)*

Can contain the above options.

___
<a id="ref"></a>

### `<Optional>` ref

**● ref**: *[RefObject](api-interfaces-blessed-d-widgets.refobject.md)*

*Inherited from [ElementOptions](api-interfaces-blessed-d-widgets.elementoptions.md).[ref](api-interfaces-blessed-d-widgets.elementoptions.md#ref)*

*Defined in [blessed.d.ts:2688](https://github.com/cancerberoSgx/accursed/blob/7a42e78/src/declarations/blessed.d.ts#L2688)*

`accursed` library custom support for React-like Refs. Declare the option here so it works out of the box. [https://reactjs.org/docs/refs-and-the-dom.html](https://reactjs.org/docs/refs-and-the-dom.html). TODO: documentation

___
<a id="right"></a>

### `<Optional>` right

**● right**: *[TPosition](api-modules-blessed-d-widgets.types.md#tposition)*

*Inherited from [ElementOptions](api-interfaces-blessed-d-widgets.elementoptions.md).[right](api-interfaces-blessed-d-widgets.elementoptions.md#right)*

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

*Inherited from [ElementOptions](api-interfaces-blessed-d-widgets.elementoptions.md).[scrollable](api-interfaces-blessed-d-widgets.elementoptions.md#scrollable)*

*Defined in [blessed.d.ts:2666](https://github.com/cancerberoSgx/accursed/blob/7a42e78/src/declarations/blessed.d.ts#L2666)*

Whether the element is scrollable or not.

___
<a id="scrollbar"></a>

### `<Optional>` scrollbar

**● scrollbar**: *`object` \| `boolean`*

*Inherited from [ScrollableBoxOptions](api-interfaces-blessed-d-widgets.scrollableboxoptions.md).[scrollbar](api-interfaces-blessed-d-widgets.scrollableboxoptions.md#scrollbar)*

*Defined in [blessed.d.ts:3134](https://github.com/cancerberoSgx/accursed/blob/7a42e78/src/declarations/blessed.d.ts#L3134)*

Object enabling a scrollbar. Style of the scrollbar track if present (takes regular style options).

___
<a id="shadow"></a>

### `<Optional>` shadow

**● shadow**: *`undefined` \| `false` \| `true`*

*Inherited from [ElementOptions](api-interfaces-blessed-d-widgets.elementoptions.md).[shadow](api-interfaces-blessed-d-widgets.elementoptions.md#shadow)*

*Defined in [blessed.d.ts:2681](https://github.com/cancerberoSgx/accursed/blob/7a42e78/src/declarations/blessed.d.ts#L2681)*

Draw a translucent offset shadow behind the element.

___
<a id="shell"></a>

### `<Optional>` shell

**● shell**: *`undefined` \| `string`*

*Defined in [blessed.d.ts:4236](https://github.com/cancerberoSgx/accursed/blob/7a42e78/src/declarations/blessed.d.ts#L4236)*

name of shell. $SHELL by default.

___
<a id="shrink"></a>

### `<Optional>` shrink

**● shrink**: *`undefined` \| `false` \| `true`*

*Inherited from [ElementOptions](api-interfaces-blessed-d-widgets.elementoptions.md).[shrink](api-interfaces-blessed-d-widgets.elementoptions.md#shrink)*

*Defined in [blessed.d.ts:2632](https://github.com/cancerberoSgx/accursed/blob/7a42e78/src/declarations/blessed.d.ts#L2632)*

Shrink/flex/grow to content and child elements. Width/height during render.

___
<a id="style"></a>

### `<Optional>` style

**● style**: *[TStyle](api-interfaces-blessed-d-widgets.types.tstyle.md)*

*Inherited from [ElementOptions](api-interfaces-blessed-d-widgets.elementoptions.md).[style](api-interfaces-blessed-d-widgets.elementoptions.md#style)*

*Defined in [blessed.d.ts:2576](https://github.com/cancerberoSgx/accursed/blob/7a42e78/src/declarations/blessed.d.ts#L2576)*

___
<a id="tags"></a>

### `<Optional>` tags

**● tags**: *`undefined` \| `false` \| `true`*

*Inherited from [ElementOptions](api-interfaces-blessed-d-widgets.elementoptions.md).[tags](api-interfaces-blessed-d-widgets.elementoptions.md#tags)*

*Defined in [blessed.d.ts:2569](https://github.com/cancerberoSgx/accursed/blob/7a42e78/src/declarations/blessed.d.ts#L2569)*

___
<a id="terminal"></a>

### `<Optional>` terminal

**● terminal**: *`undefined` \| `string`*

*Defined in [blessed.d.ts:4248](https://github.com/cancerberoSgx/accursed/blob/7a42e78/src/declarations/blessed.d.ts#L4248)*

___
<a id="top"></a>

### `<Optional>` top

**● top**: *[TTopLeft](api-modules-blessed-d-widgets.types.md#ttopleft)*

*Inherited from [ElementOptions](api-interfaces-blessed-d-widgets.elementoptions.md).[top](api-interfaces-blessed-d-widgets.elementoptions.md#top)*

*Defined in [blessed.d.ts:2640](https://github.com/cancerberoSgx/accursed/blob/7a42e78/src/declarations/blessed.d.ts#L2640)*

___
<a id="underline"></a>

### `<Optional>` underline

**● underline**: *`undefined` \| `false` \| `true`*

*Inherited from [ElementOptions](api-interfaces-blessed-d-widgets.elementoptions.md).[underline](api-interfaces-blessed-d-widgets.elementoptions.md#underline)*

*Defined in [blessed.d.ts:2574](https://github.com/cancerberoSgx/accursed/blob/7a42e78/src/declarations/blessed.d.ts#L2574)*

___
<a id="valign"></a>

### `<Optional>` valign

**● valign**: *"top" \| "middle" \| "bottom"*

*Inherited from [ElementOptions](api-interfaces-blessed-d-widgets.elementoptions.md).[valign](api-interfaces-blessed-d-widgets.elementoptions.md#valign)*

*Defined in [blessed.d.ts:2627](https://github.com/cancerberoSgx/accursed/blob/7a42e78/src/declarations/blessed.d.ts#L2627)*

Vertical text alignment: top, middle, or bottom.

___
<a id="vi"></a>

### `<Optional>` vi

**● vi**: *`undefined` \| `false` \| `true`*

*Inherited from [ScrollableTextOptions](api-interfaces-blessed-d-widgets.scrollabletextoptions.md).[vi](api-interfaces-blessed-d-widgets.scrollabletextoptions.md#vi)*

*Defined in [blessed.d.ts:3152](https://github.com/cancerberoSgx/accursed/blob/7a42e78/src/declarations/blessed.d.ts#L3152)*

Use vi keys with the keys option.

___
<a id="width"></a>

### `<Optional>` width

**● width**: *`number` \| `string`*

*Inherited from [ElementOptions](api-interfaces-blessed-d-widgets.elementoptions.md).[width](api-interfaces-blessed-d-widgets.elementoptions.md#width)*

*Defined in [blessed.d.ts:2649](https://github.com/cancerberoSgx/accursed/blob/7a42e78/src/declarations/blessed.d.ts#L2649)*

Width/height of the element, can be a number, percentage (0-100%), or keyword (half or shrink). Percentages can also have offsets (50%+1, 50%-1).

___

## Methods

<a id="handler"></a>

### `<Optional>` handler

▸ **handler**(userInput: *`Buffer`*): `void`

*Defined in [blessed.d.ts:4231](https://github.com/cancerberoSgx/accursed/blob/7a42e78/src/declarations/blessed.d.ts#L4231)*

handler for input data.

**Parameters:**

| Name | Type |
| ------ | ------ |
| userInput | `Buffer` |

**Returns:** `void`

___
