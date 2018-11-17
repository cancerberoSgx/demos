[wasm-imagemagick](../README.md) > [ExecuteResult](../interfaces/executeresult.md)

# Interface: ExecuteResult

## Hierarchy

↳  [ExecuteResultOne](executeresultone.md)

**↳ ExecuteResult**

## Index

### Properties

* [errors](executeresult.md#errors)
* [exitCode](executeresult.md#exitcode)
* [outputFiles](executeresult.md#outputfiles)
* [results](executeresult.md#results)
* [stderr](executeresult.md#stderr)
* [stdout](executeresult.md#stdout)

---

## Properties

<a id="errors"></a>

###  errors

**● errors**: *`any`[]*

*Inherited from [ExecuteResultOne](executeresultone.md).[errors](executeresultone.md#errors)*

*Defined in [execute.ts:51](https://github.com/KnicKnic/WASM-ImageMagick/blob/7684a1c/src/execute.ts#L51)*

___
<a id="exitcode"></a>

###  exitCode

**● exitCode**: *`number`*

*Inherited from [ExecuteResultOne](executeresultone.md).[exitCode](executeresultone.md#exitcode)*

*Overrides [CallResult](callresult.md).[exitCode](callresult.md#exitcode)*

*Defined in [execute.ts:52](https://github.com/KnicKnic/WASM-ImageMagick/blob/7684a1c/src/execute.ts#L52)*

___
<a id="outputfiles"></a>

###  outputFiles

**● outputFiles**: *[MagickOutputFile](magickoutputfile.md)[]*

*Inherited from [CallResult](callresult.md).[outputFiles](callresult.md#outputfiles)*

*Defined in [magickApi.ts:30](https://github.com/KnicKnic/WASM-ImageMagick/blob/7684a1c/src/magickApi.ts#L30)*

___
<a id="results"></a>

###  results

**● results**: *[ExecuteResultOne](executeresultone.md)[]*

*Defined in [execute.ts:129](https://github.com/KnicKnic/WASM-ImageMagick/blob/7684a1c/src/execute.ts#L129)*

___
<a id="stderr"></a>

###  stderr

**● stderr**: *`string`[]*

*Inherited from [CallResult](callresult.md).[stderr](callresult.md#stderr)*

*Defined in [magickApi.ts:32](https://github.com/KnicKnic/WASM-ImageMagick/blob/7684a1c/src/magickApi.ts#L32)*

___
<a id="stdout"></a>

###  stdout

**● stdout**: *`string`[]*

*Inherited from [CallResult](callresult.md).[stdout](callresult.md#stdout)*

*Defined in [magickApi.ts:31](https://github.com/KnicKnic/WASM-ImageMagick/blob/7684a1c/src/magickApi.ts#L31)*

___

