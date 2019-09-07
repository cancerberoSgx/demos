**[ojos](../README.md)**

[Globals](../README.md) › ["command/impl/roi"](../modules/_command_impl_roi_.md) › [Command_roi](_command_impl_roi_.command_roi.md)

# Interface: Command_roi

Region of interest - Bounding box selection.

## Hierarchy

* [Command](_command_types_.command.md)‹[roi](../enums/_command_types_.commandname.md#roi)›

  * **Command_roi**

## Index

### Properties

* [expr](_command_impl_roi_.command_roi.md#expr)
* [in](_command_impl_roi_.command_roi.md#in)
* [name](_command_impl_roi_.command_roi.md#name)
* [out](_command_impl_roi_.command_roi.md#optional-out)

## Properties

###  expr

• **expr**: *Rect*

*Defined in [command/impl/roi.ts:12](https://github.com/cancerberoSgx/mirada/blob/d83d69e/ojos/src/command/impl/roi.ts#L12)*

The rectangle containing the region of interest.

___

###  in

• **in**: *string*

*Inherited from [Command](_command_types_.command.md).[in](_command_types_.command.md#in)*

*Defined in [command/types.ts:19](https://github.com/cancerberoSgx/mirada/blob/d83d69e/ojos/src/command/types.ts#L19)*

Input file name.

___

###  name

• **name**: *[roi](../enums/_command_types_.commandname.md#roi)*

*Inherited from [Command](_command_types_.command.md).[name](_command_types_.command.md#name)*

*Defined in [command/types.ts:15](https://github.com/cancerberoSgx/mirada/blob/d83d69e/ojos/src/command/types.ts#L15)*

___

### `Optional` out

• **out**? : *undefined | string*

*Inherited from [Command](_command_types_.command.md).[out](_command_types_.command.md#optional-out)*

*Defined in [command/types.ts:23](https://github.com/cancerberoSgx/mirada/blob/d83d69e/ojos/src/command/types.ts#L23)*

Output file names. If not given the input file will be replaced.