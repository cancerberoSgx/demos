**[mirada](../README.md)**

[Globals](../README.md) › ["types/opencv/Exception"](../modules/_types_opencv_exception_.md) › [Exception](_types_opencv_exception_.exception.md)

# Class: Exception

This class encapsulates all or almost all necessary information about the error happened in the
program. The exception is usually constructed and thrown implicitly via CV_Error and CV_Error_
macros.

[error](#db/de0/group__core__utils_1gacbd081fdb20423a63cf731569ba70b2b})

Source:
[opencv2/core.hpp](https://github.com/opencv/opencv/tree/master/modules/core/include/opencv2/core.hpp#L135).

## Hierarchy

* **Exception**

## Index

### Constructors

* [constructor](_types_opencv_exception_.exception.md#constructor)

### Properties

* [code](_types_opencv_exception_.exception.md#code)
* [err](_types_opencv_exception_.exception.md#err)
* [file](_types_opencv_exception_.exception.md#file)
* [func](_types_opencv_exception_.exception.md#func)
* [line](_types_opencv_exception_.exception.md#line)
* [msg](_types_opencv_exception_.exception.md#msg)

### Methods

* [formatMessage](_types_opencv_exception_.exception.md#formatmessage)
* [what](_types_opencv_exception_.exception.md#what)

## Constructors

###  constructor

\+ **new Exception**(): *[Exception](_types_opencv_exception_.exception.md)*

  Default constructor

**Returns:** *[Exception](_types_opencv_exception_.exception.md)*

\+ **new Exception**(`_code`: [int](../modules/_types_opencv__hacks_.md#int), `_err`: String, `_func`: String, `_file`: String, `_line`: [int](../modules/_types_opencv__hacks_.md#int)): *[Exception](_types_opencv_exception_.exception.md)*

  Full constructor. Normally the constructor is not called explicitly. Instead, the macros
[CV_Error()], [CV_Error_()] and [CV_Assert()] are used.

**Parameters:**

Name | Type |
------ | ------ |
`_code` | [int](../modules/_types_opencv__hacks_.md#int) |
`_err` | String |
`_func` | String |
`_file` | String |
`_line` | [int](../modules/_types_opencv__hacks_.md#int) |

**Returns:** *[Exception](_types_opencv_exception_.exception.md)*

## Properties

###  code

• **code**: *[int](../modules/_types_opencv__hacks_.md#int)*

  CVStatus

___

###  err

• **err**: *String*

___

###  file

• **file**: *String*

___

###  func

• **func**: *String*

___

###  line

• **line**: *[int](../modules/_types_opencv__hacks_.md#int)*

___

###  msg

• **msg**: *String*

## Methods

###  formatMessage

▸ **formatMessage**(): *void*

**Returns:** *void*

___

###  what

▸ **what**(): *any*

  the error description and the context as a text string.

**Returns:** *any*