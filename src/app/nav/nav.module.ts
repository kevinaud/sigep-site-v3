import { NgModule } from '@angular/core';
import { RouterModule } from '@angular/router';
import { BrowserModule } from '@angular/platform-browser';

import { MaterialModule } from '@angular/material'

import { ToolbarComponent } from './toolbar/toolbar.component';
import { SidenavComponent } from './sidenav/sidenav.component';

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
  providers: []
})
export class NavModule { }
