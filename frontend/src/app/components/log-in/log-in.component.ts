import { Component, OnInit } from '@angular/core';
import { AuthService } from '../../services/auth.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-log-in',
  templateUrl: './log-in.component.html',
  styleUrls: ['./log-in.component.css']
})
export class LogInComponent implements OnInit {
  constructor(private authService: AuthService, private router: Router) {}

  ngOnInit() {}

  onLoginGoogle(): void {
    this.authService.loginGoogleUser()
      .then((res) => {
        console.log(res);
        this.router.navigate(['/']);
      })
      .catch(err => console.error());
  }

  onLogout() {
    this.authService.logoutUser();
  }

}
