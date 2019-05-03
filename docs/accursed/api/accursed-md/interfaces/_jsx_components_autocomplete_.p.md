[accursed](../README.md) > ["jsx-components/autocomplete"](../modules/_jsx_components_autocomplete_.md) > [P](../interfaces/_jsx_components_autocomplete_.p.md)

# Interface: P

## Hierarchy

 `object`

**↳ P**

## Index

### Properties

* [inputOptions](_jsx_components_autocomplete_.p.md#inputoptions)
* [listOptions](_jsx_components_autocomplete_.p.md#listoptions)
* [options](_jsx_components_autocomplete_.p.md#options)
* [optionsMax](_jsx_components_autocomplete_.p.md#optionsmax)
* [suggestionRenderThrottle](_jsx_components_autocomplete_.p.md#suggestionrenderthrottle)

### Methods

* [onChange](_jsx_components_autocomplete_.p.md#onchange)

---

## Properties

<a id="inputoptions"></a>

### `<Optional>` inputOptions

**● inputOptions**: *[TextboxOptions](_declarations_blessed_d_.widgets.textboxoptions.md)*

*Defined in [jsx-components/autocomplete.tsx:28](https://github.com/cancerberoSgx/accursed/blob/978b980/src/jsx-components/autocomplete.tsx#L28)*

___
<a id="listoptions"></a>

### `<Optional>` listOptions

**● listOptions**: *[ListOptions](_declarations_blessed_d_.widgets.listoptions.md)*

*Defined in [jsx-components/autocomplete.tsx:29](https://github.com/cancerberoSgx/accursed/blob/978b980/src/jsx-components/autocomplete.tsx#L29)*

___
<a id="options"></a>

### `<Optional>` options

**● options**: *`string`[]*

*Defined in [jsx-components/autocomplete.tsx:21](https://github.com/cancerberoSgx/accursed/blob/978b980/src/jsx-components/autocomplete.tsx#L21)*

Suggestions array.

___
<a id="optionsmax"></a>

### `<Optional>` optionsMax

**● optionsMax**: *`number`*

*Defined in [jsx-components/autocomplete.tsx:26](https://github.com/cancerberoSgx/accursed/blob/978b980/src/jsx-components/autocomplete.tsx#L26)*

Maximum amount of options suggested to the user for an input. Note: Suggesting too much options can degrade the user experience while typing. Default value is 10.

___
<a id="suggestionrenderthrottle"></a>

### `<Optional>` suggestionRenderThrottle

**● suggestionRenderThrottle**: *`number`*

*Defined in [jsx-components/autocomplete.tsx:16](https://github.com/cancerberoSgx/accursed/blob/978b980/src/jsx-components/autocomplete.tsx#L16)*

Throttling time to render suggestion list. Default value is 0

___

## Methods

<a id="onchange"></a>

### `<Optional>` onChange

▸ **onChange**(e: *[ArtificialEvent](_jsx_types_.artificialevent.md)<[Textbox](../classes/_declarations_blessed_d_.widget.textbox.md)> & `object`*): `void`

*Defined in [jsx-components/autocomplete.tsx:7](https://github.com/cancerberoSgx/accursed/blob/978b980/src/jsx-components/autocomplete.tsx#L7)*

**Parameters:**

| Name | Type |
| ------ | ------ |
| e | [ArtificialEvent](_jsx_types_.artificialevent.md)<[Textbox](../classes/_declarations_blessed_d_.widget.textbox.md)> & `object` |

**Returns:** `void`

___

