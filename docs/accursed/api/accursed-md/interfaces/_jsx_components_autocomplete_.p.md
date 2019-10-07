[accursed](../README.md) › [Globals](../globals.md) › ["jsx-components/autocomplete"](../modules/_jsx_components_autocomplete_.md) › [P](_jsx_components_autocomplete_.p.md)

# Interface: P

## Hierarchy

* object

  ↳ **P**

## Index

### Properties

* [inputOptions](_jsx_components_autocomplete_.p.md#optional-inputoptions)
* [listOptions](_jsx_components_autocomplete_.p.md#optional-listoptions)
* [options](_jsx_components_autocomplete_.p.md#optional-options)
* [optionsMax](_jsx_components_autocomplete_.p.md#optional-optionsmax)
* [suggestionRenderThrottle](_jsx_components_autocomplete_.p.md#optional-suggestionrenderthrottle)

### Methods

* [onChange](_jsx_components_autocomplete_.p.md#optional-onchange)
* [onSelectOption](_jsx_components_autocomplete_.p.md#optional-onselectoption)

## Properties

### `Optional` inputOptions

• **inputOptions**? : *[TextboxOptions](_declarations_blessed_d_.widgets.textboxoptions.md)*

*Defined in [jsx-components/autocomplete.tsx:39](https://github.com/cancerberoSgx/accursed/blob/5b2518e/src/jsx-components/autocomplete.tsx#L39)*

___

### `Optional` listOptions

• **listOptions**? : *[ListOptions](_declarations_blessed_d_.widgets.listoptions.md)*

*Defined in [jsx-components/autocomplete.tsx:40](https://github.com/cancerberoSgx/accursed/blob/5b2518e/src/jsx-components/autocomplete.tsx#L40)*

___

### `Optional` options

• **options**? : *string[]*

*Defined in [jsx-components/autocomplete.tsx:32](https://github.com/cancerberoSgx/accursed/blob/5b2518e/src/jsx-components/autocomplete.tsx#L32)*

Suggestions array.

___

### `Optional` optionsMax

• **optionsMax**? : *number*

*Defined in [jsx-components/autocomplete.tsx:37](https://github.com/cancerberoSgx/accursed/blob/5b2518e/src/jsx-components/autocomplete.tsx#L37)*

Maximum amount of options suggested to the user for an input. Note: Suggesting too much options can degrade the user experience while typing. Default value is 10.

___

### `Optional` suggestionRenderThrottle

• **suggestionRenderThrottle**? : *number*

*Defined in [jsx-components/autocomplete.tsx:27](https://github.com/cancerberoSgx/accursed/blob/5b2518e/src/jsx-components/autocomplete.tsx#L27)*

Throttling time to render suggestion list. Default value is 0

## Methods

### `Optional` onChange

▸ **onChange**(`e`: [ArtificialEvent](_jsx_types_.artificialevent.md)‹[Textbox](../classes/_declarations_blessed_d_.widget.textbox.md)› & object): *void*

*Defined in [jsx-components/autocomplete.tsx:7](https://github.com/cancerberoSgx/accursed/blob/5b2518e/src/jsx-components/autocomplete.tsx#L7)*

**Parameters:**

Name | Type |
------ | ------ |
`e` | [ArtificialEvent](_jsx_types_.artificialevent.md)‹[Textbox](../classes/_declarations_blessed_d_.widget.textbox.md)› & object |

**Returns:** *void*

___

### `Optional` onSelectOption

▸ **onSelectOption**(`e`: [ArtificialEvent](_jsx_types_.artificialevent.md)‹[Textbox](../classes/_declarations_blessed_d_.widget.textbox.md)› & object): *void*

*Defined in [jsx-components/autocomplete.tsx:19](https://github.com/cancerberoSgx/accursed/blob/5b2518e/src/jsx-components/autocomplete.tsx#L19)*

Notifies when the user scrolls through the options using the arrow keys or mouse wheel. It doesn't  when the user confirm the selection pressing enter, for that use [onChange](_jsx_components_autocomplete_.p.md#optional-onchange)

**Parameters:**

Name | Type |
------ | ------ |
`e` | [ArtificialEvent](_jsx_types_.artificialevent.md)‹[Textbox](../classes/_declarations_blessed_d_.widget.textbox.md)› & object |

**Returns:** *void*
