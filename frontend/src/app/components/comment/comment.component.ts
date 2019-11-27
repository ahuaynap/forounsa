import { Component, OnInit, Input, Output, EventEmitter } from '@angular/core';
import { Comment } from '../../interfaces/comment.interface';
import { DataService } from 'src/app/services/data.service';
import { AuthService } from 'src/app/services/auth.service';
import { User } from 'src/app/interfaces/user.interface';

@Component({
  selector: 'app-comment',
  templateUrl: './comment.component.html',
  styleUrls: ['./comment.component.css']
})
export class CommentComponent implements OnInit {

  constructor(private dataService: DataService, private authService: AuthService) { }

  @Input() comment: Comment;
  @Output() delete = new EventEmitter<string>();

  private thisComment: Comment = {};
  private isUser: boolean;
  private currentUser: User;

  ngOnInit() {
    this.getUserName();
  }

  getUserName() {
    this.dataService.getUserById(this.comment.idUser).subscribe(
      data => {
        this.thisComment._id = this.comment._id;
        this.thisComment.description = this.comment.description;
        this.thisComment.userName = data.name;
        this.getCurrentUser();
      }
    );
  }

  getCurrentUser() {
    this.authService.isAuth().subscribe( auth => {
        this.dataService.getUser(auth.email).subscribe(
          res => {
            this.currentUser = res;
            if (this.currentUser._id === this.comment.idUser) {
              this.isUser = true;
            }
          }
        );
    });
  }

  deleteComment(id: string) {
    this.delete.emit(id);
  }

}
