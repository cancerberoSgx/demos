[ojos](../README.md) › ["op/wave"](../modules/_op_wave_.md) › [WaveOptions](_op_wave_.waveoptions.md)

# Interface: WaveOptions

## Hierarchy

  ↳ [WaveConcreteOptions](_op_wave_.waveconcreteoptions.md)

* [OperationExecBaseOptions](_op_types_.operationexecbaseoptions.md)

  ↳ **WaveOptions**

## Index

### Properties

* [amplitude](_op_wave_.waveoptions.md#amplitude)
* [channels](_op_wave_.waveoptions.md#optional-channels)
* [dst](_op_wave_.waveoptions.md#optional-dst)
* [frequency](_op_wave_.waveoptions.md#frequency)
* [src](_op_wave_.waveoptions.md#src)
* [type](_op_wave_.waveoptions.md#type)

## Properties

###  amplitude

• **amplitude**: *number*

*Inherited from [WaveConcreteOptions](_op_wave_.waveconcreteoptions.md).[amplitude](_op_wave_.waveconcreteoptions.md#amplitude)*

*Defined in [op/wave.ts:10](https://github.com/cancerberoSgx/mirada/blob/3544b58/ojos/src/op/wave.ts#L10)*

___

### `Optional` channels

• **channels**? : *true | number[]*

*Inherited from [WithChannels](_op_types_.withchannels.md).[channels](_op_types_.withchannels.md#optional-channels)*

*Defined in [op/types.ts:109](https://github.com/cancerberoSgx/mirada/blob/3544b58/ojos/src/op/types.ts#L109)*

If true then all channels will be processed independently and then joined to build the result. The only
exception is when there are 4 channels and in this case, if channels===true, the last 4th channel will be
omitted (alpha). If an array of numbers is given then those channels will be processed only. If not given
then the operation will behave normally, processing as single channel image.

___

### `Optional` dst

• **dst**? : *Mat*

*Inherited from [OperationExecBaseOptions](_op_types_.operationexecbaseoptions.md).[dst](_op_types_.operationexecbaseoptions.md#optional-dst)*

*Defined in [op/types.ts:50](https://github.com/cancerberoSgx/mirada/blob/3544b58/ojos/src/op/types.ts#L50)*

Output image. If not given it will be created. Note that you can give [src] as output image in which case the input image will be written.

___

###  frequency

• **frequency**: *number*

*Inherited from [WaveConcreteOptions](_op_wave_.waveconcreteoptions.md).[frequency](_op_wave_.waveconcreteoptions.md#frequency)*

*Defined in [op/wave.ts:11](https://github.com/cancerberoSgx/mirada/blob/3544b58/ojos/src/op/wave.ts#L11)*

___

###  src

• **src**: *Mat*

*Inherited from [OperationExecBaseOptions](_op_types_.operationexecbaseoptions.md).[src](_op_types_.operationexecbaseoptions.md#src)*

*Defined in [op/types.ts:46](https://github.com/cancerberoSgx/mirada/blob/3544b58/ojos/src/op/types.ts#L46)*

Input image.

___

###  type

• **type**: *"vertical"*

*Inherited from [WaveConcreteOptions](_op_wave_.waveconcreteoptions.md).[type](_op_wave_.waveconcreteoptions.md#type)*

*Defined in [op/wave.ts:9](https://github.com/cancerberoSgx/mirada/blob/3544b58/ojos/src/op/wave.ts#L9)*
