---
id: api-classes-blessed-d-widgets.tput
title: Tput
sidebar_label: Tput
---

[blessed](api-readme.md) > [[blessed.d Module]](api-modules-blessed-d-module.md) > [Widgets](api-modules-blessed-d-widgets.md) > [Tput](api-classes-blessed-d-widgets.tput.md)

## Class

## Hierarchy

**Tput**

## Implements

* [IHasOptions](api-interfaces-blessed-d-widgets.ihasoptions.md)<[TputsOptions](api-interfaces-blessed-d-widgets.tputsoptions.md)>

### Constructors

* [constructor](api-classes-blessed-d-widgets.tput.md#constructor)

### Properties

* [debug](api-classes-blessed-d-widgets.tput.md#debug)
* [error](api-classes-blessed-d-widgets.tput.md#error)
* [extended](api-classes-blessed-d-widgets.tput.md#extended)
* [options](api-classes-blessed-d-widgets.tput.md#options)
* [padding](api-classes-blessed-d-widgets.tput.md#padding)
* [printf](api-classes-blessed-d-widgets.tput.md#printf)
* [termcap](api-classes-blessed-d-widgets.tput.md#termcap)
* [termcapFile](api-classes-blessed-d-widgets.tput.md#termcapfile)
* [terminal](api-classes-blessed-d-widgets.tput.md#terminal)
* [terminfoFile](api-classes-blessed-d-widgets.tput.md#terminfofile)
* [terminfoPrefix](api-classes-blessed-d-widgets.tput.md#terminfoprefix)

### Methods

* [parseTerminfo](api-classes-blessed-d-widgets.tput.md#parseterminfo)
* [readTerminfo](api-classes-blessed-d-widgets.tput.md#readterminfo)
* [setup](api-classes-blessed-d-widgets.tput.md#setup)
* [term](api-classes-blessed-d-widgets.tput.md#term)

---

## Constructors

<a id="constructor"></a>

###  constructor

⊕ **new Tput**(opts: *[TputsOptions](api-interfaces-blessed-d-widgets.tputsoptions.md)*): [Tput](api-classes-blessed-d-widgets.tput.md)

*Defined in [blessed.d.ts:1568](https://github.com/cancerberoSgx/accursed/blob/f66c8ce/src/declarations/blessed.d.ts#L1568)*

**Parameters:**

| Name | Type |
| ------ | ------ |
| opts | [TputsOptions](api-interfaces-blessed-d-widgets.tputsoptions.md) |

**Returns:** [Tput](api-classes-blessed-d-widgets.tput.md)

___

## Properties

<a id="debug"></a>

###  debug

**● debug**: *`boolean`*

*Defined in [blessed.d.ts:1576](https://github.com/cancerberoSgx/accursed/blob/f66c8ce/src/declarations/blessed.d.ts#L1576)*

___
<a id="error"></a>

###  error

**● error**: *`Error`*

*Defined in [blessed.d.ts:1584](https://github.com/cancerberoSgx/accursed/blob/f66c8ce/src/declarations/blessed.d.ts#L1584)*

___
<a id="extended"></a>

###  extended

**● extended**: *`boolean`*

*Defined in [blessed.d.ts:1578](https://github.com/cancerberoSgx/accursed/blob/f66c8ce/src/declarations/blessed.d.ts#L1578)*

___
<a id="options"></a>

###  options

**● options**: *[TputsOptions](api-interfaces-blessed-d-widgets.tputsoptions.md)*

*Implementation of [IHasOptions](api-interfaces-blessed-d-widgets.ihasoptions.md).[options](api-interfaces-blessed-d-widgets.ihasoptions.md#options)*

*Defined in [blessed.d.ts:1574](https://github.com/cancerberoSgx/accursed/blob/f66c8ce/src/declarations/blessed.d.ts#L1574)*

Original options object.

___
<a id="padding"></a>

###  padding

**● padding**: *`boolean`*

*Defined in [blessed.d.ts:1577](https://github.com/cancerberoSgx/accursed/blob/f66c8ce/src/declarations/blessed.d.ts#L1577)*

___
<a id="printf"></a>

###  printf

**● printf**: *`boolean`*

*Defined in [blessed.d.ts:1579](https://github.com/cancerberoSgx/accursed/blob/f66c8ce/src/declarations/blessed.d.ts#L1579)*

___
<a id="termcap"></a>

###  termcap

**● termcap**: *`string`*

*Defined in [blessed.d.ts:1580](https://github.com/cancerberoSgx/accursed/blob/f66c8ce/src/declarations/blessed.d.ts#L1580)*

___
<a id="termcapfile"></a>

###  termcapFile

**● termcapFile**: *`string`*

*Defined in [blessed.d.ts:1583](https://github.com/cancerberoSgx/accursed/blob/f66c8ce/src/declarations/blessed.d.ts#L1583)*

___
<a id="terminal"></a>

###  terminal

**● terminal**: *`string`*

*Defined in [blessed.d.ts:1585](https://github.com/cancerberoSgx/accursed/blob/f66c8ce/src/declarations/blessed.d.ts#L1585)*

___
<a id="terminfofile"></a>

###  terminfoFile

**● terminfoFile**: *`string`*

*Defined in [blessed.d.ts:1582](https://github.com/cancerberoSgx/accursed/blob/f66c8ce/src/declarations/blessed.d.ts#L1582)*

___
<a id="terminfoprefix"></a>

###  terminfoPrefix

**● terminfoPrefix**: *`string`*

*Defined in [blessed.d.ts:1581](https://github.com/cancerberoSgx/accursed/blob/f66c8ce/src/declarations/blessed.d.ts#L1581)*

___

## Methods

<a id="parseterminfo"></a>

###  parseTerminfo

▸ **parseTerminfo**(data: *`any`*, file: *`string`*): `object`

*Defined in [blessed.d.ts:1590](https://github.com/cancerberoSgx/accursed/blob/f66c8ce/src/declarations/blessed.d.ts#L1590)*

**Parameters:**

| Name | Type |
| ------ | ------ |
| data | `any` |
| file | `string` |

**Returns:** `object`

___
<a id="readterminfo"></a>

###  readTerminfo

▸ **readTerminfo**(term: *`string`*): `string`

*Defined in [blessed.d.ts:1589](https://github.com/cancerberoSgx/accursed/blob/f66c8ce/src/declarations/blessed.d.ts#L1589)*

**Parameters:**

| Name | Type |
| ------ | ------ |
| term | `string` |

**Returns:** `string`

___
<a id="setup"></a>

###  setup

▸ **setup**(): `void`

*Defined in [blessed.d.ts:1587](https://github.com/cancerberoSgx/accursed/blob/f66c8ce/src/declarations/blessed.d.ts#L1587)*

**Returns:** `void`

___
<a id="term"></a>

###  term

▸ **term**(is: *`any`*): `boolean`

*Defined in [blessed.d.ts:1588](https://github.com/cancerberoSgx/accursed/blob/f66c8ce/src/declarations/blessed.d.ts#L1588)*

**Parameters:**

| Name | Type |
| ------ | ------ |
| is | `any` |

**Returns:** `boolean`

___

