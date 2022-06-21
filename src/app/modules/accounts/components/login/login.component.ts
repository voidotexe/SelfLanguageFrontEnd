import { Component, OnInit } from '@angular/core';
import { FormBuilder, Validators } from '@angular/forms';
import { MatSnackBar } from '@angular/material/snack-bar';
import { Router } from '@angular/router';
import { UserAuth } from 'src/app/models/user-auth.model';
import { SnackBarComponent } from 'src/app/modules/core/components/snack-bar/snack-bar.component';
import { AuthenticationService } from 'src/app/services/authentication.service';
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

  constructor(
    private authenticationService: AuthenticationService,
    private formBuilder: FormBuilder,
    private accountService: AccountService,
    private router: Router,
    private snackBar: MatSnackBar) { }

  login() {
    const account: Account = {
      email: this.accountForm.controls.email.value,
      passwordHash: this.accountForm.controls.password.value
    };

    this.accountService.login(account).subscribe(next => {
      this.authenticationService.authenticate(next);

      this.router.navigateByUrl('');
    }, error => {
      this.snackBar.openFromComponent(SnackBarComponent, {
        duration: 4000,
        data: `Ocorreu um erro! (${error.status})`
      });
    });
  }

  ngOnInit(): void {
  }
}
