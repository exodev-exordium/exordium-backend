import { Component, OnInit } from '@angular/core';
import * as ClassicEditor from '@ckeditor/ckeditor5-build-classic';

@Component({
  selector: 'app-staff-blog-add',
  templateUrl: './staff-blog-add.component.html',
  styleUrls: ['./staff-blog-add.component.scss']
})
export class StaffBlogAddComponent implements OnInit {
  public Editor = ClassicEditor;

  constructor() { }

  ngOnInit(): void {
  }

}
