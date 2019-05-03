[accursed](../README.md) > ["editorWidget/editorWidget"](../modules/_editorwidget_editorwidget_.md)

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
* [isEditorWidget](_editorwidget_editorwidget_.md#iseditorwidget)

### Object literals

* [editorBindings](_editorwidget_editorwidget_.md#editorbindings)
* [editorGutterStyle](_editorwidget_editorwidget_.md#editorgutterstyle)
* [editorPerf](_editorwidget_editorwidget_.md#editorperf)
* [editorStyle](_editorwidget_editorwidget_.md#editorstyle)

---

## Functions

<a id="buildeditor"></a>

###  buildEditor

▸ **buildEditor**(options: *[EditorOptions](../interfaces/_editorwidget_editorwidgettypes_.editoroptions.md) & `object`*): `any`

*Defined in [editorWidget/editorWidget.tsx:20](https://github.com/cancerberoSgx/accursed/blob/978b980/src/editorWidget/editorWidget.tsx#L20)*

Builds editor widget by calling its constructor as it is, without any tricks for auto-highlighting, focus or bypass the required parent option. There's only a workaround to load option.text as string \[\[options.text\]\] but just that.

Passing \[\[options.parent\]\] is mandatory here.

For a higher level creator, see [createEditor](_editorwidget_editorwidget_.md#createeditor) which allows to create the widget without passing \[\[options.parent\]\] and will auto-highlight and focus the editor at startup.

**Parameters:**

| Name | Type |
| ------ | ------ |
| options | [EditorOptions](../interfaces/_editorwidget_editorwidgettypes_.editoroptions.md) & `object` |

**Returns:** `any`

___
<a id="createeditor"></a>

###  createEditor

▸ **createEditor**(options: *[CreateEditorOptions](../interfaces/_editorwidget_editorwidget_.createeditoroptions.md)*): [BoxElement](../classes/_declarations_blessed_d_.widgets.boxelement.md)

*Defined in [editorWidget/editorWidget.tsx:57](https://github.com/cancerberoSgx/accursed/blob/978b980/src/editorWidget/editorWidget.tsx#L57)*

This creator function is a high level version of [buildEditor](_editorwidget_editorwidget_.md#buildeditor) that doesn't require to pass `parent`. What it does is to create a box reference and after it renders it will use buildEditor to instantiate the editor-widget.

**Parameters:**

| Name | Type |
| ------ | ------ |
| options | [CreateEditorOptions](../interfaces/_editorwidget_editorwidget_.createeditoroptions.md) |

**Returns:** [BoxElement](../classes/_declarations_blessed_d_.widgets.boxelement.md)
the editor's parent BoxElement

___
<a id="createeditorasync"></a>

###  createEditorAsync

▸ **createEditorAsync**(options: *[CreateEditorOptions](../interfaces/_editorwidget_editorwidget_.createeditoroptions.md)*): `Promise`<[IEditor](../interfaces/_editorwidget_editorwidgettypes_.ieditor.md)>

*Defined in [editorWidget/editorWidget.tsx:81](https://github.com/cancerberoSgx/accursed/blob/978b980/src/editorWidget/editorWidget.tsx#L81)*

This creator function is a high level version of [buildEditor](_editorwidget_editorwidget_.md#buildeditor) that doesn't require to pass `parent`. What it does is to create a box reference and after it renders it will use buildEditor to instantiate the editor-widget.

**Parameters:**

| Name | Type |
| ------ | ------ |
| options | [CreateEditorOptions](../interfaces/_editorwidget_editorwidget_.createeditoroptions.md) |

**Returns:** `Promise`<[IEditor](../interfaces/_editorwidget_editorwidgettypes_.ieditor.md)>

___
<a id="installfocusandexitkeysforeditorwidget"></a>

###  installFocusAndExitKeysForEditorWidget

▸ **installFocusAndExitKeysForEditorWidget**(screen: *[Screen](../classes/_declarations_blessed_d_.widgets.screen.md)*): `void`

*Defined in [editorWidget/editorWidget.tsx:217](https://github.com/cancerberoSgx/accursed/blob/978b980/src/editorWidget/editorWidget.tsx#L217)*

Install exit keys in given screen, considering EditorWidget. tab/S-tab will switch focus only if current focused element is not a EditorWidget. If focused element is EditorWidget, 'C-S-tab', 'escape' can be used to focus next element. Finally, exit keys 'C-q', 'q', 'Q', 'C-c' can be used, if current focused element is not a EditorWidget and it will ask the user to confirm the action.

**Parameters:**

| Name | Type |
| ------ | ------ |
| screen | [Screen](../classes/_declarations_blessed_d_.widgets.screen.md) |

**Returns:** `void`

___
<a id="iseditorwidget"></a>

###  isEditorWidget

▸ **isEditorWidget**(n: *[Node](../classes/_declarations_blessed_d_.widgets.node.md)*): `boolean`

*Defined in [editorWidget/editorWidget.tsx:99](https://github.com/cancerberoSgx/accursed/blob/978b980/src/editorWidget/editorWidget.tsx#L99)*

**Parameters:**

| Name | Type |
| ------ | ------ |
| n | [Node](../classes/_declarations_blessed_d_.widgets.node.md) |

**Returns:** `boolean`

___

## Object literals

<a id="editorbindings"></a>

### `<Const>` editorBindings

**editorBindings**: *`object`*

*Defined in [editorWidget/editorWidget.tsx:113](https://github.com/cancerberoSgx/accursed/blob/978b980/src/editorWidget/editorWidget.tsx#L113)*

<a id="editorbindings.copy"></a>

####  copy

**● copy**: *`string`[]* =  ['C-c']

*Defined in [editorWidget/editorWidget.tsx:157](https://github.com/cancerberoSgx/accursed/blob/978b980/src/editorWidget/editorWidget.tsx#L157)*

___
<a id="editorbindings.cut"></a>

####  cut

**● cut**: *`string`[]* =  ['C-x']

*Defined in [editorWidget/editorWidget.tsx:158](https://github.com/cancerberoSgx/accursed/blob/978b980/src/editorWidget/editorWidget.tsx#L158)*

___
<a id="editorbindings.dedent"></a>

####  dedent

**● dedent**: *`string`[]* =  ['S-tab']

*Defined in [editorWidget/editorWidget.tsx:154](https://github.com/cancerberoSgx/accursed/blob/978b980/src/editorWidget/editorWidget.tsx#L154)*

___
<a id="editorbindings.deleteleft"></a>

####  deleteLeft

**● deleteLeft**: *`string`[]* =  ['backspace']

*Defined in [editorWidget/editorWidget.tsx:145](https://github.com/cancerberoSgx/accursed/blob/978b980/src/editorWidget/editorWidget.tsx#L145)*

___
<a id="editorbindings.deleteleftinfinity"></a>

####  deleteLeftInfinity

**● deleteLeftInfinity**: *`string`[]* =  ['C-S-backspace', 'M-S-backspace']

*Defined in [editorWidget/editorWidget.tsx:149](https://github.com/cancerberoSgx/accursed/blob/978b980/src/editorWidget/editorWidget.tsx#L149)*

___
<a id="editorbindings.deleteleftword"></a>

####  deleteLeftWord

**● deleteLeftWord**: *`string`[]* =  ['C-backspace', 'M-backspace', 'C-d', 'M-delete']

*Defined in [editorWidget/editorWidget.tsx:147](https://github.com/cancerberoSgx/accursed/blob/978b980/src/editorWidget/editorWidget.tsx#L147)*

___
<a id="editorbindings.deleteline"></a>

####  deleteLine

**● deleteLine**: *`string`[]* =  ['C-k']

*Defined in [editorWidget/editorWidget.tsx:151](https://github.com/cancerberoSgx/accursed/blob/978b980/src/editorWidget/editorWidget.tsx#L151)*

___
<a id="editorbindings.deleteright"></a>

####  deleteRight

**● deleteRight**: *`string`[]* =  ['delete']

*Defined in [editorWidget/editorWidget.tsx:146](https://github.com/cancerberoSgx/accursed/blob/978b980/src/editorWidget/editorWidget.tsx#L146)*

___
<a id="editorbindings.deleterightinfinity"></a>

####  deleteRightInfinity

**● deleteRightInfinity**: *`string`[]* =  ['C-S-delete', 'M-S-delete']

*Defined in [editorWidget/editorWidget.tsx:150](https://github.com/cancerberoSgx/accursed/blob/978b980/src/editorWidget/editorWidget.tsx#L150)*

___
<a id="editorbindings.deleterightword"></a>

####  deleteRightWord

**● deleteRightWord**: *`string`[]* =  ['C-delete', 'M-d']

*Defined in [editorWidget/editorWidget.tsx:148](https://github.com/cancerberoSgx/accursed/blob/978b980/src/editorWidget/editorWidget.tsx#L148)*

___
<a id="editorbindings.duplicateline"></a>

####  duplicateLine

**● duplicateLine**: *`string`[]* =  ['C-b']

*Defined in [editorWidget/editorWidget.tsx:152](https://github.com/cancerberoSgx/accursed/blob/978b980/src/editorWidget/editorWidget.tsx#L152)*

___
<a id="editorbindings.focusnext"></a>

####  focusNext

**● focusNext**: *`false`* = false

*Defined in [editorWidget/editorWidget.tsx:161](https://github.com/cancerberoSgx/accursed/blob/978b980/src/editorWidget/editorWidget.tsx#L161)*

___
<a id="editorbindings.focusprev"></a>

####  focusPrev

**● focusPrev**: *`false`* = false

*Defined in [editorWidget/editorWidget.tsx:162](https://github.com/cancerberoSgx/accursed/blob/978b980/src/editorWidget/editorWidget.tsx#L162)*

___
<a id="editorbindings.godown"></a>

####  goDown

**● goDown**: *`string`[]* =  ['down']

*Defined in [editorWidget/editorWidget.tsx:125](https://github.com/cancerberoSgx/accursed/blob/978b980/src/editorWidget/editorWidget.tsx#L125)*

___
<a id="editorbindings.godowninfinity"></a>

####  goDownInfinity

**● goDownInfinity**: *`string`[]* =  ['C-end', 'M-end', 'M->']

*Defined in [editorWidget/editorWidget.tsx:127](https://github.com/cancerberoSgx/accursed/blob/978b980/src/editorWidget/editorWidget.tsx#L127)*

___
<a id="editorbindings.godownpage"></a>

####  goDownPage

**● goDownPage**: *`string`[]* =  ['pagedown']

*Defined in [editorWidget/editorWidget.tsx:126](https://github.com/cancerberoSgx/accursed/blob/978b980/src/editorWidget/editorWidget.tsx#L126)*

___
<a id="editorbindings.godownparagraph"></a>

####  goDownParagraph

**● goDownParagraph**: *`string`[]* =  ['\u001b\u001b[B', 'C-down', 'M-down', 'M-}']

*Defined in [editorWidget/editorWidget.tsx:124](https://github.com/cancerberoSgx/accursed/blob/978b980/src/editorWidget/editorWidget.tsx#L124)*

___
<a id="editorbindings.goleft"></a>

####  goLeft

**● goLeft**: *`string`[]* =  ['left']

*Defined in [editorWidget/editorWidget.tsx:114](https://github.com/cancerberoSgx/accursed/blob/978b980/src/editorWidget/editorWidget.tsx#L114)*

___
<a id="editorbindings.goleftinfinity"></a>

####  goLeftInfinity

**● goLeftInfinity**: *`string`[]* =  ['home']

*Defined in [editorWidget/editorWidget.tsx:116](https://github.com/cancerberoSgx/accursed/blob/978b980/src/editorWidget/editorWidget.tsx#L116)*

___
<a id="editorbindings.goleftword"></a>

####  goLeftWord

**● goLeftWord**: *`string`[]* =  ['C-left', 'M-left', '\u001b\u001b[D', 'M-b', 'M-S-b']

*Defined in [editorWidget/editorWidget.tsx:115](https://github.com/cancerberoSgx/accursed/blob/978b980/src/editorWidget/editorWidget.tsx#L115)*

___
<a id="editorbindings.gomatchingbracket"></a>

####  goMatchingBracket

**● goMatchingBracket**: *`string`[]* =  ['C-m', 'C-]', '\u001d']

*Defined in [editorWidget/editorWidget.tsx:128](https://github.com/cancerberoSgx/accursed/blob/978b980/src/editorWidget/editorWidget.tsx#L128)*

___
<a id="editorbindings.goright"></a>

####  goRight

**● goRight**: *`string`[]* =  ['right']

*Defined in [editorWidget/editorWidget.tsx:117](https://github.com/cancerberoSgx/accursed/blob/978b980/src/editorWidget/editorWidget.tsx#L117)*

___
<a id="editorbindings.gorightinfinity"></a>

####  goRightInfinity

**● goRightInfinity**: *`string`[]* =  ['end', 'C-e']

*Defined in [editorWidget/editorWidget.tsx:119](https://github.com/cancerberoSgx/accursed/blob/978b980/src/editorWidget/editorWidget.tsx#L119)*

___
<a id="editorbindings.gorightword"></a>

####  goRightWord

**● goRightWord**: *`string`[]* =  ['C-right', 'M-right', '\u001b\u001b[C', 'M-f', 'M-S-f']

*Defined in [editorWidget/editorWidget.tsx:118](https://github.com/cancerberoSgx/accursed/blob/978b980/src/editorWidget/editorWidget.tsx#L118)*

___
<a id="editorbindings.goup"></a>

####  goUp

**● goUp**: *`string`[]* =  ['up']

*Defined in [editorWidget/editorWidget.tsx:121](https://github.com/cancerberoSgx/accursed/blob/978b980/src/editorWidget/editorWidget.tsx#L121)*

___
<a id="editorbindings.goupinfinity"></a>

####  goUpInfinity

**● goUpInfinity**: *`string`[]* =  ['C-home', 'M-home', 'M-<']

*Defined in [editorWidget/editorWidget.tsx:123](https://github.com/cancerberoSgx/accursed/blob/978b980/src/editorWidget/editorWidget.tsx#L123)*

___
<a id="editorbindings.gouppage"></a>

####  goUpPage

**● goUpPage**: *`string`[]* =  ['pageup']

*Defined in [editorWidget/editorWidget.tsx:122](https://github.com/cancerberoSgx/accursed/blob/978b980/src/editorWidget/editorWidget.tsx#L122)*

___
<a id="editorbindings.goupparagraph"></a>

####  goUpParagraph

**● goUpParagraph**: *`string`[]* =  ['C-up', 'M-{', 'M-up', '\u001b\u001b[A']

*Defined in [editorWidget/editorWidget.tsx:120](https://github.com/cancerberoSgx/accursed/blob/978b980/src/editorWidget/editorWidget.tsx#L120)*

___
<a id="editorbindings.indent"></a>

####  indent

**● indent**: *`string`[]* =  ['tab', 'C-tab']

*Defined in [editorWidget/editorWidget.tsx:153](https://github.com/cancerberoSgx/accursed/blob/978b980/src/editorWidget/editorWidget.tsx#L153)*

___
<a id="editorbindings.paste"></a>

####  paste

**● paste**: *`string`[]* =  ['C-v']

*Defined in [editorWidget/editorWidget.tsx:159](https://github.com/cancerberoSgx/accursed/blob/978b980/src/editorWidget/editorWidget.tsx#L159)*

___
<a id="editorbindings.redo"></a>

####  redo

**● redo**: *`string`[]* =  ['C-y']

*Defined in [editorWidget/editorWidget.tsx:156](https://github.com/cancerberoSgx/accursed/blob/978b980/src/editorWidget/editorWidget.tsx#L156)*

___
<a id="editorbindings.selectall"></a>

####  selectAll

**● selectAll**: *`string`[]* =  ['C-a']

*Defined in [editorWidget/editorWidget.tsx:129](https://github.com/cancerberoSgx/accursed/blob/978b980/src/editorWidget/editorWidget.tsx#L129)*

___
<a id="editorbindings.selectdown"></a>

####  selectDown

**● selectDown**: *`string`[]* =  ['S-down']

*Defined in [editorWidget/editorWidget.tsx:140](https://github.com/cancerberoSgx/accursed/blob/978b980/src/editorWidget/editorWidget.tsx#L140)*

___
<a id="editorbindings.selectdowninfinity"></a>

####  selectDownInfinity

**● selectDownInfinity**: *`string`[]* =  ['C-S-end', 'M-S-end']

*Defined in [editorWidget/editorWidget.tsx:143](https://github.com/cancerberoSgx/accursed/blob/978b980/src/editorWidget/editorWidget.tsx#L143)*

___
<a id="editorbindings.selectdownpage"></a>

####  selectDownPage

**● selectDownPage**: *`string`[]* =  ['S-pagedown']

*Defined in [editorWidget/editorWidget.tsx:142](https://github.com/cancerberoSgx/accursed/blob/978b980/src/editorWidget/editorWidget.tsx#L142)*

___
<a id="editorbindings.selectdownparagraph"></a>

####  selectDownParagraph

**● selectDownParagraph**: *`string`[]* =  ['C-S-down', 'M-S-down']

*Defined in [editorWidget/editorWidget.tsx:141](https://github.com/cancerberoSgx/accursed/blob/978b980/src/editorWidget/editorWidget.tsx#L141)*

___
<a id="editorbindings.selectleft"></a>

####  selectLeft

**● selectLeft**: *`string`[]* =  ['S-left']

*Defined in [editorWidget/editorWidget.tsx:130](https://github.com/cancerberoSgx/accursed/blob/978b980/src/editorWidget/editorWidget.tsx#L130)*

___
<a id="editorbindings.selectleftinfinity"></a>

####  selectLeftInfinity

**● selectLeftInfinity**: *`string`[]* =  ['S-home']

*Defined in [editorWidget/editorWidget.tsx:132](https://github.com/cancerberoSgx/accursed/blob/978b980/src/editorWidget/editorWidget.tsx#L132)*

___
<a id="editorbindings.selectleftword"></a>

####  selectLeftWord

**● selectLeftWord**: *`string`[]* =  ['C-S-left', 'M-S-left']

*Defined in [editorWidget/editorWidget.tsx:131](https://github.com/cancerberoSgx/accursed/blob/978b980/src/editorWidget/editorWidget.tsx#L131)*

___
<a id="editorbindings.selectmatchingbracket"></a>

####  selectMatchingBracket

**● selectMatchingBracket**: *`string`[]* =  ['C-S-m']

*Defined in [editorWidget/editorWidget.tsx:144](https://github.com/cancerberoSgx/accursed/blob/978b980/src/editorWidget/editorWidget.tsx#L144)*

___
<a id="editorbindings.selectright"></a>

####  selectRight

**● selectRight**: *`string`[]* =  ['S-right']

*Defined in [editorWidget/editorWidget.tsx:133](https://github.com/cancerberoSgx/accursed/blob/978b980/src/editorWidget/editorWidget.tsx#L133)*

___
<a id="editorbindings.selectrightinfinity"></a>

####  selectRightInfinity

**● selectRightInfinity**: *`string`[]* =  ['S-end']

*Defined in [editorWidget/editorWidget.tsx:135](https://github.com/cancerberoSgx/accursed/blob/978b980/src/editorWidget/editorWidget.tsx#L135)*

___
<a id="editorbindings.selectrightword"></a>

####  selectRightWord

**● selectRightWord**: *`string`[]* =  ['C-S-right', 'M-S-right']

*Defined in [editorWidget/editorWidget.tsx:134](https://github.com/cancerberoSgx/accursed/blob/978b980/src/editorWidget/editorWidget.tsx#L134)*

___
<a id="editorbindings.selectup"></a>

####  selectUp

**● selectUp**: *`string`[]* =  ['S-up']

*Defined in [editorWidget/editorWidget.tsx:136](https://github.com/cancerberoSgx/accursed/blob/978b980/src/editorWidget/editorWidget.tsx#L136)*

___
<a id="editorbindings.selectupinfinity"></a>

####  selectUpInfinity

**● selectUpInfinity**: *`string`[]* =  ['C-S-home', 'M-S-home']

*Defined in [editorWidget/editorWidget.tsx:139](https://github.com/cancerberoSgx/accursed/blob/978b980/src/editorWidget/editorWidget.tsx#L139)*

___
<a id="editorbindings.selectuppage"></a>

####  selectUpPage

**● selectUpPage**: *`string`[]* =  ['S-pageup']

*Defined in [editorWidget/editorWidget.tsx:138](https://github.com/cancerberoSgx/accursed/blob/978b980/src/editorWidget/editorWidget.tsx#L138)*

___
<a id="editorbindings.selectupparagraph"></a>

####  selectUpParagraph

**● selectUpParagraph**: *`string`[]* =  ['C-S-up', 'M-S-up']

*Defined in [editorWidget/editorWidget.tsx:137](https://github.com/cancerberoSgx/accursed/blob/978b980/src/editorWidget/editorWidget.tsx#L137)*

___
<a id="editorbindings.toggleinsertmode"></a>

####  toggleInsertMode

**● toggleInsertMode**: *`string`[]* =  ['insert']

*Defined in [editorWidget/editorWidget.tsx:160](https://github.com/cancerberoSgx/accursed/blob/978b980/src/editorWidget/editorWidget.tsx#L160)*

___
<a id="editorbindings.undo"></a>

####  undo

**● undo**: *`string`[]* =  ['C-z']

*Defined in [editorWidget/editorWidget.tsx:155](https://github.com/cancerberoSgx/accursed/blob/978b980/src/editorWidget/editorWidget.tsx#L155)*

___

___
<a id="editorgutterstyle"></a>

### `<Const>` editorGutterStyle

**editorGutterStyle**: *`object`*

*Defined in [editorWidget/editorWidget.tsx:201](https://github.com/cancerberoSgx/accursed/blob/978b980/src/editorWidget/editorWidget.tsx#L201)*

<a id="editorgutterstyle.bg"></a>

####  bg

**● bg**: *`string`* = "blue"

*Defined in [editorWidget/editorWidget.tsx:202](https://github.com/cancerberoSgx/accursed/blob/978b980/src/editorWidget/editorWidget.tsx#L202)*

___
<a id="editorgutterstyle.currentline"></a>

####  currentLine

**● currentLine**: *`string`* = "{white-bg}{black-fg}{bold}"

*Defined in [editorWidget/editorWidget.tsx:203](https://github.com/cancerberoSgx/accursed/blob/978b980/src/editorWidget/editorWidget.tsx#L203)*

___

___
<a id="editorperf"></a>

### `<Const>` editorPerf

**editorPerf**: *`object`*

*Defined in [editorWidget/editorWidget.tsx:206](https://github.com/cancerberoSgx/accursed/blob/978b980/src/editorWidget/editorWidget.tsx#L206)*

<a id="editorperf.matchesrenderthrottle"></a>

####  matchesRenderThrottle

**● matchesRenderThrottle**: *`number`* = 150

*Defined in [editorWidget/editorWidget.tsx:207](https://github.com/cancerberoSgx/accursed/blob/978b980/src/editorWidget/editorWidget.tsx#L207)*

___
<a id="editorperf.updatecontentthrottle"></a>

####  updateContentThrottle

**● updateContentThrottle**: *`number`* = 16

*Defined in [editorWidget/editorWidget.tsx:208](https://github.com/cancerberoSgx/accursed/blob/978b980/src/editorWidget/editorWidget.tsx#L208)*

___

___
<a id="editorstyle"></a>

### `<Const>` editorStyle

**editorStyle**: *`object`*

*Defined in [editorWidget/editorWidget.tsx:165](https://github.com/cancerberoSgx/accursed/blob/978b980/src/editorWidget/editorWidget.tsx#L165)*

<a id="editorstyle.attribute"></a>

####  attribute

**● attribute**: *`string`* = "{yellow-fg}"

*Defined in [editorWidget/editorWidget.tsx:194](https://github.com/cancerberoSgx/accursed/blob/978b980/src/editorWidget/editorWidget.tsx#L194)*

___
<a id="editorstyle.built_in"></a>

####  built_in

**● built_in**: *`string`* = "{yellow-fg}"

*Defined in [editorWidget/editorWidget.tsx:172](https://github.com/cancerberoSgx/accursed/blob/978b980/src/editorWidget/editorWidget.tsx#L172)*

___
<a id="editorstyle.bullet"></a>

####  bullet

**● bullet**: *`string`* = "{magenta-fg}"

*Defined in [editorWidget/editorWidget.tsx:193](https://github.com/cancerberoSgx/accursed/blob/978b980/src/editorWidget/editorWidget.tsx#L193)*

___
<a id="editorstyle.class"></a>

####  class

**● class**: *`string`* = "{yellow-fg}"

*Defined in [editorWidget/editorWidget.tsx:176](https://github.com/cancerberoSgx/accursed/blob/978b980/src/editorWidget/editorWidget.tsx#L176)*

___
<a id="editorstyle.code"></a>

####  code

**● code**: *`string`* = "{green-fg}"

*Defined in [editorWidget/editorWidget.tsx:190](https://github.com/cancerberoSgx/accursed/blob/978b980/src/editorWidget/editorWidget.tsx#L190)*

___
<a id="editorstyle.comment"></a>

####  comment

**● comment**: *`string`* = "{gray-fg}"

*Defined in [editorWidget/editorWidget.tsx:187](https://github.com/cancerberoSgx/accursed/blob/978b980/src/editorWidget/editorWidget.tsx#L187)*

___
<a id="editorstyle.constant"></a>

####  constant

**● constant**: *`string`* = "{yellow-fg}"

*Defined in [editorWidget/editorWidget.tsx:199](https://github.com/cancerberoSgx/accursed/blob/978b980/src/editorWidget/editorWidget.tsx#L199)*

___
<a id="editorstyle.decorator"></a>

####  decorator

**● decorator**: *`string`* = "{bold}"

*Defined in [editorWidget/editorWidget.tsx:178](https://github.com/cancerberoSgx/accursed/blob/978b980/src/editorWidget/editorWidget.tsx#L178)*

___
<a id="editorstyle.function"></a>

####  function

**● function**: *`string`* = "{yellow-fg}"

*Defined in [editorWidget/editorWidget.tsx:177](https://github.com/cancerberoSgx/accursed/blob/978b980/src/editorWidget/editorWidget.tsx#L177)*

___
<a id="editorstyle.header"></a>

####  header

**● header**: *`string`* = "{bold}"

*Defined in [editorWidget/editorWidget.tsx:188](https://github.com/cancerberoSgx/accursed/blob/978b980/src/editorWidget/editorWidget.tsx#L188)*

___
<a id="editorstyle.keyword"></a>

####  keyword

**● keyword**: *`string`* = "{red-fg}"

*Defined in [editorWidget/editorWidget.tsx:171](https://github.com/cancerberoSgx/accursed/blob/978b980/src/editorWidget/editorWidget.tsx#L171)*

___
<a id="editorstyle.label"></a>

####  label

**● label**: *`string`* = ""

*Defined in [editorWidget/editorWidget.tsx:197](https://github.com/cancerberoSgx/accursed/blob/978b980/src/editorWidget/editorWidget.tsx#L197)*

___
<a id="editorstyle.link_label"></a>

####  link_label

**● link_label**: *`string`* = ""

*Defined in [editorWidget/editorWidget.tsx:191](https://github.com/cancerberoSgx/accursed/blob/978b980/src/editorWidget/editorWidget.tsx#L191)*

___
<a id="editorstyle.link_url"></a>

####  link_url

**● link_url**: *`string`* = "{yellow-fg}"

*Defined in [editorWidget/editorWidget.tsx:192](https://github.com/cancerberoSgx/accursed/blob/978b980/src/editorWidget/editorWidget.tsx#L192)*

___
<a id="editorstyle.literal"></a>

####  literal

**● literal**: *`string`* = "{green-fg}{bold}"

*Defined in [editorWidget/editorWidget.tsx:186](https://github.com/cancerberoSgx/accursed/blob/978b980/src/editorWidget/editorWidget.tsx#L186)*

___
<a id="editorstyle.match"></a>

####  match

**● match**: *`string`* = "{yellow-bg}"

*Defined in [editorWidget/editorWidget.tsx:167](https://github.com/cancerberoSgx/accursed/blob/978b980/src/editorWidget/editorWidget.tsx#L167)*

___
<a id="editorstyle.matchingbracket"></a>

####  matchingBracket

**● matchingBracket**: *`string`* = "{green-bg}{bold}"

*Defined in [editorWidget/editorWidget.tsx:168](https://github.com/cancerberoSgx/accursed/blob/978b980/src/editorWidget/editorWidget.tsx#L168)*

___
<a id="editorstyle.mismatchedbracket"></a>

####  mismatchedBracket

**● mismatchedBracket**: *`string`* = "{red-bg}{bold}"

*Defined in [editorWidget/editorWidget.tsx:169](https://github.com/cancerberoSgx/accursed/blob/978b980/src/editorWidget/editorWidget.tsx#L169)*

___
<a id="editorstyle.number"></a>

####  number

**● number**: *`string`* = "{green-fg}{bold}"

*Defined in [editorWidget/editorWidget.tsx:183](https://github.com/cancerberoSgx/accursed/blob/978b980/src/editorWidget/editorWidget.tsx#L183)*

___
<a id="editorstyle.operator"></a>

####  operator

**● operator**: *`string`* = "{green-fg}"

*Defined in [editorWidget/editorWidget.tsx:181](https://github.com/cancerberoSgx/accursed/blob/978b980/src/editorWidget/editorWidget.tsx#L181)*

___
<a id="editorstyle.params"></a>

####  params

**● params**: *`string`* = "{yellow-fg}"

*Defined in [editorWidget/editorWidget.tsx:175](https://github.com/cancerberoSgx/accursed/blob/978b980/src/editorWidget/editorWidget.tsx#L175)*

___
<a id="editorstyle.preprocessor"></a>

####  preprocessor

**● preprocessor**: *`string`* = "{red-fg}"

*Defined in [editorWidget/editorWidget.tsx:173](https://github.com/cancerberoSgx/accursed/blob/978b980/src/editorWidget/editorWidget.tsx#L173)*

___
<a id="editorstyle.regexp"></a>

####  regexp

**● regexp**: *`string`* = "{green-fg}{bold}"

*Defined in [editorWidget/editorWidget.tsx:185](https://github.com/cancerberoSgx/accursed/blob/978b980/src/editorWidget/editorWidget.tsx#L185)*

___
<a id="editorstyle.selection"></a>

####  selection

**● selection**: *`string`* = "{lightgray-bg}{black-fg}{bold}"

*Defined in [editorWidget/editorWidget.tsx:166](https://github.com/cancerberoSgx/accursed/blob/978b980/src/editorWidget/editorWidget.tsx#L166)*

___
<a id="editorstyle.setting"></a>

####  setting

**● setting**: *`string`* = ""

*Defined in [editorWidget/editorWidget.tsx:196](https://github.com/cancerberoSgx/accursed/blob/978b980/src/editorWidget/editorWidget.tsx#L196)*

___
<a id="editorstyle.shebang"></a>

####  shebang

**● shebang**: *`string`* = "{yellow-bg}{black-fg}"

*Defined in [editorWidget/editorWidget.tsx:179](https://github.com/cancerberoSgx/accursed/blob/978b980/src/editorWidget/editorWidget.tsx#L179)*

___
<a id="editorstyle.string"></a>

####  string

**● string**: *`string`* = "{green-fg}{bold}"

*Defined in [editorWidget/editorWidget.tsx:184](https://github.com/cancerberoSgx/accursed/blob/978b980/src/editorWidget/editorWidget.tsx#L184)*

___
<a id="editorstyle.strong"></a>

####  strong

**● strong**: *`string`* = "{bold}"

*Defined in [editorWidget/editorWidget.tsx:189](https://github.com/cancerberoSgx/accursed/blob/978b980/src/editorWidget/editorWidget.tsx#L189)*

___
<a id="editorstyle.subst"></a>

####  subst

**● subst**: *`string`* = ""

*Defined in [editorWidget/editorWidget.tsx:182](https://github.com/cancerberoSgx/accursed/blob/978b980/src/editorWidget/editorWidget.tsx#L182)*

___
<a id="editorstyle.symbol"></a>

####  symbol

**● symbol**: *`string`* = "{red-fg}"

*Defined in [editorWidget/editorWidget.tsx:198](https://github.com/cancerberoSgx/accursed/blob/978b980/src/editorWidget/editorWidget.tsx#L198)*

___
<a id="editorstyle.title"></a>

####  title

**● title**: *`string`* = "{underline}"

*Defined in [editorWidget/editorWidget.tsx:174](https://github.com/cancerberoSgx/accursed/blob/978b980/src/editorWidget/editorWidget.tsx#L174)*

___
<a id="editorstyle.value"></a>

####  value

**● value**: *`string`* = "{green-fg}{bold}"

*Defined in [editorWidget/editorWidget.tsx:195](https://github.com/cancerberoSgx/accursed/blob/978b980/src/editorWidget/editorWidget.tsx#L195)*

___
<a id="editorstyle.variable"></a>

####  variable

**● variable**: *`string`* = "{yellow-fg}"

*Defined in [editorWidget/editorWidget.tsx:180](https://github.com/cancerberoSgx/accursed/blob/978b980/src/editorWidget/editorWidget.tsx#L180)*

___
<a id="editorstyle.whitespace"></a>

####  whiteSpace

**● whiteSpace**: *`string`* = "{blue-fg}"

*Defined in [editorWidget/editorWidget.tsx:170](https://github.com/cancerberoSgx/accursed/blob/978b980/src/editorWidget/editorWidget.tsx#L170)*

___

___

