/* tslint:disable:no-unused-variable */

import { TestBed, async, inject } from '@angular/core/testing';
import { HttpModule } from '@angular/http';

import { MailchimpService } from './mailchimp.service';
import { EnvService } from '../env/env.service';
import { Address } from '../forms/address';
import { Date } from '../forms/date';
import { AlumniSubscriber } from './alumni-subscriber';

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

  it('should trim whitespace from address', inject([MailchimpService], (service: MailchimpService) => {

    let badAddress: Address = {
      line1: '   2227 S 3rd St.    ',
      line2: '   #26',
      city: 'Waco   ',
      state: ' TX ',
      zip: ' 76706                           '
    };

    let correctAddress: Address = {
      line1: '2227 S 3rd St.',
      line2: '#26',
      city: 'Waco',
      state: 'TX',
      zip: '76706'
    };

    expect(service.trimAddress(badAddress)).toEqual(correctAddress);

  }));

  it('should replace 2 or more consecutive spaces in address with 1 space', inject([MailchimpService], (service: MailchimpService) => {

    let badAddress: Address = {
      line1: '2227   S  3rd            St.',
      line2: '#26  ',
      city: 'Waco   ',
      state: '   TX',
      zip: '76706'
    };

    let correctAddress: Address = {
      line1: '2227 S 3rd St.',
      line2: '#26 ',
      city: 'Waco ',
      state: ' TX',
      zip: '76706'
    };

    expect(service.removeConsecutiveSpacesInAddress(badAddress)).toEqual(correctAddress);

  }));

  it('should turn address object into mailchimp address field format', inject([MailchimpService], (service: MailchimpService) => {

    let objAddress: Address = {
      line1: '2227 S 3rd St.',
      line2: '#26',
      city: 'Waco',
      state: 'TX',
      zip: '76706'
    };

   let stringAddress = '2227 S 3rd St. #26, Waco, TX 76706';

    expect(service.addressObjectToString(objAddress)).toEqual(stringAddress);

    objAddress = {
      line1: '2227 S 3rd St.',
      line2: '',
      city: 'Waco',
      state: 'TX',
      zip: '76706'
    };

    stringAddress = '2227 S 3rd St., Waco, TX 76706';

    expect(service.addressObjectToString(objAddress)).toEqual(stringAddress);

  }));

  it('should turn unformatted address object in to mailchimp address format', inject([MailchimpService], (service: MailchimpService) => {

    let objAddress: Address = {
      line1: '    2227 S    3rd St.     ',
      line2: '     #26   ',
      city: 'Waco               ',
      state: '  TX',
      zip: ' 76706           '
    };

    let stringAddress = '2227 S 3rd St. #26, Waco, TX 76706';

    expect(service.formatAddress(objAddress)).toEqual(stringAddress);

    objAddress = {
      line1: '    2227 S    3rd St.     ',
      line2: '',
      city: 'Waco               ',
      state: '  TX',
      zip: ' 76706           '
    };

    stringAddress = '2227 S 3rd St., Waco, TX 76706';

    expect(service.formatAddress(objAddress)).toEqual(stringAddress);

  }));

  it('should turn unformatted date object in mailchimp date format', inject([MailchimpService], (service: MailchimpService) => {

    let objDate: Date = {
      day: '03',
      month: '04',
      year: '1995'
    };

    let stringDate = '04/03/1995';

    expect(service.formatDate(objDate)).toEqual(stringDate);

  }));

  it('should check whether or not the address was filled out', inject([MailchimpService], (service: MailchimpService) => {

    let subscriber: AlumniSubscriber = {
      email: 'string',
      firstName: 'string',
      lastName: 'string',
      gradDate: {
        month: 'string',
        day: 'string',
        year: 'string',
      },
      address: {
        line1: '',
        line2: '',
        city: '',
        state: '',
        zip: ''
      }
    };

    expect(service.hasAddress(subscriber)).toBeFalsy();

    subscriber = {
      email: 'string',
      firstName: 'string',
      lastName: 'string',
      gradDate: {
        month: 'string',
        day: 'string',
        year: 'string',
      },
      address: {
        line1: '2227 S 3rd St.',
        line2: '',
        city: 'Waco',
        state: '',
        zip: ''
      }
    };

    expect(service.hasAddress(subscriber)).toBeTruthy();

  }));

});
