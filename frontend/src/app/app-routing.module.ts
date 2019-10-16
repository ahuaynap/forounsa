import { NgModule } from "@angular/core";
import { Routes, RouterModule } from "@angular/router";
import { CursosComponent } from "./components/cursos/cursos.component";
import { PublicacionesComponent } from "./components/publicaciones/publicaciones.component";
import { LogInComponent } from "./components/log-in/log-in.component";
import { LogoutComponent } from "./components/logout/logout.component";
import { InicioComponent } from "./components/inicio/inicio.component";

const routes: Routes = [
  { path: "inicio", component: InicioComponent },
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
  },
  { path: "logout", component: LogoutComponent }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule {}
