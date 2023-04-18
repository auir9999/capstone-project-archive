import { HttpErrorResponse } from '@angular/common/http';
import { Router } from '@angular/router';
import { Component, OnInit } from '@angular/core';
import { UserService } from '../user.service';

@Component({
  selector: 'app-users',
  templateUrl: './users.component.html',
  styleUrls: ['./users.component.css']
})
export class UsersComponent implements OnInit {

  users = []
  constructor(private _userService: UserService,
    private _router: Router) { }

  ngOnInit() {
    this._userService.getUsers()
      .subscribe(
        res => this.users = res,
        err => {
          if (err instanceof HttpErrorResponse) {
            if (err.status == 401) {
              this._router.navigate(['/login'])
            }
          }
        }
      )
  }

}
