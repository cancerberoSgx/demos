[mirada](../README.md) › ["types/opencv/LshTable"](_types_opencv_lshtable_.md)

# External module: "types/opencv/LshTable"


## Index

### Classes

* [LshTable](../classes/_types_opencv_lshtable_.lshtable.md)

### Type aliases

* [SpeedLevel](_types_opencv_lshtable_.md#speedlevel)

### Variables

* [kArray](_types_opencv_lshtable_.md#const-karray)
* [kBitsetHash](_types_opencv_lshtable_.md#const-kbitsethash)
* [kHash](_types_opencv_lshtable_.md#const-khash)

## Type aliases

###  SpeedLevel

Ƭ **SpeedLevel**: *any*

*Defined in [types/opencv/LshTable.ts:83](https://github.com/cancerberoSgx/mirada/blob/2aa7cf1/mirada/src/types/opencv/LshTable.ts#L83)*

defines the speed fo the implementation kArray uses a vector for storing data kBitsetHash uses a
hash map but checks for the validity of a key with a bitset kHash uses a hash map only

## Variables

### `Const` kArray

• **kArray**: *[SpeedLevel](_types_opencv_lshtable_.md#speedlevel)*

*Defined in [types/opencv/LshTable.ts:72](https://github.com/cancerberoSgx/mirada/blob/2aa7cf1/mirada/src/types/opencv/LshTable.ts#L72)*

___

### `Const` kBitsetHash

• **kBitsetHash**: *[SpeedLevel](_types_opencv_lshtable_.md#speedlevel)*

*Defined in [types/opencv/LshTable.ts:74](https://github.com/cancerberoSgx/mirada/blob/2aa7cf1/mirada/src/types/opencv/LshTable.ts#L74)*

___

### `Const` kHash

• **kHash**: *[SpeedLevel](_types_opencv_lshtable_.md#speedlevel)*

*Defined in [types/opencv/LshTable.ts:76](https://github.com/cancerberoSgx/mirada/blob/2aa7cf1/mirada/src/types/opencv/LshTable.ts#L76)*