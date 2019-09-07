**[ojos](../README.md)**

[Globals](../README.md) › ["command/abstractCommand"](../modules/_command_abstractcommand_.md) › [AbstractCommandHandler](_command_abstractcommand_.abstractcommandhandler.md)

# Class: AbstractCommandHandler <**N**>

## Type parameters

▪ **N**: *[CommandName](../enums/_command_types_.commandname.md)*

## Hierarchy

* **AbstractCommandHandler**

  * [Command_asRgbaImpl](_command_impl_asrgba_.command_asrgbaimpl.md)

  * [Command_floodFillImpl](_command_impl_floodfill_.command_floodfillimpl.md)

  * [Command_grabCutImpl](_command_impl_grabcut_.command_grabcutimpl.md)

  * [Command_roiImpl](_command_impl_roi_.command_roiimpl.md)

## Implements

* [CommandHandler](../interfaces/_command_types_.commandhandler.md)‹N›

## Index

### Methods

* [run](_command_abstractcommand_.abstractcommandhandler.md#abstract-run)
* [validate](_command_abstractcommand_.abstractcommandhandler.md#abstract-validate)

## Methods

### `Abstract` run

▸ **run**(`c`: [Options1](../interfaces/_command_types_.options1.md)‹N›): *Promise‹[Result1](../interfaces/_command_types_.result1.md)›*

*Implementation of [CommandHandler](../interfaces/_command_types_.commandhandler.md)*

*Defined in [command/abstractCommand.ts:5](https://github.com/cancerberoSgx/mirada/blob/d83d69e/ojos/src/command/abstractCommand.ts#L5)*

**Parameters:**

Name | Type |
------ | ------ |
`c` | [Options1](../interfaces/_command_types_.options1.md)‹N› |

**Returns:** *Promise‹[Result1](../interfaces/_command_types_.result1.md)›*

___

### `Abstract` validate

▸ **validate**(`c`: Partial‹CommandsByName[N]›): *Promise‹undefined | string›*

*Implementation of [CommandHandler](../interfaces/_command_types_.commandhandler.md)*

*Defined in [command/abstractCommand.ts:6](https://github.com/cancerberoSgx/mirada/blob/d83d69e/ojos/src/command/abstractCommand.ts#L6)*

**Parameters:**

Name | Type |
------ | ------ |
`c` | Partial‹CommandsByName[N]› |

**Returns:** *Promise‹undefined | string›*