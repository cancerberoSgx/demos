**[ojos](../README.md)**

[Globals](../README.md) › ["command/impl/floodfill"](../modules/_command_impl_floodfill_.md) › [Command_floodFill](_command_impl_floodfill_.command_floodfill.md)

# Interface: Command_floodFill

## Hierarchy

* [Command](_command_types_.command.md)‹[floodFill](../enums/_command_types_.commandname.md#floodfill)›

  * **Command_floodFill**

## Index

### Properties

* [in](_command_impl_floodfill_.command_floodfill.md#in)
* [name](_command_impl_floodfill_.command_floodfill.md#name)
* [newVal](_command_impl_floodfill_.command_floodfill.md#newval)
* [out](_command_impl_floodfill_.command_floodfill.md#optional-out)
* [seed](_command_impl_floodfill_.command_floodfill.md#seed)

## Properties

###  in

• **in**: *string*

*Inherited from [Command](_command_types_.command.md).[in](_command_types_.command.md#in)*

*Defined in [command/types.ts:19](https://github.com/cancerberoSgx/mirada/blob/f2ba50d/ojos/src/command/types.ts#L19)*

Input file name.

___

###  name

• **name**: *[floodFill](../enums/_command_types_.commandname.md#floodfill)*

*Inherited from [Command](_command_types_.command.md).[name](_command_types_.command.md#name)*

*Defined in [command/types.ts:15](https://github.com/cancerberoSgx/mirada/blob/f2ba50d/ojos/src/command/types.ts#L15)*

___

###  newVal

• **newVal**: *Scalar*

*Defined in [command/impl/floodfill.ts:8](https://github.com/cancerberoSgx/mirada/blob/f2ba50d/ojos/src/command/impl/floodfill.ts#L8)*

___

### `Optional` out

• **out**? : *undefined | string*

*Inherited from [Command](_command_types_.command.md).[out](_command_types_.command.md#optional-out)*

*Defined in [command/types.ts:23](https://github.com/cancerberoSgx/mirada/blob/f2ba50d/ojos/src/command/types.ts#L23)*

Output file names. If not given the input file will be replaced.

___

###  seed

• **seed**: *Point*

*Defined in [command/impl/floodfill.ts:7](https://github.com/cancerberoSgx/mirada/blob/f2ba50d/ojos/src/command/impl/floodfill.ts#L7)*