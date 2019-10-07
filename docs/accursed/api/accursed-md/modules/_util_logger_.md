[accursed](../README.md) › [Globals](../globals.md) › ["util/logger"](_util_logger_.md)

# External module: "util/logger"

## Index

### Variables

* [screenLoggerInstance](_util_logger_.md#let-screenloggerinstance)

### Functions

* [debug](_util_logger_.md#debug)
* [screenLogger](_util_logger_.md#screenlogger)

## Variables

### `Let` screenLoggerInstance

• **screenLoggerInstance**: *[Log](../classes/_declarations_blessed_d_.widgets.log.md)*

*Defined in [util/logger.ts:47](https://github.com/cancerberoSgx/accursed/blob/5b2518e/src/util/logger.ts#L47)*

## Functions

###  debug

▸ **debug**(...`args`: any[]): *void*

*Defined in [util/logger.ts:8](https://github.com/cancerberoSgx/accursed/blob/5b2518e/src/util/logger.ts#L8)*

**Parameters:**

Name | Type |
------ | ------ |
`...args` | any[] |

**Returns:** *void*

___

###  screenLogger

▸ **screenLogger**(`screen`: [Screen](../classes/_declarations_blessed_d_.widgets.screen.md)): *object*

*Defined in [util/logger.ts:22](https://github.com/cancerberoSgx/accursed/blob/5b2518e/src/util/logger.ts#L22)*

Creates a log element bottom-right corner of the screen and returns an object with log() method

**Parameters:**

Name | Type |
------ | ------ |
`screen` | [Screen](../classes/_declarations_blessed_d_.widgets.screen.md) |

**Returns:** *object*

* **instance**: *[Log](../classes/_declarations_blessed_d_.widgets.log.md)* =  screenLoggerInstance

* **log**(...`args`: any[]): *void*
