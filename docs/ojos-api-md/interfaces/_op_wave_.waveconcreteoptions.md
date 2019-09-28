[ojos](../README.md) › ["op/wave"](../modules/_op_wave_.md) › [WaveConcreteOptions](_op_wave_.waveconcreteoptions.md)

# Interface: WaveConcreteOptions

## Hierarchy

* [WithChannels](_op_types_.withchannels.md)

  ↳ **WaveConcreteOptions**

  ↳ [WaveOptions](_op_wave_.waveoptions.md)

## Index

### Properties

* [amplitude](_op_wave_.waveconcreteoptions.md#amplitude)
* [channels](_op_wave_.waveconcreteoptions.md#optional-channels)
* [frequency](_op_wave_.waveconcreteoptions.md#frequency)
* [type](_op_wave_.waveconcreteoptions.md#type)

## Properties

###  amplitude

• **amplitude**: *number*

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

###  frequency

• **frequency**: *number*

*Defined in [op/wave.ts:11](https://github.com/cancerberoSgx/mirada/blob/3544b58/ojos/src/op/wave.ts#L11)*

___

###  type

• **type**: *"vertical"*

*Defined in [op/wave.ts:9](https://github.com/cancerberoSgx/mirada/blob/3544b58/ojos/src/op/wave.ts#L9)*
