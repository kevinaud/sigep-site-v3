import { Component, OnInit } from '@angular/core';

import { BlogService } from './blog.service';

@Component({
  selector: 'app-blog',
  templateUrl: './blog.component.html',
  styleUrls: ['./blog.component.css']
})
export class BlogComponent implements OnInit {

  constructor(private blog: BlogService) { }

  ngOnInit() {

    this.blog.getAllBlogPosts().subscribe(
      function(result) {
        console.log(result);
      },
      function(error) {
        console.log(error);
      }
    );

  }

}
