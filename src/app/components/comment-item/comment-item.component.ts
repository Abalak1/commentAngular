import { Component, EventEmitter, Input, OnInit, Output } from '@angular/core';
import { UserComment, User } from 'src/app/types/CommentModel';
import { EditText, ScoreChange } from 'src/app/types/EmitterModels';

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
  @Output() onSave: EventEmitter<EditText> = new EventEmitter<EditText>();
  @Output() onReplyDelete: EventEmitter<number> = new EventEmitter<number>();
  @Output() onReplyComment: EventEmitter<void> = new EventEmitter<void>();

  @Output() onReplyScoreChange: EventEmitter<ScoreChange> =
    new EventEmitter<ScoreChange>();

  imgSrc = '';
  replyText = '';
  editingText: string | undefined;
  isEditing: boolean = false;
  constructor() {}

  ngOnInit(): void {
    this.imgSrc = `./assets${this.comment?.user.image.webp.slice(1)}`;
    this.editingText = this.comment?.content;
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

  enableEdit() {
    this.isEditing = true;
  }
  save() {
    if (this.comment?.id) {
      this.isEditing = false;
      this.onSave.emit({ id: this.comment.id, content: this.editingText });
    }
  }
}
