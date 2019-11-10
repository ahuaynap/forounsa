import { Component, OnInit } from '@angular/core';
import { DataService } from '../../services/data.service';

@Component({
  selector: 'app-courses',
  templateUrl: './courses.component.html',
  styleUrls: ['./courses.component.css']
})
export class CoursesComponent implements OnInit {

  public courses = [];

  constructor(private dataService: DataService) { }

  ngOnInit() {
    this.getProduct();
  }

  getProduct() {
    this.dataService.getCourses()
      .subscribe(
        res => console.log(res),
        err => console.log(err)
      );
  }

}
