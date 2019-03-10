import { Component, OnInit } from '@angular/core';
import { Tab } from '../../models/tab.model';

@Component({
  selector: 'app-tab-navigation',
  templateUrl: './tab-navigation.component.html',
  styleUrls: ['./tab-navigation.component.scss']
})
export class TabNavigationComponent implements OnInit {

  tabs: Array<Tab> = [
    {
      label: 'Profile',
      path: '/user-settings/profile'
    },
    {
      label: 'Tasks',
      path: '/user-settings/tasks'
    }
  ]

  constructor() { }

  ngOnInit() {
  }

}
