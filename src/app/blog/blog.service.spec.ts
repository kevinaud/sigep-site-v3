/* tslint:disable:no-unused-variable */

import { TestBed, async, inject } from '@angular/core/testing';
import { BlogService } from './blog.service';
import { ApiGatewayService } from '../ng2-aws-cognito-identity/api-gateway.service';
import { AwsService } from '../ng2-aws-cognito-identity/aws.service';

class ApiGatewayServiceStub {
  
}

describe('Service: Blog', () => {
  beforeEach(() => {
    TestBed.configureTestingModule({
      providers: [
        BlogService,
        { provide: ApiGatewayService, useClass: ApiGatewayServiceStub },
        AwsService
      ]
    });
  });

  it('should ...', inject([BlogService], (service: BlogService) => {
    expect(service).toBeTruthy();
  }));
});
