[accursed](../README.md) › [Globals](../globals.md) › ["declarations/blessed.d"](_declarations_blessed_d_.md)

# External module: "declarations/blessed.d"

## Index

### Modules

* [Widgets](_declarations_blessed_d_.widgets.md)
* [widget](_declarations_blessed_d_.widget.md)

### Interfaces

* [Helpers](../interfaces/_declarations_blessed_d_.helpers.md)
* [Unicode](../interfaces/_declarations_blessed_d_.unicode.md)

### Type aliases

* [ColorName](_declarations_blessed_d_.md#colorname)
* [ColorRgb](_declarations_blessed_d_.md#colorrgb)

### Variables

* [colors](_declarations_blessed_d_.md#const-colors)
* [helpers](_declarations_blessed_d_.md#const-helpers)
* [unicode](_declarations_blessed_d_.md#const-unicode)

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

## Type aliases

###  ColorName

Ƭ **ColorName**: *"black" | "red" | "green" | "yellow" | "blue" | "magenta" | "cyan" | "white"*

*Defined in [declarations/blessed.d.ts:3592](https://github.com/cancerberoSgx/accursed/blob/5b2518e/src/declarations/blessed.d.ts#L3592)*

___

###  ColorRgb

Ƭ **ColorRgb**: *[number, number, number]*

*Defined in [declarations/blessed.d.ts:3593](https://github.com/cancerberoSgx/accursed/blob/5b2518e/src/declarations/blessed.d.ts#L3593)*

## Variables

### `Const` colors

• **colors**: *object*

*Defined in [declarations/blessed.d.ts:3594](https://github.com/cancerberoSgx/accursed/blob/5b2518e/src/declarations/blessed.d.ts#L3594)*

#### Type declaration:

* **colorNames**(): *object*

  * **black**: *0*

  * **blue**: *4*

  * **brightblack**: *8*

  * **brightblue**: *12*

  * **brightcyan**: *14*

  * **brightgray**: *7*

  * **brightgreen**: *10*

  * **brightgrey**: *7*

  * **brightmagenta**: *13*

  * **brightred**: *9*

  * **brightwhite**: *15*

  * **brightyellow**: *11*

  * **cyan**: *6*

  * **gray**: *8*

  * **green**: *2*

  * **grey**: *8*

  * **lightblack**: *8*

  * **lightblue**: *12*

  * **lightcyan**: *14*

  * **lightgray**: *7*

  * **lightgreen**: *10*

  * **lightgrey**: *7*

  * **lightmagenta**: *13*

  * **lightred**: *9*

  * **lightwhite**: *15*

  * **lightyellow**: *11*

  * **magenta**: *5*

  * **red**: *1*

  * **white**: *7*

  * **yellow**: *3*

* **ncolors**(): *object*

* **RGBToHex**(`r`: number, `g`: number, `b`: number): *string*

* **blend**(`attr`: number, `attr2?`: number, `alpha?`: number): *number*

* **ccolors**(): *number[]*

* **colors**(): *number[]*

* **convert**(`color`: [Color](_declarations_blessed_d_.widgets.md#color)): *number*

* **hexToRGB**(`hex`: string): *[ColorRgb](_declarations_blessed_d_.md#colorrgb)*

* **match**(`r1`: [Color](_declarations_blessed_d_.widgets.md#color) | [ColorRgb](_declarations_blessed_d_.md#colorrgb), `g1?`: number, `b1?`: number): *number*

* **mixColors**(`c1`: number, `c2`: number, `alpha`: number): *number*

___

### `Const` helpers

• **helpers**: *[Helpers](../interfaces/_declarations_blessed_d_.helpers.md)*

*Defined in [declarations/blessed.d.ts:3742](https://github.com/cancerberoSgx/accursed/blob/5b2518e/src/declarations/blessed.d.ts#L3742)*

___

### `Const` unicode

• **unicode**: *[Unicode](../interfaces/_declarations_blessed_d_.unicode.md)*

*Defined in [declarations/blessed.d.ts:3674](https://github.com/cancerberoSgx/accursed/blob/5b2518e/src/declarations/blessed.d.ts#L3674)*

## Functions

###  bigtext

▸ **bigtext**(`options?`: [BigTextOptions](../interfaces/_declarations_blessed_d_.widgets.bigtextoptions.md)): *[BigTextElement](../classes/_declarations_blessed_d_.widgets.bigtextelement.md)*

*Defined in [declarations/blessed.d.ts:3567](https://github.com/cancerberoSgx/accursed/blob/5b2518e/src/declarations/blessed.d.ts#L3567)*

**Parameters:**

Name | Type |
------ | ------ |
`options?` | [BigTextOptions](../interfaces/_declarations_blessed_d_.widgets.bigtextoptions.md) |

**Returns:** *[BigTextElement](../classes/_declarations_blessed_d_.widgets.bigtextelement.md)*

___

###  box

▸ **box**(`options?`: [BoxOptions](../interfaces/_declarations_blessed_d_.widgets.boxoptions.md)): *[BoxElement](../classes/_declarations_blessed_d_.widgets.boxelement.md)*

*Defined in [declarations/blessed.d.ts:3562](https://github.com/cancerberoSgx/accursed/blob/5b2518e/src/declarations/blessed.d.ts#L3562)*

**Parameters:**

Name | Type |
------ | ------ |
`options?` | [BoxOptions](../interfaces/_declarations_blessed_d_.widgets.boxoptions.md) |

**Returns:** *[BoxElement](../classes/_declarations_blessed_d_.widgets.boxelement.md)*

___

###  button

▸ **button**(`options?`: [ButtonOptions](../interfaces/_declarations_blessed_d_.widgets.buttonoptions.md)): *[ButtonElement](../classes/_declarations_blessed_d_.widgets.buttonelement.md)*

*Defined in [declarations/blessed.d.ts:3576](https://github.com/cancerberoSgx/accursed/blob/5b2518e/src/declarations/blessed.d.ts#L3576)*

**Parameters:**

Name | Type |
------ | ------ |
`options?` | [ButtonOptions](../interfaces/_declarations_blessed_d_.widgets.buttonoptions.md) |

**Returns:** *[ButtonElement](../classes/_declarations_blessed_d_.widgets.buttonelement.md)*

___

###  checkbox

▸ **checkbox**(`options?`: [CheckboxOptions](../interfaces/_declarations_blessed_d_.widgets.checkboxoptions.md)): *[CheckboxElement](../classes/_declarations_blessed_d_.widgets.checkboxelement.md)*

*Defined in [declarations/blessed.d.ts:3577](https://github.com/cancerberoSgx/accursed/blob/5b2518e/src/declarations/blessed.d.ts#L3577)*

**Parameters:**

Name | Type |
------ | ------ |
`options?` | [CheckboxOptions](../interfaces/_declarations_blessed_d_.widgets.checkboxoptions.md) |

**Returns:** *[CheckboxElement](../classes/_declarations_blessed_d_.widgets.checkboxelement.md)*

___

###  escape

▸ **escape**(`item`: any): *any*

*Defined in [declarations/blessed.d.ts:3590](https://github.com/cancerberoSgx/accursed/blob/5b2518e/src/declarations/blessed.d.ts#L3590)*

**Parameters:**

Name | Type |
------ | ------ |
`item` | any |

**Returns:** *any*

___

###  filemanager

▸ **filemanager**(`options?`: [FileManagerOptions](../interfaces/_declarations_blessed_d_.widgets.filemanageroptions.md)): *[FileManagerElement](../classes/_declarations_blessed_d_.widgets.filemanagerelement.md)*

*Defined in [declarations/blessed.d.ts:3569](https://github.com/cancerberoSgx/accursed/blob/5b2518e/src/declarations/blessed.d.ts#L3569)*

**Parameters:**

Name | Type |
------ | ------ |
`options?` | [FileManagerOptions](../interfaces/_declarations_blessed_d_.widgets.filemanageroptions.md) |

**Returns:** *[FileManagerElement](../classes/_declarations_blessed_d_.widgets.filemanagerelement.md)*

___

###  form

▸ **form**<**TFormData**>(`options?`: [FormOptions](../interfaces/_declarations_blessed_d_.widgets.formoptions.md)): *[FormElement](../classes/_declarations_blessed_d_.widgets.formelement.md)‹TFormData›*

*Defined in [declarations/blessed.d.ts:3572](https://github.com/cancerberoSgx/accursed/blob/5b2518e/src/declarations/blessed.d.ts#L3572)*

**Type parameters:**

▪ **TFormData**

**Parameters:**

Name | Type |
------ | ------ |
`options?` | [FormOptions](../interfaces/_declarations_blessed_d_.widgets.formoptions.md) |

**Returns:** *[FormElement](../classes/_declarations_blessed_d_.widgets.formelement.md)‹TFormData›*

___

###  input

▸ **input**(`options?`: [InputOptions](../interfaces/_declarations_blessed_d_.widgets.inputoptions.md)): *[InputElement](../classes/_declarations_blessed_d_.widgets.inputelement.md)*

*Defined in [declarations/blessed.d.ts:3573](https://github.com/cancerberoSgx/accursed/blob/5b2518e/src/declarations/blessed.d.ts#L3573)*

**Parameters:**

Name | Type |
------ | ------ |
`options?` | [InputOptions](../interfaces/_declarations_blessed_d_.widgets.inputoptions.md) |

**Returns:** *[InputElement](../classes/_declarations_blessed_d_.widgets.inputelement.md)*

___

###  layout

▸ **layout**(`options?`: [LayoutOptions](../interfaces/_declarations_blessed_d_.widgets.layoutoptions.md)): *[LayoutElement](../classes/_declarations_blessed_d_.widgets.layoutelement.md)*

*Defined in [declarations/blessed.d.ts:3589](https://github.com/cancerberoSgx/accursed/blob/5b2518e/src/declarations/blessed.d.ts#L3589)*

**Parameters:**

Name | Type |
------ | ------ |
`options?` | [LayoutOptions](../interfaces/_declarations_blessed_d_.widgets.layoutoptions.md) |

**Returns:** *[LayoutElement](../classes/_declarations_blessed_d_.widgets.layoutelement.md)*

___

###  line

▸ **line**(`options?`: [LineOptions](../interfaces/_declarations_blessed_d_.widgets.lineoptions.md)): *[LineElement](../classes/_declarations_blessed_d_.widgets.lineelement.md)*

*Defined in [declarations/blessed.d.ts:3564](https://github.com/cancerberoSgx/accursed/blob/5b2518e/src/declarations/blessed.d.ts#L3564)*

**Parameters:**

Name | Type |
------ | ------ |
`options?` | [LineOptions](../interfaces/_declarations_blessed_d_.widgets.lineoptions.md) |

**Returns:** *[LineElement](../classes/_declarations_blessed_d_.widgets.lineelement.md)*

___

###  list

▸ **list**(`options?`: [ListOptions](../interfaces/_declarations_blessed_d_.widgets.listoptions.md)‹[ListElementStyle](../interfaces/_declarations_blessed_d_.widgets.listelementstyle.md)›): *[ListElement](../classes/_declarations_blessed_d_.widgets.listelement.md)*

*Defined in [declarations/blessed.d.ts:3568](https://github.com/cancerberoSgx/accursed/blob/5b2518e/src/declarations/blessed.d.ts#L3568)*

**Parameters:**

Name | Type |
------ | ------ |
`options?` | [ListOptions](../interfaces/_declarations_blessed_d_.widgets.listoptions.md)‹[ListElementStyle](../interfaces/_declarations_blessed_d_.widgets.listelementstyle.md)› |

**Returns:** *[ListElement](../classes/_declarations_blessed_d_.widgets.listelement.md)*

___

###  listbar

▸ **listbar**(`options?`: [ListbarOptions](../interfaces/_declarations_blessed_d_.widgets.listbaroptions.md)): *[ListbarElement](../classes/_declarations_blessed_d_.widgets.listbarelement.md)*

*Defined in [declarations/blessed.d.ts:3571](https://github.com/cancerberoSgx/accursed/blob/5b2518e/src/declarations/blessed.d.ts#L3571)*

**Parameters:**

Name | Type |
------ | ------ |
`options?` | [ListbarOptions](../interfaces/_declarations_blessed_d_.widgets.listbaroptions.md) |

**Returns:** *[ListbarElement](../classes/_declarations_blessed_d_.widgets.listbarelement.md)*

___

###  listtable

▸ **listtable**(`options?`: [ListTableOptions](../interfaces/_declarations_blessed_d_.widgets.listtableoptions.md)): *[ListTableElement](../classes/_declarations_blessed_d_.widgets.listtableelement.md)*

*Defined in [declarations/blessed.d.ts:3570](https://github.com/cancerberoSgx/accursed/blob/5b2518e/src/declarations/blessed.d.ts#L3570)*

**Parameters:**

Name | Type |
------ | ------ |
`options?` | [ListTableOptions](../interfaces/_declarations_blessed_d_.widgets.listtableoptions.md) |

**Returns:** *[ListTableElement](../classes/_declarations_blessed_d_.widgets.listtableelement.md)*

___

###  loading

▸ **loading**(`options?`: [LoadingOptions](../interfaces/_declarations_blessed_d_.widgets.loadingoptions.md)): *[LoadingElement](../classes/_declarations_blessed_d_.widgets.loadingelement.md)*

*Defined in [declarations/blessed.d.ts:3584](https://github.com/cancerberoSgx/accursed/blob/5b2518e/src/declarations/blessed.d.ts#L3584)*

**Parameters:**

Name | Type |
------ | ------ |
`options?` | [LoadingOptions](../interfaces/_declarations_blessed_d_.widgets.loadingoptions.md) |

**Returns:** *[LoadingElement](../classes/_declarations_blessed_d_.widgets.loadingelement.md)*

___

###  log

▸ **log**(`options?`: [LogOptions](../interfaces/_declarations_blessed_d_.widgets.logoptions.md)): *[Log](../classes/_declarations_blessed_d_.widgets.log.md)*

*Defined in [declarations/blessed.d.ts:3585](https://github.com/cancerberoSgx/accursed/blob/5b2518e/src/declarations/blessed.d.ts#L3585)*

**Parameters:**

Name | Type |
------ | ------ |
`options?` | [LogOptions](../interfaces/_declarations_blessed_d_.widgets.logoptions.md) |

**Returns:** *[Log](../classes/_declarations_blessed_d_.widgets.log.md)*

___

###  message

▸ **message**(`options?`: [MessageOptions](../interfaces/_declarations_blessed_d_.widgets.messageoptions.md)): *[MessageElement](../classes/_declarations_blessed_d_.widgets.messageelement.md)*

*Defined in [declarations/blessed.d.ts:3583](https://github.com/cancerberoSgx/accursed/blob/5b2518e/src/declarations/blessed.d.ts#L3583)*

**Parameters:**

Name | Type |
------ | ------ |
`options?` | [MessageOptions](../interfaces/_declarations_blessed_d_.widgets.messageoptions.md) |

**Returns:** *[MessageElement](../classes/_declarations_blessed_d_.widgets.messageelement.md)*

___

###  program

▸ **program**(`options?`: [IScreenOptions](../interfaces/_declarations_blessed_d_.widgets.iscreenoptions.md)): *[BlessedProgram](../classes/_declarations_blessedprogram_d_.blessedprogram.md)*

*Defined in [declarations/blessed.d.ts:3587](https://github.com/cancerberoSgx/accursed/blob/5b2518e/src/declarations/blessed.d.ts#L3587)*

**Parameters:**

Name | Type |
------ | ------ |
`options?` | [IScreenOptions](../interfaces/_declarations_blessed_d_.widgets.iscreenoptions.md) |

**Returns:** *[BlessedProgram](../classes/_declarations_blessedprogram_d_.blessedprogram.md)*

___

###  progressbar

▸ **progressbar**(`options?`: [ProgressBarOptions](../interfaces/_declarations_blessed_d_.widgets.progressbaroptions.md)): *[ProgressBarElement](../classes/_declarations_blessed_d_.widgets.progressbarelement.md)*

*Defined in [declarations/blessed.d.ts:3586](https://github.com/cancerberoSgx/accursed/blob/5b2518e/src/declarations/blessed.d.ts#L3586)*

**Parameters:**

Name | Type |
------ | ------ |
`options?` | [ProgressBarOptions](../interfaces/_declarations_blessed_d_.widgets.progressbaroptions.md) |

**Returns:** *[ProgressBarElement](../classes/_declarations_blessed_d_.widgets.progressbarelement.md)*

___

###  prompt

▸ **prompt**(`options?`: [PromptOptions](../interfaces/_declarations_blessed_d_.widgets.promptoptions.md)): *[PromptElement](../classes/_declarations_blessed_d_.widgets.promptelement.md)*

*Defined in [declarations/blessed.d.ts:3581](https://github.com/cancerberoSgx/accursed/blob/5b2518e/src/declarations/blessed.d.ts#L3581)*

**Parameters:**

Name | Type |
------ | ------ |
`options?` | [PromptOptions](../interfaces/_declarations_blessed_d_.widgets.promptoptions.md) |

**Returns:** *[PromptElement](../classes/_declarations_blessed_d_.widgets.promptelement.md)*

___

###  question

▸ **question**(`options?`: [QuestionOptions](../interfaces/_declarations_blessed_d_.widgets.questionoptions.md)): *[QuestionElement](../classes/_declarations_blessed_d_.widgets.questionelement.md)*

*Defined in [declarations/blessed.d.ts:3582](https://github.com/cancerberoSgx/accursed/blob/5b2518e/src/declarations/blessed.d.ts#L3582)*

**Parameters:**

Name | Type |
------ | ------ |
`options?` | [QuestionOptions](../interfaces/_declarations_blessed_d_.widgets.questionoptions.md) |

**Returns:** *[QuestionElement](../classes/_declarations_blessed_d_.widgets.questionelement.md)*

___

###  radiobutton

▸ **radiobutton**(`options?`: [RadioButtonOptions](../interfaces/_declarations_blessed_d_.widgets.radiobuttonoptions.md)): *[RadioButtonElement](../classes/_declarations_blessed_d_.widgets.radiobuttonelement.md)*

*Defined in [declarations/blessed.d.ts:3579](https://github.com/cancerberoSgx/accursed/blob/5b2518e/src/declarations/blessed.d.ts#L3579)*

**Parameters:**

Name | Type |
------ | ------ |
`options?` | [RadioButtonOptions](../interfaces/_declarations_blessed_d_.widgets.radiobuttonoptions.md) |

**Returns:** *[RadioButtonElement](../classes/_declarations_blessed_d_.widgets.radiobuttonelement.md)*

___

###  radioset

▸ **radioset**(`options?`: [RadioSetOptions](../interfaces/_declarations_blessed_d_.widgets.radiosetoptions.md)): *[RadioSetElement](../classes/_declarations_blessed_d_.widgets.radiosetelement.md)*

*Defined in [declarations/blessed.d.ts:3578](https://github.com/cancerberoSgx/accursed/blob/5b2518e/src/declarations/blessed.d.ts#L3578)*

**Parameters:**

Name | Type |
------ | ------ |
`options?` | [RadioSetOptions](../interfaces/_declarations_blessed_d_.widgets.radiosetoptions.md) |

**Returns:** *[RadioSetElement](../classes/_declarations_blessed_d_.widgets.radiosetelement.md)*

___

###  screen

▸ **screen**(`options?`: [IScreenOptions](../interfaces/_declarations_blessed_d_.widgets.iscreenoptions.md)): *[Screen](../classes/_declarations_blessed_d_.widgets.screen.md)*

*Defined in [declarations/blessed.d.ts:3561](https://github.com/cancerberoSgx/accursed/blob/5b2518e/src/declarations/blessed.d.ts#L3561)*

**`inheritdoc`** 

**Parameters:**

Name | Type |
------ | ------ |
`options?` | [IScreenOptions](../interfaces/_declarations_blessed_d_.widgets.iscreenoptions.md) |

**Returns:** *[Screen](../classes/_declarations_blessed_d_.widgets.screen.md)*

___

###  scrollablebox

▸ **scrollablebox**(`options?`: [BoxOptions](../interfaces/_declarations_blessed_d_.widgets.boxoptions.md)): *[BoxElement](../classes/_declarations_blessed_d_.widgets.boxelement.md)*

*Defined in [declarations/blessed.d.ts:3565](https://github.com/cancerberoSgx/accursed/blob/5b2518e/src/declarations/blessed.d.ts#L3565)*

**Parameters:**

Name | Type |
------ | ------ |
`options?` | [BoxOptions](../interfaces/_declarations_blessed_d_.widgets.boxoptions.md) |

**Returns:** *[BoxElement](../classes/_declarations_blessed_d_.widgets.boxelement.md)*

___

###  scrollabletext

▸ **scrollabletext**(`options?`: [BoxOptions](../interfaces/_declarations_blessed_d_.widgets.boxoptions.md)): *[BoxElement](../classes/_declarations_blessed_d_.widgets.boxelement.md)*

*Defined in [declarations/blessed.d.ts:3566](https://github.com/cancerberoSgx/accursed/blob/5b2518e/src/declarations/blessed.d.ts#L3566)*

**Parameters:**

Name | Type |
------ | ------ |
`options?` | [BoxOptions](../interfaces/_declarations_blessed_d_.widgets.boxoptions.md) |

**Returns:** *[BoxElement](../classes/_declarations_blessed_d_.widgets.boxelement.md)*

___

###  table

▸ **table**(`options?`: [TableOptions](../interfaces/_declarations_blessed_d_.widgets.tableoptions.md)): *[TableElement](../classes/_declarations_blessed_d_.widgets.tableelement.md)*

*Defined in [declarations/blessed.d.ts:3580](https://github.com/cancerberoSgx/accursed/blob/5b2518e/src/declarations/blessed.d.ts#L3580)*

**Parameters:**

Name | Type |
------ | ------ |
`options?` | [TableOptions](../interfaces/_declarations_blessed_d_.widgets.tableoptions.md) |

**Returns:** *[TableElement](../classes/_declarations_blessed_d_.widgets.tableelement.md)*

___

###  terminal

▸ **terminal**(`options?`: [TerminalOptions](../interfaces/_declarations_blessed_d_.widgets.terminaloptions.md)): *[TerminalElement](../classes/_declarations_blessed_d_.widgets.terminalelement.md)*

*Defined in [declarations/blessed.d.ts:3588](https://github.com/cancerberoSgx/accursed/blob/5b2518e/src/declarations/blessed.d.ts#L3588)*

**Parameters:**

Name | Type |
------ | ------ |
`options?` | [TerminalOptions](../interfaces/_declarations_blessed_d_.widgets.terminaloptions.md) |

**Returns:** *[TerminalElement](../classes/_declarations_blessed_d_.widgets.terminalelement.md)*

___

###  text

▸ **text**(`options?`: [TextOptions](../interfaces/_declarations_blessed_d_.widgets.textoptions.md)): *[TextElement](../classes/_declarations_blessed_d_.widgets.textelement.md)*

*Defined in [declarations/blessed.d.ts:3563](https://github.com/cancerberoSgx/accursed/blob/5b2518e/src/declarations/blessed.d.ts#L3563)*

**Parameters:**

Name | Type |
------ | ------ |
`options?` | [TextOptions](../interfaces/_declarations_blessed_d_.widgets.textoptions.md) |

**Returns:** *[TextElement](../classes/_declarations_blessed_d_.widgets.textelement.md)*

___

###  textarea

▸ **textarea**(`options?`: [TextareaOptions](../interfaces/_declarations_blessed_d_.widgets.textareaoptions.md)): *[TextareaElement](../classes/_declarations_blessed_d_.widgets.textareaelement.md)*

*Defined in [declarations/blessed.d.ts:3574](https://github.com/cancerberoSgx/accursed/blob/5b2518e/src/declarations/blessed.d.ts#L3574)*

**Parameters:**

Name | Type |
------ | ------ |
`options?` | [TextareaOptions](../interfaces/_declarations_blessed_d_.widgets.textareaoptions.md) |

**Returns:** *[TextareaElement](../classes/_declarations_blessed_d_.widgets.textareaelement.md)*

___

###  textbox

▸ **textbox**(`options?`: [TextboxOptions](../interfaces/_declarations_blessed_d_.widgets.textboxoptions.md)): *[TextboxElement](../classes/_declarations_blessed_d_.widgets.textboxelement.md)*

*Defined in [declarations/blessed.d.ts:3575](https://github.com/cancerberoSgx/accursed/blob/5b2518e/src/declarations/blessed.d.ts#L3575)*

**Parameters:**

Name | Type |
------ | ------ |
`options?` | [TextboxOptions](../interfaces/_declarations_blessed_d_.widgets.textboxoptions.md) |

**Returns:** *[TextboxElement](../classes/_declarations_blessed_d_.widgets.textboxelement.md)*
