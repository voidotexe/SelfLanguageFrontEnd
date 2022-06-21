import { Account } from '../models/account.model';
import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';

@Injectable()
export class AccountService {
  url = 'https://localhost:5001/account/';

  constructor(private http: HttpClient) { }

  signup(account: Account): Observable<any> {
    return this.http.post(`${this.url}signup`, account);
  }

  login(account: Account): Observable<any> {
    return this.http.post(`${this.url}login`, account, { responseType: 'text' });
  }
}
