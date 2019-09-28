[ojos](../README.md) › ["op/types"](../modules/_op_types_.md) › [WithChannels](_op_types_.withchannels.md)

# Interface: WithChannels

## Hierarchy

* **WithChannels**

  ↳ [CannyConcreteOptions](_op_canny_.cannyconcreteoptions.md)

  ↳ [EdgeConcreteOptions](_op_edge_.edgeconcreteoptions.md)

  ↳ [HistEqualizationConcreteOptions](_op_histequalization_.histequalizationconcreteoptions.md)

  ↳ [WaveConcreteOptions](_op_wave_.waveconcreteoptions.md)

## Index

### Properties

* [channels](_op_types_.withchannels.md#optional-channels)

## Properties

### `Optional` channels

• **channels**? : *true | number[]*

*Defined in [op/types.ts:109](https://github.com/cancerberoSgx/mirada/blob/3544b58/ojos/src/op/types.ts#L109)*

If true then all channels will be processed independently and then joined to build the result. The only
exception is when there are 4 channels and in this case, if channels===true, the last 4th channel will be
omitted (alpha). If an array of numbers is given then those channels will be processed only. If not given
then the operation will behave normally, processing as single channel image.
