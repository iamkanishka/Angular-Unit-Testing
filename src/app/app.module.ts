import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { StrengthPipe } from './Pipes/Strength/strength.pipe';
import { PostsComponent } from './Componenets/Posts/posts/posts.component';
import { HttpClientModule } from '@angular/common/http';
import { PostComponent } from './Componenets/post/post.component';
import { RouterModule } from '@angular/router';
import { PostDetailComponent } from './Componenets/post-detail/post-detail.component';
import { FormsModule } from '@angular/forms';




@NgModule({
  declarations: [
    AppComponent,
    StrengthPipe,
    PostsComponent,
    PostComponent,
    PostDetailComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    HttpClientModule,
    RouterModule,
    FormsModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
