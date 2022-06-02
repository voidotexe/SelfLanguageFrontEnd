import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { CreateVideoComponent } from '../videos/components/create-video/create-video.component';

const routes: Routes = [
  {path: 'create', component: CreateVideoComponent}
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class CoreRoutingModule { }
