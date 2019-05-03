[accursed](../README.md) > ["jsx-components/if"](../modules/_jsx_components_if_.md)

# External module: "jsx-components/if"

## Index

### Functions

* [If](_jsx_components_if_.md#if)

---

## Functions

<a id="if"></a>

###  If

▸ **If**<`T`>(props: *`object`*): `any`

*Defined in [jsx-components/if.tsx:50](https://github.com/cancerberoSgx/accursed/blob/978b980/src/jsx-components/if.tsx#L50)*

if as statement. children need to be in a function and the function accepts a parameter which value is given condition `c` but casted to NotFalsy so there's no need of type guards in the body. Example:

```
<If c={type}>{type =>
<select multiple={true}>{names[type].map(c =>
<option value={c.id}>{c.label}</option>)}
</select>
</If>
```

No error thrown on second line because parameter type is not falsy but keep the original type (excluding falsy values)

Other example:

```
export class ErrorComponent extends React.Component<ErrorOptions> {
public render() {
return <div>
<If c={this.props.error}>{error =>
<React.Fragment>
<h2>Error</h2>
<If c={typeof error === 'string'}>{e =>
<h3>{e}</h3>}
</If>
<If c={typeof error === 'object'}>{e =>
<React.Fragment>
<h5>{error!.name}</h5>
<p>{error!.message}</p>
<If c={error.stack}>{e =>
<ul>
{e.split('\n').map(e =>
<li>{e}</li>)}
</ul>}
</If>
</React.Fragment>}
</If>
<If c={this.props.responseText}>{responseText =>
<iframe css={{ border: 0, width: '100%', height: '400px' }} srcDoc={responseText}>
</iframe>}
</If>
</React.Fragment>}
</If>
</div>
}
}

```

**Type parameters:**

#### T :  `any`
**Parameters:**

**props: `object`**

| Name | Type |
| ------ | ------ |
| c | `any` |
| children | `function` |
| `Optional` p | `T` |

**Returns:** `any`

___

