import { Component, OnInit } from '@angular/core';
import { DataService } from 'src/app/services/data.service';
import { cytoscape } from 'cytoscape';
import { Course } from 'src/app/interfaces/course.interface';

declare var cytoscape: any;

@Component({
  selector: 'app-courses',
  templateUrl: './courses.component.html',
  styleUrls: ['./courses.component.css']
})

export class CoursesComponent implements OnInit {

  public courses: Course[];
  public malla: any;


  constructor(private dataService: DataService) { }

  ngOnInit() {
    this.getProduct();
    this.malla = cytoscape({
      container: document.getElementById('malla'),
      style: [{
        selector: 'edge',
        style: {
          width: 2,
          'curve-style': 'bezier',
          'target-arrow-color': 'black',
          'target-arrow-shape': 'vee',
          'target-arrow-fill': 'filled'
        }
      }, {
        selector: 'node',
        style: {
          width: '100px',
          height: '50px',
          shape: 'round-rectangle',
          'border-color': 'green',
          'border-width': '1px',
          'background-color': 'white',
          content: 'data(name)',
          'text-wrap': 'wrap',
          'text-valign': 'center',
          'text-halign': 'center',
        }
      }]
    });

    this.malla.layout({
      name: 'random'
    }).run();

  }


  /*getCourses() {
    this.dataService.getCourses().subscribe((courses) => {

    });
  }*/

  getProduct() {
    this.dataService.getCourses()
      .subscribe(
        res => {
          this.courses = res;

          //adding nodes
          this.courses.forEach(course => {
            this.malla.add({
              group: 'nodes',
              data: {
                id: course.idCourse,
                name: course.name
              }
            });

            if (course.idPrerequisite) {
              if (course.idPrerequisite[0] != "") {
                course.idPrerequisite.forEach(prerequisite => {
                  this.malla.add({
                    group: 'edges',
                    data: {
                      id: prerequisite + "-" + course.idCourse,
                      source: prerequisite,
                      target: course.idCourse
                    }
                  })
                });
              }
            }
          })



        },
        err => console.log(err)
      );
  }


}
