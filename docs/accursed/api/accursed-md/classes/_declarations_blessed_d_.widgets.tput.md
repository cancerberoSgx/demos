[accursed](../README.md) > ["declarations/blessed.d"](../modules/_declarations_blessed_d_.md) > [Widgets](../modules/_declarations_blessed_d_.widgets.md) > [Tput](../classes/_declarations_blessed_d_.widgets.tput.md)

# Class: Tput

Low level implementation of tput protocol to dialogue with terminal implementations.

## Hierarchy

**Tput**

## Implements

* [IHasOptions](../interfaces/_declarations_blessed_d_.widgets.ihasoptions.md)<[TputsOptions](../interfaces/_declarations_blessed_d_.widgets.tputsoptions.md)>

## Index

### Constructors

* [constructor](_declarations_blessed_d_.widgets.tput.md#constructor)

### Properties

* [debug](_declarations_blessed_d_.widgets.tput.md#debug)
* [error](_declarations_blessed_d_.widgets.tput.md#error)
* [extended](_declarations_blessed_d_.widgets.tput.md#extended)
* [options](_declarations_blessed_d_.widgets.tput.md#options)
* [padding](_declarations_blessed_d_.widgets.tput.md#padding)
* [printf](_declarations_blessed_d_.widgets.tput.md#printf)
* [termcap](_declarations_blessed_d_.widgets.tput.md#termcap)
* [termcapFile](_declarations_blessed_d_.widgets.tput.md#termcapfile)
* [terminal](_declarations_blessed_d_.widgets.tput.md#terminal)
* [terminfoFile](_declarations_blessed_d_.widgets.tput.md#terminfofile)
* [terminfoPrefix](_declarations_blessed_d_.widgets.tput.md#terminfoprefix)

### Methods

* [parseTerminfo](_declarations_blessed_d_.widgets.tput.md#parseterminfo)
* [readTerminfo](_declarations_blessed_d_.widgets.tput.md#readterminfo)
* [setup](_declarations_blessed_d_.widgets.tput.md#setup)
* [term](_declarations_blessed_d_.widgets.tput.md#term)

---

## Constructors

<a id="constructor"></a>

###  constructor

⊕ **new Tput**(opts: *[TputsOptions](../interfaces/_declarations_blessed_d_.widgets.tputsoptions.md)*): [Tput](_declarations_blessed_d_.widgets.tput.md)

*Defined in [declarations/blessed.d.ts:240](https://github.com/cancerberoSgx/accursed/blob/978b980/src/declarations/blessed.d.ts#L240)*

**Parameters:**

| Name | Type |
| ------ | ------ |
| opts | [TputsOptions](../interfaces/_declarations_blessed_d_.widgets.tputsoptions.md) |

**Returns:** [Tput](_declarations_blessed_d_.widgets.tput.md)

___

## Properties

<a id="debug"></a>

###  debug

**● debug**: *`boolean`*

*Defined in [declarations/blessed.d.ts:248](https://github.com/cancerberoSgx/accursed/blob/978b980/src/declarations/blessed.d.ts#L248)*

___
<a id="error"></a>

###  error

**● error**: *`Error`*

*Defined in [declarations/blessed.d.ts:256](https://github.com/cancerberoSgx/accursed/blob/978b980/src/declarations/blessed.d.ts#L256)*

___
<a id="extended"></a>

###  extended

**● extended**: *`boolean`*

*Defined in [declarations/blessed.d.ts:250](https://github.com/cancerberoSgx/accursed/blob/978b980/src/declarations/blessed.d.ts#L250)*

___
<a id="options"></a>

###  options

**● options**: *[TputsOptions](../interfaces/_declarations_blessed_d_.widgets.tputsoptions.md)*

*Implementation of [IHasOptions](../interfaces/_declarations_blessed_d_.widgets.ihasoptions.md).[options](../interfaces/_declarations_blessed_d_.widgets.ihasoptions.md#options)*

*Defined in [declarations/blessed.d.ts:246](https://github.com/cancerberoSgx/accursed/blob/978b980/src/declarations/blessed.d.ts#L246)*

Original options object.

___
<a id="padding"></a>

###  padding

**● padding**: *`boolean`*

*Defined in [declarations/blessed.d.ts:249](https://github.com/cancerberoSgx/accursed/blob/978b980/src/declarations/blessed.d.ts#L249)*

___
<a id="printf"></a>

###  printf

**● printf**: *`boolean`*

*Defined in [declarations/blessed.d.ts:251](https://github.com/cancerberoSgx/accursed/blob/978b980/src/declarations/blessed.d.ts#L251)*

___
<a id="termcap"></a>

###  termcap

**● termcap**: *`string`*

*Defined in [declarations/blessed.d.ts:252](https://github.com/cancerberoSgx/accursed/blob/978b980/src/declarations/blessed.d.ts#L252)*

___
<a id="termcapfile"></a>

###  termcapFile

**● termcapFile**: *`string`*

*Defined in [declarations/blessed.d.ts:255](https://github.com/cancerberoSgx/accursed/blob/978b980/src/declarations/blessed.d.ts#L255)*

___
<a id="terminal"></a>

###  terminal

**● terminal**: *`string`*

*Defined in [declarations/blessed.d.ts:257](https://github.com/cancerberoSgx/accursed/blob/978b980/src/declarations/blessed.d.ts#L257)*

___
<a id="terminfofile"></a>

###  terminfoFile

**● terminfoFile**: *`string`*

*Defined in [declarations/blessed.d.ts:254](https://github.com/cancerberoSgx/accursed/blob/978b980/src/declarations/blessed.d.ts#L254)*

___
<a id="terminfoprefix"></a>

###  terminfoPrefix

**● terminfoPrefix**: *`string`*

*Defined in [declarations/blessed.d.ts:253](https://github.com/cancerberoSgx/accursed/blob/978b980/src/declarations/blessed.d.ts#L253)*

___

## Methods

<a id="parseterminfo"></a>

###  parseTerminfo

▸ **parseTerminfo**(data: *`any`*, file: *`string`*): `object`

*Defined in [declarations/blessed.d.ts:262](https://github.com/cancerberoSgx/accursed/blob/978b980/src/declarations/blessed.d.ts#L262)*

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

*Defined in [declarations/blessed.d.ts:261](https://github.com/cancerberoSgx/accursed/blob/978b980/src/declarations/blessed.d.ts#L261)*

**Parameters:**

| Name | Type |
| ------ | ------ |
| term | `string` |

**Returns:** `string`

___
<a id="setup"></a>

###  setup

▸ **setup**(): `void`

*Defined in [declarations/blessed.d.ts:259](https://github.com/cancerberoSgx/accursed/blob/978b980/src/declarations/blessed.d.ts#L259)*

**Returns:** `void`

___
<a id="term"></a>

###  term

▸ **term**(is: *`any`*): `boolean`

*Defined in [declarations/blessed.d.ts:260](https://github.com/cancerberoSgx/accursed/blob/978b980/src/declarations/blessed.d.ts#L260)*

**Parameters:**

| Name | Type |
| ------ | ------ |
| is | `any` |

**Returns:** `boolean`

___

