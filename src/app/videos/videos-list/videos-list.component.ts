import { Component, OnInit } from '@angular/core';
import { Video } from '../models/video.model';
import { VideosService } from '../services/videos.service';

@Component({
  selector: 'app-videos-list',
  templateUrl: './videos-list.component.html',
  styleUrls: ['./videos-list.component.scss']
})
export class VideosListComponent implements OnInit {
  public videos: Video[]
  public isLoading: boolean = true;
  private loadingVariations: string[] = ['Carregando', 'Loading', 'Cargando', 'Charge', 'Caricando'];
  private loadingIndex: number = 0;

  constructor(private videosService: VideosService) { }

  private changeLoadingText() {
    window.addEventListener('load', () => {
      setInterval(() => {
        if (!this.isLoading) return null;

        if (this.loadingIndex > 4) this.loadingIndex = 0;

        document.getElementById('loading-text').innerText = `${this.loadingVariations[this.loadingIndex]}...`;

        ++this.loadingIndex;
      }, 2000);
    });
  }

  private getVideos(): void {
    this.videosService.getAll().subscribe((result: Video[]) => {
      this.videos = result;

      this.videos.forEach(element => {
        let thumbnailId = element.link.slice(32);

        element.thumbnail = `https://img.youtube.com/vi/${thumbnailId}/hqdefault.jpg`;
      });

      this.isLoading = false;
    });
  }

  ngOnInit(): void {
    this.loadingIndex = 0;

    this.changeLoadingText();

    this.getVideos();
  }
}
