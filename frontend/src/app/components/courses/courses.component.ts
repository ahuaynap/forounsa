import { Component, OnInit } from '@angular/core';
import { DataService } from 'src/app/services/data.service';

@Component({
  selector: 'app-courses',
  templateUrl: './courses.component.html',
  styleUrls: ['./courses.component.css']
})
export class CoursesComponent implements OnInit {

  public courses = [];

  constructor( private dataService: DataService) { }

  ngOnInit() {
    this.getCourses();
  }

  getCourses() {
    console.log(this.dataService.getCourses());
  }

}
