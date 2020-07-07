import { Injectable } from '@angular/core';
import { HttpClient, HttpErrorResponse } from '@angular/common/http';
import { Router } from '@angular/router';
import { throwError, Observable } from 'rxjs';
import { map, catchError } from 'rxjs/operators';

import { API } from '../vars/Api';

@Injectable({
  providedIn: 'root'
})
export class MContactService {
  private endpoint = new API().endpoint;
  private headers = new API().headers;

  constructor(
    private http: HttpClient,
    private router: Router
  ) { }

    // ErrorHandler
    handleError(error: HttpErrorResponse) {
      let msg = '';
      if (error.error instanceof ErrorEvent) {
          // client-side error
          msg = error.error.message;
      } else {
          // server-side error
          msg = `Error Code: ${error.status}\nMessage: ${error.message}`;
      }
  
      return throwError(msg);
    }

    // Get Contact Emails
    contactEmails(): Observable<any> {
      const api = `${this.endpoint}/moderation/contact`;
      return this.http.get(api, { headers: this.headers }).pipe(
          map(
              (res: Response) => {
                  return res || {};
              }
          ),
          catchError(this.handleError)
      );
  }
}
