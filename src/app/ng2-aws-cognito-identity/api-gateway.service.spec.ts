/* tslint:disable:no-unused-variable */

import { TestBed, async, inject } from '@angular/core/testing';
import { ApiGatewayService } from './api-gateway.service';

describe('Service: ApiGateway', () => {
  beforeEach(() => {
    TestBed.configureTestingModule({
      providers: [ApiGatewayService]
    });
  });

  it('should ...', inject([ApiGatewayService], (service: ApiGatewayService) => {
    expect(service).toBeTruthy();
  }));
});
