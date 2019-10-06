[accursed](../README.md) › [Globals](../globals.md) › ["blessed/gradient"](../modules/_blessed_gradient_.md) › [GradientText](_blessed_gradient_.gradienttext.md)

# Class: GradientText <**Options**>

Example:
```
const g = new GradientText({
width: 40,
height: 10,
wrap: true,
content: s
bgGradientColors: ['#000088', '#0006dd', '#338800'],
fgGradientColors: ['#ff0000', '#00ff00', '#0000ff']
})
```
TODO: vertical, diagonal ?

## Type parameters

▪ **Options**: *[GradientTextOptions](../interfaces/_blessed_gradient_.gradienttextoptions.md)*

## Hierarchy

  ↳ [Element](_declarations_blessed_d_.widget.element.md)‹Options›

  ↳ **GradientText**

  ↳ [GradientTextAnimation](_blessed_gradient_.gradienttextanimation.md)

## Implements

* [IHasOptions](../interfaces/_declarations_blessed_d_.widgets.ihasoptions.md)‹[INodeOptions](../interfaces/_declarations_blessed_d_.widgets.inodeoptions.md)›
* [IDestroyable](../interfaces/_declarations_blessed_d_.widgets.idestroyable.md)
* [IHasOptions](../interfaces/_declarations_blessed_d_.widgets.ihasoptions.md)‹[ElementOptions](../interfaces/_declarations_blessed_d_.widgets.elementoptions.md)›

## Index

### Constructors

* [constructor](_blessed_gradient_.gradienttext.md#constructor)

### Properties

* [$](_blessed_gradient_.gradienttext.md#$)
* [_](_blessed_gradient_.gradienttext.md#_)
* [_label](_blessed_gradient_.gradienttext.md#optional-_label)
* [_noFill](_blessed_gradient_.gradienttext.md#optional-_nofill)
* [abottom](_blessed_gradient_.gradienttext.md#abottom)
* [aleft](_blessed_gradient_.gradienttext.md#aleft)
* [aright](_blessed_gradient_.gradienttext.md#aright)
* [atop](_blessed_gradient_.gradienttext.md#atop)
* [bg](_blessed_gradient_.gradienttext.md#bg)
* [bgGradientColors](_blessed_gradient_.gradienttext.md#protected-bggradientcolors)
* [bold](_blessed_gradient_.gradienttext.md#bold)
* [border](_blessed_gradient_.gradienttext.md#border)
* [bottom](_blessed_gradient_.gradienttext.md#bottom)
* [children](_blessed_gradient_.gradienttext.md#children)
* [content](_blessed_gradient_.gradienttext.md#content)
* [data](_blessed_gradient_.gradienttext.md#data)
* [detached](_blessed_gradient_.gradienttext.md#detached)
* [draggable](_blessed_gradient_.gradienttext.md#draggable)
* [fg](_blessed_gradient_.gradienttext.md#fg)
* [fgGradientColors](_blessed_gradient_.gradienttext.md#protected-fggradientcolors)
* [focusable](_blessed_gradient_.gradienttext.md#focusable)
* [height](_blessed_gradient_.gradienttext.md#height)
* [hidden](_blessed_gradient_.gradienttext.md#hidden)
* [iheight](_blessed_gradient_.gradienttext.md#iheight)
* [ileft](_blessed_gradient_.gradienttext.md#ileft)
* [index](_blessed_gradient_.gradienttext.md#index)
* [itop](_blessed_gradient_.gradienttext.md#itop)
* [iwidth](_blessed_gradient_.gradienttext.md#iwidth)
* [left](_blessed_gradient_.gradienttext.md#left)
* [lpos](_blessed_gradient_.gradienttext.md#lpos)
* [name](_blessed_gradient_.gradienttext.md#name)
* [options](_blessed_gradient_.gradienttext.md#options)
* [padding](_blessed_gradient_.gradienttext.md#padding)
* [parent](_blessed_gradient_.gradienttext.md#optional-parent)
* [position](_blessed_gradient_.gradienttext.md#position)
* [rbottom](_blessed_gradient_.gradienttext.md#rbottom)
* [right](_blessed_gradient_.gradienttext.md#right)
* [rleft](_blessed_gradient_.gradienttext.md#rleft)
* [rright](_blessed_gradient_.gradienttext.md#rright)
* [rtop](_blessed_gradient_.gradienttext.md#rtop)
* [screen](_blessed_gradient_.gradienttext.md#screen)
* [shrink](_blessed_gradient_.gradienttext.md#shrink)
* [style](_blessed_gradient_.gradienttext.md#style)
* [top](_blessed_gradient_.gradienttext.md#top)
* [tpadding](_blessed_gradient_.gradienttext.md#tpadding)
* [type](_blessed_gradient_.gradienttext.md#type)
* [uid](_blessed_gradient_.gradienttext.md#uid)
* [underline](_blessed_gradient_.gradienttext.md#underline)
* [visible](_blessed_gradient_.gradienttext.md#visible)
* [width](_blessed_gradient_.gradienttext.md#width)
* [defaultMaxListeners](_blessed_gradient_.gradienttext.md#static-defaultmaxlisteners)

### Methods

* [_align](_blessed_gradient_.gradienttext.md#_align)
* [_getBottom](_blessed_gradient_.gradienttext.md#_getbottom)
* [_getCoords](_blessed_gradient_.gradienttext.md#_getcoords)
* [_getHeight](_blessed_gradient_.gradienttext.md#_getheight)
* [_getLeft](_blessed_gradient_.gradienttext.md#_getleft)
* [_getPos](_blessed_gradient_.gradienttext.md#_getpos)
* [_getRight](_blessed_gradient_.gradienttext.md#_getright)
* [_getShrink](_blessed_gradient_.gradienttext.md#_getshrink)
* [_getShrinkBox](_blessed_gradient_.gradienttext.md#_getshrinkbox)
* [_getTop](_blessed_gradient_.gradienttext.md#_gettop)
* [_getWidth](_blessed_gradient_.gradienttext.md#_getwidth)
* [_parseAttr](_blessed_gradient_.gradienttext.md#_parseattr)
* [_parseTags](_blessed_gradient_.gradienttext.md#_parsetags)
* [_wrapContent](_blessed_gradient_.gradienttext.md#_wrapcontent)
* [addListener](_blessed_gradient_.gradienttext.md#addlistener)
* [append](_blessed_gradient_.gradienttext.md#append)
* [clearBaseLine](_blessed_gradient_.gradienttext.md#clearbaseline)
* [clearLine](_blessed_gradient_.gradienttext.md#clearline)
* [clearPos](_blessed_gradient_.gradienttext.md#clearpos)
* [collectAncestors](_blessed_gradient_.gradienttext.md#collectancestors)
* [collectDescendants](_blessed_gradient_.gradienttext.md#collectdescendants)
* [deleteBottom](_blessed_gradient_.gradienttext.md#deletebottom)
* [deleteLine](_blessed_gradient_.gradienttext.md#deleteline)
* [deleteTop](_blessed_gradient_.gradienttext.md#deletetop)
* [destroy](_blessed_gradient_.gradienttext.md#destroy)
* [detach](_blessed_gradient_.gradienttext.md#detach)
* [disableDrag](_blessed_gradient_.gradienttext.md#disabledrag)
* [emit](_blessed_gradient_.gradienttext.md#emit)
* [emitAncestors](_blessed_gradient_.gradienttext.md#emitancestors)
* [emitDescendants](_blessed_gradient_.gradienttext.md#emitdescendants)
* [enableDrag](_blessed_gradient_.gradienttext.md#enabledrag)
* [enableInput](_blessed_gradient_.gradienttext.md#enableinput)
* [enableKeys](_blessed_gradient_.gradienttext.md#enablekeys)
* [enableMouse](_blessed_gradient_.gradienttext.md#enablemouse)
* [eventNames](_blessed_gradient_.gradienttext.md#eventnames)
* [focus](_blessed_gradient_.gradienttext.md#focus)
* [forAncestors](_blessed_gradient_.gradienttext.md#forancestors)
* [forDescendants](_blessed_gradient_.gradienttext.md#fordescendants)
* [free](_blessed_gradient_.gradienttext.md#free)
* [get](_blessed_gradient_.gradienttext.md#get)
* [getBaseLine](_blessed_gradient_.gradienttext.md#getbaseline)
* [getBgGradientColors](_blessed_gradient_.gradienttext.md#protected-getbggradientcolors)
* [getColorInputFormat](_blessed_gradient_.gradienttext.md#protected-getcolorinputformat)
* [getContent](_blessed_gradient_.gradienttext.md#getcontent)
* [getFgGradientColors](_blessed_gradient_.gradienttext.md#protected-getfggradientcolors)
* [getLine](_blessed_gradient_.gradienttext.md#getline)
* [getLines](_blessed_gradient_.gradienttext.md#getlines)
* [getMaxListeners](_blessed_gradient_.gradienttext.md#getmaxlisteners)
* [getScreenLines](_blessed_gradient_.gradienttext.md#getscreenlines)
* [getText](_blessed_gradient_.gradienttext.md#gettext)
* [hasAncestor](_blessed_gradient_.gradienttext.md#hasancestor)
* [hasDescendant](_blessed_gradient_.gradienttext.md#hasdescendant)
* [hide](_blessed_gradient_.gradienttext.md#hide)
* [insert](_blessed_gradient_.gradienttext.md#insert)
* [insertAfter](_blessed_gradient_.gradienttext.md#insertafter)
* [insertBefore](_blessed_gradient_.gradienttext.md#insertbefore)
* [insertBottom](_blessed_gradient_.gradienttext.md#insertbottom)
* [insertLine](_blessed_gradient_.gradienttext.md#insertline)
* [insertTop](_blessed_gradient_.gradienttext.md#inserttop)
* [key](_blessed_gradient_.gradienttext.md#key)
* [kill](_blessed_gradient_.gradienttext.md#kill)
* [listenerCount](_blessed_gradient_.gradienttext.md#listenercount)
* [listeners](_blessed_gradient_.gradienttext.md#listeners)
* [off](_blessed_gradient_.gradienttext.md#off)
* [on](_blessed_gradient_.gradienttext.md#on)
* [onScreenEvent](_blessed_gradient_.gradienttext.md#onscreenevent)
* [once](_blessed_gradient_.gradienttext.md#once)
* [onceKey](_blessed_gradient_.gradienttext.md#oncekey)
* [parseContent](_blessed_gradient_.gradienttext.md#parsecontent)
* [popLine](_blessed_gradient_.gradienttext.md#popline)
* [prepend](_blessed_gradient_.gradienttext.md#prepend)
* [prependListener](_blessed_gradient_.gradienttext.md#prependlistener)
* [prependOnceListener](_blessed_gradient_.gradienttext.md#prependoncelistener)
* [pushLine](_blessed_gradient_.gradienttext.md#pushline)
* [rawListeners](_blessed_gradient_.gradienttext.md#rawlisteners)
* [remove](_blessed_gradient_.gradienttext.md#remove)
* [removeAllListeners](_blessed_gradient_.gradienttext.md#removealllisteners)
* [removeHover](_blessed_gradient_.gradienttext.md#removehover)
* [removeKey](_blessed_gradient_.gradienttext.md#removekey)
* [removeLabel](_blessed_gradient_.gradienttext.md#removelabel)
* [removeListener](_blessed_gradient_.gradienttext.md#removelistener)
* [removeScreenEvent](_blessed_gradient_.gradienttext.md#removescreenevent)
* [render](_blessed_gradient_.gradienttext.md#render)
* [sattr](_blessed_gradient_.gradienttext.md#sattr)
* [screenshot](_blessed_gradient_.gradienttext.md#screenshot)
* [set](_blessed_gradient_.gradienttext.md#set)
* [setBack](_blessed_gradient_.gradienttext.md#setback)
* [setBaseLine](_blessed_gradient_.gradienttext.md#setbaseline)
* [setContent](_blessed_gradient_.gradienttext.md#setcontent)
* [setFront](_blessed_gradient_.gradienttext.md#setfront)
* [setHover](_blessed_gradient_.gradienttext.md#sethover)
* [setIndex](_blessed_gradient_.gradienttext.md#setindex)
* [setLabel](_blessed_gradient_.gradienttext.md#setlabel)
* [setLine](_blessed_gradient_.gradienttext.md#setline)
* [setMaxListeners](_blessed_gradient_.gradienttext.md#setmaxlisteners)
* [setText](_blessed_gradient_.gradienttext.md#settext)
* [shiftLine](_blessed_gradient_.gradienttext.md#shiftline)
* [show](_blessed_gradient_.gradienttext.md#show)
* [strWidth](_blessed_gradient_.gradienttext.md#strwidth)
* [toggle](_blessed_gradient_.gradienttext.md#toggle)
* [unkey](_blessed_gradient_.gradienttext.md#unkey)
* [unshiftLine](_blessed_gradient_.gradienttext.md#unshiftline)
* [listenerCount](_blessed_gradient_.gradienttext.md#static-listenercount)

## Constructors

###  constructor

\+ **new GradientText**(`options`: Options): *[GradientText](_blessed_gradient_.gradienttext.md)*

*Overrides [BlessedElement](_declarations_blessed_d_.widgets.blessedelement.md).[constructor](_declarations_blessed_d_.widgets.blessedelement.md#constructor)*

*Defined in [blessed/gradient.ts:30](https://github.com/cancerberoSgx/accursed/blob/468bf3c/src/blessed/gradient.ts#L30)*

**Parameters:**

Name | Type |
------ | ------ |
`options` | Options |

**Returns:** *[GradientText](_blessed_gradient_.gradienttext.md)*

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

*Inherited from [BlessedElement](_declarations_blessed_d_.widgets.blessedelement.md).[_label](_declarations_blessed_d_.widgets.blessedelement.md#optional-_label)*

*Defined in [declarations/blessed.d.ts:1632](https://github.com/cancerberoSgx/accursed/blob/468bf3c/src/declarations/blessed.d.ts#L1632)*

Get's the child element implementing the current label of this node.

**`internal`** 

___

### `Optional` _noFill

• **_noFill**? : *boolean*

*Inherited from [BlessedElement](_declarations_blessed_d_.widgets.blessedelement.md).[_noFill](_declarations_blessed_d_.widgets.blessedelement.md#optional-_nofill)*

*Defined in [declarations/blessed.d.ts:1585](https://github.com/cancerberoSgx/accursed/blob/468bf3c/src/declarations/blessed.d.ts#L1585)*

If true, the element won't be filled.

**`internal`** 

___

###  abottom

• **abottom**: *number*

*Inherited from [BlessedElement](_declarations_blessed_d_.widgets.blessedelement.md).[abottom](_declarations_blessed_d_.widgets.blessedelement.md#abottom)*

*Defined in [declarations/blessed.d.ts:1574](https://github.com/cancerberoSgx/accursed/blob/468bf3c/src/declarations/blessed.d.ts#L1574)*

Calculated absolute bottom offset.

___

###  aleft

• **aleft**: *number*

*Inherited from [BlessedElement](_declarations_blessed_d_.widgets.blessedelement.md).[aleft](_declarations_blessed_d_.widgets.blessedelement.md#aleft)*

*Defined in [declarations/blessed.d.ts:1564](https://github.com/cancerberoSgx/accursed/blob/468bf3c/src/declarations/blessed.d.ts#L1564)*

Calculated absolute left offset.

___

###  aright

• **aright**: *number*

*Inherited from [BlessedElement](_declarations_blessed_d_.widgets.blessedelement.md).[aright](_declarations_blessed_d_.widgets.blessedelement.md#aright)*

*Defined in [declarations/blessed.d.ts:1569](https://github.com/cancerberoSgx/accursed/blob/468bf3c/src/declarations/blessed.d.ts#L1569)*

Calculated absolute right offset.

___

###  atop

• **atop**: *number*

*Inherited from [BlessedElement](_declarations_blessed_d_.widgets.blessedelement.md).[atop](_declarations_blessed_d_.widgets.blessedelement.md#atop)*

*Defined in [declarations/blessed.d.ts:1559](https://github.com/cancerberoSgx/accursed/blob/468bf3c/src/declarations/blessed.d.ts#L1559)*

Calculated absolute top offset.

___

###  bg

• **bg**: *number*

*Inherited from [BlessedElement](_declarations_blessed_d_.widgets.blessedelement.md).[bg](_declarations_blessed_d_.widgets.blessedelement.md#bg)*

*Defined in [declarations/blessed.d.ts:1516](https://github.com/cancerberoSgx/accursed/blob/468bf3c/src/declarations/blessed.d.ts#L1516)*

Border foreground and background, must be numbers (-1 for default).

___

### `Protected` bgGradientColors

• **bgGradientColors**: *string[]*

*Defined in [blessed/gradient.ts:65](https://github.com/cancerberoSgx/accursed/blob/468bf3c/src/blessed/gradient.ts#L65)*

___

###  bold

• **bold**: *string*

*Inherited from [BlessedElement](_declarations_blessed_d_.widgets.blessedelement.md).[bold](_declarations_blessed_d_.widgets.blessedelement.md#bold)*

*Defined in [declarations/blessed.d.ts:1522](https://github.com/cancerberoSgx/accursed/blob/468bf3c/src/declarations/blessed.d.ts#L1522)*

Border attributes.

___

###  border

• **border**: *[TBorder](../interfaces/_declarations_blessed_d_.widgets.types.tborder.md)*

*Inherited from [BlessedElement](_declarations_blessed_d_.widgets.blessedelement.md).[border](_declarations_blessed_d_.widgets.blessedelement.md#border)*

*Defined in [declarations/blessed.d.ts:1501](https://github.com/cancerberoSgx/accursed/blob/468bf3c/src/declarations/blessed.d.ts#L1501)*

Border object.

___

###  bottom

• **bottom**: *number | string*

*Inherited from [BlessedElement](_declarations_blessed_d_.widgets.blessedelement.md).[bottom](_declarations_blessed_d_.widgets.blessedelement.md#bottom)*

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

*Inherited from [BlessedElement](_declarations_blessed_d_.widgets.blessedelement.md).[content](_declarations_blessed_d_.widgets.blessedelement.md#content)*

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

*Inherited from [BlessedElement](_declarations_blessed_d_.widgets.blessedelement.md).[detached](_declarations_blessed_d_.widgets.blessedelement.md#detached)*

*Defined in [declarations/blessed.d.ts:1511](https://github.com/cancerberoSgx/accursed/blob/468bf3c/src/declarations/blessed.d.ts#L1511)*

___

###  draggable

• **draggable**: *boolean*

*Inherited from [BlessedElement](_declarations_blessed_d_.widgets.blessedelement.md).[draggable](_declarations_blessed_d_.widgets.blessedelement.md#draggable)*

*Defined in [declarations/blessed.d.ts:1579](https://github.com/cancerberoSgx/accursed/blob/468bf3c/src/declarations/blessed.d.ts#L1579)*

Whether the element is draggable. Set to true to allow dragging.

___

###  fg

• **fg**: *number*

*Inherited from [BlessedElement](_declarations_blessed_d_.widgets.blessedelement.md).[fg](_declarations_blessed_d_.widgets.blessedelement.md#fg)*

*Defined in [declarations/blessed.d.ts:1517](https://github.com/cancerberoSgx/accursed/blob/468bf3c/src/declarations/blessed.d.ts#L1517)*

___

### `Protected` fgGradientColors

• **fgGradientColors**: *string[]*

*Defined in [blessed/gradient.ts:54](https://github.com/cancerberoSgx/accursed/blob/468bf3c/src/blessed/gradient.ts#L54)*

___

###  focusable

• **focusable**: *boolean*

*Inherited from [Node](_declarations_blessed_d_.widgets.node.md).[focusable](_declarations_blessed_d_.widgets.node.md#focusable)*

*Defined in [declarations/blessed.d.ts:269](https://github.com/cancerberoSgx/accursed/blob/468bf3c/src/declarations/blessed.d.ts#L269)*

If true, `screen.focusNext()` and methods related to focus will consider this Element.

___

###  height

• **height**: *number | string*

*Inherited from [BlessedElement](_declarations_blessed_d_.widgets.blessedelement.md).[height](_declarations_blessed_d_.widgets.blessedelement.md#height)*

*Defined in [declarations/blessed.d.ts:1534](https://github.com/cancerberoSgx/accursed/blob/468bf3c/src/declarations/blessed.d.ts#L1534)*

Calculated height.

___

###  hidden

• **hidden**: *boolean*

*Inherited from [BlessedElement](_declarations_blessed_d_.widgets.blessedelement.md).[hidden](_declarations_blessed_d_.widgets.blessedelement.md#hidden)*

*Defined in [declarations/blessed.d.ts:1509](https://github.com/cancerberoSgx/accursed/blob/468bf3c/src/declarations/blessed.d.ts#L1509)*

___

###  iheight

• **iheight**: *number*

*Inherited from [BlessedElement](_declarations_blessed_d_.widgets.blessedelement.md).[iheight](_declarations_blessed_d_.widgets.blessedelement.md#iheight)*

*Defined in [declarations/blessed.d.ts:1598](https://github.com/cancerberoSgx/accursed/blob/468bf3c/src/declarations/blessed.d.ts#L1598)*

Calculated height taking into account padding and boder.

___

###  ileft

• **ileft**: *number*

*Inherited from [BlessedElement](_declarations_blessed_d_.widgets.blessedelement.md).[ileft](_declarations_blessed_d_.widgets.blessedelement.md#ileft)*

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

*Inherited from [BlessedElement](_declarations_blessed_d_.widgets.blessedelement.md).[itop](_declarations_blessed_d_.widgets.blessedelement.md#itop)*

*Defined in [declarations/blessed.d.ts:1590](https://github.com/cancerberoSgx/accursed/blob/468bf3c/src/declarations/blessed.d.ts#L1590)*

Calculated top coordinate taking into account padding and boder.

___

###  iwidth

• **iwidth**: *number*

*Inherited from [BlessedElement](_declarations_blessed_d_.widgets.blessedelement.md).[iwidth](_declarations_blessed_d_.widgets.blessedelement.md#iwidth)*

*Defined in [declarations/blessed.d.ts:1602](https://github.com/cancerberoSgx/accursed/blob/468bf3c/src/declarations/blessed.d.ts#L1602)*

Calculated width taking into account padding and boder.

___

###  left

• **left**: *number | string*

*Inherited from [BlessedElement](_declarations_blessed_d_.widgets.blessedelement.md).[left](_declarations_blessed_d_.widgets.blessedelement.md#left)*

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

*Inherited from [BlessedElement](_declarations_blessed_d_.widgets.blessedelement.md).[name](_declarations_blessed_d_.widgets.blessedelement.md#name)*

*Defined in [declarations/blessed.d.ts:1496](https://github.com/cancerberoSgx/accursed/blob/468bf3c/src/declarations/blessed.d.ts#L1496)*

Name of the element. Useful for form submission.

___

###  options

• **options**: *Options*

*Implementation of [IHasOptions](../interfaces/_declarations_blessed_d_.widgets.ihasoptions.md).[options](../interfaces/_declarations_blessed_d_.widgets.ihasoptions.md#options)*

*Inherited from [BlessedElement](_declarations_blessed_d_.widgets.blessedelement.md).[options](_declarations_blessed_d_.widgets.blessedelement.md#options)*

*Overrides [Node](_declarations_blessed_d_.widgets.node.md).[options](_declarations_blessed_d_.widgets.node.md#options)*

*Defined in [declarations/blessed.d.ts:1491](https://github.com/cancerberoSgx/accursed/blob/468bf3c/src/declarations/blessed.d.ts#L1491)*

Original options object.

___

###  padding

• **padding**: *Required‹[Padding](../interfaces/_declarations_blessed_d_.widgets.padding.md)›*

*Inherited from [BlessedElement](_declarations_blessed_d_.widgets.blessedelement.md).[padding](_declarations_blessed_d_.widgets.blessedelement.md#padding)*

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

*Inherited from [BlessedElement](_declarations_blessed_d_.widgets.blessedelement.md).[position](_declarations_blessed_d_.widgets.blessedelement.md#position)*

*Defined in [declarations/blessed.d.ts:1507](https://github.com/cancerberoSgx/accursed/blob/468bf3c/src/declarations/blessed.d.ts#L1507)*

___

###  rbottom

• **rbottom**: *[TPosition](../modules/_declarations_blessed_d_.widgets.types.md#tposition)*

*Inherited from [BlessedElement](_declarations_blessed_d_.widgets.blessedelement.md).[rbottom](_declarations_blessed_d_.widgets.blessedelement.md#rbottom)*

*Defined in [declarations/blessed.d.ts:1626](https://github.com/cancerberoSgx/accursed/blob/468bf3c/src/declarations/blessed.d.ts#L1626)*

Calculated relative bottom offset.

Setting this property will cause the element to change element's [position](_blessed_gradient_.gradienttext.md#position) property and emit [move](_declarations_blessedprogram_d_.blessedprogram.md#move) event.

___

###  right

• **right**: *number | string*

*Inherited from [BlessedElement](_declarations_blessed_d_.widgets.blessedelement.md).[right](_declarations_blessed_d_.widgets.blessedelement.md#right)*

*Defined in [declarations/blessed.d.ts:1549](https://github.com/cancerberoSgx/accursed/blob/468bf3c/src/declarations/blessed.d.ts#L1549)*

Calculated relative right offset.

___

###  rleft

• **rleft**: *[TTopLeft](../modules/_declarations_blessed_d_.widgets.types.md#ttopleft)*

*Inherited from [BlessedElement](_declarations_blessed_d_.widgets.blessedelement.md).[rleft](_declarations_blessed_d_.widgets.blessedelement.md#rleft)*

*Defined in [declarations/blessed.d.ts:1612](https://github.com/cancerberoSgx/accursed/blob/468bf3c/src/declarations/blessed.d.ts#L1612)*

Setting this property will cause the element to change element's [position](_blessed_gradient_.gradienttext.md#position) property and emit [move](_declarations_blessedprogram_d_.blessedprogram.md#move) event.

___

###  rright

• **rright**: *[TPosition](../modules/_declarations_blessed_d_.widgets.types.md#tposition)*

*Inherited from [BlessedElement](_declarations_blessed_d_.widgets.blessedelement.md).[rright](_declarations_blessed_d_.widgets.blessedelement.md#rright)*

*Defined in [declarations/blessed.d.ts:1619](https://github.com/cancerberoSgx/accursed/blob/468bf3c/src/declarations/blessed.d.ts#L1619)*

Calculated relative bottom offset.

Setting this property will cause the element to change element's [position](_blessed_gradient_.gradienttext.md#position) property and emit [move](_declarations_blessedprogram_d_.blessedprogram.md#move) event.

___

###  rtop

• **rtop**: *[TTopLeft](../modules/_declarations_blessed_d_.widgets.types.md#ttopleft)*

*Inherited from [BlessedElement](_declarations_blessed_d_.widgets.blessedelement.md).[rtop](_declarations_blessed_d_.widgets.blessedelement.md#rtop)*

*Defined in [declarations/blessed.d.ts:1607](https://github.com/cancerberoSgx/accursed/blob/468bf3c/src/declarations/blessed.d.ts#L1607)*

Setting this property will cause the element to change element's [position](_blessed_gradient_.gradienttext.md#position) property and emit [move](_declarations_blessedprogram_d_.blessedprogram.md#move) event.

___

###  screen

• **screen**: *[Screen](_declarations_blessed_d_.widgets.screen.md)*

*Inherited from [Node](_declarations_blessed_d_.widgets.node.md).[screen](_declarations_blessed_d_.widgets.node.md#screen)*

*Defined in [declarations/blessed.d.ts:306](https://github.com/cancerberoSgx/accursed/blob/468bf3c/src/declarations/blessed.d.ts#L306)*

Parent screen.

___

###  shrink

• **shrink**: *boolean*

*Inherited from [BlessedElement](_declarations_blessed_d_.widgets.blessedelement.md).[shrink](_declarations_blessed_d_.widgets.blessedelement.md#shrink)*

*Defined in [declarations/blessed.d.ts:1485](https://github.com/cancerberoSgx/accursed/blob/468bf3c/src/declarations/blessed.d.ts#L1485)*

___

###  style

• **style**: *[TStyle](../interfaces/_declarations_blessed_d_.widgets.types.tstyle.md)*

*Inherited from [BlessedElement](_declarations_blessed_d_.widgets.blessedelement.md).[style](_declarations_blessed_d_.widgets.blessedelement.md#style)*

*Defined in [declarations/blessed.d.ts:1506](https://github.com/cancerberoSgx/accursed/blob/468bf3c/src/declarations/blessed.d.ts#L1506)*

___

###  top

• **top**: *number | string*

*Inherited from [BlessedElement](_declarations_blessed_d_.widgets.blessedelement.md).[top](_declarations_blessed_d_.widgets.blessedelement.md#top)*

*Defined in [declarations/blessed.d.ts:1539](https://github.com/cancerberoSgx/accursed/blob/468bf3c/src/declarations/blessed.d.ts#L1539)*

Calculated relative top offset.

___

###  tpadding

• **tpadding**: *number*

*Inherited from [BlessedElement](_declarations_blessed_d_.widgets.blessedelement.md).[tpadding](_declarations_blessed_d_.widgets.blessedelement.md#tpadding)*

*Defined in [declarations/blessed.d.ts:1637](https://github.com/cancerberoSgx/accursed/blob/468bf3c/src/declarations/blessed.d.ts#L1637)*

Givesthe total padding on any direction.

___

###  type

• **type**: *string* = "gradienttext"

*Overrides [Node](_declarations_blessed_d_.widgets.node.md).[type](_declarations_blessed_d_.widgets.node.md#type)*

*Defined in [blessed/gradient.ts:30](https://github.com/cancerberoSgx/accursed/blob/468bf3c/src/blessed/gradient.ts#L30)*

___

###  uid

• **uid**: *number*

*Inherited from [Node](_declarations_blessed_d_.widgets.node.md).[uid](_declarations_blessed_d_.widgets.node.md#uid)*

*Defined in [declarations/blessed.d.ts:264](https://github.com/cancerberoSgx/accursed/blob/468bf3c/src/declarations/blessed.d.ts#L264)*

Unique identifier for Node instances. @internal

___

###  underline

• **underline**: *string*

*Inherited from [BlessedElement](_declarations_blessed_d_.widgets.blessedelement.md).[underline](_declarations_blessed_d_.widgets.blessedelement.md#underline)*

*Defined in [declarations/blessed.d.ts:1524](https://github.com/cancerberoSgx/accursed/blob/468bf3c/src/declarations/blessed.d.ts#L1524)*

___

###  visible

• **visible**: *boolean*

*Inherited from [BlessedElement](_declarations_blessed_d_.widgets.blessedelement.md).[visible](_declarations_blessed_d_.widgets.blessedelement.md#visible)*

*Defined in [declarations/blessed.d.ts:1510](https://github.com/cancerberoSgx/accursed/blob/468bf3c/src/declarations/blessed.d.ts#L1510)*

___

###  width

• **width**: *number | string*

*Inherited from [BlessedElement](_declarations_blessed_d_.widgets.blessedelement.md).[width](_declarations_blessed_d_.widgets.blessedelement.md#width)*

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

*Inherited from [BlessedElement](_declarations_blessed_d_.widgets.blessedelement.md).[_align](_declarations_blessed_d_.widgets.blessedelement.md#_align)*

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

*Inherited from [BlessedElement](_declarations_blessed_d_.widgets.blessedelement.md).[_getBottom](_declarations_blessed_d_.widgets.blessedelement.md#_getbottom)*

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

*Inherited from [BlessedElement](_declarations_blessed_d_.widgets.blessedelement.md).[_getCoords](_declarations_blessed_d_.widgets.blessedelement.md#_getcoords)*

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

*Inherited from [BlessedElement](_declarations_blessed_d_.widgets.blessedelement.md).[_getHeight](_declarations_blessed_d_.widgets.blessedelement.md#_getheight)*

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

*Inherited from [BlessedElement](_declarations_blessed_d_.widgets.blessedelement.md).[_getLeft](_declarations_blessed_d_.widgets.blessedelement.md#_getleft)*

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

*Inherited from [BlessedElement](_declarations_blessed_d_.widgets.blessedelement.md).[_getPos](_declarations_blessed_d_.widgets.blessedelement.md#_getpos)*

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

*Inherited from [BlessedElement](_declarations_blessed_d_.widgets.blessedelement.md).[_getRight](_declarations_blessed_d_.widgets.blessedelement.md#_getright)*

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

*Inherited from [BlessedElement](_declarations_blessed_d_.widgets.blessedelement.md).[_getShrink](_declarations_blessed_d_.widgets.blessedelement.md#_getshrink)*

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

*Inherited from [BlessedElement](_declarations_blessed_d_.widgets.blessedelement.md).[_getShrinkBox](_declarations_blessed_d_.widgets.blessedelement.md#_getshrinkbox)*

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

*Inherited from [BlessedElement](_declarations_blessed_d_.widgets.blessedelement.md).[_getTop](_declarations_blessed_d_.widgets.blessedelement.md#_gettop)*

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

*Inherited from [BlessedElement](_declarations_blessed_d_.widgets.blessedelement.md).[_getWidth](_declarations_blessed_d_.widgets.blessedelement.md#_getwidth)*

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

*Inherited from [BlessedElement](_declarations_blessed_d_.widgets.blessedelement.md).[_parseAttr](_declarations_blessed_d_.widgets.blessedelement.md#_parseattr)*

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

*Inherited from [BlessedElement](_declarations_blessed_d_.widgets.blessedelement.md).[_parseTags](_declarations_blessed_d_.widgets.blessedelement.md#_parsetags)*

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

*Inherited from [BlessedElement](_declarations_blessed_d_.widgets.blessedelement.md).[_wrapContent](_declarations_blessed_d_.widgets.blessedelement.md#_wrapcontent)*

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

*Inherited from [BlessedElement](_declarations_blessed_d_.widgets.blessedelement.md).[clearBaseLine](_declarations_blessed_d_.widgets.blessedelement.md#clearbaseline)*

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

*Inherited from [BlessedElement](_declarations_blessed_d_.widgets.blessedelement.md).[clearLine](_declarations_blessed_d_.widgets.blessedelement.md#clearline)*

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

*Inherited from [BlessedElement](_declarations_blessed_d_.widgets.blessedelement.md).[clearPos](_declarations_blessed_d_.widgets.blessedelement.md#clearpos)*

*Defined in [declarations/blessed.d.ts:1866](https://github.com/cancerberoSgx/accursed/blob/468bf3c/src/declarations/blessed.d.ts#L1866)*

Cleans the rectangle of this element on the screen. Useful for subclasses before rendering.

**`internal`** 

**Parameters:**

Name | Type | Description |
------ | ------ | ------ |
`get?` | boolean | it's passed to [_getCoords](_blessed_gradient_.gradienttext.md#_getcoords) |
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

*Inherited from [BlessedElement](_declarations_blessed_d_.widgets.blessedelement.md).[deleteBottom](_declarations_blessed_d_.widgets.blessedelement.md#deletebottom)*

*Defined in [declarations/blessed.d.ts:1947](https://github.com/cancerberoSgx/accursed/blob/468bf3c/src/declarations/blessed.d.ts#L1947)*

Delete a line at the bottom of the box.

**Returns:** *void*

___

###  deleteLine

▸ **deleteLine**(`i`: number): *void*

*Inherited from [BlessedElement](_declarations_blessed_d_.widgets.blessedelement.md).[deleteLine](_declarations_blessed_d_.widgets.blessedelement.md#deleteline)*

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

*Inherited from [BlessedElement](_declarations_blessed_d_.widgets.blessedelement.md).[deleteTop](_declarations_blessed_d_.widgets.blessedelement.md#deletetop)*

*Defined in [declarations/blessed.d.ts:1942](https://github.com/cancerberoSgx/accursed/blob/468bf3c/src/declarations/blessed.d.ts#L1942)*

Delete a line at the top of the box.

**Returns:** *void*

___

###  destroy

▸ **destroy**(): *void*

*Implementation of [IDestroyable](../interfaces/_declarations_blessed_d_.widgets.idestroyable.md)*

*Inherited from [BlessedElement](_declarations_blessed_d_.widgets.blessedelement.md).[destroy](_declarations_blessed_d_.widgets.blessedelement.md#destroy)*

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

*Inherited from [BlessedElement](_declarations_blessed_d_.widgets.blessedelement.md).[disableDrag](_declarations_blessed_d_.widgets.blessedelement.md#disabledrag)*

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

*Inherited from [BlessedElement](_declarations_blessed_d_.widgets.blessedelement.md).[enableDrag](_declarations_blessed_d_.widgets.blessedelement.md#enabledrag)*

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

*Inherited from [BlessedElement](_declarations_blessed_d_.widgets.blessedelement.md).[enableInput](_declarations_blessed_d_.widgets.blessedelement.md#enableinput)*

*Defined in [declarations/blessed.d.ts:1814](https://github.com/cancerberoSgx/accursed/blob/468bf3c/src/declarations/blessed.d.ts#L1814)*

Enable key and mouse events. Calls bot enableMouse and enableKeys.

**Returns:** *void*

___

###  enableKeys

▸ **enableKeys**(): *void*

*Inherited from [BlessedElement](_declarations_blessed_d_.widgets.blessedelement.md).[enableKeys](_declarations_blessed_d_.widgets.blessedelement.md#enablekeys)*

*Defined in [declarations/blessed.d.ts:1809](https://github.com/cancerberoSgx/accursed/blob/468bf3c/src/declarations/blessed.d.ts#L1809)*

Enable keypress events for the element (automatically called when a form of on('keypress') is bound).

**Returns:** *void*

___

###  enableMouse

▸ **enableMouse**(): *void*

*Inherited from [BlessedElement](_declarations_blessed_d_.widgets.blessedelement.md).[enableMouse](_declarations_blessed_d_.widgets.blessedelement.md#enablemouse)*

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

*Inherited from [BlessedElement](_declarations_blessed_d_.widgets.blessedelement.md).[focus](_declarations_blessed_d_.widgets.blessedelement.md#focus)*

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

*Inherited from [BlessedElement](_declarations_blessed_d_.widgets.blessedelement.md).[free](_declarations_blessed_d_.widgets.blessedelement.md#free)*

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

*Inherited from [BlessedElement](_declarations_blessed_d_.widgets.blessedelement.md).[getBaseLine](_declarations_blessed_d_.widgets.blessedelement.md#getbaseline)*

*Defined in [declarations/blessed.d.ts:1907](https://github.com/cancerberoSgx/accursed/blob/468bf3c/src/declarations/blessed.d.ts#L1907)*

Get a line from the box's content from the visible top.

**Parameters:**

Name | Type |
------ | ------ |
`i` | number |

**Returns:** *string*

___

### `Protected` getBgGradientColors

▸ **getBgGradientColors**(`coords`: [Coords](../interfaces/_declarations_blessed_d_.widgets.coords.md)): *string[]*

*Defined in [blessed/gradient.ts:66](https://github.com/cancerberoSgx/accursed/blob/468bf3c/src/blessed/gradient.ts#L66)*

**Parameters:**

Name | Type |
------ | ------ |
`coords` | [Coords](../interfaces/_declarations_blessed_d_.widgets.coords.md) |

**Returns:** *string[]*

___

### `Protected` getColorInputFormat

▸ **getColorInputFormat**(`s`: string[]): *"hex" | "rgb" | "hsl"*

*Defined in [blessed/gradient.ts:77](https://github.com/cancerberoSgx/accursed/blob/468bf3c/src/blessed/gradient.ts#L77)*

**Parameters:**

Name | Type |
------ | ------ |
`s` | string[] |

**Returns:** *"hex" | "rgb" | "hsl"*

___

###  getContent

▸ **getContent**(): *string*

*Inherited from [BlessedElement](_declarations_blessed_d_.widgets.blessedelement.md).[getContent](_declarations_blessed_d_.widgets.blessedelement.md#getcontent)*

*Defined in [declarations/blessed.d.ts:1877](https://github.com/cancerberoSgx/accursed/blob/468bf3c/src/declarations/blessed.d.ts#L1877)*

Return content, slightly different from el.content. Assume the above formatting.

**Returns:** *string*

___

### `Protected` getFgGradientColors

▸ **getFgGradientColors**(`coords`: [Coords](../interfaces/_declarations_blessed_d_.widgets.coords.md)): *string[]*

*Defined in [blessed/gradient.ts:55](https://github.com/cancerberoSgx/accursed/blob/468bf3c/src/blessed/gradient.ts#L55)*

**Parameters:**

Name | Type |
------ | ------ |
`coords` | [Coords](../interfaces/_declarations_blessed_d_.widgets.coords.md) |

**Returns:** *string[]*

___

###  getLine

▸ **getLine**(`i`: number): *string*

*Inherited from [BlessedElement](_declarations_blessed_d_.widgets.blessedelement.md).[getLine](_declarations_blessed_d_.widgets.blessedelement.md#getline)*

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

*Inherited from [BlessedElement](_declarations_blessed_d_.widgets.blessedelement.md).[getLines](_declarations_blessed_d_.widgets.blessedelement.md#getlines)*

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

*Inherited from [BlessedElement](_declarations_blessed_d_.widgets.blessedelement.md).[getScreenLines](_declarations_blessed_d_.widgets.blessedelement.md#getscreenlines)*

*Defined in [declarations/blessed.d.ts:1977](https://github.com/cancerberoSgx/accursed/blob/468bf3c/src/declarations/blessed.d.ts#L1977)*

An array containing the lines as they are displayed on the screen.

**Returns:** *string[]*

___

###  getText

▸ **getText**(): *string*

*Inherited from [BlessedElement](_declarations_blessed_d_.widgets.blessedelement.md).[getText](_declarations_blessed_d_.widgets.blessedelement.md#gettext)*

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

*Inherited from [BlessedElement](_declarations_blessed_d_.widgets.blessedelement.md).[hide](_declarations_blessed_d_.widgets.blessedelement.md#hide)*

*Defined in [declarations/blessed.d.ts:1712](https://github.com/cancerberoSgx/accursed/blob/468bf3c/src/declarations/blessed.d.ts#L1712)*

Hide element, clear the element's region on the screen and triggers [hide](_blessed_gradient_.gradienttext.md#hide) event.

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

*Inherited from [BlessedElement](_declarations_blessed_d_.widgets.blessedelement.md).[insertBottom](_declarations_blessed_d_.widgets.blessedelement.md#insertbottom)*

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

*Inherited from [BlessedElement](_declarations_blessed_d_.widgets.blessedelement.md).[insertLine](_declarations_blessed_d_.widgets.blessedelement.md#insertline)*

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

*Inherited from [BlessedElement](_declarations_blessed_d_.widgets.blessedelement.md).[insertTop](_declarations_blessed_d_.widgets.blessedelement.md#inserttop)*

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

*Inherited from [BlessedElement](_declarations_blessed_d_.widgets.blessedelement.md).[kill](_declarations_blessed_d_.widgets.blessedelement.md#kill)*

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

*Inherited from [BlessedElement](_declarations_blessed_d_.widgets.blessedelement.md).[onScreenEvent](_declarations_blessed_d_.widgets.blessedelement.md#onscreenevent)*

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

*Inherited from [BlessedElement](_declarations_blessed_d_.widgets.blessedelement.md).[parseContent](_declarations_blessed_d_.widgets.blessedelement.md#parsecontent)*

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

*Inherited from [BlessedElement](_declarations_blessed_d_.widgets.blessedelement.md).[popLine](_declarations_blessed_d_.widgets.blessedelement.md#popline)*

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

*Inherited from [BlessedElement](_declarations_blessed_d_.widgets.blessedelement.md).[pushLine](_declarations_blessed_d_.widgets.blessedelement.md#pushline)*

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

*Inherited from [BlessedElement](_declarations_blessed_d_.widgets.blessedelement.md).[removeHover](_declarations_blessed_d_.widgets.blessedelement.md#removehover)*

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

*Inherited from [BlessedElement](_declarations_blessed_d_.widgets.blessedelement.md).[removeLabel](_declarations_blessed_d_.widgets.blessedelement.md#removelabel)*

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

*Inherited from [BlessedElement](_declarations_blessed_d_.widgets.blessedelement.md).[removeScreenEvent](_declarations_blessed_d_.widgets.blessedelement.md#removescreenevent)*

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

▸ **render**(): *[Coords](../interfaces/_declarations_blessed_d_.widgets.coords.md)*

*Overrides [BlessedElement](_declarations_blessed_d_.widgets.blessedelement.md).[render](_declarations_blessed_d_.widgets.blessedelement.md#render)*

*Defined in [blessed/gradient.ts:34](https://github.com/cancerberoSgx/accursed/blob/468bf3c/src/blessed/gradient.ts#L34)*

**Returns:** *[Coords](../interfaces/_declarations_blessed_d_.widgets.coords.md)*

___

###  sattr

▸ **sattr**(`style`: [TStyle](../interfaces/_declarations_blessed_d_.widgets.types.tstyle.md), `fg?`: string, `bg?`: string): *any*

*Inherited from [BlessedElement](_declarations_blessed_d_.widgets.blessedelement.md).[sattr](_declarations_blessed_d_.widgets.blessedelement.md#sattr)*

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

*Inherited from [BlessedElement](_declarations_blessed_d_.widgets.blessedelement.md).[screenshot](_declarations_blessed_d_.widgets.blessedelement.md#screenshot)*

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

*Inherited from [BlessedElement](_declarations_blessed_d_.widgets.blessedelement.md).[screenshot](_declarations_blessed_d_.widgets.blessedelement.md#screenshot)*

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

*Inherited from [BlessedElement](_declarations_blessed_d_.widgets.blessedelement.md).[setBack](_declarations_blessed_d_.widgets.blessedelement.md#setback)*

*Defined in [declarations/blessed.d.ts:1778](https://github.com/cancerberoSgx/accursed/blob/468bf3c/src/declarations/blessed.d.ts#L1778)*

Put the element in back of its siblings.

**Returns:** *void*

___

###  setBaseLine

▸ **setBaseLine**(`i`: number, `line`: string | string[]): *void*

*Inherited from [BlessedElement](_declarations_blessed_d_.widgets.blessedelement.md).[setBaseLine](_declarations_blessed_d_.widgets.blessedelement.md#setbaseline)*

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

*Inherited from [BlessedElement](_declarations_blessed_d_.widgets.blessedelement.md).[setContent](_declarations_blessed_d_.widgets.blessedelement.md#setcontent)*

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

*Inherited from [BlessedElement](_declarations_blessed_d_.widgets.blessedelement.md).[setFront](_declarations_blessed_d_.widgets.blessedelement.md#setfront)*

*Defined in [declarations/blessed.d.ts:1773](https://github.com/cancerberoSgx/accursed/blob/468bf3c/src/declarations/blessed.d.ts#L1773)*

Put the element in front of its siblings. Uses [setIndex](_blessed_gradient_.gradienttext.md#setindex)

**Returns:** *void*

___

###  setHover

▸ **setHover**(`arg`: string | [LabelOptions](../interfaces/_declarations_blessed_d_.widgets.labeloptions.md)): *void*

*Inherited from [BlessedElement](_declarations_blessed_d_.widgets.blessedelement.md).[setHover](_declarations_blessed_d_.widgets.blessedelement.md#sethover)*

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

*Inherited from [BlessedElement](_declarations_blessed_d_.widgets.blessedelement.md).[setIndex](_declarations_blessed_d_.widgets.blessedelement.md#setindex)*

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

*Inherited from [BlessedElement](_declarations_blessed_d_.widgets.blessedelement.md).[setLabel](_declarations_blessed_d_.widgets.blessedelement.md#setlabel)*

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

*Inherited from [BlessedElement](_declarations_blessed_d_.widgets.blessedelement.md).[setLine](_declarations_blessed_d_.widgets.blessedelement.md#setline)*

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

*Inherited from [BlessedElement](_declarations_blessed_d_.widgets.blessedelement.md).[setText](_declarations_blessed_d_.widgets.blessedelement.md#settext)*

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

*Inherited from [BlessedElement](_declarations_blessed_d_.widgets.blessedelement.md).[shiftLine](_declarations_blessed_d_.widgets.blessedelement.md#shiftline)*

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

*Inherited from [BlessedElement](_declarations_blessed_d_.widgets.blessedelement.md).[show](_declarations_blessed_d_.widgets.blessedelement.md#show)*

*Defined in [declarations/blessed.d.ts:1717](https://github.com/cancerberoSgx/accursed/blob/468bf3c/src/declarations/blessed.d.ts#L1717)*

Show element.

**Returns:** *void*

___

###  strWidth

▸ **strWidth**(`text`: string): *string*

*Inherited from [BlessedElement](_declarations_blessed_d_.widgets.blessedelement.md).[strWidth](_declarations_blessed_d_.widgets.blessedelement.md#strwidth)*

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

*Inherited from [BlessedElement](_declarations_blessed_d_.widgets.blessedelement.md).[toggle](_declarations_blessed_d_.widgets.blessedelement.md#toggle)*

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

*Inherited from [BlessedElement](_declarations_blessed_d_.widgets.blessedelement.md).[unshiftLine](_declarations_blessed_d_.widgets.blessedelement.md#unshiftline)*

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
