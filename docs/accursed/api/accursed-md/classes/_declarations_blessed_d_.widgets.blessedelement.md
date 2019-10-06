[accursed](../README.md) › [Globals](../globals.md) › ["declarations/blessed.d"](../modules/_declarations_blessed_d_.md) › [Widgets](../modules/_declarations_blessed_d_.widgets.md) › [BlessedElement](_declarations_blessed_d_.widgets.blessedelement.md)

# Class: BlessedElement <**Options**>

Abstract base element. Elements are [Node](_declarations_blessed_d_.widgets.node.md) that are rendered visually so they have dimention, position, content,
border, padding, etc.

## Content Methods

* Methods for dealing with text content, line by line. Useful for writing a text editor,
irc client, etc.

* Note: All of these methods deal with pre-aligned, pre-wrapped text. If you use deleteTop()
on a box with a wrapped line at the top, it may remove 3-4 "real" lines (rows) depending
on how long the original line was.

* The lines parameter can be a string or an array of strings. The line parameter must
be a string.

## Type parameters

▪ **Options**: *[ElementOptions](../interfaces/_declarations_blessed_d_.widgets.elementoptions.md)*

## Hierarchy

  ↳ [NodeWithEvents](_declarations_blessed_d_.widgets.nodewithevents.md)

  ↳ **BlessedElement**

  ↳ [ScrollableBoxElement](_declarations_blessed_d_.widgets.scrollableboxelement.md)

  ↳ [TextElement](_declarations_blessed_d_.widgets.textelement.md)

  ↳ [LayoutElement](_declarations_blessed_d_.widgets.layoutelement.md)

  ↳ [Element](_declarations_blessed_d_.widget.element.md)

## Implements

* [IHasOptions](../interfaces/_declarations_blessed_d_.widgets.ihasoptions.md)‹[INodeOptions](../interfaces/_declarations_blessed_d_.widgets.inodeoptions.md)›
* [IDestroyable](../interfaces/_declarations_blessed_d_.widgets.idestroyable.md)
* [IHasOptions](../interfaces/_declarations_blessed_d_.widgets.ihasoptions.md)‹[ElementOptions](../interfaces/_declarations_blessed_d_.widgets.elementoptions.md)›

## Index

### Constructors

* [constructor](_declarations_blessed_d_.widgets.blessedelement.md#constructor)

### Properties

* [$](_declarations_blessed_d_.widgets.blessedelement.md#$)
* [_](_declarations_blessed_d_.widgets.blessedelement.md#_)
* [_label](_declarations_blessed_d_.widgets.blessedelement.md#optional-_label)
* [_noFill](_declarations_blessed_d_.widgets.blessedelement.md#optional-_nofill)
* [abottom](_declarations_blessed_d_.widgets.blessedelement.md#abottom)
* [aleft](_declarations_blessed_d_.widgets.blessedelement.md#aleft)
* [aright](_declarations_blessed_d_.widgets.blessedelement.md#aright)
* [atop](_declarations_blessed_d_.widgets.blessedelement.md#atop)
* [bg](_declarations_blessed_d_.widgets.blessedelement.md#bg)
* [bold](_declarations_blessed_d_.widgets.blessedelement.md#bold)
* [border](_declarations_blessed_d_.widgets.blessedelement.md#border)
* [bottom](_declarations_blessed_d_.widgets.blessedelement.md#bottom)
* [children](_declarations_blessed_d_.widgets.blessedelement.md#children)
* [content](_declarations_blessed_d_.widgets.blessedelement.md#content)
* [data](_declarations_blessed_d_.widgets.blessedelement.md#data)
* [detached](_declarations_blessed_d_.widgets.blessedelement.md#detached)
* [draggable](_declarations_blessed_d_.widgets.blessedelement.md#draggable)
* [fg](_declarations_blessed_d_.widgets.blessedelement.md#fg)
* [focusable](_declarations_blessed_d_.widgets.blessedelement.md#focusable)
* [height](_declarations_blessed_d_.widgets.blessedelement.md#height)
* [hidden](_declarations_blessed_d_.widgets.blessedelement.md#hidden)
* [iheight](_declarations_blessed_d_.widgets.blessedelement.md#iheight)
* [ileft](_declarations_blessed_d_.widgets.blessedelement.md#ileft)
* [index](_declarations_blessed_d_.widgets.blessedelement.md#index)
* [itop](_declarations_blessed_d_.widgets.blessedelement.md#itop)
* [iwidth](_declarations_blessed_d_.widgets.blessedelement.md#iwidth)
* [left](_declarations_blessed_d_.widgets.blessedelement.md#left)
* [lpos](_declarations_blessed_d_.widgets.blessedelement.md#lpos)
* [name](_declarations_blessed_d_.widgets.blessedelement.md#name)
* [options](_declarations_blessed_d_.widgets.blessedelement.md#options)
* [padding](_declarations_blessed_d_.widgets.blessedelement.md#padding)
* [parent](_declarations_blessed_d_.widgets.blessedelement.md#optional-parent)
* [position](_declarations_blessed_d_.widgets.blessedelement.md#position)
* [rbottom](_declarations_blessed_d_.widgets.blessedelement.md#rbottom)
* [right](_declarations_blessed_d_.widgets.blessedelement.md#right)
* [rleft](_declarations_blessed_d_.widgets.blessedelement.md#rleft)
* [rright](_declarations_blessed_d_.widgets.blessedelement.md#rright)
* [rtop](_declarations_blessed_d_.widgets.blessedelement.md#rtop)
* [screen](_declarations_blessed_d_.widgets.blessedelement.md#screen)
* [shrink](_declarations_blessed_d_.widgets.blessedelement.md#shrink)
* [style](_declarations_blessed_d_.widgets.blessedelement.md#style)
* [top](_declarations_blessed_d_.widgets.blessedelement.md#top)
* [tpadding](_declarations_blessed_d_.widgets.blessedelement.md#tpadding)
* [type](_declarations_blessed_d_.widgets.blessedelement.md#type)
* [uid](_declarations_blessed_d_.widgets.blessedelement.md#uid)
* [underline](_declarations_blessed_d_.widgets.blessedelement.md#underline)
* [visible](_declarations_blessed_d_.widgets.blessedelement.md#visible)
* [width](_declarations_blessed_d_.widgets.blessedelement.md#width)
* [defaultMaxListeners](_declarations_blessed_d_.widgets.blessedelement.md#static-defaultmaxlisteners)

### Methods

* [_align](_declarations_blessed_d_.widgets.blessedelement.md#_align)
* [_getBottom](_declarations_blessed_d_.widgets.blessedelement.md#_getbottom)
* [_getCoords](_declarations_blessed_d_.widgets.blessedelement.md#_getcoords)
* [_getHeight](_declarations_blessed_d_.widgets.blessedelement.md#_getheight)
* [_getLeft](_declarations_blessed_d_.widgets.blessedelement.md#_getleft)
* [_getPos](_declarations_blessed_d_.widgets.blessedelement.md#_getpos)
* [_getRight](_declarations_blessed_d_.widgets.blessedelement.md#_getright)
* [_getShrink](_declarations_blessed_d_.widgets.blessedelement.md#_getshrink)
* [_getShrinkBox](_declarations_blessed_d_.widgets.blessedelement.md#_getshrinkbox)
* [_getTop](_declarations_blessed_d_.widgets.blessedelement.md#_gettop)
* [_getWidth](_declarations_blessed_d_.widgets.blessedelement.md#_getwidth)
* [_parseAttr](_declarations_blessed_d_.widgets.blessedelement.md#_parseattr)
* [_parseTags](_declarations_blessed_d_.widgets.blessedelement.md#_parsetags)
* [_wrapContent](_declarations_blessed_d_.widgets.blessedelement.md#_wrapcontent)
* [addListener](_declarations_blessed_d_.widgets.blessedelement.md#addlistener)
* [append](_declarations_blessed_d_.widgets.blessedelement.md#append)
* [clearBaseLine](_declarations_blessed_d_.widgets.blessedelement.md#clearbaseline)
* [clearLine](_declarations_blessed_d_.widgets.blessedelement.md#clearline)
* [clearPos](_declarations_blessed_d_.widgets.blessedelement.md#clearpos)
* [collectAncestors](_declarations_blessed_d_.widgets.blessedelement.md#collectancestors)
* [collectDescendants](_declarations_blessed_d_.widgets.blessedelement.md#collectdescendants)
* [deleteBottom](_declarations_blessed_d_.widgets.blessedelement.md#deletebottom)
* [deleteLine](_declarations_blessed_d_.widgets.blessedelement.md#deleteline)
* [deleteTop](_declarations_blessed_d_.widgets.blessedelement.md#deletetop)
* [destroy](_declarations_blessed_d_.widgets.blessedelement.md#destroy)
* [detach](_declarations_blessed_d_.widgets.blessedelement.md#detach)
* [disableDrag](_declarations_blessed_d_.widgets.blessedelement.md#disabledrag)
* [emit](_declarations_blessed_d_.widgets.blessedelement.md#emit)
* [emitAncestors](_declarations_blessed_d_.widgets.blessedelement.md#emitancestors)
* [emitDescendants](_declarations_blessed_d_.widgets.blessedelement.md#emitdescendants)
* [enableDrag](_declarations_blessed_d_.widgets.blessedelement.md#enabledrag)
* [enableInput](_declarations_blessed_d_.widgets.blessedelement.md#enableinput)
* [enableKeys](_declarations_blessed_d_.widgets.blessedelement.md#enablekeys)
* [enableMouse](_declarations_blessed_d_.widgets.blessedelement.md#enablemouse)
* [eventNames](_declarations_blessed_d_.widgets.blessedelement.md#eventnames)
* [focus](_declarations_blessed_d_.widgets.blessedelement.md#focus)
* [forAncestors](_declarations_blessed_d_.widgets.blessedelement.md#forancestors)
* [forDescendants](_declarations_blessed_d_.widgets.blessedelement.md#fordescendants)
* [free](_declarations_blessed_d_.widgets.blessedelement.md#free)
* [get](_declarations_blessed_d_.widgets.blessedelement.md#get)
* [getBaseLine](_declarations_blessed_d_.widgets.blessedelement.md#getbaseline)
* [getContent](_declarations_blessed_d_.widgets.blessedelement.md#getcontent)
* [getLine](_declarations_blessed_d_.widgets.blessedelement.md#getline)
* [getLines](_declarations_blessed_d_.widgets.blessedelement.md#getlines)
* [getMaxListeners](_declarations_blessed_d_.widgets.blessedelement.md#getmaxlisteners)
* [getScreenLines](_declarations_blessed_d_.widgets.blessedelement.md#getscreenlines)
* [getText](_declarations_blessed_d_.widgets.blessedelement.md#gettext)
* [hasAncestor](_declarations_blessed_d_.widgets.blessedelement.md#hasancestor)
* [hasDescendant](_declarations_blessed_d_.widgets.blessedelement.md#hasdescendant)
* [hide](_declarations_blessed_d_.widgets.blessedelement.md#hide)
* [insert](_declarations_blessed_d_.widgets.blessedelement.md#insert)
* [insertAfter](_declarations_blessed_d_.widgets.blessedelement.md#insertafter)
* [insertBefore](_declarations_blessed_d_.widgets.blessedelement.md#insertbefore)
* [insertBottom](_declarations_blessed_d_.widgets.blessedelement.md#insertbottom)
* [insertLine](_declarations_blessed_d_.widgets.blessedelement.md#insertline)
* [insertTop](_declarations_blessed_d_.widgets.blessedelement.md#inserttop)
* [key](_declarations_blessed_d_.widgets.blessedelement.md#key)
* [kill](_declarations_blessed_d_.widgets.blessedelement.md#kill)
* [listenerCount](_declarations_blessed_d_.widgets.blessedelement.md#listenercount)
* [listeners](_declarations_blessed_d_.widgets.blessedelement.md#listeners)
* [off](_declarations_blessed_d_.widgets.blessedelement.md#off)
* [on](_declarations_blessed_d_.widgets.blessedelement.md#on)
* [onScreenEvent](_declarations_blessed_d_.widgets.blessedelement.md#onscreenevent)
* [once](_declarations_blessed_d_.widgets.blessedelement.md#once)
* [onceKey](_declarations_blessed_d_.widgets.blessedelement.md#oncekey)
* [parseContent](_declarations_blessed_d_.widgets.blessedelement.md#parsecontent)
* [popLine](_declarations_blessed_d_.widgets.blessedelement.md#popline)
* [prepend](_declarations_blessed_d_.widgets.blessedelement.md#prepend)
* [prependListener](_declarations_blessed_d_.widgets.blessedelement.md#prependlistener)
* [prependOnceListener](_declarations_blessed_d_.widgets.blessedelement.md#prependoncelistener)
* [pushLine](_declarations_blessed_d_.widgets.blessedelement.md#pushline)
* [rawListeners](_declarations_blessed_d_.widgets.blessedelement.md#rawlisteners)
* [remove](_declarations_blessed_d_.widgets.blessedelement.md#remove)
* [removeAllListeners](_declarations_blessed_d_.widgets.blessedelement.md#removealllisteners)
* [removeHover](_declarations_blessed_d_.widgets.blessedelement.md#removehover)
* [removeKey](_declarations_blessed_d_.widgets.blessedelement.md#removekey)
* [removeLabel](_declarations_blessed_d_.widgets.blessedelement.md#removelabel)
* [removeListener](_declarations_blessed_d_.widgets.blessedelement.md#removelistener)
* [removeScreenEvent](_declarations_blessed_d_.widgets.blessedelement.md#removescreenevent)
* [render](_declarations_blessed_d_.widgets.blessedelement.md#render)
* [sattr](_declarations_blessed_d_.widgets.blessedelement.md#sattr)
* [screenshot](_declarations_blessed_d_.widgets.blessedelement.md#screenshot)
* [set](_declarations_blessed_d_.widgets.blessedelement.md#set)
* [setBack](_declarations_blessed_d_.widgets.blessedelement.md#setback)
* [setBaseLine](_declarations_blessed_d_.widgets.blessedelement.md#setbaseline)
* [setContent](_declarations_blessed_d_.widgets.blessedelement.md#setcontent)
* [setFront](_declarations_blessed_d_.widgets.blessedelement.md#setfront)
* [setHover](_declarations_blessed_d_.widgets.blessedelement.md#sethover)
* [setIndex](_declarations_blessed_d_.widgets.blessedelement.md#setindex)
* [setLabel](_declarations_blessed_d_.widgets.blessedelement.md#setlabel)
* [setLine](_declarations_blessed_d_.widgets.blessedelement.md#setline)
* [setMaxListeners](_declarations_blessed_d_.widgets.blessedelement.md#setmaxlisteners)
* [setText](_declarations_blessed_d_.widgets.blessedelement.md#settext)
* [shiftLine](_declarations_blessed_d_.widgets.blessedelement.md#shiftline)
* [show](_declarations_blessed_d_.widgets.blessedelement.md#show)
* [strWidth](_declarations_blessed_d_.widgets.blessedelement.md#strwidth)
* [toggle](_declarations_blessed_d_.widgets.blessedelement.md#toggle)
* [unkey](_declarations_blessed_d_.widgets.blessedelement.md#unkey)
* [unshiftLine](_declarations_blessed_d_.widgets.blessedelement.md#unshiftline)
* [listenerCount](_declarations_blessed_d_.widgets.blessedelement.md#static-listenercount)

## Constructors

###  constructor

\+ **new BlessedElement**(`opts`: Options): *[BlessedElement](_declarations_blessed_d_.widgets.blessedelement.md)*

*Overrides [Node](_declarations_blessed_d_.widgets.node.md).[constructor](_declarations_blessed_d_.widgets.node.md#constructor)*

*Defined in [declarations/blessed.d.ts:1485](https://github.com/cancerberoSgx/accursed/blob/468bf3c/src/declarations/blessed.d.ts#L1485)*

**Parameters:**

Name | Type |
------ | ------ |
`opts` | Options |

**Returns:** *[BlessedElement](_declarations_blessed_d_.widgets.blessedelement.md)*

## Properties

###  $

• **$**: *object*

*Inherited from [Node](_declarations_blessed_d_.widgets.node.md).[$](_declarations_blessed_d_.widgets.node.md#$)*

*Defined in [declarations/blessed.d.ts:289](https://github.com/cancerberoSgx/accursed/blob/468bf3c/src/declarations/blessed.d.ts#L289)*

An object for any miscellaneous user data.

#### Type declaration:

* \[ **index**: *string*\]: any

___

###  _

• **_**: *object*

*Inherited from [Node](_declarations_blessed_d_.widgets.node.md).[_](_declarations_blessed_d_.widgets.node.md#_)*

*Defined in [declarations/blessed.d.ts:284](https://github.com/cancerberoSgx/accursed/blob/468bf3c/src/declarations/blessed.d.ts#L284)*

An object for any miscellaneous user data.

#### Type declaration:

* \[ **index**: *string*\]: any

___

### `Optional` _label

• **_label**? : *[BlessedElement](_declarations_blessed_d_.widgets.blessedelement.md) | undefined*

*Defined in [declarations/blessed.d.ts:1632](https://github.com/cancerberoSgx/accursed/blob/468bf3c/src/declarations/blessed.d.ts#L1632)*

Get's the child element implementing the current label of this node.

**`internal`** 

___

### `Optional` _noFill

• **_noFill**? : *boolean*

*Defined in [declarations/blessed.d.ts:1585](https://github.com/cancerberoSgx/accursed/blob/468bf3c/src/declarations/blessed.d.ts#L1585)*

If true, the element won't be filled.

**`internal`** 

___

###  abottom

• **abottom**: *number*

*Defined in [declarations/blessed.d.ts:1574](https://github.com/cancerberoSgx/accursed/blob/468bf3c/src/declarations/blessed.d.ts#L1574)*

Calculated absolute bottom offset.

___

###  aleft

• **aleft**: *number*

*Defined in [declarations/blessed.d.ts:1564](https://github.com/cancerberoSgx/accursed/blob/468bf3c/src/declarations/blessed.d.ts#L1564)*

Calculated absolute left offset.

___

###  aright

• **aright**: *number*

*Defined in [declarations/blessed.d.ts:1569](https://github.com/cancerberoSgx/accursed/blob/468bf3c/src/declarations/blessed.d.ts#L1569)*

Calculated absolute right offset.

___

###  atop

• **atop**: *number*

*Defined in [declarations/blessed.d.ts:1559](https://github.com/cancerberoSgx/accursed/blob/468bf3c/src/declarations/blessed.d.ts#L1559)*

Calculated absolute top offset.

___

###  bg

• **bg**: *number*

*Defined in [declarations/blessed.d.ts:1516](https://github.com/cancerberoSgx/accursed/blob/468bf3c/src/declarations/blessed.d.ts#L1516)*

Border foreground and background, must be numbers (-1 for default).

___

###  bold

• **bold**: *string*

*Defined in [declarations/blessed.d.ts:1522](https://github.com/cancerberoSgx/accursed/blob/468bf3c/src/declarations/blessed.d.ts#L1522)*

Border attributes.

___

###  border

• **border**: *[TBorder](../interfaces/_declarations_blessed_d_.widgets.types.tborder.md)*

*Defined in [declarations/blessed.d.ts:1501](https://github.com/cancerberoSgx/accursed/blob/468bf3c/src/declarations/blessed.d.ts#L1501)*

Border object.

___

###  bottom

• **bottom**: *number | string*

*Defined in [declarations/blessed.d.ts:1554](https://github.com/cancerberoSgx/accursed/blob/468bf3c/src/declarations/blessed.d.ts#L1554)*

Calculated relative bottom offset.

___

###  children

• **children**: *[Node](_declarations_blessed_d_.widgets.node.md)[]*

*Inherited from [Node](_declarations_blessed_d_.widgets.node.md).[children](_declarations_blessed_d_.widgets.node.md#children)*

*Defined in [declarations/blessed.d.ts:316](https://github.com/cancerberoSgx/accursed/blob/468bf3c/src/declarations/blessed.d.ts#L316)*

Array of node's children.

___

###  content

• **content**: *string*

*Defined in [declarations/blessed.d.ts:1508](https://github.com/cancerberoSgx/accursed/blob/468bf3c/src/declarations/blessed.d.ts#L1508)*

___

###  data

• **data**: *object*

*Inherited from [Node](_declarations_blessed_d_.widgets.node.md).[data](_declarations_blessed_d_.widgets.node.md#data)*

*Defined in [declarations/blessed.d.ts:279](https://github.com/cancerberoSgx/accursed/blob/468bf3c/src/declarations/blessed.d.ts#L279)*

An object for any miscellaneous user data.

#### Type declaration:

* \[ **index**: *string*\]: any

___

###  detached

• **detached**: *boolean*

*Defined in [declarations/blessed.d.ts:1511](https://github.com/cancerberoSgx/accursed/blob/468bf3c/src/declarations/blessed.d.ts#L1511)*

___

###  draggable

• **draggable**: *boolean*

*Defined in [declarations/blessed.d.ts:1579](https://github.com/cancerberoSgx/accursed/blob/468bf3c/src/declarations/blessed.d.ts#L1579)*

Whether the element is draggable. Set to true to allow dragging.

___

###  fg

• **fg**: *number*

*Defined in [declarations/blessed.d.ts:1517](https://github.com/cancerberoSgx/accursed/blob/468bf3c/src/declarations/blessed.d.ts#L1517)*

___

###  focusable

• **focusable**: *boolean*

*Inherited from [Node](_declarations_blessed_d_.widgets.node.md).[focusable](_declarations_blessed_d_.widgets.node.md#focusable)*

*Defined in [declarations/blessed.d.ts:269](https://github.com/cancerberoSgx/accursed/blob/468bf3c/src/declarations/blessed.d.ts#L269)*

If true, `screen.focusNext()` and methods related to focus will consider this Element.

___

###  height

• **height**: *number | string*

*Defined in [declarations/blessed.d.ts:1534](https://github.com/cancerberoSgx/accursed/blob/468bf3c/src/declarations/blessed.d.ts#L1534)*

Calculated height.

___

###  hidden

• **hidden**: *boolean*

*Defined in [declarations/blessed.d.ts:1509](https://github.com/cancerberoSgx/accursed/blob/468bf3c/src/declarations/blessed.d.ts#L1509)*

___

###  iheight

• **iheight**: *number*

*Defined in [declarations/blessed.d.ts:1598](https://github.com/cancerberoSgx/accursed/blob/468bf3c/src/declarations/blessed.d.ts#L1598)*

Calculated height taking into account padding and boder.

___

###  ileft

• **ileft**: *number*

*Defined in [declarations/blessed.d.ts:1594](https://github.com/cancerberoSgx/accursed/blob/468bf3c/src/declarations/blessed.d.ts#L1594)*

Calculated left coordinate taking into account padding and boder.

___

###  index

• **index**: *number*

*Inherited from [Node](_declarations_blessed_d_.widgets.node.md).[index](_declarations_blessed_d_.widgets.node.md#index)*

*Defined in [declarations/blessed.d.ts:301](https://github.com/cancerberoSgx/accursed/blob/468bf3c/src/declarations/blessed.d.ts#L301)*

Render index (document order index) of the last render call.

___

###  itop

• **itop**: *number*

*Defined in [declarations/blessed.d.ts:1590](https://github.com/cancerberoSgx/accursed/blob/468bf3c/src/declarations/blessed.d.ts#L1590)*

Calculated top coordinate taking into account padding and boder.

___

###  iwidth

• **iwidth**: *number*

*Defined in [declarations/blessed.d.ts:1602](https://github.com/cancerberoSgx/accursed/blob/468bf3c/src/declarations/blessed.d.ts#L1602)*

Calculated width taking into account padding and boder.

___

###  left

• **left**: *number | string*

*Defined in [declarations/blessed.d.ts:1544](https://github.com/cancerberoSgx/accursed/blob/468bf3c/src/declarations/blessed.d.ts#L1544)*

Calculated relative left offset.

___

###  lpos

• **lpos**: *[PositionCoords](_declarations_blessed_d_.widgets.positioncoords.md)*

*Inherited from [Node](_declarations_blessed_d_.widgets.node.md).[lpos](_declarations_blessed_d_.widgets.node.md#lpos)*

*Defined in [declarations/blessed.d.ts:291](https://github.com/cancerberoSgx/accursed/blob/468bf3c/src/declarations/blessed.d.ts#L291)*

___

###  name

• **name**: *string*

*Defined in [declarations/blessed.d.ts:1496](https://github.com/cancerberoSgx/accursed/blob/468bf3c/src/declarations/blessed.d.ts#L1496)*

Name of the element. Useful for form submission.

___

###  options

• **options**: *Options*

*Implementation of [IHasOptions](../interfaces/_declarations_blessed_d_.widgets.ihasoptions.md).[options](../interfaces/_declarations_blessed_d_.widgets.ihasoptions.md#options)*

*Overrides [Node](_declarations_blessed_d_.widgets.node.md).[options](_declarations_blessed_d_.widgets.node.md#options)*

*Defined in [declarations/blessed.d.ts:1491](https://github.com/cancerberoSgx/accursed/blob/468bf3c/src/declarations/blessed.d.ts#L1491)*

Original options object.

___

###  padding

• **padding**: *Required‹[Padding](../interfaces/_declarations_blessed_d_.widgets.padding.md)›*

*Defined in [declarations/blessed.d.ts:1504](https://github.com/cancerberoSgx/accursed/blob/468bf3c/src/declarations/blessed.d.ts#L1504)*

Current element padding

___

### `Optional` parent

• **parent**? : *[Node](_declarations_blessed_d_.widgets.node.md)*

*Inherited from [Node](_declarations_blessed_d_.widgets.node.md).[parent](_declarations_blessed_d_.widgets.node.md#optional-parent)*

*Defined in [declarations/blessed.d.ts:311](https://github.com/cancerberoSgx/accursed/blob/468bf3c/src/declarations/blessed.d.ts#L311)*

Parent node. If null it means the element is not attached to any screen or program, or the node is a Screen.

___

###  position

• **position**: *[Position](../interfaces/_declarations_blessed_d_.widgets.position.md)*

*Defined in [declarations/blessed.d.ts:1507](https://github.com/cancerberoSgx/accursed/blob/468bf3c/src/declarations/blessed.d.ts#L1507)*

___

###  rbottom

• **rbottom**: *[TPosition](../modules/_declarations_blessed_d_.widgets.types.md#tposition)*

*Defined in [declarations/blessed.d.ts:1626](https://github.com/cancerberoSgx/accursed/blob/468bf3c/src/declarations/blessed.d.ts#L1626)*

Calculated relative bottom offset.

Setting this property will cause the element to change element's [position](_declarations_blessed_d_.widgets.blessedelement.md#position) property and emit [move](_declarations_blessedprogram_d_.blessedprogram.md#move) event.

___

###  right

• **right**: *number | string*

*Defined in [declarations/blessed.d.ts:1549](https://github.com/cancerberoSgx/accursed/blob/468bf3c/src/declarations/blessed.d.ts#L1549)*

Calculated relative right offset.

___

###  rleft

• **rleft**: *[TTopLeft](../modules/_declarations_blessed_d_.widgets.types.md#ttopleft)*

*Defined in [declarations/blessed.d.ts:1612](https://github.com/cancerberoSgx/accursed/blob/468bf3c/src/declarations/blessed.d.ts#L1612)*

Setting this property will cause the element to change element's [position](_declarations_blessed_d_.widgets.blessedelement.md#position) property and emit [move](_declarations_blessedprogram_d_.blessedprogram.md#move) event.

___

###  rright

• **rright**: *[TPosition](../modules/_declarations_blessed_d_.widgets.types.md#tposition)*

*Defined in [declarations/blessed.d.ts:1619](https://github.com/cancerberoSgx/accursed/blob/468bf3c/src/declarations/blessed.d.ts#L1619)*

Calculated relative bottom offset.

Setting this property will cause the element to change element's [position](_declarations_blessed_d_.widgets.blessedelement.md#position) property and emit [move](_declarations_blessedprogram_d_.blessedprogram.md#move) event.

___

###  rtop

• **rtop**: *[TTopLeft](../modules/_declarations_blessed_d_.widgets.types.md#ttopleft)*

*Defined in [declarations/blessed.d.ts:1607](https://github.com/cancerberoSgx/accursed/blob/468bf3c/src/declarations/blessed.d.ts#L1607)*

Setting this property will cause the element to change element's [position](_declarations_blessed_d_.widgets.blessedelement.md#position) property and emit [move](_declarations_blessedprogram_d_.blessedprogram.md#move) event.

___

###  screen

• **screen**: *[Screen](_declarations_blessed_d_.widgets.screen.md)*

*Inherited from [Node](_declarations_blessed_d_.widgets.node.md).[screen](_declarations_blessed_d_.widgets.node.md#screen)*

*Defined in [declarations/blessed.d.ts:306](https://github.com/cancerberoSgx/accursed/blob/468bf3c/src/declarations/blessed.d.ts#L306)*

Parent screen.

___

###  shrink

• **shrink**: *boolean*

*Defined in [declarations/blessed.d.ts:1485](https://github.com/cancerberoSgx/accursed/blob/468bf3c/src/declarations/blessed.d.ts#L1485)*

___

###  style

• **style**: *[TStyle](../interfaces/_declarations_blessed_d_.widgets.types.tstyle.md)*

*Defined in [declarations/blessed.d.ts:1506](https://github.com/cancerberoSgx/accursed/blob/468bf3c/src/declarations/blessed.d.ts#L1506)*

___

###  top

• **top**: *number | string*

*Defined in [declarations/blessed.d.ts:1539](https://github.com/cancerberoSgx/accursed/blob/468bf3c/src/declarations/blessed.d.ts#L1539)*

Calculated relative top offset.

___

###  tpadding

• **tpadding**: *number*

*Defined in [declarations/blessed.d.ts:1637](https://github.com/cancerberoSgx/accursed/blob/468bf3c/src/declarations/blessed.d.ts#L1637)*

Givesthe total padding on any direction.

___

###  type

• **type**: *string*

*Inherited from [Node](_declarations_blessed_d_.widgets.node.md).[type](_declarations_blessed_d_.widgets.node.md#type)*

*Defined in [declarations/blessed.d.ts:296](https://github.com/cancerberoSgx/accursed/blob/468bf3c/src/declarations/blessed.d.ts#L296)*

Type of the node (e.g. box).

___

###  uid

• **uid**: *number*

*Inherited from [Node](_declarations_blessed_d_.widgets.node.md).[uid](_declarations_blessed_d_.widgets.node.md#uid)*

*Defined in [declarations/blessed.d.ts:264](https://github.com/cancerberoSgx/accursed/blob/468bf3c/src/declarations/blessed.d.ts#L264)*

Unique identifier for Node instances. @internal

___

###  underline

• **underline**: *string*

*Defined in [declarations/blessed.d.ts:1524](https://github.com/cancerberoSgx/accursed/blob/468bf3c/src/declarations/blessed.d.ts#L1524)*

___

###  visible

• **visible**: *boolean*

*Defined in [declarations/blessed.d.ts:1510](https://github.com/cancerberoSgx/accursed/blob/468bf3c/src/declarations/blessed.d.ts#L1510)*

___

###  width

• **width**: *number | string*

*Defined in [declarations/blessed.d.ts:1529](https://github.com/cancerberoSgx/accursed/blob/468bf3c/src/declarations/blessed.d.ts#L1529)*

Calculated width.

___

### `Static` defaultMaxListeners

▪ **defaultMaxListeners**: *number*

*Inherited from void*

Defined in /Users/sebastiangurin/git/accursed/node_modules/@types/node/events.d.ts:9

## Methods

###  _align

▸ **_align**(`line`: string, `width`: number, `align`: string): *void*

*Defined in [declarations/blessed.d.ts:1848](https://github.com/cancerberoSgx/accursed/blob/468bf3c/src/declarations/blessed.d.ts#L1848)*

**`internal`** 

**Parameters:**

Name | Type |
------ | ------ |
`line` | string |
`width` | number |
`align` | string |

**Returns:** *void*

___

###  _getBottom

▸ **_getBottom**(`get?`: boolean): *number*

*Defined in [declarations/blessed.d.ts:1695](https://github.com/cancerberoSgx/accursed/blob/468bf3c/src/declarations/blessed.d.ts#L1695)*

**`internal`** 

**Parameters:**

Name | Type | Description |
------ | ------ | ------ |
`get?` | boolean | if true it will force to recalculate. |

**Returns:** *number*

___

###  _getCoords

▸ **_getCoords**(`get?`: boolean, `noscroll?`: boolean): *[Coords](../interfaces/_declarations_blessed_d_.widgets.coords.md) | undefined*

*Defined in [declarations/blessed.d.ts:1648](https://github.com/cancerberoSgx/accursed/blob/468bf3c/src/declarations/blessed.d.ts#L1648)*

**`internal`** 

**Parameters:**

Name | Type | Description |
------ | ------ | ------ |
`get?` | boolean | if true it will force to recalculate. |
`noscroll?` | boolean | - |

**Returns:** *[Coords](../interfaces/_declarations_blessed_d_.widgets.coords.md) | undefined*

___

###  _getHeight

▸ **_getHeight**(`get?`: boolean): *number*

*Defined in [declarations/blessed.d.ts:1707](https://github.com/cancerberoSgx/accursed/blob/468bf3c/src/declarations/blessed.d.ts#L1707)*

**`internal`** 

**Parameters:**

Name | Type | Description |
------ | ------ | ------ |
`get?` | boolean | if true it will force to recalculate. |

**Returns:** *number*

___

###  _getLeft

▸ **_getLeft**(`get?`: boolean): *number*

*Defined in [declarations/blessed.d.ts:1677](https://github.com/cancerberoSgx/accursed/blob/468bf3c/src/declarations/blessed.d.ts#L1677)*

**`internal`** 

**Parameters:**

Name | Type | Description |
------ | ------ | ------ |
`get?` | boolean | if true it will force to recalculate. |

**Returns:** *number*

___

###  _getPos

▸ **_getPos**(): *[Pos](../interfaces/_declarations_blessed_d_.widgets.pos.md)*

*Defined in [declarations/blessed.d.ts:1671](https://github.com/cancerberoSgx/accursed/blob/468bf3c/src/declarations/blessed.d.ts#L1671)*

whenever Box.render is called `lpos` gets set on the element, an object containing the rendered
coordinates. Since these don't update if the element is moved somehow, they're unreliable in that
situation. However, if we can guarantee that lpos is good and up to date, it can be more accurate than
the calculated positions below. In this case, if the element is being rendered, it's guaranteed that
the parent will have been rendered first, in which case we can use the parant's lpos instead of
recalculating it's position (since that might be wrong because it doesn't handle content shrinkage).

**`internal`** 

**Returns:** *[Pos](../interfaces/_declarations_blessed_d_.widgets.pos.md)*

___

###  _getRight

▸ **_getRight**(`get?`: boolean): *number*

*Defined in [declarations/blessed.d.ts:1701](https://github.com/cancerberoSgx/accursed/blob/468bf3c/src/declarations/blessed.d.ts#L1701)*

**`internal`** 

**Parameters:**

Name | Type | Description |
------ | ------ | ------ |
`get?` | boolean | if true it will force to recalculate. |

**Returns:** *number*

___

###  _getShrink

▸ **_getShrink**(`xi`: number, `xl`: number, `yi`: number, `yl`: number, `get?`: boolean): *[SimpleCoords](../interfaces/_declarations_blessed_d_.widgets.simplecoords.md) | undefined*

*Defined in [declarations/blessed.d.ts:1660](https://github.com/cancerberoSgx/accursed/blob/468bf3c/src/declarations/blessed.d.ts#L1660)*

**`internal`** 

**Parameters:**

Name | Type | Description |
------ | ------ | ------ |
`xi` | number | - |
`xl` | number | - |
`yi` | number | - |
`yl` | number | - |
`get?` | boolean | if true it will force to recalculate. |

**Returns:** *[SimpleCoords](../interfaces/_declarations_blessed_d_.widgets.simplecoords.md) | undefined*

___

###  _getShrinkBox

▸ **_getShrinkBox**(`xi`: number, `xl`: number, `yi`: number, `yl`: number, `get?`: boolean): *[SimpleCoords](../interfaces/_declarations_blessed_d_.widgets.simplecoords.md) | undefined*

*Defined in [declarations/blessed.d.ts:1654](https://github.com/cancerberoSgx/accursed/blob/468bf3c/src/declarations/blessed.d.ts#L1654)*

**`internal`** 

**Parameters:**

Name | Type | Description |
------ | ------ | ------ |
`xi` | number | - |
`xl` | number | - |
`yi` | number | - |
`yl` | number | - |
`get?` | boolean | if true it will force to recalculate. |

**Returns:** *[SimpleCoords](../interfaces/_declarations_blessed_d_.widgets.simplecoords.md) | undefined*

___

###  _getTop

▸ **_getTop**(`get?`: boolean): *number*

*Defined in [declarations/blessed.d.ts:1689](https://github.com/cancerberoSgx/accursed/blob/468bf3c/src/declarations/blessed.d.ts#L1689)*

**`internal`** 

**Parameters:**

Name | Type | Description |
------ | ------ | ------ |
`get?` | boolean | if true it will force to recalculate. |

**Returns:** *number*

___

###  _getWidth

▸ **_getWidth**(`get?`: boolean): *number*

*Defined in [declarations/blessed.d.ts:1683](https://github.com/cancerberoSgx/accursed/blob/468bf3c/src/declarations/blessed.d.ts#L1683)*

**`internal`** 

**Parameters:**

Name | Type | Description |
------ | ------ | ------ |
`get?` | boolean | if true it will force to recalculate. |

**Returns:** *number*

___

###  _parseAttr

▸ **_parseAttr**(`ines`: string[]): *string[]*

*Defined in [declarations/blessed.d.ts:1845](https://github.com/cancerberoSgx/accursed/blob/468bf3c/src/declarations/blessed.d.ts#L1845)*

**`internal`** 

**Parameters:**

Name | Type |
------ | ------ |
`ines` | string[] |

**Returns:** *string[]*

___

###  _parseTags

▸ **_parseTags**(`s`: string): *string*

*Defined in [declarations/blessed.d.ts:1842](https://github.com/cancerberoSgx/accursed/blob/468bf3c/src/declarations/blessed.d.ts#L1842)*

Converts `{red-fg}foo{/red-fg}` to `\x1b[31mfoo\x1b[39m`. @internal.

**Parameters:**

Name | Type |
------ | ------ |
`s` | string |

**Returns:** *string*

___

###  _wrapContent

▸ **_wrapContent**(`content`: string, `width`: number): *void*

*Defined in [declarations/blessed.d.ts:1851](https://github.com/cancerberoSgx/accursed/blob/468bf3c/src/declarations/blessed.d.ts#L1851)*

**`internal`** 

**Parameters:**

Name | Type |
------ | ------ |
`content` | string |
`width` | number |

**Returns:** *void*

___

###  addListener

▸ **addListener**(`event`: string | symbol, `listener`: function): *this*

*Inherited from void*

*Overrides void*

Defined in /Users/sebastiangurin/git/accursed/node_modules/@types/node/events.d.ts:11

**Parameters:**

▪ **event**: *string | symbol*

▪ **listener**: *function*

▸ (...`args`: any[]): *void*

**Parameters:**

Name | Type |
------ | ------ |
`...args` | any[] |

**Returns:** *this*

___

###  append

▸ **append**(`node`: [Node](_declarations_blessed_d_.widgets.node.md)): *void*

*Inherited from [Node](_declarations_blessed_d_.widgets.node.md).[append](_declarations_blessed_d_.widgets.node.md#append)*

*Defined in [declarations/blessed.d.ts:326](https://github.com/cancerberoSgx/accursed/blob/468bf3c/src/declarations/blessed.d.ts#L326)*

Append a node to this node's children.

**Parameters:**

Name | Type |
------ | ------ |
`node` | [Node](_declarations_blessed_d_.widgets.node.md) |

**Returns:** *void*

___

###  clearBaseLine

▸ **clearBaseLine**(`i`: number): *void*

*Defined in [declarations/blessed.d.ts:1927](https://github.com/cancerberoSgx/accursed/blob/468bf3c/src/declarations/blessed.d.ts#L1927)*

Clear a line from the box's content from the visible top.

**Parameters:**

Name | Type |
------ | ------ |
`i` | number |

**Returns:** *void*

___

###  clearLine

▸ **clearLine**(`i`: number): *void*

*Defined in [declarations/blessed.d.ts:1922](https://github.com/cancerberoSgx/accursed/blob/468bf3c/src/declarations/blessed.d.ts#L1922)*

Clear a line from the box's content.

**Parameters:**

Name | Type |
------ | ------ |
`i` | number |

**Returns:** *void*

___

###  clearPos

▸ **clearPos**(`get?`: boolean, `override?`: boolean): *void*

*Defined in [declarations/blessed.d.ts:1866](https://github.com/cancerberoSgx/accursed/blob/468bf3c/src/declarations/blessed.d.ts#L1866)*

Cleans the rectangle of this element on the screen. Useful for subclasses before rendering.

**`internal`** 

**Parameters:**

Name | Type | Description |
------ | ------ | ------ |
`get?` | boolean | it's passed to [_getCoords](_declarations_blessed_d_.widgets.blessedelement.md#_getcoords) |
`override?` | boolean | it's passed to  [Screen.clearRegion](_declarations_blessed_d_.widgets.screen.md#clearregion)  |

**Returns:** *void*

___

###  collectAncestors

▸ **collectAncestors**(`s?`: boolean): *void*

*Inherited from [Node](_declarations_blessed_d_.widgets.node.md).[collectAncestors](_declarations_blessed_d_.widgets.node.md#collectancestors)*

*Defined in [declarations/blessed.d.ts:362](https://github.com/cancerberoSgx/accursed/blob/468bf3c/src/declarations/blessed.d.ts#L362)*

**Parameters:**

Name | Type |
------ | ------ |
`s?` | boolean |

**Returns:** *void*

___

###  collectDescendants

▸ **collectDescendants**(`s?`: boolean): *void*

*Inherited from [Node](_declarations_blessed_d_.widgets.node.md).[collectDescendants](_declarations_blessed_d_.widgets.node.md#collectdescendants)*

*Defined in [declarations/blessed.d.ts:361](https://github.com/cancerberoSgx/accursed/blob/468bf3c/src/declarations/blessed.d.ts#L361)*

**Parameters:**

Name | Type |
------ | ------ |
`s?` | boolean |

**Returns:** *void*

___

###  deleteBottom

▸ **deleteBottom**(): *void*

*Defined in [declarations/blessed.d.ts:1947](https://github.com/cancerberoSgx/accursed/blob/468bf3c/src/declarations/blessed.d.ts#L1947)*

Delete a line at the bottom of the box.

**Returns:** *void*

___

###  deleteLine

▸ **deleteLine**(`i`: number): *void*

*Defined in [declarations/blessed.d.ts:1897](https://github.com/cancerberoSgx/accursed/blob/468bf3c/src/declarations/blessed.d.ts#L1897)*

Delete a line from the box's content.

**Parameters:**

Name | Type |
------ | ------ |
`i` | number |

**Returns:** *void*

___

###  deleteTop

▸ **deleteTop**(): *void*

*Defined in [declarations/blessed.d.ts:1942](https://github.com/cancerberoSgx/accursed/blob/468bf3c/src/declarations/blessed.d.ts#L1942)*

Delete a line at the top of the box.

**Returns:** *void*

___

###  destroy

▸ **destroy**(): *void*

*Implementation of [IDestroyable](../interfaces/_declarations_blessed_d_.widgets.idestroyable.md)*

*Overrides [Node](_declarations_blessed_d_.widgets.node.md).[destroy](_declarations_blessed_d_.widgets.node.md#destroy)*

*Defined in [declarations/blessed.d.ts:1763](https://github.com/cancerberoSgx/accursed/blob/468bf3c/src/declarations/blessed.d.ts#L1763)*

Same as the detach() method, except this will automatically call free() and unbind any screen
events to prevent memory leaks. for use with onScreenEvent(), removeScreenEvent(), and free().

**Returns:** *void*

___

###  detach

▸ **detach**(): *void*

*Inherited from [Node](_declarations_blessed_d_.widgets.node.md).[detach](_declarations_blessed_d_.widgets.node.md#detach)*

*Defined in [declarations/blessed.d.ts:351](https://github.com/cancerberoSgx/accursed/blob/468bf3c/src/declarations/blessed.d.ts#L351)*

Remove node from its parent.

**Returns:** *void*

___

###  disableDrag

▸ **disableDrag**(): *void*

*Defined in [declarations/blessed.d.ts:1826](https://github.com/cancerberoSgx/accursed/blob/468bf3c/src/declarations/blessed.d.ts#L1826)*

Disable dragging of the element.

**Returns:** *void*

___

###  emit

▸ **emit**(`event`: string | symbol, ...`args`: any[]): *boolean*

*Inherited from void*

*Overrides void*

Defined in /Users/sebastiangurin/git/accursed/node_modules/@types/node/events.d.ts:23

**Parameters:**

Name | Type |
------ | ------ |
`event` | string &#124; symbol |
`...args` | any[] |

**Returns:** *boolean*

___

###  emitAncestors

▸ **emitAncestors**(): *void*

*Inherited from [Node](_declarations_blessed_d_.widgets.node.md).[emitAncestors](_declarations_blessed_d_.widgets.node.md#emitancestors)*

*Defined in [declarations/blessed.d.ts:368](https://github.com/cancerberoSgx/accursed/blob/468bf3c/src/declarations/blessed.d.ts#L368)*

**Returns:** *void*

___

###  emitDescendants

▸ **emitDescendants**(`type?`: string, ...`args`: any[]): *void*

*Inherited from [Node](_declarations_blessed_d_.widgets.node.md).[emitDescendants](_declarations_blessed_d_.widgets.node.md#emitdescendants)*

*Defined in [declarations/blessed.d.ts:367](https://github.com/cancerberoSgx/accursed/blob/468bf3c/src/declarations/blessed.d.ts#L367)*

Emit event for element, and recursively emit same event for all descendants. If `s` is provided it will call [[iter]] on self first.

**Parameters:**

Name | Type |
------ | ------ |
`type?` | string |
`...args` | any[] |

**Returns:** *void*

___

###  enableDrag

▸ **enableDrag**(`cb`: function): *void*

*Defined in [declarations/blessed.d.ts:1819](https://github.com/cancerberoSgx/accursed/blob/468bf3c/src/declarations/blessed.d.ts#L1819)*

Enable dragging of the element.

**Parameters:**

▪ **cb**: *function*

▸ (`e`: [IMouseEventArg](../interfaces/_declarations_blessed_d_.widgets.events.imouseeventarg.md)): *any*

**Parameters:**

Name | Type |
------ | ------ |
`e` | [IMouseEventArg](../interfaces/_declarations_blessed_d_.widgets.events.imouseeventarg.md) |

**Returns:** *void*

___

###  enableInput

▸ **enableInput**(): *void*

*Defined in [declarations/blessed.d.ts:1814](https://github.com/cancerberoSgx/accursed/blob/468bf3c/src/declarations/blessed.d.ts#L1814)*

Enable key and mouse events. Calls bot enableMouse and enableKeys.

**Returns:** *void*

___

###  enableKeys

▸ **enableKeys**(): *void*

*Defined in [declarations/blessed.d.ts:1809](https://github.com/cancerberoSgx/accursed/blob/468bf3c/src/declarations/blessed.d.ts#L1809)*

Enable keypress events for the element (automatically called when a form of on('keypress') is bound).

**Returns:** *void*

___

###  enableMouse

▸ **enableMouse**(): *void*

*Defined in [declarations/blessed.d.ts:1804](https://github.com/cancerberoSgx/accursed/blob/468bf3c/src/declarations/blessed.d.ts#L1804)*

Enable mouse events for the element (automatically called when a form of on('mouse') is bound).

**Returns:** *void*

___

###  eventNames

▸ **eventNames**(): *Array‹string | symbol›*

*Inherited from void*

*Overrides void*

Defined in /Users/sebastiangurin/git/accursed/node_modules/@types/node/events.d.ts:24

**Returns:** *Array‹string | symbol›*

___

###  focus

▸ **focus**(): *void*

*Defined in [declarations/blessed.d.ts:1727](https://github.com/cancerberoSgx/accursed/blob/468bf3c/src/declarations/blessed.d.ts#L1727)*

Focus element.

**Returns:** *void*

___

###  forAncestors

▸ **forAncestors**(`iter`: function, `s?`: boolean): *void*

*Inherited from [Node](_declarations_blessed_d_.widgets.node.md).[forAncestors](_declarations_blessed_d_.widgets.node.md#forancestors)*

*Defined in [declarations/blessed.d.ts:360](https://github.com/cancerberoSgx/accursed/blob/468bf3c/src/declarations/blessed.d.ts#L360)*

**Parameters:**

▪ **iter**: *function*

▸ (`node`: [Node](_declarations_blessed_d_.widgets.node.md)): *void*

**Parameters:**

Name | Type |
------ | ------ |
`node` | [Node](_declarations_blessed_d_.widgets.node.md) |

▪`Optional`  **s**: *boolean*

**Returns:** *void*

___

###  forDescendants

▸ **forDescendants**(`iter`: function, `s?`: boolean): *void*

*Inherited from [Node](_declarations_blessed_d_.widgets.node.md).[forDescendants](_declarations_blessed_d_.widgets.node.md#fordescendants)*

*Defined in [declarations/blessed.d.ts:359](https://github.com/cancerberoSgx/accursed/blob/468bf3c/src/declarations/blessed.d.ts#L359)*

Visit each node's descendants, with [[iter]] function,  parents first.
If `s` is provided it will call [[iter]] on self first.

**Parameters:**

▪ **iter**: *function*

▸ (`node`: [Node](_declarations_blessed_d_.widgets.node.md)): *void*

**Parameters:**

Name | Type |
------ | ------ |
`node` | [Node](_declarations_blessed_d_.widgets.node.md) |

▪`Optional`  **s**: *boolean*

**Returns:** *void*

___

###  free

▸ **free**(): *void*

*Overrides [Node](_declarations_blessed_d_.widgets.node.md).[free](_declarations_blessed_d_.widgets.node.md#free)*

*Defined in [declarations/blessed.d.ts:1757](https://github.com/cancerberoSgx/accursed/blob/468bf3c/src/declarations/blessed.d.ts#L1757)*

Free up the element. Automatically unbind all events that may have been bound to the screen
object. This prevents memory leaks. For use with onScreenEvent(), removeScreenEvent(),
and destroy().

**Returns:** *void*

___

###  get

▸ **get**<**T**>(`name`: string, `def`: T): *T*

*Inherited from [Node](_declarations_blessed_d_.widgets.node.md).[get](_declarations_blessed_d_.widgets.node.md#get)*

*Defined in [declarations/blessed.d.ts:380](https://github.com/cancerberoSgx/accursed/blob/468bf3c/src/declarations/blessed.d.ts#L380)*

Get user property with a potential default value.

**Type parameters:**

▪ **T**

**Parameters:**

Name | Type |
------ | ------ |
`name` | string |
`def` | T |

**Returns:** *T*

___

###  getBaseLine

▸ **getBaseLine**(`i`: number): *string*

*Defined in [declarations/blessed.d.ts:1907](https://github.com/cancerberoSgx/accursed/blob/468bf3c/src/declarations/blessed.d.ts#L1907)*

Get a line from the box's content from the visible top.

**Parameters:**

Name | Type |
------ | ------ |
`i` | number |

**Returns:** *string*

___

###  getContent

▸ **getContent**(): *string*

*Defined in [declarations/blessed.d.ts:1877](https://github.com/cancerberoSgx/accursed/blob/468bf3c/src/declarations/blessed.d.ts#L1877)*

Return content, slightly different from el.content. Assume the above formatting.

**Returns:** *string*

___

###  getLine

▸ **getLine**(`i`: number): *string*

*Defined in [declarations/blessed.d.ts:1902](https://github.com/cancerberoSgx/accursed/blob/468bf3c/src/declarations/blessed.d.ts#L1902)*

Get a line from the box's content.

**Parameters:**

Name | Type |
------ | ------ |
`i` | number |

**Returns:** *string*

___

###  getLines

▸ **getLines**(): *string[]*

*Defined in [declarations/blessed.d.ts:1972](https://github.com/cancerberoSgx/accursed/blob/468bf3c/src/declarations/blessed.d.ts#L1972)*

An array containing the content lines.

**Returns:** *string[]*

___

###  getMaxListeners

▸ **getMaxListeners**(): *number*

*Inherited from void*

*Overrides void*

Defined in /Users/sebastiangurin/git/accursed/node_modules/@types/node/events.d.ts:20

**Returns:** *number*

___

###  getScreenLines

▸ **getScreenLines**(): *string[]*

*Defined in [declarations/blessed.d.ts:1977](https://github.com/cancerberoSgx/accursed/blob/468bf3c/src/declarations/blessed.d.ts#L1977)*

An array containing the lines as they are displayed on the screen.

**Returns:** *string[]*

___

###  getText

▸ **getText**(): *string*

*Defined in [declarations/blessed.d.ts:1887](https://github.com/cancerberoSgx/accursed/blob/468bf3c/src/declarations/blessed.d.ts#L1887)*

Similar to getContent, but return content with tags and escape codes removed.

**Returns:** *string*

___

###  hasAncestor

▸ **hasAncestor**<**T**>(`target`: [Node](_declarations_blessed_d_.widgets.node.md)): *[Node](_declarations_blessed_d_.widgets.node.md)*

*Inherited from [Node](_declarations_blessed_d_.widgets.node.md).[hasAncestor](_declarations_blessed_d_.widgets.node.md#hasancestor)*

*Defined in [declarations/blessed.d.ts:370](https://github.com/cancerberoSgx/accursed/blob/468bf3c/src/declarations/blessed.d.ts#L370)*

**Type parameters:**

▪ **T**: *[Node](_declarations_blessed_d_.widgets.node.md)*

**Parameters:**

Name | Type |
------ | ------ |
`target` | [Node](_declarations_blessed_d_.widgets.node.md) |

**Returns:** *[Node](_declarations_blessed_d_.widgets.node.md)*

___

###  hasDescendant

▸ **hasDescendant**<**T**>(`target`: [Node](_declarations_blessed_d_.widgets.node.md)): *[Node](_declarations_blessed_d_.widgets.node.md)*

*Inherited from [Node](_declarations_blessed_d_.widgets.node.md).[hasDescendant](_declarations_blessed_d_.widgets.node.md#hasdescendant)*

*Defined in [declarations/blessed.d.ts:369](https://github.com/cancerberoSgx/accursed/blob/468bf3c/src/declarations/blessed.d.ts#L369)*

**Type parameters:**

▪ **T**: *[Node](_declarations_blessed_d_.widgets.node.md)*

**Parameters:**

Name | Type |
------ | ------ |
`target` | [Node](_declarations_blessed_d_.widgets.node.md) |

**Returns:** *[Node](_declarations_blessed_d_.widgets.node.md)*

___

###  hide

▸ **hide**(): *void*

*Defined in [declarations/blessed.d.ts:1712](https://github.com/cancerberoSgx/accursed/blob/468bf3c/src/declarations/blessed.d.ts#L1712)*

Hide element, clear the element's region on the screen and triggers [hide](_declarations_blessed_d_.widgets.blessedelement.md#hide) event.

**Returns:** *void*

___

###  insert

▸ **insert**(`node`: [Node](_declarations_blessed_d_.widgets.node.md), `index`: number): *void*

*Inherited from [Node](_declarations_blessed_d_.widgets.node.md).[insert](_declarations_blessed_d_.widgets.node.md#insert)*

*Defined in [declarations/blessed.d.ts:336](https://github.com/cancerberoSgx/accursed/blob/468bf3c/src/declarations/blessed.d.ts#L336)*

Insert a node to this node's children at index i.

**Parameters:**

Name | Type |
------ | ------ |
`node` | [Node](_declarations_blessed_d_.widgets.node.md) |
`index` | number |

**Returns:** *void*

___

###  insertAfter

▸ **insertAfter**(`node`: [Node](_declarations_blessed_d_.widgets.node.md), `refNode`: [Node](_declarations_blessed_d_.widgets.node.md)): *void*

*Inherited from [Node](_declarations_blessed_d_.widgets.node.md).[insertAfter](_declarations_blessed_d_.widgets.node.md#insertafter)*

*Defined in [declarations/blessed.d.ts:346](https://github.com/cancerberoSgx/accursed/blob/468bf3c/src/declarations/blessed.d.ts#L346)*

Insert a node from node after the reference node.

**Parameters:**

Name | Type |
------ | ------ |
`node` | [Node](_declarations_blessed_d_.widgets.node.md) |
`refNode` | [Node](_declarations_blessed_d_.widgets.node.md) |

**Returns:** *void*

___

###  insertBefore

▸ **insertBefore**(`node`: [Node](_declarations_blessed_d_.widgets.node.md), `refNode`: [Node](_declarations_blessed_d_.widgets.node.md)): *void*

*Inherited from [Node](_declarations_blessed_d_.widgets.node.md).[insertBefore](_declarations_blessed_d_.widgets.node.md#insertbefore)*

*Defined in [declarations/blessed.d.ts:341](https://github.com/cancerberoSgx/accursed/blob/468bf3c/src/declarations/blessed.d.ts#L341)*

Insert a node to this node's children before the reference node.

**Parameters:**

Name | Type |
------ | ------ |
`node` | [Node](_declarations_blessed_d_.widgets.node.md) |
`refNode` | [Node](_declarations_blessed_d_.widgets.node.md) |

**Returns:** *void*

___

###  insertBottom

▸ **insertBottom**(`lines`: string | string[]): *void*

*Defined in [declarations/blessed.d.ts:1937](https://github.com/cancerberoSgx/accursed/blob/468bf3c/src/declarations/blessed.d.ts#L1937)*

Insert a line at the bottom of the box.

**Parameters:**

Name | Type |
------ | ------ |
`lines` | string &#124; string[] |

**Returns:** *void*

___

###  insertLine

▸ **insertLine**(`i`: number, `lines`: string | string[]): *void*

*Defined in [declarations/blessed.d.ts:1892](https://github.com/cancerberoSgx/accursed/blob/468bf3c/src/declarations/blessed.d.ts#L1892)*

Insert a line into the box's content.

**Parameters:**

Name | Type |
------ | ------ |
`i` | number |
`lines` | string &#124; string[] |

**Returns:** *void*

___

###  insertTop

▸ **insertTop**(`lines`: string | string[]): *void*

*Defined in [declarations/blessed.d.ts:1932](https://github.com/cancerberoSgx/accursed/blob/468bf3c/src/declarations/blessed.d.ts#L1932)*

Insert a line at the top of the box.

**Parameters:**

Name | Type |
------ | ------ |
`lines` | string &#124; string[] |

**Returns:** *void*

___

###  key

▸ **key**(`name`: string | string[], `listener`: [KeyEventListener](../modules/_declarations_blessed_d_.widgets.md#keyeventlistener)): *void*

*Inherited from [NodeWithEvents](_declarations_blessed_d_.widgets.nodewithevents.md).[key](_declarations_blessed_d_.widgets.nodewithevents.md#key)*

*Defined in [declarations/blessed.d.ts:491](https://github.com/cancerberoSgx/accursed/blob/468bf3c/src/declarations/blessed.d.ts#L491)*

Bind a keypress listener for a specific key.

**Parameters:**

Name | Type |
------ | ------ |
`name` | string &#124; string[] |
`listener` | [KeyEventListener](../modules/_declarations_blessed_d_.widgets.md#keyeventlistener) |

**Returns:** *void*

___

###  kill

▸ **kill**(): *any*

*Defined in [declarations/blessed.d.ts:1821](https://github.com/cancerberoSgx/accursed/blob/468bf3c/src/declarations/blessed.d.ts#L1821)*

**Returns:** *any*

___

###  listenerCount

▸ **listenerCount**(`type`: string | symbol): *number*

*Inherited from void*

*Overrides void*

Defined in /Users/sebastiangurin/git/accursed/node_modules/@types/node/events.d.ts:25

**Parameters:**

Name | Type |
------ | ------ |
`type` | string &#124; symbol |

**Returns:** *number*

___

###  listeners

▸ **listeners**(`event`: string | symbol): *Function[]*

*Inherited from void*

*Overrides void*

Defined in /Users/sebastiangurin/git/accursed/node_modules/@types/node/events.d.ts:21

**Parameters:**

Name | Type |
------ | ------ |
`event` | string &#124; symbol |

**Returns:** *Function[]*

___

###  off

▸ **off**(`event`: string | symbol, `listener`: function): *this*

*Inherited from void*

*Overrides void*

Defined in /Users/sebastiangurin/git/accursed/node_modules/@types/node/events.d.ts:17

**Parameters:**

▪ **event**: *string | symbol*

▪ **listener**: *function*

▸ (...`args`: any[]): *void*

**Parameters:**

Name | Type |
------ | ------ |
`...args` | any[] |

**Returns:** *this*

___

###  on

▸ **on**(`event`: string, `listener`: function): *this*

*Inherited from [NodeWithEvents](_declarations_blessed_d_.widgets.nodewithevents.md).[on](_declarations_blessed_d_.widgets.nodewithevents.md#on)*

*Overrides [Node](_declarations_blessed_d_.widgets.node.md).[on](_declarations_blessed_d_.widgets.node.md#on)*

*Defined in [declarations/blessed.d.ts:511](https://github.com/cancerberoSgx/accursed/blob/468bf3c/src/declarations/blessed.d.ts#L511)*

Registers event listener to be notified on mouse events.

**Parameters:**

▪ **event**: *string*

▪ **listener**: *function*

▸ (...`args`: any[]): *void*

**Parameters:**

Name | Type |
------ | ------ |
`...args` | any[] |

**Returns:** *this*

▸ **on**(`event`: [NodeMouseEventType](../modules/_declarations_blessed_d_.widgets.md#nodemouseeventtype), `callback`: function): *this*

*Inherited from [NodeWithEvents](_declarations_blessed_d_.widgets.nodewithevents.md).[on](_declarations_blessed_d_.widgets.nodewithevents.md#on)*

*Overrides [Node](_declarations_blessed_d_.widgets.node.md).[on](_declarations_blessed_d_.widgets.node.md#on)*

*Defined in [declarations/blessed.d.ts:515](https://github.com/cancerberoSgx/accursed/blob/468bf3c/src/declarations/blessed.d.ts#L515)*

Registers event listener to be notified on mouse events.

**Parameters:**

▪ **event**: *[NodeMouseEventType](../modules/_declarations_blessed_d_.widgets.md#nodemouseeventtype)*

▪ **callback**: *function*

▸ (`arg`: [IMouseEventArg](../interfaces/_declarations_blessed_d_.widgets.events.imouseeventarg.md)): *void*

**Parameters:**

Name | Type |
------ | ------ |
`arg` | [IMouseEventArg](../interfaces/_declarations_blessed_d_.widgets.events.imouseeventarg.md) |

**Returns:** *this*

▸ **on**(`event`: "keypress", `callback`: [KeyEventListener](../modules/_declarations_blessed_d_.widgets.md#keyeventlistener)): *this*

*Inherited from [NodeWithEvents](_declarations_blessed_d_.widgets.nodewithevents.md).[on](_declarations_blessed_d_.widgets.nodewithevents.md#on)*

*Overrides [Node](_declarations_blessed_d_.widgets.node.md).[on](_declarations_blessed_d_.widgets.node.md#on)*

*Defined in [declarations/blessed.d.ts:519](https://github.com/cancerberoSgx/accursed/blob/468bf3c/src/declarations/blessed.d.ts#L519)*

Received on key events.

**Parameters:**

Name | Type |
------ | ------ |
`event` | "keypress" |
`callback` | [KeyEventListener](../modules/_declarations_blessed_d_.widgets.md#keyeventlistener) |

**Returns:** *this*

▸ **on**(`event`: [NodeScreenEventType](../modules/_declarations_blessed_d_.widgets.md#nodescreeneventtype), `callback`: function): *this*

*Inherited from [NodeWithEvents](_declarations_blessed_d_.widgets.nodewithevents.md).[on](_declarations_blessed_d_.widgets.nodewithevents.md#on)*

*Overrides [Node](_declarations_blessed_d_.widgets.node.md).[on](_declarations_blessed_d_.widgets.node.md#on)*

*Defined in [declarations/blessed.d.ts:520](https://github.com/cancerberoSgx/accursed/blob/468bf3c/src/declarations/blessed.d.ts#L520)*

**Parameters:**

▪ **event**: *[NodeScreenEventType](../modules/_declarations_blessed_d_.widgets.md#nodescreeneventtype)*

▪ **callback**: *function*

▸ (`arg`: [Screen](_declarations_blessed_d_.widgets.screen.md)): *void*

**Parameters:**

Name | Type |
------ | ------ |
`arg` | [Screen](_declarations_blessed_d_.widgets.screen.md) |

**Returns:** *this*

▸ **on**(`event`: "warning", `callback`: function): *this*

*Inherited from [NodeWithEvents](_declarations_blessed_d_.widgets.nodewithevents.md).[on](_declarations_blessed_d_.widgets.nodewithevents.md#on)*

*Overrides [Node](_declarations_blessed_d_.widgets.node.md).[on](_declarations_blessed_d_.widgets.node.md#on)*

*Defined in [declarations/blessed.d.ts:524](https://github.com/cancerberoSgx/accursed/blob/468bf3c/src/declarations/blessed.d.ts#L524)*

Received when blessed notices something untoward (output is not a tty, terminfo not found, etc).

**Parameters:**

▪ **event**: *"warning"*

▪ **callback**: *function*

▸ (`text`: string): *void*

**Parameters:**

Name | Type |
------ | ------ |
`text` | string |

**Returns:** *this*

▸ **on**(`event`: [NodeGenericEventType](../modules/_declarations_blessed_d_.widgets.md#nodegenericeventtype), `callback`: function): *this*

*Inherited from [NodeWithEvents](_declarations_blessed_d_.widgets.nodewithevents.md).[on](_declarations_blessed_d_.widgets.nodewithevents.md#on)*

*Overrides [Node](_declarations_blessed_d_.widgets.node.md).[on](_declarations_blessed_d_.widgets.node.md#on)*

*Defined in [declarations/blessed.d.ts:525](https://github.com/cancerberoSgx/accursed/blob/468bf3c/src/declarations/blessed.d.ts#L525)*

**Parameters:**

▪ **event**: *[NodeGenericEventType](../modules/_declarations_blessed_d_.widgets.md#nodegenericeventtype)*

▪ **callback**: *function*

▸ (`arg`: [INodeGenericEventArg](../interfaces/_declarations_blessed_d_.widgets.events.inodegenericeventarg.md)): *void*

**Parameters:**

Name | Type |
------ | ------ |
`arg` | [INodeGenericEventArg](../interfaces/_declarations_blessed_d_.widgets.events.inodegenericeventarg.md) |

**Returns:** *this*

___

###  onScreenEvent

▸ **onScreenEvent**(`type`: string, `handler`: function): *void*

*Defined in [declarations/blessed.d.ts:1743](https://github.com/cancerberoSgx/accursed/blob/468bf3c/src/declarations/blessed.d.ts#L1743)*

Same as el.on('screen', ...) except this will automatically keep track of which listeners
are bound to the screen object. For use with removeScreenEvent(), free(), and destroy().

**Parameters:**

▪ **type**: *string*

▪ **handler**: *function*

▸ (...`args`: any[]): *void*

**Parameters:**

Name | Type |
------ | ------ |
`...args` | any[] |

**Returns:** *void*

___

###  once

▸ **once**(`event`: string | symbol, `listener`: function): *this*

*Inherited from void*

*Overrides void*

Defined in /Users/sebastiangurin/git/accursed/node_modules/@types/node/events.d.ts:13

**Parameters:**

▪ **event**: *string | symbol*

▪ **listener**: *function*

▸ (...`args`: any[]): *void*

**Parameters:**

Name | Type |
------ | ------ |
`...args` | any[] |

**Returns:** *this*

___

###  onceKey

▸ **onceKey**(`name`: string, `listener`: [KeyEventListener](../modules/_declarations_blessed_d_.widgets.md#keyeventlistener)): *void*

*Inherited from [NodeWithEvents](_declarations_blessed_d_.widgets.nodewithevents.md).[onceKey](_declarations_blessed_d_.widgets.nodewithevents.md#oncekey)*

*Defined in [declarations/blessed.d.ts:496](https://github.com/cancerberoSgx/accursed/blob/468bf3c/src/declarations/blessed.d.ts#L496)*

Bind a keypress listener for a specific key once.

**Parameters:**

Name | Type |
------ | ------ |
`name` | string |
`listener` | [KeyEventListener](../modules/_declarations_blessed_d_.widgets.md#keyeventlistener) |

**Returns:** *void*

___

###  parseContent

▸ **parseContent**(`noTags`: string): *boolean*

*Defined in [declarations/blessed.d.ts:1737](https://github.com/cancerberoSgx/accursed/blob/468bf3c/src/declarations/blessed.d.ts#L1737)*

Parses given content string with no tags before rendering. Removes / transform characters that break the output.

For example, double-width chars will eat the next char after render in this case it creates a blank character
after it so it doesn't eat the real next char.

**`internal`** 

**Parameters:**

Name | Type |
------ | ------ |
`noTags` | string |

**Returns:** *boolean*

___

###  popLine

▸ **popLine**(`i`: number): *string*

*Defined in [declarations/blessed.d.ts:1967](https://github.com/cancerberoSgx/accursed/blob/468bf3c/src/declarations/blessed.d.ts#L1967)*

Pop a line off the bottom of the content.

**Parameters:**

Name | Type |
------ | ------ |
`i` | number |

**Returns:** *string*

___

###  prepend

▸ **prepend**(`node`: [Node](_declarations_blessed_d_.widgets.node.md)): *void*

*Inherited from [Node](_declarations_blessed_d_.widgets.node.md).[prepend](_declarations_blessed_d_.widgets.node.md#prepend)*

*Defined in [declarations/blessed.d.ts:321](https://github.com/cancerberoSgx/accursed/blob/468bf3c/src/declarations/blessed.d.ts#L321)*

Prepend a node to this node's children.

**Parameters:**

Name | Type |
------ | ------ |
`node` | [Node](_declarations_blessed_d_.widgets.node.md) |

**Returns:** *void*

___

###  prependListener

▸ **prependListener**(`event`: string | symbol, `listener`: function): *this*

*Inherited from void*

*Overrides void*

Defined in /Users/sebastiangurin/git/accursed/node_modules/@types/node/events.d.ts:14

**Parameters:**

▪ **event**: *string | symbol*

▪ **listener**: *function*

▸ (...`args`: any[]): *void*

**Parameters:**

Name | Type |
------ | ------ |
`...args` | any[] |

**Returns:** *this*

___

###  prependOnceListener

▸ **prependOnceListener**(`event`: string | symbol, `listener`: function): *this*

*Inherited from void*

*Overrides void*

Defined in /Users/sebastiangurin/git/accursed/node_modules/@types/node/events.d.ts:15

**Parameters:**

▪ **event**: *string | symbol*

▪ **listener**: *function*

▸ (...`args`: any[]): *void*

**Parameters:**

Name | Type |
------ | ------ |
`...args` | any[] |

**Returns:** *this*

___

###  pushLine

▸ **pushLine**(`lines`: string | string[]): *void*

*Defined in [declarations/blessed.d.ts:1962](https://github.com/cancerberoSgx/accursed/blob/468bf3c/src/declarations/blessed.d.ts#L1962)*

Push a line onto the bottom of the content.

**Parameters:**

Name | Type |
------ | ------ |
`lines` | string &#124; string[] |

**Returns:** *void*

___

###  rawListeners

▸ **rawListeners**(`event`: string | symbol): *Function[]*

*Inherited from void*

*Overrides void*

Defined in /Users/sebastiangurin/git/accursed/node_modules/@types/node/events.d.ts:22

**Parameters:**

Name | Type |
------ | ------ |
`event` | string &#124; symbol |

**Returns:** *Function[]*

___

###  remove

▸ **remove**(`node`: [Node](_declarations_blessed_d_.widgets.node.md)): *void*

*Inherited from [Node](_declarations_blessed_d_.widgets.node.md).[remove](_declarations_blessed_d_.widgets.node.md#remove)*

*Defined in [declarations/blessed.d.ts:331](https://github.com/cancerberoSgx/accursed/blob/468bf3c/src/declarations/blessed.d.ts#L331)*

Remove child node from node.

**Parameters:**

Name | Type |
------ | ------ |
`node` | [Node](_declarations_blessed_d_.widgets.node.md) |

**Returns:** *void*

___

###  removeAllListeners

▸ **removeAllListeners**(`event?`: string | symbol): *this*

*Inherited from void*

*Overrides void*

Defined in /Users/sebastiangurin/git/accursed/node_modules/@types/node/events.d.ts:18

**Parameters:**

Name | Type |
------ | ------ |
`event?` | string &#124; symbol |

**Returns:** *this*

___

###  removeHover

▸ **removeHover**(): *void*

*Defined in [declarations/blessed.d.ts:1799](https://github.com/cancerberoSgx/accursed/blob/468bf3c/src/declarations/blessed.d.ts#L1799)*

Remove the hover label completely.

**Returns:** *void*

___

###  removeKey

▸ **removeKey**(`name`: string, `listener`: [KeyEventListener](../modules/_declarations_blessed_d_.widgets.md#keyeventlistener)): *void*

*Inherited from [NodeWithEvents](_declarations_blessed_d_.widgets.nodewithevents.md).[removeKey](_declarations_blessed_d_.widgets.nodewithevents.md#removekey)*

*Defined in [declarations/blessed.d.ts:506](https://github.com/cancerberoSgx/accursed/blob/468bf3c/src/declarations/blessed.d.ts#L506)*

Remove a keypress listener for a specific key.

**Parameters:**

Name | Type |
------ | ------ |
`name` | string |
`listener` | [KeyEventListener](../modules/_declarations_blessed_d_.widgets.md#keyeventlistener) |

**Returns:** *void*

___

###  removeLabel

▸ **removeLabel**(): *any*

*Defined in [declarations/blessed.d.ts:1788](https://github.com/cancerberoSgx/accursed/blob/468bf3c/src/declarations/blessed.d.ts#L1788)*

Remove the label completely.

**Returns:** *any*

___

###  removeListener

▸ **removeListener**(`event`: string | symbol, `listener`: function): *this*

*Inherited from void*

*Overrides void*

Defined in /Users/sebastiangurin/git/accursed/node_modules/@types/node/events.d.ts:16

**Parameters:**

▪ **event**: *string | symbol*

▪ **listener**: *function*

▸ (...`args`: any[]): *void*

**Parameters:**

Name | Type |
------ | ------ |
`...args` | any[] |

**Returns:** *this*

___

###  removeScreenEvent

▸ **removeScreenEvent**(`type`: string, `handler`: function): *void*

*Defined in [declarations/blessed.d.ts:1749](https://github.com/cancerberoSgx/accursed/blob/468bf3c/src/declarations/blessed.d.ts#L1749)*

Same asel.removeListener('screen', ...) except this will automatically keep track of which
listeners are bound to the screen object. For use with onScreenEvent(), free(), and destroy().

**Parameters:**

▪ **type**: *string*

▪ **handler**: *function*

▸ (...`args`: any[]): *void*

**Parameters:**

Name | Type |
------ | ------ |
`...args` | any[] |

**Returns:** *void*

___

###  render

▸ **render**(): *[Coords](../interfaces/_declarations_blessed_d_.widgets.coords.md) | undefined*

*Defined in [declarations/blessed.d.ts:1642](https://github.com/cancerberoSgx/accursed/blob/468bf3c/src/declarations/blessed.d.ts#L1642)*

Write content and children to the screen buffer.

**Returns:** *[Coords](../interfaces/_declarations_blessed_d_.widgets.coords.md) | undefined*

___

###  sattr

▸ **sattr**(`style`: [TStyle](../interfaces/_declarations_blessed_d_.widgets.types.tstyle.md), `fg?`: string, `bg?`: string): *any*

*Defined in [declarations/blessed.d.ts:1857](https://github.com/cancerberoSgx/accursed/blob/468bf3c/src/declarations/blessed.d.ts#L1857)*

calculates the value for `style` (could be substyle like style.bar) to paint in the screen according to
the rest of the properties and optionally bg and fg.

**Parameters:**

Name | Type |
------ | ------ |
`style` | [TStyle](../interfaces/_declarations_blessed_d_.widgets.types.tstyle.md) |
`fg?` | string |
`bg?` | string |

**Returns:** *any*

___

###  screenshot

▸ **screenshot**(`xi`: number, `xl`: number, `yi`: number, `yl`: number): *string*

*Defined in [declarations/blessed.d.ts:1832](https://github.com/cancerberoSgx/accursed/blob/468bf3c/src/declarations/blessed.d.ts#L1832)*

Take an SGR screenshot of the screen within the region. Returns a string containing only
characters and SGR codes. Can be displayed by simply echoing it in a terminal.

**Parameters:**

Name | Type |
------ | ------ |
`xi` | number |
`xl` | number |
`yi` | number |
`yl` | number |

**Returns:** *string*

▸ **screenshot**(): *string*

*Defined in [declarations/blessed.d.ts:1837](https://github.com/cancerberoSgx/accursed/blob/468bf3c/src/declarations/blessed.d.ts#L1837)*

Take an SGR screenshot of the whole screen. Returns a string containing only
characters and SGR codes. Can be displayed by simply echoing it in a terminal.

**Returns:** *string*

___

###  set

▸ **set**(`name`: string, `value`: any): *void*

*Inherited from [Node](_declarations_blessed_d_.widgets.node.md).[set](_declarations_blessed_d_.widgets.node.md#set)*

*Defined in [declarations/blessed.d.ts:385](https://github.com/cancerberoSgx/accursed/blob/468bf3c/src/declarations/blessed.d.ts#L385)*

Set user property to value.

**Parameters:**

Name | Type |
------ | ------ |
`name` | string |
`value` | any |

**Returns:** *void*

___

###  setBack

▸ **setBack**(): *void*

*Defined in [declarations/blessed.d.ts:1778](https://github.com/cancerberoSgx/accursed/blob/468bf3c/src/declarations/blessed.d.ts#L1778)*

Put the element in back of its siblings.

**Returns:** *void*

___

###  setBaseLine

▸ **setBaseLine**(`i`: number, `line`: string | string[]): *void*

*Defined in [declarations/blessed.d.ts:1917](https://github.com/cancerberoSgx/accursed/blob/468bf3c/src/declarations/blessed.d.ts#L1917)*

Set a line in the box's content from the visible top.

**Parameters:**

Name | Type |
------ | ------ |
`i` | number |
`line` | string &#124; string[] |

**Returns:** *void*

___

###  setContent

▸ **setContent**(`text`: string, `noClear?`: boolean, `noTags?`: boolean): *void*

*Defined in [declarations/blessed.d.ts:1873](https://github.com/cancerberoSgx/accursed/blob/468bf3c/src/declarations/blessed.d.ts#L1873)*

Set the content. Note: When text is input, it will be stripped of all non-SGR
escape codes, tabs will be replaced with 8 spaces, and tags will be replaced
with SGR codes (if enabled).

**Parameters:**

Name | Type |
------ | ------ |
`text` | string |
`noClear?` | boolean |
`noTags?` | boolean |

**Returns:** *void*

___

###  setFront

▸ **setFront**(): *void*

*Defined in [declarations/blessed.d.ts:1773](https://github.com/cancerberoSgx/accursed/blob/468bf3c/src/declarations/blessed.d.ts#L1773)*

Put the element in front of its siblings. Uses [setIndex](_declarations_blessed_d_.widgets.blessedelement.md#setindex)

**Returns:** *void*

___

###  setHover

▸ **setHover**(`arg`: string | [LabelOptions](../interfaces/_declarations_blessed_d_.widgets.labeloptions.md)): *void*

*Defined in [declarations/blessed.d.ts:1794](https://github.com/cancerberoSgx/accursed/blob/468bf3c/src/declarations/blessed.d.ts#L1794)*

text/options - Set a hover text box to follow the cursor. Similar to the "title" DOM attribute
in the browser. Example options: {text:'foo'}

**Parameters:**

Name | Type |
------ | ------ |
`arg` | string &#124; [LabelOptions](../interfaces/_declarations_blessed_d_.widgets.labeloptions.md) |

**Returns:** *void*

___

###  setIndex

▸ **setIndex**(`z`: number): *void*

*Defined in [declarations/blessed.d.ts:1768](https://github.com/cancerberoSgx/accursed/blob/468bf3c/src/declarations/blessed.d.ts#L1768)*

Change this element's index in its parent's children array. This will change the rendering order. If all elements are positioned by their selves then this could be similar to CSS z-index property. But if you are using a layout or relaying somhow in the children order then it will change the position of this element and its siblings.

**Parameters:**

Name | Type |
------ | ------ |
`z` | number |

**Returns:** *void*

___

###  setLabel

▸ **setLabel**(`arg`: string | [LabelOptions](../interfaces/_declarations_blessed_d_.widgets.labeloptions.md)): *void*

*Defined in [declarations/blessed.d.ts:1783](https://github.com/cancerberoSgx/accursed/blob/468bf3c/src/declarations/blessed.d.ts#L1783)*

text/options - Set the label text for the top-left corner. Example options: {text:'foo',side:'left'}

**Parameters:**

Name | Type |
------ | ------ |
`arg` | string &#124; [LabelOptions](../interfaces/_declarations_blessed_d_.widgets.labeloptions.md) |

**Returns:** *void*

___

###  setLine

▸ **setLine**(`i`: number, `line`: string | string[]): *void*

*Defined in [declarations/blessed.d.ts:1912](https://github.com/cancerberoSgx/accursed/blob/468bf3c/src/declarations/blessed.d.ts#L1912)*

Set a line in the box's content.

**Parameters:**

Name | Type |
------ | ------ |
`i` | number |
`line` | string &#124; string[] |

**Returns:** *void*

___

###  setMaxListeners

▸ **setMaxListeners**(`n`: number): *this*

*Inherited from void*

*Overrides void*

Defined in /Users/sebastiangurin/git/accursed/node_modules/@types/node/events.d.ts:19

**Parameters:**

Name | Type |
------ | ------ |
`n` | number |

**Returns:** *this*

___

###  setText

▸ **setText**(`text`: string, `noClear?`: boolean): *void*

*Defined in [declarations/blessed.d.ts:1882](https://github.com/cancerberoSgx/accursed/blob/468bf3c/src/declarations/blessed.d.ts#L1882)*

Similar to setContent, but ignore tags and remove escape codes.

**Parameters:**

Name | Type |
------ | ------ |
`text` | string |
`noClear?` | boolean |

**Returns:** *void*

___

###  shiftLine

▸ **shiftLine**(`i`: number): *void*

*Defined in [declarations/blessed.d.ts:1957](https://github.com/cancerberoSgx/accursed/blob/468bf3c/src/declarations/blessed.d.ts#L1957)*

Shift a line off the top of the content.

**Parameters:**

Name | Type |
------ | ------ |
`i` | number |

**Returns:** *void*

___

###  show

▸ **show**(): *void*

*Defined in [declarations/blessed.d.ts:1717](https://github.com/cancerberoSgx/accursed/blob/468bf3c/src/declarations/blessed.d.ts#L1717)*

Show element.

**Returns:** *void*

___

###  strWidth

▸ **strWidth**(`text`: string): *string*

*Defined in [declarations/blessed.d.ts:1983](https://github.com/cancerberoSgx/accursed/blob/468bf3c/src/declarations/blessed.d.ts#L1983)*

Get a string's displayed width, taking into account double-width, surrogate pairs,
combining characters, tags, and SGR escape codes.

**Parameters:**

Name | Type |
------ | ------ |
`text` | string |

**Returns:** *string*

___

###  toggle

▸ **toggle**(): *void*

*Defined in [declarations/blessed.d.ts:1722](https://github.com/cancerberoSgx/accursed/blob/468bf3c/src/declarations/blessed.d.ts#L1722)*

Toggle hidden/shown.

**Returns:** *void*

___

###  unkey

▸ **unkey**(`name`: string, `listener`: [KeyEventListener](../modules/_declarations_blessed_d_.widgets.md#keyeventlistener)): *void*

*Inherited from [NodeWithEvents](_declarations_blessed_d_.widgets.nodewithevents.md).[unkey](_declarations_blessed_d_.widgets.nodewithevents.md#unkey)*

*Defined in [declarations/blessed.d.ts:501](https://github.com/cancerberoSgx/accursed/blob/468bf3c/src/declarations/blessed.d.ts#L501)*

Remove a keypress listener for a specific key.

**Parameters:**

Name | Type |
------ | ------ |
`name` | string |
`listener` | [KeyEventListener](../modules/_declarations_blessed_d_.widgets.md#keyeventlistener) |

**Returns:** *void*

___

###  unshiftLine

▸ **unshiftLine**(`lines`: string | string[]): *void*

*Defined in [declarations/blessed.d.ts:1952](https://github.com/cancerberoSgx/accursed/blob/468bf3c/src/declarations/blessed.d.ts#L1952)*

Unshift a line onto the top of the content.

**Parameters:**

Name | Type |
------ | ------ |
`lines` | string &#124; string[] |

**Returns:** *void*

___

### `Static` listenerCount

▸ **listenerCount**(`emitter`: EventEmitter, `event`: string | symbol): *number*

*Inherited from void*

Defined in /Users/sebastiangurin/git/accursed/node_modules/@types/node/events.d.ts:8

**`deprecated`** since v4.0.0

**Parameters:**

Name | Type |
------ | ------ |
`emitter` | EventEmitter |
`event` | string &#124; symbol |

**Returns:** *number*
