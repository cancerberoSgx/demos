[accursed](../README.md) > ["blessed/borderBox"](../modules/_blessed_borderbox_.md) > [BorderBoxOptions](../interfaces/_blessed_borderbox_.borderboxoptions.md)

# Interface: BorderBoxOptions

## Hierarchy

↳  [BoxOptions](_declarations_blessed_d_.widgets.boxoptions.md)

 [BorderBoxOptionsConcrete](_blessed_borderbox_.borderboxoptionsconcrete.md)

**↳ BorderBoxOptions**

## Index

### Properties

* [_data](_blessed_borderbox_.borderboxoptions.md#_data)
* [align](_blessed_borderbox_.borderboxoptions.md#align)
* [alwaysScroll](_blessed_borderbox_.borderboxoptions.md#alwaysscroll)
* [autoFocus](_blessed_borderbox_.borderboxoptions.md#autofocus)
* [baseLimit](_blessed_borderbox_.borderboxoptions.md#baselimit)
* [bg](_blessed_borderbox_.borderboxoptions.md#bg)
* [bindings](_blessed_borderbox_.borderboxoptions.md#bindings)
* [blink](_blessed_borderbox_.borderboxoptions.md#blink)
* [bold](_blessed_borderbox_.borderboxoptions.md#bold)
* [border](_blessed_borderbox_.borderboxoptions.md#border)
* [borderStyle](_blessed_borderbox_.borderboxoptions.md#borderstyle)
* [bottom](_blessed_borderbox_.borderboxoptions.md#bottom)
* [ch](_blessed_borderbox_.borderboxoptions.md#ch)
* [children](_blessed_borderbox_.borderboxoptions.md#children)
* [clickable](_blessed_borderbox_.borderboxoptions.md#clickable)
* [content](_blessed_borderbox_.borderboxoptions.md#content)
* [dockBorders](_blessed_borderbox_.borderboxoptions.md#dockborders)
* [draggable](_blessed_borderbox_.borderboxoptions.md#draggable)
* [effects](_blessed_borderbox_.borderboxoptions.md#effects)
* [fg](_blessed_borderbox_.borderboxoptions.md#fg)
* [fixed](_blessed_borderbox_.borderboxoptions.md#fixed)
* [focusEffects](_blessed_borderbox_.borderboxoptions.md#focuseffects)
* [focusable](_blessed_borderbox_.borderboxoptions.md#focusable)
* [focused](_blessed_borderbox_.borderboxoptions.md#focused)
* [height](_blessed_borderbox_.borderboxoptions.md#height)
* [hidden](_blessed_borderbox_.borderboxoptions.md#hidden)
* [hoverBg](_blessed_borderbox_.borderboxoptions.md#hoverbg)
* [hoverEffects](_blessed_borderbox_.borderboxoptions.md#hovereffects)
* [hoverText](_blessed_borderbox_.borderboxoptions.md#hovertext)
* [input](_blessed_borderbox_.borderboxoptions.md#input)
* [inverse](_blessed_borderbox_.borderboxoptions.md#inverse)
* [invisible](_blessed_borderbox_.borderboxoptions.md#invisible)
* [keyable](_blessed_borderbox_.borderboxoptions.md#keyable)
* [keys](_blessed_borderbox_.borderboxoptions.md#keys)
* [label](_blessed_borderbox_.borderboxoptions.md#label)
* [left](_blessed_borderbox_.borderboxoptions.md#left)
* [mouse](_blessed_borderbox_.borderboxoptions.md#mouse)
* [name](_blessed_borderbox_.borderboxoptions.md#name)
* [noOverflow](_blessed_borderbox_.borderboxoptions.md#nooverflow)
* [padding](_blessed_borderbox_.borderboxoptions.md#padding)
* [parent](_blessed_borderbox_.borderboxoptions.md#parent)
* [position](_blessed_borderbox_.borderboxoptions.md#position)
* [ref](_blessed_borderbox_.borderboxoptions.md#ref)
* [removeLabel](_blessed_borderbox_.borderboxoptions.md#removelabel)
* [right](_blessed_borderbox_.borderboxoptions.md#right)
* [screen](_blessed_borderbox_.borderboxoptions.md#screen)
* [scrollable](_blessed_borderbox_.borderboxoptions.md#scrollable)
* [scrollbar](_blessed_borderbox_.borderboxoptions.md#scrollbar)
* [shadow](_blessed_borderbox_.borderboxoptions.md#shadow)
* [shrink](_blessed_borderbox_.borderboxoptions.md#shrink)
* [style](_blessed_borderbox_.borderboxoptions.md#style)
* [tags](_blessed_borderbox_.borderboxoptions.md#tags)
* [top](_blessed_borderbox_.borderboxoptions.md#top)
* [transparent](_blessed_borderbox_.borderboxoptions.md#transparent)
* [underline](_blessed_borderbox_.borderboxoptions.md#underline)
* [valign](_blessed_borderbox_.borderboxoptions.md#valign)
* [vi](_blessed_borderbox_.borderboxoptions.md#vi)
* [width](_blessed_borderbox_.borderboxoptions.md#width)
* [wrap](_blessed_borderbox_.borderboxoptions.md#wrap)

---

## Properties

<a id="_data"></a>

### `<Optional>` _data

**● _data**: *`object`*

*Inherited from [ElementOptions](_declarations_blessed_d_.widgets.elementoptions.md).[_data](_declarations_blessed_d_.widgets.elementoptions.md#_data)*

*Defined in [declarations/blessed.d.ts:1493](https://github.com/cancerberoSgx/accursed/blob/978b980/src/declarations/blessed.d.ts#L1493)*

Miscelanus options. Currently JavaScript/Blessed allows to pass anything as option, this is just a bucket for TypeScript and have impact

#### Type declaration

[name: `string`]: `any`

___
<a id="align"></a>

### `<Optional>` align

**● align**: *"left" \| "center" \| "right"*

*Inherited from [ElementOptions](_declarations_blessed_d_.widgets.elementoptions.md).[align](_declarations_blessed_d_.widgets.elementoptions.md#align)*

*Defined in [declarations/blessed.d.ts:1430](https://github.com/cancerberoSgx/accursed/blob/978b980/src/declarations/blessed.d.ts#L1430)*

Text alignment: left, center, or right.

___
<a id="alwaysscroll"></a>

### `<Optional>` alwaysScroll

**● alwaysScroll**: *`boolean`*

*Inherited from [ScrollableBoxOptions](_declarations_blessed_d_.widgets.scrollableboxoptions.md).[alwaysScroll](_declarations_blessed_d_.widgets.scrollableboxoptions.md#alwaysscroll)*

*Defined in [declarations/blessed.d.ts:2063](https://github.com/cancerberoSgx/accursed/blob/978b980/src/declarations/blessed.d.ts#L2063)*

A option which causes the ignoring of childOffset. This in turn causes the childBase to change every time the element is scrolled.

___
<a id="autofocus"></a>

### `<Optional>` autoFocus

**● autoFocus**: *`boolean`*

*Inherited from [ElementOptions](_declarations_blessed_d_.widgets.elementoptions.md).[autoFocus](_declarations_blessed_d_.widgets.elementoptions.md#autofocus)*

*Defined in [declarations/blessed.d.ts:1340](https://github.com/cancerberoSgx/accursed/blob/978b980/src/declarations/blessed.d.ts#L1340)*

___
<a id="baselimit"></a>

### `<Optional>` baseLimit

**● baseLimit**: *`number`*

*Inherited from [ScrollableBoxOptions](_declarations_blessed_d_.widgets.scrollableboxoptions.md).[baseLimit](_declarations_blessed_d_.widgets.scrollableboxoptions.md#baselimit)*

*Defined in [declarations/blessed.d.ts:2057](https://github.com/cancerberoSgx/accursed/blob/978b980/src/declarations/blessed.d.ts#L2057)*

A limit to the childBase. Default is Infinity.

___
<a id="bg"></a>

### `<Optional>` bg

**● bg**: *[Color](../modules/_declarations_blessed_d_.widgets.md#color)*

*Inherited from [ElementOptions](_declarations_blessed_d_.widgets.elementoptions.md).[bg](_declarations_blessed_d_.widgets.elementoptions.md#bg)*

*Defined in [declarations/blessed.d.ts:1332](https://github.com/cancerberoSgx/accursed/blob/978b980/src/declarations/blessed.d.ts#L1332)*

___
<a id="bindings"></a>

### `<Optional>` bindings

**● bindings**: *`any`*

*Inherited from [BoxOptions](_declarations_blessed_d_.widgets.boxoptions.md).[bindings](_declarations_blessed_d_.widgets.boxoptions.md#bindings)*

*Defined in [declarations/blessed.d.ts:2099](https://github.com/cancerberoSgx/accursed/blob/978b980/src/declarations/blessed.d.ts#L2099)*

___
<a id="blink"></a>

### `<Optional>` blink

**● blink**: *`boolean`*

*Inherited from [ElementOptions](_declarations_blessed_d_.widgets.elementoptions.md).[blink](_declarations_blessed_d_.widgets.elementoptions.md#blink)*

*Defined in [declarations/blessed.d.ts:1335](https://github.com/cancerberoSgx/accursed/blob/978b980/src/declarations/blessed.d.ts#L1335)*

___
<a id="bold"></a>

### `<Optional>` bold

**● bold**: *`boolean`*

*Inherited from [ElementOptions](_declarations_blessed_d_.widgets.elementoptions.md).[bold](_declarations_blessed_d_.widgets.elementoptions.md#bold)*

*Defined in [declarations/blessed.d.ts:1333](https://github.com/cancerberoSgx/accursed/blob/978b980/src/declarations/blessed.d.ts#L1333)*

___
<a id="border"></a>

### `<Optional>` border

**● border**: *[TBorder](_declarations_blessed_d_.widgets.types.tborder.md) \| [BorderType](../modules/_declarations_blessed_d_.widgets.types.md#bordertype)*

*Inherited from [ElementOptions](_declarations_blessed_d_.widgets.elementoptions.md).[border](_declarations_blessed_d_.widgets.elementoptions.md#border)*

*Defined in [declarations/blessed.d.ts:1347](https://github.com/cancerberoSgx/accursed/blob/978b980/src/declarations/blessed.d.ts#L1347)*

Border object, see below.

___
<a id="borderstyle"></a>

###  borderStyle

**● borderStyle**: *[BorderStyle](../enums/_blessed_border_.borderstyle.md)*

*Inherited from [BorderBoxOptionsConcrete](_blessed_borderbox_.borderboxoptionsconcrete.md).[borderStyle](_blessed_borderbox_.borderboxoptionsconcrete.md#borderstyle)*

*Defined in [blessed/borderBox.ts:9](https://github.com/cancerberoSgx/accursed/blob/978b980/src/blessed/borderBox.ts#L9)*

___
<a id="bottom"></a>

### `<Optional>` bottom

**● bottom**: *[TPosition](../modules/_declarations_blessed_d_.widgets.types.md#tposition)*

*Inherited from [ElementOptions](_declarations_blessed_d_.widgets.elementoptions.md).[bottom](_declarations_blessed_d_.widgets.elementoptions.md#bottom)*

*Defined in [declarations/blessed.d.ts:1451](https://github.com/cancerberoSgx/accursed/blob/978b980/src/declarations/blessed.d.ts#L1451)*

___
<a id="ch"></a>

### `<Optional>` ch

**● ch**: *`string`*

*Inherited from [ElementOptions](_declarations_blessed_d_.widgets.elementoptions.md).[ch](_declarations_blessed_d_.widgets.elementoptions.md#ch)*

*Defined in [declarations/blessed.d.ts:1479](https://github.com/cancerberoSgx/accursed/blob/978b980/src/declarations/blessed.d.ts#L1479)*

Background character (default is whitespace ).

___
<a id="children"></a>

### `<Optional>` children

**● children**: *[Node](../classes/_declarations_blessed_d_.widgets.node.md)[]*

*Inherited from [INodeOptions](_declarations_blessed_d_.widgets.inodeoptions.md).[children](_declarations_blessed_d_.widgets.inodeoptions.md#children)*

*Defined in [declarations/blessed.d.ts:302](https://github.com/cancerberoSgx/accursed/blob/978b980/src/declarations/blessed.d.ts#L302)*

___
<a id="clickable"></a>

### `<Optional>` clickable

**● clickable**: *`boolean`*

*Inherited from [ElementOptions](_declarations_blessed_d_.widgets.elementoptions.md).[clickable](_declarations_blessed_d_.widgets.elementoptions.md#clickable)*

*Defined in [declarations/blessed.d.ts:1357](https://github.com/cancerberoSgx/accursed/blob/978b980/src/declarations/blessed.d.ts#L1357)*

Element is clickable.

___
<a id="content"></a>

### `<Optional>` content

**● content**: *`string`*

*Inherited from [ElementOptions](_declarations_blessed_d_.widgets.elementoptions.md).[content](_declarations_blessed_d_.widgets.elementoptions.md#content)*

*Defined in [declarations/blessed.d.ts:1352](https://github.com/cancerberoSgx/accursed/blob/978b980/src/declarations/blessed.d.ts#L1352)*

Element's text content.

___
<a id="dockborders"></a>

### `<Optional>` dockBorders

**● dockBorders**: *`boolean`*

*Inherited from [ElementOptions](_declarations_blessed_d_.widgets.elementoptions.md).[dockBorders](_declarations_blessed_d_.widgets.elementoptions.md#dockborders)*

*Defined in [declarations/blessed.d.ts:1373](https://github.com/cancerberoSgx/accursed/blob/978b980/src/declarations/blessed.d.ts#L1373)*

Automatically "dock" borders with other elements instead of overlapping, depending on position (experimental).

___
<a id="draggable"></a>

### `<Optional>` draggable

**● draggable**: *`boolean`*

*Inherited from [ElementOptions](_declarations_blessed_d_.widgets.elementoptions.md).[draggable](_declarations_blessed_d_.widgets.elementoptions.md#draggable)*

*Defined in [declarations/blessed.d.ts:1484](https://github.com/cancerberoSgx/accursed/blob/978b980/src/declarations/blessed.d.ts#L1484)*

Allow the element to be dragged with the mouse.

___
<a id="effects"></a>

### `<Optional>` effects

**● effects**: *`object`*

*Inherited from [ElementOptions](_declarations_blessed_d_.widgets.elementoptions.md).[effects](_declarations_blessed_d_.widgets.elementoptions.md#effects)*

*Defined in [declarations/blessed.d.ts:1423](https://github.com/cancerberoSgx/accursed/blob/978b980/src/declarations/blessed.d.ts#L1423)*

Same as style.focus and style.hover

#### Type declaration

`Optional`  focus: [TStyle](_declarations_blessed_d_.widgets.types.tstyle.md)

`Optional`  hover: [TStyle](_declarations_blessed_d_.widgets.types.tstyle.md)

___
<a id="fg"></a>

### `<Optional>` fg

**● fg**: *[Color](../modules/_declarations_blessed_d_.widgets.md#color)*

*Inherited from [ElementOptions](_declarations_blessed_d_.widgets.elementoptions.md).[fg](_declarations_blessed_d_.widgets.elementoptions.md#fg)*

*Defined in [declarations/blessed.d.ts:1331](https://github.com/cancerberoSgx/accursed/blob/978b980/src/declarations/blessed.d.ts#L1331)*

___
<a id="fixed"></a>

### `<Optional>` fixed

**● fixed**: *`boolean`*

*Inherited from [ElementOptions](_declarations_blessed_d_.widgets.elementoptions.md).[fixed](_declarations_blessed_d_.widgets.elementoptions.md#fixed)*

*Defined in [declarations/blessed.d.ts:1380](https://github.com/cancerberoSgx/accursed/blob/978b980/src/declarations/blessed.d.ts#L1380)*

___
<a id="focuseffects"></a>

### `<Optional>` focusEffects

**● focusEffects**: *[TStyle](_declarations_blessed_d_.widgets.types.tstyle.md)*

*Inherited from [ElementOptions](_declarations_blessed_d_.widgets.elementoptions.md).[focusEffects](_declarations_blessed_d_.widgets.elementoptions.md#focuseffects)*

*Defined in [declarations/blessed.d.ts:1419](https://github.com/cancerberoSgx/accursed/blob/978b980/src/declarations/blessed.d.ts#L1419)*

Same as style.focus

___
<a id="focusable"></a>

### `<Optional>` focusable

**● focusable**: *`boolean`*

*Inherited from [INodeOptions](_declarations_blessed_d_.widgets.inodeoptions.md).[focusable](_declarations_blessed_d_.widgets.inodeoptions.md#focusable)*

*Defined in [declarations/blessed.d.ts:306](https://github.com/cancerberoSgx/accursed/blob/978b980/src/declarations/blessed.d.ts#L306)*

If true, the node will obtain focus when m

___
<a id="focused"></a>

### `<Optional>` focused

**● focused**: *`boolean`*

*Inherited from [ElementOptions](_declarations_blessed_d_.widgets.elementoptions.md).[focused](_declarations_blessed_d_.widgets.elementoptions.md#focused)*

*Defined in [declarations/blessed.d.ts:1390](https://github.com/cancerberoSgx/accursed/blob/978b980/src/declarations/blessed.d.ts#L1390)*

Element is focused.

___
<a id="height"></a>

### `<Optional>` height

**● height**: *`number` \| `string`*

*Inherited from [ElementOptions](_declarations_blessed_d_.widgets.elementoptions.md).[height](_declarations_blessed_d_.widgets.elementoptions.md#height)*

*Defined in [declarations/blessed.d.ts:1464](https://github.com/cancerberoSgx/accursed/blob/978b980/src/declarations/blessed.d.ts#L1464)*

Offsets of the element relative to its parent. Can be a number, percentage (0-100%), or keyword (center). right and bottom do not accept keywords. Percentages can also have offsets (50%+1, 50%-1).

___
<a id="hidden"></a>

### `<Optional>` hidden

**● hidden**: *`boolean`*

*Inherited from [ElementOptions](_declarations_blessed_d_.widgets.elementoptions.md).[hidden](_declarations_blessed_d_.widgets.elementoptions.md#hidden)*

*Defined in [declarations/blessed.d.ts:1395](https://github.com/cancerberoSgx/accursed/blob/978b980/src/declarations/blessed.d.ts#L1395)*

Whether the element is hidden.

___
<a id="hoverbg"></a>

### `<Optional>` hoverBg

**● hoverBg**: *[Color](../modules/_declarations_blessed_d_.widgets.md#color)*

*Inherited from [ElementOptions](_declarations_blessed_d_.widgets.elementoptions.md).[hoverBg](_declarations_blessed_d_.widgets.elementoptions.md#hoverbg)*

*Defined in [declarations/blessed.d.ts:1410](https://github.com/cancerberoSgx/accursed/blob/978b980/src/declarations/blessed.d.ts#L1410)*

Same as style.hover.bg

___
<a id="hovereffects"></a>

### `<Optional>` hoverEffects

**● hoverEffects**: *[TStyle](_declarations_blessed_d_.widgets.types.tstyle.md)*

*Inherited from [ElementOptions](_declarations_blessed_d_.widgets.elementoptions.md).[hoverEffects](_declarations_blessed_d_.widgets.elementoptions.md#hovereffects)*

*Defined in [declarations/blessed.d.ts:1415](https://github.com/cancerberoSgx/accursed/blob/978b980/src/declarations/blessed.d.ts#L1415)*

Same as style.hover

___
<a id="hovertext"></a>

### `<Optional>` hoverText

**● hoverText**: *`string`*

*Inherited from [ElementOptions](_declarations_blessed_d_.widgets.elementoptions.md).[hoverText](_declarations_blessed_d_.widgets.elementoptions.md#hovertext)*

*Defined in [declarations/blessed.d.ts:1405](https://github.com/cancerberoSgx/accursed/blob/978b980/src/declarations/blessed.d.ts#L1405)*

A floating text label for the element which appears on mouseover.

___
<a id="input"></a>

### `<Optional>` input

**● input**: *`boolean`*

*Inherited from [ElementOptions](_declarations_blessed_d_.widgets.elementoptions.md).[input](_declarations_blessed_d_.widgets.elementoptions.md#input)*

*Defined in [declarations/blessed.d.ts:1362](https://github.com/cancerberoSgx/accursed/blob/978b980/src/declarations/blessed.d.ts#L1362)*

Element is focusable and can receive key input.

___
<a id="inverse"></a>

### `<Optional>` inverse

**● inverse**: *`boolean`*

*Inherited from [ElementOptions](_declarations_blessed_d_.widgets.elementoptions.md).[inverse](_declarations_blessed_d_.widgets.elementoptions.md#inverse)*

*Defined in [declarations/blessed.d.ts:1336](https://github.com/cancerberoSgx/accursed/blob/978b980/src/declarations/blessed.d.ts#L1336)*

___
<a id="invisible"></a>

### `<Optional>` invisible

**● invisible**: *`boolean`*

*Inherited from [ElementOptions](_declarations_blessed_d_.widgets.elementoptions.md).[invisible](_declarations_blessed_d_.widgets.elementoptions.md#invisible)*

*Defined in [declarations/blessed.d.ts:1337](https://github.com/cancerberoSgx/accursed/blob/978b980/src/declarations/blessed.d.ts#L1337)*

___
<a id="keyable"></a>

### `<Optional>` keyable

**● keyable**: *`boolean`*

*Inherited from [ElementOptions](_declarations_blessed_d_.widgets.elementoptions.md).[keyable](_declarations_blessed_d_.widgets.elementoptions.md#keyable)*

*Defined in [declarations/blessed.d.ts:1367](https://github.com/cancerberoSgx/accursed/blob/978b980/src/declarations/blessed.d.ts#L1367)*

Keys enabled for this element.

___
<a id="keys"></a>

### `<Optional>` keys

**● keys**: *`string` \| `string`[] \| `boolean`*

*Inherited from [ScrollableTextOptions](_declarations_blessed_d_.widgets.scrollabletextoptions.md).[keys](_declarations_blessed_d_.widgets.scrollabletextoptions.md#keys)*

*Defined in [declarations/blessed.d.ts:2090](https://github.com/cancerberoSgx/accursed/blob/978b980/src/declarations/blessed.d.ts#L2090)*

Use pre-defined keys (i or enter for insert, e for editor, C-e for editor while inserting).

___
<a id="label"></a>

### `<Optional>` label

**● label**: *`string` \| [LabelOptions](_declarations_blessed_d_.widgets.labeloptions.md)*

*Inherited from [ElementOptions](_declarations_blessed_d_.widgets.elementoptions.md).[label](_declarations_blessed_d_.widgets.elementoptions.md#label)*

*Defined in [declarations/blessed.d.ts:1400](https://github.com/cancerberoSgx/accursed/blob/978b980/src/declarations/blessed.d.ts#L1400)*

A simple text label for the element.

___
<a id="left"></a>

### `<Optional>` left

**● left**: *[TTopLeft](../modules/_declarations_blessed_d_.widgets.types.md#ttopleft)*

*Inherited from [ElementOptions](_declarations_blessed_d_.widgets.elementoptions.md).[left](_declarations_blessed_d_.widgets.elementoptions.md#left)*

*Defined in [declarations/blessed.d.ts:1449](https://github.com/cancerberoSgx/accursed/blob/978b980/src/declarations/blessed.d.ts#L1449)*

___
<a id="mouse"></a>

### `<Optional>` mouse

**● mouse**: *`boolean`*

*Inherited from [ScrollableTextOptions](_declarations_blessed_d_.widgets.scrollabletextoptions.md).[mouse](_declarations_blessed_d_.widgets.scrollabletextoptions.md#mouse)*

*Defined in [declarations/blessed.d.ts:2085](https://github.com/cancerberoSgx/accursed/blob/978b980/src/declarations/blessed.d.ts#L2085)*

Whether to enable automatic mouse support for this element. Use pre-defined mouse events (right-click for editor).

___
<a id="name"></a>

### `<Optional>` name

**● name**: *`string`*

*Inherited from [INodeOptions](_declarations_blessed_d_.widgets.inodeoptions.md).[name](_declarations_blessed_d_.widgets.inodeoptions.md#name)*

*Defined in [declarations/blessed.d.ts:299](https://github.com/cancerberoSgx/accursed/blob/978b980/src/declarations/blessed.d.ts#L299)*

___
<a id="nooverflow"></a>

### `<Optional>` noOverflow

**● noOverflow**: *`boolean`*

*Inherited from [ElementOptions](_declarations_blessed_d_.widgets.elementoptions.md).[noOverflow](_declarations_blessed_d_.widgets.elementoptions.md#nooverflow)*

*Defined in [declarations/blessed.d.ts:1378](https://github.com/cancerberoSgx/accursed/blob/978b980/src/declarations/blessed.d.ts#L1378)*

Hide content or children outside this element's viewport.

___
<a id="padding"></a>

### `<Optional>` padding

**● padding**: *`number` \| [Padding](_declarations_blessed_d_.widgets.padding.md)*

*Inherited from [ElementOptions](_declarations_blessed_d_.widgets.elementoptions.md).[padding](_declarations_blessed_d_.widgets.elementoptions.md#padding)*

*Defined in [declarations/blessed.d.ts:1446](https://github.com/cancerberoSgx/accursed/blob/978b980/src/declarations/blessed.d.ts#L1446)*

Amount of padding on the inside of the element. Can be a number or an object containing the properties: left, right, top, and bottom.

___
<a id="parent"></a>

### `<Optional>` parent

**● parent**: *[Node](../classes/_declarations_blessed_d_.widgets.node.md)*

*Inherited from [INodeOptions](_declarations_blessed_d_.widgets.inodeoptions.md).[parent](_declarations_blessed_d_.widgets.inodeoptions.md#parent)*

*Defined in [declarations/blessed.d.ts:301](https://github.com/cancerberoSgx/accursed/blob/978b980/src/declarations/blessed.d.ts#L301)*

___
<a id="position"></a>

### `<Optional>` position

**● position**: *[Position](_declarations_blessed_d_.widgets.position.md)*

*Inherited from [ElementOptions](_declarations_blessed_d_.widgets.elementoptions.md).[position](_declarations_blessed_d_.widgets.elementoptions.md#position)*

*Defined in [declarations/blessed.d.ts:1469](https://github.com/cancerberoSgx/accursed/blob/978b980/src/declarations/blessed.d.ts#L1469)*

Can contain the above options.

___
<a id="ref"></a>

### `<Optional>` ref

**● ref**: *[RefObject](_jsx_types_.refobject.md)*

*Inherited from [ElementOptions](_declarations_blessed_d_.widgets.elementoptions.md).[ref](_declarations_blessed_d_.widgets.elementoptions.md#ref)*

*Defined in [declarations/blessed.d.ts:1496](https://github.com/cancerberoSgx/accursed/blob/978b980/src/declarations/blessed.d.ts#L1496)*

`accursed` library custom support for React-like Refs. Declare the option here so it works out of the box. [https://reactjs.org/docs/refs-and-the-dom.html](https://reactjs.org/docs/refs-and-the-dom.html). TODO: documentation

___
<a id="removelabel"></a>

### `<Optional>` removeLabel

**● removeLabel**: *`boolean`*

*Inherited from [BorderBoxOptionsConcrete](_blessed_borderbox_.borderboxoptionsconcrete.md).[removeLabel](_blessed_borderbox_.borderboxoptionsconcrete.md#removelabel)*

*Defined in [blessed/borderBox.ts:10](https://github.com/cancerberoSgx/accursed/blob/978b980/src/blessed/borderBox.ts#L10)*

___
<a id="right"></a>

### `<Optional>` right

**● right**: *[TPosition](../modules/_declarations_blessed_d_.widgets.types.md#tposition)*

*Inherited from [ElementOptions](_declarations_blessed_d_.widgets.elementoptions.md).[right](_declarations_blessed_d_.widgets.elementoptions.md#right)*

*Defined in [declarations/blessed.d.ts:1450](https://github.com/cancerberoSgx/accursed/blob/978b980/src/declarations/blessed.d.ts#L1450)*

___
<a id="screen"></a>

### `<Optional>` screen

**● screen**: *[Screen](../classes/_declarations_blessed_d_.widgets.screen.md)*

*Inherited from [INodeOptions](_declarations_blessed_d_.widgets.inodeoptions.md).[screen](_declarations_blessed_d_.widgets.inodeoptions.md#screen)*

*Defined in [declarations/blessed.d.ts:300](https://github.com/cancerberoSgx/accursed/blob/978b980/src/declarations/blessed.d.ts#L300)*

___
<a id="scrollable"></a>

### `<Optional>` scrollable

**● scrollable**: *`boolean`*

*Inherited from [ElementOptions](_declarations_blessed_d_.widgets.elementoptions.md).[scrollable](_declarations_blessed_d_.widgets.elementoptions.md#scrollable)*

*Defined in [declarations/blessed.d.ts:1474](https://github.com/cancerberoSgx/accursed/blob/978b980/src/declarations/blessed.d.ts#L1474)*

Whether the element is scrollable or not.

___
<a id="scrollbar"></a>

### `<Optional>` scrollbar

**● scrollbar**: *`object` & [TStyle](_declarations_blessed_d_.widgets.types.tstyle.md) \| `boolean`*

*Inherited from [ScrollableBoxOptions](_declarations_blessed_d_.widgets.scrollableboxoptions.md).[scrollbar](_declarations_blessed_d_.widgets.scrollableboxoptions.md#scrollbar)*

*Defined in [declarations/blessed.d.ts:2070](https://github.com/cancerberoSgx/accursed/blob/978b980/src/declarations/blessed.d.ts#L2070)*

Object enabling a scrollbar.

Style of the scrollbar track if present (takes regular style options).

___
<a id="shadow"></a>

### `<Optional>` shadow

**● shadow**: *`boolean`*

*Inherited from [ElementOptions](_declarations_blessed_d_.widgets.elementoptions.md).[shadow](_declarations_blessed_d_.widgets.elementoptions.md#shadow)*

*Defined in [declarations/blessed.d.ts:1489](https://github.com/cancerberoSgx/accursed/blob/978b980/src/declarations/blessed.d.ts#L1489)*

Draw a translucent offset shadow behind the element.

___
<a id="shrink"></a>

### `<Optional>` shrink

**● shrink**: *`boolean`*

*Inherited from [ElementOptions](_declarations_blessed_d_.widgets.elementoptions.md).[shrink](_declarations_blessed_d_.widgets.elementoptions.md#shrink)*

*Defined in [declarations/blessed.d.ts:1440](https://github.com/cancerberoSgx/accursed/blob/978b980/src/declarations/blessed.d.ts#L1440)*

Shrink/flex/grow to content and child elements. Width/height during render.

___
<a id="style"></a>

### `<Optional>` style

**● style**: *[TStyle](_declarations_blessed_d_.widgets.types.tstyle.md)*

*Inherited from [ElementOptions](_declarations_blessed_d_.widgets.elementoptions.md).[style](_declarations_blessed_d_.widgets.elementoptions.md#style)*

*Defined in [declarations/blessed.d.ts:1342](https://github.com/cancerberoSgx/accursed/blob/978b980/src/declarations/blessed.d.ts#L1342)*

___
<a id="tags"></a>

### `<Optional>` tags

**● tags**: *`boolean`*

*Inherited from [ElementOptions](_declarations_blessed_d_.widgets.elementoptions.md).[tags](_declarations_blessed_d_.widgets.elementoptions.md#tags)*

*Defined in [declarations/blessed.d.ts:1329](https://github.com/cancerberoSgx/accursed/blob/978b980/src/declarations/blessed.d.ts#L1329)*

___
<a id="top"></a>

### `<Optional>` top

**● top**: *[TTopLeft](../modules/_declarations_blessed_d_.widgets.types.md#ttopleft)*

*Inherited from [ElementOptions](_declarations_blessed_d_.widgets.elementoptions.md).[top](_declarations_blessed_d_.widgets.elementoptions.md#top)*

*Defined in [declarations/blessed.d.ts:1448](https://github.com/cancerberoSgx/accursed/blob/978b980/src/declarations/blessed.d.ts#L1448)*

___
<a id="transparent"></a>

### `<Optional>` transparent

**● transparent**: *`boolean`*

*Inherited from [ElementOptions](_declarations_blessed_d_.widgets.elementoptions.md).[transparent](_declarations_blessed_d_.widgets.elementoptions.md#transparent)*

*Defined in [declarations/blessed.d.ts:1338](https://github.com/cancerberoSgx/accursed/blob/978b980/src/declarations/blessed.d.ts#L1338)*

___
<a id="underline"></a>

### `<Optional>` underline

**● underline**: *`boolean`*

*Inherited from [ElementOptions](_declarations_blessed_d_.widgets.elementoptions.md).[underline](_declarations_blessed_d_.widgets.elementoptions.md#underline)*

*Defined in [declarations/blessed.d.ts:1334](https://github.com/cancerberoSgx/accursed/blob/978b980/src/declarations/blessed.d.ts#L1334)*

___
<a id="valign"></a>

### `<Optional>` valign

**● valign**: *"top" \| "middle" \| "bottom"*

*Inherited from [ElementOptions](_declarations_blessed_d_.widgets.elementoptions.md).[valign](_declarations_blessed_d_.widgets.elementoptions.md#valign)*

*Defined in [declarations/blessed.d.ts:1435](https://github.com/cancerberoSgx/accursed/blob/978b980/src/declarations/blessed.d.ts#L1435)*

Vertical text alignment: top, middle, or bottom.

___
<a id="vi"></a>

### `<Optional>` vi

**● vi**: *`boolean`*

*Inherited from [ScrollableTextOptions](_declarations_blessed_d_.widgets.scrollabletextoptions.md).[vi](_declarations_blessed_d_.widgets.scrollabletextoptions.md#vi)*

*Defined in [declarations/blessed.d.ts:2095](https://github.com/cancerberoSgx/accursed/blob/978b980/src/declarations/blessed.d.ts#L2095)*

Use vi keys with the keys option.

___
<a id="width"></a>

### `<Optional>` width

**● width**: *`number` \| `string`*

*Inherited from [ElementOptions](_declarations_blessed_d_.widgets.elementoptions.md).[width](_declarations_blessed_d_.widgets.elementoptions.md#width)*

*Defined in [declarations/blessed.d.ts:1457](https://github.com/cancerberoSgx/accursed/blob/978b980/src/declarations/blessed.d.ts#L1457)*

Width/height of the element, can be a number, percentage (0-100%), or keyword (half or shrink). Percentages can also have offsets (50%+1, 50%-1).

___
<a id="wrap"></a>

### `<Optional>` wrap

**● wrap**: *`boolean`*

*Inherited from [ElementOptions](_declarations_blessed_d_.widgets.elementoptions.md).[wrap](_declarations_blessed_d_.widgets.elementoptions.md#wrap)*

*Defined in [declarations/blessed.d.ts:1385](https://github.com/cancerberoSgx/accursed/blob/978b980/src/declarations/blessed.d.ts#L1385)*

Wrap content inside this element viewport.

___
