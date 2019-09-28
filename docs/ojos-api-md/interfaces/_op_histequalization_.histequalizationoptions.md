[ojos](../README.md) › ["op/histEqualization"](../modules/_op_histequalization_.md) › [HistEqualizationOptions](_op_histequalization_.histequalizationoptions.md)

# Interface: HistEqualizationOptions

## Hierarchy

* [OperationExecBaseOptions](_op_types_.operationexecbaseoptions.md)

  ↳ [HistEqualizationConcreteOptions](_op_histequalization_.histequalizationconcreteoptions.md)

  ↳ **HistEqualizationOptions**

## Index

### Properties

* [channels](_op_histequalization_.histequalizationoptions.md#optional-channels)
* [clipLimit](_op_histequalization_.histequalizationoptions.md#optional-cliplimit)
* [dst](_op_histequalization_.histequalizationoptions.md#optional-dst)
* [src](_op_histequalization_.histequalizationoptions.md#src)
* [type](_op_histequalization_.histequalizationoptions.md#type)

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

*Inherited from [HistEqualizationConcreteOptions](_op_histequalization_.histequalizationconcreteoptions.md).[clipLimit](_op_histequalization_.histequalizationconcreteoptions.md#optional-cliplimit)*

*Defined in [op/histEqualization.ts:13](https://github.com/cancerberoSgx/mirada/blob/3544b58/ojos/src/op/histEqualization.ts#L13)*

Applies only when [mode] is `CLAHE`

___

### `Optional` dst

• **dst**? : *Mat*

*Inherited from [OperationExecBaseOptions](_op_types_.operationexecbaseoptions.md).[dst](_op_types_.operationexecbaseoptions.md#optional-dst)*

*Defined in [op/types.ts:50](https://github.com/cancerberoSgx/mirada/blob/3544b58/ojos/src/op/types.ts#L50)*

Output image. If not given it will be created. Note that you can give [src] as output image in which case the input image will be written.

___

###  src

• **src**: *Mat*

*Inherited from [OperationExecBaseOptions](_op_types_.operationexecbaseoptions.md).[src](_op_types_.operationexecbaseoptions.md#src)*

*Defined in [op/types.ts:46](https://github.com/cancerberoSgx/mirada/blob/3544b58/ojos/src/op/types.ts#L46)*

Input image.

___

###  type

• **type**: *"equalizeHist" | "CLAHE"*

*Inherited from [HistEqualizationConcreteOptions](_op_histequalization_.histequalizationconcreteoptions.md).[type](_op_histequalization_.histequalizationconcreteoptions.md#type)*

*Defined in [op/histEqualization.ts:9](https://github.com/cancerberoSgx/mirada/blob/3544b58/ojos/src/op/histEqualization.ts#L9)*
