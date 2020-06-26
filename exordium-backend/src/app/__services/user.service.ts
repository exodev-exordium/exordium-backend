import { Injectable } from '@angular/core';
import { HttpClient, HttpErrorResponse } from '@angular/common/http';
import { Router } from '@angular/router';
import { throwError, Observable } from 'rxjs';
import { map, catchError } from 'rxjs/operators';

// Models and Vars
import { User } from './model/User';
import { API } from './vars/Api';
import { DiscordToken } from './model/Connections';

@Injectable({
  providedIn: 'root'
})
export class UserService {
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
  
  // Basic User Data
  getUserDataBasic(): Observable<any> {
    const api = `${this.endpoint}/user/me/basic`;
    return this.http.get(api, { headers: this.headers }).pipe(
      map(
        (res: Response) => {
          return res || {};
        }
      ),
      catchError(this.handleError)
    );
  }

  // Advanced User Data
  getUserDataAdvanced(): Observable<any> {
    const api = `${this.endpoint}/user/me/advanced`;
    return this.http.get(api, { headers: this.headers }).pipe(
      map(
        (res: Response) => {
          return res || {};
        }
      ),
      catchError(this.handleError)
    );
  }

  // User Tokens
  getUserTokens(): Observable<any> {
    const api = `${this.endpoint}/user/me/tokens`;
    return this.http.get(api, { headers: this.headers }).pipe(
      map(
        (res: Response) => {
          return res || {};
        }
      ),
      catchError(this.handleError)
    );
  }

  // Connect Discord
  connectDiscord(token: DiscordToken): Observable<any> {
    const api = `${this.endpoint}/user/me/connection/discord`;

    return this.http.post (api, token, { headers: this.headers }).pipe(
      catchError(this.handleError)
    );
  }

  // Connect GitHub
  connectGithub(): Observable<any> {
    const api = `${this.endpoint}/user/me/connection/github`;
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
