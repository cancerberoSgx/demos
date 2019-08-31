**[mirada](../README.md)**

[Globals](../README.md) › ["command/handlers"](_command_handlers_.md)

# External module: "command/handlers"

## Index

### Classes

* [AbstractCommandHandler](../classes/_command_handlers_.abstractcommandhandler.md)
* [Command_asRgbaImpl](../classes/_command_handlers_.command_asrgbaimpl.md)
* [Command_roiImpl](../classes/_command_handlers_.command_roiimpl.md)

### Interfaces

* [Command_asRgba](../interfaces/_command_handlers_.command_asrgba.md)
* [Command_roi](../interfaces/_command_handlers_.command_roi.md)

### Functions

* [checkCommandInOut](_command_handlers_.md#checkcommandinout)
* [resolveFile](_command_handlers_.md#resolvefile)

### Object literals

* [handlerImplementations](_command_handlers_.md#const-handlerimplementations)

## Functions

###  checkCommandInOut

▸ **checkCommandInOut**(`c`: Partial‹[Command](../interfaces/_command_types_.command.md)‹[CommandName](../enums/_command_types_.commandname.md)››): *undefined | "in (input file) file is mandatory" | "out (output file name) is mandatory"*

*Defined in [command/handlers.ts:17](https://github.com/cancerberoSgx/mirada/blob/eecc091/mirada/src/command/handlers.ts#L17)*

**Parameters:**

Name | Type |
------ | ------ |
`c` | Partial‹[Command](../interfaces/_command_types_.command.md)‹[CommandName](../enums/_command_types_.commandname.md)›› |

**Returns:** *undefined | "in (input file) file is mandatory" | "out (output file name) is mandatory"*

___

###  resolveFile

▸ **resolveFile**(`name`: string, `o`: [Options1](../interfaces/_command_types_.options1.md)‹[CommandName](../enums/_command_types_.commandname.md)›): *Promise‹undefined | [File](../classes/_file_.file.md)›*

*Defined in [command/handlers.ts:71](https://github.com/cancerberoSgx/mirada/blob/eecc091/mirada/src/command/handlers.ts#L71)*

**Parameters:**

Name | Type |
------ | ------ |
`name` | string |
`o` | [Options1](../interfaces/_command_types_.options1.md)‹[CommandName](../enums/_command_types_.commandname.md)› |

**Returns:** *Promise‹undefined | [File](../classes/_file_.file.md)›*

## Object literals

### `Const` handlerImplementations

### ▪ **handlerImplementations**: *object*

*Defined in [command/handlers.ts:66](https://github.com/cancerberoSgx/mirada/blob/eecc091/mirada/src/command/handlers.ts#L66)*

###  __computed

• **__computed**: *[Command_roiImpl](../classes/_command_handlers_.command_roiimpl.md)* =  new Command_roiImpl()

*Defined in [command/handlers.ts:67](https://github.com/cancerberoSgx/mirada/blob/eecc091/mirada/src/command/handlers.ts#L67)*

*Defined in [command/handlers.ts:68](https://github.com/cancerberoSgx/mirada/blob/eecc091/mirada/src/command/handlers.ts#L68)*