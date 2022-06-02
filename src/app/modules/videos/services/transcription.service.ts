import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { Transcription } from '../models/transcription.model';

@Injectable()
export class TranscriptionService {
  private url: string = 'https://localhost:5002/'

  constructor(private http: HttpClient) { }

  public get(id: number): Observable<Transcription> {
    return this.http.get<Transcription>(`${this.url}transcription/getbyvideoid/${id}`);
  }
}
