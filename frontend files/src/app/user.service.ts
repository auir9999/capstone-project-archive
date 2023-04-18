import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';

@Injectable()
export class UserService {

private _usersUrl = "https://backend-gs.herokuapp.com/userAPI/users";

  constructor(private http: HttpClient) { }

  getUsers() {
    return this.http.get<any>(this._usersUrl)
  }
}
