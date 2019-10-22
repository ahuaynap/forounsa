import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-cursos',
  templateUrl: './cursos.component.html',
  styleUrls: ['./cursos.component.css']
})
export class CursosComponent implements OnInit {

  cursos: {};

  constructor() {
    this.cursos = [
      {
        id: 1,
        nombre: 'Sistemas Operativos',
        publicaciones: '5'
      },
      {
        id: 2,
        nombre: 'Construccion de Software',
        publicaciones: '10'
      },
      {
        id: 3,
        nombre: 'Metodos Numéricos',
        publicaciones: '1'
      },
      {
        id: 4,
        nombre: 'Fundamentos de Sistemas de Información',
        publicaciones: '7'
      }

    ];
   }

  ngOnInit() {
  }

}
