import { Component, Input, OnInit }  from '@angular/core';
import { FormGroup }                 from '@angular/forms';

import { QuestionService } from '../../forms/question.service';

@Component({
  selector: 'app-recruitment-sign-up',
  templateUrl: './recruitment-sign-up.component.html',
  styleUrls: ['./recruitment-sign-up.component.css']
})
export class RecruitmentSignUpComponent implements OnInit {

  questions;

  constructor(service: QuestionService) {
    this.questions = service.getQuestions();
    console.log(this.questions);
  }

  ngOnInit() {

  }

}
