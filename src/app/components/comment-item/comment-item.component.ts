import { Component, EventEmitter, Input, OnInit, Output } from '@angular/core';
import { UserComment, User } from 'src/app/types/CommentModel';
import { ScoreChange } from 'src/app/types/EmitterModels';

@Component({
  selector: 'app-comment-item',
  templateUrl: './comment-item.component.html',
  styleUrls: ['./comment-item.component.scss'],
})
export class CommentItemComponent implements OnInit {
  @Input() comment: UserComment | undefined;
  @Input() currentUser: User | undefined;
  @Output() onChangeScore: EventEmitter<string> = new EventEmitter<string>();
  @Output() onDelete: EventEmitter<void> = new EventEmitter<void>();
  @Output() onEdit: EventEmitter<string> = new EventEmitter<string>();
  @Output() onReplyDelete: EventEmitter<number> = new EventEmitter<number>();
  @Output() onReplyComment: EventEmitter<void> = new EventEmitter<void>();
  @Output() onReplyScoreChange: EventEmitter<ScoreChange> =
    new EventEmitter<ScoreChange>();

  imgSrc = '';
  replyText = '';
  constructor() {}

  ngOnInit(): void {
    this.imgSrc = `./assets${this.comment?.user.image.webp.slice(1)}`;
  }

  changeScore(type: string) {
    if (this.comment?.id) {
      this.onChangeScore.emit(type);
    }
  }

  delete() {
    if (this.comment?.id) {
      this.onDelete.emit();
    }
  }
  edit() {
    if (this.comment?.id) {
      this.onEdit.emit(this.comment.content);
    }
  }

  handleOnReplyScore(data: ScoreChange) {
    if (this.comment?.id) this.onReplyScoreChange.emit(data);
  }

  handleDeleteReply(data: number) {
    if (this.comment?.id) {
      this.onReplyDelete.emit(data);
    }
  }

  handleReplyComment() {
    if (this.comment?.id) this.onReplyComment.emit();
  }

  editText() {}
}
