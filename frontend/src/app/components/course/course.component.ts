import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { Course } from 'src/app/interfaces/course.interface';
import { DataService } from 'src/app/services/data.service';
import { Post } from 'src/app/interfaces/post.interface';
import { AngularFireStorage } from '@angular/fire/storage';
import { finalize } from 'rxjs/operators';
import { Observable } from 'rxjs/internal/Observable';
import { NgForm } from '@angular/forms';
import { AuthService } from 'src/app/services/auth.service';
import { User } from 'src/app/interfaces/user.interface';

@Component({
  selector: 'app-course',
  templateUrl: './course.component.html',
  styleUrls: ['./course.component.css']
})
export class CourseComponent implements OnInit {

  constructor(private route: ActivatedRoute, private dataService: DataService,
              private storage: AngularFireStorage, private authService: AuthService) { }

  private id: string;
  private course: Course = {
    description: '', name: '', likes: 0, idCareer: '', prerequisites : [], state: '', views: 0
  };
  private currentUser: User;
  private posts: Post[];
  private newPost: Post = {
    name: '', description: '',
  };
  private file = null;
  private filePath = null;
  uploadPercent: Observable<number>;
  urlImage: Observable<string>;

  ngOnInit() {
    this.id = this.route.snapshot.paramMap.get('id');
    this.getCurrentUser();
    this.getCourse();
  }

  onUpload(e) {
    const idFile = Math.random().toString(36).substring(2);
    this.file = e.target.files[0];
    this.filePath = `upload/${idFile}`;
    const ref = this.storage.ref(this.filePath);
    const task = this.storage.upload(this.filePath, this.file);
    this.uploadPercent = task.percentageChanges();
    task.snapshotChanges().pipe( finalize(() => {
      this.urlImage = ref.getDownloadURL();
    }) ).subscribe();
  }

  getCourse() {
    this.dataService.getCourse(this.id).subscribe(
      res => {
        this.course = res;
        this.getPosts();
      },
      error => console.error()
    );
  }

  getPosts() {
    this.dataService.getPostsCourse(this.id).subscribe(
      res => {
        this.posts = res;
        console.log(this.posts);
      }
    );
  }

  getCurrentUser() {
    this.authService.isAuth().subscribe( auth => {
        this.dataService.getUser(auth.email).subscribe(
          res => {
            this.currentUser = res;
            return true;
          }
        );
    });
  }

  onSubmit(postForm: NgForm) {
    this.newPost.idUser = this.currentUser._id;
    if (this.urlImage) {
      this.urlImage.subscribe(
        res => this.newPost.fileUrl = res
      );
    }
    console.log(this.newPost);
    /*this.dataService.addPost(this.newPost, this.course._id).subscribe(
      res => console.log(res),
      err => console.log(err)
    );*/
    this.getPosts();
  }

  resetForm(postForm: NgForm) {
    if (postForm != null) {
      postForm.reset();
      this.newPost.name = '';
      this.newPost.description = '';
      this.file = null;
      this.filePath = null;
    }
  }

}
