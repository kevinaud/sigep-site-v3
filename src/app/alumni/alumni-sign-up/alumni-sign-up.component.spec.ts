/* tslint:disable:no-unused-variable */
import { CUSTOM_ELEMENTS_SCHEMA } from '@angular/core';
import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { By } from '@angular/platform-browser';
import { DebugElement } from '@angular/core';

import { QuestionService } from '../../forms/question.service';
import { MailchimpService } from '../../mailchimp/mailchimp.service';
import { AlumniSignUpComponent } from './alumni-sign-up.component';

class MailchimpServiceStub {
  constructor () {

  }
}

describe('AlumniSignUpComponent', () => {
  let component: AlumniSignUpComponent;
  let fixture: ComponentFixture<AlumniSignUpComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ AlumniSignUpComponent ],
      schemas: [ CUSTOM_ELEMENTS_SCHEMA ],
      providers: [ 
        { provide: QuestionService, useClass: QuestionService },
        { provide: MailchimpService, useValue: MailchimpServiceStub }
      ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(AlumniSignUpComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
