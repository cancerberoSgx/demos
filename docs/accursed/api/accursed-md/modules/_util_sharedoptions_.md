[accursed](../README.md) › [Globals](../globals.md) › ["util/sharedOptions"](_util_sharedoptions_.md)

# External module: "util/sharedOptions"

## Index

### Functions

* [focusableBorderedOpts](_util_sharedoptions_.md#const-focusableborderedopts)
* [focusableOpts](_util_sharedoptions_.md#const-focusableopts)
* [scrollableOpts](_util_sharedoptions_.md#const-scrollableopts)

## Functions

### `Const` focusableBorderedOpts

▸ **focusableBorderedOpts**(): *object*

*Defined in [util/sharedOptions.ts:40](https://github.com/cancerberoSgx/accursed/blob/468bf3c/src/util/sharedOptions.ts#L40)*

**Returns:** *object*

* **border**: *string* = "line"

* ### **style**: *object*

  * **border**: *object*

    * **fg**: *string* = "cyan"

    * **type**: *string* = "line"

  * **focus**: *object*

    * **bg**: *string* = "lightgray"

    * **fg**: *string* = "black"

    * **border**: *object*

      * **fg**: *string* = "red"

___

### `Const` focusableOpts

▸ **focusableOpts**(): *object*

*Defined in [util/sharedOptions.ts:5](https://github.com/cancerberoSgx/accursed/blob/468bf3c/src/util/sharedOptions.ts#L5)*

**Returns:** *object*

* **border**: *string* = "line"

* **clickable**: *true* = true

* **focusable**: *true* = true

* **input**: *true* = true

* **keyable**: *true* = true

* **keys**: *true* = true

* **mouse**: *true* = true

* ### **style**: *object*

  * **bg**: *string* = "lightgray"

  * **fg**: *string* = "black"

  * **border**: *object*

    * **fg**: *string* = "cyan"

    * **type**: *string* = "line"

  * **focus**: *object*

    * **bg**: *string* = "#507468"

    * **fg**: *string* = "black"

    * **border**: *object*

      * **fg**: *string* = "red"

  * **item**: *object*

    * **bg**: *string* = "lightgray"

    * **fg**: *string* = "black"

  * **selected**: *object*

    * **bg**: *string* = "magenta"

    * **fg**: *string* = "black"

    * **underline**: *true* = true

___

### `Const` scrollableOpts

▸ **scrollableOpts**(): *object*

*Defined in [util/sharedOptions.ts:59](https://github.com/cancerberoSgx/accursed/blob/468bf3c/src/util/sharedOptions.ts#L59)*

**Returns:** *object*

* **scrollable**: *true* = true

* ### **scrollbar**: *object*

  * **inverse**: *true* = true
