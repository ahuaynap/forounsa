import { Component, OnInit } from '@angular/core';
import { DataService } from '../../services/data.service';
import { AuthService } from '../../services/auth.service';
import { Post } from 'src/app/interfaces/post.interface';
import { Route, ActivatedRoute } from '@angular/router';
import { User } from 'src/app/interfaces/user.interface';
import { Like } from 'src/app/interfaces/like.interface';
import { Comment } from 'src/app/interfaces/comment.interface';
import { NgForm } from '@angular/forms';

@Component({
  selector: 'app-post',
  templateUrl: './post.component.html',
  styleUrls: ['./post.component.css']
})
export class PostComponent implements OnInit {

  constructor(private dataService: DataService, private authService: AuthService, private route: ActivatedRoute) { }

  private id = '';
  private currentUser: User;
  private currentLike: Like;
  private comments: Comment[];
  private newComment: Comment = {
    description: ''
  };

  private post: Post = {
    _id : '',
    description: '',
    name: '',
  };

  ngOnInit() {
    this.id = this.route.snapshot.paramMap.get('id');
    this.getPost();
    this.getCurrentUser();
    this.getComments();
  }

  getPost() {
    this.dataService.getPost(this.id).subscribe(
      res => this.post = res
    );
  }

  getComments() {
    this.dataService.getComments(this.id).subscribe(
      res => this.comments = res
    );
  }

  getCurrentUser() {
    this.authService.isAuth().subscribe( auth => {
        this.dataService.getUser(auth.email).subscribe(
          res => {
            this.currentUser = res;
          }
        );
    });
  }

  onSubmit(commentForm: NgForm) {
    this.newComment.userName = this.currentUser.name;
    this.dataService.addComment(this.newComment, this.id, this.currentUser._id).subscribe(
      res => console.log(res),
      error => console.log(error)
    );
    this.resetForm(commentForm);
    this.getComments();
  }

  resetForm(commentForm: NgForm) {
    if (commentForm != null) {
      commentForm.reset();
    }
  }

  makeLike() {
    console.log('ok');
  }

}
