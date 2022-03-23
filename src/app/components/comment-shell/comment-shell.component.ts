import { Component, OnInit } from '@angular/core';
import { UserComment, User } from 'src/app/types/CommentModel';

import data from '../../../data.json';

@Component({
  selector: 'app-comment-shell',
  templateUrl: './comment-shell.component.html',
  styleUrls: ['./comment-shell.component.scss'],
})
export class CommentShellComponent implements OnInit {
  commentsList: any[] = data.comments;
  currentUser: User = data.currentUser;
  constructor() {}

  ngOnInit(): void {}
}
