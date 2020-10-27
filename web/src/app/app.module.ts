import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { HttpClientModule } from '@angular/common/http';
import { FormsModule } from '@angular/forms';

import { AppRoutingModule } from './app.routing.module';
import { AppComponent } from './app.component';
import { CardComponent } from './share/card/card.component';

import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { ListComponent } from './list/list.component';
import { PostComponent } from './page/post/post.component';
import { LoadComponent } from './share/load/load.component';
import { MessageComponent } from './share/message/message.component';
import { HomeComponent } from './page/home/home.component';
import { SubjectModule } from './page/subject/subject.module';
import { PostModule } from './page/post/post.module';
@NgModule({
  declarations: [
    AppComponent,
    CardComponent,
    ListComponent,
    LoadComponent,
    HomeComponent,
    MessageComponent,
    
  ],
  imports: [
    BrowserAnimationsModule,
    BrowserModule,
    AppRoutingModule,
    FormsModule,
    SubjectModule,
    PostModule,
    HttpClientModule
  ],
  bootstrap: [AppComponent]
})
export class AppModule {
  
 }
