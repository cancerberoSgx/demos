**[mirada](../README.md)**

[Globals](../README.md) › ["types/mirada"](_types_mirada_.md)

# External module: "types/mirada"

## Index

### Interfaces

* [FormatCodec](../interfaces/_types_mirada_.formatcodec.md)
* [FormatProxyClass](../interfaces/_types_mirada_.formatproxyclass.md)
* [LoadOptions](../interfaces/_types_mirada_.loadoptions.md)

### Type aliases

* [FormatProxy](_types_mirada_.md#formatproxy)

## Type aliases

###  FormatProxy

Ƭ **FormatProxy**: *[FormatProxyClass](../interfaces/_types_mirada_.formatproxyclass.md) | function | function*

*Defined in [types/mirada.ts:52](https://github.com/cancerberoSgx/mirada/blob/9d9803d/mirada/src/types/mirada.ts#L52)*

User provided image formats encode/decode implementation. The proxy is responsible of creating codec
instances

 This is particularly useful in this library so it can actually contain the implementation of concrete
 Codecs (see [JimpCodec]) without actually being responsible of loading / instantiating the library which
 will have to be handled by a JimpProxy provided by a third party (test, playground/user) . In other words,
 mirada provides codecs implementations for several libraries and at the while keeping agnostic/independent

 This is probably called only once and after obtaining a codec the same instance is used by the manager.