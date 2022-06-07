import { Video } from '../models/video.model';
import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';


@Injectable()
export class VideosService {
  private url: string = 'https://localhost:5002/';

  constructor(private http: HttpClient) { }

  getAll(): Observable<Video[]> {
    return this.http.get<Video[]>(`${this.url}video/get`);
  }

  get(id: number): Observable<Video> {
    return this.http.get<Video>(`${this.url}video/get/${id}`);
  }

  post(video: Video): Observable<any> {
    return this.http.post<any>(`${this.url}video/post`, video);
  }
}
