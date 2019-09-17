import { Component, OnInit } from '@angular/core';
import { UserSettings } from '../../data/user-settings';
import { NgForm, NgModel } from '@angular/forms';
import { DataService } from '../../data/data.service';
import { Observable } from 'rxjs';

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
  anonymousModel = 'On';
  subscriptionTypes: Observable<string[]>;
  startDate: Date;
  postError = false;
  postErrorMessage = '';

  constructor(private dataService: DataService) { }

  ngOnInit() {
    this.subscriptionTypes = this.dataService.getSubscriptionTypes();

    this.startDate = new Date();
  }

  onBlur(nameField: NgModel) {
    console.log('nameField.valid', nameField.valid);
  }

  onHttpError(errorResponse: any) {
    console.log('error: ', errorResponse);

    this.postError = true;
    this.postErrorMessage = errorResponse.error.errorMessage;
  }

  onSubmit(userSettingsForm: NgForm) {
    console.log('userSettingsForm.valid', userSettingsForm.valid);
    this.postError = false;

    if (userSettingsForm.valid) {
      this.dataService.postUserSettingsForm(this.userSettings).subscribe(
        result => console.log('success: ', result),
        error => this.onHttpError(error)
      );
    } else {
      this.postError = true;
      this.postErrorMessage = 'Please fix the above errors';
    }
  }

}
