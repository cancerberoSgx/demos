[accursed](../README.md) › [Globals](../globals.md) › ["editorWidget/editorWidget"](_editorwidget_editorwidget_.md)

# External module: "editorWidget/editorWidget"

## Index

### Modules

* [__global](_editorwidget_editorwidget_.__global.md)

### Interfaces

* [CreateEditorOptions](../interfaces/_editorwidget_editorwidget_.createeditoroptions.md)

### Functions

* [buildEditor](_editorwidget_editorwidget_.md#buildeditor)
* [createEditor](_editorwidget_editorwidget_.md#createeditor)
* [createEditorAsync](_editorwidget_editorwidget_.md#createeditorasync)
* [installFocusAndExitKeysForEditorWidget](_editorwidget_editorwidget_.md#installfocusandexitkeysforeditorwidget)

### Object literals

* [editorBindings](_editorwidget_editorwidget_.md#const-editorbindings)
* [editorGutterStyle](_editorwidget_editorwidget_.md#const-editorgutterstyle)
* [editorPerf](_editorwidget_editorwidget_.md#const-editorperf)
* [editorStyle](_editorwidget_editorwidget_.md#const-editorstyle)

## Functions

###  buildEditor

▸ **buildEditor**(`options`: [EditorOptions](../interfaces/_editorwidget_editorwidgettypes_.editoroptions.md) & object): *any*

*Defined in [editorWidget/editorWidget.tsx:23](https://github.com/cancerberoSgx/accursed/blob/468bf3c/src/editorWidget/editorWidget.tsx#L23)*

Builds editor widget by calling its constructor as it is, without any tricks for auto-highlighting, focus
or bypass the required parent option. There's only a workaround to load option.text as string
[[options.text]]  but just that.

Passing [[options.parent]] is mandatory here.

For a higher level creator, see [createEditor](_editorwidget_editorwidget_.md#createeditor) which allows to create the widget without passing
[[options.parent]] and will auto-highlight and focus the editor at startup.

**Parameters:**

Name | Type |
------ | ------ |
`options` | [EditorOptions](../interfaces/_editorwidget_editorwidgettypes_.editoroptions.md) & object |

**Returns:** *any*

___

###  createEditor

▸ **createEditor**(`options`: [CreateEditorOptions](../interfaces/_editorwidget_editorwidget_.createeditoroptions.md)): *[BoxElement](../classes/_declarations_blessed_d_.widgets.boxelement.md)*

*Defined in [editorWidget/editorWidget.tsx:60](https://github.com/cancerberoSgx/accursed/blob/468bf3c/src/editorWidget/editorWidget.tsx#L60)*

This creator function is a high level version of [buildEditor](_editorwidget_editorwidget_.md#buildeditor) that doesn't require to pass `parent`.
What it does is to create a box reference and after it renders it will use buildEditor to instantiate the
editor-widget.

**Parameters:**

Name | Type |
------ | ------ |
`options` | [CreateEditorOptions](../interfaces/_editorwidget_editorwidget_.createeditoroptions.md) |

**Returns:** *[BoxElement](../classes/_declarations_blessed_d_.widgets.boxelement.md)*

the editor's parent BoxElement

___

###  createEditorAsync

▸ **createEditorAsync**(`options`: [CreateEditorOptions](../interfaces/_editorwidget_editorwidget_.createeditoroptions.md)): *Promise‹[IEditor](../interfaces/_editorwidget_editorwidgettypes_.ieditor.md)›*

*Defined in [editorWidget/editorWidget.tsx:85](https://github.com/cancerberoSgx/accursed/blob/468bf3c/src/editorWidget/editorWidget.tsx#L85)*

This creator function is a high level version of [buildEditor](_editorwidget_editorwidget_.md#buildeditor) that doesn't require to pass `parent`.
What it does is to create a box reference and after it renders it will use buildEditor to instantiate the
editor-widget.

**Parameters:**

Name | Type |
------ | ------ |
`options` | [CreateEditorOptions](../interfaces/_editorwidget_editorwidget_.createeditoroptions.md) |

**Returns:** *Promise‹[IEditor](../interfaces/_editorwidget_editorwidgettypes_.ieditor.md)›*

___

###  installFocusAndExitKeysForEditorWidget

▸ **installFocusAndExitKeysForEditorWidget**(`screen`: [Screen](../classes/_declarations_blessed_d_.widgets.screen.md)): *void*

*Defined in [editorWidget/editorWidget.tsx:217](https://github.com/cancerberoSgx/accursed/blob/468bf3c/src/editorWidget/editorWidget.tsx#L217)*

Install exit keys in given screen, considering EditorWidget. tab/S-tab will switch focus only if current
focused element is not a EditorWidget. If focused element is EditorWidget, 'C-S-tab', 'escape' can be used
to focus next element. Finally, exit keys 'C-q', 'q', 'Q', 'C-c' can be used, if current focused element is
not a EditorWidget and it will ask the user to confirm the action.

**Parameters:**

Name | Type |
------ | ------ |
`screen` | [Screen](../classes/_declarations_blessed_d_.widgets.screen.md) |

**Returns:** *void*

## Object literals

### `Const` editorBindings

### ▪ **editorBindings**: *object*

*Defined in [editorWidget/editorWidget.tsx:113](https://github.com/cancerberoSgx/accursed/blob/468bf3c/src/editorWidget/editorWidget.tsx#L113)*

###  copy

• **copy**: *string[]* =  ['C-c']

*Defined in [editorWidget/editorWidget.tsx:157](https://github.com/cancerberoSgx/accursed/blob/468bf3c/src/editorWidget/editorWidget.tsx#L157)*

###  cut

• **cut**: *string[]* =  ['C-x']

*Defined in [editorWidget/editorWidget.tsx:158](https://github.com/cancerberoSgx/accursed/blob/468bf3c/src/editorWidget/editorWidget.tsx#L158)*

###  dedent

• **dedent**: *string[]* =  ['S-tab']

*Defined in [editorWidget/editorWidget.tsx:154](https://github.com/cancerberoSgx/accursed/blob/468bf3c/src/editorWidget/editorWidget.tsx#L154)*

###  deleteLeft

• **deleteLeft**: *string[]* =  ['backspace']

*Defined in [editorWidget/editorWidget.tsx:145](https://github.com/cancerberoSgx/accursed/blob/468bf3c/src/editorWidget/editorWidget.tsx#L145)*

###  deleteLeftInfinity

• **deleteLeftInfinity**: *string[]* =  ['C-S-backspace', 'M-S-backspace']

*Defined in [editorWidget/editorWidget.tsx:149](https://github.com/cancerberoSgx/accursed/blob/468bf3c/src/editorWidget/editorWidget.tsx#L149)*

###  deleteLeftWord

• **deleteLeftWord**: *string[]* =  ['C-backspace', 'M-backspace', 'C-d', 'M-delete']

*Defined in [editorWidget/editorWidget.tsx:147](https://github.com/cancerberoSgx/accursed/blob/468bf3c/src/editorWidget/editorWidget.tsx#L147)*

###  deleteLine

• **deleteLine**: *string[]* =  ['C-k']

*Defined in [editorWidget/editorWidget.tsx:151](https://github.com/cancerberoSgx/accursed/blob/468bf3c/src/editorWidget/editorWidget.tsx#L151)*

###  deleteRight

• **deleteRight**: *string[]* =  ['delete']

*Defined in [editorWidget/editorWidget.tsx:146](https://github.com/cancerberoSgx/accursed/blob/468bf3c/src/editorWidget/editorWidget.tsx#L146)*

###  deleteRightInfinity

• **deleteRightInfinity**: *string[]* =  ['C-S-delete', 'M-S-delete']

*Defined in [editorWidget/editorWidget.tsx:150](https://github.com/cancerberoSgx/accursed/blob/468bf3c/src/editorWidget/editorWidget.tsx#L150)*

###  deleteRightWord

• **deleteRightWord**: *string[]* =  ['C-delete', 'M-d']

*Defined in [editorWidget/editorWidget.tsx:148](https://github.com/cancerberoSgx/accursed/blob/468bf3c/src/editorWidget/editorWidget.tsx#L148)*

###  duplicateLine

• **duplicateLine**: *string[]* =  ['C-b']

*Defined in [editorWidget/editorWidget.tsx:152](https://github.com/cancerberoSgx/accursed/blob/468bf3c/src/editorWidget/editorWidget.tsx#L152)*

###  focusNext

• **focusNext**: *false* = false

*Defined in [editorWidget/editorWidget.tsx:161](https://github.com/cancerberoSgx/accursed/blob/468bf3c/src/editorWidget/editorWidget.tsx#L161)*

###  focusPrev

• **focusPrev**: *false* = false

*Defined in [editorWidget/editorWidget.tsx:162](https://github.com/cancerberoSgx/accursed/blob/468bf3c/src/editorWidget/editorWidget.tsx#L162)*

###  goDown

• **goDown**: *string[]* =  ['down']

*Defined in [editorWidget/editorWidget.tsx:125](https://github.com/cancerberoSgx/accursed/blob/468bf3c/src/editorWidget/editorWidget.tsx#L125)*

###  goDownInfinity

• **goDownInfinity**: *string[]* =  ['C-end', 'M-end', 'M->']

*Defined in [editorWidget/editorWidget.tsx:127](https://github.com/cancerberoSgx/accursed/blob/468bf3c/src/editorWidget/editorWidget.tsx#L127)*

###  goDownPage

• **goDownPage**: *string[]* =  ['pagedown']

*Defined in [editorWidget/editorWidget.tsx:126](https://github.com/cancerberoSgx/accursed/blob/468bf3c/src/editorWidget/editorWidget.tsx#L126)*

###  goDownParagraph

• **goDownParagraph**: *string[]* =  ['\u001b\u001b[B', 'C-down', 'M-down', 'M-}']

*Defined in [editorWidget/editorWidget.tsx:124](https://github.com/cancerberoSgx/accursed/blob/468bf3c/src/editorWidget/editorWidget.tsx#L124)*

###  goLeft

• **goLeft**: *string[]* =  ['left']

*Defined in [editorWidget/editorWidget.tsx:114](https://github.com/cancerberoSgx/accursed/blob/468bf3c/src/editorWidget/editorWidget.tsx#L114)*

###  goLeftInfinity

• **goLeftInfinity**: *string[]* =  ['home']

*Defined in [editorWidget/editorWidget.tsx:116](https://github.com/cancerberoSgx/accursed/blob/468bf3c/src/editorWidget/editorWidget.tsx#L116)*

###  goLeftWord

• **goLeftWord**: *string[]* =  ['C-left', 'M-left', '\u001b\u001b[D', 'M-b', 'M-S-b']

*Defined in [editorWidget/editorWidget.tsx:115](https://github.com/cancerberoSgx/accursed/blob/468bf3c/src/editorWidget/editorWidget.tsx#L115)*

###  goMatchingBracket

• **goMatchingBracket**: *string[]* =  ['C-m', 'C-]', '\u001d']

*Defined in [editorWidget/editorWidget.tsx:128](https://github.com/cancerberoSgx/accursed/blob/468bf3c/src/editorWidget/editorWidget.tsx#L128)*

###  goRight

• **goRight**: *string[]* =  ['right']

*Defined in [editorWidget/editorWidget.tsx:117](https://github.com/cancerberoSgx/accursed/blob/468bf3c/src/editorWidget/editorWidget.tsx#L117)*

###  goRightInfinity

• **goRightInfinity**: *string[]* =  ['end', 'C-e']

*Defined in [editorWidget/editorWidget.tsx:119](https://github.com/cancerberoSgx/accursed/blob/468bf3c/src/editorWidget/editorWidget.tsx#L119)*

###  goRightWord

• **goRightWord**: *string[]* =  ['C-right', 'M-right', '\u001b\u001b[C', 'M-f', 'M-S-f']

*Defined in [editorWidget/editorWidget.tsx:118](https://github.com/cancerberoSgx/accursed/blob/468bf3c/src/editorWidget/editorWidget.tsx#L118)*

###  goUp

• **goUp**: *string[]* =  ['up']

*Defined in [editorWidget/editorWidget.tsx:121](https://github.com/cancerberoSgx/accursed/blob/468bf3c/src/editorWidget/editorWidget.tsx#L121)*

###  goUpInfinity

• **goUpInfinity**: *string[]* =  ['C-home', 'M-home', 'M-<']

*Defined in [editorWidget/editorWidget.tsx:123](https://github.com/cancerberoSgx/accursed/blob/468bf3c/src/editorWidget/editorWidget.tsx#L123)*

###  goUpPage

• **goUpPage**: *string[]* =  ['pageup']

*Defined in [editorWidget/editorWidget.tsx:122](https://github.com/cancerberoSgx/accursed/blob/468bf3c/src/editorWidget/editorWidget.tsx#L122)*

###  goUpParagraph

• **goUpParagraph**: *string[]* =  ['C-up', 'M-{', 'M-up', '\u001b\u001b[A']

*Defined in [editorWidget/editorWidget.tsx:120](https://github.com/cancerberoSgx/accursed/blob/468bf3c/src/editorWidget/editorWidget.tsx#L120)*

###  indent

• **indent**: *string[]* =  ['tab', 'C-tab']

*Defined in [editorWidget/editorWidget.tsx:153](https://github.com/cancerberoSgx/accursed/blob/468bf3c/src/editorWidget/editorWidget.tsx#L153)*

###  paste

• **paste**: *string[]* =  ['C-v']

*Defined in [editorWidget/editorWidget.tsx:159](https://github.com/cancerberoSgx/accursed/blob/468bf3c/src/editorWidget/editorWidget.tsx#L159)*

###  redo

• **redo**: *string[]* =  ['C-y']

*Defined in [editorWidget/editorWidget.tsx:156](https://github.com/cancerberoSgx/accursed/blob/468bf3c/src/editorWidget/editorWidget.tsx#L156)*

###  selectAll

• **selectAll**: *string[]* =  ['C-a']

*Defined in [editorWidget/editorWidget.tsx:129](https://github.com/cancerberoSgx/accursed/blob/468bf3c/src/editorWidget/editorWidget.tsx#L129)*

###  selectDown

• **selectDown**: *string[]* =  ['S-down']

*Defined in [editorWidget/editorWidget.tsx:140](https://github.com/cancerberoSgx/accursed/blob/468bf3c/src/editorWidget/editorWidget.tsx#L140)*

###  selectDownInfinity

• **selectDownInfinity**: *string[]* =  ['C-S-end', 'M-S-end']

*Defined in [editorWidget/editorWidget.tsx:143](https://github.com/cancerberoSgx/accursed/blob/468bf3c/src/editorWidget/editorWidget.tsx#L143)*

###  selectDownPage

• **selectDownPage**: *string[]* =  ['S-pagedown']

*Defined in [editorWidget/editorWidget.tsx:142](https://github.com/cancerberoSgx/accursed/blob/468bf3c/src/editorWidget/editorWidget.tsx#L142)*

###  selectDownParagraph

• **selectDownParagraph**: *string[]* =  ['C-S-down', 'M-S-down']

*Defined in [editorWidget/editorWidget.tsx:141](https://github.com/cancerberoSgx/accursed/blob/468bf3c/src/editorWidget/editorWidget.tsx#L141)*

###  selectLeft

• **selectLeft**: *string[]* =  ['S-left']

*Defined in [editorWidget/editorWidget.tsx:130](https://github.com/cancerberoSgx/accursed/blob/468bf3c/src/editorWidget/editorWidget.tsx#L130)*

###  selectLeftInfinity

• **selectLeftInfinity**: *string[]* =  ['S-home']

*Defined in [editorWidget/editorWidget.tsx:132](https://github.com/cancerberoSgx/accursed/blob/468bf3c/src/editorWidget/editorWidget.tsx#L132)*

###  selectLeftWord

• **selectLeftWord**: *string[]* =  ['C-S-left', 'M-S-left']

*Defined in [editorWidget/editorWidget.tsx:131](https://github.com/cancerberoSgx/accursed/blob/468bf3c/src/editorWidget/editorWidget.tsx#L131)*

###  selectMatchingBracket

• **selectMatchingBracket**: *string[]* =  ['C-S-m']

*Defined in [editorWidget/editorWidget.tsx:144](https://github.com/cancerberoSgx/accursed/blob/468bf3c/src/editorWidget/editorWidget.tsx#L144)*

###  selectRight

• **selectRight**: *string[]* =  ['S-right']

*Defined in [editorWidget/editorWidget.tsx:133](https://github.com/cancerberoSgx/accursed/blob/468bf3c/src/editorWidget/editorWidget.tsx#L133)*

###  selectRightInfinity

• **selectRightInfinity**: *string[]* =  ['S-end']

*Defined in [editorWidget/editorWidget.tsx:135](https://github.com/cancerberoSgx/accursed/blob/468bf3c/src/editorWidget/editorWidget.tsx#L135)*

###  selectRightWord

• **selectRightWord**: *string[]* =  ['C-S-right', 'M-S-right']

*Defined in [editorWidget/editorWidget.tsx:134](https://github.com/cancerberoSgx/accursed/blob/468bf3c/src/editorWidget/editorWidget.tsx#L134)*

###  selectUp

• **selectUp**: *string[]* =  ['S-up']

*Defined in [editorWidget/editorWidget.tsx:136](https://github.com/cancerberoSgx/accursed/blob/468bf3c/src/editorWidget/editorWidget.tsx#L136)*

###  selectUpInfinity

• **selectUpInfinity**: *string[]* =  ['C-S-home', 'M-S-home']

*Defined in [editorWidget/editorWidget.tsx:139](https://github.com/cancerberoSgx/accursed/blob/468bf3c/src/editorWidget/editorWidget.tsx#L139)*

###  selectUpPage

• **selectUpPage**: *string[]* =  ['S-pageup']

*Defined in [editorWidget/editorWidget.tsx:138](https://github.com/cancerberoSgx/accursed/blob/468bf3c/src/editorWidget/editorWidget.tsx#L138)*

###  selectUpParagraph

• **selectUpParagraph**: *string[]* =  ['C-S-up', 'M-S-up']

*Defined in [editorWidget/editorWidget.tsx:137](https://github.com/cancerberoSgx/accursed/blob/468bf3c/src/editorWidget/editorWidget.tsx#L137)*

###  toggleInsertMode

• **toggleInsertMode**: *string[]* =  ['insert']

*Defined in [editorWidget/editorWidget.tsx:160](https://github.com/cancerberoSgx/accursed/blob/468bf3c/src/editorWidget/editorWidget.tsx#L160)*

###  undo

• **undo**: *string[]* =  ['C-z']

*Defined in [editorWidget/editorWidget.tsx:155](https://github.com/cancerberoSgx/accursed/blob/468bf3c/src/editorWidget/editorWidget.tsx#L155)*

___

### `Const` editorGutterStyle

### ▪ **editorGutterStyle**: *object*

*Defined in [editorWidget/editorWidget.tsx:201](https://github.com/cancerberoSgx/accursed/blob/468bf3c/src/editorWidget/editorWidget.tsx#L201)*

###  bg

• **bg**: *string* = "blue"

*Defined in [editorWidget/editorWidget.tsx:202](https://github.com/cancerberoSgx/accursed/blob/468bf3c/src/editorWidget/editorWidget.tsx#L202)*

###  currentLine

• **currentLine**: *string* = "{white-bg}{black-fg}{bold}"

*Defined in [editorWidget/editorWidget.tsx:203](https://github.com/cancerberoSgx/accursed/blob/468bf3c/src/editorWidget/editorWidget.tsx#L203)*

___

### `Const` editorPerf

### ▪ **editorPerf**: *object*

*Defined in [editorWidget/editorWidget.tsx:206](https://github.com/cancerberoSgx/accursed/blob/468bf3c/src/editorWidget/editorWidget.tsx#L206)*

###  matchesRenderThrottle

• **matchesRenderThrottle**: *number* = 150

*Defined in [editorWidget/editorWidget.tsx:207](https://github.com/cancerberoSgx/accursed/blob/468bf3c/src/editorWidget/editorWidget.tsx#L207)*

###  updateContentThrottle

• **updateContentThrottle**: *number* = 16

*Defined in [editorWidget/editorWidget.tsx:208](https://github.com/cancerberoSgx/accursed/blob/468bf3c/src/editorWidget/editorWidget.tsx#L208)*

___

### `Const` editorStyle

### ▪ **editorStyle**: *object*

*Defined in [editorWidget/editorWidget.tsx:165](https://github.com/cancerberoSgx/accursed/blob/468bf3c/src/editorWidget/editorWidget.tsx#L165)*

###  attribute

• **attribute**: *string* = "{yellow-fg}"

*Defined in [editorWidget/editorWidget.tsx:194](https://github.com/cancerberoSgx/accursed/blob/468bf3c/src/editorWidget/editorWidget.tsx#L194)*

###  built_in

• **built_in**: *string* = "{yellow-fg}"

*Defined in [editorWidget/editorWidget.tsx:172](https://github.com/cancerberoSgx/accursed/blob/468bf3c/src/editorWidget/editorWidget.tsx#L172)*

###  bullet

• **bullet**: *string* = "{magenta-fg}"

*Defined in [editorWidget/editorWidget.tsx:193](https://github.com/cancerberoSgx/accursed/blob/468bf3c/src/editorWidget/editorWidget.tsx#L193)*

###  class

• **class**: *string* = "{yellow-fg}"

*Defined in [editorWidget/editorWidget.tsx:176](https://github.com/cancerberoSgx/accursed/blob/468bf3c/src/editorWidget/editorWidget.tsx#L176)*

###  code

• **code**: *string* = "{green-fg}"

*Defined in [editorWidget/editorWidget.tsx:190](https://github.com/cancerberoSgx/accursed/blob/468bf3c/src/editorWidget/editorWidget.tsx#L190)*

###  comment

• **comment**: *string* = "{gray-fg}"

*Defined in [editorWidget/editorWidget.tsx:187](https://github.com/cancerberoSgx/accursed/blob/468bf3c/src/editorWidget/editorWidget.tsx#L187)*

###  constant

• **constant**: *string* = "{yellow-fg}"

*Defined in [editorWidget/editorWidget.tsx:199](https://github.com/cancerberoSgx/accursed/blob/468bf3c/src/editorWidget/editorWidget.tsx#L199)*

###  decorator

• **decorator**: *string* = "{bold}"

*Defined in [editorWidget/editorWidget.tsx:178](https://github.com/cancerberoSgx/accursed/blob/468bf3c/src/editorWidget/editorWidget.tsx#L178)*

###  function

• **function**: *string* = "{yellow-fg}"

*Defined in [editorWidget/editorWidget.tsx:177](https://github.com/cancerberoSgx/accursed/blob/468bf3c/src/editorWidget/editorWidget.tsx#L177)*

###  header

• **header**: *string* = "{bold}"

*Defined in [editorWidget/editorWidget.tsx:188](https://github.com/cancerberoSgx/accursed/blob/468bf3c/src/editorWidget/editorWidget.tsx#L188)*

###  keyword

• **keyword**: *string* = "{red-fg}"

*Defined in [editorWidget/editorWidget.tsx:171](https://github.com/cancerberoSgx/accursed/blob/468bf3c/src/editorWidget/editorWidget.tsx#L171)*

###  label

• **label**: *string* = ""

*Defined in [editorWidget/editorWidget.tsx:197](https://github.com/cancerberoSgx/accursed/blob/468bf3c/src/editorWidget/editorWidget.tsx#L197)*

###  link_label

• **link_label**: *string* = ""

*Defined in [editorWidget/editorWidget.tsx:191](https://github.com/cancerberoSgx/accursed/blob/468bf3c/src/editorWidget/editorWidget.tsx#L191)*

###  link_url

• **link_url**: *string* = "{yellow-fg}"

*Defined in [editorWidget/editorWidget.tsx:192](https://github.com/cancerberoSgx/accursed/blob/468bf3c/src/editorWidget/editorWidget.tsx#L192)*

###  literal

• **literal**: *string* = "{green-fg}{bold}"

*Defined in [editorWidget/editorWidget.tsx:186](https://github.com/cancerberoSgx/accursed/blob/468bf3c/src/editorWidget/editorWidget.tsx#L186)*

###  match

• **match**: *string* = "{yellow-bg}"

*Defined in [editorWidget/editorWidget.tsx:167](https://github.com/cancerberoSgx/accursed/blob/468bf3c/src/editorWidget/editorWidget.tsx#L167)*

###  matchingBracket

• **matchingBracket**: *string* = "{green-bg}{bold}"

*Defined in [editorWidget/editorWidget.tsx:168](https://github.com/cancerberoSgx/accursed/blob/468bf3c/src/editorWidget/editorWidget.tsx#L168)*

###  mismatchedBracket

• **mismatchedBracket**: *string* = "{red-bg}{bold}"

*Defined in [editorWidget/editorWidget.tsx:169](https://github.com/cancerberoSgx/accursed/blob/468bf3c/src/editorWidget/editorWidget.tsx#L169)*

###  number

• **number**: *string* = "{green-fg}{bold}"

*Defined in [editorWidget/editorWidget.tsx:183](https://github.com/cancerberoSgx/accursed/blob/468bf3c/src/editorWidget/editorWidget.tsx#L183)*

###  operator

• **operator**: *string* = "{green-fg}"

*Defined in [editorWidget/editorWidget.tsx:181](https://github.com/cancerberoSgx/accursed/blob/468bf3c/src/editorWidget/editorWidget.tsx#L181)*

###  params

• **params**: *string* = "{yellow-fg}"

*Defined in [editorWidget/editorWidget.tsx:175](https://github.com/cancerberoSgx/accursed/blob/468bf3c/src/editorWidget/editorWidget.tsx#L175)*

###  preprocessor

• **preprocessor**: *string* = "{red-fg}"

*Defined in [editorWidget/editorWidget.tsx:173](https://github.com/cancerberoSgx/accursed/blob/468bf3c/src/editorWidget/editorWidget.tsx#L173)*

###  regexp

• **regexp**: *string* = "{green-fg}{bold}"

*Defined in [editorWidget/editorWidget.tsx:185](https://github.com/cancerberoSgx/accursed/blob/468bf3c/src/editorWidget/editorWidget.tsx#L185)*

###  selection

• **selection**: *string* = "{lightgray-bg}{black-fg}{bold}"

*Defined in [editorWidget/editorWidget.tsx:166](https://github.com/cancerberoSgx/accursed/blob/468bf3c/src/editorWidget/editorWidget.tsx#L166)*

###  setting

• **setting**: *string* = ""

*Defined in [editorWidget/editorWidget.tsx:196](https://github.com/cancerberoSgx/accursed/blob/468bf3c/src/editorWidget/editorWidget.tsx#L196)*

###  shebang

• **shebang**: *string* = "{yellow-bg}{black-fg}"

*Defined in [editorWidget/editorWidget.tsx:179](https://github.com/cancerberoSgx/accursed/blob/468bf3c/src/editorWidget/editorWidget.tsx#L179)*

###  string

• **string**: *string* = "{green-fg}{bold}"

*Defined in [editorWidget/editorWidget.tsx:184](https://github.com/cancerberoSgx/accursed/blob/468bf3c/src/editorWidget/editorWidget.tsx#L184)*

###  strong

• **strong**: *string* = "{bold}"

*Defined in [editorWidget/editorWidget.tsx:189](https://github.com/cancerberoSgx/accursed/blob/468bf3c/src/editorWidget/editorWidget.tsx#L189)*

###  subst

• **subst**: *string* = ""

*Defined in [editorWidget/editorWidget.tsx:182](https://github.com/cancerberoSgx/accursed/blob/468bf3c/src/editorWidget/editorWidget.tsx#L182)*

###  symbol

• **symbol**: *string* = "{red-fg}"

*Defined in [editorWidget/editorWidget.tsx:198](https://github.com/cancerberoSgx/accursed/blob/468bf3c/src/editorWidget/editorWidget.tsx#L198)*

###  title

• **title**: *string* = "{underline}"

*Defined in [editorWidget/editorWidget.tsx:174](https://github.com/cancerberoSgx/accursed/blob/468bf3c/src/editorWidget/editorWidget.tsx#L174)*

###  value

• **value**: *string* = "{green-fg}{bold}"

*Defined in [editorWidget/editorWidget.tsx:195](https://github.com/cancerberoSgx/accursed/blob/468bf3c/src/editorWidget/editorWidget.tsx#L195)*

###  variable

• **variable**: *string* = "{yellow-fg}"

*Defined in [editorWidget/editorWidget.tsx:180](https://github.com/cancerberoSgx/accursed/blob/468bf3c/src/editorWidget/editorWidget.tsx#L180)*

###  whiteSpace

• **whiteSpace**: *string* = "{blue-fg}"

*Defined in [editorWidget/editorWidget.tsx:170](https://github.com/cancerberoSgx/accursed/blob/468bf3c/src/editorWidget/editorWidget.tsx#L170)*
