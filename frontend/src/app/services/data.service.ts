import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Observable } from 'rxjs/internal/Observable';

@Injectable({
  providedIn: 'root'
})
export class DataService {

  constructor(private httpClient: HttpClient) { }

  getCourses(): Observable<any> {
    return this.httpClient.get<Observable<any>>('http://localhost:3000/course');
  }

  getCourse() {
    return this.httpClient.get( '/');
  }

  getPost() {
    return this.httpClient.get( '/');
  }

  makeLikePost() {

  }

  makeLikeCommnet() {

  }

  postComment() {

  }
}
