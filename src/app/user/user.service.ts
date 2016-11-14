import { Injectable } from '@angular/core';

import { AwsService } from '../ng2-aws-cognito-identity/aws.service';

@Injectable()
export class UserService {

  constructor(private aws: AwsService) { }

  login(username, password) {
    this.aws.cognitoLogin(username, password);
  }

}
