/* tslint:disable:no-unused-variable */
import { CUSTOM_ELEMENTS_SCHEMA } from '@angular/core';
import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { By } from '@angular/platform-browser';
import { DebugElement } from '@angular/core';

import { RouterTestingModule } from '@angular/router/testing'
import { ApiGatewayService } from '../../ng2-aws-cognito-identity/api-gateway.service'
import { BlogService } from '../blog.service'

import { BlogDetailComponent } from './blog-detail.component';

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

describe('BlogDetailComponent', () => {
  let component: BlogDetailComponent;
  let fixture: ComponentFixture<BlogDetailComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ BlogDetailComponent ],
      schemas: [ CUSTOM_ELEMENTS_SCHEMA ],
      imports: [
        RouterTestingModule.withRoutes([{ path: 'fakeRouteForTesting', redirectTo: 'fakeRouteForTesting', pathMatch: 'full' }])
      ],
      providers: [
        BlogService,
        { provide: ApiGatewayService, useClass: ApiGatewayServiceStub }
      ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(BlogDetailComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
