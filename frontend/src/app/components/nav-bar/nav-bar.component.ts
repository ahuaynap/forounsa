import { Component, OnInit } from '@angular/core';
import { AuthService } from '../../services/auth.service';
import { AngularFireAuth } from '@angular/fire/auth';
import { Router } from '@angular/router';

@Component({
  selector: 'app-nav-bar',
  templateUrl: './nav-bar.component.html',
  styleUrls: ['./nav-bar.component.css']
})
export class NavBarComponent implements OnInit {
  constructor(private authService: AuthService, private afsAuth: AngularFireAuth, private router: Router) {}
  public title = 'Foro Universitario';
  public navigationItems = ['Log In'];
  public isLogged = true;

  ngOnInit() {
    this.getCurrentUser();
  }

  getCurrentUser() {
    this.authService.isAuth().subscribe( auth => {
      if (auth) {
        console.log('User logged');
        this.isLogged = true;
      } else {
        console.log('Not user logged');
        this.isLogged = false;
      }
    });
  }
  onLogout() {
    this.authService.logoutUser();
    this.router.navigate(['/login']);
  }
}
