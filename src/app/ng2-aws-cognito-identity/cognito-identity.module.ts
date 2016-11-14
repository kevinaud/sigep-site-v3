import { NgModule } from '@angular/core';

import { ApiGatewayService } from './api-gateway.service';
import { AwsService } from './aws.service';

@NgModule({
  providers: [
    ApiGatewayService,
    AwsService
  ]
})
export class CognitoIdentityModule { }