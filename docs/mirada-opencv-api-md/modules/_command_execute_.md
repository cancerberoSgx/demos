**[mirada](../README.md)**

[Globals](../README.md) › ["command/execute"](_command_execute_.md)

# External module: "command/execute"

## Index

### Functions

* [deleteResult](_command_execute_.md#deleteresult)
* [execute](_command_execute_.md#execute)
* [execute1](_command_execute_.md#execute1)

## Functions

###  deleteResult

▸ **deleteResult**(`r`: [Result](../interfaces/_command_types_.result.md)): *void*

*Defined in [command/execute.ts:46](https://github.com/cancerberoSgx/mirada/blob/eecc091/mirada/src/command/execute.ts#L46)*

**Parameters:**

Name | Type |
------ | ------ |
`r` | [Result](../interfaces/_command_types_.result.md) |

**Returns:** *void*

___

###  execute

▸ **execute**(`options`: [Options](../interfaces/_command_types_.options.md) | [Command](../interfaces/_command_types_.command.md)‹[CommandName](../enums/_command_types_.commandname.md)›[]): *Promise‹object›*

*Defined in [command/execute.ts:16](https://github.com/cancerberoSgx/mirada/blob/eecc091/mirada/src/command/execute.ts#L16)*

Declarative opencv operations. the idea is to be able to represent opencv operations as commands (json
serializable objects) so we can execute them as scripts. This provides with a declarative language which
can be used to build a command line interface for example.

 * Files are referenced as strings using File.name.
 * initially execute() will accept a list of files that will be available to commands - Options.files
 * commands in general always accept an input file - Command.in
 * If a file referenced Command.in is not included in Options.files, then by default it will tried to be
   loaded using File.fromUrl or File.fromFile

**Parameters:**

Name | Type |
------ | ------ |
`options` | [Options](../interfaces/_command_types_.options.md) \| [Command](../interfaces/_command_types_.command.md)‹[CommandName](../enums/_command_types_.commandname.md)›[] |

**Returns:** *Promise‹object›*

___

###  execute1

▸ **execute1**<**T**>(`options`: [Options1](../interfaces/_command_types_.options1.md)‹T› | [Command](../interfaces/_command_types_.command.md)‹T›): *Promise‹[Result1](../interfaces/_command_types_.result1.md)›*

*Defined in [command/execute.ts:36](https://github.com/cancerberoSgx/mirada/blob/eecc091/mirada/src/command/execute.ts#L36)*

**Type parameters:**

▪ **T**: *[CommandName](../enums/_command_types_.commandname.md)*

**Parameters:**

Name | Type |
------ | ------ |
`options` | [Options1](../interfaces/_command_types_.options1.md)‹T› \| [Command](../interfaces/_command_types_.command.md)‹T› |

**Returns:** *Promise‹[Result1](../interfaces/_command_types_.result1.md)›*