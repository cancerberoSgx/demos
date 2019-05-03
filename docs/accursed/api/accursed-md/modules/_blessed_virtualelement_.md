[accursed](../README.md) > ["blessed/virtualElement"](../modules/_blessed_virtualelement_.md)

# External module: "blessed/virtualElement"

## Index

### Classes

* [VirtualComponent](../classes/_blessed_virtualelement_.virtualcomponent.md)

### Interfaces

* [JSXChildrenProps](../interfaces/_blessed_virtualelement_.jsxchildrenprops.md)
* [VirtualChildrenData](../interfaces/_blessed_virtualelement_.virtualchildrendata.md)
* [VirtualComponentParent](../interfaces/_blessed_virtualelement_.virtualcomponentparent.md)
* [VirtualDataBase](../interfaces/_blessed_virtualelement_.virtualdatabase.md)
* [VirtualElement](../interfaces/_blessed_virtualelement_.virtualelement.md)

### Type aliases

* [ParentVirtualData](_blessed_virtualelement_.md#parentvirtualdata)

### Functions

* [getJSXChildrenProps](_blessed_virtualelement_.md#getjsxchildrenprops)
* [isElementData](_blessed_virtualelement_.md#iselementdata)
* [process](_blessed_virtualelement_.md#process)

---

## Type aliases

<a id="parentvirtualdata"></a>

###  ParentVirtualData

**Ƭ ParentVirtualData**: *`T`[]*

*Defined in [blessed/virtualElement.ts:46](https://github.com/cancerberoSgx/accursed/blob/978b980/src/blessed/virtualElement.ts#L46)*

___

## Functions

<a id="getjsxchildrenprops"></a>

###  getJSXChildrenProps

▸ **getJSXChildrenProps**(component: *[Component](../classes/_jsx_component_.component.md)*): [VirtualChildrenData](../interfaces/_blessed_virtualelement_.virtualchildrendata.md)[]

*Defined in [blessed/virtualElement.ts:177](https://github.com/cancerberoSgx/accursed/blob/978b980/src/blessed/virtualElement.ts#L177)*

will return children data stored in \_jsxChildrenProps, flatting children that are arrays.

Example:

For a virtual parent component like :

```
<ListTable>
<Thead>
<Th>Name</Th>
<Th>Number code</Th>
<Th>description</Th>
</Thead>
<TBody>
<Tr>
<Td>hello</Td>
<Td>ehredd</Td>
</Tr>
<Tr>
<Td>asd</Td>
<Td>dfg</Td>
</Tr>
<Tr>
<Td>helasaalo</Td>
<Td>ssss</Td>
</Tr>
</TBody>
</ListTable>
```

It will return a JSON Like this:

```json
[
{
"children": [
{
"children": [
"Name"
],
"tagName": "Th"
},
{
"children": [
"Number code"
],
"tagName": "Th"
},
{
"children": [
"description"
],
"tagName": "Th"
}
],
"tagName": "Thead"
},
{
"children": [
{
"children": [
{
"children": [
"hello"
],
"tagName": "Td"
},
{
"children": [
"ehredd"
],
"tagName": "Td"
}
],
"tagName": "Tr"
},
{
"children": [
{
"children": [
"asd"
],
"tagName": "Td"
},
{
"children": [
"dfg"
],
"tagName": "Td"
}
],
"tagName": "Tr"
},
{
"children": [
{
"children": [
"helasaalo"
],
"tagName": "Td"
},
{
"children": [
"ssss"
],
"tagName": "Td"
}
],
"tagName": "Tr"
}
],
"tagName": "TBody"
}
]

```

**Parameters:**

| Name | Type |
| ------ | ------ |
| component | [Component](../classes/_jsx_component_.component.md) |

**Returns:** [VirtualChildrenData](../interfaces/_blessed_virtualelement_.virtualchildrendata.md)[]

___
<a id="iselementdata"></a>

###  isElementData

▸ **isElementData**(c: *`any`*): `boolean`

*Defined in [blessed/virtualElement.ts:185](https://github.com/cancerberoSgx/accursed/blob/978b980/src/blessed/virtualElement.ts#L185)*

**Parameters:**

| Name | Type |
| ------ | ------ |
| c | `any` |

**Returns:** `boolean`

___
<a id="process"></a>

###  process

▸ **process**(p: *[JSXChildrenProps](../interfaces/_blessed_virtualelement_.jsxchildrenprops.md) \| `undefined`*): (`string` \| `number` \| [VirtualChildrenData](../interfaces/_blessed_virtualelement_.virtualchildrendata.md))[]

*Defined in [blessed/virtualElement.ts:188](https://github.com/cancerberoSgx/accursed/blob/978b980/src/blessed/virtualElement.ts#L188)*

**Parameters:**

| Name | Type |
| ------ | ------ |
| p | [JSXChildrenProps](../interfaces/_blessed_virtualelement_.jsxchildrenprops.md) \| `undefined` |

**Returns:** (`string` \| `number` \| [VirtualChildrenData](../interfaces/_blessed_virtualelement_.virtualchildrendata.md))[]

___

