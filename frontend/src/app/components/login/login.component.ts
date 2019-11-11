import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { AuthService } from 'src/app/services/auth.service';
import { DataService } from 'src/app/services/data.service';
import { User } from 'src/app/interfaces/user.interface';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {

  constructor(private router: Router, private authService: AuthService, private dataService: DataService ) { }

  private user: User = {
    name: '',
    email: ''
  };

  ngOnInit() {
  }

  onLoginGoogle() {
    this.authService.loginGoogleUser()
      .then( res => {
        if (res.additionalUserInfo.isNewUser) {
          this.registerUser(res.user.displayName, res.user.email);
        }
        this.router.navigate(['/']);
      })
      .catch(err => console.log(err));
  }

  registerUser(name: string, email: string) {
    this.user.name = name;
    this.user.email = email;
    this.dataService.addUser(this.user).subscribe(
      res => console.log(res)
    );
  }

}
