[ojos](../README.md) › ["op/histEqualization"](../modules/_op_histequalization_.md) › [HistEqualizationConcreteOptions](_op_histequalization_.histequalizationconcreteoptions.md)

# Interface: HistEqualizationConcreteOptions

## Hierarchy

* [WithChannels](_op_types_.withchannels.md)

* object

  ↳ **HistEqualizationConcreteOptions**

  ↳ [HistEqualizationOptions](_op_histequalization_.histequalizationoptions.md)

## Index

### Properties

* [channels](_op_histequalization_.histequalizationconcreteoptions.md#optional-channels)
* [clipLimit](_op_histequalization_.histequalizationconcreteoptions.md#optional-cliplimit)
* [type](_op_histequalization_.histequalizationconcreteoptions.md#type)

## Properties

### `Optional` channels

• **channels**? : *true | number[]*

*Inherited from [WithChannels](_op_types_.withchannels.md).[channels](_op_types_.withchannels.md#optional-channels)*

*Defined in [op/types.ts:109](https://github.com/cancerberoSgx/mirada/blob/3544b58/ojos/src/op/types.ts#L109)*

If true then all channels will be processed independently and then joined to build the result. The only
exception is when there are 4 channels and in this case, if channels===true, the last 4th channel will be
omitted (alpha). If an array of numbers is given then those channels will be processed only. If not given
then the operation will behave normally, processing as single channel image.

___

### `Optional` clipLimit

• **clipLimit**? : *undefined | number*

*Defined in [op/histEqualization.ts:13](https://github.com/cancerberoSgx/mirada/blob/3544b58/ojos/src/op/histEqualization.ts#L13)*

Applies only when [mode] is `CLAHE`

___

###  type

• **type**: *"equalizeHist" | "CLAHE"*

*Defined in [op/histEqualization.ts:9](https://github.com/cancerberoSgx/mirada/blob/3544b58/ojos/src/op/histEqualization.ts#L9)*
