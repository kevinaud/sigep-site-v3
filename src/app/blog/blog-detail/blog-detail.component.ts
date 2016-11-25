import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Params }   from '@angular/router';

import { BlogPost } from '../blog-post';
import { BlogService } from '../blog.service';

@Component({
  selector: 'app-blog-detail',
  templateUrl: './blog-detail.component.html',
  styleUrls: ['./blog-detail.component.css']
})
export class BlogDetailComponent implements OnInit {

  postId: string;
  post: BlogPost = {
    title: '',
    content: ''
  };

  constructor(
    private blogService: BlogService,
    private route: ActivatedRoute
  ) {}

  ngOnInit() {

    this.route.params
      .subscribe((params: Params) => {
        
        this.postId = params['id'];

        this.blogService.getBlogPost(this.postId).subscribe((response) => {
          let temp: any = response;
          this.post = temp.data.data.Item;
        });
        
      });
  }

}
