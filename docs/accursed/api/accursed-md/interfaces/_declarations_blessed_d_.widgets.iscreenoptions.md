[accursed](../README.md) > ["declarations/blessed.d"](../modules/_declarations_blessed_d_.md) > [Widgets](../modules/_declarations_blessed_d_.widgets.md) > [IScreenOptions](../interfaces/_declarations_blessed_d_.widgets.iscreenoptions.md)

# Interface: IScreenOptions

## Hierarchy

↳  [INodeOptions](_declarations_blessed_d_.widgets.inodeoptions.md)

**↳ IScreenOptions**

## Index

### Properties

* [abottom](_declarations_blessed_d_.widgets.iscreenoptions.md#abottom)
* [aleft](_declarations_blessed_d_.widgets.iscreenoptions.md#aleft)
* [aright](_declarations_blessed_d_.widgets.iscreenoptions.md#aright)
* [atop](_declarations_blessed_d_.widgets.iscreenoptions.md#atop)
* [autoPadding](_declarations_blessed_d_.widgets.iscreenoptions.md#autopadding)
* [bottom](_declarations_blessed_d_.widgets.iscreenoptions.md#bottom)
* [children](_declarations_blessed_d_.widgets.iscreenoptions.md#children)
* [cols](_declarations_blessed_d_.widgets.iscreenoptions.md#cols)
* [cursor](_declarations_blessed_d_.widgets.iscreenoptions.md#cursor)
* [debug](_declarations_blessed_d_.widgets.iscreenoptions.md#debug)
* [debugLog](_declarations_blessed_d_.widgets.iscreenoptions.md#debuglog)
* [dockBorders](_declarations_blessed_d_.widgets.iscreenoptions.md#dockborders)
* [dump](_declarations_blessed_d_.widgets.iscreenoptions.md#dump)
* [fastCSR](_declarations_blessed_d_.widgets.iscreenoptions.md#fastcsr)
* [focusable](_declarations_blessed_d_.widgets.iscreenoptions.md#focusable)
* [focused](_declarations_blessed_d_.widgets.iscreenoptions.md#focused)
* [forceUnicode](_declarations_blessed_d_.widgets.iscreenoptions.md#forceunicode)
* [fullUnicode](_declarations_blessed_d_.widgets.iscreenoptions.md#fullunicode)
* [grabKeys](_declarations_blessed_d_.widgets.iscreenoptions.md#grabkeys)
* [height](_declarations_blessed_d_.widgets.iscreenoptions.md#height)
* [hover](_declarations_blessed_d_.widgets.iscreenoptions.md#hover)
* [ignoreDockContrast](_declarations_blessed_d_.widgets.iscreenoptions.md#ignoredockcontrast)
* [ignoreLocked](_declarations_blessed_d_.widgets.iscreenoptions.md#ignorelocked)
* [input](_declarations_blessed_d_.widgets.iscreenoptions.md#input)
* [left](_declarations_blessed_d_.widgets.iscreenoptions.md#left)
* [lockKeys](_declarations_blessed_d_.widgets.iscreenoptions.md#lockkeys)
* [log](_declarations_blessed_d_.widgets.iscreenoptions.md#log)
* [name](_declarations_blessed_d_.widgets.iscreenoptions.md#name)
* [output](_declarations_blessed_d_.widgets.iscreenoptions.md#output)
* [parent](_declarations_blessed_d_.widgets.iscreenoptions.md#parent)
* [program](_declarations_blessed_d_.widgets.iscreenoptions.md#program)
* [resizeTimeout](_declarations_blessed_d_.widgets.iscreenoptions.md#resizetimeout)
* [right](_declarations_blessed_d_.widgets.iscreenoptions.md#right)
* [rows](_declarations_blessed_d_.widgets.iscreenoptions.md#rows)
* [screen](_declarations_blessed_d_.widgets.iscreenoptions.md#screen)
* [sendFocus](_declarations_blessed_d_.widgets.iscreenoptions.md#sendfocus)
* [smartCSR](_declarations_blessed_d_.widgets.iscreenoptions.md#smartcsr)
* [tabSize](_declarations_blessed_d_.widgets.iscreenoptions.md#tabsize)
* [terminal](_declarations_blessed_d_.widgets.iscreenoptions.md#terminal)
* [title](_declarations_blessed_d_.widgets.iscreenoptions.md#title)
* [top](_declarations_blessed_d_.widgets.iscreenoptions.md#top)
* [tput](_declarations_blessed_d_.widgets.iscreenoptions.md#tput)
* [useBCE](_declarations_blessed_d_.widgets.iscreenoptions.md#usebce)
* [warnings](_declarations_blessed_d_.widgets.iscreenoptions.md#warnings)
* [width](_declarations_blessed_d_.widgets.iscreenoptions.md#width)

---

## Properties

<a id="abottom"></a>

### `<Optional>` abottom

**● abottom**: *[TPosition](../modules/_declarations_blessed_d_.widgets.types.md#tposition)*

*Defined in [declarations/blessed.d.ts:787](https://github.com/cancerberoSgx/accursed/blob/978b980/src/declarations/blessed.d.ts#L787)*

Absolute bottom offset, always zero.

___
<a id="aleft"></a>

### `<Optional>` aleft

**● aleft**: *[TTopLeft](../modules/_declarations_blessed_d_.widgets.types.md#ttopleft)*

*Defined in [declarations/blessed.d.ts:777](https://github.com/cancerberoSgx/accursed/blob/978b980/src/declarations/blessed.d.ts#L777)*

Absolute left offset, always zero.

___
<a id="aright"></a>

### `<Optional>` aright

**● aright**: *[TPosition](../modules/_declarations_blessed_d_.widgets.types.md#tposition)*

*Defined in [declarations/blessed.d.ts:782](https://github.com/cancerberoSgx/accursed/blob/978b980/src/declarations/blessed.d.ts#L782)*

Absolute right offset, always zero.

___
<a id="atop"></a>

### `<Optional>` atop

**● atop**: *[TTopLeft](../modules/_declarations_blessed_d_.widgets.types.md#ttopleft)*

*Defined in [declarations/blessed.d.ts:772](https://github.com/cancerberoSgx/accursed/blob/978b980/src/declarations/blessed.d.ts#L772)*

Absolute top offset, always zero.

___
<a id="autopadding"></a>

### `<Optional>` autoPadding

**● autoPadding**: *`boolean`*

*Defined in [declarations/blessed.d.ts:636](https://github.com/cancerberoSgx/accursed/blob/978b980/src/declarations/blessed.d.ts#L636)*

Automatically position child elements with border and padding in mind (NOTE: this is a recommended option. It may become default in the future).

___
<a id="bottom"></a>

### `<Optional>` bottom

**● bottom**: *[TPosition](../modules/_declarations_blessed_d_.widgets.types.md#tposition)*

*Defined in [declarations/blessed.d.ts:767](https://github.com/cancerberoSgx/accursed/blob/978b980/src/declarations/blessed.d.ts#L767)*

Relative bottom offset, always zero.

___
<a id="children"></a>

### `<Optional>` children

**● children**: *[Node](../classes/_declarations_blessed_d_.widgets.node.md)[]*

*Inherited from [INodeOptions](_declarations_blessed_d_.widgets.inodeoptions.md).[children](_declarations_blessed_d_.widgets.inodeoptions.md#children)*

*Defined in [declarations/blessed.d.ts:302](https://github.com/cancerberoSgx/accursed/blob/978b980/src/declarations/blessed.d.ts#L302)*

___
<a id="cols"></a>

### `<Optional>` cols

**● cols**: *`number`*

*Defined in [declarations/blessed.d.ts:742](https://github.com/cancerberoSgx/accursed/blob/978b980/src/declarations/blessed.d.ts#L742)*

Same as screen.width.

___
<a id="cursor"></a>

### `<Optional>` cursor

**● cursor**: *[TCursor](_declarations_blessed_d_.widgets.types.tcursor.md)*

*Defined in [declarations/blessed.d.ts:638](https://github.com/cancerberoSgx/accursed/blob/978b980/src/declarations/blessed.d.ts#L638)*

___
<a id="debug"></a>

### `<Optional>` debug

**● debug**: *`boolean`*

*Defined in [declarations/blessed.d.ts:654](https://github.com/cancerberoSgx/accursed/blob/978b980/src/declarations/blessed.d.ts#L654)*

Debug mode. Enables usage of the debug method. Also creates a debug console which will display when pressing F12. It will display all log and debug messages.

___
<a id="debuglog"></a>

### `<Optional>` debugLog

**● debugLog**: *[Log](../classes/_declarations_blessed_d_.widgets.log.md)*

*Defined in [declarations/blessed.d.ts:661](https://github.com/cancerberoSgx/accursed/blob/978b980/src/declarations/blessed.d.ts#L661)*

Instance of the debug console that is enabled when calling debug options is actuve and key f12 is pressed. Useful to programmatically access it in case keys don't wonk.

*__internal__*: 

___
<a id="dockborders"></a>

### `<Optional>` dockBorders

**● dockBorders**: *`boolean`*

*Defined in [declarations/blessed.d.ts:673](https://github.com/cancerberoSgx/accursed/blob/978b980/src/declarations/blessed.d.ts#L673)*

Automatically "dock" borders with other elements instead of overlapping, depending on position (experimental). For example: These border-overlapped elements:

___
<a id="dump"></a>

### `<Optional>` dump

**● dump**: *`string` \| `boolean`*

*Defined in [declarations/blessed.d.ts:648](https://github.com/cancerberoSgx/accursed/blob/978b980/src/declarations/blessed.d.ts#L648)*

Dump all output and input to desired file. Can be used together with log option if set as a boolean.

___
<a id="fastcsr"></a>

### `<Optional>` fastCSR

**● fastCSR**: *`boolean`*

*Defined in [declarations/blessed.d.ts:612](https://github.com/cancerberoSgx/accursed/blob/978b980/src/declarations/blessed.d.ts#L612)*

Do CSR on any element within 20 cols of the screen edge on either side. Faster than smartCSR, but may cause flickering depending on what is on each side of the element.

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

**● focused**: *[BlessedElement](../classes/_declarations_blessed_d_.widgets.blessedelement.md)*

*Defined in [declarations/blessed.d.ts:727](https://github.com/cancerberoSgx/accursed/blob/978b980/src/declarations/blessed.d.ts#L727)*

Top of the focus history stack.

___
<a id="forceunicode"></a>

### `<Optional>` forceUnicode

**● forceUnicode**: *`boolean`*

*Defined in [declarations/blessed.d.ts:705](https://github.com/cancerberoSgx/accursed/blob/978b980/src/declarations/blessed.d.ts#L705)*

Force blessed to use unicode even if it is not detected via terminfo, env variables, or windows code page. If value is true unicode is forced. If value is false non-unicode is forced (default: null).

___
<a id="fullunicode"></a>

### `<Optional>` fullUnicode

**● fullUnicode**: *`boolean`*

*Defined in [declarations/blessed.d.ts:689](https://github.com/cancerberoSgx/accursed/blob/978b980/src/declarations/blessed.d.ts#L689)*

Allow for rendering of East Asian double-width characters, utf-16 surrogate pairs, and unicode combining characters. This allows you to display text above the basic multilingual plane. This is behind an option because it may affect performance slightly negatively. Without this option enabled, all double-width, surrogate pair, and combining characters will be replaced by '??', '?', '' respectively. (NOTE: iTerm2 cannot display combining characters properly. Blessed simply removes them from an element's content if iTerm2 is detected).

___
<a id="grabkeys"></a>

### `<Optional>` grabKeys

**● grabKeys**: *`any`*

*Defined in [declarations/blessed.d.ts:792](https://github.com/cancerberoSgx/accursed/blob/978b980/src/declarations/blessed.d.ts#L792)*

Whether the focused element grabs all keypresses.

___
<a id="height"></a>

### `<Optional>` height

**● height**: *`number`*

*Defined in [declarations/blessed.d.ts:737](https://github.com/cancerberoSgx/accursed/blob/978b980/src/declarations/blessed.d.ts#L737)*

Height of the screen (same as program.rows).

___
<a id="hover"></a>

### `<Optional>` hover

**● hover**: *`any`*

*Defined in [declarations/blessed.d.ts:802](https://github.com/cancerberoSgx/accursed/blob/978b980/src/declarations/blessed.d.ts#L802)*

The currently hovered element. Only set if mouse events are bound.

___
<a id="ignoredockcontrast"></a>

### `<Optional>` ignoreDockContrast

**● ignoreDockContrast**: *`boolean`*

*Defined in [declarations/blessed.d.ts:679](https://github.com/cancerberoSgx/accursed/blob/978b980/src/declarations/blessed.d.ts#L679)*

Normally, dockable borders will not dock if the colors or attributes are different. This option will allow them to dock regardless. It may produce some odd looking multi-colored borders though.

___
<a id="ignorelocked"></a>

### `<Optional>` ignoreLocked

**● ignoreLocked**: *`boolean`*

*Defined in [declarations/blessed.d.ts:667](https://github.com/cancerberoSgx/accursed/blob/978b980/src/declarations/blessed.d.ts#L667)*

Array of keys in their full format (e.g. C-c) to ignore when keys are locked or grabbed. Useful for creating a key that will always exit no matter whether the keys are locked.

___
<a id="input"></a>

### `<Optional>` input

**● input**: *`stream.Writable`*

*Defined in [declarations/blessed.d.ts:711](https://github.com/cancerberoSgx/accursed/blob/978b980/src/declarations/blessed.d.ts#L711)*

Input and output streams. process.stdin/process.stdout by default, however, it could be a net.Socket if you want to make a program that runs over telnet or something of that nature.

___
<a id="left"></a>

### `<Optional>` left

**● left**: *[TTopLeft](../modules/_declarations_blessed_d_.widgets.types.md#ttopleft)*

*Defined in [declarations/blessed.d.ts:757](https://github.com/cancerberoSgx/accursed/blob/978b980/src/declarations/blessed.d.ts#L757)*

Relative left offset, always zero.

___
<a id="lockkeys"></a>

### `<Optional>` lockKeys

**● lockKeys**: *`boolean`*

*Defined in [declarations/blessed.d.ts:797](https://github.com/cancerberoSgx/accursed/blob/978b980/src/declarations/blessed.d.ts#L797)*

Prevent keypresses from being received by any element.

___
<a id="log"></a>

### `<Optional>` log

**● log**: *`string`*

*Defined in [declarations/blessed.d.ts:643](https://github.com/cancerberoSgx/accursed/blob/978b980/src/declarations/blessed.d.ts#L643)*

Create a log file. See log method.

___
<a id="name"></a>

### `<Optional>` name

**● name**: *`string`*

*Inherited from [INodeOptions](_declarations_blessed_d_.widgets.inodeoptions.md).[name](_declarations_blessed_d_.widgets.inodeoptions.md#name)*

*Defined in [declarations/blessed.d.ts:299](https://github.com/cancerberoSgx/accursed/blob/978b980/src/declarations/blessed.d.ts#L299)*

___
<a id="output"></a>

### `<Optional>` output

**● output**: *`stream.Readable`*

*Defined in [declarations/blessed.d.ts:717](https://github.com/cancerberoSgx/accursed/blob/978b980/src/declarations/blessed.d.ts#L717)*

Input and output streams. process.stdin/process.stdout by default, however, it could be a net.Socket if you want to make a program that runs over telnet or something of that nature.

___
<a id="parent"></a>

### `<Optional>` parent

**● parent**: *[Node](../classes/_declarations_blessed_d_.widgets.node.md)*

*Inherited from [INodeOptions](_declarations_blessed_d_.widgets.inodeoptions.md).[parent](_declarations_blessed_d_.widgets.inodeoptions.md#parent)*

*Defined in [declarations/blessed.d.ts:301](https://github.com/cancerberoSgx/accursed/blob/978b980/src/declarations/blessed.d.ts#L301)*

___
<a id="program"></a>

### `<Optional>` program

**● program**: *[BlessedProgram](../classes/_declarations_blessedprogram_d_.blessedprogram.md)*

*Defined in [declarations/blessed.d.ts:599](https://github.com/cancerberoSgx/accursed/blob/978b980/src/declarations/blessed.d.ts#L599)*

The blessed Program to be associated with. Will be automatically instantiated if none is provided.

___
<a id="resizetimeout"></a>

### `<Optional>` resizeTimeout

**● resizeTimeout**: *`number`*

*Defined in [declarations/blessed.d.ts:625](https://github.com/cancerberoSgx/accursed/blob/978b980/src/declarations/blessed.d.ts#L625)*

Amount of time (in ms) to redraw the screen after the terminal is resized (Default: 300).

___
<a id="right"></a>

### `<Optional>` right

**● right**: *[TPosition](../modules/_declarations_blessed_d_.widgets.types.md#tposition)*

*Defined in [declarations/blessed.d.ts:762](https://github.com/cancerberoSgx/accursed/blob/978b980/src/declarations/blessed.d.ts#L762)*

Relative right offset, always zero.

___
<a id="rows"></a>

### `<Optional>` rows

**● rows**: *`number`*

*Defined in [declarations/blessed.d.ts:747](https://github.com/cancerberoSgx/accursed/blob/978b980/src/declarations/blessed.d.ts#L747)*

Same as screen.height.

___
<a id="screen"></a>

### `<Optional>` screen

**● screen**: *[Screen](../classes/_declarations_blessed_d_.widgets.screen.md)*

*Inherited from [INodeOptions](_declarations_blessed_d_.widgets.inodeoptions.md).[screen](_declarations_blessed_d_.widgets.inodeoptions.md#screen)*

*Defined in [declarations/blessed.d.ts:300](https://github.com/cancerberoSgx/accursed/blob/978b980/src/declarations/blessed.d.ts#L300)*

___
<a id="sendfocus"></a>

### `<Optional>` sendFocus

**● sendFocus**: *`boolean`*

*Defined in [declarations/blessed.d.ts:694](https://github.com/cancerberoSgx/accursed/blob/978b980/src/declarations/blessed.d.ts#L694)*

Send focus events after mouse is enabled.

___
<a id="smartcsr"></a>

### `<Optional>` smartCSR

**● smartCSR**: *`boolean`*

*Defined in [declarations/blessed.d.ts:606](https://github.com/cancerberoSgx/accursed/blob/978b980/src/declarations/blessed.d.ts#L606)*

Attempt to perform CSR optimization on all possible elements (not just full-width ones, elements with uniform cells to their sides). This is known to cause flickering with elements that are not full-width, however, it is more optimal for terminal rendering.

___
<a id="tabsize"></a>

### `<Optional>` tabSize

**● tabSize**: *`number`*

*Defined in [declarations/blessed.d.ts:630](https://github.com/cancerberoSgx/accursed/blob/978b980/src/declarations/blessed.d.ts#L630)*

The width of tabs within an element's content.

___
<a id="terminal"></a>

### `<Optional>` terminal

**● terminal**: *`string`*

*Defined in [declarations/blessed.d.ts:807](https://github.com/cancerberoSgx/accursed/blob/978b980/src/declarations/blessed.d.ts#L807)*

Set or get terminal name. Set calls screen.setTerminal() internally.

___
<a id="title"></a>

### `<Optional>` title

**● title**: *`string`*

*Defined in [declarations/blessed.d.ts:812](https://github.com/cancerberoSgx/accursed/blob/978b980/src/declarations/blessed.d.ts#L812)*

Set or get window title.

___
<a id="top"></a>

### `<Optional>` top

**● top**: *[TTopLeft](../modules/_declarations_blessed_d_.widgets.types.md#ttopleft)*

*Defined in [declarations/blessed.d.ts:752](https://github.com/cancerberoSgx/accursed/blob/978b980/src/declarations/blessed.d.ts#L752)*

Relative top offset, always zero.

___
<a id="tput"></a>

### `<Optional>` tput

**● tput**: *[Tput](../classes/_declarations_blessed_d_.widgets.tput.md) \| `boolean`*

*Defined in [declarations/blessed.d.ts:722](https://github.com/cancerberoSgx/accursed/blob/978b980/src/declarations/blessed.d.ts#L722)*

The blessed Tput object (only available if you passed tput: true to the Program constructor.)

___
<a id="usebce"></a>

### `<Optional>` useBCE

**● useBCE**: *`boolean`*

*Defined in [declarations/blessed.d.ts:620](https://github.com/cancerberoSgx/accursed/blob/978b980/src/declarations/blessed.d.ts#L620)*

Attempt to perform back\_color\_erase optimizations for terminals that support it. It will also work with terminals that don't support it, but only on lines with the default background color. As it stands with the current implementation, it's uncertain how much terminal performance this adds at the cost of overhead within node.

___
<a id="warnings"></a>

### `<Optional>` warnings

**● warnings**: *`boolean`*

*Defined in [declarations/blessed.d.ts:699](https://github.com/cancerberoSgx/accursed/blob/978b980/src/declarations/blessed.d.ts#L699)*

Display warnings (such as the output not being a TTY, similar to ncurses).

___
<a id="width"></a>

### `<Optional>` width

**● width**: *`number`*

*Defined in [declarations/blessed.d.ts:732](https://github.com/cancerberoSgx/accursed/blob/978b980/src/declarations/blessed.d.ts#L732)*

Width of the screen (same as program.cols).

___

