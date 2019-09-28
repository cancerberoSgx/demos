[ojos](../README.md) › ["opScript/script"](_opscript_script_.md)

# External module: "opScript/script"

## Index

### Classes

* [OpsGenerator](../classes/_opscript_script_.opsgenerator.md)

### Functions

* [getTemplateContext](_opscript_script_.md#gettemplatecontext)
* [parseJson](_opscript_script_.md#parsejson)
* [parseJsonLines](_opscript_script_.md#parsejsonlines)
* [parseNumberOptions](_opscript_script_.md#parsenumberoptions)
* [parseStatementList](_opscript_script_.md#parsestatementlist)
* [parseStatementMap](_opscript_script_.md#parsestatementmap)
* [parseStatementMapLines](_opscript_script_.md#parsestatementmaplines)
* [template](_opscript_script_.md#template)

## Functions

###  getTemplateContext

▸ **getTemplateContext**(`o`: [ScriptContext](../interfaces/_opscript_types_.scriptcontext.md)): *Promise‹[TemplateContext](../interfaces/_opscript_types_.templatecontext.md)›*

*Defined in [opScript/script.ts:9](https://github.com/cancerberoSgx/mirada/blob/3544b58/ojos/src/opScript/script.ts#L9)*

**Parameters:**

Name | Type |
------ | ------ |
`o` | [ScriptContext](../interfaces/_opscript_types_.scriptcontext.md) |

**Returns:** *Promise‹[TemplateContext](../interfaces/_opscript_types_.templatecontext.md)›*

___

###  parseJson

▸ **parseJson**(`s`: string): *[ParsedResult](_opscript_types_.md#parsedresult)*

*Defined in [opScript/script.ts:41](https://github.com/cancerberoSgx/mirada/blob/3544b58/ojos/src/opScript/script.ts#L41)*

**Parameters:**

Name | Type |
------ | ------ |
`s` | string |

**Returns:** *[ParsedResult](_opscript_types_.md#parsedresult)*

___

###  parseJsonLines

▸ **parseJsonLines**(`o`: [ParseOptions](../interfaces/_opscript_types_.parseoptions.md)): *string[]*

*Defined in [opScript/script.ts:32](https://github.com/cancerberoSgx/mirada/blob/3544b58/ojos/src/opScript/script.ts#L32)*

**Parameters:**

Name | Type |
------ | ------ |
`o` | [ParseOptions](../interfaces/_opscript_types_.parseoptions.md) |

**Returns:** *string[]*

___

###  parseNumberOptions

▸ **parseNumberOptions**(`restObj`: object): *void*

*Defined in [opScript/script.ts:52](https://github.com/cancerberoSgx/mirada/blob/3544b58/ojos/src/opScript/script.ts#L52)*

**Parameters:**

Name | Type |
------ | ------ |
`restObj` | object |

**Returns:** *void*

___

###  parseStatementList

▸ **parseStatementList**(`s`: string): *[ParsedResult](_opscript_types_.md#parsedresult)*

*Defined in [opScript/script.ts:84](https://github.com/cancerberoSgx/mirada/blob/3544b58/ojos/src/opScript/script.ts#L84)*

**Parameters:**

Name | Type |
------ | ------ |
`s` | string |

**Returns:** *[ParsedResult](_opscript_types_.md#parsedresult)*

___

###  parseStatementMap

▸ **parseStatementMap**(`s`: string): *[ParsedResult](_opscript_types_.md#parsedresult)*

*Defined in [opScript/script.ts:63](https://github.com/cancerberoSgx/mirada/blob/3544b58/ojos/src/opScript/script.ts#L63)*

**Parameters:**

Name | Type |
------ | ------ |
`s` | string |

**Returns:** *[ParsedResult](_opscript_types_.md#parsedresult)*

___

###  parseStatementMapLines

▸ **parseStatementMapLines**(`o`: [ParseOptions](../interfaces/_opscript_types_.parseoptions.md)): *string[]*

*Defined in [opScript/script.ts:25](https://github.com/cancerberoSgx/mirada/blob/3544b58/ojos/src/opScript/script.ts#L25)*

**Parameters:**

Name | Type |
------ | ------ |
`o` | [ParseOptions](../interfaces/_opscript_types_.parseoptions.md) |

**Returns:** *string[]*

___

###  template

▸ **template**(`s`: string, `o`: [ScriptContext](../interfaces/_opscript_types_.scriptcontext.md)): *Promise‹string›*

*Defined in [opScript/script.ts:20](https://github.com/cancerberoSgx/mirada/blob/3544b58/ojos/src/opScript/script.ts#L20)*

**Parameters:**

Name | Type |
------ | ------ |
`s` | string |
`o` | [ScriptContext](../interfaces/_opscript_types_.scriptcontext.md) |

**Returns:** *Promise‹string›*
