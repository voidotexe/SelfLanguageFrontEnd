import { Transcription } from '../models/transcription.model';
import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';

@Injectable()
export class TranscriptionService {
  private url: string = 'https://localhost:5002/'

  constructor(private http: HttpClient) { }

  get(id: number): Observable<Transcription> {
    return this.http.get<Transcription>(`${this.url}transcription/getbyvideoid/${id}`);
  }

  post(transcription: Transcription): Observable<any> {
    return this.http.post<any>(`${this.url}transcription/post`, transcription);
  }
}
