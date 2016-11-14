import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';

import { AwsService } from './aws.service';

declare var apigClientFactory: any;

@Injectable()
export class ApiGatewayService {

  tempClient;
  authenticating;

  constructor(private aws: AwsService) {
    this.tempClient = apigClientFactory.newClient();

    if(aws.authenticated) {
      
      var ref = this;
      ref.authenticating = true;
      aws.AWS.config.credentials.get(function (err) {

        if(err) {
          console.log(err);
          return;
        }

        // We'll create an instance of our API Gateway client again
        // This time we'll pass in the required keys that will authenticate the request
        // The API Gateway SDK will take care of transforming these keys into the appropriate
        // header and will send out the request to our endpoint.
        ref.tempClient = apigClientFactory.newClient({
          accessKey: aws.AWS.config.credentials.accessKeyId,
          secretKey: aws.AWS.config.credentials.secretAccessKey,
          sessionToken: aws.AWS.config.credentials.sessionToken,
          region: 'us-east-1'
        });
        ref.authenticating = false;

      });

    }

  }

  getAllBlogPosts() {

      return this.tempClient.blogPostGet();
      /*return Observable.fromPromise(promise);
        .then(function(result){

          console.log(result);
      
        }).catch(function(result){

          console.log(result);

        });*/

  }

  addBlogPost() {

  }

}
