import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Router } from '@angular/router';

@Injectable()
export class AuthService {

  private _registerUrl = "https://backend-gs.herokuapp.com/userAPI/register";
  private _loginUrl = "https://backend-gs.herokuapp.com/userAPI/login";

  constructor(private http: HttpClient,
      private _router: Router) { }

  registerUser(user) {    
    return this.http.post<any>(this._registerUrl, user)
  }

  loginUser(user) {
    return this.http.post<any>(this._loginUrl, user);
  }

  loggedIn() {
    return !!localStorage.getItem('token')
  }

  isAdmin() {
    return localStorage.getItem('role') == 'admin';
  }

  logoutUser() {
    localStorage.removeItem('token')
    localStorage.removeItem('role')
    this._router.navigate(['/'])
  }

  getToken() {
    return localStorage.getItem('token')
  }

  getUser() {
    return localStorage.getItem('username')
  }
}