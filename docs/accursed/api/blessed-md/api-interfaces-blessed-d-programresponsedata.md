---
id: api-interfaces-blessed-d-programresponsedata
title: ProgramResponseData
sidebar_label: ProgramResponseData
---

[blessed](api-readme.md) > [[blessed.d Module]](api-modules-blessed-d-module.md) > [ProgramResponseData](api-interfaces-blessed-d-programresponsedata.md)

## Interface

A general representation of the data object received callbacks of program's write operation on the output.

In general, each event type will respond with a data object that is mixed into this data object properties, and also is available individually in some of its properties, For example a 'device-status' request will respond with a 'statis property with only that information but also the properties mixed in the object itself'

## Hierarchy

**ProgramResponseData**

## Indexable

\[k: `string`\]:&nbsp;`any`
A general representation of the data object received callbacks of program's write operation on the output.

In general, each event type will respond with a data object that is mixed into this data object properties, and also is available individually in some of its properties, For example a 'device-status' request will respond with a 'statis property with only that information but also the properties mixed in the object itself'

### Properties

* [code](api-interfaces-blessed-d-programresponsedata.md#code)
* [cursor](api-interfaces-blessed-d-programresponsedata.md#cursor)
* [event](api-interfaces-blessed-d-programresponsedata.md#event)
* [height](api-interfaces-blessed-d-programresponsedata.md#height)
* [page](api-interfaces-blessed-d-programresponsedata.md#page-1)
* [size](api-interfaces-blessed-d-programresponsedata.md#size)
* [status](api-interfaces-blessed-d-programresponsedata.md#status)
* [textAreaSizeCharacters](api-interfaces-blessed-d-programresponsedata.md#textareasizecharacters)
* [type](api-interfaces-blessed-d-programresponsedata.md#type)
* [width](api-interfaces-blessed-d-programresponsedata.md#width-2)
* [x](api-interfaces-blessed-d-programresponsedata.md#x-2)
* [y](api-interfaces-blessed-d-programresponsedata.md#y-2)

---

## Properties

<a id="code"></a>

###  code

**● code**: *`string`*

*Defined in [blessed.d.ts:25](https://github.com/cancerberoSgx/accursed/blob/f66c8ce/src/declarations/blessed.d.ts#L25)*

example: '', 'DSR'

___
<a id="cursor"></a>

### `<Optional>` cursor

**● cursor**: *`object`*

*Defined in [blessed.d.ts:35](https://github.com/cancerberoSgx/accursed/blob/f66c8ce/src/declarations/blessed.d.ts#L35)*

#### Type declaration

 page: `undefined`

 x: `1`

 y: `1`

___
<a id="event"></a>

###  event

**● event**: *`string`*

*Defined in [blessed.d.ts:23](https://github.com/cancerberoSgx/accursed/blob/f66c8ce/src/declarations/blessed.d.ts#L23)*

The event type that was requested / write that caused this response. Example: 'window-manipulation', 'device-attributes', 'device-status',

___
<a id="height"></a>

### `<Optional>` height

**● height**: *`number`*

*Defined in [blessed.d.ts:29](https://github.com/cancerberoSgx/accursed/blob/f66c8ce/src/declarations/blessed.d.ts#L29)*

___
<a id="page-1"></a>

### `<Optional>` page

**● page**: *`any`*

*Defined in [blessed.d.ts:32](https://github.com/cancerberoSgx/accursed/blob/f66c8ce/src/declarations/blessed.d.ts#L32)*

___
<a id="size"></a>

### `<Optional>` size

**● size**: *`object`*

*Defined in [blessed.d.ts:28](https://github.com/cancerberoSgx/accursed/blob/f66c8ce/src/declarations/blessed.d.ts#L28)*

#### Type declaration

 height: `number`

 width: `number`

___
<a id="status"></a>

### `<Optional>` status

**● status**: *`object`*

*Defined in [blessed.d.ts:31](https://github.com/cancerberoSgx/accursed/blob/f66c8ce/src/declarations/blessed.d.ts#L31)*

#### Type declaration

`Optional`  page: `number`

`Optional`  x: `number`

 y: `number`

___
<a id="textareasizecharacters"></a>

### `<Optional>` textAreaSizeCharacters

**● textAreaSizeCharacters**: *`object`*

*Defined in [blessed.d.ts:36](https://github.com/cancerberoSgx/accursed/blob/f66c8ce/src/declarations/blessed.d.ts#L36)*

#### Type declaration

 height: `number`

 width: `number`

___
<a id="type"></a>

###  type

**● type**: *`string`*

*Defined in [blessed.d.ts:27](https://github.com/cancerberoSgx/accursed/blob/f66c8ce/src/declarations/blessed.d.ts#L27)*

Identifies the request type that caused this response. For example, if a 'window-manipulation' is written the response type could be 'textarea-size', example: 'textarea-size', 'cursor-status',

___
<a id="width-2"></a>

### `<Optional>` width

**● width**: *`number`*

*Defined in [blessed.d.ts:30](https://github.com/cancerberoSgx/accursed/blob/f66c8ce/src/declarations/blessed.d.ts#L30)*

___
<a id="x-2"></a>

### `<Optional>` x

**● x**: *`number`*

*Defined in [blessed.d.ts:33](https://github.com/cancerberoSgx/accursed/blob/f66c8ce/src/declarations/blessed.d.ts#L33)*

___
<a id="y-2"></a>

### `<Optional>` y

**● y**: *`number`*

*Defined in [blessed.d.ts:34](https://github.com/cancerberoSgx/accursed/blob/f66c8ce/src/declarations/blessed.d.ts#L34)*

___

