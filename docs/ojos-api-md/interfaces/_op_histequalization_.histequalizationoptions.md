**[ojos](../README.md)**

[Globals](../README.md) › ["op/histEqualization"](../modules/_op_histequalization_.md) › [HistEqualizationOptions](_op_histequalization_.histequalizationoptions.md)

# Interface: HistEqualizationOptions

## Hierarchy

* [OperationExecBaseOptions](_op_types_.operationexecbaseoptions.md)

  * [HistEqualizationConcreteOptions](_op_histequalization_.histequalizationconcreteoptions.md)

  * **HistEqualizationOptions**

## Index

### Properties

* [channels](_op_histequalization_.histequalizationoptions.md#optional-channels)
* [clipLimit](_op_histequalization_.histequalizationoptions.md#optional-cliplimit)
* [dst](_op_histequalization_.histequalizationoptions.md#optional-dst)
* [mode](_op_histequalization_.histequalizationoptions.md#mode)
* [src](_op_histequalization_.histequalizationoptions.md#src)
* [tileGridSize](_op_histequalization_.histequalizationoptions.md#optional-tilegridsize)

## Properties

### `Optional` channels

• **channels**? : *true | number[]*

*Inherited from [WithChannels](_op_types_.withchannels.md).[channels](_op_types_.withchannels.md#optional-channels)*

*Defined in [op/types.ts:52](https://github.com/cancerberoSgx/mirada/blob/f2ba50d/ojos/src/op/types.ts#L52)*

If true then all channels will be processed independently and then joined to build the result. The only exception is when there are 4 channels and in this case, if channels===true, the last 4th channel will be omitted (alpha). If an array of numbers is given then those channels will be processed only. If not given then the operation will behave normally, processing as single channle image.

___

### `Optional` clipLimit

• **clipLimit**? : *undefined | number*

*Inherited from [HistEqualizationConcreteOptions](_op_histequalization_.histequalizationconcreteoptions.md).[clipLimit](_op_histequalization_.histequalizationconcreteoptions.md#optional-cliplimit)*

*Defined in [op/histEqualization.ts:13](https://github.com/cancerberoSgx/mirada/blob/f2ba50d/ojos/src/op/histEqualization.ts#L13)*

Applies only when [mode] is 'CLAHE'

___

### `Optional` dst

• **dst**? : *Mat*

*Inherited from [OperationExecBaseOptions](_op_types_.operationexecbaseoptions.md).[dst](_op_types_.operationexecbaseoptions.md#optional-dst)*

*Defined in [op/types.ts:27](https://github.com/cancerberoSgx/mirada/blob/f2ba50d/ojos/src/op/types.ts#L27)*

___

###  mode

• **mode**: *"equalizeHist" | "CLAHE"*

*Inherited from [HistEqualizationConcreteOptions](_op_histequalization_.histequalizationconcreteoptions.md).[mode](_op_histequalization_.histequalizationconcreteoptions.md#mode)*

*Defined in [op/histEqualization.ts:9](https://github.com/cancerberoSgx/mirada/blob/f2ba50d/ojos/src/op/histEqualization.ts#L9)*

___

###  src

• **src**: *Mat*

*Inherited from [OperationExecBaseOptions](_op_types_.operationexecbaseoptions.md).[src](_op_types_.operationexecbaseoptions.md#src)*

*Defined in [op/types.ts:26](https://github.com/cancerberoSgx/mirada/blob/f2ba50d/ojos/src/op/types.ts#L26)*

___

### `Optional` tileGridSize

• **tileGridSize**? : *Size*

*Inherited from [HistEqualizationConcreteOptions](_op_histequalization_.histequalizationconcreteoptions.md).[tileGridSize](_op_histequalization_.histequalizationconcreteoptions.md#optional-tilegridsize)*

*Defined in [op/histEqualization.ts:17](https://github.com/cancerberoSgx/mirada/blob/f2ba50d/ojos/src/op/histEqualization.ts#L17)*

Applies only when [mode] is 'CLAHE'