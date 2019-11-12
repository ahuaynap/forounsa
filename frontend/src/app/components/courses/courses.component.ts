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
          'font-size': 9,
          content: 'data(name)',
          'text-wrap': 'wrap',
          'text-max-width': 100,
          'text-valign': 'center',
          'text-halign': 'center',
        }
      }]
    });

  }

  getProduct() {
    this.dataService.getCourses()
      .subscribe(
        res => {
          this.courses = res;
          var nCourses = [0, 0, 0, 0, 0, 0, 0, 0, 0, 0]

          //adding nodes
          this.courses.forEach(course => {
            this.malla.add({
              group: 'nodes',
              data: {
                id: course.idCourse,
                name: course.name
              }/*, position: {
                x: 200 * (course.semester - 1) + 40,
                y: nCourses[course.semester - 1] * 77 + 40
              }*/
            });
            nCourses[course.semester - 1]++;

          });

          //adding edges
          this.courses.forEach(course => {
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

          this.malla.layout({
            name: 'breadthfirst'
          }).run();
        },
        err => console.log(err)
      );


  }


}
