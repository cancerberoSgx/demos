[accursed](../README.md) > ["declarations/blessed.d"](../modules/_declarations_blessed_d_.md) > [Widgets](../modules/_declarations_blessed_d_.widgets.md)

# Module: Widgets

These are the blessed library elements.

They all are \[\[EventEmitter\]\].

The base class is [Node](../classes/_declarations_blessed_d_.widgets.node.md) which implements the tree structure and general events.

[BlessedElement](../classes/_declarations_blessed_d_.widgets.blessedelement.md) implements a visual object and all concrete elements to build a GUI inherits from it, like [BoxElement](../classes/_declarations_blessed_d_.widgets.boxelement.md), [ListElement](../classes/_declarations_blessed_d_.widgets.listelement.md), etc.

All elements are rendered in a [Screen](../classes/_declarations_blessed_d_.widgets.screen.md) which is the top-level Node of the tree. It's responsible of drawing them and supporting keyboard, mouse and life cycle events, colors and styles, ect.

The screen is supported by the [BlessedProgram](../classes/_declarations_blessedprogram_d_.blessedprogram.md) which directly dialogues with the terminal and devices thtough library \[\[TPut\]\] and others. It supports a low level API which is compatible with most terminal implementations.

Finally, end users can build their GUIs using concrete elements such as [List](../classes/_declarations_blessed_d_.widget.list.md), [Table](../classes/_declarations_blessed_d_.widget.table.md), [ListTable](../classes/_declarations_blessed_d_.widget.listtable.md), [Box](../classes/_declarations_blessed_d_.widget.box.md), \[\[Listbab\]\], [Button](../classes/_declarations_blessed_d_.widget.button.md), [Textarea](../classes/_declarations_blessed_d_.widget.textarea.md), etc. These respect a common API regarding positioning, layout, scroll, drag, event bubbling, borders, labels, padding, etc.

Users can extend these classes to build new custom elements with their own events, and aestetic, both composing concrete elements or extending [BlessedElement](../classes/_declarations_blessed_d_.widgets.blessedelement.md) or [Node](../classes/_declarations_blessed_d_.widgets.node.md) classes and implement a custom [BlessedElement.render](../classes/_declarations_blessed_d_.widgets.blessedelement.md#render) method.

## Index

### Modules

* [Events](_declarations_blessed_d_.widgets.events.md)
* [Types](_declarations_blessed_d_.widgets.types.md)

### Classes

* [ANSIImageElement](../classes/_declarations_blessed_d_.widgets.ansiimageelement.md)
* [BigTextElement](../classes/_declarations_blessed_d_.widgets.bigtextelement.md)
* [BlessedElement](../classes/_declarations_blessed_d_.widgets.blessedelement.md)
* [BoxElement](../classes/_declarations_blessed_d_.widgets.boxelement.md)
* [ButtonElement](../classes/_declarations_blessed_d_.widgets.buttonelement.md)
* [CheckboxElement](../classes/_declarations_blessed_d_.widgets.checkboxelement.md)
* [FileManagerElement](../classes/_declarations_blessed_d_.widgets.filemanagerelement.md)
* [FormElement](../classes/_declarations_blessed_d_.widgets.formelement.md)
* [ImageElement](../classes/_declarations_blessed_d_.widgets.imageelement.md)
* [InputElement](../classes/_declarations_blessed_d_.widgets.inputelement.md)
* [LayoutElement](../classes/_declarations_blessed_d_.widgets.layoutelement.md)
* [LineElement](../classes/_declarations_blessed_d_.widgets.lineelement.md)
* [ListElement](../classes/_declarations_blessed_d_.widgets.listelement.md)
* [ListTableElement](../classes/_declarations_blessed_d_.widgets.listtableelement.md)
* [ListbarElement](../classes/_declarations_blessed_d_.widgets.listbarelement.md)
* [LoadingElement](../classes/_declarations_blessed_d_.widgets.loadingelement.md)
* [Log](../classes/_declarations_blessed_d_.widgets.log.md)
* [MessageElement](../classes/_declarations_blessed_d_.widgets.messageelement.md)
* [Node](../classes/_declarations_blessed_d_.widgets.node.md)
* [NodeWithEvents](../classes/_declarations_blessed_d_.widgets.nodewithevents.md)
* [OverlayImageElement](../classes/_declarations_blessed_d_.widgets.overlayimageelement.md)
* [PositionCoords](../classes/_declarations_blessed_d_.widgets.positioncoords.md)
* [Program](../classes/_declarations_blessed_d_.widgets.program.md)
* [ProgressBarElement](../classes/_declarations_blessed_d_.widgets.progressbarelement.md)
* [PromptElement](../classes/_declarations_blessed_d_.widgets.promptelement.md)
* [QuestionElement](../classes/_declarations_blessed_d_.widgets.questionelement.md)
* [RadioButtonElement](../classes/_declarations_blessed_d_.widgets.radiobuttonelement.md)
* [RadioSetElement](../classes/_declarations_blessed_d_.widgets.radiosetelement.md)
* [Screen](../classes/_declarations_blessed_d_.widgets.screen.md)
* [ScrollableBoxElement](../classes/_declarations_blessed_d_.widgets.scrollableboxelement.md)
* [ScrollableTextElement](../classes/_declarations_blessed_d_.widgets.scrollabletextelement.md)
* [TableElement](../classes/_declarations_blessed_d_.widgets.tableelement.md)
* [TerminalElement](../classes/_declarations_blessed_d_.widgets.terminalelement.md)
* [TextElement](../classes/_declarations_blessed_d_.widgets.textelement.md)
* [TextareaElement](../classes/_declarations_blessed_d_.widgets.textareaelement.md)
* [TextboxElement](../classes/_declarations_blessed_d_.widgets.textboxelement.md)
* [Tput](../classes/_declarations_blessed_d_.widgets.tput.md)
* [VideoElement](../classes/_declarations_blessed_d_.widgets.videoelement.md)

### Interfaces

* [ANSIImageOptions](../interfaces/_declarations_blessed_d_.widgets.ansiimageoptions.md)
* [BigTextOptions](../interfaces/_declarations_blessed_d_.widgets.bigtextoptions.md)
* [BoxOptions](../interfaces/_declarations_blessed_d_.widgets.boxoptions.md)
* [ButtonOptions](../interfaces/_declarations_blessed_d_.widgets.buttonoptions.md)
* [CheckboxOptions](../interfaces/_declarations_blessed_d_.widgets.checkboxoptions.md)
* [Coords](../interfaces/_declarations_blessed_d_.widgets.coords.md)
* [ElementOptions](../interfaces/_declarations_blessed_d_.widgets.elementoptions.md)
* [FileManagerOptions](../interfaces/_declarations_blessed_d_.widgets.filemanageroptions.md)
* [FormOptions](../interfaces/_declarations_blessed_d_.widgets.formoptions.md)
* [IDestroyable](../interfaces/_declarations_blessed_d_.widgets.idestroyable.md)
* [IHasOptions](../interfaces/_declarations_blessed_d_.widgets.ihasoptions.md)
* [INodeOptions](../interfaces/_declarations_blessed_d_.widgets.inodeoptions.md)
* [IOptions](../interfaces/_declarations_blessed_d_.widgets.ioptions.md)
* [IScreenOptions](../interfaces/_declarations_blessed_d_.widgets.iscreenoptions.md)
* [ImageOptions](../interfaces/_declarations_blessed_d_.widgets.imageoptions.md)
* [InputOptions](../interfaces/_declarations_blessed_d_.widgets.inputoptions.md)
* [LabelOptions](../interfaces/_declarations_blessed_d_.widgets.labeloptions.md)
* [LayoutOptions](../interfaces/_declarations_blessed_d_.widgets.layoutoptions.md)
* [LineOptions](../interfaces/_declarations_blessed_d_.widgets.lineoptions.md)
* [ListElementStyle](../interfaces/_declarations_blessed_d_.widgets.listelementstyle.md)
* [ListOptions](../interfaces/_declarations_blessed_d_.widgets.listoptions.md)
* [ListTableOptions](../interfaces/_declarations_blessed_d_.widgets.listtableoptions.md)
* [ListbarOptions](../interfaces/_declarations_blessed_d_.widgets.listbaroptions.md)
* [LoadingOptions](../interfaces/_declarations_blessed_d_.widgets.loadingoptions.md)
* [LogOptions](../interfaces/_declarations_blessed_d_.widgets.logoptions.md)
* [MessageOptions](../interfaces/_declarations_blessed_d_.widgets.messageoptions.md)
* [NodeChildProcessExecOptions](../interfaces/_declarations_blessed_d_.widgets.nodechildprocessexecoptions.md)
* [OverlayImageOptions](../interfaces/_declarations_blessed_d_.widgets.overlayimageoptions.md)
* [Padding](../interfaces/_declarations_blessed_d_.widgets.padding.md)
* [Pos](../interfaces/_declarations_blessed_d_.widgets.pos.md)
* [Position](../interfaces/_declarations_blessed_d_.widgets.position.md)
* [ProgressBarOptions](../interfaces/_declarations_blessed_d_.widgets.progressbaroptions.md)
* [PromptOptions](../interfaces/_declarations_blessed_d_.widgets.promptoptions.md)
* [QuestionOptions](../interfaces/_declarations_blessed_d_.widgets.questionoptions.md)
* [RadioButtonOptions](../interfaces/_declarations_blessed_d_.widgets.radiobuttonoptions.md)
* [RadioSetOptions](../interfaces/_declarations_blessed_d_.widgets.radiosetoptions.md)
* [ScrollableBoxOptions](../interfaces/_declarations_blessed_d_.widgets.scrollableboxoptions.md)
* [ScrollableTextOptions](../interfaces/_declarations_blessed_d_.widgets.scrollabletextoptions.md)
* [SimpleCoords](../interfaces/_declarations_blessed_d_.widgets.simplecoords.md)
* [StyleListTable](../interfaces/_declarations_blessed_d_.widgets.stylelisttable.md)
* [TableOptions](../interfaces/_declarations_blessed_d_.widgets.tableoptions.md)
* [TerminalOptions](../interfaces/_declarations_blessed_d_.widgets.terminaloptions.md)
* [TextOptions](../interfaces/_declarations_blessed_d_.widgets.textoptions.md)
* [TextareaOptions](../interfaces/_declarations_blessed_d_.widgets.textareaoptions.md)
* [TextboxOptions](../interfaces/_declarations_blessed_d_.widgets.textboxoptions.md)
* [TputsOptions](../interfaces/_declarations_blessed_d_.widgets.tputsoptions.md)
* [VideoOptions](../interfaces/_declarations_blessed_d_.widgets.videooptions.md)

### Type aliases

* [Color](_declarations_blessed_d_.widgets.md#color)
* [KeyEventListener](_declarations_blessed_d_.widgets.md#keyeventlistener)
* [LayoutIterator](_declarations_blessed_d_.widgets.md#layoutiterator)
* [ListElementEventType](_declarations_blessed_d_.widgets.md#listelementeventtype)
* [NodeEventType](_declarations_blessed_d_.widgets.md#nodeeventtype)
* [NodeGenericEventType](_declarations_blessed_d_.widgets.md#nodegenericeventtype)
* [NodeMouseEventType](_declarations_blessed_d_.widgets.md#nodemouseeventtype)
* [NodeScreenEventType](_declarations_blessed_d_.widgets.md#nodescreeneventtype)
* [ScreenLine](_declarations_blessed_d_.widgets.md#screenline)
* [TextareaElementEventType](_declarations_blessed_d_.widgets.md#textareaelementeventtype)

---

## Type aliases

<a id="color"></a>

###  Color

**Ƭ Color**: *`number` \| `string`*

*Defined in [declarations/blessed.d.ts:1312](https://github.com/cancerberoSgx/accursed/blob/978b980/src/declarations/blessed.d.ts#L1312)*

___
<a id="keyeventlistener"></a>

###  KeyEventListener

**Ƭ KeyEventListener**: *`function`*

*Defined in [declarations/blessed.d.ts:552](https://github.com/cancerberoSgx/accursed/blob/978b980/src/declarations/blessed.d.ts#L552)*

#### Type declaration
▸(ch: *`string`*, key: *[IKeyEventArg](../interfaces/_declarations_blessed_d_.widgets.events.ikeyeventarg.md)*): `void`

**Parameters:**

| Name | Type |
| ------ | ------ |
| ch | `string` |
| key | [IKeyEventArg](../interfaces/_declarations_blessed_d_.widgets.events.ikeyeventarg.md) |

**Returns:** `void`

___
<a id="layoutiterator"></a>

###  LayoutIterator

**Ƭ LayoutIterator**: *`function`*

*Defined in [declarations/blessed.d.ts:3532](https://github.com/cancerberoSgx/accursed/blob/978b980/src/declarations/blessed.d.ts#L3532)*

#### Type declaration
▸(el: *`object` & [BlessedElement](../classes/_declarations_blessed_d_.widgets.blessedelement.md)*, i: *`number`*): `any`

**Parameters:**

| Name | Type |
| ------ | ------ |
| el | `object` & [BlessedElement](../classes/_declarations_blessed_d_.widgets.blessedelement.md) |
| i | `number` |

**Returns:** `any`

___
<a id="listelementeventtype"></a>

###  ListElementEventType

**Ƭ ListElementEventType**: *"cancel" \| "action" \| "create item" \| "add item" \| "remove item" \| "insert item" \| "set items"*

*Defined in [declarations/blessed.d.ts:2307](https://github.com/cancerberoSgx/accursed/blob/978b980/src/declarations/blessed.d.ts#L2307)*

___
<a id="nodeeventtype"></a>

###  NodeEventType

**Ƭ NodeEventType**: *"adopt" \| "remove" \| "reparent" \| "attach" \| "detach"*

*Defined in [declarations/blessed.d.ts:321](https://github.com/cancerberoSgx/accursed/blob/978b980/src/declarations/blessed.d.ts#L321)*

`` ` `` 'adopt' : Received when node is added to a parent.

'remove' : Received when node is removed from it's current parent.

'reparent' : Received when node gains a new parent.

'attach' : Received when node is attached to the screen directly or somewhere in its ancestry.

'detach' : Received when node is detached from the screen directly or somewhere in its ancestry. `` ` ``

___
<a id="nodegenericeventtype"></a>

###  NodeGenericEventType

**Ƭ NodeGenericEventType**: *"resize" \| "prerender" \| "render" \| "destroy" \| "move" \| "show" \| "hide" \| "set content" \| "parsed content"*

*Defined in [declarations/blessed.d.ts:541](https://github.com/cancerberoSgx/accursed/blob/978b980/src/declarations/blessed.d.ts#L541)*

'resize': Received on screen resize.

'prerender': Received before render.

'render': Received on render.

'destroy' : Received when the screen is destroyed (only useful when using multiple screens).

'move': Received when the element is moved. For example when [rtop](../interfaces/_editorwidget_editorwidgettypes_.basewidget.md#rtop) or [position](../interfaces/_editorwidget_editorwidgettypes_.basewidget.md#position) properties are updated.

'show': Received when element is shown.

'hide': Received when element becomes hidden.

'set content': Received when element [content](../interfaces/_editorwidget_editorwidgettypes_.basewidget.md#content) is updated.

'parsed content': Received when element [content](../interfaces/_editorwidget_editorwidgettypes_.basewidget.md#content) is parsed.

___
<a id="nodemouseeventtype"></a>

###  NodeMouseEventType

**Ƭ NodeMouseEventType**: *"mouse" \| "mouseout" \| "mouseover" \| "mousedown" \| "mouseup" \| "mousewheel" \| "wheeldown" \| "wheelup" \| "mousemove" \| "click"*

*Defined in [declarations/blessed.d.ts:509](https://github.com/cancerberoSgx/accursed/blob/978b980/src/declarations/blessed.d.ts#L509)*

___
<a id="nodescreeneventtype"></a>

###  NodeScreenEventType

**Ƭ NodeScreenEventType**: *"focus" \| "blur" \| "click" \| "element click" \| "element mouseover" \| "element mouseout" \| "element mouseup" \| "element mouse" \| "element mousedown" \| "element mousewheel" \| "element wheeldown" \| "element wheelup" \| "element mousemove"*

*Defined in [declarations/blessed.d.ts:483](https://github.com/cancerberoSgx/accursed/blob/978b980/src/declarations/blessed.d.ts#L483)*

'focus' : Received when the terminal window focuses/blurs. Requires a terminal supporting the focus protocol and focus needs to be passed to program.enableMouse().

'blur': Received when the terminal window focuses/blurs. Requires a terminal supporting the focus protocol and focus needs to be passed to program.enableMouse().

'click': Element was clicked (slightly smarter than mouseup).

___
<a id="screenline"></a>

###  ScreenLine

**Ƭ ScreenLine**: *[`number`, `string`]*

*Defined in [declarations/blessed.d.ts:818](https://github.com/cancerberoSgx/accursed/blob/978b980/src/declarations/blessed.d.ts#L818)*

A point in the screen. The first element represent the attr (value combining the color, and effects like bold, underline, etc) and the second it the character to paint. See [Element.sattr](../classes/_declarations_blessed_d_.widget.element.md#sattr)

___
<a id="textareaelementeventtype"></a>

###  TextareaElementEventType

**Ƭ TextareaElementEventType**: *"error" \| "submit" \| "cancel" \| "action"*

*Defined in [declarations/blessed.d.ts:2819](https://github.com/cancerberoSgx/accursed/blob/978b980/src/declarations/blessed.d.ts#L2819)*

___

