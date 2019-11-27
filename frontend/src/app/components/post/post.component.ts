import { Component, OnInit } from '@angular/core';
import { DataService } from '../../services/data.service';
import { AuthService } from '../../services/auth.service';
import { Post } from 'src/app/interfaces/post.interface';
import { Route, ActivatedRoute, Router } from '@angular/router';
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

  constructor(private dataService: DataService, private authService: AuthService,
              private route: ActivatedRoute, private router: Router) { }

  private id = '';
  private currentUser: User = {};
  private isUser: boolean;
  private currentLike = false;
  private comments: Comment[];
  private newComment: Comment = {};
  private post: Post = {};

  ngOnInit() {
    this.id = this.route.snapshot.paramMap.get('id');
    this.getPost();
    this.getComments();
  }

  getPost() {
    this.dataService.getPost(this.id).subscribe(
      res => {
        this.post = res;
        this.id = this.post._id;
        this.getCurrentUser();
      }
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
            if (this.currentUser._id === this.post.idUser) {
                this.isUser = true;
            }
            this.getCurrentLike(this.currentUser._id);
          }
        );
    });
  }

  getCurrentLike(idUser) {
    this.dataService.getLikePost(idUser, this.id).subscribe(
      res => this.currentLike = res.state,
      error => console.log(error)
    );
  }

  makeLike() {
    this.dataService.makeLikePost(this.currentUser._id, this.id).subscribe(
      res => {
        this.currentLike = res.state;
        this.getPost();
      }
    );
  }

  onSubmit(commentForm: NgForm) {
    this.newComment.userName = this.currentUser.name;
    this.dataService.addComment(this.newComment, this.id, this.currentUser._id).subscribe(
      res => this.getComments(),
      error => console.log(error)
    );
    this.resetForm(commentForm);
  }

  resetForm(commentForm: NgForm) {
    if (commentForm != null) {
      commentForm.reset();
    }
  }

  deleteComment(id: string) {
    if (confirm('¿Estas seguro de querer eliminar este comentario?')) {
      this.dataService.deleteComment(id).subscribe(
        res => {
          this.getComments();
        }
      );
    }
  }

  deletePost() {
    if (confirm('¿Estas seguro de querer eliminar este Post?')) {
      this.dataService.deletePost(this.post._id).subscribe(
        res => this.router.navigate(['/'])
      );
    }
  }

}
