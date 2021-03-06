[accursed](../README.md) › [Globals](../globals.md) › ["declarations/blessed.d"](../modules/_declarations_blessed_d_.md) › [Widgets](../modules/_declarations_blessed_d_.widgets.md) › [ANSIImageOptions](_declarations_blessed_d_.widgets.ansiimageoptions.md)

# Interface: ANSIImageOptions

## Hierarchy

  ↳ [BoxOptions](_declarations_blessed_d_.widgets.boxoptions.md)

  ↳ **ANSIImageOptions**

## Index

### Properties

* [_data](_declarations_blessed_d_.widgets.ansiimageoptions.md#optional-_data)
* [align](_declarations_blessed_d_.widgets.ansiimageoptions.md#optional-align)
* [alwaysScroll](_declarations_blessed_d_.widgets.ansiimageoptions.md#optional-alwaysscroll)
* [animate](_declarations_blessed_d_.widgets.ansiimageoptions.md#animate)
* [ascii](_declarations_blessed_d_.widgets.ansiimageoptions.md#ascii)
* [autoFocus](_declarations_blessed_d_.widgets.ansiimageoptions.md#optional-autofocus)
* [baseLimit](_declarations_blessed_d_.widgets.ansiimageoptions.md#optional-baselimit)
* [bg](_declarations_blessed_d_.widgets.ansiimageoptions.md#optional-bg)
* [bindings](_declarations_blessed_d_.widgets.ansiimageoptions.md#optional-bindings)
* [blink](_declarations_blessed_d_.widgets.ansiimageoptions.md#optional-blink)
* [bold](_declarations_blessed_d_.widgets.ansiimageoptions.md#optional-bold)
* [border](_declarations_blessed_d_.widgets.ansiimageoptions.md#optional-border)
* [bottom](_declarations_blessed_d_.widgets.ansiimageoptions.md#optional-bottom)
* [ch](_declarations_blessed_d_.widgets.ansiimageoptions.md#optional-ch)
* [children](_declarations_blessed_d_.widgets.ansiimageoptions.md#optional-children)
* [clickable](_declarations_blessed_d_.widgets.ansiimageoptions.md#optional-clickable)
* [content](_declarations_blessed_d_.widgets.ansiimageoptions.md#optional-content)
* [dockBorders](_declarations_blessed_d_.widgets.ansiimageoptions.md#optional-dockborders)
* [draggable](_declarations_blessed_d_.widgets.ansiimageoptions.md#optional-draggable)
* [effects](_declarations_blessed_d_.widgets.ansiimageoptions.md#optional-effects)
* [fg](_declarations_blessed_d_.widgets.ansiimageoptions.md#optional-fg)
* [file](_declarations_blessed_d_.widgets.ansiimageoptions.md#file)
* [fixed](_declarations_blessed_d_.widgets.ansiimageoptions.md#optional-fixed)
* [focusEffects](_declarations_blessed_d_.widgets.ansiimageoptions.md#optional-focuseffects)
* [focusable](_declarations_blessed_d_.widgets.ansiimageoptions.md#optional-focusable)
* [focused](_declarations_blessed_d_.widgets.ansiimageoptions.md#optional-focused)
* [height](_declarations_blessed_d_.widgets.ansiimageoptions.md#height)
* [hidden](_declarations_blessed_d_.widgets.ansiimageoptions.md#optional-hidden)
* [hoverBg](_declarations_blessed_d_.widgets.ansiimageoptions.md#optional-hoverbg)
* [hoverEffects](_declarations_blessed_d_.widgets.ansiimageoptions.md#optional-hovereffects)
* [hoverText](_declarations_blessed_d_.widgets.ansiimageoptions.md#optional-hovertext)
* [input](_declarations_blessed_d_.widgets.ansiimageoptions.md#optional-input)
* [inverse](_declarations_blessed_d_.widgets.ansiimageoptions.md#optional-inverse)
* [invisible](_declarations_blessed_d_.widgets.ansiimageoptions.md#optional-invisible)
* [keyable](_declarations_blessed_d_.widgets.ansiimageoptions.md#optional-keyable)
* [keys](_declarations_blessed_d_.widgets.ansiimageoptions.md#optional-keys)
* [label](_declarations_blessed_d_.widgets.ansiimageoptions.md#optional-label)
* [left](_declarations_blessed_d_.widgets.ansiimageoptions.md#optional-left)
* [mouse](_declarations_blessed_d_.widgets.ansiimageoptions.md#optional-mouse)
* [name](_declarations_blessed_d_.widgets.ansiimageoptions.md#optional-name)
* [noOverflow](_declarations_blessed_d_.widgets.ansiimageoptions.md#optional-nooverflow)
* [optimization](_declarations_blessed_d_.widgets.ansiimageoptions.md#optimization)
* [padding](_declarations_blessed_d_.widgets.ansiimageoptions.md#optional-padding)
* [parent](_declarations_blessed_d_.widgets.ansiimageoptions.md#optional-parent)
* [position](_declarations_blessed_d_.widgets.ansiimageoptions.md#optional-position)
* [ref](_declarations_blessed_d_.widgets.ansiimageoptions.md#optional-ref)
* [right](_declarations_blessed_d_.widgets.ansiimageoptions.md#optional-right)
* [scale](_declarations_blessed_d_.widgets.ansiimageoptions.md#scale)
* [screen](_declarations_blessed_d_.widgets.ansiimageoptions.md#optional-screen)
* [scrollable](_declarations_blessed_d_.widgets.ansiimageoptions.md#optional-scrollable)
* [scrollbar](_declarations_blessed_d_.widgets.ansiimageoptions.md#optional-scrollbar)
* [shadow](_declarations_blessed_d_.widgets.ansiimageoptions.md#optional-shadow)
* [shrink](_declarations_blessed_d_.widgets.ansiimageoptions.md#optional-shrink)
* [speed](_declarations_blessed_d_.widgets.ansiimageoptions.md#speed)
* [style](_declarations_blessed_d_.widgets.ansiimageoptions.md#optional-style)
* [tags](_declarations_blessed_d_.widgets.ansiimageoptions.md#optional-tags)
* [top](_declarations_blessed_d_.widgets.ansiimageoptions.md#optional-top)
* [transparent](_declarations_blessed_d_.widgets.ansiimageoptions.md#optional-transparent)
* [underline](_declarations_blessed_d_.widgets.ansiimageoptions.md#optional-underline)
* [valign](_declarations_blessed_d_.widgets.ansiimageoptions.md#optional-valign)
* [vi](_declarations_blessed_d_.widgets.ansiimageoptions.md#optional-vi)
* [width](_declarations_blessed_d_.widgets.ansiimageoptions.md#width)
* [wrap](_declarations_blessed_d_.widgets.ansiimageoptions.md#optional-wrap)

## Properties

### `Optional` _data

• **_data**? : *object*

*Inherited from [ElementOptions](_declarations_blessed_d_.widgets.elementoptions.md).[_data](_declarations_blessed_d_.widgets.elementoptions.md#optional-_data)*

*Defined in [declarations/blessed.d.ts:1426](https://github.com/cancerberoSgx/accursed/blob/5b2518e/src/declarations/blessed.d.ts#L1426)*

Miscelanus options. Currently JavaScript/Blessed allows to pass anything as option,
this is just a bucket for TypeScript and have impact

#### Type declaration:

* \[ **name**: *string*\]: any

___

### `Optional` align

• **align**? : *"left" | "center" | "right"*

*Inherited from [ElementOptions](_declarations_blessed_d_.widgets.elementoptions.md).[align](_declarations_blessed_d_.widgets.elementoptions.md#optional-align)*

*Defined in [declarations/blessed.d.ts:1363](https://github.com/cancerberoSgx/accursed/blob/5b2518e/src/declarations/blessed.d.ts#L1363)*

Text alignment: left, center, or right.

___

### `Optional` alwaysScroll

• **alwaysScroll**? : *boolean*

*Inherited from [ScrollableBoxOptions](_declarations_blessed_d_.widgets.scrollableboxoptions.md).[alwaysScroll](_declarations_blessed_d_.widgets.scrollableboxoptions.md#optional-alwaysscroll)*

*Defined in [declarations/blessed.d.ts:1996](https://github.com/cancerberoSgx/accursed/blob/5b2518e/src/declarations/blessed.d.ts#L1996)*

A option which causes the ignoring of childOffset. This in turn causes the
childBase to change every time the element is scrolled.

___

###  animate

• **animate**: *boolean*

*Defined in [declarations/blessed.d.ts:3329](https://github.com/cancerberoSgx/accursed/blob/5b2518e/src/declarations/blessed.d.ts#L3329)*

Whether to animate if the image is an APNG/animating GIF. If false, only
display the first frame or IDAT (Default: true).

___

###  ascii

• **ascii**: *string*

*Defined in [declarations/blessed.d.ts:3323](https://github.com/cancerberoSgx/accursed/blob/5b2518e/src/declarations/blessed.d.ts#L3323)*

Add various "density" ASCII characters over the rendering to give the
image more detail, similar to libcaca/libcucul (the library mplayer uses
to display videos in the terminal).

___

### `Optional` autoFocus

• **autoFocus**? : *boolean*

*Inherited from [ElementOptions](_declarations_blessed_d_.widgets.elementoptions.md).[autoFocus](_declarations_blessed_d_.widgets.elementoptions.md#optional-autofocus)*

*Defined in [declarations/blessed.d.ts:1273](https://github.com/cancerberoSgx/accursed/blob/5b2518e/src/declarations/blessed.d.ts#L1273)*

___

### `Optional` baseLimit

• **baseLimit**? : *number*

*Inherited from [ScrollableBoxOptions](_declarations_blessed_d_.widgets.scrollableboxoptions.md).[baseLimit](_declarations_blessed_d_.widgets.scrollableboxoptions.md#optional-baselimit)*

*Defined in [declarations/blessed.d.ts:1990](https://github.com/cancerberoSgx/accursed/blob/5b2518e/src/declarations/blessed.d.ts#L1990)*

A limit to the childBase. Default is Infinity.

___

### `Optional` bg

• **bg**? : *[Color](../modules/_declarations_blessed_d_.widgets.md#color)*

*Inherited from [ElementOptions](_declarations_blessed_d_.widgets.elementoptions.md).[bg](_declarations_blessed_d_.widgets.elementoptions.md#optional-bg)*

*Defined in [declarations/blessed.d.ts:1265](https://github.com/cancerberoSgx/accursed/blob/5b2518e/src/declarations/blessed.d.ts#L1265)*

___

### `Optional` bindings

• **bindings**? : *any*

*Inherited from [BoxOptions](_declarations_blessed_d_.widgets.boxoptions.md).[bindings](_declarations_blessed_d_.widgets.boxoptions.md#optional-bindings)*

*Defined in [declarations/blessed.d.ts:2032](https://github.com/cancerberoSgx/accursed/blob/5b2518e/src/declarations/blessed.d.ts#L2032)*

___

### `Optional` blink

• **blink**? : *boolean*

*Inherited from [ElementOptions](_declarations_blessed_d_.widgets.elementoptions.md).[blink](_declarations_blessed_d_.widgets.elementoptions.md#optional-blink)*

*Defined in [declarations/blessed.d.ts:1268](https://github.com/cancerberoSgx/accursed/blob/5b2518e/src/declarations/blessed.d.ts#L1268)*

___

### `Optional` bold

• **bold**? : *boolean*

*Inherited from [ElementOptions](_declarations_blessed_d_.widgets.elementoptions.md).[bold](_declarations_blessed_d_.widgets.elementoptions.md#optional-bold)*

*Defined in [declarations/blessed.d.ts:1266](https://github.com/cancerberoSgx/accursed/blob/5b2518e/src/declarations/blessed.d.ts#L1266)*

___

### `Optional` border

• **border**? : *[TBorder](_declarations_blessed_d_.widgets.types.tborder.md) | [BorderType](../modules/_declarations_blessed_d_.widgets.types.md#bordertype)*

*Inherited from [ElementOptions](_declarations_blessed_d_.widgets.elementoptions.md).[border](_declarations_blessed_d_.widgets.elementoptions.md#optional-border)*

*Defined in [declarations/blessed.d.ts:1280](https://github.com/cancerberoSgx/accursed/blob/5b2518e/src/declarations/blessed.d.ts#L1280)*

Border object, see below.

___

### `Optional` bottom

• **bottom**? : *[TPosition](../modules/_declarations_blessed_d_.widgets.types.md#tposition)*

*Inherited from [ElementOptions](_declarations_blessed_d_.widgets.elementoptions.md).[bottom](_declarations_blessed_d_.widgets.elementoptions.md#optional-bottom)*

*Defined in [declarations/blessed.d.ts:1384](https://github.com/cancerberoSgx/accursed/blob/5b2518e/src/declarations/blessed.d.ts#L1384)*

___

### `Optional` ch

• **ch**? : *string*

*Inherited from [ElementOptions](_declarations_blessed_d_.widgets.elementoptions.md).[ch](_declarations_blessed_d_.widgets.elementoptions.md#optional-ch)*

*Defined in [declarations/blessed.d.ts:1412](https://github.com/cancerberoSgx/accursed/blob/5b2518e/src/declarations/blessed.d.ts#L1412)*

Background character (default is whitespace ).

___

### `Optional` children

• **children**? : *[Node](../classes/_declarations_blessed_d_.widgets.node.md)[]*

*Inherited from [INodeOptions](_declarations_blessed_d_.widgets.inodeoptions.md).[children](_declarations_blessed_d_.widgets.inodeoptions.md#optional-children)*

*Defined in [declarations/blessed.d.ts:236](https://github.com/cancerberoSgx/accursed/blob/5b2518e/src/declarations/blessed.d.ts#L236)*

___

### `Optional` clickable

• **clickable**? : *boolean*

*Inherited from [ElementOptions](_declarations_blessed_d_.widgets.elementoptions.md).[clickable](_declarations_blessed_d_.widgets.elementoptions.md#optional-clickable)*

*Defined in [declarations/blessed.d.ts:1290](https://github.com/cancerberoSgx/accursed/blob/5b2518e/src/declarations/blessed.d.ts#L1290)*

Element is clickable.

___

### `Optional` content

• **content**? : *string*

*Inherited from [ElementOptions](_declarations_blessed_d_.widgets.elementoptions.md).[content](_declarations_blessed_d_.widgets.elementoptions.md#optional-content)*

*Defined in [declarations/blessed.d.ts:1285](https://github.com/cancerberoSgx/accursed/blob/5b2518e/src/declarations/blessed.d.ts#L1285)*

Element's text content.

___

### `Optional` dockBorders

• **dockBorders**? : *boolean*

*Inherited from [ElementOptions](_declarations_blessed_d_.widgets.elementoptions.md).[dockBorders](_declarations_blessed_d_.widgets.elementoptions.md#optional-dockborders)*

*Defined in [declarations/blessed.d.ts:1306](https://github.com/cancerberoSgx/accursed/blob/5b2518e/src/declarations/blessed.d.ts#L1306)*

Automatically "dock" borders with other elements instead of overlapping, depending on position
(experimental).

___

### `Optional` draggable

• **draggable**? : *boolean*

*Inherited from [ElementOptions](_declarations_blessed_d_.widgets.elementoptions.md).[draggable](_declarations_blessed_d_.widgets.elementoptions.md#optional-draggable)*

*Defined in [declarations/blessed.d.ts:1417](https://github.com/cancerberoSgx/accursed/blob/5b2518e/src/declarations/blessed.d.ts#L1417)*

Allow the element to be dragged with the mouse.

___

### `Optional` effects

• **effects**? : *object*

*Inherited from [ElementOptions](_declarations_blessed_d_.widgets.elementoptions.md).[effects](_declarations_blessed_d_.widgets.elementoptions.md#optional-effects)*

*Defined in [declarations/blessed.d.ts:1356](https://github.com/cancerberoSgx/accursed/blob/5b2518e/src/declarations/blessed.d.ts#L1356)*

Same as style.focus and style.hover

#### Type declaration:

* **focus**? : *[TStyle](_declarations_blessed_d_.widgets.types.tstyle.md)*

* **hover**? : *[TStyle](_declarations_blessed_d_.widgets.types.tstyle.md)*

___

### `Optional` fg

• **fg**? : *[Color](../modules/_declarations_blessed_d_.widgets.md#color)*

*Inherited from [ElementOptions](_declarations_blessed_d_.widgets.elementoptions.md).[fg](_declarations_blessed_d_.widgets.elementoptions.md#optional-fg)*

*Defined in [declarations/blessed.d.ts:1264](https://github.com/cancerberoSgx/accursed/blob/5b2518e/src/declarations/blessed.d.ts#L1264)*

___

###  file

• **file**: *string*

*Defined in [declarations/blessed.d.ts:3301](https://github.com/cancerberoSgx/accursed/blob/5b2518e/src/declarations/blessed.d.ts#L3301)*

URL or path to PNG/GIF file. Can also be a buffer.

___

### `Optional` fixed

• **fixed**? : *boolean*

*Inherited from [ElementOptions](_declarations_blessed_d_.widgets.elementoptions.md).[fixed](_declarations_blessed_d_.widgets.elementoptions.md#optional-fixed)*

*Defined in [declarations/blessed.d.ts:1313](https://github.com/cancerberoSgx/accursed/blob/5b2518e/src/declarations/blessed.d.ts#L1313)*

___

### `Optional` focusEffects

• **focusEffects**? : *[TStyle](_declarations_blessed_d_.widgets.types.tstyle.md)*

*Inherited from [ElementOptions](_declarations_blessed_d_.widgets.elementoptions.md).[focusEffects](_declarations_blessed_d_.widgets.elementoptions.md#optional-focuseffects)*

*Defined in [declarations/blessed.d.ts:1352](https://github.com/cancerberoSgx/accursed/blob/5b2518e/src/declarations/blessed.d.ts#L1352)*

Same as style.focus

___

### `Optional` focusable

• **focusable**? : *boolean*

*Inherited from [INodeOptions](_declarations_blessed_d_.widgets.inodeoptions.md).[focusable](_declarations_blessed_d_.widgets.inodeoptions.md#optional-focusable)*

*Defined in [declarations/blessed.d.ts:240](https://github.com/cancerberoSgx/accursed/blob/5b2518e/src/declarations/blessed.d.ts#L240)*

If true, the node will obtain focus when m

___

### `Optional` focused

• **focused**? : *boolean*

*Inherited from [ElementOptions](_declarations_blessed_d_.widgets.elementoptions.md).[focused](_declarations_blessed_d_.widgets.elementoptions.md#optional-focused)*

*Defined in [declarations/blessed.d.ts:1323](https://github.com/cancerberoSgx/accursed/blob/5b2518e/src/declarations/blessed.d.ts#L1323)*

Element is focused.

___

###  height

• **height**: *number | string*

*Overrides [ElementOptions](_declarations_blessed_d_.widgets.elementoptions.md).[height](_declarations_blessed_d_.widgets.elementoptions.md#optional-height)*

*Defined in [declarations/blessed.d.ts:3316](https://github.com/cancerberoSgx/accursed/blob/5b2518e/src/declarations/blessed.d.ts#L3316)*

___

### `Optional` hidden

• **hidden**? : *boolean*

*Inherited from [ElementOptions](_declarations_blessed_d_.widgets.elementoptions.md).[hidden](_declarations_blessed_d_.widgets.elementoptions.md#optional-hidden)*

*Defined in [declarations/blessed.d.ts:1328](https://github.com/cancerberoSgx/accursed/blob/5b2518e/src/declarations/blessed.d.ts#L1328)*

Whether the element is hidden.

___

### `Optional` hoverBg

• **hoverBg**? : *[Color](../modules/_declarations_blessed_d_.widgets.md#color)*

*Inherited from [ElementOptions](_declarations_blessed_d_.widgets.elementoptions.md).[hoverBg](_declarations_blessed_d_.widgets.elementoptions.md#optional-hoverbg)*

*Defined in [declarations/blessed.d.ts:1343](https://github.com/cancerberoSgx/accursed/blob/5b2518e/src/declarations/blessed.d.ts#L1343)*

Same as style.hover.bg

___

### `Optional` hoverEffects

• **hoverEffects**? : *[TStyle](_declarations_blessed_d_.widgets.types.tstyle.md)*

*Inherited from [ElementOptions](_declarations_blessed_d_.widgets.elementoptions.md).[hoverEffects](_declarations_blessed_d_.widgets.elementoptions.md#optional-hovereffects)*

*Defined in [declarations/blessed.d.ts:1348](https://github.com/cancerberoSgx/accursed/blob/5b2518e/src/declarations/blessed.d.ts#L1348)*

Same as style.hover

___

### `Optional` hoverText

• **hoverText**? : *string*

*Inherited from [ElementOptions](_declarations_blessed_d_.widgets.elementoptions.md).[hoverText](_declarations_blessed_d_.widgets.elementoptions.md#optional-hovertext)*

*Defined in [declarations/blessed.d.ts:1338](https://github.com/cancerberoSgx/accursed/blob/5b2518e/src/declarations/blessed.d.ts#L1338)*

A floating text label for the element which appears on mouseover.

___

### `Optional` input

• **input**? : *boolean*

*Inherited from [ElementOptions](_declarations_blessed_d_.widgets.elementoptions.md).[input](_declarations_blessed_d_.widgets.elementoptions.md#optional-input)*

*Defined in [declarations/blessed.d.ts:1295](https://github.com/cancerberoSgx/accursed/blob/5b2518e/src/declarations/blessed.d.ts#L1295)*

Element is focusable and can receive key input.

___

### `Optional` inverse

• **inverse**? : *boolean*

*Inherited from [ElementOptions](_declarations_blessed_d_.widgets.elementoptions.md).[inverse](_declarations_blessed_d_.widgets.elementoptions.md#optional-inverse)*

*Defined in [declarations/blessed.d.ts:1269](https://github.com/cancerberoSgx/accursed/blob/5b2518e/src/declarations/blessed.d.ts#L1269)*

___

### `Optional` invisible

• **invisible**? : *boolean*

*Inherited from [ElementOptions](_declarations_blessed_d_.widgets.elementoptions.md).[invisible](_declarations_blessed_d_.widgets.elementoptions.md#optional-invisible)*

*Defined in [declarations/blessed.d.ts:1270](https://github.com/cancerberoSgx/accursed/blob/5b2518e/src/declarations/blessed.d.ts#L1270)*

___

### `Optional` keyable

• **keyable**? : *boolean*

*Inherited from [ElementOptions](_declarations_blessed_d_.widgets.elementoptions.md).[keyable](_declarations_blessed_d_.widgets.elementoptions.md#optional-keyable)*

*Defined in [declarations/blessed.d.ts:1300](https://github.com/cancerberoSgx/accursed/blob/5b2518e/src/declarations/blessed.d.ts#L1300)*

Keys enabled for this element.

___

### `Optional` keys

• **keys**? : *string | string[] | boolean*

*Inherited from [ScrollableTextOptions](_declarations_blessed_d_.widgets.scrollabletextoptions.md).[keys](_declarations_blessed_d_.widgets.scrollabletextoptions.md#optional-keys)*

*Defined in [declarations/blessed.d.ts:2023](https://github.com/cancerberoSgx/accursed/blob/5b2518e/src/declarations/blessed.d.ts#L2023)*

Use pre-defined keys (i or enter for insert, e for editor, C-e for editor while inserting).

___

### `Optional` label

• **label**? : *string | [LabelOptions](_declarations_blessed_d_.widgets.labeloptions.md)*

*Inherited from [ElementOptions](_declarations_blessed_d_.widgets.elementoptions.md).[label](_declarations_blessed_d_.widgets.elementoptions.md#optional-label)*

*Defined in [declarations/blessed.d.ts:1333](https://github.com/cancerberoSgx/accursed/blob/5b2518e/src/declarations/blessed.d.ts#L1333)*

A simple text label for the element.

___

### `Optional` left

• **left**? : *[TTopLeft](../modules/_declarations_blessed_d_.widgets.types.md#ttopleft)*

*Inherited from [ElementOptions](_declarations_blessed_d_.widgets.elementoptions.md).[left](_declarations_blessed_d_.widgets.elementoptions.md#optional-left)*

*Defined in [declarations/blessed.d.ts:1382](https://github.com/cancerberoSgx/accursed/blob/5b2518e/src/declarations/blessed.d.ts#L1382)*

___

### `Optional` mouse

• **mouse**? : *boolean*

*Inherited from [ScrollableTextOptions](_declarations_blessed_d_.widgets.scrollabletextoptions.md).[mouse](_declarations_blessed_d_.widgets.scrollabletextoptions.md#optional-mouse)*

*Defined in [declarations/blessed.d.ts:2018](https://github.com/cancerberoSgx/accursed/blob/5b2518e/src/declarations/blessed.d.ts#L2018)*

Whether to enable automatic mouse support for this element.
Use pre-defined mouse events (right-click for editor).

___

### `Optional` name

• **name**? : *string*

*Inherited from [INodeOptions](_declarations_blessed_d_.widgets.inodeoptions.md).[name](_declarations_blessed_d_.widgets.inodeoptions.md#optional-name)*

*Defined in [declarations/blessed.d.ts:233](https://github.com/cancerberoSgx/accursed/blob/5b2518e/src/declarations/blessed.d.ts#L233)*

___

### `Optional` noOverflow

• **noOverflow**? : *boolean*

*Inherited from [ElementOptions](_declarations_blessed_d_.widgets.elementoptions.md).[noOverflow](_declarations_blessed_d_.widgets.elementoptions.md#optional-nooverflow)*

*Defined in [declarations/blessed.d.ts:1311](https://github.com/cancerberoSgx/accursed/blob/5b2518e/src/declarations/blessed.d.ts#L1311)*

Hide content or children outside this element's viewport.

___

###  optimization

• **optimization**: *"mem" | "cpu"*

*Defined in [declarations/blessed.d.ts:3343](https://github.com/cancerberoSgx/accursed/blob/5b2518e/src/declarations/blessed.d.ts#L3343)*

mem or cpu. If optimizing for memory, animation frames will be rendered to
bitmaps as the animation plays, using less memory. Optimizing for cpu will
precompile all bitmaps beforehand, which may be faster, but might also OOM
the process on large images. (Default: mem).

___

### `Optional` padding

• **padding**? : *number | [Padding](_declarations_blessed_d_.widgets.padding.md)*

*Inherited from [ElementOptions](_declarations_blessed_d_.widgets.elementoptions.md).[padding](_declarations_blessed_d_.widgets.elementoptions.md#optional-padding)*

*Defined in [declarations/blessed.d.ts:1379](https://github.com/cancerberoSgx/accursed/blob/5b2518e/src/declarations/blessed.d.ts#L1379)*

Amount of padding on the inside of the element. Can be a number or an object containing
the properties: left, right, top, and bottom.

___

### `Optional` parent

• **parent**? : *[Node](../classes/_declarations_blessed_d_.widgets.node.md)*

*Inherited from [INodeOptions](_declarations_blessed_d_.widgets.inodeoptions.md).[parent](_declarations_blessed_d_.widgets.inodeoptions.md#optional-parent)*

*Defined in [declarations/blessed.d.ts:235](https://github.com/cancerberoSgx/accursed/blob/5b2518e/src/declarations/blessed.d.ts#L235)*

___

### `Optional` position

• **position**? : *[Position](_declarations_blessed_d_.widgets.position.md)*

*Inherited from [ElementOptions](_declarations_blessed_d_.widgets.elementoptions.md).[position](_declarations_blessed_d_.widgets.elementoptions.md#optional-position)*

*Defined in [declarations/blessed.d.ts:1402](https://github.com/cancerberoSgx/accursed/blob/5b2518e/src/declarations/blessed.d.ts#L1402)*

Can contain the above options.

___

### `Optional` ref

• **ref**? : *[RefObject](_jsx_types_.refobject.md)*

*Inherited from [ElementOptions](_declarations_blessed_d_.widgets.elementoptions.md).[ref](_declarations_blessed_d_.widgets.elementoptions.md#optional-ref)*

*Defined in [declarations/blessed.d.ts:1429](https://github.com/cancerberoSgx/accursed/blob/5b2518e/src/declarations/blessed.d.ts#L1429)*

`accursed` library custom support for React-like Refs. Declare the option here so it works out of the box. https://reactjs.org/docs/refs-and-the-dom.html. TODO: documentation

___

### `Optional` right

• **right**? : *[TPosition](../modules/_declarations_blessed_d_.widgets.types.md#tposition)*

*Inherited from [ElementOptions](_declarations_blessed_d_.widgets.elementoptions.md).[right](_declarations_blessed_d_.widgets.elementoptions.md#optional-right)*

*Defined in [declarations/blessed.d.ts:1383](https://github.com/cancerberoSgx/accursed/blob/5b2518e/src/declarations/blessed.d.ts#L1383)*

___

###  scale

• **scale**: *number*

*Defined in [declarations/blessed.d.ts:3306](https://github.com/cancerberoSgx/accursed/blob/5b2518e/src/declarations/blessed.d.ts#L3306)*

Scale cellmap down (0-1.0) from its original pixel width/height (Default: 1.0).

___

### `Optional` screen

• **screen**? : *[Screen](../classes/_declarations_blessed_d_.widgets.screen.md)*

*Inherited from [INodeOptions](_declarations_blessed_d_.widgets.inodeoptions.md).[screen](_declarations_blessed_d_.widgets.inodeoptions.md#optional-screen)*

*Defined in [declarations/blessed.d.ts:234](https://github.com/cancerberoSgx/accursed/blob/5b2518e/src/declarations/blessed.d.ts#L234)*

___

### `Optional` scrollable

• **scrollable**? : *boolean*

*Inherited from [ElementOptions](_declarations_blessed_d_.widgets.elementoptions.md).[scrollable](_declarations_blessed_d_.widgets.elementoptions.md#optional-scrollable)*

*Defined in [declarations/blessed.d.ts:1407](https://github.com/cancerberoSgx/accursed/blob/5b2518e/src/declarations/blessed.d.ts#L1407)*

Whether the element is scrollable or not.

___

### `Optional` scrollbar

• **scrollbar**? : *object & [TStyle](_declarations_blessed_d_.widgets.types.tstyle.md) | boolean*

*Inherited from [ScrollableBoxOptions](_declarations_blessed_d_.widgets.scrollableboxoptions.md).[scrollbar](_declarations_blessed_d_.widgets.scrollableboxoptions.md#optional-scrollbar)*

*Defined in [declarations/blessed.d.ts:2003](https://github.com/cancerberoSgx/accursed/blob/5b2518e/src/declarations/blessed.d.ts#L2003)*

Object enabling a scrollbar.

Style of the scrollbar track if present (takes regular style options).

___

### `Optional` shadow

• **shadow**? : *boolean*

*Inherited from [ElementOptions](_declarations_blessed_d_.widgets.elementoptions.md).[shadow](_declarations_blessed_d_.widgets.elementoptions.md#optional-shadow)*

*Defined in [declarations/blessed.d.ts:1422](https://github.com/cancerberoSgx/accursed/blob/5b2518e/src/declarations/blessed.d.ts#L1422)*

Draw a translucent offset shadow behind the element.

___

### `Optional` shrink

• **shrink**? : *boolean*

*Inherited from [ElementOptions](_declarations_blessed_d_.widgets.elementoptions.md).[shrink](_declarations_blessed_d_.widgets.elementoptions.md#optional-shrink)*

*Defined in [declarations/blessed.d.ts:1373](https://github.com/cancerberoSgx/accursed/blob/5b2518e/src/declarations/blessed.d.ts#L1373)*

Shrink/flex/grow to content and child elements. Width/height during render.

___

###  speed

• **speed**: *number*

*Defined in [declarations/blessed.d.ts:3335](https://github.com/cancerberoSgx/accursed/blob/5b2518e/src/declarations/blessed.d.ts#L3335)*

Set the speed of animation. Slower: 0.0-1.0. Faster: 1-1000. It cannot go
faster than 1 frame per millisecond, so 1000 is the fastest. (Default: 1.0)

___

### `Optional` style

• **style**? : *[TStyle](_declarations_blessed_d_.widgets.types.tstyle.md)*

*Inherited from [ElementOptions](_declarations_blessed_d_.widgets.elementoptions.md).[style](_declarations_blessed_d_.widgets.elementoptions.md#optional-style)*

*Defined in [declarations/blessed.d.ts:1275](https://github.com/cancerberoSgx/accursed/blob/5b2518e/src/declarations/blessed.d.ts#L1275)*

___

### `Optional` tags

• **tags**? : *boolean*

*Inherited from [ElementOptions](_declarations_blessed_d_.widgets.elementoptions.md).[tags](_declarations_blessed_d_.widgets.elementoptions.md#optional-tags)*

*Defined in [declarations/blessed.d.ts:1262](https://github.com/cancerberoSgx/accursed/blob/5b2518e/src/declarations/blessed.d.ts#L1262)*

___

### `Optional` top

• **top**? : *[TTopLeft](../modules/_declarations_blessed_d_.widgets.types.md#ttopleft)*

*Inherited from [ElementOptions](_declarations_blessed_d_.widgets.elementoptions.md).[top](_declarations_blessed_d_.widgets.elementoptions.md#optional-top)*

*Defined in [declarations/blessed.d.ts:1381](https://github.com/cancerberoSgx/accursed/blob/5b2518e/src/declarations/blessed.d.ts#L1381)*

___

### `Optional` transparent

• **transparent**? : *boolean*

*Inherited from [ElementOptions](_declarations_blessed_d_.widgets.elementoptions.md).[transparent](_declarations_blessed_d_.widgets.elementoptions.md#optional-transparent)*

*Defined in [declarations/blessed.d.ts:1271](https://github.com/cancerberoSgx/accursed/blob/5b2518e/src/declarations/blessed.d.ts#L1271)*

___

### `Optional` underline

• **underline**? : *boolean*

*Inherited from [ElementOptions](_declarations_blessed_d_.widgets.elementoptions.md).[underline](_declarations_blessed_d_.widgets.elementoptions.md#optional-underline)*

*Defined in [declarations/blessed.d.ts:1267](https://github.com/cancerberoSgx/accursed/blob/5b2518e/src/declarations/blessed.d.ts#L1267)*

___

### `Optional` valign

• **valign**? : *"top" | "middle" | "bottom"*

*Inherited from [ElementOptions](_declarations_blessed_d_.widgets.elementoptions.md).[valign](_declarations_blessed_d_.widgets.elementoptions.md#optional-valign)*

*Defined in [declarations/blessed.d.ts:1368](https://github.com/cancerberoSgx/accursed/blob/5b2518e/src/declarations/blessed.d.ts#L1368)*

Vertical text alignment: top, middle, or bottom.

___

### `Optional` vi

• **vi**? : *boolean*

*Inherited from [ScrollableTextOptions](_declarations_blessed_d_.widgets.scrollabletextoptions.md).[vi](_declarations_blessed_d_.widgets.scrollabletextoptions.md#optional-vi)*

*Defined in [declarations/blessed.d.ts:2028](https://github.com/cancerberoSgx/accursed/blob/5b2518e/src/declarations/blessed.d.ts#L2028)*

Use vi keys with the keys option.

___

###  width

• **width**: *number | string*

*Overrides [ElementOptions](_declarations_blessed_d_.widgets.elementoptions.md).[width](_declarations_blessed_d_.widgets.elementoptions.md#optional-width)*

*Defined in [declarations/blessed.d.ts:3315](https://github.com/cancerberoSgx/accursed/blob/5b2518e/src/declarations/blessed.d.ts#L3315)*

This differs from other element's width or height in that only one
of them is needed: blessed will maintain the aspect ratio of the image
as it scales down to the proper number of cells. NOTE: PNG/GIF's are
always automatically shrunken to size (based on scale) if a width or
height is not given.

___

### `Optional` wrap

• **wrap**? : *boolean*

*Inherited from [ElementOptions](_declarations_blessed_d_.widgets.elementoptions.md).[wrap](_declarations_blessed_d_.widgets.elementoptions.md#optional-wrap)*

*Defined in [declarations/blessed.d.ts:1318](https://github.com/cancerberoSgx/accursed/blob/5b2518e/src/declarations/blessed.d.ts#L1318)*

Wrap content inside this element viewport.
