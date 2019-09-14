[mirada](../README.md) › ["types/opencv/Algorithm"](../modules/_types_opencv_algorithm_.md) › [Algorithm](_types_opencv_algorithm_.algorithm.md)

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

* [EmscriptenEmbindInstance](_types_opencv__hacks_.emscriptenembindinstance.md)

  ↳ **Algorithm**

  ↳ [CLAHE](_types_opencv__hacks_.clahe.md)

## Index

### Constructors

* [constructor](_types_opencv_algorithm_.algorithm.md#constructor)

### Methods

* [clear](_types_opencv_algorithm_.algorithm.md#clear)
* [clone](_types_opencv_algorithm_.algorithm.md#clone)
* [delete](_types_opencv_algorithm_.algorithm.md#delete)
* [deleteLater](_types_opencv_algorithm_.algorithm.md#deletelater)
* [empty](_types_opencv_algorithm_.algorithm.md#empty)
* [getDefaultName](_types_opencv_algorithm_.algorithm.md#getdefaultname)
* [isAliasOf](_types_opencv_algorithm_.algorithm.md#isaliasof)
* [isDeleted](_types_opencv_algorithm_.algorithm.md#isdeleted)
* [read](_types_opencv_algorithm_.algorithm.md#read)
* [save](_types_opencv_algorithm_.algorithm.md#save)
* [write](_types_opencv_algorithm_.algorithm.md#write)
* [load](_types_opencv_algorithm_.algorithm.md#static-load)
* [loadFromString](_types_opencv_algorithm_.algorithm.md#static-loadfromstring)
* [read](_types_opencv_algorithm_.algorithm.md#static-read)

## Constructors

###  constructor

\+ **new Algorithm**(): *[Algorithm](_types_opencv_algorithm_.algorithm.md)*

*Defined in [types/opencv/Algorithm.ts:49](https://github.com/cancerberoSgx/mirada/blob/f0c0267/mirada/src/types/opencv/Algorithm.ts#L49)*

**Returns:** *[Algorithm](_types_opencv_algorithm_.algorithm.md)*

## Methods

###  clear

▸ **clear**(): *void*

*Defined in [types/opencv/Algorithm.ts:53](https://github.com/cancerberoSgx/mirada/blob/f0c0267/mirada/src/types/opencv/Algorithm.ts#L53)*

**Returns:** *void*

___

###  clone

▸ **clone**(...`a`: any[]): *any*

*Inherited from [EmscriptenEmbindInstance](_types_opencv__hacks_.emscriptenembindinstance.md).[clone](_types_opencv__hacks_.emscriptenembindinstance.md#clone)*

*Defined in [types/opencv/_hacks.ts:120](https://github.com/cancerberoSgx/mirada/blob/f0c0267/mirada/src/types/opencv/_hacks.ts#L120)*

**Parameters:**

Name | Type |
------ | ------ |
`...a` | any[] |

**Returns:** *any*

___

###  delete

▸ **delete**(...`a`: any[]): *any*

*Inherited from [EmscriptenEmbindInstance](_types_opencv__hacks_.emscriptenembindinstance.md).[delete](_types_opencv__hacks_.emscriptenembindinstance.md#delete)*

*Defined in [types/opencv/_hacks.ts:121](https://github.com/cancerberoSgx/mirada/blob/f0c0267/mirada/src/types/opencv/_hacks.ts#L121)*

**Parameters:**

Name | Type |
------ | ------ |
`...a` | any[] |

**Returns:** *any*

___

###  deleteLater

▸ **deleteLater**(...`a`: any[]): *any*

*Inherited from [EmscriptenEmbindInstance](_types_opencv__hacks_.emscriptenembindinstance.md).[deleteLater](_types_opencv__hacks_.emscriptenembindinstance.md#deletelater)*

*Defined in [types/opencv/_hacks.ts:123](https://github.com/cancerberoSgx/mirada/blob/f0c0267/mirada/src/types/opencv/_hacks.ts#L123)*

**Parameters:**

Name | Type |
------ | ------ |
`...a` | any[] |

**Returns:** *any*

___

###  empty

▸ **empty**(): *[bool](../modules/_types_opencv__hacks_.md#bool)*

*Defined in [types/opencv/Algorithm.ts:55](https://github.com/cancerberoSgx/mirada/blob/f0c0267/mirada/src/types/opencv/Algorithm.ts#L55)*

**Returns:** *[bool](../modules/_types_opencv__hacks_.md#bool)*

___

###  getDefaultName

▸ **getDefaultName**(): *String*

*Defined in [types/opencv/Algorithm.ts:61](https://github.com/cancerberoSgx/mirada/blob/f0c0267/mirada/src/types/opencv/Algorithm.ts#L61)*

  Returns the algorithm string identifier. This string is used as top level xml/yml node tag when
the object is saved to a file or string.

**Returns:** *String*

___

###  isAliasOf

▸ **isAliasOf**(...`a`: any[]): *any*

*Inherited from [EmscriptenEmbindInstance](_types_opencv__hacks_.emscriptenembindinstance.md).[isAliasOf](_types_opencv__hacks_.emscriptenembindinstance.md#isaliasof)*

*Defined in [types/opencv/_hacks.ts:119](https://github.com/cancerberoSgx/mirada/blob/f0c0267/mirada/src/types/opencv/_hacks.ts#L119)*

**Parameters:**

Name | Type |
------ | ------ |
`...a` | any[] |

**Returns:** *any*

___

###  isDeleted

▸ **isDeleted**(...`a`: any[]): *any*

*Inherited from [EmscriptenEmbindInstance](_types_opencv__hacks_.emscriptenembindinstance.md).[isDeleted](_types_opencv__hacks_.emscriptenembindinstance.md#isdeleted)*

*Defined in [types/opencv/_hacks.ts:122](https://github.com/cancerberoSgx/mirada/blob/f0c0267/mirada/src/types/opencv/_hacks.ts#L122)*

**Parameters:**

Name | Type |
------ | ------ |
`...a` | any[] |

**Returns:** *any*

___

###  read

▸ **read**(`fn`: [FileNode](../modules/_types_opencv__hacks_.md#filenode)): *[FileNode](../modules/_types_opencv__hacks_.md#filenode)*

*Defined in [types/opencv/Algorithm.ts:63](https://github.com/cancerberoSgx/mirada/blob/f0c0267/mirada/src/types/opencv/Algorithm.ts#L63)*

**Parameters:**

Name | Type |
------ | ------ |
`fn` | [FileNode](../modules/_types_opencv__hacks_.md#filenode) |

**Returns:** *[FileNode](../modules/_types_opencv__hacks_.md#filenode)*

___

###  save

▸ **save**(`filename`: String): *String*

*Defined in [types/opencv/Algorithm.ts:69](https://github.com/cancerberoSgx/mirada/blob/f0c0267/mirada/src/types/opencv/Algorithm.ts#L69)*

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

*Defined in [types/opencv/Algorithm.ts:71](https://github.com/cancerberoSgx/mirada/blob/f0c0267/mirada/src/types/opencv/Algorithm.ts#L71)*

**Parameters:**

Name | Type |
------ | ------ |
`fs` | [FileStorage](../modules/_types_opencv__hacks_.md#filestorage) |

**Returns:** *[FileStorage](../modules/_types_opencv__hacks_.md#filestorage)*

▸ **write**(`fs`: [Ptr](../modules/_types_opencv__hacks_.md#ptr), `name?`: String): *[Ptr](../modules/_types_opencv__hacks_.md#ptr)*

*Defined in [types/opencv/Algorithm.ts:73](https://github.com/cancerberoSgx/mirada/blob/f0c0267/mirada/src/types/opencv/Algorithm.ts#L73)*

**Parameters:**

Name | Type |
------ | ------ |
`fs` | [Ptr](../modules/_types_opencv__hacks_.md#ptr) |
`name?` | String |

**Returns:** *[Ptr](../modules/_types_opencv__hacks_.md#ptr)*

___

### `Static` load

▸ **load**(`arg0`: any, `filename`: String, `objname?`: String): *[Ptr](../modules/_types_opencv__hacks_.md#ptr)*

*Defined in [types/opencv/Algorithm.ts:90](https://github.com/cancerberoSgx/mirada/blob/f0c0267/mirada/src/types/opencv/Algorithm.ts#L90)*

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

*Defined in [types/opencv/Algorithm.ts:104](https://github.com/cancerberoSgx/mirada/blob/f0c0267/mirada/src/types/opencv/Algorithm.ts#L104)*

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

*Defined in [types/opencv/Algorithm.ts:118](https://github.com/cancerberoSgx/mirada/blob/f0c0267/mirada/src/types/opencv/Algorithm.ts#L118)*

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