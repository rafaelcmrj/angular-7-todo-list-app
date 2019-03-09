import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { MatToolbarModule, MatIconModule, MatMenuModule, MatButtonModule, MatListModule } from '@angular/material';
import { NavbarComponent } from './layout/navbar/navbar.component';

@NgModule({
  declarations: [
    NavbarComponent
  ],
  imports: [
    CommonModule,
    MatToolbarModule,
    MatIconModule,
    MatMenuModule,
    MatButtonModule,
    MatListModule
  ],
  exports: [
    NavbarComponent
  ]
})
export class SharedModule { }
