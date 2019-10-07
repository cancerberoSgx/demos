[accursed](../README.md) › [Globals](../globals.md) › ["blessed/node"](_blessed_node_.md)

# External module: "blessed/node"

## Index

### Interfaces

* [VisitorOptions](../interfaces/_blessed_node_.visitoroptions.md)

### Type aliases

* [ElementPredicate](_blessed_node_.md#elementpredicate)
* [Visitor](_blessed_node_.md#visitor)

### Functions

* [asElements](_blessed_node_.md#aselements)
* [cleanNode](_blessed_node_.md#cleannode)
* [filterAscendants](_blessed_node_.md#filterascendants)
* [filterChildren](_blessed_node_.md#filterchildren)
* [filterDescendantByName](_blessed_node_.md#filterdescendantbyname)
* [filterDescendants](_blessed_node_.md#filterdescendants)
* [findAscendant](_blessed_node_.md#findascendant)
* [findChildren](_blessed_node_.md#findchildren)
* [findDescendant](_blessed_node_.md#finddescendant)
* [findDescendantNamed](_blessed_node_.md#finddescendantnamed)
* [findRootElement](_blessed_node_.md#findrootelement)
* [getContent](_blessed_node_.md#getcontent)
* [mapDescendants](_blessed_node_.md#mapdescendants)
* [printElement](_blessed_node_.md#printelement)
* [visitAscendants](_blessed_node_.md#visitascendants)
* [visitDescendants](_blessed_node_.md#visitdescendants)

## Type aliases

###  ElementPredicate

Ƭ **ElementPredicate**: *function*

*Defined in [blessed/node.ts:54](https://github.com/cancerberoSgx/accursed/blob/5b2518e/src/blessed/node.ts#L54)*

#### Type declaration:

▸ (`n`: T): *boolean*

**Parameters:**

Name | Type |
------ | ------ |
`n` | T |

___

###  Visitor

Ƭ **Visitor**: *function*

*Defined in [blessed/node.ts:6](https://github.com/cancerberoSgx/accursed/blob/5b2518e/src/blessed/node.ts#L6)*

#### Type declaration:

▸ (`n`: T): *boolean*

**Parameters:**

Name | Type |
------ | ------ |
`n` | T |

## Functions

###  asElements

▸ **asElements**<**T**>(`el`: [Element](../interfaces/_jsx_types_.__global.jsx.element.md) | [Screen](../classes/_declarations_blessed_d_.widgets.screen.md)): *T[]*

*Defined in [blessed/node.ts:217](https://github.com/cancerberoSgx/accursed/blob/5b2518e/src/blessed/node.ts#L217)*

**Type parameters:**

▪ **T**: *[Element](../interfaces/_jsx_types_.__global.jsx.element.md)*

**Parameters:**

Name | Type |
------ | ------ |
`el` | [Element](../interfaces/_jsx_types_.__global.jsx.element.md) &#124; [Screen](../classes/_declarations_blessed_d_.widgets.screen.md) |

**Returns:** *T[]*

___

###  cleanNode

▸ **cleanNode**(`n`: [Node](../classes/_declarations_blessed_d_.widgets.node.md), `dontDestroy`: boolean): *void*

*Defined in [blessed/node.ts:185](https://github.com/cancerberoSgx/accursed/blob/5b2518e/src/blessed/node.ts#L185)*

**Parameters:**

Name | Type | Default |
------ | ------ | ------ |
`n` | [Node](../classes/_declarations_blessed_d_.widgets.node.md) | - |
`dontDestroy` | boolean | false |

**Returns:** *void*

___

###  filterAscendants

▸ **filterAscendants**<**T**>(`n`: [Node](../classes/_declarations_blessed_d_.widgets.node.md), `p`: [ElementPredicate](_blessed_node_.md#elementpredicate), `o`: [VisitorOptions](../interfaces/_blessed_node_.visitoroptions.md)): *T[]*

*Defined in [blessed/node.ts:174](https://github.com/cancerberoSgx/accursed/blob/5b2518e/src/blessed/node.ts#L174)*

**Type parameters:**

▪ **T**: *[Node](../classes/_declarations_blessed_d_.widgets.node.md)*

**Parameters:**

Name | Type | Default |
------ | ------ | ------ |
`n` | [Node](../classes/_declarations_blessed_d_.widgets.node.md) | - |
`p` | [ElementPredicate](_blessed_node_.md#elementpredicate) | - |
`o` | [VisitorOptions](../interfaces/_blessed_node_.visitoroptions.md) |  {} |

**Returns:** *T[]*

___

###  filterChildren

▸ **filterChildren**<**T**>(`n`: [Node](../classes/_declarations_blessed_d_.widgets.node.md), `p`: [ElementPredicate](_blessed_node_.md#elementpredicate)): *[Node](../classes/_declarations_blessed_d_.widgets.node.md)[]*

*Defined in [blessed/node.ts:104](https://github.com/cancerberoSgx/accursed/blob/5b2518e/src/blessed/node.ts#L104)*

**Type parameters:**

▪ **T**: *[Node](../classes/_declarations_blessed_d_.widgets.node.md)*

**Parameters:**

Name | Type |
------ | ------ |
`n` | [Node](../classes/_declarations_blessed_d_.widgets.node.md) |
`p` | [ElementPredicate](_blessed_node_.md#elementpredicate) |

**Returns:** *[Node](../classes/_declarations_blessed_d_.widgets.node.md)[]*

___

###  filterDescendantByName

▸ **filterDescendantByName**<**T**>(`el`: [Element](../interfaces/_jsx_types_.__global.jsx.element.md) | [Screen](../classes/_declarations_blessed_d_.widgets.screen.md), `name`: string, `o`: [VisitorOptions](../interfaces/_blessed_node_.visitoroptions.md)): *T[]*

*Defined in [blessed/node.ts:207](https://github.com/cancerberoSgx/accursed/blob/5b2518e/src/blessed/node.ts#L207)*

**Type parameters:**

▪ **T**: *[Element](../interfaces/_jsx_types_.__global.jsx.element.md)*

**Parameters:**

Name | Type | Default |
------ | ------ | ------ |
`el` | [Element](../interfaces/_jsx_types_.__global.jsx.element.md) &#124; [Screen](../classes/_declarations_blessed_d_.widgets.screen.md) | - |
`name` | string | - |
`o` | [VisitorOptions](../interfaces/_blessed_node_.visitoroptions.md) |  {} |

**Returns:** *T[]*

___

###  filterDescendants

▸ **filterDescendants**<**T**>(`n`: [Node](../classes/_declarations_blessed_d_.widgets.node.md), `p`: [ElementPredicate](_blessed_node_.md#elementpredicate), `o`: [VisitorOptions](../interfaces/_blessed_node_.visitoroptions.md)): *T[]*

*Defined in [blessed/node.ts:56](https://github.com/cancerberoSgx/accursed/blob/5b2518e/src/blessed/node.ts#L56)*

**Type parameters:**

▪ **T**: *[Node](../classes/_declarations_blessed_d_.widgets.node.md)*

**Parameters:**

Name | Type | Default |
------ | ------ | ------ |
`n` | [Node](../classes/_declarations_blessed_d_.widgets.node.md) | - |
`p` | [ElementPredicate](_blessed_node_.md#elementpredicate) | - |
`o` | [VisitorOptions](../interfaces/_blessed_node_.visitoroptions.md) |  {} |

**Returns:** *T[]*

___

###  findAscendant

▸ **findAscendant**<**T**>(`n`: [Element](../interfaces/_jsx_types_.__global.jsx.element.md), `p`: [ElementPredicate](_blessed_node_.md#elementpredicate), `o`: object): *T*

*Defined in [blessed/node.ts:154](https://github.com/cancerberoSgx/accursed/blob/5b2518e/src/blessed/node.ts#L154)*

**Type parameters:**

▪ **T**: *[Node](../classes/_declarations_blessed_d_.widgets.node.md)*

**Parameters:**

Name | Type | Default |
------ | ------ | ------ |
`n` | [Element](../interfaces/_jsx_types_.__global.jsx.element.md) | - |
`p` | [ElementPredicate](_blessed_node_.md#elementpredicate) | - |
`o` | object |  {} |

**Returns:** *T*

___

###  findChildren

▸ **findChildren**<**T**>(`n`: [Node](../classes/_declarations_blessed_d_.widgets.node.md), `p`: [ElementPredicate](_blessed_node_.md#elementpredicate)): *T*

*Defined in [blessed/node.ts:100](https://github.com/cancerberoSgx/accursed/blob/5b2518e/src/blessed/node.ts#L100)*

**Type parameters:**

▪ **T**: *[Node](../classes/_declarations_blessed_d_.widgets.node.md)*

**Parameters:**

Name | Type |
------ | ------ |
`n` | [Node](../classes/_declarations_blessed_d_.widgets.node.md) |
`p` | [ElementPredicate](_blessed_node_.md#elementpredicate) |

**Returns:** *T*

___

###  findDescendant

▸ **findDescendant**<**T**>(`n`: [Node](../classes/_declarations_blessed_d_.widgets.node.md), `p`: [ElementPredicate](_blessed_node_.md#elementpredicate), `o`: [VisitorOptions](../interfaces/_blessed_node_.visitoroptions.md)): *T*

*Defined in [blessed/node.ts:84](https://github.com/cancerberoSgx/accursed/blob/5b2518e/src/blessed/node.ts#L84)*

**Type parameters:**

▪ **T**: *[Node](../classes/_declarations_blessed_d_.widgets.node.md)*

**Parameters:**

Name | Type | Default |
------ | ------ | ------ |
`n` | [Node](../classes/_declarations_blessed_d_.widgets.node.md) | - |
`p` | [ElementPredicate](_blessed_node_.md#elementpredicate) | - |
`o` | [VisitorOptions](../interfaces/_blessed_node_.visitoroptions.md) |  {} |

**Returns:** *T*

___

###  findDescendantNamed

▸ **findDescendantNamed**<**T**>(`el`: [Element](../interfaces/_jsx_types_.__global.jsx.element.md) | [Screen](../classes/_declarations_blessed_d_.widgets.screen.md), `name`: string, `o`: [VisitorOptions](../interfaces/_blessed_node_.visitoroptions.md)): *T | undefined*

*Defined in [blessed/node.ts:197](https://github.com/cancerberoSgx/accursed/blob/5b2518e/src/blessed/node.ts#L197)*

**Type parameters:**

▪ **T**: *[Element](../interfaces/_jsx_types_.__global.jsx.element.md)*

**Parameters:**

Name | Type | Default |
------ | ------ | ------ |
`el` | [Element](../interfaces/_jsx_types_.__global.jsx.element.md) &#124; [Screen](../classes/_declarations_blessed_d_.widgets.screen.md) | - |
`name` | string | - |
`o` | [VisitorOptions](../interfaces/_blessed_node_.visitoroptions.md) |  {} |

**Returns:** *T | undefined*

___

###  findRootElement

▸ **findRootElement**(`n`: [Element](../interfaces/_jsx_types_.__global.jsx.element.md)): *[Element](../interfaces/_jsx_types_.__global.jsx.element.md)*

*Defined in [blessed/node.ts:170](https://github.com/cancerberoSgx/accursed/blob/5b2518e/src/blessed/node.ts#L170)*

**Parameters:**

Name | Type |
------ | ------ |
`n` | [Element](../interfaces/_jsx_types_.__global.jsx.element.md) |

**Returns:** *[Element](../interfaces/_jsx_types_.__global.jsx.element.md)*

___

###  getContent

▸ **getContent**(`e`: [Element](../interfaces/_jsx_types_.__global.jsx.element.md), `options`: object): *string*

*Defined in [blessed/node.ts:117](https://github.com/cancerberoSgx/accursed/blob/5b2518e/src/blessed/node.ts#L117)*

Returns the text content of given node and all its descendants, in order.
By default stripped from ansi escape chars and trimmed, and separated by space,
but is configurable through options.

Notice that content can be hidden because scroll. If you need to extract only the visible
text then use [printElement](_blessed_node_.md#printelement)

**Parameters:**

▪ **e**: *[Element](../interfaces/_jsx_types_.__global.jsx.element.md)*

▪`Default value`  **options**: *object*=  {}

Name | Type |
------ | ------ |
`childrenLast?` | boolean |
`dontStrip?` | boolean |
`dontTrim?` | boolean |
`includeHidden?` | boolean |

**Returns:** *string*

___

###  mapDescendants

▸ **mapDescendants**<**T**, **V**>(`n`: [Node](../classes/_declarations_blessed_d_.widgets.node.md), `p`: function, `o`: [VisitorOptions](../interfaces/_blessed_node_.visitoroptions.md)): *V[]*

*Defined in [blessed/node.ts:71](https://github.com/cancerberoSgx/accursed/blob/5b2518e/src/blessed/node.ts#L71)*

**Type parameters:**

▪ **T**: *[Node](../classes/_declarations_blessed_d_.widgets.node.md)*

▪ **V**

**Parameters:**

▪ **n**: *[Node](../classes/_declarations_blessed_d_.widgets.node.md)*

▪ **p**: *function*

▸ (`p`: T): *V*

**Parameters:**

Name | Type |
------ | ------ |
`p` | T |

▪`Default value`  **o**: *[VisitorOptions](../interfaces/_blessed_node_.visitoroptions.md)*=  {}

**Returns:** *V[]*

___

###  printElement

▸ **printElement**(`el`: [Element](../interfaces/_jsx_types_.__global.jsx.element.md) | [Screen](../classes/_declarations_blessed_d_.widgets.screen.md), `opts`: object): *string*

*Defined in [blessed/node.ts:145](https://github.com/cancerberoSgx/accursed/blob/5b2518e/src/blessed/node.ts#L145)*

Similar to [getContent](_blessed_node_.md#getcontent) but it will only return the visible part of the element's content.

**Parameters:**

▪ **el**: *[Element](../interfaces/_jsx_types_.__global.jsx.element.md) | [Screen](../classes/_declarations_blessed_d_.widgets.screen.md)*

▪`Default value`  **opts**: *object*=  {}

Name | Type |
------ | ------ |
`dontStrip?` | boolean |

**Returns:** *string*

___

###  visitAscendants

▸ **visitAscendants**(`n`: [Node](../classes/_declarations_blessed_d_.widgets.node.md), `v`: [Visitor](_blessed_node_.md#visitor), `o`: object): *boolean*

*Defined in [blessed/node.ts:150](https://github.com/cancerberoSgx/accursed/blob/5b2518e/src/blessed/node.ts#L150)*

**Parameters:**

Name | Type | Default |
------ | ------ | ------ |
`n` | [Node](../classes/_declarations_blessed_d_.widgets.node.md) | - |
`v` | [Visitor](_blessed_node_.md#visitor) | - |
`o` | object |  {} |

**Returns:** *boolean*

___

###  visitDescendants

▸ **visitDescendants**(`n`: [Node](../classes/_declarations_blessed_d_.widgets.node.md), `v`: [Visitor](_blessed_node_.md#visitor), `o`: [VisitorOptions](../interfaces/_blessed_node_.visitoroptions.md)): *boolean*

*Defined in [blessed/node.ts:28](https://github.com/cancerberoSgx/accursed/blob/5b2518e/src/blessed/node.ts#L28)*

Visit node's descendants until the visitor function return true or there are no more. In the first
different modes on which visiting the rest of descenda|nts or ancestors are configurable through the
options. By default, first the parent is evaluated which is configurable configurable with
[[[VisitorOptions.childrenFirst]]

**Parameters:**

Name | Type | Default |
------ | ------ | ------ |
`n` | [Node](../classes/_declarations_blessed_d_.widgets.node.md) | - |
`v` | [Visitor](_blessed_node_.md#visitor) | - |
`o` | [VisitorOptions](../interfaces/_blessed_node_.visitoroptions.md) |  {} |

**Returns:** *boolean*
