**[mirada](../README.md)**

[Globals](../README.md) › ["types/opencv/Affine3"](../modules/_types_opencv_affine3_.md) › [Affine3](_types_opencv_affine3_.affine3.md)

# Class: Affine3

It represents a 4x4 homogeneous transformation matrix `$T$`

`\\[T = \\begin{bmatrix} R & t\\\\ 0 & 1\\\\ \\end{bmatrix} \\]`

where `$R$` is a 3x3 rotation matrix and `$t$` is a 3x1 translation vector.

You can specify `$R$` either by a 3x3 rotation matrix or by a 3x1 rotation vector, which is
converted to a 3x3 rotation matrix by the Rodrigues formula.

To construct a matrix `$T$` representing first rotation around the axis `$r$` with rotation angle
`$|r|$` in radian (right hand rule) and then translation by the vector `$t$`, you can use

```cpp
cv::Vec3f r, t;
cv::Affine3f T(r, t);
```

If you already have the rotation matrix `$R$`, then you can use

```cpp
cv::Matx33f R;
cv::Affine3f T(R, t);
```

To extract the rotation matrix `$R$` from `$T$`, use

```cpp
cv::Matx33f R = T.rotation();
```

To extract the translation vector `$t$` from `$T$`, use

```cpp
cv::Vec3f t = T.translation();
```

To extract the rotation vector `$r$` from `$T$`, use

```cpp
cv::Vec3f r = T.rvec();
```

Note that since the mapping from rotation vectors to rotation matrices is many to one. The returned
rotation vector is not necessarily the one you used before to set the matrix.

If you have two transformations `$T = T_1 * T_2$`, use

```cpp
cv::Affine3f T, T1, T2;
T = T2.concatenate(T1);
```

To get the inverse transform of `$T$`, use

```cpp
cv::Affine3f T, T_inv;
T_inv = T.inv();
```

Source:
[opencv2/core/affine.hpp](https://github.com/opencv/opencv/tree/master/modules/core/include/opencv2/core/affine.hpp#L129).

## Hierarchy

* **Affine3**

## Index

### Constructors

* [constructor](_types_opencv_affine3_.affine3.md#constructor)

### Properties

* [matrix](_types_opencv_affine3_.affine3.md#matrix)

### Methods

* [cast](_types_opencv_affine3_.affine3.md#cast)
* [concatenate](_types_opencv_affine3_.affine3.md#concatenate)
* [inv](_types_opencv_affine3_.affine3.md#inv)
* [linear](_types_opencv_affine3_.affine3.md#linear)
* [rotate](_types_opencv_affine3_.affine3.md#rotate)
* [rotation](_types_opencv_affine3_.affine3.md#rotation)
* [rvec](_types_opencv_affine3_.affine3.md#rvec)
* [translate](_types_opencv_affine3_.affine3.md#translate)
* [translation](_types_opencv_affine3_.affine3.md#translation)
* [Identity](_types_opencv_affine3_.affine3.md#static-identity)

## Constructors

###  constructor

\+ **new Affine3**(): *[Affine3](_types_opencv_affine3_.affine3.md)*

*Defined in [types/opencv/Affine3.ts:70](https://github.com/cancerberoSgx/mirada/blob/eecc091/mirada/src/types/opencv/Affine3.ts#L70)*

  The resulting 4x4 matrix is
  Rodrigues vector.
  Combines all constructors above. Supports 4x4, 3x4, 3x3, 1x3, 3x1 sizes of data matrix.

  `\\[ \\begin{bmatrix} R & t\\\\ 0 & 1\\\\ \\end{bmatrix} \\]`

  The last row of the current matrix is set to [0,0,0,1].

  The last row of the current matrix is set to [0,0,0,1] when data is not 4x4.

**Returns:** *[Affine3](_types_opencv_affine3_.affine3.md)*

\+ **new Affine3**(`affine`: [Mat4](../modules/_types_opencv__hacks_.md#mat4)): *[Affine3](_types_opencv_affine3_.affine3.md)*

*Defined in [types/opencv/Affine3.ts:72](https://github.com/cancerberoSgx/mirada/blob/eecc091/mirada/src/types/opencv/Affine3.ts#L72)*

  The resulting 4x4 matrix is
  Rodrigues vector.
  Combines all constructors above. Supports 4x4, 3x4, 3x3, 1x3, 3x1 sizes of data matrix.

  `\\[ \\begin{bmatrix} R & t\\\\ 0 & 1\\\\ \\end{bmatrix} \\]`

  The last row of the current matrix is set to [0,0,0,1].

  The last row of the current matrix is set to [0,0,0,1] when data is not 4x4.

**Parameters:**

Name | Type |
------ | ------ |
`affine` | [Mat4](../modules/_types_opencv__hacks_.md#mat4) |

**Returns:** *[Affine3](_types_opencv_affine3_.affine3.md)*

\+ **new Affine3**(`R`: [Mat3](../modules/_types_opencv__hacks_.md#mat3), `t?`: [Vec3](../modules/_types_opencv__hacks_.md#vec3)): *[Affine3](_types_opencv_affine3_.affine3.md)*

*Defined in [types/opencv/Affine3.ts:74](https://github.com/cancerberoSgx/mirada/blob/eecc091/mirada/src/types/opencv/Affine3.ts#L74)*

  The resulting 4x4 matrix is

  `\\[ \\begin{bmatrix} R & t\\\\ 0 & 1\\\\ \\end{bmatrix} \\]`

**Parameters:**

Name | Type | Description |
------ | ------ | ------ |
`R` | [Mat3](../modules/_types_opencv__hacks_.md#mat3) | 3x3 rotation matrix.  |
`t?` | [Vec3](../modules/_types_opencv__hacks_.md#vec3) | 3x1 translation vector.  |

**Returns:** *[Affine3](_types_opencv_affine3_.affine3.md)*

\+ **new Affine3**(`rvec`: [Vec3](../modules/_types_opencv__hacks_.md#vec3), `t?`: [Vec3](../modules/_types_opencv__hacks_.md#vec3)): *[Affine3](_types_opencv_affine3_.affine3.md)*

*Defined in [types/opencv/Affine3.ts:85](https://github.com/cancerberoSgx/mirada/blob/eecc091/mirada/src/types/opencv/Affine3.ts#L85)*

  Rodrigues vector.

  The last row of the current matrix is set to [0,0,0,1].

**Parameters:**

Name | Type | Description |
------ | ------ | ------ |
`rvec` | [Vec3](../modules/_types_opencv__hacks_.md#vec3) | 3x1 rotation vector. Its direction indicates the rotation axis and its length indicates the rotation angle in radian (using right hand rule).  |
`t?` | [Vec3](../modules/_types_opencv__hacks_.md#vec3) | 3x1 translation vector.  |

**Returns:** *[Affine3](_types_opencv_affine3_.affine3.md)*

\+ **new Affine3**(`data`: [Mat](_types_opencv_mat_.mat.md), `t?`: [Vec3](../modules/_types_opencv__hacks_.md#vec3)): *[Affine3](_types_opencv_affine3_.affine3.md)*

*Defined in [types/opencv/Affine3.ts:97](https://github.com/cancerberoSgx/mirada/blob/eecc091/mirada/src/types/opencv/Affine3.ts#L97)*

  Combines all constructors above. Supports 4x4, 3x4, 3x3, 1x3, 3x1 sizes of data matrix.

  The last row of the current matrix is set to [0,0,0,1] when data is not 4x4.

**Parameters:**

Name | Type | Description |
------ | ------ | ------ |
`data` | [Mat](_types_opencv_mat_.mat.md) | 1-channel matrix. when it is 4x4, it is copied to the current matrix and t is not used. When it is 3x4, it is copied to the upper part 3x4 of the current matrix and t is not used. When it is 3x3, it is copied to the upper left 3x3 part of the current matrix. When it is 3x1 or 1x3, it is treated as a rotation vector and the Rodrigues formula is used to compute a 3x3 rotation matrix.  |
`t?` | [Vec3](../modules/_types_opencv__hacks_.md#vec3) | 3x1 translation vector.  |

**Returns:** *[Affine3](_types_opencv_affine3_.affine3.md)*

\+ **new Affine3**(`vals`: [float_type](../modules/_types_opencv__hacks_.md#float_type)): *[Affine3](_types_opencv_affine3_.affine3.md)*

*Defined in [types/opencv/Affine3.ts:112](https://github.com/cancerberoSgx/mirada/blob/eecc091/mirada/src/types/opencv/Affine3.ts#L112)*

  The resulting 4x4 matrix is
  Rodrigues vector.
  Combines all constructors above. Supports 4x4, 3x4, 3x3, 1x3, 3x1 sizes of data matrix.

  `\\[ \\begin{bmatrix} R & t\\\\ 0 & 1\\\\ \\end{bmatrix} \\]`

  The last row of the current matrix is set to [0,0,0,1].

  The last row of the current matrix is set to [0,0,0,1] when data is not 4x4.

**Parameters:**

Name | Type |
------ | ------ |
`vals` | [float_type](../modules/_types_opencv__hacks_.md#float_type) |

**Returns:** *[Affine3](_types_opencv_affine3_.affine3.md)*

## Properties

###  matrix

• **matrix**: *[Mat4](../modules/_types_opencv__hacks_.md#mat4)*

*Defined in [types/opencv/Affine3.ts:70](https://github.com/cancerberoSgx/mirada/blob/eecc091/mirada/src/types/opencv/Affine3.ts#L70)*

## Methods

###  cast

▸ **cast**(`arg401`: any): *[Affine3](_types_opencv_affine3_.affine3.md)*

*Defined in [types/opencv/Affine3.ts:116](https://github.com/cancerberoSgx/mirada/blob/eecc091/mirada/src/types/opencv/Affine3.ts#L116)*

**Parameters:**

Name | Type |
------ | ------ |
`arg401` | any |

**Returns:** *[Affine3](_types_opencv_affine3_.affine3.md)*

___

###  concatenate

▸ **concatenate**(`affine`: [Affine3](_types_opencv_affine3_.affine3.md)): *[Affine3](_types_opencv_affine3_.affine3.md)*

*Defined in [types/opencv/Affine3.ts:118](https://github.com/cancerberoSgx/mirada/blob/eecc091/mirada/src/types/opencv/Affine3.ts#L118)*

**Parameters:**

Name | Type |
------ | ------ |
`affine` | [Affine3](_types_opencv_affine3_.affine3.md) |

**Returns:** *[Affine3](_types_opencv_affine3_.affine3.md)*

___

###  inv

▸ **inv**(`method?`: [int](../modules/_types_opencv__hacks_.md#int)): *[Affine3](_types_opencv_affine3_.affine3.md)*

*Defined in [types/opencv/Affine3.ts:123](https://github.com/cancerberoSgx/mirada/blob/eecc091/mirada/src/types/opencv/Affine3.ts#L123)*

  the inverse of the current matrix.

**Parameters:**

Name | Type |
------ | ------ |
`method?` | [int](../modules/_types_opencv__hacks_.md#int) |

**Returns:** *[Affine3](_types_opencv_affine3_.affine3.md)*

___

###  linear

▸ **linear**(`L`: [Mat3](../modules/_types_opencv__hacks_.md#mat3)): *[Mat3](../modules/_types_opencv__hacks_.md#mat3)*

*Defined in [types/opencv/Affine3.ts:132](https://github.com/cancerberoSgx/mirada/blob/eecc091/mirada/src/types/opencv/Affine3.ts#L132)*

  Copy the 3x3 matrix L to the upper left part of the current matrix

  It sets the upper left 3x3 part of the matrix. The remaining part is unaffected.

**Parameters:**

Name | Type | Description |
------ | ------ | ------ |
`L` | [Mat3](../modules/_types_opencv__hacks_.md#mat3) | 3x3 matrix.  |

**Returns:** *[Mat3](../modules/_types_opencv__hacks_.md#mat3)*

▸ **linear**(): *[Mat3](../modules/_types_opencv__hacks_.md#mat3)*

*Defined in [types/opencv/Affine3.ts:137](https://github.com/cancerberoSgx/mirada/blob/eecc091/mirada/src/types/opencv/Affine3.ts#L137)*

  the upper left 3x3 part

**Returns:** *[Mat3](../modules/_types_opencv__hacks_.md#mat3)*

___

###  rotate

▸ **rotate**(`R`: [Mat3](../modules/_types_opencv__hacks_.md#mat3)): *[Affine3](_types_opencv_affine3_.affine3.md)*

*Defined in [types/opencv/Affine3.ts:139](https://github.com/cancerberoSgx/mirada/blob/eecc091/mirada/src/types/opencv/Affine3.ts#L139)*

**Parameters:**

Name | Type |
------ | ------ |
`R` | [Mat3](../modules/_types_opencv__hacks_.md#mat3) |

**Returns:** *[Affine3](_types_opencv_affine3_.affine3.md)*

▸ **rotate**(`rvec`: [Vec3](../modules/_types_opencv__hacks_.md#vec3)): *[Affine3](_types_opencv_affine3_.affine3.md)*

*Defined in [types/opencv/Affine3.ts:141](https://github.com/cancerberoSgx/mirada/blob/eecc091/mirada/src/types/opencv/Affine3.ts#L141)*

**Parameters:**

Name | Type |
------ | ------ |
`rvec` | [Vec3](../modules/_types_opencv__hacks_.md#vec3) |

**Returns:** *[Affine3](_types_opencv_affine3_.affine3.md)*

___

###  rotation

▸ **rotation**(`R`: [Mat3](../modules/_types_opencv__hacks_.md#mat3)): *[Mat3](../modules/_types_opencv__hacks_.md#mat3)*

*Defined in [types/opencv/Affine3.ts:151](https://github.com/cancerberoSgx/mirada/blob/eecc091/mirada/src/types/opencv/Affine3.ts#L151)*

  Rotation matrix.

  Copy the rotation matrix to the upper left 3x3 part of the current matrix. The remaining elements
of the current matrix are not changed.

**Parameters:**

Name | Type | Description |
------ | ------ | ------ |
`R` | [Mat3](../modules/_types_opencv__hacks_.md#mat3) | 3x3 rotation matrix.  |

**Returns:** *[Mat3](../modules/_types_opencv__hacks_.md#mat3)*

▸ **rotation**(`rvec`: [Vec3](../modules/_types_opencv__hacks_.md#vec3)): *[Vec3](../modules/_types_opencv__hacks_.md#vec3)*

*Defined in [types/opencv/Affine3.ts:161](https://github.com/cancerberoSgx/mirada/blob/eecc091/mirada/src/types/opencv/Affine3.ts#L161)*

  Rodrigues vector.

  It sets the upper left 3x3 part of the matrix. The remaining part is unaffected.

**Parameters:**

Name | Type | Description |
------ | ------ | ------ |
`rvec` | [Vec3](../modules/_types_opencv__hacks_.md#vec3) | 3x1 rotation vector. The direction indicates the rotation axis and its length indicates the rotation angle in radian (using the right thumb convention).  |

**Returns:** *[Vec3](../modules/_types_opencv__hacks_.md#vec3)*

▸ **rotation**(`data`: [Mat](_types_opencv_mat_.mat.md)): *[Mat](_types_opencv_mat_.mat.md)*

*Defined in [types/opencv/Affine3.ts:173](https://github.com/cancerberoSgx/mirada/blob/eecc091/mirada/src/types/opencv/Affine3.ts#L173)*

  Combines rotation methods above. Supports 3x3, 1x3, 3x1 sizes of data matrix.

  It sets the upper left 3x3 part of the matrix. The remaining part is unaffected.

**Parameters:**

Name | Type | Description |
------ | ------ | ------ |
`data` | [Mat](_types_opencv_mat_.mat.md) | 1-channel matrix. When it is a 3x3 matrix, it sets the upper left 3x3 part of the current matrix. When it is a 1x3 or 3x1 matrix, it is used as a rotation vector. The Rodrigues formula is used to compute the rotation matrix and sets the upper left 3x3 part of the current matrix.  |

**Returns:** *[Mat](_types_opencv_mat_.mat.md)*

▸ **rotation**(): *[Mat3](../modules/_types_opencv__hacks_.md#mat3)*

*Defined in [types/opencv/Affine3.ts:178](https://github.com/cancerberoSgx/mirada/blob/eecc091/mirada/src/types/opencv/Affine3.ts#L178)*

  the upper left 3x3 part

**Returns:** *[Mat3](../modules/_types_opencv__hacks_.md#mat3)*

___

###  rvec

▸ **rvec**(): *[Vec3](../modules/_types_opencv__hacks_.md#vec3)*

*Defined in [types/opencv/Affine3.ts:189](https://github.com/cancerberoSgx/mirada/blob/eecc091/mirada/src/types/opencv/Affine3.ts#L189)*

  Rodrigues vector.

  a vector representing the upper left 3x3 rotation matrix of the current matrix.

  Since the mapping between rotation vectors and rotation matrices is many to one, this function
returns only one rotation vector that represents the current rotation matrix, which is not
necessarily the same one set by `[rotation(const Vec3& rvec)]`.

**Returns:** *[Vec3](../modules/_types_opencv__hacks_.md#vec3)*

___

###  translate

▸ **translate**(`t`: [Vec3](../modules/_types_opencv__hacks_.md#vec3)): *[Affine3](_types_opencv_affine3_.affine3.md)*

*Defined in [types/opencv/Affine3.ts:191](https://github.com/cancerberoSgx/mirada/blob/eecc091/mirada/src/types/opencv/Affine3.ts#L191)*

**Parameters:**

Name | Type |
------ | ------ |
`t` | [Vec3](../modules/_types_opencv__hacks_.md#vec3) |

**Returns:** *[Affine3](_types_opencv_affine3_.affine3.md)*

___

###  translation

▸ **translation**(`t`: [Vec3](../modules/_types_opencv__hacks_.md#vec3)): *[Vec3](../modules/_types_opencv__hacks_.md#vec3)*

*Defined in [types/opencv/Affine3.ts:200](https://github.com/cancerberoSgx/mirada/blob/eecc091/mirada/src/types/opencv/Affine3.ts#L200)*

  Copy t to the first three elements of the last column of the current matrix

  It sets the upper right 3x1 part of the matrix. The remaining part is unaffected.

**Parameters:**

Name | Type | Description |
------ | ------ | ------ |
`t` | [Vec3](../modules/_types_opencv__hacks_.md#vec3) | 3x1 translation vector.  |

**Returns:** *[Vec3](../modules/_types_opencv__hacks_.md#vec3)*

▸ **translation**(): *[Vec3](../modules/_types_opencv__hacks_.md#vec3)*

*Defined in [types/opencv/Affine3.ts:205](https://github.com/cancerberoSgx/mirada/blob/eecc091/mirada/src/types/opencv/Affine3.ts#L205)*

  the upper right 3x1 part

**Returns:** *[Vec3](../modules/_types_opencv__hacks_.md#vec3)*

___

### `Static` Identity

▸ **Identity**(): *[Affine3](_types_opencv_affine3_.affine3.md)*

*Defined in [types/opencv/Affine3.ts:207](https://github.com/cancerberoSgx/mirada/blob/eecc091/mirada/src/types/opencv/Affine3.ts#L207)*

**Returns:** *[Affine3](_types_opencv_affine3_.affine3.md)*