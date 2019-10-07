[accursed](../README.md) › [Globals](../globals.md) › ["declarations/blessed.d"](../modules/_declarations_blessed_d_.md) › [Widgets](../modules/_declarations_blessed_d_.widgets.md) › [IScreenOptions](_declarations_blessed_d_.widgets.iscreenoptions.md)

# Interface: IScreenOptions

## Hierarchy

  ↳ [INodeOptions](_declarations_blessed_d_.widgets.inodeoptions.md)

  ↳ **IScreenOptions**

## Index

### Properties

* [abottom](_declarations_blessed_d_.widgets.iscreenoptions.md#optional-abottom)
* [aleft](_declarations_blessed_d_.widgets.iscreenoptions.md#optional-aleft)
* [aright](_declarations_blessed_d_.widgets.iscreenoptions.md#optional-aright)
* [atop](_declarations_blessed_d_.widgets.iscreenoptions.md#optional-atop)
* [autoPadding](_declarations_blessed_d_.widgets.iscreenoptions.md#optional-autopadding)
* [bottom](_declarations_blessed_d_.widgets.iscreenoptions.md#optional-bottom)
* [children](_declarations_blessed_d_.widgets.iscreenoptions.md#optional-children)
* [cols](_declarations_blessed_d_.widgets.iscreenoptions.md#optional-cols)
* [cursor](_declarations_blessed_d_.widgets.iscreenoptions.md#optional-cursor)
* [debug](_declarations_blessed_d_.widgets.iscreenoptions.md#optional-debug)
* [debugLog](_declarations_blessed_d_.widgets.iscreenoptions.md#optional-debuglog)
* [dockBorders](_declarations_blessed_d_.widgets.iscreenoptions.md#optional-dockborders)
* [dump](_declarations_blessed_d_.widgets.iscreenoptions.md#optional-dump)
* [fastCSR](_declarations_blessed_d_.widgets.iscreenoptions.md#optional-fastcsr)
* [focusable](_declarations_blessed_d_.widgets.iscreenoptions.md#optional-focusable)
* [focused](_declarations_blessed_d_.widgets.iscreenoptions.md#optional-focused)
* [forceUnicode](_declarations_blessed_d_.widgets.iscreenoptions.md#optional-forceunicode)
* [fullUnicode](_declarations_blessed_d_.widgets.iscreenoptions.md#optional-fullunicode)
* [grabKeys](_declarations_blessed_d_.widgets.iscreenoptions.md#optional-grabkeys)
* [height](_declarations_blessed_d_.widgets.iscreenoptions.md#optional-height)
* [hover](_declarations_blessed_d_.widgets.iscreenoptions.md#optional-hover)
* [ignoreDockContrast](_declarations_blessed_d_.widgets.iscreenoptions.md#optional-ignoredockcontrast)
* [ignoreLocked](_declarations_blessed_d_.widgets.iscreenoptions.md#optional-ignorelocked)
* [input](_declarations_blessed_d_.widgets.iscreenoptions.md#optional-input)
* [left](_declarations_blessed_d_.widgets.iscreenoptions.md#optional-left)
* [lockKeys](_declarations_blessed_d_.widgets.iscreenoptions.md#optional-lockkeys)
* [log](_declarations_blessed_d_.widgets.iscreenoptions.md#optional-log)
* [name](_declarations_blessed_d_.widgets.iscreenoptions.md#optional-name)
* [output](_declarations_blessed_d_.widgets.iscreenoptions.md#optional-output)
* [parent](_declarations_blessed_d_.widgets.iscreenoptions.md#optional-parent)
* [program](_declarations_blessed_d_.widgets.iscreenoptions.md#optional-program)
* [resizeTimeout](_declarations_blessed_d_.widgets.iscreenoptions.md#optional-resizetimeout)
* [right](_declarations_blessed_d_.widgets.iscreenoptions.md#optional-right)
* [rows](_declarations_blessed_d_.widgets.iscreenoptions.md#optional-rows)
* [screen](_declarations_blessed_d_.widgets.iscreenoptions.md#optional-screen)
* [sendFocus](_declarations_blessed_d_.widgets.iscreenoptions.md#optional-sendfocus)
* [smartCSR](_declarations_blessed_d_.widgets.iscreenoptions.md#optional-smartcsr)
* [tabSize](_declarations_blessed_d_.widgets.iscreenoptions.md#optional-tabsize)
* [terminal](_declarations_blessed_d_.widgets.iscreenoptions.md#optional-terminal)
* [title](_declarations_blessed_d_.widgets.iscreenoptions.md#optional-title)
* [top](_declarations_blessed_d_.widgets.iscreenoptions.md#optional-top)
* [tput](_declarations_blessed_d_.widgets.iscreenoptions.md#optional-tput)
* [useBCE](_declarations_blessed_d_.widgets.iscreenoptions.md#optional-usebce)
* [warnings](_declarations_blessed_d_.widgets.iscreenoptions.md#optional-warnings)
* [width](_declarations_blessed_d_.widgets.iscreenoptions.md#optional-width)

## Properties

### `Optional` abottom

• **abottom**? : *[TPosition](../modules/_declarations_blessed_d_.widgets.types.md#tposition)*

*Defined in [declarations/blessed.d.ts:720](https://github.com/cancerberoSgx/accursed/blob/5b2518e/src/declarations/blessed.d.ts#L720)*

Absolute bottom offset, always zero.

___

### `Optional` aleft

• **aleft**? : *[TTopLeft](../modules/_declarations_blessed_d_.widgets.types.md#ttopleft)*

*Defined in [declarations/blessed.d.ts:710](https://github.com/cancerberoSgx/accursed/blob/5b2518e/src/declarations/blessed.d.ts#L710)*

Absolute left offset, always zero.

___

### `Optional` aright

• **aright**? : *[TPosition](../modules/_declarations_blessed_d_.widgets.types.md#tposition)*

*Defined in [declarations/blessed.d.ts:715](https://github.com/cancerberoSgx/accursed/blob/5b2518e/src/declarations/blessed.d.ts#L715)*

Absolute right offset, always zero.

___

### `Optional` atop

• **atop**? : *[TTopLeft](../modules/_declarations_blessed_d_.widgets.types.md#ttopleft)*

*Defined in [declarations/blessed.d.ts:705](https://github.com/cancerberoSgx/accursed/blob/5b2518e/src/declarations/blessed.d.ts#L705)*

Absolute top offset, always zero.

___

### `Optional` autoPadding

• **autoPadding**? : *boolean*

*Defined in [declarations/blessed.d.ts:569](https://github.com/cancerberoSgx/accursed/blob/5b2518e/src/declarations/blessed.d.ts#L569)*

Automatically position child elements with border and padding in mind (NOTE: this is a recommended
option. It may become default in the future).

___

### `Optional` bottom

• **bottom**? : *[TPosition](../modules/_declarations_blessed_d_.widgets.types.md#tposition)*

*Defined in [declarations/blessed.d.ts:700](https://github.com/cancerberoSgx/accursed/blob/5b2518e/src/declarations/blessed.d.ts#L700)*

Relative bottom offset, always zero.

___

### `Optional` children

• **children**? : *[Node](../classes/_declarations_blessed_d_.widgets.node.md)[]*

*Inherited from [INodeOptions](_declarations_blessed_d_.widgets.inodeoptions.md).[children](_declarations_blessed_d_.widgets.inodeoptions.md#optional-children)*

*Defined in [declarations/blessed.d.ts:236](https://github.com/cancerberoSgx/accursed/blob/5b2518e/src/declarations/blessed.d.ts#L236)*

___

### `Optional` cols

• **cols**? : *number*

*Defined in [declarations/blessed.d.ts:675](https://github.com/cancerberoSgx/accursed/blob/5b2518e/src/declarations/blessed.d.ts#L675)*

Same as screen.width.

___

### `Optional` cursor

• **cursor**? : *[TCursor](_declarations_blessed_d_.widgets.types.tcursor.md)*

*Defined in [declarations/blessed.d.ts:571](https://github.com/cancerberoSgx/accursed/blob/5b2518e/src/declarations/blessed.d.ts#L571)*

___

### `Optional` debug

• **debug**? : *boolean*

*Defined in [declarations/blessed.d.ts:587](https://github.com/cancerberoSgx/accursed/blob/5b2518e/src/declarations/blessed.d.ts#L587)*

Debug mode. Enables usage of the debug method. Also creates a debug console which will display when
pressing F12. It will display all log and debug messages.

___

### `Optional` debugLog

• **debugLog**? : *[Log](../classes/_declarations_blessed_d_.widgets.log.md)*

*Defined in [declarations/blessed.d.ts:594](https://github.com/cancerberoSgx/accursed/blob/5b2518e/src/declarations/blessed.d.ts#L594)*

Instance of the debug console that is enabled when calling debug options is actuve and key f12 is pressed.
Useful to programmatically access it in case keys don't wonk.

**`internal`** 

___

### `Optional` dockBorders

• **dockBorders**? : *boolean*

*Defined in [declarations/blessed.d.ts:606](https://github.com/cancerberoSgx/accursed/blob/5b2518e/src/declarations/blessed.d.ts#L606)*

Automatically "dock" borders with other elements instead of overlapping, depending on position
(experimental). For example: These border-overlapped elements:

___

### `Optional` dump

• **dump**? : *string | boolean*

*Defined in [declarations/blessed.d.ts:581](https://github.com/cancerberoSgx/accursed/blob/5b2518e/src/declarations/blessed.d.ts#L581)*

Dump all output and input to desired file. Can be used together with log option if set as a boolean.

___

### `Optional` fastCSR

• **fastCSR**? : *boolean*

*Defined in [declarations/blessed.d.ts:545](https://github.com/cancerberoSgx/accursed/blob/5b2518e/src/declarations/blessed.d.ts#L545)*

Do CSR on any element within 20 cols of the screen edge on either side. Faster than smartCSR,
but may cause flickering depending on what is on each side of the element.

___

### `Optional` focusable

• **focusable**? : *boolean*

*Inherited from [INodeOptions](_declarations_blessed_d_.widgets.inodeoptions.md).[focusable](_declarations_blessed_d_.widgets.inodeoptions.md#optional-focusable)*

*Defined in [declarations/blessed.d.ts:240](https://github.com/cancerberoSgx/accursed/blob/5b2518e/src/declarations/blessed.d.ts#L240)*

If true, the node will obtain focus when m

___

### `Optional` focused

• **focused**? : *[BlessedElement](../classes/_declarations_blessed_d_.widgets.blessedelement.md)*

*Defined in [declarations/blessed.d.ts:660](https://github.com/cancerberoSgx/accursed/blob/5b2518e/src/declarations/blessed.d.ts#L660)*

Top of the focus history stack.

___

### `Optional` forceUnicode

• **forceUnicode**? : *boolean*

*Defined in [declarations/blessed.d.ts:638](https://github.com/cancerberoSgx/accursed/blob/5b2518e/src/declarations/blessed.d.ts#L638)*

Force blessed to use unicode even if it is not detected via terminfo, env variables, or windows code page.
If value is true unicode is forced. If value is false non-unicode is forced (default: null).

___

### `Optional` fullUnicode

• **fullUnicode**? : *boolean*

*Defined in [declarations/blessed.d.ts:622](https://github.com/cancerberoSgx/accursed/blob/5b2518e/src/declarations/blessed.d.ts#L622)*

Allow for rendering of East Asian double-width characters, utf-16 surrogate pairs, and unicode
combining characters. This allows you to display text above the basic multilingual plane. This
is behind an option because it may affect performance slightly negatively. Without this option
enabled, all double-width, surrogate pair, and combining characters will be replaced by '??',
'?', '' respectively. (NOTE: iTerm2 cannot display combining characters properly. Blessed simply
removes them from an element's content if iTerm2 is detected).

___

### `Optional` grabKeys

• **grabKeys**? : *any*

*Defined in [declarations/blessed.d.ts:725](https://github.com/cancerberoSgx/accursed/blob/5b2518e/src/declarations/blessed.d.ts#L725)*

Whether the focused element grabs all keypresses.

___

### `Optional` height

• **height**? : *number*

*Defined in [declarations/blessed.d.ts:670](https://github.com/cancerberoSgx/accursed/blob/5b2518e/src/declarations/blessed.d.ts#L670)*

Height of the screen (same as program.rows).

___

### `Optional` hover

• **hover**? : *any*

*Defined in [declarations/blessed.d.ts:735](https://github.com/cancerberoSgx/accursed/blob/5b2518e/src/declarations/blessed.d.ts#L735)*

The currently hovered element. Only set if mouse events are bound.

___

### `Optional` ignoreDockContrast

• **ignoreDockContrast**? : *boolean*

*Defined in [declarations/blessed.d.ts:612](https://github.com/cancerberoSgx/accursed/blob/5b2518e/src/declarations/blessed.d.ts#L612)*

Normally, dockable borders will not dock if the colors or attributes are different. This option
will allow them to dock regardless. It may produce some odd looking multi-colored borders though.

___

### `Optional` ignoreLocked

• **ignoreLocked**? : *boolean*

*Defined in [declarations/blessed.d.ts:600](https://github.com/cancerberoSgx/accursed/blob/5b2518e/src/declarations/blessed.d.ts#L600)*

Array of keys in their full format (e.g. C-c) to ignore when keys are locked or grabbed. Useful
for creating a key that will always exit no matter whether the keys are locked.

___

### `Optional` input

• **input**? : *stream.Writable*

*Defined in [declarations/blessed.d.ts:644](https://github.com/cancerberoSgx/accursed/blob/5b2518e/src/declarations/blessed.d.ts#L644)*

Input and output streams. process.stdin/process.stdout by default, however, it could be a
net.Socket if you want to make a program that runs over telnet or something of that nature.

___

### `Optional` left

• **left**? : *[TTopLeft](../modules/_declarations_blessed_d_.widgets.types.md#ttopleft)*

*Defined in [declarations/blessed.d.ts:690](https://github.com/cancerberoSgx/accursed/blob/5b2518e/src/declarations/blessed.d.ts#L690)*

Relative left offset, always zero.

___

### `Optional` lockKeys

• **lockKeys**? : *boolean*

*Defined in [declarations/blessed.d.ts:730](https://github.com/cancerberoSgx/accursed/blob/5b2518e/src/declarations/blessed.d.ts#L730)*

Prevent keypresses from being received by any element.

___

### `Optional` log

• **log**? : *string*

*Defined in [declarations/blessed.d.ts:576](https://github.com/cancerberoSgx/accursed/blob/5b2518e/src/declarations/blessed.d.ts#L576)*

Create a log file. See log method.

___

### `Optional` name

• **name**? : *string*

*Inherited from [INodeOptions](_declarations_blessed_d_.widgets.inodeoptions.md).[name](_declarations_blessed_d_.widgets.inodeoptions.md#optional-name)*

*Defined in [declarations/blessed.d.ts:233](https://github.com/cancerberoSgx/accursed/blob/5b2518e/src/declarations/blessed.d.ts#L233)*

___

### `Optional` output

• **output**? : *stream.Readable*

*Defined in [declarations/blessed.d.ts:650](https://github.com/cancerberoSgx/accursed/blob/5b2518e/src/declarations/blessed.d.ts#L650)*

Input and output streams. process.stdin/process.stdout by default, however, it could be a
net.Socket if you want to make a program that runs over telnet or something of that nature.

___

### `Optional` parent

• **parent**? : *[Node](../classes/_declarations_blessed_d_.widgets.node.md)*

*Inherited from [INodeOptions](_declarations_blessed_d_.widgets.inodeoptions.md).[parent](_declarations_blessed_d_.widgets.inodeoptions.md#optional-parent)*

*Defined in [declarations/blessed.d.ts:235](https://github.com/cancerberoSgx/accursed/blob/5b2518e/src/declarations/blessed.d.ts#L235)*

___

### `Optional` program

• **program**? : *[BlessedProgram](../classes/_declarations_blessedprogram_d_.blessedprogram.md)*

*Defined in [declarations/blessed.d.ts:532](https://github.com/cancerberoSgx/accursed/blob/5b2518e/src/declarations/blessed.d.ts#L532)*

The blessed Program to be associated with. Will be automatically instantiated if none is provided.

___

### `Optional` resizeTimeout

• **resizeTimeout**? : *number*

*Defined in [declarations/blessed.d.ts:558](https://github.com/cancerberoSgx/accursed/blob/5b2518e/src/declarations/blessed.d.ts#L558)*

Amount of time (in ms) to redraw the screen after the terminal is resized (Default: 300).

___

### `Optional` right

• **right**? : *[TPosition](../modules/_declarations_blessed_d_.widgets.types.md#tposition)*

*Defined in [declarations/blessed.d.ts:695](https://github.com/cancerberoSgx/accursed/blob/5b2518e/src/declarations/blessed.d.ts#L695)*

Relative right offset, always zero.

___

### `Optional` rows

• **rows**? : *number*

*Defined in [declarations/blessed.d.ts:680](https://github.com/cancerberoSgx/accursed/blob/5b2518e/src/declarations/blessed.d.ts#L680)*

Same as screen.height.

___

### `Optional` screen

• **screen**? : *[Screen](../classes/_declarations_blessed_d_.widgets.screen.md)*

*Inherited from [INodeOptions](_declarations_blessed_d_.widgets.inodeoptions.md).[screen](_declarations_blessed_d_.widgets.inodeoptions.md#optional-screen)*

*Defined in [declarations/blessed.d.ts:234](https://github.com/cancerberoSgx/accursed/blob/5b2518e/src/declarations/blessed.d.ts#L234)*

___

### `Optional` sendFocus

• **sendFocus**? : *boolean*

*Defined in [declarations/blessed.d.ts:627](https://github.com/cancerberoSgx/accursed/blob/5b2518e/src/declarations/blessed.d.ts#L627)*

Send focus events after mouse is enabled.

___

### `Optional` smartCSR

• **smartCSR**? : *boolean*

*Defined in [declarations/blessed.d.ts:539](https://github.com/cancerberoSgx/accursed/blob/5b2518e/src/declarations/blessed.d.ts#L539)*

Attempt to perform CSR optimization on all possible elements (not just full-width ones, elements with
uniform cells to their sides). This is known to cause flickering with elements that are not full-width,
however, it is more optimal for terminal rendering.

___

### `Optional` tabSize

• **tabSize**? : *number*

*Defined in [declarations/blessed.d.ts:563](https://github.com/cancerberoSgx/accursed/blob/5b2518e/src/declarations/blessed.d.ts#L563)*

The width of tabs within an element's content.

___

### `Optional` terminal

• **terminal**? : *string*

*Defined in [declarations/blessed.d.ts:740](https://github.com/cancerberoSgx/accursed/blob/5b2518e/src/declarations/blessed.d.ts#L740)*

Set or get terminal name. Set calls screen.setTerminal() internally.

___

### `Optional` title

• **title**? : *string*

*Defined in [declarations/blessed.d.ts:745](https://github.com/cancerberoSgx/accursed/blob/5b2518e/src/declarations/blessed.d.ts#L745)*

Set or get window title.

___

### `Optional` top

• **top**? : *[TTopLeft](../modules/_declarations_blessed_d_.widgets.types.md#ttopleft)*

*Defined in [declarations/blessed.d.ts:685](https://github.com/cancerberoSgx/accursed/blob/5b2518e/src/declarations/blessed.d.ts#L685)*

Relative top offset, always zero.

___

### `Optional` tput

• **tput**? : *[Tput](../classes/_declarations_tput_d_.tput.md) | boolean*

*Defined in [declarations/blessed.d.ts:655](https://github.com/cancerberoSgx/accursed/blob/5b2518e/src/declarations/blessed.d.ts#L655)*

The blessed Tput object (only available if you passed tput: true to the Program constructor.)

___

### `Optional` useBCE

• **useBCE**? : *boolean*

*Defined in [declarations/blessed.d.ts:553](https://github.com/cancerberoSgx/accursed/blob/5b2518e/src/declarations/blessed.d.ts#L553)*

Attempt to perform back_color_erase optimizations for terminals that support it. It will also work
with terminals that don't support it, but only on lines with the default background color. As it
stands with the current implementation, it's uncertain how much terminal performance this adds at
the cost of overhead within node.

___

### `Optional` warnings

• **warnings**? : *boolean*

*Defined in [declarations/blessed.d.ts:632](https://github.com/cancerberoSgx/accursed/blob/5b2518e/src/declarations/blessed.d.ts#L632)*

Display warnings (such as the output not being a TTY, similar to ncurses).

___

### `Optional` width

• **width**? : *number*

*Defined in [declarations/blessed.d.ts:665](https://github.com/cancerberoSgx/accursed/blob/5b2518e/src/declarations/blessed.d.ts#L665)*

Width of the screen (same as program.cols).
