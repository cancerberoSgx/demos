[mirada](../README.md) › ["types/opencv/PCA"](../modules/_types_opencv_pca_.md) › [PCA](_types_opencv_pca_.pca.md)

# Class: PCA


The class is used to calculate a special basis for a set of vectors. The basis will consist of
eigenvectors of the covariance matrix calculated from the input set of vectors. The class PCA can
also transform vectors to/from the new coordinate space defined by the basis. Usually, in this new
coordinate system, each vector from the original set (and any linear combination of such vectors)
can be quite accurately approximated by taking its first few components, corresponding to the
eigenvectors of the largest eigenvalues of the covariance matrix. Geometrically it means that you
calculate a projection of the vector to a subspace formed by a few eigenvectors corresponding to the
dominant eigenvalues of the covariance matrix. And usually such a projection is very close to the
original vector. So, you can represent the original vector from a high-dimensional space with a much
shorter vector consisting of the projected vector's coordinates in the subspace. Such a
transformation is also known as Karhunen-Loeve Transform, or KLT. See

The sample below is the function that takes two matrices. The first function stores a set of vectors
(a row per vector) that is used to calculate [PCA](#d3/d8d/classcv_1_1PCA}). The second function
stores another "test" set of vectors (a row per vector). First, these vectors are compressed with
[PCA](#d3/d8d/classcv_1_1PCA}), then reconstructed back, and then the reconstruction error norm is
computed and printed for each vector. :

```cpp
using namespace cv;

PCA compressPCA(const Mat& pcaset, int maxComponents,
                const Mat& testset, Mat& compressed)
{
    PCA pca(pcaset, // pass the data
            Mat(), // we do not have a pre-computed mean vector,
                   // so let the PCA engine to compute it
            PCA::DATA_AS_ROW, // indicate that the vectors
                                // are stored as matrix rows
                                // (use PCA::DATA_AS_COL if the vectors are
                                // the matrix columns)
            maxComponents // specify, how many principal components to retain
            );
    // if there is no test data, just return the computed basis, ready-to-use
    if( !testset.data )
        return pca;
    CV_Assert( testset.cols == pcaset.cols );

    compressed.create(testset.rows, maxComponents, testset.type());

    Mat reconstructed;
    for( int i = 0; i < testset.rows; i++ )
    {
        Mat vec = testset.row(i), coeffs = compressed.row(i), reconstructed;
        // compress the vector, the result will be stored
        // in the i-th row of the output matrix
        pca.project(vec, coeffs);
        // and then reconstruct it
        pca.backProject(coeffs, reconstructed);
        // and measure the error
        printf("%d. diff = %g\\n", i, norm(vec, reconstructed, NORM_L2));
    }
    return pca;
}
```

[calcCovarMatrix](#d2/de8/group__core__array_1gae6ffa9354633f984246945d52823165d}),
[mulTransposed](#d2/de8/group__core__array_1gadc4e49f8f7a155044e3be1b9e3b270ab}),
[SVD](#df/df7/classcv_1_1SVD}),
[dft](#d2/de8/group__core__array_1gadd6cf9baf2b8b704a11b5f04aaf4f39d}),
[dct](#d2/de8/group__core__array_1ga85aad4d668c01fbd64825f589e3696d4})

Source:
[opencv2/core.hpp](https://github.com/opencv/opencv/tree/master/modules/core/include/opencv2/core.hpp#L2393).

## Hierarchy

* **PCA**

## Index

### Constructors

* [constructor](_types_opencv_pca_.pca.md#constructor)

### Properties

* [eigenvalues](_types_opencv_pca_.pca.md#eigenvalues)
* [eigenvectors](_types_opencv_pca_.pca.md#eigenvectors)
* [mean](_types_opencv_pca_.pca.md#mean)

### Methods

* [backProject](_types_opencv_pca_.pca.md#backproject)
* [project](_types_opencv_pca_.pca.md#project)
* [read](_types_opencv_pca_.pca.md#read)
* [write](_types_opencv_pca_.pca.md#write)

## Constructors

###  constructor

\+ **new PCA**(): *[PCA](_types_opencv_pca_.pca.md)*

*Defined in [types/opencv/PCA.ts:77](https://github.com/cancerberoSgx/mirada/blob/2aa7cf1/mirada/src/types/opencv/PCA.ts#L77)*

  The default constructor initializes an empty PCA structure. The other constructors initialize the
structure and call [PCA::operator()()].

**Returns:** *[PCA](_types_opencv_pca_.pca.md)*

\+ **new PCA**(`data`: [InputArray](../modules/_types_opencv__hacks_.md#inputarray), `mean`: [InputArray](../modules/_types_opencv__hacks_.md#inputarray), `flags`: [int](../modules/_types_opencv__hacks_.md#int), `maxComponents?`: [int](../modules/_types_opencv__hacks_.md#int)): *[PCA](_types_opencv_pca_.pca.md)*

*Defined in [types/opencv/PCA.ts:83](https://github.com/cancerberoSgx/mirada/blob/2aa7cf1/mirada/src/types/opencv/PCA.ts#L83)*

  This is an overloaded member function, provided for convenience. It differs from the above
function only in what argument(s) it accepts.

**Parameters:**

Name | Type | Description |
------ | ------ | ------ |
`data` | [InputArray](../modules/_types_opencv__hacks_.md#inputarray) | input samples stored as matrix rows or matrix columns.  |
`mean` | [InputArray](../modules/_types_opencv__hacks_.md#inputarray) | optional mean value; if the matrix is empty (noArray()), the mean is computed from the data.  |
`flags` | [int](../modules/_types_opencv__hacks_.md#int) | operation flags; currently the parameter is only used to specify the data layout (PCA::Flags)  |
`maxComponents?` | [int](../modules/_types_opencv__hacks_.md#int) | maximum number of components that PCA should retain; by default, all the components are retained.  |

**Returns:** *[PCA](_types_opencv_pca_.pca.md)*

\+ **new PCA**(`data`: [InputArray](../modules/_types_opencv__hacks_.md#inputarray), `mean`: [InputArray](../modules/_types_opencv__hacks_.md#inputarray), `flags`: [int](../modules/_types_opencv__hacks_.md#int), `retainedVariance`: [double](../modules/_types_opencv__hacks_.md#double)): *[PCA](_types_opencv_pca_.pca.md)*

*Defined in [types/opencv/PCA.ts:100](https://github.com/cancerberoSgx/mirada/blob/2aa7cf1/mirada/src/types/opencv/PCA.ts#L100)*

  This is an overloaded member function, provided for convenience. It differs from the above
function only in what argument(s) it accepts.

**Parameters:**

Name | Type | Description |
------ | ------ | ------ |
`data` | [InputArray](../modules/_types_opencv__hacks_.md#inputarray) | input samples stored as matrix rows or matrix columns.  |
`mean` | [InputArray](../modules/_types_opencv__hacks_.md#inputarray) | optional mean value; if the matrix is empty (noArray()), the mean is computed from the data.  |
`flags` | [int](../modules/_types_opencv__hacks_.md#int) | operation flags; currently the parameter is only used to specify the data layout (PCA::Flags)  |
`retainedVariance` | [double](../modules/_types_opencv__hacks_.md#double) | Percentage of variance that PCA should retain. Using this parameter will let the PCA decided how many components to retain but it will always keep at least 2.  |

**Returns:** *[PCA](_types_opencv_pca_.pca.md)*

## Properties

###  eigenvalues

• **eigenvalues**: *[Mat](_types_opencv_mat_.mat.md)*

*Defined in [types/opencv/PCA.ts:73](https://github.com/cancerberoSgx/mirada/blob/2aa7cf1/mirada/src/types/opencv/PCA.ts#L73)*

___

###  eigenvectors

• **eigenvectors**: *[Mat](_types_opencv_mat_.mat.md)*

*Defined in [types/opencv/PCA.ts:75](https://github.com/cancerberoSgx/mirada/blob/2aa7cf1/mirada/src/types/opencv/PCA.ts#L75)*

___

###  mean

• **mean**: *[Mat](_types_opencv_mat_.mat.md)*

*Defined in [types/opencv/PCA.ts:77](https://github.com/cancerberoSgx/mirada/blob/2aa7cf1/mirada/src/types/opencv/PCA.ts#L77)*

## Methods

###  backProject

▸ **backProject**(`vec`: [InputArray](../modules/_types_opencv__hacks_.md#inputarray)): *[Mat](_types_opencv_mat_.mat.md)*

*Defined in [types/opencv/PCA.ts:129](https://github.com/cancerberoSgx/mirada/blob/2aa7cf1/mirada/src/types/opencv/PCA.ts#L129)*

  The methods are inverse operations to [PCA::project]. They take PC coordinates of projected
vectors and reconstruct the original vectors. Unless all the principal components have been
retained, the reconstructed vectors are different from the originals. But typically, the difference
is small if the number of components is large enough (but still much smaller than the original
vector dimensionality). As a result, [PCA] is used.

**Parameters:**

Name | Type | Description |
------ | ------ | ------ |
`vec` | [InputArray](../modules/_types_opencv__hacks_.md#inputarray) | coordinates of the vectors in the principal component subspace, the layout and size are the same as of PCA::project output vectors.  |

**Returns:** *[Mat](_types_opencv_mat_.mat.md)*

▸ **backProject**(`vec`: [InputArray](../modules/_types_opencv__hacks_.md#inputarray), `result`: OutputArray): *[InputArray](../modules/_types_opencv__hacks_.md#inputarray)*

*Defined in [types/opencv/PCA.ts:141](https://github.com/cancerberoSgx/mirada/blob/2aa7cf1/mirada/src/types/opencv/PCA.ts#L141)*

  This is an overloaded member function, provided for convenience. It differs from the above
function only in what argument(s) it accepts.

**Parameters:**

Name | Type | Description |
------ | ------ | ------ |
`vec` | [InputArray](../modules/_types_opencv__hacks_.md#inputarray) | coordinates of the vectors in the principal component subspace, the layout and size are the same as of PCA::project output vectors.  |
`result` | OutputArray | reconstructed vectors; the layout and size are the same as of PCA::project input vectors.  |

**Returns:** *[InputArray](../modules/_types_opencv__hacks_.md#inputarray)*

___

###  project

▸ **project**(`vec`: [InputArray](../modules/_types_opencv__hacks_.md#inputarray)): *[Mat](_types_opencv_mat_.mat.md)*

*Defined in [types/opencv/PCA.ts:154](https://github.com/cancerberoSgx/mirada/blob/2aa7cf1/mirada/src/types/opencv/PCA.ts#L154)*

  The methods project one or more vectors to the principal component subspace, where each vector
projection is represented by coefficients in the principal component basis. The first form of the
method returns the matrix that the second form writes to the result. So the first form can be used
as a part of expression while the second form can be more efficient in a processing loop.

**Parameters:**

Name | Type | Description |
------ | ------ | ------ |
`vec` | [InputArray](../modules/_types_opencv__hacks_.md#inputarray) | input vector(s); must have the same dimensionality and the same layout as the input data used at PCA phase, that is, if DATA_AS_ROW are specified, then vec.cols==data.cols (vector dimensionality) and vec.rows is the number of vectors to project, and the same is true for the PCA::DATA_AS_COL case.  |

**Returns:** *[Mat](_types_opencv_mat_.mat.md)*

▸ **project**(`vec`: [InputArray](../modules/_types_opencv__hacks_.md#inputarray), `result`: OutputArray): *[InputArray](../modules/_types_opencv__hacks_.md#inputarray)*

*Defined in [types/opencv/PCA.ts:169](https://github.com/cancerberoSgx/mirada/blob/2aa7cf1/mirada/src/types/opencv/PCA.ts#L169)*

  This is an overloaded member function, provided for convenience. It differs from the above
function only in what argument(s) it accepts.

**Parameters:**

Name | Type | Description |
------ | ------ | ------ |
`vec` | [InputArray](../modules/_types_opencv__hacks_.md#inputarray) | input vector(s); must have the same dimensionality and the same layout as the input data used at PCA phase, that is, if DATA_AS_ROW are specified, then vec.cols==data.cols (vector dimensionality) and vec.rows is the number of vectors to project, and the same is true for the PCA::DATA_AS_COL case.  |
`result` | OutputArray | output vectors; in case of PCA::DATA_AS_COL, the output matrix has as many columns as the number of input vectors, this means that result.cols==vec.cols and the number of rows match the number of principal components (for example, maxComponents parameter passed to the constructor).  |

**Returns:** *[InputArray](../modules/_types_opencv__hacks_.md#inputarray)*

___

###  read

▸ **read**(`fn`: [FileNode](../modules/_types_opencv__hacks_.md#filenode)): *[FileNode](../modules/_types_opencv__hacks_.md#filenode)*

*Defined in [types/opencv/PCA.ts:174](https://github.com/cancerberoSgx/mirada/blob/2aa7cf1/mirada/src/types/opencv/PCA.ts#L174)*

  Loads [eigenvalues] [eigenvectors] and [mean] from specified [FileNode]

**Parameters:**

Name | Type |
------ | ------ |
`fn` | [FileNode](../modules/_types_opencv__hacks_.md#filenode) |

**Returns:** *[FileNode](../modules/_types_opencv__hacks_.md#filenode)*

___

###  write

▸ **write**(`fs`: [FileStorage](../modules/_types_opencv__hacks_.md#filestorage)): *[FileStorage](../modules/_types_opencv__hacks_.md#filestorage)*

*Defined in [types/opencv/PCA.ts:179](https://github.com/cancerberoSgx/mirada/blob/2aa7cf1/mirada/src/types/opencv/PCA.ts#L179)*

  Writes [eigenvalues] [eigenvectors] and [mean] to specified [FileStorage]

**Parameters:**

Name | Type |
------ | ------ |
`fs` | [FileStorage](../modules/_types_opencv__hacks_.md#filestorage) |

**Returns:** *[FileStorage](../modules/_types_opencv__hacks_.md#filestorage)*