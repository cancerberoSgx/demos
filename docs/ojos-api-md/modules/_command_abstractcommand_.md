**[ojos](../README.md)**

[Globals](../README.md) › ["command/abstractCommand"](_command_abstractcommand_.md)

# External module: "command/abstractCommand"

## Index

### Classes

* [AbstractCommandHandler](../classes/_command_abstractcommand_.abstractcommandhandler.md)

### Functions

* [checkCommandInOut](_command_abstractcommand_.md#checkcommandinout)
* [resolveFile](_command_abstractcommand_.md#resolvefile)

## Functions

###  checkCommandInOut

▸ **checkCommandInOut**(`c`: Partial‹[Command](../interfaces/_command_types_.command.md)‹[CommandName](../enums/_command_types_.commandname.md)››): *undefined | "in (input file) file is mandatory" | "out (output file name) is mandatory"*

*Defined in [command/abstractCommand.ts:9](https://github.com/cancerberoSgx/mirada/blob/f2ba50d/ojos/src/command/abstractCommand.ts#L9)*

**Parameters:**

Name | Type |
------ | ------ |
`c` | Partial‹[Command](../interfaces/_command_types_.command.md)‹[CommandName](../enums/_command_types_.commandname.md)›› |

**Returns:** *undefined | "in (input file) file is mandatory" | "out (output file name) is mandatory"*

___

###  resolveFile

▸ **resolveFile**(`name`: string, `o`: [Options1](../interfaces/_command_types_.options1.md)‹[CommandName](../enums/_command_types_.commandname.md)›): *Promise‹undefined | File›*

*Defined in [command/abstractCommand.ts:18](https://github.com/cancerberoSgx/mirada/blob/f2ba50d/ojos/src/command/abstractCommand.ts#L18)*

**Parameters:**

Name | Type |
------ | ------ |
`name` | string |
`o` | [Options1](../interfaces/_command_types_.options1.md)‹[CommandName](../enums/_command_types_.commandname.md)› |

**Returns:** *Promise‹undefined | File›*