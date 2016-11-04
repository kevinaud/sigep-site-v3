import { BrowserModule } from '@angular/platform-browser';
import { NgModule, CUSTOM_ELEMENTS_SCHEMA } from '@angular/core';
import { ReactiveFormsModule } from '@angular/forms';
import { HttpModule } from '@angular/http';
import { RouterModule } from '@angular/router';
import { LocationStrategy, HashLocationStrategy } from '@angular/common';

import { MaterialModule } from '@angular/material';
import { ResponsiveModule, ResponsiveConfig } from 'ng2-responsive';

import { routing } from './app.routing';
import { NavModule } from './nav/nav.module';
import { FormsModule } from './forms/forms.module'

import { AppComponent } from './app.component';
import { HomeComponent } from './home/home.component';
import { ContactComponent } from './contact/contact.component';
import { LoginComponent } from './user/login/login.component';
import { SignUpComponent } from './user/sign-up/sign-up.component';
import { ExecBoardComponent } from './exec-board/exec-board.component';
import { AlumniComponent } from './alumni/alumni.component';
import { DonateComponent } from './donate/donate.component';
import { RecruitmentComponent } from './recruitment/recruitment.component';
import { RecruitmentSignUpComponent } from './recruitment/recruitment-sign-up/recruitment-sign-up.component';

import { EnvService } from './env/env.service';
import { MailchimpService } from './mailchimp/mailchimp.service';
import { AlumniSignUpComponent } from './alumni/alumni-sign-up/alumni-sign-up.component';
import { DonateButtonComponent } from './donate/donate-button/donate-button.component';

 let responsiveConfig = {
    breakPoints: {
            xs: { max: 767 },
            sm: { min: 768, max: 1023 },
            md: { min: 1024, max: 1199 },
            lg: { min: 1200, max: 10000 },
            xl: { min: 10001 }
    },
    debounceTime: 100 // allow to debounce checking timer
 };7

@NgModule({
  declarations: [
    AppComponent,
    HomeComponent,
    ContactComponent,
    LoginComponent,
    SignUpComponent,
    ExecBoardComponent,
    AlumniComponent,
    DonateComponent,
    RecruitmentComponent,
    RecruitmentSignUpComponent,
    AlumniSignUpComponent,
    DonateButtonComponent
  ],
  imports: [
    MaterialModule.forRoot(),
    ResponsiveModule,
    BrowserModule,
    HttpModule,
    RouterModule,
    routing,
    NavModule,
    FormsModule,
  ],
  providers: [ 
    { provide: LocationStrategy, useClass: HashLocationStrategy },
    { provide: ResponsiveConfig, useFactory: () => new ResponsiveConfig(responsiveConfig) },
    MailchimpService,
    EnvService
  ],
  bootstrap: [ AppComponent ],
  schemas: [ CUSTOM_ELEMENTS_SCHEMA ]
})
export class AppModule { }
