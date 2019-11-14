import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { AuthService } from '../../services/auth.service';
import { DataService } from 'src/app/services/data.service';
import { User } from 'src/app/interfaces/user.interface';
import { Post } from 'src/app/interfaces/post.interface';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
export class HomeComponent implements OnInit {


  constructor(private router: Router, private authService: AuthService, private dataService: DataService) { }
  private currentUser: User = {
    name: '',
    email: '',
    subscription: [],
  };
  private subs: Post[];

  ngOnInit() {
    this.getCurrentUser();
  }
  getCurrentUser() {
    this.authService.isAuth().subscribe( auth => {
        this.dataService.getUser(auth.email).subscribe(
          res => {
            this.currentUser = res;
            this.getPostSubscription(this.currentUser._id);
          }
        );
    });
  }
  getPostSubscription(id: string) {
    this.dataService.getPostsSubscription(id).subscribe(
      res => { this.subs = res; console.log(this.subs); },
      err => console.log(err)
    );
  }


}
