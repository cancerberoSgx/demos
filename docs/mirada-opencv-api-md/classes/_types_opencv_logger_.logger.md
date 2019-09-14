[mirada](../README.md) › ["types/opencv/Logger"](../modules/_types_opencv_logger_.md) › [Logger](_types_opencv_logger_.logger.md)

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

*Defined in [types/opencv/Logger.ts:6](https://github.com/cancerberoSgx/mirada/blob/f0c0267/mirada/src/types/opencv/Logger.ts#L6)*

**Parameters:**

Name | Type |
------ | ------ |
`fmt` | any |
`arg121` | any |

**Returns:** *[int](../modules/_types_opencv__hacks_.md#int)*

___

### `Static` fatal

▸ **fatal**(`fmt`: any, `arg122`: any): *[int](../modules/_types_opencv__hacks_.md#int)*

*Defined in [types/opencv/Logger.ts:8](https://github.com/cancerberoSgx/mirada/blob/f0c0267/mirada/src/types/opencv/Logger.ts#L8)*

**Parameters:**

Name | Type |
------ | ------ |
`fmt` | any |
`arg122` | any |

**Returns:** *[int](../modules/_types_opencv__hacks_.md#int)*

___

### `Static` info

▸ **info**(`fmt`: any, `arg123`: any): *[int](../modules/_types_opencv__hacks_.md#int)*

*Defined in [types/opencv/Logger.ts:10](https://github.com/cancerberoSgx/mirada/blob/f0c0267/mirada/src/types/opencv/Logger.ts#L10)*

**Parameters:**

Name | Type |
------ | ------ |
`fmt` | any |
`arg123` | any |

**Returns:** *[int](../modules/_types_opencv__hacks_.md#int)*

___

### `Static` log

▸ **log**(`level`: [int](../modules/_types_opencv__hacks_.md#int), `fmt`: any, `arg124`: any): *[int](../modules/_types_opencv__hacks_.md#int)*

*Defined in [types/opencv/Logger.ts:19](https://github.com/cancerberoSgx/mirada/blob/f0c0267/mirada/src/types/opencv/Logger.ts#L19)*

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

*Defined in [types/opencv/Logger.ts:26](https://github.com/cancerberoSgx/mirada/blob/f0c0267/mirada/src/types/opencv/Logger.ts#L26)*

  Sets the logging destination

**Parameters:**

Name | Type | Description |
------ | ------ | ------ |
`name` | any | Filename or NULL for console  |

**Returns:** *void*

___

### `Static` setLevel

▸ **setLevel**(`level`: [int](../modules/_types_opencv__hacks_.md#int)): *void*

*Defined in [types/opencv/Logger.ts:33](https://github.com/cancerberoSgx/mirada/blob/f0c0267/mirada/src/types/opencv/Logger.ts#L33)*

  Sets the logging level. All messages with lower priority will be ignored.

**Parameters:**

Name | Type | Description |
------ | ------ | ------ |
`level` | [int](../modules/_types_opencv__hacks_.md#int) | Logging level  |

**Returns:** *void*

___

### `Static` warn

▸ **warn**(`fmt`: any, `arg125`: any): *[int](../modules/_types_opencv__hacks_.md#int)*

*Defined in [types/opencv/Logger.ts:35](https://github.com/cancerberoSgx/mirada/blob/f0c0267/mirada/src/types/opencv/Logger.ts#L35)*

**Parameters:**

Name | Type |
------ | ------ |
`fmt` | any |
`arg125` | any |

**Returns:** *[int](../modules/_types_opencv__hacks_.md#int)*