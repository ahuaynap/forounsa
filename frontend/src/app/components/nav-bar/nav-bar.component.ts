import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-nav-bar',
  templateUrl: './nav-bar.component.html',
  styleUrls: ['./nav-bar.component.css']
})
export class NavBarComponent implements OnInit {
  constructor() {}
  public title = 'Foro Universitario';
  public navigationItems = ['Log In'];

  ngOnInit() {}

  updateNavBar(event) {
    const ruta = event.target.name;

    if (ruta === 'login') {
      this.navigationItems = [
        'Inicio',
        'Cursos',
        'Publicaciones',
        'Mis publicaciones',
        'Logout'
      ];
    } else if (ruta === 'logout') {
      this.navigationItems = ['Log In'];
    }
  }
}
