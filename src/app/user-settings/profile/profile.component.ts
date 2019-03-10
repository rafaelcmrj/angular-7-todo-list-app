import { Component, OnInit } from '@angular/core';
import { ApplicationsService } from 'src/app/shared/services/applications.service';
import { FormGroup, FormControl, Validators } from '@angular/forms';
import { MatSnackBar } from '@angular/material';

@Component({
  selector: 'app-profile',
  templateUrl: './profile.component.html',
  styleUrls: ['./profile.component.scss']
})
export class ProfileComponent implements OnInit {

  private _applicationsService: ApplicationsService;
  private _snackbar: MatSnackBar;

  public profileForm: FormGroup;

  constructor(applicationsService: ApplicationsService, snackbar: MatSnackBar) {
    this._applicationsService = applicationsService;
    this._snackbar = snackbar;
  }

  ngOnInit() {
    this.profileForm = new FormGroup({
      first_name: new FormControl(localStorage.getItem('avantlink_profile_first_name') || '', [Validators.required]),
      last_name: new FormControl(localStorage.getItem('avantlink_profile_last_name') || '', [Validators.required]),
      email: new FormControl(localStorage.getItem('avantlink_profile_email') || '', [Validators.required, Validators.email])
    });
  }

  submit() {
    this._applicationsService.getApplicationId(this.profileForm.value).subscribe(request => {
      if (request.success) {
        localStorage.setItem('avantlink_profile_app_id', request.data.application_id);
        localStorage.setItem('avantlink_profile_email', request.data.email);
        localStorage.setItem('avantlink_profile_first_name', request.data.first_name);
        localStorage.setItem('avantlink_profile_last_name', request.data.last_name);

        this._snackbar.open('Your profile was updated', 'Dismiss', {
          duration: 3000
        });
      } else {
        this._snackbar.open('There was an error updating your profile', 'Dismiss');
      }
    });
  }

}
