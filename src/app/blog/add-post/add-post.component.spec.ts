/* tslint:disable:no-unused-variable */
import { CUSTOM_ELEMENTS_SCHEMA } from '@angular/core';
import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { By } from '@angular/platform-browser';
import { DebugElement } from '@angular/core';
import { ApiGatewayService } from '../../ng2-aws-cognito-identity/api-gateway.service'

import { QuestionService } from '../../forms/question.service';
import { BlogService } from '../blog.service';

import { AddPostComponent } from './add-post.component';

class ApiGatewayServiceStub {

  getBlogPost(id) {

    return new Promise((resolve, reject) => {
      let response = {
        data: { data: { Item: { title: 'test title', content: 'test content' } } }
      }

      resolve(response);

    });

  }

}

describe('AddPostComponent', () => {
  let component: AddPostComponent;
  let fixture: ComponentFixture<AddPostComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ AddPostComponent ],
      schemas: [ CUSTOM_ELEMENTS_SCHEMA ],
      providers: [
        BlogService,
        QuestionService,
        { provide: ApiGatewayService, useClass: ApiGatewayServiceStub }
      ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(AddPostComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
