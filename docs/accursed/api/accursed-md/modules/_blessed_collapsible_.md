[accursed](../README.md) > ["blessed/collapsible"](../modules/_blessed_collapsible_.md)

# External module: "blessed/collapsible"

## Index

### Interfaces

* [CollapsibleOptions](../interfaces/_blessed_collapsible_.collapsibleoptions.md)

### Type aliases

* [onCollapseChange](_blessed_collapsible_.md#oncollapsechange)

### Functions

* [installCollapsible](_blessed_collapsible_.md#installcollapsible)
* [isCollapsed](_blessed_collapsible_.md#iscollapsed)
* [setCollapsed](_blessed_collapsible_.md#setcollapsed)
* [toggleCollapsed](_blessed_collapsible_.md#togglecollapsed)
* [uninstallCollapsible](_blessed_collapsible_.md#uninstallcollapsible)

---

## Type aliases

<a id="oncollapsechange"></a>

###  onCollapseChange

**Ƭ onCollapseChange**: *`function`*

*Defined in [blessed/collapsible.ts:74](https://github.com/cancerberoSgx/accursed/blob/978b980/src/blessed/collapsible.ts#L74)*

#### Type declaration
▸(e: *[ArtificialEvent](../interfaces/_jsx_types_.artificialevent.md)<[Element](../interfaces/_jsx_types_.__global.jsx.element.md)> & `object`*): `void`

**Parameters:**

| Name | Type |
| ------ | ------ |
| e | [ArtificialEvent](../interfaces/_jsx_types_.artificialevent.md)<[Element](../interfaces/_jsx_types_.__global.jsx.element.md)> & `object` |

**Returns:** `void`

___

## Functions

<a id="installcollapsible"></a>

###  installCollapsible

▸ **installCollapsible**(el: *[Element](../interfaces/_jsx_types_.__global.jsx.element.md)*, options?: *[CollapsibleOptions](../interfaces/_blessed_collapsible_.collapsibleoptions.md)*): `void`

*Defined in [blessed/collapsible.ts:76](https://github.com/cancerberoSgx/accursed/blob/978b980/src/blessed/collapsible.ts#L76)*

**Parameters:**

| Name | Type | Default value |
| ------ | ------ | ------ |
| el | [Element](../interfaces/_jsx_types_.__global.jsx.element.md) | - |
| `Default value` options | [CollapsibleOptions](../interfaces/_blessed_collapsible_.collapsibleoptions.md) |  {} |

**Returns:** `void`

___
<a id="iscollapsed"></a>

###  isCollapsed

▸ **isCollapsed**(el: *[Element](../interfaces/_jsx_types_.__global.jsx.element.md)*): `any`

*Defined in [blessed/collapsible.ts:6](https://github.com/cancerberoSgx/accursed/blob/978b980/src/blessed/collapsible.ts#L6)*

**Parameters:**

| Name | Type |
| ------ | ------ |
| el | [Element](../interfaces/_jsx_types_.__global.jsx.element.md) |

**Returns:** `any`

___
<a id="setcollapsed"></a>

###  setCollapsed

▸ **setCollapsed**(el: *[Element](../interfaces/_jsx_types_.__global.jsx.element.md)*, collapsed: *`boolean`*, andRenderScreen?: *`boolean`*, dontNotify?: *`boolean`*): `void`

*Defined in [blessed/collapsible.ts:10](https://github.com/cancerberoSgx/accursed/blob/978b980/src/blessed/collapsible.ts#L10)*

**Parameters:**

| Name | Type | Default value |
| ------ | ------ | ------ |
| el | [Element](../interfaces/_jsx_types_.__global.jsx.element.md) | - |
| collapsed | `boolean` | - |
| `Optional` andRenderScreen | `boolean` | - |
| `Default value` dontNotify | `boolean` | false |

**Returns:** `void`

___
<a id="togglecollapsed"></a>

###  toggleCollapsed

▸ **toggleCollapsed**(el: *[Element](../interfaces/_jsx_types_.__global.jsx.element.md)*, andRenderScreen?: *`boolean`*): `void`

*Defined in [blessed/collapsible.ts:47](https://github.com/cancerberoSgx/accursed/blob/978b980/src/blessed/collapsible.ts#L47)*

**Parameters:**

| Name | Type | Default value |
| ------ | ------ | ------ |
| el | [Element](../interfaces/_jsx_types_.__global.jsx.element.md) | - |
| `Default value` andRenderScreen | `boolean` | false |

**Returns:** `void`

___
<a id="uninstallcollapsible"></a>

###  uninstallCollapsible

▸ **uninstallCollapsible**(el: *[Element](../interfaces/_jsx_types_.__global.jsx.element.md)*): `void`

*Defined in [blessed/collapsible.ts:122](https://github.com/cancerberoSgx/accursed/blob/978b980/src/blessed/collapsible.ts#L122)*

**Parameters:**

| Name | Type |
| ------ | ------ |
| el | [Element](../interfaces/_jsx_types_.__global.jsx.element.md) |

**Returns:** `void`

___

