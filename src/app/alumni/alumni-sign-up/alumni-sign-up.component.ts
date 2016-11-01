import { Component, Input, OnInit }  from '@angular/core';
import { FormGroup }                 from '@angular/forms';

import { QuestionService } from '../../forms/question.service';
import { MailchimpService } from '../../mailchimp/mailchimp.service';

@Component({
  selector: 'app-alumni-sign-up',
  templateUrl: './alumni-sign-up.component.html',
  styleUrls: ['./alumni-sign-up.component.css']
})
export class AlumniSignUpComponent implements OnInit {

  questions;
  waiting = false;
  responseReceived = false;
  response = {
    success: false,
    message: ''
  };

  constructor(private service: QuestionService, private mailchimp: MailchimpService) {
    this.questions = service.getAlumniQuestions();
  }

  ngOnInit() {

  }

  onSubmit(event) {

    console.log(event);

    /*this.responseReceived = false;
    this.waiting = true;

    this.mailchimp.subscribeToAlumni(event).subscribe((response) => {

      this.waiting = false;
      this.response = response.json();
      this.responseReceived = true;

    });*/
  }

}