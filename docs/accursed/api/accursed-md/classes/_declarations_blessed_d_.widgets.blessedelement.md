[accursed](../README.md) > ["declarations/blessed.d"](../modules/_declarations_blessed_d_.md) > [Widgets](../modules/_declarations_blessed_d_.widgets.md) > [BlessedElement](../classes/_declarations_blessed_d_.widgets.blessedelement.md)

# Class: BlessedElement

Abstract base element. Elements are [Node](_declarations_blessed_d_.widgets.node.md) that are rendered visually so they have dimention, position, content, border, padding, etc.

Content Methods
---------------

*   Methods for dealing with text content, line by line. Useful for writing a text editor, irc client, etc.
    
*   Note: All of these methods deal with pre-aligned, pre-wrapped text. If you use deleteTop() on a box with a wrapped line at the top, it may remove 3-4 "real" lines (rows) depending on how long the original line was.
    
*   The lines parameter can be a string or an array of strings. The line parameter must be a string.

## Type parameters
#### Options :  [ElementOptions](../interfaces/_declarations_blessed_d_.widgets.elementoptions.md)
## Hierarchy

↳  [NodeWithEvents](_declarations_blessed_d_.widgets.nodewithevents.md)

**↳ BlessedElement**

↳  [ScrollableBoxElement](_declarations_blessed_d_.widgets.scrollableboxelement.md)

↳  [TextElement](_declarations_blessed_d_.widgets.textelement.md)

↳  [LayoutElement](_declarations_blessed_d_.widgets.layoutelement.md)

↳  [Element](_declarations_blessed_d_.widget.element.md)

## Implements

* [IHasOptions](../interfaces/_declarations_blessed_d_.widgets.ihasoptions.md)<[INodeOptions](../interfaces/_declarations_blessed_d_.widgets.inodeoptions.md)>
* [IDestroyable](../interfaces/_declarations_blessed_d_.widgets.idestroyable.md)
* [IHasOptions](../interfaces/_declarations_blessed_d_.widgets.ihasoptions.md)<[ElementOptions](../interfaces/_declarations_blessed_d_.widgets.elementoptions.md)>

## Index

### Constructors

* [constructor](_declarations_blessed_d_.widgets.blessedelement.md#constructor)

### Properties

* [$](_declarations_blessed_d_.widgets.blessedelement.md#_)
* [_](_declarations_blessed_d_.widgets.blessedelement.md#_-1)
* [_label](_declarations_blessed_d_.widgets.blessedelement.md#_label)
* [_noFill](_declarations_blessed_d_.widgets.blessedelement.md#_nofill)
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
* [parent](_declarations_blessed_d_.widgets.blessedelement.md#parent)
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
* [defaultMaxListeners](_declarations_blessed_d_.widgets.blessedelement.md#defaultmaxlisteners)

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
* [listenerCount](_declarations_blessed_d_.widgets.blessedelement.md#listenercount-1)

---

## Constructors

<a id="constructor"></a>

###  constructor

⊕ **new BlessedElement**(opts: *`Options`*): [BlessedElement](_declarations_blessed_d_.widgets.blessedelement.md)

*Overrides [Node](_declarations_blessed_d_.widgets.node.md).[constructor](_declarations_blessed_d_.widgets.node.md#constructor)*

*Defined in [declarations/blessed.d.ts:1552](https://github.com/cancerberoSgx/accursed/blob/978b980/src/declarations/blessed.d.ts#L1552)*

**Parameters:**

| Name | Type |
| ------ | ------ |
| opts | `Options` |

**Returns:** [BlessedElement](_declarations_blessed_d_.widgets.blessedelement.md)

___

## Properties

<a id="_"></a>

###  $

**● $**: *`object`*

*Inherited from [Node](_declarations_blessed_d_.widgets.node.md).[$](_declarations_blessed_d_.widgets.node.md#_)*

*Defined in [declarations/blessed.d.ts:362](https://github.com/cancerberoSgx/accursed/blob/978b980/src/declarations/blessed.d.ts#L362)*

An object for any miscellaneous user data.

#### Type declaration

[index: `string`]: `any`

___
<a id="_-1"></a>

###  _

**● _**: *`object`*

*Inherited from [Node](_declarations_blessed_d_.widgets.node.md).[_](_declarations_blessed_d_.widgets.node.md#_-1)*

*Defined in [declarations/blessed.d.ts:357](https://github.com/cancerberoSgx/accursed/blob/978b980/src/declarations/blessed.d.ts#L357)*

An object for any miscellaneous user data.

#### Type declaration

[index: `string`]: `any`

___
<a id="_label"></a>

### `<Optional>` _label

**● _label**: *[BlessedElement](_declarations_blessed_d_.widgets.blessedelement.md) \| `undefined`*

*Defined in [declarations/blessed.d.ts:1699](https://github.com/cancerberoSgx/accursed/blob/978b980/src/declarations/blessed.d.ts#L1699)*

Get's the child element implementing the current label of this node.

*__internal__*: 

___
<a id="_nofill"></a>

### `<Optional>` _noFill

**● _noFill**: *`boolean`*

*Defined in [declarations/blessed.d.ts:1652](https://github.com/cancerberoSgx/accursed/blob/978b980/src/declarations/blessed.d.ts#L1652)*

If true, the element won't be filled.

*__internal__*: 

___
<a id="abottom"></a>

###  abottom

**● abottom**: *`number`*

*Defined in [declarations/blessed.d.ts:1641](https://github.com/cancerberoSgx/accursed/blob/978b980/src/declarations/blessed.d.ts#L1641)*

Calculated absolute bottom offset.

___
<a id="aleft"></a>

###  aleft

**● aleft**: *`number`*

*Defined in [declarations/blessed.d.ts:1631](https://github.com/cancerberoSgx/accursed/blob/978b980/src/declarations/blessed.d.ts#L1631)*

Calculated absolute left offset.

___
<a id="aright"></a>

###  aright

**● aright**: *`number`*

*Defined in [declarations/blessed.d.ts:1636](https://github.com/cancerberoSgx/accursed/blob/978b980/src/declarations/blessed.d.ts#L1636)*

Calculated absolute right offset.

___
<a id="atop"></a>

###  atop

**● atop**: *`number`*

*Defined in [declarations/blessed.d.ts:1626](https://github.com/cancerberoSgx/accursed/blob/978b980/src/declarations/blessed.d.ts#L1626)*

Calculated absolute top offset.

___
<a id="bg"></a>

###  bg

**● bg**: *`number`*

*Defined in [declarations/blessed.d.ts:1583](https://github.com/cancerberoSgx/accursed/blob/978b980/src/declarations/blessed.d.ts#L1583)*

Border foreground and background, must be numbers (-1 for default).

___
<a id="bold"></a>

###  bold

**● bold**: *`string`*

*Defined in [declarations/blessed.d.ts:1589](https://github.com/cancerberoSgx/accursed/blob/978b980/src/declarations/blessed.d.ts#L1589)*

Border attributes.

___
<a id="border"></a>

###  border

**● border**: *[TBorder](../interfaces/_declarations_blessed_d_.widgets.types.tborder.md)*

*Defined in [declarations/blessed.d.ts:1568](https://github.com/cancerberoSgx/accursed/blob/978b980/src/declarations/blessed.d.ts#L1568)*

Border object.

___
<a id="bottom"></a>

###  bottom

**● bottom**: *`number` \| `string`*

*Defined in [declarations/blessed.d.ts:1621](https://github.com/cancerberoSgx/accursed/blob/978b980/src/declarations/blessed.d.ts#L1621)*

Calculated relative bottom offset.

___
<a id="children"></a>

###  children

**● children**: *[Node](_declarations_blessed_d_.widgets.node.md)[]*

*Inherited from [Node](_declarations_blessed_d_.widgets.node.md).[children](_declarations_blessed_d_.widgets.node.md#children)*

*Defined in [declarations/blessed.d.ts:389](https://github.com/cancerberoSgx/accursed/blob/978b980/src/declarations/blessed.d.ts#L389)*

Array of node's children.

___
<a id="content"></a>

###  content

**● content**: *`string`*

*Defined in [declarations/blessed.d.ts:1575](https://github.com/cancerberoSgx/accursed/blob/978b980/src/declarations/blessed.d.ts#L1575)*

___
<a id="data"></a>

###  data

**● data**: *`object`*

*Inherited from [Node](_declarations_blessed_d_.widgets.node.md).[data](_declarations_blessed_d_.widgets.node.md#data)*

*Defined in [declarations/blessed.d.ts:352](https://github.com/cancerberoSgx/accursed/blob/978b980/src/declarations/blessed.d.ts#L352)*

An object for any miscellaneous user data.

#### Type declaration

[index: `string`]: `any`

___
<a id="detached"></a>

###  detached

**● detached**: *`boolean`*

*Defined in [declarations/blessed.d.ts:1578](https://github.com/cancerberoSgx/accursed/blob/978b980/src/declarations/blessed.d.ts#L1578)*

___
<a id="draggable"></a>

###  draggable

**● draggable**: *`boolean`*

*Defined in [declarations/blessed.d.ts:1646](https://github.com/cancerberoSgx/accursed/blob/978b980/src/declarations/blessed.d.ts#L1646)*

Whether the element is draggable. Set to true to allow dragging.

___
<a id="fg"></a>

###  fg

**● fg**: *`number`*

*Defined in [declarations/blessed.d.ts:1584](https://github.com/cancerberoSgx/accursed/blob/978b980/src/declarations/blessed.d.ts#L1584)*

___
<a id="focusable"></a>

###  focusable

**● focusable**: *`boolean`*

*Inherited from [Node](_declarations_blessed_d_.widgets.node.md).[focusable](_declarations_blessed_d_.widgets.node.md#focusable)*

*Defined in [declarations/blessed.d.ts:342](https://github.com/cancerberoSgx/accursed/blob/978b980/src/declarations/blessed.d.ts#L342)*

___
<a id="height"></a>

###  height

**● height**: *`number` \| `string`*

*Defined in [declarations/blessed.d.ts:1601](https://github.com/cancerberoSgx/accursed/blob/978b980/src/declarations/blessed.d.ts#L1601)*

Calculated height.

___
<a id="hidden"></a>

###  hidden

**● hidden**: *`boolean`*

*Defined in [declarations/blessed.d.ts:1576](https://github.com/cancerberoSgx/accursed/blob/978b980/src/declarations/blessed.d.ts#L1576)*

___
<a id="iheight"></a>

###  iheight

**● iheight**: *`number`*

*Defined in [declarations/blessed.d.ts:1665](https://github.com/cancerberoSgx/accursed/blob/978b980/src/declarations/blessed.d.ts#L1665)*

Calculated height taking into account padding and boder.

___
<a id="ileft"></a>

###  ileft

**● ileft**: *`number`*

*Defined in [declarations/blessed.d.ts:1661](https://github.com/cancerberoSgx/accursed/blob/978b980/src/declarations/blessed.d.ts#L1661)*

Calculated left coordinate taking into account padding and boder.

___
<a id="index"></a>

###  index

**● index**: *`number`*

*Inherited from [Node](_declarations_blessed_d_.widgets.node.md).[index](_declarations_blessed_d_.widgets.node.md#index)*

*Defined in [declarations/blessed.d.ts:374](https://github.com/cancerberoSgx/accursed/blob/978b980/src/declarations/blessed.d.ts#L374)*

Render index (document order index) of the last render call.

___
<a id="itop"></a>

###  itop

**● itop**: *`number`*

*Defined in [declarations/blessed.d.ts:1657](https://github.com/cancerberoSgx/accursed/blob/978b980/src/declarations/blessed.d.ts#L1657)*

Calculated top coordinate taking into account padding and boder.

___
<a id="iwidth"></a>

###  iwidth

**● iwidth**: *`number`*

*Defined in [declarations/blessed.d.ts:1669](https://github.com/cancerberoSgx/accursed/blob/978b980/src/declarations/blessed.d.ts#L1669)*

Calculated width taking into account padding and boder.

___
<a id="left"></a>

###  left

**● left**: *`number` \| `string`*

*Defined in [declarations/blessed.d.ts:1611](https://github.com/cancerberoSgx/accursed/blob/978b980/src/declarations/blessed.d.ts#L1611)*

Calculated relative left offset.

___
<a id="lpos"></a>

###  lpos

**● lpos**: *[PositionCoords](_declarations_blessed_d_.widgets.positioncoords.md)*

*Inherited from [Node](_declarations_blessed_d_.widgets.node.md).[lpos](_declarations_blessed_d_.widgets.node.md#lpos)*

*Defined in [declarations/blessed.d.ts:364](https://github.com/cancerberoSgx/accursed/blob/978b980/src/declarations/blessed.d.ts#L364)*

___
<a id="name"></a>

###  name

**● name**: *`string`*

*Defined in [declarations/blessed.d.ts:1563](https://github.com/cancerberoSgx/accursed/blob/978b980/src/declarations/blessed.d.ts#L1563)*

Name of the element. Useful for form submission.

___
<a id="options"></a>

###  options

**● options**: *`Options`*

*Implementation of [IHasOptions](../interfaces/_declarations_blessed_d_.widgets.ihasoptions.md).[options](../interfaces/_declarations_blessed_d_.widgets.ihasoptions.md#options)*

*Overrides [Node](_declarations_blessed_d_.widgets.node.md).[options](_declarations_blessed_d_.widgets.node.md#options)*

*Defined in [declarations/blessed.d.ts:1558](https://github.com/cancerberoSgx/accursed/blob/978b980/src/declarations/blessed.d.ts#L1558)*

Original options object.

___
<a id="padding"></a>

###  padding

**● padding**: *`Required`<[Padding](../interfaces/_declarations_blessed_d_.widgets.padding.md)>*

*Defined in [declarations/blessed.d.ts:1571](https://github.com/cancerberoSgx/accursed/blob/978b980/src/declarations/blessed.d.ts#L1571)*

Current element padding

___
<a id="parent"></a>

### `<Optional>` parent

**● parent**: *[Node](_declarations_blessed_d_.widgets.node.md)*

*Inherited from [Node](_declarations_blessed_d_.widgets.node.md).[parent](_declarations_blessed_d_.widgets.node.md#parent)*

*Defined in [declarations/blessed.d.ts:384](https://github.com/cancerberoSgx/accursed/blob/978b980/src/declarations/blessed.d.ts#L384)*

Parent node. If null it means the element is not attached to any screen or program, or the node is a Screen.

___
<a id="position"></a>

###  position

**● position**: *[Position](../interfaces/_declarations_blessed_d_.widgets.position.md)*

*Defined in [declarations/blessed.d.ts:1574](https://github.com/cancerberoSgx/accursed/blob/978b980/src/declarations/blessed.d.ts#L1574)*

___
<a id="rbottom"></a>

###  rbottom

**● rbottom**: *[TPosition](../modules/_declarations_blessed_d_.widgets.types.md#tposition)*

*Defined in [declarations/blessed.d.ts:1693](https://github.com/cancerberoSgx/accursed/blob/978b980/src/declarations/blessed.d.ts#L1693)*

Calculated relative bottom offset.

Setting this property will cause the element to change element's [position](_declarations_blessed_d_.widgets.blessedelement.md#position) property and emit [move](_declarations_blessedprogram_d_.blessedprogram.md#move) event.

___
<a id="right"></a>

###  right

**● right**: *`number` \| `string`*

*Defined in [declarations/blessed.d.ts:1616](https://github.com/cancerberoSgx/accursed/blob/978b980/src/declarations/blessed.d.ts#L1616)*

Calculated relative right offset.

___
<a id="rleft"></a>

###  rleft

**● rleft**: *[TTopLeft](../modules/_declarations_blessed_d_.widgets.types.md#ttopleft)*

*Defined in [declarations/blessed.d.ts:1679](https://github.com/cancerberoSgx/accursed/blob/978b980/src/declarations/blessed.d.ts#L1679)*

Setting this property will cause the element to change element's [position](_declarations_blessed_d_.widgets.blessedelement.md#position) property and emit [move](_declarations_blessedprogram_d_.blessedprogram.md#move) event.

___
<a id="rright"></a>

###  rright

**● rright**: *[TPosition](../modules/_declarations_blessed_d_.widgets.types.md#tposition)*

*Defined in [declarations/blessed.d.ts:1686](https://github.com/cancerberoSgx/accursed/blob/978b980/src/declarations/blessed.d.ts#L1686)*

Calculated relative bottom offset.

Setting this property will cause the element to change element's [position](_declarations_blessed_d_.widgets.blessedelement.md#position) property and emit [move](_declarations_blessedprogram_d_.blessedprogram.md#move) event.

___
<a id="rtop"></a>

###  rtop

**● rtop**: *[TTopLeft](../modules/_declarations_blessed_d_.widgets.types.md#ttopleft)*

*Defined in [declarations/blessed.d.ts:1674](https://github.com/cancerberoSgx/accursed/blob/978b980/src/declarations/blessed.d.ts#L1674)*

Setting this property will cause the element to change element's [position](_declarations_blessed_d_.widgets.blessedelement.md#position) property and emit [move](_declarations_blessedprogram_d_.blessedprogram.md#move) event.

___
<a id="screen"></a>

###  screen

**● screen**: *[Screen](_declarations_blessed_d_.widgets.screen.md)*

*Inherited from [Node](_declarations_blessed_d_.widgets.node.md).[screen](_declarations_blessed_d_.widgets.node.md#screen)*

*Defined in [declarations/blessed.d.ts:379](https://github.com/cancerberoSgx/accursed/blob/978b980/src/declarations/blessed.d.ts#L379)*

Parent screen.

___
<a id="shrink"></a>

###  shrink

**● shrink**: *`boolean`*

*Defined in [declarations/blessed.d.ts:1552](https://github.com/cancerberoSgx/accursed/blob/978b980/src/declarations/blessed.d.ts#L1552)*

___
<a id="style"></a>

###  style

**● style**: *[TStyle](../interfaces/_declarations_blessed_d_.widgets.types.tstyle.md)*

*Defined in [declarations/blessed.d.ts:1573](https://github.com/cancerberoSgx/accursed/blob/978b980/src/declarations/blessed.d.ts#L1573)*

___
<a id="top"></a>

###  top

**● top**: *`number` \| `string`*

*Defined in [declarations/blessed.d.ts:1606](https://github.com/cancerberoSgx/accursed/blob/978b980/src/declarations/blessed.d.ts#L1606)*

Calculated relative top offset.

___
<a id="tpadding"></a>

###  tpadding

**● tpadding**: *`number`*

*Defined in [declarations/blessed.d.ts:1704](https://github.com/cancerberoSgx/accursed/blob/978b980/src/declarations/blessed.d.ts#L1704)*

Givesthe total padding on any direction.

___
<a id="type"></a>

###  type

**● type**: *`string`*

*Inherited from [Node](_declarations_blessed_d_.widgets.node.md).[type](_declarations_blessed_d_.widgets.node.md#type)*

*Defined in [declarations/blessed.d.ts:369](https://github.com/cancerberoSgx/accursed/blob/978b980/src/declarations/blessed.d.ts#L369)*

Type of the node (e.g. box).

___
<a id="uid"></a>

###  uid

**● uid**: *`number`*

*Inherited from [Node](_declarations_blessed_d_.widgets.node.md).[uid](_declarations_blessed_d_.widgets.node.md#uid)*

*Defined in [declarations/blessed.d.ts:340](https://github.com/cancerberoSgx/accursed/blob/978b980/src/declarations/blessed.d.ts#L340)*

Unique identifier for Node instances. @internal

___
<a id="underline"></a>

###  underline

**● underline**: *`string`*

*Defined in [declarations/blessed.d.ts:1591](https://github.com/cancerberoSgx/accursed/blob/978b980/src/declarations/blessed.d.ts#L1591)*

___
<a id="visible"></a>

###  visible

**● visible**: *`boolean`*

*Defined in [declarations/blessed.d.ts:1577](https://github.com/cancerberoSgx/accursed/blob/978b980/src/declarations/blessed.d.ts#L1577)*

___
<a id="width"></a>

###  width

**● width**: *`number` \| `string`*

*Defined in [declarations/blessed.d.ts:1596](https://github.com/cancerberoSgx/accursed/blob/978b980/src/declarations/blessed.d.ts#L1596)*

Calculated width.

___
<a id="defaultmaxlisteners"></a>

### `<Static>` defaultMaxListeners

**● defaultMaxListeners**: *`number`*

*Inherited from EventEmitter.defaultMaxListeners*

*Defined in /Users/sebastiangurin/git/accursed/node_modules/@types/node/events.d.ts:9*

___

## Methods

<a id="_align"></a>

###  _align

▸ **_align**(line: *`string`*, width: *`number`*, align: *`string`*): `void`

*Defined in [declarations/blessed.d.ts:1915](https://github.com/cancerberoSgx/accursed/blob/978b980/src/declarations/blessed.d.ts#L1915)*

*__internal__*: 

**Parameters:**

| Name | Type |
| ------ | ------ |
| line | `string` |
| width | `number` |
| align | `string` |

**Returns:** `void`

___
<a id="_getbottom"></a>

###  _getBottom

▸ **_getBottom**(get?: *`boolean`*): `number`

*Defined in [declarations/blessed.d.ts:1762](https://github.com/cancerberoSgx/accursed/blob/978b980/src/declarations/blessed.d.ts#L1762)*

*__internal__*: 

**Parameters:**

| Name | Type | Description |
| ------ | ------ | ------ |
| `Optional` get | `boolean` |  if true it will force to recalculate. |

**Returns:** `number`

___
<a id="_getcoords"></a>

###  _getCoords

▸ **_getCoords**(get?: *`boolean`*, noscroll?: *`boolean`*): [Coords](../interfaces/_declarations_blessed_d_.widgets.coords.md) \| `undefined`

*Defined in [declarations/blessed.d.ts:1715](https://github.com/cancerberoSgx/accursed/blob/978b980/src/declarations/blessed.d.ts#L1715)*

*__internal__*: 

**Parameters:**

| Name | Type | Description |
| ------ | ------ | ------ |
| `Optional` get | `boolean` |  if true it will force to recalculate. |
| `Optional` noscroll | `boolean` |

**Returns:** [Coords](../interfaces/_declarations_blessed_d_.widgets.coords.md) \| `undefined`

___
<a id="_getheight"></a>

###  _getHeight

▸ **_getHeight**(get?: *`boolean`*): `number`

*Defined in [declarations/blessed.d.ts:1774](https://github.com/cancerberoSgx/accursed/blob/978b980/src/declarations/blessed.d.ts#L1774)*

*__internal__*: 

**Parameters:**

| Name | Type | Description |
| ------ | ------ | ------ |
| `Optional` get | `boolean` |  if true it will force to recalculate. |

**Returns:** `number`

___
<a id="_getleft"></a>

###  _getLeft

▸ **_getLeft**(get?: *`boolean`*): `number`

*Defined in [declarations/blessed.d.ts:1744](https://github.com/cancerberoSgx/accursed/blob/978b980/src/declarations/blessed.d.ts#L1744)*

*__internal__*: 

**Parameters:**

| Name | Type | Description |
| ------ | ------ | ------ |
| `Optional` get | `boolean` |  if true it will force to recalculate. |

**Returns:** `number`

___
<a id="_getpos"></a>

###  _getPos

▸ **_getPos**(): [Pos](../interfaces/_declarations_blessed_d_.widgets.pos.md)

*Defined in [declarations/blessed.d.ts:1738](https://github.com/cancerberoSgx/accursed/blob/978b980/src/declarations/blessed.d.ts#L1738)*

whenever Box.render is called `lpos` gets set on the element, an object containing the rendered coordinates. Since these don't update if the element is moved somehow, they're unreliable in that situation. However, if we can guarantee that lpos is good and up to date, it can be more accurate than the calculated positions below. In this case, if the element is being rendered, it's guaranteed that the parent will have been rendered first, in which case we can use the parant's lpos instead of recalculating it's position (since that might be wrong because it doesn't handle content shrinkage).

*__internal__*: 

**Returns:** [Pos](../interfaces/_declarations_blessed_d_.widgets.pos.md)

___
<a id="_getright"></a>

###  _getRight

▸ **_getRight**(get?: *`boolean`*): `number`

*Defined in [declarations/blessed.d.ts:1768](https://github.com/cancerberoSgx/accursed/blob/978b980/src/declarations/blessed.d.ts#L1768)*

*__internal__*: 

**Parameters:**

| Name | Type | Description |
| ------ | ------ | ------ |
| `Optional` get | `boolean` |  if true it will force to recalculate. |

**Returns:** `number`

___
<a id="_getshrink"></a>

###  _getShrink

▸ **_getShrink**(xi: *`number`*, xl: *`number`*, yi: *`number`*, yl: *`number`*, get?: *`boolean`*): [SimpleCoords](../interfaces/_declarations_blessed_d_.widgets.simplecoords.md) \| `undefined`

*Defined in [declarations/blessed.d.ts:1727](https://github.com/cancerberoSgx/accursed/blob/978b980/src/declarations/blessed.d.ts#L1727)*

*__internal__*: 

**Parameters:**

| Name | Type | Description |
| ------ | ------ | ------ |
| xi | `number` |
| xl | `number` |
| yi | `number` |
| yl | `number` |
| `Optional` get | `boolean` |  if true it will force to recalculate. |

**Returns:** [SimpleCoords](../interfaces/_declarations_blessed_d_.widgets.simplecoords.md) \| `undefined`

___
<a id="_getshrinkbox"></a>

###  _getShrinkBox

▸ **_getShrinkBox**(xi: *`number`*, xl: *`number`*, yi: *`number`*, yl: *`number`*, get?: *`boolean`*): [SimpleCoords](../interfaces/_declarations_blessed_d_.widgets.simplecoords.md) \| `undefined`

*Defined in [declarations/blessed.d.ts:1721](https://github.com/cancerberoSgx/accursed/blob/978b980/src/declarations/blessed.d.ts#L1721)*

*__internal__*: 

**Parameters:**

| Name | Type | Description |
| ------ | ------ | ------ |
| xi | `number` |
| xl | `number` |
| yi | `number` |
| yl | `number` |
| `Optional` get | `boolean` |  if true it will force to recalculate. |

**Returns:** [SimpleCoords](../interfaces/_declarations_blessed_d_.widgets.simplecoords.md) \| `undefined`

___
<a id="_gettop"></a>

###  _getTop

▸ **_getTop**(get?: *`boolean`*): `number`

*Defined in [declarations/blessed.d.ts:1756](https://github.com/cancerberoSgx/accursed/blob/978b980/src/declarations/blessed.d.ts#L1756)*

*__internal__*: 

**Parameters:**

| Name | Type | Description |
| ------ | ------ | ------ |
| `Optional` get | `boolean` |  if true it will force to recalculate. |

**Returns:** `number`

___
<a id="_getwidth"></a>

###  _getWidth

▸ **_getWidth**(get?: *`boolean`*): `number`

*Defined in [declarations/blessed.d.ts:1750](https://github.com/cancerberoSgx/accursed/blob/978b980/src/declarations/blessed.d.ts#L1750)*

*__internal__*: 

**Parameters:**

| Name | Type | Description |
| ------ | ------ | ------ |
| `Optional` get | `boolean` |  if true it will force to recalculate. |

**Returns:** `number`

___
<a id="_parseattr"></a>

###  _parseAttr

▸ **_parseAttr**(ines: *`string`[]*): `string`[]

*Defined in [declarations/blessed.d.ts:1912](https://github.com/cancerberoSgx/accursed/blob/978b980/src/declarations/blessed.d.ts#L1912)*

*__internal__*: 

**Parameters:**

| Name | Type |
| ------ | ------ |
| ines | `string`[] |

**Returns:** `string`[]

___
<a id="_parsetags"></a>

###  _parseTags

▸ **_parseTags**(s: *`string`*): `string`

*Defined in [declarations/blessed.d.ts:1909](https://github.com/cancerberoSgx/accursed/blob/978b980/src/declarations/blessed.d.ts#L1909)*

Converts `{red-fg}foo{/red-fg}` to `\x1b[31mfoo\x1b[39m`. @internal.

**Parameters:**

| Name | Type |
| ------ | ------ |
| s | `string` |

**Returns:** `string`

___
<a id="_wrapcontent"></a>

###  _wrapContent

▸ **_wrapContent**(content: *`string`*, width: *`number`*): `void`

*Defined in [declarations/blessed.d.ts:1918](https://github.com/cancerberoSgx/accursed/blob/978b980/src/declarations/blessed.d.ts#L1918)*

*__internal__*: 

**Parameters:**

| Name | Type |
| ------ | ------ |
| content | `string` |
| width | `number` |

**Returns:** `void`

___
<a id="addlistener"></a>

###  addListener

▸ **addListener**(event: *`string` \| `symbol`*, listener: *`function`*): `this`

*Inherited from EventEmitter.addListener*

*Overrides EventEmitter.addListener*

*Defined in /Users/sebastiangurin/git/accursed/node_modules/@types/node/events.d.ts:11*

**Parameters:**

| Name | Type |
| ------ | ------ |
| event | `string` \| `symbol` |
| listener | `function` |

**Returns:** `this`

___
<a id="append"></a>

###  append

▸ **append**(node: *[Node](_declarations_blessed_d_.widgets.node.md)*): `void`

*Inherited from [Node](_declarations_blessed_d_.widgets.node.md).[append](_declarations_blessed_d_.widgets.node.md#append)*

*Defined in [declarations/blessed.d.ts:399](https://github.com/cancerberoSgx/accursed/blob/978b980/src/declarations/blessed.d.ts#L399)*

Append a node to this node's children.

**Parameters:**

| Name | Type |
| ------ | ------ |
| node | [Node](_declarations_blessed_d_.widgets.node.md) |

**Returns:** `void`

___
<a id="clearbaseline"></a>

###  clearBaseLine

▸ **clearBaseLine**(i: *`number`*): `void`

*Defined in [declarations/blessed.d.ts:1994](https://github.com/cancerberoSgx/accursed/blob/978b980/src/declarations/blessed.d.ts#L1994)*

Clear a line from the box's content from the visible top.

**Parameters:**

| Name | Type |
| ------ | ------ |
| i | `number` |

**Returns:** `void`

___
<a id="clearline"></a>

###  clearLine

▸ **clearLine**(i: *`number`*): `void`

*Defined in [declarations/blessed.d.ts:1989](https://github.com/cancerberoSgx/accursed/blob/978b980/src/declarations/blessed.d.ts#L1989)*

Clear a line from the box's content.

**Parameters:**

| Name | Type |
| ------ | ------ |
| i | `number` |

**Returns:** `void`

___
<a id="clearpos"></a>

###  clearPos

▸ **clearPos**(get?: *`boolean`*, override?: *`boolean`*): `void`

*Defined in [declarations/blessed.d.ts:1933](https://github.com/cancerberoSgx/accursed/blob/978b980/src/declarations/blessed.d.ts#L1933)*

Cleans the rectangle of this element on the screen. Useful for subclasses before rendering.

*__internal__*: 

**Parameters:**

| Name | Type | Description |
| ------ | ------ | ------ |
| `Optional` get | `boolean` |  it's passed to [\_getCoords](_declarations_blessed_d_.widgets.blessedelement.md#_getcoords) |
| `Optional` override | `boolean` |  it's passed to [Screen.clearRegion](_declarations_blessed_d_.widgets.screen.md#clearregion) |

**Returns:** `void`

___
<a id="collectancestors"></a>

###  collectAncestors

▸ **collectAncestors**(s?: *`boolean`*): `void`

*Inherited from [Node](_declarations_blessed_d_.widgets.node.md).[collectAncestors](_declarations_blessed_d_.widgets.node.md#collectancestors)*

*Defined in [declarations/blessed.d.ts:433](https://github.com/cancerberoSgx/accursed/blob/978b980/src/declarations/blessed.d.ts#L433)*

**Parameters:**

| Name | Type |
| ------ | ------ |
| `Optional` s | `boolean` |

**Returns:** `void`

___
<a id="collectdescendants"></a>

###  collectDescendants

▸ **collectDescendants**(s?: *`boolean`*): `void`

*Inherited from [Node](_declarations_blessed_d_.widgets.node.md).[collectDescendants](_declarations_blessed_d_.widgets.node.md#collectdescendants)*

*Defined in [declarations/blessed.d.ts:432](https://github.com/cancerberoSgx/accursed/blob/978b980/src/declarations/blessed.d.ts#L432)*

**Parameters:**

| Name | Type |
| ------ | ------ |
| `Optional` s | `boolean` |

**Returns:** `void`

___
<a id="deletebottom"></a>

###  deleteBottom

▸ **deleteBottom**(): `void`

*Defined in [declarations/blessed.d.ts:2014](https://github.com/cancerberoSgx/accursed/blob/978b980/src/declarations/blessed.d.ts#L2014)*

Delete a line at the bottom of the box.

**Returns:** `void`

___
<a id="deleteline"></a>

###  deleteLine

▸ **deleteLine**(i: *`number`*): `void`

*Defined in [declarations/blessed.d.ts:1964](https://github.com/cancerberoSgx/accursed/blob/978b980/src/declarations/blessed.d.ts#L1964)*

Delete a line from the box's content.

**Parameters:**

| Name | Type |
| ------ | ------ |
| i | `number` |

**Returns:** `void`

___
<a id="deletetop"></a>

###  deleteTop

▸ **deleteTop**(): `void`

*Defined in [declarations/blessed.d.ts:2009](https://github.com/cancerberoSgx/accursed/blob/978b980/src/declarations/blessed.d.ts#L2009)*

Delete a line at the top of the box.

**Returns:** `void`

___
<a id="destroy"></a>

###  destroy

▸ **destroy**(): `void`

*Implementation of [IDestroyable](../interfaces/_declarations_blessed_d_.widgets.idestroyable.md).[destroy](../interfaces/_declarations_blessed_d_.widgets.idestroyable.md#destroy)*

*Overrides [Node](_declarations_blessed_d_.widgets.node.md).[destroy](_declarations_blessed_d_.widgets.node.md#destroy)*

*Defined in [declarations/blessed.d.ts:1830](https://github.com/cancerberoSgx/accursed/blob/978b980/src/declarations/blessed.d.ts#L1830)*

Same as the detach() method, except this will automatically call free() and unbind any screen events to prevent memory leaks. for use with onScreenEvent(), removeScreenEvent(), and free().

**Returns:** `void`

___
<a id="detach"></a>

###  detach

▸ **detach**(): `void`

*Inherited from [Node](_declarations_blessed_d_.widgets.node.md).[detach](_declarations_blessed_d_.widgets.node.md#detach)*

*Defined in [declarations/blessed.d.ts:424](https://github.com/cancerberoSgx/accursed/blob/978b980/src/declarations/blessed.d.ts#L424)*

Remove node from its parent.

**Returns:** `void`

___
<a id="disabledrag"></a>

###  disableDrag

▸ **disableDrag**(): `void`

*Defined in [declarations/blessed.d.ts:1893](https://github.com/cancerberoSgx/accursed/blob/978b980/src/declarations/blessed.d.ts#L1893)*

Disable dragging of the element.

**Returns:** `void`

___
<a id="emit"></a>

###  emit

▸ **emit**(event: *`string` \| `symbol`*, ...args: *`any`[]*): `boolean`

*Inherited from EventEmitter.emit*

*Overrides EventEmitter.emit*

*Defined in /Users/sebastiangurin/git/accursed/node_modules/@types/node/events.d.ts:23*

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

*Inherited from [Node](_declarations_blessed_d_.widgets.node.md).[emitAncestors](_declarations_blessed_d_.widgets.node.md#emitancestors)*

*Defined in [declarations/blessed.d.ts:439](https://github.com/cancerberoSgx/accursed/blob/978b980/src/declarations/blessed.d.ts#L439)*

**Returns:** `void`

___
<a id="emitdescendants"></a>

###  emitDescendants

▸ **emitDescendants**(type?: *`string`*, ...args: *`any`[]*): `void`

*Inherited from [Node](_declarations_blessed_d_.widgets.node.md).[emitDescendants](_declarations_blessed_d_.widgets.node.md#emitdescendants)*

*Defined in [declarations/blessed.d.ts:438](https://github.com/cancerberoSgx/accursed/blob/978b980/src/declarations/blessed.d.ts#L438)*

Emit event for element, and recursively emit same event for all descendants. If `s` is provided it will call \[\[iter\]\] on self first.

**Parameters:**

| Name | Type |
| ------ | ------ |
| `Optional` type | `string` |
| `Rest` args | `any`[] |

**Returns:** `void`

___
<a id="enabledrag"></a>

###  enableDrag

▸ **enableDrag**(cb: *`function`*): `void`

*Defined in [declarations/blessed.d.ts:1886](https://github.com/cancerberoSgx/accursed/blob/978b980/src/declarations/blessed.d.ts#L1886)*

Enable dragging of the element.

**Parameters:**

| Name | Type |
| ------ | ------ |
| cb | `function` |

**Returns:** `void`

___
<a id="enableinput"></a>

###  enableInput

▸ **enableInput**(): `void`

*Defined in [declarations/blessed.d.ts:1881](https://github.com/cancerberoSgx/accursed/blob/978b980/src/declarations/blessed.d.ts#L1881)*

Enable key and mouse events. Calls bot enableMouse and enableKeys.

**Returns:** `void`

___
<a id="enablekeys"></a>

###  enableKeys

▸ **enableKeys**(): `void`

*Defined in [declarations/blessed.d.ts:1876](https://github.com/cancerberoSgx/accursed/blob/978b980/src/declarations/blessed.d.ts#L1876)*

Enable keypress events for the element (automatically called when a form of on('keypress') is bound).

**Returns:** `void`

___
<a id="enablemouse"></a>

###  enableMouse

▸ **enableMouse**(): `void`

*Defined in [declarations/blessed.d.ts:1871](https://github.com/cancerberoSgx/accursed/blob/978b980/src/declarations/blessed.d.ts#L1871)*

Enable mouse events for the element (automatically called when a form of on('mouse') is bound).

**Returns:** `void`

___
<a id="eventnames"></a>

###  eventNames

▸ **eventNames**(): `Array`<`string` \| `symbol`>

*Inherited from EventEmitter.eventNames*

*Overrides EventEmitter.eventNames*

*Defined in /Users/sebastiangurin/git/accursed/node_modules/@types/node/events.d.ts:24*

**Returns:** `Array`<`string` \| `symbol`>

___
<a id="focus"></a>

###  focus

▸ **focus**(): `void`

*Defined in [declarations/blessed.d.ts:1794](https://github.com/cancerberoSgx/accursed/blob/978b980/src/declarations/blessed.d.ts#L1794)*

Focus element.

**Returns:** `void`

___
<a id="forancestors"></a>

###  forAncestors

▸ **forAncestors**(iter: *`function`*, s?: *`boolean`*): `void`

*Inherited from [Node](_declarations_blessed_d_.widgets.node.md).[forAncestors](_declarations_blessed_d_.widgets.node.md#forancestors)*

*Defined in [declarations/blessed.d.ts:431](https://github.com/cancerberoSgx/accursed/blob/978b980/src/declarations/blessed.d.ts#L431)*

**Parameters:**

| Name | Type |
| ------ | ------ |
| iter | `function` |
| `Optional` s | `boolean` |

**Returns:** `void`

___
<a id="fordescendants"></a>

###  forDescendants

▸ **forDescendants**(iter: *`function`*, s?: *`boolean`*): `void`

*Inherited from [Node](_declarations_blessed_d_.widgets.node.md).[forDescendants](_declarations_blessed_d_.widgets.node.md#fordescendants)*

*Defined in [declarations/blessed.d.ts:430](https://github.com/cancerberoSgx/accursed/blob/978b980/src/declarations/blessed.d.ts#L430)*

Visit each node's descendants, with \[\[iter\]\] function, parents first. If `s` is provided it will call \[\[iter\]\] on self first.

**Parameters:**

| Name | Type |
| ------ | ------ |
| iter | `function` |
| `Optional` s | `boolean` |

**Returns:** `void`

___
<a id="free"></a>

###  free

▸ **free**(): `void`

*Overrides [Node](_declarations_blessed_d_.widgets.node.md).[free](_declarations_blessed_d_.widgets.node.md#free)*

*Defined in [declarations/blessed.d.ts:1824](https://github.com/cancerberoSgx/accursed/blob/978b980/src/declarations/blessed.d.ts#L1824)*

Free up the element. Automatically unbind all events that may have been bound to the screen object. This prevents memory leaks. For use with onScreenEvent(), removeScreenEvent(), and destroy().

**Returns:** `void`

___
<a id="get"></a>

###  get

▸ **get**<`T`>(name: *`string`*, def: *`T`*): `T`

*Inherited from [Node](_declarations_blessed_d_.widgets.node.md).[get](_declarations_blessed_d_.widgets.node.md#get)*

*Defined in [declarations/blessed.d.ts:450](https://github.com/cancerberoSgx/accursed/blob/978b980/src/declarations/blessed.d.ts#L450)*

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
<a id="getbaseline"></a>

###  getBaseLine

▸ **getBaseLine**(i: *`number`*): `string`

*Defined in [declarations/blessed.d.ts:1974](https://github.com/cancerberoSgx/accursed/blob/978b980/src/declarations/blessed.d.ts#L1974)*

Get a line from the box's content from the visible top.

**Parameters:**

| Name | Type |
| ------ | ------ |
| i | `number` |

**Returns:** `string`

___
<a id="getcontent"></a>

###  getContent

▸ **getContent**(): `string`

*Defined in [declarations/blessed.d.ts:1944](https://github.com/cancerberoSgx/accursed/blob/978b980/src/declarations/blessed.d.ts#L1944)*

Return content, slightly different from el.content. Assume the above formatting.

**Returns:** `string`

___
<a id="getline"></a>

###  getLine

▸ **getLine**(i: *`number`*): `string`

*Defined in [declarations/blessed.d.ts:1969](https://github.com/cancerberoSgx/accursed/blob/978b980/src/declarations/blessed.d.ts#L1969)*

Get a line from the box's content.

**Parameters:**

| Name | Type |
| ------ | ------ |
| i | `number` |

**Returns:** `string`

___
<a id="getlines"></a>

###  getLines

▸ **getLines**(): `string`[]

*Defined in [declarations/blessed.d.ts:2039](https://github.com/cancerberoSgx/accursed/blob/978b980/src/declarations/blessed.d.ts#L2039)*

An array containing the content lines.

**Returns:** `string`[]

___
<a id="getmaxlisteners"></a>

###  getMaxListeners

▸ **getMaxListeners**(): `number`

*Inherited from EventEmitter.getMaxListeners*

*Overrides EventEmitter.getMaxListeners*

*Defined in /Users/sebastiangurin/git/accursed/node_modules/@types/node/events.d.ts:20*

**Returns:** `number`

___
<a id="getscreenlines"></a>

###  getScreenLines

▸ **getScreenLines**(): `string`[]

*Defined in [declarations/blessed.d.ts:2044](https://github.com/cancerberoSgx/accursed/blob/978b980/src/declarations/blessed.d.ts#L2044)*

An array containing the lines as they are displayed on the screen.

**Returns:** `string`[]

___
<a id="gettext"></a>

###  getText

▸ **getText**(): `string`

*Defined in [declarations/blessed.d.ts:1954](https://github.com/cancerberoSgx/accursed/blob/978b980/src/declarations/blessed.d.ts#L1954)*

Similar to getContent, but return content with tags and escape codes removed.

**Returns:** `string`

___
<a id="hasancestor"></a>

###  hasAncestor

▸ **hasAncestor**<`T`>(target: *[Node](_declarations_blessed_d_.widgets.node.md)*): [Node](_declarations_blessed_d_.widgets.node.md)

*Inherited from [Node](_declarations_blessed_d_.widgets.node.md).[hasAncestor](_declarations_blessed_d_.widgets.node.md#hasancestor)*

*Defined in [declarations/blessed.d.ts:441](https://github.com/cancerberoSgx/accursed/blob/978b980/src/declarations/blessed.d.ts#L441)*

**Type parameters:**

#### T :  [Node](_declarations_blessed_d_.widgets.node.md)
**Parameters:**

| Name | Type |
| ------ | ------ |
| target | [Node](_declarations_blessed_d_.widgets.node.md) |

**Returns:** [Node](_declarations_blessed_d_.widgets.node.md)

___
<a id="hasdescendant"></a>

###  hasDescendant

▸ **hasDescendant**<`T`>(target: *[Node](_declarations_blessed_d_.widgets.node.md)*): [Node](_declarations_blessed_d_.widgets.node.md)

*Inherited from [Node](_declarations_blessed_d_.widgets.node.md).[hasDescendant](_declarations_blessed_d_.widgets.node.md#hasdescendant)*

*Defined in [declarations/blessed.d.ts:440](https://github.com/cancerberoSgx/accursed/blob/978b980/src/declarations/blessed.d.ts#L440)*

**Type parameters:**

#### T :  [Node](_declarations_blessed_d_.widgets.node.md)
**Parameters:**

| Name | Type |
| ------ | ------ |
| target | [Node](_declarations_blessed_d_.widgets.node.md) |

**Returns:** [Node](_declarations_blessed_d_.widgets.node.md)

___
<a id="hide"></a>

###  hide

▸ **hide**(): `void`

*Defined in [declarations/blessed.d.ts:1779](https://github.com/cancerberoSgx/accursed/blob/978b980/src/declarations/blessed.d.ts#L1779)*

Hide element, clear the element's region on the screen and triggers [hide](_declarations_blessed_d_.widgets.blessedelement.md#hide) event.

**Returns:** `void`

___
<a id="insert"></a>

###  insert

▸ **insert**(node: *[Node](_declarations_blessed_d_.widgets.node.md)*, index: *`number`*): `void`

*Inherited from [Node](_declarations_blessed_d_.widgets.node.md).[insert](_declarations_blessed_d_.widgets.node.md#insert)*

*Defined in [declarations/blessed.d.ts:409](https://github.com/cancerberoSgx/accursed/blob/978b980/src/declarations/blessed.d.ts#L409)*

Insert a node to this node's children at index i.

**Parameters:**

| Name | Type |
| ------ | ------ |
| node | [Node](_declarations_blessed_d_.widgets.node.md) |
| index | `number` |

**Returns:** `void`

___
<a id="insertafter"></a>

###  insertAfter

▸ **insertAfter**(node: *[Node](_declarations_blessed_d_.widgets.node.md)*, refNode: *[Node](_declarations_blessed_d_.widgets.node.md)*): `void`

*Inherited from [Node](_declarations_blessed_d_.widgets.node.md).[insertAfter](_declarations_blessed_d_.widgets.node.md#insertafter)*

*Defined in [declarations/blessed.d.ts:419](https://github.com/cancerberoSgx/accursed/blob/978b980/src/declarations/blessed.d.ts#L419)*

Insert a node from node after the reference node.

**Parameters:**

| Name | Type |
| ------ | ------ |
| node | [Node](_declarations_blessed_d_.widgets.node.md) |
| refNode | [Node](_declarations_blessed_d_.widgets.node.md) |

**Returns:** `void`

___
<a id="insertbefore"></a>

###  insertBefore

▸ **insertBefore**(node: *[Node](_declarations_blessed_d_.widgets.node.md)*, refNode: *[Node](_declarations_blessed_d_.widgets.node.md)*): `void`

*Inherited from [Node](_declarations_blessed_d_.widgets.node.md).[insertBefore](_declarations_blessed_d_.widgets.node.md#insertbefore)*

*Defined in [declarations/blessed.d.ts:414](https://github.com/cancerberoSgx/accursed/blob/978b980/src/declarations/blessed.d.ts#L414)*

Insert a node to this node's children before the reference node.

**Parameters:**

| Name | Type |
| ------ | ------ |
| node | [Node](_declarations_blessed_d_.widgets.node.md) |
| refNode | [Node](_declarations_blessed_d_.widgets.node.md) |

**Returns:** `void`

___
<a id="insertbottom"></a>

###  insertBottom

▸ **insertBottom**(lines: *`string` \| `string`[]*): `void`

*Defined in [declarations/blessed.d.ts:2004](https://github.com/cancerberoSgx/accursed/blob/978b980/src/declarations/blessed.d.ts#L2004)*

Insert a line at the bottom of the box.

**Parameters:**

| Name | Type |
| ------ | ------ |
| lines | `string` \| `string`[] |

**Returns:** `void`

___
<a id="insertline"></a>

###  insertLine

▸ **insertLine**(i: *`number`*, lines: *`string` \| `string`[]*): `void`

*Defined in [declarations/blessed.d.ts:1959](https://github.com/cancerberoSgx/accursed/blob/978b980/src/declarations/blessed.d.ts#L1959)*

Insert a line into the box's content.

**Parameters:**

| Name | Type |
| ------ | ------ |
| i | `number` |
| lines | `string` \| `string`[] |

**Returns:** `void`

___
<a id="inserttop"></a>

###  insertTop

▸ **insertTop**(lines: *`string` \| `string`[]*): `void`

*Defined in [declarations/blessed.d.ts:1999](https://github.com/cancerberoSgx/accursed/blob/978b980/src/declarations/blessed.d.ts#L1999)*

Insert a line at the top of the box.

**Parameters:**

| Name | Type |
| ------ | ------ |
| lines | `string` \| `string`[] |

**Returns:** `void`

___
<a id="key"></a>

###  key

▸ **key**(name: *`string` \| `string`[]*, listener: *[KeyEventListener](../modules/_declarations_blessed_d_.widgets.md#keyeventlistener)*): `void`

*Inherited from [NodeWithEvents](_declarations_blessed_d_.widgets.nodewithevents.md).[key](_declarations_blessed_d_.widgets.nodewithevents.md#key)*

*Defined in [declarations/blessed.d.ts:558](https://github.com/cancerberoSgx/accursed/blob/978b980/src/declarations/blessed.d.ts#L558)*

Bind a keypress listener for a specific key.

**Parameters:**

| Name | Type |
| ------ | ------ |
| name | `string` \| `string`[] |
| listener | [KeyEventListener](../modules/_declarations_blessed_d_.widgets.md#keyeventlistener) |

**Returns:** `void`

___
<a id="kill"></a>

###  kill

▸ **kill**(): `any`

*Defined in [declarations/blessed.d.ts:1888](https://github.com/cancerberoSgx/accursed/blob/978b980/src/declarations/blessed.d.ts#L1888)*

**Returns:** `any`

___
<a id="listenercount"></a>

###  listenerCount

▸ **listenerCount**(type: *`string` \| `symbol`*): `number`

*Inherited from EventEmitter.listenerCount*

*Overrides EventEmitter.listenerCount*

*Defined in /Users/sebastiangurin/git/accursed/node_modules/@types/node/events.d.ts:25*

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

*Defined in /Users/sebastiangurin/git/accursed/node_modules/@types/node/events.d.ts:21*

**Parameters:**

| Name | Type |
| ------ | ------ |
| event | `string` \| `symbol` |

**Returns:** `Function`[]

___
<a id="off"></a>

###  off

▸ **off**(event: *`string` \| `symbol`*, listener: *`function`*): `this`

*Inherited from EventEmitter.off*

*Overrides EventEmitter.off*

*Defined in /Users/sebastiangurin/git/accursed/node_modules/@types/node/events.d.ts:17*

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

▸ **on**(event: *[NodeMouseEventType](../modules/_declarations_blessed_d_.widgets.md#nodemouseeventtype)*, callback: *`function`*): `this`

▸ **on**(event: *"keypress"*, callback: *[KeyEventListener](../modules/_declarations_blessed_d_.widgets.md#keyeventlistener)*): `this`

▸ **on**(event: *[NodeScreenEventType](../modules/_declarations_blessed_d_.widgets.md#nodescreeneventtype)*, callback: *`function`*): `this`

▸ **on**(event: *"warning"*, callback: *`function`*): `this`

▸ **on**(event: *[NodeGenericEventType](../modules/_declarations_blessed_d_.widgets.md#nodegenericeventtype)*, callback: *`function`*): `this`

*Inherited from [NodeWithEvents](_declarations_blessed_d_.widgets.nodewithevents.md).[on](_declarations_blessed_d_.widgets.nodewithevents.md#on)*

*Overrides [Node](_declarations_blessed_d_.widgets.node.md).[on](_declarations_blessed_d_.widgets.node.md#on)*

*Defined in [declarations/blessed.d.ts:577](https://github.com/cancerberoSgx/accursed/blob/978b980/src/declarations/blessed.d.ts#L577)*

Registers event listener to be notified on mouse events.

**Parameters:**

| Name | Type |
| ------ | ------ |
| event | `string` |
| listener | `function` |

**Returns:** `this`

*Inherited from [NodeWithEvents](_declarations_blessed_d_.widgets.nodewithevents.md).[on](_declarations_blessed_d_.widgets.nodewithevents.md#on)*

*Overrides [Node](_declarations_blessed_d_.widgets.node.md).[on](_declarations_blessed_d_.widgets.node.md#on)*

*Defined in [declarations/blessed.d.ts:581](https://github.com/cancerberoSgx/accursed/blob/978b980/src/declarations/blessed.d.ts#L581)*

Registers event listener to be notified on mouse events.

**Parameters:**

| Name | Type |
| ------ | ------ |
| event | [NodeMouseEventType](../modules/_declarations_blessed_d_.widgets.md#nodemouseeventtype) |
| callback | `function` |

**Returns:** `this`

*Inherited from [NodeWithEvents](_declarations_blessed_d_.widgets.nodewithevents.md).[on](_declarations_blessed_d_.widgets.nodewithevents.md#on)*

*Overrides [Node](_declarations_blessed_d_.widgets.node.md).[on](_declarations_blessed_d_.widgets.node.md#on)*

*Defined in [declarations/blessed.d.ts:586](https://github.com/cancerberoSgx/accursed/blob/978b980/src/declarations/blessed.d.ts#L586)*

Received on key events.

**Parameters:**

| Name | Type |
| ------ | ------ |
| event | "keypress" |
| callback | [KeyEventListener](../modules/_declarations_blessed_d_.widgets.md#keyeventlistener) |

**Returns:** `this`

*Inherited from [NodeWithEvents](_declarations_blessed_d_.widgets.nodewithevents.md).[on](_declarations_blessed_d_.widgets.nodewithevents.md#on)*

*Overrides [Node](_declarations_blessed_d_.widgets.node.md).[on](_declarations_blessed_d_.widgets.node.md#on)*

*Defined in [declarations/blessed.d.ts:587](https://github.com/cancerberoSgx/accursed/blob/978b980/src/declarations/blessed.d.ts#L587)*

**Parameters:**

| Name | Type |
| ------ | ------ |
| event | [NodeScreenEventType](../modules/_declarations_blessed_d_.widgets.md#nodescreeneventtype) |
| callback | `function` |

**Returns:** `this`

*Inherited from [NodeWithEvents](_declarations_blessed_d_.widgets.nodewithevents.md).[on](_declarations_blessed_d_.widgets.nodewithevents.md#on)*

*Overrides [Node](_declarations_blessed_d_.widgets.node.md).[on](_declarations_blessed_d_.widgets.node.md#on)*

*Defined in [declarations/blessed.d.ts:591](https://github.com/cancerberoSgx/accursed/blob/978b980/src/declarations/blessed.d.ts#L591)*

Received when blessed notices something untoward (output is not a tty, terminfo not found, etc).

**Parameters:**

| Name | Type |
| ------ | ------ |
| event | "warning" |
| callback | `function` |

**Returns:** `this`

*Inherited from [NodeWithEvents](_declarations_blessed_d_.widgets.nodewithevents.md).[on](_declarations_blessed_d_.widgets.nodewithevents.md#on)*

*Overrides [Node](_declarations_blessed_d_.widgets.node.md).[on](_declarations_blessed_d_.widgets.node.md#on)*

*Defined in [declarations/blessed.d.ts:592](https://github.com/cancerberoSgx/accursed/blob/978b980/src/declarations/blessed.d.ts#L592)*

**Parameters:**

| Name | Type |
| ------ | ------ |
| event | [NodeGenericEventType](../modules/_declarations_blessed_d_.widgets.md#nodegenericeventtype) |
| callback | `function` |

**Returns:** `this`

___
<a id="onscreenevent"></a>

###  onScreenEvent

▸ **onScreenEvent**(type: *`string`*, handler: *`function`*): `void`

*Defined in [declarations/blessed.d.ts:1810](https://github.com/cancerberoSgx/accursed/blob/978b980/src/declarations/blessed.d.ts#L1810)*

Same as el.on('screen', ...) except this will automatically keep track of which listeners are bound to the screen object. For use with removeScreenEvent(), free(), and destroy().

**Parameters:**

| Name | Type |
| ------ | ------ |
| type | `string` |
| handler | `function` |

**Returns:** `void`

___
<a id="once"></a>

###  once

▸ **once**(event: *`string` \| `symbol`*, listener: *`function`*): `this`

*Inherited from EventEmitter.once*

*Overrides EventEmitter.once*

*Defined in /Users/sebastiangurin/git/accursed/node_modules/@types/node/events.d.ts:13*

**Parameters:**

| Name | Type |
| ------ | ------ |
| event | `string` \| `symbol` |
| listener | `function` |

**Returns:** `this`

___
<a id="oncekey"></a>

###  onceKey

▸ **onceKey**(name: *`string`*, listener: *[KeyEventListener](../modules/_declarations_blessed_d_.widgets.md#keyeventlistener)*): `void`

*Inherited from [NodeWithEvents](_declarations_blessed_d_.widgets.nodewithevents.md).[onceKey](_declarations_blessed_d_.widgets.nodewithevents.md#oncekey)*

*Defined in [declarations/blessed.d.ts:563](https://github.com/cancerberoSgx/accursed/blob/978b980/src/declarations/blessed.d.ts#L563)*

Bind a keypress listener for a specific key once.

**Parameters:**

| Name | Type |
| ------ | ------ |
| name | `string` |
| listener | [KeyEventListener](../modules/_declarations_blessed_d_.widgets.md#keyeventlistener) |

**Returns:** `void`

___
<a id="parsecontent"></a>

###  parseContent

▸ **parseContent**(noTags: *`string`*): `boolean`

*Defined in [declarations/blessed.d.ts:1804](https://github.com/cancerberoSgx/accursed/blob/978b980/src/declarations/blessed.d.ts#L1804)*

Parses given content string with no tags before rendering. Removes / transform characters that break the output.

For example, double-width chars will eat the next char after render in this case it creates a blank character after it so it doesn't eat the real next char.

*__internal__*: 

**Parameters:**

| Name | Type |
| ------ | ------ |
| noTags | `string` |

**Returns:** `boolean`

___
<a id="popline"></a>

###  popLine

▸ **popLine**(i: *`number`*): `string`

*Defined in [declarations/blessed.d.ts:2034](https://github.com/cancerberoSgx/accursed/blob/978b980/src/declarations/blessed.d.ts#L2034)*

Pop a line off the bottom of the content.

**Parameters:**

| Name | Type |
| ------ | ------ |
| i | `number` |

**Returns:** `string`

___
<a id="prepend"></a>

###  prepend

▸ **prepend**(node: *[Node](_declarations_blessed_d_.widgets.node.md)*): `void`

*Inherited from [Node](_declarations_blessed_d_.widgets.node.md).[prepend](_declarations_blessed_d_.widgets.node.md#prepend)*

*Defined in [declarations/blessed.d.ts:394](https://github.com/cancerberoSgx/accursed/blob/978b980/src/declarations/blessed.d.ts#L394)*

Prepend a node to this node's children.

**Parameters:**

| Name | Type |
| ------ | ------ |
| node | [Node](_declarations_blessed_d_.widgets.node.md) |

**Returns:** `void`

___
<a id="prependlistener"></a>

###  prependListener

▸ **prependListener**(event: *`string` \| `symbol`*, listener: *`function`*): `this`

*Inherited from EventEmitter.prependListener*

*Overrides EventEmitter.prependListener*

*Defined in /Users/sebastiangurin/git/accursed/node_modules/@types/node/events.d.ts:14*

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

*Defined in /Users/sebastiangurin/git/accursed/node_modules/@types/node/events.d.ts:15*

**Parameters:**

| Name | Type |
| ------ | ------ |
| event | `string` \| `symbol` |
| listener | `function` |

**Returns:** `this`

___
<a id="pushline"></a>

###  pushLine

▸ **pushLine**(lines: *`string` \| `string`[]*): `void`

*Defined in [declarations/blessed.d.ts:2029](https://github.com/cancerberoSgx/accursed/blob/978b980/src/declarations/blessed.d.ts#L2029)*

Push a line onto the bottom of the content.

**Parameters:**

| Name | Type |
| ------ | ------ |
| lines | `string` \| `string`[] |

**Returns:** `void`

___
<a id="rawlisteners"></a>

###  rawListeners

▸ **rawListeners**(event: *`string` \| `symbol`*): `Function`[]

*Inherited from EventEmitter.rawListeners*

*Overrides EventEmitter.rawListeners*

*Defined in /Users/sebastiangurin/git/accursed/node_modules/@types/node/events.d.ts:22*

**Parameters:**

| Name | Type |
| ------ | ------ |
| event | `string` \| `symbol` |

**Returns:** `Function`[]

___
<a id="remove"></a>

###  remove

▸ **remove**(node: *[Node](_declarations_blessed_d_.widgets.node.md)*): `void`

*Inherited from [Node](_declarations_blessed_d_.widgets.node.md).[remove](_declarations_blessed_d_.widgets.node.md#remove)*

*Defined in [declarations/blessed.d.ts:404](https://github.com/cancerberoSgx/accursed/blob/978b980/src/declarations/blessed.d.ts#L404)*

Remove child node from node.

**Parameters:**

| Name | Type |
| ------ | ------ |
| node | [Node](_declarations_blessed_d_.widgets.node.md) |

**Returns:** `void`

___
<a id="removealllisteners"></a>

###  removeAllListeners

▸ **removeAllListeners**(event?: *`string` \| `symbol`*): `this`

*Inherited from EventEmitter.removeAllListeners*

*Overrides EventEmitter.removeAllListeners*

*Defined in /Users/sebastiangurin/git/accursed/node_modules/@types/node/events.d.ts:18*

**Parameters:**

| Name | Type |
| ------ | ------ |
| `Optional` event | `string` \| `symbol` |

**Returns:** `this`

___
<a id="removehover"></a>

###  removeHover

▸ **removeHover**(): `void`

*Defined in [declarations/blessed.d.ts:1866](https://github.com/cancerberoSgx/accursed/blob/978b980/src/declarations/blessed.d.ts#L1866)*

Remove the hover label completely.

**Returns:** `void`

___
<a id="removekey"></a>

###  removeKey

▸ **removeKey**(name: *`string`*, listener: *[KeyEventListener](../modules/_declarations_blessed_d_.widgets.md#keyeventlistener)*): `void`

*Inherited from [NodeWithEvents](_declarations_blessed_d_.widgets.nodewithevents.md).[removeKey](_declarations_blessed_d_.widgets.nodewithevents.md#removekey)*

*Defined in [declarations/blessed.d.ts:573](https://github.com/cancerberoSgx/accursed/blob/978b980/src/declarations/blessed.d.ts#L573)*

Remove a keypress listener for a specific key.

**Parameters:**

| Name | Type |
| ------ | ------ |
| name | `string` |
| listener | [KeyEventListener](../modules/_declarations_blessed_d_.widgets.md#keyeventlistener) |

**Returns:** `void`

___
<a id="removelabel"></a>

###  removeLabel

▸ **removeLabel**(): `any`

*Defined in [declarations/blessed.d.ts:1855](https://github.com/cancerberoSgx/accursed/blob/978b980/src/declarations/blessed.d.ts#L1855)*

Remove the label completely.

**Returns:** `any`

___
<a id="removelistener"></a>

###  removeListener

▸ **removeListener**(event: *`string` \| `symbol`*, listener: *`function`*): `this`

*Inherited from EventEmitter.removeListener*

*Overrides EventEmitter.removeListener*

*Defined in /Users/sebastiangurin/git/accursed/node_modules/@types/node/events.d.ts:16*

**Parameters:**

| Name | Type |
| ------ | ------ |
| event | `string` \| `symbol` |
| listener | `function` |

**Returns:** `this`

___
<a id="removescreenevent"></a>

###  removeScreenEvent

▸ **removeScreenEvent**(type: *`string`*, handler: *`function`*): `void`

*Defined in [declarations/blessed.d.ts:1816](https://github.com/cancerberoSgx/accursed/blob/978b980/src/declarations/blessed.d.ts#L1816)*

Same asel.removeListener('screen', ...) except this will automatically keep track of which listeners are bound to the screen object. For use with onScreenEvent(), free(), and destroy().

**Parameters:**

| Name | Type |
| ------ | ------ |
| type | `string` |
| handler | `function` |

**Returns:** `void`

___
<a id="render"></a>

###  render

▸ **render**(): [Coords](../interfaces/_declarations_blessed_d_.widgets.coords.md) \| `undefined`

*Defined in [declarations/blessed.d.ts:1709](https://github.com/cancerberoSgx/accursed/blob/978b980/src/declarations/blessed.d.ts#L1709)*

Write content and children to the screen buffer.

**Returns:** [Coords](../interfaces/_declarations_blessed_d_.widgets.coords.md) \| `undefined`

___
<a id="sattr"></a>

###  sattr

▸ **sattr**(style: *[TStyle](../interfaces/_declarations_blessed_d_.widgets.types.tstyle.md)*, fg?: *`string`*, bg?: *`string`*): `any`

*Defined in [declarations/blessed.d.ts:1924](https://github.com/cancerberoSgx/accursed/blob/978b980/src/declarations/blessed.d.ts#L1924)*

calculates the value for `style` (could be substyle like style.bar) to paint in the screen according to the rest of the properties and optionally bg and fg.

**Parameters:**

| Name | Type |
| ------ | ------ |
| style | [TStyle](../interfaces/_declarations_blessed_d_.widgets.types.tstyle.md) |
| `Optional` fg | `string` |
| `Optional` bg | `string` |

**Returns:** `any`

___
<a id="screenshot"></a>

###  screenshot

▸ **screenshot**(xi: *`number`*, xl: *`number`*, yi: *`number`*, yl: *`number`*): `string`

▸ **screenshot**(): `string`

*Defined in [declarations/blessed.d.ts:1899](https://github.com/cancerberoSgx/accursed/blob/978b980/src/declarations/blessed.d.ts#L1899)*

Take an SGR screenshot of the screen within the region. Returns a string containing only characters and SGR codes. Can be displayed by simply echoing it in a terminal.

**Parameters:**

| Name | Type |
| ------ | ------ |
| xi | `number` |
| xl | `number` |
| yi | `number` |
| yl | `number` |

**Returns:** `string`

*Defined in [declarations/blessed.d.ts:1904](https://github.com/cancerberoSgx/accursed/blob/978b980/src/declarations/blessed.d.ts#L1904)*

Take an SGR screenshot of the whole screen. Returns a string containing only characters and SGR codes. Can be displayed by simply echoing it in a terminal.

**Returns:** `string`

___
<a id="set"></a>

###  set

▸ **set**(name: *`string`*, value: *`any`*): `void`

*Inherited from [Node](_declarations_blessed_d_.widgets.node.md).[set](_declarations_blessed_d_.widgets.node.md#set)*

*Defined in [declarations/blessed.d.ts:455](https://github.com/cancerberoSgx/accursed/blob/978b980/src/declarations/blessed.d.ts#L455)*

Set user property to value.

**Parameters:**

| Name | Type |
| ------ | ------ |
| name | `string` |
| value | `any` |

**Returns:** `void`

___
<a id="setback"></a>

###  setBack

▸ **setBack**(): `void`

*Defined in [declarations/blessed.d.ts:1845](https://github.com/cancerberoSgx/accursed/blob/978b980/src/declarations/blessed.d.ts#L1845)*

Put the element in back of its siblings.

**Returns:** `void`

___
<a id="setbaseline"></a>

###  setBaseLine

▸ **setBaseLine**(i: *`number`*, line: *`string` \| `string`[]*): `void`

*Defined in [declarations/blessed.d.ts:1984](https://github.com/cancerberoSgx/accursed/blob/978b980/src/declarations/blessed.d.ts#L1984)*

Set a line in the box's content from the visible top.

**Parameters:**

| Name | Type |
| ------ | ------ |
| i | `number` |
| line | `string` \| `string`[] |

**Returns:** `void`

___
<a id="setcontent"></a>

###  setContent

▸ **setContent**(text: *`string`*, noClear?: *`boolean`*, noTags?: *`boolean`*): `void`

*Defined in [declarations/blessed.d.ts:1940](https://github.com/cancerberoSgx/accursed/blob/978b980/src/declarations/blessed.d.ts#L1940)*

Set the content. Note: When text is input, it will be stripped of all non-SGR escape codes, tabs will be replaced with 8 spaces, and tags will be replaced with SGR codes (if enabled).

**Parameters:**

| Name | Type |
| ------ | ------ |
| text | `string` |
| `Optional` noClear | `boolean` |
| `Optional` noTags | `boolean` |

**Returns:** `void`

___
<a id="setfront"></a>

###  setFront

▸ **setFront**(): `void`

*Defined in [declarations/blessed.d.ts:1840](https://github.com/cancerberoSgx/accursed/blob/978b980/src/declarations/blessed.d.ts#L1840)*

Put the element in front of its siblings. Uses [setIndex](_declarations_blessed_d_.widgets.blessedelement.md#setindex)

**Returns:** `void`

___
<a id="sethover"></a>

###  setHover

▸ **setHover**(arg: *`string` \| [LabelOptions](../interfaces/_declarations_blessed_d_.widgets.labeloptions.md)*): `void`

*Defined in [declarations/blessed.d.ts:1861](https://github.com/cancerberoSgx/accursed/blob/978b980/src/declarations/blessed.d.ts#L1861)*

text/options - Set a hover text box to follow the cursor. Similar to the "title" DOM attribute in the browser. Example options: {text:'foo'}

**Parameters:**

| Name | Type |
| ------ | ------ |
| arg | `string` \| [LabelOptions](../interfaces/_declarations_blessed_d_.widgets.labeloptions.md) |

**Returns:** `void`

___
<a id="setindex"></a>

###  setIndex

▸ **setIndex**(z: *`number`*): `void`

*Defined in [declarations/blessed.d.ts:1835](https://github.com/cancerberoSgx/accursed/blob/978b980/src/declarations/blessed.d.ts#L1835)*

Change this element's index in its parent's children array. This will change the rendering order. If all elements are positioned by their selves then this could be similar to CSS z-index property. But if you are using a layout or relaying somhow in the children order then it will change the position of this element and its siblings.

**Parameters:**

| Name | Type |
| ------ | ------ |
| z | `number` |

**Returns:** `void`

___
<a id="setlabel"></a>

###  setLabel

▸ **setLabel**(arg: *`string` \| [LabelOptions](../interfaces/_declarations_blessed_d_.widgets.labeloptions.md)*): `void`

*Defined in [declarations/blessed.d.ts:1850](https://github.com/cancerberoSgx/accursed/blob/978b980/src/declarations/blessed.d.ts#L1850)*

text/options - Set the label text for the top-left corner. Example options: {text:'foo',side:'left'}

**Parameters:**

| Name | Type |
| ------ | ------ |
| arg | `string` \| [LabelOptions](../interfaces/_declarations_blessed_d_.widgets.labeloptions.md) |

**Returns:** `void`

___
<a id="setline"></a>

###  setLine

▸ **setLine**(i: *`number`*, line: *`string` \| `string`[]*): `void`

*Defined in [declarations/blessed.d.ts:1979](https://github.com/cancerberoSgx/accursed/blob/978b980/src/declarations/blessed.d.ts#L1979)*

Set a line in the box's content.

**Parameters:**

| Name | Type |
| ------ | ------ |
| i | `number` |
| line | `string` \| `string`[] |

**Returns:** `void`

___
<a id="setmaxlisteners"></a>

###  setMaxListeners

▸ **setMaxListeners**(n: *`number`*): `this`

*Inherited from EventEmitter.setMaxListeners*

*Overrides EventEmitter.setMaxListeners*

*Defined in /Users/sebastiangurin/git/accursed/node_modules/@types/node/events.d.ts:19*

**Parameters:**

| Name | Type |
| ------ | ------ |
| n | `number` |

**Returns:** `this`

___
<a id="settext"></a>

###  setText

▸ **setText**(text: *`string`*, noClear?: *`boolean`*): `void`

*Defined in [declarations/blessed.d.ts:1949](https://github.com/cancerberoSgx/accursed/blob/978b980/src/declarations/blessed.d.ts#L1949)*

Similar to setContent, but ignore tags and remove escape codes.

**Parameters:**

| Name | Type |
| ------ | ------ |
| text | `string` |
| `Optional` noClear | `boolean` |

**Returns:** `void`

___
<a id="shiftline"></a>

###  shiftLine

▸ **shiftLine**(i: *`number`*): `void`

*Defined in [declarations/blessed.d.ts:2024](https://github.com/cancerberoSgx/accursed/blob/978b980/src/declarations/blessed.d.ts#L2024)*

Shift a line off the top of the content.

**Parameters:**

| Name | Type |
| ------ | ------ |
| i | `number` |

**Returns:** `void`

___
<a id="show"></a>

###  show

▸ **show**(): `void`

*Defined in [declarations/blessed.d.ts:1784](https://github.com/cancerberoSgx/accursed/blob/978b980/src/declarations/blessed.d.ts#L1784)*

Show element.

**Returns:** `void`

___
<a id="strwidth"></a>

###  strWidth

▸ **strWidth**(text: *`string`*): `string`

*Defined in [declarations/blessed.d.ts:2050](https://github.com/cancerberoSgx/accursed/blob/978b980/src/declarations/blessed.d.ts#L2050)*

Get a string's displayed width, taking into account double-width, surrogate pairs, combining characters, tags, and SGR escape codes.

**Parameters:**

| Name | Type |
| ------ | ------ |
| text | `string` |

**Returns:** `string`

___
<a id="toggle"></a>

###  toggle

▸ **toggle**(): `void`

*Defined in [declarations/blessed.d.ts:1789](https://github.com/cancerberoSgx/accursed/blob/978b980/src/declarations/blessed.d.ts#L1789)*

Toggle hidden/shown.

**Returns:** `void`

___
<a id="unkey"></a>

###  unkey

▸ **unkey**(name: *`string`*, listener: *[KeyEventListener](../modules/_declarations_blessed_d_.widgets.md#keyeventlistener)*): `void`

*Inherited from [NodeWithEvents](_declarations_blessed_d_.widgets.nodewithevents.md).[unkey](_declarations_blessed_d_.widgets.nodewithevents.md#unkey)*

*Defined in [declarations/blessed.d.ts:568](https://github.com/cancerberoSgx/accursed/blob/978b980/src/declarations/blessed.d.ts#L568)*

Remove a keypress listener for a specific key.

**Parameters:**

| Name | Type |
| ------ | ------ |
| name | `string` |
| listener | [KeyEventListener](../modules/_declarations_blessed_d_.widgets.md#keyeventlistener) |

**Returns:** `void`

___
<a id="unshiftline"></a>

###  unshiftLine

▸ **unshiftLine**(lines: *`string` \| `string`[]*): `void`

*Defined in [declarations/blessed.d.ts:2019](https://github.com/cancerberoSgx/accursed/blob/978b980/src/declarations/blessed.d.ts#L2019)*

Unshift a line onto the top of the content.

**Parameters:**

| Name | Type |
| ------ | ------ |
| lines | `string` \| `string`[] |

**Returns:** `void`

___
<a id="listenercount-1"></a>

### `<Static>` listenerCount

▸ **listenerCount**(emitter: *`EventEmitter`*, event: *`string` \| `symbol`*): `number`

*Inherited from EventEmitter.listenerCount*

*Defined in /Users/sebastiangurin/git/accursed/node_modules/@types/node/events.d.ts:8*

*__deprecated__*: since v4.0.0

**Parameters:**

| Name | Type |
| ------ | ------ |
| emitter | `EventEmitter` |
| event | `string` \| `symbol` |

**Returns:** `number`

___

