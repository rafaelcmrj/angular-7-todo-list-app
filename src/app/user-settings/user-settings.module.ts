import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { UserSettingsRoutingModule } from './user-settings-routing.module';
import { UserSettingsComponent } from './user-settings.component';
import { ProfileComponent } from './profile/profile.component';
import { SharedModule } from '../shared/shared.module';

@NgModule({
  declarations: [UserSettingsComponent, ProfileComponent],
  imports: [
    CommonModule,
    SharedModule,
    UserSettingsRoutingModule
  ]
})
export class UserSettingsModule { }
