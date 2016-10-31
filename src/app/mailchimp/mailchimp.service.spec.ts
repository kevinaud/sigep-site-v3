/* tslint:disable:no-unused-variable */

import { TestBed, async, inject } from '@angular/core/testing';
import { HttpModule } from '@angular/http';

import { MailchimpService } from './mailchimp.service';
import { EnvService } from '../env/env.service';

describe('Service: Mailchimp', () => {
  beforeEach(() => {
    TestBed.configureTestingModule({
      providers: [
        MailchimpService,
        EnvService 
      ],
      imports: [
        HttpModule
      ]
    });
  });

  it('should ...', inject([MailchimpService], (service: MailchimpService) => {
    expect(service).toBeTruthy();
  }));
});
