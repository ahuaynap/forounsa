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
          var nCourses = [0, 0, 0, 0, 0, 0, 0, 0, 0, 0];
          var nCoursesT = [7, 6, 8, 7, 6, 6, 7, 8, 9, 7];

          //adding nodes
          this.courses.forEach(course => {
            this.malla.add({
              group: 'nodes',
              data: {
                id: course.idCourse,
                name: course.name,
                href: "/course/" + course._id
              }, position: {
                x: nCourses[course.semester - 1] * (1100 / nCoursesT[course.semester - 1]) + ((10 - nCoursesT[course.semester - 1]) * 28),
                y: 130 * (course.semester - 1) + 60
              }
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
                      target: course.idCourse,
                    }
                  })
                });
              }
            }
          })

          this.malla.on('tap', 'node', (evt) => {
            var node = evt.target;
            console.log(node.data().href);
            window.location.href = node.data().href + '/';
          });

        },
        err => console.log(err)
      );


  }


}
