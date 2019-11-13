import { Component, OnInit } from '@angular/core';
import { DataService } from '../../services/data.service';
import { AuthService } from '../../services/auth.service';
import { User } from 'src/app/interfaces/user.interface';
import { Post } from 'src/app/interfaces/post.interface';

@Component({
  selector: 'app-posts',
  templateUrl: './posts.component.html',
  styleUrls: ['./posts.component.css']
})
export class PostsComponent implements OnInit {

  constructor(private dataService: DataService, private authService: AuthService) { }
  private currentUser: User = {
    name: '',
    email: '',
    subscription: [],
  };
  private posts: Post[];

  ngOnInit() {
    this.getCurrentUser();
  }
  getCurrentUser() {
    this.authService.isAuth().subscribe( auth => {
        this.dataService.getUser(auth.email).subscribe(
          res => {
            this.currentUser = res;
            this.getPosts(this.currentUser._id);
          }
        );
    });
  }
  getPosts(id: string) {
    this.dataService.getPostsUser(id).subscribe(
      res => { this.posts = res; console.log(this.posts); },
      err => console.log(err)
    );
  }
}
