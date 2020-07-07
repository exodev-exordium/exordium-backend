import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Router } from '@angular/router';

// rxjs
import { Observable } from 'rxjs';
import { map, catchError } from 'rxjs/operators';

// Handler
import { SituationHandler } from './../helpers/situation.handler';

// Models and Vars
import { API } from '../vars/Api';

@Injectable({
  providedIn: 'root'
})
export class MContactService {
  private endpoint = new API().endpoint;
  private headers = new API().headers;

  constructor(
    private http: HttpClient,
    private router: Router,
    private handler: SituationHandler
  ) { }

    // Get Contact Emails
    contactEmails(): Observable<any> {
      const api = `${this.endpoint}/management/contact`;
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
