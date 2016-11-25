/* tslint:disable:no-unused-variable */
import { Component } from '@angular/core';
import { TestBed, async, inject, ComponentFixture } from '@angular/core/testing';
import { UserService } from './user.service';

import { AwsService } from '../ng2-aws-cognito-identity/aws.service';

class AwsServiceStub {

  cognitoLogin(username, password, cb) {

    if (username === 'user' && password === 'pass') {
      cb(null, 'Successfully Logged In');
    } else {
      cb('Invalid login credentials');
    }

  }

}

@Component({
  selector: 'app-test',
  template: '<p>The Template</p>'
})
class SubscriberComponent {

  authenticated: boolean;

  constructor(private userService: UserService) { }

  ngOnInit() {
    this.userService.authStatus.subscribe((authenticated) => {
      this.authenticated = authenticated;
    });
  }

}

describe('Service: User', () => {

  let subscriberComponent: SubscriberComponent;
  let subscriberFixture: ComponentFixture<SubscriberComponent>;
  
  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [ SubscriberComponent ],
      providers: [
        UserService,
        { provide: AwsService, useClass: AwsServiceStub }
      ]
    });

    subscriberFixture = TestBed.createComponent(SubscriberComponent);
    subscriberComponent = subscriberFixture.componentInstance;
    subscriberFixture.detectChanges();
  });

  it('should ...', inject([UserService], (service: UserService) => {
    expect(service).toBeTruthy();
  }));

  it('should successfully login', inject([UserService], (service: UserService) => {

    service.login('user', 'pass').then((success) => {
      expect(success).toEqual('Successfully Logged In');
    });

  }));

  it('should not successfully login', inject([UserService], (service: UserService) => {

    service.login('notUser', 'notPass').then(
      (success) => { },
      (error) => {
        expect(error).toEqual('Invalid login credentials');
      }
    );

  }));

  it('should update auth status if successfully logged in', inject([UserService], (service: UserService) => {

    service.login('user', 'pass').then(
      (success) => {
        expect(service.authenticated).toBeTruthy();
      },
      (error) => { }
    );    

  }));

  it('should update auth status after logout', inject([UserService], (service: UserService) => {

    service.login('user', 'pass').then(
      (success) => {
        expect(service.authenticated).toBeTruthy();

        service.logout();
        expect(service.authenticated).toBeFalsy();
      },
      (error) => { }
    );    

  }));

  it('should notify the subscribers if user successfully logs in', inject([UserService], (service: UserService) => {

    expect(subscriberComponent.authenticated).toBeFalsy();
    
    service.login('user', 'pass').then(
      (success) => {

        expect(subscriberComponent.authenticated).toBeTruthy();

      },
      (error) => { }
    );

  }));

  it('should notify the subscribers if user logs out', inject([UserService], (service: UserService) => {

    expect(subscriberComponent.authenticated).toBeFalsy();
    
    service.login('user', 'pass').then(
      (success) => {

        expect(subscriberComponent.authenticated).toBeTruthy();

        service.logout();
        expect(subscriberComponent.authenticated).toBeFalsy();
      },
      (error) => { }
    );

  }));

  it('should notify the subscribers if user logs out', inject([UserService], (service: UserService) => {

    service.authStatus.subscribe((s) => {
      expect(s).toBeTruthy();
      console.log('authenticated', s);
    });

  }));

});
