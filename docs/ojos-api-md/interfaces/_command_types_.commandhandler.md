**[ojos](../README.md)**

[Globals](../README.md) › ["command/types"](../modules/_command_types_.md) › [CommandHandler](_command_types_.commandhandler.md)

# Interface: CommandHandler <**N**>

## Type parameters

▪ **N**: *[CommandName](../enums/_command_types_.commandname.md)*

## Hierarchy

* **CommandHandler**

## Implemented by

* [AbstractCommandHandler](../classes/_command_abstractcommand_.abstractcommandhandler.md)
* [Command_asRgbaImpl](../classes/_command_impl_asrgba_.command_asrgbaimpl.md)
* [Command_floodFillImpl](../classes/_command_impl_floodfill_.command_floodfillimpl.md)
* [Command_grabCutImpl](../classes/_command_impl_grabcut_.command_grabcutimpl.md)
* [Command_roiImpl](../classes/_command_impl_roi_.command_roiimpl.md)

## Index

### Methods

* [run](_command_types_.commandhandler.md#run)
* [validate](_command_types_.commandhandler.md#validate)

## Methods

###  run

▸ **run**(`c`: [Options1](_command_types_.options1.md)‹N›): *Promise‹[Result1](_command_types_.result1.md)›*

*Defined in [command/types.ts:65](https://github.com/cancerberoSgx/mirada/blob/d83d69e/ojos/src/command/types.ts#L65)*

**Parameters:**

Name | Type |
------ | ------ |
`c` | [Options1](_command_types_.options1.md)‹N› |

**Returns:** *Promise‹[Result1](_command_types_.result1.md)›*

___

###  validate

▸ **validate**(`c`: Partial‹CommandsByName[N]›): *Promise‹undefined | string›*

*Defined in [command/types.ts:64](https://github.com/cancerberoSgx/mirada/blob/d83d69e/ojos/src/command/types.ts#L64)*

**Parameters:**

Name | Type |
------ | ------ |
`c` | Partial‹CommandsByName[N]› |

**Returns:** *Promise‹undefined | string›*