**[mirada](../README.md)**

[Globals](../README.md) › ["command/handlers"](../modules/_command_handlers_.md) › [AbstractCommandHandler](_command_handlers_.abstractcommandhandler.md)

# Class: AbstractCommandHandler <**N**>

## Type parameters

▪ **N**: *[CommandName](../enums/_command_types_.commandname.md)*

## Hierarchy

* **AbstractCommandHandler**

  * [Command_asRgbaImpl](_command_handlers_.command_asrgbaimpl.md)

  * [Command_roiImpl](_command_handlers_.command_roiimpl.md)

## Implements

* [CommandHandler](../interfaces/_command_types_.commandhandler.md)‹N›

## Index

### Methods

* [run](_command_handlers_.abstractcommandhandler.md#abstract-run)
* [validate](_command_handlers_.abstractcommandhandler.md#abstract-validate)

## Methods

### `Abstract` run

▸ **run**(`c`: [Options1](../interfaces/_command_types_.options1.md)‹N›): *Promise‹[Result1](../interfaces/_command_types_.result1.md)›*

*Implementation of [CommandHandler](../interfaces/_command_types_.commandhandler.md)*

*Defined in [command/handlers.ts:13](https://github.com/cancerberoSgx/mirada/blob/eecc091/mirada/src/command/handlers.ts#L13)*

**Parameters:**

Name | Type |
------ | ------ |
`c` | [Options1](../interfaces/_command_types_.options1.md)‹N› |

**Returns:** *Promise‹[Result1](../interfaces/_command_types_.result1.md)›*

___

### `Abstract` validate

▸ **validate**(`c`: Partial‹CommandsByName[N]›): *Promise‹undefined | string›*

*Implementation of [CommandHandler](../interfaces/_command_types_.commandhandler.md)*

*Defined in [command/handlers.ts:14](https://github.com/cancerberoSgx/mirada/blob/eecc091/mirada/src/command/handlers.ts#L14)*

**Parameters:**

Name | Type |
------ | ------ |
`c` | Partial‹CommandsByName[N]› |

**Returns:** *Promise‹undefined | string›*