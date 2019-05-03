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

*Defined in [blessed.d.ts:2064](https://github.com/cancerberoSgx/accursed/blob/f66c8ce/src/declarations/blessed.d.ts#L2064)*

Absolute bottom offset, always zero.

___
<a id="aleft"></a>

### `<Optional>` aleft

**● aleft**: *[TTopLeft](api-modules-blessed-d-widgets.types.md#ttopleft)*

*Defined in [blessed.d.ts:2054](https://github.com/cancerberoSgx/accursed/blob/f66c8ce/src/declarations/blessed.d.ts#L2054)*

Absolute left offset, always zero.

___
<a id="aright"></a>

### `<Optional>` aright

**● aright**: *[TPosition](api-modules-blessed-d-widgets.types.md#tposition)*

*Defined in [blessed.d.ts:2059](https://github.com/cancerberoSgx/accursed/blob/f66c8ce/src/declarations/blessed.d.ts#L2059)*

Absolute right offset, always zero.

___
<a id="atop"></a>

### `<Optional>` atop

**● atop**: *[TTopLeft](api-modules-blessed-d-widgets.types.md#ttopleft)*

*Defined in [blessed.d.ts:2049](https://github.com/cancerberoSgx/accursed/blob/f66c8ce/src/declarations/blessed.d.ts#L2049)*

Absolute top offset, always zero.

___
<a id="autopadding"></a>

### `<Optional>` autoPadding

**● autoPadding**: *`boolean`*

*Defined in [blessed.d.ts:1913](https://github.com/cancerberoSgx/accursed/blob/f66c8ce/src/declarations/blessed.d.ts#L1913)*

Automatically position child elements with border and padding in mind (NOTE: this is a recommended option. It may become default in the future).

___
<a id="bottom"></a>

### `<Optional>` bottom

**● bottom**: *[TPosition](api-modules-blessed-d-widgets.types.md#tposition)*

*Defined in [blessed.d.ts:2044](https://github.com/cancerberoSgx/accursed/blob/f66c8ce/src/declarations/blessed.d.ts#L2044)*

Relative bottom offset, always zero.

___
<a id="children"></a>

### `<Optional>` children

**● children**: *[Node](api-classes-blessed-d-widgets.node.md)[]*

*Inherited from [INodeOptions](api-interfaces-blessed-d-widgets.inodeoptions.md).[children](api-interfaces-blessed-d-widgets.inodeoptions.md#children)*

*Defined in [blessed.d.ts:1630](https://github.com/cancerberoSgx/accursed/blob/f66c8ce/src/declarations/blessed.d.ts#L1630)*

___
<a id="cols"></a>

### `<Optional>` cols

**● cols**: *`number`*

*Defined in [blessed.d.ts:2019](https://github.com/cancerberoSgx/accursed/blob/f66c8ce/src/declarations/blessed.d.ts#L2019)*

Same as screen.width.

___
<a id="cursor"></a>

### `<Optional>` cursor

**● cursor**: *[TCursor](api-interfaces-blessed-d-widgets.types.tcursor.md)*

*Defined in [blessed.d.ts:1915](https://github.com/cancerberoSgx/accursed/blob/f66c8ce/src/declarations/blessed.d.ts#L1915)*

___
<a id="debug"></a>

### `<Optional>` debug

**● debug**: *`boolean`*

*Defined in [blessed.d.ts:1931](https://github.com/cancerberoSgx/accursed/blob/f66c8ce/src/declarations/blessed.d.ts#L1931)*

Debug mode. Enables usage of the debug method. Also creates a debug console which will display when pressing F12. It will display all log and debug messages.

___
<a id="debuglog"></a>

### `<Optional>` debugLog

**● debugLog**: *[Log](api-classes-blessed-d-widgets.log.md)*

*Defined in [blessed.d.ts:1938](https://github.com/cancerberoSgx/accursed/blob/f66c8ce/src/declarations/blessed.d.ts#L1938)*

Instance of the debug console that is enabled when calling debug options is actuve and key f12 is pressed. Useful to programmatically access it in case keys don't wonk.

*__internal__*: 

___
<a id="dockborders"></a>

### `<Optional>` dockBorders

**● dockBorders**: *`boolean`*

*Defined in [blessed.d.ts:1950](https://github.com/cancerberoSgx/accursed/blob/f66c8ce/src/declarations/blessed.d.ts#L1950)*

Automatically "dock" borders with other elements instead of overlapping, depending on position (experimental). For example: These border-overlapped elements:

___
<a id="dump"></a>

### `<Optional>` dump

**● dump**: *`string` \| `boolean`*

*Defined in [blessed.d.ts:1925](https://github.com/cancerberoSgx/accursed/blob/f66c8ce/src/declarations/blessed.d.ts#L1925)*

Dump all output and input to desired file. Can be used together with log option if set as a boolean.

___
<a id="fastcsr"></a>

### `<Optional>` fastCSR

**● fastCSR**: *`boolean`*

*Defined in [blessed.d.ts:1889](https://github.com/cancerberoSgx/accursed/blob/f66c8ce/src/declarations/blessed.d.ts#L1889)*

Do CSR on any element within 20 cols of the screen edge on either side. Faster than smartCSR, but may cause flickering depending on what is on each side of the element.

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

**● focused**: *[BlessedElement](api-classes-blessed-d-widgets.blessedelement.md)*

*Defined in [blessed.d.ts:2004](https://github.com/cancerberoSgx/accursed/blob/f66c8ce/src/declarations/blessed.d.ts#L2004)*

Top of the focus history stack.

___
<a id="forceunicode"></a>

### `<Optional>` forceUnicode

**● forceUnicode**: *`boolean`*

*Defined in [blessed.d.ts:1982](https://github.com/cancerberoSgx/accursed/blob/f66c8ce/src/declarations/blessed.d.ts#L1982)*

Force blessed to use unicode even if it is not detected via terminfo, env variables, or windows code page. If value is true unicode is forced. If value is false non-unicode is forced (default: null).

___
<a id="fullunicode"></a>

### `<Optional>` fullUnicode

**● fullUnicode**: *`boolean`*

*Defined in [blessed.d.ts:1966](https://github.com/cancerberoSgx/accursed/blob/f66c8ce/src/declarations/blessed.d.ts#L1966)*

Allow for rendering of East Asian double-width characters, utf-16 surrogate pairs, and unicode combining characters. This allows you to display text above the basic multilingual plane. This is behind an option because it may affect performance slightly negatively. Without this option enabled, all double-width, surrogate pair, and combining characters will be replaced by '??', '?', '' respectively. (NOTE: iTerm2 cannot display combining characters properly. Blessed simply removes them from an element's content if iTerm2 is detected).

___
<a id="grabkeys"></a>

### `<Optional>` grabKeys

**● grabKeys**: *`any`*

*Defined in [blessed.d.ts:2069](https://github.com/cancerberoSgx/accursed/blob/f66c8ce/src/declarations/blessed.d.ts#L2069)*

Whether the focused element grabs all keypresses.

___
<a id="height"></a>

### `<Optional>` height

**● height**: *`number`*

*Defined in [blessed.d.ts:2014](https://github.com/cancerberoSgx/accursed/blob/f66c8ce/src/declarations/blessed.d.ts#L2014)*

Height of the screen (same as program.rows).

___
<a id="hover"></a>

### `<Optional>` hover

**● hover**: *`any`*

*Defined in [blessed.d.ts:2079](https://github.com/cancerberoSgx/accursed/blob/f66c8ce/src/declarations/blessed.d.ts#L2079)*

The currently hovered element. Only set if mouse events are bound.

___
<a id="ignoredockcontrast"></a>

### `<Optional>` ignoreDockContrast

**● ignoreDockContrast**: *`boolean`*

*Defined in [blessed.d.ts:1956](https://github.com/cancerberoSgx/accursed/blob/f66c8ce/src/declarations/blessed.d.ts#L1956)*

Normally, dockable borders will not dock if the colors or attributes are different. This option will allow them to dock regardless. It may produce some odd looking multi-colored borders though.

___
<a id="ignorelocked"></a>

### `<Optional>` ignoreLocked

**● ignoreLocked**: *`boolean`*

*Defined in [blessed.d.ts:1944](https://github.com/cancerberoSgx/accursed/blob/f66c8ce/src/declarations/blessed.d.ts#L1944)*

Array of keys in their full format (e.g. C-c) to ignore when keys are locked or grabbed. Useful for creating a key that will always exit no matter whether the keys are locked.

___
<a id="input"></a>

### `<Optional>` input

**● input**: *`stream.Writable`*

*Defined in [blessed.d.ts:1988](https://github.com/cancerberoSgx/accursed/blob/f66c8ce/src/declarations/blessed.d.ts#L1988)*

Input and output streams. process.stdin/process.stdout by default, however, it could be a net.Socket if you want to make a program that runs over telnet or something of that nature.

___
<a id="left"></a>

### `<Optional>` left

**● left**: *[TTopLeft](api-modules-blessed-d-widgets.types.md#ttopleft)*

*Defined in [blessed.d.ts:2034](https://github.com/cancerberoSgx/accursed/blob/f66c8ce/src/declarations/blessed.d.ts#L2034)*

Relative left offset, always zero.

___
<a id="lockkeys"></a>

### `<Optional>` lockKeys

**● lockKeys**: *`boolean`*

*Defined in [blessed.d.ts:2074](https://github.com/cancerberoSgx/accursed/blob/f66c8ce/src/declarations/blessed.d.ts#L2074)*

Prevent keypresses from being received by any element.

___
<a id="log"></a>

### `<Optional>` log

**● log**: *`string`*

*Defined in [blessed.d.ts:1920](https://github.com/cancerberoSgx/accursed/blob/f66c8ce/src/declarations/blessed.d.ts#L1920)*

Create a log file. See log method.

___
<a id="name"></a>

### `<Optional>` name

**● name**: *`string`*

*Inherited from [INodeOptions](api-interfaces-blessed-d-widgets.inodeoptions.md).[name](api-interfaces-blessed-d-widgets.inodeoptions.md#name)*

*Defined in [blessed.d.ts:1627](https://github.com/cancerberoSgx/accursed/blob/f66c8ce/src/declarations/blessed.d.ts#L1627)*

___
<a id="output"></a>

### `<Optional>` output

**● output**: *`stream.Readable`*

*Defined in [blessed.d.ts:1994](https://github.com/cancerberoSgx/accursed/blob/f66c8ce/src/declarations/blessed.d.ts#L1994)*

Input and output streams. process.stdin/process.stdout by default, however, it could be a net.Socket if you want to make a program that runs over telnet or something of that nature.

___
<a id="parent"></a>

### `<Optional>` parent

**● parent**: *[Node](api-classes-blessed-d-widgets.node.md)*

*Inherited from [INodeOptions](api-interfaces-blessed-d-widgets.inodeoptions.md).[parent](api-interfaces-blessed-d-widgets.inodeoptions.md#parent)*

*Defined in [blessed.d.ts:1629](https://github.com/cancerberoSgx/accursed/blob/f66c8ce/src/declarations/blessed.d.ts#L1629)*

___
<a id="program"></a>

### `<Optional>` program

**● program**: *[BlessedProgram](api-classes-blessed-d-blessedprogram.md)*

*Defined in [blessed.d.ts:1876](https://github.com/cancerberoSgx/accursed/blob/f66c8ce/src/declarations/blessed.d.ts#L1876)*

The blessed Program to be associated with. Will be automatically instantiated if none is provided.

___
<a id="resizetimeout"></a>

### `<Optional>` resizeTimeout

**● resizeTimeout**: *`number`*

*Defined in [blessed.d.ts:1902](https://github.com/cancerberoSgx/accursed/blob/f66c8ce/src/declarations/blessed.d.ts#L1902)*

Amount of time (in ms) to redraw the screen after the terminal is resized (Default: 300).

___
<a id="right"></a>

### `<Optional>` right

**● right**: *[TPosition](api-modules-blessed-d-widgets.types.md#tposition)*

*Defined in [blessed.d.ts:2039](https://github.com/cancerberoSgx/accursed/blob/f66c8ce/src/declarations/blessed.d.ts#L2039)*

Relative right offset, always zero.

___
<a id="rows"></a>

### `<Optional>` rows

**● rows**: *`number`*

*Defined in [blessed.d.ts:2024](https://github.com/cancerberoSgx/accursed/blob/f66c8ce/src/declarations/blessed.d.ts#L2024)*

Same as screen.height.

___
<a id="screen"></a>

### `<Optional>` screen

**● screen**: *[Screen](api-classes-blessed-d-widgets.screen.md)*

*Inherited from [INodeOptions](api-interfaces-blessed-d-widgets.inodeoptions.md).[screen](api-interfaces-blessed-d-widgets.inodeoptions.md#screen)*

*Defined in [blessed.d.ts:1628](https://github.com/cancerberoSgx/accursed/blob/f66c8ce/src/declarations/blessed.d.ts#L1628)*

___
<a id="sendfocus"></a>

### `<Optional>` sendFocus

**● sendFocus**: *`boolean`*

*Defined in [blessed.d.ts:1971](https://github.com/cancerberoSgx/accursed/blob/f66c8ce/src/declarations/blessed.d.ts#L1971)*

Send focus events after mouse is enabled.

___
<a id="smartcsr"></a>

### `<Optional>` smartCSR

**● smartCSR**: *`boolean`*

*Defined in [blessed.d.ts:1883](https://github.com/cancerberoSgx/accursed/blob/f66c8ce/src/declarations/blessed.d.ts#L1883)*

Attempt to perform CSR optimization on all possible elements (not just full-width ones, elements with uniform cells to their sides). This is known to cause flickering with elements that are not full-width, however, it is more optimal for terminal rendering.

___
<a id="tabsize"></a>

### `<Optional>` tabSize

**● tabSize**: *`number`*

*Defined in [blessed.d.ts:1907](https://github.com/cancerberoSgx/accursed/blob/f66c8ce/src/declarations/blessed.d.ts#L1907)*

The width of tabs within an element's content.

___
<a id="terminal"></a>

### `<Optional>` terminal

**● terminal**: *`string`*

*Defined in [blessed.d.ts:2084](https://github.com/cancerberoSgx/accursed/blob/f66c8ce/src/declarations/blessed.d.ts#L2084)*

Set or get terminal name. Set calls screen.setTerminal() internally.

___
<a id="title"></a>

### `<Optional>` title

**● title**: *`string`*

*Defined in [blessed.d.ts:2089](https://github.com/cancerberoSgx/accursed/blob/f66c8ce/src/declarations/blessed.d.ts#L2089)*

Set or get window title.

___
<a id="top"></a>

### `<Optional>` top

**● top**: *[TTopLeft](api-modules-blessed-d-widgets.types.md#ttopleft)*

*Defined in [blessed.d.ts:2029](https://github.com/cancerberoSgx/accursed/blob/f66c8ce/src/declarations/blessed.d.ts#L2029)*

Relative top offset, always zero.

___
<a id="tput"></a>

### `<Optional>` tput

**● tput**: *[Tput](api-classes-blessed-d-widgets.tput.md) \| `boolean`*

*Defined in [blessed.d.ts:1999](https://github.com/cancerberoSgx/accursed/blob/f66c8ce/src/declarations/blessed.d.ts#L1999)*

The blessed Tput object (only available if you passed tput: true to the Program constructor.)

___
<a id="usebce"></a>

### `<Optional>` useBCE

**● useBCE**: *`boolean`*

*Defined in [blessed.d.ts:1897](https://github.com/cancerberoSgx/accursed/blob/f66c8ce/src/declarations/blessed.d.ts#L1897)*

Attempt to perform back\_color\_erase optimizations for terminals that support it. It will also work with terminals that don't support it, but only on lines with the default background color. As it stands with the current implementation, it's uncertain how much terminal performance this adds at the cost of overhead within node.

___
<a id="warnings"></a>

### `<Optional>` warnings

**● warnings**: *`boolean`*

*Defined in [blessed.d.ts:1976](https://github.com/cancerberoSgx/accursed/blob/f66c8ce/src/declarations/blessed.d.ts#L1976)*

Display warnings (such as the output not being a TTY, similar to ncurses).

___
<a id="width"></a>

### `<Optional>` width

**● width**: *`number`*

*Defined in [blessed.d.ts:2009](https://github.com/cancerberoSgx/accursed/blob/f66c8ce/src/declarations/blessed.d.ts#L2009)*

Width of the screen (same as program.cols).

___

