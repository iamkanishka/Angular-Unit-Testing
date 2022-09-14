import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { StrengthPipe } from './Pipes/Strength/strength.pipe';
import { PostsComponent } from './Componenets/Posts/posts/posts.component';
import { HttpClientModule } from '@angular/common/http';
import { PostComponent } from './Componenets/post/post.component';
import { RouterModule } from '@angular/router';




@NgModule({
  declarations: [
    AppComponent,
    StrengthPipe,
    PostsComponent,
    PostComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    HttpClientModule,
    RouterModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
