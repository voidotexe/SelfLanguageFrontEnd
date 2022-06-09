import { CreateVideoComponent } from './components/create-video/create-video.component';
import { VideoDetailsComponent } from './components/video-details/video-details.component';
import { VideosListComponent } from './components/videos-list/videos-list.component';
import { SubtitleService } from './services/subtitle.service';
import { TranscriptionService } from './services/transcription.service';
import { VideosService } from './services/videos.service';
import { VideosRoutingModule } from './videos-routing.module';
import { CommonModule } from '@angular/common';
import { HttpClientModule } from '@angular/common/http';
import { NgModule } from '@angular/core';
import { ReactiveFormsModule } from '@angular/forms';
import { MatButtonModule } from '@angular/material/button';
import { MatCardModule } from '@angular/material/card';
import { MatRippleModule } from '@angular/material/core';
import { MatFormFieldModule } from '@angular/material/form-field';
import { MatIconModule } from '@angular/material/icon';
import { MatInputModule } from '@angular/material/input';
import { MatProgressBarModule } from '@angular/material/progress-bar';
import { MatProgressSpinnerModule } from '@angular/material/progress-spinner';
import { MatSelectModule } from '@angular/material/select';
import { MatSnackBarModule } from '@angular/material/snack-bar';

@NgModule({
  declarations: [VideosListComponent, VideoDetailsComponent, CreateVideoComponent],
  imports: [
    CommonModule,
    HttpClientModule,
    MatButtonModule,
    MatCardModule,
    MatFormFieldModule,
    MatIconModule,
    MatInputModule,
    MatProgressBarModule,
    MatProgressSpinnerModule,
    MatRippleModule,
    MatSelectModule,
    MatSnackBarModule,
    ReactiveFormsModule,
    VideosRoutingModule
  ],
  exports: [VideosListComponent],
  providers: [SubtitleService, TranscriptionService, VideosService]
})
export class VideosModule { }
