import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { NgbModal } from '@ng-bootstrap/ng-bootstrap';
import { ColumnMode, SelectionType } from '@swimlane/ngx-datatable';

import { UserService } from 'src/app/__services/user.service';
import { MContactService } from 'src/app/__services/management/m-contact.service';

import { Permissions } from 'src/app/__injectables/permissions.injectable';


@Component({
  selector: 'app-staff-contact',
  templateUrl: './staff-contact.component.html',
  styleUrls: ['./staff-contact.component.scss']
})
export class StaffContactComponent implements OnInit {
  // User Autentication
  currentUser: any;

  // Contact Emails Table
  contactEmails: any[];
  loadingIndicator = true;
  selected = [];
  columnMode = ColumnMode;
  selectionType = SelectionType;

  constructor(
    private router: Router,
    private modalService: NgbModal,
    private userService: UserService,
    private permissions: Permissions,
    private mContactService: MContactService
  ) { }

  ngOnInit(): void {
    this.userService.getUserDataBasic().subscribe(res => {
      this.currentUser = res.response;

      if (this.permissions.checkPermissions(this.currentUser.access.pages, 'contact-overview')) {
        this.mContactService.contactEmails().subscribe(res => {
          this.contactEmails = res;
          this.loadingIndicator = false;
        });
      }
    });
  }

  onSelect({selected}) {
    console.log(`Select Event: `, selected, this.selected);
  }

  onView(content) {
    this.modalService.open(content, { centered: true, size: 'lg' });
  }

}
