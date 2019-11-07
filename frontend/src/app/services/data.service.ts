import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class DataService {

  constructor(private httpClient: HttpClient) { }

  getCourses() {
    return this.httpClient.get('http://localhost:3000/course');
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
