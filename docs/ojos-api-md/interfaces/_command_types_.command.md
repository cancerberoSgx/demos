**[ojos](../README.md)**

[Globals](../README.md) › ["command/types"](../modules/_command_types_.md) › [Command](_command_types_.command.md)

# Interface: Command <**T**>

## Type parameters

▪ **T**: *[CommandName](../enums/_command_types_.commandname.md)*

## Hierarchy

* **Command**

  * [Command_asRgba](_command_impl_asrgba_.command_asrgba.md)

  * [Command_floodFill](_command_impl_floodfill_.command_floodfill.md)

  * [Command_grabCut](_command_impl_grabcut_.command_grabcut.md)

  * [Command_roi](_command_impl_roi_.command_roi.md)

## Index

### Properties

* [in](_command_types_.command.md#in)
* [name](_command_types_.command.md#name)
* [out](_command_types_.command.md#optional-out)

## Properties

###  in

• **in**: *string*

*Defined in [command/types.ts:19](https://github.com/cancerberoSgx/mirada/blob/f2ba50d/ojos/src/command/types.ts#L19)*

Input file name.

___

###  name

• **name**: *T*

*Defined in [command/types.ts:15](https://github.com/cancerberoSgx/mirada/blob/f2ba50d/ojos/src/command/types.ts#L15)*

___

### `Optional` out

• **out**? : *undefined | string*

*Defined in [command/types.ts:23](https://github.com/cancerberoSgx/mirada/blob/f2ba50d/ojos/src/command/types.ts#L23)*

Output file names. If not given the input file will be replaced.