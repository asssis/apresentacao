import { NewComponent } from './new/new.component';
import { NgModule } from '@angular/core';
import { RouterModule } from '@angular/router';
import { PostComponent } from './post.component';
import { IndexComponent } from './index/index.component';

const postRoutes = [
  {path: '', component: PostComponent, 
  children: [
      {path: 'post/new', component: NewComponent},
      {path: 'post/index', component: IndexComponent},
  ]}
];

@NgModule({
    imports: [RouterModule.forChild(postRoutes)],
    exports: [RouterModule]
})
export class PostRoutingModule {}