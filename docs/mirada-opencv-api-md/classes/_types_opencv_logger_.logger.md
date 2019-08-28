**[mirada](../README.md)**

[Globals](../README.md) › ["types/opencv/Logger"](../modules/_types_opencv_logger_.md) › [Logger](_types_opencv_logger_.logger.md)

# Class: Logger

## Hierarchy

* **Logger**

## Index

### Methods

* [error](_types_opencv_logger_.logger.md#static-error)
* [fatal](_types_opencv_logger_.logger.md#static-fatal)
* [info](_types_opencv_logger_.logger.md#static-info)
* [log](_types_opencv_logger_.logger.md#static-log)
* [setDestination](_types_opencv_logger_.logger.md#static-setdestination)
* [setLevel](_types_opencv_logger_.logger.md#static-setlevel)
* [warn](_types_opencv_logger_.logger.md#static-warn)

## Methods

### `Static` error

▸ **error**(`fmt`: any, `arg121`: any): *[int](../modules/_types_opencv__hacks_.md#int)*

**Parameters:**

Name | Type |
------ | ------ |
`fmt` | any |
`arg121` | any |

**Returns:** *[int](../modules/_types_opencv__hacks_.md#int)*

___

### `Static` fatal

▸ **fatal**(`fmt`: any, `arg122`: any): *[int](../modules/_types_opencv__hacks_.md#int)*

**Parameters:**

Name | Type |
------ | ------ |
`fmt` | any |
`arg122` | any |

**Returns:** *[int](../modules/_types_opencv__hacks_.md#int)*

___

### `Static` info

▸ **info**(`fmt`: any, `arg123`: any): *[int](../modules/_types_opencv__hacks_.md#int)*

**Parameters:**

Name | Type |
------ | ------ |
`fmt` | any |
`arg123` | any |

**Returns:** *[int](../modules/_types_opencv__hacks_.md#int)*

___

### `Static` log

▸ **log**(`level`: [int](../modules/_types_opencv__hacks_.md#int), `fmt`: any, `arg124`: any): *[int](../modules/_types_opencv__hacks_.md#int)*

  Print log message

**Parameters:**

Name | Type | Description |
------ | ------ | ------ |
`level` | [int](../modules/_types_opencv__hacks_.md#int) | Log level  |
`fmt` | any | Message format  |
`arg124` | any | - |

**Returns:** *[int](../modules/_types_opencv__hacks_.md#int)*

___

### `Static` setDestination

▸ **setDestination**(`name`: any): *void*

  Sets the logging destination

**Parameters:**

Name | Type | Description |
------ | ------ | ------ |
`name` | any | Filename or NULL for console  |

**Returns:** *void*

___

### `Static` setLevel

▸ **setLevel**(`level`: [int](../modules/_types_opencv__hacks_.md#int)): *void*

  Sets the logging level. All messages with lower priority will be ignored.

**Parameters:**

Name | Type | Description |
------ | ------ | ------ |
`level` | [int](../modules/_types_opencv__hacks_.md#int) | Logging level  |

**Returns:** *void*

___

### `Static` warn

▸ **warn**(`fmt`: any, `arg125`: any): *[int](../modules/_types_opencv__hacks_.md#int)*

**Parameters:**

Name | Type |
------ | ------ |
`fmt` | any |
`arg125` | any |

**Returns:** *[int](../modules/_types_opencv__hacks_.md#int)*