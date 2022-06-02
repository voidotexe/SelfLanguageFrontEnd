import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { Subtitle } from '../models/subtitle.model';

@Injectable({
  providedIn: 'root'
})
export class SubtitleService {
  private url: string = 'https://localhost:5002/'

  constructor(private http: HttpClient) { }

  public get(id: number): Observable<Subtitle> {
    return this.http.get<Subtitle>(`${this.url}subtitle/getbyvideoid/${id}`);
  }
}
