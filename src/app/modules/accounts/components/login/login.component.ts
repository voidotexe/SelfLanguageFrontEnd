import { ParseTreeResult } from '@angular/compiler';
import { Component, OnInit } from '@angular/core';
import { FormBuilder, Validators } from '@angular/forms';
import { MatSnackBar } from '@angular/material/snack-bar';
import { Router } from '@angular/router';
import { SnackBarComponent } from 'src/app/modules/core/components/snack-bar/snack-bar.component';
import { Account } from '../../models/account.model';
import { AccountService } from '../../services/account.service';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.scss']
})
export class LoginComponent implements OnInit {
  accountForm = this.formBuilder.group({
    email: ['', Validators.required],
    password: ['', Validators.required]
  });

  hidePassword = true;

  constructor(private formBuilder: FormBuilder,
    private accountService: AccountService,
    private router: Router,
    private snackBar: MatSnackBar) { }

  login() {
    const account: Account = {
      email: this.accountForm.controls.email.value,
      passwordHash: this.accountForm.controls.password.value
    };

    this.accountService.login(account).subscribe(next => {}, error => {
      this.snackBar.openFromComponent(SnackBarComponent, {
        duration: 4000,
        data: 'Ocorreu um erro!'
      })
    }, () => this.router.navigateByUrl(''));
  }

  ngOnInit(): void {
  }
}
