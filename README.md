### Angular Template Driven Form Example

In order to use Angular template driven form, you need to first import `FormsModule` into your Angular app.

When you have the `FormsModule` imported, Angular would look for <form> tag and internally add an `NgForm` directive `<form NgForm>` and create an instance of `NgForm`. You can access this instance by using a template reference `<form #userSettingsForm="ngForm">`

To hook up a form input with the `ngForm` instance, you need to add `NgModel` to the form input and also give it a `name` attribute.

However, if you need to enable two-way data binding, you would need to use the `[(ngModel)]="userSettings.name"` in the template.

### Validation

Angular form comes with these CSS classes for validation purpose.

- `ng-untouched` and `ng-touched`
- `ng-pristine` (unmodified) and `ng-dirty` (modified)
- `ng-valid` and `ng-invalid`

Also `NgModel` has properties associated with the CSS classes, for example, `userSettingsForm.valid` and `userSettingsForm.untouched`.
