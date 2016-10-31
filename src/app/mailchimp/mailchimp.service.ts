import { Injectable } from '@angular/core';
import { Http, Headers, RequestOptions } from '@angular/http';

import { EnvService } from '../env/env.service';
import { RecruitmentSubscriber } from './recruitment-subscriber';

@Injectable()
export class MailchimpService {

  apiUrl;

  constructor(env: EnvService, private http: Http) { 
    this.apiUrl = env.getEnv().mailchimpApi;
  }

  subscribeToRecruitment(subscriber: RecruitmentSubscriber) {
    let headers = new Headers({ 'Content-Type': 'application/json' });
    let options = new RequestOptions({ headers: headers });
    let url = this.apiUrl + '/recruitment'

    return this.http.post(url, subscriber, options);
  }

}
