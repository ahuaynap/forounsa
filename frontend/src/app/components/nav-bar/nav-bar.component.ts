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

  constructor(private authService: AuthService, private afAuth: AngularFireAuth, private router: Router) { }

  public isLogged = false;
  public currentuser = '';
  private isAdmin = false;

  ngOnInit() {
    this.getCurrentUser();
  }


  getCurrentUser() {
    this.authService.isAuth().subscribe( auth => {
      if (auth) {
        this.isLogged = true;
        this.currentuser = auth.email;
        this.currentAdmin(auth.email);
      } else {
        this.isLogged = false;
      }
    });
  }

  currentAdmin(email) {
    if (email === 'kbaldarrago@unsa.edu.pe' || email === 'ahuaynap@unsa.edu.pe' || email === 'rvalles@unsa.edu.pe') {
      this.isAdmin = true;
    }
  }

  onLogout() {
    this.authService.logoutUser()
      .then( auth => {
        this.router.navigate(['/login']);
      });
  }

}
