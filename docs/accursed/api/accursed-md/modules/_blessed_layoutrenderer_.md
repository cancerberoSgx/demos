[accursed](../README.md) › [Globals](../globals.md) › ["blessed/layoutRenderer"](_blessed_layoutrenderer_.md)

# External module: "blessed/layoutRenderer"

## Index

### Functions

* [renderer](_blessed_layoutrenderer_.md#renderer)

## Functions

###  renderer

▸ **renderer**(`this`: [Layout](../classes/_declarations_blessed_d_.widget.layout.md), `coords`: object): *function*

*Defined in [blessed/layoutRenderer.ts:11](https://github.com/cancerberoSgx/accursed/blob/468bf3c/src/blessed/layoutRenderer.ts#L11)*

The same blessed Layout renderer function with a few modifications and adapted to TypeScript. Modifications:

 * It won't render children that overflow the layout if layout's style.overflow===hidden
 * if layout=='inline' and an element has style.display==='block' then it will be rendered in a new line no matter that there is space for it in current line.

**Parameters:**

▪ **this**: *[Layout](../classes/_declarations_blessed_d_.widget.layout.md)*

▪ **coords**: *object*

Name | Type |
------ | ------ |
`xi` | number |
`xl` | number |
`yi` | number |
`yl` | number |

**Returns:** *function*

▸ (`el`: object & [BlessedElement](../classes/_declarations_blessed_d_.widgets.blessedelement.md), `i`: number): *any*

**Parameters:**

Name | Type |
------ | ------ |
`el` | object & [BlessedElement](../classes/_declarations_blessed_d_.widgets.blessedelement.md) |
`i` | number |
