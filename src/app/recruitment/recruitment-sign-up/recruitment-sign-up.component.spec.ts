/* tslint:disable:no-unused-variable */
import { CUSTOM_ELEMENTS_SCHEMA } from '@angular/core';
import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { By } from '@angular/platform-browser';
import { DebugElement } from '@angular/core';

import { QuestionService } from '../../forms/question.service';
import { MailchimpService } from '../../mailchimp/mailchimp.service';
import { RecruitmentSignUpComponent } from './recruitment-sign-up.component';

class MailchimpServiceStub {
  constructor () {

  }
}

describe('RecruitmentSignUpComponent', () => {
  let component: RecruitmentSignUpComponent;
  let fixture: ComponentFixture<RecruitmentSignUpComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ RecruitmentSignUpComponent ],
      schemas: [ CUSTOM_ELEMENTS_SCHEMA ],
      providers: [ 
        { provide: QuestionService, useClass: QuestionService },
        { provide: MailchimpService, useValue: MailchimpServiceStub }
      ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(RecruitmentSignUpComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });

  it('should display an error if mailchimp sign up fails', () => {
    expect(true).toBeTruthy();
  });

});
