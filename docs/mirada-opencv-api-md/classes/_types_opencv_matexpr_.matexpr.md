[mirada](../README.md) › ["types/opencv/MatExpr"](../modules/_types_opencv_matexpr_.md) › [MatExpr](_types_opencv_matexpr_.matexpr.md)

# Class: MatExpr


<a name="d1/d10/classcv_1_1MatExpr_1MatrixExpressions"></a>This is a list of implemented matrix
operations that can be combined in arbitrary complex expressions (here A, B stand for matrices (
[Mat](#d3/d63/classcv_1_1Mat}) ), s for a scalar ( Scalar ), alpha for a real-valued scalar ( double
)):

Addition, subtraction, negation: `A+B`, `A-B`, `A+s`, `A-s`, `s+A`, `s-A`, `-A`
Scaling: `A*alpha`
Per-element multiplication and division: `A.mul(B)`, `A/B`, `alpha/A`
Matrix multiplication: `A*B`
Transposition: `A.t()` (means A)
Matrix inversion and pseudo-inversion, solving linear systems and least-squares problems:
`A.inv([method]) (~ A<sup>-1</sup>)`, `A.inv([method])*B (~ X: AX=B)`
Comparison: `A cmpop B`, `A cmpop alpha`, `alpha cmpop A`, where *cmpop* is one of `>`, `>=`, `==`,
`!=`, `<=`, `<`. The result of comparison is an 8-bit single channel mask whose elements are set to
255 (if the particular element or pair of elements satisfy the condition) or 0.
Bitwise logical operations: `A logicop B`, `A logicop s`, `s logicop A`, `~A`, where *logicop* is
one of `&`, `|`, `^`.
Element-wise minimum and maximum: `min(A, B)`, `min(A, alpha)`, `max(A, B)`, `max(A, alpha)`
Element-wise absolute value: `abs(A)`
Cross-product, dot-product: `A.cross(B)`, `A.dot(B)`
Any function of matrix or matrices and scalars that returns a matrix or a scalar, such as norm,
mean, sum, countNonZero, trace, determinant, repeat, and others.
Matrix initializers ( [Mat::eye()](#d3/d63/classcv_1_1Mat_1a2cf9b9acde7a9852542bbc20ef851ed2}),
[Mat::zeros()](#d3/d63/classcv_1_1Mat_1a0b57b6a326c8876d944d188a46e0f556}),
[Mat::ones()](#d3/d63/classcv_1_1Mat_1a69ae0402d116fc9c71908d8508dc2f09}) ), matrix comma-separated
initializers, matrix constructors and operators that extract sub-matrices (see
[Mat](#d3/d63/classcv_1_1Mat}) description).
Mat_<destination_type>() constructors to cast the result to the proper type.

Comma-separated initializers and probably some other operations may require additional explicit
Mat() or Mat_<T>() constructor calls to resolve a possible ambiguity.
Here are examples of matrix expressions:

```cpp
// compute pseudo-inverse of A, equivalent to A.inv(DECOMP_SVD)
SVD svd(A);
Mat pinvA = svd.vt.t()*Mat::diag(1./svd.w)*svd.u.t();

// compute the new vector of parameters in the Levenberg-Marquardt algorithm
x -= (A.t()*A + lambda*Mat::eye(A.cols,A.cols,A.type())).inv(DECOMP_CHOLESKY)*(A.t()*err);

// sharpen image using "unsharp mask" algorithm
Mat blurred; double sigma = 1, threshold = 5, amount = 1;
GaussianBlur(img, blurred, Size(), sigma, sigma);
Mat lowContrastMask = abs(img - blurred) < threshold;
Mat sharpened = img*(1+amount) + blurred*(-amount);
img.copyTo(sharpened, lowContrastMask);
```

Source:
[opencv2/core/mat.hpp](https://github.com/opencv/opencv/tree/master/modules/core/include/opencv2/core/mat.hpp#L3557).

## Hierarchy

  ↳ [Mat](_types_opencv_mat_.mat.md)

  ↳ **MatExpr**

## Index

### Constructors

* [constructor](_types_opencv_matexpr_.matexpr.md#constructor)

### Properties

* [a](_types_opencv_matexpr_.matexpr.md#a)
* [allocator](_types_opencv_matexpr_.matexpr.md#allocator)
* [alpha](_types_opencv_matexpr_.matexpr.md#alpha)
* [b](_types_opencv_matexpr_.matexpr.md#b)
* [beta](_types_opencv_matexpr_.matexpr.md#beta)
* [c](_types_opencv_matexpr_.matexpr.md#c)
* [cols](_types_opencv_matexpr_.matexpr.md#cols)
* [data](_types_opencv_matexpr_.matexpr.md#data)
* [data16S](_types_opencv_matexpr_.matexpr.md#data16s)
* [data16U](_types_opencv_matexpr_.matexpr.md#data16u)
* [data32F](_types_opencv_matexpr_.matexpr.md#data32f)
* [data32S](_types_opencv_matexpr_.matexpr.md#data32s)
* [data32U](_types_opencv_matexpr_.matexpr.md#data32u)
* [data64F](_types_opencv_matexpr_.matexpr.md#data64f)
* [data8S](_types_opencv_matexpr_.matexpr.md#data8s)
* [data8U](_types_opencv_matexpr_.matexpr.md#data8u)
* [dataend](_types_opencv_matexpr_.matexpr.md#dataend)
* [datalimit](_types_opencv_matexpr_.matexpr.md#datalimit)
* [datastart](_types_opencv_matexpr_.matexpr.md#datastart)
* [dims](_types_opencv_matexpr_.matexpr.md#dims)
* [flags](_types_opencv_matexpr_.matexpr.md#flags)
* [op](_types_opencv_matexpr_.matexpr.md#op)
* [rows](_types_opencv_matexpr_.matexpr.md#rows)
* [s](_types_opencv_matexpr_.matexpr.md#s)
* [size](_types_opencv_matexpr_.matexpr.md#size)
* [step](_types_opencv_matexpr_.matexpr.md#step)
* [u](_types_opencv_matexpr_.matexpr.md#u)

### Methods

* [addref](_types_opencv_matexpr_.matexpr.md#addref)
* [adjustROI](_types_opencv_matexpr_.matexpr.md#adjustroi)
* [begin](_types_opencv_matexpr_.matexpr.md#begin)
* [channels](_types_opencv_matexpr_.matexpr.md#channels)
* [charAt](_types_opencv_matexpr_.matexpr.md#charat)
* [charPtr](_types_opencv_matexpr_.matexpr.md#charptr)
* [checkVector](_types_opencv_matexpr_.matexpr.md#checkvector)
* [clone](_types_opencv_matexpr_.matexpr.md#clone)
* [col](_types_opencv_matexpr_.matexpr.md#col)
* [colRange](_types_opencv_matexpr_.matexpr.md#colrange)
* [convertTo](_types_opencv_matexpr_.matexpr.md#convertto)
* [copySize](_types_opencv_matexpr_.matexpr.md#copysize)
* [copyTo](_types_opencv_matexpr_.matexpr.md#copyto)
* [create](_types_opencv_matexpr_.matexpr.md#create)
* [cross](_types_opencv_matexpr_.matexpr.md#cross)
* [deallocate](_types_opencv_matexpr_.matexpr.md#deallocate)
* [delete](_types_opencv_matexpr_.matexpr.md#delete)
* [deleteLater](_types_opencv_matexpr_.matexpr.md#deletelater)
* [depth](_types_opencv_matexpr_.matexpr.md#depth)
* [diag](_types_opencv_matexpr_.matexpr.md#diag)
* [dot](_types_opencv_matexpr_.matexpr.md#dot)
* [doublePtr](_types_opencv_matexpr_.matexpr.md#doubleptr)
* [elemSize](_types_opencv_matexpr_.matexpr.md#elemsize)
* [elemSize1](_types_opencv_matexpr_.matexpr.md#elemsize1)
* [empty](_types_opencv_matexpr_.matexpr.md#empty)
* [end](_types_opencv_matexpr_.matexpr.md#end)
* [floatPtr](_types_opencv_matexpr_.matexpr.md#floatptr)
* [forEach](_types_opencv_matexpr_.matexpr.md#foreach)
* [get](_types_opencv_matexpr_.matexpr.md#get)
* [getUMat](_types_opencv_matexpr_.matexpr.md#getumat)
* [intPtr](_types_opencv_matexpr_.matexpr.md#intptr)
* [inv](_types_opencv_matexpr_.matexpr.md#inv)
* [isAliasOf](_types_opencv_matexpr_.matexpr.md#isaliasof)
* [isContinuous](_types_opencv_matexpr_.matexpr.md#iscontinuous)
* [isDeleted](_types_opencv_matexpr_.matexpr.md#isdeleted)
* [locateROI](_types_opencv_matexpr_.matexpr.md#locateroi)
* [mul](_types_opencv_matexpr_.matexpr.md#mul)
* [pop_back](_types_opencv_matexpr_.matexpr.md#pop_back)
* [ptr](_types_opencv_matexpr_.matexpr.md#ptr)
* [push_back](_types_opencv_matexpr_.matexpr.md#push_back)
* [push_back_](_types_opencv_matexpr_.matexpr.md#push_back_)
* [put](_types_opencv_matexpr_.matexpr.md#put)
* [release](_types_opencv_matexpr_.matexpr.md#release)
* [reserve](_types_opencv_matexpr_.matexpr.md#reserve)
* [reserveBuffer](_types_opencv_matexpr_.matexpr.md#reservebuffer)
* [reshape](_types_opencv_matexpr_.matexpr.md#reshape)
* [resize](_types_opencv_matexpr_.matexpr.md#resize)
* [roi](_types_opencv_matexpr_.matexpr.md#roi)
* [row](_types_opencv_matexpr_.matexpr.md#row)
* [rowRange](_types_opencv_matexpr_.matexpr.md#rowrange)
* [set](_types_opencv_matexpr_.matexpr.md#set)
* [setTo](_types_opencv_matexpr_.matexpr.md#setto)
* [shortPtr](_types_opencv_matexpr_.matexpr.md#shortptr)
* [step1](_types_opencv_matexpr_.matexpr.md#step1)
* [t](_types_opencv_matexpr_.matexpr.md#t)
* [total](_types_opencv_matexpr_.matexpr.md#total)
* [type](_types_opencv_matexpr_.matexpr.md#type)
* [ucharAt](_types_opencv_matexpr_.matexpr.md#ucharat)
* [ucharPtr](_types_opencv_matexpr_.matexpr.md#ucharptr)
* [updateContinuityFlag](_types_opencv_matexpr_.matexpr.md#updatecontinuityflag)
* [ushortPtr](_types_opencv_matexpr_.matexpr.md#ushortptr)
* [diag](_types_opencv_matexpr_.matexpr.md#static-diag)
* [eye](_types_opencv_matexpr_.matexpr.md#static-eye)
* [getDefaultAllocator](_types_opencv_matexpr_.matexpr.md#static-getdefaultallocator)
* [getStdAllocator](_types_opencv_matexpr_.matexpr.md#static-getstdallocator)
* [ones](_types_opencv_matexpr_.matexpr.md#static-ones)
* [setDefaultAllocator](_types_opencv_matexpr_.matexpr.md#static-setdefaultallocator)
* [zeros](_types_opencv_matexpr_.matexpr.md#static-zeros)

## Constructors

###  constructor

\+ **new MatExpr**(): *[MatExpr](_types_opencv_matexpr_.matexpr.md)*

*Overrides [Mat](_types_opencv_mat_.mat.md).[constructor](_types_opencv_mat_.mat.md#constructor)*

*Defined in [types/opencv/MatExpr.ts:74](https://github.com/cancerberoSgx/mirada/blob/c8721d6/mirada/src/types/opencv/MatExpr.ts#L74)*

**Returns:** *[MatExpr](_types_opencv_matexpr_.matexpr.md)*

\+ **new MatExpr**(`m`: [Mat](_types_opencv_mat_.mat.md)): *[MatExpr](_types_opencv_matexpr_.matexpr.md)*

*Overrides [Mat](_types_opencv_mat_.mat.md).[constructor](_types_opencv_mat_.mat.md#constructor)*

*Defined in [types/opencv/MatExpr.ts:76](https://github.com/cancerberoSgx/mirada/blob/c8721d6/mirada/src/types/opencv/MatExpr.ts#L76)*

**Parameters:**

Name | Type |
------ | ------ |
`m` | [Mat](_types_opencv_mat_.mat.md) |

**Returns:** *[MatExpr](_types_opencv_matexpr_.matexpr.md)*

\+ **new MatExpr**(`_op`: [MatOp](_types_opencv_matop_.matop.md), `_flags`: [int](../modules/_types_opencv__hacks_.md#int), `_a?`: [Mat](_types_opencv_mat_.mat.md), `_b?`: [Mat](_types_opencv_mat_.mat.md), `_c?`: [Mat](_types_opencv_mat_.mat.md), `_alpha?`: [double](../modules/_types_opencv__hacks_.md#double), `_beta?`: [double](../modules/_types_opencv__hacks_.md#double), `_s?`: [Scalar](_types_opencv__hacks_.scalar.md)): *[MatExpr](_types_opencv_matexpr_.matexpr.md)*

*Overrides [Mat](_types_opencv_mat_.mat.md).[constructor](_types_opencv_mat_.mat.md#constructor)*

*Defined in [types/opencv/MatExpr.ts:78](https://github.com/cancerberoSgx/mirada/blob/c8721d6/mirada/src/types/opencv/MatExpr.ts#L78)*

**Parameters:**

Name | Type |
------ | ------ |
`_op` | [MatOp](_types_opencv_matop_.matop.md) |
`_flags` | [int](../modules/_types_opencv__hacks_.md#int) |
`_a?` | [Mat](_types_opencv_mat_.mat.md) |
`_b?` | [Mat](_types_opencv_mat_.mat.md) |
`_c?` | [Mat](_types_opencv_mat_.mat.md) |
`_alpha?` | [double](../modules/_types_opencv__hacks_.md#double) |
`_beta?` | [double](../modules/_types_opencv__hacks_.md#double) |
`_s?` | [Scalar](_types_opencv__hacks_.scalar.md) |

**Returns:** *[MatExpr](_types_opencv_matexpr_.matexpr.md)*

## Properties

###  a

• **a**: *[Mat](_types_opencv_mat_.mat.md)*

*Defined in [types/opencv/MatExpr.ts:60](https://github.com/cancerberoSgx/mirada/blob/c8721d6/mirada/src/types/opencv/MatExpr.ts#L60)*

___

###  allocator

• **allocator**: *[MatAllocator](../modules/_types_opencv__hacks_.md#matallocator)*

*Inherited from [Mat](_types_opencv_mat_.mat.md).[allocator](_types_opencv_mat_.mat.md#allocator)*

*Defined in [types/opencv/Mat.ts:225](https://github.com/cancerberoSgx/mirada/blob/c8721d6/mirada/src/types/opencv/Mat.ts#L225)*

___

###  alpha

• **alpha**: *[double](../modules/_types_opencv__hacks_.md#double)*

*Defined in [types/opencv/MatExpr.ts:62](https://github.com/cancerberoSgx/mirada/blob/c8721d6/mirada/src/types/opencv/MatExpr.ts#L62)*

___

###  b

• **b**: *[Mat](_types_opencv_mat_.mat.md)*

*Defined in [types/opencv/MatExpr.ts:64](https://github.com/cancerberoSgx/mirada/blob/c8721d6/mirada/src/types/opencv/MatExpr.ts#L64)*

___

###  beta

• **beta**: *[double](../modules/_types_opencv__hacks_.md#double)*

*Defined in [types/opencv/MatExpr.ts:66](https://github.com/cancerberoSgx/mirada/blob/c8721d6/mirada/src/types/opencv/MatExpr.ts#L66)*

___

###  c

• **c**: *[Mat](_types_opencv_mat_.mat.md)*

*Defined in [types/opencv/MatExpr.ts:68](https://github.com/cancerberoSgx/mirada/blob/c8721d6/mirada/src/types/opencv/MatExpr.ts#L68)*

___

###  cols

• **cols**: *[int](../modules/_types_opencv__hacks_.md#int)*

*Inherited from [Mat](_types_opencv_mat_.mat.md).[cols](_types_opencv_mat_.mat.md#cols)*

*Defined in [types/opencv/Mat.ts:227](https://github.com/cancerberoSgx/mirada/blob/c8721d6/mirada/src/types/opencv/Mat.ts#L227)*

___

###  data

• **data**: *[uchar](../modules/_types_opencv__hacks_.md#uchar)*

*Inherited from [Mat](_types_opencv_mat_.mat.md).[data](_types_opencv_mat_.mat.md#data)*

*Overrides [Mat_](_types_opencv__hacks_.mat_.md).[data](_types_opencv__hacks_.mat_.md#data)*

*Defined in [types/opencv/Mat.ts:229](https://github.com/cancerberoSgx/mirada/blob/c8721d6/mirada/src/types/opencv/Mat.ts#L229)*

___

###  data16S

• **data16S**: *Int16Array*

*Inherited from [Mat_](_types_opencv__hacks_.mat_.md).[data16S](_types_opencv__hacks_.mat_.md#data16s)*

*Defined in [types/opencv/_hacks.ts:187](https://github.com/cancerberoSgx/mirada/blob/c8721d6/mirada/src/types/opencv/_hacks.ts#L187)*

___

###  data16U

• **data16U**: *Uint16Array*

*Inherited from [Mat_](_types_opencv__hacks_.mat_.md).[data16U](_types_opencv__hacks_.mat_.md#data16u)*

*Defined in [types/opencv/_hacks.ts:186](https://github.com/cancerberoSgx/mirada/blob/c8721d6/mirada/src/types/opencv/_hacks.ts#L186)*

___

###  data32F

• **data32F**: *Float32Array*

*Inherited from [Mat_](_types_opencv__hacks_.mat_.md).[data32F](_types_opencv__hacks_.mat_.md#data32f)*

*Defined in [types/opencv/_hacks.ts:190](https://github.com/cancerberoSgx/mirada/blob/c8721d6/mirada/src/types/opencv/_hacks.ts#L190)*

___

###  data32S

• **data32S**: *Int32Array*

*Inherited from [Mat_](_types_opencv__hacks_.mat_.md).[data32S](_types_opencv__hacks_.mat_.md#data32s)*

*Defined in [types/opencv/_hacks.ts:189](https://github.com/cancerberoSgx/mirada/blob/c8721d6/mirada/src/types/opencv/_hacks.ts#L189)*

___

###  data32U

• **data32U**: *Uint32Array*

*Inherited from [Mat_](_types_opencv__hacks_.mat_.md).[data32U](_types_opencv__hacks_.mat_.md#data32u)*

*Defined in [types/opencv/_hacks.ts:188](https://github.com/cancerberoSgx/mirada/blob/c8721d6/mirada/src/types/opencv/_hacks.ts#L188)*

___

###  data64F

• **data64F**: *Float64Array*

*Inherited from [Mat_](_types_opencv__hacks_.mat_.md).[data64F](_types_opencv__hacks_.mat_.md#data64f)*

*Defined in [types/opencv/_hacks.ts:191](https://github.com/cancerberoSgx/mirada/blob/c8721d6/mirada/src/types/opencv/_hacks.ts#L191)*

___

###  data8S

• **data8S**: *Int8Array*

*Inherited from [Mat_](_types_opencv__hacks_.mat_.md).[data8S](_types_opencv__hacks_.mat_.md#data8s)*

*Defined in [types/opencv/_hacks.ts:184](https://github.com/cancerberoSgx/mirada/blob/c8721d6/mirada/src/types/opencv/_hacks.ts#L184)*

___

###  data8U

• **data8U**: *Uint8Array*

*Inherited from [Mat_](_types_opencv__hacks_.mat_.md).[data8U](_types_opencv__hacks_.mat_.md#data8u)*

*Defined in [types/opencv/_hacks.ts:185](https://github.com/cancerberoSgx/mirada/blob/c8721d6/mirada/src/types/opencv/_hacks.ts#L185)*

___

###  dataend

• **dataend**: *[uchar](../modules/_types_opencv__hacks_.md#uchar)*

*Inherited from [Mat](_types_opencv_mat_.mat.md).[dataend](_types_opencv_mat_.mat.md#dataend)*

*Defined in [types/opencv/Mat.ts:231](https://github.com/cancerberoSgx/mirada/blob/c8721d6/mirada/src/types/opencv/Mat.ts#L231)*

___

###  datalimit

• **datalimit**: *[uchar](../modules/_types_opencv__hacks_.md#uchar)*

*Inherited from [Mat](_types_opencv_mat_.mat.md).[datalimit](_types_opencv_mat_.mat.md#datalimit)*

*Defined in [types/opencv/Mat.ts:233](https://github.com/cancerberoSgx/mirada/blob/c8721d6/mirada/src/types/opencv/Mat.ts#L233)*

___

###  datastart

• **datastart**: *[uchar](../modules/_types_opencv__hacks_.md#uchar)*

*Inherited from [Mat](_types_opencv_mat_.mat.md).[datastart](_types_opencv_mat_.mat.md#datastart)*

*Defined in [types/opencv/Mat.ts:235](https://github.com/cancerberoSgx/mirada/blob/c8721d6/mirada/src/types/opencv/Mat.ts#L235)*

___

###  dims

• **dims**: *[int](../modules/_types_opencv__hacks_.md#int)*

*Inherited from [Mat](_types_opencv_mat_.mat.md).[dims](_types_opencv_mat_.mat.md#dims)*

*Defined in [types/opencv/Mat.ts:237](https://github.com/cancerberoSgx/mirada/blob/c8721d6/mirada/src/types/opencv/Mat.ts#L237)*

___

###  flags

• **flags**: *[int](../modules/_types_opencv__hacks_.md#int)*

*Overrides [Mat](_types_opencv_mat_.mat.md).[flags](_types_opencv_mat_.mat.md#flags)*

*Defined in [types/opencv/MatExpr.ts:70](https://github.com/cancerberoSgx/mirada/blob/c8721d6/mirada/src/types/opencv/MatExpr.ts#L70)*

___

###  op

• **op**: *[MatOp](_types_opencv_matop_.matop.md)*

*Defined in [types/opencv/MatExpr.ts:72](https://github.com/cancerberoSgx/mirada/blob/c8721d6/mirada/src/types/opencv/MatExpr.ts#L72)*

___

###  rows

• **rows**: *[int](../modules/_types_opencv__hacks_.md#int)*

*Inherited from [Mat](_types_opencv_mat_.mat.md).[rows](_types_opencv_mat_.mat.md#rows)*

*Defined in [types/opencv/Mat.ts:250](https://github.com/cancerberoSgx/mirada/blob/c8721d6/mirada/src/types/opencv/Mat.ts#L250)*

___

###  s

• **s**: *[Scalar](_types_opencv__hacks_.scalar.md)*

*Defined in [types/opencv/MatExpr.ts:74](https://github.com/cancerberoSgx/mirada/blob/c8721d6/mirada/src/types/opencv/MatExpr.ts#L74)*

___

###  size

• **size**: *[MatSize](../modules/_types_opencv__hacks_.md#matsize)*

*Inherited from [Mat](_types_opencv_mat_.mat.md).[size](_types_opencv_mat_.mat.md#size)*

*Defined in [types/opencv/Mat.ts:252](https://github.com/cancerberoSgx/mirada/blob/c8721d6/mirada/src/types/opencv/Mat.ts#L252)*

___

###  step

• **step**: *[MatStep](../modules/_types_opencv__hacks_.md#matstep)*

*Inherited from [Mat](_types_opencv_mat_.mat.md).[step](_types_opencv_mat_.mat.md#step)*

*Defined in [types/opencv/Mat.ts:254](https://github.com/cancerberoSgx/mirada/blob/c8721d6/mirada/src/types/opencv/Mat.ts#L254)*

___

###  u

• **u**: *[UMatData](../modules/_types_opencv__hacks_.md#umatdata)*

*Inherited from [Mat](_types_opencv_mat_.mat.md).[u](_types_opencv_mat_.mat.md#u)*

*Defined in [types/opencv/Mat.ts:256](https://github.com/cancerberoSgx/mirada/blob/c8721d6/mirada/src/types/opencv/Mat.ts#L256)*

## Methods

###  addref

▸ **addref**(): *void*

*Inherited from [Mat](_types_opencv_mat_.mat.md).[addref](_types_opencv_mat_.mat.md#addref)*

*Defined in [types/opencv/Mat.ts:619](https://github.com/cancerberoSgx/mirada/blob/c8721d6/mirada/src/types/opencv/Mat.ts#L619)*

  The method increments the reference counter associated with the matrix data. If the matrix header
points to an external data set (see [Mat::Mat] ), the reference counter is NULL, and the method has
no effect in this case. Normally, to avoid memory leaks, the method should not be called explicitly.
It is called implicitly by the matrix assignment operator. The reference counter increment is an
atomic operation on the platforms that support it. Thus, it is safe to operate on the same matrices
asynchronously in different threads.

**Returns:** *void*

___

###  adjustROI

▸ **adjustROI**(`dtop`: [int](../modules/_types_opencv__hacks_.md#int), `dbottom`: [int](../modules/_types_opencv__hacks_.md#int), `dleft`: [int](../modules/_types_opencv__hacks_.md#int), `dright`: [int](../modules/_types_opencv__hacks_.md#int)): *[Mat](_types_opencv_mat_.mat.md)*

*Inherited from [Mat](_types_opencv_mat_.mat.md).[adjustROI](_types_opencv_mat_.mat.md#adjustroi)*

*Defined in [types/opencv/Mat.ts:654](https://github.com/cancerberoSgx/mirada/blob/c8721d6/mirada/src/types/opencv/Mat.ts#L654)*

  The method is complimentary to [Mat::locateROI] . The typical use of these functions is to
determine the submatrix position within the parent matrix and then shift the position somehow.
Typically, it can be required for filtering operations when pixels outside of the ROI should be
taken into account. When all the method parameters are positive, the ROI needs to grow in all
directions by the specified amount, for example:

  ```cpp
  A.adjustROI(2, 2, 2, 2);
  ```

   In this example, the matrix size is increased by 4 elements in each direction. The matrix is
shifted by 2 elements to the left and 2 elements up, which brings in all the necessary pixels for
the filtering with the 5x5 kernel.

  adjustROI forces the adjusted ROI to be inside of the parent matrix that is boundaries of the
adjusted ROI are constrained by boundaries of the parent matrix. For example, if the submatrix A is
located in the first row of a parent matrix and you called A.adjustROI(2, 2, 2, 2) then A will not
be increased in the upward direction.

  The function is used internally by the OpenCV filtering functions, like filter2D , morphological
operations, and so on.

  [copyMakeBorder]

**Parameters:**

Name | Type | Description |
------ | ------ | ------ |
`dtop` | [int](../modules/_types_opencv__hacks_.md#int) | Shift of the top submatrix boundary upwards.  |
`dbottom` | [int](../modules/_types_opencv__hacks_.md#int) | Shift of the bottom submatrix boundary downwards.  |
`dleft` | [int](../modules/_types_opencv__hacks_.md#int) | Shift of the left submatrix boundary to the left.  |
`dright` | [int](../modules/_types_opencv__hacks_.md#int) | Shift of the right submatrix boundary to the right.  |

**Returns:** *[Mat](_types_opencv_mat_.mat.md)*

___

###  begin

▸ **begin**(`arg25`: any): *[MatIterator_](../modules/_types_opencv__hacks_.md#matiterator_)*

*Inherited from [Mat](_types_opencv_mat_.mat.md).[begin](_types_opencv_mat_.mat.md#begin)*

*Defined in [types/opencv/Mat.ts:691](https://github.com/cancerberoSgx/mirada/blob/c8721d6/mirada/src/types/opencv/Mat.ts#L691)*

  The methods return the matrix read-only or read-write iterators. The use of matrix iterators is
very similar to the use of bi-directional STL iterators. In the example below, the alpha blending
function is rewritten using the matrix iterators:

  ```cpp
  template<typename T>
  void alphaBlendRGBA(const Mat& src1, const Mat& src2, Mat& dst)
  {
      typedef Vec<T, 4> VT;

      const float alpha_scale = (float)std::numeric_limits<T>::max(),
                  inv_scale = 1.f/alpha_scale;

      CV_Assert( src1.type() == src2.type() &&
                 src1.type() == traits::Type<VT>::value &&
                 src1.size() == src2.size());
      Size size = src1.size();
      dst.create(size, src1.type());

      MatConstIterator_<VT> it1 = src1.begin<VT>(), it1_end = src1.end<VT>();
      MatConstIterator_<VT> it2 = src2.begin<VT>();
      MatIterator_<VT> dst_it = dst.begin<VT>();

      for( ; it1 != it1_end; ++it1, ++it2, ++dst_it )
      {
          VT pix1 = *it1, pix2 = *it2;
          float alpha = pix1[3]*inv_scale, beta = pix2[3]*inv_scale;
dst_it = VT(saturate_cast<T>(pix1[0]*alpha + pix2[0]*beta),
                       saturate_cast<T>(pix1[1]*alpha + pix2[1]*beta),
                       saturate_cast<T>(pix1[2]*alpha + pix2[2]*beta),
                       saturate_cast<T>((1 - (1-alpha)*(1-beta))*alpha_scale));
      }
  }
  ```

**Parameters:**

Name | Type |
------ | ------ |
`arg25` | any |

**Returns:** *[MatIterator_](../modules/_types_opencv__hacks_.md#matiterator_)*

▸ **begin**(`arg26`: any): *[MatConstIterator_](../modules/_types_opencv__hacks_.md#matconstiterator_)*

*Inherited from [Mat](_types_opencv_mat_.mat.md).[begin](_types_opencv_mat_.mat.md#begin)*

*Defined in [types/opencv/Mat.ts:693](https://github.com/cancerberoSgx/mirada/blob/c8721d6/mirada/src/types/opencv/Mat.ts#L693)*

**Parameters:**

Name | Type |
------ | ------ |
`arg26` | any |

**Returns:** *[MatConstIterator_](../modules/_types_opencv__hacks_.md#matconstiterator_)*

___

###  channels

▸ **channels**(): *[int](../modules/_types_opencv__hacks_.md#int)*

*Inherited from [Mat](_types_opencv_mat_.mat.md).[channels](_types_opencv_mat_.mat.md#channels)*

*Defined in [types/opencv/Mat.ts:698](https://github.com/cancerberoSgx/mirada/blob/c8721d6/mirada/src/types/opencv/Mat.ts#L698)*

  The method returns the number of matrix channels.

**Returns:** *[int](../modules/_types_opencv__hacks_.md#int)*

___

###  charAt

▸ **charAt**(`i`: any): *any*

*Inherited from [Mat_](_types_opencv__hacks_.mat_.md).[charAt](_types_opencv__hacks_.mat_.md#charat)*

*Defined in [types/opencv/_hacks.ts:198](https://github.com/cancerberoSgx/mirada/blob/c8721d6/mirada/src/types/opencv/_hacks.ts#L198)*

**Parameters:**

Name | Type |
------ | ------ |
`i` | any |

**Returns:** *any*

___

###  charPtr

▸ **charPtr**(`i`: any, `j`: any): *any*

*Inherited from [Mat_](_types_opencv__hacks_.mat_.md).[charPtr](_types_opencv__hacks_.mat_.md#charptr)*

*Defined in [types/opencv/_hacks.ts:193](https://github.com/cancerberoSgx/mirada/blob/c8721d6/mirada/src/types/opencv/_hacks.ts#L193)*

**Parameters:**

Name | Type |
------ | ------ |
`i` | any |
`j` | any |

**Returns:** *any*

___

###  checkVector

▸ **checkVector**(`elemChannels`: [int](../modules/_types_opencv__hacks_.md#int), `depth?`: [int](../modules/_types_opencv__hacks_.md#int), `requireContinuous?`: [bool](../modules/_types_opencv__hacks_.md#bool)): *[int](../modules/_types_opencv__hacks_.md#int)*

*Inherited from [Mat](_types_opencv_mat_.mat.md).[checkVector](_types_opencv_mat_.mat.md#checkvector)*

*Defined in [types/opencv/Mat.ts:743](https://github.com/cancerberoSgx/mirada/blob/c8721d6/mirada/src/types/opencv/Mat.ts#L743)*

  -1 if the requirement is not satisfied. Otherwise, it returns the number of elements in the
matrix. Note that an element may have multiple channels.
  The following code demonstrates its usage for a 2-d matrix:

  ```cpp
      cv::Mat mat(20, 1, CV_32FC2);
      int n = mat.checkVector(2);
      CV_Assert(n == 20); // mat has 20 elements

      mat.create(20, 2, CV_32FC1);
      n = mat.checkVector(1);
      CV_Assert(n == -1); // mat is neither a column nor a row vector

      n = mat.checkVector(2);
      CV_Assert(n == 20); // the 2 columns are considered as 1 element
  ```

   The following code demonstrates its usage for a 3-d matrix:

  ```cpp
      int dims[] = {1, 3, 5}; // 1 plane, every plane has 3 rows and 5 columns
      mat.create(3, dims, CV_32FC1); // for 3-d mat, it MUST have only 1 channel
      n = mat.checkVector(5); // the 5 columns are considered as 1 element
      CV_Assert(n == 3);

      int dims2[] = {3, 1, 5}; // 3 planes, every plane has 1 row and 5 columns
      mat.create(3, dims2, CV_32FC1);
      n = mat.checkVector(5); // the 5 columns are considered as 1 element
      CV_Assert(n == 3);
  ```

**Parameters:**

Name | Type | Description |
------ | ------ | ------ |
`elemChannels` | [int](../modules/_types_opencv__hacks_.md#int) | Number of channels or number of columns the matrix should have. For a 2-D matrix, when the matrix has only 1 column, then it should have elemChannels channels; When the matrix has only 1 channel, then it should have elemChannels columns. For a 3-D matrix, it should have only one channel. Furthermore, if the number of planes is not one, then the number of rows within every plane has to be 1; if the number of rows within every plane is not 1, then the number of planes has to be 1.  |
`depth?` | [int](../modules/_types_opencv__hacks_.md#int) | The depth the matrix should have. Set it to -1 when any depth is fine.  |
`requireContinuous?` | [bool](../modules/_types_opencv__hacks_.md#bool) | Set it to true to require the matrix to be continuous  |

**Returns:** *[int](../modules/_types_opencv__hacks_.md#int)*

___

###  clone

▸ **clone**(): *[Mat](_types_opencv_mat_.mat.md)*

*Inherited from [Mat](_types_opencv_mat_.mat.md).[clone](_types_opencv_mat_.mat.md#clone)*

*Overrides [EmscriptenEmbindInstance](_types_opencv__hacks_.emscriptenembindinstance.md).[clone](_types_opencv__hacks_.emscriptenembindinstance.md#clone)*

*Defined in [types/opencv/Mat.ts:749](https://github.com/cancerberoSgx/mirada/blob/c8721d6/mirada/src/types/opencv/Mat.ts#L749)*

  The method creates a full copy of the array. The original step[] is not taken into account. So,
the array copy is a continuous array occupying [total()]*elemSize() bytes.

**Returns:** *[Mat](_types_opencv_mat_.mat.md)*

___

###  col

▸ **col**(`x`: [int](../modules/_types_opencv__hacks_.md#int)): *[MatExpr](_types_opencv_matexpr_.matexpr.md)*

*Overrides [Mat](_types_opencv_mat_.mat.md).[col](_types_opencv_mat_.mat.md#col)*

*Defined in [types/opencv/MatExpr.ts:82](https://github.com/cancerberoSgx/mirada/blob/c8721d6/mirada/src/types/opencv/MatExpr.ts#L82)*

**Parameters:**

Name | Type |
------ | ------ |
`x` | [int](../modules/_types_opencv__hacks_.md#int) |

**Returns:** *[MatExpr](_types_opencv_matexpr_.matexpr.md)*

___

###  colRange

▸ **colRange**(`startcol`: [int](../modules/_types_opencv__hacks_.md#int), `endcol`: [int](../modules/_types_opencv__hacks_.md#int)): *[Mat](_types_opencv_mat_.mat.md)*

*Inherited from [Mat](_types_opencv_mat_.mat.md).[colRange](_types_opencv_mat_.mat.md#colrange)*

*Defined in [types/opencv/Mat.ts:768](https://github.com/cancerberoSgx/mirada/blob/c8721d6/mirada/src/types/opencv/Mat.ts#L768)*

  The method makes a new header for the specified column span of the matrix. Similarly to [Mat::row]
and [Mat::col] , this is an O(1) operation.

**Parameters:**

Name | Type | Description |
------ | ------ | ------ |
`startcol` | [int](../modules/_types_opencv__hacks_.md#int) | An inclusive 0-based start index of the column span.  |
`endcol` | [int](../modules/_types_opencv__hacks_.md#int) | An exclusive 0-based ending index of the column span.  |

**Returns:** *[Mat](_types_opencv_mat_.mat.md)*

▸ **colRange**(`r`: Range): *[Mat](_types_opencv_mat_.mat.md)*

*Inherited from [Mat](_types_opencv_mat_.mat.md).[colRange](_types_opencv_mat_.mat.md#colrange)*

*Defined in [types/opencv/Mat.ts:776](https://github.com/cancerberoSgx/mirada/blob/c8721d6/mirada/src/types/opencv/Mat.ts#L776)*

  This is an overloaded member function, provided for convenience. It differs from the above
function only in what argument(s) it accepts.

**Parameters:**

Name | Type | Description |
------ | ------ | ------ |
`r` | Range | Range structure containing both the start and the end indices.  |

**Returns:** *[Mat](_types_opencv_mat_.mat.md)*

___

###  convertTo

▸ **convertTo**(`m`: OutputArray, `rtype`: [int](../modules/_types_opencv__hacks_.md#int), `alpha?`: [double](../modules/_types_opencv__hacks_.md#double), `beta?`: [double](../modules/_types_opencv__hacks_.md#double)): *OutputArray*

*Inherited from [Mat](_types_opencv_mat_.mat.md).[convertTo](_types_opencv_mat_.mat.md#convertto)*

*Defined in [types/opencv/Mat.ts:794](https://github.com/cancerberoSgx/mirada/blob/c8721d6/mirada/src/types/opencv/Mat.ts#L794)*

  The method converts source pixel values to the target data type. saturate_cast<> is applied at the
end to avoid possible overflows:

  `\\[m(x,y) = saturate \\_ cast<rType>( \\alpha (*this)(x,y) + \\beta )\\]`

**Parameters:**

Name | Type | Description |
------ | ------ | ------ |
`m` | OutputArray | output matrix; if it does not have a proper size or type before the operation, it is reallocated.  |
`rtype` | [int](../modules/_types_opencv__hacks_.md#int) | desired output matrix type or, rather, the depth since the number of channels are the same as the input has; if rtype is negative, the output matrix will have the same type as the input.  |
`alpha?` | [double](../modules/_types_opencv__hacks_.md#double) | optional scale factor.  |
`beta?` | [double](../modules/_types_opencv__hacks_.md#double) | optional delta added to the scaled values.  |

**Returns:** *OutputArray*

___

###  copySize

▸ **copySize**(`m`: [Mat](_types_opencv_mat_.mat.md)): *[Mat](_types_opencv_mat_.mat.md)*

*Inherited from [Mat](_types_opencv_mat_.mat.md).[copySize](_types_opencv_mat_.mat.md#copysize)*

*Defined in [types/opencv/Mat.ts:796](https://github.com/cancerberoSgx/mirada/blob/c8721d6/mirada/src/types/opencv/Mat.ts#L796)*

**Parameters:**

Name | Type |
------ | ------ |
`m` | [Mat](_types_opencv_mat_.mat.md) |

**Returns:** *[Mat](_types_opencv_mat_.mat.md)*

___

###  copyTo

▸ **copyTo**(`m`: OutputArray): *OutputArray*

*Inherited from [Mat](_types_opencv_mat_.mat.md).[copyTo](_types_opencv_mat_.mat.md#copyto)*

*Defined in [types/opencv/Mat.ts:816](https://github.com/cancerberoSgx/mirada/blob/c8721d6/mirada/src/types/opencv/Mat.ts#L816)*

  The method copies the matrix data to another matrix. Before copying the data, the method invokes :

  ```cpp
  m.create(this->size(), this->type());
  ```

   so that the destination matrix is reallocated if needed. While m.copyTo(m); works flawlessly, the
function does not handle the case of a partial overlap between the source and the destination
matrices.

  When the operation mask is specified, if the [Mat::create] call shown above reallocates the
matrix, the newly allocated matrix is initialized with all zeros before copying the data.

**Parameters:**

Name | Type | Description |
------ | ------ | ------ |
`m` | OutputArray | Destination matrix. If it does not have a proper size or type before the operation, it is reallocated.  |

**Returns:** *OutputArray*

▸ **copyTo**(`m`: OutputArray, `mask`: InputArray): *OutputArray*

*Inherited from [Mat](_types_opencv_mat_.mat.md).[copyTo](_types_opencv_mat_.mat.md#copyto)*

*Defined in [types/opencv/Mat.ts:828](https://github.com/cancerberoSgx/mirada/blob/c8721d6/mirada/src/types/opencv/Mat.ts#L828)*

  This is an overloaded member function, provided for convenience. It differs from the above
function only in what argument(s) it accepts.

**Parameters:**

Name | Type | Description |
------ | ------ | ------ |
`m` | OutputArray | Destination matrix. If it does not have a proper size or type before the operation, it is reallocated.  |
`mask` | InputArray | Operation mask of the same size as *this. Its non-zero elements indicate which matrix elements need to be copied. The mask has to be of type CV_8U and can have 1 or multiple channels.  |

**Returns:** *OutputArray*

___

###  create

▸ **create**(`rows`: [int](../modules/_types_opencv__hacks_.md#int), `cols`: [int](../modules/_types_opencv__hacks_.md#int), `type`: [int](../modules/_types_opencv__hacks_.md#int)): *void*

*Inherited from [Mat](_types_opencv_mat_.mat.md).[create](_types_opencv_mat_.mat.md#create)*

*Defined in [types/opencv/Mat.ts:869](https://github.com/cancerberoSgx/mirada/blob/c8721d6/mirada/src/types/opencv/Mat.ts#L869)*

  This is one of the key [Mat] methods. Most new-style OpenCV functions and methods that produce
arrays call this method for each output array. The method uses the following algorithm:

If the current array shape and the type match the new ones, return immediately. Otherwise,
de-reference the previous data by calling [Mat::release].
Initialize the new header.
Allocate the new data of [total()]*elemSize() bytes.
Allocate the new, associated with the data, reference counter and set it to 1.

  Such a scheme makes the memory management robust and efficient at the same time and helps avoid
extra typing for you. This means that usually there is no need to explicitly allocate output arrays.
That is, instead of writing:

  ```cpp
  Mat color;
  ...
  Mat gray(color.rows, color.cols, color.depth());
  cvtColor(color, gray, COLOR_BGR2GRAY);
  ```

   you can simply write:

  ```cpp
  Mat color;
  ...
  Mat gray;
  cvtColor(color, gray, COLOR_BGR2GRAY);
  ```

   because cvtColor, as well as the most of OpenCV functions, calls [Mat::create()] for the output
array internally.

**Parameters:**

Name | Type | Description |
------ | ------ | ------ |
`rows` | [int](../modules/_types_opencv__hacks_.md#int) | New number of rows.  |
`cols` | [int](../modules/_types_opencv__hacks_.md#int) | New number of columns.  |
`type` | [int](../modules/_types_opencv__hacks_.md#int) | New matrix type.  |

**Returns:** *void*

▸ **create**(`size`: [Size](_types_opencv__hacks_.size.md), `type`: [int](../modules/_types_opencv__hacks_.md#int)): *[Size](_types_opencv__hacks_.size.md)*

*Inherited from [Mat](_types_opencv_mat_.mat.md).[create](_types_opencv_mat_.mat.md#create)*

*Defined in [types/opencv/Mat.ts:879](https://github.com/cancerberoSgx/mirada/blob/c8721d6/mirada/src/types/opencv/Mat.ts#L879)*

  This is an overloaded member function, provided for convenience. It differs from the above
function only in what argument(s) it accepts.

**Parameters:**

Name | Type | Description |
------ | ------ | ------ |
`size` | [Size](_types_opencv__hacks_.size.md) | Alternative new matrix size specification: Size(cols, rows)  |
`type` | [int](../modules/_types_opencv__hacks_.md#int) | New matrix type.  |

**Returns:** *[Size](_types_opencv__hacks_.size.md)*

▸ **create**(`ndims`: [int](../modules/_types_opencv__hacks_.md#int), `sizes`: any, `type`: [int](../modules/_types_opencv__hacks_.md#int)): *void*

*Inherited from [Mat](_types_opencv_mat_.mat.md).[create](_types_opencv_mat_.mat.md#create)*

*Defined in [types/opencv/Mat.ts:891](https://github.com/cancerberoSgx/mirada/blob/c8721d6/mirada/src/types/opencv/Mat.ts#L891)*

  This is an overloaded member function, provided for convenience. It differs from the above
function only in what argument(s) it accepts.

**Parameters:**

Name | Type | Description |
------ | ------ | ------ |
`ndims` | [int](../modules/_types_opencv__hacks_.md#int) | New array dimensionality.  |
`sizes` | any | Array of integers specifying a new array shape.  |
`type` | [int](../modules/_types_opencv__hacks_.md#int) | New matrix type.  |

**Returns:** *void*

▸ **create**(`sizes`: any, `type`: [int](../modules/_types_opencv__hacks_.md#int)): *void*

*Inherited from [Mat](_types_opencv_mat_.mat.md).[create](_types_opencv_mat_.mat.md#create)*

*Defined in [types/opencv/Mat.ts:901](https://github.com/cancerberoSgx/mirada/blob/c8721d6/mirada/src/types/opencv/Mat.ts#L901)*

  This is an overloaded member function, provided for convenience. It differs from the above
function only in what argument(s) it accepts.

**Parameters:**

Name | Type | Description |
------ | ------ | ------ |
`sizes` | any | Array of integers specifying a new array shape.  |
`type` | [int](../modules/_types_opencv__hacks_.md#int) | New matrix type.  |

**Returns:** *void*

___

###  cross

▸ **cross**(`m`: [Mat](_types_opencv_mat_.mat.md)): *[Mat](_types_opencv_mat_.mat.md)*

*Overrides [Mat](_types_opencv_mat_.mat.md).[cross](_types_opencv_mat_.mat.md#cross)*

*Defined in [types/opencv/MatExpr.ts:84](https://github.com/cancerberoSgx/mirada/blob/c8721d6/mirada/src/types/opencv/MatExpr.ts#L84)*

**Parameters:**

Name | Type |
------ | ------ |
`m` | [Mat](_types_opencv_mat_.mat.md) |

**Returns:** *[Mat](_types_opencv_mat_.mat.md)*

___

###  deallocate

▸ **deallocate**(): *void*

*Inherited from [Mat](_types_opencv_mat_.mat.md).[deallocate](_types_opencv_mat_.mat.md#deallocate)*

*Defined in [types/opencv/Mat.ts:912](https://github.com/cancerberoSgx/mirada/blob/c8721d6/mirada/src/types/opencv/Mat.ts#L912)*

**Returns:** *void*

___

###  delete

▸ **delete**(): *void*

*Inherited from [Vector](_types_opencv__hacks_.vector.md).[delete](_types_opencv__hacks_.vector.md#delete)*

*Overrides [EmscriptenEmbindInstance](_types_opencv__hacks_.emscriptenembindinstance.md).[delete](_types_opencv__hacks_.emscriptenembindinstance.md#delete)*

*Defined in [types/opencv/_hacks.ts:131](https://github.com/cancerberoSgx/mirada/blob/c8721d6/mirada/src/types/opencv/_hacks.ts#L131)*

**Returns:** *void*

▸ **delete**(): *void*

*Inherited from [Vector](_types_opencv__hacks_.vector.md).[delete](_types_opencv__hacks_.vector.md#delete)*

*Overrides [EmscriptenEmbindInstance](_types_opencv__hacks_.emscriptenembindinstance.md).[delete](_types_opencv__hacks_.emscriptenembindinstance.md#delete)*

*Defined in [types/opencv/_hacks.ts:139](https://github.com/cancerberoSgx/mirada/blob/c8721d6/mirada/src/types/opencv/_hacks.ts#L139)*

**Returns:** *void*

___

###  deleteLater

▸ **deleteLater**(...`a`: any[]): *any*

*Inherited from [EmscriptenEmbindInstance](_types_opencv__hacks_.emscriptenembindinstance.md).[deleteLater](_types_opencv__hacks_.emscriptenembindinstance.md#deletelater)*

*Defined in [types/opencv/_hacks.ts:124](https://github.com/cancerberoSgx/mirada/blob/c8721d6/mirada/src/types/opencv/_hacks.ts#L124)*

**Parameters:**

Name | Type |
------ | ------ |
`...a` | any[] |

**Returns:** *any*

___

###  depth

▸ **depth**(): *[int](../modules/_types_opencv__hacks_.md#int)*

*Inherited from [Mat](_types_opencv_mat_.mat.md).[depth](_types_opencv_mat_.mat.md#depth)*

*Defined in [types/opencv/Mat.ts:927](https://github.com/cancerberoSgx/mirada/blob/c8721d6/mirada/src/types/opencv/Mat.ts#L927)*

  The method returns the identifier of the matrix element depth (the type of each individual
channel). For example, for a 16-bit signed element array, the method returns CV_16S . A complete
list of matrix types contains the following values:

CV_8U - 8-bit unsigned integers ( 0..255 )
CV_8S - 8-bit signed integers ( -128..127 )
CV_16U - 16-bit unsigned integers ( 0..65535 )
CV_16S - 16-bit signed integers ( -32768..32767 )
CV_32S - 32-bit signed integers ( -2147483648..2147483647 )
CV_32F - 32-bit floating-point numbers ( -FLT_MAX..FLT_MAX, INF, NAN )
CV_64F - 64-bit floating-point numbers ( -DBL_MAX..DBL_MAX, INF, NAN )

**Returns:** *[int](../modules/_types_opencv__hacks_.md#int)*

___

###  diag

▸ **diag**(`d?`: [int](../modules/_types_opencv__hacks_.md#int)): *[MatExpr](_types_opencv_matexpr_.matexpr.md)*

*Overrides [Mat](_types_opencv_mat_.mat.md).[diag](_types_opencv_mat_.mat.md#diag)*

*Defined in [types/opencv/MatExpr.ts:86](https://github.com/cancerberoSgx/mirada/blob/c8721d6/mirada/src/types/opencv/MatExpr.ts#L86)*

**Parameters:**

Name | Type |
------ | ------ |
`d?` | [int](../modules/_types_opencv__hacks_.md#int) |

**Returns:** *[MatExpr](_types_opencv_matexpr_.matexpr.md)*

___

###  dot

▸ **dot**(`m`: [Mat](_types_opencv_mat_.mat.md)): *[Mat](_types_opencv_mat_.mat.md)*

*Overrides [Mat](_types_opencv_mat_.mat.md).[dot](_types_opencv_mat_.mat.md#dot)*

*Defined in [types/opencv/MatExpr.ts:88](https://github.com/cancerberoSgx/mirada/blob/c8721d6/mirada/src/types/opencv/MatExpr.ts#L88)*

**Parameters:**

Name | Type |
------ | ------ |
`m` | [Mat](_types_opencv_mat_.mat.md) |

**Returns:** *[Mat](_types_opencv_mat_.mat.md)*

___

###  doublePtr

▸ **doublePtr**(`i`: any, `j`: any): *any*

*Inherited from [Mat_](_types_opencv__hacks_.mat_.md).[doublePtr](_types_opencv__hacks_.mat_.md#doubleptr)*

*Defined in [types/opencv/_hacks.ts:200](https://github.com/cancerberoSgx/mirada/blob/c8721d6/mirada/src/types/opencv/_hacks.ts#L200)*

**Parameters:**

Name | Type |
------ | ------ |
`i` | any |
`j` | any |

**Returns:** *any*

___

###  elemSize

▸ **elemSize**(): *[size_t](../modules/_types_opencv__hacks_.md#size_t)*

*Inherited from [Mat](_types_opencv_mat_.mat.md).[elemSize](_types_opencv_mat_.mat.md#elemsize)*

*Defined in [types/opencv/Mat.ts:970](https://github.com/cancerberoSgx/mirada/blob/c8721d6/mirada/src/types/opencv/Mat.ts#L970)*

  The method returns the matrix element size in bytes. For example, if the matrix type is CV_16SC3 ,
the method returns 3*sizeof(short) or 6.

**Returns:** *[size_t](../modules/_types_opencv__hacks_.md#size_t)*

___

###  elemSize1

▸ **elemSize1**(): *[size_t](../modules/_types_opencv__hacks_.md#size_t)*

*Inherited from [Mat](_types_opencv_mat_.mat.md).[elemSize1](_types_opencv_mat_.mat.md#elemsize1)*

*Defined in [types/opencv/Mat.ts:976](https://github.com/cancerberoSgx/mirada/blob/c8721d6/mirada/src/types/opencv/Mat.ts#L976)*

  The method returns the matrix element channel size in bytes, that is, it ignores the number of
channels. For example, if the matrix type is CV_16SC3 , the method returns sizeof(short) or 2.

**Returns:** *[size_t](../modules/_types_opencv__hacks_.md#size_t)*

___

###  empty

▸ **empty**(): *[bool](../modules/_types_opencv__hacks_.md#bool)*

*Inherited from [Mat](_types_opencv_mat_.mat.md).[empty](_types_opencv_mat_.mat.md#empty)*

*Defined in [types/opencv/Mat.ts:982](https://github.com/cancerberoSgx/mirada/blob/c8721d6/mirada/src/types/opencv/Mat.ts#L982)*

  The method returns true if [Mat::total()] is 0 or if [Mat::data] is NULL. Because of [pop_back()]
and [resize()] methods `[M.total()] == 0` does not imply that `M.data == NULL`.

**Returns:** *[bool](../modules/_types_opencv__hacks_.md#bool)*

___

###  end

▸ **end**(`arg27`: any): *[MatIterator_](../modules/_types_opencv__hacks_.md#matiterator_)*

*Inherited from [Mat](_types_opencv_mat_.mat.md).[end](_types_opencv_mat_.mat.md#end)*

*Defined in [types/opencv/Mat.ts:988](https://github.com/cancerberoSgx/mirada/blob/c8721d6/mirada/src/types/opencv/Mat.ts#L988)*

  The methods return the matrix read-only or read-write iterators, set to the point following the
last matrix element.

**Parameters:**

Name | Type |
------ | ------ |
`arg27` | any |

**Returns:** *[MatIterator_](../modules/_types_opencv__hacks_.md#matiterator_)*

▸ **end**(`arg28`: any): *[MatConstIterator_](../modules/_types_opencv__hacks_.md#matconstiterator_)*

*Inherited from [Mat](_types_opencv_mat_.mat.md).[end](_types_opencv_mat_.mat.md#end)*

*Defined in [types/opencv/Mat.ts:990](https://github.com/cancerberoSgx/mirada/blob/c8721d6/mirada/src/types/opencv/Mat.ts#L990)*

**Parameters:**

Name | Type |
------ | ------ |
`arg28` | any |

**Returns:** *[MatConstIterator_](../modules/_types_opencv__hacks_.md#matconstiterator_)*

___

###  floatPtr

▸ **floatPtr**(`i`: any, `j`: any): *any*

*Inherited from [Mat_](_types_opencv__hacks_.mat_.md).[floatPtr](_types_opencv__hacks_.mat_.md#floatptr)*

*Defined in [types/opencv/_hacks.ts:199](https://github.com/cancerberoSgx/mirada/blob/c8721d6/mirada/src/types/opencv/_hacks.ts#L199)*

**Parameters:**

Name | Type |
------ | ------ |
`i` | any |
`j` | any |

**Returns:** *any*

___

###  forEach

▸ **forEach**(`arg29`: any, `arg30`: any, `operation`: any): *any*

*Inherited from [Mat](_types_opencv_mat_.mat.md).[forEach](_types_opencv_mat_.mat.md#foreach)*

*Defined in [types/opencv/Mat.ts:1049](https://github.com/cancerberoSgx/mirada/blob/c8721d6/mirada/src/types/opencv/Mat.ts#L1049)*

  The operation passed as argument has to be a function pointer, a function object or a
lambda(C++11).

  Example 1. All of the operations below put 0xFF the first channel of all matrix elements:

  ```cpp
  Mat image(1920, 1080, CV_8UC3);
  typedef cv::Point3_<uint8_t> Pixel;

  // first. raw pointer access.
  for (int r = 0; r < image.rows; ++r) {
      Pixel* ptr = image.ptr<Pixel>(r, 0);
      const Pixel* ptr_end = ptr + image.cols;
      for (; ptr != ptr_end; ++ptr) {
          ptr->x = 255;
      }
  }

  // Using MatIterator. (Simple but there are a Iterator's overhead)
  for (Pixel &p : cv::Mat_<Pixel>(image)) {
      p.x = 255;
  }

  // Parallel execution with function object.
  struct Operator {
      void operator ()(Pixel &pixel, const int * position) {
          pixel.x = 255;
      }
  };
  image.forEach<Pixel>(Operator());

  // Parallel execution using C++11 lambda.
  image.forEach<Pixel>([](Pixel &p, const int * position) -> void {
      p.x = 255;
  });
  ```

   Example 2. Using the pixel's position:

  ```cpp
  // Creating 3D matrix (255 x 255 x 255) typed uint8_t
  // and initialize all elements by the value which equals elements position.
  // i.e. pixels (x,y,z) = (1,2,3) is (b,g,r) = (1,2,3).

  int sizes[] = { 255, 255, 255 };
  typedef cv::Point3_<uint8_t> Pixel;

  Mat_<Pixel> image = Mat::zeros(3, sizes, CV_8UC3);

  image.forEach<Pixel>([&](Pixel& pixel, const int position[]) -> void {
      pixel.x = position[0];
      pixel.y = position[1];
      pixel.z = position[2];
  });
  ```

**Parameters:**

Name | Type |
------ | ------ |
`arg29` | any |
`arg30` | any |
`operation` | any |

**Returns:** *any*

▸ **forEach**(`arg31`: any, `arg32`: any, `operation`: any): *any*

*Inherited from [Mat](_types_opencv_mat_.mat.md).[forEach](_types_opencv_mat_.mat.md#foreach)*

*Defined in [types/opencv/Mat.ts:1055](https://github.com/cancerberoSgx/mirada/blob/c8721d6/mirada/src/types/opencv/Mat.ts#L1055)*

  This is an overloaded member function, provided for convenience. It differs from the above
function only in what argument(s) it accepts.

**Parameters:**

Name | Type |
------ | ------ |
`arg31` | any |
`arg32` | any |
`operation` | any |

**Returns:** *any*

___

###  get

▸ **get**(`i`: number): *[Mat](_types_opencv_mat_.mat.md)*

*Inherited from [Vector](_types_opencv__hacks_.vector.md).[get](_types_opencv__hacks_.vector.md#get)*

*Defined in [types/opencv/_hacks.ts:132](https://github.com/cancerberoSgx/mirada/blob/c8721d6/mirada/src/types/opencv/_hacks.ts#L132)*

**Parameters:**

Name | Type |
------ | ------ |
`i` | number |

**Returns:** *[Mat](_types_opencv_mat_.mat.md)*

▸ **get**(`i`: number, `j`: number, `data`: any): *[Mat](_types_opencv_mat_.mat.md)*

*Inherited from [Vector](_types_opencv__hacks_.vector.md).[get](_types_opencv__hacks_.vector.md#get)*

*Defined in [types/opencv/_hacks.ts:133](https://github.com/cancerberoSgx/mirada/blob/c8721d6/mirada/src/types/opencv/_hacks.ts#L133)*

**Parameters:**

Name | Type |
------ | ------ |
`i` | number |
`j` | number |
`data` | any |

**Returns:** *[Mat](_types_opencv_mat_.mat.md)*

___

###  getUMat

▸ **getUMat**(`accessFlags`: [AccessFlag](../modules/_types_opencv__hacks_.md#accessflag), `usageFlags?`: [UMatUsageFlags](../modules/_types_opencv__hacks_.md#umatusageflags)): *[UMat](../modules/_types_opencv__hacks_.md#umat)*

*Inherited from [Mat](_types_opencv_mat_.mat.md).[getUMat](_types_opencv_mat_.mat.md#getumat)*

*Defined in [types/opencv/Mat.ts:1057](https://github.com/cancerberoSgx/mirada/blob/c8721d6/mirada/src/types/opencv/Mat.ts#L1057)*

**Parameters:**

Name | Type |
------ | ------ |
`accessFlags` | [AccessFlag](../modules/_types_opencv__hacks_.md#accessflag) |
`usageFlags?` | [UMatUsageFlags](../modules/_types_opencv__hacks_.md#umatusageflags) |

**Returns:** *[UMat](../modules/_types_opencv__hacks_.md#umat)*

___

###  intPtr

▸ **intPtr**(`i`: any, `j`: any): *any*

*Inherited from [Mat_](_types_opencv__hacks_.mat_.md).[intPtr](_types_opencv__hacks_.mat_.md#intptr)*

*Defined in [types/opencv/_hacks.ts:196](https://github.com/cancerberoSgx/mirada/blob/c8721d6/mirada/src/types/opencv/_hacks.ts#L196)*

**Parameters:**

Name | Type |
------ | ------ |
`i` | any |
`j` | any |

**Returns:** *any*

▸ **intPtr**(`i`: any, `j`: any): *any*

*Inherited from [Mat_](_types_opencv__hacks_.mat_.md).[intPtr](_types_opencv__hacks_.mat_.md#intptr)*

*Defined in [types/opencv/_hacks.ts:201](https://github.com/cancerberoSgx/mirada/blob/c8721d6/mirada/src/types/opencv/_hacks.ts#L201)*

**Parameters:**

Name | Type |
------ | ------ |
`i` | any |
`j` | any |

**Returns:** *any*

___

###  inv

▸ **inv**(`method?`: [int](../modules/_types_opencv__hacks_.md#int)): *[MatExpr](_types_opencv_matexpr_.matexpr.md)*

*Overrides [Mat](_types_opencv_mat_.mat.md).[inv](_types_opencv_mat_.mat.md#inv)*

*Defined in [types/opencv/MatExpr.ts:90](https://github.com/cancerberoSgx/mirada/blob/c8721d6/mirada/src/types/opencv/MatExpr.ts#L90)*

**Parameters:**

Name | Type |
------ | ------ |
`method?` | [int](../modules/_types_opencv__hacks_.md#int) |

**Returns:** *[MatExpr](_types_opencv_matexpr_.matexpr.md)*

___

###  isAliasOf

▸ **isAliasOf**(...`a`: any[]): *any*

*Inherited from [EmscriptenEmbindInstance](_types_opencv__hacks_.emscriptenembindinstance.md).[isAliasOf](_types_opencv__hacks_.emscriptenembindinstance.md#isaliasof)*

*Defined in [types/opencv/_hacks.ts:120](https://github.com/cancerberoSgx/mirada/blob/c8721d6/mirada/src/types/opencv/_hacks.ts#L120)*

**Parameters:**

Name | Type |
------ | ------ |
`...a` | any[] |

**Returns:** *any*

___

###  isContinuous

▸ **isContinuous**(): *[bool](../modules/_types_opencv__hacks_.md#bool)*

*Inherited from [Mat](_types_opencv_mat_.mat.md).[isContinuous](_types_opencv_mat_.mat.md#iscontinuous)*

*Defined in [types/opencv/Mat.ts:1145](https://github.com/cancerberoSgx/mirada/blob/c8721d6/mirada/src/types/opencv/Mat.ts#L1145)*

  The method returns true if the matrix elements are stored continuously without gaps at the end of
each row. Otherwise, it returns false. Obviously, 1x1 or 1xN matrices are always continuous.
Matrices created with [Mat::create] are always continuous. But if you extract a part of the matrix
using [Mat::col], [Mat::diag], and so on, or constructed a matrix header for externally allocated
data, such matrices may no longer have this property.

  The continuity flag is stored as a bit in the [Mat::flags] field and is computed automatically
when you construct a matrix header. Thus, the continuity check is a very fast operation, though
theoretically it could be done as follows:

  ```cpp
  // alternative implementation of Mat::isContinuous()
  bool myCheckMatContinuity(const Mat& m)
  {
      //return (m.flags & Mat::CONTINUOUS_FLAG) != 0;
      return m.rows == 1 || m.step == m.cols*m.elemSize();
  }
  ```

   The method is used in quite a few of OpenCV functions. The point is that element-wise operations
(such as arithmetic and logical operations, math functions, alpha blending, color space
transformations, and others) do not depend on the image geometry. Thus, if all the input and output
arrays are continuous, the functions can process them as very long single-row vectors. The example
below illustrates how an alpha-blending function can be implemented:

  ```cpp
  template<typename T>
  void alphaBlendRGBA(const Mat& src1, const Mat& src2, Mat& dst)
  {
      const float alpha_scale = (float)std::numeric_limits<T>::max(),
                  inv_scale = 1.f/alpha_scale;

      CV_Assert( src1.type() == src2.type() &&
                 src1.type() == CV_MAKETYPE(traits::Depth<T>::value, 4) &&
                 src1.size() == src2.size());
      Size size = src1.size();
      dst.create(size, src1.type());

      // here is the idiom: check the arrays for continuity and,
      // if this is the case,
      // treat the arrays as 1D vectors
      if( src1.isContinuous() && src2.isContinuous() && dst.isContinuous() )
      {
          size.width *= size.height;
          size.height = 1;
      }
      size.width *= 4;

      for( int i = 0; i < size.height; i++ )
      {
          // when the arrays are continuous,
          // the outer loop is executed only once
          const T* ptr1 = src1.ptr<T>(i);
          const T* ptr2 = src2.ptr<T>(i);
          T* dptr = dst.ptr<T>(i);

          for( int j = 0; j < size.width; j += 4 )
          {
              float alpha = ptr1[j+3]*inv_scale, beta = ptr2[j+3]*inv_scale;
              dptr[j] = saturate_cast<T>(ptr1[j]*alpha + ptr2[j]*beta);
              dptr[j+1] = saturate_cast<T>(ptr1[j+1]*alpha + ptr2[j+1]*beta);
              dptr[j+2] = saturate_cast<T>(ptr1[j+2]*alpha + ptr2[j+2]*beta);
              dptr[j+3] = saturate_cast<T>((1 - (1-alpha)*(1-beta))*alpha_scale);
          }
      }
  }
  ```

   This approach, while being very simple, can boost the performance of a simple element-operation
by 10-20 percents, especially if the image is rather small and the operation is quite simple.

  Another OpenCV idiom in this function, a call of [Mat::create] for the destination array, that
allocates the destination array unless it already has the proper size and type. And while the newly
allocated arrays are always continuous, you still need to check the destination array because
[Mat::create] does not always allocate a new matrix.

**Returns:** *[bool](../modules/_types_opencv__hacks_.md#bool)*

___

###  isDeleted

▸ **isDeleted**(...`a`: any[]): *any*

*Inherited from [EmscriptenEmbindInstance](_types_opencv__hacks_.emscriptenembindinstance.md).[isDeleted](_types_opencv__hacks_.emscriptenembindinstance.md#isdeleted)*

*Defined in [types/opencv/_hacks.ts:123](https://github.com/cancerberoSgx/mirada/blob/c8721d6/mirada/src/types/opencv/_hacks.ts#L123)*

**Parameters:**

Name | Type |
------ | ------ |
`...a` | any[] |

**Returns:** *any*

___

###  locateROI

▸ **locateROI**(`wholeSize`: [Size](_types_opencv__hacks_.size.md), `ofs`: [Point](_types_opencv__hacks_.point.md)): *[Size](_types_opencv__hacks_.size.md)*

*Inherited from [Mat](_types_opencv_mat_.mat.md).[locateROI](_types_opencv_mat_.mat.md#locateroi)*

*Defined in [types/opencv/Mat.ts:1158](https://github.com/cancerberoSgx/mirada/blob/c8721d6/mirada/src/types/opencv/Mat.ts#L1158)*

  After you extracted a submatrix from a matrix using [Mat::row], [Mat::col], [Mat::rowRange],
[Mat::colRange], and others, the resultant submatrix points just to the part of the original big
matrix. However, each submatrix contains information (represented by datastart and dataend fields)
that helps reconstruct the original matrix size and the position of the extracted submatrix within
the original matrix. The method locateROI does exactly that.

**Parameters:**

Name | Type | Description |
------ | ------ | ------ |
`wholeSize` | [Size](_types_opencv__hacks_.size.md) | Output parameter that contains the size of the whole matrix containing this as a part.  |
`ofs` | [Point](_types_opencv__hacks_.point.md) | Output parameter that contains an offset of this inside the whole matrix.  |

**Returns:** *[Size](_types_opencv__hacks_.size.md)*

___

###  mul

▸ **mul**(`e`: [MatExpr](_types_opencv_matexpr_.matexpr.md), `scale?`: [double](../modules/_types_opencv__hacks_.md#double)): *[MatExpr](_types_opencv_matexpr_.matexpr.md)*

*Overrides [Mat](_types_opencv_mat_.mat.md).[mul](_types_opencv_mat_.mat.md#mul)*

*Defined in [types/opencv/MatExpr.ts:92](https://github.com/cancerberoSgx/mirada/blob/c8721d6/mirada/src/types/opencv/MatExpr.ts#L92)*

**Parameters:**

Name | Type |
------ | ------ |
`e` | [MatExpr](_types_opencv_matexpr_.matexpr.md) |
`scale?` | [double](../modules/_types_opencv__hacks_.md#double) |

**Returns:** *[MatExpr](_types_opencv_matexpr_.matexpr.md)*

▸ **mul**(`m`: [Mat](_types_opencv_mat_.mat.md), `scale?`: [double](../modules/_types_opencv__hacks_.md#double)): *[MatExpr](_types_opencv_matexpr_.matexpr.md)*

*Overrides [Mat](_types_opencv_mat_.mat.md).[mul](_types_opencv_mat_.mat.md#mul)*

*Defined in [types/opencv/MatExpr.ts:94](https://github.com/cancerberoSgx/mirada/blob/c8721d6/mirada/src/types/opencv/MatExpr.ts#L94)*

**Parameters:**

Name | Type |
------ | ------ |
`m` | [Mat](_types_opencv_mat_.mat.md) |
`scale?` | [double](../modules/_types_opencv__hacks_.md#double) |

**Returns:** *[MatExpr](_types_opencv_matexpr_.matexpr.md)*

___

###  pop_back

▸ **pop_back**(`nelems?`: [size_t](../modules/_types_opencv__hacks_.md#size_t)): *void*

*Inherited from [Mat](_types_opencv_mat_.mat.md).[pop_back](_types_opencv_mat_.mat.md#pop_back)*

*Defined in [types/opencv/Mat.ts:1182](https://github.com/cancerberoSgx/mirada/blob/c8721d6/mirada/src/types/opencv/Mat.ts#L1182)*

  The method removes one or more rows from the bottom of the matrix.

**Parameters:**

Name | Type | Description |
------ | ------ | ------ |
`nelems?` | [size_t](../modules/_types_opencv__hacks_.md#size_t) | Number of removed rows. If it is greater than the total number of rows, an exception is thrown.  |

**Returns:** *void*

___

###  ptr

▸ **ptr**(`i0?`: [int](../modules/_types_opencv__hacks_.md#int)): *[uchar](../modules/_types_opencv__hacks_.md#uchar)*

*Inherited from [Mat](_types_opencv_mat_.mat.md).[ptr](_types_opencv_mat_.mat.md#ptr)*

*Defined in [types/opencv/Mat.ts:1190](https://github.com/cancerberoSgx/mirada/blob/c8721d6/mirada/src/types/opencv/Mat.ts#L1190)*

  The methods return `uchar*` or typed pointer to the specified matrix row. See the sample in
[Mat::isContinuous] to know how to use these methods.

**Parameters:**

Name | Type | Description |
------ | ------ | ------ |
`i0?` | [int](../modules/_types_opencv__hacks_.md#int) | A 0-based row index.  |

**Returns:** *[uchar](../modules/_types_opencv__hacks_.md#uchar)*

▸ **ptr**(`i0?`: [int](../modules/_types_opencv__hacks_.md#int)): *[uchar](../modules/_types_opencv__hacks_.md#uchar)*

*Inherited from [Mat](_types_opencv_mat_.mat.md).[ptr](_types_opencv_mat_.mat.md#ptr)*

*Defined in [types/opencv/Mat.ts:1196](https://github.com/cancerberoSgx/mirada/blob/c8721d6/mirada/src/types/opencv/Mat.ts#L1196)*

  This is an overloaded member function, provided for convenience. It differs from the above
function only in what argument(s) it accepts.

**Parameters:**

Name | Type |
------ | ------ |
`i0?` | [int](../modules/_types_opencv__hacks_.md#int) |

**Returns:** *[uchar](../modules/_types_opencv__hacks_.md#uchar)*

▸ **ptr**(`row`: [int](../modules/_types_opencv__hacks_.md#int), `col`: [int](../modules/_types_opencv__hacks_.md#int)): *[uchar](../modules/_types_opencv__hacks_.md#uchar)*

*Inherited from [Mat](_types_opencv_mat_.mat.md).[ptr](_types_opencv_mat_.mat.md#ptr)*

*Defined in [types/opencv/Mat.ts:1206](https://github.com/cancerberoSgx/mirada/blob/c8721d6/mirada/src/types/opencv/Mat.ts#L1206)*

  This is an overloaded member function, provided for convenience. It differs from the above
function only in what argument(s) it accepts.

**Parameters:**

Name | Type | Description |
------ | ------ | ------ |
`row` | [int](../modules/_types_opencv__hacks_.md#int) | Index along the dimension 0  |
`col` | [int](../modules/_types_opencv__hacks_.md#int) | Index along the dimension 1  |

**Returns:** *[uchar](../modules/_types_opencv__hacks_.md#uchar)*

▸ **ptr**(`row`: [int](../modules/_types_opencv__hacks_.md#int), `col`: [int](../modules/_types_opencv__hacks_.md#int)): *[uchar](../modules/_types_opencv__hacks_.md#uchar)*

*Inherited from [Mat](_types_opencv_mat_.mat.md).[ptr](_types_opencv_mat_.mat.md#ptr)*

*Defined in [types/opencv/Mat.ts:1216](https://github.com/cancerberoSgx/mirada/blob/c8721d6/mirada/src/types/opencv/Mat.ts#L1216)*

  This is an overloaded member function, provided for convenience. It differs from the above
function only in what argument(s) it accepts.

**Parameters:**

Name | Type | Description |
------ | ------ | ------ |
`row` | [int](../modules/_types_opencv__hacks_.md#int) | Index along the dimension 0  |
`col` | [int](../modules/_types_opencv__hacks_.md#int) | Index along the dimension 1  |

**Returns:** *[uchar](../modules/_types_opencv__hacks_.md#uchar)*

▸ **ptr**(`i0`: [int](../modules/_types_opencv__hacks_.md#int), `i1`: [int](../modules/_types_opencv__hacks_.md#int), `i2`: [int](../modules/_types_opencv__hacks_.md#int)): *[uchar](../modules/_types_opencv__hacks_.md#uchar)*

*Inherited from [Mat](_types_opencv_mat_.mat.md).[ptr](_types_opencv_mat_.mat.md#ptr)*

*Defined in [types/opencv/Mat.ts:1222](https://github.com/cancerberoSgx/mirada/blob/c8721d6/mirada/src/types/opencv/Mat.ts#L1222)*

  This is an overloaded member function, provided for convenience. It differs from the above
function only in what argument(s) it accepts.

**Parameters:**

Name | Type |
------ | ------ |
`i0` | [int](../modules/_types_opencv__hacks_.md#int) |
`i1` | [int](../modules/_types_opencv__hacks_.md#int) |
`i2` | [int](../modules/_types_opencv__hacks_.md#int) |

**Returns:** *[uchar](../modules/_types_opencv__hacks_.md#uchar)*

▸ **ptr**(`i0`: [int](../modules/_types_opencv__hacks_.md#int), `i1`: [int](../modules/_types_opencv__hacks_.md#int), `i2`: [int](../modules/_types_opencv__hacks_.md#int)): *[uchar](../modules/_types_opencv__hacks_.md#uchar)*

*Inherited from [Mat](_types_opencv_mat_.mat.md).[ptr](_types_opencv_mat_.mat.md#ptr)*

*Defined in [types/opencv/Mat.ts:1228](https://github.com/cancerberoSgx/mirada/blob/c8721d6/mirada/src/types/opencv/Mat.ts#L1228)*

  This is an overloaded member function, provided for convenience. It differs from the above
function only in what argument(s) it accepts.

**Parameters:**

Name | Type |
------ | ------ |
`i0` | [int](../modules/_types_opencv__hacks_.md#int) |
`i1` | [int](../modules/_types_opencv__hacks_.md#int) |
`i2` | [int](../modules/_types_opencv__hacks_.md#int) |

**Returns:** *[uchar](../modules/_types_opencv__hacks_.md#uchar)*

▸ **ptr**(`idx`: any): *[uchar](../modules/_types_opencv__hacks_.md#uchar)*

*Inherited from [Mat](_types_opencv_mat_.mat.md).[ptr](_types_opencv_mat_.mat.md#ptr)*

*Defined in [types/opencv/Mat.ts:1234](https://github.com/cancerberoSgx/mirada/blob/c8721d6/mirada/src/types/opencv/Mat.ts#L1234)*

  This is an overloaded member function, provided for convenience. It differs from the above
function only in what argument(s) it accepts.

**Parameters:**

Name | Type |
------ | ------ |
`idx` | any |

**Returns:** *[uchar](../modules/_types_opencv__hacks_.md#uchar)*

▸ **ptr**(`idx`: any): *[uchar](../modules/_types_opencv__hacks_.md#uchar)*

*Inherited from [Mat](_types_opencv_mat_.mat.md).[ptr](_types_opencv_mat_.mat.md#ptr)*

*Defined in [types/opencv/Mat.ts:1240](https://github.com/cancerberoSgx/mirada/blob/c8721d6/mirada/src/types/opencv/Mat.ts#L1240)*

  This is an overloaded member function, provided for convenience. It differs from the above
function only in what argument(s) it accepts.

**Parameters:**

Name | Type |
------ | ------ |
`idx` | any |

**Returns:** *[uchar](../modules/_types_opencv__hacks_.md#uchar)*

▸ **ptr**(`n`: [int](../modules/_types_opencv__hacks_.md#int), `idx`: [Vec](../modules/_types_opencv__hacks_.md#vec)): *[uchar](../modules/_types_opencv__hacks_.md#uchar)*

*Inherited from [Mat](_types_opencv_mat_.mat.md).[ptr](_types_opencv_mat_.mat.md#ptr)*

*Defined in [types/opencv/Mat.ts:1246](https://github.com/cancerberoSgx/mirada/blob/c8721d6/mirada/src/types/opencv/Mat.ts#L1246)*

  This is an overloaded member function, provided for convenience. It differs from the above
function only in what argument(s) it accepts.

**Parameters:**

Name | Type |
------ | ------ |
`n` | [int](../modules/_types_opencv__hacks_.md#int) |
`idx` | [Vec](../modules/_types_opencv__hacks_.md#vec) |

**Returns:** *[uchar](../modules/_types_opencv__hacks_.md#uchar)*

▸ **ptr**(`n`: [int](../modules/_types_opencv__hacks_.md#int), `idx`: [Vec](../modules/_types_opencv__hacks_.md#vec)): *[uchar](../modules/_types_opencv__hacks_.md#uchar)*

*Inherited from [Mat](_types_opencv_mat_.mat.md).[ptr](_types_opencv_mat_.mat.md#ptr)*

*Defined in [types/opencv/Mat.ts:1252](https://github.com/cancerberoSgx/mirada/blob/c8721d6/mirada/src/types/opencv/Mat.ts#L1252)*

  This is an overloaded member function, provided for convenience. It differs from the above
function only in what argument(s) it accepts.

**Parameters:**

Name | Type |
------ | ------ |
`n` | [int](../modules/_types_opencv__hacks_.md#int) |
`idx` | [Vec](../modules/_types_opencv__hacks_.md#vec) |

**Returns:** *[uchar](../modules/_types_opencv__hacks_.md#uchar)*

▸ **ptr**(`arg37`: any, `i0?`: [int](../modules/_types_opencv__hacks_.md#int)): *any*

*Inherited from [Mat](_types_opencv_mat_.mat.md).[ptr](_types_opencv_mat_.mat.md#ptr)*

*Defined in [types/opencv/Mat.ts:1258](https://github.com/cancerberoSgx/mirada/blob/c8721d6/mirada/src/types/opencv/Mat.ts#L1258)*

  This is an overloaded member function, provided for convenience. It differs from the above
function only in what argument(s) it accepts.

**Parameters:**

Name | Type |
------ | ------ |
`arg37` | any |
`i0?` | [int](../modules/_types_opencv__hacks_.md#int) |

**Returns:** *any*

▸ **ptr**(`arg38`: any, `i0?`: [int](../modules/_types_opencv__hacks_.md#int)): *any*

*Inherited from [Mat](_types_opencv_mat_.mat.md).[ptr](_types_opencv_mat_.mat.md#ptr)*

*Defined in [types/opencv/Mat.ts:1264](https://github.com/cancerberoSgx/mirada/blob/c8721d6/mirada/src/types/opencv/Mat.ts#L1264)*

  This is an overloaded member function, provided for convenience. It differs from the above
function only in what argument(s) it accepts.

**Parameters:**

Name | Type |
------ | ------ |
`arg38` | any |
`i0?` | [int](../modules/_types_opencv__hacks_.md#int) |

**Returns:** *any*

▸ **ptr**(`arg39`: any, `row`: [int](../modules/_types_opencv__hacks_.md#int), `col`: [int](../modules/_types_opencv__hacks_.md#int)): *any*

*Inherited from [Mat](_types_opencv_mat_.mat.md).[ptr](_types_opencv_mat_.mat.md#ptr)*

*Defined in [types/opencv/Mat.ts:1274](https://github.com/cancerberoSgx/mirada/blob/c8721d6/mirada/src/types/opencv/Mat.ts#L1274)*

  This is an overloaded member function, provided for convenience. It differs from the above
function only in what argument(s) it accepts.

**Parameters:**

Name | Type | Description |
------ | ------ | ------ |
`arg39` | any | - |
`row` | [int](../modules/_types_opencv__hacks_.md#int) | Index along the dimension 0  |
`col` | [int](../modules/_types_opencv__hacks_.md#int) | Index along the dimension 1  |

**Returns:** *any*

▸ **ptr**(`arg40`: any, `row`: [int](../modules/_types_opencv__hacks_.md#int), `col`: [int](../modules/_types_opencv__hacks_.md#int)): *any*

*Inherited from [Mat](_types_opencv_mat_.mat.md).[ptr](_types_opencv_mat_.mat.md#ptr)*

*Defined in [types/opencv/Mat.ts:1284](https://github.com/cancerberoSgx/mirada/blob/c8721d6/mirada/src/types/opencv/Mat.ts#L1284)*

  This is an overloaded member function, provided for convenience. It differs from the above
function only in what argument(s) it accepts.

**Parameters:**

Name | Type | Description |
------ | ------ | ------ |
`arg40` | any | - |
`row` | [int](../modules/_types_opencv__hacks_.md#int) | Index along the dimension 0  |
`col` | [int](../modules/_types_opencv__hacks_.md#int) | Index along the dimension 1  |

**Returns:** *any*

▸ **ptr**(`arg41`: any, `i0`: [int](../modules/_types_opencv__hacks_.md#int), `i1`: [int](../modules/_types_opencv__hacks_.md#int), `i2`: [int](../modules/_types_opencv__hacks_.md#int)): *any*

*Inherited from [Mat](_types_opencv_mat_.mat.md).[ptr](_types_opencv_mat_.mat.md#ptr)*

*Defined in [types/opencv/Mat.ts:1290](https://github.com/cancerberoSgx/mirada/blob/c8721d6/mirada/src/types/opencv/Mat.ts#L1290)*

  This is an overloaded member function, provided for convenience. It differs from the above
function only in what argument(s) it accepts.

**Parameters:**

Name | Type |
------ | ------ |
`arg41` | any |
`i0` | [int](../modules/_types_opencv__hacks_.md#int) |
`i1` | [int](../modules/_types_opencv__hacks_.md#int) |
`i2` | [int](../modules/_types_opencv__hacks_.md#int) |

**Returns:** *any*

▸ **ptr**(`arg42`: any, `i0`: [int](../modules/_types_opencv__hacks_.md#int), `i1`: [int](../modules/_types_opencv__hacks_.md#int), `i2`: [int](../modules/_types_opencv__hacks_.md#int)): *any*

*Inherited from [Mat](_types_opencv_mat_.mat.md).[ptr](_types_opencv_mat_.mat.md#ptr)*

*Defined in [types/opencv/Mat.ts:1296](https://github.com/cancerberoSgx/mirada/blob/c8721d6/mirada/src/types/opencv/Mat.ts#L1296)*

  This is an overloaded member function, provided for convenience. It differs from the above
function only in what argument(s) it accepts.

**Parameters:**

Name | Type |
------ | ------ |
`arg42` | any |
`i0` | [int](../modules/_types_opencv__hacks_.md#int) |
`i1` | [int](../modules/_types_opencv__hacks_.md#int) |
`i2` | [int](../modules/_types_opencv__hacks_.md#int) |

**Returns:** *any*

▸ **ptr**(`arg43`: any, `idx`: any): *any*

*Inherited from [Mat](_types_opencv_mat_.mat.md).[ptr](_types_opencv_mat_.mat.md#ptr)*

*Defined in [types/opencv/Mat.ts:1302](https://github.com/cancerberoSgx/mirada/blob/c8721d6/mirada/src/types/opencv/Mat.ts#L1302)*

  This is an overloaded member function, provided for convenience. It differs from the above
function only in what argument(s) it accepts.

**Parameters:**

Name | Type |
------ | ------ |
`arg43` | any |
`idx` | any |

**Returns:** *any*

▸ **ptr**(`arg44`: any, `idx`: any): *any*

*Inherited from [Mat](_types_opencv_mat_.mat.md).[ptr](_types_opencv_mat_.mat.md#ptr)*

*Defined in [types/opencv/Mat.ts:1308](https://github.com/cancerberoSgx/mirada/blob/c8721d6/mirada/src/types/opencv/Mat.ts#L1308)*

  This is an overloaded member function, provided for convenience. It differs from the above
function only in what argument(s) it accepts.

**Parameters:**

Name | Type |
------ | ------ |
`arg44` | any |
`idx` | any |

**Returns:** *any*

▸ **ptr**(`arg45`: any, `n`: [int](../modules/_types_opencv__hacks_.md#int), `idx`: [Vec](../modules/_types_opencv__hacks_.md#vec)): *[Vec](../modules/_types_opencv__hacks_.md#vec)*

*Inherited from [Mat](_types_opencv_mat_.mat.md).[ptr](_types_opencv_mat_.mat.md#ptr)*

*Defined in [types/opencv/Mat.ts:1314](https://github.com/cancerberoSgx/mirada/blob/c8721d6/mirada/src/types/opencv/Mat.ts#L1314)*

  This is an overloaded member function, provided for convenience. It differs from the above
function only in what argument(s) it accepts.

**Parameters:**

Name | Type |
------ | ------ |
`arg45` | any |
`n` | [int](../modules/_types_opencv__hacks_.md#int) |
`idx` | [Vec](../modules/_types_opencv__hacks_.md#vec) |

**Returns:** *[Vec](../modules/_types_opencv__hacks_.md#vec)*

▸ **ptr**(`arg46`: any, `n`: [int](../modules/_types_opencv__hacks_.md#int), `idx`: [Vec](../modules/_types_opencv__hacks_.md#vec)): *[Vec](../modules/_types_opencv__hacks_.md#vec)*

*Inherited from [Mat](_types_opencv_mat_.mat.md).[ptr](_types_opencv_mat_.mat.md#ptr)*

*Defined in [types/opencv/Mat.ts:1320](https://github.com/cancerberoSgx/mirada/blob/c8721d6/mirada/src/types/opencv/Mat.ts#L1320)*

  This is an overloaded member function, provided for convenience. It differs from the above
function only in what argument(s) it accepts.

**Parameters:**

Name | Type |
------ | ------ |
`arg46` | any |
`n` | [int](../modules/_types_opencv__hacks_.md#int) |
`idx` | [Vec](../modules/_types_opencv__hacks_.md#vec) |

**Returns:** *[Vec](../modules/_types_opencv__hacks_.md#vec)*

___

###  push_back

▸ **push_back**(`arg47`: any, `elem`: any): *any*

*Inherited from [Mat](_types_opencv_mat_.mat.md).[push_back](_types_opencv_mat_.mat.md#push_back)*

*Overrides [Vector](_types_opencv__hacks_.vector.md).[push_back](_types_opencv__hacks_.vector.md#push_back)*

*Defined in [types/opencv/Mat.ts:1329](https://github.com/cancerberoSgx/mirada/blob/c8721d6/mirada/src/types/opencv/Mat.ts#L1329)*

  The methods add one or more elements to the bottom of the matrix. They emulate the corresponding
method of the STL vector class. When elem is [Mat] , its type and the number of columns must be the
same as in the container matrix.

**Parameters:**

Name | Type | Description |
------ | ------ | ------ |
`arg47` | any | - |
`elem` | any | Added element(s).  |

**Returns:** *any*

▸ **push_back**(`arg48`: any, `elem`: [Mat_](_types_opencv__hacks_.mat_.md)): *[Mat_](_types_opencv__hacks_.mat_.md)*

*Inherited from [Mat](_types_opencv_mat_.mat.md).[push_back](_types_opencv_mat_.mat.md#push_back)*

*Overrides [Vector](_types_opencv__hacks_.vector.md).[push_back](_types_opencv__hacks_.vector.md#push_back)*

*Defined in [types/opencv/Mat.ts:1337](https://github.com/cancerberoSgx/mirada/blob/c8721d6/mirada/src/types/opencv/Mat.ts#L1337)*

  This is an overloaded member function, provided for convenience. It differs from the above
function only in what argument(s) it accepts.

**Parameters:**

Name | Type | Description |
------ | ------ | ------ |
`arg48` | any | - |
`elem` | [Mat_](_types_opencv__hacks_.mat_.md) | Added element(s).  |

**Returns:** *[Mat_](_types_opencv__hacks_.mat_.md)*

▸ **push_back**(`arg49`: any, `elem`: any): *any*

*Inherited from [Mat](_types_opencv_mat_.mat.md).[push_back](_types_opencv_mat_.mat.md#push_back)*

*Overrides [Vector](_types_opencv__hacks_.vector.md).[push_back](_types_opencv__hacks_.vector.md#push_back)*

*Defined in [types/opencv/Mat.ts:1345](https://github.com/cancerberoSgx/mirada/blob/c8721d6/mirada/src/types/opencv/Mat.ts#L1345)*

  This is an overloaded member function, provided for convenience. It differs from the above
function only in what argument(s) it accepts.

**Parameters:**

Name | Type | Description |
------ | ------ | ------ |
`arg49` | any | - |
`elem` | any | Added element(s).  |

**Returns:** *any*

▸ **push_back**(`m`: [Mat](_types_opencv_mat_.mat.md)): *[Mat](_types_opencv_mat_.mat.md)*

*Inherited from [Mat](_types_opencv_mat_.mat.md).[push_back](_types_opencv_mat_.mat.md#push_back)*

*Overrides [Vector](_types_opencv__hacks_.vector.md).[push_back](_types_opencv__hacks_.vector.md#push_back)*

*Defined in [types/opencv/Mat.ts:1353](https://github.com/cancerberoSgx/mirada/blob/c8721d6/mirada/src/types/opencv/Mat.ts#L1353)*

  This is an overloaded member function, provided for convenience. It differs from the above
function only in what argument(s) it accepts.

**Parameters:**

Name | Type | Description |
------ | ------ | ------ |
`m` | [Mat](_types_opencv_mat_.mat.md) | Added line(s).  |

**Returns:** *[Mat](_types_opencv_mat_.mat.md)*

___

###  push_back_

▸ **push_back_**(`elem`: any): *void*

*Inherited from [Mat](_types_opencv_mat_.mat.md).[push_back_](_types_opencv_mat_.mat.md#push_back_)*

*Defined in [types/opencv/Mat.ts:1355](https://github.com/cancerberoSgx/mirada/blob/c8721d6/mirada/src/types/opencv/Mat.ts#L1355)*

**Parameters:**

Name | Type |
------ | ------ |
`elem` | any |

**Returns:** *void*

___

###  put

▸ **put**(`i`: number, `j`: number, `data`: any): *any*

*Inherited from [Vector](_types_opencv__hacks_.vector.md).[put](_types_opencv__hacks_.vector.md#put)*

*Defined in [types/opencv/_hacks.ts:135](https://github.com/cancerberoSgx/mirada/blob/c8721d6/mirada/src/types/opencv/_hacks.ts#L135)*

**Parameters:**

Name | Type |
------ | ------ |
`i` | number |
`j` | number |
`data` | any |

**Returns:** *any*

___

###  release

▸ **release**(): *void*

*Inherited from [Mat](_types_opencv_mat_.mat.md).[release](_types_opencv_mat_.mat.md#release)*

*Defined in [types/opencv/Mat.ts:1369](https://github.com/cancerberoSgx/mirada/blob/c8721d6/mirada/src/types/opencv/Mat.ts#L1369)*

  The method decrements the reference counter associated with the matrix data. When the reference
counter reaches 0, the matrix data is deallocated and the data and the reference counter pointers
are set to NULL's. If the matrix header points to an external data set (see [Mat::Mat] ), the
reference counter is NULL, and the method has no effect in this case.

  This method can be called manually to force the matrix data deallocation. But since this method is
automatically called in the destructor, or by any other method that changes the data pointer, it is
usually not needed. The reference counter decrement and check for 0 is an atomic operation on the
platforms that support it. Thus, it is safe to operate on the same matrices asynchronously in
different threads.

**Returns:** *void*

___

###  reserve

▸ **reserve**(`sz`: [size_t](../modules/_types_opencv__hacks_.md#size_t)): *void*

*Inherited from [Mat](_types_opencv_mat_.mat.md).[reserve](_types_opencv_mat_.mat.md#reserve)*

*Defined in [types/opencv/Mat.ts:1378](https://github.com/cancerberoSgx/mirada/blob/c8721d6/mirada/src/types/opencv/Mat.ts#L1378)*

  The method reserves space for sz rows. If the matrix already has enough space to store sz rows,
nothing happens. If the matrix is reallocated, the first [Mat::rows] rows are preserved. The method
emulates the corresponding method of the STL vector class.

**Parameters:**

Name | Type | Description |
------ | ------ | ------ |
`sz` | [size_t](../modules/_types_opencv__hacks_.md#size_t) | Number of rows.  |

**Returns:** *void*

___

###  reserveBuffer

▸ **reserveBuffer**(`sz`: [size_t](../modules/_types_opencv__hacks_.md#size_t)): *void*

*Inherited from [Mat](_types_opencv_mat_.mat.md).[reserveBuffer](_types_opencv_mat_.mat.md#reservebuffer)*

*Defined in [types/opencv/Mat.ts:1386](https://github.com/cancerberoSgx/mirada/blob/c8721d6/mirada/src/types/opencv/Mat.ts#L1386)*

  The method reserves space for sz bytes. If the matrix already has enough space to store sz bytes,
nothing happens. If matrix has to be reallocated its previous content could be lost.

**Parameters:**

Name | Type | Description |
------ | ------ | ------ |
`sz` | [size_t](../modules/_types_opencv__hacks_.md#size_t) | Number of bytes.  |

**Returns:** *void*

___

###  reshape

▸ **reshape**(`cn`: [int](../modules/_types_opencv__hacks_.md#int), `rows?`: [int](../modules/_types_opencv__hacks_.md#int)): *[Mat](_types_opencv_mat_.mat.md)*

*Inherited from [Mat](_types_opencv_mat_.mat.md).[reshape](_types_opencv_mat_.mat.md#reshape)*

*Defined in [types/opencv/Mat.ts:1415](https://github.com/cancerberoSgx/mirada/blob/c8721d6/mirada/src/types/opencv/Mat.ts#L1415)*

  The method makes a new matrix header for *this elements. The new matrix may have a different size
and/or different number of channels. Any combination is possible if:

No extra elements are included into the new matrix and no elements are excluded. Consequently, the
product rows*cols*channels() must stay the same after the transformation.
No data is copied. That is, this is an O(1) operation. Consequently, if you change the number of
rows, or the operation changes the indices of elements row in some other way, the matrix must be
continuous. See [Mat::isContinuous] .

  For example, if there is a set of 3D points stored as an STL vector, and you want to represent the
points as a 3xN matrix, do the following:

  ```cpp
  std::vector<Point3f> vec;
  ...
  Mat pointMat = Mat(vec). // convert vector to Mat, O(1) operation
                    reshape(1). // make Nx3 1-channel matrix out of Nx1 3-channel.
                                // Also, an O(1) operation
                       t(); // finally, transpose the Nx3 matrix.
                            // This involves copying all the elements
  ```

**Parameters:**

Name | Type | Description |
------ | ------ | ------ |
`cn` | [int](../modules/_types_opencv__hacks_.md#int) | New number of channels. If the parameter is 0, the number of channels remains the same.  |
`rows?` | [int](../modules/_types_opencv__hacks_.md#int) | New number of rows. If the parameter is 0, the number of rows remains the same.  |

**Returns:** *[Mat](_types_opencv_mat_.mat.md)*

▸ **reshape**(`cn`: [int](../modules/_types_opencv__hacks_.md#int), `newndims`: [int](../modules/_types_opencv__hacks_.md#int), `newsz`: any): *[Mat](_types_opencv_mat_.mat.md)*

*Inherited from [Mat](_types_opencv_mat_.mat.md).[reshape](_types_opencv_mat_.mat.md#reshape)*

*Defined in [types/opencv/Mat.ts:1421](https://github.com/cancerberoSgx/mirada/blob/c8721d6/mirada/src/types/opencv/Mat.ts#L1421)*

  This is an overloaded member function, provided for convenience. It differs from the above
function only in what argument(s) it accepts.

**Parameters:**

Name | Type |
------ | ------ |
`cn` | [int](../modules/_types_opencv__hacks_.md#int) |
`newndims` | [int](../modules/_types_opencv__hacks_.md#int) |
`newsz` | any |

**Returns:** *[Mat](_types_opencv_mat_.mat.md)*

▸ **reshape**(`cn`: [int](../modules/_types_opencv__hacks_.md#int), `newshape`: any): *[Mat](_types_opencv_mat_.mat.md)*

*Inherited from [Mat](_types_opencv_mat_.mat.md).[reshape](_types_opencv_mat_.mat.md#reshape)*

*Defined in [types/opencv/Mat.ts:1427](https://github.com/cancerberoSgx/mirada/blob/c8721d6/mirada/src/types/opencv/Mat.ts#L1427)*

  This is an overloaded member function, provided for convenience. It differs from the above
function only in what argument(s) it accepts.

**Parameters:**

Name | Type |
------ | ------ |
`cn` | [int](../modules/_types_opencv__hacks_.md#int) |
`newshape` | any |

**Returns:** *[Mat](_types_opencv_mat_.mat.md)*

___

###  resize

▸ **resize**(`sz`: [size_t](../modules/_types_opencv__hacks_.md#size_t)): *void*

*Inherited from [Mat](_types_opencv_mat_.mat.md).[resize](_types_opencv_mat_.mat.md#resize)*

*Overrides [Vector](_types_opencv__hacks_.vector.md).[resize](_types_opencv__hacks_.vector.md#resize)*

*Defined in [types/opencv/Mat.ts:1436](https://github.com/cancerberoSgx/mirada/blob/c8721d6/mirada/src/types/opencv/Mat.ts#L1436)*

  The methods change the number of matrix rows. If the matrix is reallocated, the first
min(Mat::rows, sz) rows are preserved. The methods emulate the corresponding methods of the STL
vector class.

**Parameters:**

Name | Type | Description |
------ | ------ | ------ |
`sz` | [size_t](../modules/_types_opencv__hacks_.md#size_t) | New number of rows.  |

**Returns:** *void*

▸ **resize**(`sz`: [size_t](../modules/_types_opencv__hacks_.md#size_t), `s`: [Scalar](_types_opencv__hacks_.scalar.md)): *[Scalar](_types_opencv__hacks_.scalar.md)*

*Inherited from [Mat](_types_opencv_mat_.mat.md).[resize](_types_opencv_mat_.mat.md#resize)*

*Overrides [Vector](_types_opencv__hacks_.vector.md).[resize](_types_opencv__hacks_.vector.md#resize)*

*Defined in [types/opencv/Mat.ts:1446](https://github.com/cancerberoSgx/mirada/blob/c8721d6/mirada/src/types/opencv/Mat.ts#L1446)*

  This is an overloaded member function, provided for convenience. It differs from the above
function only in what argument(s) it accepts.

**Parameters:**

Name | Type | Description |
------ | ------ | ------ |
`sz` | [size_t](../modules/_types_opencv__hacks_.md#size_t) | New number of rows.  |
`s` | [Scalar](_types_opencv__hacks_.scalar.md) | Value assigned to the newly added elements.  |

**Returns:** *[Scalar](_types_opencv__hacks_.scalar.md)*

___

###  roi

▸ **roi**(`expr`: [Rect](_types_opencv__hacks_.rect.md) | [Mat_](_types_opencv__hacks_.mat_.md)): *[Mat](_types_opencv_mat_.mat.md)*

*Inherited from [Mat_](_types_opencv__hacks_.mat_.md).[roi](_types_opencv__hacks_.mat_.md#roi)*

*Defined in [types/opencv/_hacks.ts:211](https://github.com/cancerberoSgx/mirada/blob/c8721d6/mirada/src/types/opencv/_hacks.ts#L211)*

Sometimes, you will have to play with certain region of images.
For eye detection in images, first face detection is done all
over the image and when face is obtained, we select the face region alone and search for eyes inside it instead of searching whole image.
It improves accuracy (because eyes are always on faces) and performance (because we search for a small area).

Heads up : in JS seems only one argument is expected.

**Parameters:**

Name | Type |
------ | ------ |
`expr` | [Rect](_types_opencv__hacks_.rect.md) &#124; [Mat_](_types_opencv__hacks_.mat_.md) |

**Returns:** *[Mat](_types_opencv_mat_.mat.md)*

___

###  row

▸ **row**(`y`: [int](../modules/_types_opencv__hacks_.md#int)): *[MatExpr](_types_opencv_matexpr_.matexpr.md)*

*Overrides [Mat](_types_opencv_mat_.mat.md).[row](_types_opencv_mat_.mat.md#row)*

*Defined in [types/opencv/MatExpr.ts:96](https://github.com/cancerberoSgx/mirada/blob/c8721d6/mirada/src/types/opencv/MatExpr.ts#L96)*

**Parameters:**

Name | Type |
------ | ------ |
`y` | [int](../modules/_types_opencv__hacks_.md#int) |

**Returns:** *[MatExpr](_types_opencv_matexpr_.matexpr.md)*

___

###  rowRange

▸ **rowRange**(`startrow`: [int](../modules/_types_opencv__hacks_.md#int), `endrow`: [int](../modules/_types_opencv__hacks_.md#int)): *[Mat](_types_opencv_mat_.mat.md)*

*Inherited from [Mat](_types_opencv_mat_.mat.md).[rowRange](_types_opencv_mat_.mat.md#rowrange)*

*Defined in [types/opencv/Mat.ts:1496](https://github.com/cancerberoSgx/mirada/blob/c8721d6/mirada/src/types/opencv/Mat.ts#L1496)*

  The method makes a new header for the specified row span of the matrix. Similarly to [Mat::row]
and [Mat::col] , this is an O(1) operation.

**Parameters:**

Name | Type | Description |
------ | ------ | ------ |
`startrow` | [int](../modules/_types_opencv__hacks_.md#int) | An inclusive 0-based start index of the row span.  |
`endrow` | [int](../modules/_types_opencv__hacks_.md#int) | An exclusive 0-based ending index of the row span.  |

**Returns:** *[Mat](_types_opencv_mat_.mat.md)*

▸ **rowRange**(`r`: Range): *[Mat](_types_opencv_mat_.mat.md)*

*Inherited from [Mat](_types_opencv_mat_.mat.md).[rowRange](_types_opencv_mat_.mat.md#rowrange)*

*Defined in [types/opencv/Mat.ts:1504](https://github.com/cancerberoSgx/mirada/blob/c8721d6/mirada/src/types/opencv/Mat.ts#L1504)*

  This is an overloaded member function, provided for convenience. It differs from the above
function only in what argument(s) it accepts.

**Parameters:**

Name | Type | Description |
------ | ------ | ------ |
`r` | Range | Range structure containing both the start and the end indices.  |

**Returns:** *[Mat](_types_opencv_mat_.mat.md)*

___

###  set

▸ **set**(`i`: number, `t`: [Mat](_types_opencv_mat_.mat.md)): *void*

*Inherited from [Vector](_types_opencv__hacks_.vector.md).[set](_types_opencv__hacks_.vector.md#set)*

*Defined in [types/opencv/_hacks.ts:134](https://github.com/cancerberoSgx/mirada/blob/c8721d6/mirada/src/types/opencv/_hacks.ts#L134)*

**Parameters:**

Name | Type |
------ | ------ |
`i` | number |
`t` | [Mat](_types_opencv_mat_.mat.md) |

**Returns:** *void*

___

###  setTo

▸ **setTo**(`value`: InputArray | [Scalar](_types_opencv__hacks_.scalar.md), `mask?`: InputArray): *[Mat](_types_opencv_mat_.mat.md)*

*Inherited from [Mat](_types_opencv_mat_.mat.md).[setTo](_types_opencv_mat_.mat.md#setto)*

*Overrides [Mat_](_types_opencv__hacks_.mat_.md).[setTo](_types_opencv__hacks_.mat_.md#setto)*

*Defined in [types/opencv/Mat.ts:1514](https://github.com/cancerberoSgx/mirada/blob/c8721d6/mirada/src/types/opencv/Mat.ts#L1514)*

  This is an advanced variant of the [Mat::operator=(const Scalar& s)] operator.

**Parameters:**

Name | Type | Description |
------ | ------ | ------ |
`value` | InputArray &#124; [Scalar](_types_opencv__hacks_.scalar.md) | Assigned scalar converted to the actual array type.  |
`mask?` | InputArray | Operation mask of the same size as *this. Its non-zero elements indicate which matrix elements need to be copied. The mask has to be of type CV_8U and can have 1 or multiple channels  |

**Returns:** *[Mat](_types_opencv_mat_.mat.md)*

___

###  shortPtr

▸ **shortPtr**(`i`: any, `j`: any): *any*

*Inherited from [Mat_](_types_opencv__hacks_.mat_.md).[shortPtr](_types_opencv__hacks_.mat_.md#shortptr)*

*Defined in [types/opencv/_hacks.ts:194](https://github.com/cancerberoSgx/mirada/blob/c8721d6/mirada/src/types/opencv/_hacks.ts#L194)*

**Parameters:**

Name | Type |
------ | ------ |
`i` | any |
`j` | any |

**Returns:** *any*

___

###  step1

▸ **step1**(`i?`: [int](../modules/_types_opencv__hacks_.md#int)): *[size_t](../modules/_types_opencv__hacks_.md#size_t)*

*Inherited from [Mat](_types_opencv_mat_.mat.md).[step1](_types_opencv_mat_.mat.md#step1)*

*Defined in [types/opencv/Mat.ts:1520](https://github.com/cancerberoSgx/mirada/blob/c8721d6/mirada/src/types/opencv/Mat.ts#L1520)*

  The method returns a matrix step divided by [Mat::elemSize1()] . It can be useful to quickly
access an arbitrary matrix element.

**Parameters:**

Name | Type |
------ | ------ |
`i?` | [int](../modules/_types_opencv__hacks_.md#int) |

**Returns:** *[size_t](../modules/_types_opencv__hacks_.md#size_t)*

___

###  t

▸ **t**(): *[MatExpr](_types_opencv_matexpr_.matexpr.md)*

*Overrides [Mat](_types_opencv_mat_.mat.md).[t](_types_opencv_mat_.mat.md#t)*

*Defined in [types/opencv/MatExpr.ts:97](https://github.com/cancerberoSgx/mirada/blob/c8721d6/mirada/src/types/opencv/MatExpr.ts#L97)*

**Returns:** *[MatExpr](_types_opencv_matexpr_.matexpr.md)*

___

###  total

▸ **total**(): *[size_t](../modules/_types_opencv__hacks_.md#size_t)*

*Inherited from [Mat](_types_opencv_mat_.mat.md).[total](_types_opencv_mat_.mat.md#total)*

*Defined in [types/opencv/Mat.ts:1538](https://github.com/cancerberoSgx/mirada/blob/c8721d6/mirada/src/types/opencv/Mat.ts#L1538)*

  The method returns the number of array elements (a number of pixels if the array represents an
image).

**Returns:** *[size_t](../modules/_types_opencv__hacks_.md#size_t)*

▸ **total**(`startDim`: [int](../modules/_types_opencv__hacks_.md#int), `endDim?`: [int](../modules/_types_opencv__hacks_.md#int)): *[size_t](../modules/_types_opencv__hacks_.md#size_t)*

*Inherited from [Mat](_types_opencv_mat_.mat.md).[total](_types_opencv_mat_.mat.md#total)*

*Defined in [types/opencv/Mat.ts:1544](https://github.com/cancerberoSgx/mirada/blob/c8721d6/mirada/src/types/opencv/Mat.ts#L1544)*

  The method returns the number of elements within a certain sub-array slice with startDim <= dim <
endDim

**Parameters:**

Name | Type |
------ | ------ |
`startDim` | [int](../modules/_types_opencv__hacks_.md#int) |
`endDim?` | [int](../modules/_types_opencv__hacks_.md#int) |

**Returns:** *[size_t](../modules/_types_opencv__hacks_.md#size_t)*

___

###  type

▸ **type**(): *[int](../modules/_types_opencv__hacks_.md#int)*

*Overrides [Mat](_types_opencv_mat_.mat.md).[type](_types_opencv_mat_.mat.md#type)*

*Defined in [types/opencv/MatExpr.ts:99](https://github.com/cancerberoSgx/mirada/blob/c8721d6/mirada/src/types/opencv/MatExpr.ts#L99)*

**Returns:** *[int](../modules/_types_opencv__hacks_.md#int)*

___

###  ucharAt

▸ **ucharAt**(`i`: any): *any*

*Inherited from [Mat_](_types_opencv__hacks_.mat_.md).[ucharAt](_types_opencv__hacks_.mat_.md#ucharat)*

*Defined in [types/opencv/_hacks.ts:197](https://github.com/cancerberoSgx/mirada/blob/c8721d6/mirada/src/types/opencv/_hacks.ts#L197)*

**Parameters:**

Name | Type |
------ | ------ |
`i` | any |

**Returns:** *any*

___

###  ucharPtr

▸ **ucharPtr**(`i`: any, `j`: any): *any*

*Inherited from [Mat_](_types_opencv__hacks_.mat_.md).[ucharPtr](_types_opencv__hacks_.mat_.md#ucharptr)*

*Defined in [types/opencv/_hacks.ts:192](https://github.com/cancerberoSgx/mirada/blob/c8721d6/mirada/src/types/opencv/_hacks.ts#L192)*

**Parameters:**

Name | Type |
------ | ------ |
`i` | any |
`j` | any |

**Returns:** *any*

___

###  updateContinuityFlag

▸ **updateContinuityFlag**(): *void*

*Inherited from [Mat](_types_opencv_mat_.mat.md).[updateContinuityFlag](_types_opencv_mat_.mat.md#updatecontinuityflag)*

*Defined in [types/opencv/Mat.ts:1552](https://github.com/cancerberoSgx/mirada/blob/c8721d6/mirada/src/types/opencv/Mat.ts#L1552)*

**Returns:** *void*

___

###  ushortPtr

▸ **ushortPtr**(`i`: any, `j`: any): *any*

*Inherited from [Mat_](_types_opencv__hacks_.mat_.md).[ushortPtr](_types_opencv__hacks_.mat_.md#ushortptr)*

*Defined in [types/opencv/_hacks.ts:195](https://github.com/cancerberoSgx/mirada/blob/c8721d6/mirada/src/types/opencv/_hacks.ts#L195)*

**Parameters:**

Name | Type |
------ | ------ |
`i` | any |
`j` | any |

**Returns:** *any*

___

### `Static` diag

▸ **diag**(`d`: [Mat](_types_opencv_mat_.mat.md)): *[Mat](_types_opencv_mat_.mat.md)*

*Inherited from [Mat](_types_opencv_mat_.mat.md).[diag](_types_opencv_mat_.mat.md#static-diag)*

*Defined in [types/opencv/Mat.ts:1559](https://github.com/cancerberoSgx/mirada/blob/c8721d6/mirada/src/types/opencv/Mat.ts#L1559)*

  The method creates a square diagonal matrix from specified main diagonal.

**Parameters:**

Name | Type | Description |
------ | ------ | ------ |
`d` | [Mat](_types_opencv_mat_.mat.md) | One-dimensional matrix that represents the main diagonal.  |

**Returns:** *[Mat](_types_opencv_mat_.mat.md)*

___

### `Static` eye

▸ **eye**(`rows`: [int](../modules/_types_opencv__hacks_.md#int), `cols`: [int](../modules/_types_opencv__hacks_.md#int), `type`: [int](../modules/_types_opencv__hacks_.md#int)): *[MatExpr](_types_opencv_matexpr_.matexpr.md)*

*Inherited from [Mat](_types_opencv_mat_.mat.md).[eye](_types_opencv_mat_.mat.md#static-eye)*

*Defined in [types/opencv/Mat.ts:1580](https://github.com/cancerberoSgx/mirada/blob/c8721d6/mirada/src/types/opencv/Mat.ts#L1580)*

  The method returns a Matlab-style identity matrix initializer, similarly to [Mat::zeros].
Similarly to [Mat::ones], you can use a scale operation to create a scaled identity matrix
efficiently:

  ```cpp
  // make a 4x4 diagonal matrix with 0.1's on the diagonal.
  Mat A = Mat::eye(4, 4, CV_32F)*0.1;
  ```

  In case of multi-channels type, identity matrix will be initialized only for the first channel,
the others will be set to 0's

**Parameters:**

Name | Type | Description |
------ | ------ | ------ |
`rows` | [int](../modules/_types_opencv__hacks_.md#int) | Number of rows.  |
`cols` | [int](../modules/_types_opencv__hacks_.md#int) | Number of columns.  |
`type` | [int](../modules/_types_opencv__hacks_.md#int) | Created matrix type.  |

**Returns:** *[MatExpr](_types_opencv_matexpr_.matexpr.md)*

▸ **eye**(`size`: [Size](_types_opencv__hacks_.size.md), `type`: [int](../modules/_types_opencv__hacks_.md#int)): *[MatExpr](_types_opencv_matexpr_.matexpr.md)*

*Inherited from [Mat](_types_opencv_mat_.mat.md).[eye](_types_opencv_mat_.mat.md#static-eye)*

*Defined in [types/opencv/Mat.ts:1590](https://github.com/cancerberoSgx/mirada/blob/c8721d6/mirada/src/types/opencv/Mat.ts#L1590)*

  This is an overloaded member function, provided for convenience. It differs from the above
function only in what argument(s) it accepts.

**Parameters:**

Name | Type | Description |
------ | ------ | ------ |
`size` | [Size](_types_opencv__hacks_.size.md) | Alternative matrix size specification as Size(cols, rows) .  |
`type` | [int](../modules/_types_opencv__hacks_.md#int) | Created matrix type.  |

**Returns:** *[MatExpr](_types_opencv_matexpr_.matexpr.md)*

___

### `Static` getDefaultAllocator

▸ **getDefaultAllocator**(): *[MatAllocator](../modules/_types_opencv__hacks_.md#matallocator)*

*Inherited from [Mat](_types_opencv_mat_.mat.md).[getDefaultAllocator](_types_opencv_mat_.mat.md#static-getdefaultallocator)*

*Defined in [types/opencv/Mat.ts:1592](https://github.com/cancerberoSgx/mirada/blob/c8721d6/mirada/src/types/opencv/Mat.ts#L1592)*

**Returns:** *[MatAllocator](../modules/_types_opencv__hacks_.md#matallocator)*

___

### `Static` getStdAllocator

▸ **getStdAllocator**(): *[MatAllocator](../modules/_types_opencv__hacks_.md#matallocator)*

*Inherited from [Mat](_types_opencv_mat_.mat.md).[getStdAllocator](_types_opencv_mat_.mat.md#static-getstdallocator)*

*Defined in [types/opencv/Mat.ts:1594](https://github.com/cancerberoSgx/mirada/blob/c8721d6/mirada/src/types/opencv/Mat.ts#L1594)*

**Returns:** *[MatAllocator](../modules/_types_opencv__hacks_.md#matallocator)*

___

### `Static` ones

▸ **ones**(`rows`: [int](../modules/_types_opencv__hacks_.md#int), `cols`: [int](../modules/_types_opencv__hacks_.md#int), `type`: [int](../modules/_types_opencv__hacks_.md#int)): *[MatExpr](_types_opencv_matexpr_.matexpr.md)*

*Inherited from [Mat](_types_opencv_mat_.mat.md).[ones](_types_opencv_mat_.mat.md#static-ones)*

*Defined in [types/opencv/Mat.ts:1618](https://github.com/cancerberoSgx/mirada/blob/c8721d6/mirada/src/types/opencv/Mat.ts#L1618)*

  The method returns a Matlab-style 1's array initializer, similarly to [Mat::zeros]. Note that
using this method you can initialize an array with an arbitrary value, using the following Matlab
idiom:

  ```cpp
  Mat A = Mat::ones(100, 100, CV_8U)*3; // make 100x100 matrix filled with 3.
  ```

   The above operation does not form a 100x100 matrix of 1's and then multiply it by 3. Instead, it
just remembers the scale factor (3 in this case) and use it when actually invoking the matrix
initializer.

  In case of multi-channels type, only the first channel will be initialized with 1's, the others
will be set to 0's.

**Parameters:**

Name | Type | Description |
------ | ------ | ------ |
`rows` | [int](../modules/_types_opencv__hacks_.md#int) | Number of rows.  |
`cols` | [int](../modules/_types_opencv__hacks_.md#int) | Number of columns.  |
`type` | [int](../modules/_types_opencv__hacks_.md#int) | Created matrix type.  |

**Returns:** *[MatExpr](_types_opencv_matexpr_.matexpr.md)*

▸ **ones**(`size`: [Size](_types_opencv__hacks_.size.md), `type`: [int](../modules/_types_opencv__hacks_.md#int)): *[MatExpr](_types_opencv_matexpr_.matexpr.md)*

*Inherited from [Mat](_types_opencv_mat_.mat.md).[ones](_types_opencv_mat_.mat.md#static-ones)*

*Defined in [types/opencv/Mat.ts:1628](https://github.com/cancerberoSgx/mirada/blob/c8721d6/mirada/src/types/opencv/Mat.ts#L1628)*

  This is an overloaded member function, provided for convenience. It differs from the above
function only in what argument(s) it accepts.

**Parameters:**

Name | Type | Description |
------ | ------ | ------ |
`size` | [Size](_types_opencv__hacks_.size.md) | Alternative to the matrix size specification Size(cols, rows) .  |
`type` | [int](../modules/_types_opencv__hacks_.md#int) | Created matrix type.  |

**Returns:** *[MatExpr](_types_opencv_matexpr_.matexpr.md)*

▸ **ones**(`ndims`: [int](../modules/_types_opencv__hacks_.md#int), `sz`: any, `type`: [int](../modules/_types_opencv__hacks_.md#int)): *[MatExpr](_types_opencv_matexpr_.matexpr.md)*

*Inherited from [Mat](_types_opencv_mat_.mat.md).[ones](_types_opencv_mat_.mat.md#static-ones)*

*Defined in [types/opencv/Mat.ts:1640](https://github.com/cancerberoSgx/mirada/blob/c8721d6/mirada/src/types/opencv/Mat.ts#L1640)*

  This is an overloaded member function, provided for convenience. It differs from the above
function only in what argument(s) it accepts.

**Parameters:**

Name | Type | Description |
------ | ------ | ------ |
`ndims` | [int](../modules/_types_opencv__hacks_.md#int) | Array dimensionality.  |
`sz` | any | Array of integers specifying the array shape.  |
`type` | [int](../modules/_types_opencv__hacks_.md#int) | Created matrix type.  |

**Returns:** *[MatExpr](_types_opencv_matexpr_.matexpr.md)*

___

### `Static` setDefaultAllocator

▸ **setDefaultAllocator**(`allocator`: [MatAllocator](../modules/_types_opencv__hacks_.md#matallocator)): *[MatAllocator](../modules/_types_opencv__hacks_.md#matallocator)*

*Inherited from [Mat](_types_opencv_mat_.mat.md).[setDefaultAllocator](_types_opencv_mat_.mat.md#static-setdefaultallocator)*

*Defined in [types/opencv/Mat.ts:1642](https://github.com/cancerberoSgx/mirada/blob/c8721d6/mirada/src/types/opencv/Mat.ts#L1642)*

**Parameters:**

Name | Type |
------ | ------ |
`allocator` | [MatAllocator](../modules/_types_opencv__hacks_.md#matallocator) |

**Returns:** *[MatAllocator](../modules/_types_opencv__hacks_.md#matallocator)*

___

### `Static` zeros

▸ **zeros**(`rows`: [int](../modules/_types_opencv__hacks_.md#int), `cols`: [int](../modules/_types_opencv__hacks_.md#int), `type`: [int](../modules/_types_opencv__hacks_.md#int)): *[MatExpr](_types_opencv_matexpr_.matexpr.md)*

*Inherited from [Mat](_types_opencv_mat_.mat.md).[zeros](_types_opencv_mat_.mat.md#static-zeros)*

*Defined in [types/opencv/Mat.ts:1662](https://github.com/cancerberoSgx/mirada/blob/c8721d6/mirada/src/types/opencv/Mat.ts#L1662)*

  The method returns a Matlab-style zero array initializer. It can be used to quickly form a
constant array as a function parameter, part of a matrix expression, or as a matrix initializer:

  ```cpp
  Mat A;
  A = Mat::zeros(3, 3, CV_32F);
  ```

   In the example above, a new matrix is allocated only if A is not a 3x3 floating-point matrix.
Otherwise, the existing matrix A is filled with zeros.

**Parameters:**

Name | Type | Description |
------ | ------ | ------ |
`rows` | [int](../modules/_types_opencv__hacks_.md#int) | Number of rows.  |
`cols` | [int](../modules/_types_opencv__hacks_.md#int) | Number of columns.  |
`type` | [int](../modules/_types_opencv__hacks_.md#int) | Created matrix type.  |

**Returns:** *[MatExpr](_types_opencv_matexpr_.matexpr.md)*

▸ **zeros**(`size`: [Size](_types_opencv__hacks_.size.md), `type`: [int](../modules/_types_opencv__hacks_.md#int)): *[MatExpr](_types_opencv_matexpr_.matexpr.md)*

*Inherited from [Mat](_types_opencv_mat_.mat.md).[zeros](_types_opencv_mat_.mat.md#static-zeros)*

*Defined in [types/opencv/Mat.ts:1672](https://github.com/cancerberoSgx/mirada/blob/c8721d6/mirada/src/types/opencv/Mat.ts#L1672)*

  This is an overloaded member function, provided for convenience. It differs from the above
function only in what argument(s) it accepts.

**Parameters:**

Name | Type | Description |
------ | ------ | ------ |
`size` | [Size](_types_opencv__hacks_.size.md) | Alternative to the matrix size specification Size(cols, rows) .  |
`type` | [int](../modules/_types_opencv__hacks_.md#int) | Created matrix type.  |

**Returns:** *[MatExpr](_types_opencv_matexpr_.matexpr.md)*

▸ **zeros**(`ndims`: [int](../modules/_types_opencv__hacks_.md#int), `sz`: any, `type`: [int](../modules/_types_opencv__hacks_.md#int)): *[MatExpr](_types_opencv_matexpr_.matexpr.md)*

*Inherited from [Mat](_types_opencv_mat_.mat.md).[zeros](_types_opencv_mat_.mat.md#static-zeros)*

*Defined in [types/opencv/Mat.ts:1684](https://github.com/cancerberoSgx/mirada/blob/c8721d6/mirada/src/types/opencv/Mat.ts#L1684)*

  This is an overloaded member function, provided for convenience. It differs from the above
function only in what argument(s) it accepts.

**Parameters:**

Name | Type | Description |
------ | ------ | ------ |
`ndims` | [int](../modules/_types_opencv__hacks_.md#int) | Array dimensionality.  |
`sz` | any | Array of integers specifying the array shape.  |
`type` | [int](../modules/_types_opencv__hacks_.md#int) | Created matrix type.  |

**Returns:** *[MatExpr](_types_opencv_matexpr_.matexpr.md)*