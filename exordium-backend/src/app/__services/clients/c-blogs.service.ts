import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';

// rxjs
import { Observable } from 'rxjs';
import { map, catchError } from 'rxjs/operators';

// Handler
import { SituationHandler } from './../helpers/situation.handler';

// Models and Vars
import { API } from './../vars/Api';

@Injectable({
  providedIn: 'root'
})
export class CBlogsService {
  private endpoint = new API().endpoint;
  private headers = new API().headers;

  constructor(
    private http: HttpClient,
    private handler: SituationHandler
  ) { }

  // Get Users
  getPosts(): Observable<any> {
    const api = `${this.endpoint}/public/blog`;
    return this.http.get(api, { headers: this.headers }).pipe(
        map(
            (res: Response) => {
                return res || {};
            }
        ),
        catchError(this.handler.handleError)
    );
  }

  // Get User
  getPost(id): Observable<any> {
    const api = `${this.endpoint}/public/blog/${id}`;
    return this.http.get(api, { headers: this.headers }).pipe(
        map(
            (res: Response) => {
                return res || {};
            }
        ),
        catchError(this.handler.handleError)
    );
  }
}
