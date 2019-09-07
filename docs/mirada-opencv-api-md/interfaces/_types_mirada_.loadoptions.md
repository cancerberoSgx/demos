**[mirada](../README.md)**

[Globals](../README.md) › ["types/mirada"](../modules/_types_mirada_.md) › [LoadOptions](_types_mirada_.loadoptions.md)

# Interface: LoadOptions

Important: this options will be applied only in the first call to [loadOpencv] or when [force] is given.

## Hierarchy

* **LoadOptions**

## Index

### Properties

* [cwd](_types_mirada_.loadoptions.md#optional-cwd)
* [force](_types_mirada_.loadoptions.md#optional-force)
* [formatProxies](_types_mirada_.loadoptions.md#optional-formatproxies)
* [onloadCallback](_types_mirada_.loadoptions.md#optional-onloadcallback)
* [opencvJsExceptions](_types_mirada_.loadoptions.md#optional-opencvjsexceptions)
* [opencvJsLocation](_types_mirada_.loadoptions.md#optional-opencvjslocation)

## Properties

### `Optional` cwd

• **cwd**? : *undefined | string*

*Defined in [types/mirada.ts:21](https://github.com/cancerberoSgx/mirada/blob/9d9803d/mirada/src/types/mirada.ts#L21)*

(Node.js only): current working dir. By default is '.'.

___

### `Optional` force

• **force**? : *undefined | false | true*

*Defined in [types/mirada.ts:37](https://github.com/cancerberoSgx/mirada/blob/9d9803d/mirada/src/types/mirada.ts#L37)*

It will force the library loading - reloading it if it's already loaded

___

### `Optional` formatProxies

• **formatProxies**? : *[FormatProxy](../modules/_types_mirada_.md#formatproxy)[]*

*Defined in [types/mirada.ts:32](https://github.com/cancerberoSgx/mirada/blob/9d9803d/mirada/src/types/mirada.ts#L32)*

Format proxies to be installed and loaded.

___

### `Optional` onloadCallback

• **onloadCallback**? : *undefined | function*

*Defined in [types/mirada.ts:11](https://github.com/cancerberoSgx/mirada/blob/9d9803d/mirada/src/types/mirada.ts#L11)*

Callback function to be called when library is ready to be used. (equivalent to promise resolve).

___

### `Optional` opencvJsExceptions

• **opencvJsExceptions**? : *undefined | false | true*

*Defined in [types/mirada.ts:27](https://github.com/cancerberoSgx/mirada/blob/9d9803d/mirada/src/types/mirada.ts#L27)*

Loads opencv_exception.js instead of default opencv.js file which has better exception handling for
development at some cost on speed.

___

### `Optional` opencvJsLocation

• **opencvJsLocation**? : *undefined | string*

*Defined in [types/mirada.ts:16](https://github.com/cancerberoSgx/mirada/blob/9d9803d/mirada/src/types/mirada.ts#L16)*

The location of opencv.js file to load. In the case of browser it can be a relative or absolute URL.