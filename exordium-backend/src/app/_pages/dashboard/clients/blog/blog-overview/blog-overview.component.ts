import { Component, OnInit } from '@angular/core';
import { CBlogsService } from 'src/app/__services/clients/c-blogs.service';

@Component({
  selector: 'app-blog-overview',
  templateUrl: './blog-overview.component.html',
  styleUrls: ['./blog-overview.component.scss']
})
export class BlogOverviewComponent implements OnInit {
  // Blog Posts
  posts: any[];

  constructor(
    private cBlogService: CBlogsService
  ) { }

  ngOnInit(): void {
    // Get Blog Data
    this.cBlogService.getPosts().subscribe(res => {
      this.posts = res;
    });
  }

}
