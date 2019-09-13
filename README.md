### Angular Template Driven Form Example

In order to use Angular template driven form, you need to first import `FormsModule` into your Angular app.

When you have the `FormsModule` imported, Angular would look for <form> tag and internally add an `NgForm` directive `<form NgForm>` and creates an instance of `NgForm`. You can access this instance by `<form #form="ngForm">`

To hook up a form input with the `ngForm` instance, you need to add `NgModel` to the form input and also give it a `name` attribute.

However, if you need to enable two-way data binding, you would need to use the `[(ngModel)]="userSettings.name"` in the template.

### Validation
