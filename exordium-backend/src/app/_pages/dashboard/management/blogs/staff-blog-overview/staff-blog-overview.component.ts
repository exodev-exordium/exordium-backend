import { Component, OnInit } from '@angular/core';
import { NgbModal } from '@ng-bootstrap/ng-bootstrap';
import { ColumnMode, SelectionType } from '@swimlane/ngx-datatable';

import { UserService } from 'src/app/__services/user.service';
import { MBlogsService } from 'src/app/__services/management/m-blogs.service';

import { Permissions } from 'src/app/__injectables/permissions.injectable';
import { Roles } from 'src/app/__injectables/roles.injectable';


@Component({
  selector: 'app-staff-blog-overview',
  templateUrl: './staff-blog-overview.component.html',
  styleUrls: ['./staff-blog-overview.component.scss']
})
export class StaffBlogOverviewComponent implements OnInit {
  // User Autentication
  currentUser: any;

  // Blog Posts Table
  posts: any[];
  loadingIndicator = true;
  selected = [];
  columnMode = ColumnMode;
  selectionType = SelectionType;

  constructor(
    private modalService: NgbModal,
    private userService: UserService,
    private permissions: Permissions,
    private mBlogService: MBlogsService,
    public roles: Roles
  ) { }

  ngOnInit(): void {
    this.userService.getUserDataBasic().subscribe(res => {
      this.currentUser = res.response;

      if (this.permissions.checkPermissions(this.currentUser.access.pages, 'users-overview')) {
        this.mBlogService.getBlogs().subscribe(res => {
          this.posts = res;
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
