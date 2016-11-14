import { Component, OnInit } from '@angular/core';

import { QuestionService } from '../../forms/question.service';
import { UserService } from '../user.service';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {

  questions;
  waiting = false;
  responseReceived = false;
  response = {
    success: false,
    message: ''
  };

  constructor(private service: QuestionService, private userService: UserService) {
    this.questions = service.getLoginQuestions();
  }

  ngOnInit() {

  }

  onSubmit(event) {

    this.userService.login(event.username, event.password);
    /*this.responseReceived = false;
    this.waiting = true;

    this.mailchimp.subscribeToRecruitment(event).subscribe((response) => {

      this.waiting = false;
      this.response = response.json();
      this.responseReceived = true;

    });*/
  }

}
