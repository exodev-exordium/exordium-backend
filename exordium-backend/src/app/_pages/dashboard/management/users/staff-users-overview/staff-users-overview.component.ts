import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { NgbModal } from '@ng-bootstrap/ng-bootstrap';
import { ColumnMode, SelectionType } from '@swimlane/ngx-datatable';

import { UserService } from 'src/app/__services/user.service';
import { MUsersService } from 'src/app/__services/management/m-users.service';

import { Permissions } from 'src/app/__injectables/permissions.injectable';
import { Roles } from 'src/app/__injectables/roles.injectable';


@Component({
  selector: 'app-staff-users-overview',
  templateUrl: './staff-users-overview.component.html',
  styleUrls: ['./staff-users-overview.component.scss']
})
export class StaffUsersOverviewComponent implements OnInit {
  // User Autentication
  currentUser: any;

  // Contact Emails Table
  users: any[];
  loadingIndicator = true;
  selected = [];
  columnMode = ColumnMode;
  selectionType = SelectionType;

  // Users specific
  selectedRoles = [];
  permissionAccess = [];

  constructor(
    private modalService: NgbModal,
    private userService: UserService,
    private permissions: Permissions,
    private mUsersService: MUsersService,
    public roles: Roles
  ) { }

  ngOnInit(): void {
    this.userService.getUserDataBasic().subscribe(res => {
      this.currentUser = res.response;

      if (this.permissions.checkPermissions(this.currentUser.access.pages, 'users-overview')) {
        this.mUsersService.getUsers().subscribe(res => {
          this.users = res;
          this.loadingIndicator = false;
        });
      }
    });
  }

  onSelect({selected}) {
    console.log(`Select Event: `, selected, this.selected);
    this.selectedRoles = this.selected[0].access.roles.map((item) => {
        return item.role
    });
    console.log('Roles: ', this.selectedRoles);
  }

  onView(content) {
    this.modalService.open(content, { centered: true, size: 'lg' });
  }

}
