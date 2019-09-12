**[mirada](../README.md)**

[Globals](../README.md) › ["types/opencv/Algorithm"](../modules/_types_opencv_algorithm_.md) › [Algorithm](_types_opencv_algorithm_.algorithm.md)

# Class: Algorithm

especially for classes of algorithms, for which there can be multiple implementations. The examples
are stereo correspondence (for which there are algorithms like block matching, semi-global block
matching, graph-cut etc.), background subtraction (which can be done using mixture-of-gaussians
models, codebook-based algorithm etc.), optical flow (block matching, Lucas-Kanade, Horn-Schunck
etc.).

Here is example of [SimpleBlobDetector](#d0/d7a/classcv_1_1SimpleBlobDetector}) use in your
application via [Algorithm](#d3/d46/classcv_1_1Algorithm}) interface:

```cpp
    Ptr<Feature2D> sbd = SimpleBlobDetector::create();
    FileStorage fs_read("SimpleBlobDetector_params.xml", FileStorage::READ);

    if (fs_read.isOpened()) // if we have file with parameters, read them
    {
        sbd->read(fs_read.root());
        fs_read.release();
    }
    else // else modify the parameters and store them; user can later edit the file to use different
parameters
    {
        fs_read.release();
        FileStorage fs_write("SimpleBlobDetector_params.xml", FileStorage::WRITE);
        sbd->write(fs_write);
        fs_write.release();
    }

    Mat result, image = imread("../data/detect_blob.png", IMREAD_COLOR);
    vector<KeyPoint> keypoints;
    sbd->detect(image, keypoints, Mat());

    drawKeypoints(image, keypoints, result);
    for (vector<KeyPoint>::iterator k = keypoints.begin(); k != keypoints.end(); ++k)
        circle(result, k->pt, (int)k->size, Scalar(0, 0, 255), 2);

    imshow("result", result);
    waitKey(0);
```

Source:
[opencv2/core.hpp](https://github.com/opencv/opencv/tree/master/modules/core/include/opencv2/core.hpp#L3077).

## Hierarchy

* **Algorithm**

  * [CLAHE](_types_opencv__hacks_.clahe.md)

## Index

### Constructors

* [constructor](_types_opencv_algorithm_.algorithm.md#constructor)

### Methods

* [clear](_types_opencv_algorithm_.algorithm.md#clear)
* [empty](_types_opencv_algorithm_.algorithm.md#empty)
* [getDefaultName](_types_opencv_algorithm_.algorithm.md#getdefaultname)
* [read](_types_opencv_algorithm_.algorithm.md#read)
* [save](_types_opencv_algorithm_.algorithm.md#save)
* [write](_types_opencv_algorithm_.algorithm.md#write)
* [load](_types_opencv_algorithm_.algorithm.md#static-load)
* [loadFromString](_types_opencv_algorithm_.algorithm.md#static-loadfromstring)
* [read](_types_opencv_algorithm_.algorithm.md#static-read)

## Constructors

###  constructor

\+ **new Algorithm**(): *[Algorithm](_types_opencv_algorithm_.algorithm.md)*

*Defined in [types/opencv/Algorithm.ts:48](https://github.com/cancerberoSgx/mirada/blob/f2ba50d/mirada/src/types/opencv/Algorithm.ts#L48)*

**Returns:** *[Algorithm](_types_opencv_algorithm_.algorithm.md)*

## Methods

###  clear

▸ **clear**(): *void*

*Defined in [types/opencv/Algorithm.ts:52](https://github.com/cancerberoSgx/mirada/blob/f2ba50d/mirada/src/types/opencv/Algorithm.ts#L52)*

**Returns:** *void*

___

###  empty

▸ **empty**(): *[bool](../modules/_types_opencv__hacks_.md#bool)*

*Defined in [types/opencv/Algorithm.ts:54](https://github.com/cancerberoSgx/mirada/blob/f2ba50d/mirada/src/types/opencv/Algorithm.ts#L54)*

**Returns:** *[bool](../modules/_types_opencv__hacks_.md#bool)*

___

###  getDefaultName

▸ **getDefaultName**(): *String*

*Defined in [types/opencv/Algorithm.ts:60](https://github.com/cancerberoSgx/mirada/blob/f2ba50d/mirada/src/types/opencv/Algorithm.ts#L60)*

  Returns the algorithm string identifier. This string is used as top level xml/yml node tag when
the object is saved to a file or string.

**Returns:** *String*

___

###  read

▸ **read**(`fn`: [FileNode](../modules/_types_opencv__hacks_.md#filenode)): *[FileNode](../modules/_types_opencv__hacks_.md#filenode)*

*Defined in [types/opencv/Algorithm.ts:62](https://github.com/cancerberoSgx/mirada/blob/f2ba50d/mirada/src/types/opencv/Algorithm.ts#L62)*

**Parameters:**

Name | Type |
------ | ------ |
`fn` | [FileNode](../modules/_types_opencv__hacks_.md#filenode) |

**Returns:** *[FileNode](../modules/_types_opencv__hacks_.md#filenode)*

___

###  save

▸ **save**(`filename`: String): *String*

*Defined in [types/opencv/Algorithm.ts:68](https://github.com/cancerberoSgx/mirada/blob/f2ba50d/mirada/src/types/opencv/Algorithm.ts#L68)*

  Saves the algorithm to a file. In order to make this method work, the derived class must implement
Algorithm::write(FileStorage& fs).

**Parameters:**

Name | Type |
------ | ------ |
`filename` | String |

**Returns:** *String*

___

###  write

▸ **write**(`fs`: [FileStorage](../modules/_types_opencv__hacks_.md#filestorage)): *[FileStorage](../modules/_types_opencv__hacks_.md#filestorage)*

*Defined in [types/opencv/Algorithm.ts:70](https://github.com/cancerberoSgx/mirada/blob/f2ba50d/mirada/src/types/opencv/Algorithm.ts#L70)*

**Parameters:**

Name | Type |
------ | ------ |
`fs` | [FileStorage](../modules/_types_opencv__hacks_.md#filestorage) |

**Returns:** *[FileStorage](../modules/_types_opencv__hacks_.md#filestorage)*

▸ **write**(`fs`: [Ptr](../modules/_types_opencv__hacks_.md#ptr), `name?`: String): *[Ptr](../modules/_types_opencv__hacks_.md#ptr)*

*Defined in [types/opencv/Algorithm.ts:72](https://github.com/cancerberoSgx/mirada/blob/f2ba50d/mirada/src/types/opencv/Algorithm.ts#L72)*

**Parameters:**

Name | Type |
------ | ------ |
`fs` | [Ptr](../modules/_types_opencv__hacks_.md#ptr) |
`name?` | String |

**Returns:** *[Ptr](../modules/_types_opencv__hacks_.md#ptr)*

___

### `Static` load

▸ **load**(`arg0`: any, `filename`: String, `objname?`: String): *[Ptr](../modules/_types_opencv__hacks_.md#ptr)*

*Defined in [types/opencv/Algorithm.ts:89](https://github.com/cancerberoSgx/mirada/blob/f2ba50d/mirada/src/types/opencv/Algorithm.ts#L89)*

  This is static template method of [Algorithm]. It's usage is following (in the case of SVM):

  ```cpp
  Ptr<SVM> svm = Algorithm::load<SVM>("my_svm_model.xml");
  ```

   In order to make this method work, the derived class must overwrite [Algorithm::read](const
[FileNode]& fn).

**Parameters:**

Name | Type | Description |
------ | ------ | ------ |
`arg0` | any | - |
`filename` | String | Name of the file to read.  |
`objname?` | String | The optional name of the node to read (if empty, the first top-level node will be used)  |

**Returns:** *[Ptr](../modules/_types_opencv__hacks_.md#ptr)*

___

### `Static` loadFromString

▸ **loadFromString**(`arg1`: any, `strModel`: String, `objname?`: String): *[Ptr](../modules/_types_opencv__hacks_.md#ptr)*

*Defined in [types/opencv/Algorithm.ts:103](https://github.com/cancerberoSgx/mirada/blob/f2ba50d/mirada/src/types/opencv/Algorithm.ts#L103)*

  This is static template method of [Algorithm]. It's usage is following (in the case of SVM):

  ```cpp
  Ptr<SVM> svm = Algorithm::loadFromString<SVM>(myStringModel);
  ```

**Parameters:**

Name | Type | Description |
------ | ------ | ------ |
`arg1` | any | - |
`strModel` | String | The string variable containing the model you want to load.  |
`objname?` | String | The optional name of the node to read (if empty, the first top-level node will be used)  |

**Returns:** *[Ptr](../modules/_types_opencv__hacks_.md#ptr)*

___

### `Static` read

▸ **read**(`arg2`: any, `fn`: [FileNode](../modules/_types_opencv__hacks_.md#filenode)): *[Ptr](../modules/_types_opencv__hacks_.md#ptr)*

*Defined in [types/opencv/Algorithm.ts:117](https://github.com/cancerberoSgx/mirada/blob/f2ba50d/mirada/src/types/opencv/Algorithm.ts#L117)*

  This is static template method of [Algorithm]. It's usage is following (in the case of SVM):

  ```cpp
  cv::FileStorage fsRead("example.xml", FileStorage::READ);
  Ptr<SVM> svm = Algorithm::read<SVM>(fsRead.root());
  ```

   In order to make this method work, the derived class must overwrite [Algorithm::read](const
[FileNode]& fn) and also have static create() method without parameters (or with all the optional
parameters)

**Parameters:**

Name | Type |
------ | ------ |
`arg2` | any |
`fn` | [FileNode](../modules/_types_opencv__hacks_.md#filenode) |

**Returns:** *[Ptr](../modules/_types_opencv__hacks_.md#ptr)*