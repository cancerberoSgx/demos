**[mirada](../README.md)**

[Globals](../README.md) › ["types/opencv/Matx"](../modules/_types_opencv_matx_.md) › [Matx](_types_opencv_matx_.matx.md)

# Class: Matx

If you need a more flexible type, use [Mat](#d3/d63/classcv_1_1Mat}) . The elements of the matrix M
are accessible using the M(i,j) notation. Most of the common matrix operations (see also
[MatrixExpressions](#d1/d10/classcv_1_1MatExpr_1MatrixExpressions}) ) are available. To do an
operation on [Matx](#de/de1/classcv_1_1Matx}) that is not implemented, you can easily convert the
matrix to [Mat](#d3/d63/classcv_1_1Mat}) and backwards:

```cpp
Matx33f m(1, 2, 3,
          4, 5, 6,
          7, 8, 9);
cout << sum(Mat(m*m.t())) << endl;
```

 Except of the plain constructor which takes a list of elements, [Matx](#de/de1/classcv_1_1Matx})
can be initialized from a C-array:

```cpp
float values[] = { 1, 2, 3};
Matx31f m(values);
```

 In case if C++11 features are available, std::initializer_list can be also used to initialize
[Matx](#de/de1/classcv_1_1Matx}):

```cpp
Matx31f m = { 1, 2, 3};
```

Source:
[opencv2/core/matx.hpp](https://github.com/opencv/opencv/tree/master/modules/core/include/opencv2/core/matx.hpp#L1185).

## Hierarchy

* **Matx**

## Index

### Constructors

* [constructor](_types_opencv_matx_.matx.md#constructor)

### Properties

* [val](_types_opencv_matx_.matx.md#val)

### Methods

* [col](_types_opencv_matx_.matx.md#col)
* [ddot](_types_opencv_matx_.matx.md#ddot)
* [diag](_types_opencv_matx_.matx.md#diag)
* [div](_types_opencv_matx_.matx.md#div)
* [dot](_types_opencv_matx_.matx.md#dot)
* [get_minor](_types_opencv_matx_.matx.md#get_minor)
* [inv](_types_opencv_matx_.matx.md#inv)
* [mul](_types_opencv_matx_.matx.md#mul)
* [reshape](_types_opencv_matx_.matx.md#reshape)
* [row](_types_opencv_matx_.matx.md#row)
* [solve](_types_opencv_matx_.matx.md#solve)
* [t](_types_opencv_matx_.matx.md#t)
* [all](_types_opencv_matx_.matx.md#static-all)
* [diag](_types_opencv_matx_.matx.md#static-diag)
* [eye](_types_opencv_matx_.matx.md#static-eye)
* [ones](_types_opencv_matx_.matx.md#static-ones)
* [randn](_types_opencv_matx_.matx.md#static-randn)
* [randu](_types_opencv_matx_.matx.md#static-randu)
* [zeros](_types_opencv_matx_.matx.md#static-zeros)

## Constructors

###  constructor

\+ **new Matx**(): *[Matx](_types_opencv_matx_.matx.md)*

*Defined in [types/opencv/Matx.ts:39](https://github.com/cancerberoSgx/mirada/blob/170e57c/mirada/src/types/opencv/Matx.ts#L39)*

**Returns:** *[Matx](_types_opencv_matx_.matx.md)*

\+ **new Matx**(`v0`: [_Tp](../modules/_types_opencv__hacks_.md#_tp)): *[Matx](_types_opencv_matx_.matx.md)*

*Defined in [types/opencv/Matx.ts:41](https://github.com/cancerberoSgx/mirada/blob/170e57c/mirada/src/types/opencv/Matx.ts#L41)*

**Parameters:**

Name | Type |
------ | ------ |
`v0` | [_Tp](../modules/_types_opencv__hacks_.md#_tp) |

**Returns:** *[Matx](_types_opencv_matx_.matx.md)*

\+ **new Matx**(`v0`: [_Tp](../modules/_types_opencv__hacks_.md#_tp), `v1`: [_Tp](../modules/_types_opencv__hacks_.md#_tp)): *[Matx](_types_opencv_matx_.matx.md)*

*Defined in [types/opencv/Matx.ts:43](https://github.com/cancerberoSgx/mirada/blob/170e57c/mirada/src/types/opencv/Matx.ts#L43)*

**Parameters:**

Name | Type |
------ | ------ |
`v0` | [_Tp](../modules/_types_opencv__hacks_.md#_tp) |
`v1` | [_Tp](../modules/_types_opencv__hacks_.md#_tp) |

**Returns:** *[Matx](_types_opencv_matx_.matx.md)*

\+ **new Matx**(`v0`: [_Tp](../modules/_types_opencv__hacks_.md#_tp), `v1`: [_Tp](../modules/_types_opencv__hacks_.md#_tp), `v2`: [_Tp](../modules/_types_opencv__hacks_.md#_tp)): *[Matx](_types_opencv_matx_.matx.md)*

*Defined in [types/opencv/Matx.ts:45](https://github.com/cancerberoSgx/mirada/blob/170e57c/mirada/src/types/opencv/Matx.ts#L45)*

**Parameters:**

Name | Type |
------ | ------ |
`v0` | [_Tp](../modules/_types_opencv__hacks_.md#_tp) |
`v1` | [_Tp](../modules/_types_opencv__hacks_.md#_tp) |
`v2` | [_Tp](../modules/_types_opencv__hacks_.md#_tp) |

**Returns:** *[Matx](_types_opencv_matx_.matx.md)*

\+ **new Matx**(`v0`: [_Tp](../modules/_types_opencv__hacks_.md#_tp), `v1`: [_Tp](../modules/_types_opencv__hacks_.md#_tp), `v2`: [_Tp](../modules/_types_opencv__hacks_.md#_tp), `v3`: [_Tp](../modules/_types_opencv__hacks_.md#_tp)): *[Matx](_types_opencv_matx_.matx.md)*

*Defined in [types/opencv/Matx.ts:47](https://github.com/cancerberoSgx/mirada/blob/170e57c/mirada/src/types/opencv/Matx.ts#L47)*

**Parameters:**

Name | Type |
------ | ------ |
`v0` | [_Tp](../modules/_types_opencv__hacks_.md#_tp) |
`v1` | [_Tp](../modules/_types_opencv__hacks_.md#_tp) |
`v2` | [_Tp](../modules/_types_opencv__hacks_.md#_tp) |
`v3` | [_Tp](../modules/_types_opencv__hacks_.md#_tp) |

**Returns:** *[Matx](_types_opencv_matx_.matx.md)*

\+ **new Matx**(`v0`: [_Tp](../modules/_types_opencv__hacks_.md#_tp), `v1`: [_Tp](../modules/_types_opencv__hacks_.md#_tp), `v2`: [_Tp](../modules/_types_opencv__hacks_.md#_tp), `v3`: [_Tp](../modules/_types_opencv__hacks_.md#_tp), `v4`: [_Tp](../modules/_types_opencv__hacks_.md#_tp)): *[Matx](_types_opencv_matx_.matx.md)*

*Defined in [types/opencv/Matx.ts:49](https://github.com/cancerberoSgx/mirada/blob/170e57c/mirada/src/types/opencv/Matx.ts#L49)*

**Parameters:**

Name | Type |
------ | ------ |
`v0` | [_Tp](../modules/_types_opencv__hacks_.md#_tp) |
`v1` | [_Tp](../modules/_types_opencv__hacks_.md#_tp) |
`v2` | [_Tp](../modules/_types_opencv__hacks_.md#_tp) |
`v3` | [_Tp](../modules/_types_opencv__hacks_.md#_tp) |
`v4` | [_Tp](../modules/_types_opencv__hacks_.md#_tp) |

**Returns:** *[Matx](_types_opencv_matx_.matx.md)*

\+ **new Matx**(`v0`: [_Tp](../modules/_types_opencv__hacks_.md#_tp), `v1`: [_Tp](../modules/_types_opencv__hacks_.md#_tp), `v2`: [_Tp](../modules/_types_opencv__hacks_.md#_tp), `v3`: [_Tp](../modules/_types_opencv__hacks_.md#_tp), `v4`: [_Tp](../modules/_types_opencv__hacks_.md#_tp), `v5`: [_Tp](../modules/_types_opencv__hacks_.md#_tp)): *[Matx](_types_opencv_matx_.matx.md)*

*Defined in [types/opencv/Matx.ts:51](https://github.com/cancerberoSgx/mirada/blob/170e57c/mirada/src/types/opencv/Matx.ts#L51)*

**Parameters:**

Name | Type |
------ | ------ |
`v0` | [_Tp](../modules/_types_opencv__hacks_.md#_tp) |
`v1` | [_Tp](../modules/_types_opencv__hacks_.md#_tp) |
`v2` | [_Tp](../modules/_types_opencv__hacks_.md#_tp) |
`v3` | [_Tp](../modules/_types_opencv__hacks_.md#_tp) |
`v4` | [_Tp](../modules/_types_opencv__hacks_.md#_tp) |
`v5` | [_Tp](../modules/_types_opencv__hacks_.md#_tp) |

**Returns:** *[Matx](_types_opencv_matx_.matx.md)*

\+ **new Matx**(`v0`: [_Tp](../modules/_types_opencv__hacks_.md#_tp), `v1`: [_Tp](../modules/_types_opencv__hacks_.md#_tp), `v2`: [_Tp](../modules/_types_opencv__hacks_.md#_tp), `v3`: [_Tp](../modules/_types_opencv__hacks_.md#_tp), `v4`: [_Tp](../modules/_types_opencv__hacks_.md#_tp), `v5`: [_Tp](../modules/_types_opencv__hacks_.md#_tp), `v6`: [_Tp](../modules/_types_opencv__hacks_.md#_tp)): *[Matx](_types_opencv_matx_.matx.md)*

*Defined in [types/opencv/Matx.ts:53](https://github.com/cancerberoSgx/mirada/blob/170e57c/mirada/src/types/opencv/Matx.ts#L53)*

**Parameters:**

Name | Type |
------ | ------ |
`v0` | [_Tp](../modules/_types_opencv__hacks_.md#_tp) |
`v1` | [_Tp](../modules/_types_opencv__hacks_.md#_tp) |
`v2` | [_Tp](../modules/_types_opencv__hacks_.md#_tp) |
`v3` | [_Tp](../modules/_types_opencv__hacks_.md#_tp) |
`v4` | [_Tp](../modules/_types_opencv__hacks_.md#_tp) |
`v5` | [_Tp](../modules/_types_opencv__hacks_.md#_tp) |
`v6` | [_Tp](../modules/_types_opencv__hacks_.md#_tp) |

**Returns:** *[Matx](_types_opencv_matx_.matx.md)*

\+ **new Matx**(`v0`: [_Tp](../modules/_types_opencv__hacks_.md#_tp), `v1`: [_Tp](../modules/_types_opencv__hacks_.md#_tp), `v2`: [_Tp](../modules/_types_opencv__hacks_.md#_tp), `v3`: [_Tp](../modules/_types_opencv__hacks_.md#_tp), `v4`: [_Tp](../modules/_types_opencv__hacks_.md#_tp), `v5`: [_Tp](../modules/_types_opencv__hacks_.md#_tp), `v6`: [_Tp](../modules/_types_opencv__hacks_.md#_tp), `v7`: [_Tp](../modules/_types_opencv__hacks_.md#_tp)): *[Matx](_types_opencv_matx_.matx.md)*

*Defined in [types/opencv/Matx.ts:55](https://github.com/cancerberoSgx/mirada/blob/170e57c/mirada/src/types/opencv/Matx.ts#L55)*

**Parameters:**

Name | Type |
------ | ------ |
`v0` | [_Tp](../modules/_types_opencv__hacks_.md#_tp) |
`v1` | [_Tp](../modules/_types_opencv__hacks_.md#_tp) |
`v2` | [_Tp](../modules/_types_opencv__hacks_.md#_tp) |
`v3` | [_Tp](../modules/_types_opencv__hacks_.md#_tp) |
`v4` | [_Tp](../modules/_types_opencv__hacks_.md#_tp) |
`v5` | [_Tp](../modules/_types_opencv__hacks_.md#_tp) |
`v6` | [_Tp](../modules/_types_opencv__hacks_.md#_tp) |
`v7` | [_Tp](../modules/_types_opencv__hacks_.md#_tp) |

**Returns:** *[Matx](_types_opencv_matx_.matx.md)*

\+ **new Matx**(`v0`: [_Tp](../modules/_types_opencv__hacks_.md#_tp), `v1`: [_Tp](../modules/_types_opencv__hacks_.md#_tp), `v2`: [_Tp](../modules/_types_opencv__hacks_.md#_tp), `v3`: [_Tp](../modules/_types_opencv__hacks_.md#_tp), `v4`: [_Tp](../modules/_types_opencv__hacks_.md#_tp), `v5`: [_Tp](../modules/_types_opencv__hacks_.md#_tp), `v6`: [_Tp](../modules/_types_opencv__hacks_.md#_tp), `v7`: [_Tp](../modules/_types_opencv__hacks_.md#_tp), `v8`: [_Tp](../modules/_types_opencv__hacks_.md#_tp)): *[Matx](_types_opencv_matx_.matx.md)*

*Defined in [types/opencv/Matx.ts:57](https://github.com/cancerberoSgx/mirada/blob/170e57c/mirada/src/types/opencv/Matx.ts#L57)*

**Parameters:**

Name | Type |
------ | ------ |
`v0` | [_Tp](../modules/_types_opencv__hacks_.md#_tp) |
`v1` | [_Tp](../modules/_types_opencv__hacks_.md#_tp) |
`v2` | [_Tp](../modules/_types_opencv__hacks_.md#_tp) |
`v3` | [_Tp](../modules/_types_opencv__hacks_.md#_tp) |
`v4` | [_Tp](../modules/_types_opencv__hacks_.md#_tp) |
`v5` | [_Tp](../modules/_types_opencv__hacks_.md#_tp) |
`v6` | [_Tp](../modules/_types_opencv__hacks_.md#_tp) |
`v7` | [_Tp](../modules/_types_opencv__hacks_.md#_tp) |
`v8` | [_Tp](../modules/_types_opencv__hacks_.md#_tp) |

**Returns:** *[Matx](_types_opencv_matx_.matx.md)*

\+ **new Matx**(`v0`: [_Tp](../modules/_types_opencv__hacks_.md#_tp), `v1`: [_Tp](../modules/_types_opencv__hacks_.md#_tp), `v2`: [_Tp](../modules/_types_opencv__hacks_.md#_tp), `v3`: [_Tp](../modules/_types_opencv__hacks_.md#_tp), `v4`: [_Tp](../modules/_types_opencv__hacks_.md#_tp), `v5`: [_Tp](../modules/_types_opencv__hacks_.md#_tp), `v6`: [_Tp](../modules/_types_opencv__hacks_.md#_tp), `v7`: [_Tp](../modules/_types_opencv__hacks_.md#_tp), `v8`: [_Tp](../modules/_types_opencv__hacks_.md#_tp), `v9`: [_Tp](../modules/_types_opencv__hacks_.md#_tp)): *[Matx](_types_opencv_matx_.matx.md)*

*Defined in [types/opencv/Matx.ts:59](https://github.com/cancerberoSgx/mirada/blob/170e57c/mirada/src/types/opencv/Matx.ts#L59)*

**Parameters:**

Name | Type |
------ | ------ |
`v0` | [_Tp](../modules/_types_opencv__hacks_.md#_tp) |
`v1` | [_Tp](../modules/_types_opencv__hacks_.md#_tp) |
`v2` | [_Tp](../modules/_types_opencv__hacks_.md#_tp) |
`v3` | [_Tp](../modules/_types_opencv__hacks_.md#_tp) |
`v4` | [_Tp](../modules/_types_opencv__hacks_.md#_tp) |
`v5` | [_Tp](../modules/_types_opencv__hacks_.md#_tp) |
`v6` | [_Tp](../modules/_types_opencv__hacks_.md#_tp) |
`v7` | [_Tp](../modules/_types_opencv__hacks_.md#_tp) |
`v8` | [_Tp](../modules/_types_opencv__hacks_.md#_tp) |
`v9` | [_Tp](../modules/_types_opencv__hacks_.md#_tp) |

**Returns:** *[Matx](_types_opencv_matx_.matx.md)*

\+ **new Matx**(`v0`: [_Tp](../modules/_types_opencv__hacks_.md#_tp), `v1`: [_Tp](../modules/_types_opencv__hacks_.md#_tp), `v2`: [_Tp](../modules/_types_opencv__hacks_.md#_tp), `v3`: [_Tp](../modules/_types_opencv__hacks_.md#_tp), `v4`: [_Tp](../modules/_types_opencv__hacks_.md#_tp), `v5`: [_Tp](../modules/_types_opencv__hacks_.md#_tp), `v6`: [_Tp](../modules/_types_opencv__hacks_.md#_tp), `v7`: [_Tp](../modules/_types_opencv__hacks_.md#_tp), `v8`: [_Tp](../modules/_types_opencv__hacks_.md#_tp), `v9`: [_Tp](../modules/_types_opencv__hacks_.md#_tp), `v10`: [_Tp](../modules/_types_opencv__hacks_.md#_tp), `v11`: [_Tp](../modules/_types_opencv__hacks_.md#_tp)): *[Matx](_types_opencv_matx_.matx.md)*

*Defined in [types/opencv/Matx.ts:61](https://github.com/cancerberoSgx/mirada/blob/170e57c/mirada/src/types/opencv/Matx.ts#L61)*

**Parameters:**

Name | Type |
------ | ------ |
`v0` | [_Tp](../modules/_types_opencv__hacks_.md#_tp) |
`v1` | [_Tp](../modules/_types_opencv__hacks_.md#_tp) |
`v2` | [_Tp](../modules/_types_opencv__hacks_.md#_tp) |
`v3` | [_Tp](../modules/_types_opencv__hacks_.md#_tp) |
`v4` | [_Tp](../modules/_types_opencv__hacks_.md#_tp) |
`v5` | [_Tp](../modules/_types_opencv__hacks_.md#_tp) |
`v6` | [_Tp](../modules/_types_opencv__hacks_.md#_tp) |
`v7` | [_Tp](../modules/_types_opencv__hacks_.md#_tp) |
`v8` | [_Tp](../modules/_types_opencv__hacks_.md#_tp) |
`v9` | [_Tp](../modules/_types_opencv__hacks_.md#_tp) |
`v10` | [_Tp](../modules/_types_opencv__hacks_.md#_tp) |
`v11` | [_Tp](../modules/_types_opencv__hacks_.md#_tp) |

**Returns:** *[Matx](_types_opencv_matx_.matx.md)*

\+ **new Matx**(`v0`: [_Tp](../modules/_types_opencv__hacks_.md#_tp), `v1`: [_Tp](../modules/_types_opencv__hacks_.md#_tp), `v2`: [_Tp](../modules/_types_opencv__hacks_.md#_tp), `v3`: [_Tp](../modules/_types_opencv__hacks_.md#_tp), `v4`: [_Tp](../modules/_types_opencv__hacks_.md#_tp), `v5`: [_Tp](../modules/_types_opencv__hacks_.md#_tp), `v6`: [_Tp](../modules/_types_opencv__hacks_.md#_tp), `v7`: [_Tp](../modules/_types_opencv__hacks_.md#_tp), `v8`: [_Tp](../modules/_types_opencv__hacks_.md#_tp), `v9`: [_Tp](../modules/_types_opencv__hacks_.md#_tp), `v10`: [_Tp](../modules/_types_opencv__hacks_.md#_tp), `v11`: [_Tp](../modules/_types_opencv__hacks_.md#_tp), `v12`: [_Tp](../modules/_types_opencv__hacks_.md#_tp), `v13`: [_Tp](../modules/_types_opencv__hacks_.md#_tp)): *[Matx](_types_opencv_matx_.matx.md)*

*Defined in [types/opencv/Matx.ts:63](https://github.com/cancerberoSgx/mirada/blob/170e57c/mirada/src/types/opencv/Matx.ts#L63)*

**Parameters:**

Name | Type |
------ | ------ |
`v0` | [_Tp](../modules/_types_opencv__hacks_.md#_tp) |
`v1` | [_Tp](../modules/_types_opencv__hacks_.md#_tp) |
`v2` | [_Tp](../modules/_types_opencv__hacks_.md#_tp) |
`v3` | [_Tp](../modules/_types_opencv__hacks_.md#_tp) |
`v4` | [_Tp](../modules/_types_opencv__hacks_.md#_tp) |
`v5` | [_Tp](../modules/_types_opencv__hacks_.md#_tp) |
`v6` | [_Tp](../modules/_types_opencv__hacks_.md#_tp) |
`v7` | [_Tp](../modules/_types_opencv__hacks_.md#_tp) |
`v8` | [_Tp](../modules/_types_opencv__hacks_.md#_tp) |
`v9` | [_Tp](../modules/_types_opencv__hacks_.md#_tp) |
`v10` | [_Tp](../modules/_types_opencv__hacks_.md#_tp) |
`v11` | [_Tp](../modules/_types_opencv__hacks_.md#_tp) |
`v12` | [_Tp](../modules/_types_opencv__hacks_.md#_tp) |
`v13` | [_Tp](../modules/_types_opencv__hacks_.md#_tp) |

**Returns:** *[Matx](_types_opencv_matx_.matx.md)*

\+ **new Matx**(`v0`: [_Tp](../modules/_types_opencv__hacks_.md#_tp), `v1`: [_Tp](../modules/_types_opencv__hacks_.md#_tp), `v2`: [_Tp](../modules/_types_opencv__hacks_.md#_tp), `v3`: [_Tp](../modules/_types_opencv__hacks_.md#_tp), `v4`: [_Tp](../modules/_types_opencv__hacks_.md#_tp), `v5`: [_Tp](../modules/_types_opencv__hacks_.md#_tp), `v6`: [_Tp](../modules/_types_opencv__hacks_.md#_tp), `v7`: [_Tp](../modules/_types_opencv__hacks_.md#_tp), `v8`: [_Tp](../modules/_types_opencv__hacks_.md#_tp), `v9`: [_Tp](../modules/_types_opencv__hacks_.md#_tp), `v10`: [_Tp](../modules/_types_opencv__hacks_.md#_tp), `v11`: [_Tp](../modules/_types_opencv__hacks_.md#_tp), `v12`: [_Tp](../modules/_types_opencv__hacks_.md#_tp), `v13`: [_Tp](../modules/_types_opencv__hacks_.md#_tp), `v14`: [_Tp](../modules/_types_opencv__hacks_.md#_tp), `v15`: [_Tp](../modules/_types_opencv__hacks_.md#_tp)): *[Matx](_types_opencv_matx_.matx.md)*

*Defined in [types/opencv/Matx.ts:65](https://github.com/cancerberoSgx/mirada/blob/170e57c/mirada/src/types/opencv/Matx.ts#L65)*

**Parameters:**

Name | Type |
------ | ------ |
`v0` | [_Tp](../modules/_types_opencv__hacks_.md#_tp) |
`v1` | [_Tp](../modules/_types_opencv__hacks_.md#_tp) |
`v2` | [_Tp](../modules/_types_opencv__hacks_.md#_tp) |
`v3` | [_Tp](../modules/_types_opencv__hacks_.md#_tp) |
`v4` | [_Tp](../modules/_types_opencv__hacks_.md#_tp) |
`v5` | [_Tp](../modules/_types_opencv__hacks_.md#_tp) |
`v6` | [_Tp](../modules/_types_opencv__hacks_.md#_tp) |
`v7` | [_Tp](../modules/_types_opencv__hacks_.md#_tp) |
`v8` | [_Tp](../modules/_types_opencv__hacks_.md#_tp) |
`v9` | [_Tp](../modules/_types_opencv__hacks_.md#_tp) |
`v10` | [_Tp](../modules/_types_opencv__hacks_.md#_tp) |
`v11` | [_Tp](../modules/_types_opencv__hacks_.md#_tp) |
`v12` | [_Tp](../modules/_types_opencv__hacks_.md#_tp) |
`v13` | [_Tp](../modules/_types_opencv__hacks_.md#_tp) |
`v14` | [_Tp](../modules/_types_opencv__hacks_.md#_tp) |
`v15` | [_Tp](../modules/_types_opencv__hacks_.md#_tp) |

**Returns:** *[Matx](_types_opencv_matx_.matx.md)*

\+ **new Matx**(`vals`: any): *[Matx](_types_opencv_matx_.matx.md)*

*Defined in [types/opencv/Matx.ts:67](https://github.com/cancerberoSgx/mirada/blob/170e57c/mirada/src/types/opencv/Matx.ts#L67)*

**Parameters:**

Name | Type |
------ | ------ |
`vals` | any |

**Returns:** *[Matx](_types_opencv_matx_.matx.md)*

\+ **new Matx**(`arg334`: any): *[Matx](_types_opencv_matx_.matx.md)*

*Defined in [types/opencv/Matx.ts:69](https://github.com/cancerberoSgx/mirada/blob/170e57c/mirada/src/types/opencv/Matx.ts#L69)*

**Parameters:**

Name | Type |
------ | ------ |
`arg334` | any |

**Returns:** *[Matx](_types_opencv_matx_.matx.md)*

\+ **new Matx**(`a`: [Matx](_types_opencv_matx_.matx.md), `b`: [Matx](_types_opencv_matx_.matx.md), `arg335`: [Matx_AddOp](../modules/_types_opencv__hacks_.md#matx_addop)): *[Matx](_types_opencv_matx_.matx.md)*

*Defined in [types/opencv/Matx.ts:71](https://github.com/cancerberoSgx/mirada/blob/170e57c/mirada/src/types/opencv/Matx.ts#L71)*

**Parameters:**

Name | Type |
------ | ------ |
`a` | [Matx](_types_opencv_matx_.matx.md) |
`b` | [Matx](_types_opencv_matx_.matx.md) |
`arg335` | [Matx_AddOp](../modules/_types_opencv__hacks_.md#matx_addop) |

**Returns:** *[Matx](_types_opencv_matx_.matx.md)*

\+ **new Matx**(`a`: [Matx](_types_opencv_matx_.matx.md), `b`: [Matx](_types_opencv_matx_.matx.md), `arg336`: [Matx_SubOp](../modules/_types_opencv__hacks_.md#matx_subop)): *[Matx](_types_opencv_matx_.matx.md)*

*Defined in [types/opencv/Matx.ts:73](https://github.com/cancerberoSgx/mirada/blob/170e57c/mirada/src/types/opencv/Matx.ts#L73)*

**Parameters:**

Name | Type |
------ | ------ |
`a` | [Matx](_types_opencv_matx_.matx.md) |
`b` | [Matx](_types_opencv_matx_.matx.md) |
`arg336` | [Matx_SubOp](../modules/_types_opencv__hacks_.md#matx_subop) |

**Returns:** *[Matx](_types_opencv_matx_.matx.md)*

\+ **new Matx**(`arg337`: any, `a`: [Matx](_types_opencv_matx_.matx.md), `alpha`: [_T2](../modules/_types_opencv__hacks_.md#_t2), `arg338`: [Matx_ScaleOp](../modules/_types_opencv__hacks_.md#matx_scaleop)): *[Matx](_types_opencv_matx_.matx.md)*

*Defined in [types/opencv/Matx.ts:75](https://github.com/cancerberoSgx/mirada/blob/170e57c/mirada/src/types/opencv/Matx.ts#L75)*

**Parameters:**

Name | Type |
------ | ------ |
`arg337` | any |
`a` | [Matx](_types_opencv_matx_.matx.md) |
`alpha` | [_T2](../modules/_types_opencv__hacks_.md#_t2) |
`arg338` | [Matx_ScaleOp](../modules/_types_opencv__hacks_.md#matx_scaleop) |

**Returns:** *[Matx](_types_opencv_matx_.matx.md)*

\+ **new Matx**(`a`: [Matx](_types_opencv_matx_.matx.md), `b`: [Matx](_types_opencv_matx_.matx.md), `arg339`: [Matx_MulOp](../modules/_types_opencv__hacks_.md#matx_mulop)): *[Matx](_types_opencv_matx_.matx.md)*

*Defined in [types/opencv/Matx.ts:77](https://github.com/cancerberoSgx/mirada/blob/170e57c/mirada/src/types/opencv/Matx.ts#L77)*

**Parameters:**

Name | Type |
------ | ------ |
`a` | [Matx](_types_opencv_matx_.matx.md) |
`b` | [Matx](_types_opencv_matx_.matx.md) |
`arg339` | [Matx_MulOp](../modules/_types_opencv__hacks_.md#matx_mulop) |

**Returns:** *[Matx](_types_opencv_matx_.matx.md)*

\+ **new Matx**(`a`: [Matx](_types_opencv_matx_.matx.md), `b`: [Matx](_types_opencv_matx_.matx.md), `arg340`: [Matx_DivOp](../modules/_types_opencv__hacks_.md#matx_divop)): *[Matx](_types_opencv_matx_.matx.md)*

*Defined in [types/opencv/Matx.ts:79](https://github.com/cancerberoSgx/mirada/blob/170e57c/mirada/src/types/opencv/Matx.ts#L79)*

**Parameters:**

Name | Type |
------ | ------ |
`a` | [Matx](_types_opencv_matx_.matx.md) |
`b` | [Matx](_types_opencv_matx_.matx.md) |
`arg340` | [Matx_DivOp](../modules/_types_opencv__hacks_.md#matx_divop) |

**Returns:** *[Matx](_types_opencv_matx_.matx.md)*

\+ **new Matx**(`l`: [int](../modules/_types_opencv__hacks_.md#int), `a`: [Matx](_types_opencv_matx_.matx.md), `b`: [Matx](_types_opencv_matx_.matx.md), `arg341`: [Matx_MatMulOp](../modules/_types_opencv__hacks_.md#matx_matmulop)): *[Matx](_types_opencv_matx_.matx.md)*

*Defined in [types/opencv/Matx.ts:81](https://github.com/cancerberoSgx/mirada/blob/170e57c/mirada/src/types/opencv/Matx.ts#L81)*

**Parameters:**

Name | Type |
------ | ------ |
`l` | [int](../modules/_types_opencv__hacks_.md#int) |
`a` | [Matx](_types_opencv_matx_.matx.md) |
`b` | [Matx](_types_opencv_matx_.matx.md) |
`arg341` | [Matx_MatMulOp](../modules/_types_opencv__hacks_.md#matx_matmulop) |

**Returns:** *[Matx](_types_opencv_matx_.matx.md)*

\+ **new Matx**(`a`: [Matx](_types_opencv_matx_.matx.md), `arg342`: [Matx_TOp](../modules/_types_opencv__hacks_.md#matx_top)): *[Matx](_types_opencv_matx_.matx.md)*

*Defined in [types/opencv/Matx.ts:83](https://github.com/cancerberoSgx/mirada/blob/170e57c/mirada/src/types/opencv/Matx.ts#L83)*

**Parameters:**

Name | Type |
------ | ------ |
`a` | [Matx](_types_opencv_matx_.matx.md) |
`arg342` | [Matx_TOp](../modules/_types_opencv__hacks_.md#matx_top) |

**Returns:** *[Matx](_types_opencv_matx_.matx.md)*

## Properties

###  val

• **val**: *[_Tp](../modules/_types_opencv__hacks_.md#_tp)*

*Defined in [types/opencv/Matx.ts:39](https://github.com/cancerberoSgx/mirada/blob/170e57c/mirada/src/types/opencv/Matx.ts#L39)*

## Methods

###  col

▸ **col**(`i`: [int](../modules/_types_opencv__hacks_.md#int)): *[Matx](_types_opencv_matx_.matx.md)*

*Defined in [types/opencv/Matx.ts:87](https://github.com/cancerberoSgx/mirada/blob/170e57c/mirada/src/types/opencv/Matx.ts#L87)*

**Parameters:**

Name | Type |
------ | ------ |
`i` | [int](../modules/_types_opencv__hacks_.md#int) |

**Returns:** *[Matx](_types_opencv_matx_.matx.md)*

___

###  ddot

▸ **ddot**(`v`: [Matx](_types_opencv_matx_.matx.md)): *[Matx](_types_opencv_matx_.matx.md)*

*Defined in [types/opencv/Matx.ts:89](https://github.com/cancerberoSgx/mirada/blob/170e57c/mirada/src/types/opencv/Matx.ts#L89)*

**Parameters:**

Name | Type |
------ | ------ |
`v` | [Matx](_types_opencv_matx_.matx.md) |

**Returns:** *[Matx](_types_opencv_matx_.matx.md)*

___

###  diag

▸ **diag**(): *[diag_type](../modules/_types_opencv__hacks_.md#diag_type)*

*Defined in [types/opencv/Matx.ts:91](https://github.com/cancerberoSgx/mirada/blob/170e57c/mirada/src/types/opencv/Matx.ts#L91)*

**Returns:** *[diag_type](../modules/_types_opencv__hacks_.md#diag_type)*

___

###  div

▸ **div**(`a`: [Matx](_types_opencv_matx_.matx.md)): *[Matx](_types_opencv_matx_.matx.md)*

*Defined in [types/opencv/Matx.ts:93](https://github.com/cancerberoSgx/mirada/blob/170e57c/mirada/src/types/opencv/Matx.ts#L93)*

**Parameters:**

Name | Type |
------ | ------ |
`a` | [Matx](_types_opencv_matx_.matx.md) |

**Returns:** *[Matx](_types_opencv_matx_.matx.md)*

___

###  dot

▸ **dot**(`v`: [Matx](_types_opencv_matx_.matx.md)): *[Matx](_types_opencv_matx_.matx.md)*

*Defined in [types/opencv/Matx.ts:95](https://github.com/cancerberoSgx/mirada/blob/170e57c/mirada/src/types/opencv/Matx.ts#L95)*

**Parameters:**

Name | Type |
------ | ------ |
`v` | [Matx](_types_opencv_matx_.matx.md) |

**Returns:** *[Matx](_types_opencv_matx_.matx.md)*

___

###  get_minor

▸ **get_minor**(`m1`: [int](../modules/_types_opencv__hacks_.md#int), `n1`: [int](../modules/_types_opencv__hacks_.md#int), `base_row`: [int](../modules/_types_opencv__hacks_.md#int), `base_col`: [int](../modules/_types_opencv__hacks_.md#int)): *[Matx](_types_opencv_matx_.matx.md)*

*Defined in [types/opencv/Matx.ts:97](https://github.com/cancerberoSgx/mirada/blob/170e57c/mirada/src/types/opencv/Matx.ts#L97)*

**Parameters:**

Name | Type |
------ | ------ |
`m1` | [int](../modules/_types_opencv__hacks_.md#int) |
`n1` | [int](../modules/_types_opencv__hacks_.md#int) |
`base_row` | [int](../modules/_types_opencv__hacks_.md#int) |
`base_col` | [int](../modules/_types_opencv__hacks_.md#int) |

**Returns:** *[Matx](_types_opencv_matx_.matx.md)*

___

###  inv

▸ **inv**(`method?`: [int](../modules/_types_opencv__hacks_.md#int), `p_is_ok?`: any): *[Matx](_types_opencv_matx_.matx.md)*

*Defined in [types/opencv/Matx.ts:99](https://github.com/cancerberoSgx/mirada/blob/170e57c/mirada/src/types/opencv/Matx.ts#L99)*

**Parameters:**

Name | Type |
------ | ------ |
`method?` | [int](../modules/_types_opencv__hacks_.md#int) |
`p_is_ok?` | any |

**Returns:** *[Matx](_types_opencv_matx_.matx.md)*

___

###  mul

▸ **mul**(`a`: [Matx](_types_opencv_matx_.matx.md)): *[Matx](_types_opencv_matx_.matx.md)*

*Defined in [types/opencv/Matx.ts:101](https://github.com/cancerberoSgx/mirada/blob/170e57c/mirada/src/types/opencv/Matx.ts#L101)*

**Parameters:**

Name | Type |
------ | ------ |
`a` | [Matx](_types_opencv_matx_.matx.md) |

**Returns:** *[Matx](_types_opencv_matx_.matx.md)*

___

###  reshape

▸ **reshape**(`m1`: [int](../modules/_types_opencv__hacks_.md#int), `n1`: [int](../modules/_types_opencv__hacks_.md#int)): *[Matx](_types_opencv_matx_.matx.md)*

*Defined in [types/opencv/Matx.ts:103](https://github.com/cancerberoSgx/mirada/blob/170e57c/mirada/src/types/opencv/Matx.ts#L103)*

**Parameters:**

Name | Type |
------ | ------ |
`m1` | [int](../modules/_types_opencv__hacks_.md#int) |
`n1` | [int](../modules/_types_opencv__hacks_.md#int) |

**Returns:** *[Matx](_types_opencv_matx_.matx.md)*

___

###  row

▸ **row**(`i`: [int](../modules/_types_opencv__hacks_.md#int)): *[Matx](_types_opencv_matx_.matx.md)*

*Defined in [types/opencv/Matx.ts:105](https://github.com/cancerberoSgx/mirada/blob/170e57c/mirada/src/types/opencv/Matx.ts#L105)*

**Parameters:**

Name | Type |
------ | ------ |
`i` | [int](../modules/_types_opencv__hacks_.md#int) |

**Returns:** *[Matx](_types_opencv_matx_.matx.md)*

___

###  solve

▸ **solve**(`l`: [int](../modules/_types_opencv__hacks_.md#int), `rhs`: [Matx](_types_opencv_matx_.matx.md), `flags?`: [int](../modules/_types_opencv__hacks_.md#int)): *[Matx](_types_opencv_matx_.matx.md)*

*Defined in [types/opencv/Matx.ts:107](https://github.com/cancerberoSgx/mirada/blob/170e57c/mirada/src/types/opencv/Matx.ts#L107)*

**Parameters:**

Name | Type |
------ | ------ |
`l` | [int](../modules/_types_opencv__hacks_.md#int) |
`rhs` | [Matx](_types_opencv_matx_.matx.md) |
`flags?` | [int](../modules/_types_opencv__hacks_.md#int) |

**Returns:** *[Matx](_types_opencv_matx_.matx.md)*

▸ **solve**(`rhs`: [Vec](../modules/_types_opencv__hacks_.md#vec), `method`: [int](../modules/_types_opencv__hacks_.md#int)): *[Vec](../modules/_types_opencv__hacks_.md#vec)*

*Defined in [types/opencv/Matx.ts:109](https://github.com/cancerberoSgx/mirada/blob/170e57c/mirada/src/types/opencv/Matx.ts#L109)*

**Parameters:**

Name | Type |
------ | ------ |
`rhs` | [Vec](../modules/_types_opencv__hacks_.md#vec) |
`method` | [int](../modules/_types_opencv__hacks_.md#int) |

**Returns:** *[Vec](../modules/_types_opencv__hacks_.md#vec)*

___

###  t

▸ **t**(): *[Matx](_types_opencv_matx_.matx.md)*

*Defined in [types/opencv/Matx.ts:111](https://github.com/cancerberoSgx/mirada/blob/170e57c/mirada/src/types/opencv/Matx.ts#L111)*

**Returns:** *[Matx](_types_opencv_matx_.matx.md)*

___

### `Static` all

▸ **all**(`alpha`: [_Tp](../modules/_types_opencv__hacks_.md#_tp)): *[Matx](_types_opencv_matx_.matx.md)*

*Defined in [types/opencv/Matx.ts:113](https://github.com/cancerberoSgx/mirada/blob/170e57c/mirada/src/types/opencv/Matx.ts#L113)*

**Parameters:**

Name | Type |
------ | ------ |
`alpha` | [_Tp](../modules/_types_opencv__hacks_.md#_tp) |

**Returns:** *[Matx](_types_opencv_matx_.matx.md)*

___

### `Static` diag

▸ **diag**(`d`: [diag_type](../modules/_types_opencv__hacks_.md#diag_type)): *[Matx](_types_opencv_matx_.matx.md)*

*Defined in [types/opencv/Matx.ts:115](https://github.com/cancerberoSgx/mirada/blob/170e57c/mirada/src/types/opencv/Matx.ts#L115)*

**Parameters:**

Name | Type |
------ | ------ |
`d` | [diag_type](../modules/_types_opencv__hacks_.md#diag_type) |

**Returns:** *[Matx](_types_opencv_matx_.matx.md)*

___

### `Static` eye

▸ **eye**(): *[Matx](_types_opencv_matx_.matx.md)*

*Defined in [types/opencv/Matx.ts:117](https://github.com/cancerberoSgx/mirada/blob/170e57c/mirada/src/types/opencv/Matx.ts#L117)*

**Returns:** *[Matx](_types_opencv_matx_.matx.md)*

___

### `Static` ones

▸ **ones**(): *[Matx](_types_opencv_matx_.matx.md)*

*Defined in [types/opencv/Matx.ts:119](https://github.com/cancerberoSgx/mirada/blob/170e57c/mirada/src/types/opencv/Matx.ts#L119)*

**Returns:** *[Matx](_types_opencv_matx_.matx.md)*

___

### `Static` randn

▸ **randn**(`a`: [_Tp](../modules/_types_opencv__hacks_.md#_tp), `b`: [_Tp](../modules/_types_opencv__hacks_.md#_tp)): *[Matx](_types_opencv_matx_.matx.md)*

*Defined in [types/opencv/Matx.ts:121](https://github.com/cancerberoSgx/mirada/blob/170e57c/mirada/src/types/opencv/Matx.ts#L121)*

**Parameters:**

Name | Type |
------ | ------ |
`a` | [_Tp](../modules/_types_opencv__hacks_.md#_tp) |
`b` | [_Tp](../modules/_types_opencv__hacks_.md#_tp) |

**Returns:** *[Matx](_types_opencv_matx_.matx.md)*

___

### `Static` randu

▸ **randu**(`a`: [_Tp](../modules/_types_opencv__hacks_.md#_tp), `b`: [_Tp](../modules/_types_opencv__hacks_.md#_tp)): *[Matx](_types_opencv_matx_.matx.md)*

*Defined in [types/opencv/Matx.ts:123](https://github.com/cancerberoSgx/mirada/blob/170e57c/mirada/src/types/opencv/Matx.ts#L123)*

**Parameters:**

Name | Type |
------ | ------ |
`a` | [_Tp](../modules/_types_opencv__hacks_.md#_tp) |
`b` | [_Tp](../modules/_types_opencv__hacks_.md#_tp) |

**Returns:** *[Matx](_types_opencv_matx_.matx.md)*

___

### `Static` zeros

▸ **zeros**(): *[Matx](_types_opencv_matx_.matx.md)*

*Defined in [types/opencv/Matx.ts:125](https://github.com/cancerberoSgx/mirada/blob/170e57c/mirada/src/types/opencv/Matx.ts#L125)*

**Returns:** *[Matx](_types_opencv_matx_.matx.md)*