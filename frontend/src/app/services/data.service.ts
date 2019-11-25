import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Observable } from 'rxjs/internal/Observable';
import { Course } from '../interfaces/course.interface';
import { Post } from '../interfaces/post.interface';
import { Comment } from '../interfaces/comment.interface';
import { User } from '../interfaces/user.interface';
import { Notification } from '../interfaces/notification.interface';
import { Like } from '../interfaces/like.interface';
import { Career } from '../interfaces/career.interface';


@Injectable({
  providedIn: 'root'
})
export class DataService {

  BASE_URL = 'http://localhost:3000';

  constructor(private http: HttpClient) { }

  getTop(): Observable<Object> {
    return this.http.get<Object>(`${this.BASE_URL}/topTen`);
  }

  getCareers(): Observable<Career[]> {
    return this.http.get<Career[]>(`${this.BASE_URL}/career`);
  }

  getCareer(id: string): Observable<Career> {
    return this.http.get<Career>(`${this.BASE_URL}/career/${id}`);
  }

  getCourses(): Observable<Course[]> {
    return this.http.get<Course[]>(`${this.BASE_URL}/course`);
  }

  getCourse(id: string): Observable<Course> {
    return this.http.get<Course>(`${this.BASE_URL}/course/${id}`);
  }

  getPostsCourse(idCourse: string): Observable<Post[]> {
    return this.http.get<Post[]>(`${this.BASE_URL}/post/course/${idCourse}`);
  }

  getPostsUser(idUser: string): Observable<Post[]> {
    return this.http.get<Post[]>(`${this.BASE_URL}/post/user/${idUser}`);
  }

  getPostsSubscription(idUser: string): Observable<Post[]> {
    return this.http.get<Post[]>(`${this.BASE_URL}/post/subscription/${idUser}`);
  }

  getPost(id: string): Observable<Post> {
    return this.http.get<Post>(`${this.BASE_URL}/post/${id}`);
  }

  addCareer(career: Career): Observable<Career> {
    return this.http.post<Career>(`${this.BASE_URL}/career`, career);
  }

  addPost(post: Post, idCourse: string): Observable<Post> {
    return this.http.post<Post>(`${this.BASE_URL}/post/${idCourse}`, post);
  }

  updateCareer(id: string, career: Career): Observable<Career> {
    return this.http.put<Career>(`${this.BASE_URL}/career/${id}`, career);
  }

  updatePost(id: string, post: Post): Observable<Post> {
    return this.http.put<Post>(`${this.BASE_URL}/post/${id}`, post);
  }

  deleteCareer(id: string): Observable<Career> {
    return this.http.delete<Career>(`${this.BASE_URL}/career/${id}`);
  }

  deletePost(id: string): Observable<Post> {
    return this.http.delete<Post>(`${this.BASE_URL}/post/${id}`);
  }

  getComments(idPost: string): Observable<Comment[]> {
    return this.http.get<Comment[]>(`${this.BASE_URL}/comment/${idPost}`);
  }

  addComment(comment: Comment, idPost: string, idUser: string): Observable<Comment> {
    return this.http.post<Comment>(`${this.BASE_URL}/comment/${idPost}/${idUser}`, comment);
  }

  updateComment(comment: Comment, id: string): Observable<Comment> {
    return this.http.put<Comment>(`${this.BASE_URL}/comment/${id}`, comment);
  }

  deleteComment(id: string): Observable<Comment> {
    return this.http.delete<Comment>(`${this.BASE_URL}/comment/${id}`);
  }

  getUser(email: string): Observable<User> {
    return this.http.get<User>(`${this.BASE_URL}/user/${email}`);
  }

  getUserById(id: string): Observable<User> {
    return this.http.get<User>(`${this.BASE_URL}/user/id/${id}`);
  }

  addUser(user: User): Observable<User> {
    return this.http.post<User>(`${this.BASE_URL}/user`, user);
  }

  addCourse(idCareer: string, course: Course): Observable<Course> {
    return this.http.post<Course>(`${this.BASE_URL}/course/${idCareer}`, course);
  }

  addSubscription(idUser: string, idCourse: string): Observable<User> {
    return this.http.get<User>(`${this.BASE_URL}/user/subscription/${idUser}/${idCourse}`);
  }

  getNotifications(idUser: string): Observable<Notification[]> {
    return this.http.get<Notification[]>(`${this.BASE_URL}/notification/${idUser}`);
  }

  addNotificationLike(idUser: string, idPost: string): Observable<Notification> {
    return this.http.get<Notification>(`${this.BASE_URL}/notification/like/${idUser}/${idPost}`);
  }

  addNotificationComment(idUser: string, idPost: string): Observable<Notification> {
    return this.http.get<Notification>(`${this.BASE_URL}/notification/comment/${idUser}/${idPost}`);
  }

  deleteCourse(id: string): Observable<Course> {
    return this.http.delete<Course>(`${this.BASE_URL}/course/${id}`);
  }

  updateCourse(id: string, course: Course): Observable<Course> {
    return this.http.put<Course>(`${this.BASE_URL}/course/${id}`, course);
  }

  getLikePost(idUser, idPost): Observable<Like> {
    return this.http.get<Like>(`${this.BASE_URL}/like/post/${idUser}/${idPost}`);
  }

  getLikeComment(idUser, idPost): Observable<Like> {
    return this.http.get<Like>(`${this.BASE_URL}/like/comment/${idUser}/${idPost}`);
  }

  makeLikePost(idUser, idPost): Observable<Like> {
    return this.http.get<Like>(`${this.BASE_URL}/like/post/make/${idUser}/${idPost}`);
  }

  makeLikeComment(idUser, idPost): Observable<Like> {
    return this.http.get<Like>(`${this.BASE_URL}/like/comment/make/${idUser}/${idPost}`);
  }


}
