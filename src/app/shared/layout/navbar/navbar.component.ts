import { Component, OnInit } from '@angular/core';
import { MenuItem } from '../../models/menu-item.model';

@Component({
  selector: 'app-navbar',
  templateUrl: './navbar.component.html',
  styleUrls: ['./navbar.component.scss']
})
export class NavbarComponent implements OnInit {

  menuItems: Array<MenuItem> = [{
    label: 'Account',
    path: '/user-settings/profile'
  },
  {
    label: 'Metrics',
    path: '/metrics'
  },
  {
    label: 'Affiliates',
    path: '/affiliates'
  },
  {
    label: 'Tools',
    path: '/tools'
  },
  {
    label: 'Account',
    path: '/account'
  },
  {
    label: 'Reports',
    path: '/reports'
  },
  {
    label: 'Support',
    path: '/support'
  }
  ];

  constructor() { }

  ngOnInit() {
  }

}
