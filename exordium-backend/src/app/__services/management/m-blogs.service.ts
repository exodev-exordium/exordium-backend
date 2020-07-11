import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';

// rxjs
import { Observable } from 'rxjs';
import { map, catchError } from 'rxjs/operators';

// Handler
import { SituationHandler } from './../helpers/situation.handler';

// Models and Vars
import { API } from './../vars/Api';
import { Post } from './../model/Blog';

@Injectable({
  providedIn: 'root'
})
export class MBlogsService {
  private endpoint = new API().endpoint;
  private headers = new API().headers;

  constructor(
    private http: HttpClient,
    private handler: SituationHandler
  ) { }

  // Get Blogs
  getBlogs(): Observable<any> {
    const api = `${this.endpoint}/management/blogs`;
    return this.http.get(api, { headers: this.headers }).pipe(
        map(
            (res: Response) => {
                return res || {};
            }
        ),
        catchError(this.handler.handleError)
    );
  }

  // Get Blog Post
  getPost(id): Observable<any> {
    const api = `${this.endpoint}/management/blogs/${id}`;
    return this.http.get(api, { headers: this.headers }).pipe(
        map(
            (res: Response) => {
                return res || {};
            }
        ),
        catchError(this.handler.handleError)
    );
  }

  // Add new blog post
  addPost(post: Post): Observable<any> {
    const api = `${this.endpoint}/management/blogs/add`;

    return this.http.post (api, post, { headers: this.headers }).pipe(
      catchError(this.handler.handleError)
    );
  }
}
