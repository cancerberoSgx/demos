**[mirada](../README.md)**

[Globals](../README.md) › ["command/handlers"](../modules/_command_handlers_.md) › [Command_roiImpl](_command_handlers_.command_roiimpl.md)

# Class: Command_roiImpl

## Hierarchy

* [AbstractCommandHandler](_command_handlers_.abstractcommandhandler.md)‹[roi](../enums/_command_types_.commandname.md#roi)›

  * **Command_roiImpl**

## Implements

* [CommandHandler](../interfaces/_command_types_.commandhandler.md)‹[roi](../enums/_command_types_.commandname.md#roi)›

## Index

### Methods

* [run](_command_handlers_.command_roiimpl.md#run)
* [validate](_command_handlers_.command_roiimpl.md#validate)

## Methods

###  run

▸ **run**(`o`: [Options1](../interfaces/_command_types_.options1.md)‹[roi](../enums/_command_types_.commandname.md#roi)›): *Promise‹object | object›*

*Implementation of [CommandHandler](../interfaces/_command_types_.commandhandler.md)*

*Overrides [AbstractCommandHandler](_command_handlers_.abstractcommandhandler.md).[run](_command_handlers_.abstractcommandhandler.md#abstract-run)*

*Defined in [command/handlers.ts:46](https://github.com/cancerberoSgx/mirada/blob/eecc091/mirada/src/command/handlers.ts#L46)*

**Parameters:**

Name | Type |
------ | ------ |
`o` | [Options1](../interfaces/_command_types_.options1.md)‹[roi](../enums/_command_types_.commandname.md#roi)› |

**Returns:** *Promise‹object | object›*

___

###  validate

▸ **validate**(`c`: Partial‹[Command_roi](../interfaces/_command_handlers_.command_roi.md)›): *Promise‹undefined | "expr is mandatory"›*

*Implementation of [CommandHandler](../interfaces/_command_types_.commandhandler.md)*

*Overrides [AbstractCommandHandler](_command_handlers_.abstractcommandhandler.md).[validate](_command_handlers_.abstractcommandhandler.md#abstract-validate)*

*Defined in [command/handlers.ts:61](https://github.com/cancerberoSgx/mirada/blob/eecc091/mirada/src/command/handlers.ts#L61)*

**Parameters:**

Name | Type |
------ | ------ |
`c` | Partial‹[Command_roi](../interfaces/_command_handlers_.command_roi.md)› |

**Returns:** *Promise‹undefined | "expr is mandatory"›*