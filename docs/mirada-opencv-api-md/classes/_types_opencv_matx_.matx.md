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

**Returns:** *[Matx](_types_opencv_matx_.matx.md)*

\+ **new Matx**(`v0`: [_Tp](../modules/_types_opencv__hacks_.md#_tp)): *[Matx](_types_opencv_matx_.matx.md)*

**Parameters:**

Name | Type |
------ | ------ |
`v0` | [_Tp](../modules/_types_opencv__hacks_.md#_tp) |

**Returns:** *[Matx](_types_opencv_matx_.matx.md)*

\+ **new Matx**(`v0`: [_Tp](../modules/_types_opencv__hacks_.md#_tp), `v1`: [_Tp](../modules/_types_opencv__hacks_.md#_tp)): *[Matx](_types_opencv_matx_.matx.md)*

**Parameters:**

Name | Type |
------ | ------ |
`v0` | [_Tp](../modules/_types_opencv__hacks_.md#_tp) |
`v1` | [_Tp](../modules/_types_opencv__hacks_.md#_tp) |

**Returns:** *[Matx](_types_opencv_matx_.matx.md)*

\+ **new Matx**(`v0`: [_Tp](../modules/_types_opencv__hacks_.md#_tp), `v1`: [_Tp](../modules/_types_opencv__hacks_.md#_tp), `v2`: [_Tp](../modules/_types_opencv__hacks_.md#_tp)): *[Matx](_types_opencv_matx_.matx.md)*

**Parameters:**

Name | Type |
------ | ------ |
`v0` | [_Tp](../modules/_types_opencv__hacks_.md#_tp) |
`v1` | [_Tp](../modules/_types_opencv__hacks_.md#_tp) |
`v2` | [_Tp](../modules/_types_opencv__hacks_.md#_tp) |

**Returns:** *[Matx](_types_opencv_matx_.matx.md)*

\+ **new Matx**(`v0`: [_Tp](../modules/_types_opencv__hacks_.md#_tp), `v1`: [_Tp](../modules/_types_opencv__hacks_.md#_tp), `v2`: [_Tp](../modules/_types_opencv__hacks_.md#_tp), `v3`: [_Tp](../modules/_types_opencv__hacks_.md#_tp)): *[Matx](_types_opencv_matx_.matx.md)*

**Parameters:**

Name | Type |
------ | ------ |
`v0` | [_Tp](../modules/_types_opencv__hacks_.md#_tp) |
`v1` | [_Tp](../modules/_types_opencv__hacks_.md#_tp) |
`v2` | [_Tp](../modules/_types_opencv__hacks_.md#_tp) |
`v3` | [_Tp](../modules/_types_opencv__hacks_.md#_tp) |

**Returns:** *[Matx](_types_opencv_matx_.matx.md)*

\+ **new Matx**(`v0`: [_Tp](../modules/_types_opencv__hacks_.md#_tp), `v1`: [_Tp](../modules/_types_opencv__hacks_.md#_tp), `v2`: [_Tp](../modules/_types_opencv__hacks_.md#_tp), `v3`: [_Tp](../modules/_types_opencv__hacks_.md#_tp), `v4`: [_Tp](../modules/_types_opencv__hacks_.md#_tp)): *[Matx](_types_opencv_matx_.matx.md)*

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

**Parameters:**

Name | Type |
------ | ------ |
`vals` | any |

**Returns:** *[Matx](_types_opencv_matx_.matx.md)*

\+ **new Matx**(`arg334`: any): *[Matx](_types_opencv_matx_.matx.md)*

**Parameters:**

Name | Type |
------ | ------ |
`arg334` | any |

**Returns:** *[Matx](_types_opencv_matx_.matx.md)*

\+ **new Matx**(`a`: [Matx](_types_opencv_matx_.matx.md), `b`: [Matx](_types_opencv_matx_.matx.md), `arg335`: [Matx_AddOp](../modules/_types_opencv__hacks_.md#matx_addop)): *[Matx](_types_opencv_matx_.matx.md)*

**Parameters:**

Name | Type |
------ | ------ |
`a` | [Matx](_types_opencv_matx_.matx.md) |
`b` | [Matx](_types_opencv_matx_.matx.md) |
`arg335` | [Matx_AddOp](../modules/_types_opencv__hacks_.md#matx_addop) |

**Returns:** *[Matx](_types_opencv_matx_.matx.md)*

\+ **new Matx**(`a`: [Matx](_types_opencv_matx_.matx.md), `b`: [Matx](_types_opencv_matx_.matx.md), `arg336`: [Matx_SubOp](../modules/_types_opencv__hacks_.md#matx_subop)): *[Matx](_types_opencv_matx_.matx.md)*

**Parameters:**

Name | Type |
------ | ------ |
`a` | [Matx](_types_opencv_matx_.matx.md) |
`b` | [Matx](_types_opencv_matx_.matx.md) |
`arg336` | [Matx_SubOp](../modules/_types_opencv__hacks_.md#matx_subop) |

**Returns:** *[Matx](_types_opencv_matx_.matx.md)*

\+ **new Matx**(`arg337`: any, `a`: [Matx](_types_opencv_matx_.matx.md), `alpha`: [_T2](../modules/_types_opencv__hacks_.md#_t2), `arg338`: [Matx_ScaleOp](../modules/_types_opencv__hacks_.md#matx_scaleop)): *[Matx](_types_opencv_matx_.matx.md)*

**Parameters:**

Name | Type |
------ | ------ |
`arg337` | any |
`a` | [Matx](_types_opencv_matx_.matx.md) |
`alpha` | [_T2](../modules/_types_opencv__hacks_.md#_t2) |
`arg338` | [Matx_ScaleOp](../modules/_types_opencv__hacks_.md#matx_scaleop) |

**Returns:** *[Matx](_types_opencv_matx_.matx.md)*

\+ **new Matx**(`a`: [Matx](_types_opencv_matx_.matx.md), `b`: [Matx](_types_opencv_matx_.matx.md), `arg339`: [Matx_MulOp](../modules/_types_opencv__hacks_.md#matx_mulop)): *[Matx](_types_opencv_matx_.matx.md)*

**Parameters:**

Name | Type |
------ | ------ |
`a` | [Matx](_types_opencv_matx_.matx.md) |
`b` | [Matx](_types_opencv_matx_.matx.md) |
`arg339` | [Matx_MulOp](../modules/_types_opencv__hacks_.md#matx_mulop) |

**Returns:** *[Matx](_types_opencv_matx_.matx.md)*

\+ **new Matx**(`a`: [Matx](_types_opencv_matx_.matx.md), `b`: [Matx](_types_opencv_matx_.matx.md), `arg340`: [Matx_DivOp](../modules/_types_opencv__hacks_.md#matx_divop)): *[Matx](_types_opencv_matx_.matx.md)*

**Parameters:**

Name | Type |
------ | ------ |
`a` | [Matx](_types_opencv_matx_.matx.md) |
`b` | [Matx](_types_opencv_matx_.matx.md) |
`arg340` | [Matx_DivOp](../modules/_types_opencv__hacks_.md#matx_divop) |

**Returns:** *[Matx](_types_opencv_matx_.matx.md)*

\+ **new Matx**(`l`: [int](../modules/_types_opencv__hacks_.md#int), `a`: [Matx](_types_opencv_matx_.matx.md), `b`: [Matx](_types_opencv_matx_.matx.md), `arg341`: [Matx_MatMulOp](../modules/_types_opencv__hacks_.md#matx_matmulop)): *[Matx](_types_opencv_matx_.matx.md)*

**Parameters:**

Name | Type |
------ | ------ |
`l` | [int](../modules/_types_opencv__hacks_.md#int) |
`a` | [Matx](_types_opencv_matx_.matx.md) |
`b` | [Matx](_types_opencv_matx_.matx.md) |
`arg341` | [Matx_MatMulOp](../modules/_types_opencv__hacks_.md#matx_matmulop) |

**Returns:** *[Matx](_types_opencv_matx_.matx.md)*

\+ **new Matx**(`a`: [Matx](_types_opencv_matx_.matx.md), `arg342`: [Matx_TOp](../modules/_types_opencv__hacks_.md#matx_top)): *[Matx](_types_opencv_matx_.matx.md)*

**Parameters:**

Name | Type |
------ | ------ |
`a` | [Matx](_types_opencv_matx_.matx.md) |
`arg342` | [Matx_TOp](../modules/_types_opencv__hacks_.md#matx_top) |

**Returns:** *[Matx](_types_opencv_matx_.matx.md)*

## Properties

###  val

• **val**: *[_Tp](../modules/_types_opencv__hacks_.md#_tp)*

## Methods

###  col

▸ **col**(`i`: [int](../modules/_types_opencv__hacks_.md#int)): *[Matx](_types_opencv_matx_.matx.md)*

**Parameters:**

Name | Type |
------ | ------ |
`i` | [int](../modules/_types_opencv__hacks_.md#int) |

**Returns:** *[Matx](_types_opencv_matx_.matx.md)*

___

###  ddot

▸ **ddot**(`v`: [Matx](_types_opencv_matx_.matx.md)): *[Matx](_types_opencv_matx_.matx.md)*

**Parameters:**

Name | Type |
------ | ------ |
`v` | [Matx](_types_opencv_matx_.matx.md) |

**Returns:** *[Matx](_types_opencv_matx_.matx.md)*

___

###  diag

▸ **diag**(): *[diag_type](../modules/_types_opencv__hacks_.md#diag_type)*

**Returns:** *[diag_type](../modules/_types_opencv__hacks_.md#diag_type)*

___

###  div

▸ **div**(`a`: [Matx](_types_opencv_matx_.matx.md)): *[Matx](_types_opencv_matx_.matx.md)*

**Parameters:**

Name | Type |
------ | ------ |
`a` | [Matx](_types_opencv_matx_.matx.md) |

**Returns:** *[Matx](_types_opencv_matx_.matx.md)*

___

###  dot

▸ **dot**(`v`: [Matx](_types_opencv_matx_.matx.md)): *[Matx](_types_opencv_matx_.matx.md)*

**Parameters:**

Name | Type |
------ | ------ |
`v` | [Matx](_types_opencv_matx_.matx.md) |

**Returns:** *[Matx](_types_opencv_matx_.matx.md)*

___

###  get_minor

▸ **get_minor**(`m1`: [int](../modules/_types_opencv__hacks_.md#int), `n1`: [int](../modules/_types_opencv__hacks_.md#int), `base_row`: [int](../modules/_types_opencv__hacks_.md#int), `base_col`: [int](../modules/_types_opencv__hacks_.md#int)): *[Matx](_types_opencv_matx_.matx.md)*

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

**Parameters:**

Name | Type |
------ | ------ |
`method?` | [int](../modules/_types_opencv__hacks_.md#int) |
`p_is_ok?` | any |

**Returns:** *[Matx](_types_opencv_matx_.matx.md)*

___

###  mul

▸ **mul**(`a`: [Matx](_types_opencv_matx_.matx.md)): *[Matx](_types_opencv_matx_.matx.md)*

**Parameters:**

Name | Type |
------ | ------ |
`a` | [Matx](_types_opencv_matx_.matx.md) |

**Returns:** *[Matx](_types_opencv_matx_.matx.md)*

___

###  reshape

▸ **reshape**(`m1`: [int](../modules/_types_opencv__hacks_.md#int), `n1`: [int](../modules/_types_opencv__hacks_.md#int)): *[Matx](_types_opencv_matx_.matx.md)*

**Parameters:**

Name | Type |
------ | ------ |
`m1` | [int](../modules/_types_opencv__hacks_.md#int) |
`n1` | [int](../modules/_types_opencv__hacks_.md#int) |

**Returns:** *[Matx](_types_opencv_matx_.matx.md)*

___

###  row

▸ **row**(`i`: [int](../modules/_types_opencv__hacks_.md#int)): *[Matx](_types_opencv_matx_.matx.md)*

**Parameters:**

Name | Type |
------ | ------ |
`i` | [int](../modules/_types_opencv__hacks_.md#int) |

**Returns:** *[Matx](_types_opencv_matx_.matx.md)*

___

###  solve

▸ **solve**(`l`: [int](../modules/_types_opencv__hacks_.md#int), `rhs`: [Matx](_types_opencv_matx_.matx.md), `flags?`: [int](../modules/_types_opencv__hacks_.md#int)): *[Matx](_types_opencv_matx_.matx.md)*

**Parameters:**

Name | Type |
------ | ------ |
`l` | [int](../modules/_types_opencv__hacks_.md#int) |
`rhs` | [Matx](_types_opencv_matx_.matx.md) |
`flags?` | [int](../modules/_types_opencv__hacks_.md#int) |

**Returns:** *[Matx](_types_opencv_matx_.matx.md)*

▸ **solve**(`rhs`: [Vec](../modules/_types_opencv__hacks_.md#vec), `method`: [int](../modules/_types_opencv__hacks_.md#int)): *[Vec](../modules/_types_opencv__hacks_.md#vec)*

**Parameters:**

Name | Type |
------ | ------ |
`rhs` | [Vec](../modules/_types_opencv__hacks_.md#vec) |
`method` | [int](../modules/_types_opencv__hacks_.md#int) |

**Returns:** *[Vec](../modules/_types_opencv__hacks_.md#vec)*

___

###  t

▸ **t**(): *[Matx](_types_opencv_matx_.matx.md)*

**Returns:** *[Matx](_types_opencv_matx_.matx.md)*

___

### `Static` all

▸ **all**(`alpha`: [_Tp](../modules/_types_opencv__hacks_.md#_tp)): *[Matx](_types_opencv_matx_.matx.md)*

**Parameters:**

Name | Type |
------ | ------ |
`alpha` | [_Tp](../modules/_types_opencv__hacks_.md#_tp) |

**Returns:** *[Matx](_types_opencv_matx_.matx.md)*

___

### `Static` diag

▸ **diag**(`d`: [diag_type](../modules/_types_opencv__hacks_.md#diag_type)): *[Matx](_types_opencv_matx_.matx.md)*

**Parameters:**

Name | Type |
------ | ------ |
`d` | [diag_type](../modules/_types_opencv__hacks_.md#diag_type) |

**Returns:** *[Matx](_types_opencv_matx_.matx.md)*

___

### `Static` eye

▸ **eye**(): *[Matx](_types_opencv_matx_.matx.md)*

**Returns:** *[Matx](_types_opencv_matx_.matx.md)*

___

### `Static` ones

▸ **ones**(): *[Matx](_types_opencv_matx_.matx.md)*

**Returns:** *[Matx](_types_opencv_matx_.matx.md)*

___

### `Static` randn

▸ **randn**(`a`: [_Tp](../modules/_types_opencv__hacks_.md#_tp), `b`: [_Tp](../modules/_types_opencv__hacks_.md#_tp)): *[Matx](_types_opencv_matx_.matx.md)*

**Parameters:**

Name | Type |
------ | ------ |
`a` | [_Tp](../modules/_types_opencv__hacks_.md#_tp) |
`b` | [_Tp](../modules/_types_opencv__hacks_.md#_tp) |

**Returns:** *[Matx](_types_opencv_matx_.matx.md)*

___

### `Static` randu

▸ **randu**(`a`: [_Tp](../modules/_types_opencv__hacks_.md#_tp), `b`: [_Tp](../modules/_types_opencv__hacks_.md#_tp)): *[Matx](_types_opencv_matx_.matx.md)*

**Parameters:**

Name | Type |
------ | ------ |
`a` | [_Tp](../modules/_types_opencv__hacks_.md#_tp) |
`b` | [_Tp](../modules/_types_opencv__hacks_.md#_tp) |

**Returns:** *[Matx](_types_opencv_matx_.matx.md)*

___

### `Static` zeros

▸ **zeros**(): *[Matx](_types_opencv_matx_.matx.md)*

**Returns:** *[Matx](_types_opencv_matx_.matx.md)*