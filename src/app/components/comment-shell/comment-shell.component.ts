import { Component, OnInit } from '@angular/core';
import { User, Reply, UserComment } from 'src/app/types/CommentModel';
import { EditText, ScoreChange } from 'src/app/types/EmitterModels';

import data from '../../../data.json';

@Component({
  selector: 'app-comment-shell',
  templateUrl: './comment-shell.component.html',
  styleUrls: ['./comment-shell.component.scss'],
})
export class CommentShellComponent implements OnInit {
  commentsList: any[] = data.comments;
  currentUser: User = data.currentUser;
  nextId = 5;
  newText: any = '';
  constructor() {}

  ngOnInit(): void {}

  handleChangeScore(type: string, index: number) {
    if (type == 'plus') {
      ++this.commentsList[index].score;
      this.sortBasedMainCommentScore();
      return;
    }
    --this.commentsList[index].score;
    this.sortBasedMainCommentScore();
  }

  sortBasedMainCommentScore() {
    this.commentsList.sort((c1, c2) => {
      if (c1.score > c2.score) {
        return -1;
      } else if (c1.score < c2.score) {
        return 1;
      }
      return 0;
    });
  }

  handleReplyScoreChange(data: ScoreChange, index: number) {
    if (data.type == 'plus') {
      ++this.commentsList[index].replies.find((r: Reply) => r.id == data.id)
        .score;
      return;
    }
    --this.commentsList[index].replies.find((r: Reply) => r.id == data.id)
      .score;
  }

  handleOnDelete(id: number) {
    this.commentsList = this.commentsList.filter((c) => c.id != id);
  }

  handleOnReplyDelete(id: number, index: number) {
    this.commentsList[index].replies = this.commentsList[index].replies.filter(
      (c: any) => c.id != id
    );
  }
  addComment(content: UserComment) {
    const comment = {
      id: this.nextId,
      content,
      createdAt: Date.now() - Date.now() + ' ' + 'month ago',
      score: 0,
      user: this.currentUser,
      replies: [],
    };
    this.commentsList.push(comment);
    this.nextId++;
    this.newText = '';
  }
  addCommentReply(content: UserComment) {
    const comment = {
      id: this.nextId,
      content,
      createdAt: Date.now() - Date.now() + ' ' + 'month ago',
      score: 0,
      user: this.currentUser,
      replies: [],
    };
    this.commentsList.push(comment);
    this.nextId++;
    this.newText = '';
  }
  handleOnEdit() {}

  handleSave(data: EditText, index: number) {
    this.commentsList[index].content = data.content;
  }
}
