[ojos](../README.md) › ["opScript/types"](_opscript_types_.md)

# External module: "opScript/types"

## Index

### Interfaces

* [ParseOptions](../interfaces/_opscript_types_.parseoptions.md)
* [RunOptions](../interfaces/_opscript_types_.runoptions.md)
* [ScriptContext](../interfaces/_opscript_types_.scriptcontext.md)
* [ScriptMat](../interfaces/_opscript_types_.scriptmat.md)
* [TemplateContext](../interfaces/_opscript_types_.templatecontext.md)

### Type aliases

* [AllOptionNames](_opscript_types_.md#alloptionnames)
* [ParsedResult](_opscript_types_.md#parsedresult)
* [ScriptLanguage](_opscript_types_.md#scriptlanguage)
* [ScriptOperation](_opscript_types_.md#scriptoperation)

## Type aliases

###  AllOptionNames

Ƭ **AllOptionNames**: *keyof UnionToIntersection<AdaptiveThresholdOptions | BilateralFilterOptions | BitwiseOptions | BoxFilterOptions | CannyOptions | CartoonizeOptions | CircleOptions | ConvertToOptions | CvtColorOptions | EdgeOptions | EllipseOptions | Filter2DOptions | FloodFillOptions | GaussianBlurOptions | HistEqualizationOptions | HoughLinesPOptions | InRangeOptions | LineOptions | MathOptions | MedianBlurOptions | MorphologyExOptions | RectangleOptions | ReplaceColorOptions | ThresholdOptions | WarpAffineOptions | WarpPerspectiveOptions | PyrOptions | ToRgbaOptions | RoiOptions | WaveOptions>*

*Defined in [opScript/types.ts:47](https://github.com/cancerberoSgx/mirada/blob/3544b58/ojos/src/opScript/types.ts#L47)*

___

###  ParsedResult

Ƭ **ParsedResult**: *RemoveProperties‹Partial‹object›, "src" | "dst"› & object*

*Defined in [opScript/types.ts:49](https://github.com/cancerberoSgx/mirada/blob/3544b58/ojos/src/opScript/types.ts#L49)*

___

###  ScriptLanguage

Ƭ **ScriptLanguage**: *"json" | "statement-map" | "statement-list"*

*Defined in [opScript/types.ts:33](https://github.com/cancerberoSgx/mirada/blob/3544b58/ojos/src/opScript/types.ts#L33)*

___

###  ScriptOperation

Ƭ **ScriptOperation**: *Partial‹RemoveProperties‹OperationOptions[N], "src" | "dst"›› & object*

*Defined in [opScript/types.ts:19](https://github.com/cancerberoSgx/mirada/blob/3544b58/ojos/src/opScript/types.ts#L19)*
