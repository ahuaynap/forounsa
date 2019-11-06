import { Injectable } from '@angular/core';
import { AngularFireAuth } from '@angular/fire/auth';
import { map } from 'rxjs/operators';
import { auth } from 'firebase/app';
import { Router } from '@angular/router';

@Injectable({
  providedIn: 'root'
})
export class AuthService {

  constructor(private afAuth: AngularFireAuth, private router: Router) { }

  loginGoogleUser() {
    return this.afAuth.auth.signInWithPopup(new auth.GoogleAuthProvider());
   }
  logoutUser() {
    this.afAuth.auth.signOut();
    this.router.navigate(['/login']);
  }
  isAuth() {
    return this.afAuth.authState.pipe(map(aut => aut));
  }

}
