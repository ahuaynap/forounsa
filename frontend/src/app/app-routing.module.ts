import { NgModule } from "@angular/core";
import { Routes, RouterModule } from "@angular/router";
import { CursosComponent } from "./components/cursos/cursos.component";
import { PublicacionesComponent } from "./components/publicaciones/publicaciones.component";
import { LogInComponent } from "./components/log-in/log-in.component";

const routes: Routes = [
  {
    path: "cursos",
    component: CursosComponent
  },
  {
    path: "publicaciones",
    component: PublicacionesComponent
  },
  {
    path: "login",
    component: LogInComponent
  }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule {}
