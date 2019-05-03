[accursed](../README.md) > ["declarations/blessedProgram.d"](../modules/_declarations_blessedprogram_d_.md) > [ProgramResponseData](../interfaces/_declarations_blessedprogram_d_.programresponsedata.md)

# Interface: ProgramResponseData

A general representation of the data object received callbacks of program's write operation on the output.

In general, each event type will respond with a data object that is mixed into this data object properties, and also is available individually in some of its properties, For example a 'device-status' request will respond with a 'status property with only that information but also the properties mixed in the object itself'

## Hierarchy

**ProgramResponseData**

## Indexable

\[k: `string`\]:&nbsp;`any`
A general representation of the data object received callbacks of program's write operation on the output.

In general, each event type will respond with a data object that is mixed into this data object properties, and also is available individually in some of its properties, For example a 'device-status' request will respond with a 'status property with only that information but also the properties mixed in the object itself'

## Index

### Properties

* [code](_declarations_blessedprogram_d_.programresponsedata.md#code)
* [cursor](_declarations_blessedprogram_d_.programresponsedata.md#cursor)
* [event](_declarations_blessedprogram_d_.programresponsedata.md#event)
* [height](_declarations_blessedprogram_d_.programresponsedata.md#height)
* [page](_declarations_blessedprogram_d_.programresponsedata.md#page-1)
* [size](_declarations_blessedprogram_d_.programresponsedata.md#size)
* [status](_declarations_blessedprogram_d_.programresponsedata.md#status)
* [textAreaSizeCharacters](_declarations_blessedprogram_d_.programresponsedata.md#textareasizecharacters)
* [type](_declarations_blessedprogram_d_.programresponsedata.md#type)
* [width](_declarations_blessedprogram_d_.programresponsedata.md#width-2)
* [x](_declarations_blessedprogram_d_.programresponsedata.md#x-2)
* [y](_declarations_blessedprogram_d_.programresponsedata.md#y-2)

---

## Properties

<a id="code"></a>

###  code

**● code**: *`string`*

*Defined in [declarations/blessedProgram.d.ts:23](https://github.com/cancerberoSgx/accursed/blob/978b980/src/declarations/blessedProgram.d.ts#L23)*

Example: '', 'DSR'

___
<a id="cursor"></a>

### `<Optional>` cursor

**● cursor**: *`object`*

*Defined in [declarations/blessedProgram.d.ts:44](https://github.com/cancerberoSgx/accursed/blob/978b980/src/declarations/blessedProgram.d.ts#L44)*

#### Type declaration

 page: `undefined`

 x: `1`

 y: `1`

___
<a id="event"></a>

###  event

**● event**: *`string`*

*Defined in [declarations/blessedProgram.d.ts:19](https://github.com/cancerberoSgx/accursed/blob/978b980/src/declarations/blessedProgram.d.ts#L19)*

The event type that was requested / write that caused this response. Example: 'window-manipulation', 'device-attributes', 'device-status', etc.

___
<a id="height"></a>

### `<Optional>` height

**● height**: *`number`*

*Defined in [declarations/blessedProgram.d.ts:34](https://github.com/cancerberoSgx/accursed/blob/978b980/src/declarations/blessedProgram.d.ts#L34)*

___
<a id="page-1"></a>

### `<Optional>` page

**● page**: *`any`*

*Defined in [declarations/blessedProgram.d.ts:41](https://github.com/cancerberoSgx/accursed/blob/978b980/src/declarations/blessedProgram.d.ts#L41)*

___
<a id="size"></a>

### `<Optional>` size

**● size**: *`object`*

*Defined in [declarations/blessedProgram.d.ts:30](https://github.com/cancerberoSgx/accursed/blob/978b980/src/declarations/blessedProgram.d.ts#L30)*

#### Type declaration

 height: `number`

 width: `number`

___
<a id="status"></a>

### `<Optional>` status

**● status**: *`object`*

*Defined in [declarations/blessedProgram.d.ts:36](https://github.com/cancerberoSgx/accursed/blob/978b980/src/declarations/blessedProgram.d.ts#L36)*

#### Type declaration

`Optional`  page: `number`

`Optional`  x: `number`

 y: `number`

___
<a id="textareasizecharacters"></a>

### `<Optional>` textAreaSizeCharacters

**● textAreaSizeCharacters**: *`object`*

*Defined in [declarations/blessedProgram.d.ts:49](https://github.com/cancerberoSgx/accursed/blob/978b980/src/declarations/blessedProgram.d.ts#L49)*

#### Type declaration

 height: `number`

 width: `number`

___
<a id="type"></a>

###  type

**● type**: *`string`*

*Defined in [declarations/blessedProgram.d.ts:29](https://github.com/cancerberoSgx/accursed/blob/978b980/src/declarations/blessedProgram.d.ts#L29)*

Identifies the request type that caused this response. For example, if a 'window-manipulation' is written the response type could be 'textarea-size', example: 'textarea-size', 'cursor-status',

___
<a id="width-2"></a>

### `<Optional>` width

**● width**: *`number`*

*Defined in [declarations/blessedProgram.d.ts:35](https://github.com/cancerberoSgx/accursed/blob/978b980/src/declarations/blessedProgram.d.ts#L35)*

___
<a id="x-2"></a>

### `<Optional>` x

**● x**: *`number`*

*Defined in [declarations/blessedProgram.d.ts:42](https://github.com/cancerberoSgx/accursed/blob/978b980/src/declarations/blessedProgram.d.ts#L42)*

___
<a id="y-2"></a>

### `<Optional>` y

**● y**: *`number`*

*Defined in [declarations/blessedProgram.d.ts:43](https://github.com/cancerberoSgx/accursed/blob/978b980/src/declarations/blessedProgram.d.ts#L43)*

___

