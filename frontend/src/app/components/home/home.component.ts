import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { AuthService } from '../../services/auth.service';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
export class HomeComponent implements OnInit {


  constructor(private router: Router, private authService: AuthService) { }

  public isLogged: boolean;

  ngOnInit() {
    this.getCurrentUser();
    if (this.isLogged) {
      this.router.navigate(['/login']);
    }
  }
  getCurrentUser() {
    this.authService.isAuth().subscribe( auth => {
      if (auth) {
        this.isLogged = true;
      } else {
        this.isLogged = false;
      }
    });
  }

}
