[accursed](../README.md) › [Globals](../globals.md) › ["jsx/types"](_jsx_types_.md)

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

## Type aliases

###  AfterElementCreatedListener

Ƭ **AfterElementCreatedListener**: *function*

*Defined in [jsx/types.ts:211](https://github.com/cancerberoSgx/accursed/blob/5b2518e/src/jsx/types.ts#L211)*

**`internal`** 

#### Type declaration:

▸ (`event`: [AfterElementCreatedEvent](../interfaces/_jsx_types_.afterelementcreatedevent.md)): *void*

**Parameters:**

Name | Type |
------ | ------ |
`event` | [AfterElementCreatedEvent](../interfaces/_jsx_types_.afterelementcreatedevent.md) |

___

###  AfterRenderListener

Ƭ **AfterRenderListener**: *function*

*Defined in [jsx/types.ts:241](https://github.com/cancerberoSgx/accursed/blob/5b2518e/src/jsx/types.ts#L241)*

**`internal`** 

#### Type declaration:

▸ (`event`: [AfterRenderEvent](../interfaces/_jsx_types_.afterrenderevent.md)): *void*

**Parameters:**

Name | Type |
------ | ------ |
`event` | [AfterRenderEvent](../interfaces/_jsx_types_.afterrenderevent.md) |

___

###  BeforeAppendChildListener

Ƭ **BeforeAppendChildListener**: *function*

*Defined in [jsx/types.ts:221](https://github.com/cancerberoSgx/accursed/blob/5b2518e/src/jsx/types.ts#L221)*

**`internal`** 

#### Type declaration:

▸ (`event`: [BeforeAppendChildEvent](../interfaces/_jsx_types_.beforeappendchildevent.md)): *boolean*

**Parameters:**

Name | Type |
------ | ------ |
`event` | [BeforeAppendChildEvent](../interfaces/_jsx_types_.beforeappendchildevent.md) |

___

###  BeforeElementCreatedListener

Ƭ **BeforeElementCreatedListener**: *function*

*Defined in [jsx/types.ts:228](https://github.com/cancerberoSgx/accursed/blob/5b2518e/src/jsx/types.ts#L228)*

**`internal`** 

#### Type declaration:

▸ (`event`: [BeforeElementCreatedEvent](../interfaces/_jsx_types_.beforeelementcreatedevent.md)): *[Element](../interfaces/_jsx_types_.__global.jsx.element.md) | undefined*

**Parameters:**

Name | Type |
------ | ------ |
`event` | [BeforeElementCreatedEvent](../interfaces/_jsx_types_.beforeelementcreatedevent.md) |

___

###  BlessedJsxAttrs

Ƭ **BlessedJsxAttrs**: *object | undefined*

*Defined in [jsx/types.ts:246](https://github.com/cancerberoSgx/accursed/blob/5b2518e/src/jsx/types.ts#L246)*

**`internal`** 

___

###  On

Ƭ **On**: *Parameters‹function› | Parameters‹function› | Parameters‹function› | Parameters‹function› | Parameters‹function› | Parameters‹function› | Parameters‹function›*

*Defined in [jsx/types.ts:248](https://github.com/cancerberoSgx/accursed/blob/5b2518e/src/jsx/types.ts#L248)*

___

###  OnClickHandler

Ƭ **OnClickHandler**: *function*

*Defined in [jsx/types.ts:266](https://github.com/cancerberoSgx/accursed/blob/5b2518e/src/jsx/types.ts#L266)*

#### Type declaration:

▸ (`this`: T, `e`: [IMouseEventArg](../interfaces/_declarations_blessed_d_.widgets.events.imouseeventarg.md) & [ArtificialEvent](../interfaces/_jsx_types_.artificialevent.md)‹T›): *void*

**Parameters:**

Name | Type |
------ | ------ |
`this` | T |
`e` | [IMouseEventArg](../interfaces/_declarations_blessed_d_.widgets.events.imouseeventarg.md) & [ArtificialEvent](../interfaces/_jsx_types_.artificialevent.md)‹T› |

___

###  blessedElementConstructor

Ƭ **blessedElementConstructor**: *function*

*Defined in [jsx/types.ts:274](https://github.com/cancerberoSgx/accursed/blob/5b2518e/src/jsx/types.ts#L274)*

**`internal`** 

#### Type declaration:

▸ (`options?`: O): *T*

**Parameters:**

Name | Type |
------ | ------ |
`options?` | O |
