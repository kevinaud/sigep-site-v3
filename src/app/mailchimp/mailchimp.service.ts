import { Injectable } from '@angular/core';
import { Http, Headers, RequestOptions } from '@angular/http';

import { EnvService } from '../env/env.service';
import { RecruitmentSubscriber } from './recruitment-subscriber';
import { AlumniSubscriber } from './alumni-subscriber';
import { Address } from '../forms/address';
import { Date } from '../forms/date';

@Injectable()
export class MailchimpService {

  apiUrl;

  constructor(env: EnvService, private http: Http) {
    this.apiUrl = env.getEnv().mailchimpApi;
  }

  subscribeToRecruitment(subscriber: RecruitmentSubscriber) {
    let headers = new Headers({ 'Content-Type': 'application/json' });
    let options = new RequestOptions({ headers: headers });
    let url = this.apiUrl + '/recruitment';

    return this.http.post(url, subscriber, options);
  }

  subscribeToAlumni(subscriber: AlumniSubscriber) {
    let body: any = {};

    if (this.hasAddress(subscriber)) {
      body.address = this.formatAddress(subscriber.address);
    } else {
      body.address = '';
    }

    body.gradDate = this.formatDate(subscriber.gradDate);
    body.firstName = subscriber.firstName;
    body.lastName = subscriber.lastName;
    body.email = subscriber.email;

    let headers = new Headers({ 'Content-Type': 'application/json' });
    let options = new RequestOptions({ headers: headers });
    let url = this.apiUrl + '/alumni';

    return this.http.post(url, body, options);
  }

  formatDate(date: Date) {
    return date.month.trim() + '/' + date.day.trim() + '/' + date.year.trim();
  }

  hasAddress(subscriber: AlumniSubscriber) {

    return subscriber.address.line1 ||
           subscriber.address.line2 ||
           subscriber.address.city ||
           subscriber.address.state ||
           subscriber.address.zip;

  }

  formatAddress(address: Address) {

    address = this.trimAddress(address);
    address = this.removeConsecutiveSpacesInAddress(address);

    let stringAddress = this.addressObjectToString(address);
    return stringAddress;

  }

  trimAddress(address: Address) {

    address.line1 = address.line1.trim();
    address.line2 = address.line2.trim();
    address.city = address.city.trim();
    address.state = address.state.trim();
    address.zip = address.zip.trim();

    return address;

  }

  removeConsecutiveSpacesInAddress(address: Address) {

    address.line1 = address.line1.replace(/\s{2,}/g, ' ');
    address.line2 = address.line2.replace(/\s{2,}/g, ' ');
    address.city = address.city.replace(/\s{2,}/g, ' ');
    address.state = address.state.replace(/\s{2,}/g, ' ');
    address.zip = address.zip.replace(/\s{2,}/g, ' ');

    return address;

  }

  addressObjectToString(address: Address) {

    let stringAddress = '';

    if (address.line1) {
      stringAddress += address.line1;
    }

    if (address.line2) {
      stringAddress += ' ' + address.line2 + ', ';
    } else {
      stringAddress += ', ';
    }

    if (address.city) {
      stringAddress += address.city + ', ';
    }

    if (address.state) {
      stringAddress += address.state + ' ';
    }

    if (address.zip) {
      stringAddress += address.zip;
    }

    return stringAddress;

  }

}
