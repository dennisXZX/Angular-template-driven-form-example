import { Component, OnInit } from '@angular/core';
import { UserSettings } from '../../data/user-settings';

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

}
