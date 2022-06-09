import { Subtitle } from '../../models/subtitle.model';
import { Transcription } from '../../models/transcription.model';
import { Video } from '../../models/video.model';
import { SubtitleService } from '../../services/subtitle.service';
import { TranscriptionService } from '../../services/transcription.service';
import { VideosService } from '../../services/videos.service';
import { Component, OnInit } from '@angular/core';
import { FormBuilder, Validators } from '@angular/forms';
import { MatSnackBar } from '@angular/material/snack-bar';
import { concatMap, tap } from 'rxjs/operators';
import { SnackBarComponent } from 'src/app/modules/core/components/snack-bar/snack-bar.component';
import { HttpErrorResponse } from '@angular/common/http';

@Component({
  selector: 'app-create-video',
  templateUrl: './create-video.component.html',
  styleUrls: ['./create-video.component.scss']
})
export class CreateVideoComponent implements OnInit {
  // Forms

  videoForm = this.formBuilder.group({
    title: ['', Validators.required],
    link: ['', Validators.required],
    language: ['', [
      Validators.required,
      Validators.minLength(2),
      Validators.maxLength(2)
    ]],
    difficulty: ['', Validators.required]
  });
  transcriptionForm = this.formBuilder.group({
    content: ['', [Validators.required]]
  });
  subtitleForm = this.formBuilder.group({
    content: ['', [Validators.required]]
  });

  difficulties: string[] = [
    'Muito fácil',
    'Fácil',
    'Média',
    'Difícil',
    'Muito difícil'
  ];

  formStepNumber: number = 0;
  progressBarValue: number = 0;

  constructor(
    private formBuilder: FormBuilder,
    private snackBar: MatSnackBar,
    private subtitleService: SubtitleService,
    private transcriptionService: TranscriptionService,
    private videoService: VideosService,
  ) { }

  public nextFormStep(): void {
    ++this.formStepNumber;
    this.progressBarValue += 50;
  }

  public previousFormStep (): void {
    --this.formStepNumber;
    this.progressBarValue -= 50;
  }

  createVideo() {
    // Common properties

    const createdBy: string = 'Admin';
    const createdAt: string = new Date().toISOString();
    const videoLanguage: string = this.videoForm.controls.language.value;

    // POST video, transcription and subtitle

    const video: Video = {
      id: 0,
      title: this.videoForm.controls.title.value,
      link: this.videoForm.controls.link.value,
      language: videoLanguage,
      difficulty: this.videoForm.controls.difficulty.value,
      createdBy: createdBy,
      createdAt: createdAt
    };
    const transcription: Transcription = {
      id: 0,
      videoId: 0,
      content: this.transcriptionForm.controls.content.value,
      language: videoLanguage,
      createdBy: createdBy,
      createdAt: createdAt
    };
    const subtitle: Subtitle = {
      id: 0,
      videoId: 0,
      content: this.subtitleForm.controls.content.value,
      language: 'BR',
      createdBy: createdBy,
      createdAt: createdAt
    };

    this.videoService.post(video).pipe(
      tap(video => {
        transcription.videoId = video;
        subtitle.videoId = video;
      }),
      concatMap(() => this.transcriptionService.post(transcription)),
      concatMap(() => this.subtitleService.post(subtitle))
    ).subscribe(next => {}, (error: HttpErrorResponse) => this.snackBar.openFromComponent(SnackBarComponent, {
      duration: 3000,
      data: `Ocorreu um erro! (${error.status})`
    }), () => this.snackBar.openFromComponent(SnackBarComponent, {
      duration: 3000,
      data: 'Vídeo criado com sucesso!'
    }));
  }

  ngOnInit(): void { }
}
