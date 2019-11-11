import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { AuthService } from '../../services/auth.service';
import { DataService } from 'src/app/services/data.service';
import { User } from 'src/app/interfaces/user.interface';

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

  ngOnInit() {
    this.getCurrentUser();
  }
  getCurrentUser() {
    this.authService.isAuth().subscribe( auth => {
      if (auth) {
        this.dataService.getUser(auth.email).subscribe(
          res => {
            this.currentUser.name = res.name;
            this.currentUser.email = res.email;
            this.currentUser.subscription = res.subscription;
          }
        );
      } else {
        this.router.navigate(['/login']);
      }
    });
  }

}
