import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { MatToolbarModule, MatIconModule, MatMenuModule, MatButtonModule, MatListModule, MatBadgeModule, MatFormFieldModule } from '@angular/material';
import { NavbarComponent } from './layout/navbar/navbar.component';
import { FooterComponent } from './layout/footer/footer.component';
import { PageHeaderComponent } from './layout/page-header/page-header.component';
import { TabNavigationComponent } from './layout/tab-navigation/tab-navigation.component';
import { HttpClientModule } from '@angular/common/http';
import { RouterModule } from '@angular/router';

@NgModule({
  declarations: [
    NavbarComponent,
    FooterComponent,
    PageHeaderComponent,
    TabNavigationComponent
  ],
  imports: [
    CommonModule,
    HttpClientModule,
    RouterModule,
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