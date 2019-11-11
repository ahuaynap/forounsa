import { Component, OnInit } from '@angular/core';
import { DataService } from '../../services/data.service';
import { Course } from 'src/app/interfaces/course.inteface';

@Component({
  selector: 'app-courses',
  templateUrl: './courses.component.html',
  styleUrls: ['./courses.component.css']
})
export class CoursesComponent implements OnInit {

  public courses: Course[];

  constructor(private dataService: DataService) { }

  ngOnInit() {
    this.getProduct();
  }

  getProduct() {
    this.dataService.getCourses()
      .subscribe(
        res => {
          this.courses = res;
        },
        err => console.log(err)
      );
  }

}
