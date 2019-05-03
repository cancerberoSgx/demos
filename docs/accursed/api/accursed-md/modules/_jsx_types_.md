[accursed](../README.md) > ["jsx/types"](../modules/_jsx_types_.md)

# External module: "jsx/types"

## Index

### Modules

* [__global](_jsx_types_.__global.md)

### Enumerations

* [ArtificialEventOptionNames](../enums/_jsx_types_.artificialeventoptionnames.md)
* [EventOptionNames](../enums/_jsx_types_.eventoptionnames.md)

### Interfaces

* [AfterElementCreatedEvent](../interfaces/_jsx_types_.afterelementcreatedevent.md)
* [AfterRenderEvent](../interfaces/_jsx_types_.afterrenderevent.md)
* [ArtificialEvent](../interfaces/_jsx_types_.artificialevent.md)
* [ArtificialEventOptions](../interfaces/_jsx_types_.artificialeventoptions.md)
* [BeforeAppendChildEvent](../interfaces/_jsx_types_.beforeappendchildevent.md)
* [BeforeElementCreatedEvent](../interfaces/_jsx_types_.beforeelementcreatedevent.md)
* [BlessedEventOptions](../interfaces/_jsx_types_.blessedeventoptions.md)
* [BlessedJsx](../interfaces/_jsx_types_.blessedjsx.md)
* [EventOptions](../interfaces/_jsx_types_.eventoptions.md)
* [RefObject](../interfaces/_jsx_types_.refobject.md)
* [RenderOptions](../interfaces/_jsx_types_.renderoptions.md)

### Type aliases

* [AfterElementCreatedListener](_jsx_types_.md#afterelementcreatedlistener)
* [AfterRenderListener](_jsx_types_.md#afterrenderlistener)
* [BeforeAppendChildListener](_jsx_types_.md#beforeappendchildlistener)
* [BeforeElementCreatedListener](_jsx_types_.md#beforeelementcreatedlistener)
* [BlessedJsxAttrs](_jsx_types_.md#blessedjsxattrs)
* [On](_jsx_types_.md#on)
* [OnClickHandler](_jsx_types_.md#onclickhandler)
* [blessedElementConstructor](_jsx_types_.md#blessedelementconstructor)

---

## Type aliases

<a id="afterelementcreatedlistener"></a>

###  AfterElementCreatedListener

**Ƭ AfterElementCreatedListener**: *`function`*

*Defined in [jsx/types.ts:260](https://github.com/cancerberoSgx/accursed/blob/978b980/src/jsx/types.ts#L260)*

*__internal__*: 

#### Type declaration
▸(event: *[AfterElementCreatedEvent](../interfaces/_jsx_types_.afterelementcreatedevent.md)*): `void`

**Parameters:**

| Name | Type |
| ------ | ------ |
| event | [AfterElementCreatedEvent](../interfaces/_jsx_types_.afterelementcreatedevent.md) |

**Returns:** `void`

___
<a id="afterrenderlistener"></a>

###  AfterRenderListener

**Ƭ AfterRenderListener**: *`function`*

*Defined in [jsx/types.ts:290](https://github.com/cancerberoSgx/accursed/blob/978b980/src/jsx/types.ts#L290)*

*__internal__*: 

#### Type declaration
▸(event: *[AfterRenderEvent](../interfaces/_jsx_types_.afterrenderevent.md)*): `void`

**Parameters:**

| Name | Type |
| ------ | ------ |
| event | [AfterRenderEvent](../interfaces/_jsx_types_.afterrenderevent.md) |

**Returns:** `void`

___
<a id="beforeappendchildlistener"></a>

###  BeforeAppendChildListener

**Ƭ BeforeAppendChildListener**: *`function`*

*Defined in [jsx/types.ts:270](https://github.com/cancerberoSgx/accursed/blob/978b980/src/jsx/types.ts#L270)*

*__internal__*: 

#### Type declaration
▸(event: *[BeforeAppendChildEvent](../interfaces/_jsx_types_.beforeappendchildevent.md)*): `boolean`

**Parameters:**

| Name | Type |
| ------ | ------ |
| event | [BeforeAppendChildEvent](../interfaces/_jsx_types_.beforeappendchildevent.md) |

**Returns:** `boolean`

___
<a id="beforeelementcreatedlistener"></a>

###  BeforeElementCreatedListener

**Ƭ BeforeElementCreatedListener**: *`function`*

*Defined in [jsx/types.ts:277](https://github.com/cancerberoSgx/accursed/blob/978b980/src/jsx/types.ts#L277)*

*__internal__*: 

#### Type declaration
▸(event: *[BeforeElementCreatedEvent](../interfaces/_jsx_types_.beforeelementcreatedevent.md)*): [Element](../interfaces/_jsx_types_.__global.jsx.element.md) \| `undefined`

**Parameters:**

| Name | Type |
| ------ | ------ |
| event | [BeforeElementCreatedEvent](../interfaces/_jsx_types_.beforeelementcreatedevent.md) |

**Returns:** [Element](../interfaces/_jsx_types_.__global.jsx.element.md) \| `undefined`

___
<a id="blessedjsxattrs"></a>

###  BlessedJsxAttrs

**Ƭ BlessedJsxAttrs**: *`object` \| `undefined`*

*Defined in [jsx/types.ts:295](https://github.com/cancerberoSgx/accursed/blob/978b980/src/jsx/types.ts#L295)*

*__internal__*: 

___
<a id="on"></a>

###  On

**Ƭ On**: *`Parameters`<`function`> \| `Parameters`<`function`> \| `Parameters`<`function`> \| `Parameters`<`function`> \| `Parameters`<`function`> \| `Parameters`<`function`> \| `Parameters`<`function`>*

*Defined in [jsx/types.ts:297](https://github.com/cancerberoSgx/accursed/blob/978b980/src/jsx/types.ts#L297)*

___
<a id="onclickhandler"></a>

###  OnClickHandler

**Ƭ OnClickHandler**: *`function`*

*Defined in [jsx/types.ts:315](https://github.com/cancerberoSgx/accursed/blob/978b980/src/jsx/types.ts#L315)*

#### Type declaration
▸(this: *`T`*, e: *[IMouseEventArg](../interfaces/_declarations_blessed_d_.widgets.events.imouseeventarg.md) & [ArtificialEvent](../interfaces/_jsx_types_.artificialevent.md)<`T`>*): `void`

**Parameters:**

| Name | Type |
| ------ | ------ |
| this | `T` |
| e | [IMouseEventArg](../interfaces/_declarations_blessed_d_.widgets.events.imouseeventarg.md) & [ArtificialEvent](../interfaces/_jsx_types_.artificialevent.md)<`T`> |

**Returns:** `void`

___
<a id="blessedelementconstructor"></a>

###  blessedElementConstructor

**Ƭ blessedElementConstructor**: *`function`*

*Defined in [jsx/types.ts:323](https://github.com/cancerberoSgx/accursed/blob/978b980/src/jsx/types.ts#L323)*

*__internal__*: 

#### Type declaration
▸(options?: *`O`*): `T`

**Parameters:**

| Name | Type |
| ------ | ------ |
| `Optional` options | `O` |

**Returns:** `T`

___

