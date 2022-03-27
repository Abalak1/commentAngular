import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { FormsModule } from '@angular/forms';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { CommentShellComponent } from './components/comment-shell/comment-shell.component';
import { CommentItemComponent } from './components/comment-item/comment-item.component';
import { ReplyComponent } from './components/reply/reply.component';

@NgModule({
  declarations: [AppComponent, CommentShellComponent, CommentItemComponent, ReplyComponent],
  imports: [BrowserModule, AppRoutingModule, FormsModule],
  providers: [],
  bootstrap: [AppComponent],
})
export class AppModule {}
