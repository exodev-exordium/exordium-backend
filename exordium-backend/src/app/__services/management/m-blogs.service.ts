import { Injectable } from '@angular/core';
import { HttpClient, HttpEvent, HttpEventType } from '@angular/common/http';

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

  // upload file progress
  public fileUploadProgress: number;

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

    // Create form data
    const form = new FormData();
    
    // Add other fields to formData
    Object.keys(post).forEach(key => {
      form.append(key, post[key]);
    });

    return this.http.post(api, form, {
      reportProgress: true,
      observe: 'events'
    }).pipe(
      map((event: HttpEvent<any>) => {
        if (event.type === HttpEventType.UploadProgress) {
          this.fileUploadProgress = Math.round(100 * event.loaded / event.total);
          return { status: 'progress', message: this.fileUploadProgress };
        }

        if (event.type === HttpEventType.Response) {
          return event.body;
        }
      }),
      catchError(this.handler.handleError)
    );
  }
}
