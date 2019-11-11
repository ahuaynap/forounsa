import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import {Observable} from 'rxjs';
import {map} from 'rxjs/operators';
import { Course } from 'src/app/interfaces/course.inteface';
import { DataService } from 'src/app/services/data.service';
import { Post } from 'src/app/interfaces/post.interface';

@Component({
  selector: 'app-course',
  templateUrl: './course.component.html',
  styleUrls: ['./course.component.css']
})
export class CourseComponent implements OnInit {

  private id: string;
  private course: Course;
  private posts: Post[];
  private newPost = {
    name: '',
    description: ''
  };
  private visibleForm = true;

  constructor(private route: ActivatedRoute, private dataService: DataService) {
      this.id = this.route.snapshot.paramMap.get('id');
      this.getCourse();
   }

  ngOnInit() {
  }

  getCourse() {
    this.dataService.getCourse(this.id).subscribe(
      res => {
        this.course = res;
        console.log(this.course);
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

}
