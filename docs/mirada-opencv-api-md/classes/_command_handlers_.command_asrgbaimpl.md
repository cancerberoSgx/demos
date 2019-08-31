**[mirada](../README.md)**

[Globals](../README.md) › ["command/handlers"](../modules/_command_handlers_.md) › [Command_asRgbaImpl](_command_handlers_.command_asrgbaimpl.md)

# Class: Command_asRgbaImpl

## Hierarchy

* [AbstractCommandHandler](_command_handlers_.abstractcommandhandler.md)‹[asRgba](../enums/_command_types_.commandname.md#asrgba)›

  * **Command_asRgbaImpl**

## Implements

* [CommandHandler](../interfaces/_command_types_.commandhandler.md)‹[asRgba](../enums/_command_types_.commandname.md#asrgba)›

## Index

### Methods

* [run](_command_handlers_.command_asrgbaimpl.md#run)
* [validate](_command_handlers_.command_asrgbaimpl.md#validate)

## Methods

###  run

▸ **run**(`o`: [Options1](../interfaces/_command_types_.options1.md)‹[asRgba](../enums/_command_types_.commandname.md#asrgba)›): *Promise‹object | object›*

*Implementation of [CommandHandler](../interfaces/_command_types_.commandhandler.md)*

*Overrides [AbstractCommandHandler](_command_handlers_.abstractcommandhandler.md).[run](_command_handlers_.abstractcommandhandler.md#abstract-run)*

*Defined in [command/handlers.ts:30](https://github.com/cancerberoSgx/mirada/blob/eecc091/mirada/src/command/handlers.ts#L30)*

**Parameters:**

Name | Type |
------ | ------ |
`o` | [Options1](../interfaces/_command_types_.options1.md)‹[asRgba](../enums/_command_types_.commandname.md#asrgba)› |

**Returns:** *Promise‹object | object›*

___

###  validate

▸ **validate**(`c`: Partial‹[Command_asRgba](../interfaces/_command_handlers_.command_asrgba.md)›): *Promise‹undefined | "in (input file) file is mandatory" | "out (output file name) is mandatory"›*

*Implementation of [CommandHandler](../interfaces/_command_types_.commandhandler.md)*

*Overrides [AbstractCommandHandler](_command_handlers_.abstractcommandhandler.md).[validate](_command_handlers_.abstractcommandhandler.md#abstract-validate)*

*Defined in [command/handlers.ts:27](https://github.com/cancerberoSgx/mirada/blob/eecc091/mirada/src/command/handlers.ts#L27)*

**Parameters:**

Name | Type |
------ | ------ |
`c` | Partial‹[Command_asRgba](../interfaces/_command_handlers_.command_asrgba.md)› |

**Returns:** *Promise‹undefined | "in (input file) file is mandatory" | "out (output file name) is mandatory"›*