[wasm-imagemagick](../README.md) > [ExecuteResult](../interfaces/executeresult.md)

# Interface: ExecuteResult

## Hierarchy

↳  [ExecuteResultOne](executeresultone.md)

**↳ ExecuteResult**

## Index

### Properties

* [breakOnError](executeresult.md#breakonerror)
* [errors](executeresult.md#errors)
* [exitCode](executeresult.md#exitcode)
* [outputFiles](executeresult.md#outputfiles)
* [results](executeresult.md#results)
* [stderr](executeresult.md#stderr)
* [stdout](executeresult.md#stdout)

---

## Properties

<a id="breakonerror"></a>

### `<Optional>` breakOnError

**● breakOnError**: *`boolean`*

*Defined in [execute.ts:95](https://github.com/KnicKnic/WASM-ImageMagick/blob/7684a1c/src/execute.ts#L95)*

___
<a id="errors"></a>

###  errors

**● errors**: *`any`[]*

*Inherited from [ExecuteResultOne](executeresultone.md).[errors](executeresultone.md#errors)*

*Defined in [execute.ts:18](https://github.com/KnicKnic/WASM-ImageMagick/blob/7684a1c/src/execute.ts#L18)*

___
<a id="exitcode"></a>

###  exitCode

**● exitCode**: *`number`*

*Inherited from [ExecuteResultOne](executeresultone.md).[exitCode](executeresultone.md#exitcode)*

*Overrides [CallResult](callresult.md).[exitCode](callresult.md#exitcode)*

*Defined in [execute.ts:21](https://github.com/KnicKnic/WASM-ImageMagick/blob/7684a1c/src/execute.ts#L21)*

___
<a id="outputfiles"></a>

###  outputFiles

**● outputFiles**: *[MagickOutputFile](magickoutputfile.md)[]*

*Inherited from [CallResult](callresult.md).[outputFiles](callresult.md#outputfiles)*

*Defined in [magickApi.ts:22](https://github.com/KnicKnic/WASM-ImageMagick/blob/7684a1c/src/magickApi.ts#L22)*

___
<a id="results"></a>

###  results

**● results**: *[ExecuteResultOne](executeresultone.md)[]*

*Defined in [execute.ts:94](https://github.com/KnicKnic/WASM-ImageMagick/blob/7684a1c/src/execute.ts#L94)*

___
<a id="stderr"></a>

###  stderr

**● stderr**: *`string`[]*

*Inherited from [CallResult](callresult.md).[stderr](callresult.md#stderr)*

*Defined in [magickApi.ts:24](https://github.com/KnicKnic/WASM-ImageMagick/blob/7684a1c/src/magickApi.ts#L24)*

___
<a id="stdout"></a>

###  stdout

**● stdout**: *`string`[]*

*Inherited from [CallResult](callresult.md).[stdout](callresult.md#stdout)*

*Defined in [magickApi.ts:23](https://github.com/KnicKnic/WASM-ImageMagick/blob/7684a1c/src/magickApi.ts#L23)*

___

