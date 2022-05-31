import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { VideosService } from '../services/videos.service';
import { Video } from '../models/video.model';
import { DomSanitizer } from '@angular/platform-browser';
import { TranscriptionService } from '../services/transcription.service';
import { Transcription } from '../models/transcription.model';
import { SubtitleService } from '../services/subtitle.service';
import { Subtitle } from '../models/subtitle.model';

@Component({
  selector: 'app-video-details',
  templateUrl: './video-details.component.html',
  styleUrls: ['./video-details.component.scss'],
  providers: [SubtitleService, TranscriptionService]
})
export class VideoDetailsComponent implements OnInit {
  public video: Video;
  public transcription: Transcription;
  public subtitle: Subtitle;

  constructor(private subtitleService: SubtitleService,
    private transcriptionService: TranscriptionService,
    private videosService: VideosService,
    private route: ActivatedRoute,
    private sanitizer: DomSanitizer) { }

  private getVideo(id: number): void {
    this.videosService.get(id).subscribe(result => {
      this.video = result;

      const embedId = this.video.link.slice(32);
      this.video.embed = this.sanitizer.bypassSecurityTrustResourceUrl(`https://www.youtube.com/embed/${embedId}`);
    });
  }

  private getTranscription(id: number): void {
    this.transcriptionService.get(id).subscribe(result => this.transcription = result);
  }

  private getSubtitle(id: number): void {
    this.subtitleService.get(id).subscribe(result => this.subtitle = result);
  }

  ngOnInit(): void {
    const id: number = +this.route.snapshot.paramMap.get('id');

    this.getVideo(id);
    this.getTranscription(id);
    this.getSubtitle(id);
  }
}
