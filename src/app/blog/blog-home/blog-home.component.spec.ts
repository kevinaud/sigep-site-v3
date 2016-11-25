/* tslint:disable:no-unused-variable */
import { CUSTOM_ELEMENTS_SCHEMA } from '@angular/core';
import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { By } from '@angular/platform-browser';
import { DebugElement } from '@angular/core';
import { RouterTestingModule } from '@angular/router/testing'

import { BlogHomeComponent } from './blog-home.component';
import { BlogService } from '../blog.service';
import { ApiGatewayService } from '../../ng2-aws-cognito-identity/api-gateway.service';
import { UserService } from '../../user/user.service';
import { AwsService } from '../../ng2-aws-cognito-identity/aws.service';

class ApiGatewayServiceStub {

  getAllBlogPosts() {

    return new Promise((resolve, reject) => {
      let posts = [
        { title: 'test title', content: 'test content' }
      ];

      resolve(posts);

    });

  }

}

class AwsServiceStub {

  cognitoLogin(username, password, cb) {

    if (username === 'user' && password === 'pass') {
      cb(null, 'Successfully Logged In');
    } else {
      cb('Invalid login credentials');
    }

  }

}

describe('BlogHomeComponent', () => {
  let component: BlogHomeComponent;
  let fixture: ComponentFixture<BlogHomeComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ BlogHomeComponent ],
      schemas: [ CUSTOM_ELEMENTS_SCHEMA ],
      imports: [
        RouterTestingModule.withRoutes([{ path: 'fakeRouteForTesting', redirectTo: 'fakeRouteForTesting', pathMatch: 'full' }])
      ],
      providers: [
        BlogService,
        UserService,
        { provide: ApiGatewayService, useClass: ApiGatewayServiceStub },
        { provide: AwsService, useClass: AwsServiceStub }
      ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(BlogHomeComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
