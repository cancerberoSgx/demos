[accursed](../README.md) > ["declarations/blessed.d"](../modules/_declarations_blessed_d_.md)

# External module: "declarations/blessed.d"

## Index

### Modules

* [Widgets](_declarations_blessed_d_.widgets.md)
* [widget](_declarations_blessed_d_.widget.md)

### Interfaces

* [Helpers](../interfaces/_declarations_blessed_d_.helpers.md)
* [Unicode](../interfaces/_declarations_blessed_d_.unicode.md)

### Type aliases

* [ColorRgb](_declarations_blessed_d_.md#colorrgb)

### Variables

* [colors](_declarations_blessed_d_.md#colors)
* [helpers](_declarations_blessed_d_.md#helpers-1)
* [unicode](_declarations_blessed_d_.md#unicode-1)

### Functions

* [bigtext](_declarations_blessed_d_.md#bigtext)
* [box](_declarations_blessed_d_.md#box)
* [button](_declarations_blessed_d_.md#button)
* [checkbox](_declarations_blessed_d_.md#checkbox)
* [escape](_declarations_blessed_d_.md#escape)
* [filemanager](_declarations_blessed_d_.md#filemanager)
* [form](_declarations_blessed_d_.md#form)
* [input](_declarations_blessed_d_.md#input)
* [layout](_declarations_blessed_d_.md#layout)
* [line](_declarations_blessed_d_.md#line)
* [list](_declarations_blessed_d_.md#list)
* [listbar](_declarations_blessed_d_.md#listbar)
* [listtable](_declarations_blessed_d_.md#listtable)
* [loading](_declarations_blessed_d_.md#loading)
* [log](_declarations_blessed_d_.md#log)
* [message](_declarations_blessed_d_.md#message)
* [program](_declarations_blessed_d_.md#program)
* [progressbar](_declarations_blessed_d_.md#progressbar)
* [prompt](_declarations_blessed_d_.md#prompt)
* [question](_declarations_blessed_d_.md#question)
* [radiobutton](_declarations_blessed_d_.md#radiobutton)
* [radioset](_declarations_blessed_d_.md#radioset)
* [screen](_declarations_blessed_d_.md#screen)
* [scrollablebox](_declarations_blessed_d_.md#scrollablebox)
* [scrollabletext](_declarations_blessed_d_.md#scrollabletext)
* [table](_declarations_blessed_d_.md#table)
* [terminal](_declarations_blessed_d_.md#terminal)
* [text](_declarations_blessed_d_.md#text)
* [textarea](_declarations_blessed_d_.md#textarea)
* [textbox](_declarations_blessed_d_.md#textbox)

---

## Type aliases

<a id="colorrgb"></a>

###  ColorRgb

**Ƭ ColorRgb**: *[`number`, `number`, `number`]*

*Defined in [declarations/blessed.d.ts:3658](https://github.com/cancerberoSgx/accursed/blob/978b980/src/declarations/blessed.d.ts#L3658)*

___

## Variables

<a id="colors"></a>

### `<Const>` colors

**● colors**: *`object`*

*Defined in [declarations/blessed.d.ts:3659](https://github.com/cancerberoSgx/accursed/blob/978b980/src/declarations/blessed.d.ts#L3659)*

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

▸ **RGBToHex**(hex: *`string`*): [ColorRgb](_declarations_blessed_d_.md#colorrgb)

*Defined in [declarations/blessed.d.ts:3667](https://github.com/cancerberoSgx/accursed/blob/978b980/src/declarations/blessed.d.ts#L3667)*

**Parameters:**

| Name | Type |
| ------ | ------ |
| r | `number` |
| g | `number` |
| b | `number` |

**Returns:** `string`

*Defined in [declarations/blessed.d.ts:3668](https://github.com/cancerberoSgx/accursed/blob/978b980/src/declarations/blessed.d.ts#L3668)*

**Parameters:**

| Name | Type |
| ------ | ------ |
| hex | `string` |

**Returns:** [ColorRgb](_declarations_blessed_d_.md#colorrgb)

 blend : function
▸ **blend**(attr: *`number`*, attr2?: *`number`*, alpha?: *`number`*): `number`

*Defined in [declarations/blessed.d.ts:3669](https://github.com/cancerberoSgx/accursed/blob/978b980/src/declarations/blessed.d.ts#L3669)*

**Parameters:**

| Name | Type |
| ------ | ------ |
| attr | `number` |
| `Optional` attr2 | `number` |
| `Optional` alpha | `number` |

**Returns:** `number`

 ccolors : function
▸ **ccolors**(): `number`[]

*Defined in [declarations/blessed.d.ts:3676](https://github.com/cancerberoSgx/accursed/blob/978b980/src/declarations/blessed.d.ts#L3676)*

Map higher colors to the first 8 colors. This allows translation of high colors to low colors on 8-color terminals.

**Returns:** `number`[]

 colors : function
▸ **colors**(): `number`[]

*Defined in [declarations/blessed.d.ts:3673](https://github.com/cancerberoSgx/accursed/blob/978b980/src/declarations/blessed.d.ts#L3673)*

Seed all 256 colors. Assume xterm defaults. Ported from the xterm color generation script.

**Returns:** `number`[]

 convert : function
▸ **convert**(color: *[Color](_declarations_blessed_d_.widgets.md#color)*): `number`

*Defined in [declarations/blessed.d.ts:3665](https://github.com/cancerberoSgx/accursed/blob/978b980/src/declarations/blessed.d.ts#L3665)*

**Parameters:**

| Name | Type |
| ------ | ------ |
| color | [Color](_declarations_blessed_d_.widgets.md#color) |

**Returns:** `number`

 match : function
▸ **match**(r1: *[Color](_declarations_blessed_d_.widgets.md#color) \| [ColorRgb](_declarations_blessed_d_.md#colorrgb)*, g1?: *`number`*, b1?: *`number`*): `number`

*Defined in [declarations/blessed.d.ts:3664](https://github.com/cancerberoSgx/accursed/blob/978b980/src/declarations/blessed.d.ts#L3664)*

Match given color in a high level form (like rgb or hex expression) with a terminal color number interpolatingg to a similar color.

**Parameters:**

| Name | Type |
| ------ | ------ |
| r1 | [Color](_declarations_blessed_d_.widgets.md#color) \| [ColorRgb](_declarations_blessed_d_.md#colorrgb) |
| `Optional` g1 | `number` |
| `Optional` b1 | `number` |

**Returns:** `number`

 mixColors : function
▸ **mixColors**(c1: *`number`*, c2: *`number`*, alpha: *`number`*): `number`

*Defined in [declarations/blessed.d.ts:3666](https://github.com/cancerberoSgx/accursed/blob/978b980/src/declarations/blessed.d.ts#L3666)*

**Parameters:**

| Name | Type |
| ------ | ------ |
| c1 | `number` |
| c2 | `number` |
| alpha | `number` |

**Returns:** `number`

___
<a id="helpers-1"></a>

### `<Const>` helpers

**● helpers**: *[Helpers](../interfaces/_declarations_blessed_d_.helpers.md)*

*Defined in [declarations/blessed.d.ts:3783](https://github.com/cancerberoSgx/accursed/blob/978b980/src/declarations/blessed.d.ts#L3783)*

___
<a id="unicode-1"></a>

### `<Const>` unicode

**● unicode**: *[Unicode](../interfaces/_declarations_blessed_d_.unicode.md)*

*Defined in [declarations/blessed.d.ts:3715](https://github.com/cancerberoSgx/accursed/blob/978b980/src/declarations/blessed.d.ts#L3715)*

___

## Functions

<a id="bigtext"></a>

###  bigtext

▸ **bigtext**(options?: *[BigTextOptions](../interfaces/_declarations_blessed_d_.widgets.bigtextoptions.md)*): [BigTextElement](../classes/_declarations_blessed_d_.widgets.bigtextelement.md)

*Defined in [declarations/blessed.d.ts:3633](https://github.com/cancerberoSgx/accursed/blob/978b980/src/declarations/blessed.d.ts#L3633)*

**Parameters:**

| Name | Type |
| ------ | ------ |
| `Optional` options | [BigTextOptions](../interfaces/_declarations_blessed_d_.widgets.bigtextoptions.md) |

**Returns:** [BigTextElement](../classes/_declarations_blessed_d_.widgets.bigtextelement.md)

___
<a id="box"></a>

###  box

▸ **box**(options?: *[BoxOptions](../interfaces/_declarations_blessed_d_.widgets.boxoptions.md)*): [BoxElement](../classes/_declarations_blessed_d_.widgets.boxelement.md)

*Defined in [declarations/blessed.d.ts:3628](https://github.com/cancerberoSgx/accursed/blob/978b980/src/declarations/blessed.d.ts#L3628)*

**Parameters:**

| Name | Type |
| ------ | ------ |
| `Optional` options | [BoxOptions](../interfaces/_declarations_blessed_d_.widgets.boxoptions.md) |

**Returns:** [BoxElement](../classes/_declarations_blessed_d_.widgets.boxelement.md)

___
<a id="button"></a>

###  button

▸ **button**(options?: *[ButtonOptions](../interfaces/_declarations_blessed_d_.widgets.buttonoptions.md)*): [ButtonElement](../classes/_declarations_blessed_d_.widgets.buttonelement.md)

*Defined in [declarations/blessed.d.ts:3642](https://github.com/cancerberoSgx/accursed/blob/978b980/src/declarations/blessed.d.ts#L3642)*

**Parameters:**

| Name | Type |
| ------ | ------ |
| `Optional` options | [ButtonOptions](../interfaces/_declarations_blessed_d_.widgets.buttonoptions.md) |

**Returns:** [ButtonElement](../classes/_declarations_blessed_d_.widgets.buttonelement.md)

___
<a id="checkbox"></a>

###  checkbox

▸ **checkbox**(options?: *[CheckboxOptions](../interfaces/_declarations_blessed_d_.widgets.checkboxoptions.md)*): [CheckboxElement](../classes/_declarations_blessed_d_.widgets.checkboxelement.md)

*Defined in [declarations/blessed.d.ts:3643](https://github.com/cancerberoSgx/accursed/blob/978b980/src/declarations/blessed.d.ts#L3643)*

**Parameters:**

| Name | Type |
| ------ | ------ |
| `Optional` options | [CheckboxOptions](../interfaces/_declarations_blessed_d_.widgets.checkboxoptions.md) |

**Returns:** [CheckboxElement](../classes/_declarations_blessed_d_.widgets.checkboxelement.md)

___
<a id="escape"></a>

###  escape

▸ **escape**(item: *`any`*): `any`

*Defined in [declarations/blessed.d.ts:3656](https://github.com/cancerberoSgx/accursed/blob/978b980/src/declarations/blessed.d.ts#L3656)*

**Parameters:**

| Name | Type |
| ------ | ------ |
| item | `any` |

**Returns:** `any`

___
<a id="filemanager"></a>

###  filemanager

▸ **filemanager**(options?: *[FileManagerOptions](../interfaces/_declarations_blessed_d_.widgets.filemanageroptions.md)*): [FileManagerElement](../classes/_declarations_blessed_d_.widgets.filemanagerelement.md)

*Defined in [declarations/blessed.d.ts:3635](https://github.com/cancerberoSgx/accursed/blob/978b980/src/declarations/blessed.d.ts#L3635)*

**Parameters:**

| Name | Type |
| ------ | ------ |
| `Optional` options | [FileManagerOptions](../interfaces/_declarations_blessed_d_.widgets.filemanageroptions.md) |

**Returns:** [FileManagerElement](../classes/_declarations_blessed_d_.widgets.filemanagerelement.md)

___
<a id="form"></a>

###  form

▸ **form**<`TFormData`>(options?: *[FormOptions](../interfaces/_declarations_blessed_d_.widgets.formoptions.md)*): [FormElement](../classes/_declarations_blessed_d_.widgets.formelement.md)<`TFormData`>

*Defined in [declarations/blessed.d.ts:3638](https://github.com/cancerberoSgx/accursed/blob/978b980/src/declarations/blessed.d.ts#L3638)*

**Type parameters:**

#### TFormData 
**Parameters:**

| Name | Type |
| ------ | ------ |
| `Optional` options | [FormOptions](../interfaces/_declarations_blessed_d_.widgets.formoptions.md) |

**Returns:** [FormElement](../classes/_declarations_blessed_d_.widgets.formelement.md)<`TFormData`>

___
<a id="input"></a>

###  input

▸ **input**(options?: *[InputOptions](../interfaces/_declarations_blessed_d_.widgets.inputoptions.md)*): [InputElement](../classes/_declarations_blessed_d_.widgets.inputelement.md)

*Defined in [declarations/blessed.d.ts:3639](https://github.com/cancerberoSgx/accursed/blob/978b980/src/declarations/blessed.d.ts#L3639)*

**Parameters:**

| Name | Type |
| ------ | ------ |
| `Optional` options | [InputOptions](../interfaces/_declarations_blessed_d_.widgets.inputoptions.md) |

**Returns:** [InputElement](../classes/_declarations_blessed_d_.widgets.inputelement.md)

___
<a id="layout"></a>

###  layout

▸ **layout**(options?: *[LayoutOptions](../interfaces/_declarations_blessed_d_.widgets.layoutoptions.md)*): [LayoutElement](../classes/_declarations_blessed_d_.widgets.layoutelement.md)

*Defined in [declarations/blessed.d.ts:3655](https://github.com/cancerberoSgx/accursed/blob/978b980/src/declarations/blessed.d.ts#L3655)*

**Parameters:**

| Name | Type |
| ------ | ------ |
| `Optional` options | [LayoutOptions](../interfaces/_declarations_blessed_d_.widgets.layoutoptions.md) |

**Returns:** [LayoutElement](../classes/_declarations_blessed_d_.widgets.layoutelement.md)

___
<a id="line"></a>

###  line

▸ **line**(options?: *[LineOptions](../interfaces/_declarations_blessed_d_.widgets.lineoptions.md)*): [LineElement](../classes/_declarations_blessed_d_.widgets.lineelement.md)

*Defined in [declarations/blessed.d.ts:3630](https://github.com/cancerberoSgx/accursed/blob/978b980/src/declarations/blessed.d.ts#L3630)*

**Parameters:**

| Name | Type |
| ------ | ------ |
| `Optional` options | [LineOptions](../interfaces/_declarations_blessed_d_.widgets.lineoptions.md) |

**Returns:** [LineElement](../classes/_declarations_blessed_d_.widgets.lineelement.md)

___
<a id="list"></a>

###  list

▸ **list**(options?: *[ListOptions](../interfaces/_declarations_blessed_d_.widgets.listoptions.md)<[ListElementStyle](../interfaces/_declarations_blessed_d_.widgets.listelementstyle.md)>*): [ListElement](../classes/_declarations_blessed_d_.widgets.listelement.md)

*Defined in [declarations/blessed.d.ts:3634](https://github.com/cancerberoSgx/accursed/blob/978b980/src/declarations/blessed.d.ts#L3634)*

**Parameters:**

| Name | Type |
| ------ | ------ |
| `Optional` options | [ListOptions](../interfaces/_declarations_blessed_d_.widgets.listoptions.md)<[ListElementStyle](../interfaces/_declarations_blessed_d_.widgets.listelementstyle.md)> |

**Returns:** [ListElement](../classes/_declarations_blessed_d_.widgets.listelement.md)

___
<a id="listbar"></a>

###  listbar

▸ **listbar**(options?: *[ListbarOptions](../interfaces/_declarations_blessed_d_.widgets.listbaroptions.md)*): [ListbarElement](../classes/_declarations_blessed_d_.widgets.listbarelement.md)

*Defined in [declarations/blessed.d.ts:3637](https://github.com/cancerberoSgx/accursed/blob/978b980/src/declarations/blessed.d.ts#L3637)*

**Parameters:**

| Name | Type |
| ------ | ------ |
| `Optional` options | [ListbarOptions](../interfaces/_declarations_blessed_d_.widgets.listbaroptions.md) |

**Returns:** [ListbarElement](../classes/_declarations_blessed_d_.widgets.listbarelement.md)

___
<a id="listtable"></a>

###  listtable

▸ **listtable**(options?: *[ListTableOptions](../interfaces/_declarations_blessed_d_.widgets.listtableoptions.md)*): [ListTableElement](../classes/_declarations_blessed_d_.widgets.listtableelement.md)

*Defined in [declarations/blessed.d.ts:3636](https://github.com/cancerberoSgx/accursed/blob/978b980/src/declarations/blessed.d.ts#L3636)*

**Parameters:**

| Name | Type |
| ------ | ------ |
| `Optional` options | [ListTableOptions](../interfaces/_declarations_blessed_d_.widgets.listtableoptions.md) |

**Returns:** [ListTableElement](../classes/_declarations_blessed_d_.widgets.listtableelement.md)

___
<a id="loading"></a>

###  loading

▸ **loading**(options?: *[LoadingOptions](../interfaces/_declarations_blessed_d_.widgets.loadingoptions.md)*): [LoadingElement](../classes/_declarations_blessed_d_.widgets.loadingelement.md)

*Defined in [declarations/blessed.d.ts:3650](https://github.com/cancerberoSgx/accursed/blob/978b980/src/declarations/blessed.d.ts#L3650)*

**Parameters:**

| Name | Type |
| ------ | ------ |
| `Optional` options | [LoadingOptions](../interfaces/_declarations_blessed_d_.widgets.loadingoptions.md) |

**Returns:** [LoadingElement](../classes/_declarations_blessed_d_.widgets.loadingelement.md)

___
<a id="log"></a>

###  log

▸ **log**(options?: *[LogOptions](../interfaces/_declarations_blessed_d_.widgets.logoptions.md)*): [Log](../classes/_declarations_blessed_d_.widgets.log.md)

*Defined in [declarations/blessed.d.ts:3651](https://github.com/cancerberoSgx/accursed/blob/978b980/src/declarations/blessed.d.ts#L3651)*

**Parameters:**

| Name | Type |
| ------ | ------ |
| `Optional` options | [LogOptions](../interfaces/_declarations_blessed_d_.widgets.logoptions.md) |

**Returns:** [Log](../classes/_declarations_blessed_d_.widgets.log.md)

___
<a id="message"></a>

###  message

▸ **message**(options?: *[MessageOptions](../interfaces/_declarations_blessed_d_.widgets.messageoptions.md)*): [MessageElement](../classes/_declarations_blessed_d_.widgets.messageelement.md)

*Defined in [declarations/blessed.d.ts:3649](https://github.com/cancerberoSgx/accursed/blob/978b980/src/declarations/blessed.d.ts#L3649)*

**Parameters:**

| Name | Type |
| ------ | ------ |
| `Optional` options | [MessageOptions](../interfaces/_declarations_blessed_d_.widgets.messageoptions.md) |

**Returns:** [MessageElement](../classes/_declarations_blessed_d_.widgets.messageelement.md)

___
<a id="program"></a>

###  program

▸ **program**(options?: *[IScreenOptions](../interfaces/_declarations_blessed_d_.widgets.iscreenoptions.md)*): [BlessedProgram](../classes/_declarations_blessedprogram_d_.blessedprogram.md)

*Defined in [declarations/blessed.d.ts:3653](https://github.com/cancerberoSgx/accursed/blob/978b980/src/declarations/blessed.d.ts#L3653)*

**Parameters:**

| Name | Type |
| ------ | ------ |
| `Optional` options | [IScreenOptions](../interfaces/_declarations_blessed_d_.widgets.iscreenoptions.md) |

**Returns:** [BlessedProgram](../classes/_declarations_blessedprogram_d_.blessedprogram.md)

___
<a id="progressbar"></a>

###  progressbar

▸ **progressbar**(options?: *[ProgressBarOptions](../interfaces/_declarations_blessed_d_.widgets.progressbaroptions.md)*): [ProgressBarElement](../classes/_declarations_blessed_d_.widgets.progressbarelement.md)

*Defined in [declarations/blessed.d.ts:3652](https://github.com/cancerberoSgx/accursed/blob/978b980/src/declarations/blessed.d.ts#L3652)*

**Parameters:**

| Name | Type |
| ------ | ------ |
| `Optional` options | [ProgressBarOptions](../interfaces/_declarations_blessed_d_.widgets.progressbaroptions.md) |

**Returns:** [ProgressBarElement](../classes/_declarations_blessed_d_.widgets.progressbarelement.md)

___
<a id="prompt"></a>

###  prompt

▸ **prompt**(options?: *[PromptOptions](../interfaces/_declarations_blessed_d_.widgets.promptoptions.md)*): [PromptElement](../classes/_declarations_blessed_d_.widgets.promptelement.md)

*Defined in [declarations/blessed.d.ts:3647](https://github.com/cancerberoSgx/accursed/blob/978b980/src/declarations/blessed.d.ts#L3647)*

**Parameters:**

| Name | Type |
| ------ | ------ |
| `Optional` options | [PromptOptions](../interfaces/_declarations_blessed_d_.widgets.promptoptions.md) |

**Returns:** [PromptElement](../classes/_declarations_blessed_d_.widgets.promptelement.md)

___
<a id="question"></a>

###  question

▸ **question**(options?: *[QuestionOptions](../interfaces/_declarations_blessed_d_.widgets.questionoptions.md)*): [QuestionElement](../classes/_declarations_blessed_d_.widgets.questionelement.md)

*Defined in [declarations/blessed.d.ts:3648](https://github.com/cancerberoSgx/accursed/blob/978b980/src/declarations/blessed.d.ts#L3648)*

**Parameters:**

| Name | Type |
| ------ | ------ |
| `Optional` options | [QuestionOptions](../interfaces/_declarations_blessed_d_.widgets.questionoptions.md) |

**Returns:** [QuestionElement](../classes/_declarations_blessed_d_.widgets.questionelement.md)

___
<a id="radiobutton"></a>

###  radiobutton

▸ **radiobutton**(options?: *[RadioButtonOptions](../interfaces/_declarations_blessed_d_.widgets.radiobuttonoptions.md)*): [RadioButtonElement](../classes/_declarations_blessed_d_.widgets.radiobuttonelement.md)

*Defined in [declarations/blessed.d.ts:3645](https://github.com/cancerberoSgx/accursed/blob/978b980/src/declarations/blessed.d.ts#L3645)*

**Parameters:**

| Name | Type |
| ------ | ------ |
| `Optional` options | [RadioButtonOptions](../interfaces/_declarations_blessed_d_.widgets.radiobuttonoptions.md) |

**Returns:** [RadioButtonElement](../classes/_declarations_blessed_d_.widgets.radiobuttonelement.md)

___
<a id="radioset"></a>

###  radioset

▸ **radioset**(options?: *[RadioSetOptions](../interfaces/_declarations_blessed_d_.widgets.radiosetoptions.md)*): [RadioSetElement](../classes/_declarations_blessed_d_.widgets.radiosetelement.md)

*Defined in [declarations/blessed.d.ts:3644](https://github.com/cancerberoSgx/accursed/blob/978b980/src/declarations/blessed.d.ts#L3644)*

**Parameters:**

| Name | Type |
| ------ | ------ |
| `Optional` options | [RadioSetOptions](../interfaces/_declarations_blessed_d_.widgets.radiosetoptions.md) |

**Returns:** [RadioSetElement](../classes/_declarations_blessed_d_.widgets.radiosetelement.md)

___
<a id="screen"></a>

###  screen

▸ **screen**(options?: *[IScreenOptions](../interfaces/_declarations_blessed_d_.widgets.iscreenoptions.md)*): [Screen](../classes/_declarations_blessed_d_.widgets.screen.md)

*Defined in [declarations/blessed.d.ts:3627](https://github.com/cancerberoSgx/accursed/blob/978b980/src/declarations/blessed.d.ts#L3627)*

*__inheritdoc__*: 

**Parameters:**

| Name | Type |
| ------ | ------ |
| `Optional` options | [IScreenOptions](../interfaces/_declarations_blessed_d_.widgets.iscreenoptions.md) |

**Returns:** [Screen](../classes/_declarations_blessed_d_.widgets.screen.md)

___
<a id="scrollablebox"></a>

###  scrollablebox

▸ **scrollablebox**(options?: *[BoxOptions](../interfaces/_declarations_blessed_d_.widgets.boxoptions.md)*): [BoxElement](../classes/_declarations_blessed_d_.widgets.boxelement.md)

*Defined in [declarations/blessed.d.ts:3631](https://github.com/cancerberoSgx/accursed/blob/978b980/src/declarations/blessed.d.ts#L3631)*

**Parameters:**

| Name | Type |
| ------ | ------ |
| `Optional` options | [BoxOptions](../interfaces/_declarations_blessed_d_.widgets.boxoptions.md) |

**Returns:** [BoxElement](../classes/_declarations_blessed_d_.widgets.boxelement.md)

___
<a id="scrollabletext"></a>

###  scrollabletext

▸ **scrollabletext**(options?: *[BoxOptions](../interfaces/_declarations_blessed_d_.widgets.boxoptions.md)*): [BoxElement](../classes/_declarations_blessed_d_.widgets.boxelement.md)

*Defined in [declarations/blessed.d.ts:3632](https://github.com/cancerberoSgx/accursed/blob/978b980/src/declarations/blessed.d.ts#L3632)*

**Parameters:**

| Name | Type |
| ------ | ------ |
| `Optional` options | [BoxOptions](../interfaces/_declarations_blessed_d_.widgets.boxoptions.md) |

**Returns:** [BoxElement](../classes/_declarations_blessed_d_.widgets.boxelement.md)

___
<a id="table"></a>

###  table

▸ **table**(options?: *[TableOptions](../interfaces/_declarations_blessed_d_.widgets.tableoptions.md)*): [TableElement](../classes/_declarations_blessed_d_.widgets.tableelement.md)

*Defined in [declarations/blessed.d.ts:3646](https://github.com/cancerberoSgx/accursed/blob/978b980/src/declarations/blessed.d.ts#L3646)*

**Parameters:**

| Name | Type |
| ------ | ------ |
| `Optional` options | [TableOptions](../interfaces/_declarations_blessed_d_.widgets.tableoptions.md) |

**Returns:** [TableElement](../classes/_declarations_blessed_d_.widgets.tableelement.md)

___
<a id="terminal"></a>

###  terminal

▸ **terminal**(options?: *[TerminalOptions](../interfaces/_declarations_blessed_d_.widgets.terminaloptions.md)*): [TerminalElement](../classes/_declarations_blessed_d_.widgets.terminalelement.md)

*Defined in [declarations/blessed.d.ts:3654](https://github.com/cancerberoSgx/accursed/blob/978b980/src/declarations/blessed.d.ts#L3654)*

**Parameters:**

| Name | Type |
| ------ | ------ |
| `Optional` options | [TerminalOptions](../interfaces/_declarations_blessed_d_.widgets.terminaloptions.md) |

**Returns:** [TerminalElement](../classes/_declarations_blessed_d_.widgets.terminalelement.md)

___
<a id="text"></a>

###  text

▸ **text**(options?: *[TextOptions](../interfaces/_declarations_blessed_d_.widgets.textoptions.md)*): [TextElement](../classes/_declarations_blessed_d_.widgets.textelement.md)

*Defined in [declarations/blessed.d.ts:3629](https://github.com/cancerberoSgx/accursed/blob/978b980/src/declarations/blessed.d.ts#L3629)*

**Parameters:**

| Name | Type |
| ------ | ------ |
| `Optional` options | [TextOptions](../interfaces/_declarations_blessed_d_.widgets.textoptions.md) |

**Returns:** [TextElement](../classes/_declarations_blessed_d_.widgets.textelement.md)

___
<a id="textarea"></a>

###  textarea

▸ **textarea**(options?: *[TextareaOptions](../interfaces/_declarations_blessed_d_.widgets.textareaoptions.md)*): [TextareaElement](../classes/_declarations_blessed_d_.widgets.textareaelement.md)

*Defined in [declarations/blessed.d.ts:3640](https://github.com/cancerberoSgx/accursed/blob/978b980/src/declarations/blessed.d.ts#L3640)*

**Parameters:**

| Name | Type |
| ------ | ------ |
| `Optional` options | [TextareaOptions](../interfaces/_declarations_blessed_d_.widgets.textareaoptions.md) |

**Returns:** [TextareaElement](../classes/_declarations_blessed_d_.widgets.textareaelement.md)

___
<a id="textbox"></a>

###  textbox

▸ **textbox**(options?: *[TextboxOptions](../interfaces/_declarations_blessed_d_.widgets.textboxoptions.md)*): [TextboxElement](../classes/_declarations_blessed_d_.widgets.textboxelement.md)

*Defined in [declarations/blessed.d.ts:3641](https://github.com/cancerberoSgx/accursed/blob/978b980/src/declarations/blessed.d.ts#L3641)*

**Parameters:**

| Name | Type |
| ------ | ------ |
| `Optional` options | [TextboxOptions](../interfaces/_declarations_blessed_d_.widgets.textboxoptions.md) |

**Returns:** [TextboxElement](../classes/_declarations_blessed_d_.widgets.textboxelement.md)

___

