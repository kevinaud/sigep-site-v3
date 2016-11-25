import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

import { BlogComponent } from './blog.component';
import { BlogHomeComponent } from './blog-home/blog-home.component';
import { AddPostComponent } from './add-post/add-post.component';
import { BlogDetailComponent } from './blog-detail/blog-detail.component';

const blogRoutes: Routes = [
  {
    path: 'blog',
    component: BlogComponent,
    children: [
      {
        path: '',
        children: [
          { path: '', component: BlogHomeComponent },
          { path: 'add-post', component: AddPostComponent },
          { path: 'post/:id', component: BlogDetailComponent }
        ]
      }
    ]
  }
];

@NgModule({
  imports: [
    RouterModule.forChild(blogRoutes)
  ],
  exports: [
    RouterModule
  ]
})
export class BlogRoutingModule {}