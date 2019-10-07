[accursed](../README.md) › [Globals](../globals.md) › ["blessed/maximize"](../modules/_blessed_maximize_.md) › [Options](_blessed_maximize_.options.md)

# Interface: Options

## Hierarchy

* **Options**

## Index

### Properties

* [auto](_blessed_maximize_.options.md#optional-auto)

## Properties

### `Optional` auto

• **auto**? : *boolean*

*Defined in [blessed/maximize.ts:13](https://github.com/cancerberoSgx/accursed/blob/5b2518e/src/blessed/maximize.ts#L13)*

If true, the framework will automatically add a "Restore" button when maximized that, when clicked, will
restore the element to its original size and parent. If false, the element itself is responsible of
providing such thing, probably with a button inside of it that allow the user to restore the element,
probably calling setMaximized(el, false)
