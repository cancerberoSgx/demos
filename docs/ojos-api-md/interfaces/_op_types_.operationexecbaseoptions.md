[ojos](../README.md) › ["op/types"](../modules/_op_types_.md) › [OperationExecBaseOptions](_op_types_.operationexecbaseoptions.md)

# Interface: OperationExecBaseOptions

## Hierarchy

* **OperationExecBaseOptions**

  ↳ [AdaptiveThresholdOptions](_op_adaptivethreshold_.adaptivethresholdoptions.md)

  ↳ [BilateralFilterOptions](_op_bilateralfilter_.bilateralfilteroptions.md)

  ↳ [BitwiseOptions](_op_bitwise_.bitwiseoptions.md)

  ↳ [BoxFilterOptions](_op_boxfilter_.boxfilteroptions.md)

  ↳ [CannyOptions](_op_canny_.cannyoptions.md)

  ↳ [CartoonizeOptions](_op_cartoonize_.cartoonizeoptions.md)

  ↳ [CircleOptions](_op_circle_.circleoptions.md)

  ↳ [ConvertToOptions](_op_convertto_.converttooptions.md)

  ↳ [CvtColorOptions](_op_cvtcolor_.cvtcoloroptions.md)

  ↳ [EdgeOptions](_op_edge_.edgeoptions.md)

  ↳ [EllipseOptions](_op_ellipse_.ellipseoptions.md)

  ↳ [Filter2DOptions](_op_filter2d_.filter2doptions.md)

  ↳ [FloodFillOptions](_op_floodfill_.floodfilloptions.md)

  ↳ [GaussianBlurOptions](_op_gaussianblur_.gaussianbluroptions.md)

  ↳ [HistEqualizationOptions](_op_histequalization_.histequalizationoptions.md)

  ↳ [HoughLinesPOptions](_op_houghlinesp_.houghlinespoptions.md)

  ↳ [InRangeOptions](_op_inrange_.inrangeoptions.md)

  ↳ [LineOptions](_op_line_.lineoptions.md)

  ↳ [MathOptions](_op_math_.mathoptions.md)

  ↳ [AddWeightOptions](_op_math_.addweightoptions.md)

  ↳ [MedianBlurOptions](_op_medianblur_.medianbluroptions.md)

  ↳ [MorphologyExOptions](_op_morphologyex_.morphologyexoptions.md)

  ↳ [PyrOptions](_op_pyr_.pyroptions.md)

  ↳ [RectangleOptions](_op_rectangle_.rectangleoptions.md)

  ↳ [ReplaceColorOptions](_op_replacecolor_.replacecoloroptions.md)

  ↳ [RoiOptions](_op_roi_.roioptions.md)

  ↳ [ThresholdOptions](_op_threshold_.thresholdoptions.md)

  ↳ [ToRgbaOptions](_op_torgba_.torgbaoptions.md)

  ↳ [WarpAffineOptions](_op_warpaffine_.warpaffineoptions.md)

  ↳ [WarpPerspectiveOptions](_op_warpperspective_.warpperspectiveoptions.md)

  ↳ [WaveOptions](_op_wave_.waveoptions.md)

## Index

### Properties

* [dst](_op_types_.operationexecbaseoptions.md#optional-dst)
* [src](_op_types_.operationexecbaseoptions.md#src)

## Properties

### `Optional` dst

• **dst**? : *Mat*

*Defined in [op/types.ts:50](https://github.com/cancerberoSgx/mirada/blob/3544b58/ojos/src/op/types.ts#L50)*

Output image. If not given it will be created. Note that you can give [src] as output image in which case the input image will be written.

___

###  src

• **src**: *Mat*

*Defined in [op/types.ts:46](https://github.com/cancerberoSgx/mirada/blob/3544b58/ojos/src/op/types.ts#L46)*

Input image.
