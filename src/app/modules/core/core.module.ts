import { NavBarComponent } from './components/nav-bar/nav-bar.component';
import { SnackBarComponent } from './components/snack-bar/snack-bar.component';
import { CoreRoutingModule } from './core-routing.module';
import { CommonModule } from '@angular/common';
import { NgModule } from '@angular/core';
import { MatToolbarModule } from '@angular/material/toolbar';



@NgModule({
  declarations: [NavBarComponent, SnackBarComponent],
  imports: [
    CommonModule,
    MatToolbarModule,
    CoreRoutingModule
  ],
  exports: [NavBarComponent]
})
export class CoreModule { }
