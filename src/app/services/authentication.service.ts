import { Injectable } from '@angular/core';
import { Router } from '@angular/router';
import { UserAuth } from '../models/user-auth.model';

@Injectable({
  providedIn: 'root'
})
export class AuthenticationService {
  constructor(private router: Router) { }

  authenticate(token: string) {
    UserAuth.isAuthenticated = true;

    if (!localStorage.getItem('token')) localStorage.setItem('token', token);
  }

  isLoggedIn(): boolean {
    return UserAuth.isAuthenticated ? true : false;
  }

  logout() {
    if (localStorage.getItem('token')) localStorage.removeItem('token');
    UserAuth.isAuthenticated = false;

    this.router.navigateByUrl('login');
  }
}
