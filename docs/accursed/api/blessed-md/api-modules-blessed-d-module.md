---
id: api-modules-blessed-d-module
title: blessed.d Module
sidebar_label: blessed.d
---

[blessed](api-readme.md) > [[blessed.d Module]](api-modules-blessed-d-module.md)

## Module

### Modules

* [Widgets](api-modules-blessed-d-widgets.md)
* [widget](api-modules-blessed-d-widget.md)

### Classes

* [BlessedProgram](api-classes-blessed-d-blessedprogram.md)

### Interfaces

* [GpmClient](api-interfaces-blessed-d-gpmclient.md)
* [GpmEvent](api-interfaces-blessed-d-gpmevent.md)
* [IBlessedProgramOptions](api-interfaces-blessed-d-iblessedprogramoptions.md)
* [ProgramOutput](api-interfaces-blessed-d-programoutput.md)
* [ProgramResponseData](api-interfaces-blessed-d-programresponsedata.md)
* [Unicode](api-interfaces-blessed-d-unicode.md)

### Type aliases

* [ColorRgb](api-modules-blessed-d-module.md#colorrgb)
* [ProgramResponseCallback](api-modules-blessed-d-module.md#programresponsecallback)

### Variables

* [colors](api-modules-blessed-d-module.md#colors)
* [unicode](api-modules-blessed-d-module.md#unicode-1)

### Functions

* [bigtext](api-modules-blessed-d-module.md#bigtext)
* [box](api-modules-blessed-d-module.md#box)
* [button](api-modules-blessed-d-module.md#button)
* [checkbox](api-modules-blessed-d-module.md#checkbox)
* [escape](api-modules-blessed-d-module.md#escape)
* [filemanager](api-modules-blessed-d-module.md#filemanager)
* [form](api-modules-blessed-d-module.md#form)
* [input](api-modules-blessed-d-module.md#input)
* [layout](api-modules-blessed-d-module.md#layout)
* [line](api-modules-blessed-d-module.md#line)
* [list](api-modules-blessed-d-module.md#list)
* [listbar](api-modules-blessed-d-module.md#listbar)
* [listtable](api-modules-blessed-d-module.md#listtable)
* [loading](api-modules-blessed-d-module.md#loading)
* [log](api-modules-blessed-d-module.md#log)
* [message](api-modules-blessed-d-module.md#message)
* [program](api-modules-blessed-d-module.md#program)
* [progressbar](api-modules-blessed-d-module.md#progressbar)
* [prompt](api-modules-blessed-d-module.md#prompt)
* [question](api-modules-blessed-d-module.md#question)
* [radiobutton](api-modules-blessed-d-module.md#radiobutton)
* [radioset](api-modules-blessed-d-module.md#radioset)
* [screen](api-modules-blessed-d-module.md#screen)
* [scrollablebox](api-modules-blessed-d-module.md#scrollablebox)
* [scrollabletext](api-modules-blessed-d-module.md#scrollabletext)
* [table](api-modules-blessed-d-module.md#table)
* [terminal](api-modules-blessed-d-module.md#terminal)
* [text](api-modules-blessed-d-module.md#text)
* [textarea](api-modules-blessed-d-module.md#textarea)
* [textbox](api-modules-blessed-d-module.md#textbox)

---

## Type aliases

<a id="colorrgb"></a>

###  ColorRgb

**Ƭ ColorRgb**: *[`number`, `number`, `number`]*

*Defined in [blessed.d.ts:4606](https://github.com/cancerberoSgx/accursed/blob/7a42e78/src/declarations/blessed.d.ts#L4606)*

___
<a id="programresponsecallback"></a>

###  ProgramResponseCallback

**Ƭ ProgramResponseCallback**: *`function`*

*Defined in [blessed.d.ts:42](https://github.com/cancerberoSgx/accursed/blob/7a42e78/src/declarations/blessed.d.ts#L42)*

#### Type declaration
▸(this: *[BlessedProgram](api-classes-blessed-d-blessedprogram.md)*, err: *`Error`*, data: *[ProgramResponseData](api-interfaces-blessed-d-programresponsedata.md)*): `any`

**Parameters:**

| Name | Type |
| ------ | ------ |
| this | [BlessedProgram](api-classes-blessed-d-blessedprogram.md) |
| err | `Error` |
| data | [ProgramResponseData](api-interfaces-blessed-d-programresponsedata.md) |

**Returns:** `any`

___

## Variables

<a id="colors"></a>

### `<Const>` colors

**● colors**: *`object`*

*Defined in [blessed.d.ts:4607](https://github.com/cancerberoSgx/accursed/blob/7a42e78/src/declarations/blessed.d.ts#L4607)*

#### Type declaration

 colorNames: `object`

 black: `0`

 blue: `4`

 brightblack: `8`

 brightblue: `12`

 brightcyan: `14`

 brightgray: `7`

 brightgreen: `10`

 brightgrey: `7`

 brightmagenta: `13`

 brightred: `9`

 brightwhite: `15`

 brightyellow: `11`

 cyan: `6`

 gray: `8`

 green: `2`

 grey: `8`

 lightblack: `8`

 lightblue: `12`

 lightcyan: `14`

 lightgray: `7`

 lightgreen: `10`

 lightgrey: `7`

 lightmagenta: `13`

 lightred: `9`

 lightwhite: `15`

 lightyellow: `11`

 magenta: `5`

 red: `1`

 white: `7`

 yellow: `3`

 RGBToHex : function
▸ **RGBToHex**(r: *`number`*, g: *`number`*, b: *`number`*): `string`

▸ **RGBToHex**(hex: *`string`*): [ColorRgb](api-modules-blessed-d-module.md#colorrgb)

*Defined in [blessed.d.ts:4611](https://github.com/cancerberoSgx/accursed/blob/7a42e78/src/declarations/blessed.d.ts#L4611)*

**Parameters:**

| Name | Type |
| ------ | ------ |
| r | `number` |
| g | `number` |
| b | `number` |

**Returns:** `string`

*Defined in [blessed.d.ts:4612](https://github.com/cancerberoSgx/accursed/blob/7a42e78/src/declarations/blessed.d.ts#L4612)*

**Parameters:**

| Name | Type |
| ------ | ------ |
| hex | `string` |

**Returns:** [ColorRgb](api-modules-blessed-d-module.md#colorrgb)

 blend : function
▸ **blend**(attr: *`number`*, attr2?: *`undefined` \| `number`*, alpha?: *`undefined` \| `number`*): `number`

*Defined in [blessed.d.ts:4613](https://github.com/cancerberoSgx/accursed/blob/7a42e78/src/declarations/blessed.d.ts#L4613)*

**Parameters:**

| Name | Type |
| ------ | ------ |
| attr | `number` |
| `Optional` attr2 | `undefined` \| `number` |
| `Optional` alpha | `undefined` \| `number` |

**Returns:** `number`

 convert : function
▸ **convert**(color: *[Color](api-modules-blessed-d-widgets.md#color)*): `number`

*Defined in [blessed.d.ts:4609](https://github.com/cancerberoSgx/accursed/blob/7a42e78/src/declarations/blessed.d.ts#L4609)*

**Parameters:**

| Name | Type |
| ------ | ------ |
| color | [Color](api-modules-blessed-d-widgets.md#color) |

**Returns:** `number`

 match : function
▸ **match**(r1: *[Color](api-modules-blessed-d-widgets.md#color) \| [ColorRgb](api-modules-blessed-d-module.md#colorrgb)*, g1?: *`undefined` \| `number`*, b1?: *`undefined` \| `number`*): `number`

*Defined in [blessed.d.ts:4608](https://github.com/cancerberoSgx/accursed/blob/7a42e78/src/declarations/blessed.d.ts#L4608)*

**Parameters:**

| Name | Type |
| ------ | ------ |
| r1 | [Color](api-modules-blessed-d-widgets.md#color) \| [ColorRgb](api-modules-blessed-d-module.md#colorrgb) |
| `Optional` g1 | `undefined` \| `number` |
| `Optional` b1 | `undefined` \| `number` |

**Returns:** `number`

 mixColors : function
▸ **mixColors**(c1: *`number`*, c2: *`number`*, alpha: *`number`*): `number`

*Defined in [blessed.d.ts:4610](https://github.com/cancerberoSgx/accursed/blob/7a42e78/src/declarations/blessed.d.ts#L4610)*

**Parameters:**

| Name | Type |
| ------ | ------ |
| c1 | `number` |
| c2 | `number` |
| alpha | `number` |

**Returns:** `number`

___
<a id="unicode-1"></a>

### `<Const>` unicode

**● unicode**: *[Unicode](api-interfaces-blessed-d-unicode.md)*

*Defined in [blessed.d.ts:4651](https://github.com/cancerberoSgx/accursed/blob/7a42e78/src/declarations/blessed.d.ts#L4651)*

___

## Functions

<a id="bigtext"></a>

###  bigtext

▸ **bigtext**(options?: *[BigTextOptions](api-interfaces-blessed-d-widgets.bigtextoptions.md)*): [BigTextElement](api-classes-blessed-d-widgets.bigtextelement.md)

*Defined in [blessed.d.ts:4581](https://github.com/cancerberoSgx/accursed/blob/7a42e78/src/declarations/blessed.d.ts#L4581)*

**Parameters:**

| Name | Type |
| ------ | ------ |
| `Optional` options | [BigTextOptions](api-interfaces-blessed-d-widgets.bigtextoptions.md) |

**Returns:** [BigTextElement](api-classes-blessed-d-widgets.bigtextelement.md)

___
<a id="box"></a>

###  box

▸ **box**(options?: *[BoxOptions](api-interfaces-blessed-d-widgets.boxoptions.md)*): [BoxElement](api-classes-blessed-d-widgets.boxelement.md)

*Defined in [blessed.d.ts:4576](https://github.com/cancerberoSgx/accursed/blob/7a42e78/src/declarations/blessed.d.ts#L4576)*

**Parameters:**

| Name | Type |
| ------ | ------ |
| `Optional` options | [BoxOptions](api-interfaces-blessed-d-widgets.boxoptions.md) |

**Returns:** [BoxElement](api-classes-blessed-d-widgets.boxelement.md)

___
<a id="button"></a>

###  button

▸ **button**(options?: *[ButtonOptions](api-interfaces-blessed-d-widgets.buttonoptions.md)*): [ButtonElement](api-classes-blessed-d-widgets.buttonelement.md)

*Defined in [blessed.d.ts:4590](https://github.com/cancerberoSgx/accursed/blob/7a42e78/src/declarations/blessed.d.ts#L4590)*

**Parameters:**

| Name | Type |
| ------ | ------ |
| `Optional` options | [ButtonOptions](api-interfaces-blessed-d-widgets.buttonoptions.md) |

**Returns:** [ButtonElement](api-classes-blessed-d-widgets.buttonelement.md)

___
<a id="checkbox"></a>

###  checkbox

▸ **checkbox**(options?: *[CheckboxOptions](api-interfaces-blessed-d-widgets.checkboxoptions.md)*): [CheckboxElement](api-classes-blessed-d-widgets.checkboxelement.md)

*Defined in [blessed.d.ts:4591](https://github.com/cancerberoSgx/accursed/blob/7a42e78/src/declarations/blessed.d.ts#L4591)*

**Parameters:**

| Name | Type |
| ------ | ------ |
| `Optional` options | [CheckboxOptions](api-interfaces-blessed-d-widgets.checkboxoptions.md) |

**Returns:** [CheckboxElement](api-classes-blessed-d-widgets.checkboxelement.md)

___
<a id="escape"></a>

###  escape

▸ **escape**(item: *`any`*): `any`

*Defined in [blessed.d.ts:4604](https://github.com/cancerberoSgx/accursed/blob/7a42e78/src/declarations/blessed.d.ts#L4604)*

**Parameters:**

| Name | Type |
| ------ | ------ |
| item | `any` |

**Returns:** `any`

___
<a id="filemanager"></a>

###  filemanager

▸ **filemanager**(options?: *[FileManagerOptions](api-interfaces-blessed-d-widgets.filemanageroptions.md)*): [FileManagerElement](api-classes-blessed-d-widgets.filemanagerelement.md)

*Defined in [blessed.d.ts:4583](https://github.com/cancerberoSgx/accursed/blob/7a42e78/src/declarations/blessed.d.ts#L4583)*

**Parameters:**

| Name | Type |
| ------ | ------ |
| `Optional` options | [FileManagerOptions](api-interfaces-blessed-d-widgets.filemanageroptions.md) |

**Returns:** [FileManagerElement](api-classes-blessed-d-widgets.filemanagerelement.md)

___
<a id="form"></a>

###  form

▸ **form**<`TFormData`>(options?: *[FormOptions](api-interfaces-blessed-d-widgets.formoptions.md)*): [FormElement](api-classes-blessed-d-widgets.formelement.md)<`TFormData`>

*Defined in [blessed.d.ts:4586](https://github.com/cancerberoSgx/accursed/blob/7a42e78/src/declarations/blessed.d.ts#L4586)*

**Type parameters:**

#### TFormData 
**Parameters:**

| Name | Type |
| ------ | ------ |
| `Optional` options | [FormOptions](api-interfaces-blessed-d-widgets.formoptions.md) |

**Returns:** [FormElement](api-classes-blessed-d-widgets.formelement.md)<`TFormData`>

___
<a id="input"></a>

###  input

▸ **input**(options?: *[InputOptions](api-interfaces-blessed-d-widgets.inputoptions.md)*): [InputElement](api-classes-blessed-d-widgets.inputelement.md)

*Defined in [blessed.d.ts:4587](https://github.com/cancerberoSgx/accursed/blob/7a42e78/src/declarations/blessed.d.ts#L4587)*

**Parameters:**

| Name | Type |
| ------ | ------ |
| `Optional` options | [InputOptions](api-interfaces-blessed-d-widgets.inputoptions.md) |

**Returns:** [InputElement](api-classes-blessed-d-widgets.inputelement.md)

___
<a id="layout"></a>

###  layout

▸ **layout**(options?: *[LayoutOptions](api-interfaces-blessed-d-widgets.layoutoptions.md)*): [LayoutElement](api-classes-blessed-d-widgets.layoutelement.md)

*Defined in [blessed.d.ts:4603](https://github.com/cancerberoSgx/accursed/blob/7a42e78/src/declarations/blessed.d.ts#L4603)*

**Parameters:**

| Name | Type |
| ------ | ------ |
| `Optional` options | [LayoutOptions](api-interfaces-blessed-d-widgets.layoutoptions.md) |

**Returns:** [LayoutElement](api-classes-blessed-d-widgets.layoutelement.md)

___
<a id="line"></a>

###  line

▸ **line**(options?: *[LineOptions](api-interfaces-blessed-d-widgets.lineoptions.md)*): [LineElement](api-classes-blessed-d-widgets.lineelement.md)

*Defined in [blessed.d.ts:4578](https://github.com/cancerberoSgx/accursed/blob/7a42e78/src/declarations/blessed.d.ts#L4578)*

**Parameters:**

| Name | Type |
| ------ | ------ |
| `Optional` options | [LineOptions](api-interfaces-blessed-d-widgets.lineoptions.md) |

**Returns:** [LineElement](api-classes-blessed-d-widgets.lineelement.md)

___
<a id="list"></a>

###  list

▸ **list**(options?: *[ListOptions](api-interfaces-blessed-d-widgets.listoptions.md)<[ListElementStyle](api-interfaces-blessed-d-widgets.listelementstyle.md)>*): [ListElement](api-classes-blessed-d-widgets.listelement.md)

*Defined in [blessed.d.ts:4582](https://github.com/cancerberoSgx/accursed/blob/7a42e78/src/declarations/blessed.d.ts#L4582)*

**Parameters:**

| Name | Type |
| ------ | ------ |
| `Optional` options | [ListOptions](api-interfaces-blessed-d-widgets.listoptions.md)<[ListElementStyle](api-interfaces-blessed-d-widgets.listelementstyle.md)> |

**Returns:** [ListElement](api-classes-blessed-d-widgets.listelement.md)

___
<a id="listbar"></a>

###  listbar

▸ **listbar**(options?: *[ListbarOptions](api-interfaces-blessed-d-widgets.listbaroptions.md)*): [ListbarElement](api-classes-blessed-d-widgets.listbarelement.md)

*Defined in [blessed.d.ts:4585](https://github.com/cancerberoSgx/accursed/blob/7a42e78/src/declarations/blessed.d.ts#L4585)*

**Parameters:**

| Name | Type |
| ------ | ------ |
| `Optional` options | [ListbarOptions](api-interfaces-blessed-d-widgets.listbaroptions.md) |

**Returns:** [ListbarElement](api-classes-blessed-d-widgets.listbarelement.md)

___
<a id="listtable"></a>

###  listtable

▸ **listtable**(options?: *[ListTableOptions](api-interfaces-blessed-d-widgets.listtableoptions.md)*): [ListTableElement](api-classes-blessed-d-widgets.listtableelement.md)

*Defined in [blessed.d.ts:4584](https://github.com/cancerberoSgx/accursed/blob/7a42e78/src/declarations/blessed.d.ts#L4584)*

**Parameters:**

| Name | Type |
| ------ | ------ |
| `Optional` options | [ListTableOptions](api-interfaces-blessed-d-widgets.listtableoptions.md) |

**Returns:** [ListTableElement](api-classes-blessed-d-widgets.listtableelement.md)

___
<a id="loading"></a>

###  loading

▸ **loading**(options?: *[LoadingOptions](api-interfaces-blessed-d-widgets.loadingoptions.md)*): [LoadingElement](api-classes-blessed-d-widgets.loadingelement.md)

*Defined in [blessed.d.ts:4598](https://github.com/cancerberoSgx/accursed/blob/7a42e78/src/declarations/blessed.d.ts#L4598)*

**Parameters:**

| Name | Type |
| ------ | ------ |
| `Optional` options | [LoadingOptions](api-interfaces-blessed-d-widgets.loadingoptions.md) |

**Returns:** [LoadingElement](api-classes-blessed-d-widgets.loadingelement.md)

___
<a id="log"></a>

###  log

▸ **log**(options?: *[LogOptions](api-interfaces-blessed-d-widgets.logoptions.md)*): [Log](api-classes-blessed-d-widgets.log.md)

*Defined in [blessed.d.ts:4599](https://github.com/cancerberoSgx/accursed/blob/7a42e78/src/declarations/blessed.d.ts#L4599)*

**Parameters:**

| Name | Type |
| ------ | ------ |
| `Optional` options | [LogOptions](api-interfaces-blessed-d-widgets.logoptions.md) |

**Returns:** [Log](api-classes-blessed-d-widgets.log.md)

___
<a id="message"></a>

###  message

▸ **message**(options?: *[MessageOptions](api-interfaces-blessed-d-widgets.messageoptions.md)*): [MessageElement](api-classes-blessed-d-widgets.messageelement.md)

*Defined in [blessed.d.ts:4597](https://github.com/cancerberoSgx/accursed/blob/7a42e78/src/declarations/blessed.d.ts#L4597)*

**Parameters:**

| Name | Type |
| ------ | ------ |
| `Optional` options | [MessageOptions](api-interfaces-blessed-d-widgets.messageoptions.md) |

**Returns:** [MessageElement](api-classes-blessed-d-widgets.messageelement.md)

___
<a id="program"></a>

###  program

▸ **program**(options?: *[IScreenOptions](api-interfaces-blessed-d-widgets.iscreenoptions.md)*): [BlessedProgram](api-classes-blessed-d-blessedprogram.md)

*Defined in [blessed.d.ts:4601](https://github.com/cancerberoSgx/accursed/blob/7a42e78/src/declarations/blessed.d.ts#L4601)*

**Parameters:**

| Name | Type |
| ------ | ------ |
| `Optional` options | [IScreenOptions](api-interfaces-blessed-d-widgets.iscreenoptions.md) |

**Returns:** [BlessedProgram](api-classes-blessed-d-blessedprogram.md)

___
<a id="progressbar"></a>

###  progressbar

▸ **progressbar**(options?: *[ProgressBarOptions](api-interfaces-blessed-d-widgets.progressbaroptions.md)*): [ProgressBarElement](api-classes-blessed-d-widgets.progressbarelement.md)

*Defined in [blessed.d.ts:4600](https://github.com/cancerberoSgx/accursed/blob/7a42e78/src/declarations/blessed.d.ts#L4600)*

**Parameters:**

| Name | Type |
| ------ | ------ |
| `Optional` options | [ProgressBarOptions](api-interfaces-blessed-d-widgets.progressbaroptions.md) |

**Returns:** [ProgressBarElement](api-classes-blessed-d-widgets.progressbarelement.md)

___
<a id="prompt"></a>

###  prompt

▸ **prompt**(options?: *[PromptOptions](api-interfaces-blessed-d-widgets.promptoptions.md)*): [PromptElement](api-classes-blessed-d-widgets.promptelement.md)

*Defined in [blessed.d.ts:4595](https://github.com/cancerberoSgx/accursed/blob/7a42e78/src/declarations/blessed.d.ts#L4595)*

**Parameters:**

| Name | Type |
| ------ | ------ |
| `Optional` options | [PromptOptions](api-interfaces-blessed-d-widgets.promptoptions.md) |

**Returns:** [PromptElement](api-classes-blessed-d-widgets.promptelement.md)

___
<a id="question"></a>

###  question

▸ **question**(options?: *[QuestionOptions](api-interfaces-blessed-d-widgets.questionoptions.md)*): [QuestionElement](api-classes-blessed-d-widgets.questionelement.md)

*Defined in [blessed.d.ts:4596](https://github.com/cancerberoSgx/accursed/blob/7a42e78/src/declarations/blessed.d.ts#L4596)*

**Parameters:**

| Name | Type |
| ------ | ------ |
| `Optional` options | [QuestionOptions](api-interfaces-blessed-d-widgets.questionoptions.md) |

**Returns:** [QuestionElement](api-classes-blessed-d-widgets.questionelement.md)

___
<a id="radiobutton"></a>

###  radiobutton

▸ **radiobutton**(options?: *[RadioButtonOptions](api-interfaces-blessed-d-widgets.radiobuttonoptions.md)*): [RadioButtonElement](api-classes-blessed-d-widgets.radiobuttonelement.md)

*Defined in [blessed.d.ts:4593](https://github.com/cancerberoSgx/accursed/blob/7a42e78/src/declarations/blessed.d.ts#L4593)*

**Parameters:**

| Name | Type |
| ------ | ------ |
| `Optional` options | [RadioButtonOptions](api-interfaces-blessed-d-widgets.radiobuttonoptions.md) |

**Returns:** [RadioButtonElement](api-classes-blessed-d-widgets.radiobuttonelement.md)

___
<a id="radioset"></a>

###  radioset

▸ **radioset**(options?: *[RadioSetOptions](api-interfaces-blessed-d-widgets.radiosetoptions.md)*): [RadioSetElement](api-classes-blessed-d-widgets.radiosetelement.md)

*Defined in [blessed.d.ts:4592](https://github.com/cancerberoSgx/accursed/blob/7a42e78/src/declarations/blessed.d.ts#L4592)*

**Parameters:**

| Name | Type |
| ------ | ------ |
| `Optional` options | [RadioSetOptions](api-interfaces-blessed-d-widgets.radiosetoptions.md) |

**Returns:** [RadioSetElement](api-classes-blessed-d-widgets.radiosetelement.md)

___
<a id="screen"></a>

###  screen

▸ **screen**(options?: *[IScreenOptions](api-interfaces-blessed-d-widgets.iscreenoptions.md)*): [Screen](api-classes-blessed-d-widgets.screen.md)

*Defined in [blessed.d.ts:4575](https://github.com/cancerberoSgx/accursed/blob/7a42e78/src/declarations/blessed.d.ts#L4575)*

*__inheritdoc__*: 

**Parameters:**

| Name | Type |
| ------ | ------ |
| `Optional` options | [IScreenOptions](api-interfaces-blessed-d-widgets.iscreenoptions.md) |

**Returns:** [Screen](api-classes-blessed-d-widgets.screen.md)

___
<a id="scrollablebox"></a>

###  scrollablebox

▸ **scrollablebox**(options?: *[BoxOptions](api-interfaces-blessed-d-widgets.boxoptions.md)*): [BoxElement](api-classes-blessed-d-widgets.boxelement.md)

*Defined in [blessed.d.ts:4579](https://github.com/cancerberoSgx/accursed/blob/7a42e78/src/declarations/blessed.d.ts#L4579)*

**Parameters:**

| Name | Type |
| ------ | ------ |
| `Optional` options | [BoxOptions](api-interfaces-blessed-d-widgets.boxoptions.md) |

**Returns:** [BoxElement](api-classes-blessed-d-widgets.boxelement.md)

___
<a id="scrollabletext"></a>

###  scrollabletext

▸ **scrollabletext**(options?: *[BoxOptions](api-interfaces-blessed-d-widgets.boxoptions.md)*): [BoxElement](api-classes-blessed-d-widgets.boxelement.md)

*Defined in [blessed.d.ts:4580](https://github.com/cancerberoSgx/accursed/blob/7a42e78/src/declarations/blessed.d.ts#L4580)*

**Parameters:**

| Name | Type |
| ------ | ------ |
| `Optional` options | [BoxOptions](api-interfaces-blessed-d-widgets.boxoptions.md) |

**Returns:** [BoxElement](api-classes-blessed-d-widgets.boxelement.md)

___
<a id="table"></a>

###  table

▸ **table**(options?: *[TableOptions](api-interfaces-blessed-d-widgets.tableoptions.md)*): [TableElement](api-classes-blessed-d-widgets.tableelement.md)

*Defined in [blessed.d.ts:4594](https://github.com/cancerberoSgx/accursed/blob/7a42e78/src/declarations/blessed.d.ts#L4594)*

**Parameters:**

| Name | Type |
| ------ | ------ |
| `Optional` options | [TableOptions](api-interfaces-blessed-d-widgets.tableoptions.md) |

**Returns:** [TableElement](api-classes-blessed-d-widgets.tableelement.md)

___
<a id="terminal"></a>

###  terminal

▸ **terminal**(options?: *[TerminalOptions](api-interfaces-blessed-d-widgets.terminaloptions.md)*): [TerminalElement](api-classes-blessed-d-widgets.terminalelement.md)

*Defined in [blessed.d.ts:4602](https://github.com/cancerberoSgx/accursed/blob/7a42e78/src/declarations/blessed.d.ts#L4602)*

**Parameters:**

| Name | Type |
| ------ | ------ |
| `Optional` options | [TerminalOptions](api-interfaces-blessed-d-widgets.terminaloptions.md) |

**Returns:** [TerminalElement](api-classes-blessed-d-widgets.terminalelement.md)

___
<a id="text"></a>

###  text

▸ **text**(options?: *[TextOptions](api-interfaces-blessed-d-widgets.textoptions.md)*): [TextElement](api-classes-blessed-d-widgets.textelement.md)

*Defined in [blessed.d.ts:4577](https://github.com/cancerberoSgx/accursed/blob/7a42e78/src/declarations/blessed.d.ts#L4577)*

**Parameters:**

| Name | Type |
| ------ | ------ |
| `Optional` options | [TextOptions](api-interfaces-blessed-d-widgets.textoptions.md) |

**Returns:** [TextElement](api-classes-blessed-d-widgets.textelement.md)

___
<a id="textarea"></a>

###  textarea

▸ **textarea**(options?: *[TextareaOptions](api-interfaces-blessed-d-widgets.textareaoptions.md)*): [TextareaElement](api-classes-blessed-d-widgets.textareaelement.md)

*Defined in [blessed.d.ts:4588](https://github.com/cancerberoSgx/accursed/blob/7a42e78/src/declarations/blessed.d.ts#L4588)*

**Parameters:**

| Name | Type |
| ------ | ------ |
| `Optional` options | [TextareaOptions](api-interfaces-blessed-d-widgets.textareaoptions.md) |

**Returns:** [TextareaElement](api-classes-blessed-d-widgets.textareaelement.md)

___
<a id="textbox"></a>

###  textbox

▸ **textbox**(options?: *[TextboxOptions](api-interfaces-blessed-d-widgets.textboxoptions.md)*): [TextboxElement](api-classes-blessed-d-widgets.textboxelement.md)

*Defined in [blessed.d.ts:4589](https://github.com/cancerberoSgx/accursed/blob/7a42e78/src/declarations/blessed.d.ts#L4589)*

**Parameters:**

| Name | Type |
| ------ | ------ |
| `Optional` options | [TextboxOptions](api-interfaces-blessed-d-widgets.textboxoptions.md) |

**Returns:** [TextboxElement](api-classes-blessed-d-widgets.textboxelement.md)

___

