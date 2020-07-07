import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { NgbModal } from '@ng-bootstrap/ng-bootstrap';
import { ColumnMode, SelectionType } from '@swimlane/ngx-datatable';

import { UserService } from 'src/app/__services/user.service';
import { MUsersService } from 'src/app/__services/management/m-users.service';

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
    private router: Router,
    private modalService: NgbModal,
    private userService: UserService,
    private mUsersService: MUsersService
  ) { }

  ngOnInit(): void {
    this.userService.getUserDataBasic().subscribe(res => {
      this.currentUser = res.response;

      this.checkPermissions();
    });
  }

  checkAccessPage(array, key, value) {
    return array.some(object => object[key] === value);
  }

  checkPermissions() {
    if (this.checkAccessPage(this.currentUser.access.pages, 'page', 'users-overview')) {

      this.mUsersService.getUsers().subscribe(res => {
        this.users = res;
        console.log(this.users);
        this.loadingIndicator = false;
      });

    } else {
      this.router.navigate(['dashboard']);
    }
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
