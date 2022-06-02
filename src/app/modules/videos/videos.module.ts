import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { VideosRoutingModule } from './videos-routing.module';
import { VideosListComponent } from './components/videos-list/videos-list.component';
import { VideoDetailsComponent } from './components/video-details/video-details.component';
import { VideosService } from './services/videos.service';
import { HttpClientModule } from '@angular/common/http';
import { MatIconModule } from '@angular/material/icon';
import { MatCardModule } from '@angular/material/card';
import { MatProgressSpinnerModule } from '@angular/material/progress-spinner';
import { MatButtonModule } from '@angular/material/button';
import { CreateVideoComponent } from './components/create-video/create-video.component';
import { MatFormFieldModule } from '@angular/material/form-field';
import { MatInput, MatInputModule } from '@angular/material/input';
import {MatSelectModule} from '@angular/material/select';
import { MatRippleModule } from '@angular/material/core';
import {MatProgressBarModule} from '@angular/material/progress-bar';

@NgModule({
  declarations: [VideosListComponent, VideoDetailsComponent, CreateVideoComponent],
  imports: [
    CommonModule,
    HttpClientModule,
    MatCardModule,
    MatIconModule,
    MatButtonModule,
    MatFormFieldModule,
    MatInputModule,
    MatProgressBarModule,
    MatProgressSpinnerModule,
    MatRippleModule,
    MatSelectModule,
    VideosRoutingModule
  ],
  exports: [VideosListComponent],
  providers: [VideosService]
})
export class VideosModule { }
