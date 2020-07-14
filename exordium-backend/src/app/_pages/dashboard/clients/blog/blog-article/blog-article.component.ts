import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from "@angular/router";
import { CBlogsService } from 'src/app/__services/clients/c-blogs.service';

@Component({
  selector: 'app-blog-article',
  templateUrl: './blog-article.component.html',
  styleUrls: ['./blog-article.component.scss']
})
export class BlogArticleComponent implements OnInit {
    // Blog Posts
    post: any[];

  constructor(
    private route: ActivatedRoute,
    private cBlogService: CBlogsService
  ) { }

  ngOnInit(): void {
    // Get Blog Data
    this.cBlogService.getPost(this.route.snapshot.paramMap.get("id")).subscribe(res => {
      this.post = res;
    });
  }

}
