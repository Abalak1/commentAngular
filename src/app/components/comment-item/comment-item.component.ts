import { Component, Input, OnInit } from '@angular/core';
import { UserComment, User } from 'src/app/types/CommentModel';

@Component({
  selector: 'app-comment-item',
  templateUrl: './comment-item.component.html',
  styleUrls: ['./comment-item.component.scss'],
})
export class CommentItemComponent implements OnInit {
  @Input() comment: UserComment | undefined;
  @Input() currentUser: User | undefined;
  constructor() {}

  ngOnInit(): void {}
  replyText = '';
}
