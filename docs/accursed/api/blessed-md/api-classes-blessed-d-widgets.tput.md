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

*Defined in [blessed.d.ts:1580](https://github.com/cancerberoSgx/accursed/blob/7a42e78/src/declarations/blessed.d.ts#L1580)*

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

*Defined in [blessed.d.ts:1588](https://github.com/cancerberoSgx/accursed/blob/7a42e78/src/declarations/blessed.d.ts#L1588)*

___
<a id="error"></a>

###  error

**● error**: *`Error`*

*Defined in [blessed.d.ts:1596](https://github.com/cancerberoSgx/accursed/blob/7a42e78/src/declarations/blessed.d.ts#L1596)*

___
<a id="extended"></a>

###  extended

**● extended**: *`boolean`*

*Defined in [blessed.d.ts:1590](https://github.com/cancerberoSgx/accursed/blob/7a42e78/src/declarations/blessed.d.ts#L1590)*

___
<a id="options"></a>

###  options

**● options**: *[TputsOptions](api-interfaces-blessed-d-widgets.tputsoptions.md)*

*Implementation of [IHasOptions](api-interfaces-blessed-d-widgets.ihasoptions.md).[options](api-interfaces-blessed-d-widgets.ihasoptions.md#options)*

*Defined in [blessed.d.ts:1586](https://github.com/cancerberoSgx/accursed/blob/7a42e78/src/declarations/blessed.d.ts#L1586)*

Original options object.

___
<a id="padding"></a>

###  padding

**● padding**: *`boolean`*

*Defined in [blessed.d.ts:1589](https://github.com/cancerberoSgx/accursed/blob/7a42e78/src/declarations/blessed.d.ts#L1589)*

___
<a id="printf"></a>

###  printf

**● printf**: *`boolean`*

*Defined in [blessed.d.ts:1591](https://github.com/cancerberoSgx/accursed/blob/7a42e78/src/declarations/blessed.d.ts#L1591)*

___
<a id="termcap"></a>

###  termcap

**● termcap**: *`string`*

*Defined in [blessed.d.ts:1592](https://github.com/cancerberoSgx/accursed/blob/7a42e78/src/declarations/blessed.d.ts#L1592)*

___
<a id="termcapfile"></a>

###  termcapFile

**● termcapFile**: *`string`*

*Defined in [blessed.d.ts:1595](https://github.com/cancerberoSgx/accursed/blob/7a42e78/src/declarations/blessed.d.ts#L1595)*

___
<a id="terminal"></a>

###  terminal

**● terminal**: *`string`*

*Defined in [blessed.d.ts:1597](https://github.com/cancerberoSgx/accursed/blob/7a42e78/src/declarations/blessed.d.ts#L1597)*

___
<a id="terminfofile"></a>

###  terminfoFile

**● terminfoFile**: *`string`*

*Defined in [blessed.d.ts:1594](https://github.com/cancerberoSgx/accursed/blob/7a42e78/src/declarations/blessed.d.ts#L1594)*

___
<a id="terminfoprefix"></a>

###  terminfoPrefix

**● terminfoPrefix**: *`string`*

*Defined in [blessed.d.ts:1593](https://github.com/cancerberoSgx/accursed/blob/7a42e78/src/declarations/blessed.d.ts#L1593)*

___

## Methods

<a id="parseterminfo"></a>

###  parseTerminfo

▸ **parseTerminfo**(data: *`any`*, file: *`string`*): `object`

*Defined in [blessed.d.ts:1602](https://github.com/cancerberoSgx/accursed/blob/7a42e78/src/declarations/blessed.d.ts#L1602)*

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

*Defined in [blessed.d.ts:1601](https://github.com/cancerberoSgx/accursed/blob/7a42e78/src/declarations/blessed.d.ts#L1601)*

**Parameters:**

| Name | Type |
| ------ | ------ |
| term | `string` |

**Returns:** `string`

___
<a id="setup"></a>

###  setup

▸ **setup**(): `void`

*Defined in [blessed.d.ts:1599](https://github.com/cancerberoSgx/accursed/blob/7a42e78/src/declarations/blessed.d.ts#L1599)*

**Returns:** `void`

___
<a id="term"></a>

###  term

▸ **term**(is: *`any`*): `boolean`

*Defined in [blessed.d.ts:1600](https://github.com/cancerberoSgx/accursed/blob/7a42e78/src/declarations/blessed.d.ts#L1600)*

**Parameters:**

| Name | Type |
| ------ | ------ |
| is | `any` |

**Returns:** `boolean`

___

