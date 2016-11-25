import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import 'rxjs/add/operator/map';

import { BlogPost } from './blog-post';
import { ApiGatewayService } from '../ng2-aws-cognito-identity/api-gateway.service';

@Injectable()
export class BlogService {

  constructor(private api: ApiGatewayService) { }

  getAllBlogPosts() {

    let promise = this.api.getAllBlogPosts();
    return Observable.fromPromise(promise)
              .map((s) => { 
                var response: any = s;
                console.log(response.data.data.Items);
                return response.data.data.Items;
              });;

  }

  addBlogPost(post: BlogPost) {

    let promise = this.api.addBlogPost(post);
    return Observable.fromPromise(promise);

  }

  getBlogPost(id: string) {

    let promise = this.api.getBlogPost(id);
    return Observable.fromPromise(promise);

  }

  deleteBlogPost(id: string) {

    let promise = this.api.deleteBlogPost(id);
    return Observable.fromPromise(promise);

  }

  updateBlogPost(id: string) {

    let promise = this.api.updateBlogPost(id);
    return Observable.fromPromise(promise);

  }

}
