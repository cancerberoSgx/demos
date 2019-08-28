**[mirada](../README.md)**

[Globals](../README.md) › ["types/opencv/core_cluster"](_types_opencv_core_cluster_.md)

# External module: "types/opencv/core_cluster"

## Index

### Functions

* [kmeans](_types_opencv_core_cluster_.md#kmeans)
* [partition](_types_opencv_core_cluster_.md#partition)

## Functions

###  kmeans

▸ **kmeans**(`data`: InputArray, `K`: [int](_types_opencv__hacks_.md#int), `bestLabels`: InputOutputArray, `criteria`: [TermCriteria](../classes/_types_opencv__hacks_.termcriteria.md), `attempts`: [int](_types_opencv__hacks_.md#int), `flags`: [int](_types_opencv__hacks_.md#int), `centers?`: OutputArray): *[double](_types_opencv__hacks_.md#double)*

The function kmeans implements a k-means algorithm that finds the centers of cluster_count clusters
and groups the input samples around the clusters. As an output, `$\\texttt{bestLabels}_i$` contains
a 0-based cluster index for the sample stored in the `$i^{th}$` row of the samples matrix.

(Python) An example on K-means clustering can be found at
opencv_source_code/samples/python/kmeans.py

The function returns the compactness measure that is computed as `\\[\\sum _i \\| \\texttt{samples}
_i - \\texttt{centers} _{ \\texttt{labels} _i} \\| ^2\\]` after every attempt. The best (minimum)
value is chosen and the corresponding labels and the compactness value are returned by the function.
Basically, you can use only the core of the function, set the number of attempts to 1, initialize
labels each time using a custom algorithm, pass them with the ( flags = [KMEANS_USE_INITIAL_LABELS]
) flag, and then choose the best (most-compact) clustering.

**Parameters:**

Name | Type | Description |
------ | ------ | ------ |
`data` | InputArray | Data for clustering. An array of N-Dimensional points with float coordinates is needed. Examples of this array can be: Mat points(count, 2, CV_32F);Mat points(count, 1, CV_32FC2);Mat points(1, count, CV_32FC2);std::vector<cv::Point2f> points(sampleCount);  |
`K` | [int](_types_opencv__hacks_.md#int) | Number of clusters to split the set by.  |
`bestLabels` | InputOutputArray | Input/output integer array that stores the cluster indices for every sample.  |
`criteria` | [TermCriteria](../classes/_types_opencv__hacks_.termcriteria.md) | The algorithm termination criteria, that is, the maximum number of iterations and/or the desired accuracy. The accuracy is specified as criteria.epsilon. As soon as each of the cluster centers moves by less than criteria.epsilon on some iteration, the algorithm stops.  |
`attempts` | [int](_types_opencv__hacks_.md#int) | Flag to specify the number of times the algorithm is executed using different initial labellings. The algorithm returns the labels that yield the best compactness (see the last function parameter).  |
`flags` | [int](_types_opencv__hacks_.md#int) | Flag that can take values of cv::KmeansFlags  |
`centers?` | OutputArray | Output matrix of the cluster centers, one row per each cluster center.  |

**Returns:** *[double](_types_opencv__hacks_.md#double)*

___

###  partition

▸ **partition**(`arg119`: any, `arg120`: any, `_vec`: any, `labels`: any, `predicate?`: [_EqPredicate](_types_opencv__hacks_.md#_eqpredicate)): *any*

The generic function partition implements an `$O(N^2)$` algorithm for splitting a set of `$N$`
elements into one or more equivalency classes, as described in  . The function returns the number of
equivalency classes.

**Parameters:**

Name | Type | Description |
------ | ------ | ------ |
`arg119` | any | - |
`arg120` | any | - |
`_vec` | any | Set of elements stored as a vector.  |
`labels` | any | Output vector of labels. It contains as many elements as vec. Each label labels[i] is a 0-based cluster index of vec[i].  |
`predicate?` | [_EqPredicate](_types_opencv__hacks_.md#_eqpredicate) | Equivalence predicate (pointer to a boolean function of two arguments or an instance of the class that has the method bool operator()(const _Tp& a, const _Tp& b) ). The predicate returns true when the elements are certainly in the same class, and returns false if they may or may not be in the same class.  |

**Returns:** *any*