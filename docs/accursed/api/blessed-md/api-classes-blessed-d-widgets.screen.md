---
id: api-classes-blessed-d-widgets.screen
title: Screen
sidebar_label: Screen
---

[blessed](api-readme.md) > [[blessed.d Module]](api-modules-blessed-d-module.md) > [Widgets](api-modules-blessed-d-widgets.md) > [Screen](api-classes-blessed-d-widgets.screen.md)

## Class

The screen on which every other node renders. Can be compared wih the DOM document and manages many aspects of its descendants such as :

Focus:
------

The focus of all its descendant Elements is managed by the Screen, which adds any [focusable](api-classes-blessed-d-widgets.screen.md#focusable) node an index, in order of evaluation.

Focus can be changed using mehods public methods like [focusPrevious](api-classes-blessed-d-widgets.screen.md#focusprevious), [focusNext](api-classes-blessed-d-widgets.screen.md#focusnext), Also it support focusing elements in a region and save/restor the focus state.

Lsteners can be subscribed for focus changes with evenst [focus](api-classes-blessed-d-widgets.blessedelement.md#focus) and \[\[blur\]\]. The current focused element, if any, is available in attribtue [focused](api-classes-blessed-d-widgets.screen.md#focused)

A common scenario is to call focusNext or focusPrev on certain key presses (tab, S-tab).

## Hierarchy

↳  [NodeWithEvents](api-classes-blessed-d-widgets.nodewithevents.md)

**↳ Screen**

↳  [Screen](api-classes-blessed-d-widget.screen.md)

## Implements

* [IHasOptions](api-interfaces-blessed-d-widgets.ihasoptions.md)<[INodeOptions](api-interfaces-blessed-d-widgets.inodeoptions.md)>
* [IDestroyable](api-interfaces-blessed-d-widgets.idestroyable.md)
* [IHasOptions](api-interfaces-blessed-d-widgets.ihasoptions.md)<[IScreenOptions](api-interfaces-blessed-d-widgets.iscreenoptions.md)>

### Constructors

* [constructor](api-classes-blessed-d-widgets.screen.md#constructor)

### Properties

* [$](api-classes-blessed-d-widgets.screen.md#_)
* [_](api-classes-blessed-d-widgets.screen.md#_-1)
* [abottom](api-classes-blessed-d-widgets.screen.md#abottom)
* [aleft](api-classes-blessed-d-widgets.screen.md#aleft)
* [aright](api-classes-blessed-d-widgets.screen.md#aright)
* [atop](api-classes-blessed-d-widgets.screen.md#atop)
* [autoPadding](api-classes-blessed-d-widgets.screen.md#autopadding)
* [bottom](api-classes-blessed-d-widgets.screen.md#bottom)
* [children](api-classes-blessed-d-widgets.screen.md#children)
* [cols](api-classes-blessed-d-widgets.screen.md#cols)
* [cursor](api-classes-blessed-d-widgets.screen.md#cursor)
* [data](api-classes-blessed-d-widgets.screen.md#data)
* [destroyed](api-classes-blessed-d-widgets.screen.md#destroyed)
* [dockBorders](api-classes-blessed-d-widgets.screen.md#dockborders)
* [dump](api-classes-blessed-d-widgets.screen.md#dump)
* [fastCSR](api-classes-blessed-d-widgets.screen.md#fastcsr)
* [focusable](api-classes-blessed-d-widgets.screen.md#focusable)
* [focused](api-classes-blessed-d-widgets.screen.md#focused)
* [forceUnicode](api-classes-blessed-d-widgets.screen.md#forceunicode)
* [fullUnicode](api-classes-blessed-d-widgets.screen.md#fullunicode)
* [grabKeys](api-classes-blessed-d-widgets.screen.md#grabkeys)
* [height](api-classes-blessed-d-widgets.screen.md#height)
* [history](api-classes-blessed-d-widgets.screen.md#history)
* [hover](api-classes-blessed-d-widgets.screen.md#hover)
* [ignoreDockContrast](api-classes-blessed-d-widgets.screen.md#ignoredockcontrast)
* [ignoreLocked](api-classes-blessed-d-widgets.screen.md#ignorelocked)
* [index](api-classes-blessed-d-widgets.screen.md#index)
* [input](api-classes-blessed-d-widgets.screen.md#input)
* [left](api-classes-blessed-d-widgets.screen.md#left)
* [lines](api-classes-blessed-d-widgets.screen.md#lines)
* [lockKeys](api-classes-blessed-d-widgets.screen.md#lockkeys)
* [lpos](api-classes-blessed-d-widgets.screen.md#lpos)
* [options](api-classes-blessed-d-widgets.screen.md#options)
* [output](api-classes-blessed-d-widgets.screen.md#output)
* [parent](api-classes-blessed-d-widgets.screen.md#parent)
* [program](api-classes-blessed-d-widgets.screen.md#program)
* [resizeTimeout](api-classes-blessed-d-widgets.screen.md#resizetimeout)
* [right](api-classes-blessed-d-widgets.screen.md#right)
* [rows](api-classes-blessed-d-widgets.screen.md#rows)
* [screen](api-classes-blessed-d-widgets.screen.md#screen)
* [sendFocus](api-classes-blessed-d-widgets.screen.md#sendfocus)
* [smartCSR](api-classes-blessed-d-widgets.screen.md#smartcsr)
* [tabSize](api-classes-blessed-d-widgets.screen.md#tabsize)
* [terminal](api-classes-blessed-d-widgets.screen.md#terminal)
* [title](api-classes-blessed-d-widgets.screen.md#title)
* [top](api-classes-blessed-d-widgets.screen.md#top)
* [tput](api-classes-blessed-d-widgets.screen.md#tput)
* [type](api-classes-blessed-d-widgets.screen.md#type)
* [uid](api-classes-blessed-d-widgets.screen.md#uid)
* [useBCE](api-classes-blessed-d-widgets.screen.md#usebce)
* [warnings](api-classes-blessed-d-widgets.screen.md#warnings)
* [width](api-classes-blessed-d-widgets.screen.md#width)
* [defaultMaxListeners](api-classes-blessed-d-widgets.screen.md#defaultmaxlisteners)

### Methods

* [addListener](api-classes-blessed-d-widgets.screen.md#addlistener)
* [alloc](api-classes-blessed-d-widgets.screen.md#alloc)
* [append](api-classes-blessed-d-widgets.screen.md#append)
* [cleanSides](api-classes-blessed-d-widgets.screen.md#cleansides)
* [clearRegion](api-classes-blessed-d-widgets.screen.md#clearregion)
* [collectAncestors](api-classes-blessed-d-widgets.screen.md#collectancestors)
* [collectDescendants](api-classes-blessed-d-widgets.screen.md#collectdescendants)
* [copyToClipboard](api-classes-blessed-d-widgets.screen.md#copytoclipboard)
* [cursorColor](api-classes-blessed-d-widgets.screen.md#cursorcolor)
* [cursorReset](api-classes-blessed-d-widgets.screen.md#cursorreset)
* [cursorShape](api-classes-blessed-d-widgets.screen.md#cursorshape)
* [debug](api-classes-blessed-d-widgets.screen.md#debug)
* [deleteBottom](api-classes-blessed-d-widgets.screen.md#deletebottom)
* [deleteLine](api-classes-blessed-d-widgets.screen.md#deleteline)
* [deleteTop](api-classes-blessed-d-widgets.screen.md#deletetop)
* [destroy](api-classes-blessed-d-widgets.screen.md#destroy)
* [detach](api-classes-blessed-d-widgets.screen.md#detach)
* [draw](api-classes-blessed-d-widgets.screen.md#draw)
* [emit](api-classes-blessed-d-widgets.screen.md#emit)
* [emitAncestors](api-classes-blessed-d-widgets.screen.md#emitancestors)
* [emitDescendants](api-classes-blessed-d-widgets.screen.md#emitdescendants)
* [enableInput](api-classes-blessed-d-widgets.screen.md#enableinput)
* [enableKeys](api-classes-blessed-d-widgets.screen.md#enablekeys)
* [enableMouse](api-classes-blessed-d-widgets.screen.md#enablemouse)
* [eventNames](api-classes-blessed-d-widgets.screen.md#eventnames)
* [exec](api-classes-blessed-d-widgets.screen.md#exec)
* [fillRegion](api-classes-blessed-d-widgets.screen.md#fillregion)
* [focusNext](api-classes-blessed-d-widgets.screen.md#focusnext)
* [focusOffset](api-classes-blessed-d-widgets.screen.md#focusoffset)
* [focusPop](api-classes-blessed-d-widgets.screen.md#focuspop)
* [focusPrevious](api-classes-blessed-d-widgets.screen.md#focusprevious)
* [focusPush](api-classes-blessed-d-widgets.screen.md#focuspush)
* [forAncestors](api-classes-blessed-d-widgets.screen.md#forancestors)
* [forDescendants](api-classes-blessed-d-widgets.screen.md#fordescendants)
* [free](api-classes-blessed-d-widgets.screen.md#free)
* [get](api-classes-blessed-d-widgets.screen.md#get)
* [getMaxListeners](api-classes-blessed-d-widgets.screen.md#getmaxlisteners)
* [hasAncestor](api-classes-blessed-d-widgets.screen.md#hasancestor)
* [hasDescendant](api-classes-blessed-d-widgets.screen.md#hasdescendant)
* [insert](api-classes-blessed-d-widgets.screen.md#insert)
* [insertAfter](api-classes-blessed-d-widgets.screen.md#insertafter)
* [insertBefore](api-classes-blessed-d-widgets.screen.md#insertbefore)
* [insertBottom](api-classes-blessed-d-widgets.screen.md#insertbottom)
* [insertLine](api-classes-blessed-d-widgets.screen.md#insertline)
* [insertTop](api-classes-blessed-d-widgets.screen.md#inserttop)
* [key](api-classes-blessed-d-widgets.screen.md#key)
* [leave](api-classes-blessed-d-widgets.screen.md#leave)
* [listenerCount](api-classes-blessed-d-widgets.screen.md#listenercount)
* [listeners](api-classes-blessed-d-widgets.screen.md#listeners)
* [log](api-classes-blessed-d-widgets.screen.md#log)
* [off](api-classes-blessed-d-widgets.screen.md#off)
* [on](api-classes-blessed-d-widgets.screen.md#on)
* [once](api-classes-blessed-d-widgets.screen.md#once)
* [onceKey](api-classes-blessed-d-widgets.screen.md#oncekey)
* [postEnter](api-classes-blessed-d-widgets.screen.md#postenter)
* [prepend](api-classes-blessed-d-widgets.screen.md#prepend)
* [prependListener](api-classes-blessed-d-widgets.screen.md#prependlistener)
* [prependOnceListener](api-classes-blessed-d-widgets.screen.md#prependoncelistener)
* [rawListeners](api-classes-blessed-d-widgets.screen.md#rawlisteners)
* [readEditor](api-classes-blessed-d-widgets.screen.md#readeditor)
* [realloc](api-classes-blessed-d-widgets.screen.md#realloc)
* [remove](api-classes-blessed-d-widgets.screen.md#remove)
* [removeAllListeners](api-classes-blessed-d-widgets.screen.md#removealllisteners)
* [removeKey](api-classes-blessed-d-widgets.screen.md#removekey)
* [removeListener](api-classes-blessed-d-widgets.screen.md#removelistener)
* [render](api-classes-blessed-d-widgets.screen.md#render)
* [restoreFocus](api-classes-blessed-d-widgets.screen.md#restorefocus)
* [rewindFocus](api-classes-blessed-d-widgets.screen.md#rewindfocus)
* [saveFocus](api-classes-blessed-d-widgets.screen.md#savefocus)
* [screenshot](api-classes-blessed-d-widgets.screen.md#screenshot)
* [set](api-classes-blessed-d-widgets.screen.md#set)
* [setEffects](api-classes-blessed-d-widgets.screen.md#seteffects)
* [setMaxListeners](api-classes-blessed-d-widgets.screen.md#setmaxlisteners)
* [setTerminal](api-classes-blessed-d-widgets.screen.md#setterminal)
* [spawn](api-classes-blessed-d-widgets.screen.md#spawn)
* [unkey](api-classes-blessed-d-widgets.screen.md#unkey)
* [listenerCount](api-classes-blessed-d-widgets.screen.md#listenercount-1)

---

## Constructors

<a id="constructor"></a>

###  constructor

⊕ **new Screen**(opts: *[IScreenOptions](api-interfaces-blessed-d-widgets.iscreenoptions.md)*): [Screen](api-classes-blessed-d-widgets.screen.md)

*Overrides [Node](api-classes-blessed-d-widgets.node.md).[constructor](api-classes-blessed-d-widgets.node.md#constructor)*

*Defined in [blessed.d.ts:2117](https://github.com/cancerberoSgx/accursed/blob/7a42e78/src/declarations/blessed.d.ts#L2117)*

**Parameters:**

| Name | Type |
| ------ | ------ |
| opts | [IScreenOptions](api-interfaces-blessed-d-widgets.iscreenoptions.md) |

**Returns:** [Screen](api-classes-blessed-d-widgets.screen.md)

___

## Properties

<a id="_"></a>

###  $

**● $**: *`object`*

*Inherited from [Node](api-classes-blessed-d-widgets.node.md).[$](api-classes-blessed-d-widgets.node.md#_)*

*Defined in [blessed.d.ts:1690](https://github.com/cancerberoSgx/accursed/blob/7a42e78/src/declarations/blessed.d.ts#L1690)*

An object for any miscellanous user data.

#### Type declaration

[index: `string`]: `any`

___
<a id="_-1"></a>

###  _

**● _**: *`object`*

*Inherited from [Node](api-classes-blessed-d-widgets.node.md).[_](api-classes-blessed-d-widgets.node.md#_-1)*

*Defined in [blessed.d.ts:1685](https://github.com/cancerberoSgx/accursed/blob/7a42e78/src/declarations/blessed.d.ts#L1685)*

An object for any miscellanous user data.

#### Type declaration

[index: `string`]: `any`

___
<a id="abottom"></a>

###  abottom

**● abottom**: *[TPosition](api-modules-blessed-d-widgets.types.md#tposition)*

*Defined in [blessed.d.ts:2310](https://github.com/cancerberoSgx/accursed/blob/7a42e78/src/declarations/blessed.d.ts#L2310)*

Absolute bottom offset, always zero.

___
<a id="aleft"></a>

###  aleft

**● aleft**: *[TTopLeft](api-modules-blessed-d-widgets.types.md#ttopleft)*

*Defined in [blessed.d.ts:2300](https://github.com/cancerberoSgx/accursed/blob/7a42e78/src/declarations/blessed.d.ts#L2300)*

Absolute left offset, always zero.

___
<a id="aright"></a>

###  aright

**● aright**: *[TPosition](api-modules-blessed-d-widgets.types.md#tposition)*

*Defined in [blessed.d.ts:2305](https://github.com/cancerberoSgx/accursed/blob/7a42e78/src/declarations/blessed.d.ts#L2305)*

Absolute right offset, always zero.

___
<a id="atop"></a>

###  atop

**● atop**: *[TTopLeft](api-modules-blessed-d-widgets.types.md#ttopleft)*

*Defined in [blessed.d.ts:2295](https://github.com/cancerberoSgx/accursed/blob/7a42e78/src/declarations/blessed.d.ts#L2295)*

Absolute top offset, always zero.

___
<a id="autopadding"></a>

###  autoPadding

**● autoPadding**: *`boolean`*

*Defined in [blessed.d.ts:2177](https://github.com/cancerberoSgx/accursed/blob/7a42e78/src/declarations/blessed.d.ts#L2177)*

Automatically position child elements with border and padding in mind (NOTE: this is a recommended option. It may become default in the future).

___
<a id="bottom"></a>

###  bottom

**● bottom**: *[TPosition](api-modules-blessed-d-widgets.types.md#tposition)*

*Defined in [blessed.d.ts:2290](https://github.com/cancerberoSgx/accursed/blob/7a42e78/src/declarations/blessed.d.ts#L2290)*

Relative bottom offset, always zero.

___
<a id="children"></a>

###  children

**● children**: *[Node](api-classes-blessed-d-widgets.node.md)[]*

*Inherited from [Node](api-classes-blessed-d-widgets.node.md).[children](api-classes-blessed-d-widgets.node.md#children)*

*Defined in [blessed.d.ts:1717](https://github.com/cancerberoSgx/accursed/blob/7a42e78/src/declarations/blessed.d.ts#L1717)*

Array of node's children.

___
<a id="cols"></a>

###  cols

**● cols**: *`number`*

*Defined in [blessed.d.ts:2265](https://github.com/cancerberoSgx/accursed/blob/7a42e78/src/declarations/blessed.d.ts#L2265)*

Same as screen.width.

___
<a id="cursor"></a>

###  cursor

**● cursor**: *[TCursor](api-interfaces-blessed-d-widgets.types.tcursor.md)*

*Defined in [blessed.d.ts:2179](https://github.com/cancerberoSgx/accursed/blob/7a42e78/src/declarations/blessed.d.ts#L2179)*

___
<a id="data"></a>

###  data

**● data**: *`object`*

*Inherited from [Node](api-classes-blessed-d-widgets.node.md).[data](api-classes-blessed-d-widgets.node.md#data)*

*Defined in [blessed.d.ts:1680](https://github.com/cancerberoSgx/accursed/blob/7a42e78/src/declarations/blessed.d.ts#L1680)*

An object for any miscellanous user data.

#### Type declaration

[index: `string`]: `any`

___
<a id="destroyed"></a>

### `<Optional>` destroyed

**● destroyed**: *`undefined` \| `false` \| `true`*

*Defined in [blessed.d.ts:2127](https://github.com/cancerberoSgx/accursed/blob/7a42e78/src/declarations/blessed.d.ts#L2127)*

true is the terminal was destroyed. @internal.

___
<a id="dockborders"></a>

###  dockBorders

**● dockBorders**: *`boolean`*

*Defined in [blessed.d.ts:2196](https://github.com/cancerberoSgx/accursed/blob/7a42e78/src/declarations/blessed.d.ts#L2196)*

Automatically "dock" borders with other elements instead of overlapping, depending on position (experimental). For example: These border-overlapped elements:

___
<a id="dump"></a>

###  dump

**● dump**: *`string`*

*Defined in [blessed.d.ts:2184](https://github.com/cancerberoSgx/accursed/blob/7a42e78/src/declarations/blessed.d.ts#L2184)*

Dump all output and input to desired file. Can be used together with log option if set as a boolean.

___
<a id="fastcsr"></a>

###  fastCSR

**● fastCSR**: *`boolean`*

*Defined in [blessed.d.ts:2153](https://github.com/cancerberoSgx/accursed/blob/7a42e78/src/declarations/blessed.d.ts#L2153)*

Do CSR on any element within 20 cols of the screen edge on either side. Faster than smartCSR, but may cause flickering depending on what is on each side of the element.

___
<a id="focusable"></a>

###  focusable

**● focusable**: *`boolean`*

*Inherited from [Node](api-classes-blessed-d-widgets.node.md).[focusable](api-classes-blessed-d-widgets.node.md#focusable)*

*Defined in [blessed.d.ts:1670](https://github.com/cancerberoSgx/accursed/blob/7a42e78/src/declarations/blessed.d.ts#L1670)*

___
<a id="focused"></a>

###  focused

**● focused**: *[BlessedElement](api-classes-blessed-d-widgets.blessedelement.md)*

*Defined in [blessed.d.ts:2250](https://github.com/cancerberoSgx/accursed/blob/7a42e78/src/declarations/blessed.d.ts#L2250)*

Top of the focus history stack.

___
<a id="forceunicode"></a>

###  forceUnicode

**● forceUnicode**: *`boolean`*

*Defined in [blessed.d.ts:2228](https://github.com/cancerberoSgx/accursed/blob/7a42e78/src/declarations/blessed.d.ts#L2228)*

Force blessed to use unicode even if it is not detected via terminfo, env variables, or windows code page. If value is true unicode is forced. If value is false non-unicode is forced (default: null).

___
<a id="fullunicode"></a>

###  fullUnicode

**● fullUnicode**: *`boolean`*

*Defined in [blessed.d.ts:2212](https://github.com/cancerberoSgx/accursed/blob/7a42e78/src/declarations/blessed.d.ts#L2212)*

Allow for rendering of East Asian double-width characters, utf-16 surrogate pairs, and unicode combining characters. This allows you to display text above the basic multilingual plane. This is behind an option because it may affect performance slightly negatively. Without this option enabled, all double-width, surrogate pair, and combining characters will be replaced by '??', '?', '' respectively. (NOTE: iTerm2 cannot display combining characters properly. Blessed simply removes them from an element's content if iTerm2 is detected).

___
<a id="grabkeys"></a>

###  grabKeys

**● grabKeys**: *`any`*

*Defined in [blessed.d.ts:2315](https://github.com/cancerberoSgx/accursed/blob/7a42e78/src/declarations/blessed.d.ts#L2315)*

Whether the focused element grabs all keypresses.

___
<a id="height"></a>

###  height

**● height**: *[TPosition](api-modules-blessed-d-widgets.types.md#tposition)*

*Defined in [blessed.d.ts:2260](https://github.com/cancerberoSgx/accursed/blob/7a42e78/src/declarations/blessed.d.ts#L2260)*

Height of the screen (same as program.rows).

___
<a id="history"></a>

###  history

**● history**: *[BlessedElement](api-classes-blessed-d-widgets.blessedelement.md)[]*

*Defined in [blessed.d.ts:2130](https://github.com/cancerberoSgx/accursed/blob/7a42e78/src/declarations/blessed.d.ts#L2130)*

focus history. @internal

___
<a id="hover"></a>

###  hover

**● hover**: *`any`*

*Defined in [blessed.d.ts:2325](https://github.com/cancerberoSgx/accursed/blob/7a42e78/src/declarations/blessed.d.ts#L2325)*

The currently hovered element. Only set if mouse events are bound.

___
<a id="ignoredockcontrast"></a>

###  ignoreDockContrast

**● ignoreDockContrast**: *`boolean`*

*Defined in [blessed.d.ts:2202](https://github.com/cancerberoSgx/accursed/blob/7a42e78/src/declarations/blessed.d.ts#L2202)*

Normally, dockable borders will not dock if the colors or attributes are different. This option will allow them to dock regardless. It may produce some odd looking multi-colored borders though.

___
<a id="ignorelocked"></a>

###  ignoreLocked

**● ignoreLocked**: *`boolean`*

*Defined in [blessed.d.ts:2190](https://github.com/cancerberoSgx/accursed/blob/7a42e78/src/declarations/blessed.d.ts#L2190)*

Array of keys in their full format (e.g. C-c) to ignore when keys are locked or grabbed. Useful for creating a key that will always exit no matter whether the keys are locked.

___
<a id="index"></a>

###  index

**● index**: *`number`*

*Inherited from [Node](api-classes-blessed-d-widgets.node.md).[index](api-classes-blessed-d-widgets.node.md#index)*

*Defined in [blessed.d.ts:1702](https://github.com/cancerberoSgx/accursed/blob/7a42e78/src/declarations/blessed.d.ts#L1702)*

Render index (document order index) of the last render call.

___
<a id="input"></a>

###  input

**● input**: *`stream.Writable`*

*Defined in [blessed.d.ts:2234](https://github.com/cancerberoSgx/accursed/blob/7a42e78/src/declarations/blessed.d.ts#L2234)*

Input and output streams. process.stdin/process.stdout by default, however, it could be a net.Socket if you want to make a program that runs over telnet or something of that nature.

___
<a id="left"></a>

###  left

**● left**: *[TTopLeft](api-modules-blessed-d-widgets.types.md#ttopleft)*

*Defined in [blessed.d.ts:2280](https://github.com/cancerberoSgx/accursed/blob/7a42e78/src/declarations/blessed.d.ts#L2280)*

Relative left offset, always zero.

___
<a id="lines"></a>

###  lines

**● lines**: *`string`[]*

*Defined in [blessed.d.ts:2338](https://github.com/cancerberoSgx/accursed/blob/7a42e78/src/declarations/blessed.d.ts#L2338)*

Internal Screen buffer of current lines. Exposed for debug purpuses. @internal

___
<a id="lockkeys"></a>

###  lockKeys

**● lockKeys**: *`boolean`*

*Defined in [blessed.d.ts:2320](https://github.com/cancerberoSgx/accursed/blob/7a42e78/src/declarations/blessed.d.ts#L2320)*

Prevent keypresses from being received by any element.

___
<a id="lpos"></a>

###  lpos

**● lpos**: *[PositionCoords](api-classes-blessed-d-widgets.positioncoords.md)*

*Inherited from [Node](api-classes-blessed-d-widgets.node.md).[lpos](api-classes-blessed-d-widgets.node.md#lpos)*

*Defined in [blessed.d.ts:1692](https://github.com/cancerberoSgx/accursed/blob/7a42e78/src/declarations/blessed.d.ts#L1692)*

___
<a id="options"></a>

###  options

**● options**: *[IScreenOptions](api-interfaces-blessed-d-widgets.iscreenoptions.md)*

*Implementation of [IHasOptions](api-interfaces-blessed-d-widgets.ihasoptions.md).[options](api-interfaces-blessed-d-widgets.ihasoptions.md#options)*

*Overrides [Node](api-classes-blessed-d-widgets.node.md).[options](api-classes-blessed-d-widgets.node.md#options)*

*Defined in [blessed.d.ts:2135](https://github.com/cancerberoSgx/accursed/blob/7a42e78/src/declarations/blessed.d.ts#L2135)*

Original options object.

___
<a id="output"></a>

###  output

**● output**: *`stream.Readable`*

*Defined in [blessed.d.ts:2240](https://github.com/cancerberoSgx/accursed/blob/7a42e78/src/declarations/blessed.d.ts#L2240)*

Input and output streams. process.stdin/process.stdout by default, however, it could be a net.Socket if you want to make a program that runs over telnet or something of that nature.

___
<a id="parent"></a>

### `<Optional>` parent

**● parent**: *[Node](api-classes-blessed-d-widgets.node.md)*

*Inherited from [Node](api-classes-blessed-d-widgets.node.md).[parent](api-classes-blessed-d-widgets.node.md#parent)*

*Defined in [blessed.d.ts:1712](https://github.com/cancerberoSgx/accursed/blob/7a42e78/src/declarations/blessed.d.ts#L1712)*

Parent node. If null it means the element is not attached to any screen or program, or the node is a Screen.

___
<a id="program"></a>

###  program

**● program**: *[BlessedProgram](api-classes-blessed-d-blessedprogram.md)*

*Defined in [blessed.d.ts:2140](https://github.com/cancerberoSgx/accursed/blob/7a42e78/src/declarations/blessed.d.ts#L2140)*

The blessed Program to be associated with. Will be automatically instantiated if none is provided.

___
<a id="resizetimeout"></a>

###  resizeTimeout

**● resizeTimeout**: *`number`*

*Defined in [blessed.d.ts:2166](https://github.com/cancerberoSgx/accursed/blob/7a42e78/src/declarations/blessed.d.ts#L2166)*

Amount of time (in ms) to redraw the screen after the terminal is resized (Default: 300).

___
<a id="right"></a>

###  right

**● right**: *[TPosition](api-modules-blessed-d-widgets.types.md#tposition)*

*Defined in [blessed.d.ts:2285](https://github.com/cancerberoSgx/accursed/blob/7a42e78/src/declarations/blessed.d.ts#L2285)*

Relative right offset, always zero.

___
<a id="rows"></a>

###  rows

**● rows**: *`number`*

*Defined in [blessed.d.ts:2270](https://github.com/cancerberoSgx/accursed/blob/7a42e78/src/declarations/blessed.d.ts#L2270)*

Same as screen.height.

___
<a id="screen"></a>

###  screen

**● screen**: *[Screen](api-classes-blessed-d-widgets.screen.md)*

*Inherited from [Node](api-classes-blessed-d-widgets.node.md).[screen](api-classes-blessed-d-widgets.node.md#screen)*

*Defined in [blessed.d.ts:1707](https://github.com/cancerberoSgx/accursed/blob/7a42e78/src/declarations/blessed.d.ts#L1707)*

Parent screen.

___
<a id="sendfocus"></a>

###  sendFocus

**● sendFocus**: *`boolean`*

*Defined in [blessed.d.ts:2217](https://github.com/cancerberoSgx/accursed/blob/7a42e78/src/declarations/blessed.d.ts#L2217)*

Send focus events after mouse is enabled.

___
<a id="smartcsr"></a>

###  smartCSR

**● smartCSR**: *`boolean`*

*Defined in [blessed.d.ts:2147](https://github.com/cancerberoSgx/accursed/blob/7a42e78/src/declarations/blessed.d.ts#L2147)*

Attempt to perform CSR optimization on all possible elements (not just full-width ones, elements with uniform cells to their sides). This is known to cause flickering with elements that are not full-width, however, it is more optimal for terminal rendering.

___
<a id="tabsize"></a>

###  tabSize

**● tabSize**: *`number`*

*Defined in [blessed.d.ts:2171](https://github.com/cancerberoSgx/accursed/blob/7a42e78/src/declarations/blessed.d.ts#L2171)*

The width of tabs within an element's content.

___
<a id="terminal"></a>

###  terminal

**● terminal**: *`string`*

*Defined in [blessed.d.ts:2330](https://github.com/cancerberoSgx/accursed/blob/7a42e78/src/declarations/blessed.d.ts#L2330)*

Set or get terminal name. Set calls screen.setTerminal() internally.

___
<a id="title"></a>

###  title

**● title**: *`string`*

*Defined in [blessed.d.ts:2335](https://github.com/cancerberoSgx/accursed/blob/7a42e78/src/declarations/blessed.d.ts#L2335)*

Set or get window title.

___
<a id="top"></a>

###  top

**● top**: *[TTopLeft](api-modules-blessed-d-widgets.types.md#ttopleft)*

*Defined in [blessed.d.ts:2275](https://github.com/cancerberoSgx/accursed/blob/7a42e78/src/declarations/blessed.d.ts#L2275)*

Relative top offset, always zero.

___
<a id="tput"></a>

###  tput

**● tput**: *[Tput](api-classes-blessed-d-widgets.tput.md)*

*Defined in [blessed.d.ts:2245](https://github.com/cancerberoSgx/accursed/blob/7a42e78/src/declarations/blessed.d.ts#L2245)*

The blessed Tput object (only available if you passed tput: true to the Program constructor.)

___
<a id="type"></a>

###  type

**● type**: *`string`*

*Inherited from [Node](api-classes-blessed-d-widgets.node.md).[type](api-classes-blessed-d-widgets.node.md#type)*

*Defined in [blessed.d.ts:1697](https://github.com/cancerberoSgx/accursed/blob/7a42e78/src/declarations/blessed.d.ts#L1697)*

Type of the node (e.g. box).

___
<a id="uid"></a>

###  uid

**● uid**: *`number`*

*Inherited from [Node](api-classes-blessed-d-widgets.node.md).[uid](api-classes-blessed-d-widgets.node.md#uid)*

*Defined in [blessed.d.ts:1668](https://github.com/cancerberoSgx/accursed/blob/7a42e78/src/declarations/blessed.d.ts#L1668)*

Unique identifier for Node instances. @internal

___
<a id="usebce"></a>

###  useBCE

**● useBCE**: *`boolean`*

*Defined in [blessed.d.ts:2161](https://github.com/cancerberoSgx/accursed/blob/7a42e78/src/declarations/blessed.d.ts#L2161)*

Attempt to perform back\_color\_erase optimizations for terminals that support it. It will also work with terminals that don't support it, but only on lines with the default background color. As it stands with the current implementation, it's uncertain how much terminal performance this adds at the cost of overhead within node.

___
<a id="warnings"></a>

###  warnings

**● warnings**: *`boolean`*

*Defined in [blessed.d.ts:2222](https://github.com/cancerberoSgx/accursed/blob/7a42e78/src/declarations/blessed.d.ts#L2222)*

Display warnings (such as the output not being a TTY, similar to ncurses).

___
<a id="width"></a>

###  width

**● width**: *[TPosition](api-modules-blessed-d-widgets.types.md#tposition)*

*Defined in [blessed.d.ts:2255](https://github.com/cancerberoSgx/accursed/blob/7a42e78/src/declarations/blessed.d.ts#L2255)*

Width of the screen (same as program.cols).

___
<a id="defaultmaxlisteners"></a>

### `<Static>` defaultMaxListeners

**● defaultMaxListeners**: *`number`*

*Inherited from EventEmitter.defaultMaxListeners*

*Defined in /Users/sebastiangurin/git/accursed/node_modules/@types/node/events.d.ts:8*

___

## Methods

<a id="addlistener"></a>

###  addListener

▸ **addListener**(event: *`string` \| `symbol`*, listener: *`function`*): `this`

*Inherited from EventEmitter.addListener*

*Overrides EventEmitter.addListener*

*Defined in /Users/sebastiangurin/git/accursed/node_modules/@types/node/events.d.ts:10*

**Parameters:**

| Name | Type |
| ------ | ------ |
| event | `string` \| `symbol` |
| listener | `function` |

**Returns:** `this`

___
<a id="alloc"></a>

###  alloc

▸ **alloc**(): `void`

*Defined in [blessed.d.ts:2353](https://github.com/cancerberoSgx/accursed/blob/7a42e78/src/declarations/blessed.d.ts#L2353)*

Allocate a new pending screen buffer and a new output screen buffer.

**Returns:** `void`

___
<a id="append"></a>

###  append

▸ **append**(node: *[Node](api-classes-blessed-d-widgets.node.md)*): `void`

*Inherited from [Node](api-classes-blessed-d-widgets.node.md).[append](api-classes-blessed-d-widgets.node.md#append)*

*Defined in [blessed.d.ts:1727](https://github.com/cancerberoSgx/accursed/blob/7a42e78/src/declarations/blessed.d.ts#L1727)*

Append a node to this node's children.

**Parameters:**

| Name | Type |
| ------ | ------ |
| node | [Node](api-classes-blessed-d-widgets.node.md) |

**Returns:** `void`

___
<a id="cleansides"></a>

###  cleanSides

▸ **cleanSides**(el: *[BlessedElement](api-classes-blessed-d-widgets.blessedelement.md)*): `boolean`

*Defined in [blessed.d.ts:2124](https://github.com/cancerberoSgx/accursed/blob/7a42e78/src/declarations/blessed.d.ts#L2124)*

Parse the sides of an element to determine whether an element has uniform cells on both sides. If it does, we can use CSR to optimize scrolling on a scrollable element. Not exactly sure how worthwile this is. This will cause a performance/cpu-usage hit, but will it be less or greater than the performance hit of slow-rendering scrollable boxes with clean sides

**Parameters:**

| Name | Type |
| ------ | ------ |
| el | [BlessedElement](api-classes-blessed-d-widgets.blessedelement.md) |

**Returns:** `boolean`

___
<a id="clearregion"></a>

###  clearRegion

▸ **clearRegion**(x1: *`number`*, x2: *`number`*, y1: *`number`*, y2: *`number`*): `void`

*Defined in [blessed.d.ts:2384](https://github.com/cancerberoSgx/accursed/blob/7a42e78/src/declarations/blessed.d.ts#L2384)*

Clear any region on the screen.

**Parameters:**

| Name | Type |
| ------ | ------ |
| x1 | `number` |
| x2 | `number` |
| y1 | `number` |
| y2 | `number` |

**Returns:** `void`

___
<a id="collectancestors"></a>

###  collectAncestors

▸ **collectAncestors**(s?: *`undefined` \| `false` \| `true`*): `void`

*Inherited from [Node](api-classes-blessed-d-widgets.node.md).[collectAncestors](api-classes-blessed-d-widgets.node.md#collectancestors)*

*Defined in [blessed.d.ts:1760](https://github.com/cancerberoSgx/accursed/blob/7a42e78/src/declarations/blessed.d.ts#L1760)*

**Parameters:**

| Name | Type |
| ------ | ------ |
| `Optional` s | `undefined` \| `false` \| `true` |

**Returns:** `void`

___
<a id="collectdescendants"></a>

###  collectDescendants

▸ **collectDescendants**(s?: *`undefined` \| `false` \| `true`*): `void`

*Inherited from [Node](api-classes-blessed-d-widgets.node.md).[collectDescendants](api-classes-blessed-d-widgets.node.md#collectdescendants)*

*Defined in [blessed.d.ts:1759](https://github.com/cancerberoSgx/accursed/blob/7a42e78/src/declarations/blessed.d.ts#L1759)*

**Parameters:**

| Name | Type |
| ------ | ------ |
| `Optional` s | `undefined` \| `false` \| `true` |

**Returns:** `void`

___
<a id="copytoclipboard"></a>

###  copyToClipboard

▸ **copyToClipboard**(text: *`string`*): `void`

*Defined in [blessed.d.ts:2507](https://github.com/cancerberoSgx/accursed/blob/7a42e78/src/declarations/blessed.d.ts#L2507)*

Attempt to copy text to clipboard using iTerm2's proprietary sequence. Returns true if successful.

**Parameters:**

| Name | Type |
| ------ | ------ |
| text | `string` |

**Returns:** `void`

___
<a id="cursorcolor"></a>

###  cursorColor

▸ **cursorColor**(color: *`string`*): `void`

*Defined in [blessed.d.ts:2518](https://github.com/cancerberoSgx/accursed/blob/7a42e78/src/declarations/blessed.d.ts#L2518)*

Attempt to change cursor color. Returns true if successful.

**Parameters:**

| Name | Type |
| ------ | ------ |
| color | `string` |

**Returns:** `void`

___
<a id="cursorreset"></a>

###  cursorReset

▸ **cursorReset**(): `void`

*Defined in [blessed.d.ts:2523](https://github.com/cancerberoSgx/accursed/blob/7a42e78/src/declarations/blessed.d.ts#L2523)*

Attempt to reset cursor. Returns true if successful.

**Returns:** `void`

___
<a id="cursorshape"></a>

###  cursorShape

▸ **cursorShape**(shape: *`boolean`*, blink: *`boolean`*): `any`

*Defined in [blessed.d.ts:2513](https://github.com/cancerberoSgx/accursed/blob/7a42e78/src/declarations/blessed.d.ts#L2513)*

Attempt to change cursor shape. Will not work in all terminals (see artificial cursors for a solution to this). Returns true if successful.

**Parameters:**

| Name | Type |
| ------ | ------ |
| shape | `boolean` |
| blink | `boolean` |

**Returns:** `any`

___
<a id="debug"></a>

###  debug

▸ **debug**(...msg: *`string`[]*): `void`

*Defined in [blessed.d.ts:2348](https://github.com/cancerberoSgx/accursed/blob/7a42e78/src/declarations/blessed.d.ts#L2348)*

Same as the log method, but only gets called if the debug option was set.

**Parameters:**

| Name | Type |
| ------ | ------ |
| `Rest` msg | `string`[] |

**Returns:** `void`

___
<a id="deletebottom"></a>

###  deleteBottom

▸ **deleteBottom**(top: *`number`*, bottom: *`number`*): `void`

*Defined in [blessed.d.ts:2480](https://github.com/cancerberoSgx/accursed/blob/7a42e78/src/declarations/blessed.d.ts#L2480)*

Delete a line at the bottom of the screen.

**Parameters:**

| Name | Type |
| ------ | ------ |
| top | `number` |
| bottom | `number` |

**Returns:** `void`

___
<a id="deleteline"></a>

###  deleteLine

▸ **deleteLine**(n: *`number`*, y: *`number`*, top: *`number`*, bottom: *`number`*): `void`

*Defined in [blessed.d.ts:2465](https://github.com/cancerberoSgx/accursed/blob/7a42e78/src/declarations/blessed.d.ts#L2465)*

Delete a line from the screen (using csr: this bypasses the output buffer).

**Parameters:**

| Name | Type |
| ------ | ------ |
| n | `number` |
| y | `number` |
| top | `number` |
| bottom | `number` |

**Returns:** `void`

___
<a id="deletetop"></a>

###  deleteTop

▸ **deleteTop**(top: *`number`*, bottom: *`number`*): `void`

*Defined in [blessed.d.ts:2485](https://github.com/cancerberoSgx/accursed/blob/7a42e78/src/declarations/blessed.d.ts#L2485)*

Delete a line at the top of the screen.

**Parameters:**

| Name | Type |
| ------ | ------ |
| top | `number` |
| bottom | `number` |

**Returns:** `void`

___
<a id="destroy"></a>

###  destroy

▸ **destroy**(): `void`

*Implementation of [IDestroyable](api-interfaces-blessed-d-widgets.idestroyable.md).[destroy](api-interfaces-blessed-d-widgets.idestroyable.md#destroy)*

*Overrides [Node](api-classes-blessed-d-widgets.node.md).[destroy](api-classes-blessed-d-widgets.node.md#destroy)*

*Defined in [blessed.d.ts:2537](https://github.com/cancerberoSgx/accursed/blob/7a42e78/src/declarations/blessed.d.ts#L2537)*

Destroy the screen object and remove it from the global list. Also remove all global events relevant to the screen object. If all screen objects are destroyed, the node process is essentially reset to its initial state.

**Returns:** `void`

___
<a id="detach"></a>

###  detach

▸ **detach**(): `void`

*Inherited from [Node](api-classes-blessed-d-widgets.node.md).[detach](api-classes-blessed-d-widgets.node.md#detach)*

*Defined in [blessed.d.ts:1752](https://github.com/cancerberoSgx/accursed/blob/7a42e78/src/declarations/blessed.d.ts#L1752)*

Remove node from its parent.

**Returns:** `void`

___
<a id="draw"></a>

###  draw

▸ **draw**(start: *`number`*, end: *`number`*): `void`

*Defined in [blessed.d.ts:2363](https://github.com/cancerberoSgx/accursed/blob/7a42e78/src/declarations/blessed.d.ts#L2363)*

Draw the screen based on the contents of the screen buffer.

**Parameters:**

| Name | Type |
| ------ | ------ |
| start | `number` |
| end | `number` |

**Returns:** `void`

___
<a id="emit"></a>

###  emit

▸ **emit**(event: *`string` \| `symbol`*, ...args: *`any`[]*): `boolean`

*Inherited from EventEmitter.emit*

*Overrides EventEmitter.emit*

*Defined in /Users/sebastiangurin/git/accursed/node_modules/@types/node/events.d.ts:22*

**Parameters:**

| Name | Type |
| ------ | ------ |
| event | `string` \| `symbol` |
| `Rest` args | `any`[] |

**Returns:** `boolean`

___
<a id="emitancestors"></a>

###  emitAncestors

▸ **emitAncestors**(): `void`

*Inherited from [Node](api-classes-blessed-d-widgets.node.md).[emitAncestors](api-classes-blessed-d-widgets.node.md#emitancestors)*

*Defined in [blessed.d.ts:1766](https://github.com/cancerberoSgx/accursed/blob/7a42e78/src/declarations/blessed.d.ts#L1766)*

**Returns:** `void`

___
<a id="emitdescendants"></a>

###  emitDescendants

▸ **emitDescendants**(type?: *`undefined` \| `string`*, ...args: *`any`[]*): `void`

*Inherited from [Node](api-classes-blessed-d-widgets.node.md).[emitDescendants](api-classes-blessed-d-widgets.node.md#emitdescendants)*

*Defined in [blessed.d.ts:1765](https://github.com/cancerberoSgx/accursed/blob/7a42e78/src/declarations/blessed.d.ts#L1765)*

Emit event for element, and recursively emit same event for all descendants. If `s` is provided it will call \[\[iter\]\] on self first.

**Parameters:**

| Name | Type |
| ------ | ------ |
| `Optional` type | `undefined` \| `string` |
| `Rest` args | `any`[] |

**Returns:** `void`

___
<a id="enableinput"></a>

###  enableInput

▸ **enableInput**(el?: *[BlessedElement](api-classes-blessed-d-widgets.blessedelement.md)*): `void`

*Defined in [blessed.d.ts:2502](https://github.com/cancerberoSgx/accursed/blob/7a42e78/src/declarations/blessed.d.ts#L2502)*

Enable key and mouse events. Calls bot enableMouse and enableKeys.

**Parameters:**

| Name | Type |
| ------ | ------ |
| `Optional` el | [BlessedElement](api-classes-blessed-d-widgets.blessedelement.md) |

**Returns:** `void`

___
<a id="enablekeys"></a>

###  enableKeys

▸ **enableKeys**(el?: *[BlessedElement](api-classes-blessed-d-widgets.blessedelement.md)*): `void`

*Defined in [blessed.d.ts:2497](https://github.com/cancerberoSgx/accursed/blob/7a42e78/src/declarations/blessed.d.ts#L2497)*

Enable keypress events for the screen and optionally an element (automatically called when a form of on('keypress') is bound).

**Parameters:**

| Name | Type |
| ------ | ------ |
| `Optional` el | [BlessedElement](api-classes-blessed-d-widgets.blessedelement.md) |

**Returns:** `void`

___
<a id="enablemouse"></a>

###  enableMouse

▸ **enableMouse**(el?: *[BlessedElement](api-classes-blessed-d-widgets.blessedelement.md)*): `void`

*Defined in [blessed.d.ts:2491](https://github.com/cancerberoSgx/accursed/blob/7a42e78/src/declarations/blessed.d.ts#L2491)*

Enable mouse events for the screen and optionally an element (automatically called when a form of on('mouse') is bound).

**Parameters:**

| Name | Type |
| ------ | ------ |
| `Optional` el | [BlessedElement](api-classes-blessed-d-widgets.blessedelement.md) |

**Returns:** `void`

___
<a id="eventnames"></a>

###  eventNames

▸ **eventNames**(): `Array`<`string` \| `symbol`>

*Inherited from EventEmitter.eventNames*

*Overrides EventEmitter.eventNames*

*Defined in /Users/sebastiangurin/git/accursed/node_modules/@types/node/events.d.ts:23*

**Returns:** `Array`<`string` \| `symbol`>

___
<a id="exec"></a>

###  exec

▸ **exec**(file: *`string`*, args: *`string`[]*, options: *[NodeChildProcessExecOptions](api-interfaces-blessed-d-widgets.nodechildprocessexecoptions.md)*, callback: *`function`*): `ChildProcess`

*Defined in [blessed.d.ts:2439](https://github.com/cancerberoSgx/accursed/blob/7a42e78/src/declarations/blessed.d.ts#L2439)*

Spawn a process in the foreground, return to blessed app after exit. Executes callback on error or exit.

**Parameters:**

| Name | Type |
| ------ | ------ |
| file | `string` |
| args | `string`[] |
| options | [NodeChildProcessExecOptions](api-interfaces-blessed-d-widgets.nodechildprocessexecoptions.md) |
| callback | `function` |

**Returns:** `ChildProcess`

___
<a id="fillregion"></a>

###  fillRegion

▸ **fillRegion**(attr: *`string`*, ch: *`string`*, x1: *`number`*, x2: *`number`*, y1: *`number`*, y2: *`number`*): `void`

*Defined in [blessed.d.ts:2389](https://github.com/cancerberoSgx/accursed/blob/7a42e78/src/declarations/blessed.d.ts#L2389)*

Fill any region with a character of a certain attribute.

**Parameters:**

| Name | Type |
| ------ | ------ |
| attr | `string` |
| ch | `string` |
| x1 | `number` |
| x2 | `number` |
| y1 | `number` |
| y2 | `number` |

**Returns:** `void`

___
<a id="focusnext"></a>

###  focusNext

▸ **focusNext**(): `void`

*Defined in [blessed.d.ts:2404](https://github.com/cancerberoSgx/accursed/blob/7a42e78/src/declarations/blessed.d.ts#L2404)*

Focus next [focusable](api-classes-blessed-d-widgets.screen.md#focusable) element in the index.

**Returns:** `void`

___
<a id="focusoffset"></a>

###  focusOffset

▸ **focusOffset**(offset: *`number`*): `any`

*Defined in [blessed.d.ts:2394](https://github.com/cancerberoSgx/accursed/blob/7a42e78/src/declarations/blessed.d.ts#L2394)*

Focus element by offset of focusable elements.

**Parameters:**

| Name | Type |
| ------ | ------ |
| offset | `number` |

**Returns:** `any`

___
<a id="focuspop"></a>

###  focusPop

▸ **focusPop**(): [BlessedElement](api-classes-blessed-d-widgets.blessedelement.md)

*Defined in [blessed.d.ts:2414](https://github.com/cancerberoSgx/accursed/blob/7a42e78/src/declarations/blessed.d.ts#L2414)*

Pop element off the focus stack.

**Returns:** [BlessedElement](api-classes-blessed-d-widgets.blessedelement.md)

___
<a id="focusprevious"></a>

###  focusPrevious

▸ **focusPrevious**(): `void`

*Defined in [blessed.d.ts:2399](https://github.com/cancerberoSgx/accursed/blob/7a42e78/src/declarations/blessed.d.ts#L2399)*

Focus previous [focusable](api-classes-blessed-d-widgets.screen.md#focusable) element in the index.

**Returns:** `void`

___
<a id="focuspush"></a>

###  focusPush

▸ **focusPush**(element: *[BlessedElement](api-classes-blessed-d-widgets.blessedelement.md)*): `void`

*Defined in [blessed.d.ts:2409](https://github.com/cancerberoSgx/accursed/blob/7a42e78/src/declarations/blessed.d.ts#L2409)*

Push element on the focus stack (equivalent to screen.focused = el).

**Parameters:**

| Name | Type |
| ------ | ------ |
| element | [BlessedElement](api-classes-blessed-d-widgets.blessedelement.md) |

**Returns:** `void`

___
<a id="forancestors"></a>

###  forAncestors

▸ **forAncestors**(iter: *`function`*, s?: *`undefined` \| `false` \| `true`*): `void`

*Inherited from [Node](api-classes-blessed-d-widgets.node.md).[forAncestors](api-classes-blessed-d-widgets.node.md#forancestors)*

*Defined in [blessed.d.ts:1758](https://github.com/cancerberoSgx/accursed/blob/7a42e78/src/declarations/blessed.d.ts#L1758)*

**Parameters:**

| Name | Type |
| ------ | ------ |
| iter | `function` |
| `Optional` s | `undefined` \| `false` \| `true` |

**Returns:** `void`

___
<a id="fordescendants"></a>

###  forDescendants

▸ **forDescendants**(iter: *`function`*, s?: *`undefined` \| `false` \| `true`*): `void`

*Inherited from [Node](api-classes-blessed-d-widgets.node.md).[forDescendants](api-classes-blessed-d-widgets.node.md#fordescendants)*

*Defined in [blessed.d.ts:1757](https://github.com/cancerberoSgx/accursed/blob/7a42e78/src/declarations/blessed.d.ts#L1757)*

Visit each node's descendants, with \[\[iter\]\] function, parents first. If `s` is provided it will call \[\[iter\]\] on self first.

**Parameters:**

| Name | Type |
| ------ | ------ |
| iter | `function` |
| `Optional` s | `undefined` \| `false` \| `true` |

**Returns:** `void`

___
<a id="free"></a>

###  free

▸ **free**(): `void`

*Inherited from [Node](api-classes-blessed-d-widgets.node.md).[free](api-classes-blessed-d-widgets.node.md#free)*

*Defined in [blessed.d.ts:1753](https://github.com/cancerberoSgx/accursed/blob/7a42e78/src/declarations/blessed.d.ts#L1753)*

**Returns:** `void`

___
<a id="get"></a>

###  get

▸ **get**<`T`>(name: *`string`*, def: *`T`*): `T`

*Inherited from [Node](api-classes-blessed-d-widgets.node.md).[get](api-classes-blessed-d-widgets.node.md#get)*

*Defined in [blessed.d.ts:1777](https://github.com/cancerberoSgx/accursed/blob/7a42e78/src/declarations/blessed.d.ts#L1777)*

Get user property with a potential default value.

**Type parameters:**

#### T 
**Parameters:**

| Name | Type |
| ------ | ------ |
| name | `string` |
| def | `T` |

**Returns:** `T`

___
<a id="getmaxlisteners"></a>

###  getMaxListeners

▸ **getMaxListeners**(): `number`

*Inherited from EventEmitter.getMaxListeners*

*Overrides EventEmitter.getMaxListeners*

*Defined in /Users/sebastiangurin/git/accursed/node_modules/@types/node/events.d.ts:19*

**Returns:** `number`

___
<a id="hasancestor"></a>

###  hasAncestor

▸ **hasAncestor**<`T`>(target: *[Node](api-classes-blessed-d-widgets.node.md)*): [Node](api-classes-blessed-d-widgets.node.md)

*Inherited from [Node](api-classes-blessed-d-widgets.node.md).[hasAncestor](api-classes-blessed-d-widgets.node.md#hasancestor)*

*Defined in [blessed.d.ts:1768](https://github.com/cancerberoSgx/accursed/blob/7a42e78/src/declarations/blessed.d.ts#L1768)*

**Type parameters:**

#### T :  [Node](api-classes-blessed-d-widgets.node.md)
**Parameters:**

| Name | Type |
| ------ | ------ |
| target | [Node](api-classes-blessed-d-widgets.node.md) |

**Returns:** [Node](api-classes-blessed-d-widgets.node.md)

___
<a id="hasdescendant"></a>

###  hasDescendant

▸ **hasDescendant**<`T`>(target: *[Node](api-classes-blessed-d-widgets.node.md)*): [Node](api-classes-blessed-d-widgets.node.md)

*Inherited from [Node](api-classes-blessed-d-widgets.node.md).[hasDescendant](api-classes-blessed-d-widgets.node.md#hasdescendant)*

*Defined in [blessed.d.ts:1767](https://github.com/cancerberoSgx/accursed/blob/7a42e78/src/declarations/blessed.d.ts#L1767)*

**Type parameters:**

#### T :  [Node](api-classes-blessed-d-widgets.node.md)
**Parameters:**

| Name | Type |
| ------ | ------ |
| target | [Node](api-classes-blessed-d-widgets.node.md) |

**Returns:** [Node](api-classes-blessed-d-widgets.node.md)

___
<a id="insert"></a>

###  insert

▸ **insert**(node: *[Node](api-classes-blessed-d-widgets.node.md)*, index: *`number`*): `void`

*Inherited from [Node](api-classes-blessed-d-widgets.node.md).[insert](api-classes-blessed-d-widgets.node.md#insert)*

*Defined in [blessed.d.ts:1737](https://github.com/cancerberoSgx/accursed/blob/7a42e78/src/declarations/blessed.d.ts#L1737)*

Insert a node to this node's children at index i.

**Parameters:**

| Name | Type |
| ------ | ------ |
| node | [Node](api-classes-blessed-d-widgets.node.md) |
| index | `number` |

**Returns:** `void`

___
<a id="insertafter"></a>

###  insertAfter

▸ **insertAfter**(node: *[Node](api-classes-blessed-d-widgets.node.md)*, refNode: *[Node](api-classes-blessed-d-widgets.node.md)*): `void`

*Inherited from [Node](api-classes-blessed-d-widgets.node.md).[insertAfter](api-classes-blessed-d-widgets.node.md#insertafter)*

*Defined in [blessed.d.ts:1747](https://github.com/cancerberoSgx/accursed/blob/7a42e78/src/declarations/blessed.d.ts#L1747)*

Insert a node from node after the reference node.

**Parameters:**

| Name | Type |
| ------ | ------ |
| node | [Node](api-classes-blessed-d-widgets.node.md) |
| refNode | [Node](api-classes-blessed-d-widgets.node.md) |

**Returns:** `void`

___
<a id="insertbefore"></a>

###  insertBefore

▸ **insertBefore**(node: *[Node](api-classes-blessed-d-widgets.node.md)*, refNode: *[Node](api-classes-blessed-d-widgets.node.md)*): `void`

*Inherited from [Node](api-classes-blessed-d-widgets.node.md).[insertBefore](api-classes-blessed-d-widgets.node.md#insertbefore)*

*Defined in [blessed.d.ts:1742](https://github.com/cancerberoSgx/accursed/blob/7a42e78/src/declarations/blessed.d.ts#L1742)*

Insert a node to this node's children before the reference node.

**Parameters:**

| Name | Type |
| ------ | ------ |
| node | [Node](api-classes-blessed-d-widgets.node.md) |
| refNode | [Node](api-classes-blessed-d-widgets.node.md) |

**Returns:** `void`

___
<a id="insertbottom"></a>

###  insertBottom

▸ **insertBottom**(top: *`number`*, bottom: *`number`*): `void`

*Defined in [blessed.d.ts:2470](https://github.com/cancerberoSgx/accursed/blob/7a42e78/src/declarations/blessed.d.ts#L2470)*

Insert a line at the bottom of the screen.

**Parameters:**

| Name | Type |
| ------ | ------ |
| top | `number` |
| bottom | `number` |

**Returns:** `void`

___
<a id="insertline"></a>

###  insertLine

▸ **insertLine**(n: *`number`*, y: *`number`*, top: *`number`*, bottom: *`number`*): `void`

*Defined in [blessed.d.ts:2460](https://github.com/cancerberoSgx/accursed/blob/7a42e78/src/declarations/blessed.d.ts#L2460)*

Insert a line into the screen (using csr: this bypasses the output buffer).

**Parameters:**

| Name | Type |
| ------ | ------ |
| n | `number` |
| y | `number` |
| top | `number` |
| bottom | `number` |

**Returns:** `void`

___
<a id="inserttop"></a>

###  insertTop

▸ **insertTop**(top: *`number`*, bottom: *`number`*): `void`

*Defined in [blessed.d.ts:2475](https://github.com/cancerberoSgx/accursed/blob/7a42e78/src/declarations/blessed.d.ts#L2475)*

Insert a line at the top of the screen.

**Parameters:**

| Name | Type |
| ------ | ------ |
| top | `number` |
| bottom | `number` |

**Returns:** `void`

___
<a id="key"></a>

###  key

▸ **key**(name: *`string` \| `string`[]*, listener: *[KeyEventListener](api-modules-blessed-d-widgets.md#keyeventlistener)*): `void`

*Inherited from [NodeWithEvents](api-classes-blessed-d-widgets.nodewithevents.md).[key](api-classes-blessed-d-widgets.nodewithevents.md#key)*

*Defined in [blessed.d.ts:1859](https://github.com/cancerberoSgx/accursed/blob/7a42e78/src/declarations/blessed.d.ts#L1859)*

Bind a keypress listener for a specific key.

**Parameters:**

| Name | Type |
| ------ | ------ |
| name | `string` \| `string`[] |
| listener | [KeyEventListener](api-modules-blessed-d-widgets.md#keyeventlistener) |

**Returns:** `void`

___
<a id="leave"></a>

###  leave

▸ **leave**(): `void`

*Defined in [blessed.d.ts:2369](https://github.com/cancerberoSgx/accursed/blob/7a42e78/src/declarations/blessed.d.ts#L2369)*

Resets the focus, buffers, clear the sreen, alloc new memory, reset the keypad keys, stop listening to the mouse, etc. But won't emit destroy or other events nor unregister any listener. (I guess is like a reset)

*__internal__*: 

**Returns:** `void`

___
<a id="listenercount"></a>

###  listenerCount

▸ **listenerCount**(type: *`string` \| `symbol`*): `number`

*Inherited from EventEmitter.listenerCount*

*Overrides EventEmitter.listenerCount*

*Defined in /Users/sebastiangurin/git/accursed/node_modules/@types/node/events.d.ts:24*

**Parameters:**

| Name | Type |
| ------ | ------ |
| type | `string` \| `symbol` |

**Returns:** `number`

___
<a id="listeners"></a>

###  listeners

▸ **listeners**(event: *`string` \| `symbol`*): `Function`[]

*Inherited from EventEmitter.listeners*

*Overrides EventEmitter.listeners*

*Defined in /Users/sebastiangurin/git/accursed/node_modules/@types/node/events.d.ts:20*

**Parameters:**

| Name | Type |
| ------ | ------ |
| event | `string` \| `symbol` |

**Returns:** `Function`[]

___
<a id="log"></a>

###  log

▸ **log**(...msg: *`any`[]*): `void`

*Defined in [blessed.d.ts:2343](https://github.com/cancerberoSgx/accursed/blob/7a42e78/src/declarations/blessed.d.ts#L2343)*

Write string to the log file if one was created.

**Parameters:**

| Name | Type |
| ------ | ------ |
| `Rest` msg | `any`[] |

**Returns:** `void`

___
<a id="off"></a>

###  off

▸ **off**(event: *`string` \| `symbol`*, listener: *`function`*): `this`

*Inherited from EventEmitter.off*

*Overrides EventEmitter.off*

*Defined in /Users/sebastiangurin/git/accursed/node_modules/@types/node/events.d.ts:16*

**Parameters:**

| Name | Type |
| ------ | ------ |
| event | `string` \| `symbol` |
| listener | `function` |

**Returns:** `this`

___
<a id="on"></a>

###  on

▸ **on**(event: *`string`*, listener: *`function`*): `this`

▸ **on**(event: *[NodeMouseEventType](api-modules-blessed-d-widgets.md#nodemouseeventtype)*, callback: *`function`*): `this`

▸ **on**(event: *"keypress"*, callback: *[KeyEventListener](api-modules-blessed-d-widgets.md#keyeventlistener)*): `this`

▸ **on**(event: *[NodeScreenEventType](api-modules-blessed-d-widgets.md#nodescreeneventtype)*, callback: *`function`*): `this`

▸ **on**(event: *"warning"*, callback: *`function`*): `this`

▸ **on**(event: *[NodeGenericEventType](api-modules-blessed-d-widgets.md#nodegenericeventtype)*, callback: *`function`*): `this`

*Inherited from [NodeWithEvents](api-classes-blessed-d-widgets.nodewithevents.md).[on](api-classes-blessed-d-widgets.nodewithevents.md#on)*

*Overrides [Node](api-classes-blessed-d-widgets.node.md).[on](api-classes-blessed-d-widgets.node.md#on)*

*Defined in [blessed.d.ts:1872](https://github.com/cancerberoSgx/accursed/blob/7a42e78/src/declarations/blessed.d.ts#L1872)*

**Parameters:**

| Name | Type |
| ------ | ------ |
| event | `string` |
| listener | `function` |

**Returns:** `this`

*Inherited from [NodeWithEvents](api-classes-blessed-d-widgets.nodewithevents.md).[on](api-classes-blessed-d-widgets.nodewithevents.md#on)*

*Overrides [Node](api-classes-blessed-d-widgets.node.md).[on](api-classes-blessed-d-widgets.node.md#on)*

*Defined in [blessed.d.ts:1874](https://github.com/cancerberoSgx/accursed/blob/7a42e78/src/declarations/blessed.d.ts#L1874)*

Received on mouse events.

**Parameters:**

| Name | Type |
| ------ | ------ |
| event | [NodeMouseEventType](api-modules-blessed-d-widgets.md#nodemouseeventtype) |
| callback | `function` |

**Returns:** `this`

*Inherited from [NodeWithEvents](api-classes-blessed-d-widgets.nodewithevents.md).[on](api-classes-blessed-d-widgets.nodewithevents.md#on)*

*Overrides [Node](api-classes-blessed-d-widgets.node.md).[on](api-classes-blessed-d-widgets.node.md#on)*

*Defined in [blessed.d.ts:1877](https://github.com/cancerberoSgx/accursed/blob/7a42e78/src/declarations/blessed.d.ts#L1877)*

Received on key events.

**Parameters:**

| Name | Type |
| ------ | ------ |
| event | "keypress" |
| callback | [KeyEventListener](api-modules-blessed-d-widgets.md#keyeventlistener) |

**Returns:** `this`

*Inherited from [NodeWithEvents](api-classes-blessed-d-widgets.nodewithevents.md).[on](api-classes-blessed-d-widgets.nodewithevents.md#on)*

*Overrides [Node](api-classes-blessed-d-widgets.node.md).[on](api-classes-blessed-d-widgets.node.md#on)*

*Defined in [blessed.d.ts:1878](https://github.com/cancerberoSgx/accursed/blob/7a42e78/src/declarations/blessed.d.ts#L1878)*

**Parameters:**

| Name | Type |
| ------ | ------ |
| event | [NodeScreenEventType](api-modules-blessed-d-widgets.md#nodescreeneventtype) |
| callback | `function` |

**Returns:** `this`

*Inherited from [NodeWithEvents](api-classes-blessed-d-widgets.nodewithevents.md).[on](api-classes-blessed-d-widgets.nodewithevents.md#on)*

*Overrides [Node](api-classes-blessed-d-widgets.node.md).[on](api-classes-blessed-d-widgets.node.md#on)*

*Defined in [blessed.d.ts:1880](https://github.com/cancerberoSgx/accursed/blob/7a42e78/src/declarations/blessed.d.ts#L1880)*

Received when blessed notices something untoward (output is not a tty, terminfo not found, etc).

**Parameters:**

| Name | Type |
| ------ | ------ |
| event | "warning" |
| callback | `function` |

**Returns:** `this`

*Inherited from [NodeWithEvents](api-classes-blessed-d-widgets.nodewithevents.md).[on](api-classes-blessed-d-widgets.nodewithevents.md#on)*

*Overrides [Node](api-classes-blessed-d-widgets.node.md).[on](api-classes-blessed-d-widgets.node.md#on)*

*Defined in [blessed.d.ts:1881](https://github.com/cancerberoSgx/accursed/blob/7a42e78/src/declarations/blessed.d.ts#L1881)*

**Parameters:**

| Name | Type |
| ------ | ------ |
| event | [NodeGenericEventType](api-modules-blessed-d-widgets.md#nodegenericeventtype) |
| callback | `function` |

**Returns:** `this`

___
<a id="once"></a>

###  once

▸ **once**(event: *`string` \| `symbol`*, listener: *`function`*): `this`

*Inherited from EventEmitter.once*

*Overrides EventEmitter.once*

*Defined in /Users/sebastiangurin/git/accursed/node_modules/@types/node/events.d.ts:12*

**Parameters:**

| Name | Type |
| ------ | ------ |
| event | `string` \| `symbol` |
| listener | `function` |

**Returns:** `this`

___
<a id="oncekey"></a>

###  onceKey

▸ **onceKey**(name: *`string`*, listener: *[KeyEventListener](api-modules-blessed-d-widgets.md#keyeventlistener)*): `void`

*Inherited from [NodeWithEvents](api-classes-blessed-d-widgets.nodewithevents.md).[onceKey](api-classes-blessed-d-widgets.nodewithevents.md#oncekey)*

*Defined in [blessed.d.ts:1864](https://github.com/cancerberoSgx/accursed/blob/7a42e78/src/declarations/blessed.d.ts#L1864)*

Bind a keypress listener for a specific key once.

**Parameters:**

| Name | Type |
| ------ | ------ |
| name | `string` |
| listener | [KeyEventListener](api-modules-blessed-d-widgets.md#keyeventlistener) |

**Returns:** `void`

___
<a id="postenter"></a>

###  postEnter

▸ **postEnter**(): `void`

*Defined in [blessed.d.ts:2374](https://github.com/cancerberoSgx/accursed/blob/7a42e78/src/declarations/blessed.d.ts#L2374)*

*__internal__*: 

**Returns:** `void`

___
<a id="prepend"></a>

###  prepend

▸ **prepend**(node: *[Node](api-classes-blessed-d-widgets.node.md)*): `void`

*Inherited from [Node](api-classes-blessed-d-widgets.node.md).[prepend](api-classes-blessed-d-widgets.node.md#prepend)*

*Defined in [blessed.d.ts:1722](https://github.com/cancerberoSgx/accursed/blob/7a42e78/src/declarations/blessed.d.ts#L1722)*

Prepend a node to this node's children.

**Parameters:**

| Name | Type |
| ------ | ------ |
| node | [Node](api-classes-blessed-d-widgets.node.md) |

**Returns:** `void`

___
<a id="prependlistener"></a>

###  prependListener

▸ **prependListener**(event: *`string` \| `symbol`*, listener: *`function`*): `this`

*Inherited from EventEmitter.prependListener*

*Overrides EventEmitter.prependListener*

*Defined in /Users/sebastiangurin/git/accursed/node_modules/@types/node/events.d.ts:13*

**Parameters:**

| Name | Type |
| ------ | ------ |
| event | `string` \| `symbol` |
| listener | `function` |

**Returns:** `this`

___
<a id="prependoncelistener"></a>

###  prependOnceListener

▸ **prependOnceListener**(event: *`string` \| `symbol`*, listener: *`function`*): `this`

*Inherited from EventEmitter.prependOnceListener*

*Overrides EventEmitter.prependOnceListener*

*Defined in /Users/sebastiangurin/git/accursed/node_modules/@types/node/events.d.ts:14*

**Parameters:**

| Name | Type |
| ------ | ------ |
| event | `string` \| `symbol` |
| listener | `function` |

**Returns:** `this`

___
<a id="rawlisteners"></a>

###  rawListeners

▸ **rawListeners**(event: *`string` \| `symbol`*): `Function`[]

*Inherited from EventEmitter.rawListeners*

*Overrides EventEmitter.rawListeners*

*Defined in /Users/sebastiangurin/git/accursed/node_modules/@types/node/events.d.ts:21*

**Parameters:**

| Name | Type |
| ------ | ------ |
| event | `string` \| `symbol` |

**Returns:** `Function`[]

___
<a id="readeditor"></a>

###  readEditor

▸ **readEditor**(options: *`any`*, callback: *`function`*): `void`

▸ **readEditor**(callback: *`function`*): `void`

*Defined in [blessed.d.ts:2449](https://github.com/cancerberoSgx/accursed/blob/7a42e78/src/declarations/blessed.d.ts#L2449)*

Read data from text editor.

**Parameters:**

| Name | Type |
| ------ | ------ |
| options | `any` |
| callback | `function` |

**Returns:** `void`

*Defined in [blessed.d.ts:2450](https://github.com/cancerberoSgx/accursed/blob/7a42e78/src/declarations/blessed.d.ts#L2450)*

**Parameters:**

| Name | Type |
| ------ | ------ |
| callback | `function` |

**Returns:** `void`

___
<a id="realloc"></a>

###  realloc

▸ **realloc**(): `void`

*Defined in [blessed.d.ts:2358](https://github.com/cancerberoSgx/accursed/blob/7a42e78/src/declarations/blessed.d.ts#L2358)*

Reallocate the screen buffers and clear the screen.

**Returns:** `void`

___
<a id="remove"></a>

###  remove

▸ **remove**(node: *[Node](api-classes-blessed-d-widgets.node.md)*): `void`

*Inherited from [Node](api-classes-blessed-d-widgets.node.md).[remove](api-classes-blessed-d-widgets.node.md#remove)*

*Defined in [blessed.d.ts:1732](https://github.com/cancerberoSgx/accursed/blob/7a42e78/src/declarations/blessed.d.ts#L1732)*

Remove child node from node.

**Parameters:**

| Name | Type |
| ------ | ------ |
| node | [Node](api-classes-blessed-d-widgets.node.md) |

**Returns:** `void`

___
<a id="removealllisteners"></a>

###  removeAllListeners

▸ **removeAllListeners**(event?: *`string` \| `symbol`*): `this`

*Inherited from EventEmitter.removeAllListeners*

*Overrides EventEmitter.removeAllListeners*

*Defined in /Users/sebastiangurin/git/accursed/node_modules/@types/node/events.d.ts:17*

**Parameters:**

| Name | Type |
| ------ | ------ |
| `Optional` event | `string` \| `symbol` |

**Returns:** `this`

___
<a id="removekey"></a>

###  removeKey

▸ **removeKey**(name: *`string`*, listener: *[KeyEventListener](api-modules-blessed-d-widgets.md#keyeventlistener)*): `void`

*Inherited from [NodeWithEvents](api-classes-blessed-d-widgets.nodewithevents.md).[removeKey](api-classes-blessed-d-widgets.nodewithevents.md#removekey)*

*Defined in [blessed.d.ts:1870](https://github.com/cancerberoSgx/accursed/blob/7a42e78/src/declarations/blessed.d.ts#L1870)*

**Parameters:**

| Name | Type |
| ------ | ------ |
| name | `string` |
| listener | [KeyEventListener](api-modules-blessed-d-widgets.md#keyeventlistener) |

**Returns:** `void`

___
<a id="removelistener"></a>

###  removeListener

▸ **removeListener**(event: *`string` \| `symbol`*, listener: *`function`*): `this`

*Inherited from EventEmitter.removeListener*

*Overrides EventEmitter.removeListener*

*Defined in /Users/sebastiangurin/git/accursed/node_modules/@types/node/events.d.ts:15*

**Parameters:**

| Name | Type |
| ------ | ------ |
| event | `string` \| `symbol` |
| listener | `function` |

**Returns:** `this`

___
<a id="render"></a>

###  render

▸ **render**(): `void`

*Defined in [blessed.d.ts:2379](https://github.com/cancerberoSgx/accursed/blob/7a42e78/src/declarations/blessed.d.ts#L2379)*

Render all child elements, writing all data to the screen buffer and drawing the screen.

**Returns:** `void`

___
<a id="restorefocus"></a>

###  restoreFocus

▸ **restoreFocus**(): [BlessedElement](api-classes-blessed-d-widgets.blessedelement.md)

*Defined in [blessed.d.ts:2424](https://github.com/cancerberoSgx/accursed/blob/7a42e78/src/declarations/blessed.d.ts#L2424)*

Restore the saved focused element.

**Returns:** [BlessedElement](api-classes-blessed-d-widgets.blessedelement.md)

___
<a id="rewindfocus"></a>

###  rewindFocus

▸ **rewindFocus**(): [BlessedElement](api-classes-blessed-d-widgets.blessedelement.md)

*Defined in [blessed.d.ts:2429](https://github.com/cancerberoSgx/accursed/blob/7a42e78/src/declarations/blessed.d.ts#L2429)*

"Rewind" focus to the last visible and attached element.

**Returns:** [BlessedElement](api-classes-blessed-d-widgets.blessedelement.md)

___
<a id="savefocus"></a>

###  saveFocus

▸ **saveFocus**(): [BlessedElement](api-classes-blessed-d-widgets.blessedelement.md)

*Defined in [blessed.d.ts:2419](https://github.com/cancerberoSgx/accursed/blob/7a42e78/src/declarations/blessed.d.ts#L2419)*

Save the focused element.

**Returns:** [BlessedElement](api-classes-blessed-d-widgets.blessedelement.md)

___
<a id="screenshot"></a>

###  screenshot

▸ **screenshot**(xi: *`number`*, xl: *`number`*, yi: *`number`*, yl: *`number`*): `string`

▸ **screenshot**(): `void`

*Defined in [blessed.d.ts:2529](https://github.com/cancerberoSgx/accursed/blob/7a42e78/src/declarations/blessed.d.ts#L2529)*

Take an SGR screenshot of the screen within the region. Returns a string containing only characters and SGR codes. Can be displayed by simply echoing it in a terminal.

**Parameters:**

| Name | Type |
| ------ | ------ |
| xi | `number` |
| xl | `number` |
| yi | `number` |
| yl | `number` |

**Returns:** `string`

*Defined in [blessed.d.ts:2530](https://github.com/cancerberoSgx/accursed/blob/7a42e78/src/declarations/blessed.d.ts#L2530)*

**Returns:** `void`

___
<a id="set"></a>

###  set

▸ **set**(name: *`string`*, value: *`any`*): `void`

*Inherited from [Node](api-classes-blessed-d-widgets.node.md).[set](api-classes-blessed-d-widgets.node.md#set)*

*Defined in [blessed.d.ts:1782](https://github.com/cancerberoSgx/accursed/blob/7a42e78/src/declarations/blessed.d.ts#L1782)*

Set user property to value.

**Parameters:**

| Name | Type |
| ------ | ------ |
| name | `string` |
| value | `any` |

**Returns:** `void`

___
<a id="seteffects"></a>

###  setEffects

▸ **setEffects**(el: *[BlessedElement](api-classes-blessed-d-widgets.blessedelement.md)*, fel: *[BlessedElement](api-classes-blessed-d-widgets.blessedelement.md)*, over: *`any`*, out: *`any`*, effects: *`any`*, temp: *`any`*): `void`

*Defined in [blessed.d.ts:2455](https://github.com/cancerberoSgx/accursed/blob/7a42e78/src/declarations/blessed.d.ts#L2455)*

Set effects based on two events and attributes.

**Parameters:**

| Name | Type |
| ------ | ------ |
| el | [BlessedElement](api-classes-blessed-d-widgets.blessedelement.md) |
| fel | [BlessedElement](api-classes-blessed-d-widgets.blessedelement.md) |
| over | `any` |
| out | `any` |
| effects | `any` |
| temp | `any` |

**Returns:** `void`

___
<a id="setmaxlisteners"></a>

###  setMaxListeners

▸ **setMaxListeners**(n: *`number`*): `this`

*Inherited from EventEmitter.setMaxListeners*

*Overrides EventEmitter.setMaxListeners*

*Defined in /Users/sebastiangurin/git/accursed/node_modules/@types/node/events.d.ts:18*

**Parameters:**

| Name | Type |
| ------ | ------ |
| n | `number` |

**Returns:** `this`

___
<a id="setterminal"></a>

###  setTerminal

▸ **setTerminal**(term: *`string`*): `void`

*Defined in [blessed.d.ts:2542](https://github.com/cancerberoSgx/accursed/blob/7a42e78/src/declarations/blessed.d.ts#L2542)*

Reset the terminal to term. Reloads terminfo.

**Parameters:**

| Name | Type |
| ------ | ------ |
| term | `string` |

**Returns:** `void`

___
<a id="spawn"></a>

###  spawn

▸ **spawn**(file: *`string`*, args?: *`string`[]*, options?: *[NodeChildProcessExecOptions](api-interfaces-blessed-d-widgets.nodechildprocessexecoptions.md)*): `ChildProcess`

*Defined in [blessed.d.ts:2434](https://github.com/cancerberoSgx/accursed/blob/7a42e78/src/declarations/blessed.d.ts#L2434)*

Spawn a process in the foreground, return to blessed app after exit.

**Parameters:**

| Name | Type |
| ------ | ------ |
| file | `string` |
| `Optional` args | `string`[] |
| `Optional` options | [NodeChildProcessExecOptions](api-interfaces-blessed-d-widgets.nodechildprocessexecoptions.md) |

**Returns:** `ChildProcess`

___
<a id="unkey"></a>

###  unkey

▸ **unkey**(name: *`string`*, listener: *[KeyEventListener](api-modules-blessed-d-widgets.md#keyeventlistener)*): `void`

*Inherited from [NodeWithEvents](api-classes-blessed-d-widgets.nodewithevents.md).[unkey](api-classes-blessed-d-widgets.nodewithevents.md#unkey)*

*Defined in [blessed.d.ts:1869](https://github.com/cancerberoSgx/accursed/blob/7a42e78/src/declarations/blessed.d.ts#L1869)*

Remove a keypress listener for a specific key.

**Parameters:**

| Name | Type |
| ------ | ------ |
| name | `string` |
| listener | [KeyEventListener](api-modules-blessed-d-widgets.md#keyeventlistener) |

**Returns:** `void`

___
<a id="listenercount-1"></a>

### `<Static>` listenerCount

▸ **listenerCount**(emitter: *`EventEmitter`*, event: *`string` \| `symbol`*): `number`

*Inherited from EventEmitter.listenerCount*

*Defined in /Users/sebastiangurin/git/accursed/node_modules/@types/node/events.d.ts:7*

*__deprecated__*: since v4.0.0

**Parameters:**

| Name | Type |
| ------ | ------ |
| emitter | `EventEmitter` |
| event | `string` \| `symbol` |

**Returns:** `number`

___
