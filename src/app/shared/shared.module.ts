import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { MatToolbarModule, MatIconModule, MatMenuModule, MatButtonModule, MatListModule, MatBadgeModule } from '@angular/material';
import { NavbarComponent } from './layout/navbar/navbar.component';
import { FooterComponent } from './layout/footer/footer.component';
import { PageHeaderComponent } from './layout/page-header/page-header.component';

@NgModule({
  declarations: [
    NavbarComponent,
    FooterComponent,
    PageHeaderComponent
  ],
  imports: [
    CommonModule,
    MatToolbarModule,
    MatIconModule,
    MatMenuModule,
    MatButtonModule,
    MatListModule,
    MatBadgeModule
  ],
  exports: [
    NavbarComponent,
    FooterComponent,
    PageHeaderComponent
  ]
})
export class SharedModule { }