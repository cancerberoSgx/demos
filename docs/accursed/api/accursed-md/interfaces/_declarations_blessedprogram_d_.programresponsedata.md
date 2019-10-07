[accursed](../README.md) › [Globals](../globals.md) › ["declarations/blessedProgram.d"](../modules/_declarations_blessedprogram_d_.md) › [ProgramResponseData](_declarations_blessedprogram_d_.programresponsedata.md)

# Interface: ProgramResponseData

A general representation of the data object received callbacks  of program's write operation  on the
output.

 In general, each event type will respond with a data object that is mixed into this data object
 properties, and also is available individually in some of its properties, For example a  'device-status'
 request will respond with a 'status property with only that information but also the properties mixed in
 the object itself'

## Hierarchy

* **ProgramResponseData**

## Indexable

* \[ **k**: *string*\]: any

A general representation of the data object received callbacks  of program's write operation  on the
output.

 In general, each event type will respond with a data object that is mixed into this data object
 properties, and also is available individually in some of its properties, For example a  'device-status'
 request will respond with a 'status property with only that information but also the properties mixed in
 the object itself'

## Index

### Properties

* [code](_declarations_blessedprogram_d_.programresponsedata.md#code)
* [cursor](_declarations_blessedprogram_d_.programresponsedata.md#optional-cursor)
* [event](_declarations_blessedprogram_d_.programresponsedata.md#event)
* [height](_declarations_blessedprogram_d_.programresponsedata.md#optional-height)
* [page](_declarations_blessedprogram_d_.programresponsedata.md#optional-page)
* [size](_declarations_blessedprogram_d_.programresponsedata.md#optional-size)
* [status](_declarations_blessedprogram_d_.programresponsedata.md#optional-status)
* [textAreaSizeCharacters](_declarations_blessedprogram_d_.programresponsedata.md#optional-textareasizecharacters)
* [type](_declarations_blessedprogram_d_.programresponsedata.md#type)
* [width](_declarations_blessedprogram_d_.programresponsedata.md#optional-width)
* [x](_declarations_blessedprogram_d_.programresponsedata.md#optional-x)
* [y](_declarations_blessedprogram_d_.programresponsedata.md#optional-y)

## Properties

###  code

• **code**: *string*

*Defined in [declarations/blessedProgram.d.ts:27](https://github.com/cancerberoSgx/accursed/blob/5b2518e/src/declarations/blessedProgram.d.ts#L27)*

Example: '', 'DSR'

___

### `Optional` cursor

• **cursor**? : *object*

*Defined in [declarations/blessedProgram.d.ts:50](https://github.com/cancerberoSgx/accursed/blob/5b2518e/src/declarations/blessedProgram.d.ts#L50)*

#### Type declaration:

* **page**: *undefined*

* **x**: *1*

* **y**: *1*

___

###  event

• **event**: *string*

*Defined in [declarations/blessedProgram.d.ts:22](https://github.com/cancerberoSgx/accursed/blob/5b2518e/src/declarations/blessedProgram.d.ts#L22)*

The event type that was requested / write that caused this response. Example: 'window-manipulation',
'device-attributes', 'device-status', etc.

___

### `Optional` height

• **height**? : *number*

*Defined in [declarations/blessedProgram.d.ts:40](https://github.com/cancerberoSgx/accursed/blob/5b2518e/src/declarations/blessedProgram.d.ts#L40)*

___

### `Optional` page

• **page**? : *any*

*Defined in [declarations/blessedProgram.d.ts:47](https://github.com/cancerberoSgx/accursed/blob/5b2518e/src/declarations/blessedProgram.d.ts#L47)*

___

### `Optional` size

• **size**? : *object*

*Defined in [declarations/blessedProgram.d.ts:36](https://github.com/cancerberoSgx/accursed/blob/5b2518e/src/declarations/blessedProgram.d.ts#L36)*

#### Type declaration:

* **height**: *number*

* **width**: *number*

___

### `Optional` status

• **status**? : *object*

*Defined in [declarations/blessedProgram.d.ts:42](https://github.com/cancerberoSgx/accursed/blob/5b2518e/src/declarations/blessedProgram.d.ts#L42)*

#### Type declaration:

* **page**? : *number*

* **x**? : *number*

* **y**: *number*

___

### `Optional` textAreaSizeCharacters

• **textAreaSizeCharacters**? : *object*

*Defined in [declarations/blessedProgram.d.ts:55](https://github.com/cancerberoSgx/accursed/blob/5b2518e/src/declarations/blessedProgram.d.ts#L55)*

#### Type declaration:

* **height**: *number*

* **width**: *number*

___

###  type

• **type**: *string*

*Defined in [declarations/blessedProgram.d.ts:34](https://github.com/cancerberoSgx/accursed/blob/5b2518e/src/declarations/blessedProgram.d.ts#L34)*

Identifies the request type that caused this response. For example, if a  'window-manipulation' is
written the response type could be 'textarea-size',  example: 'textarea-size',  'cursor-status',

___

### `Optional` width

• **width**? : *number*

*Defined in [declarations/blessedProgram.d.ts:41](https://github.com/cancerberoSgx/accursed/blob/5b2518e/src/declarations/blessedProgram.d.ts#L41)*

___

### `Optional` x

• **x**? : *number*

*Defined in [declarations/blessedProgram.d.ts:48](https://github.com/cancerberoSgx/accursed/blob/5b2518e/src/declarations/blessedProgram.d.ts#L48)*

___

### `Optional` y

• **y**? : *number*

*Defined in [declarations/blessedProgram.d.ts:49](https://github.com/cancerberoSgx/accursed/blob/5b2518e/src/declarations/blessedProgram.d.ts#L49)*
