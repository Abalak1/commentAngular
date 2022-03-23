import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss'],
})
export class AppComponent {
  // title = 'comment';
  // comments = data.comments;
  // currentUser = data.currentUser;
  // newText = '';
  // replyText = '';
  // nextId = 5;
  // changeScore(index: number, inc: number) {
  //   this.comments[index].score += inc;
  //   this.comments.sort((c1, c2) => {
  //     if (c1.score > c2.score) {
  //       return -1;
  //     } else if (c1.score < c2.score) {
  //       return 1;
  //     }
  //     return 0;
  //   });
  // }
  // changeScoreReply(commentIndex: number, replyIndex: number, inc: number) {
  //   this.comments[commentIndex].replies[replyIndex].score += inc;
  //   this.comments[commentIndex].replies.sort((c1, c2) => {
  //     if (c1.score > c2.score) {
  //       return -1;
  //     } else if (c1.score < c2.score) {
  //       return 1;
  //     }
  //     return 0;
  //   });
  // }
  // addComment(content: any) {
  //   const comment = {
  //     id: this.nextId,
  //     content,
  //     createdAt: Date.now().toString(),
  //     score: 0,
  //     user: this.currentUser,
  //     replies: [],
  //   };
  //   this.comments.push(comment);
  //   this.nextId++;
  // }
  // removeComment(id: number) {
  //   this.comments = this.comments.filter((c) => c.id != id);
  // }
  // addReply(commentIndex: number, content: any) {
  //   const reply: any = {
  //     id: this.nextId,
  //     content,
  //     createdAt: Date.now().toString(),
  //     score: 0,
  //     user: this.currentUser,
  //     replies: [],
  //     replyingTo: this.comments[commentIndex].user,
  //   };
  //   this.comments[commentIndex].replies.push(reply);
  //   this.nextId++;
  // }
}
