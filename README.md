# meteor reactive icheck

Provide a reactive template for creating iCheck checkboxes.

## Example

`test.html`

```
<template name="test">
    {{> iCheck onChanged=onChangedCallback}}
</template>
```

`test.js`

```
Template.test.helpers({
    onChangedCallback() {
        return isChecked => {
            // do something...
        }
    }
});
```
