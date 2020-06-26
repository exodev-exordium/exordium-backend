import { Injectable } from '@angular/core';
import { HttpClient, HttpErrorResponse } from '@angular/common/http';
import { Router } from '@angular/router';
import { throwError, Observable } from 'rxjs';
import { map, catchError } from 'rxjs/operators';

// Models and Vars
import { User } from './model/User';
import { API } from './vars/Api';

@Injectable({
  providedIn: 'root'
})
export class AuthService {
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

  // Register Account
  register(user: User): Observable<any> {
    const api = `${this.endpoint}/auth/register`;

    return this.http.post (api, user).pipe(
      catchError(this.handleError)
    );
  }

  // Sign in
  signin(user: User): Observable<any> {
    const api = `${this.endpoint}/auth/signin`;

    return this.http.post (api, user).pipe(
      catchError(this.handleError)
    );
  }

  // Sign out
  signout() {
      const removeToken = localStorage.removeItem('access_token');
      if (removeToken == null) {
        this.router.navigate(['members/signin']);
      }
  }

  // Get User Token
  getToken() {
      return localStorage.getItem('access_token');
  }

  // Are we logged in?
  get isSignedIn(): boolean {
    const authToken = localStorage.getItem('access_token');
    return (authToken !== null) ? true : false;
  }
  
}
