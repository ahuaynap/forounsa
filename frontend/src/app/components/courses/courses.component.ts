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
      elements: [{
        data: {
          id: 'a',
          name: 'Sistemas'
        }
      }, {
        data: {
          id: 'b',
          name: 'Operativos'
        }
      }, {
        data: {
          id: 'ab',
          source: 'a',
          target: 'b'
        }
      }
      ], style: [{
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


  getCourses() {
    this.dataService.getCourses().subscribe((courses) => {

    });
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
