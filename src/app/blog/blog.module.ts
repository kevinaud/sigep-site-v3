import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { MaterialModule } from '@angular/material';

import { BlogRoutingModule } from './blog-routing.module';
import { FormsModule } from '../forms/forms.module';

import { BlogComponent } from './blog.component';
import { BlogHomeComponent } from './blog-home/blog-home.component';
import { AddPostComponent } from './add-post/add-post.component';

import { BlogService } from './blog.service';
import { BlogDetailComponent } from './blog-detail/blog-detail.component';

@NgModule({
  imports: [
    CommonModule,
    MaterialModule,
    BlogRoutingModule,
    FormsModule
  ],
  exports: [

  ],
  declarations: [
    BlogComponent,
    AddPostComponent,
    BlogHomeComponent,
    BlogDetailComponent
  ],
  providers: [
    BlogService
  ]
})
export class BlogModule { }
