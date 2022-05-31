import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { VideoDetailsComponent } from './video-details/video-details.component';
import { VideosListComponent } from './videos-list/videos-list.component';

const routes: Routes = [
  {path: 'videos', component: VideosListComponent},
  {path: 'video/:id', component: VideoDetailsComponent}
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class VideosRoutingModule { }
