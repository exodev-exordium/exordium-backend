import { Component, OnInit } from '@angular/core';

import { UserService } from 'src/app/__services/user.service';

@Component({
  selector: 'app-app-dashboard',
  templateUrl: './app-dashboard.component.html',
  styleUrls: ['./app-dashboard.component.scss']
})
export class AppDashboardComponent implements OnInit {
  currentUser: any;
  management: boolean;

  managementRoles: any[] = [
    {
      role: 'staff'
    },
    {
      role: 'moderator'
    },
    {
      role: 'administrator'
    },
    {
      role: 'developer'
    }
  ];

  constructor(
    private userService: UserService
  ) { }

  ngOnInit(): void {
    this.userService.getUserDataBasic().subscribe(res => {
      this.currentUser = res.response;

      if (this.checkRoles(this.managementRoles, this.currentUser.access.roles)) {
        this.management = true;
      }

    });
  }

  signOut(): void {

  }

  // checkRoles
  checkRoles(webRoles, apiRoles) {
    const result = webRoles.some(obj1 => {
      return apiRoles.some(obj2 => {
        return obj1.role === obj2.role;
      });
    });

    return result;
  }

  // Check what pages we have access to
  checkAccessPage(array, key, value) {
    return array.some(object => object[key] === value);
  }

}
