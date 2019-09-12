**[ojos](../README.md)**

[Globals](../README.md) › ["command/impl/grabCut"](../modules/_command_impl_grabcut_.md) › [Command_grabCut](_command_impl_grabcut_.command_grabcut.md)

# Interface: Command_grabCut

## Hierarchy

* [Command](_command_types_.command.md)‹[grabCut](../enums/_command_types_.commandname.md#grabcut)›

  * **Command_grabCut**

## Index

### Properties

* [frameColor](_command_impl_grabcut_.command_grabcut.md#optional-framecolor)
* [in](_command_impl_grabcut_.command_grabcut.md#in)
* [mask](_command_impl_grabcut_.command_grabcut.md#optional-mask)
* [name](_command_impl_grabcut_.command_grabcut.md#name)
* [out](_command_impl_grabcut_.command_grabcut.md#optional-out)
* [rect](_command_impl_grabcut_.command_grabcut.md#optional-rect)

## Properties

### `Optional` frameColor

• **frameColor**? : *undefined | string*

*Defined in [command/impl/grabCut.ts:17](https://github.com/cancerberoSgx/mirada/blob/f2ba50d/ojos/src/command/impl/grabCut.ts#L17)*

If given a rectangle of given color will be drawn (requires `rect`)

___

###  in

• **in**: *string*

*Inherited from [Command](_command_types_.command.md).[in](_command_types_.command.md#in)*

*Defined in [command/types.ts:19](https://github.com/cancerberoSgx/mirada/blob/f2ba50d/ojos/src/command/types.ts#L19)*

Input file name.

___

### `Optional` mask

• **mask**? : *undefined | string*

*Defined in [command/impl/grabCut.ts:13](https://github.com/cancerberoSgx/mirada/blob/f2ba50d/ojos/src/command/impl/grabCut.ts#L13)*

If given (and rect is not) its the name of an image used as a mask where its elements may have one of the GrabCutClasses to declare background and foreground regions.

___

###  name

• **name**: *[grabCut](../enums/_command_types_.commandname.md#grabcut)*

*Inherited from [Command](_command_types_.command.md).[name](_command_types_.command.md#name)*

*Defined in [command/types.ts:15](https://github.com/cancerberoSgx/mirada/blob/f2ba50d/ojos/src/command/types.ts#L15)*

___

### `Optional` out

• **out**? : *undefined | string*

*Inherited from [Command](_command_types_.command.md).[out](_command_types_.command.md#optional-out)*

*Defined in [command/types.ts:23](https://github.com/cancerberoSgx/mirada/blob/f2ba50d/ojos/src/command/types.ts#L23)*

Output file names. If not given the input file will be replaced.

___

### `Optional` rect

• **rect**? : *Rect*

*Defined in [command/impl/grabCut.ts:9](https://github.com/cancerberoSgx/mirada/blob/f2ba50d/ojos/src/command/impl/grabCut.ts#L9)*

If given the region outside rect will be considered the background to remove (uses cv.GC_INIT_WITH_RECT).