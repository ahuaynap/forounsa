import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Observable } from 'rxjs';
import { Course } from '../interfaces/course.interface';

@Injectable({
  providedIn: 'root'
})
export class DataService {

  constructor(private httpClient: HttpClient) { }

  getCourses(): Observable<Course> {
    return this.httpClient.get<Course>('http://localhost:3000/course');
  }

  getCourse() {
    return this.httpClient.get('/');
  }

  getPost() {
    return this.httpClient.get('/');
  }

  makeLikePost() {

  }

  makeLikeCommnet() {

  }

  postComment() {

  }
}
