import { Injectable, OnInit } from '@angular/core';
import * as Rx from "rxjs";

import { AwsService } from '../ng2-aws-cognito-identity/aws.service';

@Injectable()
export class UserService implements OnInit {

  authenticated: boolean;
  authStatus: Rx.Subject<boolean> = new Rx.Subject<boolean>();

  constructor(private aws: AwsService) {
    this.authenticated = this.aws.authenticated;
  }

  ngOnInit() {
    this.authStatus.next(this.authenticated);
  }

  login(username, password) {

    return new Promise((resolve, reject) => {
      this.aws.cognitoLogin(username, password, (error, success) => {

        if (error) {
          this.authenticated = false;
          reject(error);
        }
        else {
          this.authenticated = true;
          resolve(success);
        }

        this.authStatus.next(this.authenticated);
      });
    });

  }

  logout() {
    this.authenticated = false;
    this.authStatus.next(this.authenticated);
    localStorage.removeItem('token');
  }

}
