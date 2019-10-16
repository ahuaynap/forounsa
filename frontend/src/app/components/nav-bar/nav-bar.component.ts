import { Component, OnInit } from "@angular/core";

@Component({
  selector: "app-nav-bar",
  templateUrl: "./nav-bar.component.html",
  styleUrls: ["./nav-bar.component.css"]
})
export class NavBarComponent implements OnInit {
  title = "Foro Universitario";
  navigation_items = ["Log In"];

  constructor() {}

  ngOnInit() {}

  updateNavBar(event) {
    var ruta = event.target.name;

    if (ruta == "login") {
      this.navigation_items = [
        "Inicio",
        "Cursos",
        "Publicaciones",
        "Mis publicaciones",
        "Logout"
      ];
    } else if (ruta == "logout") {
      this.navigation_items = ["Log In"];
    }
  }
}
