import { Component, OnInit } from '@angular/core';

import { AuthService } from 'src/app/__services/auth.service';
import { UserService } from 'src/app/__services/user.service';

import { Idle } from 'idlejs/dist';

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
    private authService: AuthService,
    private userService: UserService
  ) { }

  ngOnInit(): void {
    this.userService.getUserDataBasic().subscribe(res => {
      this.currentUser = res.response;

      if (this.checkRoles(this.managementRoles, this.currentUser.access.roles)) {
        this.management = true;
      }

    });

    const idle = new Idle().whenNotInteractive().within(15).do(() => {
      // we've been idle for 15 minutes, time to lockout. 
      console.log('IDLE');
    }).start();

  }

  signOut(): void {
    this.authService.signout();
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
