import { BrowserModule } from '@angular/platform-browser';
import { NgModule, CUSTOM_ELEMENTS_SCHEMA } from '@angular/core';
import { ReactiveFormsModule } from '@angular/forms';
import { HttpModule } from '@angular/http';
import { RouterModule } from '@angular/router';
import { LocationStrategy, HashLocationStrategy } from '@angular/common';

import { MaterialModule } from '@angular/material';

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
    RecruitmentSignUpComponent
  ],
  imports: [
    MaterialModule.forRoot(),
    BrowserModule,
    HttpModule,
    RouterModule,
    routing,
    NavModule,
    FormsModule,
  ],
  providers: [ { provide: LocationStrategy, useClass: HashLocationStrategy } ],
  bootstrap: [ AppComponent ],
  schemas: [ CUSTOM_ELEMENTS_SCHEMA ]
})
export class AppModule { }
