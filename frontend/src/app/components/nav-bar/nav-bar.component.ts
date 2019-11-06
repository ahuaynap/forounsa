import { Component, OnInit } from '@angular/core';
import { AuthService } from '../../services/auth.service';
import { AngularFireAuth } from '@angular/fire/auth';

@Component({
  selector: 'app-nav-bar',
  templateUrl: './nav-bar.component.html',
  styleUrls: ['./nav-bar.component.css']
})
export class NavBarComponent implements OnInit {

  constructor(private authService: AuthService, private afAuth: AngularFireAuth) { }

  public isLogged = false;
  public currentuser = '';

  ngOnInit() {
    this.getCurrentUser();
  }


  getCurrentUser() {
    this.authService.isAuth().subscribe( auth => {
      if (auth) {
        this.isLogged = true;
        this.currentuser = auth.email;
      } else {
        this.isLogged = false;
      }
    });
  }

  onLogout() {
    this.authService.logoutUser();
  }

}
