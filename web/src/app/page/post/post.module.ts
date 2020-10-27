import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';


import { PostComponent } from './post.component';
import { NewComponent } from './new/new.component';
import { PostRoutingModule } from './post.routing.module';



@NgModule({
  declarations: [
   PostComponent,
   NewComponent
  ],
  imports: [
    CommonModule,
    FormsModule,
    PostRoutingModule
  ]
})
export class PostModule { }
