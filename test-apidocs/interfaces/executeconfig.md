[wasm-imagemagick](../README.md) > [ExecuteConfig](../interfaces/executeconfig.md)

# Interface: ExecuteConfig

## Hierarchy

**ExecuteConfig**

## Index

### Properties

* [commands](executeconfig.md#commands)
* [inputFiles](executeconfig.md#inputfiles)

---

## Properties

<a id="commands"></a>

###  commands

**● commands**: *[ExecuteCommand](../#executecommand)*

*Defined in [execute.ts:11](https://github.com/KnicKnic/WASM-ImageMagick/blob/7684a1c/src/execute.ts#L11)*

commands could be array form like \[\['convert', 'foo.png', 'bar.gif'\]\] or CLI form like \['convert foo.png bar.gif'\]

___
<a id="inputfiles"></a>

### `<Optional>` inputFiles

**● inputFiles**: *[MagickInputFile](magickinputfile.md)[]*

*Defined in [execute.ts:9](https://github.com/KnicKnic/WASM-ImageMagick/blob/7684a1c/src/execute.ts#L9)*

___

