import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import { Video } from '../models/video.model';

@Injectable()
export class VideosService {
  private url: string = 'https://localhost:5002/';

  constructor(private http: HttpClient) { }

  public getAll(): Observable<Video[]> {
    return this.http.get<Video[]>(`${this.url}video/get`);
  }

  public get(id: number): Observable<Video> {
    return this.http.get<Video>(`${this.url}video/get/${id}`);
  }
}
