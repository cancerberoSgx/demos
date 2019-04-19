---
id: api-interfaces-blessed-d-widgets.iscreenoptions
title: IScreenOptions
sidebar_label: IScreenOptions
---

[blessed](api-readme.md) > [[blessed.d Module]](api-modules-blessed-d-module.md) > [Widgets](api-modules-blessed-d-widgets.md) > [IScreenOptions](api-interfaces-blessed-d-widgets.iscreenoptions.md)

## Interface

## Hierarchy

↳  [INodeOptions](api-interfaces-blessed-d-widgets.inodeoptions.md)

**↳ IScreenOptions**

### Properties

* [abottom](api-interfaces-blessed-d-widgets.iscreenoptions.md#abottom)
* [aleft](api-interfaces-blessed-d-widgets.iscreenoptions.md#aleft)
* [aright](api-interfaces-blessed-d-widgets.iscreenoptions.md#aright)
* [atop](api-interfaces-blessed-d-widgets.iscreenoptions.md#atop)
* [autoPadding](api-interfaces-blessed-d-widgets.iscreenoptions.md#autopadding)
* [bottom](api-interfaces-blessed-d-widgets.iscreenoptions.md#bottom)
* [children](api-interfaces-blessed-d-widgets.iscreenoptions.md#children)
* [cols](api-interfaces-blessed-d-widgets.iscreenoptions.md#cols)
* [cursor](api-interfaces-blessed-d-widgets.iscreenoptions.md#cursor)
* [debug](api-interfaces-blessed-d-widgets.iscreenoptions.md#debug)
* [debugLog](api-interfaces-blessed-d-widgets.iscreenoptions.md#debuglog)
* [dockBorders](api-interfaces-blessed-d-widgets.iscreenoptions.md#dockborders)
* [dump](api-interfaces-blessed-d-widgets.iscreenoptions.md#dump)
* [fastCSR](api-interfaces-blessed-d-widgets.iscreenoptions.md#fastcsr)
* [focusable](api-interfaces-blessed-d-widgets.iscreenoptions.md#focusable)
* [focused](api-interfaces-blessed-d-widgets.iscreenoptions.md#focused)
* [forceUnicode](api-interfaces-blessed-d-widgets.iscreenoptions.md#forceunicode)
* [fullUnicode](api-interfaces-blessed-d-widgets.iscreenoptions.md#fullunicode)
* [grabKeys](api-interfaces-blessed-d-widgets.iscreenoptions.md#grabkeys)
* [height](api-interfaces-blessed-d-widgets.iscreenoptions.md#height)
* [hover](api-interfaces-blessed-d-widgets.iscreenoptions.md#hover)
* [ignoreDockContrast](api-interfaces-blessed-d-widgets.iscreenoptions.md#ignoredockcontrast)
* [ignoreLocked](api-interfaces-blessed-d-widgets.iscreenoptions.md#ignorelocked)
* [input](api-interfaces-blessed-d-widgets.iscreenoptions.md#input)
* [left](api-interfaces-blessed-d-widgets.iscreenoptions.md#left)
* [lockKeys](api-interfaces-blessed-d-widgets.iscreenoptions.md#lockkeys)
* [log](api-interfaces-blessed-d-widgets.iscreenoptions.md#log)
* [name](api-interfaces-blessed-d-widgets.iscreenoptions.md#name)
* [output](api-interfaces-blessed-d-widgets.iscreenoptions.md#output)
* [parent](api-interfaces-blessed-d-widgets.iscreenoptions.md#parent)
* [program](api-interfaces-blessed-d-widgets.iscreenoptions.md#program)
* [resizeTimeout](api-interfaces-blessed-d-widgets.iscreenoptions.md#resizetimeout)
* [right](api-interfaces-blessed-d-widgets.iscreenoptions.md#right)
* [rows](api-interfaces-blessed-d-widgets.iscreenoptions.md#rows)
* [screen](api-interfaces-blessed-d-widgets.iscreenoptions.md#screen)
* [sendFocus](api-interfaces-blessed-d-widgets.iscreenoptions.md#sendfocus)
* [smartCSR](api-interfaces-blessed-d-widgets.iscreenoptions.md#smartcsr)
* [tabSize](api-interfaces-blessed-d-widgets.iscreenoptions.md#tabsize)
* [terminal](api-interfaces-blessed-d-widgets.iscreenoptions.md#terminal)
* [title](api-interfaces-blessed-d-widgets.iscreenoptions.md#title)
* [top](api-interfaces-blessed-d-widgets.iscreenoptions.md#top)
* [tput](api-interfaces-blessed-d-widgets.iscreenoptions.md#tput)
* [useBCE](api-interfaces-blessed-d-widgets.iscreenoptions.md#usebce)
* [warnings](api-interfaces-blessed-d-widgets.iscreenoptions.md#warnings)
* [width](api-interfaces-blessed-d-widgets.iscreenoptions.md#width)

---

## Properties

<a id="abottom"></a>

### `<Optional>` abottom

**● abottom**: *[TPosition](api-modules-blessed-d-widgets.types.md#tposition)*

*Defined in [blessed.d.ts:2076](https://github.com/cancerberoSgx/accursed/blob/7a42e78/src/declarations/blessed.d.ts#L2076)*

Absolute bottom offset, always zero.

___
<a id="aleft"></a>

### `<Optional>` aleft

**● aleft**: *[TTopLeft](api-modules-blessed-d-widgets.types.md#ttopleft)*

*Defined in [blessed.d.ts:2066](https://github.com/cancerberoSgx/accursed/blob/7a42e78/src/declarations/blessed.d.ts#L2066)*

Absolute left offset, always zero.

___
<a id="aright"></a>

### `<Optional>` aright

**● aright**: *[TPosition](api-modules-blessed-d-widgets.types.md#tposition)*

*Defined in [blessed.d.ts:2071](https://github.com/cancerberoSgx/accursed/blob/7a42e78/src/declarations/blessed.d.ts#L2071)*

Absolute right offset, always zero.

___
<a id="atop"></a>

### `<Optional>` atop

**● atop**: *[TTopLeft](api-modules-blessed-d-widgets.types.md#ttopleft)*

*Defined in [blessed.d.ts:2061](https://github.com/cancerberoSgx/accursed/blob/7a42e78/src/declarations/blessed.d.ts#L2061)*

Absolute top offset, always zero.

___
<a id="autopadding"></a>

### `<Optional>` autoPadding

**● autoPadding**: *`undefined` \| `false` \| `true`*

*Defined in [blessed.d.ts:1925](https://github.com/cancerberoSgx/accursed/blob/7a42e78/src/declarations/blessed.d.ts#L1925)*

Automatically position child elements with border and padding in mind (NOTE: this is a recommended option. It may become default in the future).

___
<a id="bottom"></a>

### `<Optional>` bottom

**● bottom**: *[TPosition](api-modules-blessed-d-widgets.types.md#tposition)*

*Defined in [blessed.d.ts:2056](https://github.com/cancerberoSgx/accursed/blob/7a42e78/src/declarations/blessed.d.ts#L2056)*

Relative bottom offset, always zero.

___
<a id="children"></a>

### `<Optional>` children

**● children**: *[Node](api-classes-blessed-d-widgets.node.md)[]*

*Inherited from [INodeOptions](api-interfaces-blessed-d-widgets.inodeoptions.md).[children](api-interfaces-blessed-d-widgets.inodeoptions.md#children)*

*Defined in [blessed.d.ts:1642](https://github.com/cancerberoSgx/accursed/blob/7a42e78/src/declarations/blessed.d.ts#L1642)*

___
<a id="cols"></a>

### `<Optional>` cols

**● cols**: *`undefined` \| `number`*

*Defined in [blessed.d.ts:2031](https://github.com/cancerberoSgx/accursed/blob/7a42e78/src/declarations/blessed.d.ts#L2031)*

Same as screen.width.

___
<a id="cursor"></a>

### `<Optional>` cursor

**● cursor**: *[TCursor](api-interfaces-blessed-d-widgets.types.tcursor.md)*

*Defined in [blessed.d.ts:1927](https://github.com/cancerberoSgx/accursed/blob/7a42e78/src/declarations/blessed.d.ts#L1927)*

___
<a id="debug"></a>

### `<Optional>` debug

**● debug**: *`undefined` \| `false` \| `true`*

*Defined in [blessed.d.ts:1943](https://github.com/cancerberoSgx/accursed/blob/7a42e78/src/declarations/blessed.d.ts#L1943)*

Debug mode. Enables usage of the debug method. Also creates a debug console which will display when pressing F12. It will display all log and debug messages.

___
<a id="debuglog"></a>

### `<Optional>` debugLog

**● debugLog**: *[Log](api-classes-blessed-d-widgets.log.md)*

*Defined in [blessed.d.ts:1950](https://github.com/cancerberoSgx/accursed/blob/7a42e78/src/declarations/blessed.d.ts#L1950)*

Instance of the debug console that is enabled when calling debug options is actuve and key f12 is pressed. Useful to programmatically access it in case keys don't wonk.

*__internal__*: 

___
<a id="dockborders"></a>

### `<Optional>` dockBorders

**● dockBorders**: *`undefined` \| `false` \| `true`*

*Defined in [blessed.d.ts:1962](https://github.com/cancerberoSgx/accursed/blob/7a42e78/src/declarations/blessed.d.ts#L1962)*

Automatically "dock" borders with other elements instead of overlapping, depending on position (experimental). For example: These border-overlapped elements:

___
<a id="dump"></a>

### `<Optional>` dump

**● dump**: *`string` \| `boolean`*

*Defined in [blessed.d.ts:1937](https://github.com/cancerberoSgx/accursed/blob/7a42e78/src/declarations/blessed.d.ts#L1937)*

Dump all output and input to desired file. Can be used together with log option if set as a boolean.

___
<a id="fastcsr"></a>

### `<Optional>` fastCSR

**● fastCSR**: *`undefined` \| `false` \| `true`*

*Defined in [blessed.d.ts:1901](https://github.com/cancerberoSgx/accursed/blob/7a42e78/src/declarations/blessed.d.ts#L1901)*

Do CSR on any element within 20 cols of the screen edge on either side. Faster than smartCSR, but may cause flickering depending on what is on each side of the element.

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

**● focused**: *[BlessedElement](api-classes-blessed-d-widgets.blessedelement.md)*

*Defined in [blessed.d.ts:2016](https://github.com/cancerberoSgx/accursed/blob/7a42e78/src/declarations/blessed.d.ts#L2016)*

Top of the focus history stack.

___
<a id="forceunicode"></a>

### `<Optional>` forceUnicode

**● forceUnicode**: *`undefined` \| `false` \| `true`*

*Defined in [blessed.d.ts:1994](https://github.com/cancerberoSgx/accursed/blob/7a42e78/src/declarations/blessed.d.ts#L1994)*

Force blessed to use unicode even if it is not detected via terminfo, env variables, or windows code page. If value is true unicode is forced. If value is false non-unicode is forced (default: null).

___
<a id="fullunicode"></a>

### `<Optional>` fullUnicode

**● fullUnicode**: *`undefined` \| `false` \| `true`*

*Defined in [blessed.d.ts:1978](https://github.com/cancerberoSgx/accursed/blob/7a42e78/src/declarations/blessed.d.ts#L1978)*

Allow for rendering of East Asian double-width characters, utf-16 surrogate pairs, and unicode combining characters. This allows you to display text above the basic multilingual plane. This is behind an option because it may affect performance slightly negatively. Without this option enabled, all double-width, surrogate pair, and combining characters will be replaced by '??', '?', '' respectively. (NOTE: iTerm2 cannot display combining characters properly. Blessed simply removes them from an element's content if iTerm2 is detected).

___
<a id="grabkeys"></a>

### `<Optional>` grabKeys

**● grabKeys**: *`any`*

*Defined in [blessed.d.ts:2081](https://github.com/cancerberoSgx/accursed/blob/7a42e78/src/declarations/blessed.d.ts#L2081)*

Whether the focused element grabs all keypresses.

___
<a id="height"></a>

### `<Optional>` height

**● height**: *[TPosition](api-modules-blessed-d-widgets.types.md#tposition)*

*Defined in [blessed.d.ts:2026](https://github.com/cancerberoSgx/accursed/blob/7a42e78/src/declarations/blessed.d.ts#L2026)*

Height of the screen (same as program.rows).

___
<a id="hover"></a>

### `<Optional>` hover

**● hover**: *`any`*

*Defined in [blessed.d.ts:2091](https://github.com/cancerberoSgx/accursed/blob/7a42e78/src/declarations/blessed.d.ts#L2091)*

The currently hovered element. Only set if mouse events are bound.

___
<a id="ignoredockcontrast"></a>

### `<Optional>` ignoreDockContrast

**● ignoreDockContrast**: *`undefined` \| `false` \| `true`*

*Defined in [blessed.d.ts:1968](https://github.com/cancerberoSgx/accursed/blob/7a42e78/src/declarations/blessed.d.ts#L1968)*

Normally, dockable borders will not dock if the colors or attributes are different. This option will allow them to dock regardless. It may produce some odd looking multi-colored borders though.

___
<a id="ignorelocked"></a>

### `<Optional>` ignoreLocked

**● ignoreLocked**: *`undefined` \| `false` \| `true`*

*Defined in [blessed.d.ts:1956](https://github.com/cancerberoSgx/accursed/blob/7a42e78/src/declarations/blessed.d.ts#L1956)*

Array of keys in their full format (e.g. C-c) to ignore when keys are locked or grabbed. Useful for creating a key that will always exit no matter whether the keys are locked.

___
<a id="input"></a>

### `<Optional>` input

**● input**: *`stream.Writable`*

*Defined in [blessed.d.ts:2000](https://github.com/cancerberoSgx/accursed/blob/7a42e78/src/declarations/blessed.d.ts#L2000)*

Input and output streams. process.stdin/process.stdout by default, however, it could be a net.Socket if you want to make a program that runs over telnet or something of that nature.

___
<a id="left"></a>

### `<Optional>` left

**● left**: *[TTopLeft](api-modules-blessed-d-widgets.types.md#ttopleft)*

*Defined in [blessed.d.ts:2046](https://github.com/cancerberoSgx/accursed/blob/7a42e78/src/declarations/blessed.d.ts#L2046)*

Relative left offset, always zero.

___
<a id="lockkeys"></a>

### `<Optional>` lockKeys

**● lockKeys**: *`undefined` \| `false` \| `true`*

*Defined in [blessed.d.ts:2086](https://github.com/cancerberoSgx/accursed/blob/7a42e78/src/declarations/blessed.d.ts#L2086)*

Prevent keypresses from being received by any element.

___
<a id="log"></a>

### `<Optional>` log

**● log**: *`undefined` \| `string`*

*Defined in [blessed.d.ts:1932](https://github.com/cancerberoSgx/accursed/blob/7a42e78/src/declarations/blessed.d.ts#L1932)*

Create a log file. See log method.

___
<a id="name"></a>

### `<Optional>` name

**● name**: *`undefined` \| `string`*

*Inherited from [INodeOptions](api-interfaces-blessed-d-widgets.inodeoptions.md).[name](api-interfaces-blessed-d-widgets.inodeoptions.md#name)*

*Defined in [blessed.d.ts:1639](https://github.com/cancerberoSgx/accursed/blob/7a42e78/src/declarations/blessed.d.ts#L1639)*

___
<a id="output"></a>

### `<Optional>` output

**● output**: *`stream.Readable`*

*Defined in [blessed.d.ts:2006](https://github.com/cancerberoSgx/accursed/blob/7a42e78/src/declarations/blessed.d.ts#L2006)*

Input and output streams. process.stdin/process.stdout by default, however, it could be a net.Socket if you want to make a program that runs over telnet or something of that nature.

___
<a id="parent"></a>

### `<Optional>` parent

**● parent**: *[Node](api-classes-blessed-d-widgets.node.md)*

*Inherited from [INodeOptions](api-interfaces-blessed-d-widgets.inodeoptions.md).[parent](api-interfaces-blessed-d-widgets.inodeoptions.md#parent)*

*Defined in [blessed.d.ts:1641](https://github.com/cancerberoSgx/accursed/blob/7a42e78/src/declarations/blessed.d.ts#L1641)*

___
<a id="program"></a>

### `<Optional>` program

**● program**: *[BlessedProgram](api-classes-blessed-d-blessedprogram.md)*

*Defined in [blessed.d.ts:1888](https://github.com/cancerberoSgx/accursed/blob/7a42e78/src/declarations/blessed.d.ts#L1888)*

The blessed Program to be associated with. Will be automatically instantiated if none is provided.

___
<a id="resizetimeout"></a>

### `<Optional>` resizeTimeout

**● resizeTimeout**: *`undefined` \| `number`*

*Defined in [blessed.d.ts:1914](https://github.com/cancerberoSgx/accursed/blob/7a42e78/src/declarations/blessed.d.ts#L1914)*

Amount of time (in ms) to redraw the screen after the terminal is resized (Default: 300).

___
<a id="right"></a>

### `<Optional>` right

**● right**: *[TPosition](api-modules-blessed-d-widgets.types.md#tposition)*

*Defined in [blessed.d.ts:2051](https://github.com/cancerberoSgx/accursed/blob/7a42e78/src/declarations/blessed.d.ts#L2051)*

Relative right offset, always zero.

___
<a id="rows"></a>

### `<Optional>` rows

**● rows**: *`undefined` \| `number`*

*Defined in [blessed.d.ts:2036](https://github.com/cancerberoSgx/accursed/blob/7a42e78/src/declarations/blessed.d.ts#L2036)*

Same as screen.height.

___
<a id="screen"></a>

### `<Optional>` screen

**● screen**: *[Screen](api-classes-blessed-d-widgets.screen.md)*

*Inherited from [INodeOptions](api-interfaces-blessed-d-widgets.inodeoptions.md).[screen](api-interfaces-blessed-d-widgets.inodeoptions.md#screen)*

*Defined in [blessed.d.ts:1640](https://github.com/cancerberoSgx/accursed/blob/7a42e78/src/declarations/blessed.d.ts#L1640)*

___
<a id="sendfocus"></a>

### `<Optional>` sendFocus

**● sendFocus**: *`undefined` \| `false` \| `true`*

*Defined in [blessed.d.ts:1983](https://github.com/cancerberoSgx/accursed/blob/7a42e78/src/declarations/blessed.d.ts#L1983)*

Send focus events after mouse is enabled.

___
<a id="smartcsr"></a>

### `<Optional>` smartCSR

**● smartCSR**: *`undefined` \| `false` \| `true`*

*Defined in [blessed.d.ts:1895](https://github.com/cancerberoSgx/accursed/blob/7a42e78/src/declarations/blessed.d.ts#L1895)*

Attempt to perform CSR optimization on all possible elements (not just full-width ones, elements with uniform cells to their sides). This is known to cause flickering with elements that are not full-width, however, it is more optimal for terminal rendering.

___
<a id="tabsize"></a>

### `<Optional>` tabSize

**● tabSize**: *`undefined` \| `number`*

*Defined in [blessed.d.ts:1919](https://github.com/cancerberoSgx/accursed/blob/7a42e78/src/declarations/blessed.d.ts#L1919)*

The width of tabs within an element's content.

___
<a id="terminal"></a>

### `<Optional>` terminal

**● terminal**: *`undefined` \| `string`*

*Defined in [blessed.d.ts:2096](https://github.com/cancerberoSgx/accursed/blob/7a42e78/src/declarations/blessed.d.ts#L2096)*

Set or get terminal name. Set calls screen.setTerminal() internally.

___
<a id="title"></a>

### `<Optional>` title

**● title**: *`undefined` \| `string`*

*Defined in [blessed.d.ts:2101](https://github.com/cancerberoSgx/accursed/blob/7a42e78/src/declarations/blessed.d.ts#L2101)*

Set or get window title.

___
<a id="top"></a>

### `<Optional>` top

**● top**: *[TTopLeft](api-modules-blessed-d-widgets.types.md#ttopleft)*

*Defined in [blessed.d.ts:2041](https://github.com/cancerberoSgx/accursed/blob/7a42e78/src/declarations/blessed.d.ts#L2041)*

Relative top offset, always zero.

___
<a id="tput"></a>

### `<Optional>` tput

**● tput**: *[Tput](api-classes-blessed-d-widgets.tput.md)*

*Defined in [blessed.d.ts:2011](https://github.com/cancerberoSgx/accursed/blob/7a42e78/src/declarations/blessed.d.ts#L2011)*

The blessed Tput object (only available if you passed tput: true to the Program constructor.)

___
<a id="usebce"></a>

### `<Optional>` useBCE

**● useBCE**: *`undefined` \| `false` \| `true`*

*Defined in [blessed.d.ts:1909](https://github.com/cancerberoSgx/accursed/blob/7a42e78/src/declarations/blessed.d.ts#L1909)*

Attempt to perform back\_color\_erase optimizations for terminals that support it. It will also work with terminals that don't support it, but only on lines with the default background color. As it stands with the current implementation, it's uncertain how much terminal performance this adds at the cost of overhead within node.

___
<a id="warnings"></a>

### `<Optional>` warnings

**● warnings**: *`undefined` \| `false` \| `true`*

*Defined in [blessed.d.ts:1988](https://github.com/cancerberoSgx/accursed/blob/7a42e78/src/declarations/blessed.d.ts#L1988)*

Display warnings (such as the output not being a TTY, similar to ncurses).

___
<a id="width"></a>

### `<Optional>` width

**● width**: *[TPosition](api-modules-blessed-d-widgets.types.md#tposition)*

*Defined in [blessed.d.ts:2021](https://github.com/cancerberoSgx/accursed/blob/7a42e78/src/declarations/blessed.d.ts#L2021)*

Width of the screen (same as program.cols).

___

