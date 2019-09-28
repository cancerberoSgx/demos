[ojos](../README.md) › ["opScript/script"](../modules/_opscript_script_.md) › [OpsGenerator](_opscript_script_.opsgenerator.md)

# Class: OpsGenerator

## Hierarchy

* **OpsGenerator**

## Index

### Constructors

* [constructor](_opscript_script_.opsgenerator.md#constructor)

### Properties

* [current](_opscript_script_.opsgenerator.md#protected-current)
* [lines](_opscript_script_.opsgenerator.md#protected-optional-lines)
* [script](_opscript_script_.opsgenerator.md#protected-script)

### Methods

* [next](_opscript_script_.opsgenerator.md#next)

## Constructors

###  constructor

\+ **new OpsGenerator**(`script`: [ParseOptions](../interfaces/_opscript_types_.parseoptions.md) | [ScriptOperation](../modules/_opscript_types_.md#scriptoperation)‹[OperationNames](../enums/_op_metadata_.operationnames.md)›[]): *[OpsGenerator](_opscript_script_.opsgenerator.md)*

*Defined in [opScript/script.ts:97](https://github.com/cancerberoSgx/mirada/blob/3544b58/ojos/src/opScript/script.ts#L97)*

**Parameters:**

Name | Type |
------ | ------ |
`script` | [ParseOptions](../interfaces/_opscript_types_.parseoptions.md) &#124; [ScriptOperation](../modules/_opscript_types_.md#scriptoperation)‹[OperationNames](../enums/_op_metadata_.operationnames.md)›[] |

**Returns:** *[OpsGenerator](_opscript_script_.opsgenerator.md)*

## Properties

### `Protected` current

• **current**: *number* = 0

*Defined in [opScript/script.ts:96](https://github.com/cancerberoSgx/mirada/blob/3544b58/ojos/src/opScript/script.ts#L96)*

___

### `Protected` `Optional` lines

• **lines**? : *string[]*

*Defined in [opScript/script.ts:97](https://github.com/cancerberoSgx/mirada/blob/3544b58/ojos/src/opScript/script.ts#L97)*

___

### `Protected` script

• **script**: *[ParseOptions](../interfaces/_opscript_types_.parseoptions.md) | [ScriptOperation](../modules/_opscript_types_.md#scriptoperation)‹[OperationNames](../enums/_op_metadata_.operationnames.md)›[]*

*Defined in [opScript/script.ts:98](https://github.com/cancerberoSgx/mirada/blob/3544b58/ojos/src/opScript/script.ts#L98)*

## Methods

###  next

▸ **next**(`o`: [ScriptContext](../interfaces/_opscript_types_.scriptcontext.md)): *Promise‹undefined | object & object›*

*Defined in [opScript/script.ts:101](https://github.com/cancerberoSgx/mirada/blob/3544b58/ojos/src/opScript/script.ts#L101)*

**Parameters:**

Name | Type |
------ | ------ |
`o` | [ScriptContext](../interfaces/_opscript_types_.scriptcontext.md) |

**Returns:** *Promise‹undefined | object & object›*
