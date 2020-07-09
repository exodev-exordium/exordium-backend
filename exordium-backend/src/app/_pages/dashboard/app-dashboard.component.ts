import { Component, OnInit } from '@angular/core';

import { AuthService } from 'src/app/__services/auth.service';
import { UserService } from 'src/app/__services/user.service';
import { Roles } from 'src/app/__injectables/roles.injectable';
import { Permissions } from 'src/app/__injectables/permissions.injectable';

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
    private userService: UserService,
    private roles: Roles,
    public permissions: Permissions
  ) { }

  ngOnInit(): void {
    this.userService.getUserDataBasic().subscribe(res => {
      this.currentUser = res.response;

      if (this.roles.check(this.currentUser.access.roles)) {
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

}
