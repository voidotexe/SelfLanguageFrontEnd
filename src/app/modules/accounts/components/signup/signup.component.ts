import { Component, OnInit } from '@angular/core';
import { FormBuilder, Validators } from '@angular/forms';
import { Account } from '../../models/account.model';
import { AccountService } from '../../services/account.service';

@Component({
  selector: 'app-signup',
  templateUrl: './signup.component.html',
  styleUrls: ['./signup.component.scss']
})
export class SignupComponent implements OnInit {
  accountForm = this.formBuilder.group({
    userName: ['', Validators.required],
    email: ['', Validators.required],
    password: ['', Validators.required]
  });

  hidePassword = true;

  constructor(private formBuilder: FormBuilder, private accountService: AccountService) { }

  createAccount(): void {
    const account: Account = {
      id: 0,
      userName: this.accountForm.controls.userName.value,
      email: this.accountForm.controls.email.value,
      passwordHash: this.accountForm.controls.password.value,
      createdAt: new Date().toISOString()
    };

    this.accountService.signup(account).subscribe(next => {}, error => {}, () => console.log('OK'));
  }

  ngOnInit(): void {
  }

}
