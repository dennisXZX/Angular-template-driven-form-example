import { Component, OnInit } from '@angular/core';
import { UserSettings } from '../../data/user-settings';
import { NgForm, NgModel } from '@angular/forms';

@Component({
  selector: 'app-user-settings-form',
  templateUrl: './user-settings-form.component.html',
  styleUrls: ['./user-settings-form.component.less']
})
export class UserSettingsFormComponent implements OnInit {
  defaultUserSettings: UserSettings = {
    name: 'Milton',
    emailOffers: true,
    interfaceStyle: 'dark',
    subscriptionType: 'Annual',
    notes: 'here are some notes'
  };

  // Shallow copy the default user settings in case users cancel their changes
  // Use Lodash if you need to deep clone an object
  userSettings: UserSettings = { ...this.defaultUserSettings };

  constructor() { }

  ngOnInit() {
  }

  onBlur(nameField: NgModel) {
    console.log('nameField.valid', nameField.valid);
  }

  onSubmit(userSettingsForm: NgForm) {
    console.log('userSettingsForm.valid', userSettingsForm.valid);
  }

}
