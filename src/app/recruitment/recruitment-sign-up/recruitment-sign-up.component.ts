import { Component, Input, OnInit }  from '@angular/core';
import { FormGroup }                 from '@angular/forms';

import { QuestionService } from '../../forms/question.service';
import { MailchimpService } from '../../mailchimp/mailchimp.service';

@Component({
  selector: 'app-recruitment-sign-up',
  templateUrl: './recruitment-sign-up.component.html',
  styleUrls: ['./recruitment-sign-up.component.css']
})
export class RecruitmentSignUpComponent implements OnInit {

  questions;
  waiting = false;
  responseReceived = false;
  response = {
    success: false,
    message: ''
  };

  constructor(private service: QuestionService, private mailchimp: MailchimpService) {
    this.questions = service.getQuestions();
  }

  ngOnInit() {

  }

  onSubmit(event) {

    this.responseReceived = false;
    this.waiting = true;

    this.mailchimp.subscribeToRecruitment(event).subscribe((response) => {

      this.waiting = false;
      this.response = response.json();
      this.responseReceived = true;

    });
  }

}
