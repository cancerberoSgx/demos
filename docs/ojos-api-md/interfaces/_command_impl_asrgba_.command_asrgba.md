**[ojos](../README.md)**

[Globals](../README.md) › ["command/impl/asRgba"](../modules/_command_impl_asrgba_.md) › [Command_asRgba](_command_impl_asrgba_.command_asrgba.md)

# Interface: Command_asRgba

Convert the image to RGBA channel type which is often needed before rendering/encoding.

## Hierarchy

* [Command](_command_types_.command.md)‹[asRgba](../enums/_command_types_.commandname.md#asrgba)›

  * **Command_asRgba**

## Index

### Properties

* [in](_command_impl_asrgba_.command_asrgba.md#in)
* [name](_command_impl_asrgba_.command_asrgba.md#name)
* [out](_command_impl_asrgba_.command_asrgba.md#optional-out)

## Properties

###  in

• **in**: *string*

*Inherited from [Command](_command_types_.command.md).[in](_command_types_.command.md#in)*

*Defined in [command/types.ts:19](https://github.com/cancerberoSgx/mirada/blob/f2ba50d/ojos/src/command/types.ts#L19)*

Input file name.

___

###  name

• **name**: *[asRgba](../enums/_command_types_.commandname.md#asrgba)*

*Inherited from [Command](_command_types_.command.md).[name](_command_types_.command.md#name)*

*Defined in [command/types.ts:15](https://github.com/cancerberoSgx/mirada/blob/f2ba50d/ojos/src/command/types.ts#L15)*

___

### `Optional` out

• **out**? : *undefined | string*

*Inherited from [Command](_command_types_.command.md).[out](_command_types_.command.md#optional-out)*

*Defined in [command/types.ts:23](https://github.com/cancerberoSgx/mirada/blob/f2ba50d/ojos/src/command/types.ts#L23)*

Output file names. If not given the input file will be replaced.