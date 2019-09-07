**[ojos](../README.md)**

[Globals](../README.md) › ["command/impl/grabCut"](../modules/_command_impl_grabcut_.md) › [Command_grabCutImpl](_command_impl_grabcut_.command_grabcutimpl.md)

# Class: Command_grabCutImpl

## Hierarchy

* [AbstractCommandHandler](_command_abstractcommand_.abstractcommandhandler.md)‹[grabCut](../enums/_command_types_.commandname.md#grabcut)›

  * **Command_grabCutImpl**

## Implements

* [CommandHandler](../interfaces/_command_types_.commandhandler.md)‹[grabCut](../enums/_command_types_.commandname.md#grabcut)›

## Index

### Methods

* [run](_command_impl_grabcut_.command_grabcutimpl.md#run)
* [validate](_command_impl_grabcut_.command_grabcutimpl.md#validate)

## Methods

###  run

▸ **run**(`o`: [Options1](../interfaces/_command_types_.options1.md)‹[grabCut](../enums/_command_types_.commandname.md#grabcut)›): *Promise‹object | object›*

*Implementation of [CommandHandler](../interfaces/_command_types_.commandhandler.md)*

*Overrides [AbstractCommandHandler](_command_abstractcommand_.abstractcommandhandler.md).[run](_command_abstractcommand_.abstractcommandhandler.md#abstract-run)*

*Defined in [command/impl/grabCut.ts:21](https://github.com/cancerberoSgx/mirada/blob/d83d69e/ojos/src/command/impl/grabCut.ts#L21)*

**Parameters:**

Name | Type |
------ | ------ |
`o` | [Options1](../interfaces/_command_types_.options1.md)‹[grabCut](../enums/_command_types_.commandname.md#grabcut)› |

**Returns:** *Promise‹object | object›*

___

###  validate

▸ **validate**(`c`: Partial‹[Command_grabCut](../interfaces/_command_impl_grabcut_.command_grabcut.md)›): *Promise‹undefined | "rect is mandatory"›*

*Implementation of [CommandHandler](../interfaces/_command_types_.commandhandler.md)*

*Overrides [AbstractCommandHandler](_command_abstractcommand_.abstractcommandhandler.md).[validate](_command_abstractcommand_.abstractcommandhandler.md#abstract-validate)*

*Defined in [command/impl/grabCut.ts:63](https://github.com/cancerberoSgx/mirada/blob/d83d69e/ojos/src/command/impl/grabCut.ts#L63)*

**Parameters:**

Name | Type |
------ | ------ |
`c` | Partial‹[Command_grabCut](../interfaces/_command_impl_grabcut_.command_grabcut.md)› |

**Returns:** *Promise‹undefined | "rect is mandatory"›*