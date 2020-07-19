import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { ToastrService } from 'ngx-toastr';
import { LoadingBarService } from '@ngx-loading-bar/core';

import { UserService } from 'src/app/__services/user.service';
import { MBlogsService } from 'src/app/__services/management/m-blogs.service';
import { Permissions } from 'src/app/__injectables/permissions.injectable';

import * as $ from 'jquery';
import * as ClassicEditor from '@ckeditor/ckeditor5-build-classic';


@Component({
  selector: 'app-staff-blog-add',
  templateUrl: './staff-blog-add.component.html',
  styleUrls: ['./staff-blog-add.component.scss']
})
export class StaffBlogAddComponent implements OnInit {
  // User Autentication
  currentUser: any;
  loadingIndicator = true;

  // Form Controls
  addBlogForm: FormGroup;
  public Editor = ClassicEditor;
  public model = {
    editorData: '<p>What do you want to say in your blog post?</p>'
  };
  public subjectType = ['devblog', 'development', 'update', 'blog'];

  // Other Values
  timeDate: number = Date.now();

  constructor(
    private formBuilder: FormBuilder,
    private userService: UserService,
    private mBlogService: MBlogsService,
    private permissions: Permissions,
    private toastr: ToastrService,
    private loader: LoadingBarService
  ) {
    this.addBlogForm = this.formBuilder.group({
      title: [null, [Validators.required]],
      url: [null, Validators.required],
      type: [null, Validators.required],
      cover: [null],
      body: [null, Validators.required],
      recaptcha: [null, Validators.required]
    });
  }

  ngOnInit(): void {
    this.userService.getUserDataBasic().subscribe(res => {
      this.currentUser = res.response;

      if (this.permissions.checkPermissions(this.currentUser.access.pages, 'blogs-add')) {
        this.loadingIndicator = false;
      }
    });
  }

  get f() {
    return this.addBlogForm.controls;
  }

  onFileSelect(event): void {
    if (event.target.files.length > 0) {
      const file: File = event.target.files[0];
      console.log(file);

      this.addBlogForm.get('cover').setValue(file);
    }
  }

  onSubmit(): void {
    const srcButton = $('.submitPost');
    srcButton.attr('disabled', true);
    srcButton.addClass('m-progress');

    const state = this.loader.useRef('router');

    if (this.addBlogForm.invalid) {
      this.toastr.error('Please make sure you fill out all the fields correctly, then try signing in again...');
    } else {
      state.start();
      
      this.mBlogService.addPost(this.addBlogForm.value).subscribe(res => {
        console.log(res);

        if (res) {
          if (res.status) {

            if (res.status === 'progress') {
              //state.set(res.message);
            } else {
              this.toastr.success(res.message);
              state.complete();
            }

          } else { }
        } else { }

      }, (err) => {
          this.toastr.success(err[0].msg);
          state.stop();
      });
    }

    setTimeout(() => {
      srcButton.removeAttr('disabled');
      srcButton.removeClass('m-progress');
    }, 2000);

  }

}
