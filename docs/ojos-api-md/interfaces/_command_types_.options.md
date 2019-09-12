**[ojos](../README.md)**

[Globals](../README.md) › ["command/types"](../modules/_command_types_.md) › [Options](_command_types_.options.md)

# Interface: Options

## Hierarchy

* [BaseOptions](_command_types_.baseoptions.md)

  * **Options**

## Index

### Properties

* [commands](_command_types_.options.md#commands)
* [debug](_command_types_.options.md#optional-debug)
* [files](_command_types_.options.md#optional-files)
* [fs](_command_types_.options.md#optional-fs)

## Properties

###  commands

• **commands**: *[Command_asRgba](_command_impl_asrgba_.command_asrgba.md) | [Command_floodFill](_command_impl_floodfill_.command_floodfill.md) | [Command_grabCut](_command_impl_grabcut_.command_grabcut.md) | [Command_roi](_command_impl_roi_.command_roi.md)[]*

*Defined in [command/types.ts:39](https://github.com/cancerberoSgx/mirada/blob/f2ba50d/ojos/src/command/types.ts#L39)*

a list of commands that will be executed in serially. The output files of the one command will be
available to the following ones, and could replace existing files.

___

### `Optional` debug

• **debug**? : *undefined | false | true*

*Inherited from [BaseOptions](_command_types_.baseoptions.md).[debug](_command_types_.baseoptions.md#optional-debug)*

*Defined in [command/types.ts:31](https://github.com/cancerberoSgx/mirada/blob/f2ba50d/ojos/src/command/types.ts#L31)*

___

### `Optional` files

• **files**? : *File[]*

*Inherited from [BaseOptions](_command_types_.baseoptions.md).[files](_command_types_.baseoptions.md#optional-files)*

*Defined in [command/types.ts:30](https://github.com/cancerberoSgx/mirada/blob/f2ba50d/ojos/src/command/types.ts#L30)*

initial files

___

### `Optional` fs

• **fs**? : *undefined | false | true*

*Defined in [command/types.ts:44](https://github.com/cancerberoSgx/mirada/blob/f2ba50d/ojos/src/command/types.ts#L44)*

If true then commands always read and write files from FS, unless the file extension is '.mat' in which
case they reference a Mat object which are handled in memory.,(using these in intermediate commands is
faster since there' sno encoding/decoding and fs read/write in the middle)