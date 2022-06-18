import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { LoginComponent } from '../accounts/components/login/login.component';
import { SignupComponent } from '../accounts/components/signup/signup.component';
import { CreateVideoComponent } from '../videos/components/create-video/create-video.component';

const routes: Routes = [
  {path: 'create', component: CreateVideoComponent},
  {path: 'signup', component: SignupComponent},
  {path: 'login', component: LoginComponent}
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class CoreRoutingModule { }
