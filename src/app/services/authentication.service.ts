import { Injectable } from '@angular/core';
import { UserAuth } from '../models/user-auth.model';

@Injectable({
  providedIn: 'root'
})
export class AuthenticationService {
  constructor() { }

  authenticate(token: string) {
    UserAuth.isAuthenticated = true;

    if (!localStorage.getItem('token')) localStorage.setItem('token', token);
  }

  isLoggedIn(): boolean {
    return UserAuth.isAuthenticated ? true : false;
  }
}
