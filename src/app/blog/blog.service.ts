import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';

import { ApiGatewayService } from '../ng2-aws-cognito-identity/api-gateway.service';

@Injectable()
export class BlogService {

  constructor(private api: ApiGatewayService) { }

  getAllBlogPosts() {

    let promise = this.api.getAllBlogPosts();
    return Observable.fromPromise(promise);

  }

}
