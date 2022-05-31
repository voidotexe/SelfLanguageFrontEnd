import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { VideosRoutingModule } from './videos-routing.module';
import { VideosListComponent } from './videos-list/videos-list.component';
import { VideoDetailsComponent } from './video-details/video-details.component';
import { VideosService } from './services/videos.service';
import { HttpClientModule } from '@angular/common/http';
import { MatIconModule } from '@angular/material/icon';
import { MatCardModule } from '@angular/material/card';
import { MatProgressSpinnerModule } from '@angular/material/progress-spinner';
import { MatButtonModule } from '@angular/material/button';

@NgModule({
  declarations: [VideosListComponent, VideoDetailsComponent],
  imports: [
    CommonModule,
    HttpClientModule,
    MatCardModule,
    MatIconModule,
    MatButtonModule,
    MatProgressSpinnerModule,
    VideosRoutingModule
  ],
  exports: [VideosListComponent],
  providers: [VideosService]
})
export class VideosModule { }
