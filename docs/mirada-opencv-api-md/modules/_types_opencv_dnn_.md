**[mirada](../README.md)**

[Globals](../README.md) › ["types/opencv/dnn"](_types_opencv_dnn_.md)

# External module: "types/opencv/dnn"

## Index

### Type aliases

* [Backend](_types_opencv_dnn_.md#backend)
* [Target](_types_opencv_dnn_.md#target)

### Variables

* [DNN_BACKEND_DEFAULT](_types_opencv_dnn_.md#const-dnn_backend_default)
* [DNN_BACKEND_HALIDE](_types_opencv_dnn_.md#const-dnn_backend_halide)
* [DNN_BACKEND_INFERENCE_ENGINE](_types_opencv_dnn_.md#const-dnn_backend_inference_engine)
* [DNN_BACKEND_OPENCV](_types_opencv_dnn_.md#const-dnn_backend_opencv)
* [DNN_BACKEND_VKCOM](_types_opencv_dnn_.md#const-dnn_backend_vkcom)
* [DNN_TARGET_CPU](_types_opencv_dnn_.md#const-dnn_target_cpu)
* [DNN_TARGET_FPGA](_types_opencv_dnn_.md#const-dnn_target_fpga)
* [DNN_TARGET_MYRIAD](_types_opencv_dnn_.md#const-dnn_target_myriad)
* [DNN_TARGET_OPENCL](_types_opencv_dnn_.md#const-dnn_target_opencl)
* [DNN_TARGET_OPENCL_FP16](_types_opencv_dnn_.md#const-dnn_target_opencl_fp16)
* [DNN_TARGET_VULKAN](_types_opencv_dnn_.md#const-dnn_target_vulkan)

### Functions

* [NMSBoxes](_types_opencv_dnn_.md#nmsboxes)
* [blobFromImage](_types_opencv_dnn_.md#blobfromimage)
* [blobFromImages](_types_opencv_dnn_.md#blobfromimages)
* [getAvailableBackends](_types_opencv_dnn_.md#getavailablebackends)
* [getAvailableTargets](_types_opencv_dnn_.md#getavailabletargets)
* [imagesFromBlob](_types_opencv_dnn_.md#imagesfromblob)
* [readNet](_types_opencv_dnn_.md#readnet)
* [readNetFromCaffe](_types_opencv_dnn_.md#readnetfromcaffe)
* [readNetFromDarknet](_types_opencv_dnn_.md#readnetfromdarknet)
* [readNetFromModelOptimizer](_types_opencv_dnn_.md#readnetfrommodeloptimizer)
* [readNetFromONNX](_types_opencv_dnn_.md#readnetfromonnx)
* [readNetFromTensorflow](_types_opencv_dnn_.md#readnetfromtensorflow)
* [readNetFromTorch](_types_opencv_dnn_.md#readnetfromtorch)
* [readTensorFromONNX](_types_opencv_dnn_.md#readtensorfromonnx)
* [readTorchBlob](_types_opencv_dnn_.md#readtorchblob)
* [shrinkCaffeModel](_types_opencv_dnn_.md#shrinkcaffemodel)
* [writeTextGraph](_types_opencv_dnn_.md#writetextgraph)

## Type aliases

###  Backend

Ƭ **Backend**: *any*

*Defined in [types/opencv/dnn.ts:387](https://github.com/cancerberoSgx/mirada/blob/1c5d3d0/mirada/src/types/opencv/dnn.ts#L387)*

[Net::setPreferableBackend]

___

###  Target

Ƭ **Target**: *any*

*Defined in [types/opencv/dnn.ts:393](https://github.com/cancerberoSgx/mirada/blob/1c5d3d0/mirada/src/types/opencv/dnn.ts#L393)*

[Net::setPreferableBackend]

## Variables

### `Const` DNN_BACKEND_DEFAULT

• **DNN_BACKEND_DEFAULT**: *[Backend](_types_opencv_dnn_.md#backend)*

*Defined in [types/opencv/dnn.ts:361](https://github.com/cancerberoSgx/mirada/blob/1c5d3d0/mirada/src/types/opencv/dnn.ts#L361)*

DNN_BACKEND_DEFAULT equals to DNN_BACKEND_INFERENCE_ENGINE if OpenCV is built with Intel's Inference
Engine library or DNN_BACKEND_OPENCV otherwise.

___

### `Const` DNN_BACKEND_HALIDE

• **DNN_BACKEND_HALIDE**: *[Backend](_types_opencv_dnn_.md#backend)*

*Defined in [types/opencv/dnn.ts:363](https://github.com/cancerberoSgx/mirada/blob/1c5d3d0/mirada/src/types/opencv/dnn.ts#L363)*

___

### `Const` DNN_BACKEND_INFERENCE_ENGINE

• **DNN_BACKEND_INFERENCE_ENGINE**: *[Backend](_types_opencv_dnn_.md#backend)*

*Defined in [types/opencv/dnn.ts:365](https://github.com/cancerberoSgx/mirada/blob/1c5d3d0/mirada/src/types/opencv/dnn.ts#L365)*

___

### `Const` DNN_BACKEND_OPENCV

• **DNN_BACKEND_OPENCV**: *[Backend](_types_opencv_dnn_.md#backend)*

*Defined in [types/opencv/dnn.ts:367](https://github.com/cancerberoSgx/mirada/blob/1c5d3d0/mirada/src/types/opencv/dnn.ts#L367)*

___

### `Const` DNN_BACKEND_VKCOM

• **DNN_BACKEND_VKCOM**: *[Backend](_types_opencv_dnn_.md#backend)*

*Defined in [types/opencv/dnn.ts:369](https://github.com/cancerberoSgx/mirada/blob/1c5d3d0/mirada/src/types/opencv/dnn.ts#L369)*

___

### `Const` DNN_TARGET_CPU

• **DNN_TARGET_CPU**: *[Target](_types_opencv_dnn_.md#target)*

*Defined in [types/opencv/dnn.ts:371](https://github.com/cancerberoSgx/mirada/blob/1c5d3d0/mirada/src/types/opencv/dnn.ts#L371)*

___

### `Const` DNN_TARGET_FPGA

• **DNN_TARGET_FPGA**: *[Target](_types_opencv_dnn_.md#target)*

*Defined in [types/opencv/dnn.ts:381](https://github.com/cancerberoSgx/mirada/blob/1c5d3d0/mirada/src/types/opencv/dnn.ts#L381)*

___

### `Const` DNN_TARGET_MYRIAD

• **DNN_TARGET_MYRIAD**: *[Target](_types_opencv_dnn_.md#target)*

*Defined in [types/opencv/dnn.ts:377](https://github.com/cancerberoSgx/mirada/blob/1c5d3d0/mirada/src/types/opencv/dnn.ts#L377)*

___

### `Const` DNN_TARGET_OPENCL

• **DNN_TARGET_OPENCL**: *[Target](_types_opencv_dnn_.md#target)*

*Defined in [types/opencv/dnn.ts:373](https://github.com/cancerberoSgx/mirada/blob/1c5d3d0/mirada/src/types/opencv/dnn.ts#L373)*

___

### `Const` DNN_TARGET_OPENCL_FP16

• **DNN_TARGET_OPENCL_FP16**: *[Target](_types_opencv_dnn_.md#target)*

*Defined in [types/opencv/dnn.ts:375](https://github.com/cancerberoSgx/mirada/blob/1c5d3d0/mirada/src/types/opencv/dnn.ts#L375)*

___

### `Const` DNN_TARGET_VULKAN

• **DNN_TARGET_VULKAN**: *[Target](_types_opencv_dnn_.md#target)*

*Defined in [types/opencv/dnn.ts:379](https://github.com/cancerberoSgx/mirada/blob/1c5d3d0/mirada/src/types/opencv/dnn.ts#L379)*

## Functions

###  NMSBoxes

▸ **NMSBoxes**(`bboxes`: any, `scores`: any, `score_threshold`: any, `nms_threshold`: any, `indices`: any, `eta?`: any, `top_k?`: any): *void*

*Defined in [types/opencv/dnn.ts:110](https://github.com/cancerberoSgx/mirada/blob/1c5d3d0/mirada/src/types/opencv/dnn.ts#L110)*

**Parameters:**

Name | Type | Description |
------ | ------ | ------ |
`bboxes` | any | a set of bounding boxes to apply NMS.  |
`scores` | any | a set of corresponding confidences.  |
`score_threshold` | any | a threshold used to filter boxes by score.  |
`nms_threshold` | any | a threshold used in non maximum suppression.  |
`indices` | any | the kept indices of bboxes after NMS.  |
`eta?` | any | a coefficient in adaptive threshold formula: $nms\_threshold_{i+1}=eta\cdot nms\_threshold_i$.  |
`top_k?` | any | if >0, keep at most top_k picked indices.  |

**Returns:** *void*

▸ **NMSBoxes**(`bboxes`: any, `scores`: any, `score_threshold`: any, `nms_threshold`: any, `indices`: any, `eta?`: any, `top_k?`: any): *void*

*Defined in [types/opencv/dnn.ts:112](https://github.com/cancerberoSgx/mirada/blob/1c5d3d0/mirada/src/types/opencv/dnn.ts#L112)*

**Parameters:**

Name | Type |
------ | ------ |
`bboxes` | any |
`scores` | any |
`score_threshold` | any |
`nms_threshold` | any |
`indices` | any |
`eta?` | any |
`top_k?` | any |

**Returns:** *void*

▸ **NMSBoxes**(`bboxes`: any, `scores`: any, `score_threshold`: any, `nms_threshold`: any, `indices`: any, `eta?`: any, `top_k?`: any): *void*

*Defined in [types/opencv/dnn.ts:114](https://github.com/cancerberoSgx/mirada/blob/1c5d3d0/mirada/src/types/opencv/dnn.ts#L114)*

**Parameters:**

Name | Type |
------ | ------ |
`bboxes` | any |
`scores` | any |
`score_threshold` | any |
`nms_threshold` | any |
`indices` | any |
`eta?` | any |
`top_k?` | any |

**Returns:** *void*

___

###  blobFromImage

▸ **blobFromImage**(`image`: InputArray, `scalefactor?`: [double](_types_opencv__hacks_.md#double), `size?`: any, `mean?`: any, `swapRB?`: [bool](_types_opencv__hacks_.md#bool), `crop?`: [bool](_types_opencv__hacks_.md#bool), `ddepth?`: [int](_types_opencv__hacks_.md#int)): *[Mat](../classes/_types_opencv_mat_.mat.md)*

*Defined in [types/opencv/dnn.ts:40](https://github.com/cancerberoSgx/mirada/blob/1c5d3d0/mirada/src/types/opencv/dnn.ts#L40)*

if `crop` is true, input image is resized so one side after resize is equal to corresponding
dimension in `size` and another one is equal or larger. Then, crop from the center is performed. If
`crop` is false, direct resize without cropping and preserving aspect ratio is performed.

4-dimensional [Mat] with NCHW dimensions order.

**Parameters:**

Name | Type | Description |
------ | ------ | ------ |
`image` | InputArray | input image (with 1-, 3- or 4-channels).  |
`scalefactor?` | [double](_types_opencv__hacks_.md#double) | multiplier for image values.  |
`size?` | any | spatial size for output image  |
`mean?` | any | scalar with mean values which are subtracted from channels. Values are intended to be in (mean-R, mean-G, mean-B) order if image has BGR ordering and swapRB is true.  |
`swapRB?` | [bool](_types_opencv__hacks_.md#bool) | flag which indicates that swap first and last channels in 3-channel image is necessary.  |
`crop?` | [bool](_types_opencv__hacks_.md#bool) | flag which indicates whether image will be cropped after resize or not  |
`ddepth?` | [int](_types_opencv__hacks_.md#int) | Depth of output blob. Choose CV_32F or CV_8U.  |

**Returns:** *[Mat](../classes/_types_opencv_mat_.mat.md)*

▸ **blobFromImage**(`image`: InputArray, `blob`: OutputArray, `scalefactor?`: [double](_types_opencv__hacks_.md#double), `size?`: any, `mean?`: any, `swapRB?`: [bool](_types_opencv__hacks_.md#bool), `crop?`: [bool](_types_opencv__hacks_.md#bool), `ddepth?`: [int](_types_opencv__hacks_.md#int)): *void*

*Defined in [types/opencv/dnn.ts:46](https://github.com/cancerberoSgx/mirada/blob/1c5d3d0/mirada/src/types/opencv/dnn.ts#L46)*

This is an overloaded member function, provided for convenience. It differs from the above function
only in what argument(s) it accepts.

**Parameters:**

Name | Type |
------ | ------ |
`image` | InputArray |
`blob` | OutputArray |
`scalefactor?` | [double](_types_opencv__hacks_.md#double) |
`size?` | any |
`mean?` | any |
`swapRB?` | [bool](_types_opencv__hacks_.md#bool) |
`crop?` | [bool](_types_opencv__hacks_.md#bool) |
`ddepth?` | [int](_types_opencv__hacks_.md#int) |

**Returns:** *void*

___

###  blobFromImages

▸ **blobFromImages**(`images`: InputArrayOfArrays, `scalefactor?`: [double](_types_opencv__hacks_.md#double), `size?`: [Size](../classes/_types_opencv__hacks_.size.md), `mean?`: any, `swapRB?`: [bool](_types_opencv__hacks_.md#bool), `crop?`: [bool](_types_opencv__hacks_.md#bool), `ddepth?`: [int](_types_opencv__hacks_.md#int)): *[Mat](../classes/_types_opencv_mat_.mat.md)*

*Defined in [types/opencv/dnn.ts:71](https://github.com/cancerberoSgx/mirada/blob/1c5d3d0/mirada/src/types/opencv/dnn.ts#L71)*

if `crop` is true, input image is resized so one side after resize is equal to corresponding
dimension in `size` and another one is equal or larger. Then, crop from the center is performed. If
`crop` is false, direct resize without cropping and preserving aspect ratio is performed.

4-dimensional [Mat] with NCHW dimensions order.

**Parameters:**

Name | Type | Description |
------ | ------ | ------ |
`images` | InputArrayOfArrays | input images (all with 1-, 3- or 4-channels).  |
`scalefactor?` | [double](_types_opencv__hacks_.md#double) | multiplier for images values.  |
`size?` | [Size](../classes/_types_opencv__hacks_.size.md) | spatial size for output image  |
`mean?` | any | scalar with mean values which are subtracted from channels. Values are intended to be in (mean-R, mean-G, mean-B) order if image has BGR ordering and swapRB is true.  |
`swapRB?` | [bool](_types_opencv__hacks_.md#bool) | flag which indicates that swap first and last channels in 3-channel image is necessary.  |
`crop?` | [bool](_types_opencv__hacks_.md#bool) | flag which indicates whether image will be cropped after resize or not  |
`ddepth?` | [int](_types_opencv__hacks_.md#int) | Depth of output blob. Choose CV_32F or CV_8U.  |

**Returns:** *[Mat](../classes/_types_opencv_mat_.mat.md)*

▸ **blobFromImages**(`images`: InputArrayOfArrays, `blob`: OutputArray, `scalefactor?`: [double](_types_opencv__hacks_.md#double), `size?`: [Size](../classes/_types_opencv__hacks_.size.md), `mean?`: any, `swapRB?`: [bool](_types_opencv__hacks_.md#bool), `crop?`: [bool](_types_opencv__hacks_.md#bool), `ddepth?`: [int](_types_opencv__hacks_.md#int)): *void*

*Defined in [types/opencv/dnn.ts:77](https://github.com/cancerberoSgx/mirada/blob/1c5d3d0/mirada/src/types/opencv/dnn.ts#L77)*

This is an overloaded member function, provided for convenience. It differs from the above function
only in what argument(s) it accepts.

**Parameters:**

Name | Type |
------ | ------ |
`images` | InputArrayOfArrays |
`blob` | OutputArray |
`scalefactor?` | [double](_types_opencv__hacks_.md#double) |
`size?` | [Size](../classes/_types_opencv__hacks_.size.md) |
`mean?` | any |
`swapRB?` | [bool](_types_opencv__hacks_.md#bool) |
`crop?` | [bool](_types_opencv__hacks_.md#bool) |
`ddepth?` | [int](_types_opencv__hacks_.md#int) |

**Returns:** *void*

___

###  getAvailableBackends

▸ **getAvailableBackends**(): *any*

*Defined in [types/opencv/dnn.ts:79](https://github.com/cancerberoSgx/mirada/blob/1c5d3d0/mirada/src/types/opencv/dnn.ts#L79)*

**Returns:** *any*

___

###  getAvailableTargets

▸ **getAvailableTargets**(`be`: [Backend](_types_opencv_dnn_.md#backend)): *any*

*Defined in [types/opencv/dnn.ts:81](https://github.com/cancerberoSgx/mirada/blob/1c5d3d0/mirada/src/types/opencv/dnn.ts#L81)*

**Parameters:**

Name | Type |
------ | ------ |
`be` | [Backend](_types_opencv_dnn_.md#backend) |

**Returns:** *any*

___

###  imagesFromBlob

▸ **imagesFromBlob**(`blob_`: any, `images_`: OutputArrayOfArrays): *any*

*Defined in [types/opencv/dnn.ts:92](https://github.com/cancerberoSgx/mirada/blob/1c5d3d0/mirada/src/types/opencv/dnn.ts#L92)*

**Parameters:**

Name | Type | Description |
------ | ------ | ------ |
`blob_` | any | 4 dimensional array (images, channels, height, width) in floating point precision (CV_32F) from which you would like to extract the images.  |
`images_` | OutputArrayOfArrays | array of 2D Mat containing the images extracted from the blob in floating point precision (CV_32F). They are non normalized neither mean added. The number of returned images equals the first dimension of the blob (batch size). Every image has a number of channels equals to the second dimension of the blob (depth).  |

**Returns:** *any*

___

###  readNet

▸ **readNet**(`model`: any, `config?`: any, `framework?`: any): *[Net](_types_opencv__hacks_.md#net)*

*Defined in [types/opencv/dnn.ts:137](https://github.com/cancerberoSgx/mirada/blob/1c5d3d0/mirada/src/types/opencv/dnn.ts#L137)*

[Net] object.
This function automatically detects an origin framework of trained model and calls an appropriate
function such [readNetFromCaffe], [readNetFromTensorflow], [readNetFromTorch] or
[readNetFromDarknet]. An order of `model` and `config` arguments does not matter.

**Parameters:**

Name | Type | Description |
------ | ------ | ------ |
`model` | any | Binary file contains trained weights. The following file extensions are expected for models from different frameworks: .caffemodel (Caffe, http://caffe.berkeleyvision.org/)*.pb (TensorFlow, https://www.tensorflow.org/)*.t7 | *.net (Torch, http://torch.ch/)*.weights (Darknet, https://pjreddie.com/darknet/)*.bin (DLDT, https://software.intel.com/openvino-toolkit)*.onnx (ONNX, https://onnx.ai/)  |
`config?` | any | Text file contains network configuration. It could be a file with the following extensions: .prototxt (Caffe, http://caffe.berkeleyvision.org/)*.pbtxt (TensorFlow, https://www.tensorflow.org/)*.cfg (Darknet, https://pjreddie.com/darknet/)*.xml (DLDT, https://software.intel.com/openvino-toolkit)  |
`framework?` | any | Explicit framework name tag to determine a format.  |

**Returns:** *[Net](_types_opencv__hacks_.md#net)*

▸ **readNet**(`framework`: any, `bufferModel`: [uchar](_types_opencv__hacks_.md#uchar), `bufferConfig?`: [uchar](_types_opencv__hacks_.md#uchar)): *[uchar](_types_opencv__hacks_.md#uchar)*

*Defined in [types/opencv/dnn.ts:151](https://github.com/cancerberoSgx/mirada/blob/1c5d3d0/mirada/src/types/opencv/dnn.ts#L151)*

This is an overloaded member function, provided for convenience. It differs from the above function
only in what argument(s) it accepts.

[Net] object.

**Parameters:**

Name | Type | Description |
------ | ------ | ------ |
`framework` | any | Name of origin framework.  |
`bufferModel` | [uchar](_types_opencv__hacks_.md#uchar) | A buffer with a content of binary file with weights  |
`bufferConfig?` | [uchar](_types_opencv__hacks_.md#uchar) | A buffer with a content of text file contains network configuration.  |

**Returns:** *[uchar](_types_opencv__hacks_.md#uchar)*

___

###  readNetFromCaffe

▸ **readNetFromCaffe**(`prototxt`: any, `caffeModel?`: any): *[Net](_types_opencv__hacks_.md#net)*

*Defined in [types/opencv/dnn.ts:160](https://github.com/cancerberoSgx/mirada/blob/1c5d3d0/mirada/src/types/opencv/dnn.ts#L160)*

[Net] object.

**Parameters:**

Name | Type | Description |
------ | ------ | ------ |
`prototxt` | any | path to the .prototxt file with text description of the network architecture.  |
`caffeModel?` | any | path to the .caffemodel file with learned network.  |

**Returns:** *[Net](_types_opencv__hacks_.md#net)*

▸ **readNetFromCaffe**(`bufferProto`: [uchar](_types_opencv__hacks_.md#uchar), `bufferModel?`: [uchar](_types_opencv__hacks_.md#uchar)): *[uchar](_types_opencv__hacks_.md#uchar)*

*Defined in [types/opencv/dnn.ts:169](https://github.com/cancerberoSgx/mirada/blob/1c5d3d0/mirada/src/types/opencv/dnn.ts#L169)*

[Net] object.

**Parameters:**

Name | Type | Description |
------ | ------ | ------ |
`bufferProto` | [uchar](_types_opencv__hacks_.md#uchar) | buffer containing the content of the .prototxt file  |
`bufferModel?` | [uchar](_types_opencv__hacks_.md#uchar) | buffer containing the content of the .caffemodel file  |

**Returns:** *[uchar](_types_opencv__hacks_.md#uchar)*

▸ **readNetFromCaffe**(`bufferProto`: any, `lenProto`: [size_t](_types_opencv__hacks_.md#size_t), `bufferModel?`: any, `lenModel?`: [size_t](_types_opencv__hacks_.md#size_t)): *[Net](_types_opencv__hacks_.md#net)*

*Defined in [types/opencv/dnn.ts:185](https://github.com/cancerberoSgx/mirada/blob/1c5d3d0/mirada/src/types/opencv/dnn.ts#L185)*

This is an overloaded member function, provided for convenience. It differs from the above function
only in what argument(s) it accepts.

[Net] object.

**Parameters:**

Name | Type | Description |
------ | ------ | ------ |
`bufferProto` | any | buffer containing the content of the .prototxt file  |
`lenProto` | [size_t](_types_opencv__hacks_.md#size_t) | length of bufferProto  |
`bufferModel?` | any | buffer containing the content of the .caffemodel file  |
`lenModel?` | [size_t](_types_opencv__hacks_.md#size_t) | length of bufferModel  |

**Returns:** *[Net](_types_opencv__hacks_.md#net)*

___

###  readNetFromDarknet

▸ **readNetFromDarknet**(`cfgFile`: any, `darknetModel?`: any): *[Net](_types_opencv__hacks_.md#net)*

*Defined in [types/opencv/dnn.ts:196](https://github.com/cancerberoSgx/mirada/blob/1c5d3d0/mirada/src/types/opencv/dnn.ts#L196)*

Network object that ready to do forward, throw an exception in failure cases.

[Net] object.

**Parameters:**

Name | Type | Description |
------ | ------ | ------ |
`cfgFile` | any | path to the .cfg file with text description of the network architecture.  |
`darknetModel?` | any | path to the .weights file with learned network.  |

**Returns:** *[Net](_types_opencv__hacks_.md#net)*

▸ **readNetFromDarknet**(`bufferCfg`: [uchar](_types_opencv__hacks_.md#uchar), `bufferModel?`: [uchar](_types_opencv__hacks_.md#uchar)): *[uchar](_types_opencv__hacks_.md#uchar)*

*Defined in [types/opencv/dnn.ts:206](https://github.com/cancerberoSgx/mirada/blob/1c5d3d0/mirada/src/types/opencv/dnn.ts#L206)*

[Net] object.

**Parameters:**

Name | Type | Description |
------ | ------ | ------ |
`bufferCfg` | [uchar](_types_opencv__hacks_.md#uchar) | A buffer contains a content of .cfg file with text description of the network architecture.  |
`bufferModel?` | [uchar](_types_opencv__hacks_.md#uchar) | A buffer contains a content of .weights file with learned network.  |

**Returns:** *[uchar](_types_opencv__hacks_.md#uchar)*

▸ **readNetFromDarknet**(`bufferCfg`: any, `lenCfg`: [size_t](_types_opencv__hacks_.md#size_t), `bufferModel?`: any, `lenModel?`: [size_t](_types_opencv__hacks_.md#size_t)): *[Net](_types_opencv__hacks_.md#net)*

*Defined in [types/opencv/dnn.ts:220](https://github.com/cancerberoSgx/mirada/blob/1c5d3d0/mirada/src/types/opencv/dnn.ts#L220)*

[Net] object.

**Parameters:**

Name | Type | Description |
------ | ------ | ------ |
`bufferCfg` | any | A buffer contains a content of .cfg file with text description of the network architecture.  |
`lenCfg` | [size_t](_types_opencv__hacks_.md#size_t) | Number of bytes to read from bufferCfg  |
`bufferModel?` | any | A buffer contains a content of .weights file with learned network.  |
`lenModel?` | [size_t](_types_opencv__hacks_.md#size_t) | Number of bytes to read from bufferModel  |

**Returns:** *[Net](_types_opencv__hacks_.md#net)*

___

###  readNetFromModelOptimizer

▸ **readNetFromModelOptimizer**(`xml`: any, `bin`: any): *[Net](_types_opencv__hacks_.md#net)*

*Defined in [types/opencv/dnn.ts:230](https://github.com/cancerberoSgx/mirada/blob/1c5d3d0/mirada/src/types/opencv/dnn.ts#L230)*

[Net] object. Networks imported from Intel's [Model] Optimizer are launched in Intel's Inference
Engine backend.

**Parameters:**

Name | Type | Description |
------ | ------ | ------ |
`xml` | any | XML configuration file with network's topology.  |
`bin` | any | Binary file with trained weights.  |

**Returns:** *[Net](_types_opencv__hacks_.md#net)*

___

###  readNetFromONNX

▸ **readNetFromONNX**(`onnxFile`: any): *[Net](_types_opencv__hacks_.md#net)*

*Defined in [types/opencv/dnn.ts:237](https://github.com/cancerberoSgx/mirada/blob/1c5d3d0/mirada/src/types/opencv/dnn.ts#L237)*

Network object that ready to do forward, throw an exception in failure cases.

**Parameters:**

Name | Type | Description |
------ | ------ | ------ |
`onnxFile` | any | path to the .onnx file with text description of the network architecture.  |

**Returns:** *[Net](_types_opencv__hacks_.md#net)*

▸ **readNetFromONNX**(`buffer`: any, `sizeBuffer`: [size_t](_types_opencv__hacks_.md#size_t)): *[Net](_types_opencv__hacks_.md#net)*

*Defined in [types/opencv/dnn.ts:246](https://github.com/cancerberoSgx/mirada/blob/1c5d3d0/mirada/src/types/opencv/dnn.ts#L246)*

Network object that ready to do forward, throw an exception in failure cases.

**Parameters:**

Name | Type | Description |
------ | ------ | ------ |
`buffer` | any | memory address of the first byte of the buffer.  |
`sizeBuffer` | [size_t](_types_opencv__hacks_.md#size_t) | size of the buffer.  |

**Returns:** *[Net](_types_opencv__hacks_.md#net)*

▸ **readNetFromONNX**(`buffer`: [uchar](_types_opencv__hacks_.md#uchar)): *[uchar](_types_opencv__hacks_.md#uchar)*

*Defined in [types/opencv/dnn.ts:253](https://github.com/cancerberoSgx/mirada/blob/1c5d3d0/mirada/src/types/opencv/dnn.ts#L253)*

Network object that ready to do forward, throw an exception in failure cases.

**Parameters:**

Name | Type | Description |
------ | ------ | ------ |
`buffer` | [uchar](_types_opencv__hacks_.md#uchar) | in-memory buffer that stores the ONNX model bytes.  |

**Returns:** *[uchar](_types_opencv__hacks_.md#uchar)*

___

###  readNetFromTensorflow

▸ **readNetFromTensorflow**(`model`: any, `config?`: any): *[Net](_types_opencv__hacks_.md#net)*

*Defined in [types/opencv/dnn.ts:264](https://github.com/cancerberoSgx/mirada/blob/1c5d3d0/mirada/src/types/opencv/dnn.ts#L264)*

[Net] object.

**Parameters:**

Name | Type | Description |
------ | ------ | ------ |
`model` | any | path to the .pb file with binary protobuf description of the network architecture  |
`config?` | any | path to the .pbtxt file that contains text graph definition in protobuf format. Resulting Net object is built by text graph using weights from a binary one that let us make it more flexible.  |

**Returns:** *[Net](_types_opencv__hacks_.md#net)*

▸ **readNetFromTensorflow**(`bufferModel`: [uchar](_types_opencv__hacks_.md#uchar), `bufferConfig?`: [uchar](_types_opencv__hacks_.md#uchar)): *[uchar](_types_opencv__hacks_.md#uchar)*

*Defined in [types/opencv/dnn.ts:273](https://github.com/cancerberoSgx/mirada/blob/1c5d3d0/mirada/src/types/opencv/dnn.ts#L273)*

[Net] object.

**Parameters:**

Name | Type | Description |
------ | ------ | ------ |
`bufferModel` | [uchar](_types_opencv__hacks_.md#uchar) | buffer containing the content of the pb file  |
`bufferConfig?` | [uchar](_types_opencv__hacks_.md#uchar) | buffer containing the content of the pbtxt file  |

**Returns:** *[uchar](_types_opencv__hacks_.md#uchar)*

▸ **readNetFromTensorflow**(`bufferModel`: any, `lenModel`: [size_t](_types_opencv__hacks_.md#size_t), `bufferConfig?`: any, `lenConfig?`: [size_t](_types_opencv__hacks_.md#size_t)): *[Net](_types_opencv__hacks_.md#net)*

*Defined in [types/opencv/dnn.ts:287](https://github.com/cancerberoSgx/mirada/blob/1c5d3d0/mirada/src/types/opencv/dnn.ts#L287)*

This is an overloaded member function, provided for convenience. It differs from the above function
only in what argument(s) it accepts.

**Parameters:**

Name | Type | Description |
------ | ------ | ------ |
`bufferModel` | any | buffer containing the content of the pb file  |
`lenModel` | [size_t](_types_opencv__hacks_.md#size_t) | length of bufferModel  |
`bufferConfig?` | any | buffer containing the content of the pbtxt file  |
`lenConfig?` | [size_t](_types_opencv__hacks_.md#size_t) | length of bufferConfig  |

**Returns:** *[Net](_types_opencv__hacks_.md#net)*

___

###  readNetFromTorch

▸ **readNetFromTorch**(`model`: any, `isBinary?`: [bool](_types_opencv__hacks_.md#bool), `evaluate?`: [bool](_types_opencv__hacks_.md#bool)): *[Net](_types_opencv__hacks_.md#net)*

*Defined in [types/opencv/dnn.ts:318](https://github.com/cancerberoSgx/mirada/blob/1c5d3d0/mirada/src/types/opencv/dnn.ts#L318)*

[Net] object.

Ascii mode of Torch serializer is more preferable, because binary mode extensively use `long` type
of C language, which has various bit-length on different systems.
The loading file must contain serialized  object with importing network. Try to eliminate a custom
objects from serialazing data to avoid importing errors.

List of supported layers (i.e. object instances derived from Torch nn.Module class):

nn.Sequential
nn.Parallel
nn.Concat
nn.Linear
nn.SpatialConvolution
nn.SpatialMaxPooling, nn.SpatialAveragePooling
nn.ReLU, nn.TanH, nn.Sigmoid
nn.Reshape
nn.SoftMax, nn.LogSoftMax

Also some equivalents of these classes from cunn, cudnn, and fbcunn may be successfully imported.

**Parameters:**

Name | Type | Description |
------ | ------ | ------ |
`model` | any | path to the file, dumped from Torch by using torch.save() function.  |
`isBinary?` | [bool](_types_opencv__hacks_.md#bool) | specifies whether the network was serialized in ascii mode or binary.  |
`evaluate?` | [bool](_types_opencv__hacks_.md#bool) | specifies testing phase of network. If true, it's similar to evaluate() method in Torch.  |

**Returns:** *[Net](_types_opencv__hacks_.md#net)*

___

###  readTensorFromONNX

▸ **readTensorFromONNX**(`path`: any): *[Mat](../classes/_types_opencv_mat_.mat.md)*

*Defined in [types/opencv/dnn.ts:325](https://github.com/cancerberoSgx/mirada/blob/1c5d3d0/mirada/src/types/opencv/dnn.ts#L325)*

[Mat].

**Parameters:**

Name | Type | Description |
------ | ------ | ------ |
`path` | any | to the .pb file with input tensor.  |

**Returns:** *[Mat](../classes/_types_opencv_mat_.mat.md)*

___

###  readTorchBlob

▸ **readTorchBlob**(`filename`: any, `isBinary?`: [bool](_types_opencv__hacks_.md#bool)): *[Mat](../classes/_types_opencv_mat_.mat.md)*

*Defined in [types/opencv/dnn.ts:330](https://github.com/cancerberoSgx/mirada/blob/1c5d3d0/mirada/src/types/opencv/dnn.ts#L330)*

This function has the same limitations as [readNetFromTorch()].

**Parameters:**

Name | Type |
------ | ------ |
`filename` | any |
`isBinary?` | [bool](_types_opencv__hacks_.md#bool) |

**Returns:** *[Mat](../classes/_types_opencv_mat_.mat.md)*

___

###  shrinkCaffeModel

▸ **shrinkCaffeModel**(`src`: any, `dst`: any, `layersTypes?`: any): *void*

*Defined in [types/opencv/dnn.ts:345](https://github.com/cancerberoSgx/mirada/blob/1c5d3d0/mirada/src/types/opencv/dnn.ts#L345)*

Shrinked model has no origin float32 weights so it can't be used in origin Caffe framework anymore.
However the structure of data is taken from NVidia's Caffe fork: . So the resulting model may be
used there.

**Parameters:**

Name | Type | Description |
------ | ------ | ------ |
`src` | any | Path to origin model from Caffe framework contains single precision floating point weights (usually has .caffemodel extension).  |
`dst` | any | Path to destination model with updated weights.  |
`layersTypes?` | any | Set of layers types which parameters will be converted. By default, converts only Convolutional and Fully-Connected layers' weights.  |

**Returns:** *void*

___

###  writeTextGraph

▸ **writeTextGraph**(`model`: any, `output`: any): *void*

*Defined in [types/opencv/dnn.ts:354](https://github.com/cancerberoSgx/mirada/blob/1c5d3d0/mirada/src/types/opencv/dnn.ts#L354)*

To reduce output file size, trained weights are not included.

**Parameters:**

Name | Type | Description |
------ | ------ | ------ |
`model` | any | A path to binary network.  |
`output` | any | A path to output text file to be created.  |

**Returns:** *void*