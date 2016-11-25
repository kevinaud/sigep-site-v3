import { Component, OnInit } from '@angular/core';
import { Observable, Subscriber } from 'rxjs';

import { BlogPost } from '../blog-post';
import { BlogService } from '../blog.service';
import { UserService } from '../../user/user.service';

@Component({
  selector: 'app-blog-home',
  templateUrl: './blog-home.component.html',
  styleUrls: ['./blog-home.component.css']
})
export class BlogHomeComponent implements OnInit {

  posts: Observable<any> = null;
  auth: boolean;
  authenticated: Observable<boolean>;

  constructor(private blog: BlogService, private userService: UserService) {

    this.authenticated = this.userService.authStatus;
    this.posts = this.blog.getAllBlogPosts();

  }

  ngOnInit() { }

  printAuth() {
    console.log(this.auth)
  }

}
