import { Component, OnInit, ViewChild } from '@angular/core';
import { MatProgressBar } from '@angular/material/progress-bar';

@Component({
  selector: 'app-create-video',
  templateUrl: './create-video.component.html',
  styleUrls: ['./create-video.component.scss']
})
export class CreateVideoComponent implements OnInit {
  public difficulties: string[] = [
    'Muito fácil',
    'Fácil',
    'Média',
    'Difícil',
    'Muito difícil'
  ];
  public formStepNumber: number = 0;
  public progressBarValue: number = 0;

  public nextFormStep(): void {
    ++this.formStepNumber;
    this.progressBarValue += 50;
  }

  public previousFormStep (): void {
    --this.formStepNumber;
    this.progressBarValue -= 50;
  }

  constructor() { }

  ngOnInit(): void { }
}
