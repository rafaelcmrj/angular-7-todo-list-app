import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { ProfileComponent } from './profile/profile.component';
import { UserSettingsComponent } from './user-settings.component';
import { TasksComponent } from './tasks/tasks.component';

const routes: Routes = [
  {
    path: 'user-settings', component: UserSettingsComponent, children: [
      { path: '', pathMatch: 'full', redirectTo: 'profile' },
      { path: 'profile', component: ProfileComponent },
      { path: 'tasks', component: TasksComponent }
    ]
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class UserSettingsRoutingModule { }
