/* tslint:disable:no-unused-variable */

import { TestBed, async, inject } from '@angular/core/testing';
import { ApiGatewayService } from './api-gateway.service';
import { AwsService } from './aws.service';

describe('Service: ApiGateway', () => {
  beforeEach(() => {
    TestBed.configureTestingModule({
      providers: [ 
        AwsService,
        ApiGatewayService
      ]
    });

  });

});
