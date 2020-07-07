import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { NgbModal } from '@ng-bootstrap/ng-bootstrap';
import { ColumnMode, SelectionType } from '@swimlane/ngx-datatable';

import { UserService } from 'src/app/__services/user.service';
import { MContactService } from 'src/app/__services/management/m-contact.service';

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
    private mContactService: MContactService
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
    if (this.checkAccessPage(this.currentUser.access.pages, 'page', 'contact-overview')) {

      this.mContactService.contactEmails().subscribe(res => {
        this.contactEmails = res;
        console.log(this.contactEmails);
        this.loadingIndicator = false;
      });

    } else {
      this.router.navigate(['dashboard']);
    }
  }

  onSelect({selected}) {
    console.log(`Select Event: `, selected, this.selected);

  }

  onView(content) {
    this.modalService.open(content, { centered: true, size: 'lg' });
  }

}
