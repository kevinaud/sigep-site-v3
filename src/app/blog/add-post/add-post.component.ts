import { Component, OnInit } from '@angular/core';

import { QuestionService } from '../../forms/question.service';
import { BlogService } from '../blog.service';

@Component({
  selector: 'app-add-post',
  templateUrl: './add-post.component.html',
  styleUrls: ['./add-post.component.css']
})
export class AddPostComponent implements OnInit {

  questions;
  waiting = false;
  responseReceived = false;
  response = {
    success: false,
    message: ''
  };

  constructor(private service: QuestionService, private blog: BlogService) {
    this.questions = service.getAddBlogPostQuestions();
  }

  ngOnInit() {

  }

  onSubmit(event) {

    this.blog.addBlogPost(event).subscribe((response) => {
      console.log(response);
    });

    /*this.userService.login(event.username, event.password);
    this.responseReceived = false;
    this.waiting = true;

    this.mailchimp.subscribeToRecruitment(event).subscribe((response) => {

      this.waiting = false;
      this.response = response.json();
      this.responseReceived = true;

    });*/
  }

}
