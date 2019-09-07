**[ojos](../README.md)**

[Globals](../README.md) › ["command/impl/floodfill"](../modules/_command_impl_floodfill_.md) › [Command_floodFillImpl](_command_impl_floodfill_.command_floodfillimpl.md)

# Class: Command_floodFillImpl

## Hierarchy

* [AbstractCommandHandler](_command_abstractcommand_.abstractcommandhandler.md)‹[floodFill](../enums/_command_types_.commandname.md#floodfill)›

  * **Command_floodFillImpl**

## Implements

* [CommandHandler](../interfaces/_command_types_.commandhandler.md)‹[floodFill](../enums/_command_types_.commandname.md#floodfill)›

## Index

### Methods

* [run](_command_impl_floodfill_.command_floodfillimpl.md#run)
* [validate](_command_impl_floodfill_.command_floodfillimpl.md#validate)

## Methods

###  run

▸ **run**(`o`: [Options1](../interfaces/_command_types_.options1.md)‹[floodFill](../enums/_command_types_.commandname.md#floodfill)›): *Promise‹object | object›*

*Implementation of [CommandHandler](../interfaces/_command_types_.commandhandler.md)*

*Overrides [AbstractCommandHandler](_command_abstractcommand_.abstractcommandhandler.md).[run](_command_abstractcommand_.abstractcommandhandler.md#abstract-run)*

*Defined in [command/impl/floodfill.ts:15](https://github.com/cancerberoSgx/mirada/blob/d83d69e/ojos/src/command/impl/floodfill.ts#L15)*

**Parameters:**

Name | Type |
------ | ------ |
`o` | [Options1](../interfaces/_command_types_.options1.md)‹[floodFill](../enums/_command_types_.commandname.md#floodfill)› |

**Returns:** *Promise‹object | object›*

___

###  validate

▸ **validate**(`c`: Partial‹[Command_floodFill](../interfaces/_command_impl_floodfill_.command_floodfill.md)›): *Promise‹undefined | "in (input file) file is mandatory" | "out (output file name) is mandatory"›*

*Implementation of [CommandHandler](../interfaces/_command_types_.commandhandler.md)*

*Overrides [AbstractCommandHandler](_command_abstractcommand_.abstractcommandhandler.md).[validate](_command_abstractcommand_.abstractcommandhandler.md#abstract-validate)*

*Defined in [command/impl/floodfill.ts:12](https://github.com/cancerberoSgx/mirada/blob/d83d69e/ojos/src/command/impl/floodfill.ts#L12)*

**Parameters:**

Name | Type |
------ | ------ |
`c` | Partial‹[Command_floodFill](../interfaces/_command_impl_floodfill_.command_floodfill.md)› |

**Returns:** *Promise‹undefined | "in (input file) file is mandatory" | "out (output file name) is mandatory"›*