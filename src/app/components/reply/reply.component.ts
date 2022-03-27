import { Component, EventEmitter, Input, OnInit, Output } from '@angular/core';
import { Reply, User } from 'src/app/types/CommentModel';
import { ScoreChange } from 'src/app/types/EmitterModels';

@Component({
  selector: 'app-reply',
  templateUrl: './reply.component.html',
  styleUrls: ['./reply.component.scss'],
})
export class ReplyComponent implements OnInit {
  @Input() reply: Reply | undefined;
  @Input() currentUser: User | undefined;
  @Output() onReplyDelete: EventEmitter<number> = new EventEmitter<number>();
  @Output() onReplyScore: EventEmitter<ScoreChange> =
    new EventEmitter<ScoreChange>();
  constructor() {}
  imgSrc = '';
  ngOnInit(): void {
    this.imgSrc = `./assets${this.reply?.user.image.webp.slice(1)}`;
  }

  changeReplyScore(type: string) {
    if (this.reply?.id) {
      this.onReplyScore.emit({ id: this.reply.id, type });
    }
  }
  deleteReply() {
    if (this.reply?.id) {
      this.onReplyDelete.emit(this.reply.id);
    }
  }
}
