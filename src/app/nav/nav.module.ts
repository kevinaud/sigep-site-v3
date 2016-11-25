import { NgModule, CUSTOM_ELEMENTS_SCHEMA } from '@angular/core';
import { RouterModule } from '@angular/router';
import { BrowserModule } from '@angular/platform-browser';

import { MaterialModule } from '@angular/material';

import { ToolbarComponent } from './toolbar/toolbar.component';
import { SidenavComponent } from './sidenav/sidenav.component';
import { UserService } from '../user/user.service';
import { AwsService } from '../ng2-aws-cognito-identity/aws.service';

@NgModule({
  declarations: [
    ToolbarComponent,
    SidenavComponent
  ],
  imports: [
    BrowserModule,
    RouterModule,
    MaterialModule.forRoot()
  ],
  exports: [
    ToolbarComponent,
    SidenavComponent
  ],
  providers: [
    UserService,
    AwsService
  ],
  schemas: [ CUSTOM_ELEMENTS_SCHEMA ]
})
export class NavModule { }
