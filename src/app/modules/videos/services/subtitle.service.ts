import { Subtitle } from '../models/subtitle.model';
import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';

@Injectable()
export class SubtitleService {
  private url: string = 'https://localhost:5002/'

  constructor(private http: HttpClient) { }

  get(id: number): Observable<Subtitle> {
    return this.http.get<Subtitle>(`${this.url}subtitle/getbyvideoid/${id}`);
  }

  post(subtitle: Subtitle): Observable<any> {
    return this.http.post<any>(`${this.url}subtitle/post`, subtitle);
  }
}
